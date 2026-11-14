// Quiz bank for Anatomy → Organology, built from slides 1–74 of
// "Cardiovascular System Gross 1, (2)". Picture questions (lessons 4–5) show
// the lecture picture with the question.
import { assertionReason as ar, fill, match, mcq, multi, order, tf, type QuestionDraft } from '@/data/topics/build';
import { pictureSrc } from '@/data/topics/organology/pages';
import type { ConceptId } from '@/data/topics/organology/sources';

type Q = QuestionDraft<ConceptId>;

/** A question shown with one of the lecture pictures. */
const pic = (question: Q, slide: number): Q => ({ ...question, image: pictureSrc(slide) });

// ─── Lesson 1: Compact Organs ────────────────────────────────────────

const lesson1: Q[] = [
  mcq('q1-01', 'organ-types', 'According to the lecture, what distinguishes a compact organ from a hollow organ?', 'It has no central cavity', ['It has a central cavity', 'It has a lumen lined by epithelium', 'It has no blood supply'], { explanation: 'Slide 3: compact organs have no central cavity; hollow organs have one.' }),
  mcq('q1-02', 'organ-types', 'Which of these organs is compact?', 'Liver', ['Stomach', 'Ureter', 'Uterine tube'], { explanation: 'Slide 4: the liver is solid tissue with no central cavity.' }),
  mcq('q1-03', 'compact-framework', 'The connective tissue framework that encloses and supports the parenchyma of a compact organ is the:', 'Stroma', ['Mucosa', 'Lumen', 'Muscularis'], { explanation: 'Slide 7.', skill: 'terminology' }),
  mcq('q1-04', 'compact-framework', 'The outermost connective tissue covering of a compact organ is called the:', 'Capsule', ['Hilum', 'Septum', 'Lamina propria'], { explanation: 'Slide 7.', skill: 'terminology' }),
  mcq('q1-05', 'compact-framework', 'Strands of connective tissue that run from the capsule into a compact organ, dividing it into compartments, are called:', 'Trabeculae or septae', ['Capsules or serosal folds', 'Rugae or folds', 'Cords or follicles'], { explanation: 'Slide 7.', skill: 'terminology' }),
  mcq('q1-06', 'compact-framework', 'Through which part do blood vessels enter a compact organ?', 'The hilum', ['The capsule surface', 'The parenchyma directly', 'The serosa only'], { explanation: 'Slide 10: blood vessels enter the compact organs through the hilum.' }),
  mcq('q1-07', 'compact-framework', 'A compact organ suspended within a body cavity may also be covered externally by a:', 'Serosa', ['Submucosa', 'Mucosa', 'Muscularis'], { explanation: 'Slide 10.' }),
  mcq('q1-08', 'compact-framework', 'In the thymus, why is the compartmentalisation described as incomplete?', 'Its septa do not reach the centre, so lobules share their medulla', ['Its septa reach right through, so every lobule is sealed off from the next', 'Its lobules have no cortex, only a medulla in each one', 'Its vessels enter at many sites instead of one hilum'], { explanation: 'Slides 8 and 10: the septa divide the thymus into lobules that remain joined at the medulla.', skill: 'cause-effect' }),
  mcq('q1-09', 'parenchyma-patterns', 'The pancreatic islets are an example of parenchyma arranged in:', 'Masses (clusters)', ['Follicles', 'Tubules', 'Follicles and tubules'], { explanation: 'Slides 13–15.' }),
  mcq('q1-10', 'parenchyma-patterns', 'The thyroid gland is the lecture’s example of parenchyma arranged in:', 'Follicles', ['Cords', 'Tubules', 'Masses (clusters)'], { explanation: 'Slides 18–20.' }),
  mcq('q1-11', 'parenchyma-patterns', 'The kidney is the lecture’s example of parenchyma arranged in:', 'Tubules', ['Follicles', 'Cords', 'Masses (clusters)'], { explanation: 'Slides 21–23.' }),
  multi('q1-12', 'parenchyma-patterns', 'Select all the arrangements of parenchyma named in the lecture:', ['Masses (clusters)', 'Cords', 'Follicles', 'Tubules', 'Ducts or strands'], ['Coats', 'Lumens'], { explanation: 'Slide 24.' }),
  tf({ id: 'q1-13', conceptId: 'organ-types', statement: 'The liver is described by its coats: mucosa, muscularis and serosa.', answer: false, explanation: 'The liver is a compact organ: it has a capsule, stroma and parenchyma, not coats.' }),
  order('q1-14', 'compact-framework', 'Put the parts of a compact organ in order from the outside in (for an organ in a body cavity):', ['Serosa', 'Capsule', 'Trabeculae (septa)', 'Parenchyma'], { explanation: 'Slides 7 and 10.' }),
  ar('ar1-01', 'compact-framework', 'Blood vessels reach every part of a compact organ.', 'Vessels enter at the hilum and branch along the stroma, which extends into the organ as trabeculae.', 'explains', 'Both true, and the stroma carrying the vessels in from the hilum explains how they reach every part (slides 7, 10).'),
];

