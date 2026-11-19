import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const output = join(root, 'server', 'live-quiz-bank.json');
const battleBank = join(root, 'public', 'battle-bank');

// The battle-bank build is already GrateApex's generated, curriculum-owned
// multiple-choice projection. Reusing it makes a fast server-only Live Quiz
// bank without inventing or duplicating an editable question collection.
const index = JSON.parse(readFileSync(join(battleBank, 'index.json'), 'utf8'));
const questions = [];

for (const course of index.courses) {
  const file = JSON.parse(readFileSync(join(battleBank, `${course.id}.json`), 'utf8'));
  for (const question of file.questions ?? []) {
    questions.push({
      key: `${course.id}/${question.id}`,
      course: course.id,
      topic: question.topic,
      level: question.level,
      prompt: question.prompt,
      options: question.options,
      answer: question.answer,
    });
  }
}

mkdirSync(join(root, 'server'), { recursive: true });
writeFileSync(output, JSON.stringify({ version: 1, courses: index.courses, questions }));
console.log(`Built private Live Quiz bank: ${questions.length} questions`);
