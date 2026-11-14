// Physiology → Cardiovascular Physiology — layer 1 (learn by answering) and
// reading-layer extras. Checkpoint IDs: cN-xx; recall prompts: rN-xx.
import type { LessonConfusion } from '@/data/lesson-types';
import { ask, fill, learn, match, mcq, multi, order, recall, type InteractiveDraft } from '@/data/topics/build';
import { BOOKS, c1, c2, c3, c4, c5, type ConceptId } from '@/data/topics/cardiovascular-physiology/sources';

type Steps = InteractiveDraft<ConceptId>[];

export const interactive: Record<string, Steps> = {
  // ─── Lesson 1 — Conduction and the cardiac cycle ───────────────────
  'cardiovascular-physiology-1': [
    ask(
      mcq('c1-01', 'conduction-system', 'Every part of the conduction system can fire on its own. Which part normally sets the heart rate?', 'The SA node', ['The AV node', 'The bundle of His', 'The Purkinje fibres'], {
        explanation: 'Slide 7: all parts can discharge spontaneously, but they are controlled by the SA node — the pacemaker.',
        skill: 'prediction',
      })
    ),
    learn('The conduction path', ['SA node (junction of SVC and right atrium) → internodal tracts (Bachmann, Wenckebach, Thorel) → AV node (behind the tricuspid valve) → bundle of His → Purkinje fibres. Contraction follows depolarisation.'], {
      sourceRefs: c1([8, 9, 10]),
    }),
    ask(
      order('c1-02', 'conduction-system', 'Put the conduction system in order.', ['SA node', 'Internodal pathways', 'AV node', 'Bundle of His', 'Purkinje fibres'], {
        explanation: 'Slide 8.',
      })
    ),
    learn('Filling and ejecting', [
      'Diastole: AV valves open, semilunar valves shut; 70% of filling is passive, 30% from atrial systole.',
      'Systole: AV valves close → isovolumetric contraction → semilunar valves open (aorta ~80, pulmonary ~10 mmHg) → ejection → protodiastole → isovolumetric relaxation → AV valves open.',
    ], { sourceRefs: c1([12, 13, 14, 15, 17]) }),
    ask(
      order('c1-03', 'cycle-phases', 'Order the events from the end of diastole.', ['Mitral and tricuspid valves close', 'Isovolumetric contraction', 'Aortic and pulmonary valves open', 'Ejection', 'Aortic and pulmonary valves close', 'Isovolumetric relaxation'], {
        explanation: 'Slides 13–17.',
      })
    ),
    ask(
      fill('c1-04', 'cycle-volumes', 'With an end-diastolic volume of about 130 mL and a stroke volume of about 85 mL, the ejection fraction is about ____%.', ['65', '65%'], {
        explanation: 'Slide 16: EDV ≈ 130 mL, stroke volume ≈ 70–90 mL, ejection fraction ≈ 65% (85 ÷ 130).',
      })
    ),
    learn('Tachycardia steals diastole', ['A faster rate shortens systole a little but diastole much more — and diastole is when the ventricles fill and the coronary arteries flow.'], {
      sourceRefs: c1([20]),
    }),
    ask(
      mcq('c1-05', 'fast-heart-rate', 'Why is a very fast heart rate dangerous to the myocardium?', 'Diastole, when coronary flow occurs, is shortened much more than systole', ['Systole lengthens until it takes up most of each cardiac cycle, starving the muscle', 'The heart muscle becomes tetanised, like skeletal muscle', 'The SA node stops firing and the AV node takes over'], {
        explanation: 'Slide 20. Cardiac muscle cannot be tetanised because of its long refractory period.',
        skill: 'cause-effect',
      })
    ),
    recall('r1-01', 'valve-timing', 'Explain why the right ventricle ejects before the left, and why the aortic valve closes before the pulmonary valve in inspiration.', [
      'The right ventricle pushes against the lower pressure of the pulmonary artery, so it starts ejecting first even though the left contracts first.',
      'In inspiration, negative intrathoracic pressure increases venous return and lowers pulmonary impedance, prolonging right ventricular ejection.',
      'So the pulmonary valve closes after the aortic valve — the basis of splitting of S2.',
    ]),
    learn('Cardiac action potentials', ['Ventricular muscle: phase 0 fast Na⁺ in, plateau Ca²⁺ in balanced by K⁺ out, phase 3 K⁺ out. SA node: no resting potential — the funny current and T-type Ca²⁺ drift it to threshold (about −40 mV), then L-type Ca²⁺ fires it.', 'The plateau keeps the muscle refractory until it relaxes, so the heart cannot be tetanised. QRS ↔ phase 0, ST ↔ plateau, T ↔ phase 3.'], { sourceRefs: [...c1([20]), ...BOOKS] }),
    ask(
      mcq('c1-g1', 'cardiac-action-potentials', 'Noradrenaline speeds the heart mainly by:', 'Steepening phase 4 of the SA node potential', ['Lengthening the ventricular plateau phase', 'Hyperpolarising the SA node cells further', 'Slowing conduction through the AV node'], {
        explanation: 'More funny current and Ca²⁺ current → threshold reached sooner.',
        skill: 'cause-effect',
      })
    ),
  ],

  // ─── Lesson 2 — Pulse, JVP, sounds and murmurs ─────────────────────
  'cardiovascular-physiology-2': [
    ask(
      mcq('c2-01', 'arterial-pulse', 'When you feel the radial pulse, what are you actually feeling?', 'A pressure wave expanding the arterial wall', ['Blood arriving from the heart at that moment', 'The arterial wall contracting', 'The heart sound transmitted along the artery'], {
        explanation: 'Slide 24: the pulse is a pressure wave, independent of the velocity of blood.',
        skill: 'prediction',
      })
    ),
    learn('JVP waves', ['a = atrial contraction; x = atrial relaxation; c = tricuspid valve bulging up in isovolumetric contraction; v = atrial filling with tricuspid shut; y = tricuspid opens.'], {
      sourceRefs: c1([26, 27]),
    }),
    ask(
      match('c2-02', 'jvp-waves', 'Match each JVP feature to its cause.', [
        ['a wave', 'Atrial contraction'],
        ['c wave', 'Tricuspid valve moving up in isovolumetric contraction'],
        ['v wave', 'Passive atrial filling with the tricuspid closed'],
        ['y descent', 'Opening of the tricuspid valve'],
      ], { explanation: 'Slide 27.' })
    ),
    ask(
      mcq('c2-03', 'jvp-clinical', 'In complete heart block a “giant a wave” appears in the JVP. Why?', 'The atrium contracts against a closed tricuspid valve', ['The tricuspid valve leaks during ventricular systole', 'Venous return falls because the ventricles beat slowly', 'The right ventricle fails and backs blood into the neck'], {
        explanation: 'Slide 28. A big c wave suggests tricuspid incompetence instead.',
        skill: 'cause-effect',
      })
    ),
    learn('Sounds and murmurs', [
      'S1 = mitral and tricuspid closing (start of systole); S2 = aortic and pulmonary closing (start of diastole). S2 splits in inspiration.',
      'Murmurs come from turbulence. A semilunar stenosis or an AV-valve leak happens in systole; the reverse lesions are diastolic.',
    ], { sourceRefs: c1([30, 34, 35, 36]) }),
    ask(
      match('c2-04', 'murmurs', 'Match each lesion to the timing of its murmur.', [
        ['Aortic stenosis', 'Systolic'],
        ['Aortic incompetence', 'Diastolic'],
        ['Mitral stenosis', 'Diastolic'],
        ['Mitral incompetence', 'Systolic'],
      ], { explanation: 'Slide 36.' })
    ),
    recall('r2-01', 'heart-sounds', 'Describe S1 and S2: which valves, when in the cycle, and what makes S2 loud.', [
      'S1: tricuspid and mitral valves closing at about the same time, at the beginning of ventricular systole.',
      'S2: aortic and pulmonary valves closing, at the end of systole/beginning of diastole.',
      'S2 is loud when aortic or pulmonary artery pressure is high, because the valves close briskly.',
    ]),
    learn('Abnormal pulses', ['Collapsing (water-hammer) → aortic regurgitation; slow-rising → aortic stenosis; alternans → left ventricular failure; paradoxus (falls >10 mmHg on inspiration) → tamponade; irregularly irregular with a pulse deficit → atrial fibrillation; radio-femoral delay → coarctation.'], { sourceRefs: BOOKS }),
    ask(
      mcq('c2-g1', 'pulse-abnormalities', 'A large pulse that rises and falls away quickly, with a wide pulse pressure, suggests:', 'Aortic regurgitation', ['Aortic stenosis', 'Cardiac tamponade', 'Coarctation of the aorta'], {
        explanation: 'The collapsing (water-hammer) pulse.',
      })
    ),
  ],

  // ─── Lesson 3 — Cardiac output ─────────────────────────────────────
  'cardiovascular-physiology-3': [
    ask(
      mcq('c3-01', 'cardiac-output-definition', 'Heart rate 70/min, stroke volume 80 mL. What is the cardiac output?', '5.6 L/min', ['0.875 L/min', '150 mL/min', '56 L/min'], {
        explanation: 'CO = HR × SV = 70 × 80 mL = 5,600 mL/min (slide 41).',
        skill: 'application',
      })
    ),
    learn('Starling’s law', ['Preload = how far the muscle is stretched before contracting; afterload = the resistance it ejects against. The energy of contraction is proportional to the initial fibre length (heterometric regulation).'], {
      sourceRefs: c1([44, 48]),
    }),
    ask(
      multi('c3-02', 'frank-starling', 'Which increase end-diastolic volume? Select all that apply.', ['Stronger atrial contraction', 'Increased total blood volume', 'Increased venous tone', 'Skeletal muscle pumping'], ['Standing still for a long time', 'Pericardial effusion'], {
        explanation: 'Slides 48–49: standing and pericardial effusion decrease EDV.',
      })
    ),
    learn('Contractility', ['Catecholamines → β1 → adenylyl cyclase → cAMP → positive inotropy. Xanthines (caffeine, theophylline) block cAMP breakdown. The vagus is negatively inotropic and chronotropic.'], {
      sourceRefs: c1([50, 51, 52]),
    }),
    ask(
      mcq('c3-03', 'contractility', 'How do caffeine and theophylline increase myocardial contractility?', 'They prevent the breakdown of cAMP', ['They block β1 receptors on the myocytes', 'They stimulate the vagus nerve to the heart', 'They lower afterload by dilating arterioles'], {
        explanation: 'Slide 52.',
        skill: 'cause-effect',
      })
    ),
    ask(
      fill('c3-04', 'fick-principle', 'In Fick’s method, mixed venous blood must be sampled from the ____ artery.', ['pulmonary', 'pulmonary artery'], {
        explanation: 'Slide 57: arterial blood can come from any artery; venous blood from the pulmonary artery.',
      })
    ),
    recall('r3-01', 'cardiac-work', 'Explain why angina pectoris is more common in aortic stenosis than in aortic incompetence.', [
      'Work = stroke volume × mean arterial pressure.',
      'Pressure (afterload) work needs more O₂ than volume (preload) work.',
      'Aortic stenosis raises afterload; incompetence raises preload — so stenosis increases O₂ demand more, and angina is commoner.',
    ]),
    learn('Measuring CO by dilution', ['Inject a known amount of indicator; the more blood flows past, the more it is diluted. CO = dose ÷ area under the first-pass curve. Dye recirculates, so the tail is extrapolated; cold saline (thermodilution) does not, so it can be repeated.'], { sourceRefs: [...c1([57]), ...BOOKS] }),
    ask(
      mcq('c3-g1', 'co-dilution', 'In thermodilution, the indicator is:', 'Cold saline injected into the right atrium', ['A dye injected into the left ventricle', 'Inhaled nitrous oxide measured in the blood', 'Oxygen measured in mixed venous blood'], {
        explanation: 'A thermistor in the pulmonary artery records the temperature change.',
      })
    ),
    learn('Work, efficiency and Laplace', ['Stroke work = SV × mean ejection pressure; efficiency is at most about 20–25%. O₂ use follows wall tension × time, so pressure work costs more than volume work.', 'Laplace: wall tension ∝ pressure × radius ÷ wall thickness — a dilated heart needs more tension; hypertrophy thickens the wall.'], { sourceRefs: [...c1([58]), ...BOOKS] }),
    ask(
      mcq('c3-g2', 'stroke-work-laplace', 'Why is a dilated failing ventricle inefficient?', 'Its larger radius needs more wall tension for the same pressure', ['Its smaller radius needs more wall tension for the same pressure', 'Its thicker wall takes up most of the oxygen supply', 'Its stroke volume rises above the venous return'], {
        explanation: 'Law of Laplace.',
        skill: 'application',
      })
    ),
  ],

  // ─── Lesson 4 — Vessels, flow and pressure ─────────────────────────
  'cardiovascular-physiology-4': [
    ask(
      mcq('c4-01', 'flow-pressure-resistance', 'An arteriole doubles its radius. Roughly what happens to its resistance?', 'It falls to about 1/16', ['It halves, as resistance follows the radius', 'It doubles', 'It falls to about 1/4'], {
        explanation: 'Resistance = 8ηL/πr⁴, so resistance varies with 1/r⁴ (slides 74–76).',
        skill: 'prediction',
      })
    ),
    learn('Resistance and capacitance', ['Arterioles, with much smooth muscle, are the main resistance vessels. Veins are distensible capacitance vessels holding about half the blood.'], {
      sourceRefs: c1([61, 63, 79, 81]),
    }),
    ask(
      match('c4-02', 'vessel-structure', 'Match each vessel to its main feature.', [
        ['Large arteries', 'Elastic recoil in diastole'],
        ['Arterioles', 'Main resistance to flow'],
        ['Precapillary sphincters', 'No nerves; respond to local substances'],
        ['Veins', 'Capacitance — store blood'],
      ], { explanation: 'Slides 61–63, 79.' })
    ),
    learn('Turbulence', ['Reynolds’ number Re = ρDv/η. High velocity (a narrowed vessel) or low viscosity (anaemia) makes turbulence — and noise: bruits and Korotkov sounds.'], {
      sourceRefs: c1([71, 72]),
    }),
    ask(
      mcq('c4-03', 'laminar-turbulent', 'Which change makes turbulent flow more likely?', 'Lower blood viscosity, as in anaemia', ['Lower blood velocity', 'Higher blood viscosity', 'A smaller vessel diameter at the same velocity'], {
        explanation: 'Slide 71: Re rises with density, diameter and velocity and falls with viscosity.',
        skill: 'cause-effect',
      })
    ),
    ask(
      fill('c4-04', 'arterial-pressure', 'BP 120/75 mmHg. Pulse pressure = ____ mmHg.', ['45'], {
        explanation: 'Pulse pressure = systolic − diastolic (slide 91). Mean ≈ 75 + 45/3 = 90 mmHg.',
        skill: 'application',
      })
    ),
    ask(
      mcq('c4-05', 'arterial-pressure', 'A cuff that is too small for the arm gives…', 'A falsely high reading', ['A falsely low reading in every patient', 'An accurate reading', 'No Korotkov sounds'], {
        explanation: 'Slide 87: big cuff → falsely low; small cuff → falsely high.',
      })
    ),
    recall('r4-01', 'velocity-area', 'Explain why blood velocity is lowest in the capillaries.', [
      'Average velocity v = Q/A.',
      'As vessels divide, total cross-sectional area increases, so velocity falls toward the capillaries.',
      'It rises again as veins join into fewer, larger vessels.',
    ]),
    learn('Pulse pressure', ['Pulse pressure grows with stroke volume and with stiffer arteries. A faster heart rate or higher peripheral resistance raises diastolic pressure. The biggest drop in mean pressure is across the arterioles.'], { sourceRefs: [...c1([82, 91]), ...BOOKS] }),
    ask(
      mcq('c4-g1', 'windkessel-pressures', 'Which change narrows the pulse pressure?', 'A faster heart rate with the same stroke volume', ['Stiffer, less compliant arteries with age', 'A larger stroke volume each beat', 'Aortic regurgitation'], {
        explanation: 'Less diastolic run-off → diastolic rises.',
        skill: 'prediction',
      })
    ),
    learn('Critical closing pressure and aneurysms', ['Below about 20 mmHg small vessels snap shut (critical closing pressure). In an aneurysm, a larger radius means more wall tension at the same pressure (T = P × r), so it keeps stretching.'], { sourceRefs: [...c2([11, 12]), ...BOOKS] }),
    ask(
      mcq('c4-g2', 'critical-closing-aneurysm', 'By Laplace’s law, as an aneurysm widens, its wall tension at the same pressure:', 'Rises', ['Falls', 'Stays the same', 'Falls to zero'], {
        explanation: 'T = P × r.',
      })
    ),
    learn('Measuring organ flow', ['Fick/clearance (uptake ÷ A–V difference; PAH for renal plasma flow; N₂O for brain), venous occlusion plethysmography (stop venous outflow, measure swelling), Doppler (frequency shift → velocity), electromagnetic flowmeter (vessel exposed).'], { sourceRefs: [...c1([57, 67]), ...BOOKS] }),
    ask(
      mcq('c4-g3', 'organ-flow-methods', 'Which method measures limb blood flow by blocking venous outflow only?', 'Venous occlusion plethysmography', ['Electromagnetic flowmeter', 'Doppler ultrasound', 'PAH clearance'], {
        explanation: 'Cuff at about 40–50 mmHg.',
      })
    ),
  ],

  // ─── Lesson 5 — Capillaries, oedema, lymph, veins ──────────────────
  'cardiovascular-physiology-5': [
    ask(
      mcq('c5-01', 'starling-forces', 'Plasma proteins fall in liver disease. Which way does fluid tend to move?', 'Out of capillaries into the tissues, causing oedema', ['Into the capillaries from the tissues, raising blood volume', 'No change, because hydrostatic pressure falls as well', 'Into the lymphatics only, never into the tissues'], {
        explanation: 'Slide 102: a low plasma oncotic pressure reduces the force drawing fluid back in.',
        skill: 'prediction',
      })
    ),
    learn('Starling’s forces', ['Out: capillary hydrostatic pressure and interstitial colloid osmotic pressure. In: plasma oncotic pressure and tissue hydrostatic pressure. Of 24 L filtered daily, 85% is reabsorbed and 15% returns as lymph.'], {
      sourceRefs: c1([95, 97]),
    }),
    ask(
      match('c5-02', 'starling-forces', 'Sort each force by its effect on fluid.', [
        ['Capillary hydrostatic pressure', 'Pushes fluid out'],
        ['Interstitial colloid osmotic pressure', 'Pushes fluid out'],
        ['Plasma oncotic pressure', 'Draws fluid in'],
        ['Tissue hydrostatic pressure', 'Draws fluid in'],
      ], { explanation: 'Slide 95.' })
    ),
    ask(
      multi('c5-03', 'oedema', 'Which increase capillary permeability (slide 101)? Select all that apply.', ['Histamine', 'Bradykinin', 'Substance P'], ['Albumin', 'Noradrenaline'], {
        explanation: 'Slide 101.',
      })
    ),
    learn('Lymph and veins', ['Lymphoedema from obstruction (filaria, radical mastectomy) is non-pitting. Venous return depends on inspiration, the muscle pump and the heartbeat; CVP is 4–6 mmHg.'], {
      sourceRefs: c1([107, 109]),
    }),
    ask(
      mcq('c5-04', 'venous-circulation', 'Why is opening a dural sinus with the head raised dangerous?', 'Its rigid walls keep it open at subatmospheric pressure, so air can be sucked in', ['It has the highest venous pressure in the body, so it bleeds heavily and cannot be clamped', 'It collapses when opened and blocks venous drainage of the brain', 'It contains arterial blood under high pressure from the carotids'], {
        explanation: 'Slide 110: air embolism.',
        skill: 'cause-effect',
      })
    ),
    recall('r5-01', 'oedema', 'List the four mechanisms of oedema with one cause of each.', [
      'Raised capillary hydrostatic pressure — e.g. heart failure, venous obstruction.',
      'Increased capillary permeability — e.g. histamine, bradykinin.',
      'Reduced plasma oncotic pressure — e.g. liver disease, kidney disease, malnutrition.',
      'Lymphatic obstruction — e.g. filariasis, radical mastectomy.',
    ]),
    learn('Crossing the capillary wall', ['Lipid-soluble O₂ and CO₂ cross the whole cell surface; water-soluble glucose and ions use the clefts; proteins barely cross. Arteriolar constriction lowers capillary pressure (fluid drawn in); raised venous pressure pushes fluid out.'], { sourceRefs: [...c1([93, 100]), ...BOOKS] }),
    ask(
      mcq('c5-g1', 'capillary-transport-routes', 'Which substance crosses the capillary wall over the whole endothelial surface?', 'Carbon dioxide', ['Glucose', 'Albumin', 'Sodium ions'], {
        explanation: 'It is lipid-soluble.',
      })
    ),
    learn('Venous pressure and posture', ['Standing still: about 90 mmHg in the foot veins; walking with competent valves drops it below about 25 mmHg. Neck veins collapse when upright; dural sinuses can go negative. CVP rises in heart failure and falls after haemorrhage.'], { sourceRefs: [...c1([109, 110]), ...BOOKS] }),
    ask(
      mcq('c5-g2', 'venous-pressure-posture', 'Which is most likely to LOWER central venous pressure?', 'Haemorrhage', ['Right heart failure', 'Cardiac tamponade', 'Rapid blood transfusion'], {
        explanation: 'Less blood returning to the heart.',
      })
    ),
  ],

  // ─── Lesson 6 — Regulation ─────────────────────────────────────────
  'cardiovascular-physiology-6': [
    ask(
      mcq('c6-01', 'autoregulation-metabolic', 'A muscle starts working hard. What happens to its arterioles, and why?', 'They dilate as metabolites (low O₂, high CO₂, H⁺, K⁺) accumulate', ['They constrict as sympathetic discharge to working muscle rises sharply', 'Nothing changes: muscle flow is set only by the heart', 'They dilate because the vagus nerve to them is stimulated'], {
        explanation: 'Slides 6–7: metabolic autoregulation.',
        skill: 'prediction',
      })
    ),
    learn('Two theories of autoregulation', ['Metabolic: metabolites accumulate when flow is low and dilate vessels. Myogenic: stretch from a rise in transmural pressure makes smooth muscle contract.'], {
      sourceRefs: c2([6, 10]),
    }),
    ask(
      multi('c6-02', 'autoregulation-metabolic', 'Which are local vasoconstrictors in the lecture? Select all that apply.', ['Serotonin from platelets', 'Cold', 'Angiotensin'], ['Raised CO₂', 'Lactic acid', 'Histamine'], {
        explanation: 'Slide 9.',
      })
    ),
    learn('The baroreflex', ['Carotid sinus (IX) and aortic arch (X) → NTS. A rise in BP stretches them: vagus stimulated, VMC inhibited → slower heart, vasodilatation, BP falls.'], {
      sourceRefs: c2([23, 24, 26]),
    }),
    ask(
      order('c6-03', 'baroreceptor-reflex', 'Order the reflex response to a rise in BP.', ['Carotid sinus is stretched', 'Afferent discharge rises in the glossopharyngeal nerve', 'Nucleus of the tractus solitarius / depressor area excited', 'Vagus stimulated and VMC inhibited', 'Heart slows and vessels dilate'], {
        explanation: 'Slides 24–26.',
      })
    ),
    ask(
      mcq('c6-04', 'vasomotor-centre', 'Atropine increases heart rate. What does this tell you about resting heart rate?', 'It is controlled mainly by tonic vagal discharge', ['It is controlled mainly by tonic sympathetic discharge', 'The SA node is inactive at rest', 'The heart has no parasympathetic supply'], {
        explanation: 'Slide 21: vagotomy and atropine both raise HR.',
        skill: 'cause-effect',
      })
    ),
    ask(
      mcq('c6-05', 'cushing-reflex', 'A patient with a growing brain tumour has BP 190/100 and a pulse of 48. Which reflex explains this?', 'Cushing’s reflex', ['The Bainbridge (atrial) reflex', 'Vasovagal syncope', 'Orthostatic hypotension'], {
        explanation: 'Slides 36, 40: raised intracranial pressure → hypertension with reflex bradycardia.',
        skill: 'application',
        clinical: true,
      })
    ),
    recall('r6-01', 'cushing-reflex', 'Explain Cushing’s reflex step by step.', [
      'Raised intracranial pressure compresses vessels and reduces blood flow to the vasomotor centre.',
      'Ischaemia, hypoxia and hypercapnia stimulate the VMC directly → sympathetic discharge → BP rises, restoring medullary flow.',
      'The baroreceptors sense the high BP → reflex bradycardia.',
    ]),
    learn('Hyperaemia', ['Active hyperaemia: flow rises with activity. Reactive hyperaemia: flow overshoots after an occlusion, the longer the occlusion the bigger the overshoot. Both are local and work without nerves.'], { sourceRefs: [...c2([13, 14]), ...BOOKS] }),
    ask(
      mcq('c6-g1', 'hyperaemia', 'A red flush of the arm after a blood-pressure cuff is released is:', 'Reactive hyperaemia', ['Active hyperaemia', 'The white reaction', 'Cold vasodilatation'], {
        explanation: 'Overshoot after occlusion.',
      })
    ),
    learn('Hormones and reflexes', ['Adrenaline: β1 heart, β2 dilatation in muscle; noradrenaline: α constriction with reflex bradycardia. Angiotensin II and ADH constrict. Chemoreceptors back up BP below about 80 mmHg; the CNS ischaemic response is the strongest pressor response.'], { sourceRefs: [...c2([15, 16, 35, 36]), ...BOOKS] }),
    ask(
      mcq('c6-g2', 'circulating-hormones', 'Why does an infusion of noradrenaline usually slow the heart?', 'Its rise in BP triggers the baroreceptor reflex', ['It blocks β1 receptors in the SA node', 'It stimulates muscarinic receptors directly', 'It lowers venous return to the heart'], {
        explanation: 'The reflex vagal effect overrides its β1 action.',
        skill: 'cause-effect',
      })
    ),
    learn('Short vs long-term BP control', ['Seconds: baroreceptors (reset in 1–2 days). Minutes–hours: renin–angiotensin, ADH, capillary fluid shift. Days: the kidney excretes salt and water when pressure is high (pressure natriuresis).'], { sourceRefs: [...c3([4]), ...BOOKS] }),
    ask(
      mcq('c6-g3', 'bp-short-long-term', 'Which mechanism sets blood pressure in the long term?', 'Renal salt and water excretion (pressure natriuresis)', ['The arterial baroreceptor reflex acting through the vagus', 'The CNS ischaemic response to brainstem hypoxia', 'Peripheral chemoreceptor activity in the carotid bodies'], {
        explanation: 'Baroreceptors reset, so the kidney decides the long-term level.',
      })
    ),
  ],

  // ─── Lesson 7 — Gravity, shock and heart failure ───────────────────
  'cardiovascular-physiology-7': [
    ask(
      mcq('c7-01', 'gravity-effects', 'You stand up quickly. What is the first stimulus for compensation?', 'A fall in pressure at the carotid sinus and aortic arch', ['A rise in cerebral blood flow as the head moves up', 'A rise in venous return from the legs, stretching the right atrium', 'Stretch of the atrial receptors by the extra blood'], {
        explanation: 'Slide 4.',
        skill: 'prediction',
      })
    ),
    learn('Four kinds of shock', ['Hypovolaemic (haemorrhage, burns, diarrhoea), distributive (anaphylaxis, sepsis, neurogenic), cardiogenic (MI, arrhythmia) and obstructive (tamponade, tension pneumothorax, pulmonary embolism).'], {
      sourceRefs: c3([13, 14, 15, 16, 17]),
    }),
    ask(
      match('c7-02', 'shock-types', 'Match each cause to its type of shock.', [
        ['Haemorrhage', 'Hypovolaemic'],
        ['Anaphylaxis', 'Distributive'],
        ['Myocardial infarction', 'Cardiogenic'],
        ['Tension pneumothorax', 'Obstructive'],
      ], { explanation: 'Slides 13–17.' })
    ),
    ask(
      mcq('c7-03', 'shock-features', 'Why is the skin pale and cool in haemorrhagic shock?', 'Sympathetic vasoconstriction is marked in the skin', ['Lactic acid warms the skin while the core cools', 'Skin vessels dilate to let heat escape from the body core', 'The heart stops pumping any blood to the skin'], {
        explanation: 'Slide 20: generalised vasoconstriction, sparing heart and brain, marked in the skin.',
        skill: 'cause-effect',
      })
    ),
    learn('Forward and backward failure', ['Forward: the heart cannot pump enough out (tissue or lung hypoperfusion). Backward: it cannot accept returning blood — left → pulmonary oedema; right → peripheral oedema, hepatomegaly, ascites, raised JVP.'], {
      sourceRefs: c3([32, 33]),
    }),
    ask(
      multi('c7-04', 'heart-failure', 'Which are features of backward failure of the RIGHT heart? Select all that apply.', ['Peripheral oedema', 'Hepatomegaly', 'Ascites', 'Raised JVP'], ['Pulmonary oedema', 'Paroxysmal nocturnal dyspnoea'], {
        explanation: 'Slide 33: pulmonary oedema and PND are backward failure of the left heart.',
        skill: 'comparison',
      })
    ),
    recall('r7-01', 'irreversible-shock', 'Why can shock become irreversible even after blood volume is restored?', [
      'Prolonged cerebral ischaemia depresses the vasomotor centre → heart slows and vessels dilate → BP and cerebral flow fall further.',
      'Myocardial ischaemia makes the shock worse.',
      'Precapillary sphincters relax while venules stay constricted → stasis, raised hydrostatic pressure, fluid loss into the interstitium.',
    ]),
    learn('The vicious cycle (slide 27)', ['Poor perfusion → hypoxia → lactic acidosis → sodium-pump failure (K⁺ out, Na⁺ and water in) → lysosomal enzymes → toxins → capillary damage → worse perfusion. Side arm: precapillary sphincters fail → blood pools.'], { sourceRefs: c3([26, 27]) }),
    ask(
      order('c7-g1', 'shock-vicious-cycle', 'Order the start of the irreversible-shock cycle.', ['Inadequate perfusion', 'Cell hypoxia', 'Energy deficit', 'Lactic acid accumulation and fall in pH'], {
        explanation: 'Homeostasis slide 27.',
      })
    ),
    learn('Hb after a bleed (slide 24)', ['Immediately: unchanged, because cells and plasma are lost together. Over hours to days: falls as tissue fluid dilutes the blood. Back to normal in 4–5 weeks via erythropoietin. Burns concentrate the blood instead.'], { sourceRefs: [...c3([23, 24, 28]), ...BOOKS] }),
    ask(
      mcq('c7-g2', 'haemorrhage-hb', 'A patient’s Hb is normal 20 minutes after a large bleed. Why?', 'Red cells and plasma were lost in the same proportion', ['The spleen has already released enough new red cells', 'Erythropoietin has already restored the red cells', 'Fluid from the tissues has already diluted the blood'], {
        explanation: 'Dilution, and the fall in Hb, only come later.',
        skill: 'application',
      })
    ),
  ],

  // ─── Lesson 8 — Regional circulations ──────────────────────────────
  'cardiovascular-physiology-8': [
    ask(
      mcq('c8-01', 'coronary-circulation', 'When does most blood flow through the left ventricular coronary vessels?', 'During diastole', ['During systole', 'Equally throughout the cycle', 'Only during exercise'], {
        explanation: 'Slide 27: in systole the vessels are compressed.',
        skill: 'prediction',
      })
    ),
    learn('CSF pathway', ['Choroid plexus → lateral ventricles → foramen of Monro → third ventricle → aqueduct of Sylvius → fourth ventricle → foramina of Luschka and Magendie → subarachnoid space → arachnoid villi.'], {
      sourceRefs: c4([6, 7]),
    }),
    ask(
      order('c8-02', 'csf', 'Order the flow of CSF.', ['Lateral ventricle', 'Foramen of Monro', 'Third ventricle', 'Aqueduct of Sylvius', 'Fourth ventricle', 'Subarachnoid space'], {
        explanation: 'Slide 7.',
      })
    ),
    ask(
      mcq('c8-03', 'csf', 'Hydrocephalus from reduced absorption by the arachnoid villi is called…', 'External (communicating)', ['Internal (non-communicating)', 'Obstructive', 'Ex vacuo'], {
        explanation: 'Slide 16: internal (non-communicating) hydrocephalus is from obstruction of the ventricular drainage system.',
      })
    ),
    learn('Lungs, gut, skin', ['Pulmonary capillaries: hydrostatic 10 vs oncotic 25 mmHg; hypoxia constricts. Liver: the zone near the central vein is least oxygenated. Skin: white reaction, then the triple response (red reaction, wheal, flare).'], {
      sourceRefs: c4([31, 32, 35, 39, 40]),
    }),
    ask(
      match('c8-04', 'skin-circulation', 'Match each part of the triple response to its cause.', [
        ['Red reaction', 'Capillary dilatation'],
        ['Wheal', 'Increased capillary and venular permeability'],
        ['Flare', 'Arteriolar dilatation by axon reflex'],
      ], { explanation: 'Slide 40.' })
    ),
    recall('r8-01', 'splanchnic-circulation', 'Explain how a rise in hepatic venous pressure produces ascites.', [
      'Hydrostatic pressure in the liver sinusoids rises.',
      'Fluid moves into the space of Disse and lymph and leaks from the liver surface into the peritoneal cavity.',
      'Sinusoidal pores let protein through, so the fluid is protein-rich and its osmotic pull draws more fluid from the gut and mesentery.',
    ]),
    learn('Brain support and fuel', ['Dura on bone; brain hung from the arachnoid by trabeculae; CSF and trabeculae check movement in trauma; CSF removal can cause headache. Sustained BBB breakdown: tumours, inflammation, oedema. Starvation: the brain switches largely to ketone bodies.'], { sourceRefs: c4([15, 17, 18, 24]) }),
    ask(
      mcq('c8-g1', 'brain-support-fuel', 'What checks movement of the brain in head trauma (slide 15)?', 'The CSF and the arachnoid trabeculae', ['The dural venous sinuses between the dural layers', 'The blood–brain barrier', 'The choroid plexus'], {
        explanation: 'Regional Circulation slide 15.',
      })
    ),
    learn('Coronary flow and the fetal circulation', ['Left ventricular coronary flow stops in systole and peaks in early diastole; the subendocardium is most at risk; the heart extracts 70–75% of the O₂ at rest.', 'Fetus: umbilical vein → ductus venosus → IVC → right atrium → foramen ovale → left heart; pulmonary trunk → ductus arteriosus → aorta. At birth the foramen ovale and ductus close.'], { sourceRefs: [...c4([27, 43]), ...BOOKS] }),
    ask(
      mcq('c8-g2', 'fetal-shunts', 'Which fetal shunt carries blood from the pulmonary trunk to the aorta?', 'Ductus arteriosus', ['Ductus venosus', 'Foramen ovale', 'Umbilical vein'], {
        explanation: 'It bypasses the high-resistance fetal lungs.',
      })
    ),
    learn('Kidney, muscle and skin', ['Kidney: about 20% of CO, two capillary beds in series, strong autoregulation. Muscle: flow up 15–25× in exercise, controlled by metabolites. Skin: AV shunts under sympathetic control for temperature; in shock, pressure control wins and the skin clamps down.'], { sourceRefs: [...c4([39, 41]), ...BOOKS] }),
    ask(
      mcq('c8-g3', 'skin-heat-shock', 'In haemorrhagic shock on a hot day, the skin is usually:', 'Pale and cool, because skin vessels constrict', ['Flushed and warm, because skin vessels dilate', 'Unchanged, because skin has strong autoregulation', 'Blue only in the fingers, from the AV shunts'], {
        explanation: 'Answer to Regional Circulation slide 41.',
        skill: 'application',
      })
    ),
  ],

  // ─── Lesson 9 — The ECG ───────────────────────────────────────────
  'cardiovascular-physiology-9': [
    ask(
      mcq('c9-01', 'ecg-waves', 'Which part of the ECG shows ventricular depolarisation?', 'The QRS complex', ['The P wave', 'The T wave', 'The ST segment and T wave'], {
        explanation: 'Slide 10.',
        skill: 'prediction',
      })
    ),
    learn('Waves and intervals', ['P = atrial depolarisation; PR 0.12–0.20 s; QRS = ventricular depolarisation (0.06–0.1 s); ST = plateau; T = ventricular repolarisation; QT 0.2–0.4 s.'], {
      sourceRefs: c5([9, 10, 11, 12, 13]),
    }),
    ask(
      match('c9-02', 'ecg-waves', 'Match each ECG feature to what it represents.', [
        ['P wave', 'Atrial depolarisation'],
        ['QRS complex', 'Ventricular depolarisation'],
        ['T wave', 'Ventricular repolarisation'],
        ['ST segment', 'Whole ventricle depolarised (plateau)'],
      ], { explanation: 'Slides 9–12.' })
    ),
    ask(
      fill('c9-03', 'ecg-rate', 'There are 20 small squares between two R waves. Heart rate = ____ beats/min.', ['75'], {
        explanation: 'Slide 16: 1500 ÷ 20 = 75.',
        skill: 'application',
      })
    ),
    learn('Heart block', ['1st degree: long PR. Mobitz I: PR lengthens until a beat drops. Mobitz II: a QRS drops without warning. 3rd degree: P waves and QRS complexes are independent.'], {
      sourceRefs: c5([21, 23, 24, 26]),
    }),
    ask(
      mcq('c9-04', 'heart-block', 'The PR interval gets longer with each beat until a P wave is not followed by a QRS. This is…', 'Mobitz type I (Wenckebach) second-degree block', ['First-degree block with a fixed long PR interval', 'Mobitz type II second-degree block', 'Complete (third-degree) heart block'], {
        explanation: 'Slide 23.',
        skill: 'application',
      })
    ),
    recall('r9-01', 'heart-block', 'Describe complete heart block and its danger.', [
      'Conduction from atria to ventricles is interrupted; atria and ventricles beat independently.',
      'The ventricles beat slowly in an idioventricular rhythm; P waves and QRS complexes have no fixed relationship.',
      'Low cerebral blood flow causes fainting and dizziness — Stokes–Adams syndrome.',
    ]),
    learn('Limb leads', ['Lead I: RA (−) → LA (+), 0°. Lead II: RA → LL, +60°. Lead III: LA → LL, +120°. aVR −150°, aVL −30°, aVF +90°. Right leg = ground. Einthoven: II = I + III.'], { sourceRefs: c5([3, 4]) }),
    ask(
      fill('c9-g1', 'limb-leads', 'Lead II connects the right arm (−) to the left ____ (+).', ['leg', 'foot', 'left leg'], {
        explanation: 'ECG slide 3.',
      })
    ),
    learn('Ectopics, flutter and fibrillation', ['Ventricular ectopic: early, wide, bizarre QRS, no P, compensatory pause. Atrial flutter: saw-tooth waves with 2:1 or 3:1 block. Atrial fibrillation: no P waves, irregularly irregular. Ventricular fibrillation: no QRS, no output — defibrillate. Most are re-entry.'], { sourceRefs: [...c5([20, 28]), ...BOOKS] }),
    ask(
      mcq('c9-g2', 'flutter-fibrillation', 'An ECG shows no P waves and an irregularly irregular QRS rhythm. This is:', 'Atrial fibrillation', ['Atrial flutter with 2:1 block', 'Ventricular fibrillation', 'Complete heart block'], {
        explanation: 'ECG homework (slide 28).',
      })
    ),
  ],
};