// ─── Lesson 2: Tubular Organs and Their Coats ────────────────────────

const lesson2: Q[] = [
  mcq('q2-01', 'tubular-organs', 'Which tissue immediately surrounds the central cavity of a tubular organ?', 'Epithelium', ['Smooth muscle', 'Hyaline cartilage', 'Dense connective tissue'], { explanation: 'Slide 27.' }),
  mcq('q2-02', 'tubular-organs', 'Tubular organs are distinguished from one another based on:', 'Their function and its structural modifications', ['Their colour, their weight and their position in the body', 'The number of hilums they have in total', 'Whether they are covered by a capsule'], { explanation: 'Slide 26.' }),
  multi('q2-03', 'tubular-organs', 'Select all the systems the lecture lists as having tubular organs:', ['Digestive tract', 'Respiratory passages', 'Genitourinary tract', 'Blood and lymphatic vascular channels'], ['Thyroid gland', 'Thymus'], { explanation: 'Slide 25.' }),
  mcq('q2-04', 'tubular-organs', 'Where are the vascular and nervous elements of a tubular organ’s wall found?', 'In the alternating muscle and connective tissue layers', ['Only in the epithelium lining the lumen, never in the deeper layers', 'Only in the hilum of the organ', 'Only in the capsule around the organ'], { explanation: 'Slide 28.' }),
  mcq('q2-05', 'three-coats', 'Which coat is the innermost coat of a tubular organ?', 'Mucosa', ['Muscularis', 'Serosa', 'Adventitia'], { explanation: 'Slide 32.' }),
  mcq('q2-06', 'three-coats', 'The muscularis is usually made up of:', 'Smooth muscle alternating with connective tissue', ['Skeletal muscle alternating with hyaline cartilage', 'Cardiac muscle alternating with elastic tissue', 'Epithelium alternating with lamina propria'], { explanation: 'Slide 33.' }),
  mcq('q2-07', 'serosa-adventitia', 'Which outer coat covers tubular organs found within body cavities?', 'Serosa', ['Adventitia', 'Mucosa', 'Capsule'], { explanation: 'Slide 34.' }),
  mcq('q2-08', 'serosa-adventitia', 'The additional epithelial layer on the external surface of some organs is the:', 'Mesothelium', ['Endothelium', 'Urothelium', 'Lamina propria'], { explanation: 'Slide 36: mesothelium or serosa.', skill: 'terminology' }),
  mcq('q2-09', 'three-coats', 'In a blood vessel, which tunic corresponds to the mucosa of other tubes?', 'Tunica intima', ['Tunica media', 'Tunica adventitia', 'Tunica externa'], { explanation: 'Slide 31: the tunica intima, lined by endothelium, is the innermost coat.' }),
  mcq('q2-10', 'coats-and-function', 'According to the lecture, what determines the number of coats and layers in a tubular organ?', 'The function of the organ', ['The size of the hilum', 'The colour of the mucosa', 'The thickness of the capsule'], { explanation: 'Slide 43.' }),
  mcq('q2-11', 'coats-and-function', 'In the digestive tract, the circular and longitudinal muscle layers together form one coat, the:', 'Muscularis externa', ['Submucosa', 'Muscularis mucosae', 'Serosa'], { explanation: 'Slide 44: a coat may have one or more layers (slide 43).' }),
  match('q2-12', 'three-coats', 'Match each coat to what it is made of:', [['Mucosa', 'Epithelium and lamina propria'], ['Muscularis', 'Smooth muscle with connective tissue'], ['Adventitia', 'Connective tissue only'], ['Serosa', 'Connective tissue with a mesothelium']], { explanation: 'Slides 32–36.' }),
  tf({ id: 'q2-13', conceptId: 'serosa-adventitia', statement: 'Adventitia covers tubular organs in retroperitoneal areas.', answer: true, explanation: 'Slide 34.' }),
  ar('ar2-01', 'serosa-adventitia', 'The loops of small intestine are covered by a serosa.', 'Serosa covers tubular organs found within body cavities.', 'explains', 'Both true: the loops hang in the abdominal cavity on their mesentery, so they are covered by a serosa (slides 34, 35).'),
];

