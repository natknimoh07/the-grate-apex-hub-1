// Polls in the feed and in chats, like WhatsApp (owner, 2026-10-31): one answer or
// several, votes shown by name or anonymous. The author writes the poll inside the post
// (`poll`) or the chat message (`share.poll`); votes go to /api/poll (api/poll.mjs,
// server/poll-referee.mjs), which keeps the ballots where the app cannot read them and
// writes the results (counts, and for a visible poll who picked what) back into that
// post or message, which the app is already watching.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { auth, db } from '@/lib/firebase';
import { API_BASE, LIVE_SITE_LABEL } from '@/lib/live-site';

export const POLL_LIMITS = { question: 200, option: 80, minOptions: 2, maxOptions: 12 } as const;

/** The poll as its author writes it. */
export type PollDef = { q: string; opts: string[]; multi: boolean; anon: boolean };
/** The poll with its results (written by the server once someone votes). */
export type Poll = PollDef & { counts: number[]; total: number; voters: Record<string, number[]> | null; names: Record<string, string> };

/** Where a poll lives. */
export type PollHost =
  | { host: 'post'; postId: string }
  | { host: 'chat'; chatId: string; messageId: string }
  | { host: 'group'; groupId: string; messageId: string };

export const pollKey = (host: PollHost) =>
  host.host === 'post' ? `p_${host.postId}` : host.host === 'chat' ? `c_${host.chatId}_${host.messageId}` : `g_${host.groupId}_${host.messageId}`;

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : '');

/** A poll read from a post or message (anything malformed gives null). Counts are only trusted from the server (`v`). */
export function pollOf(raw: unknown): Poll | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  const q = clean(r.q, POLL_LIMITS.question);
  const opts = Array.isArray(r.opts) ? r.opts.map((item) => clean(item, POLL_LIMITS.option)) : [];
  if (!q || opts.length < POLL_LIMITS.minOptions || opts.length > POLL_LIMITS.maxOptions || opts.some((item) => !item)) return null;
  const counted = typeof r.v === 'number' && r.v > 0;
  const counts = opts.map((_, index) => (counted && Array.isArray(r.counts) ? Math.max(0, Number(r.counts[index]) || 0) : 0));
  const anon = r.anon === true;
  const voters: Record<string, number[]> = {};
  if (!anon && counted && r.voters && typeof r.voters === 'object') {
    for (const [uid, picks] of Object.entries(r.voters as Record<string, unknown>)) {
      if (Array.isArray(picks)) voters[uid] = picks.filter((pick): pick is number => Number.isInteger(pick) && pick >= 0 && pick < opts.length);
    }
  }
  const names: Record<string, string> = {};
  if (!anon && r.names && typeof r.names === 'object') for (const [uid, name] of Object.entries(r.names as Record<string, unknown>)) if (typeof name === 'string') names[uid] = name;
  return { q, opts, multi: r.multi === true, anon, counts, total: counted ? Math.max(0, Number(r.total) || 0) : 0, voters: anon ? null : voters, names };
}

/** A new poll from the composer, checked. Throws a message the learner can read. */
export function makePoll(question: string, options: readonly string[], multi: boolean, anon: boolean): PollDef {
  const q = clean(question, POLL_LIMITS.question);
  const opts = options.map((item) => clean(item, POLL_LIMITS.option)).filter(Boolean);
  if (q.length < 3) throw new Error('Write the poll question first.');
  if (opts.length < POLL_LIMITS.minOptions) throw new Error('Add at least two options.');
  if (opts.length > POLL_LIMITS.maxOptions) throw new Error(`A poll can have up to ${POLL_LIMITS.maxOptions} options.`);
  if (new Set(opts.map((item) => item.toLowerCase())).size !== opts.length) throw new Error('Each option must be different.');
  return { q, opts, multi, anon };
}

/** The percentage of voters who picked an option (whole numbers). */
export const pollPercent = (poll: Poll, index: number) => (poll.total ? Math.round(((poll.counts[index] ?? 0) / poll.total) * 100) : 0);

