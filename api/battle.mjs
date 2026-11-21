// XP battles: the server referee (owner, 2026-10-26: "no score fakes"). The app sends
// every action here with the learner's sign-in token; server/battle-referee.mjs marks
// answers against keys only this server can read and writes the room both players watch.
//
//   POST /api/battle  { action: 'create' | 'accept' | 'decline' | 'ready' | 'answer' | 'leave' | 'get' | 'mine', ... }
//
// Needs the Vercel setting FIREBASE_SERVICE_ACCOUNT (already there for push, reminders and
// account deletion). The questions come from this deployment's own public/battle-bank/*.json
// (built by scripts/build-battle-bank.mjs). Rules: battleRooms, battleKeys, battleStats in firestore.rules.
import { BattleError, handleBattle } from '../server/battle-referee.mjs';
import { restAdmin } from './_admin-rest.mjs';
import { serviceAccount } from './_admin.mjs';
import { handleLiveQuiz } from './_live-quiz.mjs';

const banks = new Map(); // course -> { at, bank }
const BANK_REUSE_MS = 10 * 60_000;
const keys = new Map(); // room -> answers (they never change, so one read per room per server instance)
const MIRROR_AT = '_battleMirrorAt';
let failoverStatus = { checkedAt: 0, active: false };
let lastMirrorAt = 0;

function nextMirrorAt() {
  lastMirrorAt = Math.max(Date.now(), lastMirrorAt + 1);
  return lastMirrorAt;
}

function quotaError(error) {
  return /429|RESOURCE_EXHAUSTED|quota exceeded/i.test(String(error?.message ?? error));
}

function withoutMirrorAt(value) {
  if (!value || typeof value !== 'object') return value;
  const { [MIRROR_AT]: _ignored, ...clean } = value;
  return clean;
}

async function mirrorDocument(db, path, value, at = nextMirrorAt()) {
  if (!db || !value) return;
  try {
    const ref = db.doc(path);
    const existing = await ref.get();
    if (Number(existing.data?.()?.[MIRROR_AT]) >= at) return;
    await ref.set({ ...value, [MIRROR_AT]: at });
  } catch (error) {
    console.warn(`Could not mirror ${path} to GrAte Apex Live:`, error);
  }
}

async function syncBattleProfile(primaryDb, liveDb, uid) {
  const [profile, blocks] = await Promise.all([
    primaryDb.doc(`users/${uid}`).get(),
    primaryDb.collection('blocks').where('blocker', '==', uid).get(),
  ]);
  const username = profile.data?.()?.username;
  const blocked = [...new Set(blocks.docs.map((item) => String(item.data()?.blocked ?? '')).filter((id) => /^[A-Za-z0-9]{6,64}$/.test(id)))].slice(0, 200);
  const saved = { username: typeof username === 'string' ? username : null, blocked, updatedAt: Date.now() };
  await liveDb.doc(`battleProfiles/${uid}`).set(saved);
  return saved;
}

async function readLiveFailover(liveAdmin) {
  if (!liveAdmin) return false;
  if (failoverStatus.active) return true;
  if (Date.now() - failoverStatus.checkedAt < 10_000) return false;
  failoverStatus.checkedAt = Date.now();
  try {
    failoverStatus.active = (await liveAdmin.db.doc('systemStatus/database').get()).data?.()?.failover === true;
  } catch {
    return false;
  }
  return failoverStatus.active;
}

async function activateLiveFailover(liveAdmin, reason) {
  if (!liveAdmin) return false;
  await liveAdmin.db.doc('systemStatus/database').set({ failover: true, reason, activatedAt: Date.now(), activatedBy: 'battle-api' });
  failoverStatus = { checkedAt: Date.now(), active: true };
  return true;
}

function origin(req) {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || (String(host).startsWith('localhost') ? 'http' : 'https');
  return host ? `${proto}://${host}` : 'https://grateapex.vercel.app';
}