// ─── Lesson 3: Counting the Coats, System by System ──────────────────

const lesson3: Q[] = [
  mcq('q3-01', 'three-coat-systems', 'Which system is listed with THREE coats?', 'Urinary system', ['Gastrointestinal tract', 'Respiratory system', 'Thyroid gland'], { explanation: 'Slide 46: urinary, cardiovascular, male and female reproductive.' }),
  mcq('q3-02', 'respiratory-varied', 'How does the lecture describe the coats of the respiratory system?', 'Varied coats', ['Three coats', 'Four coats', 'No coats at all'], { explanation: 'Slide 54.' }),
  mcq('q3-03', 'gi-four-coats', 'Which coat does the gastrointestinal tract have that the three-coat systems lack?', 'Submucosa', ['Mucosa', 'Muscularis', 'Adventitia'], { explanation: 'Slides 29 and 51: mucosa, submucosa, muscularis externa, serosa.' }),
  multi('q3-04', 'three-coat-systems', 'Select all the systems listed with three coats:', ['Urinary', 'Cardiovascular', 'Male reproductive', 'Female reproductive'], ['Gastrointestinal', 'Respiratory'], { explanation: 'Slide 46.' }),
  mcq('q3-05', 'three-coat-systems', 'The three tunics of an artery, from the lumen outwards, are:', 'Intima, media, adventitia', ['Media, intima, adventitia', 'Adventitia, media, intima', 'Intima, adventitia, media'], { explanation: 'Slides 31 and 47.' }),
  mcq('q3-06', 'three-coat-systems', 'Why does the ureter have an adventitia rather than a serosa?', 'It lies behind the peritoneum, fixed to the wall', ['It hangs free in the peritoneal cavity on a mesentery', 'It has no smooth muscle in its middle coat', 'It is lined by a mesothelium inside its lumen'], { explanation: 'Slides 34 and 48.', skill: 'cause-effect' }),
  mcq('q3-07', 'three-coat-systems', 'Which feature best identifies the ductus deferens in section?', 'A tiny lumen in a very thick muscular wall', ['A wide lumen lined by branching mucosal folds', 'A ring of large lymphoid nodules around the lumen', 'A broad band of hyaline cartilage under the lining'], { explanation: 'Slide 50.', skill: 'application' }),
  mcq('q3-08', 'gi-four-coats', 'Which feature of the lining points to the oesophagus?', 'Stratified squamous epithelium', ['Transitional epithelium', 'Pseudostratified ciliated columnar epithelium', 'Simple squamous endothelium'], { explanation: 'Slide 52.' }),
  mcq('q3-09', 'gi-four-coats', 'Finger-like villi covering large folds of the wall are found in the:', 'Small intestine', ['Oesophagus', 'Urinary bladder', 'Trachea'], { explanation: 'Slide 53.' }),
  mcq('q3-10', 'respiratory-varied', 'Which airway has no cartilage and no glands in its wall?', 'Bronchiole', ['Trachea', 'Main bronchus', 'Intrapulmonary bronchus'], { explanation: 'Slide 55.' }),
  mcq('q3-11', 'respiratory-varied', 'What holds the trachea open?', 'C-shaped rings of hyaline cartilage', ['A thick circular coat of smooth muscle', 'A serosa attached to the pleural cavity', 'Elastic fibres of the tunica media'], { explanation: 'Slide 56.' }),
  order('q3-12', 'respiratory-varied', 'Order these airways from the one with the most cartilage to the one with none:', ['Trachea', 'Intrapulmonary bronchus', 'Bronchiole'], { explanation: 'Slides 55–57: rings, then plates, then none.' }),
  fill('q3-13', 'gi-four-coats', 'The gastrointestinal tract has ____ coats.', ['four', '4'], { explanation: 'Slide 51.' }),
  tf({ id: 'q3-14', conceptId: 'three-coat-systems', statement: 'The uterine tube is covered by an adventitia because it lies behind the peritoneum.', answer: false, explanation: 'The uterine tube hangs inside the peritoneal cavity in the broad ligament, so its outer coat is a serosa (slides 34, 49).' }),
  ar('ar3-01', 'gi-four-coats', 'The gut has a fourth coat, the submucosa.', 'The submucosa carries the larger vessels, lymphatics and nerves that serve the busy gut lining.', 'explains', 'Both true, and the needs of the absorbing and secreting mucosa explain the extra connective tissue coat (slide 51).'),
];

