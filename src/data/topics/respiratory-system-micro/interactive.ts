// Anatomy → Respiratory System (microanatomy): each lesson's interactive layer.
import type { LessonConfusion } from '@/data/lesson-types';
import { ask, learn, match, mcq, order, recall, type InteractiveDraft } from '@/data/topics/build';
import { rm, TOPIC_ID, type ConceptId } from '@/data/topics/respiratory-system-micro/sources';

type Steps = InteractiveDraft<ConceptId>[];
const L = (n: number) => `${TOPIC_ID}-${n}`;

export const interactive: Record<string, Steps> = {
  [L(1)]: [
    ask(mcq('i1-01', 'resp-epithelium', 'Before you read: which cells of respiratory epithelium are its stem cells?', 'Basal cells', ['Brush cells', 'Goblet cells', 'Ciliated cells'], { explanation: 'Slide 31.', skill: 'prediction' })),
    learn('Two portions', ['The conducting portion (nose to terminal bronchioles) warms, moistens and filters air; the respiratory portion exchanges gases.'], { sourceRefs: rm([4]) }),
    ask(match('i1-02', 'resp-epithelium', 'Match each cell to its job:', [['Goblet cell', 'Secretes mucus'], ['Ciliated cell', 'Sweeps mucus towards the pharynx'], ['Brush cell', 'Chemosensory receptor'], ['Small granule cell', 'Neuroendocrine secretion']], { explanation: 'Slide 31.' })),
    learn('Smell', ['Olfactory epithelium has no goblet cells. Bowman’s glands in the lamina propria wash odorants on and off the receptors.'], { sourceRefs: rm([33]) }),
    ask(order('i1-03', 'olfactory-epithelium', 'Order the nuclei of olfactory epithelium from the basement membrane upwards:', ['Basal cell nuclei', 'Olfactory receptor cell nuclei', 'Sustentacular cell nuclei'], { explanation: 'Slide 34.' })),
    recall('r1-01', 'airway-layers', 'Describe the lamina propria of a conducting airway.', ['Thick connective tissue rich in collagen and elastic fibres, attached to periosteum and perichondrium.', 'A large tortuous vascular bed that warms the air.', 'Many lymphocytes (BALT) for immune protection.'], rm([30])),
  ],
  [L(2)]: [
    ask(mcq('i2-01', 'larynx', 'Before you read: which epithelium covers the true vocal cord over the vocal ligament?', 'Stratified squamous non-keratinised', ['Pseudostratified ciliated columnar', 'Simple cuboidal epithelium with microvilli', 'Stratified squamous keratinised'], { explanation: 'Slide 38.', skill: 'prediction' })),
    learn('Wear and tear', ['Where air or food rubs hardest (oropharynx, true cords, front of the epiglottis), the lining is stratified squamous; elsewhere it is respiratory epithelium.'], { sourceRefs: rm([37, 38, 42]) }),
    ask(match('i2-02', 'pharynx-sinuses', 'Match each region to its lining:', [['Nasopharynx', 'Respiratory epithelium'], ['Oropharynx', 'Stratified squamous non-keratinised'], ['Paranasal sinuses', 'Thin respiratory epithelium, few goblet cells']], { explanation: 'Slide 37.' })),
    ask(order('i2-03', 'trachea', 'Order the layers of the tracheal wall from the lumen outwards:', ['Mucosa', 'Submucosa', 'Cartilage layer', 'Adventitia'], { explanation: 'Slide 43.' })),
    learn('Trachealis', ['The trachealis muscle relaxes when we swallow so the oesophagus can bulge forward into the trachea.'], { sourceRefs: rm([43]) }),
    recall('r2-01', 'epiglottis', 'Describe the epiglottis.', ['Lingual surface: stratified squamous non-keratinised epithelium.', 'Laryngeal surface: stratified squamous at first, then an abrupt change to respiratory epithelium.', 'Dense irregular lamina propria with seromucous glands, and a core of elastic cartilage.'], rm([42])),
  ],
  [L(3)]: [
    ask(mcq('i3-01', 'bronchioles', 'Before you read: which feature do bronchioles lack?', 'Cartilage', ['Smooth muscle', 'An epithelial lining', 'An adventitia'], { explanation: 'Slide 50.', skill: 'prediction' })),
    learn('The trend', ['Going down the tree, cartilage, glands and goblet cells fade out and smooth muscle becomes more prominent, until alveoli start to appear in the respiratory bronchioles.'], { sourceRefs: rm([29]) }),
    ask(match('i3-02', 'bronchial-tree', 'Match each airway to its epithelium:', [['Trachea', 'Pseudostratified columnar'], ['Tertiary bronchus', 'Simple columnar'], ['Respiratory bronchiole', 'Simple cuboidal']], { explanation: 'Slide 29.' })),
    ask(mcq('i3-03', 'club-cells', 'Club cells replace which cells in the terminal bronchioles?', 'Goblet cells', ['Basal cells', 'Brush cells', 'Type I pneumocytes'], { explanation: 'Slides 23, 50.' })),
    learn('Club cells', ['Club cells protect and regenerate the bronchiolar lining, detoxify noxious substances and make CC16.'], { sourceRefs: rm([51]) }),
    recall('r3-01', 'bronchi', 'How do you recognise a bronchus in a section?', ['Respiratory epithelium on a thin basement membrane.', 'A layer of circular smooth muscle.', 'Irregular, discontinuous plates of hyaline cartilage, with seromucous glands.'], rm([47, 49])),
  ],
  [L(4)]: [
    ask(mcq('i4-01', 'pneumocytes', 'Before you read: which cells make surfactant?', 'Type II pneumocytes', ['Type I pneumocytes', 'Alveolar macrophages', 'Capillary endothelial cells'], { explanation: 'Slide 66.', skill: 'prediction' })),
    learn('Few but wide', ['Type I cells are only 40% of alveolar cells yet cover 95% of the surface, because each is spread so thin.'], { sourceRefs: rm([65]) }),
    ask(order('i4-02', 'blood-air-barrier', 'Order the blood–air barrier from air to blood:', ['Type I pneumocyte', 'Fused basal laminae', 'Capillary endothelial cell'], { explanation: 'Slide 70.' })),
    ask(match('i4-03', 'alveolar-macrophages', 'Match each name to its meaning:', [['Dust cell', 'Macrophage with inhaled particles'], ['Heart failure cell', 'Macrophage with leaked blood'], ['Septal cell', 'Type II pneumocyte']], { explanation: 'Slides 65–66.' })),
    learn('Pores of Kohn', ['Openings between alveoli let air, macrophages and also infection and tumours pass from one alveolus to the next.'], { sourceRefs: rm([64]) }),
    recall('r4-01', 'pneumocytes', 'List the features of type II pneumocytes.', ['Large cuboidal cells bulging into the air space, among type I cells.', 'Multilamellar bodies that store surfactant, which stops alveoli collapsing.', 'Stem cells for type I and II cells; their hyperplasia marks alveolar injury and repair.'], rm([66, 67])),
  ],
};

