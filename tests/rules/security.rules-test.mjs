// Security rules of 2026-11-10 (friends-only posts, blocking, bell notes, username logins),
// checked on the LOCAL Firestore emulator only (port 8085, started with this repo's
// firestore.rules). The emulator accepts unsigned sign-in tokens, so no Auth emulator is
// needed. Run: node tests/rules/security.rules-test.mjs — every line should say PASS.
import { Buffer } from 'node:buffer';

const PROJECT = 'grate-apex';
const BASE = `http://127.0.0.1:8085/v1/projects/${PROJECT}/databases/(default)/documents`;
const ROOT = `projects/${PROJECT}/databases/(default)/documents`;
const OWNER = { authorization: 'Bearer owner', 'content-type': 'application/json' };

const b64 = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
function tokenFor(uid, email = `${uid.toLowerCase()}@example.com`) {
  const now = Math.floor(Date.now() / 1000);
  return `${b64({ alg: 'none', typ: 'JWT' })}.${b64({
    iss: `https://securetoken.google.com/${PROJECT}`, aud: PROJECT, sub: uid, user_id: uid, email,
    email_verified: false, auth_time: now, iat: now, exp: now + 3600, firebase: { sign_in_provider: 'password', identities: {} },
  })}.`;
}

function encode(value) {
  if (value === null) return { nullValue: null };
  if (typeof value === 'string') return { stringValue: value };
  if (typeof value === 'boolean') return { booleanValue: value };
  if (typeof value === 'number') return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value };
  if (Array.isArray(value)) return { arrayValue: { values: value.map(encode) } };
  return { mapValue: { fields: Object.fromEntries(Object.entries(value).map(([k, v]) => [k, encode(v)])) } };
}
const fields = (data) => encode(data).mapValue.fields;

async function seed(path, data) {
  const res = await fetch(`${BASE}/${path}`, { method: 'PATCH', headers: OWNER, body: JSON.stringify({ fields: fields(data) }) });
  if (!res.ok) throw new Error(`seed ${path}: ${res.status} ${await res.text()}`);
}
async function commit(user, writes) {
  const body = {
    writes: writes.map((w) => (w.delete
      ? { delete: `${ROOT}/${w.delete}` }
      : { update: { name: `${ROOT}/${w.path}`, fields: fields(w.data) }, ...(w.mask ? { updateMask: { fieldPaths: w.mask } } : {}), ...(w.now ? { updateTransforms: w.now.map((fieldPath) => ({ fieldPath, setToServerValue: 'REQUEST_TIME' })) } : {}) })),
  };
  const res = await fetch(`${BASE}:commit`, { method: 'POST', headers: { authorization: `Bearer ${user.token}`, 'content-type': 'application/json' }, body: JSON.stringify(body) });
  return res.ok ? 'allowed' : 'denied';
}
async function read(user, path) {
  const res = await fetch(`${BASE}/${path}`, { headers: { authorization: `Bearer ${user.token}` } });
  return res.ok ? 'allowed' : 'denied';
}
async function list(user, parent, collectionId, where) {
  const structuredQuery = { from: [{ collectionId }], ...(where ? { where: { fieldFilter: { field: { fieldPath: where[0] }, op: 'EQUAL', value: encode(where[1]) } } } : {}) };
  const res = await fetch(`${parent ? `${BASE}/${parent}` : BASE}:runQuery`, { method: 'POST', headers: { authorization: `Bearer ${user.token}`, 'content-type': 'application/json' }, body: JSON.stringify({ structuredQuery }) });
  if (!res.ok) return { status: 'denied', docs: [] };
  const rows = await res.json();
  return { status: 'allowed', docs: rows.filter((row) => row.document).map((row) => row.document) };
}

let failures = 0;
function check(name, got, want) {
  const ok = got === want;
  if (!ok) failures += 1;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}  (${got}${ok ? '' : `, wanted ${want}`})`);
}

const run = Date.now().toString(36);
const person = (name) => ({ uid: `${name}${run}`, username: `${name}_${run}`.slice(0, 20), token: tokenFor(`${name}${run}`) });
const ama = person('ama'); // posts, blocks bad
const kofi = person('kofi'); // ama's friend
const yaw = person('yaw'); // stranger
const bad = person('bad'); // blocked by ama

for (const p of [ama, kofi, yaw, bad]) await seed(`users/${p.uid}`, { username: p.username });
for (const [a, b] of [[ama, kofi], [kofi, ama]]) await seed(`follows/${a.uid}_${b.uid}`, { follower: a.uid, followee: b.uid });
await seed(`follows/${bad.uid}_${ama.uid}`, { follower: bad.uid, followee: ama.uid });

