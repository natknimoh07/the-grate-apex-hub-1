// Source references, concepts, discrepancies and diagram knowledge for
// Physiology → Cardiovascular Physiology.
//
// Lecture sources (define WHAT is taught; see content-catalog.ts):
//   C1 = "The Heart and Circulation" (CIRCULATION 1 .pptx, 112 slides)
//   C2 = "Regulation of the CVS" (CIRCULATION 2 with slides.pptm, 41 slides)
//   C3 = "Homeostasis of the Cardiovascular Region" (Circulation 3, 36 slides)
//   C4 = "Regional Circulation" (CIRCULATION 4.ppsx, 49 slides)
//   C5 = "Cardiac Rhythms and the Electrocardiogram" (CIRCULATION 5 ECG, 28 slides)
// Many slides are pictures only (diagrams of the heart, Starling curves,
// ECG strips); lessons use the slide text. Speaker notes that were added to
// the decks later (clinical notes on S2, the r⁴ rule, Cushing's triad, the
// 75% rule…) are labelled as annotations and are not quizzed.
//
// Reference (clarification only): Guyton and Hall, Textbook of Medical
// Physiology (14th ed.), via GUYTON.
import type { SourceDiagram, SourceDiscrepancy, SourceReference } from '@/data/lesson-types';
import { slides, type ConceptDraft } from '@/data/topics/build';

export const TOPIC_ID = 'cardiovascular-physiology';

const C1 = 'cvs-circulation-1';
const C2 = 'cvs-circulation-2-with-slides';
const C3 = 'cvs-circulation-3-homeostais-in-cvs';
const C4 = 'cvs-circulation-4';
const C5 = 'cvs-circulation-5-ecg';

const VISUAL1 = [5, 6, 7, 8, 10, 18, 23, 27, 28, 32, 35, 37, 38, 43, 45, 46, 47, 55, 56, 64, 70, 84, 88, 89, 90, 94, 98, 104, 105];
const VISUAL2 = [14, 19, 23, 25, 27, 29, 30, 39];
const VISUAL3 = [2, 7, 9, 10, 21, 27, 34];
const VISUAL4 = [2, 3, 4, 6, 27, 34, 35, 43, 44, 46];
const VISUAL5 = [3, 4, 5, 8, 14, 15, 16];

const deck = (id: string, visual: number[]) => (numbers: number[]): SourceReference[] =>
  slides(id, numbers, numbers.filter((n) => visual.includes(n)));

// c1([12]) → "The Heart and Circulation" slide 12, and so on.
export const c1 = deck(C1, VISUAL1);
export const c2 = deck(C2, VISUAL2);
export const c3 = deck(C3, VISUAL3);
export const c4 = deck(C4, VISUAL4);
export const c5 = deck(C5, VISUAL5);

// The reference textbook (clarifications only).
export const GUYTON: SourceReference[] = [{ sourceId: 'guyton-hall-14e' }];
export const COSTANZO: SourceReference[] = [{ sourceId: 'costanzo-physiology' }];
// Syllabus gap-fill (owner, 2026-11-13): sections the official HB2 physiology
// syllabus (5.3–5.14) lists but the slides do not teach are written from the
// reference textbooks and marked origin: 'textbook'.
export const BOOKS: SourceReference[] = [...GUYTON, ...COSTANZO];

const L = (n: number) => `${TOPIC_ID}-${n}`;
export const LESSON_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(L);

// ─── Concepts ───────────────────────────────────────────────────────

