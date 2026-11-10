// Real dissection photos as tappable diagrams ("Explore", "Test yourself",
// "Label it"), owner 2026-11-10. The photos are by Anatomist90 on Wikimedia
// Commons, CC BY-SA 3.0 (see data/cadaver-photos.ts for the licence and the
// download script). Labels are the ones printed on each photo, in standard
// English terms (the photographer's spelling is partly Romanian/French, e.g.
// "piloric", "teres pronator"); pins sit where each label's pointer starts, as in
// the lecture diagrams, and the boxes cover the printed labels. Positions are
// fractions of the picture, measured on the photos.
//
// Placed in lessons by each topic's index.ts (`cadaverPictures`), which also
// makes a "what is the marked part?" quiz question for each spot in `quiz`
// (owner, 2026-11-10: "add those images to quizzes too"). The questions cite
// the photo collection ("wikimedia-dissection-photos" in content-catalog.ts),
// not a lecture slide.
import { cadaverSrc, CC_BY_SA_3, CC_BY_SA_3_URL, commonsPage, photo, type CommonsPhoto } from '@/data/cadaver-photos';
import type { LessonFigure, SourceReference } from '@/data/lesson-types';
import type { PicturePlacement } from '@/data/topics/build';

const PHOTO_SOURCE: SourceReference[] = [{ sourceId: 'wikimedia-dissection-photos', visual: true }];

// The covers were measured by eye on the photos; a little padding makes sure
// no edge of a printed label shows round them.
const PAD = 0.012;
const clamp = (n: number) => Math.min(1, Math.max(0, n));
function padBox([x, y, w, h]: [number, number, number, number]): [number, number, number, number] {
  const left = clamp(x - PAD);
  const top = clamp(y - PAD);
  return [left, top, clamp(x + w + PAD) - left, clamp(y + h + PAD) - top];
}

function dissectionFigure(
  topicId: string,
  name: string,
  p: CommonsPhoto,
  title: string,
  caption: string,
  spots: LessonFigure['spots'],
  masks?: LessonFigure['masks']
): LessonFigure {
  return {
    id: `${topicId}:dissection-${name}`,
    title,
    src: cadaverSrc(p.slug),
    width: p.width,
    height: p.height,
    caption,
    sourceRefs: PHOTO_SOURCE,
    spots: spots.map((spot) => (spot.boxes ? { ...spot, boxes: spot.boxes.map(padBox) } : spot)),
    ...(masks ? { masks: masks.map(padBox) } : {}),
    credit: { author: p.author, license: CC_BY_SA_3, licenseUrl: CC_BY_SA_3_URL, sourceUrl: commonsPage(p.commonsFile) },
  };
}

// ─── Upper limb ─────────────────────────────────────────────────────

export const axilla = dissectionFigure('upper-limb', 'axilla', photo('Axilla.jpg', 'axilla'),
  'Dissection: contents of the axilla',
  'Real dissection of the axilla with pectoralis minor reflected: the axillary artery and vein with the nerves around them.',
  [
    { id: 'median-nerve', label: 'Median nerve', x: 0.255, y: 0.286, boxes: [[0.047, 0.214, 0.261, 0.05]] },
    { id: 'axillary-artery', label: 'Axillary artery', x: 0.201, y: 0.384, boxes: [[0.027, 0.33, 0.18, 0.105]] },
    { id: 'ulnar-nerve', label: 'Ulnar nerve', x: 0.177, y: 0.495, boxes: [[0.054, 0.468, 0.121, 0.098]] },
    { id: 'radial-nerve', label: 'Radial nerve', x: 0.21, y: 0.639, boxes: [[0.067, 0.596, 0.134, 0.097]] },
    { id: 'axillary-vein', label: 'Axillary vein', x: 0.241, y: 0.764, boxes: [[0.068, 0.745, 0.183, 0.096]] },
    { id: 'medial-cutaneous-nerve-of-arm', label: 'Medial cutaneous nerve of the arm', x: 0.579, y: 0.654, boxes: [[0.605, 0.605, 0.33, 0.1]] },
    { id: 'thoracodorsal-nerve', label: 'Thoracodorsal nerve (nerve to latissimus dorsi)', x: 0.697, y: 0.843, boxes: [[0.7, 0.795, 0.236, 0.1]] },
    { id: 'latissimus-dorsi', label: 'Latissimus dorsi', x: 0.5, y: 0.82, boxes: [[0.4, 0.835, 0.21, 0.15]] },
    { id: 'pectoralis-minor', label: 'Pectoralis minor', x: 0.74, y: 0.16, boxes: [[0.745, 0.075, 0.2, 0.155]] },
  ]);

