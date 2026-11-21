// Weekly leagues with everyone (not only friends), with promotion and
// relegation — like other learning apps. Tiers are separate from ranks.
//
// Each learner keeps their league entry on their own users/{uid} document
// (allowed by the deployed rules; readable by any signed-in learner):
//   league = { week, tier, startXp, prev? }
// Weekly XP = current lifetime XP (scores/{uid}.xp, the shared leaderboard)
// − startXp. At the first visit of a new week, each learner settles their own
// last week: their position in their tier → promoted (top 20%), relegated
// (bottom 20%) or stays, and they join the new week in their new tier.
// Like XP in both apps, this is computed by each learner's own app.
//
// Settling a finished week (2026-10-19 fix): my weekly XP is counted from my own
// XP history for exactly that Monday–Sunday (the figure the league card showed),
// and everyone else's from the weekly figure their app saved for that week — never
// "lifetime XP now − start", which also counts XP earned after the week ended (or
// 0 when the shared total lagged), and kept some top learners from moving up.
// Last week's result is checked again once with these rules; it can only move a
// learner up, never down.
//
// The live table (owner, 2026-11-14: the league differed between devices and was never
// up to date): everyone in a tier shares one document, leagueTables/{week}_{tier}, with
// one row per learner. A learner's app writes only its own row (the rules allow nothing
// else), 20 s after its XP last changed; the league card listens to that one document,
// so every device shows the same table, and a change costs one read per viewer.
import { collection, doc, type DocumentReference, getDoc, getDocFromCache, getDocFromServer, getDocs, limit, onSnapshot, query, runTransaction, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';

import { getLeagueOutcome, type LeagueOutcome } from '@/data/ranks';
import { auth, db } from '@/lib/firebase';
import { API_BASE } from '@/lib/live-site';
import { getProgressSnapshot, waitForProgressSync } from '@/data/progress';
import { activateLiveDataFailover, ensureLiveQuizSignIn, isLiveDataFailoverActive, isPrimaryFirestoreQuotaError, saveLiveLeagueFallbackRow, watchLiveDataFailover } from '@/data/live-quiz';
import { liveQuizDb } from '@/lib/live-quiz-firebase';

export const LEAGUE_TIERS = [
  { name: 'Bronze', emoji: '🥉', color: '#C07A3C' },
  { name: 'Silver', emoji: '🥈', color: '#9AA5B8' },
  { name: 'Gold', emoji: '🥇', color: '#E8B21E' },
  { name: 'Sapphire', emoji: '💙', color: '#3B6FE0' },
  { name: 'Ruby', emoji: '❤️', color: '#D63A4A' },
  { name: 'Emerald', emoji: '💚', color: '#1EA672' },
  { name: 'Amethyst', emoji: '💜', color: '#8B5CF6' },
  { name: 'Pearl', emoji: '🤍', color: '#C8C2D8' },
  { name: 'Obsidian', emoji: '🖤', color: '#3A3A44' },
  { name: 'Diamond', emoji: '💎', color: '#4FD1E8' },
] as const;

/**
 * `weeklyXp` is labelled with the week it counts (`xpWeek`). After a week ends and until the server
 * settles it, the app also saves its XP since Monday 00:00 (`nextXp`, for `nextWeek`), so the new
 * week starts at midnight, not when the server gets to it.
 */
export type LeagueEntry = { week: string; tier: number; startXp: number; weeklyXp?: number; weeklyByDevice?: Record<string, number>; xpWeek?: string; nextWeek?: string; nextXp?: number; prev?: { week: string; tier: number; weeklyXp: number; weeklyByDevice?: Record<string, number>; position: number; size: number; outcome: LeagueOutcome; rechecked?: boolean } };
export type LeagueRow = { userId: string; username: string | null; weeklyXp: number; isMe: boolean };

/** Monday 00:00 (local) of the week containing `time`, as 'YYYY-MM-DD'. */
export function weekKey(time = Date.now()) {
  const d = new Date(time);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** When this week's league ends (next Monday 00:00 local). */
export function weekEnds(time = Date.now()) {
  const d = new Date(time);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7) + 7);
  return d.getTime();
}