export const concepts = {
  // Lesson 1 — The heart: conduction and the cardiac cycle
  'heart-function': { lessonId: L(1), name: 'What the heart does', category: 'core', relevance: 'core', sourceRefs: c1([4, 11]) },
  'conduction-system': { lessonId: L(1), name: 'The conducting system', category: 'visual-process', relevance: 'core', sourceRefs: c1([7, 8, 9, 10]) },
  'cycle-phases': { lessonId: L(1), name: 'Phases of the cardiac cycle', category: 'core', relevance: 'core', sourceRefs: c1([12, 13, 14, 15, 17]) },
  'cycle-volumes': { lessonId: L(1), name: 'Ventricular volumes and ejection fraction', category: 'core', relevance: 'core', sourceRefs: c1([16]) },
  'valve-timing': { lessonId: L(1), name: 'Right versus left ejection and valve closure', category: 'core', relevance: 'core', sourceRefs: c1([18, 19]) },
  'fast-heart-rate': { lessonId: L(1), name: 'Why a fast heart rate shortens diastole', category: 'core', relevance: 'core', sourceRefs: c1([20]) },

  // Lesson 2 — Pulse, JVP, heart sounds and murmurs
  'arterial-pulse': { lessonId: L(2), name: 'The arterial pulse', category: 'core', relevance: 'core', sourceRefs: c1([24, 25]) },
  'jvp-waves': { lessonId: L(2), name: 'Jugular venous pulse waves', category: 'visual-process', relevance: 'core', sourceRefs: c1([26, 27]) },
  'jvp-clinical': { lessonId: L(2), name: 'Using the JVP clinically', category: 'clinical', relevance: 'core', sourceRefs: c1([28]) },
  'heart-sounds': { lessonId: L(2), name: 'The heart sounds', category: 'core', relevance: 'core', sourceRefs: c1([30, 31, 33, 34]) },
  'murmurs': { lessonId: L(2), name: 'Murmurs and bruits', category: 'clinical', relevance: 'core', sourceRefs: c1([35, 36, 38, 40]) },

  // Lesson 3 — Cardiac output
  'cardiac-output-definition': { lessonId: L(3), name: 'Cardiac output and cardiac index', category: 'core', relevance: 'core', sourceRefs: c1([41, 42]) },
  'frank-starling': { lessonId: L(3), name: 'Preload, afterload and the Frank–Starling law', category: 'core', relevance: 'core', sourceRefs: c1([44, 45, 48, 49]) },
  'contractility': { lessonId: L(3), name: 'Myocardial contractility and inotropy', category: 'core', relevance: 'core', sourceRefs: c1([50, 51, 52, 53]) },
  'output-changes': { lessonId: L(3), name: 'What raises cardiac output', category: 'core', relevance: 'core', sourceRefs: c1([54]) },
  'fick-principle': { lessonId: L(3), name: 'Fick’s principle', category: 'core', relevance: 'core', sourceRefs: c1([57]) },
  'cardiac-work': { lessonId: L(3), name: 'Work done by the heart', category: 'core', relevance: 'core', sourceRefs: c1([58]) },

  // Lesson 4 — Vessels, flow and blood pressure
  'blood-propulsion': { lessonId: L(4), name: 'What moves blood forward', category: 'core', relevance: 'core', sourceRefs: c1([60]) },
  'vessel-structure': { lessonId: L(4), name: 'Structure and function of vessels', category: 'core', relevance: 'core', sourceRefs: c1([61, 62, 63, 65, 79]) },
  'flow-pressure-resistance': { lessonId: L(4), name: 'Flow, pressure and resistance', category: 'core', relevance: 'core', sourceRefs: c1([66, 74, 75, 76]) },
  'laminar-turbulent': { lessonId: L(4), name: 'Laminar and turbulent flow', category: 'core', relevance: 'core', sourceRefs: c1([70, 71, 72]) },
  'velocity-area': { lessonId: L(4), name: 'Velocity and cross-sectional area', category: 'core', relevance: 'core', sourceRefs: c1([73]) },
  'viscosity': { lessonId: L(4), name: 'Viscosity and resistance', category: 'core', relevance: 'core', sourceRefs: c1([77, 78]) },
  'blood-distribution': { lessonId: L(4), name: 'Where the blood is', category: 'core', relevance: 'core', sourceRefs: c1([79, 81]) },
  'arterial-pressure': { lessonId: L(4), name: 'Arterial blood pressure and its measurement', category: 'core', relevance: 'core', sourceRefs: c1([82, 85, 86, 87, 91]) },
  'flow-measurement': { lessonId: L(4), name: 'Measuring blood flow', category: 'core', relevance: 'supporting', sourceRefs: c1([67]) },

  // Lesson 5 — Capillaries, oedema, lymph and veins
  'capillary-exchange': { lessonId: L(5), name: 'Capillary circulation', category: 'core', relevance: 'core', sourceRefs: c1([62, 93]) },
  'starling-forces': { lessonId: L(5), name: 'Starling’s forces', category: 'core', relevance: 'core', sourceRefs: c1([94, 95, 97]) },
  'oedema': { lessonId: L(5), name: 'Causes of oedema', category: 'clinical', relevance: 'core', sourceRefs: c1([99, 100, 101, 102]) },
  'lymphatics': { lessonId: L(5), name: 'Lymphatic drainage and lymphoedema', category: 'core', relevance: 'core', sourceRefs: c1([65, 106, 107]) },
  'venous-circulation': { lessonId: L(5), name: 'Venous circulation', category: 'core', relevance: 'core', sourceRefs: c1([109, 110]) },

  // Lesson 6 — Regulation of the CVS
  'regulation-overview': { lessonId: L(6), name: 'Levels of cardiovascular control', category: 'core', relevance: 'core', sourceRefs: c2([1, 2, 3, 4]) },
  'autoregulation-metabolic': { lessonId: L(6), name: 'Metabolic autoregulation', category: 'core', relevance: 'core', sourceRefs: c2([5, 6, 7, 8, 9]) },
  'autoregulation-myogenic': { lessonId: L(6), name: 'Myogenic autoregulation and Laplace', category: 'core', relevance: 'core', sourceRefs: c2([10, 11, 12, 13]) },
  'systemic-control': { lessonId: L(6), name: 'Humoral and nervous control of vessels', category: 'core', relevance: 'core', sourceRefs: c2([15, 16, 17, 18]) },
  'vasomotor-centre': { lessonId: L(6), name: 'The vasomotor centre', category: 'core', relevance: 'core', sourceRefs: c2([19, 20, 21, 22]) },
  'baroreceptor-reflex': { lessonId: L(6), name: 'The baroreceptor reflex', category: 'visual-process', relevance: 'core', sourceRefs: c2([23, 24, 26, 28]) },
  'atrial-receptors': { lessonId: L(6), name: 'Atrial stretch receptors', category: 'core', relevance: 'core', sourceRefs: c2([31, 32, 38]) },
  'vmc-influences': { lessonId: L(6), name: 'What else drives the vasomotor centre', category: 'core', relevance: 'core', sourceRefs: c2([33, 34, 35, 37]) },
  'cushing-reflex': { lessonId: L(6), name: 'Cushing’s reflex', category: 'clinical', relevance: 'core', sourceRefs: c2([36, 38, 40]) },

  // Lesson 7 — Gravity, shock and heart failure
  'gravity-effects': { lessonId: L(7), name: 'Standing up: effects of gravity', category: 'core', relevance: 'core', sourceRefs: c3([3, 4, 5, 6]) },
  'orthostatic-hypotension': { lessonId: L(7), name: 'Orthostatic hypotension', category: 'clinical', relevance: 'core', sourceRefs: c3([8]) },
  'acceleration': { lessonId: L(7), name: 'Acceleration (g forces)', category: 'core', relevance: 'supporting', sourceRefs: c3([9, 10, 11]) },
  'shock-types': { lessonId: L(7), name: 'Types of shock', category: 'clinical', relevance: 'core', sourceRefs: c3([12, 13, 14, 15, 16, 17]) },
  'shock-features': { lessonId: L(7), name: 'Signs of shock and why they occur', category: 'clinical', relevance: 'core', sourceRefs: c3([18, 19, 20, 21, 22, 23, 24]) },
  'irreversible-shock': { lessonId: L(7), name: 'Irreversible shock', category: 'clinical', relevance: 'core', sourceRefs: c3([25, 26]) },
  'other-shock-syncope': { lessonId: L(7), name: 'Other causes of shock and syncope', category: 'clinical', relevance: 'core', sourceRefs: c3([28, 29, 30]) },
  'heart-failure': { lessonId: L(7), name: 'Heart failure: forward and backward', category: 'clinical', relevance: 'core', sourceRefs: c3([31, 32, 33]) },

  // Lesson 8 — Regional circulation
  'cerebral-supply': { lessonId: L(8), name: 'Cerebral blood supply', category: 'core', relevance: 'core', sourceRefs: c4([2, 5]) },
  'csf': { lessonId: L(8), name: 'Cerebrospinal fluid', category: 'core', relevance: 'core', sourceRefs: c4([6, 7, 13, 14, 15, 16]) },
  'blood-brain-barrier': { lessonId: L(8), name: 'The blood–brain barrier', category: 'core', relevance: 'core', sourceRefs: c4([18, 19, 20]) },
  'cerebral-flow': { lessonId: L(8), name: 'Regulation of cerebral blood flow', category: 'core', relevance: 'core', sourceRefs: c4([21, 22, 23, 24, 25]) },
  'coronary-circulation': { lessonId: L(8), name: 'Coronary circulation', category: 'core', relevance: 'core', sourceRefs: c4([27, 28, 29]) },
  'pulmonary-circulation': { lessonId: L(8), name: 'Pulmonary circulation', category: 'core', relevance: 'core', sourceRefs: c4([31, 32]) },
  'splanchnic-circulation': { lessonId: L(8), name: 'Splanchnic and liver circulation', category: 'core', relevance: 'core', sourceRefs: c4([34, 35, 36, 37]) },
  'skin-circulation': { lessonId: L(8), name: 'Skin circulation and the triple response', category: 'core', relevance: 'core', sourceRefs: c4([39, 40]) },
  'fetal-circulation': { lessonId: L(8), name: 'Fetal respiration and circulation', category: 'core', relevance: 'supporting', sourceRefs: c4([43, 44, 45, 46]) },

  // Lesson 9 — The ECG and cardiac rhythms
  'ecg-basics': { lessonId: L(9), name: 'What the ECG records', category: 'core', relevance: 'core', sourceRefs: c5([2, 3, 4, 5, 6]) },
  'ecg-waves': { lessonId: L(9), name: 'ECG waves and intervals', category: 'visual-process', relevance: 'core', sourceRefs: c5([9, 10, 11, 12, 13]) },
  'ecg-rate': { lessonId: L(9), name: 'ECG paper and heart rate', category: 'core', relevance: 'core', sourceRefs: c5([15, 16, 17]) },
  'cardiac-rhythms': { lessonId: L(9), name: 'Sinus rhythm and sinus arrhythmia', category: 'core', relevance: 'core', sourceRefs: c5([18, 19]) },
  'heart-block': { lessonId: L(9), name: 'Heart block', category: 'clinical', relevance: 'core', sourceRefs: c5([20, 21, 22, 23, 24, 25, 26]) },

  // ─── Gap-fill, 2026-11-13: lecture details and syllabus items the lessons lacked ───
  // Lesson 1
  'cardiac-action-potentials': { lessonId: L(1), name: 'Cardiac action potentials and the beat', category: 'core', relevance: 'supporting', sourceRefs: BOOKS },
  // Lesson 2
  'pulse-abnormalities': { lessonId: L(2), name: 'The pulse in different situations', category: 'clinical', relevance: 'supporting', sourceRefs: BOOKS },
  // Lesson 3
  'co-dilution': { lessonId: L(3), name: 'Indicator and thermal dilution', category: 'core', relevance: 'supporting', sourceRefs: BOOKS },
  'stroke-work-laplace': { lessonId: L(3), name: 'Stroke work, efficiency and Laplace in the heart', category: 'core', relevance: 'supporting', sourceRefs: BOOKS },
  // Lesson 4
  'windkessel-pressures': { lessonId: L(4), name: 'What sets systolic, diastolic and pulse pressure', category: 'core', relevance: 'supporting', sourceRefs: [...c1([82, 91]), ...BOOKS] },
  'critical-closing-aneurysm': { lessonId: L(4), name: 'Critical closing pressure and aneurysms', category: 'core', relevance: 'supporting', sourceRefs: [...c2([11, 12]), ...BOOKS] },
  'organ-flow-methods': { lessonId: L(4), name: 'Measuring organ blood flow', category: 'core', relevance: 'supporting', sourceRefs: [...c1([57, 67]), ...BOOKS] },
  // Lesson 5
  'capillary-transport-routes': { lessonId: L(5), name: 'Routes across the capillary wall', category: 'core', relevance: 'supporting', sourceRefs: [...c1([93]), ...BOOKS] },
  'venous-pressure-posture': { lessonId: L(5), name: 'Venous pressure, posture and CVP', category: 'core', relevance: 'supporting', sourceRefs: [...c1([109, 110]), ...BOOKS] },
  // Lesson 6
  'hyperaemia': { lessonId: L(6), name: 'Reactive and active hyperaemia', category: 'core', relevance: 'core', sourceRefs: [...c2([13, 14]), ...BOOKS] },
  'circulating-hormones': { lessonId: L(6), name: 'Circulating vasoactive hormones', category: 'core', relevance: 'supporting', sourceRefs: [...c2([15, 16]), ...BOOKS] },
  'other-cv-reflexes': { lessonId: L(6), name: 'Chemoreceptor and cardiopulmonary reflexes', category: 'core', relevance: 'supporting', sourceRefs: [...c2([33, 35]), ...BOOKS] },
  'bp-short-long-term': { lessonId: L(6), name: 'Short-term and long-term control of blood pressure', category: 'core', relevance: 'supporting', sourceRefs: [...c3([4]), ...BOOKS] },
  // Lesson 7
  'shock-vicious-cycle': { lessonId: L(7), name: 'The vicious cycle of irreversible shock', category: 'visual-process', relevance: 'core', sourceRefs: c3([27]) },
  'haemorrhage-hb': { lessonId: L(7), name: 'Hb and haematocrit after a haemorrhage', category: 'clinical', relevance: 'core', sourceRefs: [...c3([24]), ...BOOKS] },
  // Lesson 8
  'brain-support-fuel': { lessonId: L(8), name: 'Supporting the brain, CSF taps and brain fuel', category: 'core', relevance: 'core', sourceRefs: c4([15, 17, 18, 24]) },
  'coronary-flow-detail': { lessonId: L(8), name: 'Coronary flow through the cardiac cycle', category: 'core', relevance: 'supporting', sourceRefs: [...c4([27, 28]), ...BOOKS] },
  'fetal-shunts': { lessonId: L(8), name: 'Fetal shunts and changes at birth', category: 'visual-process', relevance: 'core', sourceRefs: [...c4([43, 44, 46]), ...BOOKS] },
  'renal-muscle-circulation': { lessonId: L(8), name: 'Renal and skeletal muscle circulations', category: 'core', relevance: 'supporting', sourceRefs: BOOKS },
  'skin-heat-shock': { lessonId: L(8), name: 'Skin blood flow in heat, cold and shock', category: 'core', relevance: 'supporting', sourceRefs: [...c4([39, 41]), ...BOOKS] },
  // Lesson 9
  'limb-leads': { lessonId: L(9), name: 'Limb leads and Einthoven’s triangle', category: 'visual-process', relevance: 'core', sourceRefs: c5([3, 4, 5]) },
  'ap-to-ecg': { lessonId: L(9), name: 'From action potentials to the ECG; ectopic beats', category: 'core', relevance: 'supporting', sourceRefs: BOOKS },
  'flutter-fibrillation': { lessonId: L(9), name: 'Flutter and fibrillation', category: 'clinical', relevance: 'supporting', sourceRefs: [...c5([28]), ...BOOKS] },
} satisfies Record<string, ConceptDraft>;