export const carpus = dissectionFigure('upper-limb', 'carpus', photo('Carpus.jpg', 'carpal-bones'),
  'Real bones: the carpus',
  'The carpal bones of a real articulated hand from the front, with the bases of the five metacarpals (MI–MV).',
  [
    { id: 'scaphoid', label: 'Scaphoid', x: 0.189, y: 0.3, boxes: [[0.192, 0.275, 0.137, 0.05]] },
    { id: 'lunate', label: 'Lunate', x: 0.405, y: 0.102, boxes: [[0.41, 0.077, 0.112, 0.05]] },
    { id: 'triquetrum', label: 'Triquetrum', x: 0.62, y: 0.141, boxes: [[0.623, 0.113, 0.19, 0.058]] },
    { id: 'pisiform', label: 'Pisiform', x: 0.835, y: 0.289, boxes: [[0.838, 0.262, 0.13, 0.055]] },
    { id: 'trapezium', label: 'Trapezium', x: 0.071, y: 0.527, boxes: [[0.074, 0.5, 0.16, 0.052]] },
    { id: 'trapezoid', label: 'Trapezoid', x: 0.192, y: 0.62, boxes: [[0.195, 0.592, 0.15, 0.055]] },
    { id: 'capitate', label: 'Capitate', x: 0.379, y: 0.464, boxes: [[0.382, 0.433, 0.163, 0.058]] },
    { id: 'hook-of-hamate', label: 'Hook (hamulus) of the hamate', x: 0.591, y: 0.395, boxes: [[0.594, 0.35, 0.172, 0.09]] },
  ]);

export const armSection = dissectionFigure('upper-limb', 'arm-cross-section', photo('Triceps muscle.jpg', 'arm-cross-section'),
  'Real cross-section of the arm',
  'A slice across the middle of a real arm (level marked on the small picture): the anterior and posterior compartments around the humerus and the neurovascular bundle on the medial side.',
  [
    { id: 'triceps', label: 'Triceps brachii', x: 0.69, y: 0.139, boxes: [[0.7, 0.077, 0.115, 0.118]] },
    { id: 'radial-nerve', label: 'Radial nerve', x: 0.757, y: 0.479, boxes: [[0.785, 0.462, 0.1, 0.08]] },
    { id: 'humerus', label: 'Humerus', x: 0.755, y: 0.638, boxes: [[0.762, 0.62, 0.13, 0.045]] },
    { id: 'brachialis', label: 'Brachialis', x: 0.697, y: 0.871, boxes: [[0.69, 0.874, 0.163, 0.08]] },
    { id: 'biceps', label: 'Biceps brachii', x: 0.516, y: 0.871, boxes: [[0.48, 0.88, 0.11, 0.08]] },
    { id: 'musculocutaneous-nerve', label: 'Musculocutaneous nerve', x: 0.335, y: 0.836, boxes: [[0.068, 0.845, 0.272, 0.08]] },
    { id: 'coracobrachialis', label: 'Coracobrachialis', x: 0.311, y: 0.711, boxes: [[0.045, 0.717, 0.27, 0.08]] },
    { id: 'median-nerve', label: 'Median nerve', x: 0.208, y: 0.577, boxes: [[0.088, 0.528, 0.11, 0.08]] },
    { id: 'brachial-artery', label: 'Brachial artery', x: 0.185, y: 0.438, boxes: [[0.05, 0.393, 0.135, 0.077]] },
    { id: 'ulnar-nerve', label: 'Ulnar nerve', x: 0.177, y: 0.354, boxes: [[0.08, 0.297, 0.095, 0.08]] },
    { id: 'basilic-vein', label: 'Basilic vein', x: 0.225, y: 0.264, boxes: [[0.168, 0.172, 0.105, 0.08]] },
  ]);

