// XP battles: the server referee (owner, 2026-10-26: "no score fakes"). The app sends
// every action here with the learner's sign-in token; server/battle-referee.mjs marks
// answers against keys only this server can read and writes the room both players watch.
//
//   POST /api/battle  { action: 'create' | 'accept' | 'decline' | 'ready' | 'answer' | 'leave' | 'get' | 'mine', ... }
//
// Auth is verified against FIREBASE_SERVICE_ACCOUNT; battle state uses
// LIVE_QUIZ_FIREBASE_SERVICE_ACCOUNT so the learning project's Firestore quota
// cannot stop a match. Account notifications remain best-effort in the main project.
// Questions come from this deployment's public/battle-bank/*.json.
import { BattleError, handleBattle } from '../server/battle-referee.mjs';
import { restAdmin } from './_admin-rest.mjs';
import { serviceAccount } from './_admin.mjs';
import { handleLiveQuiz } from './_live-quiz.mjs';

const banks = new Map(); // course -> { at, bank }
const BANK_REUSE_MS = 10 * 60_000;
const keys = new Map(); // room -> answers (they never change, so one read per room per server instance)
const MIRROR_AT = '_battleMirrorAt';

function withoutMirrorAt(value) {
  if (!value || typeof value !== 'object') return value;
  const { [MIRROR_AT]: _ignored, ...clean } = value;
  return clean;
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

/** The referee's store: battle data uses GrAte Apex Live; notifications stay in the account project. */
function firestoreStore(db, notificationDb = db) {
  return {
    async getRoom(id) {
      const snap = await db.doc(`battleRooms/${id}`).get();
      if (!snap.exists) return null;
      return { room: withoutMirrorAt(snap.data()), version: snap.updateTime };
    },
    async saveRoom(room, version) {
      await db.doc(`battleRooms/${room.id}`).set(withoutMirrorAt(room), { updateTime: version });
    },
    async createRoom(room, key) {
      await db.doc(`battleKeys/${room.id}`).set(key, { exists: false });
      keys.set(room.id, key.answers);
      await db.doc(`battleRooms/${room.id}`).set(withoutMirrorAt(room), { exists: false });
    },
    async getKey(id) {
      if (keys.has(id)) return { answers: keys.get(id) };
      const snap = await db.doc(`battleKeys/${id}`).get();
      const answers = snap.exists ? snap.data().answers : null;
      if (answers) keys.set(id, answers);
      if (keys.size > 500) keys.delete(keys.keys().next().value);
      return answers ? { answers } : null;
    },
    async getStats(uid) {
      const snap = await db.doc(`battleStats/${uid}`).get();
      if (!snap.exists) return null;
      return { stats: withoutMirrorAt(snap.data()), version: snap.updateTime };
    },
    async saveStats(uid, stats, version) {
      await db.doc(`battleStats/${uid}`).set(withoutMirrorAt(stats), version ? { updateTime: version } : { exists: false });
    },
    async openRooms(uid) {
      const { docs } = await db.collection('battleRooms').where('players', 'array-contains', uid).get();
      return docs.map((item) => withoutMirrorAt(item.data())).filter((room) => room.open).slice(0, 20);
    },
    async notify(to, { from, fromName, roomId, course, count }) {
      // The bell on the other player's account (the same shape the app writes).
      const id = `race_${roomId}`;
      await notificationDb.doc(`users/${to}/notifications/${id}`).set({
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

  if (body.action === 'seed-block-list') {
    if (!liveQuizAdmin) return res.status(503).json({ error: 'The separate GrAte Apex Live project is not connected.' });
    const incoming = Array.isArray(body.blockedIds)
      ? [...new Set(body.blockedIds.filter((id) => typeof id === 'string' && /^[A-Za-z0-9]{6,64}$/.test(id)))].slice(0, 200)
      : [];
    const profileRef = liveQuizAdmin.db.doc(`battleProfiles/${uid}`);
    const profile = await profileRef.get();
    const saved = profile.data?.() ?? {};
    const existing = Array.isArray(saved.blocked) ? saved.blocked.filter((id) => typeof id === 'string') : [];
    const blocked = [...new Set([...existing, ...incoming])].slice(0, 200);
    await profileRef.set({ ...saved, blocked, updatedAt: Date.now() });
    return res.status(200).json({ saved: true });
  }

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

  const opponentUid = body.action === 'create' ? String(body.opponent?.uid ?? '') : '';
  try {
    const battleDb = liveQuizAdmin?.db ?? admin.db;
    const store = firestoreStore(battleDb, admin.db);
    const base = origin(req);
    // Both players' names come from their own profiles, never from what the app sends, and a
    // learner can't challenge someone who has blocked them (2026-11-10 audit).
    if (body.action === 'create' && liveQuizAdmin) {
      if (!/^[A-Za-z0-9]{6,64}$/.test(opponentUid)) return res.status(400).json({ error: 'Choose who to battle.' });
      const profile = await liveQuizAdmin.db.doc(`battleProfiles/${uid}`).get();
      const other = await liveQuizAdmin.db.doc(`battleProfiles/${opponentUid}`).get();
      const otherData = other.data?.() ?? {};
      if (!other.exists || !Array.isArray(otherData.blocked)) {
        return res.status(503).json({ error: 'This learner needs to open Connect once so their battle settings can sync to GrAte Apex Live. Ask them to open Connect, then try again.' });
      }
      const profileData = profile.data?.() ?? {};
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
    const reply = await handleBattle({ uid, body, store, loadBank: (course) => loadBank(base, course) });
    return res.status(200).json(reply);
  } catch (error) {
    if (error instanceof BattleError) return res.status(error.status).json({ error: error.message });
    console.error('Battle failed:', error);
    return res.status(500).json({ error: 'The battle server had a problem. Try again.' });
  }
}
