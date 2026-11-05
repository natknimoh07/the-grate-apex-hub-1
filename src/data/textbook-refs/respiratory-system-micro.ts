// Textbook pages for reading sections of respiratory-system-micro (printed page numbers), reusing
// pages already matched for the gross and physiology respiratory topics: Gray's Anatomy for
// Students (4th ed.) and Guyton and Hall (14th ed.).
import type { TextbookPages } from '@/data/textbook-refs/types';

export const textbookPages: TextbookPages = {
  "respiratory-system-micro-1": {
    0: [["guyton-hall-14e", [489, 490]]], // Organs, functions and divisions
    1: [["guyton-hall-14e", [498, 499, 500]]], // Layers of a conducting airway
  },
  "respiratory-system-micro-2": {
    0: [["grays-anatomy-students-4e", [1035, 1036, 1037]]], // Paranasal sinuses and pharynx
    1: [["grays-anatomy-students-4e", [1045, 1046, 1047]]], // The larynx
  },
  "respiratory-system-micro-3": {
    1: [["grays-anatomy-students-4e", [173]]], // Bronchi
  },
  "respiratory-system-micro-4": {
    1: [["guyton-hall-14e", [493, 494]]], // Type I and type II pneumocytes (surfactant)
  },
};