export type ConceptId = keyof typeof concepts;

// ─── Discrepancies ──────────────────────────────────────────────────

export const discrepancies: SourceDiscrepancy[] = [
  {
    id: 'coronary-origin',
    concept: 'Where the coronary arteries arise',
    status: 'resolved',
    statements: [
      { text: 'Regional Circulation, slide 27: “Coronary vessels arise from the sinuses behind the mitral valve cusps.”', sourceRefs: c4([27]) },
      { text: 'Guyton: the right and left coronary arteries arise from the aortic sinuses, behind the cusps of the aortic valve.', sourceRefs: GUYTON },
    ],
    resolution: {
      text: 'The coronary arteries leave the aorta, so the sinuses are those behind the aortic valve cusps; “mitral” on the slide is a slip. Not quizzed.',
      sourceRefs: [...c4([27]), ...GUYTON],
    },
  },
  {
    id: 'adrenaline-source',
    concept: 'Where adrenaline and noradrenaline come from (contractility)',
    status: 'resolved',
    statements: [
      { text: 'Heart and Circulation, slide 50: “Epinephrine circulating and from sympathetic nerve endings and Norepinephrine from adrenals via β1 receptors”.', sourceRefs: c1([50]) },
      { text: 'Slide 51: “Epinephrine circulating and from sympathetic nerve endings, Norepinephrine — via β1 and adenyl cyclase — increased contractility.”', sourceRefs: c1([51]) },
    ],
    resolution: {
      text: 'Guyton: noradrenaline is the transmitter released by sympathetic nerve endings, and adrenaline is the main hormone of the adrenal medulla. Both raise contractility through β1 receptors and cAMP — that is the point quizzed.',
      sourceRefs: [...c1([50, 51]), ...GUYTON],
    },
  },
  {
    id: 'beta-metabolites',
    concept: 'Effect of metabolites from β-stimulated heart muscle',
    status: 'unresolved',
    statements: [
      { text: 'Regional Circulation, slide 28: “β stimulation of cardiac muscle produces metabolites which cause constriction.”', sourceRefs: c4([28]) },
      { text: 'The same slide lists the metabolites that dilate coronary vessels (↓O₂, ADP, K⁺, H⁺, lactate, CO₂, adenosine); Guyton: increased cardiac metabolism from sympathetic stimulation releases vasodilator metabolites.', sourceRefs: [...c4([28]), ...GUYTON] },
    ],
    note: 'Not quizzed — confirm with the lecturer whether “constriction” should read “dilatation”.',
  },
  {
    id: 'brain-weight',
    concept: 'Weight of the brain in air',
    status: 'unresolved',
    statements: [
      { text: 'Regional Circulation, slide 13: the CSF reduces the net weight of the brain “from about 1,500 gm to about 50 gm”.', sourceRefs: c4([13]) },
      { text: 'Slides 15 and 22: brain weight 1400 g in air, 50 g in CSF.', sourceRefs: c4([15, 22]) },
    ],
    note: 'Both slides agree on about 50 g in CSF; the weight in air is given as 1,500 g and 1,400 g. Only the 50 g figure is quizzed.',
  },
  {
    id: 'csf-volume',
    concept: 'Volume of CSF',
    status: 'unresolved',
    statements: [
      { text: 'Regional Circulation, slide 14: CSF volume 150 mL.', sourceRefs: c4([14]) },
      { text: 'Slide 22 (Monro–Kellie): blood 75 mL, CSF 75 mL and brain 1400 g in the skull remain relatively constant.', sourceRefs: c4([22]) },
    ],
    note: 'The two slides give different CSF volumes (perhaps total versus intracranial). The 150 mL figure is quizzed only as the slide-14 total.',
  },
  {
    id: 'gravity-head-pressure',
    concept: 'Arterial pressure at head level in the gravity diagram',
    status: 'unresolved',
    statements: [
      { text: 'Homeostasis, slide 2 (picture): with no compensation, pressure is labelled 60/75 at the head, 120/80 at the heart and 180/ at the feet.', sourceRefs: c3([2]) },
      { text: 'Guyton: in the upright adult, arterial pressure at head level is roughly 30–40 mmHg lower than at heart level, and at the feet roughly 80–90 mmHg higher (about 0.77 mmHg per cm).', sourceRefs: GUYTON },
    ],
    note: '“60/75” reads as systolic lower than diastolic, so it is probably a slip. Only the direction (lower above the heart, higher below) and the 180 mmHg feet figure are quizzed.',
  },
];

