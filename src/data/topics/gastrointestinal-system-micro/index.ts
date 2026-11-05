// Anatomy → Gastrointestinal System (microanatomy, HB2), assembled from its parts:
//   sources.ts     — slide references, concepts
//   lessons.ts     — the six lessons (reading layer)
//   interactive.ts — each lesson's interactive layer
//   questions.ts   — the quiz bank (with Assertion–Reason questions)
import { contentTopics } from '@/data/content-catalog';
import { buildTopic } from '@/data/topics/build';
import { lessons } from '@/data/topics/gastrointestinal-system-micro/lessons';
import { questions } from '@/data/topics/gastrointestinal-system-micro/questions';
import { concepts, discrepancies, TOPIC_ID } from '@/data/topics/gastrointestinal-system-micro/sources';

export const gastrointestinalMicro = buildTopic({
  id: TOPIC_ID,
  subject: 'anatomy',
  courseId: 'anatomy-lectures',
  section: 'Microanatomy',
  title: 'Gastrointestinal System (Micro)',
  description:
    'Microscopic anatomy of the digestive system: oral mucosa, lips, tongue and taste buds, teeth, salivary glands and tonsils, the four coats of the tract, oesophagus and stomach, small and large intestine and anal canal, and the liver, gallbladder and pancreas.',
  emoji: '🔬',
  source: 'Lecture: Microscopic Anatomy of the GIT (HB2)',
  sourceFileIds: contentTopics.find((topic) => topic.id === TOPIC_ID)?.sourceFileIds ?? [],
  contentVersion: 1,
  concepts,
  lessons,
  questions,
  discrepancies,
});
