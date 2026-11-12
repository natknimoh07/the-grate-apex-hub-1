// Learners choose when to update (owner, 2026-11-10: "the app has been updating multiple times, real
// time users may find it annoying … include a popup or option where the user chooses to download the
// new updates … and a short easy to understand message … so the user knows what the update is about").
// - public/whats-new.json: short, plain notes, newest first (add one when you push something learners notice)
// - nothing reloads the app by itself: only the learner's "Update now" (applyAppUpdate)
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const { parseUpdateNotes, notesSince, noteDay, MAX_TITLE, MAX_POINTS, MAX_POINT, FALLBACK_NOTE } = await import('@/data/app-update-rules');

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const raw = JSON.parse(read('public/whats-new.json'));

describe('what is new in each update', () => {
  it('has short, plain notes, newest first', () => {
    const notes = parseUpdateNotes(raw);
    assert.ok(notes.length > 0, 'public/whats-new.json has no updates');
    assert.equal(notes.length, raw.updates.length, 'an entry in public/whats-new.json is malformed (id, date YYYY-MM-DD, title, 1–3 points)');
    assert.equal(new Set(notes.map((note) => note.id)).size, notes.length, 'two updates share an id');
    for (const [index, entry] of raw.updates.entries()) {
      assert.ok(entry.title.length <= MAX_TITLE, `"${entry.title}": a title of at most ${MAX_TITLE} characters`);
      assert.ok(entry.points.length >= 1 && entry.points.length <= MAX_POINTS, `"${entry.title}": 1 to ${MAX_POINTS} points`);
      for (const point of entry.points) {
        assert.ok(point.length <= MAX_POINT, `"${point}": at most ${MAX_POINT} characters`);
        // Learners read these: no file names, code or commit words.
        assert.doesNotMatch(point, /\.(tsx?|mjs|json)\b|`|commit|refactor|src\//i, `"${point}" reads like a developer note`);
      }
      if (index > 0) assert.ok(entry.date <= raw.updates[index - 1].date, `"${entry.title}" is older than the update after it: newest first`);
    }
  });

  it('shows only what the new version adds', () => {
    const note = (id, date = '2026-11-10') => ({ id, date, title: id, points: ['A point.'] });
    const live = [note('c'), note('b'), note('a', '2026-11-09')];
    assert.deepEqual(notesSince(live, [note('b'), note('a')]).map((item) => item.id), ['c']);
    assert.deepEqual(notesSince(live, []).map((item) => item.id), ['c', 'b', 'a']);
    assert.deepEqual(notesSince(live, live), [], 'no notes: the popup says "Small fixes and improvements."');
    assert.equal(FALLBACK_NOTE, 'Small fixes and improvements.');
    assert.deepEqual(parseUpdateNotes({ updates: [{ id: 'x' }, note('ok')] }).map((item) => item.id), ['ok'], 'a broken entry is left out, not shown');
    assert.deepEqual(parseUpdateNotes(null), []);
    assert.equal(noteDay('2026-11-10'), '10 Nov');
  });

  it('never reloads the app by itself', () => {
    const watcher = read('src/components/app-update-watcher.tsx');
    assert.doesNotMatch(watcher, /location\.reload/, 'the watcher must offer the update, not reload');
    assert.match(watcher, /onPress=\{applyAppUpdate\}/, '"Update now" installs it');
    assert.match(watcher, /label="Later"/);
    const store = read('src/data/app-update.ts');
    assert.equal(store.match(/location\.reload/g)?.length, 1, 'only applyAppUpdate reloads');
    // (\r?\n: files checked out on Windows have CRLF line endings.)
    assert.match(store, /export function applyAppUpdate\(\) \{\r?\n[^\n]*location\.reload\(\)/);
    // A new service worker only asks for a check.
    const html = read('src/app/+html.tsx');
    const onChange = html.slice(html.indexOf('const onControllerChange'), html.indexOf('const checkForUpdate'));
    assert.ok(onChange.length > 0 && !/reload/.test(onChange), 'a new service worker must not reload the page');
    assert.match(onChange, /grateapex:update-check/);
    assert.match(read('src/data/app-update.ts'), /UPDATE_CHECK_EVENT = 'grateapex:update-check'/);
    // The option in Settings.
    assert.match(read('src/app/settings.tsx'), /<AppUpdatesRow \/>/);
  });
});