/** Monday 00:00 (local) of a week key, and the Monday after (the week's end). */
function weekRange(key: string) {
  const [y, m, d] = key.split('-').map(Number);
  const start = new Date(y, (m ?? 1) - 1, d ?? 1);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  return { start: start.getTime(), end: end.getTime() };
}

/** XP earned in a week, from the account's XP ledger (shared by every device; the league card's figure). */
export function myXpInWeek(key: string, ledger = getProgressSnapshot().xpLedger) {
  const { start, end } = weekRange(key);
  return ledger.filter((item) => item.at >= start && item.at < end).reduce((sum, item) => sum + Math.max(0, item.amount), 0);
}

/**
 * This week's XP: the account's ledger, or the figure already saved for this week if
 * that is higher (a device whose ledger has not caught up never lowers it). Never
 * "lifetime XP − the start point" (2026-11-14): the start point was written from two
 * different lifetime figures (the leaderboard's and the device's), and each round
 * between them pushed the weekly XP up by the gap.
 */
function currentWeeklyXp(entry: LeagueEntry | undefined, week: string) {
  const saved = entry?.xpWeek === week && typeof entry.weeklyXp === 'number' ? Math.max(0, entry.weeklyXp) : 0;
  return Math.max(myXpInWeek(week), saved);
}

const clampTier = (tier: number) => Math.max(0, Math.min(LEAGUE_TIERS.length - 1, Math.round(tier)));

/** The shared table document of one tier for one week. */
export const leagueTableId = (week: string, tier: number) => `${week}_${clampTier(tier)}`;

type TableRow = { username?: unknown; weeklyXp?: unknown };

/** Rows of a shared table document (anything odd is left out). */
export function tableRows(data: unknown, me: string): LeagueRow[] {
  const rows = (data as { rows?: unknown } | undefined)?.rows;
  if (!rows || typeof rows !== 'object') return [];
  return Object.entries(rows as Record<string, TableRow>).flatMap(([userId, row]) => {
    if (!row || typeof row !== 'object' || !/^[A-Za-z0-9]{6,64}$/.test(userId)) return [];
    return [{ userId, username: typeof row.username === 'string' ? row.username : null, weeklyXp: Math.max(0, Math.min(1_000_000, Math.round(Number(row.weeklyXp) || 0))), isMe: userId === me }];
  });
}

/**
 * Listens to the shared table of a tier (one read to open, one per change) while a league
 * card is on screen. Rows that are not in it yet (a learner whose app has not saved this
 * week) come from the server table the card loaded, so nobody is missing.
 */
export function watchLeagueTable(week: string, tier: number, onRows: (rows: LeagueRow[]) => void, onError?: (error: unknown) => void) {
  const me = auth.currentUser?.uid ?? '';
  let stopPrimary: (() => void) | null = null;
  let stopFallback: (() => void) | null = null;
  const startFallback = () => {
    if (stopFallback) return;
    let active = true;
    let unsubscribe: (() => void) | null = null;
    void ensureLiveQuizSignIn().then(() => {
      if (!active) return;
      unsubscribe = onSnapshot(doc(liveQuizDb, 'leagueTables', leagueTableId(week, tier)), (snap) => onRows(tableRows(snap.data(), me)), (error) => onError?.(error));
    }).catch((error) => onError?.(error));
    stopFallback = () => { active = false; unsubscribe?.(); };
  };
  const startPrimary = () => {
    if (stopPrimary) return;
    stopPrimary = onSnapshot(
      doc(db, 'leagueTables', leagueTableId(week, tier)),
      (snap) => onRows(tableRows(snap.data(), me)),
      (error) => {
        if (isPrimaryFirestoreQuotaError(error)) {
          void activateLiveDataFailover('quota-exceeded').catch((fallbackError) => onError?.(fallbackError));
        } else onError?.(error);
      }
    );
  };
  const stopMode = watchLiveDataFailover((active) => {
    lastLeague = null;
    if (active) {
      stopPrimary?.();
      stopPrimary = null;
      startFallback();
    } else {
      stopFallback?.();
      stopFallback = null;
      startPrimary();
    }
  }, () => {
    // A missing or temporarily unavailable status document must not disable the existing table.
    startPrimary();
  });
  return () => {
    stopMode();
    stopPrimary?.();
    stopFallback?.();
  };
}

