// "References" at the end of every lesson's reading (owner, 2026-11-02: "to prevent
// copyright, add references to the lessons, at the bottom"). Pure, so
// tests/lesson-references.test.mjs can check every lesson.
//
// Built from what the lesson really uses: the lecture slides its sections cite,
// the textbook pages (data/textbook-refs/), the OpenStax pictures
// (data/illustrations.ts) and the 3D models of its simulation.

import { getSourceFile } from '@/data/content-catalog';
import { illustrationsFor } from '@/data/illustrations';
import { chunkFigures, type Lesson, type SourceReference } from '@/data/lesson-types';
import { fileName, formatRanges } from '@/data/source-labels';

export type ReferenceItem = { text: string; detail?: string; url?: string };
export type ReferenceGroup = { heading: string; items: ReferenceItem[] };

// Full citations for the reference textbooks (content-catalog.ts ids).
const TEXTBOOKS: Record<string, string> = {
  'lehninger-biochemistry': 'Nelson DL, Cox MM. Lehninger Principles of Biochemistry. W. H. Freeman (Macmillan).',
  'puri-medical-biochemistry': 'Puri D. Textbook of Medical Biochemistry. Elsevier.',
  'lippincott-biochemistry-6e': 'Ferrier DR. Lippincott’s Illustrated Reviews: Biochemistry, 6th ed. Wolters Kluwer, 2014.',
  'halliwell-free-radicals': 'Halliwell B, Gutteridge JMC. Free Radicals in Biology and Medicine. Oxford University Press.',
  'costanzo-physiology': 'Costanzo LS. Physiology. Elsevier.',
  'ganong-physiology': 'Barrett KE, Barman SM, Brooks HL, Yuan JXJ. Ganong’s Review of Medical Physiology. McGraw-Hill.',
  'guyton-hall-14e': 'Hall JE, Hall ME. Guyton and Hall Textbook of Medical Physiology, 14th ed. Elsevier, 2021.',
  'sherwood-7e': 'Sherwood L. Human Physiology: From Cells to Systems, 7th ed. Brooks/Cole, Cengage Learning, 2010.',
  'grays-anatomy-students-4e': 'Drake RL, Vogl AW, Mitchell AWM. Gray’s Anatomy for Students, 4th ed. Elsevier, 2020.',
};

const OPENSTAX =
  'Betts JG, Young KA, Wise JA, Johnson E, Poe B, Kruse DH, Korol O, Johnson JE, Womble M, DeSaix P. Anatomy and Physiology. OpenStax, Rice University, 2013. Licensed CC BY 4.0.';
const OPENSTAX_URL = 'https://openstax.org/details/books/anatomy-and-physiology';

// Simulations whose drawing shows the atlas's 3D organs (Organ3D), and the ones that
// also use the HuBMAP female organs. tests/lesson-references.test.mjs keeps these in
// step with src/components/learning/simulations/graphics/.
export const SIMULATIONS_3D = new Set([
  'accommodation', 'acid-base', 'adh-water', 'adrenal-axis', 'altitude-hypoxia', 'alveolar-ventilation', 'androgens',
  'aqueous-humour', 'baroreflex', 'basal-ganglia', 'bilirubin', 'brain-lesion', 'breathing-control', 'breathing-mechanics',
  'calcium', 'cardiac-cycle', 'cerebellar-reach', 'cerebral-flow', 'defecation', 'dorsal-horn', 'ecg', 'feedback-axis',
  'fertilisation', 'gastric-phases', 'glomerular-filtration', 'glucose-insulin', 'growth-hormone', 'gut-muscle',
  'gut-transit', 'gut-water', 'hearing-loss', 'labour-lactation', 'lifespan', 'lung-compliance', 'male-tract',
  'menstrual-cycle', 'micturition', 'motor-lesion', 'nutrient-digestion', 'ovarian-cycle', 'ovulation-disorders',
  'pain-gate', 'pancreatic-secretion', 'pupil-reflex', 'pv-loop', 'renal-clearance', 'renal-vessels', 'saliva', 'sensory-tracts',
  'shock', 'smell', 'sound-transmission', 'sounds-jvp', 'spermatogenesis', 'spirometry', 'stretch-reflex', 'taste',
  'testis-control', 'thyroid-axis', 'vestibular', 'visual-fields',
]);
export const SIMULATIONS_HUBMAP = new Set(['fertilisation', 'labour-lactation', 'lifespan', 'menstrual-cycle', 'ovarian-cycle', 'ovulation-disorders']);