export const forearmFront = dissectionFigure('upper-limb', 'forearm-anterior', photo('Muscles of forearm.jpg', 'forearm-anterior'),
  'Dissection: front of the forearm',
  'The superficial flexor muscles of a real forearm from the front (lateral side on the left).',
  [
    { id: 'pronator-teres', label: 'Pronator teres', x: 0.757, y: 0.191, boxes: [[0.7, 0.14, 0.24, 0.08]] },
    { id: 'brachioradialis', label: 'Brachioradialis', x: 0.306, y: 0.246, boxes: [[0.1, 0.193, 0.243, 0.083]] },
    { id: 'flexor-carpi-radialis', label: 'Flexor carpi radialis', x: 0.71, y: 0.33, boxes: [[0.703, 0.293, 0.24, 0.085]] },
    { id: 'flexor-digitorum-superficialis', label: 'Flexor digitorum superficialis', x: 0.319, y: 0.446, boxes: [[0.12, 0.373, 0.202, 0.16]] },
    { id: 'palmaris-longus', label: 'Palmaris longus', x: 0.748, y: 0.486, boxes: [[0.705, 0.46, 0.235, 0.085]] },
    { id: 'flexor-carpi-ulnaris', label: 'Flexor carpi ulnaris', x: 0.717, y: 0.646, boxes: [[0.708, 0.615, 0.235, 0.085]] },
  ]);

export const forearmBack = dissectionFigure('upper-limb', 'forearm-posterior', photo('Forearm posterior view.jpg', 'forearm-posterior'),
  'Dissection: back of the forearm',
  'The extensor muscles of a real forearm from behind, with the outcropping muscles of the thumb near the wrist.',
  [
    { id: 'anconeus', label: 'Anconeus', x: 0.359, y: 0.121, boxes: [[0.155, 0.08, 0.15, 0.085]] },
    { id: 'extensor-carpi-radialis-longus', label: 'Extensor carpi radialis longus', x: 0.697, y: 0.13, boxes: [[0.715, 0.072, 0.24, 0.12]] },
    { id: 'extensor-carpi-radialis-brevis', label: 'Extensor carpi radialis brevis', x: 0.717, y: 0.33, boxes: [[0.725, 0.272, 0.235, 0.12]] },
    { id: 'extensor-carpi-ulnaris', label: 'Extensor carpi ulnaris', x: 0.351, y: 0.357, boxes: [[0.115, 0.318, 0.23, 0.08]] },
    { id: 'extensor-digitorum', label: 'Extensor digitorum', x: 0.302, y: 0.639, boxes: [[0.143, 0.562, 0.157, 0.16]] },
    { id: 'abductor-pollicis-longus', label: 'Abductor pollicis longus', x: 0.708, y: 0.602, boxes: [[0.722, 0.53, 0.24, 0.12]] },
    { id: 'extensor-pollicis-brevis', label: 'Extensor pollicis brevis', x: 0.717, y: 0.755, boxes: [[0.72, 0.698, 0.23, 0.115]] },
    { id: 'extensor-pollicis-longus', label: 'Extensor pollicis longus', x: 0.741, y: 0.896, boxes: [[0.722, 0.85, 0.225, 0.12]] },
  ]);

// ─── Respiratory system ─────────────────────────────────────────────

