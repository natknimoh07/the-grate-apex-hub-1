// Source references, concepts and discrepancies for Biochemistry → Free
// Radicals and Oxygen Toxicity.
//
// Lecture sources (content-catalog.ts):
//   HB = the Human Biology 2021 deck, "Free Radicals and Oxygen Toxicity"
//        (Dr Annani-Akollor) — 72 slides
//   FY = Prof Fay's deck, same title — 33 slides (largely the same material)
//   SG = the 2026 deck, "Free Radicals & Reactive Oxygen Species"
//        (Dr Segbefia, Department of Molecular Medicine) — 66 slides, added
//        2026-11-10. Cited in the text as "2026 slide N". Many of its slides
//        are figures; slides 58–65 are its "Additional notes".
// The antioxidant handout and "presentation group 4" are study aids, not
// sources of facts. Speaker notes added to the decks are annotations and
// are not quizzed (in the 2026 deck they are figure legends). The 2026
// deck's open discussion questions (slides 27, 35, 49, 51) have no answers
// on the slides and are not quizzed.
import type { SourceDiscrepancy, SourceReference } from '@/data/lesson-types';
import { slides, type ConceptDraft } from '@/data/topics/build';

export const TOPIC_ID = 'free-radicals-and-oxygen-toxicity';

export const hb = (numbers: number[]): SourceReference[] => slides('frox-free-radical-human-biology-2021-autosaved', numbers);
export const fy = (numbers: number[]): SourceReference[] => slides('frox-free-radical-and-oxygen-toxicity-prof-fay', numbers);
export const sg = (numbers: number[]): SourceReference[] => slides('frox-free-radicals-ros-hb-2026', numbers);

const L = (n: number) => `${TOPIC_ID}-${n}`;

