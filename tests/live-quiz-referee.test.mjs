import assert from 'node:assert/strict';
import test from 'node:test';

import { leaderboard, scoreLiveAnswer } from '../server/live-quiz-referee.mjs';

test('Live Quiz awards a correct faster answer more points', () => {
  const fast = scoreLiveAnswer({ correct: true, answeredAt: 1_000, startedAt: 0, durationSeconds: 30 });
  const slow = scoreLiveAnswer({ correct: true, answeredAt: 29_000, startedAt: 0, durationSeconds: 30 });
  assert.ok(fast > slow);
  assert.equal(scoreLiveAnswer({ correct: false, answeredAt: 1_000, startedAt: 0, durationSeconds: 30 }), 0);
  assert.equal(scoreLiveAnswer({ correct: true, answeredAt: 31_000, startedAt: 0, durationSeconds: 30 }), 0);
});

test('Live Quiz breaks leaderboard ties by join time', () => {
  assert.deepEqual(leaderboard([
    { displayName: 'Later', score: 500, joinedAt: 20 },
    { displayName: 'Earlier', score: 500, joinedAt: 10 },
    { displayName: 'Leader', score: 900, joinedAt: 30 },
  ]), [
    { rank: 1, displayName: 'Leader', score: 900 },
    { rank: 2, displayName: 'Earlier', score: 500 },
    { rank: 3, displayName: 'Later', score: 500 },
  ]);
});
