// Textbook pages for reading sections of embryology (printed page numbers), reusing pages
// already matched for the same content in reproductive-physiology: Guyton and Hall (14th ed.)
// and Costanzo Physiology. The embryology textbooks (Langman, Moore) are not in the supplied
// files, so they have no page references.
import type { TextbookPages } from '@/data/textbook-refs/types';

export const textbookPages: TextbookPages = {
  "embryology-1": {
    1: [["guyton-hall-14e", [1013, 1014, 1015]], ["costanzo-physiology", [466, 467]]], // Capacitation and hyperactivation
    3: [["guyton-hall-14e", [1015]], ["costanzo-physiology", [466, 467]]], // The three phases of fertilization
  },
  "embryology-2": {
    2: [["guyton-hall-14e", [1032]], ["costanzo-physiology", [471]]], // Blastocyst formation (implantation)
  },
};