// ─── Lesson 4: Name the Organ, Count the Coats (1) ───────────────────

const lesson4: Q[] = [
  pic(mcq('q4-01', 'identify-tubes', 'Name the organ in this picture.', 'Appendix', ['Ductus deferens', 'Stomach', 'Trachea'], { explanation: 'Slide 58: a narrow gut tube ringed by lymphoid nodules.', skill: 'application' }), 58),
  pic(mcq('q4-02', 'identify-tubes', 'This is the appendix. How many coats does it have?', 'Four', ['Three', 'Two', 'Varied'], { explanation: 'Slides 51 and 58: it is part of the gut.' }), 58),
  pic(mcq('q4-03', 'identify-tubes', 'Name the organ in this picture.', 'Ureter', ['Trachea', 'Appendix', 'Bronchiole'], { explanation: 'Slide 60: star-shaped lumen, transitional lining, fat outside.', skill: 'application' }), 60),
  pic(mcq('q4-04', 'identify-tubes', 'Name the organ in this picture.', 'Ductus deferens', ['Appendix', 'Uterine tube', 'Urinary bladder'], { explanation: 'Slide 61: a tiny lumen in a massive muscular wall.', skill: 'application' }), 61),
  pic(mcq('q4-05', 'identify-tubes', 'This is the ductus deferens. How many layers make up its muscularis?', 'Three', ['Only one', 'Two', 'Four'], { explanation: 'Slide 61: inner longitudinal, middle circular, outer longitudinal.' }), 61),
  pic(mcq('q4-06', 'identify-tubes', 'This is the gallbladder. How many coats does it have?', 'Three', ['Four', 'Two', 'Varied'], { explanation: 'Slide 63: it has no submucosa — mucosa, muscularis and an outer coat.' }), 63),
  pic(mcq('q4-07', 'identify-tubes', 'This is probably the urinary bladder. Which feature lets it stretch as it fills?', 'Its transitional epithelium and mucosal folds', ['Its rings of hyaline cartilage under the lining', 'Its villi on every fold of the mucosa', 'Its lymphoid nodules ringing the lumen'], { explanation: 'Slide 62.', skill: 'cause-effect' }), 62),
  mcq('q4-08', 'identify-tubes', 'Which coat is missing from the gallbladder wall?', 'Submucosa', ['Mucosa', 'Muscularis', 'Outer coat'], { explanation: 'Slide 63.' }),
  mcq('q4-09', 'identify-tubes', 'In a section, large lymphoid nodules arranged in a ring around a narrow lumen suggest the:', 'Appendix', ['Ureter', 'Oesophagus', 'Ductus deferens'], { explanation: 'Slide 58.', skill: 'application' }),
  pic(mcq('q4-10', 'heart-coats', 'This is the heart. How many layers make up its wall?', 'Three', ['Four', 'Two', 'Varied'], { explanation: 'Slide 65: endocardium, myocardium and epicardium.' }), 65),
  mcq('q4-11', 'heart-coats', 'Which layer of the heart’s wall is a serosa?', 'Epicardium', ['Endocardium', 'Myocardium', 'Fibrous pericardium'], { explanation: 'Slide 65.' }),
  pic(mcq('q4-12', 'heart-coats', 'In this section of the heart, which layer makes the left ventricle wall much thicker than the right?', 'Myocardium', ['Endocardium', 'Epicardium', 'Pericardial cavity'], { explanation: 'Slide 66.' }), 66),
  match('q4-13', 'heart-coats', 'Match each layer of the heart to the tunic of a vessel it corresponds to:', [['Endocardium', 'Tunica intima'], ['Myocardium', 'Tunica media'], ['Epicardium', 'Tunica adventitia (outer coat)']], { explanation: 'Slides 31 and 65.' }),
  tf({ id: 'q4-14', conceptId: 'identify-tubes', statement: 'The gallbladder has four coats because it is part of the digestive system.', answer: false, explanation: 'The gallbladder has no submucosa, so it has three coats (slide 63).' }),
];

