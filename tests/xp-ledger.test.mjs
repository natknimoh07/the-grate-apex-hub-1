// The XP ledger shared by every device of an account (src/data/learning/xp-ledger.ts).
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { applyUploads, cloudEventsOf, cloudLedgerOf, localXp, mergeLedger, trimCloudEvents } from '../src/data/learning/xp-ledger.ts';

const entry = (key, amount, at, synced) => ({ key, sourceType: key.split(':')[0], sourceId: key.slice(key.indexOf(':') + 1), amount, label: key, at, ...(synced === undefined ? {} : { synced }) });
const event = (amount, at, type = 'quiz') => ({ amount, at, label: '', type });

test('a device shows the account ledger plus what it has not sent yet', () => {
  const cloud = { 'quiz:a': event(40, 100), 'lesson:l1': event(50, 200, 'lesson') };
  const local = [entry('quiz:b', 30, 300, false), entry('quiz:a', 40, 100, true)];
  const merged = mergeLedger(local, cloud);
  assert.deepEqual(merged.map((item) => [item.key, item.amount, item.synced]), [['quiz:b', 30, false], ['lesson:l1', 50, true], ['quiz:a', 40, true]]);
  // The lesson entry came from another device: its source is read from the key.
  assert.equal(merged[1].sourceType, 'lesson');
  assert.equal(merged[1].sourceId, 'l1');
  // Account XP 400 + the unsent 30.
  assert.equal(localXp(400, merged), 430);
});

test('"XP today" is the same on two devices once both see the account ledger', () => {
  const cloud = { 'quiz:phone': event(30, 1000), 'quiz:laptop-1': event(250, 1100), 'quiz:laptop-2': event(150, 1200) };
  const phone = mergeLedger([entry('quiz:phone', 30, 1000, true)], cloud);
  const laptop = mergeLedger([entry('quiz:laptop-1', 250, 1100, true), entry('quiz:laptop-2', 150, 1200, true)], cloud);
  const today = (ledger) => ledger.reduce((sum, item) => sum + item.amount, 0);
  assert.equal(today(phone), 430);
  assert.equal(today(laptop), 430);
});

test('an unsent entry is never dropped when the ledger is trimmed', () => {
  const cloud = Object.fromEntries(Array.from({ length: 5 }, (_, i) => [`quiz:c${i}`, event(1, 1000 + i)]));
  const merged = mergeLedger([entry('quiz:old', 7, 1, false)], cloud, 3);
  assert.equal(merged.length, 4);
  assert.ok(merged.some((item) => item.key === 'quiz:old' && item.synced === false));
  assert.deepEqual(merged.slice(0, 3).map((item) => item.key), ['quiz:c4', 'quiz:c3', 'quiz:c2']);
});

test('the account pays a key once, however many devices send it', () => {
  const start = { xp: 1000, xpEvents: { 'practice:qotd:2026-11-14': event(10, 500, 'practice') }, xpSeq: 3 };
  const result = applyUploads(start, [
    { key: 'practice:qotd:2026-11-14', amount: 10, at: 600, label: 'Question of the Day', type: 'practice', countXp: true },
    { key: 'quiz:new', amount: 25, at: 700, label: 'Quiz', type: 'quiz', countXp: true },
    { key: 'quiz:penalty', amount: -5, at: 800, label: 'Penalty', type: 'quiz', countXp: true },
  ]);
  assert.deepEqual(result.duplicates, ['practice:qotd:2026-11-14']);
  assert.equal(result.xp, 1020);
  assert.equal(result.xpSeq, 4);
  assert.equal(result.changed, true);
  assert.equal(Object.keys(result.xpEvents).length, 3);
  // The original is untouched.
  assert.equal(start.xp, 1000);
  assert.equal(Object.keys(start.xpEvents).length, 1);
});

test('entries from before the shared ledger are recorded without changing the XP', () => {
  const start = { xp: 1000, xpEvents: {}, xpSeq: 0 };
  const result = applyUploads(start, [{ key: 'quiz:old', amount: 300, at: 1, label: 'Quiz', type: 'quiz', countXp: false }], 1200);
  assert.equal(result.xp, 1200); // the floor (the old "highest device total" rule), once
  assert.equal(result.xpEvents['quiz:old'].amount, 300);
  // Nothing new: nothing changes, no write.
  const again = applyUploads(result, [{ key: 'quiz:old', amount: 300, at: 1, label: 'Quiz', type: 'quiz', countXp: false }], 900);
  assert.equal(again.changed, false);
  assert.equal(again.xpSeq, result.xpSeq);
});

test('XP never goes below 0 and the account keeps only the newest events', () => {
  const result = applyUploads({ xp: 3, xpEvents: {}, xpSeq: 0 }, [{ key: 'quiz:p', amount: -10, at: 1, label: '', type: 'quiz', countXp: true }]);
  assert.equal(result.xp, 0);
  const many = Object.fromEntries(Array.from({ length: 450 }, (_, i) => [`quiz:${i}`, event(1, i)]));
  const trimmed = trimCloudEvents(many, 400);
  assert.equal(Object.keys(trimmed).length, 400);
  assert.ok(!('quiz:0' in trimmed) && 'quiz:449' in trimmed);
});

test('odd data on the document is ignored', () => {
  assert.deepEqual(cloudEventsOf({ 'quiz:a': { amount: 'ten', at: 1 }, 'quiz:b': { amount: 10.4, at: 2, type: 'nonsense' }, 'quiz:c': null }), { 'quiz:b': { amount: 10, at: 2, label: '', type: 'quiz' } });
  assert.deepEqual(cloudLedgerOf(undefined), { xp: 0, xpEvents: {}, xpSeq: 0 });
  assert.deepEqual(cloudLedgerOf({ xp: -4, xpSeq: 'x' }), { xp: 0, xpEvents: {}, xpSeq: 0 });
});
