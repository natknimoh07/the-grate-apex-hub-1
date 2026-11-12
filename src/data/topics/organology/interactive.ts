// Anatomy → Organology: each lesson's interactive layer (learn by answering).
import { ask, learn, match, mcq, multi, recall, type InteractiveDraft, type QuestionDraft } from '@/data/topics/build';
import { pictureSrc } from '@/data/topics/organology/pages';
import { s, TOPIC_ID, type ConceptId } from '@/data/topics/organology/sources';

type Steps = InteractiveDraft<ConceptId>[];
const L = (n: number) => `${TOPIC_ID}-${n}`;

/** A checkpoint shown with one of the lecture pictures. */
const withPicture = (question: QuestionDraft<ConceptId>, slide: number): QuestionDraft<ConceptId> => ({ ...question, image: pictureSrc(slide) });

export const interactive: Record<string, Steps> = {
  [L(1)]: [
    learn('Two plans for an organ', [
      'Every organ is either compact or hollow. A compact organ has no central cavity: it is solid tissue, like the liver. A hollow organ is built around a central cavity, the lumen, like the gut or a blood vessel.',
      'Coats are the rings of a hollow organ’s wall. A compact organ has none; instead it has a capsule, a stroma and a parenchyma.',
    ], { sourceRefs: s([3, 4, 6]) }),
    ask(mcq('i1-01', 'organ-types', 'Which of these is a compact organ?', 'The kidney', ['The ureter', 'The oesophagus', 'The trachea'], { explanation: 'Slides 3 and 9: compact organs have no central cavity. The kidney is solid; the ureter, oesophagus and trachea are tubes.' })),
    learn('Capsule, septa, hilum', [
      'The stroma is the connective tissue framework that encloses and supports the parenchyma. Its outer covering is the capsule; trabeculae (septa) run in from the capsule and divide the organ into compartments, completely or incompletely.',
      'Blood vessels enter at the hilum. A compact organ hanging in a body cavity is also covered by a serosa.',
    ], { sourceRefs: s([7, 10]) }),
    ask(mcq('i1-02', 'compact-framework', 'In the thymus, the septa from the capsule do not reach the centre, so neighbouring lobules share their medulla. What is this called?', 'Incomplete compartmentalisation', ['Complete compartmentalisation', 'A double serosa over the lobules', 'A hilum shared by the lobules'], { explanation: 'Slides 8 and 10: compartmentalisation may be complete or incomplete; the thymic septa leave the lobules joined.', skill: 'application' })),
    ask(match('i1-03', 'parenchyma-patterns', 'Match each arrangement of parenchyma to its example:', [
      ['Masses (clusters)', 'Pancreatic islets'],
      ['Follicles', 'Thyroid gland'],
      ['Tubules', 'Kidney (nephron)'],
      ['Cords', 'Rows of cells with blood channels between them'],
    ], { explanation: 'Slides 12–24.' })),
    recall('r1-01', 'compact-framework', 'Describe how a compact organ is built, from its outer covering inwards.', [
      'A serosa, if the organ hangs in a body cavity.',
      'A capsule of dense connective tissue.',
      'Trabeculae (septa) running in from the capsule, dividing it into compartments.',
      'The parenchyma (working cells) supported by the stroma; vessels enter at the hilum.',
    ], s([7, 10])),
  ],

  [L(2)]: [
    learn('A tube with a job', [
      'Tubular organs form parts of the digestive tract, the respiratory passages, the genitourinary tract and the blood and lymph vessels.',
      'Their tissues are arranged in rings around the lumen. The ring touching the lumen is always an epithelium; outside it come alternating layers of muscle and connective tissue, which carry the vessels and nerves.',
    ], { sourceRefs: s([25, 27, 28]) }),
    ask(mcq('i2-01', 'three-coats', 'What makes up the mucosa of a tubular organ?', 'The epithelium and its lamina propria', ['Smooth muscle and connective tissue', 'Connective tissue and a mesothelium', 'The epithelium and the muscularis beneath it'], { explanation: 'Slide 32: the mucosa is the innermost coat, the epithelium and its underlying connective tissue (lamina propria).' })),
    learn('Adventitia or serosa?', [
      'The outer coat depends on where the tube lies. An adventitia, connective tissue only, covers tubes in retroperitoneal areas. A serosa, connective tissue with a mesothelium, covers tubes inside body cavities.',
    ], { sourceRefs: s([34, 36]) }),
    ask(mcq('i2-02', 'serosa-adventitia', 'The ureter lies behind the peritoneum on the posterior abdominal wall. What is its outer coat?', 'An adventitia', ['A serosa', 'A mesothelium', 'A submucosa'], { explanation: 'Slide 34: adventitia covers tubular organs in retroperitoneal areas.', skill: 'application' })),
    ask(multi('i2-03', 'coats-and-function', 'Select the statements the lecture makes about coats:', ['A coat may have one or more layers', 'The function of the organ determines the number of coats and layers', 'Muscle arrangement depicts the function of the organ'], ['Every tubular organ has exactly four coats', 'The outermost coat is always a serosa'], { explanation: 'Slides 42–43.' })),
    recall('r2-01', 'three-coats', 'Name the three coats of a tubular organ, from the lumen outwards, and what each is made of.', [
      'Mucosa: epithelium and lamina propria.',
      'Muscularis: smooth muscle alternating with connective tissue.',
      'Adventitia (connective tissue) or serosa (connective tissue with a mesothelium).',
    ], s([30, 32, 33, 34])),
  ],

  [L(3)]: [
    learn('Three, four or varied', [
      'Three coats: the urinary, cardiovascular, male reproductive and female reproductive systems.',
      'Four coats: the gastrointestinal tract, which adds a submucosa. Varied coats: the respiratory system, whose wall changes as the airways branch.',
    ], { sourceRefs: s([46, 51, 54]) }),
    ask(mcq('i3-01', 'gi-four-coats', 'Which system does the lecture list with four coats?', 'Gastrointestinal tract', ['Urinary system', 'Respiratory system', 'Male reproductive system'], { explanation: 'Slide 51: four coats — gastrointestinal tract.' })),
    ask(withPicture(mcq('i3-02', 'three-coat-systems', 'This is the ductus deferens. How many coats does it have?', 'Three', ['Four', 'Two', 'Varied'], { explanation: 'Slides 46 and 50: the male reproductive tract has three coats — mucosa, a very thick three-layered muscularis and adventitia.' }), 50)),
    learn('Airways lose their support as they branch', [
      'The trachea has cartilage rings and glands. Bronchi in the lung have cartilage plates and glands, plus a layer of smooth muscle. Bronchioles have no cartilage and no glands.',
    ], { sourceRefs: s([54, 55, 56, 57]) }),
    ask(withPicture(mcq('i3-03', 'respiratory-varied', 'This small airway has a folded lining and a ring of smooth muscle, but no cartilage and no glands. What is it?', 'A bronchiole', ['The trachea', 'A main bronchus', 'The ureter'], { explanation: 'Slide 55: a bronchiole lacks cartilage and glands and is surrounded by alveoli.', skill: 'application' }), 55)),
    recall('r3-01', 'three-coat-systems', 'Which systems have three coats, which has four, and which has varied coats?', [
      'Three: urinary, cardiovascular, male reproductive, female reproductive.',
      'Four: gastrointestinal tract.',
      'Varied: respiratory system.',
    ], s([46, 51, 54])),
  ],

  [L(4)]: [
    learn('Three questions for every picture', [
      'Is it compact or hollow? If hollow, which system is it from? So how many coats should it have?',
      'The lining and the wall give it away: lymphoid nodules for the appendix, a tiny lumen in thick muscle for the ductus deferens, a thick stretchy lining for the ureter and bladder.',
    ], { sourceRefs: s([58]) }),
    ask(withPicture(mcq('i4-01', 'identify-tubes', 'Name the organ in this picture.', 'Appendix', ['Ureter', 'Trachea', 'Gallbladder'], { explanation: 'Slide 58: a narrow gut tube ringed by large lymphoid nodules is the appendix (four coats).', skill: 'application' }), 58)),
    ask(withPicture(mcq('i4-02', 'identify-tubes', 'This is the ureter. Which is its outer coat?', 'Adventitia', ['Serosa', 'Submucosa', 'Visceral peritoneum'], { explanation: 'Slides 34 and 60: the ureter is retroperitoneal, so its outer coat is an adventitia.', skill: 'application' }), 60)),
    learn('The heart is a three-layered hollow organ', [
      'The heart’s wall has three layers: the endocardium lining the chambers, the myocardium of cardiac muscle and the epicardium on the surface. They match the intima, media and adventitia of a vessel.',
    ], { sourceRefs: s([65, 66]) }),
    ask(mcq('i4-03', 'heart-coats', 'Which layer of the heart makes the left ventricle so much thicker than the right?', 'Myocardium', ['Endocardium', 'Epicardium', 'Serous pericardium'], { explanation: 'Slide 66: the difference in thickness between the ventricles is all myocardium.', skill: 'cause-effect' })),
  ],

  [L(5)]: [
    learn('Submucosa, cartilage, or neither?', [
      'A submucosa between the lining and the muscle points to the gut and four coats. Cartilage points to a large airway. Neither points to a three-coat system: a vessel, a urinary passage or a genital duct.',
    ], { sourceRefs: s([67]) }),
    ask(withPicture(mcq('i5-01', 'identify-gut-sections', 'In this picture, what does MM label?', 'Muscularis mucosae', ['Muscularis externa', 'Mucosal mesothelium', 'Muscle of the media'], { explanation: 'Slide 73: MM is the muscularis mucosae, the thin muscle at the base of the mucosa; CM and LM are the layers of the muscularis externa.' }), 73)),
    ask(withPicture(mcq('i5-02', 'identify-other-sections', 'Name the organ in this picture.', 'Trachea', ['Oesophagus', 'Bronchiole', 'Stomach'], { explanation: 'Slide 71: a broad band of hyaline cartilage under a glandular submucosa is the tracheal wall.', skill: 'application' }), 71)),
    ask(withPicture(mcq('i5-03', 'identify-other-sections', 'The bright wavy line at the left edge of this wall is the:', 'Internal elastic lamina', ['Muscularis mucosae', 'External elastic lamina', 'Trachealis muscle'], { explanation: 'Slide 69: in a muscular artery the internal elastic lamina marks the boundary between intima and media.' }), 69)),
    recall('r5-01', 'identify-gut-sections', 'How do you tell a gut organ from an airway or a three-coat tube in a section?', [
      'Gut: a submucosa (often with glands) between the mucosa and the muscle — four coats.',
      'Large airway: cartilage (rings or plates) and glands.',
      'Neither: a three-coat tube — vessel, urinary passage or genital duct.',
    ], s([67, 73])),
  ],
};
