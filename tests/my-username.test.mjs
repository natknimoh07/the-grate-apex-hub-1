// Signed-in learners were told to choose a username (owner, 2026-11-05): a read of
// users/{uid} holding only the start-up fields (online status), or a server that did
// not answer, looked like "no username". lib/my-username.ts finds the name from the
// loaded profile, the database, the server and the device copy; these checks keep
// every path that asks for a username on it.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const source = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const has = (path, pattern) => assert.ok(pattern.test(source(path)), `${path}: no ${pattern}`);

describe('your own username', () => {
  it('is looked up in four places before giving up', () => {
    const lib = source('src/lib/my-username.ts');
    for (const step of ['known.get(uid)', 'getDoc(', 'getDocFromServer(', 'deviceCopy(uid)']) assert.ok(lib.includes(step), `my-username.ts: no ${step}`);
  });

  it('is used by posting, comments and groups', () => {
    has('src/data/community.ts', /async function myUsername[\s\S]{0,400}findMyUsername\(uid\)/);
    has('src/data/group-chat.ts', /async function myName[\s\S]{0,300}findMyUsername\(uid\)/);
  });

  it('is kept when a read is missing it, and checked before "Choose your username"', () => {
    has('src/hooks/use-auth.tsx', /function authUserOf[\s\S]{0,700}knownMyUsername\(firebaseUser\.uid\)/);
    has('src/hooks/use-auth.tsx', /function saveProfileCopy[\s\S]{0,300}knownMyUsername\(uid\)/);
    has('src/hooks/use-auth.tsx', /onMyUsernameFound\(/);
    has('src/app/_layout.tsx', /findMyUsername\(uid\)\.then\(\(name\) => \{\s*if \(!name[^\n]*choose-username/);
  });
});
