// GET /api/league?week=YYYY-MM-DD&tier=0   (Authorization: Bearer <the learner's sign-in token>)
//
// One league table for everyone in it (owner, 2026-10-26). The table is the same for
// every learner in a tier, but each learner's app used to read all of it (and each
// member's leaderboard entry) from Firebase: hundreds of reads per look, which used up
// the free plan's daily reads. The server builds it once and keeps it for a few
// minutes for everyone (src/data/leagues.ts falls back to reading Firebase itself if
// this is not reachable). Same data any signed-in learner can already read.
import { createRemoteJWKSet, jwtVerify } from 'jose';

import { adminToken, serviceAccount } from './_admin.mjs';
import { restAdmin } from './_admin-rest.mjs';
import { firestore, tierTable } from './_league-store.mjs';
import { leagueWeek } from './_push-logic.mjs';

const PROJECT = 'grate-apex';
const liveAccount = serviceAccount('LIVE_QUIZ_FIREBASE_SERVICE_ACCOUNT');
const liveAdmin = liveAccount ? restAdmin(liveAccount) : null;
const KEYS = createRemoteJWKSet(new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'));
const LIVE_MS = 10 * 60_000; // this week's table: kept 10 minutes
const FINISHED_MS = 60 * 60_000; // a finished week no longer changes much
const cache = new Map(); // `${week}:${tier}` → { at, ttl, rows: Promise }
let failoverState = { checkedAt: 0, active: false };

async function liveFailoverActive() {
  if (!liveAdmin) return false;
  if (failoverState.active) return true;
  if (Date.now() - failoverState.checkedAt < 30_000) return false;
  failoverState.checkedAt = Date.now();
  try {
    failoverState.active = (await liveAdmin.db.doc('systemStatus/database').get()).data?.()?.failover === true;
  } catch {
    return false;
  }
  return failoverState.active;
}

async function activateLiveFailover(reason) {
  if (!liveAdmin) return;
  await liveAdmin.db.doc('systemStatus/database').set({ failover: true, reason, activatedAt: Date.now(), activatedBy: 'league-api' });
  failoverState = { checkedAt: Date.now(), active: true };
}

async function secondaryTableRows(week, tier) {
  if (!liveAdmin) throw new Error('The Live project service account is not configured.');
  const table = (await liveAdmin.db.doc(`leagueTables/${week}_${tier}`).get()).data?.();
  const rows = table?.rows;
  if (!rows || typeof rows !== 'object') return [];
  return Object.entries(rows).map(([userId, row]) => ({
    userId,
    username: typeof row?.username === 'string' ? row.username : null,
    weeklyXp: Math.max(0, Number(row?.weeklyXp) || 0),
  }));
}

async function mirrorTableRows(week, tier, rows) {
  if (!liveAdmin || !rows.length) return;
  const ref = liveAdmin.db.doc(`leagueTables/${week}_${tier}`);
  const existing = await ref.get();
  const merged = { ...(existing.data?.()?.rows ?? {}) };
  for (const row of rows) merged[row.userId] = { username: row.username, weeklyXp: row.weeklyXp, at: Date.now() };
  await ref.set({ week, tier, rows: merged });
  await Promise.all(rows.flatMap((row) => row.league && row.userId ? [
    liveAdmin.db.doc(`leagueEntries/${row.userId}`).set({ username: row.username, league: row.league, updatedAt: Date.now() }),
  ] : []));
}

function isQuotaError(error) {
  return /429|RESOURCE_EXHAUSTED|quota exceeded/i.test(String(error?.message ?? error));
}

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');
  if (req.method !== 'GET') return res.status(405).json({ error: 'GET only.' });
  const account = serviceAccount();
  if (!account) return res.status(503).json({ error: 'Not set up.', code: 'not-configured' });
  const token = String(req.headers.authorization ?? '').replace(/^Bearer\s+/i, '');
  try {
    await jwtVerify(token, KEYS, { issuer: `https://securetoken.google.com/${PROJECT}`, audience: PROJECT });
  } catch {
    return res.status(401).json({ error: 'Please sign in again.', code: 'auth' });
  }
  const week = String(req.query?.week ?? '');
  const tier = Number(req.query?.tier);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(week) || !Number.isInteger(tier) || tier < 0 || tier > 9) return res.status(400).json({ error: 'Bad league.' });

  if (await liveFailoverActive()) {
    try {
      const rows = await secondaryTableRows(week, tier);
      return res.status(200).json({ week, tier, at: Date.now(), rows, source: 'grate-apex-live' });
    } catch (error) {
      console.error('Live league backup failed:', error);
      return res.status(502).json({ error: 'The live league backup could not be read.', code: 'backup-unavailable' });
    }
  }

  const key = `${week}:${tier}`;
  const now = Date.now();
  let entry = cache.get(key);
  if (!entry || now - entry.at > entry.ttl) {
    const ttl = week < leagueWeek(now) ? FINISHED_MS : LIVE_MS;
    entry = { at: now, ttl, rows: adminToken(account).then(async (admin) => {
      const rows = await tierTable(firestore(admin), week, tier);
      await mirrorTableRows(week, tier, rows).catch((error) => console.warn('Could not refresh the Live project league backup:', error));
      return rows;
    }) };
    cache.set(key, entry);
    if (cache.size > 200) cache.delete(cache.keys().next().value);
    entry.rows.catch(() => { if (cache.get(key) === entry) cache.delete(key); });
  }
  try {
    const rows = await entry.rows;
    return res.status(200).json({ week, tier, at: entry.at, rows: rows.map(({ league: _league, ...row }) => row) });
  } catch (error) {
    if (isQuotaError(error) && liveAdmin) {
      try {
        await activateLiveFailover('primary-firestore-quota-exceeded');
        const rows = await secondaryTableRows(week, tier);
        return res.status(200).json({ week, tier, at: Date.now(), rows, source: 'grate-apex-live' });
      } catch (fallbackError) {
        console.error('Live league failover failed:', fallbackError);
      }
    }
    console.error('League table failed:', error);
    return res.status(502).json({ error: 'The league could not be read.', code: 'upstream' });
  }
}