export const concepts = {
  // Lesson 1 — What free radicals are and where they come from
  'free-radical-definition': { lessonId: L(1), name: 'Free radicals and their behaviour', category: 'core', relevance: 'core', sourceRefs: [...hb([5, 8]), ...fy([7]), ...sg([4, 6])] },
  'ros-terms': { lessonId: L(1), name: 'Oxygen toxicity, ROS and oxidative stress', category: 'core', relevance: 'core', sourceRefs: [...hb([6, 11, 12]), ...fy([4]), ...sg([4, 5])] },
  'reactive-species': { lessonId: L(1), name: 'Reactive species: radical and non-radical, oxygen, nitrogen and others', category: 'core', relevance: 'core', sourceRefs: sg([4, 7, 11]) },
  'radical-sources': { lessonId: L(1), name: 'Internal and external sources', category: 'core', relevance: 'core', sourceRefs: [...hb([7, 9, 14, 16]), ...fy([5, 6, 8]), ...sg([10, 11, 12, 60])] },
  'ischaemia-reperfusion': { lessonId: L(1), name: 'Ischaemia–reperfusion and the respiratory burst', category: 'core', relevance: 'core', sourceRefs: [...hb([10, 16]), ...sg([60])] },
  'redox-biology': { lessonId: L(1), name: 'Useful roles of reactive species (redox biology)', category: 'core', relevance: 'core', sourceRefs: [...hb([11]), ...sg([33, 54, 56])] },

  // Lesson 2 — Formation, reactions and the major ROS
  'radical-formation': { lessonId: L(2), name: 'How radicals form: one electron lost or gained; homolytic fission', category: 'core', relevance: 'core', sourceRefs: sg([8]) },
  'radical-reactions': { lessonId: L(2), name: 'Radical–radical and radical–non-radical reactions', category: 'core', relevance: 'core', sourceRefs: [...hb([15, 21]), ...fy([9, 10]), ...sg([13, 14])] },
  'major-ros': { lessonId: L(2), name: 'Superoxide, hydrogen peroxide, singlet oxygen and hydroxyl radical', category: 'core', relevance: 'core', sourceRefs: [...hb([34, 35, 36]), ...sg([59])] },
  'nitric-oxide-peroxynitrite': { lessonId: L(2), name: 'Nitric oxide, peroxynitrite and peroxyl radicals', category: 'core', relevance: 'core', sourceRefs: sg([7, 11, 41, 59]) },
  'fenton-haber-weiss': { lessonId: L(2), name: 'Fenton and Haber–Weiss reactions; transition metals; reduction of oxygen', category: 'visual-process', relevance: 'core', sourceRefs: [...hb([37, 69]), ...sg([9, 59])] },

  // Lesson 3 — How free radicals damage cells
  'toxicity-mechanisms': { lessonId: L(3), name: 'Mechanisms of free radical toxicity', category: 'core', relevance: 'core', sourceRefs: [...hb([13, 17, 18, 19]), ...fy([11]), ...sg([33, 36])] },
  'lipid-peroxidation': { lessonId: L(3), name: 'Lipid peroxidation', category: 'visual-process', relevance: 'core', sourceRefs: [...hb([22, 23, 24, 25, 29]), ...fy([12, 13]), ...sg([18, 19, 20, 21])] },
  'protein-damage': { lessonId: L(3), name: 'Oxidative damage to proteins', category: 'core', relevance: 'core', sourceRefs: sg([23, 24, 36]) },
  'dna-damage': { lessonId: L(3), name: 'Oxidative DNA damage', category: 'core', relevance: 'core', sourceRefs: [...hb([26, 27]), ...fy([14, 15]), ...sg([13, 16, 36])] },
  'dna-repair-outcomes': { lessonId: L(3), name: 'Repair, failed repair and mutation of damaged DNA', category: 'core', relevance: 'core', sourceRefs: sg([17, 37, 38]) },
  'oxidised-ldl': { lessonId: L(3), name: 'Why oxidised LDL is atherogenic', category: 'clinical', relevance: 'core', sourceRefs: [...hb([32, 33]), ...sg([41])] },

  // Lesson 4 — Antioxidants
  'antioxidant-action': { lessonId: L(4), name: 'Antioxidants and how they act', category: 'core', relevance: 'core', sourceRefs: [...hb([38, 39, 43, 47, 50]), ...sg([4, 56])] },
  'antioxidant-principles': { lessonId: L(4), name: 'General principles of antioxidant defence', category: 'core', relevance: 'core', sourceRefs: sg([26, 27, 28]) },
  'antioxidant-enzymes': { lessonId: L(4), name: 'SOD, catalase, glutathione peroxidase and the antioxidant enzyme system', category: 'core', relevance: 'core', sourceRefs: [...hb([40, 48]), ...fy([24, 25]), ...sg([28])] },
  'antioxidant-network': { lessonId: L(4), name: 'Protecting red cells; NADPH and glutathione', category: 'core', relevance: 'core', sourceRefs: sg([3, 29]) },
  'antioxidant-vitamins': { lessonId: L(4), name: 'Antioxidant vitamins and other antioxidants', category: 'core', relevance: 'core', sourceRefs: [...hb([41, 44, 45]), ...sg([28, 31, 32])] },
  'chain-breaking': { lessonId: L(4), name: 'Stopping lipid peroxidation: vitamin E, the antioxidant team, GPx4 and PON1', category: 'visual-process', relevance: 'core', sourceRefs: sg([22, 30]) },
  'antioxidant-sources': { lessonId: L(4), name: 'Food sources and location of antioxidants', category: 'supporting', relevance: 'supporting', sourceRefs: [...hb([42, 47, 49]), ...fy([27]), ...sg([57, 61])] },

  // Lesson 5 — ROS in disease
  'ros-disease': { lessonId: L(5), name: 'Oxidative stress, ageing and disease', category: 'clinical', relevance: 'core', sourceRefs: [...hb([31, 52, 53]), ...fy([18, 19])] },
  'cause-or-consequence': { lessonId: L(5), name: 'Cause or consequence; why tissue injury causes oxidative stress', category: 'clinical', relevance: 'core', sourceRefs: sg([35, 62]) },
  'ros-cancer': { lessonId: L(5), name: 'Free radicals and antioxidants in carcinogenesis', category: 'clinical', relevance: 'core', sourceRefs: hb([58, 59, 61, 62, 63]) },
  'p53-lung-cancer': { lessonId: L(5), name: 'Radiation, p53 and lung carcinogenesis', category: 'clinical', relevance: 'core', sourceRefs: sg([46, 47, 48, 63]) },
  'ros-hiv-pregnancy': { lessonId: L(5), name: 'HIV, pregnancy, diabetic embryopathy and Down syndrome', category: 'clinical', relevance: 'core', sourceRefs: [...hb([51, 54, 55, 56, 57, 58]), ...fy([20, 21, 22])] },
  'ros-transplant': { lessonId: L(5), name: 'Transplantation and measuring oxidative stress', category: 'clinical', relevance: 'core', sourceRefs: [...hb([64, 65, 66, 67]), ...fy([23, 26])] },
  'oxidative-biomarkers': { lessonId: L(5), name: 'Biomarkers of damage to lipids, DNA and proteins', category: 'core', relevance: 'core', sourceRefs: sg([53]) },

  // Lesson 6 — Reactive species in the arteries, heart, brain and ageing (2026 deck)
  'atherosclerosis-ros': { lessonId: L(6), name: 'Reactive species in atherosclerosis and heart disease', category: 'clinical', relevance: 'core', sourceRefs: sg([40, 41, 42, 63]) },
  'iri-mechanism': { lessonId: L(6), name: 'Ischaemia–reperfusion injury: xanthine oxidase, calcium and the mitochondria', category: 'visual-process', relevance: 'core', sourceRefs: sg([43, 44, 45, 63]) },
  'obesity-diabetes-ros': { lessonId: L(6), name: 'Obesity, diabetes and its complications', category: 'clinical', relevance: 'core', sourceRefs: sg([39, 50, 54, 55, 65]) },
  'neurodegeneration-ros': { lessonId: L(6), name: 'Alzheimer’s, Parkinson’s and other diseases of the brain and immune system', category: 'clinical', relevance: 'core', sourceRefs: sg([49, 50, 55, 64]) },
  'ageing-theory': { lessonId: L(6), name: 'The free radical theory of ageing', category: 'clinical', relevance: 'core', sourceRefs: sg([51, 52]) },
} satisfies Record<string, ConceptDraft>;

