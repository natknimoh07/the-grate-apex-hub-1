// Polls (owner, 2026-10-31): votes are counted by the server (server/poll-referee.mjs),
// played here against an in-memory database.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { cleanPicks, handlePoll, hostOf, pollDefOf, PollError } from '../server/poll-referee.mjs';

function memoryStore(docs, { raceOnce = false } = {}) {
  const tallies = new Map();
  let raced = !raceOnce;
  return {
    docs,
    tallies,
    async getHost(path) { return docs[path] ?? null; },
    async groupMembers(gid) { return docs[`groups/${gid}`]?.memberUids ?? null; },
    async username(uid) { return docs[`users/${uid}`]?.username ?? null; },
    async getTally(key) { const hit = tallies.get(key); return hit ? { tally: structuredClone(hit.tally), version: hit.version } : null; },
    async saveTally(key, tally, version) {
      const hit = tallies.get(key);
      if (!raced) {
        // Someone else voted between the read and the write.
        raced = true;
        tallies.set(key, { tally: { ballots: { other: [1] }, names: { other: 'other' }, v: (hit?.tally.v ?? 0) + 1 }, version: (hit?.version ?? 0) + 1 });
        throw Object.assign(new Error('lost race'), { code: 9 });
      }
      if ((hit?.version ?? null) !== version) throw Object.assign(new Error('lost race'), { code: 9 });
      tallies.set(key, { tally: structuredClone(tally), version: (version ?? 0) + 1 });
    },
    async writeState(path, field, state) {
      const target = field === 'poll' ? docs[path].poll : docs[path].share.poll;
      Object.assign(target, structuredClone(state));
    },
  };
}

const poll = (extra = {}) => ({ q: 'Best revision time?', opts: ['Morning', 'Evening', 'Night'], ...extra });

describe('Poll votes', () => {
  it('counts votes, lets a vote change and be taken back, and shows who voted', async () => {
    const store = memoryStore({ 'posts/p1': { poll: poll() }, 'users/ama': { username: 'ama' }, 'users/kofi': { username: 'kofi' } });
    await handlePoll({ uid: 'ama', body: { action: 'vote', host: 'post', postId: 'p1', picks: [0] }, store });
    await handlePoll({ uid: 'kofi', body: { action: 'vote', host: 'post', postId: 'p1', picks: [0] }, store });
    let shown = store.docs['posts/p1'].poll;
    assert.deepEqual(shown.counts, [2, 0, 0]);
    assert.equal(shown.total, 2);
    assert.deepEqual(shown.names, { ama: 'ama', kofi: 'kofi' });
    await handlePoll({ uid: 'kofi', body: { action: 'vote', host: 'post', postId: 'p1', picks: [2] }, store });
    shown = store.docs['posts/p1'].poll;
    assert.deepEqual(shown.counts, [1, 0, 1]);
    await handlePoll({ uid: 'ama', body: { action: 'vote', host: 'post', postId: 'p1', picks: [] }, store });
    shown = store.docs['posts/p1'].poll;
    assert.deepEqual(shown.counts, [0, 0, 1]);
    assert.equal(shown.total, 1);
    assert.deepEqual(Object.keys(shown.voters), ['kofi']);
  });

  it('keeps anonymous votes off the post: only counts are written', async () => {
    const store = memoryStore({ 'posts/p2': { poll: poll({ anon: true }) } });
    const reply = await handlePoll({ uid: 'ama', body: { action: 'vote', host: 'post', postId: 'p2', picks: [1] }, store });
    assert.deepEqual(reply.mine, [1]);
    const shown = store.docs['posts/p2'].poll;
    assert.deepEqual(shown.counts, [0, 1, 0]);
    assert.equal(shown.voters, undefined);
    assert.equal(shown.names, undefined);
    assert.deepEqual((await handlePoll({ uid: 'ama', body: { action: 'mine', host: 'post', postId: 'p2' }, store })).mine, [1]);
  });

  it('allows several answers only in a multiple-answer poll', async () => {
    const single = pollDefOf(poll());
    const multi = pollDefOf(poll({ multi: true }));
    assert.throws(() => cleanPicks([0, 1], single), PollError);
    assert.deepEqual(cleanPicks([2, 0, 2], multi), [0, 2]);
    assert.throws(() => cleanPicks([3], multi), PollError);
  });

  it('lets only the two friends vote in a chat, and only members in a group', async () => {
    const store = memoryStore({
      'chats/ama_kofi/messages/m1': { share: { kind: 'poll', poll: poll() } },
      'groups/g1': { memberUids: ['ama'] },
      'groups/g1/messages/m2': { share: { kind: 'poll', poll: poll() } },
    });
    await assert.rejects(handlePoll({ uid: 'yaw', body: { action: 'vote', host: 'chat', chatId: 'ama_kofi', messageId: 'm1', picks: [0] }, store }), PollError);
    await handlePoll({ uid: 'kofi', body: { action: 'vote', host: 'chat', chatId: 'ama_kofi', messageId: 'm1', picks: [0] }, store });
    assert.deepEqual(store.docs['chats/ama_kofi/messages/m1'].share.poll.counts, [1, 0, 0]);
    await assert.rejects(handlePoll({ uid: 'kofi', body: { action: 'vote', host: 'group', groupId: 'g1', messageId: 'm2', picks: [0] }, store }), PollError);
    await handlePoll({ uid: 'ama', body: { action: 'vote', host: 'group', groupId: 'g1', messageId: 'm2', picks: [1] }, store });
    assert.deepEqual(store.docs['groups/g1/messages/m2'].share.poll.counts, [0, 1, 0]);
  });

  it('keeps both votes when two arrive at once', async () => {
    const store = memoryStore({ 'posts/p3': { poll: poll() }, 'users/ama': { username: 'ama' } }, { raceOnce: true });
    await handlePoll({ uid: 'ama', body: { action: 'vote', host: 'post', postId: 'p3', picks: [0] }, store });
    const shown = store.docs['posts/p3'].poll;
    assert.deepEqual(shown.counts, [1, 1, 0]);
    assert.equal(shown.total, 2);
  });

  it('refuses a poll that is not well formed or an unknown place', () => {
    assert.equal(pollDefOf({ q: 'Only one?', opts: ['Yes'] }), null);
    assert.throws(() => hostOf({ host: 'post', postId: '../users/x' }), PollError);
  });
});

describe('Polls in the app', async () => {
  const { makePoll, pollOf, pollPercent } = await import('@/data/polls');

  it('trusts counts only once the server has written them, and never shows voters of an anonymous poll', () => {
    assert.deepEqual(pollOf({ ...poll(), counts: [99, 0, 0] }).counts, [0, 0, 0]);
    const counted = pollOf({ ...poll(), counts: [1, 3, 0], total: 4, v: 4, voters: { a: [1] } });
    assert.deepEqual(counted.counts, [1, 3, 0]);
    assert.equal(pollPercent(counted, 1), 75);
    assert.deepEqual(counted.voters, { a: [1] });
    assert.equal(pollOf({ ...poll({ anon: true }), counts: [1, 0, 0], total: 1, v: 1, voters: { a: [0] } }).voters, null);
  });

  it('checks a new poll before it is sent', () => {
    assert.throws(() => makePoll('Hi?', ['Only one'], false, false));
    assert.throws(() => makePoll('Which one?', ['Same', 'same'], false, false));
    assert.deepEqual(makePoll(' Which  one? ', ['A', ' B ', ''], true, true), { q: 'Which one?', opts: ['A', 'B'], multi: true, anon: true });
  });
});
