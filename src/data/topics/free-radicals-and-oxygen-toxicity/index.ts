// Biochemistry → Free Radicals and Oxygen Toxicity, assembled from its parts:
//   sources.ts      — slide/page references, concepts, discrepancies
//   lessons.ts      — the lessons (reading layer)
//   interactive.ts  — each lesson's interactive layer + reading extras
//   questions.ts    — the topic question bank (quiz layer)
//   questions-2026.ts — bank questions from the 2026 deck (added 2026-11-10)
//   section-questions.ts — five questions per reading section
import { sectionQuestions } from '@/data/topics/free-radicals-and-oxygen-toxicity/section-questions';
import { contentTopics } from '@/data/content-catalog';
import { buildTopic } from '@/data/topics/build';
import { lessons } from '@/data/topics/free-radicals-and-oxygen-toxicity/lessons';
import { questions } from '@/data/topics/free-radicals-and-oxygen-toxicity/questions';
import { questions2026 } from '@/data/topics/free-radicals-and-oxygen-toxicity/questions-2026';
import { concepts, discrepancies, TOPIC_ID } from '@/data/topics/free-radicals-and-oxygen-toxicity/sources';

export const freeRadicals = buildTopic({
  id: TOPIC_ID,
  subject: 'biochemistry',
  courseId: 'biochemistry-lectures',
  title: 'Free Radicals and Oxygen Toxicity',
  description: 'What free radicals are, how they form, react and damage cells, how antioxidants defend, and their role in disease and ageing.',
  emoji: '🔥',
  source: 'Lectures: Free Radicals and Oxygen Toxicity (2021 deck, Prof Fay’s deck) and Free Radicals & Reactive Oxygen Species (2026 deck)',
  sourceFileIds: contentTopics.find((topic) => topic.id === TOPIC_ID)?.sourceFileIds ?? [],
  contentVersion: 2,
  concepts,
  lessons,
  questions: [...questions, ...questions2026, ...sectionQuestions],
  discrepancies,
  diagrams: [],
});