async function loadBank(base, course) {
  const hit = banks.get(course);
  if (hit && Date.now() - hit.at < BANK_REUSE_MS) return hit.bank;
  const response = await fetch(`${base}/battle-bank/${encodeURIComponent(course)}.json`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Battle bank ${course}: ${response.status}`);
  const bank = await response.json();
  banks.set(course, { at: Date.now(), bank });
  return bank;
}

// Best-effort brake against a client calling again and again (per server instance).
const recent = new Map();
function tooMany(uid) {
  const now = Date.now();
  const list = (recent.get(uid) ?? []).filter((at) => now - at < 10_000);
  list.push(now);
  recent.set(uid, list);
  if (recent.size > 2000) recent.clear();
  return list.length > 40;
}

/** The referee's store: Firestore through the service account. */
function firestoreStore(db, mirrorDb = null) {
  return {
    async getRoom(id) {
      const snap = await db.doc(`battleRooms/${id}`).get();
      if (!snap.exists) return null;
      const stored = snap.data();
      const sourceAt = Number(stored?.[MIRROR_AT]) || Date.parse(snap.updateTime) || nextMirrorAt();
      if (mirrorDb) await mirrorDocument(mirrorDb, `battleRooms/${id}`, stored, sourceAt);
      return { room: withoutMirrorAt(stored), version: snap.updateTime };
    },
    async saveRoom(room, version) {
      const sourceAt = nextMirrorAt();
      const stored = { ...room, [MIRROR_AT]: sourceAt };
      await db.doc(`battleRooms/${room.id}`).set(stored, { updateTime: version });
      if (mirrorDb) await mirrorDocument(mirrorDb, `battleRooms/${room.id}`, stored, sourceAt);
    },
    async createRoom(room, key) {
      await db.doc(`battleKeys/${room.id}`).set(key, { exists: false });
      keys.set(room.id, key.answers);
      const sourceAt = nextMirrorAt();
      const stored = { ...room, [MIRROR_AT]: sourceAt };
      await db.doc(`battleRooms/${room.id}`).set(stored, { exists: false });
      if (mirrorDb) {
        await mirrorDocument(mirrorDb, `battleKeys/${room.id}`, key, sourceAt);
        await mirrorDocument(mirrorDb, `battleRooms/${room.id}`, stored, sourceAt);
      }
    },
    async getKey(id) {
      if (keys.has(id)) return { answers: keys.get(id) };
      const snap = await db.doc(`battleKeys/${id}`).get();
      const answers = snap.exists ? snap.data().answers : null;
      if (answers) keys.set(id, answers);
      if (answers && mirrorDb) await mirrorDocument(mirrorDb, `battleKeys/${id}`, { ...snap.data(), [MIRROR_AT]: nextMirrorAt() });
      if (keys.size > 500) keys.delete(keys.keys().next().value);
      return answers ? { answers } : null;
    },
    async getStats(uid) {
      const snap = await db.doc(`battleStats/${uid}`).get();
      if (!snap.exists) return null;
      const stored = snap.data();
      const sourceAt = Number(stored?.[MIRROR_AT]) || Date.parse(snap.updateTime) || nextMirrorAt();
      if (mirrorDb) await mirrorDocument(mirrorDb, `battleStats/${uid}`, stored, sourceAt);
      return { stats: withoutMirrorAt(stored), version: snap.updateTime };
    },
    async saveStats(uid, stats, version) {
      const sourceAt = nextMirrorAt();
      const stored = { ...stats, [MIRROR_AT]: sourceAt };
      await db.doc(`battleStats/${uid}`).set(stored, version ? { updateTime: version } : { exists: false });
      if (mirrorDb) await mirrorDocument(mirrorDb, `battleStats/${uid}`, stored, sourceAt);
    },
    async openRooms(uid) {
      const { docs } = await db.collection('battleRooms').where('players', 'array-contains', uid).get();
      const open = docs.map((item) => {
        const stored = item.data();
        const sourceAt = Number(stored?.[MIRROR_AT]) || Date.parse(item.updateTime) || nextMirrorAt();
        return { id: item.id, stored, sourceAt, room: withoutMirrorAt(stored) };
      }).filter((item) => item.room.open).slice(0, 20);
      if (mirrorDb) {
        await Promise.all(open.map(async (item) => {
          await mirrorDocument(mirrorDb, `battleRooms/${item.id}`, item.stored, item.sourceAt);
          const key = await db.doc(`battleKeys/${item.id}`).get().catch(() => null);
          if (key?.exists) await mirrorDocument(mirrorDb, `battleKeys/${item.id}`, key.data(), nextMirrorAt());
        }));
      }
      return open.map((item) => item.room);
    },
    async notify(to, { from, fromName, roomId, course, count }) {
      // The bell on the other player's account (the same shape the app writes).
      const id = `race_${roomId}`;
      await db.doc(`users/${to}/notifications/${id}`).set({
        type: 'battle',
        from,
        fromName: fromName ?? '',
        roomId,
        text: `challenged you to a ${count}-question ${course} battle`,
        read: false,
        createdAt: new Date(),
      }, { exists: false });
    },
  };
}

function publicRaceRoom(room) {
  return room.status === 'done' ? room : { ...room, answers: null };
}

async function recoverAppliedAction(store, uid, body) {
  const action = String(body?.action ?? '');
  const id = String(body?.id ?? '');
  if (!id || action === 'create' || action === 'mine') return null;
  const found = await store.getRoom(id);
  if (!found || !found.room.players.includes(uid)) return null;
  const room = found.room;
  if (action === 'answer') {
    const index = Number(body.index);
    const side = room.sides[uid];
    if (!Number.isInteger(index) || !side || side.pos <= index || typeof side.marks !== 'string') return null;
    const mark = side.marks[index];
    const key = await store.getKey(id);
    if (!key?.answers || typeof key.answers[index] !== 'number') return null;
    const streak = side.marks.slice(0, index + 1).match(/r*$/)?.[0].length ?? 0;
    const score = side.marks.slice(0, index + 1).split('').reduce((total, item) => total + (item === 'r' ? 5 : item === 'w' ? -1 : 0), 0);
    return {
      room: publicRaceRoom(room),
      result: { right: mark === 'r', skip: mark === 's', correct: key.answers[index], score, streak },
      now: Date.now(),
    };
  }
  const applied = action === 'accept'
    ? room.status !== 'invited' && room.opponent.uid === uid && !['declined', 'expired', 'cancelled'].includes(room.status)
    : action === 'decline'
      ? ['declined', 'expired', 'cancelled'].includes(room.status)
      : action === 'ready'
        ? room.status === 'live' || room.status === 'done' || room.ready?.[uid] === true
        : action === 'leave'
          ? Boolean(room.sides?.[uid]?.left) || ['declined', 'expired', 'cancelled'].includes(room.status)
          : false;
  return applied ? { room: publicRaceRoom(room), result: null, now: Date.now() } : null;
}

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only.' });
  const admin = restAdmin();
  if (!admin) return res.status(503).json({ error: 'Battles are not set up on the server yet.', code: 'not-configured' });
  const liveQuizAccount = serviceAccount('LIVE_QUIZ_FIREBASE_SERVICE_ACCOUNT');
  const liveQuizAdmin = liveQuizAccount ? restAdmin(liveQuizAccount) : null;

  let body = req.body ?? {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  // Live Quiz shares this trusted server function so the project remains within
  // Vercel Hobby's serverless-function limit. Its own handler still verifies the
  // signed-in caller, owner access and scoring independently.
  if (body.action === 'live-quiz') {
    return handleLiveQuiz({ req, res, admin, liveQuizAdmin, body });
  }

  let uid;
  try {
    const token = String(req.headers.authorization ?? '').replace(/^Bearer\s+/i, '');
    uid = (await admin.auth.verifyIdToken(token)).uid;
  } catch {
    return res.status(401).json({ error: 'Please sign in again.' });
  }
  if (tooMany(uid)) return res.status(429).json({ error: 'Slow down a little.' });

  if (body.action === 'sync-block-list') {
    if (!liveQuizAdmin) return res.status(503).json({ error: 'The separate GrAte Apex Live project is not connected.' });
    const blocked = Array.isArray(body.blockedIds)
      ? [...new Set(body.blockedIds.filter((id) => typeof id === 'string' && /^[A-Za-z0-9]{6,64}$/.test(id)))].slice(0, 200)
      : [];
    const profileRef = liveQuizAdmin.db.doc(`battleProfiles/${uid}`);
    const profile = await profileRef.get();
    await profileRef.set({ ...(profile.data?.() ?? {}), blocked, updatedAt: Date.now() });
    return res.status(200).json({ saved: true });
  }

  let fallbackActive = await readLiveFailover(liveQuizAdmin);
  const profiles = new Map();
  const opponentUid = body.action === 'create' ? String(body.opponent?.uid ?? '') : '';
  if (!fallbackActive && liveQuizAdmin && ['mine', 'create'].includes(String(body.action))) {
    const ids = [...new Set([uid, ...(opponentUid && /^[A-Za-z0-9]{6,64}$/.test(opponentUid) ? [opponentUid] : [])])];
    try {
      const synced = await Promise.all(ids.map((id) => syncBattleProfile(admin.db, liveQuizAdmin.db, id)));
      ids.forEach((id, index) => profiles.set(id, synced[index]));
    } catch (error) {
      if (quotaError(error) && await activateLiveFailover(liveQuizAdmin, 'primary-firestore-quota-exceeded')) fallbackActive = true;
      else console.warn('Could not refresh the Live project battle profile cache:', error);
    }
  }

  try {
    const store = fallbackActive && liveQuizAdmin
      ? firestoreStore(liveQuizAdmin.db)
      : firestoreStore(admin.db, liveQuizAdmin?.db ?? null);
    const base = origin(req);
    // Both players' names come from their own profiles, never from what the app sends, and a
    // learner can't challenge someone who has blocked them (2026-11-10 audit).
    if (body.action === 'create' && fallbackActive && liveQuizAdmin) {
      if (!/^[A-Za-z0-9]{6,64}$/.test(opponentUid)) return res.status(400).json({ error: 'Choose who to battle.' });
      const profile = await liveQuizAdmin.db.doc(`battleProfiles/${uid}`).get();
      const other = await liveQuizAdmin.db.doc(`battleProfiles/${opponentUid}`).get();
      if (!other.exists) return res.status(503).json({ error: 'This learner’s battle details have not synced to the backup yet. Try again when the original database is available.' });
      const profileData = profile.data?.() ?? {};
      const otherData = other.data?.() ?? {};
      if (Array.isArray(otherData.blocked) && otherData.blocked.includes(uid)) return res.status(403).json({ error: 'You can’t challenge this learner.' });
      body = { ...body, name: typeof profileData.username === 'string' ? profileData.username : null, opponent: { ...(body.opponent ?? {}), name: typeof otherData.username === 'string' ? otherData.username : null } };
    } else if (body.action === 'create') {
      const opponentUid = String(body.opponent?.uid ?? '');
      const known = /^[A-Za-z0-9]{6,64}$/.test(opponentUid);
      const [profile, other, blocked] = await Promise.all([
        admin.db.doc(`users/${uid}`).get().catch(() => null),
        known ? admin.db.doc(`users/${opponentUid}`).get().catch(() => null) : null,
        known ? admin.db.doc(`blocks/${opponentUid}_${uid}`).get().catch(() => null) : null,
      ]);
      if (blocked?.exists) return res.status(403).json({ error: 'You can’t challenge this learner.' });
      const nameOf = (snap) => {
        const name = snap?.data?.()?.username;
        return typeof name === 'string' && name ? name : null;
      };
      body = { ...body, name: nameOf(profile), opponent: { ...(body.opponent ?? {}), name: nameOf(other) } };
    }
    let reply;
    try {
      reply = await handleBattle({ uid, body, store, loadBank: (course) => loadBank(base, course) });
    } catch (error) {
      if (fallbackActive || !liveQuizAdmin || !quotaError(error)) throw error;
      await activateLiveFailover(liveQuizAdmin, 'primary-firestore-quota-exceeded');
      fallbackActive = true;
      const backupStore = firestoreStore(liveQuizAdmin.db);
      const recovered = await recoverAppliedAction(backupStore, uid, body);
      reply = recovered ?? await handleBattle({ uid, body, store: backupStore, loadBank: (course) => loadBank(base, course) });
    }
    return res.status(200).json(reply);
  } catch (error) {
    if (error instanceof BattleError) return res.status(error.status).json({ error: error.message });
    console.error('Battle failed:', error);
    return res.status(500).json({ error: 'The battle server had a problem. Try again.' });
  }
}