/** Rows from the live table replace the server's for the same learner; the rest are kept. */
export function mergeTableRows(base: readonly LeagueRow[], live: readonly LeagueRow[]): LeagueRow[] {
  const byId = new Map(base.map((row) => [row.userId, row]));
  for (const row of live) byId.set(row.userId, { ...row, username: row.username ?? byId.get(row.userId)?.username ?? null });
  return standings([...byId.values()]);
}

let lastRowWrite = '';

/** My row in the shared table (the rules let me write only this one). Skipped without a username. */
async function saveMyTableRow(uid: string, week: string, tier: number, weeklyXp: number, username: string | null | undefined, league?: LeagueEntry) {
  if (!username) return;
  const mark = `${uid}|${week}|${tier}|${weeklyXp}|${JSON.stringify(league ?? null)}`;
  if (mark === lastRowWrite) return;
  lastRowWrite = mark;
  try {
    if (await isLiveDataFailoverActive().catch(() => false)) {
      await saveLiveLeagueFallbackRow({ week, tier: clampTier(tier), username, weeklyXp, league: league as unknown as Record<string, unknown> });
    } else {
      await setDoc(doc(db, 'leagueTables', leagueTableId(week, tier)), { week, tier: clampTier(tier), rows: { [uid]: { username, weeklyXp, at: serverTimestamp() } } }, { merge: true });
      void saveLiveLeagueFallbackRow({ week, tier: clampTier(tier), username, weeklyXp, league: league as unknown as Record<string, unknown> }).catch(() => {});
    }
  } catch (error) {
    if (isPrimaryFirestoreQuotaError(error)) {
      try {
        await activateLiveDataFailover('quota-exceeded');
        await saveLiveLeagueFallbackRow({ week, tier: clampTier(tier), username, weeklyXp, league: league as unknown as Record<string, unknown> });
        return;
      } catch (fallbackError) {
        console.warn('Could not save the live league row in the backup project:', fallbackError);
      }
    }
    lastRowWrite = '';
    // The rules are not published yet, or offline: the server table still shows the saved figure.
    if ((error as { code?: string } | null)?.code !== 'permission-denied') console.warn('Could not update the league table:', error);
  }
}

/** The tier after a finish: one up when promoted, one down when relegated. */
export function nextTier(tier: number, outcome: LeagueOutcome) {
  return clampTier(tier + (outcome === 'promoted' ? 1 : outcome === 'relegated' ? -1 : 0));
}

/** Positions by weekly XP (ties: earlier join keeps order). Promotion needs some XP that week. */
export function standings(rows: readonly LeagueRow[]) {
  return [...rows].sort((a, b) => b.weeklyXp - a.weeklyXp);
}

export function outcomeFor(position: number, size: number, weeklyXp: number): LeagueOutcome {
  const outcome = getLeagueOutcome(position, size);
  return outcome === 'promoted' && weeklyXp <= 0 ? 'stays' : outcome;
}

async function lifetimeXp(uids: readonly string[]) {
  const values = await Promise.all(uids.map((uid) => getDoc(doc(db, 'scores', uid)).then((snap) => ({ uid, xp: Number(snap.data()?.xp) || 0, username: (snap.data()?.username as string) ?? null })).catch(() => ({ uid, xp: 0, username: null }))));
  return new Map(values.map((value) => [value.uid, value]));
}

/**
 * Everyone in a tier for a week, with their weekly XP (live for this week; final for those already moved on).
 * `finished`: the week is over, so a learner still on it counts with the weekly figure their own app saved
 * for it (their XP since then belongs to the new week).
 */
