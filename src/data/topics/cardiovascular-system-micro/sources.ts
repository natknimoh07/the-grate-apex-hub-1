// Source references and concepts for Anatomy → Cardiovascular System (microanatomy, HB2).
//
// Lecture source (defines WHAT is taught; see content-catalog.ts):
//   CM = "Cardiovascular System (Micro)" — PPTX, 108 slides (the newer of two copies in the
//        owner's Telegram downloads; the 96-slide copy has the same text). Slides 3–9, 12, 17,
//        20, 22–23, 25, 28–30, 32, 36–38, 40, 42, 44, 46–48, 53, 55, 57, 59, 62, 64, 67, 69, 75–76,
//        80, 83, 85, 87 and 95–108 are micrographs or diagrams without text and are not cited.
//
// Reference (clarification only): OpenStax Anatomy and Physiology (CC BY 4.0) for the pictures,
// and standard histology texts (Ross & Pawlina; Junqueira) for the textbook explanations.
import type { SourceDiscrepancy, SourceReference } from '@/data/lesson-types';
import { slides, type ConceptDraft } from '@/data/topics/build';

export const TOPIC_ID = 'cardiovascular-system-micro';

export const cm = (numbers: number[]): SourceReference[] => slides('anat-cvs-micro', numbers);

const L = (n: number) => `${TOPIC_ID}-${n}`;

export const concepts = {
  // Lesson 1 — The heart
  'cvs-overview': { lessonId: L(1), name: 'Parts and functions of the blood vascular system', category: 'core', relevance: 'core', sourceRefs: cm([2, 10, 11, 13]) },
  'heart-layers': { lessonId: L(1), name: 'Endocardium, subendocardium, myocardium and epicardium', category: 'core', relevance: 'core', sourceRefs: cm([14, 15]) },
  'heart-valves': { lessonId: L(1), name: 'Atrioventricular and semilunar valves', category: 'core', relevance: 'core', sourceRefs: cm([16, 18]) },
  'heart-conduction': { lessonId: L(1), name: 'SA node, AV node, bundle of His and Purkinje fibres', category: 'core', relevance: 'core', sourceRefs: cm([18, 19]) },

  // Lesson 2 — Arteries
  'artery-tunics': { lessonId: L(2), name: 'The three tunics of the arterial wall and the types of artery', category: 'core', relevance: 'core', sourceRefs: cm([21, 24]) },
  'elastic-arteries': { lessonId: L(2), name: 'Elastic (conducting) arteries', category: 'core', relevance: 'core', sourceRefs: cm([26, 27, 31]) },
  'muscular-arteries': { lessonId: L(2), name: 'Muscular (distributing) and small arteries', category: 'core', relevance: 'core', sourceRefs: cm([33, 34, 35, 39]) },
  'arterioles': { lessonId: L(2), name: 'Arterioles, metarterioles and precapillary sphincters', category: 'core', relevance: 'core', sourceRefs: cm([41, 43, 45]) },

  // Lesson 3 — Capillaries
  'capillary-structure': { lessonId: L(3), name: 'Structure of capillaries and their endothelial cells', category: 'core', relevance: 'core', sourceRefs: cm([49, 50, 51, 52]) },
  'continuous-capillaries': { lessonId: L(3), name: 'Continuous capillaries and pericytes', category: 'core', relevance: 'core', sourceRefs: cm([54, 56, 58]) },
  'fenestrated-capillaries': { lessonId: L(3), name: 'Fenestrated capillaries and their diaphragms', category: 'core', relevance: 'core', sourceRefs: cm([60, 61, 63]) },
  'sinusoids': { lessonId: L(3), name: 'Sinusoidal capillaries and arteriovenous shunts', category: 'core', relevance: 'core', sourceRefs: cm([65, 66, 68]) },

  // Lesson 4 — Veins, atypical vessels and lymphatics
  'veins-small': { lessonId: L(4), name: 'Types of vein, venules and small veins', category: 'core', relevance: 'core', sourceRefs: cm([70, 71, 72]) },
  'medium-veins': { lessonId: L(4), name: 'Medium veins and venous valves', category: 'core', relevance: 'core', sourceRefs: cm([73, 74, 77, 78, 79]) },
  'large-veins': { lessonId: L(4), name: 'Large veins', category: 'core', relevance: 'core', sourceRefs: cm([81, 82, 84, 86]) },
  'atypical-vessels': { lessonId: L(4), name: 'Coronary arteries, dural venous sinuses and the great saphenous vein', category: 'important-detail', relevance: 'core', sourceRefs: cm([88, 89, 90, 91]) },
  'lymphatics': { lessonId: L(4), name: 'Lymphatic capillaries and vessels', category: 'core', relevance: 'core', sourceRefs: cm([92, 93, 94]) },
} satisfies Record<string, ConceptDraft>;

export type ConceptId = keyof typeof concepts;

export const discrepancies: SourceDiscrepancy[] = [];
