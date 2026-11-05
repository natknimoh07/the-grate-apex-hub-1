// Textbook pages for reading sections of gastrointestinal-system-micro (printed page numbers),
// reusing pages already matched for the same content in gastrointestinal-physiology: Guyton and
// Hall (14th ed.) and Costanzo Physiology. The histology textbooks are not in the supplied files.
import type { TextbookPages } from '@/data/textbook-refs/types';

export const textbookPages: TextbookPages = {
  "gastrointestinal-system-micro-1": {
    0: [["guyton-hall-14e", [807]], ["costanzo-physiology", [339]]], // The digestive system
  },
  "gastrointestinal-system-micro-3": {
    1: [["guyton-hall-14e", [808, 809]], ["costanzo-physiology", [356, 357, 358]]], // How a salivary gland is built
  },
  "gastrointestinal-system-micro-4": {
    3: [["guyton-hall-14e", [811, 812, 813]], ["costanzo-physiology", [360, 361]]], // Cells of the gastric glands
  },
  "gastrointestinal-system-micro-6": {
    5: [["guyton-hall-14e", [815, 816, 817]], ["costanzo-physiology", [367, 368]]], // The pancreas
  },
};
