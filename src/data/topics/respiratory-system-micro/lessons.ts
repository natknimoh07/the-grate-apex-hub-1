// Anatomy → Respiratory System (microanatomy) — the four lessons (reading layer).
// Source: the "Respiratory System II – Histology" lecture deck (rm in sources.ts).
import type { LessonDraft } from '@/data/topics/build';
import { interactive, readingExtras } from '@/data/topics/respiratory-system-micro/interactive';
import { rm, type ConceptId } from '@/data/topics/respiratory-system-micro/sources';

type Draft = LessonDraft<ConceptId>;

const lesson1: Draft = {
  id: 'respiratory-system-micro-1',
  title: 'Respiratory Epithelium and the Nasal Cavity',
  description: 'The organs and divisions of the respiratory system, the layers of the conducting airway, the five cells of respiratory epithelium, and the respiratory and olfactory regions of the nasal cavity.',
  xp: 25,
  sourceRefs: rm([1, 3, 4, 30, 31, 32, 33, 34, 36]),
  objectives: [
    'List the respiratory organs and functions, and name the conducting and respiratory portions',
    'Describe the mucosa, lamina propria and submucosa of a conducting airway',
    'Describe the five cell types of respiratory epithelium and what each does',
    'Describe the olfactory epithelium, how to tell its cells apart and the role of Bowman’s glands',
  ],
  chunks: [
    {
      title: 'Organs, functions and divisions',
      kind: 'overview',
      paragraphs: [
        'The respiratory organs are the nose (nasal cavity and paranasal sinuses), pharynx, larynx, trachea, bronchi and bronchioles, and lungs (slide 3). The system filters and humidifies air and moves it in and out of the lungs; provides a large surface for gas exchange; helps regulate the pH of body fluids; takes part in vocalisation; helps the olfactory system detect smells; and produces angiotensin-converting enzyme (ACE), which turns angiotensin I into angiotensin II (slide 3).',
        'Functionally there are two portions: a conducting portion that warms, moistens and filters the inspired air, and a respiratory portion where gases are exchanged between air and blood (slide 4).',
      ],
      terms: [
        { term: 'Conducting portion', meaning: 'The airways that carry, warm, moisten and filter air: nose to terminal bronchioles.' },
        { term: 'Respiratory portion', meaning: 'Where gas exchange happens: respiratory bronchioles, alveolar ducts and alveoli.' },
        { term: 'ACE', meaning: 'Angiotensin-converting enzyme, made in the lung; converts angiotensin I to angiotensin II.' },
      ],
      sourceRefs: rm([1, 3, 4]),
    },
    {
      title: 'Layers of a conducting airway',
      kind: 'structure',
      steps: [
        { label: 'Epithelium', detail: 'Pseudostratified ciliated columnar epithelium on a thick basement membrane (slide 30).' },
        { label: 'Lamina propria', detail: 'Thick connective tissue rich in collagen and elastic fibres, firmly attached to periosteum and perichondrium; a large, tortuous vascular bed warms the air by heat exchange; plentiful lymphocytes form bronchus-associated lymphoid tissue (BALT) for immune protection (slide 30).' },
        { label: 'Submucosa', detail: 'Many seromucous glands secreting mucus and a watery fluid that moistens the air (slide 30).' },
      ],
      terms: [{ term: 'BALT', meaning: 'Bronchus-associated lymphoid tissue: lymphocytes in the airway lamina propria.' }],
      sourceRefs: rm([30]),
    },
    {
      title: 'Respiratory epithelium',
      kind: 'definitions',
      table: {
        columns: ['Cell', 'Features and function'],
        rows: [
          ['Goblet cells', 'Secrete mucus that traps inhaled dust and microbes, absorbs water-soluble gases (e.g. SO₂, ozone) and moistens the air'],
          ['Ciliated cells', 'Move mucus and trapped particles towards the larynx and pharynx'],
          ['Brush cells', 'Apical brush border of microvilli; afferent nerve endings on their bases; chemosensory receptors'],
          ['Small granule (Kulchitsky, K) cells', 'Part of the diffuse neuroendocrine system; look like basal cells but have granules of serotonin, calcitonin and gastrin-releasing peptide (bombesin); thought to control other epithelial cells'],
          ['Basal cells', 'Stem cells that give rise to the other cell types'],
        ],
      },
      paragraphs: [
        'Respiratory epithelium is pseudostratified columnar epithelium with cilia and goblet cells (slide 31).',
        'In the respiratory region of the nasal cavity, the lamina propria has a rich vascular network with complex capillary loops, and mucous glands (slide 31).',
      ],
      keyPoints: ['Cigarette smoking causes metaplastic changes in the respiratory mucosa, with more and larger goblet cells and so more secretion in the upper airway (slide 32).'],
      terms: [
        { term: 'Goblet cell', meaning: 'A mucus-secreting cell shaped like a wine glass.' },
        { term: 'Metaplasia', meaning: 'Replacement of one adult cell type by another in response to injury.' },
      ],
      sourceRefs: rm([31, 32]),
    },
    {
      title: 'The olfactory epithelium',
      kind: 'structure',
      table: {
        columns: ['Cell', 'Features', 'Nucleus (slide 34)'],
        rows: [
          ['Olfactory receptor cells', 'Bipolar neurons; an apical olfactory vesicle bears long non-motile cilia; live about a month', 'Central'],
          ['Supporting (sustentacular) cells', 'Mechanical and metabolic support; make odorant-binding proteins and the yellow-brown pigment of the olfactory mucosa; apical microvilli', 'Near the apex'],
          ['Basal cells', 'Stem cells', 'Near the basement membrane'],
          ['Brush cells', 'As in respiratory epithelium; transduce general sensation', '—'],
        ],
      },
      paragraphs: [
        'The olfactory region is lined by pseudostratified ciliated columnar epithelium with no goblet cells, on a thin basement membrane (slide 33).',
        'The lamina propria joins directly with the periosteum of the bone beneath and contains blood and lymphatic vessels, unmyelinated olfactory nerves, myelinated nerves and the olfactory glands of Bowman. Their watery secretion dissolves odorant molecules so they can be detected, then washes them away so new smells can be sensed (slide 33). In H&E sections the three cell types are told apart by the level of their nuclei (slides 34, 36).',
      ],
      terms: [{ term: 'Bowman’s glands', meaning: 'Olfactory glands in the lamina propria whose watery secretion dissolves and clears odorants.' }],
      sourceRefs: rm([33, 34, 36]),
    },
  ],
  summary: [
    'Conducting portion warms, moistens, filters; respiratory portion exchanges gases. The lung makes ACE.',
    'Conducting airway: pseudostratified ciliated columnar epithelium on thick basement membrane; vascular lamina propria with BALT; seromucous glands in submucosa.',
    'Respiratory epithelium: goblet, ciliated, brush, small granule (K) and basal cells.',
    'Olfactory epithelium: no goblet cells; receptor (central nuclei), sustentacular (apical nuclei), basal (basal nuclei); Bowman’s glands.',
  ],
};