const Z_ANATOMY =
  'Z-Anatomy 3D anatomy models (derived from BodyParts3D, Database Center for Life Science). Licensed CC BY-SA 4.0; converted and simplified for this app, shared under the same licence.';
const Z_ANATOMY_URL = 'https://github.com/LluisV/Z-Anatomy';
const HUBMAP =
  'HuBMAP Human Reference Atlas 3D reference objects (Visible Human Female, U.S. National Library of Medicine). Licensed CC BY 4.0.';
const HUBMAP_URL = 'https://humanatlas.io';

function lessonSourceRefs(lesson: Lesson): SourceReference[] {
  const refs: SourceReference[] = [];
  for (const chunk of lesson.chunks) refs.push(...(chunk.sourceRefs ?? []));
  for (const step of lesson.interactive ?? []) {
    const stepRefs = (step as { sourceRefs?: SourceReference[] }).sourceRefs;
    if (stepRefs) refs.push(...stepRefs);
  }
  return refs;
}

export function lessonReferences(lesson: Lesson): ReferenceGroup[] {
  const refs = lessonSourceRefs(lesson);
  const lectures = new Map<string, number[]>();
  const books = new Map<string, number[]>();

  for (const ref of refs) {
    const file = getSourceFile(ref.sourceId);
    if (!file || file.duplicateOf || file.role === 'study-aid') continue;
    const target = file.role === 'reference' ? books : lectures;
    const numbers = target.get(file.id) ?? [];
    const number = file.role === 'reference' ? ref.page : (ref.slide ?? ref.page);
    if (number !== undefined && !numbers.includes(number)) numbers.push(number);
    target.set(file.id, numbers);
  }

  const groups: ReferenceGroup[] = [];

  if (lectures.size) {
    groups.push({
      heading: 'Lecture material',
      items: Array.from(lectures, ([id, numbers]) => {
        const file = getSourceFile(id)!;
        const unit = file.format === 'pdf' || file.format === 'docx' ? 'page' : 'slide';
        const by = [file.author, file.year].filter(Boolean).join(', ');
        return {
          text: `${file.title ?? fileName(file)}${by ? ` (${by})` : ''}.`,
          detail: numbers.length ? `${unit === 'page' ? (numbers.length > 1 ? 'Pages' : 'Page') : numbers.length > 1 ? 'Slides' : 'Slide'} ${formatRanges(numbers)}` : undefined,
        };
      }),
    });
  }

  if (books.size) {
    groups.push({
      heading: 'Textbooks',
      items: Array.from(books, ([id, pages]) => {
        const file = getSourceFile(id)!;
        return {
          text: TEXTBOOKS[id] ?? `${file.title ?? fileName(file)}.`,
          detail: pages.length ? `${pages.length > 1 ? 'pp.' : 'p.'} ${formatRanges(pages)}` : undefined,
        };
      }),
    });
  }

  const pictures = lesson.chunks.flatMap((chunk) => illustrationsFor(lesson.id, chunk.title));
  const diagrams = lesson.chunks.some((chunk) => chunkFigures(chunk).length > 0);
  const sims = (lesson.interactive ?? []).flatMap((step) => (step.type === 'simulate' ? [step.sim as string] : []));
  const media: ReferenceItem[] = [];
  if (pictures.length) {
    media.push({ text: OPENSTAX, detail: `${pictures.length} figure${pictures.length === 1 ? '' : 's'} in this lesson, resized; captions and notes are our own words.`, url: OPENSTAX_URL });
  }
  if (diagrams) media.push({ text: 'Lecture diagrams are cropped from the lecture slides listed above, for study within the course.' });
  if (sims.some((sim) => SIMULATIONS_3D.has(sim))) media.push({ text: Z_ANATOMY, url: Z_ANATOMY_URL });
  if (sims.some((sim) => SIMULATIONS_HUBMAP.has(sim))) media.push({ text: HUBMAP, url: HUBMAP_URL });
  if (media.length) groups.push({ heading: 'Pictures and models', items: media });

  return groups;
}

/** The note under the list: how the lesson's own text was written. */
export const REFERENCES_NOTE =
  'The teaching text, summaries and textbook notes in this lesson are written in our own words from the sources above; no passages are copied from the textbooks.';
