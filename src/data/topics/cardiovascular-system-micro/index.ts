// Anatomy → Cardiovascular System (microanatomy, HB2), assembled from its parts:
//   sources.ts     — slide references, concepts
//   lessons.ts     — the four lessons (reading layer)
//   interactive.ts — each lesson's interactive layer
//   questions.ts   — the quiz bank (with Assertion–Reason questions)
import { contentTopics } from '@/data/content-catalog';
import { buildTopic } from '@/data/topics/build';
import { lessons } from '@/data/topics/cardiovascular-system-micro/lessons';
import { questions } from '@/data/topics/cardiovascular-system-micro/questions';
import { concepts, discrepancies, TOPIC_ID } from '@/data/topics/cardiovascular-system-micro/sources';

export const cardiovascularMicro = buildTopic({
  id: TOPIC_ID,
  subject: 'anatomy',
  courseId: 'anatomy-lectures',
  section: 'Microanatomy',
  title: 'Cardiovascular System (Micro)',
  description:
    'Microscopic anatomy of the cardiovascular system: the layers of the heart wall, valves and conducting system; elastic and muscular arteries, arterioles and metarterioles; the three types of capillary; veins, atypical vessels and lymphatics.',
  emoji: '🔬',
  source: 'Lecture: Cardiovascular System (Micro)',
  sourceFileIds: contentTopics.find((topic) => topic.id === TOPIC_ID)?.sourceFileIds ?? [],
  contentVersion: 1,
  concepts,
  lessons,
  questions,
  discrepancies,
});
