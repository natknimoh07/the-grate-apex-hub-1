// Polls in the feed and in chats (owner, 2026-10-31: "like how WhatsApp polls work",
// visible or anonymous). The poll itself (question, options, one or several answers,
// anonymous or not) is written by its author inside the post (`poll`) or the chat
// message (`share.poll`), which the deployed rules already allow and the app already
// reads live. Votes come here (api/poll.mjs), so nobody can fake a count:
//
//   pollTallies/{key}  every ballot (uid → options picked) and usernames; server only
//                      (no rule lets the app read it, so anonymous votes stay anonymous)
//   host document      only the results: counts per option, voters, and — when the poll
//                      is not anonymous — who picked what (`voters`, `names`)
//
// key: p_<post id> | c_<chat id>_<message id> | g_<group id>_<message id>
export class PollError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const ID = /^[A-Za-z0-9_-]{1,128}$/;
export const POLL_LIMITS = { question: 200, option: 80, minOptions: 2, maxOptions: 12 };
const ATTEMPTS = 5;

const clean = (value, max) => (typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : '');

/** Where a poll lives, from the request: its path, the field holding it, and its tally key. */
export function hostOf(body) {
  const host = body?.host;
  if (host === 'post' && ID.test(body.postId ?? '')) {
    return { kind: 'post', key: `p_${body.postId}`, path: `posts/${body.postId}`, field: 'poll' };
  }
  if (host === 'chat' && ID.test(body.chatId ?? '') && ID.test(body.messageId ?? '')) {
    return { kind: 'chat', key: `c_${body.chatId}_${body.messageId}`, path: `chats/${body.chatId}/messages/${body.messageId}`, field: 'share.poll', chatId: body.chatId };
  }
  if (host === 'group' && ID.test(body.groupId ?? '') && ID.test(body.messageId ?? '')) {
    return { kind: 'group', key: `g_${body.groupId}_${body.messageId}`, path: `groups/${body.groupId}/messages/${body.messageId}`, field: 'share.poll', groupId: body.groupId };
  }
  throw new PollError(400, 'This poll could not be found.');
}

/** The poll as its author wrote it (question, options, multi, anon), or null. */
export function pollDefOf(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const q = clean(raw.q, POLL_LIMITS.question);
  const opts = Array.isArray(raw.opts) ? raw.opts.map((item) => clean(item, POLL_LIMITS.option)) : [];
  if (!q || opts.length < POLL_LIMITS.minOptions || opts.length > POLL_LIMITS.maxOptions || opts.some((item) => !item)) return null;
  return { q, opts, multi: raw.multi === true, anon: raw.anon === true };
}

/** The options picked, checked against the poll: in range, no repeats, one only unless multi. [] takes the vote back. */
export function cleanPicks(picks, def) {
  if (!Array.isArray(picks)) throw new PollError(400, 'Choose an option.');
  const list = [...new Set(picks)];
  if (list.some((pick) => !Number.isInteger(pick) || pick < 0 || pick >= def.opts.length)) throw new PollError(400, 'That option is not in this poll.');
  if (!def.multi && list.length > 1) throw new PollError(400, 'Pick one option in this poll.');
  return list.sort((a, b) => a - b);
}

export const emptyTally = () => ({ ballots: {}, names: {}, v: 0 });

/** The tally after this learner's vote (picks [] removes it). */
export function applyVote(tally, uid, picks, name) {
  const ballots = { ...tally.ballots };
  const names = { ...tally.names };
  if (picks.length) {
    ballots[uid] = picks;
    if (name) names[uid] = name;
  } else {
    delete ballots[uid];
    delete names[uid];
  }
  return { ballots, names, v: (tally.v ?? 0) + 1 };
}

/** What everyone may see: counts, number of voters, and for a visible poll who picked what. */
export function publicState(tally, def) {
  const counts = def.opts.map(() => 0);
  for (const picks of Object.values(tally.ballots)) for (const pick of picks) if (pick < counts.length) counts[pick] += 1;
  const state = { counts, total: Object.keys(tally.ballots).length, v: tally.v };
  if (!def.anon) {
    state.voters = tally.ballots;
    state.names = Object.fromEntries(Object.keys(tally.ballots).map((uid) => [uid, tally.names[uid] ?? '']));
  }
  return state;
}

async function checkAccess(store, host, uid) {
  if (host.kind === 'chat' && !host.chatId.split('_').includes(uid)) throw new PollError(403, 'Only the two people in this chat can vote.');
  if (host.kind === 'group') {
    const members = await store.groupMembers(host.groupId);
    if (!members?.includes(uid)) throw new PollError(403, 'Only members of this group can vote.');
  }
}

/**
 * POST /api/poll: { action: 'vote', picks, host, ... } or { action: 'mine', host, ... }.
 * `store`: getHost(path), groupMembers(gid), username(uid), getTally(key) → { tally, version } | null,
 * saveTally(key, tally, version | null) (throws code 9 on a lost race), writeState(path, field, state).
 */
export async function handlePoll({ uid, body, store }) {
  const host = hostOf(body);
  await checkAccess(store, host, uid);
  const doc = await store.getHost(host.path);
  const raw = host.field === 'poll' ? doc?.poll : doc?.share?.poll;
  const def = pollDefOf(raw);
  if (!def) throw new PollError(404, 'This poll could not be found.');

  if (body.action === 'mine') {
    const found = await store.getTally(host.key);
    return { mine: found?.tally.ballots[uid] ?? [] };
  }
  if (body.action !== 'vote') throw new PollError(400, 'Unknown action.');

  const picks = cleanPicks(body.picks, def);
  const name = def.anon || !picks.length ? '' : (await store.username(uid)) ?? '';
  for (let attempt = 0; attempt < ATTEMPTS; attempt++) {
    const found = await store.getTally(host.key);
    const next = applyVote(found?.tally ?? emptyTally(), uid, picks, name);
    try {
      await store.saveTally(host.key, next, found?.version ?? null);
    } catch (error) {
      if (error?.code !== 9 || attempt === ATTEMPTS - 1) throw error;
      continue;
    }
    let state = publicState(next, def);
    await store.writeState(host.path, host.field, state);
    // Two votes at once: whichever wrote the results last may hold the older count, so the
    // newest tally is written again until the results match it.
    for (let check = 0; check < 3; check++) {
      const latest = await store.getTally(host.key);
      if (!latest || latest.tally.v <= state.v) break;
      state = publicState(latest.tally, def);
      await store.writeState(host.path, host.field, state);
    }
    return { mine: picks, state };
  }
  throw new PollError(503, 'This poll is busy. Try again.');
}
