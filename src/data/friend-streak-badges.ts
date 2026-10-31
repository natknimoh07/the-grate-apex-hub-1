// Friend streaks shown beside people, like Snapchat (owner, 2026-10-31): in the chats
// list and in "Stamp a friend". Each streak is loaded by friend-streak-store (reads
// only messages newer than the last load); the last value seen is kept on the device,
// so the badges show at once and only the first few friends are refreshed each time.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useSyncExternalStore } from 'react';

import { loadFriendStreak, onFriendStreaksChanged } from '@/data/friend-streak-store';
import { auth } from '@/lib/firebase';

export type StreakBadge = { streak: number; atRisk: boolean; at: number };

const KEY = 'grateapex_friend_streak_badges';
const FRESH_MS = 10 * 60_000;
let badges: Record<string, StreakBadge> = {};
let loadedFor: string | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());

async function loadSaved() {
  const uid = auth.currentUser?.uid ?? null;
  if (!uid || loadedFor === uid) return;
  loadedFor = uid;
  badges = {};
  try {
    const saved = JSON.parse((await AsyncStorage.getItem(`${KEY}:${uid}`)) ?? '{}') as Record<string, StreakBadge>;
    if (auth.currentUser?.uid === uid && saved && typeof saved === 'object') badges = { ...saved, ...badges };
  } catch {
    // nothing saved yet
  }
  emit();
}

function save() {
  const uid = auth.currentUser?.uid;
  if (uid) void AsyncStorage.setItem(`${KEY}:${uid}`, JSON.stringify(badges)).catch(() => {});
}

const refreshing = new Set<string>();
/** Loads the streaks of these friends (the first `limit`, oldest value first), one at a time. */
async function refresh(friendIds: readonly string[], limit: number) {
  await loadSaved();
  const stale = friendIds.filter((id) => !refreshing.has(id) && Date.now() - (badges[id]?.at ?? 0) > FRESH_MS).slice(0, limit);
  for (const id of stale) {
    refreshing.add(id);
    try {
      const status = await loadFriendStreak(id);
      if (status) {
        badges = { ...badges, [id]: { streak: status.streak, atRisk: status.atRisk, at: Date.now() } };
        emit();
      }
    } finally {
      refreshing.delete(id);
    }
  }
  if (stale.length) save();
}

let watching = false;
function watch() {
  if (watching) return;
  watching = true;
  // A stamp sent (or a freeze used) changes a streak: those friends are loaded again.
  onFriendStreaksChanged(() => {
    badges = Object.fromEntries(Object.entries(badges).map(([id, badge]) => [id, { ...badge, at: 0 }]));
    emit();
  });
}

/**
 * The streak badges of these friends. The first `refreshLimit` are loaded again
 * when their value is older than 10 minutes (each load reads that chat's new messages).
 */
export function useFriendStreakBadges(friendIds: readonly string[], refreshLimit = 12): Record<string, StreakBadge> {
  const value = useSyncExternalStore(
    (listener) => { watch(); listeners.add(listener); return () => { listeners.delete(listener); }; },
    () => badges,
    () => badges,
  );
  const key = friendIds.join(',');
  // Again after every change: only stale badges are loaded, so this is cheap.
  useEffect(() => {
    if (!friendIds.length) return;
    void refresh(friendIds, refreshLimit).catch(() => undefined);
    // `key` stands for the list of friends.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, refreshLimit, value]);
  return value;
}