async function tierRows(week: string, tier: number, me: string, finished = false): Promise<LeagueRow[]> {
  const shared = await serverTierRows(week, tier, me);
  if (shared) return shared;
  const [current, moved] = await Promise.all([
    getDocs(query(collection(db, 'users'), where('league.week', '==', week), where('league.tier', '==', tier), limit(200))).catch(() => null),
    getDocs(query(collection(db, 'users'), where('league.prev.week', '==', week), where('league.prev.tier', '==', tier), limit(200))).catch(() => null),
  ]);
  const live = current?.docs ?? [];
  // A finished week uses the weekly figure each learner's app saved, so only those without one need their
  // leaderboard XP (free plan: every scores read counts, and everyone settles at the same moment).
  // Only a figure saved for this very week counts (older saves had no label).
  const savedFor = (entry: LeagueEntry | undefined) => (finished && typeof entry?.weeklyXp === 'number' && (entry.xpWeek ?? week) === week ? entry.weeklyXp : null);
  const needXp = live.filter((item) => savedFor(item.data().league as LeagueEntry | undefined) === null);
  const xp = await lifetimeXp(needXp.map((item) => item.id));
  const rows = new Map<string, LeagueRow>();
  for (const item of live) {
    const entry = item.data().league as LeagueEntry;
    const now = xp.get(item.id);
    // A start point of 0 with no weekly figure is an entry made before XP had loaded: count 0 until that learner's app corrects it, never their lifetime XP.
    const trusted = Number(entry.startXp) > 0 || typeof entry.weeklyXp === 'number';
    const live = trusted ? Math.max(0, (now?.xp ?? 0) - (Number(entry.startXp) || 0)) : 0;
    const saved = savedFor(entry);
    const weeklyXp = saved !== null ? Math.max(0, saved) : live;
    rows.set(item.id, { userId: item.id, username: (item.data().username as string) ?? now?.username ?? null, weeklyXp, isMe: item.id === me });
  }
  for (const item of moved?.docs ?? []) {
    const prev = (item.data().league as LeagueEntry).prev!;
    if (!rows.has(item.id)) rows.set(item.id, { userId: item.id, username: (item.data().username as string) ?? null, weeklyXp: Math.max(0, Number(prev.weeklyXp) || 0), isMe: item.id === me });
  }
  return [...rows.values()];
}

/**
 * The league table from the server (api/league.mjs), which builds it once for everyone in
 * the tier and keeps it a few minutes: a handful of reads instead of hundreds per learner.
 * Null when it cannot be reached (a local preview, or not set up): then the app reads Firebase.
 */
async function serverTierRows(week: string, tier: number, me: string): Promise<LeagueRow[] | null> {
  try {
    const token = await auth.currentUser?.getIdToken();
    if (!token) return null;
    const response = await fetch(`${API_BASE}/api/league?week=${week}&tier=${tier}`, { headers: { Authorization: `Bearer ${token}` } });
    if (!response.ok) return null;
    const body = (await response.json()) as { rows?: { userId?: unknown; username?: unknown; weeklyXp?: unknown }[] };
    if (!Array.isArray(body.rows)) return null;
    return body.rows.map((row) => ({
      userId: String(row.userId ?? ''),
      username: typeof row.username === 'string' ? row.username : null,
      weeklyXp: Math.max(0, Number(row.weeklyXp) || 0),
      isMe: row.userId === me,
    }));
  } catch {
    return null;
  }
}

export type LeagueView = { week: string; tier: number; endsAt: number; rows: LeagueRow[]; prev: LeagueEntry['prev'] | null; /** Last week's final table, while the server settles it. */ settling?: boolean; /** While settling: my XP since Monday 00:00. */ thisWeekXp?: number };

// A league load reads everyone in the tier (and their XP), hundreds of reads on
// Firebase's free plan: one result is shared by every screen for a while.
const LEAGUE_REUSE_MS = 10 * 60_000;
// When Firebase's daily free reads run out it keeps retrying instead of failing, which left the
// league on "Loading…" (2026-10-26): give up after a while with a message instead.
const LEAGUE_TIMEOUT_MS = 25_000;
const LEAGUE_BUSY = 'The league can’t be loaded right now (the app has reached today’s database limit). It will be back within a few hours, and your place is kept.';

function withTimeout<T>(promise: Promise<T>, ms: number, message: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message)), ms);
    promise.then((value) => { clearTimeout(timer); resolve(value); }, (error) => { clearTimeout(timer); reject(error); });
  });
}
let lastLeague: { uid: string; week: string; at: number; view: Promise<LeagueView> } | null = null;

/**
 * This week's league for the signed-in learner (joins Bronze, or settles last week
 * first). A result from the last few minutes is reused unless `fresh` is asked for.
 */