type ReadingExtras = {
  estimatedMinutes: number;
  xp: number;
  highYield: string[];
  confusions: LessonConfusion[];
};

export const readingExtras: Record<string, ReadingExtras> = {
  'cardiovascular-physiology-1': {
    estimatedMinutes: 12,
    xp: 25,
    highYield: [
      'SA node → internodal tracts → AV node → bundle of His → Purkinje fibres.',
      'Filling: 70% passive, 30% atrial systole. EDV 130 mL, SV 70–90 mL, EF 65%.',
      'Tachycardia shortens diastole most — less coronary flow and filling.',
    ],
    confusions: [
      { confusion: 'The left ventricle ejects first because it contracts first.', clarification: 'The right ventricle ejects first, because pulmonary artery pressure is lower (slide 18).' },
      { confusion: 'A faster heart shortens systole and diastole equally.', clarification: 'Diastole is shortened to a much greater extent (slide 20).' },
    ],
  },
  'cardiovascular-physiology-2': {
    estimatedMinutes: 12,
    xp: 25,
    highYield: [
      'JVP: a (atrial contraction), c (tricuspid bulge), v (atrial filling), x and y descents.',
      'Giant a wave → heart block; big c wave → tricuspid incompetence.',
      'Semilunar stenosis and AV incompetence → systolic murmurs; the opposite → diastolic.',
    ],
    confusions: [
      { confusion: 'The pulse is blood rushing past your finger.', clarification: 'It is a pressure wave expanding the arterial wall, independent of blood velocity (slide 24).' },
      { confusion: 'The JVP is palpated like the carotid pulse.', clarification: 'The JVP is seen, not palpated (slide 26).' },
    ],
  },
  'cardiovascular-physiology-3': {
    estimatedMinutes: 12,
    xp: 25,
    highYield: [
      'CO = HR × SV (~5.5 L/min). Inotropic = force; chronotropic = rate.',
      'Starling: energy of contraction ∝ initial fibre length.',
      'β1 → cAMP → +inotropy; xanthines block cAMP breakdown.',
      'Fick: O₂ uptake = (arterial − mixed venous O₂) × CO.',
    ],
    confusions: [
      { confusion: 'Afterload is the stretch on the ventricle before it contracts.', clarification: 'That is preload. Afterload is the resistance to ejection (slide 44).' },
      { confusion: 'Volume work costs the heart more O₂ than pressure work.', clarification: 'Pressure work is more demanding (slide 58).' },
    ],
  },
  'cardiovascular-physiology-4': {
    estimatedMinutes: 15,
    xp: 30,
    highYield: [
      'Flow = ΔP/R; R ∝ 1/r⁴ — arterioles are the resistance vessels.',
      'Re = ρDv/η: high velocity or low viscosity → turbulence and noise.',
      'v = Q/A: slowest in capillaries.',
      'Mean pressure ≈ diastolic + ⅓ pulse pressure.',
    ],
    confusions: [
      { confusion: 'Viscosity is the main determinant of resistance.', clarification: 'Vessel calibre is; viscosity is a minor factor (slide 60).' },
      { confusion: 'A bigger cuff gives a higher BP reading.', clarification: 'A big cuff gives a falsely low reading; a small cuff a falsely high one (slide 87).' },
    ],
  },
  'cardiovascular-physiology-5': {
    estimatedMinutes: 10,
    xp: 25,
    highYield: [
      'Out: capillary hydrostatic + interstitial oncotic. In: plasma oncotic + tissue hydrostatic.',
      '24 L/day filtered: 85% reabsorbed, 15% via lymph.',
      'Lymphoedema is non-pitting.',
    ],
    confusions: [
      { confusion: 'Plasma oncotic pressure pushes fluid out of capillaries.', clarification: 'It draws fluid in; capillary hydrostatic pressure pushes it out (slide 95).' },
    ],
  },
  'cardiovascular-physiology-6': {
    estimatedMinutes: 15,
    xp: 30,
    highYield: [
      'BP = CO × TPR.',
      'Baroreceptors: carotid sinus (IX), aortic arch (X) → NTS.',
      'Resting HR is set by tonic vagal discharge (atropine and vagotomy raise it).',
      'Exceptions: atrial stretch → hypotension + tachycardia; Cushing’s → hypertension + bradycardia.',
    ],
    confusions: [
      { confusion: 'Sympathetic vasodilator fibres are noradrenergic.', clarification: 'They travel with the sympathetic but are cholinergic (slide 18).' },
      { confusion: 'In Cushing’s reflex the bradycardia comes from the brain compression itself.', clarification: 'It is a baroreceptor reflex response to the high BP (slide 36).' },
    ],
  },
  'cardiovascular-physiology-7': {
    estimatedMinutes: 15,
    xp: 30,
    highYield: [
      'Shock: hypovolaemic, distributive, cardiogenic, obstructive.',
      'Hypovolaemic shock: low BP, tachycardia, pale cool skin, rapid breathing, thirst, oliguria.',
      'Left backward failure → pulmonary oedema; right → peripheral oedema, hepatomegaly, ascites, raised JVP.',
    ],
    confusions: [
      { confusion: 'Shock means low blood volume.', clarification: 'Shock is inadequate tissue perfusion; distributive shock has normal blood volume with massive vasodilatation (slide 29).' },
      { confusion: 'Negative g ruptures brain vessels.', clarification: 'Intracranial pressure rises too and supports them (slide 10).' },
    ],
  },
  'cardiovascular-physiology-8': {
    estimatedMinutes: 18,
    xp: 30,
    highYield: [
      'CSF: choroid plexus → ventricles → subarachnoid → arachnoid villi; 150 mL, 550 mL/day.',
      'BBB: gases, water and steroids cross; glucose by carrier; proteins don’t.',
      'Coronary flow in diastole; angina at ~75% occlusion.',
      'Pulmonary hypoxia → vasoconstriction (opposite of systemic).',
    ],
    confusions: [
      { confusion: 'The brain needs insulin to take up glucose.', clarification: 'Insulin is not needed (slide 24).' },
      { confusion: 'Hypoxia dilates pulmonary vessels as it does systemic ones.', clarification: 'It constricts them, shunting blood to better-ventilated areas (slide 32).' },
    ],
  },
  'cardiovascular-physiology-9': {
    estimatedMinutes: 12,
    xp: 25,
    highYield: [
      'Small square 0.04 s; large 0.2 s; HR = 1500/small squares = 300/large squares.',
      'PR 0.12–0.20 s; QRS 0.06–0.1 s; QT 0.2–0.4 s.',
      'Mobitz I = progressive PR prolongation; Mobitz II = sudden dropped beat; 3rd degree = AV dissociation.',
    ],
    confusions: [
      { confusion: 'The T wave is atrial repolarisation.', clarification: 'The T wave is ventricular repolarisation (slide 12).' },
      { confusion: 'In Mobitz II the PR interval lengthens before the dropped beat.', clarification: 'That is Mobitz I; in Mobitz II the conducted beats have a normal PR (slide 24).' },
    ],
  },
};
