// Source references and concepts for Anatomy → Embryology (HB2).
//
// Lecture source (defines WHAT is taught; see content-catalog.ts):
//   EM = "Fertilization, Cleavage, 1–3 Weeks" — PPTX, 330 slides, from the owner's Telegram
//        downloads (2026-11-05). It runs from fertilization through weeks 1–3, the placenta and
//        the fetal membranes to folding of the embryo. Many slides are pictures only; slides
//        with no text are not cited.
//
// Reference (clarification only): Langman's Medical Embryology and Moore's The Developing Human
// for the textbook explanations; OpenStax Anatomy and Physiology (CC BY 4.0) for the pictures.
import type { SourceDiscrepancy, SourceReference } from '@/data/lesson-types';
import { slides, type ConceptDraft } from '@/data/topics/build';

export const TOPIC_ID = 'embryology';

export const em = (numbers: number[]): SourceReference[] => slides('anat-embryo-early', numbers);

const L = (n: number) => `${TOPIC_ID}-${n}`;

export const concepts = {
  // Lesson 1 — Fertilization
  'sperm-transport': { lessonId: L(1), name: 'The journey of sperm to the ampulla and thermotaxis', category: 'core', relevance: 'core', sourceRefs: em([2, 3, 5]) },
  'capacitation': { lessonId: L(1), name: 'Capacitation and hyperactivation', category: 'core', relevance: 'core', sourceRefs: em([6, 8, 12]) },
  'acrosome-reaction': { lessonId: L(1), name: 'The acrosome reaction and the zona pellucida proteins', category: 'core', relevance: 'core', sourceRefs: em([13, 18, 23]) },
  'fertilization-phases': { lessonId: L(1), name: 'The three phases of fertilization', category: 'core', relevance: 'core', sourceRefs: em([14, 15, 16, 19, 21, 24]) },
  'oocyte-response': { lessonId: L(1), name: 'Cortical and zona reactions, meiosis II and the pronuclei', category: 'core', relevance: 'core', sourceRefs: em([25, 26, 27, 28, 29]) },
  'fertilization-results': { lessonId: L(1), name: 'Results of fertilization', category: 'core', relevance: 'core', sourceRefs: em([30]) },

  // Lesson 2 — Cleavage, the blastocyst and twins
  'cleavage': { lessonId: L(2), name: 'Cleavage, blastomeres and compaction', category: 'core', relevance: 'core', sourceRefs: em([33, 36, 37, 38, 39, 43, 48]) },
  'morula': { lessonId: L(2), name: 'The morula, inner and outer cell masses', category: 'core', relevance: 'core', sourceRefs: em([40, 41]) },
  'blastocyst': { lessonId: L(2), name: 'Blastocyst formation and the start of implantation', category: 'core', relevance: 'core', sourceRefs: em([52, 53, 54, 55]) },
  'twinning-factors': { lessonId: L(2), name: 'Twinning and the factors that favour it', category: 'core', relevance: 'core', sourceRefs: em([58, 59, 60, 61]) },
  'mz-dz-twins': { lessonId: L(2), name: 'Monozygotic and dizygotic twins', category: 'core', relevance: 'core', sourceRefs: em([62, 63, 68, 85]) },
  'conjoined-twins': { lessonId: L(2), name: 'Conjoined (Siamese) twins and fetus in fetu', category: 'clinical', relevance: 'core', sourceRefs: em([70, 71, 72, 73, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84]) },

  // Lesson 3 — Week 2: the bilaminar germ disc
  'week2-day8': { lessonId: L(3), name: 'Day 8: cytotrophoblast, syncytiotrophoblast, epiblast, hypoblast and the amniotic cavity', category: 'core', relevance: 'core', sourceRefs: em([87, 88, 89, 90, 91, 92]) },
  'week2-day9': { lessonId: L(3), name: 'Day 9: the lacunar stage and the primitive yolk sac', category: 'core', relevance: 'core', sourceRefs: em([93, 94, 95]) },
  'week2-day11': { lessonId: L(3), name: 'Days 11–12: uteroplacental circulation, extraembryonic mesoderm and coelom, decidual reaction', category: 'core', relevance: 'core', sourceRefs: em([97, 98, 99, 100, 102, 104, 106, 107]) },
  'week2-day13': { lessonId: L(3), name: 'Day 13: primary villi, the secondary yolk sac and the connecting stalk', category: 'core', relevance: 'core', sourceRefs: em([108, 110, 111, 112, 113, 114]) },
  'implantation-clinical': { lessonId: L(3), name: 'hCG, immune protection and abnormal implantation', category: 'clinical', relevance: 'core', sourceRefs: em([117, 118, 119, 120, 121]) },
  'mole-failure': { lessonId: L(3), name: 'Hydatidiform mole and reproductive failure', category: 'clinical', relevance: 'core', sourceRefs: em([122, 126, 127]) },

  // Lesson 4 — Week 3: gastrulation and the notochord
  'gastrulation': { lessonId: L(4), name: 'Gastrulation and the embryonic period', category: 'core', relevance: 'core', sourceRefs: em([134, 135]) },
  'primitive-streak': { lessonId: L(4), name: 'The primitive streak, node, pit and groove, and the body axes', category: 'core', relevance: 'core', sourceRefs: em([137, 138, 139, 142]) },
  'germ-layers': { lessonId: L(4), name: 'Invagination and the three germ layers', category: 'core', relevance: 'core', sourceRefs: em([144, 145, 146, 148, 149, 154, 166]) },
  'prechordal-plate': { lessonId: L(4), name: 'The prechordal plate and the oropharyngeal and cloacal membranes', category: 'core', relevance: 'core', sourceRefs: em([156, 157, 158, 159, 160, 161]) },
  'fate-map': { lessonId: L(4), name: 'The fate map of the primitive streak', category: 'core', relevance: 'core', sourceRefs: em([163]) },
  'notochord': { lessonId: L(4), name: 'Formation and functions of the notochord', category: 'core', relevance: 'core', sourceRefs: em([170, 171, 172, 173, 176]) },
  'gastrulation-clinical': { lessonId: L(4), name: 'Teratogens, caudal dysgenesis and sacrococcygeal teratoma', category: 'clinical', relevance: 'core', sourceRefs: em([197, 198, 199, 200, 202, 204, 207, 209]) },

  // Lesson 5 — Mesoderm, neurulation and the early heart
  'mesoderm-columns': { lessonId: L(5), name: 'Paraxial, intermediate and lateral plate mesoderm', category: 'core', relevance: 'core', sourceRefs: em([169, 175]) },
  'somites': { lessonId: L(5), name: 'Somitomeres, somites and their derivatives', category: 'core', relevance: 'core', sourceRefs: em([179, 180, 185, 186, 187]) },
  'lateral-mesoderm': { lessonId: L(5), name: 'Intermediate mesoderm, somatic and splanchnic mesoderm, and the intraembryonic coelom', category: 'core', relevance: 'core', sourceRefs: em([189, 190]) },
  'neurulation': { lessonId: L(5), name: 'Neurulation and the neuropores', category: 'core', relevance: 'core', sourceRefs: em([211, 212, 215, 216]) },
  'neural-crest': { lessonId: L(5), name: 'The neural crest', category: 'core', relevance: 'core', sourceRefs: em([217]) },
  'ntds': { lessonId: L(5), name: 'Neural tube defects and their prevention', category: 'clinical', relevance: 'core', sourceRefs: em([219, 220, 221, 226, 227]) },
  'cardiogenesis': { lessonId: L(5), name: 'The heart tubes of week 3', category: 'core', relevance: 'core', sourceRefs: em([228]) },

  // Lesson 6 — Villi and the placenta
  'villi': { lessonId: L(6), name: 'Primary, secondary and tertiary villi; stem and free villi', category: 'core', relevance: 'core', sourceRefs: em([233, 234, 235, 236, 237, 238, 239, 241]) },
  'decidua-chorion': { lessonId: L(6), name: 'The decidua, chorion frondosum and chorion laeve', category: 'core', relevance: 'core', sourceRefs: em([244, 245, 246, 247, 248, 249]) },
  'placenta-structure': { lessonId: L(6), name: 'Trophoblastic shell, spiral arteries, septa, cotyledons and placentomes', category: 'core', relevance: 'core', sourceRefs: em([250, 251, 252, 253, 254, 256, 258, 259]) },
  'placental-barrier': { lessonId: L(6), name: 'The placental membrane', category: 'core', relevance: 'core', sourceRefs: em([260, 261, 264]) },
  'placental-circulation': { lessonId: L(6), name: 'Circulation of the placenta', category: 'core', relevance: 'core', sourceRefs: em([265, 266, 267]) },
  'placenta-functions': { lessonId: L(6), name: 'The full-term placenta and its functions', category: 'core', relevance: 'core', sourceRefs: em([269, 270, 271, 273, 274]) },
  'placenta-abnormal': { lessonId: L(6), name: 'Placenta previa, abruption and accreta', category: 'clinical', relevance: 'core', sourceRefs: em([275, 276, 277, 279]) },

  // Lesson 7 — Fetal membranes, the umbilical cord and folding
  'amnion': { lessonId: L(7), name: 'The amnion and the primitive umbilical ring', category: 'core', relevance: 'core', sourceRefs: em([282, 283, 284, 285, 286, 287, 288]) },
  'amniotic-fluid': { lessonId: L(7), name: 'Amniotic fluid: make-up, volume, turnover and functions', category: 'core', relevance: 'core', sourceRefs: em([289, 290, 291, 292, 293]) },
  'amniotic-disorders': { lessonId: L(7), name: 'Oligohydramnios, polyhydramnios and amniotic bands', category: 'clinical', relevance: 'core', sourceRefs: em([294, 295, 296]) },
  'yolk-sac': { lessonId: L(7), name: 'The yolk sac, its functions and Meckel’s diverticulum', category: 'core', relevance: 'core', sourceRefs: em([298, 299, 300, 301, 302, 303]) },
  'allantois': { lessonId: L(7), name: 'The allantois and urachus', category: 'core', relevance: 'core', sourceRefs: em([304, 305, 307, 309]) },
  'umbilical-cord': { lessonId: L(7), name: 'The umbilical cord and its abnormalities', category: 'core', relevance: 'core', sourceRefs: em([310, 311, 314, 315, 316, 317, 318, 319]) },
  'folding': { lessonId: L(7), name: 'Folding of the embryo and the derivatives of endoderm', category: 'core', relevance: 'core', sourceRefs: em([321, 323, 324, 325, 326, 327, 328, 329, 330]) },
} satisfies Record<string, ConceptDraft>;

