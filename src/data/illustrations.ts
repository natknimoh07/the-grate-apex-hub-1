// Illustrations in the reading (owner, 2026-10-31: "incorporate images from the
// internet, free ones, that aid the lessons … like the pictures you see while
// reading a Britannica page").
//
// The pictures are figures from OpenStax "Anatomy and Physiology" (1st edition),
// published under the Creative Commons Attribution 4.0 licence (CC BY 4.0), so
// they may be copied and shown with credit. Only figures OpenStax made
// themselves were taken: any figure credited to someone else (photos,
// University of Michigan micrographs) was left out. Resized copies live in
// public/images/openstax/; the captions are our own words.
//
// lesson id → reading-section title → pictures. Shown beside the reading on
// the Read tab (reading-layer.tsx) and on HB2 lesson pages (hb2-study.ts).
// tests/illustrations.test.mjs checks every picture and section exists.

import { ILLUSTRATION_NOTES } from '@/data/illustration-notes';

export type Illustration = {
  src: string; // path under public/
  width: number;
  height: number;
  caption: string;
  credit: string;
  sourceUrl: string;
  /** "Figure 3.1": section 3, first picture (set by illustrationsFor when the section number is given). */
  label?: string;
  /** What to notice in the picture (data/illustration-notes.ts). */
  note?: string;
};

const CREDIT = 'OpenStax, Anatomy and Physiology · CC BY 4.0';
const SOURCE = 'https://openstax.org/details/books/anatomy-and-physiology';

const pic = (file: string, width: number, height: number, caption: string): Illustration => ({
  src: `/images/openstax/${file}`,
  width,
  height,
  caption,
  credit: CREDIT,
  sourceUrl: SOURCE,
});

