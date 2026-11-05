// Anatomy → Embryology (HB2), assembled from its parts:
//   sources.ts     — slide references, concepts
//   lessons.ts     — the seven lessons (reading layer)
//   interactive.ts — each lesson's interactive layer
//   questions.ts   — the quiz bank (with Assertion–Reason questions)
import { contentTopics } from '@/data/content-catalog';
import { buildTopic } from '@/data/topics/build';
import { lessons } from '@/data/topics/embryology/lessons';
import { questions } from '@/data/topics/embryology/questions';
import { concepts, discrepancies, TOPIC_ID } from '@/data/topics/embryology/sources';

export const embryology = buildTopic({
  id: TOPIC_ID,
  subject: 'anatomy',
  courseId: 'anatomy-lectures',
  section: 'Embryology',
  title: 'Early Embryology',
  description:
    'Early human development: fertilization, cleavage and the blastocyst, twins, the bilaminar disc of week 2, gastrulation, the notochord, mesoderm, neurulation and neural tube defects in week 3, the placenta, and the fetal membranes, umbilical cord and folding of the embryo.',
  emoji: '🧬',
  source: 'Lecture: Fertilization, Cleavage, 1–3 Weeks (HB2)',
  sourceFileIds: contentTopics.find((topic) => topic.id === TOPIC_ID)?.sourceFileIds ?? [],
  contentVersion: 1,
  concepts,
  lessons,
  questions,
  discrepancies,
});
