// Anatomy → Respiratory System (microanatomy, HB2), assembled from its parts:
//   sources.ts     — slide references, concepts
//   lessons.ts     — the four lessons (reading layer)
//   interactive.ts — each lesson's interactive layer
//   questions.ts   — the quiz bank (with Assertion–Reason questions)
import { contentTopics } from '@/data/content-catalog';
import { buildTopic } from '@/data/topics/build';
import { lessons } from '@/data/topics/respiratory-system-micro/lessons';
import { questions } from '@/data/topics/respiratory-system-micro/questions';
import { concepts, discrepancies, TOPIC_ID } from '@/data/topics/respiratory-system-micro/sources';

export const respiratoryMicro = buildTopic({
  id: TOPIC_ID,
  subject: 'anatomy',
  courseId: 'anatomy-lectures',
  section: 'Microanatomy',
  title: 'Respiratory System (Micro)',
  description:
    'Microscopic anatomy of the respiratory system: respiratory and olfactory epithelium, the pharynx, larynx, epiglottis and trachea, bronchi and bronchioles with club cells, and the alveoli, pneumocytes and blood–air barrier.',
  emoji: '🔬',
  source: 'Lecture: Respiratory System II – Histology (HB2)',
  sourceFileIds: contentTopics.find((topic) => topic.id === TOPIC_ID)?.sourceFileIds ?? [],
  contentVersion: 1,
  concepts,
  lessons,
  questions,
  discrepancies,
});
