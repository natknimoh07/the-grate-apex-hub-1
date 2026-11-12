// Anatomy → Organology: the five lessons (reading layer). Each page in
// pages.ts becomes one reading section — one page in the lesson. Picture pages
// show their slide picture beside the text (data/slide-pictures.ts), then the
// organ, its number of coats and the reason (data/teaching/organology.ts).
import type { LessonChunk } from '@/data/lesson-types';
import type { LessonDraft } from '@/data/topics/build';
import { interactive } from '@/data/topics/organology/interactive';
import { LESSON_PAGES, lessonIdOf, type Page } from '@/data/topics/organology/pages';
import { s, sv, type ConceptId } from '@/data/topics/organology/sources';

type Draft = LessonDraft<ConceptId>;

function chunkOf(page: Page): LessonChunk {
  if (page.type === 'idea') {
    return {
      title: page.title,
      kind: page.kind,
      paragraphs: page.lecture,
      ...(page.terms ? { terms: page.terms } : {}),
      ...(page.table ? { table: page.table } : {}),
      sourceRefs: s(page.slides),
    };
  }
  return {
    title: page.title,
    kind: 'structure',
    paragraphs: [page.lecture],
    keyPoints: [`Organ: ${page.organName}.`, `Type: ${page.organType.toLowerCase()}.`, `Coats: ${page.coatCount}.`],
    ...(page.check ? { notes: [{ kind: 'check' as const, text: page.check }] } : {}),
    sourceRefs: sv([page.slide, ...(page.sameAs ?? [])]),
  };
}

const slidesOf = (n: 1 | 2 | 3 | 4 | 5) =>
  [...new Set(LESSON_PAGES[n].flatMap((page) => (page.type === 'idea' ? page.slides : [page.slide, ...(page.sameAs ?? [])])))].sort((a, b) => a - b);

const lesson = (n: 1 | 2 | 3 | 4 | 5, draft: Omit<Draft, 'id' | 'chunks' | 'sourceRefs' | 'interactive' | 'xp'>): Draft => ({
  id: lessonIdOf(n),
  xp: 25,
  sourceRefs: s(slidesOf(n)),
  chunks: LESSON_PAGES[n].map(chunkOf),
  interactive: interactive[lessonIdOf(n)],
  ...draft,
});