// ─── Diagram knowledge ──────────────────────────────────────────────

export const diagrams: SourceDiagram[] = [
  {
    id: 'conduction-path',
    title: 'The conduction system (slides 8–10)',
    sourceRefs: c1([8, 9, 10]),
    shows: [
      'SA node (junction of the SVC and right atrium) → three internodal tracts (anterior/Bachmann, middle/Wenckebach, posterior/Thorel) → AV node (right posterior interatrial septum, behind the tricuspid valve) → bundle of His → Purkinje fibres.',
      'Depolarisation spreads from the SA node; contraction starts after depolarisation.',
    ],
  },
  {
    id: 'jvp-trace',
    title: 'The jugular venous pulse (slide 27)',
    sourceRefs: c1([27]),
    shows: [
      'a wave — atrial contraction; x descent — atrial relaxation; c wave — isovolumetric ventricular contraction (tricuspid valve bulges up); v wave — passive atrial filling with the tricuspid closed; y descent — tricuspid valve opens.',
    ],
  },
  {
    id: 'baroreflex-loop',
    title: 'Baroreceptor control of blood pressure (slides 23–29)',
    sourceRefs: c2([23, 24, 26, 28]),
    shows: [
      '↑BP → carotid sinus and aortic arch stretched → more afferent discharge (IX, X) to the nucleus of the tractus solitarius → depressor area excited, vasomotor centre inhibited, vagus stimulated → slower heart, less sympathetic tone → BP falls.',
      '↓BP → less stretch → less discharge → pressor area released → more sympathetic discharge, less vagal tone → tachycardia, positive inotropy, vasoconstriction → BP rises.',
    ],
  },
  {
    id: 'irreversible-shock-cycle',
    title: 'The vicious cycle of irreversible shock (Homeostasis slide 27)',
    sourceRefs: c3([27]),
    shows: [
      'Inadequate perfusion → cell hypoxia → energy deficit → anaerobic metabolism, lactic acid accumulation and a fall in pH → metabolic acidosis → cell membrane dysfunction and failure of the sodium pump (K⁺ leaves; Na⁺ and water enter) → lysosomes release digestive enzymes → toxic substances enter the circulation → capillary endothelium damaged → further destruction, dysfunction and cell death.',
      'Side arm: vasoconstriction → failure of the precapillary sphincters → peripheral pooling of blood.',
    ],
  },
  {
    id: 'fetal-circulation-labels',
    title: 'Fetal circulation (Regional Circulation slide 43)',
    sourceRefs: c4([43]),
    shows: [
      'Placenta → umbilical vein (oxygen-rich) → ductus venosus (bypassing the liver) → IVC → right atrium → foramen ovale → left heart → aorta; pulmonary artery → ductus arteriosus → aorta (bypassing the lungs); umbilical arteries return blood to the placenta.',
    ],
  },
  {
    id: 'limb-leads',
    title: 'Limb leads (ECG slides 3–4)',
    sourceRefs: c5([3, 4]),
    shows: [
      'Lead I: RA (−) to LA (+); lead II: RA (−) to LL (+); lead III: LA (−) to LL (+); right leg = ground. Einthoven’s triangle.',
      'Axes: I 0°, II +60°, III +120°, aVR −150°, aVL −30°, aVF +90°.',
    ],
  },
  {
    id: 'ecg-trace',
    title: 'The ECG trace (slides 8–16)',
    sourceRefs: c5([8, 9, 10, 11, 12, 13, 15, 16]),
    shows: [
      'P wave (atrial depolarisation) → PR interval → QRS complex (ventricular depolarisation) → ST segment (ventricle fully depolarised) → T wave (ventricular repolarisation) → sometimes a U wave.',
      'Paper at 25 mm/s: one small square = 0.04 s and 0.1 mV; one large square = 0.2 s.',
    ],
  },
];
