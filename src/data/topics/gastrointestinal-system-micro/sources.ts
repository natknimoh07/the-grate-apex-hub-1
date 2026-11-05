// Source references and concepts for Anatomy → Gastrointestinal System (microanatomy, HB2).
//
// Lecture source (defines WHAT is taught; see content-catalog.ts):
//   GM = "Microscopic Anatomy GIT (edited 2024)" — PPTX, 369 slides, in the owner's content folder
//        (Anatomy/Micro/GIT). Most slides are labelled micrographs; slides with no text are not
//        cited. The wall layers, oesophagus, gastric gland cells and pancreas are shown mostly
//        as pictures, so their sections add textbook explanation (labelled).
//
// Reference (clarification only): standard histology texts (Ross & Pawlina; Junqueira) for the
// textbook explanations, and OpenStax Anatomy and Physiology (CC BY 4.0) for the pictures.
import type { SourceDiscrepancy, SourceReference } from '@/data/lesson-types';
import { slides, type ConceptDraft } from '@/data/topics/build';

export const TOPIC_ID = 'gastrointestinal-system-micro';

export const gm = (numbers: number[]): SourceReference[] => slides('anat-git-micro', numbers);

const L = (n: number) => `${TOPIC_ID}-${n}`;

export const concepts = {
  // Lesson 1 — The oral cavity, oral mucosa and lips
  'digestive-overview': { lessonId: L(1), name: 'Parts and functions of the digestive system', category: 'core', relevance: 'core', sourceRefs: gm([3, 4]) },
  'oral-cavity': { lessonId: L(1), name: 'The oral cavity: vestibule, cavity proper and boundaries', category: 'core', relevance: 'core', sourceRefs: gm([5, 6, 7, 8, 9, 10]) },
  'oral-mucosa': { lessonId: L(1), name: 'Lining, masticatory and specialised oral mucosa; keratinisation', category: 'core', relevance: 'core', sourceRefs: gm([15, 16, 18, 19, 20, 24, 25]) },
  'lip': { lessonId: L(1), name: 'The lip and its three surfaces', category: 'core', relevance: 'core', sourceRefs: gm([11, 12, 13, 26, 28, 29, 30, 31]) },

  // Lesson 2 — The tongue and taste
  'tongue': { lessonId: L(2), name: 'The tongue: muscle, sulcus terminalis and foramen caecum', category: 'core', relevance: 'core', sourceRefs: gm([36, 37, 38]) },
  'papillae': { lessonId: L(2), name: 'Filiform, fungiform, circumvallate and foliate papillae', category: 'core', relevance: 'core', sourceRefs: gm([38, 44, 46, 48, 53]) },
  'taste-buds': { lessonId: L(2), name: 'Taste buds and their cells', category: 'core', relevance: 'core', sourceRefs: gm([56, 59, 60, 61]) },
  'taste-transduction': { lessonId: L(2), name: 'How the five tastes are detected', category: 'core', relevance: 'core', sourceRefs: gm([63, 64, 65, 66, 67]) },

  // Lesson 3 — Teeth, salivary glands and tonsils
  'teeth': { lessonId: L(3), name: 'Enamel, dentin, cementum and pulp', category: 'core', relevance: 'core', sourceRefs: gm([70, 71, 72, 73, 74, 76, 77, 78, 79]) },
  'salivary-structure': { lessonId: L(3), name: 'Serous and mucous cells, demilunes, ducts, salivon and myoepithelial cells', category: 'core', relevance: 'core', sourceRefs: gm([81, 82, 83, 84, 86, 87, 88, 114, 115]) },
  'major-salivary': { lessonId: L(3), name: 'Parotid, submandibular and sublingual glands', category: 'core', relevance: 'core', sourceRefs: gm([89, 90, 91, 92, 96, 98, 102, 104, 105, 106]) },
  'tonsils': { lessonId: L(3), name: 'The tonsillar (Waldeyer’s) ring', category: 'core', relevance: 'core', sourceRefs: gm([116, 118, 119, 120, 121, 122, 123]) },

  // Lesson 4 — The wall of the tract, oesophagus and stomach
  'git-wall': { lessonId: L(4), name: 'The four coats of the alimentary canal', category: 'core', relevance: 'core', sourceRefs: gm([127, 129, 138]) },
  'oesophagus': { lessonId: L(4), name: 'The oesophagus', category: 'core', relevance: 'core', sourceRefs: gm([149, 158, 164]) },
  'stomach-regions': { lessonId: L(4), name: 'Cardiac, fundic and pyloric regions; rugae and gastric pits', category: 'core', relevance: 'core', sourceRefs: gm([166, 168, 169, 174, 176, 178, 179]) },
  'gastric-cells': { lessonId: L(4), name: 'Parietal, chief, mucous and G cells', category: 'core', relevance: 'core', sourceRefs: gm([173, 178]) },

  // Lesson 5 — The intestines, anal canal and junctions
  'small-intestine': { lessonId: L(5), name: 'Villi, microvilli, plicae circulares and crypts', category: 'core', relevance: 'core', sourceRefs: gm([182, 183, 187, 188, 196, 202, 216]) },
  'si-regions': { lessonId: L(5), name: 'Duodenum, jejunum and ileum compared', category: 'core', relevance: 'core', sourceRefs: gm([213, 215, 221, 224]) },
  'large-intestine': { lessonId: L(5), name: 'Colon, caecum and appendix', category: 'core', relevance: 'core', sourceRefs: gm([231, 235, 236, 239, 244, 246, 247, 255, 259]) },
  'rectum-anal': { lessonId: L(5), name: 'The rectum and anal canal', category: 'core', relevance: 'core', sourceRefs: gm([260, 261, 262, 263, 265, 267, 271, 273]) },
  'git-junctions': { lessonId: L(5), name: 'Junctions where the epithelium changes', category: 'core', relevance: 'core', sourceRefs: gm([274, 275, 276, 277]) },

  // Lesson 6 — Liver, gallbladder and pancreas
  'liver-structure': { lessonId: L(6), name: 'The liver: capsule, lobes, development and hepatocytes', category: 'core', relevance: 'core', sourceRefs: gm([283, 284, 285, 287, 294, 300]) },
  'liver-lobules': { lessonId: L(6), name: 'Classic lobule, portal lobule and liver acinus', category: 'core', relevance: 'core', sourceRefs: gm([289, 290, 297, 302, 317, 318, 320, 321]) },
  'biliary-tree': { lessonId: L(6), name: 'The biliary tree', category: 'core', relevance: 'core', sourceRefs: gm([322, 323, 324, 325]) },
  'liver-clinical': { lessonId: L(6), name: 'Hepatitis and jaundice', category: 'clinical', relevance: 'core', sourceRefs: gm([327, 328]) },
  'gallbladder': { lessonId: L(6), name: 'The gallbladder', category: 'core', relevance: 'core', sourceRefs: gm([330, 333]) },
  'pancreas': { lessonId: L(6), name: 'The exocrine and endocrine pancreas', category: 'core', relevance: 'core', sourceRefs: gm([340, 346]) },
} satisfies Record<string, ConceptDraft>;

export type ConceptId = keyof typeof concepts;

export const discrepancies: SourceDiscrepancy[] = [
  {
    id: 'cementum-mineral',
    concept: 'How much of cementum is mineral',
    status: 'unresolved',
    statements: [
      { text: 'Slide 76: 45–50% inorganic matrix and 50–55% organic material.', sourceRefs: gm([76]) },
      { text: 'Slide 77: “Cementum is 65% mineral.”', sourceRefs: gm([77]) },
    ],
    note: 'Ross & Pawlina give 45–50% inorganic; the 65% figure is closer to bone.',
  },
  {
    id: 'cementum-vascularity',
    concept: 'Whether cementum is vascular',
    status: 'resolved',
    statements: [{ text: 'Slide 77: cementum is avascular, and its canaliculi do not form a network.', sourceRefs: gm([77]) }],
  },
];
