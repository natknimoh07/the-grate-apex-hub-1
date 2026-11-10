// Usernames from before the username registry (usernames/{name}) existed have no entry there,
// so someone else could claim the entry and the name (2026-11-10 audit). This gives every
// existing username an entry for its own account. Names already in the registry are left
// alone; a name held by two accounts is only counted, for a person to decide.
// See scripts/security/_store.mjs for how to run it.
import { APPLY, connect, value } from './_store.mjs';

const NAME = /^[a-z0-9_]{3,20}$/;
const { db, listAll } = connect();
const [users, entries] = await Promise.all([listAll('users', ['username']), listAll('usernames', ['uid'])]);
const owner = new Map(entries.map((entry) => [entry.id, value(entry.fields.uid)]));
const missing = [];
let shared = 0;
for (const user of users) {
  const name = value(user.fields.username);
  if (typeof name !== 'string' || !NAME.test(name)) continue;
  if (!owner.has(name)) missing.push({ name, uid: user.id });
  else if (owner.get(name) !== user.id) shared += 1;
}
const byName = new Map();
for (const item of missing) byName.set(item.name, [...(byName.get(item.name) ?? []), item.uid]);
const safe = [...byName].filter(([, uids]) => uids.length === 1);
console.log(`${users.length} profiles, ${entries.length} registry entries.`);
console.log(`${safe.length} usernames have no entry; ${byName.size - safe.length} missing names are used by two or more accounts; ${shared} profiles use a name registered to another account.`);
if (!APPLY) {
  console.log('Counts only. Add --apply to add the missing entries.');
  process.exit(0);
}
let added = 0;
for (const [name, [uid]] of safe) {
  try {
    await db.doc(`usernames/${name}`).set({ uid }, { exists: false });
    added += 1;
  } catch (error) {
    if (error?.code !== 9) throw error; // someone claimed it meanwhile: leave it
  }
}
console.log(`Added ${added} entries.`);