const lesson2: Draft = {
  id: 'respiratory-system-micro-2',
  title: 'Pharynx, Larynx, Epiglottis and Trachea',
  description: 'The lining of the sinuses and pharynx, the false and true vocal folds, the two surfaces of the epiglottis, and the four layers of the tracheal wall.',
  xp: 25,
  sourceRefs: rm([14, 37, 38, 41, 42, 43, 46]),
  objectives: [
    'Give the epithelium of the paranasal sinuses, nasopharynx, oropharynx and laryngopharynx',
    'Compare the false and true vocal folds and describe Reinke’s space',
    'Describe the lingual and laryngeal surfaces of the epiglottis',
    'Describe the four layers of the trachea and what the trachealis muscle does',
  ],
  chunks: [
    {
      title: 'Paranasal sinuses and pharynx',
      kind: 'comparison',
      table: {
        columns: ['Region', 'Lining'],
        rows: [
          ['Paranasal sinuses', 'Thinner respiratory epithelium with fewer goblet cells and seromucous glands'],
          ['Nasopharynx', 'Respiratory epithelium'],
          ['Oropharynx and laryngopharynx', 'Stratified squamous non-keratinised epithelium'],
        ],
      },
      sourceRefs: rm([37]),
    },
    {
      title: 'The larynx',
      kind: 'comparison',
      table: {
        columns: ['', 'False (ventricular, vestibular) folds', 'True vocal folds (cords)'],
        rows: [
          ['Epithelium', 'Respiratory epithelium', 'Stratified squamous non-keratinised over the vocal ligament (protects against abrasion by fast air); respiratory epithelium elsewhere'],
          ['Contents', 'Many seromucous glands, occasional lymphoid nodules', 'Vocal ligament (parallel elastic fibres) and vocalis muscle'],
          ['Job', 'Glands moisten air and trap contaminants; with the ventricle, add resonance', 'Control airflow and vibrate to make sound'],
        ],
      },
      paragraphs: [
        'Reinke’s space lies under the epithelium of the true cord: connective tissue with no lymphatics and a poor blood supply (slide 38). The laryngeal ventricle and saccule are lined by respiratory-type columnar epithelium with seromucous glands; the false folds and ventricle add resonance to sounds (slide 41).',
      ],
      notes: [{ kind: 'textbook', text: 'The slide asks “Reinke edema?”: swelling of Reinke’s space with fluid, usually in heavy smokers, which makes the voice hoarse and low. Because the space has no lymphatics, fluid that collects there drains away poorly.' }],
      terms: [{ term: 'Reinke’s space', meaning: 'The loose connective tissue under the epithelium of the true vocal fold.' }],
      sourceRefs: rm([38, 41]),
    },
    {
      title: 'The epiglottis',
      kind: 'structure',
      steps: [
        { label: 'Anterior (lingual) surface', detail: 'Faces the tongue: stratified squamous non-keratinised epithelium (slide 42).' },
        { label: 'Posterior (laryngeal) surface', detail: 'Stratified squamous non-keratinised at first, then an abrupt transition zone to respiratory epithelium (pseudostratified, ciliated, with goblet cells) (slide 42).' },
        { label: 'Lamina propria', detail: 'Dense irregular connective tissue with seromucous glands that moisten air and trap contaminants (slide 42).' },
        { label: 'Core', detail: 'Elastic cartilage gives semi-rigid support (slide 42).' },
      ],
      terms: [{ term: 'Elastic cartilage', meaning: 'Cartilage with many elastic fibres; flexible and springy (epiglottis, auricle).' }],
      sourceRefs: rm([42]),
    },
    {
      title: 'The trachea',
      kind: 'structure',
      steps: [
        { label: 'Mucosa', detail: 'Respiratory epithelium (goblet, ciliated, basal, brush and small granule cells) on a thick basement membrane; lamina propria with seromucous glands, elastic fibres, many fibroblasts, diffuse lymphoid tissue and scattered lymphatic nodules (slide 43).' },
        { label: 'Submucosa', detail: 'Dense irregular connective tissue with blood and lymphatic vessels, nerves and tracheal (serous and mucous) glands, which with the goblet cells humidify air, detoxify soluble gases and trap particles (slide 43).' },
        { label: 'Cartilage layer', detail: 'C-shaped rings of hyaline cartilage with perichondrium, and the smooth muscle layer (slides 14, 43, 46).' },
        { label: 'Adventitia', detail: 'Fibroelastic tissue (slides 14, 43).' },
      ],
      paragraphs: [
        'The trachealis muscle relaxes in swallowing, letting the oesophagus bulge into the trachea so food passes more easily (slide 43). In a transverse section the lumen is lined by respiratory epithelium, a seromucous gland in the submucosa opens onto the surface by a small duct, and hyaline cartilage with perichondrium lies outside (slide 46).',
      ],
      terms: [{ term: 'Trachealis', meaning: 'Smooth muscle joining the open ends of the C-shaped tracheal cartilages at the back.' }],
      sourceRefs: rm([14, 43, 46]),
    },
  ],
  summary: [
    'Sinuses: thin respiratory epithelium; nasopharynx respiratory; oro- and laryngopharynx stratified squamous non-keratinised.',
    'False cord: respiratory epithelium, glands. True cord: stratified squamous non-keratinised, vocal ligament, vocalis; Reinke’s space has no lymphatics.',
    'Epiglottis: lingual surface stratified squamous; laryngeal surface changes to respiratory epithelium; elastic cartilage core.',
    'Trachea: mucosa, submucosa (glands), C-shaped hyaline cartilage, adventitia; trachealis relaxes in swallowing.',
  ],
};

