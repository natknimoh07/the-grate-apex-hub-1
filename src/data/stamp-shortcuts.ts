// Stamp shortcuts (owner, 2026-10-31): a named set of friends, so one tap picks them all
// in "Stamp a friend". Personal: kept on this device and on the learner's own account
// (account-sync `synced.stampShortcuts`), so they are the same on every device.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSyncExternalStore } from 'react';

import { saveSynced, syncedValue } from '@/data/account-sync';
import { auth } from '@/lib/firebase';

export type StampShortcut = { id: string; name: string; friendIds: string[] };
type Saved = { list: StampShortcut[]; updatedAt: number };

export const SHORTCUT_LIMIT = 12;
export const SHORTCUT_NAME_MAX = 24;
const KEY = 'grateapex_stamp_shortcuts';
const EMPTY: Saved = { list: [], updatedAt: 0 };
let saved: Saved = EMPTY;
let loadedFor: string | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());

function clean(value: unknown): Saved | null {
  if (!value || typeof value !== 'object') return null;
  const v = value as Partial<Saved>;
  const list = (Array.isArray(v.list) ? v.list : []).flatMap((item): StampShortcut[] => {
    if (!item || typeof item.id !== 'string' || typeof item.name !== 'string' || !Array.isArray(item.friendIds)) return [];
    const friendIds = item.friendIds.filter((id): id is string => typeof id === 'string').slice(0, 50);
    return friendIds.length ? [{ id: item.id, name: item.name.slice(0, SHORTCUT_NAME_MAX), friendIds }] : [];
  });
  return { list: list.slice(0, SHORTCUT_LIMIT), updatedAt: Number(v.updatedAt) || 0 };
}

async function load() {
  const uid = auth.currentUser?.uid ?? null;
  if (!uid || loadedFor === uid) return;
  loadedFor = uid;
  saved = EMPTY;
  const local = clean(JSON.parse((await AsyncStorage.getItem(`${KEY}:${uid}`).catch(() => null)) ?? 'null'));
  if (local && auth.currentUser?.uid === uid) { saved = local; emit(); }
  const remote = clean(await syncedValue<unknown>('stampShortcuts').catch(() => undefined));
  // The newer copy wins (changed on another device).
  if (remote && auth.currentUser?.uid === uid && remote.updatedAt > saved.updatedAt) { saved = remote; emit(); }
}

function change(list: StampShortcut[]) {
  const uid = auth.currentUser?.uid;
  if (!uid) return;
  saved = { list, updatedAt: Date.now() };
  emit();
  void AsyncStorage.setItem(`${KEY}:${uid}`, JSON.stringify(saved)).catch(() => {});
  saveSynced('stampShortcuts', saved);
}

export function useStampShortcuts(): StampShortcut[] {
  const value = useSyncExternalStore((listener) => { void load(); listeners.add(listener); return () => { listeners.delete(listener); }; }, () => saved, () => saved);
  return value.list;
}

/** Saves these friends under a name. Returns false when the name is empty or the limit is reached. */
export function addStampShortcut(name: string, friendIds: readonly string[]): boolean {
  const clean = name.trim().slice(0, SHORTCUT_NAME_MAX);
  if (!clean || !friendIds.length || saved.list.length >= SHORTCUT_LIMIT) return false;
  change([...saved.list, { id: `s${Date.now().toString(36)}`, name: clean, friendIds: [...new Set(friendIds)] }]);
  return true;
}

export function removeStampShortcut(id: string) {
  change(saved.list.filter((item) => item.id !== id));
}
