// The signed-in learner's own username, for posting, comments and groups.
//
// Owner, 2026-11-05: "I am logged in but the app is telling me to choose a username".
// Posting and groups used to read users/{uid} again and gave up with "Choose a
// username first" whenever that read held only what the app had just written
// (online status), or the server could not be reached (no connection, or the
// free plan's daily reads used up) — even though the profile was loaded.
//
// So the username is found, in order, from:
//   1. the profile the app already has (hooks/use-auth.tsx tells this file, no read),
//   2. the database (a local copy is fine if it has the username),
//   3. the server,
//   4. the copy of the profile saved on this device (use-auth.tsx keeps it).
// Only when all four have none does the learner really need to choose one.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc, getDocFromServer } from 'firebase/firestore';

import { db } from '@/lib/firebase';
import { needsUsername } from '@/lib/login-identifier';

/** Device key of the profile copy (hooks/use-auth.tsx writes it). */
export const PROFILE_COPY_KEY = 'grateapex_profile:';

const known = new Map<string, string>();
const listeners = new Set<(uid: string) => void>();

/** Told when a read finds the username the loaded profile was missing (use-auth.tsx redraws). */
export function onMyUsernameFound(listener: (uid: string) => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

/** Called by use-auth.tsx whenever it has the learner's profile. */
export function noteMyUsername(uid: string, username: unknown) {
  if (!needsUsername(username)) known.set(uid, username as string);
}

/** The username already seen for this account in this visit, if any (no read). */
export function knownMyUsername(uid: string): string | null {
  return known.get(uid) ?? null;
}

async function deviceCopy(uid: string): Promise<unknown> {
  try {
    return JSON.parse((await AsyncStorage.getItem(PROFILE_COPY_KEY + uid)) ?? 'null')?.username;
  } catch {
    return undefined;
  }
}

/** The learner's username, or null when the account really has none yet. */
export async function findMyUsername(uid: string): Promise<string | null> {
  const remembered = known.get(uid);
  if (remembered) return remembered;
  const steps: (() => Promise<unknown>)[] = [
    () => getDoc(doc(db, 'users', uid)).then((snap) => snap.data()?.username),
    () => getDocFromServer(doc(db, 'users', uid)).then((snap) => snap.data()?.username),
    () => deviceCopy(uid),
  ];
  for (const step of steps) {
    const username = await step().catch(() => undefined);
    if (!needsUsername(username)) {
      known.set(uid, username as string);
      listeners.forEach((listener) => listener(uid));
      return username as string;
    }
  }
  return null;
}
