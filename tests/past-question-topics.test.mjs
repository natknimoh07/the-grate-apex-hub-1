// Past questions sorted by topic: HB2 (scripts/sort-past-questions-by-topic.mjs, every
// question in hb2-*.json) and HB1 (scripts/sort-hb1-past-questions-by-topic.mjs, every
// question in a past or predicted paper). Every one has a known topic, and the topic
// exam mode is wired.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

import { PAST_TOPICS } from '../src/data/past-question-topics.ts';
import { modeSettings, modeTitle, parsePracticeMode, setKind } from '../src/data/practice-modes.ts';

for (const courseId of Object.keys(PAST_TOPICS)) {
  test(`${courseId}: every past question has a listed topic`, () => {
    const bank = JSON.parse(readFileSync(`public/curriculum/${courseId}.json`, 'utf8'));
    const known = new Set(PAST_TOPICS[courseId].map((topic) => topic.id));
    const hb2 = courseId.startsWith('hb2-');
    const papers = hb2 ? bank.sets : bank.sets.filter((set) => setKind(set.name) === 'past' || setKind(set.name) === 'predicted');
    assert.ok(papers.length > 0, `${courseId} has past papers`);
    const questions = papers.flatMap((set) => set.questions);
    const missing = questions.filter((q) => !known.has(q.tp));
    const script = hb2 ? 'sort-past-questions-by-topic.mjs' : 'sort-hb1-past-questions-by-topic.mjs';
    assert.equal(missing.length, 0, `run node scripts/${script} (e.g. ${missing[0]?.id} has topic ${missing[0]?.tp})`);
    // Most questions are sorted into a real topic, not "other".
    assert.ok(questions.filter((q) => q.tp === 'other').length < questions.length * 0.05);
  });
}

test('past questions on a topic are sat as an exam', () => {
  const mode = parsePracticeMode((key) => ({ ptopic: 'immunology' })[key]);
  assert.deepEqual(mode, { kind: 'pastTopic', topicId: 'immunology' });
  const settings = modeSettings(mode);
  assert.equal(settings.count, Infinity);
  assert.equal(settings.feedback, 'submit');
  assert.equal(settings.variants, false);
  assert.equal(settings.key, 'topic-immunology');
  assert.equal(modeTitle(mode, 'Biochemistry', { topic: 'Immunology' }), 'Biochemistry · Past questions: Immunology');
});