export const lessons: Draft[] = [
  lesson(1, {
    title: 'Compact Organs',
    description: 'Organs come in two kinds: compact (solid, no central cavity) and hollow (built around a lumen). This lesson takes the compact ones — liver, thymus, kidney, pancreas, adrenal and thyroid — and shows how a capsule, a stroma and a parenchyma replace the coats of a hollow organ, and how the parenchyma is arranged in masses, cords, follicles and tubules.',
    estimatedMinutes: 20,
    objectives: [
      'Tell compact organs from hollow organs.',
      'Describe the stroma of a compact organ: capsule, trabeculae (septa), hilum and serosa.',
      'Explain complete and incomplete compartmentalisation, using the thymus.',
      'Name the arrangements of parenchyma (masses, cords, follicles, tubules, ducts or strands) with an example of each.',
    ],
    summary: [
      'Compact organs have no central cavity; hollow (tubular) organs have one.',
      'Compact organs are built of a stroma (capsule, trabeculae or septa) supporting a parenchyma, and have no coats.',
      'Blood vessels enter a compact organ at its hilum; one suspended in a body cavity is also covered by a serosa.',
      'Parenchyma is arranged in masses (pancreatic islets), cords, follicles (thyroid), tubules (kidney), and ducts or strands.',
    ],
    highYield: [
      'Compact organ = capsule + stroma + parenchyma, no coats.',
      'Thymus: septa from the capsule make incomplete lobules (the medulla is continuous).',
      'Masses → pancreatic islets; follicles → thyroid; tubules → kidney.',
    ],
    confusions: [
      {
        confusion: 'Counting coats in a compact organ such as the liver or kidney.',
        clarification: 'Coats belong to hollow (tubular) organs. A compact organ is described by its capsule, stroma and parenchyma.',
      },
      {
        confusion: 'Calling a thyroid follicle the lumen of a tube.',
        clarification: 'A follicle is a closed storage sac inside a solid gland; the lumen of a tubular organ is a passage along which contents move.',
      },
    ],
  }),
  lesson(2, {
    title: 'Tubular Organs and Their Coats',
    description: 'Hollow organs are tubes with a job: the gut, airways, urinary and genital tracts, and blood and lymph vessels. Their wall is built in coats around the lumen — mucosa, muscularis, and adventitia or serosa — and the function of each tube decides how many coats and layers it has.',
    estimatedMinutes: 20,
    objectives: [
      'List the systems whose organs are tubular.',
      'Name the three coats of a tubular organ and what each is made of.',
      'Explain when an organ has an adventitia and when it has a serosa.',
      'Explain the difference between a coat and a layer, and how function decides both.',
    ],
    summary: [
      'Tubular organs: parts of the digestive tract, respiratory passages, genitourinary tract, and blood and lymph vessels.',
      'The epithelium immediately surrounds the lumen; outside it are alternating layers of muscle and connective tissue carrying vessels and nerves.',
      'Usually three coats: mucosa (epithelium + lamina propria), muscularis (smooth muscle with connective tissue), and adventitia or serosa.',
      'Adventitia covers retroperitoneal tubes; serosa (with a mesothelium) covers tubes inside body cavities.',
      'A coat may have one or more layers; the function of the organ decides the number of coats and layers.',
    ],
    highYield: [
      'Mucosa = epithelium + lamina propria (innermost coat).',
      'Retroperitoneal → adventitia; inside a body cavity → serosa.',
      'Gut wall: mucosa, submucosa, muscularis externa, serosa (four coats).',
    ],
    confusions: [
      {
        confusion: 'Treating “coat” and “layer” as the same thing.',
        clarification: 'A coat is a main ring of the wall; a layer is a sheet within a coat, e.g. the circular and longitudinal layers of the muscularis externa.',
      },
      {
        confusion: 'Thinking the outer coat depends on the organ’s function.',
        clarification: 'It depends on position: adventitia for tubes fixed behind the peritoneum or in the neck and chest, serosa for tubes hanging in a body cavity.',
      },
    ],
  }),
  lesson(3, {
    title: 'Counting the Coats, System by System',
    description: 'Three coats in the urinary, cardiovascular and reproductive systems; four in the gastrointestinal tract; varied in the respiratory system. One picture per page — artery, ureter, uterine tube, ductus deferens, oesophagus, small intestine, bronchiole, trachea and bronchus — each with its number of coats and the reason.',
    estimatedMinutes: 18,
    objectives: [
      'State which systems have three coats, which has four and which has varied coats.',
      'Name the coats of an artery, the ureter, the uterine tube and the ductus deferens.',
      'Explain why the gut has a fourth coat, the submucosa.',
      'Describe how the airway wall changes from the trachea to the bronchioles.',
    ],
    summary: [
      'Three coats: urinary, cardiovascular, male reproductive and female reproductive systems.',
      'Four coats: the gastrointestinal tract (mucosa, submucosa, muscularis externa, serosa or adventitia).',
      'Varied coats: the respiratory system — cartilage and glands are lost as the airways branch.',
      'The ductus deferens has three layers in one coat (its muscularis); the gut muscularis externa has two.',
    ],
    highYield: [
      'Three coats: urinary, CVS, male and female reproductive.',
      'Four coats: GIT. Varied: respiratory.',
      'Bronchiole: no cartilage, no glands, relatively thick smooth muscle.',
    ],
    confusions: [
      {
        confusion: 'Giving the ureter a submucosa like the gut.',
        clarification: 'The urinary passages follow the three-coat plan: mucosa, muscularis and adventitia.',
      },
      {
        confusion: 'Expecting cartilage in every airway.',
        clarification: 'Cartilage forms rings in the trachea, plates in the bronchi and is absent from the bronchioles.',
      },
    ],
  }),
  lesson(4, {
    title: 'Name the Organ, Count the Coats (1)',
    description: 'The lecture’s unlabelled pictures, one per page: the appendix, uterine tube, ureter, ductus deferens, urinary bladder, gallbladder and the heart. For each, decide compact or hollow, name the organ and count its coats.',
    estimatedMinutes: 15,
    objectives: [
      'Use the lining and the wall to name a tubular organ from a picture.',
      'Count the coats of the appendix, ureter, ductus deferens, bladder and gallbladder.',
      'Describe the three layers of the heart and match them to the coats of a vessel.',
    ],
    summary: [
      'Work in order: compact or hollow → which system → how many coats.',
      'The appendix has four coats and a ring of lymphoid nodules.',
      'The ductus deferens has a tiny lumen and a very thick three-layered muscularis.',
      'The gallbladder has no submucosa: three coats, not four.',
      'The heart has three layers: endocardium, myocardium and epicardium.',
    ],
    highYield: [
      'Lymphoid nodules ringing the lumen → appendix.',
      'Tiny lumen, massive muscle → ductus deferens.',
      'Heart: endocardium, myocardium, epicardium.',
    ],
    confusions: [
      {
        confusion: 'Giving the gallbladder four coats because it belongs to the digestive system.',
        clarification: 'It lacks a submucosa (and a muscularis mucosae), so it has three coats.',
      },
    ],
  }),
  lesson(5, {
    title: 'Name the Organ, Count the Coats (2)',
    description: 'The rest of the unlabelled pictures, one per page: the oesophagus, stomach, a muscular artery, a bronchus, the trachea, the uterine tube and the ductus deferens. Read the wall from the lumen outwards and count the coats.',
    estimatedMinutes: 14,
    objectives: [
      'Name the oesophagus, stomach, artery, bronchus, trachea, uterine tube and ductus deferens from a picture.',
      'Use the submucosa and cartilage to sort the gut and airways from the three-coat systems.',
      'Say whether each organ has an adventitia or a serosa, and why.',
    ],
    summary: [
      'A submucosa means the gut (four coats); cartilage means a large airway; neither means a three-coat system.',
      'Oesophagus: stratified squamous lining, submucosal glands, adventitia.',
      'Stomach: thick glandular mucosa, serosa.',
      'Muscular artery: wavy internal elastic lamina, thick media.',
    ],
    highYield: [
      'MM = muscularis mucosae, inside the mucosa; CM and LM = two layers of the muscularis externa.',
      'Cartilage plates + alveoli around the tube → intrapulmonary bronchus.',
    ],
    confusions: [
      {
        confusion: 'Counting the circular and longitudinal muscle of the gut as two coats.',
        clarification: 'They are two layers of one coat, the muscularis externa.',
      },
    ],
  }),
];
