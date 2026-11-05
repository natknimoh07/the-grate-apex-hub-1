// Past questions, sorted by topic. scripts/sort-past-questions-by-topic.mjs
// gives every question in public/curriculum/hb2-*.json a topic id (`tp`), and
// scripts/sort-hb1-past-questions-by-topic.mjs every question in the HB1 courses'
// past and predicted papers; this lists those topics per course, in course order.
// An HB2 id that matches one of this app's topics (data/curriculum.ts) is offered
// on that topic's card in the custom quiz; the others are groups without lessons
// yet (e.g. Embryology). Pure, for tests.
import type { SubjectId } from '@/data/lesson-types';

export type PastTopic = { id: string; title: string };

export const OTHER_PAST_TOPIC = 'other';

export const PAST_TOPICS: Record<string, readonly PastTopic[]> = {
  'hb2-anatomy': [
    { id: 'cardiovascular-system-gross', title: 'Cardiovascular System' },
    { id: 'respiratory-system-gross', title: 'Respiratory System' },
    { id: 'gastrointestinal-system-gross', title: 'Gastrointestinal System' },
    { id: 'upper-limb', title: 'Upper Limb' },
    { id: 'general-anatomy', title: 'General Anatomy: Bones, Joints and Body Systems' },
    { id: 'cardiovascular-system-micro', title: 'Cardiovascular System (Micro)' },
    { id: 'respiratory-system-micro', title: 'Respiratory System (Micro)' },
    { id: 'gastrointestinal-system-micro', title: 'Gastrointestinal System (Micro)' },
    { id: 'embryology', title: 'Early Embryology' },
    { id: 'histology', title: 'Histology: Tissues and Other Organs' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  'hb2-biochemistry': [
    { id: 'fatty-acid-biosynthesis', title: 'Fatty Acid Biosynthesis' },
    { id: 'cholesterol-and-bile-biosynthesis', title: 'Cholesterol and Bile Biosynthesis' },
    { id: 'heme-metabolism', title: 'Haem and Haem Metabolism' },
    { id: 'oxygen-carriers', title: 'Oxygen Carriers: Myoglobin and Haemoglobin' },
    { id: 'blood-coagulation-and-fibrinolysis', title: 'Blood Coagulation and Fibrinolysis' },
    { id: 'hormones-endocrine-biochemistry', title: 'Endocrine System: Hormones' },
    { id: 'inborn-errors-of-metabolism', title: 'Inborn Errors of Metabolism' },
    { id: 'collagen-synthesis', title: 'Collagen and Elastin' },
    { id: 'amino-acid-metabolism', title: 'Amino Acid Metabolism' },
    { id: 'free-radicals-and-oxygen-toxicity', title: 'Free Radicals and Oxygen Toxicity' },
    { id: 'immunology', title: 'Immunology' },
    { id: 'nucleic-acids', title: 'Nucleic Acids' },
    { id: 'vitamin-a-and-vision', title: 'Vitamin A and Vision' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  'hb2-physiology': [
    { id: 'cardiovascular-physiology', title: 'Cardiovascular Physiology' },
    { id: 'respiratory-physiology', title: 'Respiratory Physiology' },
    { id: 'blood', title: 'Blood' },
    { id: 'central-nervous-system', title: 'Central Nervous System' },
    { id: 'special-senses', title: 'Special Senses' },
    { id: 'endocrinology', title: 'Endocrinology' },
    { id: 'reproductive-physiology', title: 'Reproductive Physiology' },
    { id: 'gastrointestinal-physiology', title: 'Gastrointestinal Physiology' },
    { id: 'metabolism-and-temperature', title: 'Metabolism and Body Temperature' },
    { id: 'renal-physiology', title: 'Renal Physiology' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],

  // HB1 Semester 1 (owner, 2026-11-01).
  biolchem: [
    { id: 'origins-and-elements', title: 'Origins of Life and the Elements' },
    { id: 'general-chemistry', title: 'General and Inorganic Chemistry' },
    { id: 'carbohydrates', title: 'Carbohydrates' },
    { id: 'nucleic-acids', title: 'Nucleic Acids' },
    { id: 'amino-acids-and-proteins', title: 'Amino Acids and Proteins' },
    { id: 'enzymes-and-coenzymes', title: 'Enzymes and Coenzymes' },
    { id: 'lipids', title: 'Lipids' },
    { id: 'general-biochemistry', title: 'General Biochemistry and Metabolism' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  medgen: [
    { id: 'cell-structure', title: 'Cell Structure and Organelles' },
    { id: 'cell-cycle', title: 'Cell Cycle, Mitosis and Meiosis' },
    { id: 'chromosomes', title: 'Chromatin, Chromosome Structure and Karyotype' },
    { id: 'dna-structure', title: 'DNA Structure, Replication and Repair' },
    { id: 'molecular-genetics', title: 'Molecular Genetics: Gene Structure and Mutation' },
    { id: 'gene-regulation', title: 'Gene Regulation and Biostatistics for Genetics' },
    { id: 'mendelian', title: 'Mendelian and Cytoplasmic Inheritance' },
    { id: 'sex-determination', title: 'Sex Determination, Sex-Linkage, Blood Groups and Syndromes' },
    { id: 'bacterial-genetics', title: 'Bacterial Genetics and Bacteriophages' },
    { id: 'recombinant-dna', title: 'Recombinant DNA and Molecular Techniques' },
    { id: 'genomics', title: 'Human Genome Project and Genomics' },
    { id: 'apoptosis', title: 'Apoptosis and Programmed Cell Death' },
    { id: 'prions', title: 'Prions and Spongiform Encephalopathies' },
    { id: 'immunology', title: 'Immunology and Immunoglobulins' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  cellstruct: [
    { id: 'microscopy-fundamentals', title: 'Microscopy Fundamentals' },
    { id: 'lens-aberrations', title: 'Lens Aberrations and Optics' },
    { id: 'microscopy-techniques', title: 'Microscopy Techniques' },
    { id: 'specimen-preparation', title: 'Specimen Preparation and Practical Use' },
    { id: 'cell-biology', title: 'Cell Biology Basics' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  bmc: [
    { id: 'hydrocarbons', title: 'Hydrocarbons' },
    { id: 'alkyl-halides-and-aromatics', title: 'Alkyl Halides and Aromatics' },
    { id: 'alcohols-phenols-ethers', title: 'Alcohols, Phenols, Ethers and Thiols' },
    { id: 'aldehydes-and-ketones', title: 'Aldehydes and Ketones' },
    { id: 'carboxylic-acids-and-esters', title: 'Carboxylic Acids and Esters' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  algebra: [
    { id: 'numbers-sets-radicals', title: 'Numbers, Sets, Intervals and Radicals' },
    { id: 'absolute-value-inequalities', title: 'Absolute Value and Inequalities' },
    { id: 'equations-quadratics', title: 'Equations, Quadratics and Coordinate Geometry' },
    { id: 'sequences-series', title: 'Sequences and Series' },
    { id: 'binomial-theorem', title: 'Binomial Theorem' },
    { id: 'trigonometry', title: 'Trigonometry' },
    { id: 'matrices', title: 'Matrices' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  stats: [
    { id: 'data-and-surveys', title: 'Data, Measurement and Survey Design' },
    { id: 'descriptive-statistics', title: 'Descriptive Statistics' },
    { id: 'frequency-distributions', title: 'Frequency Distributions and Class Boundaries' },
    { id: 'dispersion-and-skewness', title: 'Dispersion and Skewness' },
    { id: 'probability', title: 'Probability and Random Variables' },
    { id: 'bayes-theorem', title: 'Bayes’ Theorem' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  commskills: [
    { id: 'word-classes', title: 'Word Classes (Parts of Speech)' },
    { id: 'the-sentence', title: 'The Sentence' },
    { id: 'errors-and-concord', title: 'Errors in Sentences and Concord' },
    { id: 'punctuation', title: 'Punctuation' },
    { id: 'ambiguity', title: 'Ambiguity in Communication' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  compapp: [
    { id: 'excel-basics', title: 'Excel: Workbooks, Formatting and Printing' },
    { id: 'excel-formulas-functions', title: 'Excel: Formulas and Functions' },
    { id: 'powerpoint', title: 'PowerPoint' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],

  // HB1 Semester 2 (owner, 2026-11-01).
  biochemistry: [
    { id: 'metabolism-introduction', title: 'Introduction to Metabolism' },
    { id: 'enzymes', title: 'Enzymes' },
    { id: 'glycolysis', title: 'Glycolysis' },
    { id: 'gluconeogenesis', title: 'Gluconeogenesis' },
    { id: 'krebs-cycle', title: 'Krebs Cycle' },
    { id: 'pentose-phosphate-pathway', title: 'Pentose Phosphate Pathway' },
    { id: 'fructose-and-galactose', title: 'Fructose and Galactose Metabolism' },
    { id: 'laboratory-practicals', title: 'Laboratory Practicals: Solutions and Specimen Tubes' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  physiology: [
    { id: 'homeostasis-and-cell-signalling', title: 'Homeostasis and Cell Signalling' },
    { id: 'body-fluids-and-membrane-transport', title: 'Body Fluids and Membrane Transport' },
    { id: 'neurons-and-action-potential', title: 'Neurons and the Action Potential' },
    { id: 'synaptic-transmission', title: 'Synaptic Transmission and the Neuromuscular Junction' },
    { id: 'autonomic-nervous-system', title: 'Autonomic Nervous System' },
    { id: 'sensory-physiology', title: 'Sensory Physiology' },
    { id: 'skeletal-muscle', title: 'Skeletal Muscle Physiology' },
    { id: 'cardiac-muscle', title: 'Cardiac and Smooth Muscle' },
    { id: 'blood', title: 'Blood and Haemostasis' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  anatomy: [
    { id: 'introduction', title: 'Introduction: Terminology and Body Organisation' },
    { id: 'bones-and-skeleton', title: 'Bones and the Skeleton' },
    { id: 'axial-skeleton', title: 'Axial Skeleton: Skull, Vertebral Column and Thorax' },
    { id: 'upper-limb', title: 'Upper Limb Bones' },
    { id: 'lower-limb-and-pelvis', title: 'Lower Limb and Pelvis' },
    { id: 'joints', title: 'Joints' },
    { id: 'cells-and-epithelia', title: 'Cells, Epithelial Tissue and Glands' },
    { id: 'connective-tissue', title: 'Connective Tissue, Cartilage and Bone Tissue' },
    { id: 'muscle-tissue', title: 'Muscle Tissue' },
    { id: 'nervous-tissue', title: 'Nervous Tissue' },
    { id: 'embryology', title: 'Embryology and Reproduction' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  behavioural: [
    { id: 'overview-and-research', title: 'Overview of Psychology and Research Methods' },
    { id: 'schools-and-perspectives', title: 'Schools and Perspectives in Psychology' },
    { id: 'biological-foundations', title: 'Biological Foundations of Behaviour' },
    { id: 'learning-and-conditioning', title: 'Learning and Conditioning' },
    { id: 'motivation-and-emotion', title: 'Motivation and Emotion' },
    { id: 'memory-intelligence-stress', title: 'Memory, Intelligence and Stress' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
  entomology: [
    { id: 'insect-biology', title: 'Introduction to Entomology and Insect Biology' },
    { id: 'mosquitoes', title: 'Mosquitoes: Anopheline and Culicine' },
    { id: 'lice-and-bed-bugs', title: 'Lice and Bed Bugs' },
    { id: 'other-vectors', title: 'Blackflies, Fleas, Tsetse and Other Vectors' },
    { id: 'vector-control', title: 'Vector Control and Malaria Control' },
    { id: OTHER_PAST_TOPIC, title: 'Other topics' },
  ],
};

/** The HB2 course whose past questions cover a subject's topics. */
export const pastCourseForSubject = (subject: SubjectId) => `hb2-${subject}`;

export const pastTopicTitle = (courseId: string, topicId: string) =>
  PAST_TOPICS[courseId]?.find((topic) => topic.id === topicId)?.title ?? 'Other topics';