export async function loadLeague(options: { fresh?: boolean } = {}): Promise<LeagueView> {
  await auth.authStateReady();
  const uid = auth.currentUser?.uid ?? '';
  const week = weekKey();
  if (await isLiveDataFailoverActive().catch(() => false)) lastLeague = null;
  if (!options.fresh && lastLeague && lastLeague.uid === uid && lastLeague.week === week && Date.now() - lastLeague.at < LEAGUE_REUSE_MS) {
    return lastLeague.view;
  }
  const view = withTimeout(readLeague(), LEAGUE_TIMEOUT_MS, LEAGUE_BUSY);
  lastLeague = { uid, week, at: Date.now(), view };
  view.catch(() => { if (lastLeague?.view === view) lastLeague = null; });
  return view;
}

/**
 * The league as saved on the learner's own document (already watched live, so free
 * to read): `settled` when this week has been joined and last week settled; only
 * then can its promotion be shown without a league load.
 */
export function savedLeague(value: unknown, week = weekKey()): { settled: boolean; tier: number; prev: LeagueEntry['prev'] | null } {
  const entry = value && typeof value === 'object' ? (value as LeagueEntry) : null;
  if (!entry || entry.week !== week || typeof entry.tier !== 'number') return { settled: false, tier: 0, prev: null };
  const recheck = Boolean(entry.prev && !entry.prev.rechecked && entry.prev.outcome !== 'promoted');
  return { settled: !recheck, tier: entry.tier, prev: entry.prev && entry.prev.week !== week ? entry.prev : null };
}

/**
 * Keeps this week's XP on the learner's own league entry and in the shared table up to
 * date (others' league tables read them), with no reads: the entry comes from the live
 * account and the XP from the account's ledger. Same figures as readLeague writes.
 */
export async function saveWeeklyLeagueXp(value: unknown, username?: string | null) {
  const uid = auth.currentUser?.uid;
  const saved = savedLeague(value);
  if (!uid) return;
  const entry = value as LeagueEntry | null;
  const fallbackActive = await isLiveDataFailoverActive().catch(() => false);
  if (!fallbackActive) await repairPreviousLeagueXp(uid, entry);
  if (entry?.week === weekKey(Date.now() - 7 * 86_400_000)) {
    // The week has ended and the server has not settled it yet.
    await waitForProgressSync().catch(() => {});
    const { finalXp, nextXp } = await saveClosedWeekXp(uid, entry, fallbackActive);
    if (fallbackActive && username) {
      await saveLiveLeagueFallbackRow({
        week: entry.week,
        tier: entry.tier,
        username,
        weeklyXp: finalXp,
        league: { ...entry, weeklyXp: finalXp, xpWeek: entry.week, nextWeek: weekKey(), nextXp } as unknown as Record<string, unknown>,
      }).catch((error) => console.warn('Could not save the Live project league entry:', error));
    }
    return;
  }
  if (!saved.settled || !entry) return;
  await waitForProgressSync().catch(() => {});
  const progress = getProgressSnapshot();
  const week = weekKey();
  const weeklyXp = currentWeeklyXp(entry, week);
  const startXp = Math.max(0, progress.xp - weeklyXp);
  if (progress.xp <= 0 && !fallbackActive) return;
  if (entry.weeklyXp === weeklyXp && entry.startXp === startXp && entry.xpWeek === week) {
    await saveMyTableRow(uid, week, entry.tier, weeklyXp, username, entry);
    return;
  }
  // Only the XP figures, never the whole entry: a stale copy must not put back an old league.
  const updatedEntry = { ...entry, startXp, weeklyXp, xpWeek: week };
  if (!fallbackActive) await updateDoc(doc(db, 'users', uid), { 'league.startXp': startXp, 'league.weeklyXp': weeklyXp, 'league.xpWeek': week }).catch(() => {});
  await saveMyTableRow(uid, week, entry.tier, weeklyXp, username, updatedEntry);
}

/**
 * A finished week whose figure on `prev` is below what the account's ledger shows for it
 * (a device that never sent its XP before the shared ledger existed): keep the exact
 * figure on `prev`; the scheduled league repair then recalculates the tier.
 */
