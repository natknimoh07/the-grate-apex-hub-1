// HB1 lessons written in the app (src/data/hb1-lessons/, owner 2026-11-02).
// - each belongs to a real HB1 course and has unique ids
// - its quiz is in the course's bank, exactly as written (run scripts/hb1-review/lesson-sets.mjs)
// - quiz options are distinct and the right one is not given away by its length
// - past-question topics exist, and every rich text parses
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const { HB1_LOCAL_LESSONS, hb1QuizQuestions, hb1LessonMeta } = await import('@/data/hb1-lessons');
const { LEGACY_COURSES } = await import('@/data/legacy-study');
const { HB1_PRACTICE_IDS } = await import('@/data/hb1-lessons/practice-ids');
const { parseRich } = await import('@/data/legacy-questions');

const bank = (course) => JSON.parse(readFileSync(new URL(`../public/curriculum/${course}.json`, import.meta.url), 'utf8'));

describe('HB1 lessons written in the app', () => {
  it('belong to HB1 courses and have unique ids', () => {
    const hb1 = new Set(LEGACY_COURSES.filter((course) => course.classId === 'HB1').map((course) => course.id));
    const ids = new Set();
    for (const lesson of HB1_LOCAL_LESSONS) {
      const meta = hb1LessonMeta(lesson);
      assert.ok(hb1.has(meta.course), `${lesson.id}: no HB1 course "${meta.course}"`);
      assert.ok(!ids.has(lesson.id), `duplicate lesson ${lesson.id}`);
      ids.add(lesson.id);
      const sections = lesson.sections.map((section) => section.id);
      assert.equal(new Set(sections).size, sections.length, `${lesson.id}: repeated section id`);
      // At least 20 questions to practise: its own quiz, or with earlier sets of the bank (rewritten lessons).
      const practised = HB1_PRACTICE_IDS[lesson.id] ?? [];
      assert.ok(lesson.quiz.length >= 8 && practised.length >= 20, `${lesson.id}: ${lesson.quiz.length} quiz questions, ${practised.length} to practise`);
      for (const question of hb1QuizQuestions(lesson)) assert.ok(practised.includes(question.id), `${lesson.id}: practice-ids.ts out of date — run scripts/hb1-review/lesson-sets.mjs`);
    }
  });

  it('have their quiz in the course bank, as written', () => {
    for (const lesson of HB1_LOCAL_LESSONS) {
      const course = lesson.id.split('-')[0];
      const set = bank(course).sets.find((item) => item.id === `ls-${lesson.quizId}`);
      assert.ok(set, `${lesson.id}: run scripts/hb1-review/lesson-sets.mjs`);
      const expected = hb1QuizQuestions(lesson);
      assert.deepEqual(set.questions.map(({ src, ...question }) => question), expected, `${lesson.id}: bank out of date — run scripts/hb1-review/lesson-sets.mjs`);
    }
  });

  it('do not give the answer away', () => {
    for (const lesson of HB1_LOCAL_LESSONS) {
      let longest = 0;
      for (const [q, right, wrong] of lesson.quiz) {
        assert.equal(new Set([right, ...wrong]).size, 4, `${lesson.id}: repeated option in "${q}"`);
        assert.ok(right.length < 1.5 * Math.max(...wrong.map((option) => option.length)), `${lesson.id}: the answer is far longer than every other option in "${q}"`);
        if (right.length > Math.max(...wrong.map((option) => option.length))) longest += 1;
      }
      assert.ok(longest / lesson.quiz.length <= 0.25, `${lesson.id}: the answer is the longest option in ${Math.round((longest / lesson.quiz.length) * 100)}% of questions`);
    }
  });

  it('practise past-question topics that exist, and their text parses', () => {
    const texts = (blocks) => blocks.flatMap((block) => [block.x, block.title, block.name, block.def, ...(block.items ?? []).map((item) => (typeof item === 'string' ? item : item.title)), ...(block.head ?? []), ...(block.rows ?? []).flatMap((row) => row.c), ...texts(block.blocks ?? []), ...(block.items ?? []).flatMap((item) => (typeof item === 'string' ? [] : texts(item.blocks ?? [])))]).filter(Boolean);
    for (const lesson of HB1_LOCAL_LESSONS) {
      const topics = new Set(bank(lesson.id.split('-')[0]).sets.flatMap((set) => set.questions.map((question) => question.tp)).filter(Boolean));
      for (const topic of lesson.pastTopics ?? []) assert.ok(topics.has(topic), `${lesson.id}: no past questions with tp "${topic}"`);
      for (const section of lesson.sections) {
        for (const text of texts(section.blocks)) {
          assert.ok(parseRich(text).length > 0, `${lesson.id}: empty text`);
          assert.doesNotMatch(text, /<(?!\/?(b|i|sub|sup)>)/, `${lesson.id}: unknown markup in "${text.slice(0, 60)}"`);
        }
      }
    }
  });
});