// ── Friends-only posts ───────────────────────────────────────────────────────
const shell = (id, extra = {}) => ({ path: `posts/${id}`, data: { board: 'general', title: '', body: '', authorUid: ama.uid, authorName: ama.username, replyCount: 0, likeCount: 0, visibility: 'friends', ...extra }, now: ['createdAt', 'lastActivityAt'] });
const content = (id, extra = {}) => ({ path: `posts/${id}/private/content`, data: { title: 'Only for friends', body: 'Only for friends, really', ...extra } });
const fp = `fp${run}`;
check('friends-only post: shell + private content in one batch', await commit(ama, [shell(fp), content(fp)]), 'allowed');
check('friends-only post with its words in the open list', await commit(ama, [shell(`${fp}x`, { title: 'Secret', body: 'Secret words' })]), 'denied');
check('friends-only shell without its content', await commit(ama, [shell(`${fp}y`)]), 'denied');
check('the author opens the content', await read(ama, `posts/${fp}/private/content`), 'allowed');
check('a friend opens the content', await read(kofi, `posts/${fp}/private/content`), 'allowed');
check('a stranger can not open the content', await read(yaw, `posts/${fp}/private/content`), 'denied');
check('nobody can list private content', (await list(kofi, `posts/${fp}`, 'private')).status, 'denied');
check('content can not be rewritten later', await commit(ama, [content(fp, { body: 'Changed text here' })]), 'denied');
check('content can not be added to someone else’s post', await commit(yaw, [{ path: `posts/${fp}/private/content2`, data: { title: 'abc', body: 'abc' } }]), 'denied');
const listed = await list(yaw, null, 'posts', ['authorUid', ama.uid]);
check('a stranger lists posts', listed.status, 'allowed');
check('…and the friends-only post in the list has no words', JSON.stringify(listed.docs.find((d) => d.name.endsWith(fp))?.fields?.body ?? {}), JSON.stringify({ stringValue: '' }));
const pub = `pp${run}`;
check('a public post as before', await commit(ama, [{ path: `posts/${pub}`, data: { board: 'general', title: 'Hello all', body: 'Hello everyone', authorUid: ama.uid, authorName: ama.username, replyCount: 0, likeCount: 0, visibility: 'everyone' }, now: ['createdAt', 'lastActivityAt'] }]), 'allowed');
check('a stranger opens a public post', await read(yaw, `posts/${pub}`), 'allowed');
check('the author can not put someone else’s name on the post', await commit(ama, [{ path: `posts/${pub}`, data: { board: 'general', title: 'Hello all', body: 'Hello everyone', authorUid: ama.uid, authorName: 'theapexhub', replyCount: 0, likeCount: 0, visibility: 'everyone' } }]), 'denied');
// Everyday actions on a public post still work (same batches as src/data/community.ts and stumps.ts).
check('a stranger likes a public post (like + count)', await commit(yaw, [{ path: `posts/${pub}/likes/${yaw.uid}`, data: { username: yaw.username }, now: ['createdAt'] }, { path: `posts/${pub}`, data: { likeCount: 1 }, mask: ['likeCount'] }]), 'allowed');
check('a stranger comments on a public post (comment + count)', await commit(yaw, [{ path: `posts/${pub}/replies/r0${run}`, data: { body: 'Great', authorUid: yaw.uid, authorName: yaw.username }, now: ['createdAt'] }, { path: `posts/${pub}`, data: { replyCount: 1 }, mask: ['replyCount'], now: ['lastActivityAt'] }]), 'allowed');
check('a stranger answers a stamp on a public post', await commit(yaw, [{ path: `posts/${pub}/stumpAnswers/${yaw.uid}`, data: { username: yaw.username, pick: 1, ok: true }, now: ['at'] }]), 'allowed');
check('a friend reads a friends-only post’s shell', await read(kofi, `posts/${fp}`), 'allowed');
check('the author deletes a friends-only post with its content',await commit(ama, [{ delete: `posts/${fp}/private/content` }, { delete: `posts/${fp}` }]), 'allowed');

// ── Blocking ─────────────────────────────────────────────────────────────────
check('ama blocks bad', await commit(ama, [{ path: `blocks/${ama.uid}_${bad.uid}`, data: { blocker: ama.uid, blocked: bad.uid }, now: ['at'] }]), 'allowed');
check('a block entry in someone else’s name', await commit(yaw, [{ path: `blocks/${ama.uid}_${yaw.uid}`, data: { blocker: ama.uid, blocked: yaw.uid } }]), 'denied');
check('ama removes bad as a follower', await commit(ama, [{ delete: `follows/${bad.uid}_${ama.uid}` }]), 'allowed');
check('bad can not follow ama again', await commit(bad, [{ path: `follows/${bad.uid}_${ama.uid}`, data: { follower: bad.uid, followee: ama.uid } }]), 'denied');
check('yaw can still follow ama', await commit(yaw, [{ path: `follows/${yaw.uid}_${ama.uid}`, data: { follower: yaw.uid, followee: ama.uid } }]), 'allowed');
check('bad can not comment on ama’s post', await commit(bad, [{ path: `posts/${pub}/replies/c${run}`, data: { body: 'mean words', authorUid: bad.uid, authorName: bad.username } }]), 'denied');
check('bad can not open ama’s post', await read(bad, `posts/${pub}`), 'denied');
check('bad can not like ama’s post', await commit(bad, [{ path: `posts/${pub}/likes/${bad.uid}`, data: { username: bad.username } }]), 'denied');
await seed(`users/${ama.uid}/stories/s${run}`, { username: ama.username, kind: 'text', text: 'hi' });
check('bad can not see ama’s stories', (await list(bad, `users/${ama.uid}`, 'stories')).status, 'denied');
check('yaw can see ama’s stories', (await list(yaw, `users/${ama.uid}`, 'stories')).status, 'allowed');
check('bad can not read the block entry', await read(bad, `blocks/${ama.uid}_${bad.uid}`), 'denied');
check('ama lists her blocks', (await list(ama, null, 'blocks', ['blocker', ama.uid])).status, 'allowed');
check('bad can not leave ama a bell note', await commit(bad, [{ path: `users/${ama.uid}/notifications/follow_${bad.uid}`, data: { type: 'follow', from: bad.uid, fromName: bad.username, read: false } }]), 'denied');