export const neckTrachea = dissectionFigure('respiratory-system-gross', 'trachea-in-neck', photo('Thyroid gland.jpg', 'trachea-in-neck'),
  'Dissection: the trachea in the neck',
  'The front of a real neck with the infrahyoid muscles turned aside: the thyroid gland on the trachea, with the carotid arteries, vagus and recurrent laryngeal nerves.',
  [
    { id: 'sternohyoid', label: 'Sternohyoid', x: 0.483, y: 0.055, boxes: [[0.33, 0.01, 0.3, 0.04]] },
    { id: 'sternothyroid', label: 'Sternothyroid', x: 0.32, y: 0.152, boxes: [[0.33, 0.13, 0.338, 0.042]] },
    { id: 'thyroid-gland', label: 'Thyroid gland', x: 0.36, y: 0.33, boxes: [[0.362, 0.31, 0.21, 0.042]] },
    { id: 'trachea', label: 'Trachea', x: 0.403, y: 0.607, boxes: [[0.405, 0.588, 0.125, 0.04]] },
    { id: 'right-vagus', label: 'Right vagus nerve', x: 0.168, y: 0.714, boxes: [[0.03, 0.595, 0.18, 0.08]] },
    { id: 'left-vagus', label: 'Left vagus nerve', x: 0.804, y: 0.675, boxes: [[0.685, 0.63, 0.255, 0.042]] },
    { id: 'recurrent-laryngeal', label: 'Recurrent laryngeal nerve', x: 0.442, y: 0.871, boxes: [[0.362, 0.873, 0.16, 0.12]] },
    { id: 'common-carotid', label: 'Common carotid artery', x: 0.174, y: 0.902, boxes: [[0.04, 0.832, 0.127, 0.118]] },
  ],
  // The second "common carotid artery" label (right of the picture).
  [[0.835, 0.828, 0.125, 0.12]]);

// ─── Urinary system ─────────────────────────────────────────────────

export const kidneysInSitu = dissectionFigure('urinary-system-gross', 'kidneys-in-situ', photo('Kidneys.jpg', 'kidneys-in-situ'),
  'Dissection: the kidneys and their vessels',
  'The posterior abdominal wall of a real body: both kidneys with their renal arteries and veins, the aorta, the inferior vena cava and the ureters.',
  [
    { id: 'coeliac-trunk', label: 'Coeliac trunk', x: 0.627, y: 0.036, boxes: [[0.63, 0, 0.192, 0.05]] },
    { id: 'right-renal-artery', label: 'Right renal artery', x: 0.208, y: 0.111, boxes: [[0.028, 0.065, 0.255, 0.04]] },
    { id: 'right-kidney', label: 'Right kidney', x: 0.048, y: 0.184, boxes: [[0.05, 0.115, 0.105, 0.14]] },
    { id: 'right-renal-vein', label: 'Right renal vein', x: 0.255, y: 0.366, boxes: [[0.035, 0.368, 0.215, 0.04]] },
    { id: 'right-ureter', label: 'Right ureter', x: 0.214, y: 0.575, boxes: [[0.02, 0.558, 0.193, 0.04]] },
    { id: 'right-testicular-vessels', label: 'Right testicular artery and vein', x: 0.154, y: 0.857, boxes: [[0.015, 0.872, 0.235, 0.105]] },
    { id: 'abdominal-aorta', label: 'Abdominal aorta', x: 0.436, y: 0.473, boxes: [[0.438, 0.432, 0.137, 0.085]] },
    { id: 'ivc', label: 'Inferior vena cava', x: 0.33, y: 0.71, boxes: [[0.332, 0.67, 0.148, 0.08]] },
    { id: 'inferior-mesenteric-artery', label: 'Inferior mesenteric artery', x: 0.516, y: 0.839, boxes: [[0.43, 0.848, 0.18, 0.115]] },
    { id: 'left-renal-artery', label: 'Left renal artery', x: 0.71, y: 0.175, boxes: [[0.603, 0.125, 0.24, 0.042]] },
    { id: 'left-kidney', label: 'Left kidney', x: 0.81, y: 0.33, boxes: [[0.812, 0.26, 0.105, 0.14]] },
    { id: 'left-renal-vein', label: 'Left renal vein', x: 0.69, y: 0.486, boxes: [[0.635, 0.483, 0.2, 0.04]] },
    { id: 'left-ureter', label: 'Left ureter', x: 0.759, y: 0.821, boxes: [[0.763, 0.81, 0.18, 0.042]] },
  ],
  // "Psoas major muscle" (no pointer, so no pin).
  [[0.54, 0.6, 0.15, 0.068]]);