// ─── Lesson 5: Name the Organ, Count the Coats (2) ───────────────────

const lesson5: Q[] = [
  pic(mcq('q5-01', 'identify-gut-sections', 'Name the organ in this picture.', 'Oesophagus', ['Trachea', 'Ureter', 'Bronchiole'], { explanation: 'Slide 67: a folded lumen, a thick stratified squamous lining and thick muscle.', skill: 'application' }), 67),
  pic(mcq('q5-02', 'identify-gut-sections', 'Name the organ in this picture.', 'Stomach', ['Trachea', 'Ureter', 'Uterine tube'], { explanation: 'Slide 68: a thick mucosa packed with glands.', skill: 'application' }), 68),
  pic(mcq('q5-03', 'identify-gut-sections', 'This is the stomach. How many coats does it have?', 'Four', ['Three', 'Two', 'Varied'], { explanation: 'Slides 51 and 68.' }), 68),
  pic(mcq('q5-04', 'identify-gut-sections', 'In this picture of the oesophagus, CM and LM are two layers of which coat?', 'Muscularis externa', ['Mucosa', 'Submucosa', 'Muscularis mucosae'], { explanation: 'Slide 73: circular and longitudinal muscle of the muscularis externa.' }), 73),
  pic(mcq('q5-05', 'identify-gut-sections', 'In this picture, SM labels the:', 'Submucosa', ['Smooth muscle of the media', 'Serous membrane', 'Stratified mucosa'], { explanation: 'Slide 73.' }), 73),
  mcq('q5-06', 'identify-gut-sections', 'Why is the outer coat of the oesophagus an adventitia?', 'It runs through the neck and mediastinum, fixed in place', ['It hangs in the peritoneal cavity on its own mesentery', 'It has no muscle layers at all in its wall', 'It is covered by visceral peritoneum along its whole course in the chest'], { explanation: 'Slides 34 and 67.', skill: 'cause-effect' }),
  pic(mcq('q5-07', 'identify-other-sections', 'Name the structure in this picture.', 'Muscular artery', ['Trachea', 'Uterine tube', 'Ductus deferens'], { explanation: 'Slide 69: a wavy internal elastic lamina and a thick smooth-muscle media.', skill: 'application' }), 69),
  pic(mcq('q5-08', 'identify-other-sections', 'Name the organ in this picture.', 'Intrapulmonary bronchus', ['Trachea', 'Terminal bronchiole', 'Main bronchus outside the lung'], { explanation: 'Slide 70: a cartilage plate (not a ring) with alveoli around the tube.', skill: 'application' }), 70),
  pic(mcq('q5-09', 'identify-other-sections', 'Name the organ in this picture.', 'Trachea', ['Oesophagus', 'Stomach', 'Bronchiole'], { explanation: 'Slide 71: a wide band of hyaline cartilage.', skill: 'application' }), 71),
  pic(mcq('q5-10', 'identify-other-sections', 'Name the organ in this picture.', 'Uterine tube', ['Ductus deferens', 'Ureter', 'Trachea'], { explanation: 'Slide 72: branching mucosal folds fill the lumen.', skill: 'application' }), 72),
  pic(mcq('q5-11', 'identify-other-sections', 'Name the organ in this picture.', 'Ductus deferens', ['Uterine tube', 'Trachea', 'Urinary bladder'], { explanation: 'Slide 74: a small star-shaped lumen in a thick, layered muscular wall.', skill: 'application' }), 74),
  mcq('q5-12', 'identify-other-sections', 'A tube in section has neither a submucosa nor cartilage. Which group does it most likely belong to?', 'A three-coat system', ['The gastrointestinal tract', 'The large airways', 'The compact organs'], { explanation: 'Slides 46, 51 and 54.', skill: 'application' }),
  multi('q5-13', 'identify-other-sections', 'Select the organs whose outer coat is a serosa:', ['Stomach', 'Uterine tube', 'Small intestine'], ['Oesophagus', 'Trachea', 'Ureter'], { explanation: 'Slide 34: serosa for organs inside body cavities; the others are fixed in place and have an adventitia.' }),
  tf({ id: 'q5-14', conceptId: 'identify-other-sections', statement: 'A cartilage plate in the wall, with alveoli all around the tube, points to a bronchus inside the lung.', answer: true, explanation: 'Slide 70.' }),
];

export const questions: Q[] = [...lesson1, ...lesson2, ...lesson3, ...lesson4, ...lesson5];
