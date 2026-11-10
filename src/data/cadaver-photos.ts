// Real dissection photos in the anatomy lessons (owner, 2026-11-10: "add actual
// cadaveric images … in both the lessons and label images parts of the app").
//
// Atlas pictures (Netter, Grant's, Rohen…) are copyrighted, so a citation alone
// does not let us use them. These photos are openly licensed instead: dissections
// photographed and labelled by Wikimedia Commons user Anatomist90 (Adrian Halga),
// published under Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0).
// The licence lets us show them in the app as long as every picture is shown with
// its author, the licence (with a link) and where it came from — the credit line
// under each picture does that. The files are used as published (no edits); the
// covers and pins in "Test yourself" / "Label it" are drawn over them by the app.
//
// The pictures are downloaded into public/images/cadaver/ by
//   node --import ./tests/register.mjs scripts/cadaver-photos/download.mjs
// which also checks each file's licence on Commons before saving it.
// Labelled photos used as tappable diagrams are in data/figures/cadaver.ts.
// Captions and notes are our own words, written after looking at each photo.
// tests/cadaver-photos.test.mjs checks credits, notes, sections and files.

import type { Illustration } from '@/data/illustrations';

export const CC_BY_SA_3 = 'CC BY-SA 3.0';
export const CC_BY_SA_3_URL = 'https://creativecommons.org/licenses/by-sa/3.0/';

/** One photo on Wikimedia Commons: its file name there and the name we save it under. */
export type CommonsPhoto = {
  /** The file's name on Commons, e.g. "Axilla.jpg". */
  commonsFile: string;
  /** Saved as public/images/cadaver/<slug>.jpg */
  slug: string;
  /** The photographer, as Commons credits them. */
  author: string;
  width: number;
  height: number;
};