// ─── Gastrointestinal system ────────────────────────────────────────

export const liverLobes = dissectionFigure('gastrointestinal-system-gross', 'liver-lobes', photo('Lobes of liver.jpg', 'liver-visceral-surface'),
  'Real liver: the visceral surface',
  'A real liver from below, its lobes tinted: the caudate and quadrate lobes lie either side of the porta hepatis.',
  [
    { id: 'caudate-lobe', label: 'Caudate lobe', x: 0.346, y: 0.121, boxes: [[0.203, 0.03, 0.165, 0.088]] },
    { id: 'ivc', label: 'Inferior vena cava', x: 0.466, y: 0.098, boxes: [[0.408, 0, 0.185, 0.095]] },
    { id: 'right-lobe', label: 'Right lobe', x: 0.741, y: 0.118, boxes: [[0.713, 0.025, 0.133, 0.095]] },
    { id: 'portal-vein', label: 'Portal vein', x: 0.827, y: 0.379, boxes: [[0.83, 0.333, 0.135, 0.09]] },
    { id: 'gallbladder', label: 'Gallbladder', x: 0.646, y: 0.646, boxes: [[0.603, 0.573, 0.235, 0.073]] },
    { id: 'quadrate-lobe', label: 'Quadrate lobe', x: 0.201, y: 0.889, boxes: [[0.027, 0.888, 0.195, 0.09]] },
    { id: 'left-lobe', label: 'Left lobe', x: 0.097, y: 0.729, boxes: [[0, 0.73, 0.103, 0.093]] },
  ]);

export const hepaticArteries = dissectionFigure('gastrointestinal-system-gross', 'common-hepatic-artery', photo('Common hepatic artery.jpg', 'common-hepatic-artery'),
  'Dissection: the common hepatic artery and its branches',
  'Below the liver in a real body: the common hepatic artery from the coeliac trunk dividing into the proper hepatic and gastroduodenal arteries, beside the portal vein.',
  [
    { id: 'proper-hepatic-artery', label: 'Proper hepatic artery', x: 0.286, y: 0.291, boxes: [[0.088, 0.23, 0.232, 0.1]] },
    { id: 'portal-vein', label: 'Portal vein', x: 0.637, y: 0.188, boxes: [[0.623, 0.128, 0.105, 0.1]] },
    { id: 'common-hepatic-artery', label: 'Common hepatic artery', x: 0.563, y: 0.384, boxes: [[0.453, 0.285, 0.232, 0.095]] },
    { id: 'superior-mesenteric-vein', label: 'Superior mesenteric vein', x: 0.74, y: 0.464, boxes: [[0.64, 0.463, 0.337, 0.105]] },
    { id: 'right-gastric-artery', label: 'Right gastric (pyloric) artery', x: 0.257, y: 0.563, boxes: [[0.145, 0.513, 0.137, 0.105]] },
    { id: 'gastroduodenal-artery', label: 'Gastroduodenal artery', x: 0.61, y: 0.589, boxes: [[0.482, 0.608, 0.308, 0.128]] },
  ]);

// ─── Neuroanatomy ───────────────────────────────────────────────────

