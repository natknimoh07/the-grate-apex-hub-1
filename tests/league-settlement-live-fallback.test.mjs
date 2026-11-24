import assert from 'node:assert/strict';
import test from 'node:test';

import { settleLeagueWeekFromLive } from '../api/leagues.mjs';

const getPath = (value, path) => path.split('.').reduce((current, part) => current?.[part], value);

function fakeAdmin(people) {
  const tables = new Map();
  const apply = (target, changes) => {
    for (const [path, value] of Object.entries(changes)) {
      const parts = path.split('.');
      const key = parts.pop();
      const parent = parts.reduce((current, part) => (current[part] ??= {}), target);
      parent[key] = value;
    }
  };
  const db = {
    collection(name) {
      assert.equal(name, 'leagueEntries');
      return { where: (field, operator, week) => ({
        async get() {
          assert.equal(operator, '==');
          return { docs: people.filter((person) => getPath(person, field) === week).map((person) => ({
            id: person.uid,
            data: () => ({ username: person.username, league: person.league }),
            ref: { update: async (changes) => apply(person, changes) },
          })) };
        },
      }) };
    },
    doc(path) {
      if (path.startsWith('leagueTables/')) {
        return {
          get: async () => ({ exists: tables.has(path) }),
          set: async (data) => tables.set(path, structuredClone(data)),
          update: async (changes) => apply(tables.get(path), changes),
        };
      }
      throw new Error(`Unexpected document path: ${path}`);
    },
  };
  return { db, people, tables };
}

test('settles the mirrored week, promotes the leader and seeds next week tables', async () => {
  const week = '2026-11-16';
  const newWeek = '2026-11-23';
  const people = [100, 80, 60, 40, 20].map((weeklyXp, index) => ({
    uid: `learner${index + 1}`,
    username: `learner_${index + 1}`,
    league: { week, tier: 3, startXp: 1000, weeklyXp, xpWeek: week },
  }));
  const admin = fakeAdmin(people);

  const result = await settleLeagueWeekFromLive(admin, week, newWeek, false);

  assert.equal(result.source, 'live-fallback');
  assert.equal(result.promoted, 1);
  assert.equal(result.relegated, 1);
  assert.equal(result.written, 8); // five entries and three shared tier tables
  assert.equal(people[0].league.week, newWeek);
  assert.equal(people[0].league.tier, 4);
  assert.equal(people[0].league.prev.outcome, 'promoted');
  assert.equal(people[0].league.prev.position, 1);
  assert.equal(admin.tables.get(`${'leagueTables/'}${newWeek}_4`).rows.learner1.weeklyXp, 0);
  assert.equal(admin.tables.get(`${'leagueTables/'}${newWeek}_3`).rows.learner2.weeklyXp, 0);
  assert.equal(admin.tables.get(`${'leagueTables/'}${newWeek}_2`).rows.learner5.weeklyXp, 0);
});

test('dry-run reads mirrored entries without changing them', async () => {
  const week = '2026-11-16';
  const people = [40, 20].map((weeklyXp, index) => ({
    uid: `learner${index + 1}`,
    username: `learner_${index + 1}`,
    league: { week, tier: 0, startXp: 100, weeklyXp, xpWeek: week },
  }));
  const before = structuredClone(people);
  const admin = fakeAdmin(people);

  const result = await settleLeagueWeekFromLive(admin, week, '2026-11-23', true);

  assert.equal(result.dry, true);
  assert.equal(result.promoted, 1);
  assert.deepEqual(people, before);
  assert.equal(admin.tables.size, 0);
});