// ─── My vote ───────────────────────────────────────────────────────────
// In a visible poll the results say what I picked. In an anonymous poll only the server
// knows, so my picks are kept on this device (and asked for once on another device).
const MINE_KEY = (uid: string) => `grateapex_poll_votes:${uid}`;
let mineCache: { uid: string; votes: Record<string, number[]> } | null = null;

async function myVotes(): Promise<Record<string, number[]>> {
  const uid = auth.currentUser?.uid;
  if (!uid) return {};
  if (mineCache?.uid === uid) return mineCache.votes;
  let votes: Record<string, number[]> = {};
  try {
    votes = JSON.parse((await AsyncStorage.getItem(MINE_KEY(uid))) ?? '{}');
  } catch {
    votes = {};
  }
  mineCache = { uid, votes };
  return votes;
}

async function rememberVote(host: PollHost, picks: number[]) {
  const uid = auth.currentUser?.uid;
  if (!uid) return;
  const votes = { ...(await myVotes()), [pollKey(host)]: picks };
  mineCache = { uid, votes };
  void AsyncStorage.setItem(MINE_KEY(uid), JSON.stringify(votes)).catch(() => {});
}

async function callPoll<T>(payload: Record<string, unknown>): Promise<T> {
  const token = await auth.currentUser?.getIdToken().catch(() => undefined);
  if (!token) throw new Error('Sign in to vote.');
  let response: Response;
  try {
    response = await fetch(`${API_BASE}/api/poll`, { method: 'POST', headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` }, body: JSON.stringify(payload) });
  } catch {
    throw new Error('Could not reach the server. Check your connection and try again.');
  }
  const data = (await response.json().catch(() => null)) as (T & { error?: string }) | null;
  if (!response.ok || !data) {
    if (response.status === 404 && !data) throw new Error(`Voting runs on the live app (${LIVE_SITE_LABEL}). It is not available in this local preview.`);
    throw new Error(data?.error || 'Your vote could not be saved. Try again.');
  }
  return data;
}

/** Votes (picks [] takes the vote back). Returns my picks as saved. */
export async function votePoll(host: PollHost, picks: number[]): Promise<number[]> {
  const data = await callPoll<{ mine: number[] }>({ action: 'vote', ...host, picks });
  await rememberVote(host, data.mine);
  return data.mine;
}

/** My picks in this poll: from the results when the poll is visible, otherwise from this device or the server. */
export function useMyPollVote(host: PollHost, poll: Poll | null): [number[] | null, (picks: number[]) => void] {
  const uid = auth.currentUser?.uid ?? null;
  const key = pollKey(host);
  const fromResults = poll && !poll.anon && uid ? poll.voters?.[uid] ?? [] : null;
  const [saved, setSaved] = useState<number[] | null>(null);
  const anon = poll?.anon ?? false;
  const anyVotes = (poll?.total ?? 0) > 0;
  useEffect(() => {
    if (!anon) return;
    let live = true;
    void myVotes().then(async (votes) => {
      if (!live) return;
      if (votes[key]) { setSaved(votes[key]); return; }
      if (!anyVotes) { setSaved([]); return; }
      // Another device: ask the server once.
      const data = await callPoll<{ mine: number[] }>({ action: 'mine', ...host }).catch(() => ({ mine: [] as number[] }));
      if (!live) return;
      setSaved(data.mine);
      await rememberVote(host, data.mine);
    });
    return () => { live = false; };
    // `key` stands for the host.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, anon, anyVotes]);
  return [fromResults ?? saved, setSaved];
}

/** A feed post's poll, watched live while it is on screen (one read, then only changes). */
export function useLivePostPoll(postId: string, initial: Poll | null): Poll | null {
  const [poll, setPoll] = useState(initial);
  useEffect(() => {
    if (!postId) return;
    return onSnapshot(
      doc(db, 'posts', postId),
      (snap) => setPoll(pollOf(snap.data()?.poll)),
      () => undefined,
    );
  }, [postId]);
  return poll;
}