const lesson3: Draft = {
  id: 'respiratory-system-micro-3',
  title: 'Bronchi and Bronchioles',
  description: 'How the airway wall changes down the bronchial tree, the layers of a bronchus, terminal and respiratory bronchioles, and club (Clara) cells.',
  xp: 25,
  sourceRefs: rm([5, 6, 21, 23, 25, 29, 47, 49, 50, 51, 52, 59]),
  objectives: [
    'Describe how epithelium, goblet cells, glands, cartilage and smooth muscle change from trachea to respiratory bronchiole',
    'Describe the five layers of a bronchus and how to recognise it',
    'Describe terminal and respiratory bronchioles',
    'List the functions of club cells and the significance of CC16',
  ],
  chunks: [
    {
      title: 'Down the bronchial tree',
      kind: 'comparison',
      paragraphs: ['In the airway wall the smooth muscle runs around the tube (concentrically) while the elastic fibres run along it (longitudinally) (slide 6). As the airways branch, the wall changes in a set pattern (slides 5, 29).'],
      table: {
        columns: ['', 'Trachea', 'Bronchi (primary, secondary)', 'Tertiary bronchus', 'Bronchiole', 'Respiratory bronchiole'],
        rows: [
          ['Epithelium', 'Pseudostratified columnar', 'Pseudostratified columnar', 'Simple columnar', 'Simple columnar', 'Simple cuboidal'],
          ['Goblet cells', '+++', '++', '++', '+', 'Absent'],
          ['Club cells', 'Absent', 'Absent', 'Absent', '+', '+'],
          ['Smooth muscle layer', 'Absent', '+', '++', '+++', '++'],
          ['Glands', '+++', '++', '+', 'Absent', 'Absent'],
          ['Cartilage', '+++', '++', '+', 'Absent', 'Absent'],
          ['Alveoli', 'Absent', 'Absent', 'Absent', 'Absent', '+'],
        ],
      },
      notes: [{ kind: 'clarified', text: 'The summary table lists the trachea as having no separate smooth muscle layer; its trachealis muscle sits only at the back, joining the cartilage ends (slide 43), not as a complete layer.' }],
      sourceRefs: rm([5, 6, 29]),
    },
    {
      title: 'Bronchi',
      kind: 'structure',
      steps: [
        { label: 'Mucosa', detail: 'Respiratory epithelium on a thin basement membrane (slide 47).' },
        { label: 'Muscularis', detail: 'Circular smooth muscle, lying between the lamina propria and submucosa (slides 21, 47).' },
        { label: 'Submucosa', detail: 'Thinner than in the trachea; glands like tracheal glands, sometimes with myoepithelial cells (slide 47).' },
        { label: 'Cartilage layer', detail: 'Irregular, discontinuous plates arranged around the circumference (slides 21, 47).' },
        { label: 'Adventitia', detail: 'The outer connective tissue (slide 47).' },
      ],
      paragraphs: ['A bronchus is recognised by its cartilage plates and circular smooth muscle (slide 47). A segmental bronchus shows respiratory epithelium, smooth muscle, hyaline cartilage, seromucous glands and veins (slide 49). Tertiary bronchi have simple columnar epithelium (slide 21).'],
      sourceRefs: rm([21, 47, 49]),
    },
    {
      title: 'Bronchioles',
      kind: 'structure',
      paragraphs: [
        'Bronchioles have no cartilage and no glands but a thick layer of circular smooth muscle. Their epithelium is ciliated pseudostratified columnar in the larger ones, becoming simple ciliated columnar or simple cuboidal in the smallest terminal bronchioles. Goblet cells are present in the largest bronchioles but absent from terminal bronchioles, where club cells take their place; occasional brush and small granule cells occur (slides 23, 50). The wall has three layers: mucosa, muscularis and adventitia (slide 52).',
        'Respiratory bronchioles have simple cuboidal epithelium and no glands (slide 25). They are like terminal bronchioles except for alveoli opening from their walls along their length, which is why they belong to the respiratory portion (slide 59).',
      ],
      sourceRefs: rm([23, 25, 50, 52, 59]),
    },
    {
      title: 'Club (Clara) cells',
      kind: 'definitions',
      paragraphs: ['Club cells (bronchiolar exocrine cells, formerly Clara cells) are dome-shaped, non-ciliated cells found only in the bronchiolar epithelium (slide 51).'],
      steps: [
        { label: 'Protective coat', detail: 'Secrete a surfactant-like material over the bronchiolar surface (slide 51).' },
        { label: 'Local defence', detail: 'Secrete antimicrobial peptides and cytokines (slide 51).' },
        { label: 'Stem cells', detail: 'Regenerate the ciliated and non-ciliated cells of the bronchiolar epithelium (slide 51).' },
        { label: 'Detoxification', detail: 'Detoxify noxious substances (slide 51).' },
        { label: 'CC16', detail: 'Produce the secretory protein CC16, whose level in airway fluid and serum changes in chronic lung diseases such as COPD and asthma (slide 51).' },
      ],
      terms: [{ term: 'Club cell', meaning: 'A dome-shaped, non-ciliated secretory cell of the bronchioles (formerly Clara cell).' }],
      sourceRefs: rm([51]),
    },
  ],
  summary: [
    'Down the tree: epithelium becomes simpler, goblet cells, glands and cartilage disappear, smooth muscle increases to the bronchioles.',
    'Bronchus: 5 layers; cartilage plates + circular smooth muscle identify it.',
    'Bronchiole: no cartilage or glands; thick muscle; club cells replace goblet cells in terminal bronchioles.',
    'Respiratory bronchiole: simple cuboidal, no glands, alveoli in its wall.',
  ],
};

