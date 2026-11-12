// Anatomy → Organology (gross, HB2) — the first Gross Anatomy topic, assembled
// from its parts:
//   sources.ts     — slide references, concepts, discrepancies
//   pages.ts       — every page of the five lessons (one lecture picture per page)
//   lessons.ts     — the five lessons (reading layer)
//   interactive.ts — each lesson's interactive layer
//   questions.ts   — the quiz bank
// The pictures are shown beside the text by data/slide-pictures.ts.
import { contentTopics } from '@/data/content-catalog';
import { buildTopic } from '@/data/topics/build';
import { lessons } from '@/data/topics/organology/lessons';
import { questions } from '@/data/topics/organology/questions';
import { concepts, discrepancies, TOPIC_ID } from '@/data/topics/organology/sources';

export const organology = buildTopic({
  id: TOPIC_ID,
  subject: 'anatomy',
  courseId: 'anatomy-lectures',
  section: 'Gross Anatomy',
  title: 'Organology',
  description:
    'How organs are built: compact organs (capsule, stroma and parenchyma) and tubular organs with their coats — mucosa, submucosa, muscularis and adventitia or serosa — system by system, with every lecture picture on its own page: the organ, its number of coats and the reason.',
  emoji: '🔬',
  source: 'Lecture: Cardiovascular System Gross 1 (2), slides 1–74 (Organology)',
  sourceFileIds: contentTopics.find((topic) => topic.id === TOPIC_ID)?.sourceFileIds ?? [],
  contentVersion: 1,
  concepts,
  lessons,
  questions,
  discrepancies,
});
