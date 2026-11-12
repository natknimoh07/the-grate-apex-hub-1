// Organology taught in full (owner, 2026-11-12). Every page of the topic is
// written in data/topics/organology/pages.ts: an idea page has its own teaching
// paragraphs; a picture page has three — the organ, its number of coats, and
// the reason — shown beside the picture (data/slide-pictures.ts).
import type { Teaching } from '@/data/teaching/types';
import { LESSON_PAGES, lessonIdOf, pageTeaching } from '@/data/topics/organology/pages';

export const teaching: Teaching = Object.fromEntries(
  ([1, 2, 3, 4, 5] as const).map((n) => [lessonIdOf(n), Object.fromEntries(LESSON_PAGES[n].map((page, index) => [index, pageTeaching(page)]))]),
);