async function repairPreviousLeagueXp(uid: string, entry: LeagueEntry | null) {
  const previous = entry?.prev;
  if (!previous || previous.week === weekKey()) return;
  const exactXp = myXpInWeek(previous.week);
  if (exactXp <= previous.weeklyXp) return;
  await updateDoc(doc(db, 'users', uid), { 'league.prev.weeklyXp': exactXp }).catch(() => {});
}

/**
 * A week runs Monday 00:00 to Monday 00:00. Once it has ended, and until the server settles it,
 * my exact figure for it (from my own XP history) is saved for the server, labelled with that
 * week, and so is my XP since this Monday 00:00: the server starts my new week from it, so XP
 * earned before it got round to settling still counts for the new week, never the old one.
 */
async function saveClosedWeekXp(uid: string, entry: LeagueEntry, skipPrimaryWrite = false) {
  const earlier = typeof entry.weeklyXp === 'number' && (entry.xpWeek ?? entry.week) === entry.week ? entry.weeklyXp : 0;
  const finalXp = Math.max(earlier, myXpInWeek(entry.week));
  const nextWeek = weekKey();
  const nextXp = myXpInWeek(nextWeek);
  if (entry.weeklyXp !== finalXp || entry.xpWeek !== entry.week || entry.nextWeek !== nextWeek || entry.nextXp !== nextXp) {
    // Labelled, so if the server settles first and this lands on the new week's entry, nobody counts it there.
    if (!skipPrimaryWrite) await updateDoc(doc(db, 'users', uid), { 'league.weeklyXp': finalXp, 'league.xpWeek': entry.week, 'league.nextWeek': nextWeek, 'league.nextXp': nextXp }).catch(() => {});
  }
  return { finalXp, nextXp };
}

/**
 * The league entry when the read showed none: checked again in a transaction (always from the
 * server) and created only when there really is none.
 *
 * 2026-11-06 ("#1 in Silver — promoted to Bronze"): a read of users/{uid} can hold only the
 * start-up fields (see hooks/use-auth.tsx), so learners who already had a league looked like
 * they had none. The app then saved a new Bronze entry with `merge: true`, which kept the old
 * `prev`: learners the server had moved up to Gold were put back in Bronze, with the card still
 * saying "promoted". Never put a learner who has a league back in Bronze; an entry that has lost
 * its week takes the tier its last result earned.
 */
async function joinLeague(ref: DocumentReference, week: string, myXp: number): Promise<LeagueEntry> {
  return runTransaction(db, async (tx) => {
    const found = (await tx.get(ref)).data()?.league as Partial<LeagueEntry> | undefined;
    if (found && typeof found.week === 'string' && typeof found.tier === 'number') return found as LeagueEntry;
    const prev = found?.prev && typeof found.prev.tier === 'number' ? found.prev : undefined;
    const tier = prev ? nextTier(prev.tier, prev.outcome) : clampTier(Number(found?.tier) || 0);
    const entry: LeagueEntry = { week, tier, startXp: myXp, ...(prev ? { prev } : {}) };
    // The whole league field, never merged into what is there.
    tx.set(ref, { league: entry }, { mergeFields: ['league'] });
    return entry;
  });
}