type ReadingExtras = { estimatedMinutes: number; xp: number; highYield: string[]; confusions: LessonConfusion[] };

export const readingExtras: Record<string, ReadingExtras> = {
  [L(1)]: {
    estimatedMinutes: 12,
    xp: 25,
    highYield: ['Five cells: goblet, ciliated, brush, small granule (K), basal.', 'Olfactory epithelium: no goblet cells; Bowman’s glands.', 'The lung makes ACE.'],
    confusions: [{ confusion: 'Olfactory cilia beat like respiratory cilia.', clarification: 'Olfactory cilia are long and non-motile; they carry odorant receptors (slide 33).' }],
  },
  [L(2)]: {
    estimatedMinutes: 10,
    xp: 25,
    highYield: ['True cord: stratified squamous non-keratinised + vocal ligament + vocalis.', 'Reinke’s space: no lymphatics.', 'Trachea: C-shaped hyaline cartilage; trachealis relaxes in swallowing.'],
    confusions: [{ confusion: 'The false vocal folds make the voice.', clarification: 'The true cords vibrate; the false folds and ventricle add resonance (slides 38, 41).' }],
  },
  [L(3)]: {
    estimatedMinutes: 12,
    xp: 25,
    highYield: ['Bronchus: cartilage plates + circular muscle.', 'Bronchiole: no cartilage, no glands, thick muscle.', 'Respiratory bronchiole: cuboidal, alveoli in the wall.'],
    confusions: [{ confusion: 'Club cells are a kind of goblet cell.', clarification: 'They are non-ciliated, dome-shaped secretory and stem cells that replace goblet cells in terminal bronchioles (slides 50, 51).' }],
  },
  [L(4)]: {
    estimatedMinutes: 12,
    xp: 25,
    highYield: ['Type I: 40% of cells, 95% of surface.', 'Type II: lamellar bodies, surfactant, stem cells.', 'Barrier: type I cell + fused basal laminae + endothelium.'],
    confusions: [{ confusion: 'Type II cells cover most of the alveolar surface.', clarification: 'Type I cells cover 95%; type II cells are fewer in area but make surfactant (slides 65, 66).' }],
  },
};
