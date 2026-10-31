// Poll votes (owner, 2026-10-31): the app sends each vote here with the learner's sign-in
// token; server/poll-referee.mjs records it where only this server can read it and writes
// the results into the post or chat message everyone is already watching.
//
//   POST /api/poll  { action: 'vote' | 'mine', host: 'post' | 'chat' | 'group', postId | chatId + messageId | groupId + messageId, picks? }
//
// Needs the Vercel setting FIREBASE_SERVICE_ACCOUNT (already there for battles and push).
// No rules change: pollTallies has no rule, so the app can never read the ballots.
import { handlePoll, PollError } from '../server/poll-referee.mjs';
import { restAdmin } from './_admin-rest.mjs';

// Best-effort brake against a client calling again and again (per server instance).
const recent = new Map();
function tooMany(uid) {
  const now = Date.now();
  const list = (recent.get(uid) ?? []).filter((at) => now - at < 10_000);
  list.push(now);
  recent.set(uid, list);
  if (recent.size > 2000) recent.clear();
  return list.length > 20;
}

/** The referee's store: Firestore through the service account. */
function firestoreStore(db) {
  return {
    async getHost(path) {
      const snap = await db.doc(path).get();
      return snap.exists ? snap.data() : null;
    },
    async groupMembers(gid) {
      const snap = await db.doc(`groups/${gid}`).get();
      return snap.exists ? snap.data().memberUids ?? [] : null;
    },
    async username(uid) {
      const snap = await db.doc(`users/${uid}`).get();
      return snap.exists ? snap.data().username ?? null : null;
    },
    async getTally(key) {
      const snap = await db.doc(`pollTallies/${key}`).get();
      return snap.exists ? { tally: snap.data(), version: snap.updateTime } : null;
    },
    async saveTally(key, tally, version) {
      await db.doc(`pollTallies/${key}`).set(tally, version ? { updateTime: version } : { exists: false });
    },
    async writeState(path, field, state) {
      // Only the result fields: the rest of the post or message (its times, text, author) is left as it is.
      const changes = { [`${field}.counts`]: state.counts, [`${field}.total`]: state.total, [`${field}.v`]: state.v };
      if (state.voters) {
        changes[`${field}.voters`] = state.voters;
        changes[`${field}.names`] = state.names;
      }
      await db.doc(path).update(changes);
    },
  };
}

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only.' });
  const admin = restAdmin();
  if (!admin) return res.status(503).json({ error: 'Polls are not set up on the server yet.', code: 'not-configured' });

  let uid;
  try {
    const token = String(req.headers.authorization ?? '').replace(/^Bearer\s+/i, '');
    uid = (await admin.auth.verifyIdToken(token)).uid;
  } catch {
    return res.status(401).json({ error: 'Please sign in again.' });
  }
  if (tooMany(uid)) return res.status(429).json({ error: 'Slow down a little.' });

  let body = req.body ?? {};
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Bad request.' });
    }
  }
  try {
    return res.status(200).json(await handlePoll({ uid, body, store: firestoreStore(admin.db) }));
  } catch (error) {
    if (error instanceof PollError) return res.status(error.status).json({ error: error.message });
    console.error('Poll failed:', error);
    return res.status(500).json({ error: 'The vote could not be saved. Try again.' });
  }
}
