// Physiology → Respiratory Physiology: five more questions for every reading section,
// lessons 1–5 (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/respiratory-physiology/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestionsA: Q[] = [
  // ─── Lesson 1 · S1 What respiration means ──────────────────────────
  mcq('s1-1-1', 'respiration-overview', 'What is internal respiration?', 'Use of O₂ by the cells to make energy', ['Exchange of gases between the air and the blood', 'Movement of air into the lungs', 'Binding of O₂ to haemoglobin'], {
    explanation: 'Internal respiration uses O₂ in the cells, producing CO₂ (slide 2).',
  }),
  mcq('s1-1-2', 'respiration-overview', 'Which part of the respiratory system is the pump?', 'The chest wall and respiratory muscles', ['The left and right lungs with their alveoli', 'The respiratory control centre', 'The trachea and bronchi'], {
    explanation: 'Lungs exchange gas; chest wall and muscles pump; a centre controls (slide 3).',
  }),
  tf({ id: 's1-1-3', conceptId: 'respiration-overview', statement: 'CO₂ is the by-product of internal respiration.', answer: true, explanation: 'Slide 2.' }),
  mcq('s1-1-4', 'respiration-overview', 'Which organs are the gas-exchange organs?', 'The left and right lungs', ['The heart and great vessels', 'The nose and the pharynx', 'The diaphragm and the ribs'], {
    explanation: 'Slide 3.',
  }),
  fill('s1-1-5', 'respiration-overview', 'Taking up O₂ and expelling CO₂ with the air is ____ respiration.', ['external'], {
    explanation: 'Slide 2.',
  }),

  // ─── Lesson 1 · S2 The respiratory muscles ─────────────────────────
  mcq('s1-2-1', 'respiratory-muscles', 'Which way does the diaphragm move in inspiration?', 'Down', ['Up', 'Forward', 'It does not move'], {
    explanation: 'It moves down, enlarging the chest (slide 14).',
  }),
  mcq('s1-2-2', 'respiratory-muscles', 'Which muscles contract in active expiration, with the internal intercostals?', 'The abdominal muscles', ['The external intercostals of the chest', 'The scalenes', 'The sternocleidomastoids'], {
    explanation: 'They push the diaphragm up (slide 15).',
  }),
  tf({ id: 's1-2-3', conceptId: 'respiratory-muscles', statement: 'Quiet expiration needs no muscle work.', answer: true, explanation: 'Only forced expiration uses muscles.' }),
  mcq('s1-2-4', 'respiratory-muscles', 'Which diameter of the chest do the external intercostals increase?', 'The antero-posterior diameter', ['The vertical height of the neck', 'The width of the abdomen', 'The length of the spine'], {
    explanation: 'They raise the sternum and push it outward (slide 14).',
  }),
  mcq('s1-2-5', 'respiratory-muscles', 'When are the scalenes used?', 'In forced inspiration', ['In quiet expiration at rest', 'Only in sleep', 'Never in breathing'], {
    explanation: 'They are accessory muscles.',
  }),

  // ─── Lesson 1 · S3 The airway ──────────────────────────────────────
  mcq('s1-3-1', 'airway-structure', 'What keeps the bronchioles open?', 'The pressures that keep the lungs open', ['Rings of cartilage set firmly in their walls', 'Thick layers of bone', 'Mucus filling them'], {
    explanation: 'They have no cartilage (slides 5–6).',
  }),
  mcq('s1-3-2', 'airway-structure', 'Which cells form the main lining of the alveoli?', 'Type I alveolar cells', ['Type II alveolar cells that make surfactant', 'Ciliated columnar cells', 'Goblet cells'], {
    explanation: 'Slide 6.',
  }),
  tf({ id: 's1-3-3', conceptId: 'airway-structure', statement: 'The alveoli are surrounded by capillaries.', answer: true, explanation: 'Slide 6.' }),
  mcq('s1-3-4', 'airway-structure', 'Which airway comes just before the alveoli?', 'The alveolar ducts', ['The respiratory bronchioles', 'The trachea', 'The main bronchi'], {
    explanation: 'Respiratory bronchioles → alveolar ducts → alveoli (slide 4).',
  }),
  mcq('s1-3-5', 'airway-structure', 'What lines the trachea and bronchi?', 'A ciliated epithelium', ['A layer of type I alveolar cells', 'Keratinised skin', 'Smooth muscle only'], {
    explanation: 'Slides 5–6.',
  }),

  // ─── Lesson 1 · S4 Narrowing and widening the airways ──────────────
  mcq('s1-4-1', 'airway-receptors', 'Which receptor causes bronchodilatation?', 'β2', ['Muscarinic', 'α1', 'Nicotinic'], {
    explanation: 'Slide 5.',
  }),
  mcq('s1-4-2', 'airway-receptors', 'Which is a bronchodilator drug named in the lecture?', 'Isoproterenol', ['Atropine-like acetylcholine', 'Acetylcholine', 'Histamine'], {
    explanation: 'Salbutamol and isoproterenol.',
  }),
  tf({ id: 's1-4-3', conceptId: 'airway-receptors', statement: 'Acetylcholine causes bronchial vasodilatation.', answer: true, explanation: 'With bronchospasm and mucus secretion (slide 5).' }),
  mcq('s1-4-4', 'airway-receptors', 'Besides bronchospasm, what does muscarinic stimulation cause?', 'Mucus secretion', ['Drying of the airway', 'Relaxation of the airway muscle', 'Loss of cilia'], {
    explanation: 'Slide 5.',
  }),
  mcq('s1-4-5', 'airway-receptors', 'Which other receptors do the airways have?', 'Stretch and tactile receptors', ['Light and sound receptors in the mucosa', 'Taste receptors', 'Pain receptors only'], {
    explanation: 'Slide 5.',
  }),

  // ─── Lesson 1 · S5 Gases and pressure ──────────────────────────────
  mcq('s1-5-1', 'gases-and-air', 'What is the CO₂ content of normal air?', 'About 0.04%', ['About 4%', 'About 0.004%', 'About 78%'], {
    explanation: 'Slide 9.',
  }),
  mcq('s1-5-2', 'gases-and-air', 'What sets how much of a gas dissolves in a liquid?', 'Its partial pressure', ['Its colour', 'The size of the container', 'The time of day'], {
    explanation: 'Slides 7, 9.',
  }),
  tf({ id: 's1-5-3', conceptId: 'gases-and-air', statement: 'Nitrogen makes up most of normal air.', answer: true, explanation: 'About 78%.' }),
  mcq('s1-5-4', 'gases-and-air', 'Besides the pressure gradient, what must be considered in gas diffusion?', 'The membrane it diffuses through', ['The colour of the blood', 'The heart rate', 'The body temperature of the patient only'], {
    explanation: 'Slide 7.',
  }),
  mcq('s1-5-5', 'gases-and-air', 'Which gas makes up about 78% of air?', 'Nitrogen', ['Oxygen', 'Carbon dioxide', 'Argon'], {
    explanation: 'Slide 9.',
  }),

  // ─── Lesson 1 · S6 Pressure gradients move the air ─────────────────
  mcq('s1-6-1', 'breathing-pressures', 'In expiration, how does lung pressure compare with the atmosphere?', 'Above atmospheric', ['Below atmospheric', 'Equal throughout', 'Zero'], {
    explanation: 'Air flows out (slide 15).',
  }),
  mcq('s1-6-2', 'breathing-pressures', 'What makes lung pressure fall in inspiration?', 'The chest wall expands and pulls the lungs', ['The lungs shrink and squeeze the air within them', 'The diaphragm moves up', 'The airways close'], {
    explanation: 'Slides 10, 14.',
  }),
  tf({ id: 's1-6-3', conceptId: 'breathing-pressures', statement: 'Each phase of breathing creates its own pressure gradient.', answer: true, explanation: 'Slide 10.' }),
  mcq('s1-6-4', 'breathing-pressures', 'Which way does the gradient run in expiration?', 'From the lungs to the atmosphere', ['From the atmosphere to the lungs', 'From the blood to the air', 'There is no gradient'], {
    explanation: 'Slide 15.',
  }),
  fill('s1-6-5', 'breathing-pressures', 'The two phases of breathing are inspiration and ____.', ['expiration', 'exhalation'], {
    explanation: 'Slide 10.',
  }),

  // ─── Lesson 1 · S7 Intrapleural pressure ───────────────────────────
  mcq('s1-7-1', 'intrapleural-pressure', 'What is intrapleural pressure about at rest?', 'About −2.5 mmHg', ['About −6 mmHg, as in inspiration', 'About +2.5 mmHg', 'About 760 mmHg'], {
    explanation: '−2.5 mmHg, becoming −6 in inspiration.',
  }),
  mcq('s1-7-2', 'intrapleural-pressure', 'By how much does intrapleural pressure fall from rest to inspiration?', 'About 3.5 mmHg', ['About 2.5 mmHg', 'About 6 mmHg', 'About 8.5 mmHg'], {
    explanation: 'From about −2.5 to about −6 mmHg.',
    skill: 'application',
  }),
  tf({ id: 's1-7-3', conceptId: 'intrapleural-pressure', statement: 'Intrapleural pressure is also called intrathoracic pressure.', answer: true, explanation: 'Slide 12.' }),
  mcq('s1-7-4', 'intrapleural-pressure', 'Why does the lung always expand to fill the chest?', 'Intrapleural pressure keeps it from collapsing', ['Cartilage rings in the airways hold the whole lung open', 'The heart pushes it outward', 'Surfactant makes it rigid'], {
    explanation: 'Slide 11.',
  }),
  fill('s1-7-5', 'intrapleural-pressure', 'Intrapleural pressure is normally slightly ____ atmospheric.', ['below', 'less than', 'lower than'], {
    explanation: 'A negative pressure (slide 12).',
  }),

  // ─── Lesson 2 · S1 Volumes and capacities ──────────────────────────
  mcq('s2-1-1', 'lung-volumes', 'What is the residual volume?', 'The air left after a maximal expiration', ['The extra air breathed out with active effort', 'The air moved in quiet breathing', 'The extra air breathed in with effort'], {
    explanation: 'Slide 19.',
  }),
  mcq('s2-1-2', 'lung-volumes', 'About how large is the tidal volume?', 'About 500 ml', ['About 150 ml', 'About 5 L', 'About 50 ml'], {
    explanation: 'Slide 19.',
  }),
  tf({ id: 's2-1-3', conceptId: 'lung-volumes', statement: 'Lung volumes are measured directly.', answer: true, explanation: 'Capacities are worked out from them (slide 17).' }),
  mcq('s2-1-4', 'lung-volumes', 'What is the expiratory reserve volume?', 'The extra air breathed out with active effort', ['The air left in the lungs after maximal expiration', 'The air in quiet breathing', 'The dead space'], {
    explanation: 'Slide 19.',
  }),
  mcq('s2-1-5', 'lung-volumes', 'What are lung volumes and capacities linked to?', 'Different phases of the breathing cycle', ['Different times of the day and of the night', 'Different blood groups', 'The heart rate'], {
    explanation: 'Slide 17.',
  }),

  // ─── Lesson 2 · S2 The capacities ──────────────────────────────────
  mcq('s2-2-1', 'lung-capacities', 'IRV 3000 ml, TV 500 ml, ERV 1100 ml. What is the vital capacity?', '4600 ml', ['3500 ml', '1600 ml', '5800 ml'], {
    explanation: 'VC = IRV + TV + ERV.',
    skill: 'application',
  }),
  mcq('s2-2-2', 'lung-capacities', 'ERV 1100 ml and RV 1200 ml. What is the FRC?', '2300 ml', ['1100 ml', '100 ml', '3500 ml'], {
    explanation: 'FRC = ERV + RV.',
    skill: 'application',
  }),
  tf({ id: 's2-2-3', conceptId: 'lung-capacities', statement: 'Capacities are sums of two or more volumes.', answer: true, explanation: 'Slide 20.' }),
  mcq('s2-2-4', 'lung-capacities', 'Which capacity is the air expelled after a maximal inspiration?', 'Vital capacity', ['Functional residual capacity', 'Inspiratory capacity', 'Total dead space'], {
    explanation: 'Slide 20.',
  }),
  mcq('s2-2-5', 'lung-capacities', 'Rate 15/min, tidal volume 400 ml. What is the minute volume?', '6 L/min', ['4 L/min', '15 L/min', '60 L/min'], {
    explanation: '15 × 400 ml = 6000 ml/min.',
    skill: 'application',
  }),

  // ─── Lesson 2 · S3 Spirometry and FEV1 ─────────────────────────────
  mcq('s2-3-1', 'spirometry-fev1', 'Vital capacity is 4 L. About what is the normal FEV1?', 'About 3.3 L', ['About 2.5 L', 'About 1 L', 'About 2 L'], {
    explanation: 'About 83% of 4 L.',
    skill: 'application',
  }),
  mcq('s2-3-2', 'spirometry-fev1', 'What does the residual volume provide?', 'A constant source of aeration', ['The force for quiet expiration', 'The surfactant for the alveoli', 'The dead space'], {
    explanation: 'It keeps O₂ and CO₂ fluctuations narrow (slide 21).',
  }),
  tf({ id: 's2-3-3', conceptId: 'spirometry-fev1', statement: 'FEV1 is an index of pulmonary function.', answer: true, explanation: 'Slide 20.' }),
  mcq('s2-3-4', 'spirometry-fev1', 'What is another name for FEV1?', 'Timed vital capacity', ['Functional residual capacity', 'Tidal volume', 'Minute volume'], {
    explanation: 'Slide 20.',
  }),
  mcq('s2-3-5', 'spirometry-fev1', 'Which volume cannot be removed by forced expiration?', 'The residual volume', ['The expiratory reserve volume', 'The tidal volume', 'The vital capacity'], {
    explanation: 'Slide 21.',
  }),

  // ─── Lesson 2 · S4 What changes the vital capacity ─────────────────
  mcq('s2-4-1', 'vital-capacity-factors', 'Why does cardiac failure lower the vital capacity?', 'Pulmonary congestion stops the lungs expanding', ['A weak heart directly weakens the diaphragm muscle', 'It narrows the trachea', 'It removes the residual volume'], {
    explanation: 'Slide 23.',
  }),
  mcq('s2-4-2', 'vital-capacity-factors', 'Which lowers the vital capacity?', 'Pulmonary fibrosis', ['Athletic training', 'Standing upright', 'Being tall and male'], {
    explanation: 'Slide 23.',
  }),
  tf({ id: 's2-4-3', conceptId: 'vital-capacity-factors', statement: 'Lung volumes depend on body size and build.', answer: true, explanation: 'Slide 25.' }),
  mcq('s2-4-4', 'vital-capacity-factors', 'Which infection is named as reducing the vital capacity?', 'Tuberculosis', ['Schistosomiasis', 'Measles', 'Typhoid'], {
    explanation: 'Slide 23.',
  }),
  mcq('s2-4-5', 'vital-capacity-factors', 'What does paralysis of the chest do to the vital capacity?', 'Decreases it', ['Increases it', 'Has no effect', 'Doubles it'], {
    explanation: 'Slide 23.',
  }),

  // ─── Lesson 3 · S1 Recoil and compliance ───────────────────────────
  mcq('s3-1-1', 'lung-compliance', 'Volume rises by 200 ml for a 1 cmH₂O pressure change. What is the compliance?', '200 ml/cmH₂O', ['0.2 ml/cmH₂O', '20 ml/cmH₂O', '2000 ml/cmH₂O'], {
    explanation: 'Compliance = ΔV/ΔP.',
    skill: 'application',
  }),
  mcq('s3-1-2', 'lung-compliance', 'When does the chest wall recoil?', 'After expansion and in expiration', ['Only during deep sleep at night and rest', 'Only in inspiration', 'Never'], {
    explanation: 'Slide 27.',
  }),
  tf({ id: 's3-1-3', conceptId: 'lung-compliance', statement: 'Compliance is a measure of lung and chest-wall recoil.', answer: true, explanation: 'Slide 27.' }),
  mcq('s3-1-4', 'lung-compliance', 'What do the lungs tend to do because of their elastic tissue?', 'Pull away from the chest wall', ['Push the chest wall further outward', 'Stay fully expanded alone', 'Fill with fluid'], {
    explanation: 'Slide 27.',
  }),
  mcq('s3-1-5', 'lung-compliance', 'Which structures does compliance describe?', 'The lungs and thorax', ['The heart and vessels', 'The kidneys', 'The airways only'], {
    explanation: 'Slide 27.',
  }),

  // ─── Lesson 3 · S2 What changes compliance ─────────────────────────
  mcq('s3-2-1', 'compliance-factors', 'Which lung condition reduces compliance by impeding expansion?', 'Pulmonary oedema', ['Emphysema with loss of elastic tissue', 'Athletic training', 'Standing upright'], {
    explanation: 'Fibrosis, oedema and bronchial obstruction (slide 28).',
  }),
  mcq('s3-2-2', 'compliance-factors', 'Which chest-wall problem reduces compliance?', 'Fibrosing pleurisy', ['Emphysema of the lung', 'Anaemia', 'Asthma relief'], {
    explanation: 'Slide 29.',
  }),
  tf({ id: 's3-2-3', conceptId: 'compliance-factors', statement: 'Compliance depends on lung volume.', answer: true, explanation: 'Slide 28.' }),
  mcq('s3-2-4', 'compliance-factors', 'Which is the one condition named as increasing compliance?', 'Emphysema', ['Fibrosis', 'Scoliosis', 'Oedema'], {
    explanation: 'Slide 29.',
  }),
  mcq('s3-2-5', 'compliance-factors', 'Which spinal curve reduces compliance?', 'Kyphosis', ['A normal straight spine', 'A long neck', 'Flat feet'], {
    explanation: 'Kyphosis and scoliosis (slide 29).',
  }),

  // ─── Lesson 3 · S3 Surfactant ──────────────────────────────────────
  mcq('s3-3-1', 'surfactant', 'What tends to collapse the alveoli?', 'Surface tension', ['Surfactant secreted by type II cells', 'Negative intrapleural pressure', 'Cartilage'], {
    explanation: 'Slide 30.',
  }),
  mcq('s3-3-2', 'surfactant', 'What does surfactant reduce between the interstitium and the alveoli?', 'The negative pressure pulling fluid', ['The flow of oxygen from the alveoli to the blood', 'The flow of blood', 'The number of cells'], {
    explanation: 'Slide 31.',
  }),
  tf({ id: 's3-3-3', conceptId: 'surfactant', statement: 'Surfactant keeps the alveoli open and dry.', answer: true, explanation: 'Slides 30–31.' }),
  mcq('s3-3-4', 'surfactant', 'Where would high surface tension pull fluid from?', 'The alveolar wall into the tissue spaces', ['The blood out into the bone marrow cavities', 'The kidneys into the bladder', 'The stomach into the gut'], {
    explanation: 'Slide 31.',
  }),
  fill('s3-3-5', 'surfactant', 'The force of attraction at the alveolar surface is called surface ____.', ['tension'], {
    explanation: 'Slide 30.',
  }),

  // ─── Lesson 3 · S4 When surfactant is missing ──────────────────────
  mcq('s3-4-1', 'surfactant-deficiency', 'Which drugs can be given with surfactant in respiratory distress syndrome?', 'Corticosteroids', ['Antibiotics alone', 'Diuretics', 'Insulin'], {
    explanation: 'Slide 32.',
  }),
  mcq('s3-4-2', 'surfactant-deficiency', 'What is another name for respiratory distress syndrome of the newborn?', 'Hyaline membrane disease', ['Emphysema of the newborn', 'Asthma', 'Tuberculosis'], {
    explanation: 'Slide 32.',
  }),
  tf({ id: 's3-4-3', conceptId: 'surfactant-deficiency', statement: 'Without surfactant the lungs collapse.', answer: true, explanation: 'Atelectasis (slide 32).' }),
  mcq('s3-4-4', 'surfactant-deficiency', 'What is atelectasis?', 'Collapse of lung tissue', ['Overinflation of the alveoli', 'Infection of the pleura', 'Narrowing of the trachea'], {
    explanation: 'Slide 32.',
  }),
  mcq('s3-4-5', 'surfactant-deficiency', 'Where does the surfactant given as treatment come from?', 'Cattle (bovine surfactant)', ['The baby’s own type I cells', 'Plants', 'The liver'], {
    explanation: 'Slide 32.',
  }),

  // ─── Lesson 3 · S5 Resistance and the work of breathing ────────────
  mcq('s3-5-1', 'work-of-breathing', 'Elastic work to expand the lungs is calculated as what?', 'ΔP × ΔV', ['ΔV ÷ ΔP', 'Rate × tidal volume', 'Flow × time'], {
    explanation: 'Slide 34.',
  }),
  mcq('s3-5-2', 'work-of-breathing', 'Which is one of the three parts of the work of breathing?', 'Work against viscosity', ['Work to pump blood to the lungs', 'Work to make surfactant', 'Work to warm the air'], {
    explanation: 'Elastic, viscous and airway resistance work.',
  }),
  tf({ id: 's3-5-3', conceptId: 'work-of-breathing', statement: 'The work of breathing increases in congestive cardiac failure.', answer: true, explanation: 'Slide 35.' }),
  mcq('s3-5-4', 'work-of-breathing', 'In which condition does heavy breathing especially raise the work?', 'Asthma', ['Sleep', 'Rest', 'Standing'], {
    explanation: 'Slide 35.',
  }),
  mcq('s3-5-5', 'work-of-breathing', 'Why does normal expiration take no work?', 'The lungs recoil passively', ['The diaphragm pushes the air out', 'Surfactant pushes the air out', 'The heart pushes the air'], {
    explanation: 'Slide 35.',
  }),

  // ─── Lesson 4 · S1 Ventilation and gravity ─────────────────────────
  mcq('s4-1-1', 'ventilation-gravity', 'Why do the dependent parts of the lung ventilate better?', 'They carry more weight and expand more', ['They have more cartilage holding them open', 'They have less blood', 'They are nearer the trachea'], {
    explanation: 'Less negative intrapleural pressure (slide 36).',
  }),
  mcq('s4-1-2', 'ventilation-gravity', 'In the upright lung, which part is least ventilated per unit volume?', 'The apices', ['The bases', 'The middle lobe', 'All are equal'], {
    explanation: 'Slide 36.',
  }),
  tf({ id: 's4-1-3', conceptId: 'ventilation-gravity', statement: 'Ventilation moves air by inhalation and exhalation.', answer: true, explanation: 'Slide 36.' }),
  mcq('s4-1-4', 'ventilation-gravity', 'What is the intrapleural pressure like at the lung bases, upright?', 'Less negative', ['More negative', 'Positive', 'Atmospheric'], {
    explanation: 'Slide 36.',
  }),
  mcq('s4-1-5', 'ventilation-gravity', 'Which parts of the lung have a greater ventilation capacity?', 'The dependent parts', ['The upper parts (apices)', 'The airways', 'None'], {
    explanation: 'Slide 36.',
  }),

  // ─── Lesson 4 · S2 Dead space ──────────────────────────────────────
  mcq('s4-2-1', 'dead-space', 'What is alveolar dead space also called?', 'Wasted ventilation', ['Anatomical dead space of the airways', 'Residual volume', 'Tidal volume'], {
    explanation: 'Slide 38.',
  }),
  mcq('s4-2-2', 'dead-space', 'Where does gas exchange happen?', 'Only at the alveolar surface', ['Throughout the whole airway tree', 'In the trachea', 'In the bronchi'], {
    explanation: 'Slide 37.',
  }),
  tf({ id: 's4-2-3', conceptId: 'dead-space', statement: 'The whole respiratory tree fills with air, though only the alveoli exchange gas.', answer: true, explanation: 'Slide 37.' }),
  mcq('s4-2-4', 'dead-space', 'Anatomical dead space 150 ml and alveolar dead space 50 ml. What is the physiological dead space?', '200 ml', ['100 ml', '150 ml', '50 ml'], {
    explanation: 'Physiological = anatomical + alveolar.',
    skill: 'application',
  }),
  mcq('s4-2-5', 'dead-space', 'What is dead space?', 'Airway that does not exchange gas with blood', ['Lung tissue that has died from disease or injury', 'Air left after maximal expiration', 'The pleural space'], {
    explanation: 'Slide 37.',
  }),

  // ─── Lesson 4 · S3 Alveolar ventilation ────────────────────────────
  mcq('s4-3-1', 'alveolar-ventilation', 'Tidal volume 250 ml and dead space 150 ml. How much reaches the alveoli per breath?', '100 ml', ['250 ml', '400 ml', '150 ml'], {
    explanation: 'Very shallow breathing: most of each breath is dead space.',
    skill: 'application',
  }),
  mcq('s4-3-2', 'alveolar-ventilation', 'Why does deep breathing raise alveolar ventilation?', 'The dead space is a fixed amount per breath', ['Deep breaths make the dead space much bigger', 'Deep breaths stop the heart', 'Deep breaths close the airways'], {
    explanation: 'Slide 39.',
  }),
  tf({ id: 's4-3-3', conceptId: 'alveolar-ventilation', statement: 'About 350 ml of a 500 ml breath reaches the alveoli.', answer: true, explanation: 'Slide 39.' }),
  mcq('s4-3-4', 'alveolar-ventilation', 'Which breathing pattern reduces alveolar ventilation?', 'Shallow breathing', ['Deep breathing', 'Slow deep breathing', 'Breath-holding after a deep breath'], {
    explanation: 'Slide 39.',
  }),
  mcq('s4-3-5', 'alveolar-ventilation', 'Rate 12/min, alveolar air 350 ml per breath. What is alveolar ventilation?', '4.2 L/min', ['6 L/min', '1.8 L/min', '35 L/min'], {
    explanation: '12 × 350 ml = 4200 ml/min.',
    skill: 'application',
  }),

  // ─── Lesson 4 · S4 The pulmonary circulation ───────────────────────
  mcq('s4-4-1', 'pulmonary-circulation', 'About what share of the blood does not take part in gas exchange?', 'About 2%', ['About 20%', 'About 50%', 'None'], {
    explanation: 'Bronchial blood (slide 40).',
  }),
  mcq('s4-4-2', 'pulmonary-circulation', 'Where do the bronchial arteries come from?', 'The aorta', ['The pulmonary artery', 'The vena cava', 'The coronary arteries'], {
    explanation: 'Slide 40.',
  }),
  tf({ id: 's4-4-3', conceptId: 'pulmonary-circulation', statement: 'Pressure in the pulmonary artery rises from apex to base.', answer: true, explanation: 'Slide 41.' }),
  mcq('s4-4-4', 'pulmonary-circulation', 'What happens to the extra 400 ml of lung blood on standing?', 'It moves out of the pulmonary circulation', ['It stays pooled in the lungs while upright', 'It is lost as fluid', 'It clots'], {
    explanation: 'Slide 41.',
  }),
  mcq('s4-4-5', 'pulmonary-circulation', 'What do the bronchial arteries supply?', 'The airways', ['The alveoli for gas exchange', 'The heart', 'The diaphragm'], {
    explanation: 'Slide 40.',
  }),

  // ─── Lesson 4 · S5 Hypoxic pulmonary vasoconstriction ──────────────
  mcq('s4-5-1', 'hypoxic-vasoconstriction', 'What does hypoxia do to systemic vessels, unlike lung vessels?', 'Dilates them', ['Constricts them', 'Has no effect', 'Blocks them'], {
    explanation: 'Slide 42.',
  }),
  mcq('s4-5-2', 'hypoxic-vasoconstriction', 'What is the benefit of hypoxic pulmonary vasoconstriction?', 'Blood goes to areas that are ventilated', ['Blood goes to the areas that have no air', 'It raises blood pressure everywhere', 'It stops breathing'], {
    explanation: 'Slide 42.',
  }),
  tf({ id: 's4-5-3', conceptId: 'hypoxic-vasoconstriction', statement: 'Beyond an obstructed bronchus, the pH falls.', answer: true, explanation: 'CO₂ accumulates (slide 42).' }),
  mcq('s4-5-4', 'hypoxic-vasoconstriction', 'What starts the process?', 'An obstructed bronchus', ['A fast resting heart rate', 'A deep breath', 'A rise in O₂'], {
    explanation: 'Slide 42.',
  }),
  mcq('s4-5-5', 'hypoxic-vasoconstriction', 'Which gas builds up in the alveoli beyond the block?', 'CO₂', ['O₂', 'Nitrogen', 'Helium'], {
    explanation: 'Slide 42.',
  }),

  // ─── Lesson 5 · S1 Getting oxygen to the tissues ───────────────────
  mcq('s5-1-1', 'oxygen-delivery', 'Which factor in O₂ delivery depends on haemoglobin?', 'The capacity of the blood to carry O₂', ['The O₂ entering the lungs by ventilation', 'Ventilation–perfusion matching', 'The cardiac output'], {
    explanation: 'Slide 44.',
  }),
  mcq('s5-1-2', 'oxygen-delivery', 'Which way does CO₂ move?', 'From tissue to air', ['From air to tissue', 'It does not move', 'Into the bone'], {
    explanation: 'Its pressure is higher in the tissues (slide 43).',
  }),
  tf({ id: 's5-1-3', conceptId: 'oxygen-delivery', statement: 'O₂ is relatively insoluble in water.', answer: true, explanation: 'Slide 45.' }),
  mcq('s5-1-4', 'oxygen-delivery', 'About what share of blood O₂ is dissolved in plasma?', 'About 1%', ['About 99%', 'About 50%', 'About 25%'], {
    explanation: 'Slide 45.',
  }),
  mcq('s5-1-5', 'oxygen-delivery', 'Which factor in O₂ delivery depends on ventilation–perfusion?', 'Adequate gas exchange in the lungs', ['The capacity of the blood to carry O₂', 'Blood flow to tissues', 'O₂ entering the lungs'], {
    explanation: 'Slide 44.',
  }),

  // ─── Lesson 5 · S2 Haemoglobin ─────────────────────────────────────
  mcq('s5-2-1', 'haemoglobin-oxygen', 'How many haem groups does one haemoglobin have?', 'Four', ['Two', 'One', 'Eight'], {
    explanation: 'One per subunit.',
  }),
  mcq('s5-2-2', 'haemoglobin-oxygen', 'How are O₂ molecules added to haemoglobin?', 'One at a time', ['All four at once', 'Two pairs at once', 'Only one ever'], {
    explanation: 'Hb₄ → Hb₄O₂ → … → Hb₄O₈ (slide 46).',
  }),
  tf({ id: 's5-2-3', conceptId: 'haemoglobin-oxygen', statement: 'The iron charge does not change when O₂ binds.', answer: true, explanation: 'Oxygenation, not oxidation.' }),
  mcq('s5-2-4', 'haemoglobin-oxygen', 'What is fully oxygenated haemoglobin written as?', 'Hb₄O₈', ['Hb₄O₂', 'Hb₄O₄', 'HbO'], {
    explanation: 'Slide 46.',
  }),
  mcq('s5-2-5', 'haemoglobin-oxygen', 'Where is the iron in each subunit?', 'At the centre of the haem group', ['On the surface of the red cell membrane', 'In the plasma', 'Between the chains'], {
    explanation: 'Slide 46.',
  }),

  // ─── Lesson 5 · S3 The dissociation curve ──────────────────────────
  mcq('s5-3-1', 'dissociation-curve', 'Why is binding the second O₂ easier than the first?', 'The first changes the shape of haemoglobin', ['The second O₂ is a smaller, lighter molecule', 'The iron becomes Fe³⁺', 'The chains separate'], {
    explanation: 'Slides 48, 50.',
  }),
  mcq('s5-3-2', 'dissociation-curve', 'What sets the position of the curve?', 'Haemoglobin’s affinity for O₂', ['The amount of nitrogen in the blood', 'The heart rate', 'The lung volume'], {
    explanation: 'Slides 47, 49.',
  }),
  tf({ id: 's5-3-3', conceptId: 'dissociation-curve', statement: 'Binding the first O₂ molecule is the most difficult.', answer: true, explanation: 'Slide 48.' }),
  mcq('s5-3-4', 'dissociation-curve', 'Why does the curve level off at the top?', 'Haemoglobin is nearly saturated', ['O₂ stops dissolving in the plasma', 'The iron is oxidised', 'The blood clots'], {
    explanation: 'Slides 50–51.',
  }),
  mcq('s5-3-5', 'dissociation-curve', 'What is on the x-axis of the curve?', 'The partial pressure of O₂', ['The percentage saturation of Hb', 'Time', 'Blood flow'], {
    explanation: 'Saturation (y) against PO₂ (x).',
  }),

  // ─── Lesson 5 · S4 The flat and the steep parts ────────────────────
  mcq('s5-4-1', 'dissociation-curve', 'What does the flat upper part protect?', 'O₂ loading in the lungs', ['O₂ unloading in the tissues', 'CO₂ loading', 'Blood pressure'], {
    explanation: 'Saturation stays high even if PO₂ falls a little.',
  }),
  mcq('s5-4-2', 'dissociation-curve', 'On the steep part, what happens as PO₂ falls?', 'O₂ is unloaded readily', ['O₂ binds more tightly', 'Saturation stays fixed', 'CO₂ is released'], {
    explanation: 'Slide 52.',
  }),
  tf({ id: 's5-4-3', conceptId: 'dissociation-curve', statement: 'Below about 60 mmHg the curve is steep.', answer: true, explanation: 'Slides 51–52.' }),
  mcq('s5-4-4', 'dissociation-curve', 'PO₂ falls from 100 to 80 mmHg. What happens to saturation?', 'It falls only a little', ['It falls by roughly half', 'It falls to zero', 'It rises sharply'], {
    explanation: 'This is on the flat part.',
    difficulty: 'intermediate',
  }),
  mcq('s5-4-5', 'dissociation-curve', 'Where is the steep part of the curve used?', 'In the tissues', ['In the lungs', 'In the airways', 'In the pleura'], {
    explanation: 'Tissue PO₂ is low, so O₂ unloads.',
  }),

  // ─── Lesson 5 · S5 P50 and shifts of the curve ─────────────────────
  mcq('s5-5-1', 'p50-affinity', 'What does an increased P50 mean?', 'A right shift and lower affinity', ['A left shift and higher affinity', 'No shift', 'More O₂ dissolved'], {
    explanation: 'Slides 53–55.',
  }),
  mcq('s5-5-2', 'p50-affinity', 'Where is a left shift helpful?', 'In the lungs', ['In exercising muscle', 'In haemorrhagic shock', 'In fever'], {
    explanation: 'Easier loading (slides 53, 55).',
  }),
  tf({ id: 's5-5-3', conceptId: 'p50-affinity', statement: 'P50 is the usual measure of haemoglobin’s affinity for O₂.', answer: true, explanation: 'Slides 52–53.' }),
  mcq('s5-5-4', 'p50-affinity', 'With a right shift, what is needed for the same saturation?', 'A higher PO₂', ['A lower PO₂', 'The same PO₂', 'No O₂'], {
    explanation: 'Slide 53.',
  }),
  mcq('s5-5-5', 'p50-affinity', 'A patient’s P50 is 32 mmHg. What does this suggest?', 'A right shift', ['A left shift', 'Normal affinity', 'No haemoglobin'], {
    explanation: 'Normal is about 26.6 mmHg.',
    difficulty: 'intermediate',
  }),
];
