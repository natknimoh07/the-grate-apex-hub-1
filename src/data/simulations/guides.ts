// "Learn it first": a plain-language guide to every simulation (owner,
// 2026-10-31: "most people do not understand the physiology simulations —
// explain them to the learner and teach them").
//
//   idea   the physiology the simulation is about, built from the basics, in
//          our own words from the lecture facts each model lists at the top
//          of its file (data/simulations/<id>.ts). No new facts.
//   look   how to read the screen: what the picture shows and what to watch.
//
// Shown in the "Learn" tab of every simulation step, with the controls and
// number tiles explained and the experiments from guide-activities.ts.
// tests/simulation-guides.test.mjs checks every simulation has one.
import type { SimulationId } from '@/data/lesson-types';

export type SimulationGuide = { idea: string[]; look: string };

export const SIMULATION_GUIDES: Record<SimulationId, SimulationGuide> = {
  // ── Cardiovascular ────────────────────────────────────────────────
  'cardiac-cycle': {
    idea: [
      'One heartbeat is a cycle of filling (diastole) and emptying (systole). Valves open and close only because of pressure differences: blood always moves from higher to lower pressure, and a valve shuts when pressure behind it falls below the pressure in front.',
      'Most filling (about 70%) happens passively; the atria add the last 30% when they contract. When the heart beats faster, diastole is shortened much more than systole — so a very fast heart has less time to fill.',
    ],
    look: 'The graph plays one beat of the left heart. Follow the pressure lines (ventricle, aorta, atrium) together: each time two of them cross, a valve opens or closes. Use "Moment in the beat" to stop at any instant, and raise the heart rate to see diastole shrink.',
  },
  'sounds-jvp': {
    idea: [
      'Heart sounds are made by valves closing. S1 is the AV valves (mitral, tricuspid) closing at the start of systole; S2 is the aortic and pulmonary valves closing at its end. In inspiration more blood returns to the right heart, the pulmonary valve closes a little later, and S2 splits.',
      'A murmur is turbulent flow through a narrowed (stenosed) or leaking (incompetent) valve. Whether it is systolic or diastolic depends on when blood is being pushed through that valve. The jugular venous pulse (JVP) is the right atrium seen in the neck: its waves change in tricuspid incompetence and heart block.',
    ],
    look: 'Pick a valve lesion and read the "Murmur" and "Cause" tiles: is the murmur in systole or diastole? Change the breathing to see S2 split, and the neck-vein setting to see the JVP change.',
  },
  'pv-loop': {
    idea: [
      'Cardiac output is heart rate × stroke volume. Stroke volume depends on three things: preload (how full the ventricle is before it contracts — more stretch, stronger beat), afterload (the pressure it must push against — more afterload, less ejected) and contractility (how strongly it squeezes at any filling).',
      'The pressure–volume loop draws one beat: filling along the bottom, a vertical jump in pressure while all valves are shut, ejection across the top, then a vertical fall. The width of the loop is the stroke volume; its area is the work of one beat.',
    ],
    look: 'Watch the loop change shape as you move one control at a time: preload moves its right edge, afterload raises its top, contractility lets it reach further left. The number tiles turn the loop into cardiac output, ejection fraction and blood pressure.',
  },
  'vessel-flow': {
    idea: [
      'Flow through a vessel rises with the pressure difference along it and falls with resistance. Resistance depends on the fluid’s viscosity, the vessel’s length and — most of all — its radius: flow changes with the radius to the fourth power, so halving the radius cuts flow to one-sixteenth.',
      'Flow is normally smooth (laminar). When blood speeds up through a narrowing, or is thin and fast, it can become turbulent: noisy, inefficient flow — the basis of bruits and murmurs.',
    ],
    look: 'Move one control at a time and watch "Flow vs normal" and "Resistance vs normal". Start with the radius: a small change makes a huge difference. Then add a narrowed segment and check "Speed in narrowing" and "Flow pattern" for turbulence.',
  },
  'capillary-starling': {
    idea: [
      'Fluid moves across a capillary wall because of two kinds of force. Hydrostatic (blood) pressure pushes fluid out; oncotic pressure from plasma proteins pulls it back in. At the arterial end pushing wins and fluid filters out; at the venous end the blood pressure has fallen and most of it is drawn back.',
      'What is not reabsorbed returns as lymph. Oedema appears when filtration outruns reabsorption plus lymph drainage: high capillary pressure (heart failure), low plasma proteins (liver or kidney disease), leaky walls (inflammation) or blocked lymphatics.',
    ],
    look: 'Change one force at a time and compare the "Filtered out", "Reabsorbed" and "Returned as lymph" tiles. "Fluid building up" is oedema forming.',
  },
  baroreflex: {
    idea: [
      'Baroreceptors in the carotid sinus and aortic arch are stretch sensors that report blood pressure to the brainstem (through nerves IX and X). When pressure falls they fire less; the brain answers with more sympathetic and less vagal activity: a faster, stronger heartbeat and narrower arterioles, so pressure comes back up.',
      'When pressure rises, the reverse happens: the heart slows and vessels relax. This reflex works in seconds and keeps pressure steady when you stand up, bleed, or take a drug that dilates vessels.',
    ],
    look: 'Lose some blood volume or relax the arterioles and watch the reflex fight back: heart rate and resistance rise to rescue the mean pressure. Then cut the baroreceptor nerves and try again — without the reflex, pressure falls much further.',
  },
  shock: {
    idea: [
      'Shock is a failure of blood flow to the tissues. Its four types differ in what fails: hypovolaemic (too little blood), distributive (vessels dilate and blood pools), cardiogenic (the pump fails) and obstructive (filling is blocked).',
      'The body compensates with the baroreflex: a fast pulse and constriction of the skin and kidney vessels (pale, cold skin; little urine). The JVP tells types apart: low when the veins are empty, raised when blood backs up behind a failing or obstructed heart.',
    ],
    look: 'Choose a type of shock and raise its severity. Watch the pulse rise and the urine fall as the body compensates, and check the JVP tile to see which types make the neck veins full.',
  },
  'cerebral-flow': {
    idea: [
      'The brain keeps its own blood flow steady over a wide range of blood pressures (autoregulation). Carbon dioxide is its strongest local signal: a rise in arterial PCO₂ dilates brain vessels and increases flow.',
      'The skull is a closed box (Monro–Kellie): if intracranial pressure rises, it squeezes the vessels and reduces perfusion. Above about 33 mmHg the brainstem fights back with Cushing’s reflex — blood pressure rises and the heart slows.',
    ],
    look: 'Move the mean arterial pressure and see brain flow stay nearly flat in the middle and fall away at the ends. Then raise PCO₂, and finally raise intracranial pressure until Cushing’s reflex appears.',
  },
  ecg: {
    idea: [
      'The ECG records the heart’s electrical activity: the P wave is the atria depolarising, the QRS the ventricles, the T wave ventricular repolarisation. On standard paper (25 mm/s) a small square is 0.04 s, so the heart rate is 1500 ÷ the small squares between two R waves.',
      'The PR interval (0.12–0.20 s) is the delay at the AV node. Heart block is slowed or failed conduction there: first degree lengthens PR; Mobitz I lengthens it beat by beat until one QRS is dropped; Mobitz II drops QRS complexes suddenly; third degree separates P waves from QRS completely.',
    ],
    look: 'Read the strip from left to right: count the P waves and the QRS complexes and check that every P is followed by a QRS. Change the conduction setting and see which rule breaks.',
  },

  // ── Central nervous system ───────────────────────────────────────
  'receptor-adaptation': {
    idea: [
      'A sensory receptor turns a stimulus into a graded generator potential. If that potential reaches threshold it fires action potentials; a stronger stimulus fires each fibre faster and recruits more receptors.',
      'With a steady stimulus, receptors adapt: their firing falls. Rapidly adapting (phasic) receptors, such as touch, report change; slowly adapting (tonic) ones, such as those for blood pressure or lung inflation, keep reporting the level.',
    ],
    look: 'Raise the stimulus and watch the generator potential and the spike train. Then let time pass with the stimulus held and compare a fast-adapting with a slow-adapting receptor.',
  },
  'stretch-reflex': {
    idea: [
      'Tapping the patellar tendon stretches the quadriceps and its muscle spindles. The spindle’s Ia afferent enters the dorsal root and excites the α-motor neuron directly (one synapse), so the quadriceps contracts and the leg kicks.',
      'γ-efferents tighten the spindle and make it more sensitive; the same Ia input inhibits the antagonist hamstrings (reciprocal innervation). The Golgi tendon organ senses tension and, when it is high, inhibits the motor neuron so the muscle relaxes.',
    ],
    look: 'Tap the tendon and follow the tiles in order: spindle afferent → alpha motor neuron → knee jerk. Turn up γ discharge for a brisker jerk, raise tendon tension to see the tendon organ switch it off, and cut the nerve roots to lose the reflex.',
  },
  'sensory-tracts': {
    idea: [
      'Fine touch, vibration and position travel up the dorsal columns on the same side and cross in the medulla. Pain and temperature enter the spinothalamic tract, which crosses within the spinal cord. The movement pathway (corticospinal) crosses at the pyramids.',
      'So a lesion’s side effects depend on where each pathway crosses. Cutting half the cord (Brown-Séquard) loses movement and vibration on the same side but pain and temperature on the opposite side.',
    ],
    look: 'Choose a lesion and read the six tiles: which leg loses which sensation. Ask yourself for each one: has this pathway crossed yet at the level of the lesion?',
  },
  'pain-gate': {
    idea: [
      'Fast pain travels in Aδ fibres: sharp, well located, immediate. Slow pain travels in C fibres: aching, builds steadily and lasts, because its transmitter (substance P) is slow to build up and slow to clear.',
      'The body can turn pain down. Rubbing the area activates large touch fibres that suppress pain transmission in the dorsal horn, and the brain’s analgesic system (periaqueductal grey, raphe magnus) releases endorphins and enkephalin.',
    ],
    look: 'Make an injury, then move the time slider: the fast pain peaks and fades and the slow pain takes over. Add rubbing or the analgesic system and see how much of the signal is blocked.',
  },
  'dorsal-horn': {
    idea: [
      'The dorsal horn is layered. Laminae I–II receive pain fibres (C and Aδ) and hold nociceptive-specific cells; laminae III–VI receive touch fibres (Aβ) and hold low-threshold cells; wide-dynamic-range cells in lamina V receive both.',
      'Large cells in lamina I send the pain signal up the spinothalamic tract. Descending fibres from the brain can damp this transmission.',
    ],
    look: 'Give light touch, then a pinprick, and see which cells fire in which layer. Turn up descending inhibition and watch the signal sent up the spinothalamic tract fall.',
  },
  'motor-lesion': {
    idea: [
      'A lower motor neuron (in the cord or nerve) is the final path to the muscle. Damage gives flaccid paralysis, wasting, weak reflexes and fibrillation. An upper motor neuron lesion (brain or cord tracts) removes control from above: spastic paralysis, brisk reflexes, little wasting.',
      'A complete cord cut first causes spinal shock — everything below is flaccid and areflexic for about two weeks — before spasticity appears.',
    ],
    look: 'Choose a lesion and examine the leg: strength, tone, knee jerk, bulk and fibrillation. Then move "Days since the injury" to watch spinal shock turn into spasticity.',
  },
  'cerebellar-reach': {
    idea: [
      'The cerebellum compares what you intended with what your limb is doing and coordinates the muscles that start and stop a movement. Without it a reaching limb swings like a pendulum.',
      'Cerebellar damage therefore gives overshoot (dysmetria), past-pointing and an intention tremor that is worst near the target.',
    ],
    look: 'Reduce cerebellar function and watch the finger’s path to the target: count the swings past it and the time to settle. A faster reach makes the problem worse.',
  },
  'basal-ganglia': {
    idea: [
      'Overall the basal ganglia act as a brake on movement. Dopamine from the substantia nigra keeps that brake in balance.',
      'Losing dopamine (Parkinson’s disease) leaves the brake too strong: slow movement, rigidity, tremor, difficulty starting. Losing striatal neurons (Huntington’s) or the subthalamic nucleus (hemiballismus) releases it: unwanted, uncontrolled movements.',
    ],
    look: 'Lower dopamine and watch speed fall and rigidity rise; then restore it and damage the striatum or subthalamic nucleus instead. The "Brake" tile shows which way the balance tips.',
  },
  'brain-lesion': {
    idea: [
      'Each part of the brain has its own jobs. In a right-handed person: frontal lobe — movement, planning, personality, speech production (Broca); temporal — understanding speech (Wernicke), faces, memory; parietal — left: reading, writing, maths; right: attention and space; occipital — vision.',
      'The brainstem keeps you conscious and runs vital reflexes, the hippocampus lays down new memories, and the corpus callosum links the two hemispheres.',
    ],
    look: 'Choose a damaged area and read the list of functions lost. Before you pick, try to say what you expect to be lost.',
  },

  // ── Respiratory ──────────────────────────────────────────────────
  'breathing-mechanics': {
    idea: [
      'Air moves only down a pressure difference. When the chest expands, the pressure in the lungs falls below atmospheric and air flows in. The pleural space is at negative pressure (about −2.5 mmHg, about −6 mmHg in inspiration), which keeps the lungs stretched to the chest wall.',
      'Airway calibre sets how easily air flows: muscarinic (vagal) stimulation narrows the airways, β₂ stimulation (salbutamol) widens them. If air enters the pleural space (pneumothorax), its pressure rises and the lung collapses.',
    ],
    look: 'Breathe in harder and watch both pressures fall and the air volume rise. Then narrow the airways, and finally make a pneumothorax.',
  },
  spirometry: {
    idea: [
      'A spirometer records the air moved in and out. A quiet breath is the tidal volume (about 500 ml). Above it is the inspiratory reserve, below it the expiratory reserve; the air that can never be breathed out is the residual volume.',
      'Capacities are sums of volumes: vital capacity = inspiratory reserve + tidal volume + expiratory reserve; FRC = expiratory reserve + residual volume. A spirometer cannot measure the residual volume (or FRC), because that air never leaves the lungs.',
    ],
    look: 'Match each volume tile to its part of a breath. Change the person and posture: athletes and standing raise the vital capacity, lying down and lung disease lower it.',
  },
  'lung-compliance': {
    idea: [
      'Compliance is how easily the lungs stretch: the change in volume for each change in pressure. Stiff lungs (fibrosis, oedema) have low compliance; in emphysema compliance is high.',
      'Surfactant, made by type II alveolar cells, lowers surface tension so alveoli stay open and dry. Premature babies who lack it develop respiratory distress syndrome: their alveoli collapse.',
    ],
    look: 'Take away surfactant or make the lung fibrotic and watch the breath shrink for the same pressure change, and the pressure needed for 500 ml climb.',
  },
  'alveolar-ventilation': {
    idea: [
      'Not all the air you breathe reaches the alveoli: about 150 ml of each breath only fills the airways (dead space). Of a 500 ml breath, about 350 ml is fresh air for gas exchange.',
      'Because the dead space is taken from every breath, shallow fast breathing wastes much more air than slow deep breathing, even with the same minute volume. A snorkel adds dead space.',
    ],
    look: 'Keep the minute volume similar but trade rate for depth, and watch alveolar ventilation. Then add a snorkel tube.',
  },
  'o2-dissociation': {
    idea: [
      'Nearly all oxygen in blood (99%) is carried on haemoglobin. The curve is S-shaped: flat above about 60 mmHg, so saturation stays high even if PO₂ falls a little, and steep below, so haemoglobin releases O₂ readily in the tissues.',
      'The curve shifts right (less affinity, more O₂ released) with heat, acid, CO₂ and 2,3-DPG — exactly what active muscle produces — and left with the opposite. Fetal haemoglobin and myoglobin sit to the left; carbon monoxide takes haemoglobin away and makes the rest hold on tighter.',
    ],
    look: 'Move PO₂ first and watch the saturation follow the S-shaped curve; then change temperature, pH or 2,3-DPG and watch the curve slide right or left (the P50 tile tells you which way).',
  },
  'vq-matching': {
    idea: [
      'Gas exchange works best when air (ventilation, V) and blood (perfusion, Q) are matched. An alveolus with blood but no air (V/Q = 0) cannot refresh the blood: it leaves like venous blood — a shunt. One with air but no blood (V/Q very high) is dead space.',
      'Diffusion across the respiratory membrane falls when it thickens (oedema, fibrosis) or loses area (emphysema). O₂ is affected before CO₂.',
    ],
    look: 'Move the V/Q ratio from 0 to very high and watch the gases in the alveolus and in the blood leaving it. Then thicken the membrane.',
  },
  'breathing-control': {
    idea: [
      'Breathing is driven mostly by CO₂. Central chemoreceptors in the medulla follow the H⁺ of the cerebrospinal fluid, which tracks arterial CO₂. Peripheral chemoreceptors (carotid and aortic bodies) respond to low dissolved O₂ and to acid.',
      'Low O₂ raises breathing only a little until PO₂ is very low. Anaemia and CO poisoning do not stimulate the peripheral receptors, because dissolved O₂ is normal. Metabolic acidosis drives breathing; alkalosis depresses it.',
    ],
    look: 'Raise arterial PCO₂ and watch ventilation climb; lower PO₂ and see the small rise until it gets very low. Compare the central and peripheral drive tiles.',
  },
  'altitude-hypoxia': {
    idea: [
      'Hypoxia means too little O₂ reaching the cells. It can be hypoxic (low arterial PO₂, as at altitude), anaemic (too little haemoglobin, or CO), stagnant (slow flow, as in shock) or histotoxic (cells cannot use O₂, as with cyanide).',
      'At altitude the body acclimatises over days: more breathing, more 2,3-DPG, more erythropoietin and haemoglobin. Cyanosis appears when about 5 g/dl of haemoglobin is reduced — so it is absent in anaemia, CO poisoning and histotoxic hypoxia.',
    ],
    look: 'Climb higher and watch arterial PO₂ and saturation fall; then let days pass to see acclimatisation. Choose the other problems and check which ones give cyanosis.',
  },

  // ── Renal ────────────────────────────────────────────────────────
  'renal-vessels': {
    idea: [
      'Blood reaches each glomerulus through the afferent arteriole and leaves through the narrower efferent arteriole, which keeps glomerular pressure high for filtration. The efferent then forms the peritubular capillaries (and, in juxtamedullary nephrons, the vasa recta).',
      'Constricting the afferent lowers glomerular pressure; constricting the efferent raises it. The juxtaglomerular apparatus senses low pressure and low tubular Na⁺ and releases renin.',
    ],
    look: 'Constrict one arteriole at a time and watch glomerular pressure and flow. Switch between a cortical and a juxtamedullary nephron to see the long loop and vasa recta.',
  },
  'glomerular-filtration': {
    idea: [
      'Filtration is driven by the net filtration pressure: glomerular blood pressure (about 55 mmHg) minus the plasma proteins’ pull (30) and the capsule’s back-pressure (15) = 10 mmHg. That gives a GFR of about 125 ml/min — 180 L a day.',
      'Autoregulation keeps GFR fairly constant between about 80 and 180 mmHg arterial pressure by adjusting the afferent arteriole. Strong sympathetic activity overrides it and lowers GFR.',
    ],
    look: 'Move the arterial pressure with autoregulation on, then off. Then raise the capsular pressure (as in a blocked ureter) or the plasma proteins and watch the net filtration pressure.',
  },
  'glucose-tm': {
    idea: [
      'Glucose is filtered freely and normally all of it is reabsorbed in the proximal tubule, by carriers that use the Na⁺ gradient made by the Na⁺/K⁺-ATPase (secondary active transport).',
      'There are only so many carriers. When the filtered load (GFR × plasma glucose) exceeds their maximum (Tm), the excess stays in the tubule and appears in the urine — as in uncontrolled diabetes.',
    ],
    look: 'Raise plasma glucose and watch the filtered and reabsorbed amounts rise together until reabsorption hits its ceiling; from then on the extra spills into the urine.',
  },
  'urine-concentration': {
    idea: [
      'The loop of Henle builds a salty medulla (countercurrent multiplier): water leaves the descending limb, salt is pumped out of the ascending limb, so fluid at the bend reaches about 1200 mOsm and the fluid leaving the loop is dilute.',
      'ADH puts water channels (aquaporins) in the collecting duct, so water follows the salty medulla and the urine is concentrated. Without ADH, large volumes of dilute urine are passed (diabetes insipidus). Diuretics act at different points of this system.',
    ],
    look: 'Turn ADH up and down and watch urine concentration and volume move in opposite directions. Then try each diuretic and see where it breaks the system.',
  },
  'renal-clearance': {
    idea: [
      'Clearance is the volume of plasma completely cleared of a substance each minute: (urine concentration × urine flow) ÷ plasma concentration.',
      'Inulin is filtered but neither reabsorbed nor secreted, so its clearance equals GFR (about 125 ml/min). A clearance below inulin’s means the kidney reabsorbs the substance; above it, it secretes it. PAH is almost completely removed in one pass, so its clearance measures renal plasma flow.',
    ],
    look: 'Pick a substance and compare its clearance with inulin’s on the tile. Then change GFR or plasma flow and see which substances follow which.',
  },
  micturition: {
    idea: [
      'While the bladder fills, sympathetic nerves relax the detrusor and close the bladder neck, so pressure stays low even as volume rises. Stretch receptors signal fullness.',
      'Voiding is a reflex through the sacral cord (pelvic nerves, S2–S4): the detrusor contracts and the neck opens. The brain can hold it back by keeping the external sphincter (pudendal nerve) closed.',
    ],
    look: 'Fill the bladder and watch the pressure stay low and then rise steeply. Choose to hold on or to void, then try a nerve injury.',
  },
  'acid-base': {
    idea: [
      'Blood pH (7.36–7.44) depends on the ratio of bicarbonate to carbonic acid (normally 20 : 1). Respiratory disorders change PaCO₂ (the acid side); metabolic disorders change HCO₃⁻.',
      'The body compensates with the other system: the lungs correct metabolic disorders within minutes; the kidneys correct respiratory disorders, slowly over days. Compensation moves pH back towards normal but rarely all the way.',
    ],
    look: 'Choose a disorder and raise its severity, then let time pass. Watch which value changes first (the cause) and which follows later (the compensation).',
  },

  // ── Endocrinology ────────────────────────────────────────────────
  'feedback-axis': {
    idea: [
      'Many hormones are controlled in a chain: the hypothalamus makes a releasing hormone, the pituitary a trophic hormone, and the gland its own hormone, which feeds back to switch the first two off (negative feedback).',
      'That feedback lets you locate a fault. If the gland itself fails (primary), its hormone is low and the trophic hormone is high. If the pituitary fails (secondary), both are low.',
    ],
    look: 'Put a fault in the gland, then in the pituitary, and compare the pattern of the three hormone levels. Then turn feedback off or give the hormone as a drug.',
  },
  'adh-water': {
    idea: [
      'ADH is made in the hypothalamus and released from the posterior pituitary. It rises when plasma becomes concentrated (osmoreceptors) or blood volume falls (baroreceptors), and with pain and stress; alcohol inhibits it.',
      'ADH makes the kidney keep water: less, more concentrated urine. Without it (diabetes insipidus) a lot of dilute urine is passed; with too much (SIADH) water is retained and plasma sodium falls.',
    ],
    look: 'Drink water or lose water and watch ADH, urine flow and plasma Na⁺ respond. Then choose a condition and see which way the pattern breaks.',
  },
  'growth-hormone': {
    idea: [
      'Growth hormone acts mostly through somatomedins (IGFs) made in the liver. It drives growth of all tissues after birth and raises blood glucose.',
      'Excess before puberty lengthens bones — gigantism; after puberty the growth plates have fused, so bones widen instead — acromegaly. Too little causes pituitary dwarfism; missing GH receptors cause Laron dwarfism.',
    ],
    look: 'Change the pituitary and the age and compare height gained with bones widening. Use "Right now" to see what raises GH secretion (sleep, fasting, exercise).',
  },
  'thyroid-axis': {
    idea: [
      'TRH → TSH → T4 and T3, with negative feedback. Thyroid hormones raise the metabolic rate, heat production and heart rate; iodine is essential to make them.',
      'Too little hormone (hypothyroidism) brings cold intolerance and slowing; too much (hyperthyroidism) heat intolerance, tremor and a fast heart. TSH tells you where the problem is, and constant TSH stimulation enlarges the gland (goitre).',
    ],
    look: 'Choose a condition and read the TSH and T4 tiles together. Try low dietary iodine, then T4 tablets, and use the test to locate a defect.',
  },
  'adrenal-axis': {
    idea: [
      'The adrenal cortex makes cortisol (under ACTH) and aldosterone (under renin–angiotensin). Cortisol raises blood glucose and supports blood pressure; aldosterone keeps Na⁺ and water and removes K⁺.',
      'Addison’s disease (adrenal failure): low Na⁺, high K⁺, low pressure, low glucose and dark skin from high ACTH. Cushing’s: excess cortisol. Conn’s: excess aldosterone — high pressure and low K⁺.',
    ],
    look: 'Pick a condition and read the cortisol and aldosterone tiles first, then the sodium, potassium, pressure and glucose that follow from them.',
  },
  'glucose-insulin': {
    idea: [
      'After a meal glucose rises and β cells release insulin, which moves glucose into cells and stores it as glycogen, so blood glucose falls back. When glucose is low, α cells release glucagon to raise it.',
      'In type 1 diabetes there is no insulin (and ketosis can develop); in type 2 insulin is present but works poorly. When glucose exceeds the kidney’s limit, it spills into the urine.',
    ],
    look: 'Give the glucose drink and move the time slider to follow the curve. Then switch on diabetes, add insulin or exercise and compare the highest glucose.',
  },
  calcium: {
    idea: [
      'Plasma calcium (2.16–2.65 mmol/L) is held steady by PTH and active vitamin D (1,25-DHCC), which raise it through bone, gut and kidney; calcitonin lowers it.',
      'Low calcium makes nerves over-excitable (tetany); high calcium makes them sluggish. Removing the parathyroids (for example at thyroid surgery) causes hypocalcaemia.',
    ],
    look: 'Change one input at a time — parathyroids, vitamin D, diet, kidneys — and follow how PTH and active vitamin D respond to bring calcium back.',
  },

  // ── Gastrointestinal ─────────────────────────────────────────────
  'gut-transit': {
    idea: [
      'The gut is a ~7 m tube with five jobs: motility, secretion, digestion, absorption (mostly in the small intestine) and elimination.',
      'A meal spends hours in each part. Fat slows stomach emptying; fibre speeds the colon; sympathetic activity slows the whole tract.',
    ],
    look: 'Move the hours after eating and follow the meal through the tract. Then change the meal, the fibre or the nerves and see the timing shift.',
  },
  'nutrient-digestion': {
    idea: [
      'Each nutrient is broken down step by step: starch by amylases and brush-border enzymes to sugars; protein by pepsin, then trypsin and the other pancreatic proteases, then peptidases; fat is emulsified by bile and digested by pancreatic lipase.',
      'If one step is missing — lactase, pancreatic enzymes, bile — the nutrient is not absorbed and reaches the colon, causing gas, diarrhoea or fatty stools.',
    ],
    look: 'Pick a nutrient and follow it along the gut; then remove one enzyme or bile and see where digestion stops.',
  },
  'gut-water': {
    idea: [
      'About 9 litres of water enter the gut a day (2 drunk, 7 secreted). The small intestine absorbs about 90% and the colon most of the rest; only 50–150 ml is lost in faeces. Water follows sodium by osmosis.',
      'Cholera toxin turns on chloride secretion (through CFTR), so water pours into the gut. Oral rehydration works because glucose and sodium are absorbed together, pulling water with them.',
    ],
    look: 'Add cholera toxin and watch the faecal loss rise; then change the drink to oral rehydration solution.',
  },
  saliva: {
    idea: [
      'Saliva is made in two steps: the acini make a plasma-like fluid, then the ducts reabsorb Na⁺ and Cl⁻ but not water, so the final saliva is hypotonic. The faster it flows, the less time the ducts have, so saliva becomes saltier.',
      'Salivation is controlled only by nerves. Parasympathetic nerves give a lot of watery saliva; sympathetic nerves give a little thick, protein-rich saliva.',
    ],
    look: 'Change the stimulus and compare flow and osmolality. Then block one set of autonomic nerves.',
  },
  'pancreatic-secretion': {
    idea: [
      'The pancreas makes two products. Duct cells secrete bicarbonate and water, driven by secretin when acid reaches the duodenum; acinar cells secrete enzymes, driven by CCK when fat and peptides arrive.',
      'Bicarbonate neutralises acid chyme, which matters because pancreatic lipase works best near neutral pH.',
    ],
    look: 'Put acid in the duodenum and watch secretin and bicarbonate; then add fat and peptides and watch CCK and enzymes. Cut the vagus to see its share.',
  },
  'gastric-phases': {
    idea: [
      'Parietal cells secrete acid through the proton pump, stimulated by ACh (vagus), gastrin and histamine. As acid leaves for the stomach, bicarbonate enters the blood — the alkaline tide.',
      'Secretion comes in three phases: cephalic (the thought of food, through the vagus), gastric (food in the stomach — most of the acid) and intestinal (first stimulates, then inhibits).',
    ],
    look: 'Step through the phases of a meal, then cut the vagus or give an H₂ blocker or a proton pump inhibitor.',
  },
  'gut-muscle': {
    idea: [
      'The gut wall has a built-in rhythm: interstitial cells of Cajal make slow waves. A slow wave alone does not cause contraction; spikes on top of it do.',
      'Stretch, ACh and parasympathetic activity bring more spikes; noradrenaline brings fewer. Acid or fat in the duodenum slows stomach emptying.',
    ],
    look: 'Choose a region to see its slow-wave rate, then add an input and count the spikes per wave.',
  },
  defecation: {
    idea: [
      'Continence relies on the internal sphincter (smooth muscle), the external sphincter (voluntary, pudendal nerve) and the puborectalis sling, which keeps a sharp anorectal angle.',
      'When the rectum fills, the internal sphincter relaxes and you feel the urge; the external sphincter can hold on. To defecate, the external sphincter and puborectalis relax and straining helps.',
    ],
    look: 'Fill the rectum and watch the urge and the sphincters. Decide to hold or to go, then try a nerve injury.',
  },
  bilirubin: {
    idea: [
      'Bilirubin comes mainly from the haem of old red cells. The liver conjugates it (making it water-soluble) and excretes it in bile.',
      'Jaundice can be pre-hepatic (too much made — unconjugated rises), hepatic (the liver fails) or post-hepatic (bile blocked — conjugated rises, dark urine, pale stools).',
    ],
    look: 'Raise red cell breakdown, then lower liver function, then block the bile duct, and compare which bilirubin rises and what happens to urine and stools.',
  },

  // ── Reproductive ─────────────────────────────────────────────────
  'male-tract': {
    idea: [
      'The testes have two jobs: making sperm and making testosterone (Leydig cells). Sperm travel through the epididymis, ductus deferens and ejaculatory duct.',
      'Most of the semen comes from the glands: seminal vesicles (~60%), prostate (~30%) and bulbourethral glands; sperm are only 2–3% of it.',
    ],
    look: 'Block the ducts, then lose Leydig or Sertoli cells, and compare sperm in semen with testosterone.',
  },
  spermatogenesis: {
    idea: [
      'Sperm take about 74 days to make: spermatogonia divide by mitosis, spermatocytes by meiosis to haploid spermatids, which then change shape into sperm.',
      'They mature and gain motility in the epididymis, and become able to fertilise (capacitation) only after some hours in the female tract.',
    ],
    look: 'Move the days slider and follow one cell from the edge of the tubule to its lumen; then move the hours in the female tract.',
  },
  'testis-control': {
    idea: [
      'GnRH → LH and FSH. LH makes Leydig cells produce testosterone; FSH acts on Sertoli cells, which make inhibin (feedback on FSH) and androgen-binding protein (keeping testosterone high in the tubules).',
      'Spermatogenesis needs that high local testosterone and a testis about 3 °C cooler than the body. Anabolic steroids switch LH off and impair sperm production.',
    ],
    look: 'Turn off GnRH, then add anabolic steroids, and compare blood testosterone with tubule testosterone and sperm count.',
  },
  androgens: {
    idea: [
      'Most testosterone in blood is bound: about 65% to SHBG, a third loosely to albumin, 1–2% free. Free plus loosely bound is the bioavailable fraction.',
      'In target tissues 5α-reductase converts testosterone to DHT, which is much stronger. Without it, the external genitalia do not develop fully.',
    ],
    look: 'Change SHBG and see total and free testosterone separate. Then remove 5α-reductase.',
  },
  'ovarian-cycle': {
    idea: [
      'Each cycle a group of follicles is recruited and one becomes dominant, growing to a Graafian follicle. Just before ovulation (around day 14) the oocyte completes meiosis I.',
      'After ovulation the follicle becomes the corpus luteum, which lasts about 14 days unless an embryo rescues it.',
    ],
    look: 'Move through the days of the cycle and watch the follicle grow, rupture and turn into the corpus luteum.',
  },
  'menstrual-cycle': {
    idea: [
      'Pituitary FSH and LH drive the ovary; the ovary’s estrogen and progesterone drive the uterus. Rising estrogen builds the endometrium and, when high, triggers the LH surge that causes ovulation.',
      'After ovulation the corpus luteum’s progesterone makes the endometrium secretory and raises body temperature. When it fades, the endometrium is shed — menstruation.',
    ],
    look: 'Move the day of the cycle and read the hormone lines together with the endometrium and temperature. Then choose a pregnancy cycle.',
  },
  'ovulation-disorders': {
    idea: [
      'Ovulation needs every level to work: hypothalamus (GnRH pulses), pituitary (FSH, LH) and ovary. Stress, low weight, heavy exercise and a prolactinoma all suppress it.',
      'At menopause the ovary stops answering, so estrogen falls and FSH and LH rise; low estrogen speeds bone loss.',
    ],
    look: 'Choose a cause and follow the chain: GnRH → FSH and LH → estrogen → ovulation and periods.',
  },
  lifespan: {
    idea: [
      'Puberty begins when kisspeptin switches on GnRH, then LH and FSH; body fat (leptin) may signal readiness. The changes come in a set order in each sex.',
      'Later the climacteric: in women menopause (45–55, estrogen falls), in men a gradual fall in testosterone from about 40.',
    ],
    look: 'Choose a sex and move the age slider through puberty, the fertile years and the climacteric.',
  },
  fertilisation: {
    idea: [
      'Fertilisation usually happens in the ampulla of the uterine tube. Of millions of sperm, only about 1% get that far. Sperm cross the cumulus, bind the zona pellucida and fuse; the cortical reaction then blocks other sperm.',
      'The embryo divides as it travels, reaches the uterus in about 4 days and implants; its hCG keeps the corpus luteum going.',
    ],
    look: 'Move through the days after fertilisation; then lower the sperm count, remove the cortical reaction or the hCG.',
  },
  'labour-lactation': {
    idea: [
      'Labour is positive feedback: stretch of the cervix → oxytocin → stronger contractions → more stretch, until delivery. Prostaglandins are essential for it to progress.',
      'In breastfeeding, suckling releases oxytocin (milk ejection) and prolactin (milk production); frequent feeds usually stop the ovarian cycles.',
    ],
    look: 'Follow labour over the hours, then block oxytocin or prostaglandins. Switch to breastfeeding and change the number of feeds or add distress.',
  },

  // ── Special senses ───────────────────────────────────────────────
  'aqueous-humour': {
    idea: [
      'Aqueous humour is made by the ciliary epithelium, flows through the pupil and drains through the trabecular meshwork into the canal of Schlemm.',
      'Eye pressure depends on the balance of making and draining. If drainage cannot keep up, pressure rises and damages the optic nerve — glaucoma.',
    ],
    look: 'Make more aqueous, then block the drainage or close the angle, and watch the pressure and the optic nerve.',
  },
  accommodation: {
    idea: [
      'Most focusing is done by the cornea; the lens adds adjustable power. For near objects the ciliary muscle contracts, the zonules slacken and the lens rounds up.',
      'In myopia light focuses in front of the retina (corrected with concave lenses); in hyperopia behind it (convex lenses). Accommodation declines with age — presbyopia.',
    ],
    look: 'Bring the object closer and watch the lens and the focus point. Then choose a short- or long-sighted eye, add glasses and change the age.',
  },
  phototransduction: {
    idea: [
      'In the dark a photoreceptor is depolarised (about −30 mV) by an inward "dark current" through channels held open by cGMP, and it releases glutamate.',
      'Light activates rhodopsin → transducin → phosphodiesterase, cGMP falls, the channels close, the cell hyperpolarises and releases less glutamate. Rods work in dim light, cones in bright light; vitamin A is needed to remake rhodopsin.',
    ],
    look: 'Raise the light and follow the chain on the tiles: cGMP → channels → membrane potential → glutamate. Compare a rod with a cone, and remove vitamin A.',
  },
  'visual-fields': {
    idea: [
      'Light from your outer (temporal) field lands on the inner (nasal) half of the retina. At the optic chiasm the nasal fibres cross; the temporal fibres do not.',
      'So a cut optic nerve blinds one eye, a chiasm lesion takes both outer fields (bitemporal hemianopia), and a lesion behind the chiasm takes the same half of the field in both eyes (homonymous).',
    ],
    look: 'Pick a lesion and compare the two eyes’ fields. For each one ask: which fibres were cut, and which half of the retina did they come from?',
  },
  'pupil-reflex': {
    idea: [
      'Light in one eye constricts both pupils (direct and consensual reflex). The signal goes up the optic nerve to the pretectal nucleus, to both Edinger–Westphal nuclei, then out through the oculomotor nerve (III) to the pupil constrictor.',
      'A lesion of the optic nerve stops both pupils reacting to light in that eye; a lesion of III stops one pupil reacting to light in either eye.',
    ],
    look: 'Shine light in one eye, then the other, with and without a lesion, and compare the two pupil tiles.',
  },
  'sound-transmission': {
    idea: [
      'The middle ear’s eardrum and ossicles match airborne sound to the fluid of the inner ear; without them most sound would bounce off. Wax or fluid blocks it.',
      'Along the basilar membrane high pitches peak near the base and low pitches near the apex. Very loud sound (above 85 dB) can damage hearing.',
    ],
    look: 'Change the loudness and pitch and watch where the basilar membrane peaks. Then block the outer or middle ear.',
  },
  'hearing-loss': {
    idea: [
      'Conductive loss blocks sound in the outer or middle ear: air conduction is worse, bone conduction normal — an air–bone gap. Sensorineural loss damages the cochlea or nerve: both worsen together.',
      'Noise damage typically notches at 4 kHz; age (presbycusis) affects high pitches most. Deafness in one ear points to the ear, the nerve or the cochlear nuclei.',
    ],
    look: 'Choose a condition and compare the air and bone conduction tiles; the gap between them tells conductive from sensorineural loss.',
  },
  vestibular: {
    idea: [
      'The semicircular canals sense turning: when the head turns, the endolymph lags, bends the cupula and changes the hair cells’ firing. The utricle and saccule sense linear movement and tilt.',
      'Signals go to the vestibular nuclei, which move the eyes to keep vision steady and adjust posture. During steady rotation the cupula returns and the sense of turning fades.',
    ],
    look: 'Turn the head one way and compare the two horizontal canals’ firing; then try a linear movement.',
  },
  taste: {
    idea: [
      'There are five tastes. Salty and sour work through ion channels; sweet, bitter and umami through receptors that act via gustducin and a second messenger.',
      'Taste fibres run in the facial (VII, front two-thirds), glossopharyngeal (IX, back third) and vagus (X) nerves to the nucleus of the solitary tract. There is no tongue map.',
    ],
    look: 'Choose a taste and raise its concentration; then move it on the tongue and see which nerve carries it.',
  },
  smell: {
    idea: [
      'Odorants dissolve in the nasal mucus and bind receptors on the cilia; a G protein raises cAMP, cation channels open and the cell fires faster with more odorant.',
      'Axons pass through the cribriform plate to the olfactory bulb and on to the limbic system — which is why smells stir emotion and memory.',
    ],
    look: 'Raise the odorant concentration, then give the nose a cold or fracture the cribriform plate.',
  },
};
