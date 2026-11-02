// Copies the quizzes of the HB1 lessons written in the app (src/data/hb1-lessons/) into
// their course's question bank, one set per lesson (id "ls-<quizId>"), so practice,
// review, Apex and battles find them. Idempotent: replaces its own sets.
//
//   node --import ./tests/register.mjs scripts/hb1-review/lesson-sets.mjs
//
// Then rebuild the battle bank: node --import ./tests/register.mjs scripts/build-battle-bank.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const { HB1_LOCAL_LESSONS, hb1QuizQuestions } = await import('@/data/hb1-lessons');

const byCourse = new Map();
for (const lesson of HB1_LOCAL_LESSONS) {
  const course = lesson.id.split('-')[0];
  byCourse.set(course, [...(byCourse.get(course) ?? []), lesson]);
}

for (const [course, lessons] of byCourse) {
  const path = new URL(`../../public/curriculum/${course}.json`, import.meta.url);
  const bank = JSON.parse(readFileSync(path, 'utf8'));
  const ours = new Set(lessons.map((lesson) => `ls-${lesson.quizId}`));
  const sets = lessons.map((lesson) => ({
    id: `ls-${lesson.quizId}`,
    name: lesson.quizName,
    questions: hb1QuizQuestions(lesson).map((question) => ({ ...question, src: lesson.source })),
  }));
  // Lesson quizzes sit after the course's other quizzes, before its past papers.
  const kept = bank.sets.filter((set) => !ours.has(set.id));
  const firstPaper = kept.findIndex((set) => /^Past Questions|^Predicted/i.test(set.name));
  const at = firstPaper < 0 ? kept.length : firstPaper;
  bank.sets = [...kept.slice(0, at), ...sets, ...kept.slice(at)];
  writeFileSync(path, JSON.stringify(bank));
  console.log(course, sets.map((set) => `${set.name} (${set.questions.length})`).join(', '));
}