export const brainstemBase = dissectionFigure('neuroanatomy', 'base-of-brain', photo('Pons and medulla oblongata.jpg', 'base-of-brain'),
  'Real brain: the base and brainstem',
  'The underside of a real brain: the optic chiasm and the parts of the diencephalon and brainstem behind it.',
  [
    { id: 'optic-nerve', label: 'Optic nerve', x: 0.544, y: 0.113, boxes: [[0.547, 0.09, 0.14, 0.045]] },
    { id: 'optic-chiasma', label: 'Optic chiasma', x: 0.382, y: 0.213, boxes: [[0.198, 0.198, 0.178, 0.045]] },
    { id: 'optic-tract', label: 'Optic tract', x: 0.599, y: 0.243, boxes: [[0.601, 0.212, 0.137, 0.048]] },
    { id: 'mammillary-body', label: 'Mammillary body', x: 0.326, y: 0.288, boxes: [[0.2, 0.257, 0.123, 0.072]] },
    { id: 'cerebral-peduncle', label: 'Cerebral peduncle', x: 0.256, y: 0.377, boxes: [[0.112, 0.33, 0.135, 0.08]] },
    { id: 'interpeduncular-fossa', label: 'Interpeduncular fossa', x: 0.291, y: 0.432, boxes: [[0, 0.413, 0.289, 0.05]] },
    { id: 'uncus', label: 'Uncus', x: 0.619, y: 0.37, boxes: [[0.621, 0.344, 0.093, 0.05]] },
    { id: 'pons', label: 'Pons', x: 0.354, y: 0.645, boxes: [[0.356, 0.618, 0.087, 0.055]] },
    { id: 'middle-cerebellar-peduncle', label: 'Middle cerebellar peduncle', x: 0.157, y: 0.882, boxes: [[0, 0.855, 0.155, 0.11]] },
    { id: 'pyramid', label: 'Pyramid', x: 0.504, y: 0.861, boxes: [[0.506, 0.836, 0.106, 0.05]] },
    { id: 'medulla-oblongata', label: 'Medulla oblongata', x: 0.338, y: 0.932, boxes: [[0.341, 0.89, 0.145, 0.092]] },
    { id: 'olive', label: 'Olive', x: 0.544, y: 0.971, boxes: [[0.547, 0.955, 0.08, 0.045]] },
  ]);

export const basalNuclei = dissectionFigure('neuroanatomy', 'basal-nuclei', photo('Basal ganglia - horizontal section.jpg', 'basal-nuclei-section'),
  'Real brain: horizontal section through the basal nuclei',
  'A horizontal slice of a real cerebral hemisphere (front at the top): the caudate, lentiform nucleus and thalamus with the capsules between them.',
  [
    { id: 'frontal-horn', label: 'Frontal (anterior) horn of the lateral ventricle', x: 0.185, y: 0.13, boxes: [[0.025, 0.055, 0.155, 0.16]] },
    { id: 'head-of-caudate', label: 'Head of the caudate nucleus', x: 0.496, y: 0.08, boxes: [[0.503, 0.01, 0.13, 0.115]] },
    { id: 'internal-capsule', label: 'Internal capsule', x: 0.543, y: 0.179, boxes: [[0.551, 0.152, 0.258, 0.045]] },
    { id: 'globus-pallidus', label: 'Globus pallidus', x: 0.638, y: 0.259, boxes: [[0.641, 0.232, 0.23, 0.045]] },
    { id: 'external-capsule', label: 'External capsule', x: 0.755, y: 0.386, boxes: [[0.745, 0.335, 0.255, 0.047]] },
    { id: 'extreme-capsule', label: 'Extreme capsule', x: 0.808, y: 0.468, boxes: [[0.815, 0.443, 0.185, 0.045]] },
    { id: 'claustrum', label: 'Claustrum', x: 0.81, y: 0.604, boxes: [[0.815, 0.58, 0.162, 0.045]] },
    { id: 'putamen', label: 'Putamen', x: 0.764, y: 0.707, boxes: [[0.765, 0.683, 0.13, 0.045]] },
    { id: 'lateral-ventricle', label: 'Lateral ventricle', x: 0.154, y: 0.705, boxes: [[0.03, 0.705, 0.152, 0.083]] },
    { id: 'thalamus', label: 'Thalamus', x: 0.295, y: 0.759, boxes: [[0.297, 0.738, 0.142, 0.045]] },
  ]);

export const cadaverFigures: LessonFigure[] = [
  axilla, carpus, armSection, forearmFront, forearmBack,
  neckTrachea, kidneysInSitu, liverLobes, hepaticArteries, brainstemBase, basalNuclei,
];