export type ConceptId = keyof typeof concepts;

export const discrepancies: SourceDiscrepancy[] = [
  {
    id: 'sod-reaction',
    concept: 'Products of superoxide dismutation',
    status: 'unresolved',
    statements: [
      { text: 'HB slide 15 and FY slide 9 write 2O₂·⁻ + 2H⁺ → H₂O₂ + O₂⁻.', sourceRefs: [...hb([15]), ...fy([9])] },
      { text: 'HB slide 35 writes 2O₂·⁻ + 2H⁺ → H₂O₂ + O₂.', sourceRefs: hb([35]) },
      { text: 'The 2026 deck’s enzyme figure (slide 28) draws 2O₂·⁻ → 2H₂O₂ under SOD, with no oxygen.', sourceRefs: sg([28]) },
    ],
    note: 'The lesson uses the slide-35 form, which is also the reference textbook’s (Halliwell and Gutteridge: O₂·⁻ + O₂·⁻ + 2H⁺ → H₂O₂ + O₂). The charge on O₂ and the figure’s 2H₂O₂ are not quizzed.',
  },
  {
    id: 'nitric-oxide-radical',
    concept: 'Whether nitric oxide is a free radical',
    status: 'unresolved',
    statements: [
      { text: 'HB slide 6: NO is given as an example of a non-radical ROS, with H₂O₂ and HOCl.', sourceRefs: hb([6]) },
      { text: 'HB slide 34 lists NO· (with the radical dot) among biologically significant free radicals; the 2026 deck lists nitric oxide (NO•) as a free radical among the reactive nitrogen species (slides 11, 59).', sourceRefs: [...hb([34]), ...sg([11, 59])] },
    ],
    note: 'Two of the three statements (and both decks’ symbols) treat NO as a radical; whether NO is a radical is still not quizzed.',
  },
  {
    id: 'peroxynitrite-formation',
    concept: 'Which radical combines with superoxide to give peroxynitrite',
    status: 'resolved',
    statements: [
      { text: 'HB slide 15 and Fay slide 9: O₂·⁻ + NO₂· → ONOO⁻ (peroxynitrite), as an example of two radicals forming a covalent bond.', sourceRefs: [...hb([15]), ...fy([9])] },
      { text: '2026 slides 7 and 59: co-production of nitric oxide (NO·) and superoxide is dangerous; peroxynitrite forms by their immediate reaction.', sourceRefs: sg([7, 59]) },
    ],
    resolution: {
      text: 'The reference textbook (Halliwell and Gutteridge) gives NO· + O₂·⁻ → ONOO⁻: nitric oxide, not nitrogen dioxide, combines with superoxide to give peroxynitrite.',
      sourceRefs: [{ sourceId: 'halliwell-free-radicals', note: 'Free radicals in biology and medicine, Chapter 2 (reactive nitrogen species)' }],
    },
    note: 'The lesson and its questions use nitric oxide (changed 2026-11-10 when the 2026 deck was added; the older decks’ wording is quoted in a “clarified” note).',
  },
];
