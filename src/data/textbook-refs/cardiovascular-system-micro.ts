// Textbook pages for reading sections of cardiovascular-system-micro (printed page numbers),
// reusing the pages already matched for the gross and physiology cardiovascular topics:
// Gray's Anatomy for Students (4th ed.) and Guyton and Hall (14th ed.). Histology itself is
// not covered page-for-page by these books, so only sections they do cover get a page.
import type { TextbookPages } from '@/data/textbook-refs/types';

export const textbookPages: TextbookPages = {
  "cardiovascular-system-micro-1": {
    1: [["grays-anatomy-students-4e", [185, 186]]], // The layers of the heart wall
    3: [["grays-anatomy-students-4e", [211]], ["guyton-hall-14e", [129]]], // The conducting system
  },
  "cardiovascular-system-micro-2": {
    0: [["grays-anatomy-students-4e", [25]]], // The arterial wall
  },
  "cardiovascular-system-micro-4": {
    1: [["guyton-hall-14e", [189, 190, 191]]], // Medium veins (venous valves and the muscle pump)
    4: [["guyton-hall-14e", [200, 201, 202]]], // Lymphatic vessels
  },
};
