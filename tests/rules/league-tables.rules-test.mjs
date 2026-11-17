// Live league tables (firestore.rules → leagueTables, 2026-11-14), checked on the LOCAL
// Firestore emulator only (port 8085, started with this repo's firestore.rules; it accepts
// unsigned sign-in tokens). Run: node tests/rules/league-tables.rules-test.mjs — every line
// should say PASS.
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
async function wipe(path) {
  await fetch(`${BASE}/${path}`, { method: 'DELETE', headers: OWNER });
}
// As the app writes it: setDoc(..., { merge: true }) with `at: serverTimestamp()` → an update mask
// of the fields given plus a REQUEST_TIME transform on rows.<uid>.at.
async function writeRow(user, tableId, table, extraMask = []) {
  const body = {
    writes: [{
      update: { name: `${ROOT}/leagueTables/${tableId}`, fields: fields(table) },
      updateMask: { fieldPaths: ['week', 'tier', ...Object.keys(table.rows).flatMap((uid) => ['username', 'weeklyXp'].map((f) => `rows.${uid}.${f}`)), ...extraMask] },
      updateTransforms: Object.keys(table.rows).map((uid) => ({ fieldPath: `rows.${uid}.at`, setToServerValue: 'REQUEST_TIME' })),
    }],
  };
  const res = await fetch(`${BASE}:commit`, { method: 'POST', headers: { authorization: `Bearer ${user.token}`, 'content-type': 'application/json' }, body: JSON.stringify(body) });
  return res.ok ? 'allowed' : 'denied';
}
async function read(user, path) {
  const res = await fetch(`${BASE}/${path}`, { headers: { authorization: `Bearer ${user.token}` } });
  return res.ok ? 'allowed' : 'denied';
}
let failures = 0;
function check(name, got, want) {
  const ok = got === want;
  if (!ok) failures += 1;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}  (${got}${ok ? '' : `, wanted ${want}`})`);
}

const ama = { uid: 'LeagueAma00001', token: tokenFor('LeagueAma00001') };
const kofi = { uid: 'LeagueKofi0001', token: tokenFor('LeagueKofi0001') };
const WEEK = '2026-11-16';
const TABLE = `${WEEK}_1`;
await wipe(`leagueTables/${TABLE}`);
await wipe(`leagueTables/${WEEK}_2`);
await seed(`users/${ama.uid}`, { username: 'ama', league: { week: WEEK, tier: 1, startXp: 100 } });
await seed(`users/${kofi.uid}`, { username: 'kofi', league: { week: WEEK, tier: 1, startXp: 50 } });

const row = (username, weeklyXp) => ({ username, weeklyXp });
check('ama creates the table with her own row', await writeRow(ama, TABLE, { week: WEEK, tier: 1, rows: { [ama.uid]: row('ama', 40) } }), 'allowed');
check('kofi adds his own row to it', await writeRow(kofi, TABLE, { week: WEEK, tier: 1, rows: { [kofi.uid]: row('kofi', 15) } }), 'allowed');
check('kofi can read the table', await read(kofi, `leagueTables/${TABLE}`), 'allowed');
check('ama updates her own row', await writeRow(ama, TABLE, { week: WEEK, tier: 1, rows: { [ama.uid]: row('ama', 55) } }), 'allowed');
check("ama cannot write kofi's row", await writeRow(ama, TABLE, { week: WEEK, tier: 1, rows: { [kofi.uid]: row('kofi', 0) } }), 'denied');
check('ama cannot use another username', await writeRow(ama, TABLE, { week: WEEK, tier: 1, rows: { [ama.uid]: row('kofi', 55) } }), 'denied');
check('ama cannot claim more than a million XP', await writeRow(ama, TABLE, { week: WEEK, tier: 1, rows: { [ama.uid]: row('ama', 2_000_000) } }), 'denied');
check('ama cannot write into a tier she is not in', await writeRow(ama, `${WEEK}_2`, { week: WEEK, tier: 2, rows: { [ama.uid]: row('ama', 55) } }), 'denied');
check('ama cannot write into another week', await writeRow(ama, '2026-11-09_1', { week: '2026-11-09', tier: 1, rows: { [ama.uid]: row('ama', 55) } }), 'denied');
check('ama cannot change the week or tier of the table', await writeRow(ama, TABLE, { week: '2026-11-09', tier: 1, rows: { [ama.uid]: row('ama', 55) } }), 'denied');
check('a signed-out visitor cannot read it', await read({ token: '' }, `leagueTables/${TABLE}`), 'denied');

console.log(failures ? `\n${failures} FAILED` : '\nAll passed');
process.exit(failures ? 1 : 0);
