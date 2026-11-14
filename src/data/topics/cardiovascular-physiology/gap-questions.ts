// Physiology → Cardiovascular Physiology: questions for the gap-fill sections
// (owner, 2026-11-13: "make sure that no concept, minor detail or anything is
// left out"). They cover lecture details the lessons had missed (shock cycle,
// Hb after a bleed, CSF support, limb leads, hyperaemia…) and the official HB2
// syllabus items the slides never taught (marked origin: 'textbook' in the
// lessons and explained there from Guyton and Costanzo).
// IDs: gL-S-n = lesson L, section S, question n.
import { fill, match, mcq, multi, order, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/cardiovascular-physiology/sources';

type Q = QuestionDraft<ConceptId>;

export const gapQuestions: Q[] = [
  // ─── Lesson 1 · Cardiac action potentials ──────────────────────────
  mcq('g1-7-1', 'cardiac-action-potentials', 'Which current carries the upstroke (phase 0) of a ventricular muscle action potential?', 'Na⁺ entry through fast voltage-gated Na⁺ channels', ['Ca²⁺ entry through L-type Ca²⁺ channels', 'Na⁺ entry through HCN (funny-current) channels', 'K⁺ exit through the inward-rectifier (I_K1) channels'], {
    explanation: 'Ventricular muscle is a fast-response tissue: fast Na⁺ channels give phase 0. In the SA node phase 0 is carried by L-type Ca²⁺.',
  }),
  mcq('g1-7-2', 'cardiac-action-potentials', 'What carries phase 0 of the SA node action potential?', 'Ca²⁺ through L-type channels', ['Na⁺ through fast Na⁺ channels', 'K⁺ through delayed rectifiers', 'Cl⁻ through chloride channels'], {
    explanation: 'Pacemaker (slow-response) cells have no functional fast Na⁺ channels; their upstroke is a Ca²⁺ current.',
  }),
  order('g1-7-3', 'cardiac-action-potentials', 'Put the events of the SA node pacemaker cycle in order.', ['Funny current (I_f) starts a slow depolarisation', 'T-type Ca²⁺ channels add to the depolarisation', 'Threshold (about −40 mV) reached; L-type Ca²⁺ channels open', 'K⁺ efflux repolarises the cell'], {
    explanation: 'Phase 4 (I_f then T-type Ca²⁺) → phase 0 (L-type Ca²⁺) → phase 3 (K⁺).',
  }),
  mcq('g1-7-4', 'cardiac-action-potentials', 'What balances the inward Ca²⁺ current during the plateau (phase 2)?', 'Outward K⁺ current through slow delayed-rectifier channels', ['Inward Na⁺ current through the fast voltage-gated Na⁺ channels', 'Outward Ca²⁺ pumping by the sarcoplasmic reticulum', 'Inward Cl⁻ current through chloride channels'], {
    explanation: 'Plateau = L-type Ca²⁺ in, balanced by I_Ks out.',
  }),
  tf({ id: 'g1-7-5', conceptId: 'cardiac-action-potentials', statement: 'Acetylcholine slows the heart by making phase 4 of the SA node potential steeper.', answer: false, explanation: 'ACh flattens phase 4 (less I_f and Ca²⁺ current, more K⁺ conductance), so threshold is reached later.', skill: 'misconception' }),
  mcq('g1-7-6', 'cardiac-action-potentials', 'Which part of the conducting system has the slowest conduction velocity?', 'The AV node', ['The Purkinje fibres', 'The bundle of His', 'The atrial muscle'], {
    explanation: 'About 0.05 m/s in the AV node — the source of the AV delay.',
  }),
  match('g1-7-7', 'cardiac-action-potentials', 'Match each ECG feature to the ventricular action-potential event.', [['QRS complex', 'Phase 0 depolarisation'], ['ST segment', 'Phase 2 plateau'], ['T wave', 'Phase 3 repolarisation']], {
    explanation: 'QRS = upstroke spreading; ST = all at plateau; T = repolarisation.',
  }),
  mcq('g1-7-8', 'cardiac-action-potentials', 'If the SA node failed, which tissue would most likely take over as pacemaker, and at roughly what rate?', 'AV node, about 40–60/min', ['Purkinje fibres, about 70–80/min', 'Atrial muscle, about 90–100/min', 'Bundle branches, about 100/min'], {
    explanation: 'Intrinsic rates: SA 70–80, AV 40–60, Purkinje 15–40/min. The next fastest takes over.',
    difficulty: 'intermediate',
  }),

  // ─── Lesson 2 · The pulse in different situations ──────────────────
  match('g2-5-1', 'pulse-abnormalities', 'Match each pulse to its typical cause.', [['Collapsing (water-hammer) pulse', 'Aortic regurgitation'], ['Slow-rising pulse', 'Aortic stenosis'], ['Pulsus paradoxus', 'Cardiac tamponade'], ['Pulsus alternans', 'Severe left ventricular failure']], {
    explanation: 'Textbook pulse characters.',
  }),
  mcq('g2-5-2', 'pulse-abnormalities', 'A patient has an irregularly irregular pulse, and the apex rate is higher than the radial rate. What is the likely rhythm?', 'Atrial fibrillation', ['Sinus arrhythmia', 'First-degree heart block', 'Atrial flutter with 2:1 block'], {
    explanation: 'AF: random ventricular beats; early beats too weak to reach the wrist give a pulse deficit.',
    difficulty: 'intermediate',
  }),
  mcq('g2-5-3', 'pulse-abnormalities', 'A weak, delayed femoral pulse compared with the radial pulse suggests:', 'Coarctation of the aorta', ['Aortic regurgitation', 'Patent ductus arteriosus', 'Atrial fibrillation'], {
    explanation: 'Radio-femoral delay = narrowing of the aorta beyond the arm branches.',
  }),
  tf({ id: 'g2-5-4', conceptId: 'pulse-abnormalities', statement: 'Pulsus paradoxus is a fall in pulse volume of more than 10 mmHg during inspiration.', answer: true, explanation: 'Seen in cardiac tamponade and severe asthma.' }),
  mcq('g2-5-5', 'pulse-abnormalities', 'Roughly how fast does the pressure wave travel in the aorta?', 'About 3–5 m/s', ['About 0.3–0.5 m/s', 'About 15–35 m/s', 'About 50 m/s'], {
    explanation: 'Guyton: 3–5 m/s in the aorta, 7–10 m/s in large branches, 15–35 m/s in small arteries — much faster than the blood.',
  }),
  mcq('g2-5-6', 'pulse-abnormalities', 'Why is the pulse slow-rising in aortic stenosis?', 'A small stroke volume is squeezed out slowly through the narrow valve', ['A large stroke volume runs back into the left ventricle in diastole', 'The arteries are stiff, so the wave travels faster', 'The atria contract against a closed tricuspid valve'], {
    explanation: 'Obstruction slows ejection and narrows the pulse pressure.',
    skill: 'cause-effect',
  }),

  // ─── Lesson 3 · Dye and thermal dilution ───────────────────────────
  mcq('g3-7-1', 'co-dilution', 'In the indicator-dilution method, cardiac output equals:', 'Amount of indicator injected ÷ area under the first-pass concentration curve', ['Area under the concentration curve ÷ amount of indicator injected', 'Peak arterial concentration of the indicator ÷ the heart rate at injection', 'Peak indicator concentration × heart rate'], {
    explanation: 'Stewart–Hamilton: CO = dose ÷ (mean concentration × time).',
  }),
  tf({ id: 'g3-7-2', conceptId: 'co-dilution', statement: 'The larger the cardiac output, the larger the area under the indicator-dilution curve.', answer: false, explanation: 'Higher flow dilutes the indicator more, so the area is smaller.', skill: 'misconception' }),
  mcq('g3-7-3', 'co-dilution', 'Why is the tail of a dye-dilution curve extrapolated rather than measured?', 'Dye that has gone round the body once returns and recirculates', ['The dye is destroyed by the liver on its very first pass through it', 'The arterial catheter clots after the peak concentration', 'The dye leaves the blood through the glomerulus in seconds'], {
    explanation: 'Recirculation would add to the curve, so the first pass is extrapolated.',
  }),
  mcq('g3-7-4', 'co-dilution', 'In thermodilution, where are the cold saline injected and the temperature measured?', 'Injected into the right atrium; measured in the pulmonary artery', ['Injected into the left ventricle; measured in the aorta', 'Injected into a forearm vein; measured in the radial artery', 'Injected into the pulmonary artery; measured in the right atrium'], {
    explanation: 'Both through a pulmonary artery catheter.',
  }),
  mcq('g3-7-5', 'co-dilution', 'Which is an advantage of thermodilution over dye dilution?', 'No recirculation, so it can be repeated often', ['It needs no catheter in the heart at all', 'It is accurate even with tricuspid regurgitation', 'It measures the O₂ consumption at the same time'], {
    explanation: 'Cold is lost to tissues and does not build up.',
  }),
  multi('g3-7-6', 'co-dilution', 'Select the three methods the syllabus lists for measuring cardiac output.', ['Direct Fick', 'Dye dilution', 'Thermal dilution'], ['Electromagnetic flowmeter on the radial artery', 'Venous occlusion plethysmography'], {
    explanation: 'Syllabus 5.8: direct Fick, dye dilution, thermal dilution.',
  }),

  // ─── Lesson 3 · Stroke work, efficiency, Laplace ───────────────────
  mcq('g3-8-1', 'stroke-work-laplace', 'What is the maximum efficiency of the normal heart as a pump?', 'About 20–25%', ['About 5–10%', 'About 50–60%', 'About 90%'], {
    explanation: 'Most energy is spent on wall tension and becomes heat; failing hearts fall to 5–10%.',
  }),
  mcq('g3-8-2', 'stroke-work-laplace', 'According to Laplace’s law, a dilated ventricle generating normal pressure needs:', 'More wall tension, so more O₂', ['Less wall tension, so less O₂', 'The same wall tension as before', 'No wall tension until the valve opens'], {
    explanation: 'Wall tension ∝ pressure × radius ÷ wall thickness.',
    skill: 'application',
  }),
  mcq('g3-8-3', 'stroke-work-laplace', 'Which change increases the heart’s O₂ consumption the most for the same extra work?', 'Raising aortic pressure', ['Raising stroke volume', 'Raising venous return', 'Lowering peripheral resistance'], {
    explanation: 'Pressure work (tension × time) costs far more O₂ than volume work (slide 58).',
  }),
  tf({ id: 'g3-8-4', conceptId: 'stroke-work-laplace', statement: 'The right ventricle does less stroke work than the left, even though both eject the same stroke volume.', answer: true, explanation: 'Stroke work = volume × pressure; pulmonary pressure is far lower.' }),
  mcq('g3-8-5', 'stroke-work-laplace', 'Why is the left ventricular wall thicker than the right?', 'A thicker wall shares the higher tension needed for systemic pressure', ['A thicker wall lets the ventricle fill faster in diastole', 'The left ventricle must eject a larger stroke volume than the right ventricle', 'The left ventricle contains more conducting tissue'], {
    explanation: 'Laplace: more thickness, less tension per unit of wall at the same pressure.',
  }),
  fill('g3-8-6', 'stroke-work-laplace', 'Stroke work × heart rate = ____ work.', ['minute', 'minute work'], { explanation: 'Work per minute.' }),

  // ─── Lesson 4 · Systolic, diastolic and pulse pressure ─────────────
  mcq('g4-10-1', 'windkessel-pressures', 'An elderly patient has stiff, non-compliant arteries. What is the typical effect on pressures?', 'Raised systolic pressure and a wider pulse pressure', ['Lower systolic pressure and a narrower pulse pressure', 'Raised diastolic pressure with an unchanged systolic', 'No change, because mean pressure is unchanged'], {
    explanation: 'Stiff arteries cannot absorb the stroke volume: isolated systolic hypertension.',
    skill: 'application',
  }),
  mcq('g4-10-2', 'windkessel-pressures', 'What happens to diastolic pressure when heart rate rises (other things equal)?', 'It rises, because there is less time for run-off', ['It falls, because the heart relaxes more completely', 'It is unchanged; only systolic pressure is affected', 'It falls, because stroke volume increases'], {
    explanation: 'Shorter diastole → less drainage before the next beat.',
  }),
  mcq('g4-10-3', 'windkessel-pressures', 'Which condition gives a very wide pulse pressure with a very low diastolic pressure?', 'Aortic regurgitation', ['Aortic stenosis', 'Constrictive pericarditis', 'Mitral stenosis'], {
    explanation: 'Blood runs back into the ventricle in diastole.',
  }),
  fill('g4-10-4', 'windkessel-pressures', 'Mean arterial pressure = cardiac output × ____.', ['total peripheral resistance', 'peripheral resistance', 'TPR'], { explanation: 'Regulation, slide 4.' }),
  mcq('g4-10-5', 'windkessel-pressures', 'Across which vessels does the largest drop in mean pressure occur?', 'Arterioles', ['Large arteries', 'Capillaries', 'Venules and veins'], {
    explanation: 'They are the resistance vessels (slide 79).',
  }),
  tf({ id: 'g4-10-6', conceptId: 'windkessel-pressures', statement: 'Systolic pressure in the arteries of the foot is slightly higher than in the aorta, even when lying flat.', answer: true, explanation: 'Wave reflection sharpens the pulse as it travels out, though mean pressure falls slightly.', difficulty: 'advanced' }),

  // ─── Lesson 4 · Critical closing pressure and aneurysms ────────────
  mcq('g4-11-1', 'critical-closing-aneurysm', 'What is the critical closing pressure?', 'The pressure below which a small vessel collapses and flow stops', ['The pressure at which the aortic valve closes in early diastole', 'The pressure that must be applied by a cuff to occlude a brachial artery', 'The pressure at which capillary filtration equals reabsorption'], {
    explanation: 'About 20 mmHg; raised by sympathetic tone.',
  }),
  mcq('g4-11-2', 'critical-closing-aneurysm', 'Why does an aneurysm tend to keep enlarging?', 'A larger radius raises wall tension at the same pressure', ['A larger radius lowers wall tension at the same pressure', 'Blood flow through it becomes laminar and silent', 'Its wall gains extra smooth muscle as it stretches'], {
    explanation: 'Laplace: T = P × r — a vicious cycle towards rupture.',
    skill: 'cause-effect',
  }),
  tf({ id: 'g4-11-3', conceptId: 'critical-closing-aneurysm', statement: 'Sympathetic vasoconstrictor tone lowers the critical closing pressure.', answer: false, explanation: 'More active tension makes the vessel close at a higher pressure.' }),
  mcq('g4-11-4', 'critical-closing-aneurysm', 'Rupture of a berry aneurysm on the circle of Willis causes:', 'Subarachnoid (haemorrhagic) stroke', ['Ischaemic stroke from a carotid embolus', 'Myocardial infarction', 'Pulmonary oedema'], {
    explanation: 'Regional Circulation slide 25: haemorrhagic stroke is usually a ruptured aneurysm.',
  }),
  mcq('g4-11-5', 'critical-closing-aneurysm', 'By Laplace’s law, why can a capillary withstand pressure with a wall one cell thick?', 'Its tiny radius keeps the wall tension small', ['Its fenestrations let the pressure escape', 'Its internal pressure is always below atmospheric', 'Its wall contains a thick elastic lamina'], {
    explanation: 'T = P × r; small r → small T (Regulation, slides 11–12).',
  }),

  // ─── Lesson 4 · Measuring organ blood flow ─────────────────────────
  mcq('g4-12-1', 'organ-flow-methods', 'In venous occlusion plethysmography, the cuff is inflated to about 40–50 mmHg so that:', 'Venous outflow stops but arterial inflow continues', ['Arterial inflow stops but venous outflow continues', 'Both arterial and venous flow stop completely', 'The Doppler shift of red cells can be heard'], {
    explanation: 'The initial rate of limb swelling then equals arterial inflow.',
  }),
  mcq('g4-12-2', 'organ-flow-methods', 'Renal plasma flow can be measured as the clearance of:', 'PAH', ['Glucose', 'Albumin', 'Inulin'], {
    explanation: 'PAH is almost completely removed in one pass. Inulin clearance measures GFR instead.',
    difficulty: 'intermediate',
  }),
  match('g4-12-3', 'organ-flow-methods', 'Match each method to its principle.', [['Electromagnetic flowmeter', 'Voltage induced by blood moving in a magnetic field'], ['Doppler', 'Frequency shift of sound reflected from moving red cells'], ['Fick / clearance', 'Uptake ÷ arteriovenous concentration difference'], ['Venous occlusion plethysmography', 'Rate of limb swelling with veins blocked']], {
    explanation: 'Syllabus 5.11.',
  }),
  mcq('g4-12-4', 'organ-flow-methods', 'A key limitation of the electromagnetic flowmeter is that:', 'The vessel must be exposed surgically', ['It only works on limbs with a cuff', 'It cannot detect the pulsatile component of flow', 'It needs a pulmonary artery catheter'], {
    explanation: 'The probe sits around the vessel.',
  }),
  fill('g4-12-5', 'organ-flow-methods', 'Cerebral blood flow can be measured with inhaled nitrous oxide by the ____ method.', ['Kety', 'Kety-Schmidt', 'Kety–Schmidt'], { explanation: 'A clearance (Fick) method.' }),
  tf({ id: 'g4-12-6', conceptId: 'organ-flow-methods', statement: 'Doppler ultrasound measures the velocity of blood; flow is then velocity × the vessel’s cross-sectional area.', answer: true, explanation: 'Q = v × A (slide 73).' }),

  // ─── Lesson 5 · Routes across the capillary wall ───────────────────
  mcq('g5-5-1', 'capillary-transport-routes', 'How does O₂ cross the capillary wall?', 'Through the endothelial cell membranes, over the whole surface', ['Only through the water-filled clefts between neighbouring endothelial cells', 'By vesicles carried across the cell', 'Through fenestrations only'], {
    explanation: 'It is lipid-soluble, so it is not limited to the clefts.',
  }),
  mcq('g5-5-2', 'capillary-transport-routes', 'How do glucose and Na⁺ cross a continuous capillary?', 'Through the water-filled clefts between endothelial cells', ['Dissolved in the lipid of the endothelial membranes', 'Only by vesicular transport (pinocytosis) across the endothelial cytoplasm', 'They cannot cross continuous capillaries at all'], {
    explanation: 'Water-soluble molecules need the pores.',
  }),
  mcq('g5-5-3', 'capillary-transport-routes', 'Arteriolar constriction after a haemorrhage tends to:', 'Lower capillary pressure, drawing fluid into the blood', ['Raise capillary pressure, pushing fluid into the tissues', 'Open more capillaries and increase filtration', 'Increase the plasma oncotic pressure directly'], {
    explanation: 'An autotransfusion (Homeostasis, slide 23).',
    skill: 'application',
  }),
  tf({ id: 'g5-5-4', conceptId: 'capillary-transport-routes', statement: 'Raising venous pressure raises capillary hydrostatic pressure and favours oedema.', answer: true, explanation: 'Post-capillary resistance/pressure ↑ → capillary pressure ↑ (slide 100).' }),
  mcq('g5-5-5', 'capillary-transport-routes', 'Pulmonary oedema develops mainly when left atrial pressure rises above about:', '25 mmHg, the plasma oncotic pressure', ['5 mmHg, the normal CVP', '10 mmHg, the normal pulmonary capillary pressure', '90 mmHg, the hepatic artery pressure'], {
    explanation: 'Lung capillaries normally sit at about 10 mmHg against an oncotic pressure of about 25 mmHg (Regional Circulation, slide 31).',
    difficulty: 'intermediate',
  }),
  mcq('g5-5-6', 'capillary-transport-routes', 'What do precapillary sphincters mainly control?', 'How many capillaries are open — the exchange area', ['The oncotic pressure of the plasma that flows through the capillary bed', 'The speed of the pressure wave', 'The direction of lymph flow'], {
    explanation: 'Slide 97: opening them raises pressure above the critical closing pressure.',
  }),

  // ─── Lesson 5 · Venous pressure, posture and CVP ───────────────────
  mcq('g5-6-1', 'venous-pressure-posture', 'Roughly what is venous pressure in the feet of a person standing perfectly still?', 'About 90 mmHg', ['About 5 mmHg', 'About 25 mmHg', 'About 180 mmHg'], {
    explanation: 'The weight of the blood column from the heart.',
  }),
  mcq('g5-6-2', 'venous-pressure-posture', 'Why does foot venous pressure fall to under about 25 mmHg when walking?', 'The muscle pump and valves break up the column of blood', ['Arterial pressure falls during exercise', 'The veins dilate and hold more blood', 'Capillary filtration in the legs stops completely during each step'], {
    explanation: 'Valves only let blood move towards the heart.',
  }),
  multi('g5-6-3', 'venous-pressure-posture', 'Select the conditions that RAISE central venous pressure.', ['Right heart failure', 'Fluid overload', 'Cardiac tamponade'], ['Haemorrhage', 'Venodilatation'], {
    explanation: 'Haemorrhage and venodilatation lower it.',
  }),
  tf({ id: 'g5-6-4', conceptId: 'venous-pressure-posture', statement: 'In varicose veins, leg venous pressure stays high during walking because the valves are incompetent.', answer: true, explanation: 'The muscle pump cannot break the column → oedema and ulcers.' }),
  mcq('g5-6-5', 'venous-pressure-posture', 'Sympathetic venoconstriction increases venous return mainly by:', 'Shifting blood stored in the veins towards the heart', ['Raising the plasma oncotic pressure', 'Reducing the resistance of the arterioles that feed the capillaries', 'Opening the arteriovenous anastomoses'], {
    explanation: 'Veins hold about half the blood (slide 81).',
  }),

  // ─── Lesson 6 · Reactive and active hyperaemia ─────────────────────
  mcq('g6-9-1', 'hyperaemia', 'Reactive hyperaemia is:', 'An overshoot of flow after a period of occlusion', ['A rise in flow in proportion to the tissue’s current metabolic activity', 'Vasoconstriction caused by cold', 'Flushing caused by histamine in the skin'], {
    explanation: 'The longer the occlusion, the bigger and longer the overshoot.',
  }),
  mcq('g6-9-2', 'hyperaemia', 'Active (functional) hyperaemia is best illustrated by:', 'Increased blood flow to exercising muscle', ['A red flush after a tourniquet is released', 'Pallor of the skin in haemorrhagic shock', 'The white reaction after stroking the skin'], {
    explanation: 'Flow matched to metabolic activity.',
  }),
  tf({ id: 'g6-9-3', conceptId: 'hyperaemia', statement: 'Reactive hyperaemia still occurs in a tissue whose sympathetic nerves have been cut.', answer: true, explanation: 'It is a local (metabolic and myogenic) mechanism.' }),
  mcq('g6-9-4', 'hyperaemia', 'Which organ shows the WEAKEST autoregulation?', 'Skin', ['Brain', 'Kidney', 'Heart'], {
    explanation: 'Skin flow is set mainly by sympathetic nerves for temperature control.',
  }),
  mcq('g6-9-5', 'hyperaemia', 'On the autoregulation curve, flow stays nearly constant because:', 'Resistance rises as pressure rises', ['Resistance falls as pressure rises', 'Cardiac output falls as pressure rises', 'Blood viscosity rises as pressure rises'], {
    explanation: 'Flow = ΔP ÷ R; R tracks P over the autoregulatory range.',
  }),

  // ─── Lesson 6 · Circulating hormones and local agents ──────────────
  mcq('g6-10-1', 'circulating-hormones', 'An infusion of noradrenaline usually causes:', 'A rise in BP and a reflex slowing of the heart', ['A fall in BP followed by a marked reflex tachycardia', 'Vasodilatation in muscle through β2 receptors', 'No change in heart rate because β1 is blocked'], {
    explanation: 'α constriction raises BP; baroreceptors slow the heart.',
    skill: 'prediction',
    difficulty: 'intermediate',
  }),
  mcq('g6-10-2', 'circulating-hormones', 'At modest levels, adrenaline dilates vessels in skeletal muscle through:', 'β2 receptors', ['α1 receptors', 'Muscarinic receptors', 'V1 receptors'], {
    explanation: 'β2 in muscle, liver and coronary vessels.',
  }),
  match('g6-10-3', 'circulating-hormones', 'Match each agent to its main vascular effect.', [['Angiotensin II', 'Powerful arteriolar constriction'], ['Bradykinin', 'Dilatation and leaky venules via NO'], ['Prostacyclin (PGI₂)', 'Dilatation and less platelet sticking'], ['Thromboxane A₂', 'Constriction']], {
    explanation: 'Syllabus 5.13 local and humoral agents.',
  }),
  mcq('g6-10-4', 'circulating-hormones', 'ADH (vasopressin) causes vasoconstriction through which receptor?', 'V1', ['V2', 'β1', 'H2'], {
    explanation: 'V1 on vessels (high levels, as in haemorrhage); V2 in the kidney (water retention).',
  }),
  multi('g6-10-5', 'circulating-hormones', 'Select the effects of angiotensin II.', ['Arteriolar constriction', 'Aldosterone release', 'Thirst'], ['Vasodilatation of muscle beds', 'Inhibition of ADH release'], {
    explanation: 'It also stimulates ADH release.',
  }),

  // ─── Lesson 6 · Other reflexes ──────────────────────────────────────
  mcq('g6-11-1', 'other-cv-reflexes', 'Below about what arterial pressure do the peripheral chemoreceptors start to support BP?', 'About 80 mmHg', ['About 120 mmHg', 'About 160 mmHg', 'About 20 mmHg'], {
    explanation: 'Their own blood flow falls and they become hypoxic.',
  }),
  mcq('g6-11-2', 'other-cv-reflexes', 'The CNS ischaemic response is:', 'An intense sympathetic discharge when brainstem flow falls', ['A vagal slowing of the heart triggered by inflation of the lungs', 'A fall in BP when the atria are stretched', 'Dilatation of skin vessels during heat stress'], {
    explanation: 'The strongest pressor response; Cushing’s reflex is a form of it.',
  }),
  mcq('g6-11-3', 'other-cv-reflexes', 'Strong stimulation of ventricular C-fibre (Bezold–Jarisch) receptors causes:', 'Bradycardia and hypotension', ['Tachycardia and hypertension', 'Tachycardia and hypotension', 'Bradycardia and hypertension'], {
    explanation: 'Thought to contribute to vasovagal fainting.',
  }),
  fill('g6-11-4', 'other-cv-reflexes', 'The reflex in which atrial stretch speeds the heart is the ____ reflex.', ['Bainbridge'], { explanation: 'Matches the type B atrial receptors (Regulation, slide 31).' }),
  mcq('g6-11-5', 'other-cv-reflexes', 'Which centre organises the defence (fight-or-flight) cardiovascular pattern?', 'The hypothalamus', ['The cerebellum', 'The spinal cord alone', 'The nucleus of the tractus solitarius alone'], {
    explanation: 'Tachycardia, raised BP, muscle vasodilatation.',
  }),

  // ─── Lesson 6 · Short- versus long-term control ────────────────────
  mcq('g6-12-1', 'bp-short-long-term', 'Why can the baroreceptor reflex NOT set long-term blood pressure?', 'Baroreceptors reset to a new pressure within a day or two', ['Baroreceptors only respond to falls, never to rises', 'The reflex takes several days to begin acting after a change in pressure', 'Baroreceptors are found only in low-pressure areas'], {
    explanation: 'They adapt, so they buffer short-term changes only.',
  }),
  order('g6-12-2', 'bp-short-long-term', 'Order these BP-control mechanisms from fastest to slowest.', ['Baroreceptor reflex', 'Renin–angiotensin vasoconstriction', 'Renal pressure natriuresis and diuresis'], {
    explanation: 'Seconds → minutes to hours → days.',
  }),
  mcq('g6-12-3', 'bp-short-long-term', 'Pressure natriuresis means that a raised arterial pressure:', 'Increases renal excretion of salt and water', ['Decreases renal excretion of salt and water', 'Stimulates renin release from the kidney', 'Increases ADH secretion from the pituitary'], {
    explanation: 'Blood volume falls until pressure returns to its set point.',
  }),
  tf({ id: 'g6-12-4', conceptId: 'bp-short-long-term', statement: 'The kidney is regarded as the dominant long-term controller of blood pressure.', answer: true, explanation: 'Through salt and water balance.' }),
  mcq('g6-12-5', 'bp-short-long-term', 'Which mechanism acts over minutes to hours?', 'Fluid shift from the tissues into the capillaries', ['The baroreceptor reflex acting through the vagus nerve', 'The CNS ischaemic response', 'Pressure natriuresis over several days'], {
    explanation: 'Along with renin–angiotensin, ADH and stress-relaxation.',
  }),

  // ─── Lesson 7 · The vicious cycle of irreversible shock ────────────
  order('g7-8-1', 'shock-vicious-cycle', 'Put the steps of the irreversible-shock cycle (Homeostasis slide 27) in order.', ['Cell hypoxia', 'Lactic acid accumulation and fall in pH', 'Failure of the sodium pump', 'Lysosomes release digestive enzymes', 'Capillary endothelium damaged'], {
    explanation: 'Hypoxia → acidosis → membrane/pump failure → lysosomal enzymes → toxins → endothelial damage → more hypoxia.',
  }),
  mcq('g7-8-2', 'shock-vicious-cycle', 'When the sodium pump fails in shocked cells:', 'K⁺ leaks out, and Na⁺ and water enter the cell', ['Na⁺ leaks out, and K⁺ and water enter the cell', 'Ca²⁺ is pumped out faster than normal', 'The cell shrinks as water leaves it'], {
    explanation: 'Slide 27: efflux of potassium; influx of sodium and water.',
  }),
  mcq('g7-8-3', 'shock-vicious-cycle', 'On slide 27, failure of the precapillary sphincters leads to:', 'Peripheral pooling of blood', ['Recovery of capillary perfusion', 'Increased venous return', 'A rise in blood pH'], {
    explanation: 'Side arm: vasoconstriction → sphincter failure → pooling.',
  }),
  tf({ id: 'g7-8-4', conceptId: 'shock-vicious-cycle', statement: 'In irreversible shock, restoring the blood volume no longer restores the circulation.', answer: true, explanation: 'The cycle has become self-sustaining (slide 25).' }),
  mcq('g7-8-5', 'shock-vicious-cycle', 'Why does acidosis worsen shock?', 'It depresses the heart and the vessels’ response to catecholamines', ['It raises the O₂ affinity of haemoglobin and so limits O₂ delivery to tissues', 'It stimulates the Na⁺–K⁺ pump excessively', 'It increases the plasma oncotic pressure'], {
    explanation: 'Homeostasis slide 21.',
  }),

  // ─── Lesson 7 · Hb after a haemorrhage ─────────────────────────────
  mcq('g7-9-1', 'haemorrhage-hb', 'Immediately after losing a large volume of whole blood, the haemoglobin concentration is:', 'Unchanged', ['Markedly raised', 'Markedly reduced', 'Zero'], {
    explanation: 'Cells and plasma are lost in proportion.',
    skill: 'prediction',
  }),
  mcq('g7-9-2', 'haemorrhage-hb', 'Why does haematocrit fall in the hours to days after a bleed?', 'Interstitial fluid enters the vessels and dilutes the blood', ['Red cells are destroyed in the spleen in the hours after every bleed', 'Erythropoietin suppresses red cell production', 'Plasma is lost through the skin as in burns'], {
    explanation: 'Low capillary hydrostatic pressure draws fluid in (slide 23–24).',
  }),
  mcq('g7-9-3', 'haemorrhage-hb', 'How long does erythropoietin take to restore Hb after a bleed (slide 24)?', 'About 4–5 weeks', ['About 12–72 hours', 'About 2 days', 'About 6 months'], {
    explanation: 'Volume is restored in 12–72 h; Hb in 4–5 weeks.',
  }),
  mcq('g7-9-4', 'haemorrhage-hb', 'In burns shock, the haematocrit:', 'Rises (haemoconcentration)', ['Falls, because the blood is diluted (haemodilution)', 'Is always unchanged', 'Falls to zero'], {
    explanation: 'Plasma exudes from the skin; cells stay (slide 28).',
  }),
  tf({ id: 'g7-9-5', conceptId: 'haemorrhage-hb', statement: 'A normal haemoglobin measured soon after an injury rules out major blood loss.', answer: false, explanation: 'Hb only falls after fluid has shifted in.', skill: 'misconception' }),

  // ─── Lesson 8 · Supporting the brain, CSF tap, brain fuel ──────────
  mcq('g8-10-1', 'brain-support-fuel', 'What anchors the brain to the arachnoid (slide 15)?', 'Trabeculae carrying blood vessels and nerves', ['The dural venous sinuses lying between the two dural layers', 'The choroid plexus', 'The arachnoid villi'], {
    explanation: 'With the CSF, they check brain movement in trauma.',
  }),
  mcq('g8-10-2', 'brain-support-fuel', 'Where is the dura attached (slide 15)?', 'To the bone of the skull', ['To the pia mater', 'To the brain surface itself, beneath the pia', 'To the choroid plexus'], {
    explanation: 'Slide 15.',
  }),
  mcq('g8-10-3', 'brain-support-fuel', 'Why can a CSF tap cause headache?', 'Less CSF reduces buoyancy, so the brain sags on pain-sensitive structures', ['CSF loss raises intracranial pressure and so triggers Cushing’s reflex', 'The needle damages the spinal cord at L3–L4', 'CSF loss stops glucose reaching the brain'], {
    explanation: 'Slide 15 notes pain after CSF removal; the textbook explains why.',
    skill: 'cause-effect',
  }),
  mcq('g8-10-4', 'brain-support-fuel', 'Sustained, partial breakdown of the blood–brain barrier occurs in (slide 18):', 'Brain tumours, inflammation and oedema', ['Normal sleep, mild exercise and ordinary daily activity', 'Transient changes in blood pressure', 'Hypoglycaemia alone'], {
    explanation: 'Transient breaches have little ill effect.',
  }),
  mcq('g8-10-5', 'brain-support-fuel', 'In prolonged starvation, the brain chiefly switches to:', 'Ketone bodies made from fat', ['Free fatty acids taken straight from the blood', 'Lactate made by red cells', 'Glycogen stored in neurons'], {
    explanation: 'Slide 24 says other substances are used; Guyton clarifies: ketone bodies, as fatty acids barely cross the barrier.',
  }),

  // ─── Lesson 8 · Coronary flow through the cycle ────────────────────
  mcq('g8-11-1', 'coronary-flow-detail', 'When does left ventricular coronary flow peak?', 'Early diastole', ['Isovolumetric contraction', 'Rapid ejection', 'Late systole'], {
    explanation: 'Systolic compression stops it; it rebounds in early diastole.',
  }),
  mcq('g8-11-2', 'coronary-flow-detail', 'Which layer of the left ventricle is most vulnerable to ischaemia?', 'Subendocardium', ['Subepicardium', 'Pericardium', 'Middle third equally with the outer third'], {
    explanation: 'It is squeezed hardest in systole.',
  }),
  tf({ id: 'g8-11-3', conceptId: 'coronary-flow-detail', statement: 'Right ventricular coronary flow continues during systole.', answer: true, explanation: 'Lower wall pressure compresses its vessels less.' }),
  mcq('g8-11-4', 'coronary-flow-detail', 'About what fraction of O₂ does the heart extract from coronary blood at rest?', 'About 70–75%', ['About 25%', 'About 5%', 'About 95–100%'], {
    explanation: 'So it must raise flow to get more O₂ (slide 58).',
  }),
  fill('g8-11-5', 'coronary-flow-detail', 'The coronary openings stay ____ throughout the cardiac cycle (slide 27).', ['patent', 'open'], { explanation: 'Slide 27.' }),
  mcq('g8-11-6', 'coronary-flow-detail', 'Resting coronary blood flow is about:', '225–250 mL/min', ['About 25–50 mL/min', '1.1–1.2 L/min', '5 L/min'], {
    explanation: 'About 4–5% of cardiac output.',
  }),

  // ─── Lesson 8 · Fetal circulation ───────────────────────────────────
  match('g8-12-1', 'fetal-shunts', 'Match each fetal structure to its adult remnant.', [['Foramen ovale', 'Fossa ovalis'], ['Ductus arteriosus', 'Ligamentum arteriosum'], ['Ductus venosus', 'Ligamentum venosum'], ['Umbilical vein', 'Ligamentum teres']], {
    explanation: 'Textbook remnants; slide 43 labels the fetal structures.',
  }),
  mcq('g8-12-2', 'fetal-shunts', 'Which fetal shunt lets blood bypass the liver?', 'Ductus venosus', ['Ductus arteriosus', 'Foramen ovale', 'Umbilical arteries'], {
    explanation: 'Umbilical vein → ductus venosus → IVC.',
  }),
  mcq('g8-12-3', 'fetal-shunts', 'Why does the foramen ovale close at birth?', 'Left atrial pressure rises above right atrial pressure', ['Right atrial pressure rises above left atrial pressure', 'The ductus arteriosus dilates', 'Prostaglandin levels rise sharply'], {
    explanation: 'More pulmonary venous return to the left atrium; less IVC return to the right.',
    skill: 'cause-effect',
  }),
  mcq('g8-12-4', 'fetal-shunts', 'What makes the ductus arteriosus constrict after birth?', 'Rising PO₂ and falling prostaglandins', ['Falling PO₂ and rising prostaglandins', 'Rising pulmonary vascular resistance', 'Clamping of the umbilical vein alone'], {
    explanation: 'Prostaglandins keep it open in the fetus.',
  }),
  order('g8-12-5', 'fetal-shunts', 'Trace oxygenated blood from the placenta in the fetus.', ['Umbilical vein', 'Ductus venosus', 'Inferior vena cava', 'Right atrium', 'Foramen ovale', 'Left atrium'], {
    explanation: 'Then left ventricle → aorta → head and arms.',
  }),
  tf({ id: 'g8-12-6', conceptId: 'fetal-shunts', statement: 'In the fetus, most blood ejected by the right ventricle goes through the lungs.', answer: false, explanation: 'The collapsed lungs have high resistance, so most goes through the ductus arteriosus.' }),

  // ─── Lesson 8 · Renal and skeletal muscle circulations ─────────────
  mcq('g8-13-1', 'renal-muscle-circulation', 'About what share of resting cardiac output goes to the kidneys?', 'About 20–22%', ['About 4–5% of the output', 'About 50%', 'About 1%'], {
    explanation: 'About 1.1–1.2 L/min for under 1% of body weight.',
  }),
  mcq('g8-13-2', 'renal-muscle-circulation', 'Which renal feature is unusual among circulations?', 'Two capillary beds in series', ['Almost no autoregulation of flow at all', 'Flow mainly to the medulla', 'No sympathetic innervation'], {
    explanation: 'Glomerular (high pressure) then peritubular (low pressure).',
  }),
  mcq('g8-13-3', 'renal-muscle-circulation', 'Tubuloglomerular feedback signals from which structure?', 'The macula densa of the juxtaglomerular apparatus', ['The vasa recta in the medulla', 'The carotid sinus at the bifurcation of the common carotid', 'The arachnoid villi in the skull'], {
    explanation: 'Part of renal autoregulation.',
  }),
  mcq('g8-13-4', 'renal-muscle-circulation', 'By how much can skeletal muscle blood flow rise in heavy exercise?', 'About 15–25 times', ['About 2 times', 'About 100 times', 'It does not change'], {
    explanation: 'From about 3–4 to 50+ mL/100 g/min.',
  }),
  tf({ id: 'g8-13-5', conceptId: 'renal-muscle-circulation', statement: 'A strong sustained (tonic) muscle contraction can stop blood flow through the muscle.', answer: true, explanation: 'Above about a third of maximum force, causing fatigue.' }),
  mcq('g8-13-6', 'renal-muscle-circulation', 'Why does urine output fall in haemorrhagic shock?', 'Sympathetic constriction of renal vessels lowers GFR', ['Renal autoregulation raises GFR to dangerous levels', 'The vasa recta take over all renal blood flow', 'ADH falls, so the kidney stops reabsorbing most of its filtered water'], {
    explanation: 'Homeostasis, slide 20.',
  }),

  // ─── Lesson 8 · Skin in heat, cold, emotion and shock ──────────────
  mcq('g8-14-1', 'skin-heat-shock', 'Arteriovenous anastomoses in the skin are controlled mainly by:', 'Sympathetic noradrenergic nerves', ['Local metabolites such as adenosine', 'Circulating ANP from the atria', 'Parasympathetic cholinergic nerves'], {
    explanation: 'Little local autoregulation in skin.',
  }),
  mcq('g8-14-2', 'skin-heat-shock', 'In haemorrhagic shock in a hot environment, skin vessels usually:', 'Constrict — pressure control overrides temperature control', ['Dilate fully — temperature control always overrides pressure control', 'Show no change from normal tone', 'Dilate only in the hands and feet'], {
    explanation: 'Answer to Regional Circulation slide 41.',
    skill: 'application',
    difficulty: 'intermediate',
  }),
  mcq('g8-14-3', 'skin-heat-shock', 'In which type of shock may the skin be warm and flushed?', 'Septic (distributive) shock', ['Hypovolaemic shock after a haemorrhage', 'Cardiogenic shock', 'Obstructive shock'], {
    explanation: 'Vessels are dilated by bacterial toxins (Homeostasis, slide 29).',
  }),
  tf({ id: 'g8-14-4', conceptId: 'skin-heat-shock', statement: 'Heat exposure lowers tolerance to standing and to blood loss.', answer: true, explanation: 'Blood pools in dilated skin vessels (heat syncope).' }),
  mcq('g8-14-5', 'skin-heat-shock', 'What is the subcutaneous venous plexus?', 'A large store of blood under the skin that carries heat outwards', ['A network of lymph vessels that drains the dermis and returns protein to the blood', 'The capillaries that form the white reaction', 'Sympathetic nerves supplying sweat glands'], {
    explanation: 'Filling it moves heat to the surface.',
  }),

  // ─── Lesson 9 · Limb leads ──────────────────────────────────────────
  match('g9-6-1', 'limb-leads', 'Match each standard limb lead to its electrodes (− to +).', [['Lead I', 'Right arm to left arm'], ['Lead II', 'Right arm to left leg'], ['Lead III', 'Left arm to left leg']], {
    explanation: 'Slide 3 (picture).',
  }),
  mcq('g9-6-2', 'limb-leads', 'Which electrode is the ground?', 'Right leg', ['Left leg', 'Right arm', 'Left arm'], {
    explanation: 'Slide 3: RL is the neutral electrode.',
  }),
  fill('g9-6-3', 'limb-leads', 'Einthoven’s law: lead II = lead I + lead ____.', ['III', '3', 'three'], { explanation: 'The three limb leads form a closed triangle.' }),
  mcq('g9-6-4', 'limb-leads', 'What is the axis of lead aVF?', '+90°', ['0°', '−30°', '−150°'], {
    explanation: 'Slide 4: aVR −150°, aVL −30°, aVF +90°.',
  }),
  mcq('g9-6-5', 'limb-leads', 'Leads I, II and III are described as:', 'Bipolar', ['Unipolar', 'Augmented', 'Precordial'], {
    explanation: 'Each compares two limbs (slide 3). Augmented and chest leads are unipolar.',
  }),
  mcq('g9-6-6', 'limb-leads', 'Right ventricular hypertrophy shifts the mean electrical axis to the:', 'Right', ['Left', 'It does not change the axis', 'Upward and to the left'], {
    explanation: 'The thicker chamber dominates the electrical vector.',
  }),

  // ─── Lesson 9 · From action potential to ECG; ectopics ─────────────
  mcq('g9-7-1', 'ap-to-ecg', 'Why is the ST segment normally flat?', 'The whole ventricle is at the plateau, so no current flows', ['The atria are repolarising during the ST segment', 'The AV node delays the impulse during it', 'The ventricles are fully relaxed and resting at their −90 mV potential'], {
    explanation: 'Slide 11: entire ventricle depolarised.',
  }),
  mcq('g9-7-2', 'ap-to-ecg', 'Where is atrial repolarisation on the ECG?', 'Hidden in the QRS complex', ['In the second half of the P wave', 'In the T wave', 'In the U wave'], {
    explanation: 'Small and buried in the larger ventricular complex.',
  }),
  mcq('g9-7-3', 'ap-to-ecg', 'A ventricular ectopic beat typically shows:', 'An early, wide, bizarre QRS with no P wave', ['An early, normal QRS after an abnormal P wave', 'A long PR interval before every QRS', 'Saw-tooth waves between narrow QRS complexes'], {
    explanation: 'It spreads slowly through ordinary muscle, and is usually followed by a compensatory pause.',
  }),
  match('g9-7-4', 'ap-to-ecg', 'Match each potassium disturbance to its ECG sign.', [['High K⁺', 'Tall peaked T waves'], ['Low K⁺', 'Prominent U waves']], {
    explanation: 'Electrolyte imbalance is one use of the ECG (slide 17).',
  }),
  tf({ id: 'g9-7-5', conceptId: 'ap-to-ecg', statement: 'The T wave is upright in most leads because ventricular repolarisation travels in the opposite direction to depolarisation.', answer: true, explanation: 'Repolarisation runs from the outer wall inwards.', difficulty: 'advanced' }),
  mcq('g9-7-6', 'ap-to-ecg', 'An idioventricular rhythm runs at about:', '15–40 beats/min', ['60–100 beats/min', '100–150 beats/min', '250–350 beats/min'], {
    explanation: 'The intrinsic rate of the Purkinje system (slide 20).',
  }),

  // ─── Lesson 9 · Flutter and fibrillation ────────────────────────────
  match('g9-8-1', 'flutter-fibrillation', 'Match each rhythm to its ECG.', [['Atrial flutter', 'Saw-tooth waves with 2:1 or 3:1 block'], ['Atrial fibrillation', 'No P waves; irregularly irregular QRS'], ['Ventricular fibrillation', 'Chaotic waves with no QRS complexes']], {
    explanation: 'Slide 28 homework.',
  }),
  mcq('g9-8-2', 'flutter-fibrillation', 'Which rhythm produces no cardiac output?', 'Ventricular fibrillation', ['Atrial fibrillation', 'Atrial flutter', 'First-degree heart block'], {
    explanation: 'Death in minutes unless defibrillated.',
  }),
  mcq('g9-8-3', 'flutter-fibrillation', 'Which mechanism underlies most flutter and fibrillation?', 'Re-entry (circus movement)', ['Complete AV block', 'Increased vagal tone', 'Hyperpolarisation of the SA node'], {
    explanation: 'An impulse keeps travelling round a loop of recovered muscle.',
  }),
  multi('g9-8-4', 'flutter-fibrillation', 'Select the factors that favour re-entry.', ['A long pathway (dilated heart)', 'Slow conduction', 'A short refractory period'], ['A long refractory period', 'Fast conduction'], {
    explanation: 'Guyton.',
  }),
  mcq('g9-8-5', 'flutter-fibrillation', 'Why is stroke a risk in atrial fibrillation?', 'Clots form in the quivering atria and embolise', ['The ventricles stop pumping completely', 'Heart rate falls below 20 beats/min', 'Pulmonary pressure rises above systemic pressure'], {
    explanation: 'Stagnant blood in non-contracting atria.',
  }),
  mcq('g9-8-6', 'flutter-fibrillation', 'In atrial flutter at 300/min with 2:1 block, the ventricular rate is about:', '150/min', ['300/min', '75/min', '600/min'], {
    explanation: 'Half the atrial impulses pass the AV node.',
    skill: 'application',
  }),
  tf({ id: 'g9-8-7', conceptId: 'flutter-fibrillation', statement: 'Defibrillation works by depolarising the whole heart at once so the SA node can take over.', answer: true, explanation: 'All cells become refractory together, ending re-entry.' }),
];
