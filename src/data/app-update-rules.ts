// What's new in an update (owner, 2026-11-10: "real time users may find it annoying … include a popup
// or option where the user chooses to download the new updates … and a short easy to understand
// message for updates"). The notes are in public/whats-new.json: the running app carries the copy it
// was built with, and asks the live site for the current one, so the difference is what the update
// brings. Pure, for tests (tests/app-update.test.mjs).

export type UpdateNote = { id: string; date: string; title: string; points: string[] };

export const MAX_TITLE = 48;
export const MAX_POINTS = 3;
export const MAX_POINT = 120;
/** Shown when an update brings no note of its own. */
export const FALLBACK_NOTE = 'Small fixes and improvements.';

const isNote = (value: unknown): value is UpdateNote => {
  if (!value || typeof value !== 'object') return false;
  const note = value as Record<string, unknown>;
  return typeof note.id === 'string' && note.id.length > 0
    && typeof note.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(note.date)
    && typeof note.title === 'string' && note.title.trim().length > 0
    && Array.isArray(note.points) && note.points.length > 0 && note.points.every((point) => typeof point === 'string' && point.trim().length > 0);
};

/** The notes in a whats-new.json file, newest first; anything malformed is left out rather than shown. */
export function parseUpdateNotes(data: unknown): UpdateNote[] {
  const list = data && typeof data === 'object' ? (data as { updates?: unknown }).updates : null;
  if (!Array.isArray(list)) return [];
  return list.filter(isNote).map((note) => ({ id: note.id, date: note.date, title: note.title.trim(), points: note.points.slice(0, MAX_POINTS).map((point) => point.trim()) }));
}

/** The live notes this version does not have yet (what the update brings), newest first, at most `limit`. */
export function notesSince(live: readonly UpdateNote[], known: readonly UpdateNote[], limit = 3): UpdateNote[] {
  const seen = new Set(known.map((note) => note.id));
  return live.filter((note) => !seen.has(note.id)).slice(0, limit);
}

/** "10 Nov" for a note's date. */
export function noteDay(date: string) {
  const [year, month, day] = date.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return year && month && day ? `${day} ${months[month - 1]}` : date;
}
