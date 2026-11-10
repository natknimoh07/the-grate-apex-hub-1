// Leftovers found by the 2026-11-10 audit:
//  1. Push addresses still on public profiles (users/{uid}.webPush) of learners who haven't
//     opened the app since they became private (pushDevices/{uid}, 2026-10-18). They are copied
//     to the private record (so those learners still get alerts), then removed from the profile.
//  2. The five test accounts made by mistake on 2026-10-24 (their logins are already deleted):
//     their profile, username entry and leaderboard entry. Only removed when the username entry
//     still points at that test account.
// See scripts/security/_store.mjs for how to run it.
import { mergeDevices } from '../../api/_push-logic.mjs';
import { APPLY, connect, value } from './_store.mjs';

const TEST_ACCOUNTS = {
  Trt0cIqRdaN67FDNZJDsxXvNg0x1: null,
  D0RzgCTWzjfHMaTBi5iPLDDxaUv1: null,
  p2HbeMXWG6c7NGpl8vnKkJjfgkL2: null,
  sVyvD2OzgbUpFc9LWHJj4F6wqa73: null,
  ziQ9EwcuM2g52X9h77ORTP5CMAA2: null,
};
const TEST_NAMES = ['kofi2', 'kofi3', 'kofi4', 'ama1', 'efua1'];

const { db, FieldValue, listAll } = connect();

// 1. Public push addresses.
const users = await listAll('users', ['webPush']);
const withPublic = users.filter((user) => Array.isArray(value(user.fields.webPush)) && value(user.fields.webPush).length);
console.log(`${withPublic.length} profiles still show push addresses publicly.`);

// 2. Test accounts.
const testUsers = [];
for (const uid of Object.keys(TEST_ACCOUNTS)) if ((await db.doc(`users/${uid}`).get()).exists) testUsers.push(uid);
const testNames = [];
for (const name of TEST_NAMES) {
  const entry = await db.doc(`usernames/${name}`).get();
  if (entry.exists && entry.data().uid in TEST_ACCOUNTS) testNames.push(name);
}
console.log(`${testUsers.length} test-account profiles and ${testNames.length} test usernames are still there.`);

if (!APPLY) {
  console.log('Counts only. Add --apply to tidy them.');
  process.exit(0);
}
for (const user of withPublic) {
  const own = await db.doc(`pushDevices/${user.id}`).get();
  const devices = mergeDevices(own.exists ? own.data().webPush : [], value(user.fields.webPush));
  await db.doc(`pushDevices/${user.id}`).set({ webPush: devices, updatedAt: new Date() });
  await db.doc(`users/${user.id}`).update({ webPush: FieldValue.delete() });
}
for (const name of testNames) await db.doc(`usernames/${name}`).delete();
for (const uid of testUsers) {
  await db.doc(`scores/${uid}`).delete().catch(() => undefined);
  await db.recursiveDelete(db.doc(`users/${uid}`));
}
console.log(`Moved ${withPublic.length} learners' push addresses; removed ${testUsers.length} test profiles and ${testNames.length} test usernames.`);