// ── Bell notes must match what happened ──────────────────────────────────────
const note = (to, id, data) => ({ path: `users/${to.uid}/notifications/${id}`, data: { from: data.from.uid, fromName: data.from.username, read: false, type: data.type, ...(data.text ? { text: data.text } : {}) } });
check('follow note after a real follow', await commit(yaw, [note(ama, `follow_${yaw.uid}`, { from: yaw, type: 'follow' })]), 'allowed');
check('follow note with a made-up id', await commit(yaw, [note(ama, `random${run}`, { from: yaw, type: 'follow' })]), 'denied');
check('follow note without following', await commit(kofi, [note(yaw, `follow_${kofi.uid}`, { from: kofi, type: 'follow' })]), 'denied');
await seed(`posts/${pub}/likes/${yaw.uid}`, { username: yaw.username });
check('like note for a real like', await commit(yaw, [note(ama, `like_${pub}_${yaw.uid}`, { from: yaw, type: 'like', text: 'Hello all' })]), 'allowed');
check('like note without liking', await commit(kofi, [note(ama, `like_${pub}_${kofi.uid}`, { from: kofi, type: 'like', text: 'any words' })]), 'denied');
check('like note sent to someone who is not the author', await commit(yaw, [note(kofi, `like_${pub}_${yaw.uid}`, { from: yaw, type: 'like' })]), 'denied');
await seed(`posts/${pub}/replies/c1${run}`, { body: 'Nice post', authorUid: yaw.uid, authorName: yaw.username });
check('comment note for a real comment', await commit(yaw, [note(ama, `comment_${pub}_c1${run}`, { from: yaw, type: 'comment', text: 'Nice post' })]), 'allowed');
check('comment note for someone else’s comment', await commit(kofi, [note(ama, `comment_${pub}_c1${run}`, { from: kofi, type: 'comment', text: 'Nice post' })]), 'denied');
await seed(`posts/${pub}/replies/c2${run}`, { body: 'Thanks', authorUid: kofi.uid, authorName: kofi.username, parentId: `c1${run}` });
check('reply note to the person replied to', await commit(kofi, [note(yaw, `reply_${pub}_c2${run}`, { from: kofi, type: 'reply', text: 'Thanks' })]), 'allowed');
check('reply note to someone else', await commit(kofi, [note(ama, `reply_${pub}_c2${run}`, { from: kofi, type: 'reply', text: 'Thanks' })]), 'denied');
check('message note to a friend', await commit(kofi, [note(ama, `m${run}`, { from: kofi, type: 'message', text: 'hi' })]), 'allowed');
check('message note to a stranger', await commit(yaw, [note(kofi, `m${run}`, { from: yaw, type: 'message', text: 'hi' })]), 'denied');
check('a note with someone else’s name', await commit(yaw, [{ path: `users/${ama.uid}/notifications/x${run}`, data: { type: 'follow', from: yaw.uid, fromName: 'theapexhub', read: false } }]), 'denied');

// ── Username entries: the hidden login must be the account's own ─────────────
const legacy = { uid: `old${run}`, token: tokenFor(`old${run}`, `old_${run}@grateapex.app`) };
check('an original-app account claims a name with its own login', await commit(legacy, [{ path: `usernames/n1${run}`, data: { uid: legacy.uid, login: `old_${run}` } }]), 'allowed');
check('…or with someone else’s login', await commit(legacy, [{ path: `usernames/n2${run}`, data: { uid: legacy.uid, login: 'kofi_a' } }]), 'denied');
check('a new account with a made-up login', await commit(yaw, [{ path: `usernames/n3${run}`, data: { uid: yaw.uid, login: 'kofi_a' } }]), 'denied');
check('a new account without a login', await commit(yaw, [{ path: `usernames/n4${run}`, data: { uid: yaw.uid } }]), 'allowed');

console.log(failures ? `\n${failures} FAILED` : '\nAll passed.');
process.exit(failures ? 1 : 0);