async function readLeague(): Promise<LeagueView> {
  await auth.authStateReady();
  const uid = auth.currentUser?.uid;
  if (!uid) throw new Error('Sign in to see your league.');
  const week = weekKey();
  const ref = doc(db, 'users', uid);
  let fallbackActive = await isLiveDataFailoverActive().catch(() => false);
  let mine: Record<string, any> | undefined;
  if (fallbackActive) {
    try {
      await ensureLiveQuizSignIn();
      mine = (await getDoc(doc(liveQuizDb, 'leagueEntries', uid))).data();
    } catch {
      // The prior profile may still be available in Firestore's local cache.
    }
    if (!mine) mine = (await getDocFromCache(ref).catch(() => null))?.data();
  } else {
    try {
      mine = (await getDocFromServer(ref)).data();
    } catch (error) {
      if (!isPrimaryFirestoreQuotaError(error)) throw error;
      await activateLiveDataFailover('quota-exceeded');
      fallbackActive = true;
      try {
        await ensureLiveQuizSignIn();
        mine = (await getDoc(doc(liveQuizDb, 'leagueEntries', uid))).data();
      } catch {
        mine = (await getDocFromCache(ref).catch(() => null))?.data();
      }
      if (!mine) throw error;
    }
  }
  mine ??= {};
  let entry = mine.league as LeagueEntry | undefined;

  // The account's XP ledger first: a finished week is settled with it, and the lifetime
  // figure is the account's (one figure everywhere, never the leaderboard's copy).
  await waitForProgressSync().catch(() => {});
  const myXp = getProgressSnapshot().xp;

  const lastWeek = weekKey(Date.now() - 7 * 86_400_000);
  if (!entry || typeof entry.week !== 'string') {
    if (fallbackActive) {
      const prev = entry?.prev && typeof entry.prev.tier === 'number' ? entry.prev : undefined;
      entry = { week, tier: prev ? nextTier(prev.tier, prev.outcome) : clampTier(Number(entry?.tier) || 0), startXp: myXp, ...(prev ? { prev } : {}) };
    } else entry = await joinLeague(ref, week, myXp);
  }
  if (entry.week === lastWeek) {
    // The week that just ended is settled by the server for everyone at once (api/leagues.mjs,
    // at midnight and again every morning), never by the app: apps that settled it themselves
    // saw only part of the league when the free plan's reads were used up, so some moved up
    // wrongly and some who earned it stayed (2026-10-26). Until then the final table is shown,
    // with my XP since Monday 00:00 beside it, and both my figures are saved for the server.
    const { finalXp, nextXp } = await saveClosedWeekXp(uid, entry, fallbackActive);
    if (fallbackActive && typeof mine.username === 'string') {
      await saveLiveLeagueFallbackRow({
        week: entry.week,
        tier: entry.tier,
        username: mine.username,
        weeklyXp: finalXp,
        league: { ...entry, weeklyXp: finalXp, xpWeek: entry.week, nextWeek: weekKey(), nextXp } as unknown as Record<string, unknown>,
      }).catch((error) => console.warn('Could not save the Live project league entry:', error));
    }
    const finished = standings((await tierRows(entry.week, entry.tier, uid, true)).map((row) => (row.isMe ? { ...row, weeklyXp: finalXp } : row)));
    if (!finished.some((row) => row.isMe)) finished.push({ userId: uid, username: mine.username ?? null, weeklyXp: finalXp, isMe: true });
    return { week: entry.week, tier: entry.tier, endsAt: weekEnds(), rows: standings(finished), prev: null, settling: true, thisWeekXp: nextXp };
  } else if (entry.week !== week) {
    // Away for more than a week: back into this week's league at the same level (nothing to settle).
    entry = { week, tier: clampTier(entry.tier), startXp: myXp };
    if (!fallbackActive) await updateDoc(ref, { league: entry });
  }
  // My weekly XP comes from the account's XP ledger (earned since Monday), so it is
  // never mixed up with lifetime XP; the start point others use is corrected to
  // match (it was 0 for anyone who joined before their XP had loaded).
  const ledgerWeekly = currentWeeklyXp(entry, week);
  const fixedStart = Math.max(0, myXp - ledgerWeekly);
  if (myXp > 0 && (fixedStart !== entry.startXp || entry.weeklyXp !== ledgerWeekly || entry.xpWeek !== week)) {
    entry = { ...entry, startXp: fixedStart, weeklyXp: ledgerWeekly, xpWeek: week };
    // Only the XP figures: the league itself is the server's to change.
    await updateDoc(ref, { 'league.startXp': fixedStart, 'league.weeklyXp': ledgerWeekly, 'league.xpWeek': week }).catch(() => {});
  }
  if (myXp > 0 || fallbackActive) await saveMyTableRow(uid, week, entry.tier, ledgerWeekly, typeof mine.username === 'string' ? mine.username : null, entry);
  const rows = standings((await tierRows(week, entry.tier, uid)).map((row) => (row.isMe ? { ...row, weeklyXp: ledgerWeekly } : row)));
  if (!rows.some((row) => row.isMe)) rows.push({ userId: uid, username: mine.username ?? null, weeklyXp: ledgerWeekly, isMe: true });
  return { week, tier: entry.tier, endsAt: weekEnds(), rows: standings(rows), prev: entry.prev && entry.prev.week !== week ? entry.prev : null };
}
