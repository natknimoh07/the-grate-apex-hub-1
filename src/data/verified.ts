// Verified learners: a tick next to their name (like X), seen by everyone.
// Gold for the owner's gold list, blue for the blue list, and blue for anyone
// the original app verified (verified/{uid}, written only by admins under the
// deployed rules).
//
// Most places know a learner's uid but not their username (posts, comments,
// stories, chats), so the list's accounts are looked up once per session by
// username (users and scores, readable by every signed-in learner) and the
// tick is shown wherever that uid appears.
import { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

import { auth, db } from '@/lib/firebase';

export const VERIFIED_USERNAMES: readonly string[] = ['prince', 'theapexhub', 'originate', 'robotnik', 'stbretro', 'grate_apex', 'myuncletouchesme', 'grate_apex02', 'stickyfingers', 'retro', 'retr0', 'patricia_a', 'atu', 'grateapex_official', 'nate', 'echocircuitnkn07', 'ev', 'drev', 'heisgoddey', 'dennis', 'yeezy'];
export const BLUE_VERIFIED_USERNAMES: readonly string[] = ['bevelyn', 'amtul', 'akua', 'cupid', 'amtul_1'];
// Legends (owner, 2026-11-05): the top 5 lifetime XP learners since the original app (July 2026).
// They get a blue star instead of a tick, everywhere a tick is shown; it outranks gold and blue.
export const LEGEND_USERNAMES: readonly string[] = ['hefata', 'bevelyn', 'dennis', 'koddy', 'angela'];

export type VerifiedTier = 'legend' | 'gold' | 'blue';

const TIER_RANK: Record<VerifiedTier, number> = { legend: 3, gold: 2, blue: 1 };

/** The higher of two ticks (legend > gold > blue). */
export function higherTier(a: VerifiedTier | null | undefined, b: VerifiedTier | null | undefined): VerifiedTier | null {
  if (!a) return b ?? null;
  if (!b) return a;
  return TIER_RANK[a] >= TIER_RANK[b] ? a : b;
}

const normalise = (username: string) => username.trim().replace(/^@/, '').toLowerCase();

/** The tick a username gets from the owner's lists, if any. */
export function verifiedTierOf(username: string | null | undefined): VerifiedTier | null {
  if (!username) return null;
  const name = normalise(String(username));
  if (LEGEND_USERNAMES.includes(name)) return 'legend';
  return VERIFIED_USERNAMES.includes(name) ? 'gold' : BLUE_VERIFIED_USERNAMES.includes(name) ? 'blue' : null;
}

export const isVerifiedUsername = (username: string | null | undefined) => verifiedTierOf(username) !== null;

/** Spellings a username may be stored with (Firestore `in` matches exactly). */
export function usernameSpellings(names: readonly string[] = [...VERIFIED_USERNAMES, ...BLUE_VERIFIED_USERNAMES, ...LEGEND_USERNAMES]) {
  return [...new Set(names.flatMap((name) => [name, name[0].toUpperCase() + name.slice(1), name.toUpperCase()]))];
}

let listUids: Promise<Map<string, VerifiedTier>> | null = null;

/** The uids of the owner's verified usernames (one lookup per session). */
function verifiedListUids() {
  if (!listUids) {
    listUids = (async () => {
      await auth.authStateReady();
      if (!auth.currentUser) {
        listUids = null;
        return new Map<string, VerifiedTier>();
      }
      // Firestore 'in' takes up to 30 values, so the spellings are looked up in batches.
      const spellings = usernameSpellings();
      const batches = Array.from({ length: Math.ceil(spellings.length / 30) }, (_, index) => spellings.slice(index * 30, index * 30 + 30));
      const snaps = await Promise.all(
        ['users', 'scores'].flatMap((name) => batches.map((batch) => getDocs(query(collection(db, name), where('username', 'in', batch))).catch(() => null)))
      );
      const uids = new Map<string, VerifiedTier>();
      for (const snap of snaps) {
        for (const item of snap?.docs ?? []) {
          const tier = verifiedTierOf(item.data().username as string);
          if (tier) uids.set(item.id, higherTier(uids.get(item.id), tier) ?? tier);
        }
      }
      return uids;
    })();
  }
  return listUids;
}

const checked = new Map<string, Promise<VerifiedTier | null>>();

/** A learner's tick: from the owner's lists (by uid), or blue when the original app verified them. Cached per session. */
export function verifiedTierOfUid(uid: string) {
  let promise = checked.get(uid);
  if (!promise) {
    promise = verifiedListUids()
      .then(async (list) => list.get(uid) ?? ((await getDoc(doc(db, 'verified', uid)).then((snap) => snap.exists())) ? 'blue' : null))
      .catch(() => null);
    checked.set(uid, promise);
  }
  return promise;
}

export function useVerifiedTier(uid: string | null | undefined): VerifiedTier | null {
  const [verified, setVerified] = useState<{ uid: string; value: VerifiedTier | null } | null>(null);
  useEffect(() => {
    if (!uid) return;
    let live = true;
    void verifiedTierOfUid(uid).then((value) => { if (live) setVerified({ uid, value }); });
    return () => { live = false; };
  }, [uid]);
  return uid && verified?.uid === uid ? verified.value : null;
}

export type SuggestedAccount = { uid: string; username: string; displayName: string | null; avatarUrl: string | null; bio: string | null };

/** The first three suggestions, in this order; the other gold-tick accounts follow. */
export const SUGGESTED_FIRST: readonly string[] = ['grateapex_official', 'prince', 'originate'];

/** The gold-tick accounts, for "Suggested for you" after onboarding (not including you). */
export async function loadGoldAccounts(): Promise<SuggestedAccount[]> {
  await auth.authStateReady();
  const me = auth.currentUser?.uid;
  if (!me) return [];
  const spellings = usernameSpellings(VERIFIED_USERNAMES);
  const batches = Array.from({ length: Math.ceil(spellings.length / 30) }, (_, index) => spellings.slice(index * 30, index * 30 + 30));
  const snaps = await Promise.all(batches.map((batch) => getDocs(query(collection(db, 'users'), where('username', 'in', batch))).catch(() => null)));
  const seen = new Set<string>();
  const accounts: SuggestedAccount[] = [];
  for (const snap of snaps) {
    for (const item of snap?.docs ?? []) {
      const data = item.data();
      if (item.id === me || seen.has(item.id) || !VERIFIED_USERNAMES.includes(String(data.username ?? '').toLowerCase())) continue;
      seen.add(item.id);
      accounts.push({
        uid: item.id,
        username: String(data.username),
        displayName: typeof data.displayName === 'string' && data.displayName.trim() ? data.displayName.trim() : null,
        avatarUrl: data.avatar_url || data.photo || null,
        bio: typeof data.bio === 'string' && data.bio.trim() ? data.bio.trim() : null,
      });
    }
  }

  // The owner's order (2026-10-18): @grateapex_official, @prince, @originate, then the
  // other gold-tick accounts in the order of the list above.
  const order = (name: string) => {
    const lower = name.toLowerCase();
    const pinned = SUGGESTED_FIRST.indexOf(lower);
    return pinned >= 0 ? pinned - SUGGESTED_FIRST.length : VERIFIED_USERNAMES.indexOf(lower);
  };
  return accounts.sort((a, b) => order(a.username) - order(b.username));
}
