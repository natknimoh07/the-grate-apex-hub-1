// Source references and concepts for Anatomy → Respiratory System (microanatomy, HB2).
//
// Lecture source (defines WHAT is taught; see content-catalog.ts):
//   RM = "Respiratory System II – Histology (HB2)" — PPTX, 72 slides, from the owner's Telegram
//        downloads. Many slides are labelled micrographs; slides with no text are not cited.
//
// Reference (clarification only): standard histology texts (Ross & Pawlina; Junqueira) for the
// textbook explanations, and OpenStax Anatomy and Physiology (CC BY 4.0) for the pictures.
import type { SourceDiscrepancy, SourceReference } from '@/data/lesson-types';
import { slides, type ConceptDraft } from '@/data/topics/build';

export const TOPIC_ID = 'respiratory-system-micro';

export const rm = (numbers: number[]): SourceReference[] => slides('anat-resp-histology', numbers);

const L = (n: number) => `${TOPIC_ID}-${n}`;

export const concepts = {
  // Lesson 1 — Respiratory epithelium and the nasal cavity
  'resp-organs': { lessonId: L(1), name: 'Organs, functions and divisions of the respiratory system', category: 'core', relevance: 'core', sourceRefs: rm([1, 3, 4]) },
  'airway-layers': { lessonId: L(1), name: 'Mucosa, lamina propria and submucosa of the conducting airway', category: 'core', relevance: 'core', sourceRefs: rm([30]) },
  'resp-epithelium': { lessonId: L(1), name: 'Cells of the respiratory epithelium', category: 'core', relevance: 'core', sourceRefs: rm([31, 32]) },
  'olfactory-epithelium': { lessonId: L(1), name: 'The olfactory epithelium and Bowman’s glands', category: 'core', relevance: 'core', sourceRefs: rm([33, 34, 36]) },

  // Lesson 2 — Pharynx, larynx, epiglottis and trachea
  'pharynx-sinuses': { lessonId: L(2), name: 'Epithelium of the paranasal sinuses and pharynx', category: 'core', relevance: 'core', sourceRefs: rm([37]) },
  'larynx': { lessonId: L(2), name: 'False and true vocal folds, Reinke’s space and the laryngeal ventricle', category: 'core', relevance: 'core', sourceRefs: rm([38, 41]) },
  'epiglottis': { lessonId: L(2), name: 'The two surfaces of the epiglottis', category: 'core', relevance: 'core', sourceRefs: rm([42]) },
  'trachea': { lessonId: L(2), name: 'The four layers of the tracheal wall and the trachealis', category: 'core', relevance: 'core', sourceRefs: rm([14, 43, 46]) },

  // Lesson 3 — Bronchi and bronchioles
  'bronchial-tree': { lessonId: L(3), name: 'Divisions of the bronchial tree and how its wall changes', category: 'core', relevance: 'core', sourceRefs: rm([5, 6, 29]) },
  'bronchi': { lessonId: L(3), name: 'The five layers of a bronchus', category: 'core', relevance: 'core', sourceRefs: rm([21, 47, 49]) },
  'bronchioles': { lessonId: L(3), name: 'Terminal and respiratory bronchioles', category: 'core', relevance: 'core', sourceRefs: rm([23, 25, 50, 52, 59]) },
  'club-cells': { lessonId: L(3), name: 'Club (Clara) cells and CC16', category: 'core', relevance: 'core', sourceRefs: rm([51]) },

  // Lesson 4 — Alveoli and the blood–air barrier
  'alveoli': { lessonId: L(4), name: 'Alveoli, alveolar septa and pores of Kohn', category: 'core', relevance: 'core', sourceRefs: rm([64]) },
  'pneumocytes': { lessonId: L(4), name: 'Type I and type II pneumocytes and surfactant', category: 'core', relevance: 'core', sourceRefs: rm([65, 66, 67]) },
  'alveolar-macrophages': { lessonId: L(4), name: 'Alveolar macrophages (dust cells, heart failure cells)', category: 'core', relevance: 'core', sourceRefs: rm([65, 69]) },
  'blood-air-barrier': { lessonId: L(4), name: 'The blood–air barrier', category: 'core', relevance: 'core', sourceRefs: rm([68, 70]) },
  'resp-clinical': { lessonId: L(4), name: 'Clinical conditions of the respiratory tract', category: 'clinical', relevance: 'core', sourceRefs: rm([32, 71, 72]) },
} satisfies Record<string, ConceptDraft>;

export type ConceptId = keyof typeof concepts;

export const discrepancies: SourceDiscrepancy[] = [];