export const commonsPage = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURI(file.replace(/ /g, '_'))}`;
export const cadaverSrc = (slug: string) => `/images/cadaver/${slug}.jpg`;
export const cadaverCredit = (author: string) => `${author}, Wikimedia Commons · ${CC_BY_SA_3}`;

/** Every photo the app uses: the lesson pictures below and the diagrams in
 * data/figures/cadaver.ts (import that file too to get the whole list). */
export const CADAVER_PHOTOS: CommonsPhoto[] = [];

/** Registers a photo (so the download script fetches it) and returns it. */
export function photo(commonsFile: string, slug: string, author = 'Anatomist90', width = 960, height = 720): CommonsPhoto {
  const item = { commonsFile, slug, author, width, height };
  CADAVER_PHOTOS.push(item);
  return item;
}

const dissection = (p: CommonsPhoto, caption: string): Illustration => ({
  src: cadaverSrc(p.slug),
  width: p.width,
  height: p.height,
  caption,
  credit: cadaverCredit(p.author),
  sourceUrl: commonsPage(p.commonsFile),
  licenseUrl: CC_BY_SA_3_URL,
  realSpecimen: true,
});

// ─── Photos used as reading pictures ────────────────────────────────

const clavicle = photo('Clavicle photo.jpg', 'clavicle');
const scapula = photo('Posterior surface of scapula.jpg', 'scapula-posterior');
const radius = photo('Radius.jpg', 'radius');
const serratus = photo('Serratus anterior muscle.jpg', 'serratus-anterior');
const infraspinatus = photo('Infraspinatus muscle 1.JPG', 'infraspinatus');
const quadrangular = photo('Radial nerve.jpg', 'quadrangular-space');
const biceps = photo('Biceps brachialis muscle.jpg', 'biceps-brachii');
const extensorDigitorum = photo('Extensor digitorum muscle.jpg', 'extensor-digitorum');
const brachialRegion = photo('Brachial region.jpg', 'arm-nerves');
const heartInPericardium = photo('Heart dissection.jpg', 'heart-in-pericardium');
const mitral = photo('Mitral valve.jpg', 'mitral-valve');
const aorticValve = photo('Aortic valves.jpg', 'aortic-valve');
const coronary = photo('Coronary arteries 2.jpg', 'right-coronary-artery');
const greatArteries = photo('Heart, aorta and pulmonary artery.jpg', 'aorta-pulmonary-trunk');
const abdominalAorta = photo('Abdominal aorta 2.jpg', 'abdominal-aorta');
const larynxInlet = photo('Larynx.jpg', 'larynx-posterior');
const rightLung = photo('Right lung.jpg', 'right-lung-segments');
const leftLung = photo('Human left lung.jpg', 'left-lung-segments');
const submandibular = photo('Submandibular gland.jpg', 'submandibular-region');
const extraocular = photo('Extraocular muscles.jpg', 'extraocular-muscles');
const sinuses = photo('Frontal sinus.jpg', 'paranasal-sinuses');
const trigeminal = photo('Trigeminal ganglion.jpg', 'trigeminal-ganglion');
const facial = photo('Facial nerve.jpg', 'facial-nerve', 'Adrian Halga');
const vocalFolds = photo('Vocal folds.jpg', 'vocal-folds');
const externalOblique = photo('External abdominal oblique muscle.jpg', 'external-oblique');
const rectusSheath = photo('Rectus abdominis sheath.jpg', 'rectus-sheath');
const spermaticCord = photo('Spermatic cord.jpg', 'superficial-inguinal-ring');
const omentum = photo('Greater omentum 1.jpg', 'greater-omentum');
const pancreasInSitu = photo('Pancreas in situ.jpg', 'pancreas-in-situ');
const gallbladder = photo('Gallbladder and hepatic artery 1.jpg', 'gallbladder-hepatic-artery');
const pancreas = photo('Pancreas 1.jpg', 'pancreas-duodenum');
const smv = photo('Superior mesenteric vein.jpg', 'superior-mesenteric-vein');
const rightKidney = photo('Right kidney.jpg', 'right-kidney-relations');
const ureters = photo('Ureters.jpg', 'ureters-pelvic-brim');
const pituitary = photo('Hypophyseal gland.jpg', 'pituitary-in-situ');
const willis = photo('Circle of Willis 1.jpg', 'circle-of-willis');
const tentorium = photo('Tentorum cerebelli.jpg', 'tentorium-cerebelli');
const confluence = photo('Confluence of sinuses.jpg', 'confluence-of-sinuses');
const cavernous = photo('Cavernous sinus.jpg', 'cavernous-sinus');

/** lesson id → reading-section title → dissection photos (merged into ILLUSTRATIONS). */
export const CADAVER_ILLUSTRATIONS: Record<string, Record<string, Illustration[]>> = {
  'upper-limb-1': {
    'Bones of the Shoulder Girdle and Arm': [
      dissection(clavicle, 'A real clavicle seen from above: its sternal and acromial ends and its anterior and posterior margins.'),
      dissection(scapula, 'A real scapula from behind: the spine, the supraspinous and infraspinous fossae, its angles and margins.'),
    ],
    'Bones of the Forearm and Wrist': [
      dissection(radius, 'The upper end of a real radius from the front: head, neck and radial tuberosity.'),
    ],
  },
  'upper-limb-3': {
    'Muscles of the Pectoral Region and Shoulder Girdle': [
      dissection(serratus, 'Dissection of the side of the chest: the digitations of serratus anterior interlocking with external oblique.'),
    ],
    'The Rotator Cuff (SITS)': [
      dissection(infraspinatus, 'The back of the shoulder dissected: infraspinatus and teres minor below the spine of the scapula, deltoid above.'),
    ],
    'Posterior Scapular Spaces (Quadrangular and Triangular)': [
      dissection(quadrangular, 'The quadrangular space opened from behind, between teres major and the long and lateral heads of triceps, with the radial nerve.'),
    ],
  },
  'upper-limb-4': {
    'Anterior Compartment of the Arm': [
      dissection(biceps, 'The front of the arm dissected: biceps brachii, with the median nerve beside it and the cephalic vein.'),
    ],
  },
  'upper-limb-5': {
    'Extensor Tendon Compartments and the Anatomical Snuffbox': [
      dissection(extensorDigitorum, 'Extensor tendons on the back of the forearm and hand lifted on forceps: extensor digitorum, digiti minimi, carpi ulnaris and indicis.'),
    ],
  },
  'upper-limb-6': {
    'Peripheral Nerves: Course, Distribution and Lesions': [
      dissection(brachialRegion, 'The nerves of the arm from the front: median, ulnar, musculocutaneous and the medial cutaneous nerve of the arm, beside biceps.'),
    ],
  },
  'cardiovascular-system-gross-2': {
    'Fibrous and Serous Pericardium': [
      dissection(heartInPericardium, 'The pericardium opened in a real thorax to show the heart, the aorta, the pulmonary trunk and the superior vena cava.'),
    ],
  },
  'cardiovascular-system-gross-4': {
    'The Left Atrium and Left Ventricle': [
      dissection(mitral, 'The left atrium opened: looking down on to the mitral valve.'),
      dissection(aorticValve, 'Looking down the ascending aorta on to the three semilunar cusps of the aortic valve.'),
    ],
  },
  'cardiovascular-system-gross-5': {
    'The Coronary Arteries': [
      dissection(coronary, 'The right coronary artery from its origin at the ascending aorta, running in the groove beside the right auricle.'),
    ],
  },
  'cardiovascular-system-gross-7': {
    'The Pulmonary Trunk': [
      dissection(greatArteries, 'The great arteries cut across just above the heart: the aorta and the pulmonary trunk with its valve, between the two auricles.'),
    ],
    'The Abdominal Aorta': [
      dissection(abdominalAorta, 'The posterior abdominal wall: the abdominal aorta and inferior vena cava between the kidneys, with the inferior mesenteric artery.'),
    ],
  },
  'respiratory-system-gross-2': {
    'The Laryngeal Aditus (Inlet)': [
      dissection(larynxInlet, 'The larynx from behind, the pharynx opened: the epiglottis and the inlet (aditus) of the larynx below the root of the tongue.'),
    ],
  },
  'respiratory-system-gross-7': {
    'Bronchopulmonary Segments': [
      dissection(rightLung, 'A real right lung with its lobes outlined and the bronchopulmonary segments named.'),
      dissection(leftLung, 'A real left lung from the side, with its segments outlined, including the two lingular segments.'),
    ],
  },
  'head-and-neck-1': {
    'The Anterior Triangle': [
      dissection(submandibular, 'The anterior triangle dissected: the submandibular gland, the anterior belly of digastric, omohyoid and sternocleidomastoid with the external jugular vein.'),
    ],
  },
  'head-and-neck-3': {
    'Extraocular Muscles and the Common Tendinous Ring': [
      dissection(extraocular, 'The orbit opened from above: levator palpebrae superioris, superior rectus, superior oblique, lateral rectus and the trochlear and frontal nerves.'),
    ],
  },
  'head-and-neck-5': {
    'The Paranasal Sinuses': [
      dissection(sinuses, 'A skull cut down the middle: the frontal sinus in front and the sphenoidal sinus behind the nasal cavity.'),
    ],
  },
  'head-and-neck-8': {
    'The Trigeminal Nerve': [
      dissection(trigeminal, 'The trigeminal ganglion exposed in the middle cranial fossa, giving off its ophthalmic, maxillary and mandibular divisions.'),
    ],
  },
  'head-and-neck-9': {
    'The Facial Nerve': [
      dissection(facial, 'The facial nerve leaving the skull below the mastoid process and dividing in the parotid region.'),
    ],
  },
  'head-and-neck-10': {
    'Ligaments, Cavity and Folds': [
      dissection(vocalFolds, 'The larynx opened from behind: the vestibule, the vestibular folds above and the vocal folds below.'),
    ],
  },
  'gastrointestinal-system-gross-1': {
    'Muscles of the Anterolateral Wall': [
      dissection(externalOblique, 'External oblique and its muscular slips, interlocking with serratus anterior on the side of the chest.'),
    ],
  },
  'gastrointestinal-system-gross-2': {
    'The Rectus Sheath': [
      dissection(rectusSheath, 'The anterior abdominal wall: the rectus sheath beside the fleshy external oblique.'),
    ],
  },
  'gastrointestinal-system-gross-3': {
    'The Inguinal Canal': [
      dissection(spermaticCord, 'Both spermatic cords leaving the superficial inguinal rings in the aponeurosis of external oblique.'),
    ],
  },
  'gastrointestinal-system-gross-5': {
    'The Stomach': [
      dissection(omentum, 'The abdomen opened: the greater omentum hanging from the stomach, with the transverse mesocolon above it.'),
    ],
  },
  'gastrointestinal-system-gross-6': {
    'The Duodenum': [
      dissection(pancreasInSitu, 'The pancreas in place, the duodenum curving round its head and the superior mesenteric vein passing behind its neck.'),
    ],
  },
  'gastrointestinal-system-gross-8': {
    'The Gallbladder': [
      dissection(gallbladder, 'The gallbladder under the liver, with the common hepatic duct, the proper hepatic artery and the portal vein.'),
    ],
    'The Pancreas': [
      dissection(pancreas, 'A pancreas removed with the duodenum: head, body and tail, with the bile duct entering the duodenum.'),
    ],
  },
  'gastrointestinal-system-gross-10': {
    'The Hepatic Portal Vein': [
      dissection(smv, 'The superior mesenteric vein and artery emerging below the pancreas, the vein on its way to join the portal vein.'),
    ],
  },
  'urinary-system-gross-1': {
    'Relations of the Kidneys': [
      dissection(rightKidney, 'The right kidney in place with its neighbours: liver, duodenum, the right renal vessels, the ureter and psoas major.'),
    ],
  },
  'urinary-system-gross-3': {
    'Course and Relations': [
      dissection(ureters, 'The ureters crossing the common iliac vessels at the pelvic brim, beside the internal and external iliac arteries.'),
    ],
  },
  'neuroanatomy-4': {
    'The Pituitary Gland': [
      dissection(pituitary, 'The cranial floor seen from above: the pituitary (hypophysis) in the sella between the optic and oculomotor nerves.'),
    ],
  },
  'neuroanatomy-5': {
    'Arteries of the Brain and the Circle of Willis': [
      dissection(willis, 'The arteries at the base of a real brain: the internal carotids, the anterior and posterior cerebral arteries and the communicating arteries.'),
    ],
  },
  'neuroanatomy-6': {
    'The Dural Folds': [
      dissection(tentorium, 'The tentorium cerebelli on each side of the brainstem, with the falx cerebri cut at the back.'),
    ],
  },
  'neuroanatomy-7': {
    'The Major Sinuses': [
      dissection(confluence, 'The back of the skull opened: the superior sagittal, straight and transverse sinuses meeting at the confluence.'),
    ],
    'The Cavernous Sinus': [
      dissection(cavernous, 'The cavernous sinuses on each side of the pituitary, with the optic and oculomotor nerves.'),
    ],
  },
};

/** "What to notice" for each photo, keyed by its file name in public/images/cadaver/. */
export const CADAVER_NOTES: Record<string, string> = {
  'clavicle.jpg':
    'Real bone is not as smooth as a drawing. Find the rounded sternal end (M, medial) and the flattened acromial end (L, lateral), then the anterior and posterior margins along the shaft. The curve is convex forwards in its medial part and concave forwards laterally.',
  'scapula-posterior.jpg':
    'The spine runs across the back of the scapula and ends as the acromion (labelled “acromionul”, the Romanian spelling). The dotted line follows the spine; above it is the supraspinous fossa, below it the larger infraspinous fossa. The glenoid faces laterally.',
  'radius.jpg':
    'The head of the radius is a disc whose upper surface is hollowed to meet the capitulum. Below the narrow neck, the rough radial tuberosity is where biceps brachii inserts — a raised, pitted patch on the medial (M) side.',
  'serratus-anterior.jpg':
    'Serratus anterior arises by finger-like slips from the upper ribs. Notice how its lower slips interdigitate with the slips of external oblique below — the saw-tooth line the muscle is named after. Pectoralis major lies in front, at the top left.',
  'infraspinatus.jpg':
    'This is the same dissection as the quadrangular-space photo, with infraspinatus and teres minor highlighted. Both are lateral rotators and part of the rotator cuff; teres major below them is not. Note the radial nerve passing down between the heads of triceps.',
  'quadrangular-space.jpg':
    'The yellow and blue dotted lines outline the quadrangular space: teres major below it, the long head of triceps medially and the humerus with the lateral head laterally. The axillary nerve passes through this space; the radial nerve runs lower down, below teres major.',
  'biceps-brachii.jpg':
    'Biceps brachii is the long, fleshy muscle at the front of the arm, with deltoid at the top. The median nerve runs on its medial side with the brachial artery; the cephalic vein runs in the superficial fascia on its lateral side.',
  'extensor-digitorum.jpg':
    'Forceps lift the tendons of extensor digitorum, which fan out to the fingers. Extensor digiti minimi runs to the little finger and extensor indicis to the index — they are why those two fingers can be extended on their own.',
  'arm-nerves.jpg':
    'In the arm the median and ulnar nerves lie side by side medially, then part: the ulnar nerve heads backwards and the median nerve stays with the brachial artery. The musculocutaneous nerve leaves laterally to pierce coracobrachialis and supply the flexors.',
  'heart-in-pericardium.jpg':
    'The fibrous pericardium has been cut and turned back. The heart fills the middle mediastinum, its right auricle overlapping the root of the aorta. The labels are partly in Romanian (“pericardul”), but the anatomy is the same: right and left lungs and the diaphragm frame the sac.',
  'mitral-valve.jpg':
    'Looking into the opened left atrium, the mitral valve is the slit-like opening below. Its two cusps meet along a curved line; chordae tendineae (not visible from this side) hold them from below so they do not turn inside out when the ventricle contracts.',
  'aortic-valve.jpg':
    'The aortic valve has three semilunar cusps: right, left and posterior (named here as in older texts; also called right, left and non-coronary). The coronary arteries arise from the sinuses above the right and left cusps.',
  'right-coronary-artery.jpg':
    'Follow the right coronary artery from its origin at the ascending aorta, between the pulmonary trunk and the right auricle, down the right atrioventricular groove. The left atrium and pulmonary trunk lie further to the left.',
  'aorta-pulmonary-trunk.jpg':
    'The aorta and pulmonary trunk have been cut across. The pulmonary trunk is in front and to the left, with its valve cusps visible inside; the aorta is behind and to the right, with the superior vena cava further right still. Each auricle wraps round one of them.',
  'abdominal-aorta.jpg':
    'The abdominal aorta runs down on the left of the inferior vena cava. Find the inferior mesenteric artery leaving its front, the ureters on psoas major and the kidneys high on either side. The aorta divides into the common iliac arteries at the bottom.',
  'larynx-posterior.jpg':
    'Seen from behind, the inlet of the larynx is bounded in front by the epiglottis. Below the inlet, the back of the cricoid cartilage forms the lower posterior wall. “Adtus” on the photo means aditus, the inlet.',
  'right-lung-segments.jpg':
    'The coloured lines mark the horizontal and oblique fissures dividing the three lobes, and the dashed lines the segments. The upper lobe has apical, posterior and anterior segments; the middle lobe lateral and medial; the lower lobe superior and four basal segments.',
  'left-lung-segments.jpg':
    'The left lung has only an oblique fissure. Its upper lobe has apical, posterior and anterior segments plus the superior and inferior lingular segments, which take the place of a middle lobe; the lower lobe has the basal segments.',
  'submandibular-region.jpg':
    'The submandibular gland sits in the triangle between the two bellies of digastric and the mandible. Below, omohyoid crosses the neck; sternocleidomastoid forms the back of the anterior triangle, with the external jugular vein running down across it.',
  'extraocular-muscles.jpg':
    'With the roof of the orbit removed, levator palpebrae superioris lies on top of superior rectus. Superior oblique runs along the medial wall to the trochlea, with the trochlear nerve entering its upper surface. The frontal nerve runs forward on levator.',
  'paranasal-sinuses.jpg':
    'The frontal sinus is the air space in the frontal bone just above the nose. The sphenoidal sinus, coloured green, lies in the body of the sphenoid, directly below the pituitary fossa — which is why the pituitary can be reached through the nose.',
  'trigeminal-ganglion.jpg':
    'The trigeminal ganglion lies in a dural pocket near the apex of the petrous temporal bone. Its three divisions leave forwards: ophthalmic (V1), maxillary (V2) and mandibular (V3). The small motor root runs under the ganglion to join V3.',
  'facial-nerve.jpg':
    'The facial nerve leaves the stylomastoid foramen below the mastoid process, gives a branch to the posterior belly of digastric, then divides in the parotid gland into the temporofacial and cervicofacial trunks, from which its five terminal branches arise.',
  'vocal-folds.jpg':
    'The interior of the larynx from behind. The upper pair of folds are the vestibular (false) folds; the lower pair are the vocal (true) folds, which make the voice. The space between them on each side is the ventricle. Below the vocal folds is the infraglottic cavity (“endolarynx”).',
  'external-oblique.jpg':
    'External oblique arises from the outer surfaces of the lower eight ribs by slips that interlock with serratus anterior above. Its fibres run downwards and forwards, the direction of hands in the front pockets.',
  'rectus-sheath.jpg':
    'The anterior wall of the rectus sheath is formed by aponeurosis, so it looks pale and smooth, while external oblique beside it is still fleshy. The change from muscle to aponeurosis marks the lateral edge of the sheath.',
  'superficial-inguinal-ring.jpg':
    'The spermatic cord leaves the inguinal canal through the superficial inguinal ring, a gap in the aponeurosis of external oblique just above the pubic tubercle. The suspensory ligament of the penis lies between the two cords.',
  'greater-omentum.jpg':
    'The greater omentum hangs like an apron from the greater curvature of the stomach. Above it you can see the transverse mesocolon, which hangs the transverse colon from the posterior abdominal wall.',
  'pancreas-in-situ.jpg':
    'The duodenum curves round the head of the pancreas. The superior mesenteric vein passes up behind the neck of the pancreas, where it joins the splenic vein to form the portal vein. The jejunum starts on the left.',
  'gallbladder-hepatic-artery.jpg':
    'The gallbladder lies in its fossa under the liver. In the free edge of the lesser omentum the common hepatic duct lies to the right, the proper hepatic artery to the left and the portal vein behind them.',
  'pancreas-duodenum.jpg':
    'The pancreas has been removed with the duodenum. Its head sits in the C of the duodenum; the bile duct and the pancreatic duct both open into the second part of the duodenum. The body and tail stretch across to the left, towards the spleen.',
  'superior-mesenteric-vein.jpg':
    'The superior mesenteric vessels appear at the lower border of the pancreas: the vein on the right, the artery on its left. Above, behind the neck of the pancreas, the vein joins the splenic vein to form the portal vein.',
  'right-kidney-relations.jpg':
    'The right kidney lies below the liver, with the second part of the duodenum in front of its hilum. The right renal vein is short and goes straight to the inferior vena cava; the right renal artery passes behind the vena cava. The ureter runs down on psoas major.',
  'ureters-pelvic-brim.jpg':
    'Each ureter crosses into the pelvis over the end of the common iliac artery, at the division into external and internal iliac arteries. This crossing is one of the three narrowings of the ureter where stones often lodge.',
  'pituitary-in-situ.jpg':
    'The brain has been removed and the brainstem cut through the pons. The pituitary sits in the sella turcica, covered by the diaphragma sellae; the optic nerves pass forwards above it and the oculomotor nerves pass forwards on either side.',
  'circle-of-willis.jpg':
    'The circle of Willis at the base of the brain. The labels use older, partly French terms: “communicante” means communicating, and the “Sylvian artery” is the middle cerebral artery. Find the two internal carotids, the anterior cerebral arteries in front and the posterior cerebral arteries behind.',
  'tentorium-cerebelli.jpg':
    'The tentorium cerebelli is a tent of dura between the cerebrum above and the cerebellum below. Its free edge curves round the brainstem (here the pons), leaving the tentorial notch. The falx cerebri meets it in the midline at the back.',
  'confluence-of-sinuses.jpg':
    'The superior sagittal sinus runs back along the top and the straight sinus forward-down along the join of falx and tentorium. They meet at the confluence of sinuses near the internal occipital protuberance, which drains to the two transverse sinuses.',
  'cavernous-sinus.jpg':
    'The cavernous sinuses lie on each side of the pituitary fossa. The oculomotor nerve enters the roof of each sinus; the internal carotid artery and the abducent nerve run through it, and the trochlear, ophthalmic and maxillary nerves in its lateral wall.',
};
