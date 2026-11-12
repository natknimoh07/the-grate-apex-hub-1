// Organology: drills written from the lessons' own text.
import type { TopicDrills } from './types';

const L = (n: number) => `organology-${n}`;

export const drills: TopicDrills = {
  topicId: 'organology',
  layers: [
    {
      id: 'compact-outside-in',
      lessonId: L(1),
      prompt: 'A compact organ hanging in a body cavity, from the outside in.',
      items: ['Serosa', 'Capsule', 'Trabeculae (septa)', 'Parenchyma'],
      explanation: 'A compact organ suspended in a body cavity is covered by a serosa; under it is the capsule, from which trabeculae (septa) run inwards, dividing the parenchyma into compartments.',
    },
    {
      id: 'tube-wall',
      lessonId: L(2),
      prompt: 'The wall of a tubular organ (three-coat plan), from the lumen outwards.',
      items: ['Epithelium', 'Lamina propria', 'Muscularis', 'Adventitia or serosa'],
      explanation: 'The epithelium and its lamina propria make up the mucosa, the innermost coat; the muscularis is smooth muscle alternating with connective tissue; the adventitia or serosa covers the outside.',
    },
    {
      id: 'gut-wall',
      lessonId: L(2),
      prompt: 'The wall of the gut, from the lumen outwards.',
      items: ['Mucosa', 'Submucosa', 'Muscularis externa', 'Serosa'],
      explanation: 'The gut has four coats: mucosa, submucosa, muscularis externa and serosa, as labelled on the drawing of the intestine hanging from its mesentery.',
    },
    {
      id: 'vessel-tunics',
      lessonId: L(3),
      prompt: 'The tunics of an artery, from the lumen outwards.',
      items: ['Tunica intima', 'Tunica media', 'Tunica adventitia'],
      explanation: 'The tunica intima (endothelium and internal elastic lamina) lines the lumen; the tunica media is the rings of smooth muscle; the tunica adventitia is the outer connective tissue.',
    },
    {
      id: 'trachea-wall',
      lessonId: L(3),
      prompt: 'The wall of the trachea, from the lumen outwards.',
      items: ['Mucosa', 'Submucosa', 'Cartilage', 'Adventitia'],
      explanation: 'The trachea has a mucosa, a submucosa with seromucous glands, a layer of C-shaped hyaline cartilage rings and an adventitia.',
    },
    {
      id: 'heart-layers',
      lessonId: L(4),
      prompt: 'The layers of the heart wall, from the chambers outwards.',
      items: ['Endocardium', 'Myocardium', 'Epicardium'],
      explanation: 'The endocardium lines the chambers, the myocardium is the cardiac muscle and the epicardium is the visceral layer of serous pericardium on the surface.',
    },
  ],
  cases: [
    {
      id: 'kidney-vessels',
      lessonId: L(1),
      scenario: 'Where do the renal artery, the renal vein and the ureter all pass into or out of the kidney?',
      answer: 'The hilum',
      wrong: ['The capsule surface', 'The trabeculae', 'The renal papilla'],
      explanation: 'Every vessel and duct of the kidney passes through the hilum, the notch on its medial border, and then branches inside.',
    },
    {
      id: 'retroperitoneal-tube',
      lessonId: L(2),
      scenario: 'A tubular organ is fixed behind the peritoneum on the posterior abdominal wall. What is its outer coat?',
      answer: 'An adventitia',
      wrong: ['A serosa', 'A mesothelium', 'A submucosa'],
      explanation: 'An adventitia, connective tissue only, covers tubular organs in retroperitoneal areas; a serosa covers tubes hanging inside body cavities.',
    },
    {
      id: 'no-cartilage-airway',
      lessonId: L(3),
      scenario: 'A small airway has a folded lining and a ring of smooth muscle, but no cartilage and no glands, and alveoli surround it. Which airway is it?',
      answer: 'A bronchiole',
      wrong: ['The trachea', 'A main bronchus', 'An intrapulmonary bronchus'],
      explanation: 'A bronchiole is held open by the pull of the elastic lung tissue around it, so it has no cartilage and no glands; its smooth muscle is relatively thick.',
    },
    {
      id: 'tiny-lumen',
      lessonId: L(3),
      scenario: 'A tube has a tiny star-shaped lumen inside a very thick wall of smooth muscle with three layers. Which organ is it?',
      answer: 'The ductus deferens',
      wrong: ['The uterine tube', 'The ureter', 'The small intestine'],
      explanation: 'The ductus deferens has a very thick muscularis of three layers (inner longitudinal, middle circular, outer longitudinal) around a small lumen, to propel sperm at ejaculation.',
    },
    {
      id: 'lymphoid-ring',
      lessonId: L(4),
      scenario: 'A narrow gut tube has large lymphoid nodules arranged in a ring around its lumen. Which organ is it?',
      answer: 'The appendix',
      wrong: ['The oesophagus', 'The ureter', 'The ductus deferens'],
      explanation: 'The appendix is a small blind-ended tube of the gut whose ring of lymphoid nodules nearly fills the mucosa and submucosa.',
    },
    {
      id: 'no-submucosa',
      lessonId: L(4),
      scenario: 'A hollow organ of the digestive system has tall mucosal folds and a thin muscle coat directly under the mucosa, with no submucosa. Which organ is it?',
      answer: 'The gallbladder',
      wrong: ['The stomach', 'The appendix', 'The oesophagus'],
      explanation: 'The gallbladder has no submucosa: it has three coats, a folded mucosa, a thin muscularis and an outer coat.',
    },
  ],
  why: [
    {
      id: 'thymus-incomplete',
      lessonId: L(1),
      question: 'Why is the compartmentalisation of the thymus called incomplete?',
      answer: 'The septa grow in from the capsule and divide the thymus into lobules, but they do not reach the centre, so the medulla of neighbouring lobules is continuous.',
    },
    {
      id: 'compact-no-coats',
      lessonId: L(1),
      question: 'Why does the liver have no coats?',
      answer: 'Coats are the rings of tissue that surround a lumen. The liver is a compact organ with no lumen, so it is described by its capsule, stroma and parenchyma.',
    },
    {
      id: 'serosa-gut',
      lessonId: L(2),
      question: 'Why is a loop of small intestine covered by a serosa rather than an adventitia?',
      answer: 'The loop hangs inside the abdominal cavity on its mesentery, and an organ that hangs in a body cavity is covered by a serosa whose smooth mesothelial surface lets the loops slide.',
    },
    {
      id: 'gut-fourth-coat',
      lessonId: L(3),
      question: 'Why does the gut have a fourth coat, the submucosa?',
      answer: 'The busy gut lining needs a connective tissue coat carrying the larger blood vessels, lymphatics, the submucosal nerve plexus and, in some places, glands; being loose, it also lets the mucosa fold.',
    },
    {
      id: 'trachea-cartilage',
      lessonId: L(3),
      question: 'Why does the trachea have a layer of cartilage?',
      answer: 'The trachea must never collapse when we breathe in, so a layer of cartilage rings takes the place of most of the muscularis.',
    },
    {
      id: 'left-ventricle-thick',
      lessonId: L(4),
      question: 'Why is the wall of the left ventricle thicker than the right?',
      answer: 'The left ventricle pumps blood around the whole body, so the myocardium, the layer that does the work, is built up to match the pressure it must produce.',
    },
  ],
};