export const ILLUSTRATIONS: Record<string, Record<string, Illustration[]>> = {
  'cardiovascular-physiology-1': {
    "The conducting system": [pic('2018-conduction-system-of-heart.jpg', 1000, 670, "The heart's conducting system: SA node, internodal pathways, AV node, bundle of His, bundle branches and Purkinje fibres.")],
    "Ventricular systole": [pic('2027-phases-of-the-cardiac-cycle.jpg', 1000, 1089, "The phases of one cardiac cycle, from atrial systole through ventricular systole to diastole.")],
  },
  'cardiovascular-physiology-2': {
    "The arterial pulse": [pic('2110-pulse-sites.jpg', 716, 1100, "Places where the arterial pulse can be felt; the radial artery at the wrist is the usual one.")],
    "Heart sounds": [pic('2029-cardiac-cycle-vs-heart-sounds.jpg', 1000, 756, "Heart sounds lined up with the pressures of the cardiac cycle: S1 as the AV valves close, S2 as the semilunar valves close.")],
  },
  'cardiovascular-physiology-3': {
    "Cardiac output": [pic('2031-factors-in-cardiac-output.jpg', 1000, 586, "Cardiac output = heart rate × stroke volume, and the factors that change each.")],
    "Preload, afterload and Starling’s law": [pic('2035-factors-in-stroke-volume.jpg', 1000, 556, "What changes stroke volume: preload, afterload and contractility.")],
  },
  'cardiovascular-physiology-4': {
    "Flow, pressure and resistance": [pic('2109-systemic-blood-pressure.jpg', 1000, 697, "Blood pressure along the circulation: it falls most steeply across the arterioles, where resistance is greatest.")],
    "Velocity and cross-sectional area": [pic('2112-vessel-blood-pressure-relationships.jpg', 1000, 688, "Vessel diameter, total cross-sectional area, pressure and velocity compared along the vascular tree.")],
  },
  'cardiovascular-physiology-5': {
    "Starling’s forces": [pic('2108-capillary-exchangen.jpg', 1000, 466, "Fluid filters out at the arterial end of a capillary and is mostly drawn back in at the venous end.")],
    "Lymphatic drainage": [pic('2202-lymphatic-capillaries.jpg', 1000, 578, "Lymphatic capillaries lie among the blood capillaries and collect the fluid that is not reabsorbed.")],
    "Venous circulation": [pic('2114-skeletal-muscle-vein-pump.jpg', 1000, 875, "The skeletal muscle pump: contracting muscle squeezes the veins, and valves keep blood moving towards the heart.")],
  },
  'cardiovascular-physiology-6': {
    "Systemic control: humoral and nervous": [pic('2116-baroreceptor-reflex-flow-art.jpg', 1000, 745, "The baroreceptor reflex: a rise or fall in blood pressure changes baroreceptor firing, and the brainstem corrects heart rate and vessel tone.")],
  },
  'cardiovascular-physiology-7': {
    "Shock and its types": [pic('2118-blood-volume-loss-and-homeostasis.jpg', 1000, 527, "How the body responds to a loss of blood volume.")],
  },
  'cardiovascular-physiology-8': {
    "Cerebral blood supply and the meninges": [pic('1314-circle-of-willisn.jpg', 546, 920, "The arterial circle at the base of the brain (circle of Willis), fed by the internal carotid and vertebral arteries.")],
    "Cerebrospinal fluid": [pic('1317-cfs-circulation.jpg', 1000, 651, "CSF is made by the choroid plexus, flows through the ventricles and returns to the blood through the arachnoid granulations.")],
    "Coronary circulation": [pic('2014ab-coronary-blood-vessels.jpg', 1000, 918, "The coronary arteries and veins on the front and back of the heart.")],
  },
  'cardiovascular-physiology-9': {
    "Chest lead positions": [pic('2021-ecg-placement-of-electrodes.jpg', 665, 1100, "Where the electrodes go for a 12-lead ECG.")],
    "Waves and intervals": [pic('2022-electrocardiogram.jpg', 1000, 650, "A normal ECG: the P wave, QRS complex and T wave, with the PR and QT intervals.")],
    "Heart block": [pic('2024-cardiac-arrhythmias.jpg', 1000, 1025, "ECG strips of abnormal rhythms, including partial and complete heart block.")],
  },
  'respiratory-physiology-1': {
    "The Airway": [pic('2301-major-respiratory-organs.jpg', 1000, 841, "The respiratory system from the nasal cavity to the lungs and diaphragm.")],
    "Gases and Pressure": [pic('2314-boyles-law.jpg', 1000, 1027, "Boyle’s law: at a constant temperature, a gas’s pressure rises as its volume falls.")],
    "Pressure Gradients Move the Air": [pic('2316-inspiration-and-expiration.jpg', 1000, 739, "Inspiration and expiration: the chest enlarges, lung pressure falls and air flows in; the reverse moves it out.")],
  },
  'respiratory-physiology-2': {
    "Volumes and Capacities": [pic('2317-spirometry-and-respiratory-volumes.jpg', 1000, 403, "Respiratory volumes on a spirometer trace, and the capacities made by adding them.")],
  },
  'respiratory-physiology-5': {
    "Haemoglobin": [pic('2322-fig-23-22-a.jpg', 1000, 1028, "Haemoglobin is four subunits, each with an iron-containing haem that carries one O₂.")],
    "The Dissociation Curve": [pic('2323-oxygen-hemoglobin-dissociation-a.jpg', 1000, 788, "The oxygen–haemoglobin dissociation curve and the factors that shift it.")],
  },
  'respiratory-physiology-6': {
    "Fetal Haemoglobin and Myoglobin": [pic('2324-oxygen-hemoglobin-dissociation-fetus-adult.jpg', 1000, 762, "Fetal haemoglobin binds O₂ more tightly than adult haemoglobin: its curve lies to the left.")],
    "How CO₂ Is Carried": [pic('2325-carbon-dioxide-transport.jpg', 1000, 493, "The three ways CO₂ travels in blood: dissolved, as bicarbonate, and bound to haemoglobin.")],
  },
  'respiratory-physiology-7': {
    "Diffusion and Blood Gases": [pic('2318-partial-and-total-pressure-of-a-gas.jpg', 1000, 340, "Each gas in a mixture exerts its own partial pressure; together they make the total pressure.")],
    "The Respiratory Membrane": [pic('2319-fig-23-19-56b5.jpg', 1000, 600, "External respiration: O₂ diffuses from the alveolus into the blood and CO₂ the other way.")],
  },
  'respiratory-physiology-8': {
    "The Medullary Centres": [pic('2327-respiratory-centers-of-the-brain.jpg', 853, 1100, "The respiratory centres in the medulla and pons.")],
  },
  'central-nervous-system-1': {
    "The nervous system as a communication network": [pic('1201-overview-of-nervous-system.jpg', 841, 760, "The central nervous system (brain and spinal cord) and the peripheral nervous system.")],
    "Classifying sensory receptors": [pic('1401-receptor-types.jpg', 1000, 496, "Kinds of sensory receptor: free nerve endings, encapsulated endings and specialised receptor cells.")],
  },
  'central-nervous-system-3': {
    "The dorsal column (lemniscal) pathway": [pic('1417-ascending-pathways-of-spinal-cord.jpg', 1000, 1024, "The dorsal column and spinothalamic pathways, and where each crosses the midline.")],
  },
  'central-nervous-system-5': {
    "The plexuses": [pic('1321-spinal-nerve-plexuses.jpg', 660, 1100, "The four main nerve plexuses: cervical, brachial, lumbar and sacral.")],
  },
  'central-nervous-system-6': {
    "The corticospinal (pyramidal) tracts": [pic('1426-corticospinal-pathway.jpg', 502, 1100, "The corticospinal tract from the motor cortex to the spinal cord, crossing at the pyramids.")],
  },
  'central-nervous-system-7': {
    "Anatomy of the cerebellum": [pic('1312-cerebellumn.jpg', 875, 1080, "The cerebellum sits behind the brainstem, connected to it by the cerebellar peduncles.")],
  },
  'central-nervous-system-8': {
    "What the basal ganglia are": [pic('1308-frontal-section-basal-nuclei.jpg', 684, 535, "The basal nuclei in a frontal section of the brain: caudate, putamen and globus pallidus.")],
    "Two circuits": [pic('1309-basal-nuclei-connections.jpg', 500, 496, "The direct and indirect pathways through the basal nuclei.")],
  },
  'central-nervous-system-9': {
    "How the brain is built": [pic('1306-lobes-of-cerebral-cortexn.jpg', 733, 621, "The four lobes of the cerebral cortex.")],
    "The brainstem": [pic('1311-brain-stem.jpg', 906, 685, "The brainstem: midbrain, pons and medulla.")],
  },
  'endocrinology-1': {
    "Three chemical classes": [pic('1802-examples-of-amine-peptide-protein-and-steroid-hormone-structure.jpg', 866, 1100, "Examples of amine, peptide, protein and steroid hormones.")],
    "Control of secretion": [pic('1805-negative-feedback-loop.jpg', 1000, 979, "Negative feedback in a hormone axis: hypothalamus → pituitary → adrenal cortex, with cortisol switching the first two off.")],
  },
  'endocrinology-2': {
    "The hypothalamus": [pic('1806-the-hypothalamus-pituitary-complex.jpg', 1000, 581, "The hypothalamus and the pituitary gland hanging from it by the infundibulum.")],
    "The posterior pituitary": [pic('1807-the-posterior-pituitary-complex.jpg', 1000, 805, "Neurons in the hypothalamus make ADH and oxytocin and release them from the posterior pituitary.")],
    "ADH (arginine vasopressin)": [pic('2710-aquaporins-01.jpg', 1000, 729, "ADH puts aquaporin water channels into the collecting duct cells, so water can be reabsorbed.")],
  },
  'endocrinology-3': {
    "Anterior pituitary hormones": [pic('1810-major-pituitary-hormones.jpg', 1000, 1058, "The major pituitary hormones and their target organs.")],
    "What growth hormone does": [pic('1809-hormonal-regulation-of-growth.jpg', 1000, 849, "Growth hormone acts directly and through insulin-like growth factors (IGFs) from the liver.")],
  },
  'endocrinology-4': {
    "The thyroid axis": [pic('1813-a-classic-negative-feedback-loop.jpg', 1000, 978, "TRH → TSH → T3 and T4, with negative feedback.")],
  },
  'endocrinology-5': {
    "Aldosterone and the renin–angiotensin system": [pic('2626-renin-aldosterone-angiotensin.jpg', 1000, 631, "The renin–angiotensin–aldosterone system.")],
  },
  'endocrinology-6': {
    "What insulin does": [pic('1822-the-homostatic-regulation-of-blood-glucose-levels.jpg', 783, 1100, "Insulin and glucagon keep blood glucose in its normal range.")],
  },
  'endocrinology-7': {
    "Vitamin D": [pic('614-synthesis-of-vitamin-d.jpg', 658, 865, "Vitamin D is made in the skin with sunlight, then activated in the liver and kidney.")],
    "Parathyroid hormone": [pic('1817-the-role-of-parathyroid-hormone-in-maintaining-blood-calcium-homeostasis.jpg', 916, 1100, "PTH raises blood calcium when it falls; calcitonin lowers it when it rises.")],
  },
  'gastrointestinal-physiology-1': {
    "Tract and accessory organs": [pic('2401-components-of-the-digestive-system.jpg', 885, 1100, "The alimentary canal and the accessory digestive organs.")],
    "The gut wall": [pic('2402-layers-of-the-gastrointestinal-tract.jpg', 1000, 570, "The four layers of the gut wall: mucosa, submucosa, muscularis and serosa.")],
  },
  'gastrointestinal-physiology-2': {
    "Carbohydrate: digestion": [pic('2427-carbon-digestion.jpg', 1000, 661, "Carbohydrates are broken down step by step to monosaccharides.")],
    "Protein: digestion": [pic('2429-digestion-of-proteins-physiology.jpg', 880, 1100, "Protein digestion starts in the stomach and is finished in the small intestine.")],
    "Lipid: absorption": [pic('2431-lipid-absorption.jpg', 640, 827, "Fat absorption: micelles carry the products to the cells, which pack them into chylomicrons for the lymph.")],
  },
  'gastrointestinal-physiology-3': {
    "Water": [pic('2430-digestive-secretions-absorption-of-watern.jpg', 636, 818, "Water entering the gut each day and where it is absorbed.")],
  },
  'gastrointestinal-physiology-4': {
    "Salivary glands": [pic('2408-salivary-glands.jpg', 586, 542, "The three pairs of major salivary glands and their ducts.")],
  },
  'gastrointestinal-physiology-5': {
    "The exocrine pancreas": [pic('2424-exocrine-and-endocrine-pancreas.jpg', 637, 827, "The pancreas and its duct, which joins the bile duct to empty into the duodenum.")],
  },
  'gastrointestinal-physiology-6': {
    "Three phases of gastric secretion": [pic('2416-three-phases-gastric-secretion.jpg', 796, 1100, "The cephalic, gastric and intestinal phases of gastric secretion.")],
  },
  'gastrointestinal-physiology-7': {
    "Peristalsis and segmentation": [pic('2404-peristalsisn.jpg', 542, 405, "Peristalsis: waves of contraction push the food along.")],
    "Swallowing": [pic('2413-deglutitionn.jpg', 1000, 565, "Swallowing: a voluntary phase, then the pharyngeal and oesophageal phases.")],
    "The stomach": [pic('2414-stomach.jpg', 1000, 660, "The regions and muscle layers of the stomach.")],
  },
  'gastrointestinal-physiology-8': {
    "The large intestine": [pic('2420-large-intestine.jpg', 633, 427, "The large intestine: caecum, colon, rectum and anal canal.")],
  },
  'gastrointestinal-physiology-9': {
    "The gallbladder": [pic('2425-gallbladder.jpg', 787, 641, "The gallbladder stores and concentrates bile and empties it into the duodenum.")],
  },
  'renal-physiology-1': {
    "Gross structure": [pic('2610-the-kidney.jpg', 1000, 572, "A kidney cut open: cortex, medullary pyramids, calyces and pelvis.")],
    "The vascular component": [pic('2611-blood-flow-in-the-nephron.jpg', 843, 1100, "The nephron’s two capillary beds: the glomerulus and the peritubular capillaries, linked by the efferent arteriole.")],
  },
  'renal-physiology-2': {
    "Net filtration pressure": [pic('2617-net-filtration-pressuren.jpg', 1000, 1034, "Net filtration pressure: the hydrostatic and osmotic pressures across the glomerulus.")],
  },
  'renal-physiology-3': {
    "Segment by segment": [pic('2618-nephron-secretion-reabsorption.jpg', 577, 1100, "What each part of the nephron reabsorbs and secretes.")],
    "Sodium": [pic('2619-substances-reabsorbed-and-secreted-by-the-pct.jpg', 1000, 717, "Transport in the proximal tubule cell, driven by the Na⁺/K⁺-ATPase.")],
  },
  'renal-physiology-4': {
    "The countercurrent multiplier": [pic('2621-loop-of-henle-countercurrent-multiplier-system.jpg', 1000, 899, "The countercurrent multiplier in the loop of Henle.")],
    "ADH": [pic('2709-adh.jpg', 795, 644, "ADH from the posterior pituitary makes the kidneys keep water.")],
  },
  'renal-physiology-6': {
    "Nerve supply": [pic('2604-nerves-innervating-the-urinary-systemn.jpg', 1000, 728, "The nerves to the bladder and urethra.")],
  },
  'renal-physiology-7': {
    "pH and acids": [pic('2713-ph-scale-01.jpg', 642, 1100, "The pH scale with familiar substances.")],
    "The lungs": [pic('2714-respiratory-regulation-of-blood.jpg', 495, 903, "The lungs adjust blood pH by changing how much CO₂ they remove.")],
    "The kidneys": [pic('2715-conservation-of-bicarbonate-in-kidney-01.jpg', 1000, 588, "How the tubule recovers bicarbonate.")],
  },
  'reproductive-physiology-1': {
    "The testis": [pic('figure-28-01-03.jpg', 743, 686, "Inside the testis: seminiferous tubules lead to the epididymis.")],
  },
  'reproductive-physiology-2': {
    "The spermatozoon": [pic('figure-28-01-05.jpg', 727, 198, "A sperm cell: head, mid-piece (mitochondria) and tail.")],
  },
  'reproductive-physiology-3': {
    "Hormonal control": [pic('figure-28-01-07.jpg', 1000, 672, "The hypothalamus and pituitary control testosterone production and spermatogenesis.")],
  },
  'reproductive-physiology-5': {
    "The female reproductive system": [pic('figure-28-02-01.jpg', 555, 789, "The female reproductive organs in the pelvis.")],
    "Oogenesis": [pic('figure-28-02-03.jpg', 690, 578, "Oogenesis: unequal divisions give one ovum and polar bodies.")],
  },
  'reproductive-physiology-6': {
    "The uterine cycle": [pic('figure-28-02-07.jpg', 619, 1059, "Hormone levels, the ovarian cycle and the uterine cycle over 28 days.")],
    "The hypothalamic–pituitary–ovarian axis": [pic('figure-28-02-05.jpg', 829, 972, "The hypothalamus and pituitary regulate the ovarian cycle and ovulation.")],
  },
  'reproductive-physiology-9': {
    "Fertilisation": [pic('2901-sperm-fertilization.jpg', 1000, 690, "Fertilisation: sperm cross the corona radiata and zona pellucida before one fuses with the oocyte.")],
  },
  'reproductive-physiology-10': {
    "Endocrine factors in labour": [pic('2919-hormones-initiating-labor-02.jpg', 1000, 561, "The positive feedback loop of labour.")],
    "Mechanical factors and delivery": [pic('2920-stages-of-childbirth-02.jpg', 703, 1100, "The stages of childbirth.")],
  },
  'special-senses-1': {
    "The three coats": [pic('1413-structure-of-the-eye.jpg', 1000, 571, "The eye: its three coats, chambers and lens.")],
  },
  'special-senses-3': {
    "In the light": [pic('1415-retinal-isomers.jpg', 1000, 944, "Light changes retinal from its cis to its trans form — the first step of vision.")],
  },
  'special-senses-4': {
    "The optic pathway": [pic('1420-optical-fields.jpg', 1000, 1047, "The visual fields and the optic pathway: nasal fibres cross at the chiasm.")],
  },
  'special-senses-5': {
    "Colour vision": [pic('1416-color-sensitivity.jpg', 1000, 653, "The light each kind of cone (and rods) responds to best.")],
    "The pupil": [pic('1508-autonomic-control-of-pupil-size.jpg', 1000, 1030, "The pupillary light reflex and its autonomic control.")],
    "Eye movements": [pic('1412-extraocular-muscles.jpg', 1000, 385, "The extraocular muscles that move the eye.")],
  },
  'special-senses-6': {
    "Three parts of the ear": [pic('1404-the-structures-of-the-ear.jpg', 1000, 639, "The outer, middle and inner ear.")],
    "The cochlea": [pic('1406-cochlea.jpg', 1000, 483, "Inside the cochlea: scala vestibuli, scala media and scala tympani.")],
    "Transmission of sound": [pic('1405-sound-waves-and-the-ear.jpg', 1000, 743, "Sound vibrates the eardrum and ossicles, which push on the oval window.")],
  },
  'special-senses-7': {
    "Transduction": [pic('1407-the-hair-cell.jpg', 1000, 444, "A hair cell: bending its stereocilia opens ion channels.")],
    "Pitch": [pic('1408-frequency-coding-in-the-cochlea.jpg', 1000, 678, "High pitches peak near the base of the basilar membrane, low pitches near the apex.")],
  },
  'special-senses-8': {
    "Semicircular canals": [pic('1410-equilibrium-and-semicircular-canals.jpg', 1000, 493, "Turning the head moves the endolymph and bends the cupula in a semicircular canal.")],
    "Otolith organs": [pic('1409-maculae-and-equilibrium.jpg', 1000, 527, "The maculae of the utricle and saccule sense tilt and linear acceleration.")],
  },
  'blood-coagulation-and-fibrinolysis-2': {
    "Platelets": [pic('1908-platelet-development.jpg', 760, 1100, "Platelets are fragments of megakaryocytes.")],
  },
  'oxygen-carriers-3': {
    "Haemoglobin A": [pic('1904-hemoglobin.jpg', 1000, 505, "Haemoglobin: four globin chains, each holding a haem group.")],
  },
  'heme-metabolism-6': {
    "Where the haem comes from": [pic('1905-erythrocyte-life-cycle.jpg', 846, 1100, "The life cycle of a red cell, ending in its breakdown and the recycling of its haem and iron.")],
  },
  'hormones-endocrine-biochemistry-1': {
    "The endocrine glands": [pic('1801-the-endocrine-system.jpg', 1000, 901, "The endocrine glands of the body.")],
  },
  'hormones-endocrine-biochemistry-2': {
    "cAMP as second messenger": [pic('1804-binding-of-water-soluble-hormones.jpg', 965, 731, "A water-soluble hormone binds a surface receptor and acts through a second messenger (cAMP).")],
  },
  'hormones-endocrine-biochemistry-3': {
    "How steroid hormones act": [pic('1803-binding-of-lipid-soluble-hormones.jpg', 937, 621, "A steroid hormone enters the cell and binds a receptor that switches genes on.")],
  },
  'amino-acid-metabolism-3': {
    "Digestion and the amino acid pool": [pic('2517-protein-digesting-enzymesn.jpg', 1000, 796, "Protein-digesting enzymes of the stomach and small intestine.")],
  },
  'amino-acid-metabolism-5': {
    "Five steps in two compartments": [pic('2518-urea-cycle.jpg', 801, 1100, "The urea cycle turns toxic ammonia into urea.")],
  },
  'fatty-acid-biosynthesis-2': {
    "An anabolic pathway of the fed state": [pic('2516-lipid-metabolism.jpg', 1000, 1020, "The main pathways of lipid metabolism.")],
  },
  'fatty-acid-biosynthesis-6': {
    "β-Oxidation in four reactions": [pic('2513-the-breakdown-of-fatty-acids.jpg', 626, 1100, "β-oxidation breaks fatty acids into acetyl-CoA.")],
  },
  'nucleic-acids-5': {
    "The double helix": [pic('0322-dna-nucleotides.jpg', 817, 822, "The DNA double helix: two complementary strands joined by base pairs.")],
    "Forms, supercoiling and chromatin": [pic('0321-dna-macrostructure.jpg', 743, 584, "DNA wraps around histones and folds into chromatin and chromosomes.")],
  },
  'nucleic-acids-6': {
    "Three rules": [pic('0323-dna-replication.jpg', 819, 506, "DNA replication: the enzymes at the replication fork.")],
  },
  'nucleic-acids-8': {
    "Kinds of RNA": [pic('0328-transcription-translation-summary.jpg', 548, 525, "From DNA to protein: transcription in the nucleus, translation in the cytoplasm.")],
    "Eukaryotic transcription": [pic('0326-splicing.jpg', 580, 667, "Splicing: introns are cut out of the pre-mRNA and the exons joined.")],
  },
  'nucleic-acids-9': {
    "On the ribosome": [pic('0327-translation.jpg', 581, 1100, "Translation: the ribosome reads the mRNA and tRNAs bring the amino acids.")],
    "The genetic code": [pic('0324-dna-translation-and-codons.jpg', 1000, 487, "Each three-base codon of mRNA specifies one amino acid.")],
  },
  'immunology-2': {
    "Adaptive immunity": [pic('2222-clonal-selection-of-b-cells.jpg', 1000, 916, "Clonal selection: the B cell that fits the antigen multiplies into plasma cells and memory cells.")],
  },
  'immunology-3': {
    "Acute inflammation": [pic('2213-inflammatory-process.jpg', 675, 743, "Acute inflammation: warmth, redness, pain and swelling, and phagocytes recruited to the site.")],
  },
  'immunology-4': {
    "Blood and haematopoiesis": [pic('2204-the-hematopoietic-system-of-the-bone-marrow-new.jpg', 1000, 812, "All blood and immune cells come from haematopoietic stem cells.")],
  },
  'immunology-7': {
    "The five classes": [pic('2221-five-classes-of-antibodies-new.jpg', 1000, 937, "The five classes of antibody.")],
  },
  'immunology-9': {
    "Three pathways": [pic('2212-complement-cascade-and-function.jpg', 1000, 1047, "The complement cascade and what it does.")],
  },
  'cardiovascular-system-gross-2': {
    "Fibrous and Serous Pericardium": [pic('2004-heart-wall.jpg', 1000, 695, "The layers of the pericardium and the heart wall.")],
  },
  'cardiovascular-system-gross-3': {
    "Shape, Size and Position": [pic('2001-heart-position-in-thoraxn.jpg', 1000, 907, "The heart in the mediastinum, between the lungs.")],
  },
  'cardiovascular-system-gross-4': {
    "The Cardiac Skeleton": [pic('2011-heart-valves.jpg', 1000, 798, "The four heart valves seen from above with the atria removed.")],
  },
  'cardiovascular-system-gross-6': {
    "The Vessel Wall and Arteries": [pic('2103-muscular-and-elastic-artery-arteriole.jpg', 1000, 255, "Elastic artery, muscular artery and arteriole compared.")],
    "Capillaries": [pic('2104-three-major-capillary-types.jpg', 1000, 377, "The three types of capillary: continuous, fenestrated and sinusoid.")],
  },
  'respiratory-system-gross-1': {
    "The Pharynx": [pic('2305-divisions-of-the-pharynx.jpg', 1000, 765, "The three parts of the pharynx: nasopharynx, oropharynx and laryngopharynx.")],
  },
  'respiratory-system-gross-2': {
    "Cartilages, Ligaments and Membranes": [pic('2306-the-larynx.jpg', 1000, 922, "The larynx and its cartilages.")],
  },
  'respiratory-system-gross-6': {
    "The Thoracic Cavity and the Pleura": [pic('2313-the-lung-pleurea.jpg', 1000, 753, "The visceral and parietal pleura and the pleural cavity between them.")],
  },
  'respiratory-system-gross-7': {
    "General Features, Surfaces and Borders": [pic('2312-gross-anatomy-of-the-lungs.jpg', 1000, 688, "The lungs, their lobes and the bronchial tree.")],
  },
  'gastrointestinal-system-gross-4': {
    "Lymphatic Trunks, Cisterna Chyli and Ducts": [pic('2203-lymphatic-trunks-and-ducts-system.jpg', 870, 678, "The lymphatic trunks and ducts; the thoracic duct drains most of the body.")],
  },
  'gastrointestinal-system-gross-6': {
    "The Duodenum": [pic('2417-small-intestinen.jpg', 839, 552, "The three parts of the small intestine: duodenum, jejunum and ileum.")],
  },
  'gastrointestinal-system-gross-8': {
    "The Liver": [pic('2422-accessory-organs.jpg', 805, 1002, "The liver, gallbladder and pancreas and their ducts.")],
  },
  'urinary-system-gross-1': {
    "Position, Size and Surface Anatomy": [pic('2608-kidney-position-in-abdomen.jpg', 1000, 739, "The kidneys on the posterior abdominal wall, partly protected by the lower ribs.")],
  },
  'urinary-system-gross-2': {
    "Blood Supply and Variations": [pic('2612-blood-flow-in-the-kidneys.jpg', 1000, 802, "The blood vessels of the kidney.")],
  },
  'head-and-neck-8': {
    "Functional Components of Nerves": [pic('1320-the-cranial-nerves.jpg', 784, 491, "The roots of the cranial nerves on the underside of the brain.")],
  },
  'neuroanatomy-1': {
    "Lobes and Main Sulci": [pic('1305-cerebrumn.jpg', 1000, 466, "The cerebrum and its folded surface of gyri and sulci.")],
  },
  'neuroanatomy-2': {
    "Functional Areas of the Cortex": [pic('1307-brodmann-areas-f2ed.jpg', 1000, 588, "Brodmann’s map of the cerebral cortex.")],
  },
  'neuroanatomy-3': {
    "The Diencephalon": [pic('1310-diencephalon.jpg', 869, 689, "The diencephalon: thalamus and hypothalamus around the third ventricle.")],
  },
  'neuroanatomy-5': {
    "Arteries of the Brain and the Circle of Willis": [pic('1314-circle-of-willisn.jpg', 546, 920, "The arteries at the base of the brain and the circle of Willis.")],
  },
  'neuroanatomy-6': {
    "The Meninges and the Layers of the Dura": [pic('1316-meningeal-layersn.jpg', 949, 515, "The meninges: dura, arachnoid and pia mater.")],
  },
  'neuroanatomy-7': {
    "The Major Sinuses": [pic('1315-brain-sinuses.jpg', 1000, 758, "The dural venous sinuses draining to the internal jugular veins.")],
  },
};

/** The pictures for one reading section of a lesson (none for most). */
/** A section's pictures, each with its note and, given the section's number (1, 2, …), its figure number. */
export function illustrationsFor(lessonId: string, sectionTitle: string, sectionNumber?: number): Illustration[] {
  return (ILLUSTRATIONS[lessonId]?.[sectionTitle] ?? []).map((item, index) => ({
    ...item,
    note: ILLUSTRATION_NOTES[item.src.split('/').pop() ?? ''],
    ...(sectionNumber ? { label: `Figure ${sectionNumber}.${index + 1}` } : {}),
  }));
}
