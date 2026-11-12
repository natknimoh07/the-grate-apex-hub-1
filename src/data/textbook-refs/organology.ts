// Textbook pages for reading sections of organology (printed page numbers):
// Gray's Anatomy for Students (4th ed.). Most of the topic is histology, which
// Gray's does not cover; only sections with a clear match have a page.
// Added to the sections by buildTopic (see data/textbook-refs/index.ts).
import type { TextbookPages } from '@/data/textbook-refs/types';
import { LESSON_PAGES, lessonIdOf } from '@/data/topics/organology/pages';

const GRAYS = 'grays-anatomy-students-4e';
const at = (n: 1 | 2 | 3 | 4 | 5, title: string) => LESSON_PAGES[n].findIndex((page) => page.title === title);

export const textbookPages: TextbookPages = {
  [lessonIdOf(2)]: {
    [at(2, 'The Wall of a Blood Vessel')]: [[GRAYS, [25]]], // the three tunics of vessel walls
    [at(2, 'Serosa or Adventitia?')]: [[GRAYS, [256]]], // peritoneum, intraperitoneal and retroperitoneal organs
  },
  [lessonIdOf(3)]: {
    [at(3, 'The Trachea')]: [[GRAYS, [173]]], // C-shaped cartilage rings
  },
  [lessonIdOf(4)]: {
    [at(4, 'The Heart')]: [[GRAYS, [185, 186]]], // serous pericardium and epicardium
  },
};