export type ConceptId = keyof typeof concepts;

// Textbook statements (Langman, Moore) are not in the supplied files, so they carry no file reference.
const LANGMAN: SourceReference[] = [];

export const discrepancies: SourceDiscrepancy[] = [
  {
    id: 'bilaminar-disc-layers',
    concept: 'How many layers make the flat germ disc of week 2',
    status: 'resolved',
    statements: [
      { text: 'Slide 90: after describing the hypoblast and epiblast, “Together, these 4 layers form a flat disc.”', sourceRefs: em([90]) },
      { text: 'Langman: the epiblast and hypoblast together form a flat, two-layered (bilaminar) germ disc.', sourceRefs: LANGMAN },
    ],
    resolution: { text: 'The disc has two layers (epiblast and hypoblast); “4” is a slip.', sourceRefs: LANGMAN },
  },
  {
    id: 'blastocoel-fluid',
    concept: 'Where the fluid that forms the blastocoel comes from',
    status: 'unresolved',
    statements: [
      { text: 'Slide 52: fluid from the uterine tube penetrates the zona pellucida as the morula enters the uterine cavity.', sourceRefs: em([52]) },
      { text: 'Langman: the fluid comes from the uterine cavity.', sourceRefs: LANGMAN },
    ],
    note: 'Both are kept; the textbook wording is uterine fluid.',
  },
  {
    id: 'first-cleavage-timing',
    concept: 'When the first cleavage division happens',
    status: 'unresolved',
    statements: [
      { text: 'Slide 43: “The first cleavage division occurs 1 to 5 days following ovulation.” Slide 46 labels the 2-cell stage at about 30 hours and the 4-cell stage at about 40 hours.', sourceRefs: em([43, 46]) },
      { text: 'Langman: the 2-cell stage is reached about 30 hours after fertilization.', sourceRefs: LANGMAN },
    ],
    note: 'Learn the 30-hour figure for the 2-cell stage; ask the lecturer about “1 to 5 days”.',
  },
  {
    id: 'prechordal-plate-membrane',
    concept: 'Whether the prechordal plate becomes the oropharyngeal membrane',
    status: 'unresolved',
    statements: [
      { text: 'Slide 161: cranially, the prechordal plate later becomes the oro- (bucco-) pharyngeal membrane.', sourceRefs: em([161]) },
      { text: 'Slides 158 and 160: the prechordal plate lies between the tip of the notochord and the oropharyngeal membrane, which is ectoderm stuck to endoderm.', sourceRefs: em([158, 160]) },
    ],
    note: 'Textbooks place the oropharyngeal membrane just cranial to the prechordal plate; the two are neighbours.',
  },
  {
    id: 'sacrococcygeal-malignancy',
    concept: 'Whether sacrococcygeal teratomas are usually malignant',
    status: 'unresolved',
    statements: [
      { text: 'Slide 207: more common in female infants and usually becomes malignant during infancy.', sourceRefs: em([207]) },
      { text: 'Moore and Langman: most are benign at birth and are removed early, because the chance of malignancy rises with age.', sourceRefs: LANGMAN },
    ],
  },
  {
    id: 'amniotic-band-incidence',
    concept: 'How often amniotic band syndrome occurs',
    status: 'unresolved',
    statements: [
      { text: 'Slide 296: 1 in every 200 live births.', sourceRefs: em([296]) },
      { text: 'Langman: about 1 in 1,200 live births.', sourceRefs: LANGMAN },
    ],
  },
];
