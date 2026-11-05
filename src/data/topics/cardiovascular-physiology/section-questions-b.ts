// Physiology → Cardiovascular Physiology: five more questions for every reading section,
// lessons 5–9 (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/cardiovascular-physiology/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestionsB: Q[] = [
  // ─── Lesson 5 · S1 Capillary circulation ───────────────────────────
  mcq('s5-1-1', 'capillary-exchange', 'Which is NOT a way substances cross the capillary wall?', 'Active pumping by the red cells', ['Diffusion through the endothelium', 'Filtration', 'Vesicular transport'], {
    explanation: 'Fenestrations, diffusion, filtration and vesicular transport.',
  }),
  mcq('s5-1-2', 'capillary-exchange', 'What do capillaries serve?', 'Nutrient exchange and waste disposal', ['Storage of most of the blood volume', 'Generating the peripheral resistance', 'Pumping blood forward'], {
    explanation: 'Nutrient distribution and absorption, and waste disposal.',
  }),
  tf({ id: 's5-1-3', conceptId: 'capillary-exchange', statement: 'Capillaries hold a large part of the blood volume.', answer: false, explanation: 'Only about 5%.' }),
  mcq('s5-1-4', 'capillary-exchange', 'Which openings let larger molecules through some capillaries?', 'Fenestrations', ['Valves', 'Precapillary sphincters', 'Lacteals'], {
    explanation: 'Fenestrations.',
  }),
  fill('s5-1-5', 'capillary-exchange', 'Capillary pressure is estimated from the external pressure that ____ the capillary.', ['occludes', 'closes', 'collapses'], {
    explanation: 'Slide 93.',
  }),

  // ─── Lesson 5 · S2 Starling’s forces ───────────────────────────────
  mcq('s5-2-1', 'starling-forces', 'Which force DRAWS fluid into the capillary?', 'Plasma oncotic pressure', ['Capillary hydrostatic pressure', 'Interstitial colloid osmotic pressure', 'Arterial pulse pressure'], {
    explanation: 'Plasma oncotic and tissue hydrostatic pressure draw fluid in.',
  }),
  mcq('s5-2-2', 'starling-forces', 'What share of filtered fluid is reabsorbed into capillaries?', 'About 85%', ['About 15%, which goes to lymph', 'About 50%', 'All of it'], {
    explanation: '85% reabsorbed; 15% via lymph.',
  }),
  tf({ id: 's5-2-3', conceptId: 'starling-forces', statement: 'Interstitial colloid osmotic pressure pushes fluid out of the capillary.', answer: true, explanation: 'It draws fluid into the tissue.' }),
  mcq('s5-2-4', 'starling-forces', 'What opens collapsed capillaries in a tissue that becomes active?', 'Dilated metarterioles and precapillary sphincters', ['Contraction of the lymph vessels nearby', 'A fall in the arterial pressure supplying the tissue', 'Clotting in the venules'], {
    explanation: 'Pressure rises above the critical closing pressure.',
  }),
  mcq('s5-2-5', 'starling-forces', 'About 24 L is filtered daily. About how much returns via lymph?', 'About 3.6 L', ['About 20 L', 'About 12 L', 'About 0.5 L'], {
    explanation: '15% of 24 L ≈ 3.6 L.',
    difficulty: 'intermediate',
  }),

  // ─── Lesson 5 · S3 Oedema ──────────────────────────────────────────
  mcq('s5-3-1', 'oedema', 'Which cause of oedema increases capillary permeability?', 'Histamine', ['Heart failure raising venous pressure', 'Low plasma protein', 'Filarial worms'], {
    explanation: 'Substance P, histamine and bradykinins.',
  }),
  mcq('s5-3-2', 'oedema', 'Which surgery can cause oedema by lymphatic obstruction?', 'Radical mastectomy', ['Appendix removal through the abdomen', 'Tonsillectomy', 'Cataract surgery'], {
    explanation: 'Slides 106–107.',
  }),
  tf({ id: 's5-3-3', conceptId: 'oedema', statement: 'Venular constriction raises capillary hydrostatic pressure.', answer: true, explanation: 'Slide 100.' }),
  mcq('s5-3-4', 'oedema', 'Why does liver disease cause oedema?', 'Low plasma proteins lower oncotic pressure', ['It raises the blood pressure in the arms and legs', 'It blocks the lymph vessels directly', 'It makes capillaries less permeable'], {
    explanation: 'Low oncotic pressure gradient.',
  }),
  mcq('s5-3-5', 'oedema', 'Which worm causes elephantiasis?', 'Filarial worms', ['Hookworms of the gut', 'Tapeworms', 'Pinworms'], {
    explanation: 'Filarial worms block lymphatics.',
  }),

  // ─── Lesson 5 · S4 Lymphatic drainage ──────────────────────────────
  mcq('s5-4-1', 'lymphatics', 'Which nutrients does the lymph system absorb?', 'Fatty acids and cholesterol', ['Glucose and amino acids directly', 'Iron and calcium', 'Vitamins B and C'], {
    explanation: 'Slide 106.',
  }),
  mcq('s5-4-2', 'lymphatics', 'Which veins do lymph vessels drain into?', 'The subclavian veins', ['The hepatic veins of the liver', 'The renal veins', 'The jugular arteries'], {
    explanation: 'The suction of the subclavian veins aids lymph flow.',
  }),
  tf({ id: 's5-4-3', conceptId: 'lymphatics', statement: 'Lymphatic walls can contract to move lymph.', answer: true, explanation: 'Slide 106.' }),
  mcq('s5-4-4', 'lymphatics', 'Why is lymph drainage needed at all?', 'More fluid leaves capillaries than returns to them', ['Capillaries never leak any fluid', 'Lymph makes the red blood cells', 'Lymph raises blood pressure by adding fluid to the veins'], {
    explanation: 'Lymph takes the surplus back.',
  }),
  mcq('s5-4-5', 'lymphatics', 'Which protein job does the lymph system do?', 'Returns protein to the circulation', ['Digests protein in the stomach', 'Makes antibodies alone', 'Stores protein in fat tissue for later use'], {
    explanation: 'It takes up protein and returns it.',
  }),

  // ─── Lesson 5 · S5 Venous circulation ──────────────────────────────
  mcq('s5-5-1', 'venous-circulation', 'What is the usual venous pressure in peripheral veins?', 'About 12–18 mmHg', ['About 4–6 mmHg, as at the atrium', 'About 120 mmHg', 'About 80 mmHg'], {
    explanation: '12–18 mmHg, falling to 4–6 mmHg at the right atrium.',
  }),
  mcq('s5-5-2', 'venous-circulation', 'Why do the dural sinuses not collapse at low pressure?', 'They have rigid walls', ['They have strong valves', 'They have high pressure', 'They are full of air'], {
    explanation: 'Opening them risks air embolism.',
  }),
  tf({ id: 's5-5-3', conceptId: 'venous-circulation', statement: 'Arterial pulsation can compress neighbouring veins and move blood.', answer: true, explanation: 'Slides 109–110.' }),
  mcq('s5-5-4', 'venous-circulation', 'What does CVP fluctuate with?', 'Respiration and the heartbeat', ['Eating and sleeping only', 'The room temperature and the light', 'Nothing — it is fixed'], {
    explanation: 'Slide 109.',
  }),
  mcq('s5-5-5', 'venous-circulation', 'Why is opening a dural sinus dangerous?', 'Risk of air embolism', ['Risk of a high-pressure bleed', 'Risk of infection only', 'Risk of clotting'], {
    explanation: 'Subatmospheric pressure can draw air in.',
  }),

  // ─── Lesson 6 · S1 Levels of control ───────────────────────────────
  mcq('s6-1-1', 'regulation-overview', 'Which vessels do vasoactive substances act on?', 'Resistance and capacitance vessels', ['Only the capillaries of the skin and gut', 'Only the lymph vessels', 'Only the heart valves'], {
    explanation: 'Slide 3.',
  }),
  tf({ id: 's6-1-2', conceptId: 'regulation-overview', statement: 'Raising total peripheral resistance raises blood pressure if cardiac output is unchanged.', answer: true, explanation: 'BP = CO × TPR.' }),
  mcq('s6-1-3', 'regulation-overview', 'Through which three means does regulation work?', 'Nerves, local and circulating vasoactive substances', ['Bones, muscles and the layers of skin working together', 'Valves, chambers and the pericardium', 'Lungs, kidneys and liver only'], {
    explanation: 'Slide 3.',
  }),
  mcq('s6-1-4', 'regulation-overview', 'Cardiac output 5 L/min and TPR 20 units. What is BP in those units?', '100', ['25', '4', '0.25'], {
    explanation: 'BP = CO × TPR.',
  }),
  fill('s6-1-5', 'regulation-overview', 'Regulation works locally, systemically and ____.', ['centrally'], {
    explanation: 'Slide 2.',
  }),

  // ─── Lesson 6 · S2 Metabolic autoregulation ────────────────────────
  mcq('s6-2-1', 'autoregulation-metabolic', 'Which is a local VASOCONSTRICTOR?', 'Serotonin from platelets', ['Accumulation of K⁺ in active tissue', 'Low O₂ tension', 'Lactic acid'], {
    explanation: 'Serotonin, cold and angiotensin constrict.',
  }),
  mcq('s6-2-2', 'autoregulation-metabolic', 'What washes the vasodilator metabolites away?', 'The extra blood flow they cause', ['The lymph vessels alone', 'The kidneys filtering them out of plasma', 'The heart pumping less'], {
    explanation: 'More flow removes them, allowing constriction.',
  }),
  tf({ id: 's6-2-3', conceptId: 'autoregulation-metabolic', statement: 'Cold is a local vasoconstrictor.', answer: true, explanation: 'Slide 9.' }),
  mcq('s6-2-4', 'autoregulation-metabolic', 'In the heart, which metabolite from ATP breakdown dilates vessels?', 'ADP', ['Glucose', 'Urea', 'Serotonin'], {
    explanation: 'ADP (heart, from ATP breakdown).',
  }),
  mcq('s6-2-5', 'autoregulation-metabolic', 'What is another name for nitric oxide as a vasodilator?', 'EDRF', ['ANP from the heart', 'VIP', 'TPR'], {
    explanation: 'Endothelium-derived relaxing factor.',
  }),

  // ─── Lesson 6 · S3 Myogenic autoregulation ─────────────────────────
  mcq('s6-3-1', 'autoregulation-myogenic', 'What makes vascular smooth muscle contract in the myogenic theory?', 'Increased transmural pressure stretching it', ['A fall in blood pressure inside the stretched vessel', 'Lactic acid from the muscle', 'Signals from the brain'], {
    explanation: 'Slide 10.',
  }),
  mcq('s6-3-2', 'autoregulation-myogenic', 'Which two examples of autoregulation does slide 13 give?', 'Reactive and active hyperaemia', ['Fainting and shock', 'Oedema and ascites', 'Fever and chills with infection'], {
    explanation: 'Reactive and active hyperaemia.',
  }),
  tf({ id: 's6-3-3', conceptId: 'autoregulation-myogenic', statement: 'For a sphere, the law of Laplace uses two radii.', answer: true, explanation: 'P = T(1/R₁ + 1/R₂).' }),
  mcq('s6-3-4', 'autoregulation-myogenic', 'By Laplace, a vessel with a smaller radius needs what wall tension to resist the same pressure?', 'Less tension', ['More tension', 'The same tension', 'No tension at all'], {
    explanation: 'T = P × R: smaller R, less tension.',
    difficulty: 'intermediate',
  }),
  mcq('s6-3-5', 'autoregulation-myogenic', 'What does pressure do to the vessel first in the myogenic response?', 'Distends it', ['Narrows it', 'Clots it', 'Seals it'], {
    explanation: 'The vessel is distended, then contracts.',
  }),

  // ─── Lesson 6 · S4 Humoral and nervous control ─────────────────────
  tf({ id: 's6-4-1', conceptId: 'systemic-control', statement: 'Capillaries and venules have a sympathetic noradrenergic nerve supply.', answer: false, explanation: 'Every vessel except capillaries and venules has one.' }),
  mcq('s6-4-2', 'systemic-control', 'What does constriction of capacitance vessels do?', 'Moves blood to the arterial side', ['Stores more blood in the veins', 'Lowers blood pressure', 'Stops capillary flow'], {
    explanation: 'Slide 16.',
  }),
  tf({ id: 's6-4-3', conceptId: 'systemic-control', statement: 'Sympathetic constrictor fibres discharge tonically.', answer: true, explanation: 'Reducing tonic discharge causes vasodilatation.' }),
  mcq('s6-4-4', 'systemic-control', 'Which circulating hormone from the heart dilates vessels?', 'ANP', ['Angiotensin II', 'Noradrenaline', 'Vasopressin'], {
    explanation: 'Kinins, VIP and ANP.',
  }),
  mcq('s6-4-5', 'systemic-control', 'Where do sympathetic cholinergic vasodilator fibres act?', 'Muscle vessels', ['Skin vessels', 'Brain vessels', 'Kidney vessels'], {
    explanation: 'Slide 18.',
  }),

  // ─── Lesson 6 · S5 The vasomotor centre ────────────────────────────
  mcq('s6-5-1', 'vasomotor-centre', 'Where is the pressor area of the VMC?', 'Dorsolateral', ['Caudal and ventromedial', 'In the cerebellum', 'In the spinal cord'], {
    explanation: 'Pressor: dorsolateral; depressor: caudal, ventromedial.',
  }),
  mcq('s6-5-2', 'vasomotor-centre', 'Why do vagotomy and atropine increase heart rate?', 'Rate is controlled mainly by tonic vagal discharge', ['They stimulate the sympathetic nerves', 'They make the adrenal medulla release more adrenaline', 'They raise blood volume'], {
    explanation: 'Slide 21.',
  }),
  tf({ id: 's6-5-3', conceptId: 'vasomotor-centre', statement: 'Pressor neurons project directly to sympathetic neurons in the spinal cord.', answer: true, explanation: 'Slide 22.' }),
  mcq('s6-5-4', 'vasomotor-centre', 'What does the parasympathetic supply do to the heart?', 'Reduces its rate', ['Increases its strength', 'Increases its rate', 'Stops it entirely'], {
    explanation: 'Sympathetic: rate and strength up; parasympathetic: rate down.',
  }),
  mcq('s6-5-5', 'vasomotor-centre', 'How does the VMC control arteriolar radius?', 'By varying tonic sympathetic discharge', ['By releasing local metabolites', 'By changing blood viscosity', 'By opening capillaries'], {
    explanation: 'Slide 20.',
  }),

  // ─── Lesson 6 · S6 The baroreceptor reflex ─────────────────────────
  mcq('s6-6-1', 'baroreceptor-reflex', 'Where is the carotid sinus?', 'At the bifurcation of the common carotid', ['At the arch of the aorta, beside the heart', 'In the right atrium', 'In the jugular vein'], {
    explanation: 'A dilatation at the carotid bifurcation.',
  }),
  mcq('s6-6-2', 'baroreceptor-reflex', 'BP falls. What happens to baroreceptor discharge?', 'It falls', ['It rises', 'It stops the heart', 'It is unchanged'], {
    explanation: 'Not stretched → less discharge.',
  }),
  tf({ id: 's6-6-3', conceptId: 'baroreceptor-reflex', statement: 'Low-pressure receptors lie in the pulmonary veins.', answer: true, explanation: 'And in the atrial walls at the venae cavae.' }),
  mcq('s6-6-4', 'baroreceptor-reflex', 'BP rises. What happens to the heart rate?', 'It slows', ['It speeds up', 'It stops', 'It does not change'], {
    explanation: 'The vagus is stimulated → slower heart.',
  }),
  mcq('s6-6-5', 'baroreceptor-reflex', 'Which nerve carries aortic arch baroreceptor afferents?', 'The vagus (X)', ['The glossopharyngeal (IX)', 'The phrenic', 'The facial'], {
    explanation: 'Carotid sinus: IX; aortic arch: X.',
  }),

  // ─── Lesson 6 · S7 Atrial (volume) receptors ───────────────────────
  mcq('s6-7-1', 'atrial-receptors', 'When do type A atrial receptors discharge?', 'In atrial systole', ['In atrial diastole', 'Only in exercise', 'Never'], {
    explanation: 'Type A: atrial systole; type B: atrial diastole.',
  }),
  mcq('s6-7-2', 'atrial-receptors', 'What happens to heart rate when type B receptors are stimulated?', 'It rises', ['It falls', 'It stops', 'It is unchanged'], {
    explanation: 'An exception: hypotension with tachycardia.',
  }),
  tf({ id: 's6-7-3', conceptId: 'atrial-receptors', statement: 'Atrial receptor impulses reduce ADH release through the hypothalamus.', answer: true, explanation: 'Also ACTH.' }),
  mcq('s6-7-4', 'atrial-receptors', 'Which situation gives hypertension with reflex bradycardia?', 'Raised intracranial pressure', ['Atrial stretch receptor stimulation', 'Standing up quickly', 'Haemorrhage'], {
    explanation: 'The two exceptions to HR and BP moving together.',
  }),
  mcq('s6-7-5', 'atrial-receptors', 'Why might reflex tachycardia from atrial stretch help?', 'It pumps out the extra volume', ['It raises blood pressure', 'It slows the kidneys', 'It stores more blood'], {
    explanation: 'Slide 32.',
  }),

  // ─── Lesson 6 · S8 Other influences on the VMC ─────────────────────
  mcq('s6-8-1', 'vmc-influences', 'What does sharp, short pain do to BP?', 'Raises it', ['Lowers it', 'Has no effect', 'Stops the heart'], {
    explanation: 'Sharp short pain raises BP; prolonged pain lowers it.',
  }),
  mcq('s6-8-2', 'vmc-influences', 'What does lung inflation do to the VMC?', 'Inhibits it, lowering BP', ['Stimulates it, raising BP', 'Has no effect', 'Destroys it'], {
    explanation: 'Via vagal afferents.',
  }),
  tf({ id: 's6-8-3', conceptId: 'vmc-influences', statement: 'Hypoxia and hypercapnia stimulate the VMC directly.', answer: true, explanation: 'Slides 33, 35.' }),
  mcq('s6-8-4', 'vmc-influences', 'What do fear and grief cause?', 'Bradycardia and hypotension', ['Tachycardia and hypertension', 'Fever and sweating', 'No change'], {
    explanation: 'Slide 37.',
  }),
  mcq('s6-8-5', 'vmc-influences', 'Through which structure does the cortex raise BP in anger?', 'The hypothalamus', ['The cerebellum', 'The spinal cord', 'The pituitary only'], {
    explanation: 'Slide 33.',
  }),

  // ─── Lesson 6 · S9 Cushing’s reflex ────────────────────────────────
  mcq('s6-9-1', 'cushing-reflex', 'Why does raised intracranial pressure raise systemic BP?', 'VMC ischaemia stimulates sympathetic discharge', ['The heart is squeezed by the skull', 'The kidneys retain more fluid, raising blood volume', 'Blood volume doubles'], {
    explanation: 'Ischaemia, hypoxia and hypercapnia stimulate the VMC.',
  }),
  mcq('s6-9-2', 'cushing-reflex', 'Why does bradycardia follow in Cushing’s reflex?', 'Baroreceptors sense the rise in BP', ['The vagus is cut by the pressure', 'The heart runs out of oxygen', 'The SA node is damaged'], {
    explanation: 'The arterial baroreceptors give reflex bradycardia.',
  }),
  tf({ id: 's6-9-3', conceptId: 'cushing-reflex', statement: 'The rise in BP in Cushing’s reflex restores blood flow to the medulla.', answer: true, explanation: 'Slides 35–36.' }),
  mcq('s6-9-4', 'cushing-reflex', 'Which of these can raise intracranial pressure enough to trigger it?', 'A blood clot in the skull', ['A sprained ankle', 'A mild cold with a blocked nose', 'Mild dehydration'], {
    explanation: 'Hydrocephalus, tumours, a blood clot.',
  }),
  mcq('s6-9-5', 'cushing-reflex', 'What does raised intracranial pressure do to blood flow to the VMC?', 'Reduces it', ['Increases it', 'Has no effect', 'Reverses it'], {
    explanation: 'Compression reduces flow to the VMC.',
  }),

  // ─── Lesson 7 · S1 Standing up ─────────────────────────────────────
  mcq('s7-1-1', 'gravity-effects', 'Where is the pressure drop sensed when standing?', 'In the aortic arch and carotid sinus', ['In the veins of the feet and lower legs', 'In the lungs', 'In the kidneys only'], {
    explanation: 'Above heart level.',
  }),
  mcq('s7-1-2', 'gravity-effects', 'Which hormone system is released on standing?', 'Renin–aldosterone', ['Insulin–glucagon', 'Thyroxine', 'Growth hormone'], {
    explanation: 'Slide 4.',
  }),
  tf({ id: 's7-1-3', conceptId: 'gravity-effects', statement: 'On standing, JVP falls along with arterial pressure.', answer: true, explanation: 'This keeps cerebral perfusion pressure.' }),
  mcq('s7-1-4', 'gravity-effects', 'What dilates cerebral vessels on standing?', 'Rising PCO₂ and falling PO₂', ['Falling PCO₂ and rising PO₂', 'Cold air', 'Adrenaline only'], {
    explanation: 'Slide 5.',
  }),
  mcq('s7-1-5', 'gravity-effects', 'What causes fainting after prolonged standing without moving?', 'Excessive pooling reducing cerebral flow', ['Too much blood reaching the brain', 'A sudden rise in blood pressure in the head', 'Heart attack'], {
    explanation: 'Slide 6.',
  }),

  // ─── Lesson 7 · S2 Orthostatic hypotension ─────────────────────────
  mcq('s7-2-1', 'orthostatic-hypotension', 'Which infection can damage nerves and cause orthostatic hypotension?', 'Syphilis', ['Common cold', 'Measles', 'Chickenpox'], {
    explanation: 'Nerve damage in diabetes or syphilis.',
  }),
  mcq('s7-2-2', 'orthostatic-hypotension', 'What happens to noradrenaline on standing in this condition?', 'It does not rise', ['It doubles', 'It rises slowly', 'It falls to zero'], {
    explanation: 'Slide 8.',
  }),
  tf({ id: 's7-2-3', conceptId: 'orthostatic-hypotension', statement: 'Sympatholytic drugs can cause orthostatic hypotension.', answer: true, explanation: 'Slide 8.' }),
  mcq('s7-2-4', 'orthostatic-hypotension', 'What is orthostatic hypotension?', 'A fall in BP on suddenly standing up', ['A rise in BP on lying down flat after standing', 'A fall in BP during sleep', 'A rise in BP with exercise'], {
    explanation: 'Slide 8.',
  }),
  mcq('s7-2-5', 'orthostatic-hypotension', 'What is the common thread among its causes?', 'Disrupted sympathetic innervation', ['Too much blood volume', 'Overactive baroreceptors', 'Strong heart contractions'], {
    explanation: 'Slide 8.',
  }),

  // ─── Lesson 7 · S3 Acceleration ────────────────────────────────────
  mcq('s7-3-1', 'acceleration', 'Which symptom marks negative g?', '“Red-out” with bleeding around the eyes', ['Blackout from too little blood in the head', 'Fainting from pooling in the legs', 'Shock'], {
    explanation: 'Negative g moves blood up.',
  }),
  mcq('s7-3-2', 'acceleration', 'How do pressure suits help in positive g?', 'They compress the abdomen and legs', ['They warm the body', 'They raise blood glucose', 'They slow breathing and the heart rate'], {
    explanation: 'They reduce pooling.',
  }),
  tf({ id: 's7-3-3', conceptId: 'acceleration', statement: 'g forces are better tolerated lying horizontally, across the body.', answer: true, explanation: 'Slide 11.' }),
  mcq('s7-3-4', 'acceleration', 'In positive g, which way does blood move?', 'Down, towards the feet', ['Up, towards the head', 'Into the lungs only', 'Nowhere'], {
    explanation: 'Positive g moves blood down.',
  }),
  mcq('s7-3-5', 'acceleration', 'What maintains cardiac output for a while in positive g?', 'Increased VMC discharge', ['A lower resting heart rate', 'Venous pooling', 'Lung inflation'], {
    explanation: 'More inotropy and chronotropy.',
  }),

  // ─── Lesson 7 · S4 Shock and its types ─────────────────────────────
  mcq('s7-4-1', 'shock-types', 'Which type of shock does sepsis cause?', 'Distributive', ['Hypovolaemic from blood loss', 'Cardiogenic', 'Obstructive'], {
    explanation: 'Marked vasodilatation and pooling.',
  }),
  mcq('s7-4-2', 'shock-types', 'Which type of shock does a myocardial infarction cause?', 'Cardiogenic', ['Distributive from vasodilatation', 'Hypovolaemic', 'Obstructive'], {
    explanation: 'Inadequate pumping.',
  }),
  tf({ id: 's7-4-3', conceptId: 'shock-types', statement: 'Burns can cause hypovolaemic shock.', answer: true, explanation: 'Slide 12.' }),
  mcq('s7-4-4', 'shock-types', 'Which is an OBSTRUCTIVE cause of shock?', 'Tension pneumothorax', ['Diarrhoea and vomiting', 'Anaphylaxis', 'Arrhythmia'], {
    explanation: 'Tamponade, tension pneumothorax, PE, tumour.',
  }),
  mcq('s7-4-5', 'shock-types', 'Fainting is which kind of distributive shock?', 'Neurogenic', ['Septic', 'Anaphylactic', 'Cardiogenic'], {
    explanation: 'Fainting is neurogenic.',
  }),

  // ─── Lesson 7 · S5 Signs of hypovolaemic shock ─────────────────────
  mcq('s7-5-1', 'shock-features', 'Why is the skin pale and cool in shock?', 'Vasoconstriction in the skin', ['Fever raising skin temperature', 'Too much blood in the skin', 'Sweating stops'], {
    explanation: 'Generalised vasoconstriction, sparing heart and brain.',
  }),
  mcq('s7-5-2', 'shock-features', 'Why does a shocked patient feel intense thirst?', 'Angiotensin II and vasopressin', ['Too much salt in the diet', 'Fever', 'Low blood glucose'], {
    explanation: 'Slides 20–23.',
  }),
  tf({ id: 's7-5-3', conceptId: 'shock-features', statement: 'Erythropoietin restores haemoglobin in about 4–5 weeks after haemorrhage.', answer: true, explanation: 'Slide 24.' }),
  mcq('s7-5-4', 'shock-features', 'Why is respiration rapid in shock?', 'Lost O₂-carrying capacity stimulates chemoreceptors', ['The lungs fill with fluid from the leaky lung capillaries', 'The patient is too warm', 'Pain stimulates breathing'], {
    explanation: 'Chemoreceptors also drive the VMC.',
  }),
  mcq('s7-5-5', 'shock-features', 'What later makes a shocked patient dull and apathetic?', 'Cerebral ischaemia', ['Too much oxygen', 'Low thirst', 'High blood pressure'], {
    explanation: 'Restless, then dull and apathetic.',
  }),

  // ─── Lesson 7 · S6 Irreversible shock ──────────────────────────────
  mcq('s7-6-1', 'irreversible-shock', 'What defines irreversible shock?', 'No response even when blood volume is restored', ['A response only to small, repeated transfusions of blood', 'Recovery within one hour', 'A normal blood pressure'], {
    explanation: 'Slide 25.',
  }),
  mcq('s7-6-2', 'irreversible-shock', 'In irreversible shock, what happens to precapillary sphincters and venules?', 'Sphincters relax while venules do not', ['Both relax together', 'Both constrict', 'Venules relax while sphincters do not'], {
    explanation: 'Causing stasis and loss of fluid.',
  }),
  tf({ id: 's7-6-3', conceptId: 'irreversible-shock', statement: 'Prolonged cerebral ischaemia depresses the vasomotor centre.', answer: true, explanation: 'Slide 26.' }),
  mcq('s7-6-4', 'irreversible-shock', 'What does myocardial ischaemia do in irreversible shock?', 'Worsens the shock', ['Cures the shock', 'Has no effect', 'Raises blood pressure'], {
    explanation: 'Slide 26.',
  }),
  mcq('s7-6-5', 'irreversible-shock', 'What does depression of the VMC lead to in irreversible shock?', 'Slowing of the heart and vasodilatation', ['A faster heart and widespread vasoconstriction', 'Higher blood pressure', 'More cerebral flow'], {
    explanation: 'Further falls in BP and cerebral flow.',
  }),

  // ─── Lesson 7 · S7 Other causes of shock, and syncope ──────────────
  mcq('s7-7-1', 'other-shock-syncope', 'Which hidden bleed can cause shock?', 'A ruptured spleen', ['A small nosebleed', 'A paper cut', 'A bruised knee'], {
    explanation: 'Fractured femur, ectopic pregnancy, ruptured spleen.',
  }),
  mcq('s7-7-2', 'other-shock-syncope', 'In traumatic shock, what damages the kidneys?', 'Myoglobin from muscle', ['Haemoglobin from red cells', 'Bilirubin', 'Glucose'], {
    explanation: 'Slide 28.',
  }),
  tf({ id: 's7-7-3', conceptId: 'other-shock-syncope', statement: 'Micturition syncope is a recognised cause of fainting.', answer: true, explanation: 'Slide 30.' }),
  mcq('s7-7-4', 'other-shock-syncope', 'What causes syncope?', 'Inadequate cerebral blood flow', ['Too much blood in the brain', 'A rise in blood pressure', 'Low body temperature'], {
    explanation: 'Usually harmless.',
  }),
  mcq('s7-7-5', 'other-shock-syncope', 'What triggers vasovagal syncope?', 'Strong emotion', ['Heavy exercise', 'Eating a large meal', 'Cold weather'], {
    explanation: 'Abrupt vasodilatation, hypotension and bradycardia after strong emotion.',
  }),

  // ─── Lesson 7 · S8 Heart failure ───────────────────────────────────
  mcq('s7-8-1', 'heart-failure', 'Which sign belongs to backward failure of the RIGHT heart?', 'Peripheral oedema', ['Pulmonary oedema', 'Dyspnoea at night', 'Muscle weakness'], {
    explanation: 'Raised systemic venous pressure.',
  }),
  mcq('s7-8-2', 'heart-failure', 'What is pulmonary oedema of heart failure sometimes called?', 'Cardiac asthma', ['Bronchial asthma of allergy', 'Pneumonia', 'Emphysema'], {
    explanation: 'Slide 32.',
  }),
  tf({ id: 's7-8-3', conceptId: 'heart-failure', statement: 'In heart failure, venous return may be normal or increased.', answer: true, explanation: 'Slide 31.' }),
  mcq('s7-8-4', 'heart-failure', 'Which sign belongs to forward failure of the LEFT heart?', 'Oliguria from tissue hypoperfusion', ['Raised JVP from systemic venous congestion', 'Hepatomegaly', 'Ascites'], {
    explanation: 'Muscle weakness, fatigue, dyspepsia, oliguria.',
  }),
  mcq('s7-8-5', 'heart-failure', 'What follows forward failure of the RIGHT heart?', 'Less blood reaching the left heart', ['Peripheral oedema from venous congestion', 'Hepatomegaly', 'Ascites'], {
    explanation: 'Lung hypoperfusion: disordered gas exchange and less blood to the left heart.',
  }),
  // ─── Lesson 8 · S1 Cerebral blood supply ───────────────────────────
  mcq('s8-1-1', 'cerebral-supply', 'Which arteries form the basilar artery?', 'The vertebral arteries', ['The internal carotid arteries', 'The external carotids', 'The subclavians'], {
    explanation: 'The basilar comes from the vertebral arteries.',
  }),
  mcq('s8-1-2', 'cerebral-supply', 'Which meningeal layer adheres to the brain and follows every sulcus?', 'The pia mater', ['The dura mater', 'The arachnoid', 'The periosteum'], {
    explanation: 'The thin pia mater.',
  }),
  tf({ id: 's8-1-3', conceptId: 'cerebral-supply', statement: 'The dura mater is the tough outer meninx.', answer: true, explanation: 'Slide 5.' }),
  mcq('s8-1-4', 'cerebral-supply', 'Which space lies between the dura and the arachnoid?', 'The subdural space', ['The subarachnoid space', 'The epidural space', 'The ventricular space'], {
    explanation: 'Slide 5.',
  }),
  mcq('s8-1-5', 'cerebral-supply', 'Why does blocking one cerebral artery damage its region badly?', 'There is little anastomosis', ['There are many anastomoses', 'The brain has no veins', 'The artery is very large and branches widely'], {
    explanation: 'Each artery is almost the exclusive supply.',
  }),

  // ─── Lesson 8 · S2 Cerebrospinal fluid ─────────────────────────────
  mcq('s8-2-1', 'csf', 'Which channel joins the third and fourth ventricles?', 'The cerebral aqueduct (of Sylvius)', ['The interventricular foramen (of Monro)', 'The foramen of Magendie', 'The central canal'], {
    explanation: 'Aqueduct of Sylvius.',
  }),
  mcq('s8-2-2', 'csf', 'Through which openings does CSF leave the fourth ventricle?', 'The foramina of Luschka and Magendie', ['The foramen of Monro only', 'The aqueduct of Sylvius', 'The arachnoid villi'], {
    explanation: 'Into the subarachnoid space.',
  }),
  tf({ id: 's8-2-3', conceptId: 'csf', statement: 'CSF is a clear, colourless fluid.', answer: true, explanation: 'Slide 7.' }),
  mcq('s8-2-4', 'csf', 'Which opening joins the lateral ventricles to the third ventricle?', 'The interventricular foramen (of Monro)', ['The cerebral aqueduct (of Sylvius)', 'The foramen of Luschka', 'The foramen magnum'], {
    explanation: 'Foramen of Monro.',
  }),
  mcq('s8-2-5', 'csf', 'Which ventricles contain choroid plexus that makes CSF?', 'Lateral, third and fourth', ['The lateral ventricles only', 'Fourth only', 'None of them'], {
    explanation: 'Slide 7.',
  }),

  // ─── Lesson 8 · S3 What CSF does ───────────────────────────────────
  mcq('s8-3-1', 'csf', 'What is the total volume of CSF?', 'About 150 mL', ['About 550 mL, the daily production', 'About 15 mL', 'About 1.5 L'], {
    explanation: '150 mL volume; 550 mL/day production.',
  }),
  mcq('s8-3-2', 'csf', 'What causes external (communicating) hydrocephalus?', 'Reduced reabsorption by arachnoid villi', ['Obstruction of the ventricular drainage', 'Too little CSF made', 'Bleeding into the skull'], {
    explanation: 'Slide 16.',
  }),
  tf({ id: 's8-3-3', conceptId: 'csf', statement: 'CSF carries hormones to other areas of the brain.', answer: true, explanation: 'An endocrine medium.' }),
  mcq('s8-3-4', 'csf', 'What is the CSF glucose concentration?', 'About 64 mg/dL', ['About 20 mg/dL, like its protein', 'About 640 mg/dL', 'Zero'], {
    explanation: 'Protein 20 mg/dL; glucose 64 mg/dL.',
  }),
  mcq('s8-3-5', 'csf', 'How does CSF help excretion?', 'One-way flow to blood removes metabolites', ['It pumps urine and urea out through the kidneys', 'It digests proteins', 'It carries oxygen'], {
    explanation: 'It removes harmful metabolites and drugs.',
  }),

  // ─── Lesson 8 · S4 The blood–brain barrier ─────────────────────────
  mcq('s8-4-1', 'blood-brain-barrier', 'Which crosses the blood–brain barrier with difficulty?', 'Proteins', ['Oxygen', 'Carbon dioxide', 'Water'], {
    explanation: 'Proteins and protein-bound substances cross with difficulty.',
  }),
  mcq('s8-4-2', 'blood-brain-barrier', 'What kind of substances cross easily?', 'Small, non-polar and lipid-soluble', ['Large, polar and water-soluble molecules', 'Charged proteins', 'Whole cells'], {
    explanation: 'Or those with specific carriers.',
  }),
  tf({ id: 's8-4-3', conceptId: 'blood-brain-barrier', statement: 'The blood–brain barrier can break down in infection and injury.', answer: true, explanation: 'Slide 20.' }),
  mcq('s8-4-4', 'blood-brain-barrier', 'Which hormones cross the barrier easily?', 'Lipid-soluble steroid hormones', ['Large protein hormones like insulin', 'Peptide hormones only', 'None at all'], {
    explanation: 'Slide 19.',
  }),
  mcq('s8-4-5', 'blood-brain-barrier', 'What does the barrier protect the brain from?', 'Blood-borne chemicals and toxins', ['Oxygen in the blood', 'Glucose carried in the arterial blood', 'Its own CSF'], {
    explanation: 'Drugs, antigens and electrolyte changes.',
  }),

  // ─── Lesson 8 · S5 Cerebral blood flow ─────────────────────────────
  mcq('s8-5-1', 'cerebral-flow', 'What share of the brain’s energy comes from glucose?', 'About 90%', ['About 10%', 'About 50%', 'None'], {
    explanation: 'Taken up without insulin.',
  }),
  mcq('s8-5-2', 'cerebral-flow', 'What causes an ischaemic stroke?', 'Plaque, thrombus or embolus', ['A ruptured aneurysm', 'Too much CSF', 'Low blood sugar for a long time'], {
    explanation: 'Haemorrhagic: rupture; ischaemic: blockage.',
  }),
  tf({ id: 's8-5-3', conceptId: 'cerebral-flow', statement: 'Touching cerebral vessels causes pain.', answer: true, explanation: 'They have sensory nerves.' }),
  mcq('s8-5-4', 'cerebral-flow', 'Which brain parts are very sensitive to hypoxia, with the cortex?', 'The basal ganglia and thalamus', ['The brainstem vegetative centres', 'The spinal cord', 'The meninges'], {
    explanation: 'Slide 23.',
  }),
  mcq('s8-5-5', 'cerebral-flow', 'What does hypoglycaemia cause?', 'Convulsions and coma', ['Better concentration', 'Higher blood pressure', 'Faster thinking'], {
    explanation: 'Slide 24.',
  }),

  // ─── Lesson 8 · S6 Coronary circulation ────────────────────────────
  mcq('s8-6-1', 'coronary-circulation', 'In what share of people are the two coronary arteries equal?', 'About 30%', ['About 50%', 'About 20%', 'About 90%'], {
    explanation: 'Right larger 50%; left 20%; equal 30%.',
  }),
  mcq('s8-6-2', 'coronary-circulation', 'At about what degree of occlusion does a “P factor” cause pain?', 'About 75%', ['About 25%', 'About 10%', 'About 100%'], {
    explanation: 'Slide 29.',
  }),
  tf({ id: 's8-6-3', conceptId: 'coronary-circulation', statement: 'α-Receptor stimulation constricts the coronary vessels.', answer: true, explanation: 'Slide 28.' }),
  mcq('s8-6-4', 'coronary-circulation', 'Which vein does coronary blood mainly drain into?', 'The coronary sinus', ['The superior vena cava', 'The pulmonary vein', 'The jugular vein'], {
    explanation: 'Coronary sinus and anterior cardiac veins.',
  }),
  mcq('s8-6-5', 'coronary-circulation', 'What does severe, prolonged hypoxia of the heart cause?', 'Myocardial infarction', ['Angina only at rest', 'Pericarditis', 'Rheumatic valve disease'], {
    explanation: 'Slide 29.',
  }),

  // ─── Lesson 8 · S7 Pulmonary circulation ───────────────────────────
  mcq('s8-7-1', 'pulmonary-circulation', 'What is the pulmonary capillary hydrostatic pressure?', 'About 10 mmHg', ['About 25 mmHg, the oncotic pressure', 'About 100 mmHg', 'About 1 mmHg'], {
    explanation: '10 mmHg against an oncotic pressure of 25 mmHg.',
  }),
  mcq('s8-7-2', 'pulmonary-circulation', 'Where do the bronchial arteries come from?', 'The aorta', ['The pulmonary artery', 'The vena cava', 'The carotid'], {
    explanation: 'They empty into the pulmonary veins.',
  }),
  tf({ id: 's8-7-3', conceptId: 'pulmonary-circulation', statement: 'CO₂ and H⁺ constrict pulmonary vessels.', answer: true, explanation: 'Slide 32.' }),
  mcq('s8-7-4', 'pulmonary-circulation', 'What can persistent pulmonary vasoconstriction lead to?', 'Pulmonary hypertension', ['Low blood pressure', 'Oedema of the legs', 'Asthma'], {
    explanation: 'Slide 32.',
  }),
  mcq('s8-7-5', 'pulmonary-circulation', 'What dilates pulmonary vessels?', 'Nitric oxide', ['Hypoxia', 'CO₂', 'H⁺'], {
    explanation: 'NO for dilatation.',
  }),

  // ─── Lesson 8 · S8 Splanchnic and liver circulation ────────────────
  mcq('s8-8-1', 'splanchnic-circulation', 'What is the pressure in the hepatic artery?', 'About 90 mmHg', ['About 10 mmHg, like the portal vein', 'About 5 mmHg', 'About 200 mmHg'], {
    explanation: 'Portal 10, hepatic vein 5, hepatic artery 90 mmHg.',
  }),
  mcq('s8-8-2', 'splanchnic-circulation', 'How long does gut blood flow stay raised after a meal?', 'About 3 hours', ['About 3 minutes', 'About 3 days', 'It never rises'], {
    explanation: 'Slide 36.',
  }),
  tf({ id: 's8-8-3', conceptId: 'splanchnic-circulation', statement: 'The splanchnic bed is a large venous reservoir.', answer: true, explanation: 'Slide 36.' }),
  mcq('s8-8-4', 'splanchnic-circulation', 'What is the functional unit of the liver?', 'The acinus', ['The nephron', 'The alveolus', 'The villus'], {
    explanation: 'Blood flows from the portal triad to the central vein.',
  }),
  mcq('s8-8-5', 'splanchnic-circulation', 'Where does fluid move in raised hepatic venous pressure?', 'Into the space of Disse and lymph', ['Into the bile ducts and out into the gut', 'Into the gallbladder', 'Into the portal vein'], {
    explanation: 'Slide 37.',
  }),

  // ─── Lesson 8 · S9 Skin circulation ────────────────────────────────
  mcq('s8-9-1', 'skin-circulation', 'How long does the white reaction last?', 'About 15 seconds', ['About 15 minutes', 'About 15 hours', 'About 1 second'], {
    explanation: 'Slide 39.',
  }),
  mcq('s8-9-2', 'skin-circulation', 'What causes the wheal of the triple response?', 'Local oedema from increased permeability', ['Capillary dilatation alone, without oedema', 'An axon reflex', 'Precapillary sphincter contraction'], {
    explanation: 'Slide 40.',
  }),
  tf({ id: 's8-9-3', conceptId: 'skin-circulation', statement: 'The skin circulation is used for heat regulation.', answer: true, explanation: 'Slide 39.' }),
  mcq('s8-9-4', 'skin-circulation', 'What causes the red reaction?', 'Capillary dilatation', ['Arteriolar dilatation by axon reflex', 'Local oedema', 'Vasoconstriction'], {
    explanation: 'Red: capillary dilatation; flare: arteriolar dilatation.',
  }),
  mcq('s8-9-5', 'skin-circulation', 'What happens to skin blood flow in shock?', 'It is shunted away', ['It doubles', 'It stays normal', 'It becomes turbulent'], {
    explanation: 'Slide 39.',
  }),

  // ─── Lesson 8 · S10 Fetal respiration ──────────────────────────────
  mcq('s8-10-1', 'fetal-circulation', 'By about when does HbF usually disappear after birth?', 'About 4 months', ['About 4 days', 'About 4 years', 'Never'], {
    explanation: 'Slide 45.',
  }),
  mcq('s8-10-2', 'fetal-circulation', 'Why does HbF bind O₂ more strongly than adult Hb?', 'It binds 2,3-DPG less', ['It binds 2,3-DPG more', 'It has more iron', 'It has no globin'], {
    explanation: 'Less 2,3-DPG binding → higher affinity.',
  }),
  tf({ id: 's8-10-3', conceptId: 'fetal-circulation', statement: 'At birth the placenta is cut off and the baby adjusts to adult respiration.', answer: true, explanation: 'Slide 45.' }),
  mcq('s8-10-4', 'fetal-circulation', 'Which haemoglobin does the mother have?', 'Adult haemoglobin', ['Fetal haemoglobin', 'Embryonic haemoglobin', 'No haemoglobin'], {
    explanation: 'HbF has higher affinity than the mother’s adult Hb.',
  }),
  mcq('s8-10-5', 'fetal-circulation', 'What does HbF’s higher affinity allow?', 'O₂ to pass from mother to fetus', ['CO₂ to pass to the fetus', 'Blood to clot in the placenta', 'The fetus to breathe air'], {
    explanation: 'Slide 45.',
  }),

  // ─── Lesson 9 · S1 What the ECG records ────────────────────────────
  mcq('s9-1-1', 'ecg-basics', 'Which leads are bipolar?', 'The standard limb leads', ['The augmented limb leads', 'The chest leads', 'All leads'], {
    explanation: 'Standard limb leads are bipolar; the others unipolar.',
  }),
  mcq('s9-1-2', 'ecg-basics', 'Why can the heart’s currents be recorded on the skin?', 'They spread through the whole body', ['The heart touches the skin', 'Electrodes enter the heart', 'The skin itself makes the current it records'], {
    explanation: 'Slide 2.',
  }),
  tf({ id: 's9-1-3', conceptId: 'ecg-basics', statement: 'Chest leads are unipolar.', answer: true, explanation: 'Slides 3–5.' }),
  mcq('s9-1-4', 'ecg-basics', 'What do the heart’s currents arise from?', 'Depolarisation and repolarisation', ['The sounds of the valves closing in each beat', 'Blood flow speed', 'Breathing'], {
    explanation: 'Slide 2.',
  }),
  fill('s9-1-5', 'ecg-basics', 'Another abbreviation for the ECG is ____.', ['EKG'], {
    explanation: 'ECG or EKG.',
  }),

  // ─── Lesson 9 · S2 Chest lead positions ────────────────────────────
  mcq('s9-2-1', 'ecg-basics', 'Where is V2 placed?', '4th intercostal space, just left of the sternum', ['4th intercostal space, just right of the sternum', '5th space, mid-clavicular line', 'Level with V4, mid-axillary line'], {
    explanation: 'V1 right, V2 left of the sternum.',
  }),
  mcq('s9-2-2', 'ecg-basics', 'Where is V6 placed?', 'Level with V4 and V5, mid-axillary line', ['Left anterior axillary line', '4th intercostal space, right of the sternum', 'Between V2 and V4'], {
    explanation: 'V6 in the mid-axillary line.',
  }),
  tf({ id: 's9-2-3', conceptId: 'ecg-basics', statement: 'V3 lies between V2 and V4.', answer: true, explanation: 'Slide 5.' }),
  mcq('s9-2-4', 'ecg-basics', 'Which lead is in the left anterior axillary line?', 'V5', ['V4', 'V6', 'V1'], {
    explanation: 'V5: anterior axillary line.',
  }),
  mcq('s9-2-5', 'ecg-basics', 'How many chest leads are there?', 'Six', ['Three', 'Twelve', 'Four'], {
    explanation: 'V1–V6.',
  }),

  // ─── Lesson 9 · S3 Waves and intervals ─────────────────────────────
  mcq('s9-3-1', 'ecg-waves', 'Which wave shows ventricular repolarisation?', 'The T wave', ['The P wave of the atria', 'The QRS complex', 'The U wave'], {
    explanation: 'T wave: ventricular repolarisation.',
  }),
  mcq('s9-3-2', 'ecg-waves', 'How long is a normal P wave?', '0.08–0.1 s', ['0.12–0.20 s', '0.2–0.4 s', '1–2 s'], {
    explanation: 'P 0.08–0.1 s.',
  }),
  tf({ id: 's9-3-3', conceptId: 'ecg-waves', statement: 'The ST segment is normally isoelectric.', answer: true, explanation: 'It shifts in ischaemia or hypoxia.' }),
  mcq('s9-3-4', 'ecg-waves', 'What does the ST segment roughly correspond to?', 'The plateau of the ventricular action potential', ['The resting period of the atria after they contract', 'Closure of the valves', 'Atrial depolarisation'], {
    explanation: 'The whole ventricle is depolarised.',
  }),
  mcq('s9-3-5', 'ecg-waves', 'What does the QT interval depend on?', 'Heart rate', ['Body weight', 'Blood group', 'Time of day'], {
    explanation: '0.2–0.4 s, depending on heart rate.',
  }),

  // ─── Lesson 9 · S4 Reading the paper ───────────────────────────────
  mcq('s9-4-1', 'ecg-rate', 'There are 20 small squares between R waves. What is the heart rate?', '75 beats/min', ['20 beats/min', '150 beats/min', '300 beats/min'], {
    explanation: '1500 ÷ 20 = 75.',
  }),
  mcq('s9-4-2', 'ecg-rate', 'How many small squares make one big square?', 'Five', ['Ten', 'Two', 'Twenty'], {
    explanation: 'One big square = 5 small = 0.2 s.',
  }),
  tf({ id: 's9-4-3', conceptId: 'ecg-rate', statement: 'Each small square on the ECG is 0.1 mV high.', answer: true, explanation: 'And 0.04 s wide.' }),
  mcq('s9-4-4', 'ecg-rate', 'There are 3 big squares between R waves. What is the heart rate?', '100 beats/min', ['300 beats/min', '60 beats/min', '30 beats/min'], {
    explanation: '300 ÷ 3 = 100.',
  }),
  mcq('s9-4-5', 'ecg-rate', 'Which is a use of the ECG?', 'Detecting electrolyte imbalances', ['Measuring blood glucose', 'Measuring lung volume', 'Measuring the brain’s electrical waves'], {
    explanation: 'Slide 17.',
  }),

  // ─── Lesson 9 · S5 Cardiac rhythms ─────────────────────────────────
  mcq('s9-5-1', 'cardiac-rhythms', 'What is a heart rate slower than normal called?', 'Bradycardia', ['Tachycardia', 'Arrhythmia', 'Fibrillation'], {
    explanation: 'Slower: bradycardia; faster: tachycardia.',
  }),
  mcq('s9-5-2', 'cardiac-rhythms', 'What mainly causes sinus arrhythmia?', 'Parasympathetic outflow to the heart', ['Damage to the SA node from coronary disease', 'Too much adrenaline', 'Heart block'], {
    explanation: 'Slide 19.',
  }),
  tf({ id: 's9-5-3', conceptId: 'cardiac-rhythms', statement: 'An arrhythmia is an abnormal rhythm.', answer: true, explanation: 'Slide 19.' }),
  mcq('s9-5-4', 'cardiac-rhythms', 'In sinus arrhythmia, when does the heart slow down?', 'In expiration', ['In inspiration', 'In exercise', 'Never'], {
    explanation: 'Slows in expiration, speeds up in inspiration.',
  }),
  mcq('s9-5-5', 'cardiac-rhythms', 'What is the normal resting heart rate?', 'About 70/min', ['About 30/min', 'About 150/min', 'About 200/min'], {
    explanation: 'Slide 18.',
  }),

  // ─── Lesson 9 · S6 Heart block ─────────────────────────────────────
  mcq('s9-6-1', 'heart-block', 'In which block does the PR interval lengthen until a beat is dropped?', 'Mobitz I (Wenckebach)', ['Mobitz II', 'First-degree block', 'Complete block'], {
    explanation: 'PR lengthens progressively until a P wave has no QRS.',
  }),
  mcq('s9-6-2', 'heart-block', 'What is the ventricles’ own slow rhythm in complete block called?', 'Idioventricular rhythm', ['Sinus rhythm', 'Sinus arrhythmia', 'Atrial flutter'], {
    explanation: 'Slide 20.',
  }),
  tf({ id: 's9-6-3', conceptId: 'heart-block', statement: 'First-degree heart block rarely needs treatment.', answer: true, explanation: 'It rarely causes symptoms.' }),
  mcq('s9-6-4', 'heart-block', 'What does the ECG show in complete heart block?', 'P waves and QRS complexes with no relationship', ['A long PR before every QRS', 'A PR that lengthens beat by beat until a QRS drops', 'Normal PR with every QRS'], {
    explanation: 'Atria and ventricles beat independently.',
  }),
  mcq('s9-6-5', 'heart-block', 'In Mobitz II block, what can the atria-to-ventricles ratio be?', '2:1 or 3:1', ['1:1 always', '1:2', '10:1 always'], {
    explanation: 'Slide 20.',
  }),
];
