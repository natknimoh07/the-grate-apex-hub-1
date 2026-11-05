// Physiology → Respiratory Physiology: five more questions for every reading section,
// lessons 6–9 (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/respiratory-physiology/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestionsB: Q[] = [
  // ─── Lesson 6 · S1 What shifts the curve ───────────────────────────
  mcq('s6-1-1', 'curve-shift-factors', 'Which change shifts the curve to the LEFT?', 'A fall in temperature', ['A rise in 2,3-DPG in the red cells', 'A rise in CO₂', 'A fall in pH'], {
    explanation: 'Slide 56.',
  }),
  mcq('s6-1-2', 'curve-shift-factors', 'What question helps you work out a shift?', 'Do the tissues need O₂?', ['Is the patient lying or standing?', 'Is the heart rate high?', 'Is it day or night?'], {
    explanation: 'Slide 58.',
  }),
  tf({ id: 's6-1-3', conceptId: 'curve-shift-factors', statement: 'A rise in CO₂ shifts the curve to the right.', answer: true, explanation: 'Slide 56.' }),
  mcq('s6-1-4', 'curve-shift-factors', 'Which describes active tissue?', 'Hot, acidic and high in CO₂', ['Cold, alkaline and low in CO₂', 'Cold and acidic', 'Hot and alkaline'], {
    explanation: 'This shifts the curve right.',
  }),
  mcq('s6-1-5', 'curve-shift-factors', 'What does a fall in 2,3-DPG do to affinity?', 'Raises it', ['Lowers it', 'Has no effect', 'Abolishes it'], {
    explanation: 'Left shift (slide 56).',
  }),

  // ─── Lesson 6 · S2 2,3-DPG ─────────────────────────────────────────
  mcq('s6-2-1', 'dpg', 'Which is the reaction of 2,3-DPG with oxyhaemoglobin?', 'HbO₂ + 2,3-DPG ⇌ Hb–2,3-DPG + O₂', ['Hb + O₂ + 2,3-DPG ⇌ HbO₂–2,3-DPG', 'HbO₂ ⇌ Hb + 2,3-DPG', 'Hb + CO₂ ⇌ HbCO₂'], {
    explanation: 'More 2,3-DPG releases more O₂ (slide 58).',
  }),
  mcq('s6-2-2', 'dpg', 'Which hormone group raises 2,3-DPG, with thyroid and growth hormone?', 'Androgens', ['Insulin and glucagon together', 'Oxytocin', 'Melatonin'], {
    explanation: 'Slide 63.',
  }),
  tf({ id: 's6-2-3', conceptId: 'dpg', statement: 'Exercise raises 2,3-DPG.', answer: true, explanation: 'Slide 63.' }),
  mcq('s6-2-4', 'dpg', 'Through what does ascent to altitude raise 2,3-DPG?', 'The alkalosis', ['The cold air', 'The lactic acidosis', 'The dry air'], {
    explanation: 'Slide 63.',
  }),
  mcq('s6-2-5', 'dpg', 'What kind of condition raises 2,3-DPG?', 'Chronic hypoxia', ['Excess oxygen', 'Mild dehydration', 'Low blood pressure'], {
    explanation: 'Any condition with chronic hypoxia (slide 63).',
  }),

  // ─── Lesson 6 · S3 Bohr and Haldane ────────────────────────────────
  mcq('s6-3-1', 'bohr-haldane', 'Where does the Bohr effect matter most?', 'In the tissues', ['In the lungs, unloading CO₂', 'In the kidneys', 'In the airways'], {
    explanation: 'It helps O₂ unloading.',
  }),
  mcq('s6-3-2', 'bohr-haldane', 'Why does a rise in CO₂ lower the pH?', 'CO₂ forms carbonic acid with water', ['CO₂ binds to the red cell membrane', 'CO₂ removes bicarbonate', 'CO₂ breaks haemoglobin'], {
    explanation: 'Slide 59.',
  }),
  tf({ id: 's6-3-3', conceptId: 'bohr-haldane', statement: 'Oxygen binding makes haemoglobin a stronger acid.', answer: true, explanation: 'It releases H⁺ (slide 60).' }),
  mcq('s6-3-4', 'bohr-haldane', 'In the Haldane effect, what does the H⁺ released combine with?', 'HCO₃⁻, releasing CO₂', ['Cl⁻, forming hydrochloric acid', 'O₂, forming water', 'Iron'], {
    explanation: 'CO₂ goes into the alveoli (slide 60).',
  }),
  mcq('s6-3-5', 'bohr-haldane', 'What does a fall in CO₂ do to haemoglobin?', 'It picks up more O₂', ['It releases more O₂', 'It breaks down', 'It binds CO'], {
    explanation: 'The pH rises (slide 59).',
  }),

  // ─── Lesson 6 · S4 Fetal haemoglobin and myoglobin ─────────────────
  mcq('s6-4-1', 'fetal-hb-myoglobin', 'Why does myoglobin take up O₂ from the blood?', 'It has more affinity for O₂ than haemoglobin', ['It has much less affinity for O₂ than haemoglobin', 'It binds four O₂', 'It has no iron'], {
    explanation: 'Slide 65.',
  }),
  mcq('s6-4-2', 'fetal-hb-myoglobin', 'What kind of pigment is myoglobin?', 'An iron-containing pigment', ['A copper-containing pigment of blood', 'A fat pigment', 'A bile pigment'], {
    explanation: 'Slide 65.',
  }),
  tf({ id: 's6-4-3', conceptId: 'fetal-hb-myoglobin', statement: 'O₂ passes readily from mother to fetus.', answer: true, explanation: 'Fetal Hb has higher affinity (slide 64).' }),
  mcq('s6-4-4', 'fetal-hb-myoglobin', 'What does fetal haemoglobin bind less than adult haemoglobin?', '2,3-DPG', ['O₂', 'Iron', 'Globin chains'], {
    explanation: 'Slide 64.',
  }),
  mcq('s6-4-5', 'fetal-hb-myoglobin', 'What does myoglobin resemble?', 'Haemoglobin', ['Insulin', 'Cytochrome c', 'Surfactant'], {
    explanation: 'But it binds one O₂, not four.',
  }),

  // ─── Lesson 6 · S5 Carbon monoxide ─────────────────────────────────
  mcq('s6-5-1', 'carbon-monoxide', 'How many times greater is haemoglobin’s affinity for CO than for O₂?', 'About 210 times', ['About 2 times', 'About 21 times', 'About 2100 times'], {
    explanation: 'Slide 66.',
  }),
  mcq('s6-5-2', 'carbon-monoxide', 'Which factor affects how much carbonmonoxyhaemoglobin forms?', 'The duration of exposure', ['The colour of the patient’s skin', 'The blood group', 'The height'], {
    explanation: 'Duration, CO concentration and alveolar ventilation.',
  }),
  tf({ id: 's6-5-3', conceptId: 'carbon-monoxide', statement: 'CO displaces O₂ from haemoglobin.', answer: true, explanation: 'Slide 66.' }),
  mcq('s6-5-4', 'carbon-monoxide', 'What colour is carbonmonoxyhaemoglobin?', 'Red', ['Blue', 'Green', 'Brown'], {
    explanation: 'So there is no cyanosis.',
  }),
  mcq('s6-5-5', 'carbon-monoxide', 'What is the name of the compound CO forms with haemoglobin?', 'Carbonmonoxyhaemoglobin', ['Carbaminohaemoglobin', 'Methaemoglobin', 'Oxyhaemoglobin'], {
    explanation: 'Slide 66.',
  }),

  // ─── Lesson 6 · S6 How CO₂ is carried ──────────────────────────────
  mcq('s6-6-1', 'co2-transport', 'What is arterial PCO₂?', 'About 40 mmHg', ['About 46 mmHg, as in venous blood', 'About 100 mmHg', 'About 0 mmHg'], {
    explanation: 'Arterial 40, venous 46 mmHg (slide 67).',
  }),
  mcq('s6-6-2', 'co2-transport', 'What is the chloride shift?', 'Cl⁻ moving into red cells as HCO₃⁻ leaves', ['HCO₃⁻ moving into red cells as Cl⁻ leaves', 'Cl⁻ leaving the plasma into urine', 'Cl⁻ binding to haemoglobin'], {
    explanation: 'Keeps electrical neutrality (slide 69).',
  }),
  tf({ id: 's6-6-3', conceptId: 'co2-transport', statement: 'A small amount of CO₂ combines with plasma proteins.', answer: true, explanation: 'Slide 69.' }),
  mcq('s6-6-4', 'co2-transport', 'Which is NOT a way CO₂ is carried?', 'Bound to the haem iron', ['Dissolved in plasma', 'As bicarbonate', 'As carbamino compounds'], {
    explanation: 'Carbamino compounds bind globin, not haem iron.',
  }),
  mcq('s6-6-5', 'co2-transport', 'What does carbonic acid break into?', 'H⁺ and HCO₃⁻', ['CO and O₂', 'Cl⁻ and Na⁺', 'Glucose and water'], {
    explanation: 'Slides 67–68.',
  }),

  // ─── Lesson 7 · S1 Diffusion and blood gases ───────────────────────
  mcq('s7-1-1', 'gas-exchange', 'What is venous PO₂?', 'About 40 mmHg', ['About 46 mmHg', 'About 95–100 mmHg', 'About 149 mmHg'], {
    explanation: 'Slide 72.',
  }),
  mcq('s7-1-2', 'gas-exchange', 'What is a gas’s partial pressure proportional to?', 'Its concentration', ['Its colour', 'Its molecular weight only', 'The heart rate'], {
    explanation: 'Slide 72.',
  }),
  tf({ id: 's7-1-3', conceptId: 'gas-exchange', statement: 'Arterial PCO₂ is lower than venous PCO₂.', answer: true, explanation: '40 vs 46 mmHg.' }),
  mcq('s7-1-4', 'gas-exchange', 'What is the PO₂ gradient between alveolar air (~100) and venous blood?', 'About 60 mmHg', ['About 6 mmHg', 'About 140 mmHg', 'None'], {
    explanation: '100 − 40 = 60 mmHg.',
    skill: 'application',
  }),
  mcq('s7-1-5', 'gas-exchange', 'What is diffusion?', 'Net movement from high to low partial pressure', ['Movement driven by an ATP-using pump in the membrane', 'Movement from low to high pressure', 'Filtration under pressure'], {
    explanation: 'Slide 72.',
  }),

  // ─── Lesson 7 · S2 Alveolar air ────────────────────────────────────
  mcq('s7-2-1', 'alveolar-air', 'What does alveolar PO₂ depend on, with ventilation?', 'The rate of O₂ absorption into the blood', ['The amount of nitrogen dissolved in the blood', 'The heart valve area', 'The CSF pressure'], {
    explanation: 'Slide 75.',
  }),
  mcq('s7-2-2', 'alveolar-air', 'If CO₂ excretion doubles and ventilation is unchanged, alveolar PCO₂:', 'Doubles', ['Halves', 'Does not change', 'Falls to zero'], {
    explanation: 'It rises in direct proportion to CO₂ excretion.',
    skill: 'application',
  }),
  tf({ id: 's7-2-3', conceptId: 'alveolar-air', statement: 'Slow replacement of alveolar air prevents sudden changes in blood gases.', answer: true, explanation: 'Slide 74.' }),
  mcq('s7-2-4', 'alveolar-air', 'How is alveolar O₂ replenished?', 'By air entering the alveoli', ['By O₂ diffusing out of the blood', 'By the kidneys', 'By surfactant'], {
    explanation: 'Slide 75.',
  }),
  mcq('s7-2-5', 'alveolar-air', 'How does alveolar PCO₂ relate to ventilation?', 'Inversely', ['Directly', 'Not at all', 'Exponentially'], {
    explanation: 'Slide 76.',
  }),

  // ─── Lesson 7 · S3 The respiratory membrane ────────────────────────
  mcq('s7-3-1', 'respiratory-membrane', 'What is the rate-limiting step of diffusion through the membrane?', 'Water', ['The cell membrane lipids', 'The red cell', 'The surfactant'], {
    explanation: 'So it is about the same as diffusion in water (slide 80).',
  }),
  mcq('s7-3-2', 'respiratory-membrane', 'Which operation reduces the surface area for diffusion?', 'Removing a lung', ['Removing the appendix', 'Removing a kidney', 'Removing tonsils'], {
    explanation: 'Slide 79.',
  }),
  tf({ id: 's7-3-3', conceptId: 'respiratory-membrane', statement: 'O₂ and CO₂ pass through water less readily than through membranes.', answer: true, explanation: 'Slide 78.' }),
  mcq('s7-3-4', 'respiratory-membrane', 'What sets a gas’s diffusion coefficient?', 'Its solubility in the membrane and its size', ['Its colour and its temperature in the blood', 'The heart rate', 'The blood pressure'], {
    explanation: 'Slide 80.',
  }),
  mcq('s7-3-5', 'respiratory-membrane', 'Which is another name for the respiratory membrane?', 'The pulmonary membrane', ['The visceral pleural membrane', 'The basement layer', 'The pericardium'], {
    explanation: 'Slide 77.',
  }),

  // ─── Lesson 7 · S4 Diffusing capacity ──────────────────────────────
  mcq('s7-4-1', 'diffusing-capacity', 'When the membrane is damaged, which fails first?', 'O₂ getting in', ['CO₂ getting out', 'Both at once', 'Neither'], {
    explanation: 'Slide 81.',
  }),
  mcq('s7-4-2', 'diffusing-capacity', 'Fibrosis thickens a patient’s respiratory membrane. Which blood-gas change appears first?', 'A fall in arterial PO₂', ['A rise in arterial PCO₂ before any change in O₂', 'A fall in arterial PCO₂ only', 'No change at all'], {
    explanation: 'O₂ fails to get in before CO₂ fails to get out (slide 81).',
    skill: 'application',
  }),
  tf({ id: 's7-4-3', conceptId: 'diffusing-capacity', statement: 'Increased alveolar ventilation helps raise diffusing capacity in exercise.', answer: true, explanation: 'Slide 81.' }),
  mcq('s7-4-4', 'diffusing-capacity', 'What happens to capillaries already open in exercise?', 'They dilate', ['They close', 'They clot', 'They leak fluid'], {
    explanation: 'Slide 81.',
  }),
  fill('s7-4-5', 'diffusing-capacity', 'Diffusing capacity is the volume of gas that diffuses through the membrane each ____.', ['minute'], {
    explanation: 'Slide 81.',
  }),

  // ─── Lesson 7 · S5 The ventilation–perfusion ratio ─────────────────
  mcq('s7-5-1', 'ventilation-perfusion', 'What does V/Q greater than 1 represent?', 'Wasted ventilation', ['A physiological shunt of blood', 'Perfusion with no ventilation', 'Normal matching'], {
    explanation: 'Physiological dead space (slide 86).',
  }),
  mcq('s7-5-2', 'ventilation-perfusion', 'With V/Q = 0, what does the alveolar air equilibrate with?', 'Venous blood', ['Inspired air', 'Arterial blood', 'CSF'], {
    explanation: 'PO₂ 40, PCO₂ 46 (slide 84).',
  }),
  tf({ id: 's7-5-3', conceptId: 'ventilation-perfusion', statement: 'With V/Q = infinity, CO₂ is not delivered to the alveolus.', answer: true, explanation: 'Slide 85.' }),
  mcq('s7-5-4', 'ventilation-perfusion', 'What are the PO₂ and PCO₂ of alveoli with V/Q = infinity?', '149 and 0 mmHg', ['40 and 46 mmHg', '100 and 40 mmHg', '0 and 149 mmHg'], {
    explanation: 'Humidified inspired air.',
  }),
  mcq('s7-5-5', 'ventilation-perfusion', 'Why is V/Q used?', 'Ventilation and perfusion are not matched everywhere', ['Because all alveoli are ventilated and perfused equally', 'It measures heart rate', 'It measures surfactant'], {
    explanation: 'Slides 83–84.',
  }),

  // ─── Lesson 7 · S6 The lung apex ───────────────────────────────────
  mcq('s7-6-1', 'regional-vq', 'What is the PO₂ like at the apex?', 'High', ['Low', 'Zero', 'Same as venous'], {
    explanation: 'Slide 87.',
  }),
  mcq('s7-6-2', 'regional-vq', 'Which infection favours the apex?', 'Tuberculosis', ['Pneumococcal pneumonia', 'Influenza', 'Malaria'], {
    explanation: 'Slide 87.',
  }),
  tf({ id: 's7-6-3', conceptId: 'regional-vq', statement: 'The apex has a lot of dead space.', answer: true, explanation: 'Slide 87.' }),
  mcq('s7-6-4', 'regional-vq', 'What is the V/Q at the apex?', 'High', ['Low', 'Zero', 'Exactly 1'], {
    explanation: 'Perfusion falls more than ventilation.',
  }),
  mcq('s7-6-5', 'regional-vq', 'At the apex, what are ventilation and perfusion like?', 'Both low', ['Both high', 'Ventilation high, perfusion zero', 'Perfusion high'], {
    explanation: 'Slide 87.',
  }),

  // ─── Lesson 8 · S1 Voluntary and automatic control ─────────────────
  mcq('s8-1-1', 'respiratory-control', 'Through which tracts does voluntary control travel?', 'The corticospinal tracts', ['The spinothalamic tracts of sensation', 'The optic tracts', 'The olfactory tracts'], {
    explanation: 'Slide 92.',
  }),
  mcq('s8-1-2', 'respiratory-control', 'Which chemical factors act on breathing?', 'pH, CO₂ and O₂', ['Glucose, urea and fat', 'Sodium and potassium only', 'Iron and calcium'], {
    explanation: 'Slide 91.',
  }),
  tf({ id: 's8-1-3', conceptId: 'respiratory-control', statement: 'A held breath is eventually forced to end.', answer: true, explanation: 'Slide 91.' }),
  mcq('s8-1-4', 'respiratory-control', 'What is the main control of breathing?', 'Neural', ['Hormonal', 'Mechanical only', 'Thermal'], {
    explanation: 'Slide 91.',
  }),
  mcq('s8-1-5', 'respiratory-control', 'Where are the respiratory motor neurons?', 'In the spinal cord', ['In the lungs', 'In the heart', 'In the cerebellar cortex'], {
    explanation: 'Slide 92.',
  }),

  // ─── Lesson 8 · S2 The medullary centres ───────────────────────────
  mcq('s8-2-1', 'medullary-centres', 'When do the expiratory neurons discharge?', 'In forced expiration', ['In quiet, passive expiration', 'Only in sleep', 'Never'], {
    explanation: 'Slide 93.',
  }),
  mcq('s8-2-2', 'medullary-centres', 'Which nerve brings lung-receptor impulses to the I neurons?', 'The vagus', ['The phrenic', 'The trigeminal', 'The facial'], {
    explanation: 'Slide 94.',
  }),
  tf({ id: 's8-2-3', conceptId: 'medullary-centres', statement: 'The inspiratory neurons fire spontaneously.', answer: true, explanation: 'Slide 94.' }),
  mcq('s8-2-4', 'medullary-centres', 'Which two neuron systems does the medulla use?', 'Inspiratory and expiratory', ['Sensory and motor', 'Sympathetic and parasympathetic', 'Upper and lower'], {
    explanation: 'Slide 93.',
  }),
  mcq('s8-2-5', 'medullary-centres', 'Besides the vagus, what influences the I neurons?', 'Impulses from the pons', ['Impulses from the kidneys', 'The heart valves', 'The thyroid'], {
    explanation: 'Slide 94.',
  }),

  // ─── Lesson 8 · S3 Transection and the pons ────────────────────────
  mcq('s8-3-1', 'pontine-centres', 'What happens after a cut below the medulla?', 'Breathing stops', ['Regular breathing continues', 'Apneusis', 'Gasping'], {
    explanation: 'Slide 95.',
  }),
  mcq('s8-3-2', 'pontine-centres', 'Where is the apneustic centre?', 'The lower pons', ['The upper pons', 'The cortex', 'The spinal cord'], {
    explanation: 'Slides 95–96.',
  }),
  tf({ id: 's8-3-3', conceptId: 'pontine-centres', statement: 'The pons smooths breathing.', answer: true, explanation: 'Slide 98.' }),
  mcq('s8-3-4', 'pontine-centres', 'In apneusis, what do the inspiratory muscles do?', 'Contract continuously', ['Relax completely', 'Twitch randomly and weakly', 'Waste away'], {
    explanation: 'Slide 95.',
  }),
  mcq('s8-3-5', 'pontine-centres', 'What does a cut above the pons remove?', 'Cortical influence', ['Medullary influence', 'Vagal influence', 'Spinal influence'], {
    explanation: 'Slide 95.',
  }),

  // ─── Lesson 8 · S4 The Hering–Breuer reflex ────────────────────────
  mcq('s8-4-1', 'hering-breuer', 'What does the Hering–Breuer reflex protect against?', 'Over-inflation of the lungs', ['Collapse of the airways in expiration', 'Choking', 'Low CO₂'], {
    explanation: 'Slide 97.',
  }),
  mcq('s8-4-2', 'hering-breuer', 'Which centre does the reflex reinforce?', 'The pneumotaxic centre', ['The apneustic centre', 'The vomiting centre', 'The cardioinhibitory centre'], {
    explanation: 'In preventing apneusis (slide 97).',
  }),
  tf({ id: 's8-4-3', conceptId: 'hering-breuer', statement: 'The Hering–Breuer reflex ends inspiration.', answer: true, explanation: 'It inhibits the I neurons.' }),
  mcq('s8-4-4', 'hering-breuer', 'Which nerve carries the reflex afferents?', 'The vagus', ['The glossopharyngeal', 'The phrenic', 'The trigeminal'], {
    explanation: 'Slide 97.',
  }),
  mcq('s8-4-5', 'hering-breuer', 'What sets off the reflex?', 'Lung inflation in inspiration', ['Lung deflation at the end of expiration', 'A cough', 'A fall in O₂'], {
    explanation: 'Slide 97.',
  }),

  // ─── Lesson 8 · S5 Chemoreceptors ──────────────────────────────────
  mcq('s8-5-1', 'chemoreceptors', 'Why are the carotid bodies not stimulated in CO poisoning?', 'They respond to dissolved O₂, which is normal', ['They respond only to the O₂ bound to haemoglobin', 'CO blocks their nerve', 'They are destroyed by CO'], {
    explanation: 'Slide 100.',
  }),
  mcq('s8-5-2', 'chemoreceptors', 'Where are the central chemoreceptors?', 'In the medulla', ['In the carotid bodies', 'In the aortic arch', 'In the lungs'], {
    explanation: 'Slide 99.',
  }),
  tf({ id: 's8-5-3', conceptId: 'chemoreceptors', statement: 'Stasis of blood stimulates the carotid bodies.', answer: true, explanation: 'Slide 100.' }),
  mcq('s8-5-4', 'chemoreceptors', 'Why does CSF H⁺ follow arterial CO₂?', 'CO₂ crosses the barrier and forms H⁺ in CSF', ['H⁺ crosses the blood–brain barrier faster than CO₂', 'HCO₃⁻ crosses at once', 'The kidneys control it'], {
    explanation: 'Slide 101.',
  }),
  mcq('s8-5-5', 'chemoreceptors', 'What is the blood flow through the carotid bodies like?', 'Very high', ['Very low', 'Absent', 'Reversed'], {
    explanation: 'Slide 100.',
  }),

  // ─── Lesson 8 · S6 Responses to chemical changes ───────────────────
  mcq('s8-6-1', 'chemical-responses', 'What does alkalosis do to the respiratory centre?', 'Depresses it', ['Stimulates it', 'Has no effect', 'Destroys it'], {
    explanation: 'Slide 103.',
  }),
  mcq('s8-6-2', 'chemical-responses', 'Why does low inspired O₂ raise ventilation only a little?', 'The extra breathing washes out CO₂', ['The chemoreceptors stop working in low O₂', 'O₂ cannot reach the lungs', 'The medulla is damaged'], {
    explanation: 'Low CO₂ inhibits respiration (slide 105).',
  }),
  tf({ id: 's8-6-3', conceptId: 'chemical-responses', statement: 'Low O₂ makes the respiratory system more sensitive to a rise in CO₂.', answer: true, explanation: 'Slide 105.' }),
  mcq('s8-6-4', 'chemical-responses', 'What stimulates breathing during breath-holding?', 'Rising CO₂ and falling O₂', ['Falling CO₂ and rising O₂', 'Rising pH', 'Falling temperature'], {
    explanation: 'Slide 106.',
  }),
  mcq('s8-6-5', 'chemical-responses', 'Which symptom belongs to CO₂ narcosis?', 'Confusion', ['Euphoria from nitrogen', 'Tetany', 'Cyanosis'], {
    explanation: 'Headache, confusion and coma (slide 104).',
  }),

  // ─── Lesson 8 · S7 Cough, sneeze and swallowing ────────────────────
  mcq('s8-7-1', 'protective-reflexes', 'In a sneeze, what directs the air through the nose?', 'Depression of the uvula', ['Closure of the vocal cords', 'Contraction of the tongue', 'Raising of the epiglottis'], {
    explanation: 'Slide 109.',
  }),
  mcq('s8-7-2', 'protective-reflexes', 'Which muscles open the glottis early in inspiration?', 'The laryngeal abductors', ['The laryngeal adductors', 'The intercostals', 'The scalenes'], {
    explanation: 'Slide 110.',
  }),
  tf({ id: 's8-7-3', conceptId: 'protective-reflexes', statement: 'Incomplete glottic closure in the unconscious can cause aspiration pneumonia.', answer: true, explanation: 'Slide 110.' }),
  mcq('s8-7-4', 'protective-reflexes', 'Which nerve carries the cough afferents?', 'The vagus', ['The trigeminal', 'The facial', 'The optic'], {
    explanation: 'Slides 107–108.',
  }),
  mcq('s8-7-5', 'protective-reflexes', 'What are the bronchi and trachea sensitive to in the cough reflex?', 'Touch', ['Light', 'Sound', 'Heat only'], {
    explanation: 'Slide 107.',
  }),

  // ─── Lesson 8 · S8 Breathing in exercise ───────────────────────────
  mcq('s8-8-1', 'exercise-ventilation', 'What may cause the initial rise in breathing early in exercise?', 'Proprioceptors in muscles, tendons and joints', ['Lactic acid releasing CO₂ in the blood of the muscles', 'A fall in arterial O₂', 'A fall in temperature'], {
    explanation: 'Slide 112.',
  }),
  mcq('s8-8-2', 'exercise-ventilation', 'Why does a lower venous PO₂ help in exercise?', 'It gives a bigger gradient in the lungs', ['It slows the heart and lowers cardiac output', 'It stops CO₂ release', 'It closes the airways'], {
    explanation: 'Slide 111.',
  }),
  tf({ id: 's8-8-3', conceptId: 'exercise-ventilation', statement: 'Exercising muscles remove more O₂ from the blood.', answer: true, explanation: 'Slide 111.' }),
  mcq('s8-8-4', 'exercise-ventilation', 'Which rises in exercise?', 'Respiratory excursions', ['Venous PO₂ in the muscles', 'Resting time', 'Dead space only'], {
    explanation: 'Slide 111.',
  }),
  mcq('s8-8-5', 'exercise-ventilation', 'What is venous PO₂ at rest?', 'About 40 mmHg', ['About 25 mmHg', 'About 100 mmHg', 'About 10 mmHg'], {
    explanation: 'It falls to 25 mmHg in exercise.',
  }),

  // ─── Lesson 9 · S1 The four types of hypoxia ───────────────────────
  mcq('s9-1-1', 'hypoxia-types', 'Which type of hypoxia does anaemia cause?', 'Anaemic', ['Hypoxic', 'Stagnant', 'Histotoxic'], {
    explanation: 'Not enough haemoglobin to carry O₂.',
  }),
  mcq('s9-1-2', 'hypoxia-types', 'Why is anoxia called an impossible state?', 'It is the total absence of O₂', ['It is too much O₂ in the tissues', 'It is low CO₂', 'It is a fast pulse'], {
    explanation: 'Slide 113.',
  }),
  tf({ id: 's9-1-3', conceptId: 'hypoxia-types', statement: 'High altitude causes hypoxic hypoxia.', answer: true, explanation: 'Arterial PO₂ is reduced.' }),
  mcq('s9-1-4', 'hypoxia-types', 'What is the problem in histotoxic hypoxia?', 'Cells cannot use O₂', ['Blood flow is slow', 'Arterial PO₂ is low', 'Haemoglobin is low'], {
    explanation: 'Toxins such as cyanide.',
  }),
  mcq('s9-1-5', 'hypoxia-types', 'What is hypoxia?', 'O₂ deficiency at tissue level', ['Too much CO₂ in the inspired air', 'Low blood sugar', 'Fast breathing'], {
    explanation: 'Slide 113.',
  }),

  // ─── Lesson 9 · S2 Effects of hypoxia ──────────────────────────────
  mcq('s9-2-1', 'hypoxia-effects', 'What is hyperpnoea?', 'Increased rate and depth of breathing', ['Rapid, shallow breathing with a small tidal volume', 'Shortness of breath', 'Stopped breathing'], {
    explanation: 'Slide 115.',
  }),
  mcq('s9-2-2', 'hypoxia-effects', 'What is dyspnoea?', 'Laboured, difficult breathing', ['Increased rate and depth of breathing', 'Rapid shallow breathing', 'Normal breathing'], {
    explanation: 'Slide 115.',
  }),
  tf({ id: 's9-2-3', conceptId: 'hypoxia-effects', statement: 'Mild hypoxia can cause symptoms like drunkenness.', answer: true, explanation: 'Slide 114.' }),
  mcq('s9-2-4', 'hypoxia-effects', 'Which is a SERIOUS effect of hypoxia?', 'Loss of consciousness', ['Headache with nausea and vomiting', 'Nausea', 'Drowsiness'], {
    explanation: 'Slides 114–115.',
  }),
  mcq('s9-2-5', 'hypoxia-effects', 'What happens to the heart rate in hypoxia?', 'Tachycardia', ['Bradycardia', 'Heart block', 'No change'], {
    explanation: 'Slide 114.',
  }),

  // ─── Lesson 9 · S3 Cyanosis ────────────────────────────────────────
  mcq('s9-3-1', 'cyanosis', 'Why is there peripheral cyanosis in moderate cold?', 'Slow flow lets more O₂ be removed', ['Cold shifts the curve to the left', 'Cold raises haemoglobin', 'Cold blocks the lungs'], {
    explanation: 'Slide 117.',
  }),
  mcq('s9-3-2', 'cyanosis', 'Why is there no cyanosis in histotoxic hypoxia?', 'Blood O₂ stays high', ['There is too little haemoglobin', 'The skin is cold', 'The curve shifts left'], {
    explanation: 'Slide 118.',
  }),
  tf({ id: 's9-3-3', conceptId: 'cyanosis', statement: 'Cyanosis depends on the state of the capillary circulation.', answer: true, explanation: 'Slides 116–117.' }),
  mcq('s9-3-4', 'cyanosis', 'Where is peripheral cyanosis seen?', 'In the skin and fingertips', ['On the tongue and inside the lips', 'In the retina', 'In the lungs'], {
    explanation: 'Slide 117.',
  }),
  mcq('s9-3-5', 'cyanosis', 'What causes the bluish colour of cyanosis?', 'Deoxygenated haemoglobin', ['Fully oxygenated haemoglobin', 'Bilirubin', 'Carbon monoxide'], {
    explanation: 'Slide 116.',
  }),

  // ─── Lesson 9 · S4 High altitude ───────────────────────────────────
  mcq('s9-4-1', 'altitude', 'What is the commonest cause of hypoxic hypoxia?', 'Ascent to altitude', ['Carbon monoxide poisoning', 'Anaemia', 'Shock'], {
    explanation: 'Slide 119.',
  }),
  mcq('s9-4-2', 'altitude', 'How should transient mountain sickness be treated?', 'Rest or give O₂', ['Climb higher at once', 'Hard exercise', 'Give CO₂'], {
    explanation: 'Slide 121.',
  }),
  tf({ id: 's9-4-3', conceptId: 'altitude', statement: 'Mountain sickness is more common if one works early in the ascent.', answer: true, explanation: 'Slide 121.' }),
  mcq('s9-4-4', 'altitude', 'Which is a symptom of mountain sickness?', 'Insomnia', ['Euphoria', 'Tetany', 'Itching'], {
    explanation: 'Headache, breathlessness, insomnia, irritability (slide 121).',
  }),
  mcq('s9-4-5', 'altitude', 'What does hypoxia at altitude stimulate first?', 'The chemoreceptors', ['The arterial baroreceptors', 'The kidneys', 'The pancreas'], {
    explanation: 'Causing hyperventilation (slide 120).',
  }),

  // ─── Lesson 9 · S5 Acclimatisation ─────────────────────────────────
  mcq('s9-5-1', 'altitude', 'Why may breathing be depressed at first on reaching altitude?', 'The alkalosis from hyperventilation', ['The acidosis from lactic acid in the muscles', 'Too much O₂ in the air', 'The cold air'], {
    explanation: 'H⁺ moved into the CSF restores the drive (slide 122).',
  }),
  mcq('s9-5-2', 'altitude', 'Within how many days do erythropoietin and haemoglobin rise?', '2–3 days', ['2–3 weeks', '2–3 months', '2–3 hours'], {
    explanation: 'Slide 123.',
  }),
  tf({ id: 's9-5-3', conceptId: 'altitude', statement: 'Mitochondria increase in acclimatisation.', answer: true, explanation: 'With myoglobin (slide 123).' }),
  mcq('s9-5-4', 'altitude', 'Which way does the alkalosis itself shift the curve?', 'To the left', ['To the right', 'It does not shift', 'Up and down'], {
    explanation: 'But the 2,3-DPG it raises shifts it right.',
  }),
  mcq('s9-5-5', 'altitude', 'What causes the alkalosis at altitude?', 'Hyperventilation', ['Vomiting', 'Kidney failure', 'Eating less'], {
    explanation: 'Slide 122.',
  }),

  // ─── Lesson 9 · S6 Failure of the exchange apparatus ───────────────
  mcq('s9-6-1', 'hypoxic-hypoxia-causes', 'Which venous shunt causes hypoxic hypoxia?', 'Cyanotic congenital heart disease', ['A blocked deep vein in the lower leg', 'Varicose veins', 'Haemorrhoids'], {
    explanation: 'Blood bypasses the lungs.',
  }),
  mcq('s9-6-2', 'hypoxic-hypoxia-causes', 'Which collection in the chest can collapse the lung?', 'Haemothorax', ['Pericardial fat', 'Mediastinal lymph', 'Hiatus hernia'], {
    explanation: 'With pneumothorax and hydrothorax.',
  }),
  tf({ id: 's9-6-3', conceptId: 'hypoxic-hypoxia-causes', statement: 'Emphysema increases physiological dead space.', answer: true, explanation: 'Slides 124–125.' }),
  mcq('s9-6-4', 'hypoxic-hypoxia-causes', 'Which type of hypoxia is CO poisoning?', 'Anaemic', ['Hypoxic', 'Histotoxic', 'Stagnant'], {
    explanation: 'Haemoglobin cannot take up O₂ (slide 126).',
  }),
  mcq('s9-6-5', 'hypoxic-hypoxia-causes', 'Obstruction of a main bronchus causes what?', 'Lung collapse', ['Lung overinflation', 'Faster gas exchange', 'Lower dead space'], {
    explanation: 'Atelectasis (slides 124–125).',
  }),

  // ─── Lesson 9 · S7 Oxygen treatment ────────────────────────────────
  mcq('s9-7-1', 'oxygen-therapy', 'Which toxic products does 100% O₂ form?', 'Superoxide and H₂O₂', ['Carbon monoxide and nitrogen', 'Lactic acid', 'Ammonia'], {
    explanation: 'Slide 127.',
  }),
  mcq('s9-7-2', 'oxygen-therapy', 'After how long of breathing 100% O₂ do airways become irritated?', 'More than 8 hours', ['More than 8 minutes', 'More than 8 days', 'At once'], {
    explanation: 'Slide 127.',
  }),
  tf({ id: 's9-7-3', conceptId: 'oxygen-therapy', statement: '100% O₂ inhibits surfactant production.', answer: true, explanation: 'Slide 127.' }),
  mcq('s9-7-4', 'oxygen-therapy', 'Which lung disease of infants can high O₂ cause?', 'Bronchopulmonary dysplasia', ['Respiratory distress syndrome', 'Emphysema', 'Asthma'], {
    explanation: 'Lung cysts (slide 128).',
  }),
  mcq('s9-7-5', 'oxygen-therapy', 'Which cells does 100% O₂ kill in the lung?', 'Macrophages', ['Type II cells only', 'Red cells', 'Cartilage cells'], {
    explanation: 'Slide 127.',
  }),

  // ─── Lesson 9 · S8 CO₂ disorders and asphyxia ──────────────────────
  mcq('s9-8-1', 'co2-disorders', 'How is respiratory acidosis compensated?', 'The kidneys reabsorb more HCO₃⁻', ['The kidneys excrete more HCO₃⁻ in urine', 'The lungs retain CO₂', 'The liver makes acid'], {
    explanation: 'Slide 129.',
  }),
  mcq('s9-8-2', 'co2-disorders', 'What causes hypocapnia?', 'Hyperventilation', ['Pump failure', 'Breath-holding', 'Airway blockage'], {
    explanation: 'Slide 130.',
  }),
  tf({ id: 's9-8-3', conceptId: 'co2-disorders', statement: 'Hypocapnia causes cerebral vasoconstriction.', answer: true, explanation: 'Slide 130.' }),
  mcq('s9-8-4', 'co2-disorders', 'What is asphyxia?', 'Low O₂ and high CO₂ from a blocked airway', ['High O₂ and low CO₂ from breathing too fast', 'Low CO₂ alone', 'High O₂ alone'], {
    explanation: 'Slide 131.',
  }),
  mcq('s9-8-5', 'co2-disorders', 'What does asphyxia do to blood pressure?', 'Raises it', ['Lowers it', 'No change', 'Stops it'], {
    explanation: 'With heart rate and catecholamines (slide 131).',
  }),

  // ─── Lesson 9 · S9 Diving and drowning ─────────────────────────────
  mcq('s9-9-1', 'pressure-and-drowning', 'What causes nitrogen narcosis?', 'Raised PN₂ at depth', ['N₂ bubbles on rapid ascent', 'Low O₂ at altitude', 'CO in the air'], {
    explanation: 'Slides 132–133.',
  }),
  mcq('s9-9-2', 'pressure-and-drowning', 'What happens in fresh-water drowning?', 'Water is absorbed and red cells lyse', ['Fluid is drawn from plasma into lungs', 'Nothing enters the lungs', 'Blood clots'], {
    explanation: 'Fresh water is hypotonic (slide 135).',
  }),
  tf({ id: 's9-9-3', conceptId: 'pressure-and-drowning', statement: 'Decompression sickness is also called the bends.', answer: true, explanation: 'Or Caisson’s disease (slide 134).' }),
  mcq('s9-9-4', 'pressure-and-drowning', 'What happens first in drowning?', 'Spasm of the laryngeal muscles', ['Flooding of the lungs', 'Relaxation of the glottis and cords', 'Red cell lysis'], {
    explanation: 'Slide 135.',
  }),
  mcq('s9-9-5', 'pressure-and-drowning', 'Which is a sign of nitrogen narcosis?', 'Loss of manual dexterity', ['Joint pain from nitrogen bubbles', 'Itching', 'Paralysis'], {
    explanation: 'Euphoria, impaired intellect, loss of dexterity.',
  }),

  // ─── Lesson 9 · S10 Life-saving procedures and pH ──────────────────
  mcq('s9-10-1', 'respiratory-ph', 'Why is the neck extended in mouth-to-mouth resuscitation?', 'To lift the tongue from the airway', ['To close off the nose of the victim', 'To raise the blood pressure', 'To open the eyes'], {
    explanation: 'Slide 136.',
  }),
  mcq('s9-10-2', 'respiratory-ph', 'When is the Heimlich manoeuvre used?', 'In choking', ['In drowning', 'In fainting', 'In asthma'], {
    explanation: 'Slide 137.',
  }),
  tf({ id: 's9-10-3', conceptId: 'respiratory-ph', statement: 'Haemoglobin is one of the blood buffers.', answer: true, explanation: 'With protein groups (slide 138).' }),
  mcq('s9-10-4', 'respiratory-ph', 'What is the constant in the Henderson–Hasselbalch equation for blood?', '6.1', ['7.4', '1.6', '10'], {
    explanation: 'pH = 6.1 + log [HCO₃⁻]/[acid].',
  }),
  mcq('s9-10-5', 'respiratory-ph', 'Which organ regulates HCO₃⁻?', 'The kidneys', ['The lungs', 'The liver', 'The heart'], {
    explanation: 'Slide 138.',
  }),
];
