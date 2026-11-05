// Physiology → Cardiovascular Physiology: five more questions for every reading section,
// lessons 1–4 (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/cardiovascular-physiology/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestionsA: Q[] = [
  // ─── Lesson 1 · S1 What the heart does ─────────────────────────────
  mcq('s1-1-1', 'heart-function', 'What two things is the heart built from?', 'Cardiac muscle and a conducting system', ['Skeletal muscle and nerves from the spinal cord', 'Smooth muscle and elastic tissue', 'Cartilage and connective tissue'], {
    explanation: 'Cardiac muscle and a specialised conducting system.',
  }),
  mcq('s1-1-2', 'heart-function', 'What is the heart’s job?', 'To send blood to all the tissues', ['To make new red cells for the blood', 'To filter waste out of the blood', 'To store oxygen for exercise'], {
    explanation: 'The heart moves blood about to all tissues.',
  }),
  tf({ id: 's1-1-3', conceptId: 'heart-function', statement: 'Systole is the heart’s contraction; diastole its relaxation.', answer: true, explanation: 'The heart alternates between the two.' }),
  mcq('s1-1-4', 'heart-function', 'What do contraction and relaxation change, in chambers and vessels?', 'Both volume and pressure', ['Only the colour of the blood in them', 'Only the temperature', 'Neither volume nor pressure'], {
    explanation: 'Changes in volume and pressure.',
  }),
  fill('s1-1-5', 'heart-function', 'The heart’s relaxation phase is called ____.', ['diastole'], {
    explanation: 'Diastole is relaxation; systole contraction.',
  }),

  // ─── Lesson 1 · S2 The conducting system ───────────────────────────
  mcq('s1-2-1', 'conduction-system', 'Which structure is called the pacemaker?', 'The SA node', ['The AV node in the interatrial septum', 'The bundle of His', 'The Purkinje fibres'], {
    explanation: 'The SA node’s discharge controls the rest.',
  }),
  mcq('s1-2-2', 'conduction-system', 'Which fibres carry depolarisation to all the ventricular muscle?', 'Purkinje fibres', ['Internodal pathways of the atria', 'The SA node', 'The AV node'], {
    explanation: 'Purkinje fibres carry it to the ventricular muscle.',
  }),
  tf({ id: 's1-2-3', conceptId: 'conduction-system', statement: 'The AV node lies just behind the tricuspid valve.', answer: true, explanation: 'In the right posterior interatrial septum.' }),
  mcq('s1-2-4', 'conduction-system', 'Which order does the impulse follow?', 'SA node → AV node → bundle of His → Purkinje', ['AV node → SA node → Purkinje → bundle of His', 'Bundle of His → SA node → AV node → Purkinje', 'Purkinje → bundle of His → AV node → SA node'], {
    explanation: 'Slide 8.',
  }),
  mcq('s1-2-5', 'conduction-system', 'How many internodal tracts connect the atria to the AV node?', 'Three', ['Two', 'One', 'Seven'], {
    explanation: 'Anterior, middle and posterior.',
  }),

  // ─── Lesson 1 · S3 Diastole and atrial systole ─────────────────────
  mcq('s1-3-1', 'cycle-phases', 'What share of ventricular filling comes from atrial contraction?', 'About 30%', ['About 70%, the passive share', 'About 50%', 'About 90%'], {
    explanation: '70% passive; 30% from atrial systole.',
  }),
  mcq('s1-3-2', 'cycle-phases', 'Which valves are closed in diastole?', 'Aortic and pulmonary', ['Mitral and tricuspid, the AV valves', 'All four valves', 'None of the valves'], {
    explanation: 'AV valves open; semilunar valves closed.',
  }),
  tf({ id: 's1-3-3', conceptId: 'cycle-phases', statement: 'Ventricular pressure stays low during filling in diastole.', answer: true, explanation: 'Filling slows, but pressure stays low.' }),
  mcq('s1-3-4', 'cycle-phases', 'Why does the heart relax in diastole?', 'So the chambers can fill', ['So the valves can be repaired', 'So the blood can clot', 'So the heart can cool down'], {
    explanation: 'Diastole lets the chambers fill.',
  }),
  mcq('s1-3-5', 'cycle-phases', 'What happens to the rate of filling as the ventricles fill?', 'It slows', ['It speeds up greatly', 'It stops at once', 'It reverses direction'], {
    explanation: 'Filling slows as the ventricles fill.',
  }),

  // ─── Lesson 1 · S4 Ventricular systole ─────────────────────────────
  mcq('s1-4-1', 'cycle-phases', 'About how high does left intraventricular pressure rise during ejection?', 'About 120 mmHg', ['About 80 mmHg, the aortic diastolic', 'About 10 mmHg', 'About 200 mmHg'], {
    explanation: 'It rises to about 120 mmHg.',
  }),
  mcq('s1-4-2', 'cycle-phases', 'Above about what pressure must the right ventricle rise to open the pulmonary valve?', 'About 10 mmHg', ['About 80 mmHg, as for the aortic valve', 'About 120 mmHg', 'About 1 mmHg'], {
    explanation: 'Pulmonary artery pressure is about 10 mmHg.',
  }),
  tf({ id: 's1-4-3', conceptId: 'cycle-phases', statement: 'During isovolumetric relaxation all four valves are shut.', answer: true, explanation: 'Pressure falls with all valves shut.' }),
  mcq('s1-4-4', 'cycle-phases', 'How does ejection proceed?', 'Initially slow, then rapid', ['Initially rapid, then stopping', 'Steady from start to end', 'In two separate bursts'], {
    explanation: 'Slide 15.',
  }),
  mcq('s1-4-5', 'cycle-phases', 'What ends protodiastole?', 'Closure of the aortic and pulmonary valves', ['Opening of the mitral and tricuspid valves', 'Contraction of the atria', 'Firing of the SA node'], {
    explanation: 'Protodiastole ends when the semilunar valves close.',
  }),

  // ─── Lesson 1 · S5 Volumes in the cycle ────────────────────────────
  mcq('s1-5-1', 'cycle-volumes', 'What is the typical end-diastolic volume?', 'About 130 mL', ['About 70 mL, like the stroke volume', 'About 50 mL', 'About 300 mL'], {
    explanation: 'EDV about 130 mL.',
  }),
  mcq('s1-5-2', 'cycle-volumes', 'What is the typical ejection fraction?', 'About 65%', ['About 30%, the atrial share', 'About 100%', 'About 10%'], {
    explanation: 'About 65% of EDV is ejected.',
  }),
  tf({ id: 's1-5-3', conceptId: 'cycle-volumes', statement: 'Stroke volume is the blood ejected per contraction.', answer: true, explanation: 'About 70–90 mL.' }),
  mcq('s1-5-4', 'cycle-volumes', 'EDV is 130 mL and ESV is 50 mL. What is the stroke volume?', '80 mL', ['180 mL', '50 mL', '130 mL'], {
    explanation: 'SV = EDV − ESV = 80 mL.',
    difficulty: 'intermediate',
  }),
  mcq('s1-5-5', 'cycle-volumes', 'How is ejection fraction worked out?', 'Stroke volume ÷ end-diastolic volume', ['End-diastolic volume ÷ stroke volume', 'Heart rate × stroke volume', 'End-systolic volume × heart rate'], {
    explanation: 'The fraction of EDV ejected.',
  }),

  // ─── Lesson 1 · S6 Right vs left; inspiration vs expiration ────────
  mcq('s1-6-1', 'valve-timing', 'Which ventricle contracts first?', 'The left', ['The right, which ejects first', 'Both at exactly the same moment', 'It changes with every beat'], {
    explanation: 'The left contracts first; the right ejects first.',
  }),
  mcq('s1-6-2', 'valve-timing', 'In inspiration, which valve closes first?', 'The aortic valve', ['The pulmonary valve, which closes late', 'The mitral valve', 'The tricuspid valve'], {
    explanation: 'The pulmonary valve closes late in inspiration.',
  }),
  tf({ id: 's1-6-3', conceptId: 'valve-timing', statement: 'Inspiration increases venous return to the right heart.', answer: true, explanation: 'Negative intrathoracic pressure draws blood in.' }),
  mcq('s1-6-4', 'valve-timing', 'What does late pulmonary valve closure give rise to?', 'Splitting of the second heart sound', ['A loud first heart sound at the apex', 'A third heart sound', 'A murmur in systole'], {
    explanation: 'The basis of S2 splitting (Lesson 2).',
  }),
  mcq('s1-6-5', 'valve-timing', 'What does inspiration do to the pulmonary vessels?', 'Lowers their impedance', ['Raises their impedance', 'Closes them completely', 'Fills them with air'], {
    explanation: 'Lower impedance prolongs right ventricular ejection.',
  }),

  // ─── Lesson 1 · S7 Why a fast heart rate is dangerous ──────────────
  mcq('s1-7-1', 'fast-heart-rate', 'When does coronary blood flow to the myocardium happen?', 'In diastole', ['In systole, when the heart contracts', 'Only during exercise', 'Only at night'], {
    explanation: 'Coronary flow happens in diastole.',
  }),
  mcq('s1-7-2', 'fast-heart-rate', 'When the heart rate rises, which phase shortens most?', 'Diastole', ['Systole, the ejection phase', 'Both equally', 'Neither phase'], {
    explanation: 'Diastole is shortened to a much greater extent.',
  }),
  tf({ id: 's1-7-3', conceptId: 'fast-heart-rate', statement: 'Cardiac muscle cannot be tetanised.', answer: true, explanation: 'Its action potential has a long refractory period.' }),
  mcq('s1-7-4', 'fast-heart-rate', 'Why is a very fast heart rate dangerous?', 'Less time for coronary flow and filling', ['More time for the ventricles to fill', 'The valves stop working at once', 'The ventricles overfill and stretch too far'], {
    explanation: 'Diastole, when the heart is perfused and fills, is cut short.',
  }),
  mcq('s1-7-5', 'fast-heart-rate', 'What stops cardiac muscle from being tetanised?', 'Its long refractory period', ['Its short refractory period', 'Its lack of calcium', 'Its nerve supply'], {
    explanation: 'The long refractory period prevents tetanus.',
  }),

  // ─── Lesson 2 · S1 The arterial pulse ──────────────────────────────
  mcq('s2-1-1', 'arterial-pulse', 'What is the pulse that you feel?', 'Expansion of the artery wall by the pressure wave', ['The movement of each red cell in the artery', 'The beat of the heart itself felt through the chest wall and skin', 'The flow of blood through the vein'], {
    explanation: 'The wave expands the walls; that is what you palpate.',
  }),
  mcq('s2-1-2', 'arterial-pulse', 'Does the pulse depend on the velocity of the blood?', 'No — it is independent of blood velocity', ['Yes — it moves exactly as fast as the blood', 'Only in the veins', 'Only in children'], {
    explanation: 'The pulse wave is independent of blood velocity.',
  }),
  tf({ id: 's2-1-3', conceptId: 'arterial-pulse', statement: 'Location is one of the characteristics of the pulse.', answer: true, explanation: 'Rate, volume, strength, character and location.' }),
  mcq('s2-1-4', 'arterial-pulse', 'What starts the pressure wave of the pulse?', 'Ejection of blood into the aorta', ['Closure of the mitral valve in the heart', 'Contraction of the atria', 'Relaxation of the ventricles'], {
    explanation: 'Ejection sends a pressure wave along the arteries.',
  }),
  mcq('s2-1-5', 'arterial-pulse', 'How many characteristics of the pulse does slide 25 list?', 'Five', ['Three', 'Two', 'Seven'], {
    explanation: 'Rate, volume, strength, character and location.',
  }),

  // ─── Lesson 2 · S2 The jugular venous pulse ────────────────────────
  mcq('s2-2-1', 'jvp-waves', 'Which JVP wave comes from atrial contraction?', 'The a wave', ['The v wave from passive filling', 'The c wave', 'The y descent'], {
    explanation: 'a wave: atrial contraction.',
  }),
  mcq('s2-2-2', 'jvp-waves', 'Which JVP feature corresponds to the tricuspid valve opening?', 'The y descent', ['The x descent from atrial relaxation', 'The a wave', 'The c wave'], {
    explanation: 'y descent: opening of the tricuspid valve.',
  }),
  tf({ id: 's2-2-3', conceptId: 'jvp-waves', statement: 'The JVP is seen, not palpated.', answer: true, explanation: 'Slide 26.' }),
  mcq('s2-2-4', 'jvp-waves', 'What causes the c wave?', 'The tricuspid valve moving up in isovolumetric contraction', ['The atrium filling while the tricuspid valve is still closed in systole', 'The atrium relaxing after it empties', 'The pulmonary valve closing'], {
    explanation: 'c wave: tricuspid valve moves upward.',
  }),
  mcq('s2-2-5', 'jvp-waves', 'Which vein shows the JVP?', 'The internal jugular vein', ['The external carotid artery of the neck', 'The subclavian artery', 'The vertebral vein'], {
    explanation: 'The internal jugular communicates with the right atrium.',
  }),

  // ─── Lesson 2 · S3 The JVP in disease ──────────────────────────────
  mcq('s2-3-1', 'jvp-clinical', 'Which condition gives a giant “a” wave?', 'Heart block', ['Tricuspid incompetence with a big c wave', 'Heart failure', 'Anaemia'], {
    explanation: 'The atrium contracts against a closed tricuspid valve.',
  }),
  mcq('s2-3-2', 'jvp-clinical', 'What JVP finding goes with heart failure?', 'A raised JVP with venous congestion', ['A low JVP with collapsed, empty neck veins', 'A missing a wave', 'A giant v wave only'], {
    explanation: 'Raised JVP with venous congestion.',
  }),
  tf({ id: 's2-3-3', conceptId: 'jvp-clinical', statement: 'If the neck veins are very engorged, sit the patient upright to measure the JVP.', answer: true, explanation: 'Slide 28.' }),
  mcq('s2-3-4', 'jvp-clinical', 'From which point is the JVP measured as a vertical distance?', 'The sternum', ['The ear lobe', 'The clavicle tip', 'The umbilicus'], {
    explanation: 'Measured vertically from the sternum.',
  }),
  mcq('s2-3-5', 'jvp-clinical', 'Why is there a giant a wave in heart block?', 'The atrium and ventricle beat out of step', ['The tricuspid valve leaks blood back into the atrium', 'The atrium has stopped contracting', 'The neck vein is blocked'], {
    explanation: 'Asynchronous beating: the atrium contracts against a closed valve.',
  }),

  // ─── Lesson 2 · S4 Heart sounds ────────────────────────────────────
  mcq('s2-4-1', 'heart-sounds', 'About how long does S1 last?', 'About 0.15 s', ['About 0.5 s, longer than S2', 'About 1.5 s', 'About 0.01 s'], {
    explanation: 'S1 ~0.15 s; S2 ~0.12 s.',
  }),
  mcq('s2-4-2', 'heart-sounds', 'S2 marks the end of systole and the beginning of what?', 'Diastole', ['Atrial systole, the start of filling', 'Isovolumetric contraction', 'Ejection'], {
    explanation: 'S2 is at the beginning of diastole.',
  }),
  tf({ id: 's2-4-3', conceptId: 'heart-sounds', statement: 'Heart sounds are made by valves closing.', answer: true, explanation: 'Slide 30.' }),
  mcq('s2-4-4', 'heart-sounds', 'Why is S2 loud when aortic pressure is high?', 'The valves close briskly', ['The valves float closed slowly', 'The valves stay open', 'The ventricle fills fully'], {
    explanation: 'High pressure snaps the valves shut.',
  }),
  mcq('s2-4-5', 'heart-sounds', 'In physiological splitting, which component of S2 comes first?', 'Aortic', ['Pulmonary', 'Mitral', 'Tricuspid'], {
    explanation: 'Aortic before pulmonary.',
  }),

  // ─── Lesson 2 · S5 Murmurs and bruits ──────────────────────────────
  mcq('s2-5-1', 'murmurs', 'What kind of murmur does aortic incompetence produce?', 'Diastolic', ['Systolic, during ejection', 'Continuous', 'No murmur'], {
    explanation: 'Backflow in diastole.',
  }),
  mcq('s2-5-2', 'murmurs', 'What kind of murmur does mitral stenosis produce?', 'Diastolic', ['Systolic, like aortic stenosis', 'Continuous', 'No murmur'], {
    explanation: 'Forward flow during ventricular filling.',
  }),
  tf({ id: 's2-5-3', conceptId: 'murmurs', statement: 'Normal laminar blood flow is silent.', answer: true, explanation: 'Murmurs come from turbulence.' }),
  mcq('s2-5-4', 'murmurs', 'Why can a goitre cause a bruit?', 'Raised blood flow through it', ['It blocks the windpipe', 'It presses on the heart', 'It makes the blood thicker and slower'], {
    explanation: 'Slide 40: goitre with raised blood flow.',
  }),
  mcq('s2-5-5', 'murmurs', 'Where is each valve’s murmur best heard?', 'Over its surface marking', ['Over the back of the neck only', 'Over the abdomen', 'At the wrist pulse'], {
    explanation: 'Auscultate over the valve’s surface marking.',
  }),

  // ─── Lesson 3 · S1 Cardiac output ──────────────────────────────────
  mcq('s3-1-1', 'cardiac-output-definition', 'What is a chronotropic effect?', 'A change in heart rate', ['A change in the force of each contraction', 'A change in blood volume', 'A change in valve size'], {
    explanation: 'Chronotropic: rate; inotropic: strength.',
  }),
  mcq('s3-1-2', 'cardiac-output-definition', 'Heart rate 60/min and stroke volume 90 mL. What is cardiac output?', '5.4 L/min', ['150 L/min', '0.54 L/min', '54 L/min'], {
    explanation: 'CO = HR × SV = 60 × 90 mL = 5,400 mL/min.',
    skill: 'application',
  }),
  tf({ id: 's3-1-3', conceptId: 'cardiac-output-definition', statement: 'Sympathetic stimulation can raise stroke volume by making the heart contract forcibly.', answer: true, explanation: 'Slide 42.' }),
  mcq('s3-1-4', 'cardiac-output-definition', 'What sets the heart rate?', 'The cardiac innervation', ['The size of the ventricles alone', 'The blood viscosity', 'The valve area'], {
    explanation: 'Sympathetic and parasympathetic nerves set the rate.',
  }),
  mcq('s3-1-5', 'cardiac-output-definition', 'How can cardiac output be changed?', 'Through the rate or the stroke volume', ['Only through the viscosity of the blood itself', 'Only through the valve area', 'Only through breathing'], {
    explanation: 'CO = HR × SV.',
  }),

  // ─── Lesson 3 · S2 Preload, afterload and Starling’s law ───────────
  mcq('s3-2-1', 'frank-starling', 'What does the Frank–Starling curve plot?', 'Stroke volume against end-diastolic volume', ['Heart rate against blood pressure', 'Cardiac output against the time of day it is measured', 'Pressure against valve area'], {
    explanation: 'Slides 44–47.',
  }),
  mcq('s3-2-2', 'frank-starling', 'Which object does the lecture compare preload and afterload with?', 'An elastic band or sling shot', ['A balloon slowly filled with water', 'A bicycle pump', 'A door hinge'], {
    explanation: 'Slide 44.',
  }),
  tf({ id: 's3-2-3', conceptId: 'frank-starling', statement: 'Homometric regulation changes contractility without changing muscle length.', answer: true, explanation: 'Heterometric: length; homometric: contractility.' }),
  mcq('s3-2-4', 'frank-starling', 'What sets afterload?', 'The systemic blood pressure the heart pumps against', ['The amount of blood returning to the heart in diastole', 'The heart rate', 'The size of the atria'], {
    explanation: 'Resistance through the aortic valve and peripheral resistance.',
  }),
  mcq('s3-2-5', 'frank-starling', 'More blood stretches the ventricle before it contracts. What happens to stroke volume?', 'It rises', ['It falls', 'It stays exactly the same', 'It stops'], {
    explanation: 'Frank–Starling: energy ∝ initial length.',
  }),

  // ─── Lesson 3 · S3 What changes end-diastolic volume ───────────────
  mcq('s3-3-1', 'frank-starling', 'Which INCREASES end-diastolic volume?', 'Increased total blood volume', ['Standing, with blood pooling by gravity', 'Pericardial effusion', 'Stiff ventricles'], {
    explanation: 'Slide 48.',
  }),
  mcq('s3-3-2', 'frank-starling', 'Why does standing decrease end-diastolic volume?', 'Blood pools in the legs by gravity', ['The heart beats faster when standing', 'The veins all contract', 'The lungs fill with blood'], {
    explanation: 'Pooling by gravity.',
  }),
  tf({ id: 's3-3-3', conceptId: 'frank-starling', statement: 'A more negative intrathoracic pressure increases end-diastolic volume.', answer: true, explanation: 'Inspiration draws blood into the heart.' }),
  mcq('s3-3-4', 'frank-starling', 'How does a pericardial effusion affect filling?', 'It raises intrapericardial pressure, lowering EDV', ['It lowers intrapericardial pressure, so raising EDV', 'It has no effect on filling', 'It speeds up the heart rate'], {
    explanation: 'Slide 49.',
  }),
  mcq('s3-3-5', 'frank-starling', 'Which disease is given as an example of infiltrative heart disease lowering EDV?', 'EMF (endomyocardial fibrosis)', ['Rheumatic fever of the valves', 'Anaemia', 'Pericarditis'], {
    explanation: 'Infiltrative disease (EMF).',
  }),

  // ─── Lesson 3 · S4 Contractility ───────────────────────────────────
  mcq('s3-4-1', 'contractility', 'What second messenger do catecholamines use to raise contractility?', 'cAMP', ['IP₃', 'cGMP', 'DAG'], {
    explanation: 'β1 → adenylyl cyclase → cAMP.',
  }),
  mcq('s3-4-2', 'contractility', 'What does vagal stimulation do to the strength of contraction?', 'Weakens it (negative inotropy)', ['Strengthens it (positive inotropy)', 'Doubles the stroke volume at once', 'Has no effect on the ventricles'], {
    explanation: 'Vagal stimulation is negatively chronotropic and inotropic (slide 51).',
  }),
  tf({ id: 's3-4-3', conceptId: 'contractility', statement: 'Hypoxia and acidosis depress myocardial contractility.', answer: true, explanation: 'Slide 53.' }),
  mcq('s3-4-4', 'contractility', 'Which drugs are named as depressing inotropy?', 'Quinidine and procainamide', ['Adrenaline and noradrenaline', 'Caffeine and theophylline', 'Digoxin and dopamine'], {
    explanation: 'Slide 53.',
  }),
  mcq('s3-4-5', 'contractility', 'Which enzyme do β1 receptors activate?', 'Adenylyl cyclase', ['Phospholipase C', 'Guanylyl cyclase', 'Phosphodiesterase'], {
    explanation: 'Adenylyl cyclase makes cAMP.',
  }),

  // ─── Lesson 3 · S5 Cardiac output in exercise ──────────────────────
  mcq('s3-5-1', 'output-changes', 'What happens to afterload in exercise?', 'It falls, from vasodilatation', ['It rises, from vasoconstriction', 'It stays the same', 'It doubles'], {
    explanation: 'Vasodilatation lowers peripheral resistance.',
  }),
  mcq('s3-5-2', 'output-changes', 'Which hormone disorder raises cardiac output?', 'Thyrotoxicosis', ['Hypothyroidism with a slow heart', 'Addison’s disease', 'Diabetes insipidus'], {
    explanation: 'Slide 54.',
  }),
  tf({ id: 's3-5-3', conceptId: 'output-changes', statement: 'Pregnancy raises cardiac output.', answer: true, explanation: 'Slide 54.' }),
  mcq('s3-5-4', 'output-changes', 'Why does venous return rise in exercise?', 'Muscle pumping', ['Lower blood volume', 'Slower breathing', 'Higher viscosity'], {
    explanation: 'Muscle pumping raises venous return.',
  }),
  mcq('s3-5-5', 'output-changes', 'Which emotional states raise cardiac output?', 'Anxiety and excitement', ['Calm rest and deep sleep at night', 'Sadness only', 'None at all'], {
    explanation: 'Slide 54.',
  }),

  // ─── Lesson 3 · S6 Fick’s principle ────────────────────────────────
  mcq('s3-6-1', 'fick-principle', 'Where must venous blood be taken for Fick’s method?', 'The pulmonary artery', ['Any arm vein near the elbow', 'The jugular vein', 'The portal vein'], {
    explanation: 'Mixed venous blood from the pulmonary artery.',
  }),
  mcq('s3-6-2', 'fick-principle', 'What does Fick’s principle multiply by blood flow?', 'The arteriovenous concentration difference', ['The patient’s resting heart rate in beats per minute', 'The haematocrit', 'The body surface area'], {
    explanation: 'Uptake = A–V difference × flow.',
  }),
  tf({ id: 's3-6-3', conceptId: 'fick-principle', statement: 'Arterial blood has the same composition in every artery.', answer: true, explanation: 'So any artery can be sampled.' }),
  mcq('s3-6-4', 'fick-principle', 'Which substance is used for Fick’s principle in the lecture?', 'Oxygen', ['Glucose', 'Sodium', 'Urea'], {
    explanation: 'O₂ consumption = (arterial − venous O₂) × output.',
  }),
  mcq('s3-6-5', 'fick-principle', 'Why is venous blood from the pulmonary artery called “mixed”?', 'It has come from all body tissues', ['It contains both air and blood', 'It mixes arterial and venous blood', 'It is diluted with lymph'], {
    explanation: 'Blood from all tissues mixes before the lungs.',
  }),

  // ─── Lesson 3 · S7 Work done by the heart ──────────────────────────
  mcq('s3-7-1', 'cardiac-work', 'Why is angina more common in aortic stenosis than aortic incompetence?', 'Pressure (afterload) work needs more O₂', ['Volume (preload) work needs much more O₂', 'Stenosis lowers the heart rate', 'Incompetence blocks the coronaries'], {
    explanation: 'Afterload work is more O₂-demanding.',
  }),
  mcq('s3-7-2', 'cardiac-work', 'How does the heart get more oxygen?', 'By increasing coronary blood flow', ['By extracting more from coronary blood', 'By slowing the heart rate', 'By using less oxygen'], {
    explanation: 'Coronary venous blood is already low in O₂.',
  }),
  tf({ id: 's3-7-3', conceptId: 'cardiac-work', statement: 'Heart rate is one determinant of cardiac work.', answer: true, explanation: 'With intramyocardial tension and contractile state.' }),
  mcq('s3-7-4', 'cardiac-work', 'Which arteries supply the heart with oxygen?', 'The coronary arteries', ['The pulmonary arteries from the right heart', 'The carotid arteries', 'The renal arteries'], {
    explanation: 'Coronary arteries.',
  }),
  mcq('s3-7-5', 'cardiac-work', 'Work done by the heart = stroke volume × which pressure?', 'Mean arterial pressure', ['Atrial pressure', 'Venous pressure', 'Central venous pressure'], {
    explanation: 'Slide 58.',
  }),

  // ─── Lesson 4 · S1 What moves blood forward ────────────────────────
  mcq('s4-1-1', 'blood-propulsion', 'What determines resistance to flow most?', 'The calibre of the vessels', ['The viscosity of the blood itself', 'The colour of the blood', 'The temperature'], {
    explanation: 'Calibre; viscosity is a minor factor.',
  }),
  mcq('s4-1-2', 'blood-propulsion', 'Why do limb veins have one-way valves?', 'So muscle compression pushes blood towards the heart', ['So blood can flow back down to the feet when standing', 'So the arteries can fill', 'So lymph can drain'], {
    explanation: 'Muscle pumping with valves moves blood forward.',
  }),
  tf({ id: 's4-1-3', conceptId: 'blood-propulsion', statement: 'Negative pressure during inspiration helps move blood forward.', answer: true, explanation: 'Slide 60.' }),
  mcq('s4-1-4', 'blood-propulsion', 'When does elastic recoil of the arteries move blood forward?', 'During diastole', ['During systole only', 'During exercise only', 'Never'], {
    explanation: 'Recoil in diastole.',
  }),
  mcq('s4-1-5', 'blood-propulsion', 'Where are the veins surrounded by muscle that pumps them?', 'In the limbs, especially the legs', ['Inside the brain and the spinal cord', 'In the lungs', 'In the kidneys'], {
    explanation: 'Limb veins, especially in the legs.',
  }),

  // ─── Lesson 4 · S2 Structure and function of the vessels ───────────
  mcq('s4-2-1', 'vessel-structure', 'Where do lymph vessels drain?', 'Into the subclavian veins', ['Into the pulmonary arteries', 'Into the aorta directly', 'Into the bladder'], {
    explanation: 'Lymph vessels drain into the subclavian veins.',
  }),
  mcq('s4-2-2', 'vessel-structure', 'How do red cells pass through capillaries?', 'In single file', ['In large clumps', 'Very fast in rows', 'Not at all'], {
    explanation: 'Capillaries let red cells pass in single file.',
  }),
  tf({ id: 's4-2-3', conceptId: 'vessel-structure', statement: 'Large arteries have much elastic tissue.', answer: true, explanation: 'Stretched in systole, they recoil in diastole.' }),
  mcq('s4-2-4', 'vessel-structure', 'What nerves do arterioles have?', 'Noradrenergic constrictor nerves', ['No nerves at all, like sphincters', 'Only sensory nerves', 'Only motor nerves to muscle'], {
    explanation: 'Noradrenergic constrictor, sometimes cholinergic dilator.',
  }),
  mcq('s4-2-5', 'vessel-structure', 'What wall do capillaries have?', 'A single layer of endothelium', ['Three thick layers of muscle', 'Thick elastic and fibrous layers', 'A layer of cartilage'], {
    explanation: 'A single layer of endothelium.',
  }),

  // ─── Lesson 4 · S3 Flow, pressure and resistance ───────────────────
  mcq('s4-3-1', 'flow-pressure-resistance', 'If a vessel’s radius doubles, how does its resistance change?', 'It falls to 1/16', ['It falls to half', 'It doubles', 'It rises 16 times'], {
    explanation: 'Resistance ∝ 1/r⁴: 2⁴ = 16.',
    difficulty: 'advanced',
  }),
  mcq('s4-3-2', 'flow-pressure-resistance', 'Which equation links flow, pressure and resistance?', 'Flow = ΔP ÷ Resistance', ['Flow = ΔP × Resistance', 'Flow = Resistance ÷ ΔP', 'Flow = ΔP + Resistance'], {
    explanation: 'Slide 66.',
  }),
  tf({ id: 's4-3-3', conceptId: 'flow-pressure-resistance', statement: 'Blood flows from low pressure to high pressure.', answer: false, explanation: 'From high to low pressure.' }),
  mcq('s4-3-4', 'flow-pressure-resistance', 'In the Poiseuille–Hagen formula, what does η stand for?', 'Viscosity', ['Radius', 'Length', 'Pressure'], {
    explanation: 'η is viscosity; r radius; L length.',
  }),
  mcq('s4-3-5', 'flow-pressure-resistance', 'A vessel gets longer. What happens to its resistance?', 'It rises', ['It falls', 'It stays the same', 'It reverses'], {
    explanation: 'Resistance = 8ηL/πr⁴: proportional to length.',
  }),

  // ─── Lesson 4 · S4 Laminar and turbulent flow ──────────────────────
  mcq('s4-4-1', 'laminar-turbulent', 'How does viscosity affect Reynolds’ number?', 'Higher viscosity lowers it', ['Higher viscosity raises it', 'It has no effect', 'It doubles it'], {
    explanation: 'Re = ρDv/η.',
  }),
  mcq('s4-4-2', 'laminar-turbulent', 'Where is the layer of blood that does not move in laminar flow?', 'At the wall', ['In the centre', 'Halfway out', 'Nowhere'], {
    explanation: 'A thin layer at the wall does not move.',
  }),
  tf({ id: 's4-4-3', conceptId: 'laminar-turbulent', statement: 'A bruit is heard over a narrowed artery because flow there is turbulent.', answer: true, explanation: 'High velocity through the narrowing.' }),
  mcq('s4-4-4', 'laminar-turbulent', 'Why does anaemia make turbulence more likely?', 'It lowers blood viscosity', ['It raises blood viscosity', 'It narrows the arteries', 'It slows the blood'], {
    explanation: 'Lower viscosity raises Reynolds’ number.',
  }),
  mcq('s4-4-5', 'laminar-turbulent', 'Above what does laminar flow become turbulent?', 'A critical velocity', ['A critical temperature', 'A critical pH', 'A critical colour'], {
    explanation: 'Slide 70.',
  }),

  // ─── Lesson 4 · S5 Velocity and cross-sectional area ───────────────
  mcq('s4-5-1', 'velocity-area', 'Where is blood velocity lowest?', 'In the capillaries', ['In the aorta, where it is fastest', 'In the big veins', 'In the heart'], {
    explanation: 'Total area is greatest in the capillaries.',
  }),
  mcq('s4-5-2', 'velocity-area', 'What is the unit of flow?', 'cm³/s', ['cm/s, the unit of velocity', 'mmHg', 'kg'], {
    explanation: 'Velocity cm/s; flow cm³/s.',
  }),
  tf({ id: 's4-5-3', conceptId: 'velocity-area', statement: 'Average velocity equals flow divided by cross-sectional area.', answer: true, explanation: 'v = Q/A.' }),
  mcq('s4-5-4', 'velocity-area', 'Why does velocity rise again towards the big veins?', 'Total cross-sectional area falls', ['Total cross-sectional area rises', 'The blood thickens', 'The heart beats faster'], {
    explanation: 'Veins join, so the total area falls again.',
  }),
  mcq('s4-5-5', 'velocity-area', 'What happens to total cross-sectional area as vessels divide?', 'It increases', ['It decreases', 'It stays the same', 'It becomes zero'], {
    explanation: 'So velocity falls towards the capillaries.',
  }),

  // ─── Lesson 4 · S6 Viscosity ───────────────────────────────────────
  mcq('s4-6-1', 'viscosity', 'In which vessels do viscosity changes affect flow most?', 'Large vessels', ['Small vessels', 'Capillaries only', 'Lymph vessels'], {
    explanation: 'Large vessels are affected most.',
  }),
  mcq('s4-6-2', 'viscosity', 'How does the heart cope in anaemia?', 'It does extra volume work', ['It does less work than normal', 'It stops pumping', 'It does extra pressure work'], {
    explanation: 'Extra (volume) work to make up for low Hb.',
  }),
  tf({ id: 's4-6-3', conceptId: 'viscosity', statement: 'Sickle cell disease raises blood viscosity.', answer: true, explanation: 'Rigid cells raise viscosity.' }),
  mcq('s4-6-4', 'viscosity', 'Which plasma change raises viscosity?', 'More plasma protein', ['Less plasma protein', 'More water', 'Less sodium'], {
    explanation: 'Slide 78.',
  }),
  mcq('s4-6-5', 'viscosity', 'Why does peripheral resistance change little with small viscosity changes?', 'Of the way blood flows in small vessels', ['Small vessels have no blood', 'The heart changes its rate to compensate', 'The blood clots'], {
    explanation: 'Slide 77.',
  }),

  // ─── Lesson 4 · S7 Capacitance and distribution ────────────────────
  mcq('s4-7-1', 'blood-distribution', 'What share of blood is in the pulmonary circulation at rest?', 'About 18%', ['About 50%, as in the veins', 'About 2%', 'About 12%'], {
    explanation: 'Slide 81.',
  }),
  mcq('s4-7-2', 'blood-distribution', 'Which vessels are resistance vessels?', 'Small arteries and arterioles', ['The large veins and the venules', 'Capillaries', 'Lymph vessels'], {
    explanation: 'They generate the peripheral resistance.',
  }),
  tf({ id: 's4-7-3', conceptId: 'blood-distribution', statement: 'Only about 1% of transfused blood goes to the arteries.', answer: true, explanation: 'About 90% goes to veins, lungs and right heart.' }),
  mcq('s4-7-4', 'blood-distribution', 'What share of blood is in the capillaries at rest?', 'About 5%', ['About 50%, like the veins', 'About 18%', 'About 30%'], {
    explanation: 'Capillaries hold about 5%.',
  }),
  mcq('s4-7-5', 'blood-distribution', 'What happens to pressure as an artery is filled?', 'It rises linearly', ['It stays low for a long time', 'It falls', 'It does not change'], {
    explanation: 'Arteries: linear rise; veins take much before pressure rises.',
  }),

  // ─── Lesson 4 · S8 Arterial blood pressure ─────────────────────────
  mcq('s4-8-1', 'arterial-pressure', 'What is the Windkessel effect?', 'Flow continuing in diastole from arterial recoil', ['Blood pooling in the leg veins when standing still', 'Turbulence in a narrowed artery', 'Splitting of the second sound'], {
    explanation: 'Elastic recoil keeps flow going in diastole.',
  }),
  mcq('s4-8-2', 'arterial-pressure', 'BP is 120/80 mmHg. What is the pulse pressure?', '40 mmHg', ['200 mmHg', '80 mmHg', '100 mmHg'], {
    explanation: '120 − 80 = 40.',
  }),
  tf({ id: 's4-8-3', conceptId: 'arterial-pressure', statement: 'Arterial pressure is lower above the heart than below it.', answer: true, explanation: 'About 0.77 mmHg per cm, from gravity.' }),
  mcq('s4-8-4', 'arterial-pressure', 'BP is 120/81 mmHg. About what is the mean arterial pressure?', '94 mmHg', ['100 mmHg', '81 mmHg', '120 mmHg'], {
    explanation: '81 + ⅓ × 39 = 94.',
    difficulty: 'intermediate',
  }),
  mcq('s4-8-5', 'arterial-pressure', 'At which level is arterial pressure quoted?', 'Heart level', ['Head level', 'Foot level', 'Waist level'], {
    explanation: 'Slide 85.',
  }),

  // ─── Lesson 4 · S9 Measuring blood pressure ────────────────────────
  mcq('s4-9-1', 'arterial-pressure', 'A cuff that is too small gives what kind of reading?', 'Falsely high', ['Falsely low, like a big cuff', 'Exactly correct', 'No reading at all'], {
    explanation: 'Too small: falsely high; too big: falsely low.',
  }),
  mcq('s4-9-2', 'arterial-pressure', 'Which sound marks the systolic pressure?', 'The first sound heard', ['The last sound heard', 'The loudest sound', 'The muffled, dull sound'], {
    explanation: 'The first Korotkov sound is systolic.',
  }),
  tf({ id: 's4-9-3', conceptId: 'arterial-pressure', statement: 'You should palpate for the systolic pressure before listening.', answer: true, explanation: 'Slide 87.' }),
  mcq('s4-9-4', 'arterial-pressure', 'Over which artery is the cuff method used?', 'The brachial artery', ['The carotid artery', 'The femoral artery', 'The radial artery only'], {
    explanation: 'Slide 86.',
  }),
  mcq('s4-9-5', 'arterial-pressure', 'What do the Korotkov sounds do as cuff pressure falls?', 'Get louder, then dull and muffled, then disappear', ['Get quieter at once and never return, however low the cuff', 'Stay the same throughout', 'Start muffled and get sharp'], {
    explanation: 'Slide 86.',
  }),

  // ─── Lesson 4 · S10 Measuring blood flow ───────────────────────────
  mcq('s4-10-1', 'flow-measurement', 'Which flow meter uses the Doppler effect?', 'The Doppler flow meter', ['The electromagnetic flow meter', 'The plethysmograph', 'The mercury manometer'], {
    explanation: 'It measures velocity and direction.',
  }),
  mcq('s4-10-2', 'flow-measurement', 'What does plethysmography measure?', 'Changes in volume of a body part', ['The voltage made by moving blood', 'The colour of the blood', 'The pressure in the heart'], {
    explanation: 'Usually from changes in blood flow.',
  }),
  tf({ id: 's4-10-3', conceptId: 'flow-measurement', statement: 'The electromagnetic flow meter relies on blood being a conductor.', answer: true, explanation: 'Blood moving through a magnetic field makes a voltage.' }),
  mcq('s4-10-4', 'flow-measurement', 'What can a Doppler flow meter tell, besides velocity?', 'The direction of flow', ['The haematocrit of the blood', 'The blood group', 'The oxygen content'], {
    explanation: 'Velocity and direction.',
  }),
  mcq('s4-10-5', 'flow-measurement', 'What does the electromagnetic flow meter measure?', 'A voltage generated by moving blood', ['A change in the limb volume as blood flows in', 'The sound of turbulent flow', 'The colour change of blood'], {
    explanation: 'Blood in a magnetic field generates a voltage.',
  }),
];