// Where each photo is shown (lesson, reading section index), the concept its
// quiz questions practise, and the parts asked about ("what is the marked part?",
// the other labels on the same photo as wrong answers).
const placements: PicturePlacement[] = [
  { figure: carpus, lessonId: 'upper-limb-1', chunk: 1, conceptId: 'bones-forearm-hand', quiz: ['scaphoid', 'lunate', 'triquetrum', 'pisiform', 'trapezium', 'trapezoid', 'capitate', 'hook-of-hamate'] },
  { figure: armSection, lessonId: 'upper-limb-4', chunk: 1, conceptId: 'posterior-arm-muscles', quiz: ['triceps', 'radial-nerve', 'brachialis', 'musculocutaneous-nerve', 'coracobrachialis', 'median-nerve', 'brachial-artery', 'ulnar-nerve', 'basilic-vein'] },
  { figure: forearmFront, lessonId: 'upper-limb-5', chunk: 0, conceptId: 'anterior-forearm-superficial', quiz: ['pronator-teres', 'brachioradialis', 'flexor-carpi-radialis', 'flexor-digitorum-superficialis', 'palmaris-longus', 'flexor-carpi-ulnaris'] },
  { figure: forearmBack, lessonId: 'upper-limb-5', chunk: 1, conceptId: 'posterior-forearm-muscles', quiz: ['anconeus', 'extensor-carpi-radialis-longus', 'extensor-carpi-radialis-brevis', 'extensor-carpi-ulnaris', 'extensor-digitorum', 'abductor-pollicis-longus', 'extensor-pollicis-brevis', 'extensor-pollicis-longus'] },
  { figure: axilla, lessonId: 'upper-limb-6', chunk: 0, conceptId: 'subclavian-axillary-arteries', quiz: ['median-nerve', 'axillary-artery', 'ulnar-nerve', 'radial-nerve', 'axillary-vein', 'medial-cutaneous-nerve-of-arm', 'thoracodorsal-nerve', 'pectoralis-minor'] },
  { figure: neckTrachea, lessonId: 'respiratory-system-gross-3', chunk: 1, conceptId: 'trachea-neck-relations', quiz: ['sternohyoid', 'sternothyroid', 'thyroid-gland', 'trachea', 'right-vagus', 'left-vagus', 'recurrent-laryngeal', 'common-carotid'] },
  { figure: kidneysInSitu, lessonId: 'urinary-system-gross-2', chunk: 1, conceptId: 'kidney-vessels', quiz: ['coeliac-trunk', 'right-renal-artery', 'right-renal-vein', 'right-ureter', 'right-testicular-vessels', 'abdominal-aorta', 'ivc', 'inferior-mesenteric-artery', 'left-renal-artery', 'left-renal-vein', 'left-ureter'] },
  { figure: liverLobes, lessonId: 'gastrointestinal-system-gross-8', chunk: 0, conceptId: 'liver', quiz: ['caudate-lobe', 'ivc', 'right-lobe', 'portal-vein', 'gallbladder', 'quadrate-lobe', 'left-lobe'] },
  { figure: hepaticArteries, lessonId: 'gastrointestinal-system-gross-9', chunk: 1, conceptId: 'coeliac-trunk', quiz: ['proper-hepatic-artery', 'portal-vein', 'common-hepatic-artery', 'superior-mesenteric-vein', 'right-gastric-artery', 'gastroduodenal-artery'] },
  { figure: brainstemBase, lessonId: 'neuroanatomy-1', chunk: 1, conceptId: 'brain-parts', quiz: ['optic-nerve', 'optic-chiasma', 'optic-tract', 'mammillary-body', 'cerebral-peduncle', 'interpeduncular-fossa', 'uncus', 'pons', 'middle-cerebellar-peduncle', 'pyramid', 'medulla-oblongata', 'olive'] },
  { figure: basalNuclei, lessonId: 'neuroanatomy-5', chunk: 0, conceptId: 'basal-nuclei', quiz: ['frontal-horn', 'head-of-caudate', 'internal-capsule', 'globus-pallidus', 'external-capsule', 'extreme-capsule', 'claustrum', 'putamen', 'lateral-ventricle', 'thalamus'] },
];

/** The dissection photos placed in one topic's lessons (passed to buildTopic with its lecture pictures). */
export function cadaverPictures(topicId: string): PicturePlacement[] {
  return placements.filter((placement) => placement.figure.id.startsWith(`${topicId}:`));
}
