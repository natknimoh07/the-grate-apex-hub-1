// The app update the learner can choose to install (owner, 2026-11-10): found by
// components/app-update-watcher.tsx, shown as its "Update ready" popup and in
// Settings → Help → App updates. Nothing reloads the app except applyAppUpdate(),
// which only the learner's "Update now" calls.
import { useSyncExternalStore } from 'react';
import { Platform } from 'react-native';

import { type UpdateNote, parseUpdateNotes } from '@/data/app-update-rules';
// The notes this version was built with (the live site's copy may be newer).
import whatsNew from '../../public/whats-new.json';

export const BUILT_WITH_NOTES: UpdateNote[] = parseUpdateNotes(whatsNew);

/** Asks the watcher to look for a new version now (Settings → Check now, a new service worker). */
export const UPDATE_CHECK_EVENT = 'grateapex:update-check';

export type AppUpdate = {
  /** A newer version is on the live site. */
  ready: boolean;
  /** What it brings (empty: small fixes). */
  notes: UpdateNote[];
  /** Its entry script, so "Later" applies to this version only. */
  version: string | null;
  /** A check is running (Settings → Check now). */
  checking: boolean;
};

let state: AppUpdate = { ready: false, notes: [], version: null, checking: false };
const listeners = new Set<() => void>();

export function setAppUpdate(next: Partial<AppUpdate>) {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
}

export function useAppUpdate(): AppUpdate {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => state,
    () => state,
  );
}

export function requestUpdateCheck() {
  if (Platform.OS === 'web' && typeof window !== 'undefined') window.dispatchEvent(new Event(UPDATE_CHECK_EVENT));
}

/** Installs the new version: the page loads again from the live site. Only the learner's "Update now" calls this. */
export function applyAppUpdate() {
  if (Platform.OS === 'web' && typeof window !== 'undefined') window.location.reload();
}
