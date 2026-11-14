// Physiology → Cardiovascular Physiology, assembled from its parts:
//   sources.ts      — slide references, concepts, discrepancies, diagrams
//   lessons.ts      — the nine lessons (reading layer)
//   interactive.ts  — each lesson's interactive layer + reading extras
//   questions.ts    — the topic question bank (quiz layer)
import { gapQuestions } from '@/data/topics/cardiovascular-physiology/gap-questions';
import { sectionQuestions } from '@/data/topics/cardiovascular-physiology/section-questions';
import { contentTopics } from '@/data/content-catalog';
import { buildTopic } from '@/data/topics/build';
import { assertionReasonQuestions } from '@/data/topics/cardiovascular-physiology/assertion-reason';
import { lessons } from '@/data/topics/cardiovascular-physiology/lessons';
import { questions } from '@/data/topics/cardiovascular-physiology/questions';
import { concepts, diagrams, discrepancies, TOPIC_ID } from '@/data/topics/cardiovascular-physiology/sources';

export const cardiovascularPhysiology = buildTopic({
  id: TOPIC_ID,
  subject: 'physiology',
  courseId: 'physiology-lectures',
  title: 'Cardiovascular Physiology',
  description:
    'The cardiac cycle and action potentials, pulse and heart sounds, cardiac output and its measurement, haemodynamics, capillaries and oedema, short- and long-term regulation of BP, shock, regional and fetal circulations, the ECG and arrhythmias.',
  emoji: '🫀',
  source: 'Lectures: Circulation 1–5',
  sourceFileIds: contentTopics.find((topic) => topic.id === TOPIC_ID)?.sourceFileIds ?? [],
  contentVersion: 4, // 3: simulations added to every lesson; 4: gap-fill against the slides and HB2 syllabus (2026-11-13)
  concepts,
  lessons,
  questions: [...questions, ...assertionReasonQuestions, ...sectionQuestions, ...gapQuestions],
  discrepancies,
  diagrams,
});
