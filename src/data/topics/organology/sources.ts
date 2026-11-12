// Source references, concepts and discrepancies for
// Anatomy → Organology (gross anatomy, HB2) — the first Gross Anatomy topic
// (owner, 2026-11-12: "make organology the first topic … separate organology
// from cardiovascular system … bring all the images in the slides into the app").
//
// Lecture source (defines WHAT is taught; see content-catalog.ts):
//   ORG = "Cardiovascular System Gross 1, (2)" — PPTX, 263 slides. Slides 1–74
//         are Organology (compact and tubular organs, their coats); slides
//         75–263 are the cardiovascular lecture (taught in its own topic).
//
// Reference (clarification only): Gray's Anatomy for Students (4th ed.).
//
// Most of the deck's pictures carry no printed name: the organ on each
// picture page was identified from the picture itself. Pages where that is
// uncertain say so in a red "Check this" box (owner: "dw if you get some
// wrong i'll report them").
import type { SourceDiscrepancy, SourceReference } from '@/data/lesson-types';
import { slides, type ConceptDraft } from '@/data/topics/build';

export const TOPIC_ID = 'organology';

export const ORG = 'anat-organology-cvs-gross-1-2026';

export const s = (numbers: number[]): SourceReference[] => slides(ORG, numbers);
export const sv = (numbers: number[]): SourceReference[] => slides(ORG, [], numbers);
export const GRAYS: SourceReference[] = [{ sourceId: 'grays-anatomy-students-4e' }];

const L = (n: number) => `${TOPIC_ID}-${n}`;

export const concepts = {
  // Lesson 1 — Compact Organs
  'organ-types': { lessonId: L(1), name: 'Two types of organs: compact (no central cavity) and hollow (central cavity)', category: 'core', relevance: 'core', sourceRefs: s([3, 4, 5, 6]) },
  'compact-framework': { lessonId: L(1), name: 'Stroma, capsule, trabeculae, hilum and serosa of compact organs', category: 'core', relevance: 'core', sourceRefs: s([7, 8, 9, 10]) },
  'parenchyma-patterns': { lessonId: L(1), name: 'Arrangement of parenchyma: masses, cords, follicles, tubules, ducts or strands', category: 'core', relevance: 'core', sourceRefs: s([12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]) },

  // Lesson 2 — Tubular Organs and Their Coats
  'tubular-organs': { lessonId: L(2), name: 'Tubular organs: where they are and how their wall is built', category: 'core', relevance: 'core', sourceRefs: s([25, 26, 27, 28]) },
  'three-coats': { lessonId: L(2), name: 'The coats of a tubular organ: mucosa, muscularis, adventitia or serosa', category: 'core', relevance: 'core', sourceRefs: s([29, 30, 31, 32, 33]) },
  'serosa-adventitia': { lessonId: L(2), name: 'Serosa versus adventitia, and the mesothelium', category: 'core', relevance: 'core', sourceRefs: s([34, 35, 36]) },
  'coats-and-function': { lessonId: L(2), name: 'Function decides the number of coats and layers', category: 'core', relevance: 'core', sourceRefs: s([38, 39, 40, 41, 42, 43, 44, 45]) },

  // Lesson 3 — Counting the Coats, System by System
  'three-coat-systems': { lessonId: L(3), name: 'Three coats: urinary, cardiovascular, male and female reproductive systems', category: 'core', relevance: 'core', sourceRefs: s([46, 47, 48, 49, 50]) },
  'gi-four-coats': { lessonId: L(3), name: 'Four coats: the gastrointestinal tract', category: 'core', relevance: 'core', sourceRefs: s([51, 52, 53]) },
  'respiratory-varied': { lessonId: L(3), name: 'Varied coats: the respiratory system', category: 'core', relevance: 'core', sourceRefs: s([54, 55, 56, 57]) },

  // Lesson 4 — Name the Organ, Count the Coats (1)
  'identify-tubes': { lessonId: L(4), name: 'Naming tubular organs in section and counting their coats (appendix, genital ducts, ureter, bladder, gallbladder)', category: 'visual-process', relevance: 'core', sourceRefs: s([58, 59, 60, 61, 62, 63, 64]) },
  'heart-coats': { lessonId: L(4), name: 'The heart as a hollow organ with three layers', category: 'visual-process', relevance: 'core', sourceRefs: s([65, 66]) },

  // Lesson 5 — Name the Organ, Count the Coats (2)
  'identify-gut-sections': { lessonId: L(5), name: 'Naming gut organs in section: oesophagus and stomach', category: 'visual-process', relevance: 'core', sourceRefs: s([67, 68, 73]) },
  'identify-other-sections': { lessonId: L(5), name: 'Naming the artery, airways and genital ducts in section', category: 'visual-process', relevance: 'core', sourceRefs: s([69, 70, 71, 72, 74]) },
} satisfies Record<string, ConceptDraft>;

export type ConceptId = keyof typeof concepts;

export const discrepancies: SourceDiscrepancy[] = [
  {
    id: 'usual-number-of-coats',
    concept: 'How many coats a tubular organ has',
    status: 'resolved',
    statements: [
      { text: 'Slides 30 and 42: tubular organs are usually (generally) made up of 3 coats — mucosa, muscularis, adventitia or serosa.', sourceRefs: s([30, 42]) },
      { text: 'Slides 29, 35 and 51: the gut wall is labelled with four coats (mucosa, submucosa, muscularis externa, serosa), and the gastrointestinal tract is listed under “four coats”.', sourceRefs: s([29, 35, 51]) },
    ],
    resolution: {
      text: 'Not a contradiction: three coats is the general plan, and the gastrointestinal tract is the exception that adds a submucosa (slide 43: the function of the organ determines the number of coats and layers).',
      sourceRefs: s([43, 46, 51]),
    },
  },
];
