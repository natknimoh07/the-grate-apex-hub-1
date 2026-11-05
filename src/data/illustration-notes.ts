// "What to notice" under each reading picture (owner, 2026-11-02: "give some insights,
// like how textbooks bring figure 4.4 (a) and (b), then say something about it").
// Picture file name (public/images/openstax/) → a short note in our own words, written
// after looking at each picture. Panels are named (a), (b)… where the picture has them.
// The figure number ("Figure 3.1": section 3, first picture) is added where it is shown.
// tests/illustrations.test.mjs checks every picture has a note.

export const ILLUSTRATION_NOTES: Record<string, string> = {
  '403-epithelial-tissue.jpg':
    'Read the grid by rows (cell shape: squamous, cuboidal, columnar) and columns (one layer or several). The bottom-right panel is the one for the airways: pseudostratified columnar epithelium. Its nuclei sit at different heights so it looks layered, yet every cell touches the basement membrane, and the tall cells carry cilia on top.',
  // Cardiovascular physiology
  '2018-conduction-system-of-heart.jpg':
    'Follow the yellow pathway: the impulse starts at the SA node in the right atrium, spreads across both atria (Bachman’s bundle to the left atrium), funnels through the AV node, then runs down the bundle of His and the bundle branches in the septum before fanning out as Purkinje fibres in the ventricle walls.',
  '2027-phases-of-the-cardiac-cycle.jpg':
    'Read the circle clockwise from “Start”. The darker green half is ventricular systole (isovolumic contraction, then ejection); the lighter half is ventricular diastole (isovolumic relaxation, then filling, topped up by atrial contraction). The small ECGs show which wave starts each phase: P before atrial contraction, QRS before ventricular contraction, T before relaxation.',
  '2110-pulse-sites.jpg':
    'Each dot is where an artery runs close to the skin over something firm, so it can be pressed and felt: temporal, facial, carotid, brachial, radial, femoral, popliteal, posterior tibial and dorsalis pedis.',
  '2029-cardiac-cycle-vs-heart-sounds.jpg':
    'Line the sounds up with the pressure curves: the first sound (“lub”) comes as ventricular pressure rises above atrial pressure and the AV valves close; the second (“dub”) comes as ventricular pressure falls below aortic pressure and the semilunar valves close — the small notch on the aortic curve. Between the two, the ventricle and aorta curves run together: that is ejection.',
  '2031-factors-in-cardiac-output.jpg':
    'Two columns feed one equation. The left lists what sets heart rate (autonomic nerves, hormones, fitness, age); the right lists what sets stroke volume, which is end-diastolic minus end-systolic volume. Their product is cardiac output.',
  '2035-factors-in-stroke-volume.jpg':
    'Read across the three columns: more preload raises stroke volume by filling the ventricle more; more contractility raises it by emptying the ventricle more; more afterload lowers it, because the ventricle empties less against the higher resistance. The bottom row lists what lowers each one.',
  '2109-systemic-blood-pressure.jpg':
    'The red zig-zag is the pulse in each part of the arterial tree: the gap between systolic and diastolic pressure (pulse pressure) stays wide in the large arteries, then shrinks and disappears in the arterioles, where pressure drops most steeply. From the capillaries to the venae cavae the pressure is low and steady.',
  '2112-vessel-blood-pressure-relationships.jpg':
    '(a) Each vessel is narrowest at the capillaries; (b) yet their total cross-sectional area is by far the largest, because there are so many of them. (c) Pressure falls all the way along. (d) Velocity is the mirror image of (b): blood moves slowest in the capillaries, which gives time for exchange.',
  '2108-capillary-exchangen.jpg':
    'The three boxes give the net filtration pressure at each point: +10 mm Hg at the arterial end (fluid out), 0 in the middle, −7 mm Hg at the venous end (fluid back in). Blood colloid osmotic pressure stays at 25 mm Hg throughout; only the capillary hydrostatic pressure falls (35 → 18 mm Hg).',
  '2202-lymphatic-capillaries.jpg':
    'On the left, green lymphatic capillaries weave among the blood capillaries. The enlargement on the right shows why fluid gets in but not back out: overlapping endothelial cells act as one-way “flaps”, and valves further along stop backflow.',
  '2114-skeletal-muscle-vein-pump.jpg':
    'Left: with the muscles relaxed, the valves are closed. Right: contracting muscles squeeze the vein, the valve above opens and blood is pushed up towards the heart, while the valve below stays shut so it cannot fall back.',
  '2116-baroreceptor-reflex-flow-art.jpg':
    'Two mirror-image rows. Top: high pressure → more baroreceptor firing → cardioinhibitory centre up, accelerator and vasomotor centres down → lower cardiac output and vasodilation → pressure falls. Bottom: the reverse. Both end in the same box, homeostasis restored.',
  '2118-blood-volume-loss-and-homeostasis.jpg':
    'Two arms answer a fall in blood volume: the endocrine arm (ADH, angiotensin II, aldosterone and EPO) rebuilds the volume itself over hours to days, while the neural arm (baroreceptors, cardiovascular centres, sympathetic outflow) props up cardiac output and pressure within seconds.',
  '1314-circle-of-willisn.jpg':
    'The ring at the top is the arterial circle: anterior cerebral arteries joined by the anterior communicating artery, linked back to the posterior cerebral arteries by the posterior communicating arteries. Below it the two vertebral arteries join to form the basilar artery, which gives the pontine and cerebellar branches.',
  '1317-cfs-circulation.jpg':
    'Follow the arrows: CSF is made by the choroid plexus in the lateral ventricles, passes through the interventricular foramen to the third ventricle, down the cerebral aqueduct to the fourth ventricle, out through the median and lateral apertures into the subarachnoid space, and back into the blood of the superior sagittal sinus through the arachnoid granulations.',
  '2014ab-coronary-blood-vessels.jpg':
    'The anterior view (top) shows the right coronary artery in the groove on the right and the left coronary artery dividing into the anterior interventricular and circumflex arteries. The posterior view (bottom) shows the posterior interventricular artery and the coronary sinus collecting the cardiac veins.',
  '2021-ecg-placement-of-electrodes.jpg':
    'Ten electrodes make the 12 leads: four on the limbs (wrists and ankles) and six across the front of the chest, from beside the sternum round to the left side. Each lead looks at the heart’s electrical activity from a different angle.',
  '2022-electrocardiogram.jpg':
    'The top strip is a real trace on ECG paper (one large square is 5 mm; the box marks 1 second). The enlargement names the parts: P wave (atrial depolarisation), QRS complex (ventricular depolarisation), T wave (ventricular repolarisation). Intervals include a wave; segments are the flat lines between waves.',
  '2024-cardiac-arrhythmias.jpg':
    '(a) Second-degree block: some P waves are not followed by a QRS. (b) Atrial fibrillation: no clear P waves and irregular QRS complexes. (c) Ventricular tachycardia: fast, wide, abnormal QRS complexes. (d) Ventricular fibrillation: no organised activity at all. (e) Third-degree block: P waves and QRS complexes run independently of each other.',
  '2301-major-respiratory-organs.jpg':
    'Trace the air’s route: nasal cavity → pharynx → larynx → trachea → right and left main bronchi → lungs. The diaphragm below the lungs is the main muscle that drives breathing.',
  '2314-boyles-law.jpg':
    'Same number of gas particles in both containers. Pull the piston up (more volume) and the particles hit the walls less often, so pressure falls; push it down (less volume) and pressure rises. P × V stays constant — the rule the lungs use to move air.',
  '2316-inspiration-and-expiration.jpg':
    'Left, inspiration: the diaphragm contracts and flattens and the external intercostals lift the ribs, so the thoracic cavity grows and air flows in. Right, expiration: both relax, the cavity shrinks and air flows out.',
  '2317-spirometry-and-respiratory-volumes.jpg':
    '(a) The spirometer trace splits the lungs into four volumes: inspiratory reserve, tidal, expiratory reserve and residual. (b) Capacities are sums of volumes: inspiratory capacity, functional residual capacity, vital capacity and total lung capacity. Residual volume never leaves the lungs, so a spirometer cannot measure it.',
  '2322-fig-23-22-a.jpg':
    'One haemoglobin molecule: four folded protein chains (purple), each holding a haem group (the green discs) with an iron at its centre. Each haem can carry one O₂, so one haemoglobin carries up to four.',
  '2323-oxygen-hemoglobin-dissociation-a.jpg':
    'The S-shaped curve is flat at the top: in the lungs (PO₂ 100 mm Hg) haemoglobin is nearly 100% saturated, and small falls in PO₂ change little. In the tissues (PO₂ 40 mm Hg) it is about 75% saturated, on the steep part, so the difference — about 5 mL O₂ per 100 mL blood (right-hand scale) — is unloaded to the tissues.',
  '2324-oxygen-hemoglobin-dissociation-fetus-adult.jpg':
    'The fetal curve (teal) lies to the left of the adult curve (orange): fetal haemoglobin is 50% saturated at about 19 mm Hg, adult at about 27 mm Hg. At the same PO₂ in the placenta, fetal blood therefore takes O₂ from the mother’s blood.',
  '2325-carbon-dioxide-transport.jpg':
    'CO₂ from the tissue cells enters the blood three ways: (a) into the red cell, where carbonic anhydrase turns it into bicarbonate and H⁺ (the main route); (b) as bicarbonate carried in the plasma; (c) a small amount simply dissolved in the plasma.',
  '2318-partial-and-total-pressure-of-a-gas.jpg':
    'Oxygen alone pushes 159 mm Hg and nitrogen alone 597 mm Hg; mixed in one container they push 756 mm Hg — the sum. Each gas behaves as if the others were not there (Dalton’s law), so each has its own partial pressure.',
  '2319-fig-23-19-56b5.jpg':
    'In the lung capillary, everything runs towards the alveolus: CO₂ comes from three stores — dissolved in plasma, released from carbaminohaemoglobin, and remade from bicarbonate by carbonic anhydrase — while O₂ crosses the fused basement membranes and binds haemoglobin, which releases H⁺.',
  '2327-respiratory-centers-of-the-brain.jpg':
    'The medulla holds the dorsal respiratory group (drives the diaphragm and external intercostals for each breath) and the ventral respiratory group (recruits accessory and internal intercostal muscles for forced breathing). The pons holds the pneumotaxic and apneustic centres, which fine-tune the rhythm.',
  '1201-overview-of-nervous-system.jpg':
    'Yellow shows all nervous tissue. The brain and spinal cord form the central nervous system; everything outside them — nerves and ganglia — is the peripheral nervous system.',
  '1401-receptor-types.jpg':
    '(a) A free nerve ending: the bare dendrite of a sensory neuron is the receptor (pain, temperature). (b) An encapsulated ending: the dendrite is wrapped in a capsule that shapes what it responds to (touch, pressure). (c) A specialised receptor cell, such as a rod in the eye, which passes its signal on to a neuron.',
  '1417-ascending-pathways-of-spinal-cord.jpg':
    'Compare where each pathway crosses. Left, the dorsal column system (fine touch, proprioception): the first-order neuron climbs on the same side to the medulla, and the second-order neuron crosses there. Right, the spinothalamic tract (pain, temperature): the second-order neuron crosses straight away in the spinal cord. Both relay in the thalamus to the postcentral gyrus.',
  '1321-spinal-nerve-plexuses.jpg':
    'From the top: the cervical plexus (gives the phrenic nerve to the diaphragm), the brachial plexus (axillary, median, radial and ulnar nerves to the upper limb), then the lumbar plexus (femoral and obturator nerves) and the sacral plexus (the sciatic nerve, which splits into the tibial and common fibular nerves).',
  '1426-corticospinal-pathway.jpg':
    'Upper motor neurons (orange) leave the precentral gyrus, run through the cerebral peduncles and form the pyramids of the medulla. Most fibres cross at the decussation of the pyramids into the lateral corticospinal tract; the few that do not form the anterior corticospinal tract. They synapse on lower motor neurons (green) in the anterior horn, which go out to the muscles.',
  '1312-cerebellumn.jpg':
    'Top: the cerebellum sits behind the pons, its cut surface showing the branching white matter, the arbor vitae (“tree of life”). Bottom: the same region highlighted on a brain MRI, below the occipital lobe.',
  '1308-frontal-section-basal-nuclei.jpg':
    'In this frontal cut, the caudate hugs the lateral ventricle and the putamen lies further out; together they are the striatum. The globus pallidus sits just inside the putamen.',
  '1309-basal-nuclei-connections.jpg':
    'Colours give the transmitter: pink GABA (inhibits), teal glutamate (excites), green dopamine. The direct pathway (left) runs striatum → GPi/SNr → thalamus; the indirect pathway (right) adds GPe and the subthalamic nucleus (STN). Dopamine from the SNc acts on the striatum, and the thalamus sends the result back to the cortex.',
  '1306-lobes-of-cerebral-cortexn.jpg':
    'The landmarks divide the lobes: the central sulcus separates frontal (with the precentral gyrus, motor) from parietal (with the postcentral gyrus, sensory); the lateral sulcus separates temporal below; the parieto-occipital sulcus marks off the occipital lobe at the back.',
  '1311-brain-stem.jpg':
    'Cut down the middle, the brainstem shows its three parts from top to bottom: midbrain, the bulging pons, then the medulla, which continues as the spinal cord.',
  '1802-examples-of-amine-peptide-protein-and-steroid-hormone-structure.jpg':
    'Four classes by size and origin: amines are single modified amino acids (noradrenaline); peptides are short chains (oxytocin, nine amino acids); proteins are long folded chains (growth hormone); steroids are built from cholesterol and share its four rings (testosterone, progesterone).',
  '1805-negative-feedback-loop.jpg':
    'Read the numbers: (1) the hypothalamus senses low glucocorticoid in the blood; (2) it releases CRH, which leads to ACTH and then glucocorticoid release from the adrenal; (3) blood levels rise; (4) the hypothalamus senses normal levels and stops releasing CRH (the red cross) — negative feedback.',
  '1806-the-hypothalamus-pituitary-complex.jpg':
    'The hypothalamus (teal) lies under the thalamus; the infundibulum (orange stalk) hangs the pituitary from it. The pituitary has two parts: the anterior lobe (green) at the front and the posterior lobe (purple) behind.',
  '1807-the-posterior-pituitary-complex.jpg':
    'The posterior pituitary makes no hormones itself: neurosecretory cells in the paraventricular nucleus (oxytocin) and supraoptic nucleus (ADH) send their axons down the infundibulum, and release the hormones into the capillaries of the posterior lobe.',
  '2710-aquaporins-01.jpg':
    'Top cell: without ADH, most aquaporins wait in storage vesicles, so little water crosses. Bottom cell: with ADH the vesicles fuse with the membrane facing the tubule, inserting aquaporin pores, and water flows out of the tubule into the interstitial fluid and blood.',
  '1810-major-pituitary-hormones.jpg':
    'Top: the posterior pituitary only stores and releases ADH and oxytocin, made in the hypothalamus. Bottom: each anterior pituitary hormone has its own releasing hormone from the hypothalamus — GnRH → LH and FSH, TRH → TSH, PRH → prolactin, GHRH → GH, CRH → ACTH — and its own target organ.',
  '1809-hormonal-regulation-of-growth.jpg':
    '(1) GHRH makes the anterior pituitary release GH. (2) GH has three kinds of effect: glucose-sparing (fat broken down for fuel), growth (more amino acid uptake and cell division in bone, muscle and other tissues) and diabetogenic (the liver releases glucose). The liver also releases IGF-1. (3) High IGF-1 makes the hypothalamus release GHIH, which stops GH.',
  '1813-a-classic-negative-feedback-loop.jpg':
    '(1) When T₃/T₄ or metabolic rate is low, the hypothalamus releases TRH and the pituitary TSH. (2) TSH makes the thyroid follicle cells release T₃ and T₄. (3) These raise metabolic rate and body temperature. (4) High T₃ and T₄ switch off TRH and TSH — the minus sign on the loop.',
  '2626-renin-aldosterone-angiotensin.jpg':
    'Follow the red arrow: the macula densa senses low flow or low Na⁺ and the juxtaglomerular cells release renin; renin turns the liver’s angiotensinogen into angiotensin I; ACE in the lungs makes angiotensin II, which constricts vessels widely and makes the adrenal cortex release aldosterone. Aldosterone brings Na⁺ (and with it water) back in the distal tubule and collecting duct.',
  '1822-the-homostatic-regulation-of-blood-glucose-levels.jpg':
    'Start at the centre meter (70–110 mg/dL). High glucose (top left) → beta cells release insulin → cells take up glucose and the liver stores it as glycogen → level falls. Low glucose (bottom left) → alpha cells release glucagon → the liver breaks down glycogen and makes new glucose → level rises.',
  '614-synthesis-of-vitamin-d.jpg':
    'Vitamin D comes from two places — food, and skin exposed to sunlight — and needs two steps to become active: the liver adds one hydroxyl group (calcidiol, the form measured in blood), the kidney adds a second (calcitriol, the active hormone).',
  '1817-the-role-of-parathyroid-hormone-in-maintaining-blood-calcium-homeostasis.jpg':
    '(1–2) Low blood calcium makes the parathyroid chief cells release PTH. (3a) PTH frees calcium from bone, (3b) makes the kidney keep calcium and make calcitriol, and (3c) calcitriol makes the gut absorb more. (4) Calcium rises. (5–6) High calcium makes the thyroid release calcitonin, which moves calcium back into bone.',
  '2401-components-of-the-digestive-system.jpg':
    'The tube runs mouth → pharynx → oesophagus → stomach → small intestine (duodenum, jejunum, ileum) → large intestine (caecum and appendix, ascending, transverse, descending and sigmoid colon, rectum) → anus. The accessory organs — salivary glands, liver, gallbladder and pancreas — sit outside the tube and pour secretions into it.',
  '2402-layers-of-the-gastrointestinal-tract.jpg':
    'From the lumen outwards: mucosa (epithelium, lamina propria, muscularis mucosae), submucosa (with the submucosal or Meissner’s plexus), muscularis (inner circular and outer longitudinal muscle, with the myenteric plexus between them), and serosa. The two nerve plexuses together form the enteric nervous system.',
  '2427-carbon-digestion.jpg':
    'Salivary (and pancreatic) amylase break starch and glycogen into limit dextrins and disaccharides. Brush-border enzymes finish the job: α-dextrinase gives glucose; maltase gives two glucose; sucrase gives glucose + fructose; lactase gives glucose + galactose. Only monosaccharides are absorbed.',
  '2429-digestion-of-proteins-physiology.jpg':
    'Protein digestion starts in the stomach (pepsin and hydrochloric acid), continues with pancreatic enzymes in the small intestine, and is finished by brush-border enzymes. Amino acids are absorbed into the blood and go first to the liver.',
  '2431-lipid-absorption.jpg':
    'Top to bottom: bile salts emulsify fat and form micelles; fatty acids and monoglycerides leave the micelles and enter the cell; inside, they are rebuilt into triglycerides and packed with protein in the Golgi as chylomicrons; chylomicrons leave the cell into a lacteal (lymph), not the blood capillary.',
  '2430-digestive-secretions-absorption-of-watern.jpg':
    'About 9 L a day enters the gut — 2 L from food and drink, the rest from secretions (saliva, gastric juice, bile, pancreatic and intestinal juice). The small intestine reabsorbs most of it (about 7.8 L), the colon most of the rest (about 1.25 L), leaving roughly 150 mL in the faeces.',
  '2408-salivary-glands.jpg':
    'Three pairs: the parotid, the largest, in front of the ear, opening by the parotid duct beside the upper molars; the submandibular, under the jaw, with its duct under the tongue; the sublingual, the smallest, under the tongue with several small ducts.',
  '2424-exocrine-and-endocrine-pancreas.jpg':
    'The pancreas is two glands in one. Most of it is exocrine: acinar cells make digestive enzymes that drain through the pancreatic duct (joined by the common bile duct) into the duodenum. Scattered among them, the islets (blue) are endocrine and release hormones into the blood.',
  '2416-three-phases-gastric-secretion.jpg':
    'Three phases, each with a stimulating (warm-coloured) and inhibiting (teal) side. Cephalic: sight, smell and thought of food act through the vagus. Gastric: stretch and food chemicals trigger reflexes and gastrin. Intestinal: at first intestinal gastrin stimulates, but mostly the duodenum slows the stomach through the enterogastric reflex and hormones such as secretin and CCK.',
  '2404-peristalsisn.jpg':
    'Read left to right: a ring of contraction forms just behind the bolus and moves along the tube, squeezing the bolus forward while the muscle ahead of it relaxes.',
  '2413-deglutitionn.jpg':
    'Swallowing as a wave down the pharynx: the superior constrictor squeezes first, then the middle and inferior constrictors, and finally the oesophageal muscle takes over and carries the bolus down.',
  '2414-stomach.jpg':
    'Regions: cardia at the oesophagus, the fundus bulging above, the body, then the pyloric antrum and canal ending at the pyloric sphincter. The cut-away wall shows three muscle layers (longitudinal, circular and the extra oblique layer, unique to the stomach) and the folds of mucosa, the rugae.',
  '2420-large-intestine.jpg':
    'Trace the frame around the small intestine: caecum (with the appendix) where the ileum joins, up the ascending colon, across the transverse colon between the right (hepatic) and left (splenic) flexures, down the descending colon, through the S-shaped sigmoid colon to the rectum and anal canal.',
  '2425-gallbladder.jpg':
    'Bile from the right and left hepatic ducts joins in the common hepatic duct. The cystic duct leads to and from the gallbladder (neck, body, fundus), where bile is stored and concentrated; the cystic and common hepatic ducts join as the common bile duct, which runs to the duodenum.',
  '2610-the-kidney.jpg':
    'Outer cortex, inner medulla made of pyramids separated by renal columns. Urine drips from each papilla into a minor calyx, then a major calyx, the renal pelvis and the ureter. The renal artery, vein and nerve enter at the hilum; the arteries branch into interlobar, arcuate and cortical vessels.',
  '2611-blood-flow-in-the-nephron.jpg':
    'Blood reaches the glomerulus by the afferent arteriole and leaves by the efferent arteriole — still an arteriole, not a vein — which then forms the peritubular capillaries around the tubules before draining to the venule and interlobular vein. The tubule runs: glomerular capsule → proximal convoluted tubule → loop → distal convoluted tubule → collecting duct.',
  '2617-net-filtration-pressuren.jpg':
    'Three pressures act across the glomerulus: blood hydrostatic pressure (55 mm Hg) pushes fluid out; blood colloid osmotic pressure (30 mm Hg) and capsular hydrostatic pressure (15 mm Hg) push back. 55 − 30 − 15 = a net 10 mm Hg outwards, which drives filtration.',
  '2618-nephron-secretion-reabsorption.jpg':
    'Purple boxes are reabsorbed (tubule → blood); tan boxes are secreted (blood → tubule). Most reabsorption happens in the proximal tubule (glucose, amino acids, most Na⁺ and water); the descending limb loses water, the ascending limb loses salt; the collecting duct reabsorbs water and urea. H⁺, K⁺ and NH₄⁺ are secreted further along.',
  '2619-substances-reabsorbed-and-secreted-by-the-pct.jpg':
    'Almost everything here rides on Na⁺: glucose, amino acids, phosphate, Cl⁻ and Ca²⁺ enter the cell with Na⁺, and H⁺ is swapped out for Na⁺. The Na⁺/K⁺ ATPase on the blood side (top right) keeps cell Na⁺ low, which powers all of it. Water follows.',
  '2621-loop-of-henle-countercurrent-multiplier-system.jpg':
    'The numbers are the interstitial osmolality, rising from 300 at the cortex to 1200 mOsm/kg at the tip. The descending limb lets water out but not salt; the ascending limb pumps Na⁺ and Cl⁻ out but keeps water in, so fluid leaving the loop is dilute (100). Pumping salt out of the ascending limb is what builds the gradient.',
  '2709-adh.jpg':
    'ADH is made in the hypothalamus and released by the posterior pituitary. Its two main targets: the kidney, where it increases water reabsorption, and the arterioles, which it constricts (hence its other name, vasopressin).',
  '2604-nerves-innervating-the-urinary-systemn.jpg':
    'In this side view of a female pelvis, the bladder sits behind the pubic bone. The pudendal nerve (yellow, from the sacral spinal cord) supplies the external sphincter — the voluntary control of urination.',
  '2713-ph-scale-01.jpg':
    'Each step on the pH scale is a tenfold change in H⁺: stomach acid near 1–2 is very acidic, “pure” water is neutral at 7, and bleach is strongly basic near 13. Blood sits in a narrow band just above 7 (7.35–7.45).',
  '2714-respiratory-regulation-of-blood.jpg':
    'Mirror-image columns. Acidosis (low pH) → brain and arterial receptors → faster breathing → less CO₂ and carbonic acid in the blood → pH rises. Alkalosis → slower breathing → more CO₂ → pH falls. The lungs correct pH within minutes by changing CO₂.',
  '2715-conservation-of-bicarbonate-in-kidney-01.jpg':
    'Filtered HCO₃⁻ cannot cross into the cell directly. Instead (1) the cell secretes H⁺ in exchange for Na⁺; in the lumen H⁺ + HCO₃⁻ become CO₂ + H₂O (carbonic anhydrase); (2) CO₂ enters the cell and is rebuilt into H⁺ + HCO₃⁻; the HCO₃⁻ goes to the blood. Net effect: the bicarbonate is saved.',
  'figure-28-01-03.jpg':
    'Inside its coverings (tunica vaginalis, tunica albuginea), the testis is divided by septa into lobules packed with coiled seminiferous tubules, where sperm are made. They drain through straight tubules and the rete testis to the efferent ductules and the epididymis (head, body, tail), then the ductus deferens in the spermatic cord.',
  'figure-28-01-05.jpg':
    'A sperm in three parts: the head (nucleus with the DNA, capped by the acrosome, whose enzymes let it penetrate the egg), the mid-piece (packed with mitochondria for energy) and the tail (flagellum) that drives it.',
  'figure-28-01-07.jpg':
    '(1) GnRH from the hypothalamus releases FSH and LH. (2) LH acts on the Leydig cells, which release testosterone; FSH acts on the Sertoli cells, which release androgen-binding protein to keep testosterone high in the tubules. (3) Testosterone feeds back on the hypothalamus and pituitary, and inhibin from the Sertoli cells holds back FSH.',
  'figure-28-02-01.jpg':
    '(a) From the side: the uterus tilts forward over the bladder, the vagina runs back towards the rectum, and the cervix projects into the top of the vagina. (b) From the front: the uterine tubes reach out from the uterus, their fimbriae open next to each ovary, which is held by the ovarian ligament within the broad ligament.',
  'figure-28-02-03.jpg':
    'The traffic lights mark the pauses. Before birth, oogonia divide by mitosis and primary oocytes start meiosis I, then stop in prophase I for years. After puberty, one resumes each cycle, finishing meiosis I to give a secondary oocyte and a polar body; it stops again at metaphase II and completes meiosis II only if a sperm enters.',
  'figure-28-02-07.jpg':
    'Four timelines over the same 28 days. Ovary: follicles grow, one is selected, ovulation on day 14, then the corpus luteum. Uterus: menses, proliferative phase, secretory phase. Pituitary: the LH (and FSH) surge just before day 14. Ovarian hormones: oestrogen peaks before ovulation; progesterone rises after it.',
  'figure-28-02-05.jpg':
    '(1) Follicular phase: FSH and LH make follicles grow; their oestradiol mostly inhibits the hypothalamus and pituitary. (2) Ovulation: the dominant follicle’s high oestradiol switches to positive feedback, causing the LH surge that triggers ovulation. (3) Luteal phase: the corpus luteum secretes progesterone, which inhibits GnRH, FSH and LH and maintains the endometrium.',
  '2901-sperm-fertilization.jpg':
    '(1) Hundreds of sperm push through the corona radiata. (2) Touching the zona pellucida sets off the acrosome reaction, whose enzymes digest a path. (3) One sperm reaches the oocyte’s membrane; the membranes fuse and the sperm nucleus enters the oocyte.',
  '2919-hormones-initiating-labor-02.jpg':
    'hCG (green) peaks around weeks 8–12 and then falls, once the placenta takes over. Oestrogens (orange) and progesterone (blue) climb throughout pregnancy; late in pregnancy oestrogens keep rising as progesterone levels off, which helps prepare the uterus for labour.',
  '2920-stages-of-childbirth-02.jpg':
    'Stage 1, dilation: the cervix opens to about 10 cm. Stage 2, birth: the head presents and rotates, the anterior then posterior shoulder are delivered, then the rest of the body with the cord. Stage 3, afterbirth: the placenta detaches and is delivered.',
  '1413-structure-of-the-eye.jpg':
    'Three layers wrap the eye: the sclera (white, continuous with the cornea at the front), the choroid (blood vessels) and the retina (light-sensitive), with the fovea centralis for sharp vision and the optic disc, the blind spot, where the optic nerve leaves. The lens and ciliary body divide the aqueous humour in front from the vitreous body behind.',
  '1415-retinal-isomers.jpg':
    'In the rod’s discs, rhodopsin is opsin plus retinal. A photon straightens (a) 11-cis-retinal into (b) all-trans-retinal; the retinal then comes off the opsin (bleaching). An enzyme, using ATP, turns it back to 11-cis so rhodopsin can re-form — which is why it takes time to adapt to the dark.',
  '1420-optical-fields.jpg':
    'Purple is the right visual field, green the left. At the optic chiasm, fibres from the inner (nasal) half of each retina cross; fibres from the outer half do not. So everything you see on your left ends up in the right visual cortex, via the optic tract and the lateral geniculate nucleus.',
  '1416-color-sensitivity.jpg':
    'Each curve is one kind of photoreceptor: blue (short-wavelength) cones peak near 420 nm, rods near 498 nm, green (medium) cones near 534 nm and red (long) cones near 564 nm. The curves overlap, so any colour is read from the ratio of the three cone signals.',
  '1508-autonomic-control-of-pupil-size.jpg':
    'Light on the retina is reported to the brain, which answers through two routes. Dim light: the sympathetic route, through the superior cervical ganglion, contracts the radial muscle and the pupil dilates. Bright light: the parasympathetic route, from the Edinger–Westphal nucleus through the ciliary ganglion, contracts the circular muscle and the pupil constricts.',
  '1412-extraocular-muscles.jpg':
    'Lateral view: four recti run from the common tendinous ring at the back of the orbit to the front of the eyeball; the superior oblique passes through the trochlea, a pulley, before it attaches. Anterior view: the red arrows show which way each muscle turns the eye.',
  '1404-the-structures-of-the-ear.jpg':
    'Three parts. External ear: auricle and ear canal up to the tympanic membrane. Middle ear: an air-filled cavity with the three ossicles (malleus, incus, stapes on the oval window) and the Eustachian tube to the throat. Inner ear: the cochlea for hearing and the vestibule for balance, with their nerves.',
  '1406-cochlea.jpg':
    'A cut through one turn of the cochlea shows three fluid tubes: the scala vestibuli above, the scala tympani below and the cochlear duct between them. The organ of Corti sits on the basilar membrane, its hair cells touching the tectorial membrane; the spiral ganglion carries the signal into the cochlear nerve.',
  '1405-sound-waves-and-the-ear.jpg':
    '(1) Sound is alternating high and low pressure. (2) It makes the tympanic membrane vibrate. (3) The ossicles amplify the vibration. (4) The stapes pushes on the oval window and sets up a wave in the cochlear fluid. (5) The wave bends the basilar membrane most at one place for each frequency, and the hair cells there respond.',
  '1407-the-hair-cell.jpg':
    'The enlargement from the organ of Corti: hair cells sit on the basilar membrane with their stereocilia, linked by tiny tethers, touching the tectorial membrane above. When the basilar membrane moves, the stereocilia bend, opening ion channels — that is the moment sound becomes a nerve signal.',
  '1408-frequency-coding-in-the-cochlea.jpg':
    'Uncoiled, the cochlea is a map of pitch. Near the oval window the basilar membrane is narrow and stiff and responds to high frequencies (around 20,000 Hz); towards the apex it is wider and floppier and responds to low ones (around 20 Hz). The orange wedge shows the fibres getting longer along the way.',
  '1410-equilibrium-and-semicircular-canals.jpg':
    'Left: head still, the cupula in the ampulla stands upright. Right: as the head turns, the fluid lags behind and bends the cupula the opposite way, bending the hair cells in it — the semicircular canals sense rotation.',
  '1409-maculae-and-equilibrium.jpg':
    'The utricle and saccule each hold a macula: hair cells under a jelly-like otolithic membrane weighted with crystals (otoliths). Head upright, the hair cells stand straight; head tilted, gravity drags the heavy membrane and bends them. The maculae sense head position and straight-line acceleration.',
  '1908-platelet-development.jpg':
    'Thrombopoietin, from the kidneys and liver, drives a myeloid stem cell through the megakaryoblast to a giant megakaryocyte, whose long extensions break up into platelets — fragments of cytoplasm, not whole cells.',
  '1904-hemoglobin.jpg':
    '(a) Haemoglobin has four chains — two α and two β — each wrapped round a haem group. (b) Haem is a flat ring of four linked pyrrole rings with an Fe²⁺ at its centre, where O₂ binds.',
  '1905-erythrocyte-life-cycle.jpg':
    'Follow the numbers: (1) red cells are made in the red marrow and (2) enter the blood as reticulocytes, living about 120 days; (3) old cells are eaten by macrophages in the spleen, liver and marrow; (4) globin is broken into amino acids for reuse; (5) haem is split: iron is carried by transferrin and reused or stored as ferritin, and the rest becomes biliverdin, then bilirubin, (6) which the liver puts into bile.',
  '1801-the-endocrine-system.jpg':
    'The main endocrine glands, head to pelvis: pineal and pituitary in the brain, thyroid with the parathyroids on its back, thymus, adrenals on the kidneys, the pancreas, and the gonads — ovaries or testes.',
  '1804-binding-of-water-soluble-hormones.jpg':
    'A water-soluble hormone cannot cross the membrane, so it works from outside: (1) it binds a membrane receptor, (2) which activates a G protein, (3) which activates adenylyl cyclase, (4) which makes cAMP, the second messenger; (5) cAMP activates protein kinases, (6) which phosphorylate proteins and change what the cell does.',
  '1803-binding-of-lipid-soluble-hormones.jpg':
    'A lipid-soluble hormone (such as a steroid) works from inside: (1) it diffuses through the membrane, (2) binds its receptor in the cytoplasm, (3) the receptor–hormone complex enters the nucleus and switches on genes, and (4) the new mRNA is translated into proteins that change the cell. Slower than the cAMP route, but longer-lasting.',
  '2517-protein-digesting-enzymesn.jpg':
    'Where the protein-digesting enzymes come from: the stomach (pepsin and HCl), the pancreas’s acinar cells (trypsin, chymotrypsin, elastase, and bicarbonate to neutralise acid) and the intestinal cells, which release the hormones secretin and CCK that call up the pancreatic juice.',
  '2518-urea-cycle.jpg':
    'The cycle spans two compartments. In the mitochondrion (circled), CO₂ and NH₄⁺ make carbamoyl phosphate, which joins ornithine to give citrulline. In the cytoplasm, citrulline takes a second nitrogen from aspartate (argininosuccinate), fumarate is released, and arginase splits arginine into urea and ornithine, which goes back to start again.',
  '2516-lipid-metabolism.jpg':
    'Fat is made from acetyl-CoA, which is built in the mitochondrion but needed in the cytoplasm. It leaves as citrate, is split back to acetyl-CoA and oxaloacetate, and acetyl-CoA is carboxylated to malonyl-CoA, the building block added two carbons at a time to make fatty acids. Fatty acids plus glycerol give glycerides; oxaloacetate returns as malate and pyruvate.',
  '2513-the-breakdown-of-fatty-acids.jpg':
    'Top to bottom: (1) the fatty acid is activated and linked to carnitine so it can cross into the mitochondrion; (2) inside, it is turned back into fatty acyl-CoA; (3) β-oxidation cuts off two carbons at a time as acetyl-CoA, producing FADH₂ and NADH, until the chain is used up. The acetyl-CoA goes into the Krebs cycle.',
  '0322-dna-nucleotides.jpg':
    'Bottom: one nucleotide = a phosphate, a sugar and a base. Top: the two strands run in opposite directions (5′→3′ and 3′→5′), with sugar–phosphate backbones outside and bases paired inside: adenine with thymine (two hydrogen bonds), guanine with cytosine (three).',
  '0321-dna-macrostructure.jpg':
    'From small to large: the DNA double helix winds round histone proteins to form nucleosomes, like beads on a string; these coil into chromatin fibres, which are packed further into a chromosome when the cell divides.',
  '0323-dna-replication.jpg':
    'Helicase unzips the helix at the replication fork, and DNA polymerase builds a new strand on each original (template) strand. Polymerase can only build in one direction, so the leading strand is made continuously, towards the fork, while the lagging strand is made in short pieces away from it.',
  '0328-transcription-translation-summary.jpg':
    'The two steps of gene expression and where they happen: transcription copies DNA into mRNA inside the nucleus; the mRNA moves out, and translation on a ribosome in the cytoplasm turns it into a chain of amino acids.',
  '0326-splicing.jpg':
    'The first copy of a gene (pre-mRNA) contains exons, which code, and introns, which do not. The spliceosome loops out each intron and cuts it away, and joins the exons into the finished mRNA.',
  '0327-translation.jpg':
    'Top: the small ribosomal subunit sits on the mRNA at the start codon AUG; a tRNA with the matching anticodon (UAC) brings methionine. Middle: the next tRNA (AAA, phenylalanine) pairs with the next codon. Bottom: the amino acids are joined and the ribosome moves along one codon at a time, lengthening the polypeptide.',
  '0324-dna-translation-and-codons.jpg':
    'The template DNA strand is copied into RNA with matching bases (U in place of T). The RNA is then read three bases at a time; each triplet, a codon, stands for one amino acid — AUG is methionine, the usual start.',
  '2222-clonal-selection-of-b-cells.jpg':
    'Primary response (left): only the B cells whose receptors fit the antigen are activated; they divide into clones of plasma cells, which pour out antibody, and memory B cells. Secondary response (right): the memory cells respond to the same antigen faster and in larger numbers.',
  '2213-inflammatory-process.jpg':
    '(1) Injured tissue and pathogens make mast cells release histamine. (2) Histamine widens the vessels and makes them leaky, so blood and phagocytes pour into the area — which is why it swells, reddens, warms and hurts.',
  '2204-the-hematopoietic-system-of-the-bone-marrow-new.jpg':
    'One multipotent stem cell gives rise to every blood cell. The myeloid line makes platelets (via megakaryocytes), red cells, the granulocytes (basophils, neutrophils, eosinophils) and monocytes, which become macrophages. The lymphoid line makes natural killer cells and T and B lymphocytes; B cells become plasma cells.',
  '2221-five-classes-of-antibodies-new.jpg':
    'Read down each column. IgM is a five-unit pentamer, the first made in a primary response. IgG, a monomer, is the main antibody in blood (about 80%) and the only one that crosses the placenta. IgA is a dimer secreted in mucus, tears and milk. IgE binds mast cells (allergy, parasites). IgD is the B-cell receptor.',
  '2212-complement-cascade-and-function.jpg':
    'A cascade: C1 binds an antibody on the pathogen; C2 and C4 split and form C3 convertase; C3 splits — C3a calls in phagocytes and C3b coats the pathogen and helps form C5 convertase; C5b then joins C6–C9 to form the membrane attack complex, a pore that makes the pathogen burst.',
  '2004-heart-wall.jpg':
    'From inside out: endocardium lining the chambers, the thick myocardium (heart muscle), the epicardium (visceral layer of serous pericardium), the pericardial cavity with its lubricating fluid, the parietal layer of serous pericardium and finally the tough fibrous pericardium.',
  '2001-heart-position-in-thoraxn.jpg':
    'The heart lies in the mediastinum between the two lungs, on the diaphragm, with its apex pointing down and to the left. The sagittal view (top right) shows its base at the level of the great vessels, behind the sternum and in front of the oesophagus and aorta.',
  '2011-heart-valves.jpg':
    'Seen from above with the atria removed: the tricuspid valve (right) and bicuspid or mitral valve (left) between atria and ventricles, and the aortic and pulmonary valves, each with three cusps, guarding the exits. All four lie close together in one plane.',
  '2103-muscular-and-elastic-artery-arteriole.jpg':
    'Same three layers, different balance. An elastic artery has a thick tunica media rich in elastic fibres to absorb each heartbeat; a muscular artery has more smooth muscle to control distribution; an arteriole has only a few layers of muscle, but these set resistance and blood pressure.',
  '2104-three-major-capillary-types.jpg':
    'Continuous capillaries have an unbroken lining with only small clefts between cells (most tissues). Fenestrated capillaries have pores through the cells (kidney, gut, endocrine glands). Sinusoids have large gaps and an incomplete basement membrane, so even cells can pass (liver, marrow, spleen).',
  '2305-divisions-of-the-pharynx.jpg':
    'Three regions by colour: the nasopharynx (green) behind the nasal cavity, above the soft palate — air only; the oropharynx (teal) behind the mouth; the laryngopharynx (purple) down to where the larynx and oesophagus split. The last two carry both air and food.',
  '2306-the-larynx.jpg':
    'Anterior view: the large thyroid cartilage (its laryngeal prominence is the Adam’s apple) sits above the ring-shaped cricoid cartilage, which joins the trachea; the epiglottis rises behind the hyoid. Right lateral view: inside, the vestibular folds lie above the vocal folds, which stretch between the thyroid and the arytenoid cartilages.',
  '2313-the-lung-pleurea.jpg':
    'Each lung sits in its own pleural sac. The enlargement shows the two layers: the visceral pleura stuck to the lung and the parietal pleura lining the chest wall, with a thin pleural cavity of fluid between them that lets the lung glide as the chest moves.',
  '2312-gross-anatomy-of-the-lungs.jpg':
    'The right lung has three lobes (superior, middle, inferior); the left has two, with a cardiac notch for the heart. The airway branches to match: each main bronchus gives one lobar (secondary) bronchus per lobe, which divide into segmental (tertiary) bronchi.',
  '2203-lymphatic-trunks-and-ducts-system.jpg':
    'Lymph returns to the blood at two points in the neck. The right lymphatic duct drains only the purple area — the right arm and right side of the head and chest — into the right subclavian vein. The thoracic duct, starting at the cisterna chyli, drains everything else (yellow) into the left subclavian vein.',
  '2417-small-intestinen.jpg':
    'Three parts by colour: the short C-shaped duodenum (purple) around the head of the pancreas, the jejunum (green) mostly in the upper left, and the ileum (pink), the longest part, in the lower abdomen, ending at the large intestine.',
  '2422-accessory-organs.jpg':
    'The accessory organs sit together in the upper abdomen: the liver (right, quadrate, left and caudate lobes) with the gallbladder beneath it, the pancreas behind the stomach, and the duct system — hepatic, cystic, common hepatic and common bile ducts, and the pancreatic duct — draining into the duodenum.',
  '2608-kidney-position-in-abdomen.jpg':
    'Seen from behind, the kidneys lie against the back wall at about T12 to L3, partly protected by the 11th and 12th ribs. The right kidney sits a little lower than the left because the liver is above it. The ureters run down beside the lumbar vertebrae.',
  '2612-blood-flow-in-the-kidneys.jpg':
    'Arteries in order: renal → segmental → interlobar (between the pyramids) → arcuate (along the base of the pyramids) → cortical radiate → afferent arteriole → glomerulus → efferent arteriole → peritubular capillaries. The veins then run back the same way, from cortical radiate to the renal vein.',
  '1320-the-cranial-nerves.jpg':
    'The underside of the brain shows the twelve cranial nerves in order from front to back: I olfactory and II optic at the front; III oculomotor and IV trochlear from the midbrain; V trigeminal, VI abducens, VII facial and VIII vestibulocochlear around the pons; IX glossopharyngeal, X vagus, XI accessory and XII hypoglossal from the medulla.',
  '1305-cerebrumn.jpg':
    'Lateral view: the cerebral cortex covers the cerebrum, and the dotted line marks the corpus callosum deep inside, linking the hemispheres. Anterior view: the longitudinal fissure separates the right and left hemispheres.',
  '1307-brodmann-areas-f2ed.jpg':
    'Brodmann numbered cortex regions by how their cells look. The coloured ones to know: area 4, primary motor cortex (in front of the central sulcus); areas 1, 2, 3, primary somatosensory cortex (behind it); 44–45, Broca’s area; 22, primary auditory cortex; 39–40, angular and supramarginal gyri; 17, primary visual cortex, on the medial surface at the back.',
  '1310-diencephalon.jpg':
    'Cut down the middle, the diencephalon sits in the centre of the brain: the thalamus (green) above, the relay to the cortex, and the hypothalamus (orange) below it, with the pituitary hanging from its underside.',
  '1316-meningeal-layersn.jpg':
    'From the skull inwards: bone, the two-layered dura mater (which splits to form the superior sagittal sinus), the subdural space, the arachnoid mater with its web of trabeculae across the subarachnoid space (filled with CSF), and the pia mater stuck to the brain. Arachnoid granulations push into the sinus to return CSF to the blood.',
  '1315-brain-sinuses.jpg':
    'Venous blood from the brain drains into sinuses within the dura: the superior and inferior sagittal sinuses run along the falx, the straight sinus receives the great cerebral vein, and they meet at the confluence of sinuses. From there the transverse and sigmoid sinuses carry blood to the internal jugular vein.',
};
