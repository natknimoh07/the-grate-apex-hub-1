// The XP ledger shared by every device of one account (owner, 2026-11-14: one phone
// showed "+30 XP today" and the laptop "+400 XP today" on the same account).
//
// Every reward is one entry, keyed `${sourceType}:${sourceId}`. The account keeps the
// newest entries as a map on its private progress document (`xpEvents`), written in
// the same transaction that changes the account's XP, so a key is paid once for the
// whole account, not once per device. Each device keeps a copy of the account's
// ledger plus the entries it has earned but not yet sent (`synced: false`, e.g.
// while offline), and its XP is simply:
//
//   account XP (last seen) + the unsent entries.
//
// The account's XP is a sum of events, never "the highest total any device had".
// These functions are pure, so tests/xp-ledger.test.mjs can check them.

export type XpSourceType = 'lesson' | 'quiz' | 'practice' | 'review' | 'apex' | 'milestone';

export type XpEntry = {
  key: string; // `${sourceType}:${sourceId}` — unique per reward
  sourceType: XpSourceType;
  sourceId: string;
  amount: number; // signed
  label: string;
  at: number;
  /** True once the account holds this entry (false while it waits to be sent). */
  synced?: boolean;
};

/** One entry as kept on the account (the key is the map key). */
export type CloudXpEvent = { amount: number; at: number; label: string; type: XpSourceType };

export type CloudLedger = { xp: number; xpEvents: Record<string, CloudXpEvent>; xpSeq: number };

/** Entries kept on a device, newest first. */
export const LEDGER_LIMIT = 300;
/** Entries kept on the account (older ones are dropped; their XP is already in the total). */
export const CLOUD_LEDGER_LIMIT = 400;

const SOURCE_TYPES: readonly string[] = ['lesson', 'quiz', 'practice', 'review', 'apex', 'milestone'];

/** The account's event map from whatever the document holds (anything odd is dropped). */
export function cloudEventsOf(value: unknown): Record<string, CloudXpEvent> {
  const out: Record<string, CloudXpEvent> = {};
  if (!value || typeof value !== 'object') return out;
  for (const [key, raw] of Object.entries(value as Record<string, unknown>)) {
    if (!raw || typeof raw !== 'object') continue;
    const event = raw as Partial<CloudXpEvent>;
    if (typeof event.amount !== 'number' || !Number.isFinite(event.amount) || typeof event.at !== 'number') continue;
    out[key] = {
      amount: Math.round(event.amount),
      at: event.at,
      label: typeof event.label === 'string' ? event.label : '',
      type: SOURCE_TYPES.includes(String(event.type)) ? (event.type as XpSourceType) : 'quiz',
    };
  }
  return out;
}

/** The account ledger from a progress document (`xp`, `xpEvents`, `xpSeq`). */
export function cloudLedgerOf(data: Record<string, unknown> | undefined | null): CloudLedger {
  return {
    xp: Math.max(0, Number(data?.xp) || 0),
    xpEvents: cloudEventsOf(data?.xpEvents),
    xpSeq: Math.max(0, Number(data?.xpSeq) || 0),
  };
}

/** The newest `limit` events (by time); the rest are dropped. */
export function trimCloudEvents(events: Record<string, CloudXpEvent>, limit = CLOUD_LEDGER_LIMIT): Record<string, CloudXpEvent> {
  const keys = Object.keys(events);
  if (keys.length <= limit) return events;
  keys.sort((a, b) => events[b].at - events[a].at);
  return Object.fromEntries(keys.slice(0, limit).map((key) => [key, events[key]]));
}

/** Source type and id from a key (`${sourceType}:${sourceId}`). */
function splitKey(key: string, type: XpSourceType): { sourceType: XpSourceType; sourceId: string } {
  const colon = key.indexOf(':');
  const head = colon > 0 ? key.slice(0, colon) : '';
  return { sourceType: SOURCE_TYPES.includes(head) ? (head as XpSourceType) : type, sourceId: colon > 0 ? key.slice(colon + 1) : key };
}

/**
 * The device's ledger after seeing the account's: every account entry (marked synced,
 * the account's amount), plus the device's unsent entries the account does not hold.
 * Newest first, at most `limit` entries — but an unsent entry is never dropped.
 */
export function mergeLedger(local: readonly XpEntry[], cloud: Record<string, CloudXpEvent>, limit = LEDGER_LIMIT): XpEntry[] {
  const byKey = new Map<string, XpEntry>();
  for (const entry of local) if (!byKey.has(entry.key)) byKey.set(entry.key, entry);
  for (const [key, event] of Object.entries(cloud)) {
    const mine = byKey.get(key);
    byKey.set(key, {
      key,
      ...(mine ? { sourceType: mine.sourceType, sourceId: mine.sourceId } : splitKey(key, event.type)),
      amount: event.amount,
      label: event.label || mine?.label || '',
      at: event.at,
      synced: true,
    });
  }
  const merged = [...byKey.values()].sort((a, b) => b.at - a.at);
  if (merged.length <= limit) return merged;
  const kept: XpEntry[] = [];
  let room = limit;
  for (const entry of merged) {
    if (entry.synced === false) kept.push(entry);
    else if (room > 0) { kept.push(entry); room -= 1; }
  }
  return kept.sort((a, b) => b.at - a.at);
}

/** The device's XP: the account's total plus what it has earned and not yet sent. */
export function localXp(cloudXp: number, ledger: readonly XpEntry[]): number {
  const pending = ledger.filter((entry) => entry.synced === false).reduce((sum, entry) => sum + entry.amount, 0);
  return Math.max(0, Math.round(cloudXp + pending));
}

export type LedgerUpload = { key: string; amount: number; at: number; label: string; type: XpSourceType; /** False: record the entry without changing the XP (an entry already counted before the shared ledger existed). */ countXp: boolean };

/**
 * Applies uploads to the account ledger, the way the transaction does: a key the
 * account already holds is a duplicate (paid elsewhere, not paid again); a new one is
 * recorded and, if it counts, added to the XP (never below 0). `floorXp` keeps the
 * total at least this high, used once per device when it moves to the shared ledger
 * (the old behaviour, where the highest total any device had was the account's).
 */
export function applyUploads(cloud: CloudLedger, uploads: readonly LedgerUpload[], floorXp?: number): CloudLedger & { duplicates: string[]; changed: boolean } {
  const xpEvents = { ...cloud.xpEvents };
  let xp = cloud.xp;
  let changed = false;
  if (floorXp !== undefined && floorXp > xp) { xp = Math.round(floorXp); changed = true; }
  const duplicates: string[] = [];
  for (const upload of uploads) {
    if (xpEvents[upload.key]) { duplicates.push(upload.key); continue; }
    xpEvents[upload.key] = { amount: Math.round(upload.amount), at: upload.at, label: upload.label, type: upload.type };
    if (upload.countXp) xp = Math.max(0, xp + Math.round(upload.amount));
    changed = true;
  }
  return { xp, xpEvents: changed ? trimCloudEvents(xpEvents) : cloud.xpEvents, xpSeq: changed ? cloud.xpSeq + 1 : cloud.xpSeq, duplicates, changed };
}