const lesson4: Draft = {
  id: 'respiratory-system-micro-4',
  title: 'Alveoli, the Blood–Air Barrier and Clinical Conditions',
  description: 'The alveoli and their septa, type I and type II pneumocytes and surfactant, alveolar macrophages, the blood–air barrier, and the clinical conditions named in the lecture.',
  xp: 25,
  sourceRefs: rm([32, 64, 65, 66, 67, 68, 69, 70, 71, 72]),
  objectives: [
    'Give the number, size and surface area of the alveoli and describe the alveolar septum and pores of Kohn',
    'Compare type I and type II pneumocytes',
    'Describe the alveolar macrophage and its other names',
    'Name the layers of the blood–air barrier',
    'List the clinical conditions in the lecture',
  ],
  chunks: [
    {
      title: 'Alveoli and alveolar septa',
      kind: 'structure',
      paragraphs: [
        'Alveoli make up the lung parenchyma: about 150–250 million in each adult lung, each about 0.2 mm across, with a total surface of about 75 m². Their walls have three cell types: type I and type II alveolar cells and dust cells (macrophages). Between neighbouring alveoli is a thin alveolar septum of scattered fibroblasts and elastic and reticular fibres (slide 64).',
        'Alveoli are linked by alveolar pores (of Kohn). These give a collateral route for air if a bronchiole is blocked, help keep the pressure equal throughout the lung, and let macrophages move between alveoli; they also let pneumonia and tumours spread (slide 64).',
      ],
      terms: [{ term: 'Pores of Kohn', meaning: 'Small openings between neighbouring alveoli.' }],
      sourceRefs: rm([64]),
    },
    {
      title: 'Type I and type II pneumocytes',
      kind: 'comparison',
      table: {
        columns: ['', 'Type I pneumocyte', 'Type II pneumocyte (septal cell)'],
        rows: [
          ['Shape', 'Thin, squamous', 'Large, cuboidal, bulging into the air space; round nuclei, maybe nucleoli; pale, vesicular cytoplasm'],
          ['Numbers', '40% of the cells but 95% of the surface', 'Scattered among the type I cells'],
          ['Junctions', 'Tight junctions stop fluid and solutes leaking into the air space', 'Tight junctions and desmosomes with type I cells'],
          ['Job', 'Wrap the capillaries to form the air–blood barrier', 'Make surfactant (lamellar bodies); stem cells for both types'],
          ['Division', 'Cannot divide', 'Divide; hyperplasia marks alveolar injury and repair'],
        ],
      },
      paragraphs: [
        'Surfactant lowers surface tension at the air–fluid boundary and stops alveoli collapsing when we breathe out. Under the electron microscope type II cells show multilamellar (lamellar) bodies holding newly made surfactant, processed in the rough ER and Golgi; small multivesicular bodies; short apical microvilli; junctional complexes with type I cells; and prominent reticular fibres around them (slides 66, 67).',
      ],
      terms: [
        { term: 'Surfactant', meaning: 'A phospholipid–protein film made by type II cells that lowers alveolar surface tension.' },
        { term: 'Lamellar body', meaning: 'A membrane-bound granule of layered surfactant in a type II cell.' },
      ],
      sourceRefs: rm([65, 66, 67]),
    },
    {
      title: 'Alveolar macrophages',
      kind: 'definitions',
      paragraphs: [
        'Alveolar macrophages lie in the interalveolar septa or in the alveoli; tens of millions of monocytes migrate into the lung each day. They remove debris and pathogens from the alveoli and interstitium. They are called dust cells because they eat dust and cigarette particles, and heart failure cells because in congestive heart failure they engulf blood that leaks into the alveoli. Apoptosis of septal macrophages contributes to emphysema (slide 65). In H&E sections the alveolar wall shows alveoli, capillaries, flat type I cells, large round type II cells and macrophages (slide 69).',
      ],
      terms: [{ term: 'Heart failure cells', meaning: 'Alveolar macrophages full of haemosiderin from blood that leaked into the alveoli in heart failure.' }],
      sourceRefs: rm([65, 69]),
    },
    {
      title: 'The blood–air barrier',
      kind: 'pathway',
      paragraphs: ['The respiratory membrane is only 0.1–1.5 µm thick (slide 68). Gas crosses it in three layers (slide 70):'],
      steps: [
        { label: 'Type I pneumocyte', detail: 'Its thin cytoplasm lines the alveolus.' },
        { label: 'Fused basal laminae', detail: 'Of the type I cell and the capillary endothelial cell.' },
        { label: 'Capillary endothelial cell', detail: 'Its thin cytoplasm lines the capillary holding red cells.' },
      ],
      sourceRefs: rm([68, 70]),
    },
    {
      title: 'Clinical conditions',
      kind: 'clinical',
      paragraphs: ['The lecture lists asthma; chronic obstructive pulmonary disease (chronic bronchitis and emphysema); cystic fibrosis (mucoviscidosis); atelectasis; sleep apnoea; pneumonia; lung cancer; infant respiratory distress syndrome (hyaline membrane disease); sudden infant death syndrome (crib death); and Kartagener syndrome (primary ciliary dyskinesia, an immotile cilia syndrome) (slide 71). It shows the alveolar changes of emphysema (slide 72), and smoking-induced goblet cell metaplasia (slide 32).'],
      table: {
        columns: ['Condition', 'Histological basis (textbook)'],
        rows: [
          ['Asthma', 'Bronchiolar smooth muscle spasm, thick basement membrane, extra goblet cells and mucus'],
          ['Emphysema', 'Destruction of alveolar septa into large air spaces, so less surface for gas exchange'],
          ['Chronic bronchitis', 'Enlarged submucosal glands and more goblet cells: too much mucus'],
          ['Cystic fibrosis', 'Thick, dehydrated mucus that cilia cannot clear'],
          ['Infant respiratory distress syndrome', 'Too little surfactant from immature type II cells in premature babies; alveoli collapse'],
          ['Kartagener syndrome', 'Faulty dynein arms in cilia, so mucus is not cleared (with infertility and often situs inversus)'],
          ['Atelectasis', 'Collapse of alveoli or a lung segment'],
        ],
      },
      sourceRefs: rm([32, 71, 72]),
    },
  ],
  summary: [
    'About 150–250 million alveoli per lung, 0.2 mm each, 75 m² total; pores of Kohn link them.',
    'Type I: squamous, 40% of cells, 95% of surface, barrier, cannot divide. Type II: cuboidal, lamellar bodies make surfactant, stem cells.',
    'Macrophages: dust cells, heart failure cells.',
    'Blood–air barrier (0.1–1.5 µm): type I cell, fused basal laminae, endothelial cell.',
  ],
};

export const lessons: Draft[] = [lesson1, lesson2, lesson3, lesson4].map((lesson) => ({
  ...lesson,
  ...readingExtras[lesson.id],
  interactive: interactive[lesson.id],
}));
