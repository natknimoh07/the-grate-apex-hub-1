// Sorts every HB1 past question (Apex High Yield → HB1 → By topic) into a topic,
// so learners can sit the past questions one topic at a time, like HB2
// (scripts/sort-past-questions-by-topic.mjs).
//
// Only the past and predicted papers are sorted (sets named "Past Questions…" or
// "Predicted Paper…", setKind in src/data/practice-modes.ts); quizzes and practice
// tests are left alone. Each paper question gets `tp`, a topic id listed for its
// course in src/data/past-question-topics.ts. How a question is sorted:
//   1. Its own label (`t`): when the label clearly names one topic (LABELS below),
//      that topic. Mixed labels ("Metabolism & Enzymes") and paper names
//      ("Past Questions 01") don't count.
//   2. Decisive words: a question naming e.g. the femur is Lower Limb and Pelvis.
//   3. Key words: the topic whose words the question mentions most (the question
//      itself counts double, its options and explanation once). Earlier topics win ties.
//   4. Neighbours: papers are written in blocks by topic, so a weakly sorted
//      question between two questions of the same topic joins them.
// Anything left goes to "other". A question in more than one paper gets the topic
// it got first.
//
// Safe to run again (it rewrites `tp`). After adding past questions, run it, check
// the counts it prints, and look at a topic with --samples <course> <topic id>.
//
// Usage:  node scripts/sort-hb1-past-questions-by-topic.mjs [--samples <course> <topic id>]

import { readFileSync, writeFileSync } from 'fs';

// Per course, in course order: each topic's label patterns and key words.
const COURSES = {
  biolchem: {
    'origins-and-elements': { labels: ['Origins of Life', 'Elements'], words: ['origin of life', 'element', 'atom', 'isotope', 'abundan', 'Miller', 'primordial'] },
    'general-chemistry': { labels: ['General & Inorganic'], words: ['bond', 'covalent', 'ionic', 'hydrogen bond', 'pH', 'buffer', 'acid', 'base', 'solution', 'molar', 'water'] },
    carbohydrates: { labels: ['Carbohydrate'], words: ['carbohydrate', 'glucose', 'sugar', 'saccharide', 'starch', 'glycogen', 'cellulose', 'fructose', 'glycosidic', 'aldose', 'ketose'] },
    'nucleic-acids': { labels: ['Nucleic'], words: ['nucleic', '\\bDNA\\b', '\\bRNA\\b', 'nucleotide', 'purine', 'pyrimidine', 'base pair'] },
    'amino-acids-and-proteins': { labels: ['Amino Acid', 'Protein'], words: ['amino acid', 'protein', 'peptide', 'zwitterion', 'isoelectric', 'helix', 'pleated', 'denatur'] },
    'enzymes-and-coenzymes': { labels: ['Enzyme', 'Coenzyme'], words: ['enzyme', 'coenzyme', 'cofactor', 'substrate', 'active site', 'inhibit', 'Km\\b', 'Vmax', 'vitamin'] },
    lipids: { labels: ['Lipid'], words: ['lipid', 'fatty acid', 'triglyceride|triacylglycerol', 'phospholipid', 'steroid', 'cholesterol', 'saponif'] },
    'general-biochemistry': { labels: ['General Biochemistry', 'Metabolism'], words: ['metabol', 'biochemi', '\\bATP\\b', 'cell'] },
  },
  medgen: {
    'cell-structure': { labels: ['Cell Structure'], words: ['organelle', 'mitochondri', 'ribosome', 'endoplasmic', 'Golgi', 'lysosome', 'membrane'] },
    'cell-cycle': { labels: ['Cell Cycle'], words: ['cell cycle', 'mitosis', 'meiosis', 'prophase', 'metaphase', 'anaphase', 'telophase', 'interphase'] },
    chromosomes: { labels: ['Chromatin', 'Chromosome'], words: ['chromatin', 'chromosome', 'karyotype', 'centromere', 'histone', 'nucleosome'] },
    'dna-structure': { labels: ['DNA Structure'], words: ['double helix', 'replication', 'repair', 'polymerase', 'Okazaki'] },
    'molecular-genetics': { labels: ['Molecular Genetics'], words: ['gene structure', 'mutation', 'codon', 'transcription', 'translation', 'exon', 'intron'] },
    'gene-regulation': { labels: ['Gene Regulation'], words: ['operon', 'regulation', 'promoter', 'repressor', 'Hardy', 'chi-square|chi square'] },
    mendelian: { labels: ['Mendelian', 'Cytoplasmic'], words: ['Mendel', 'dominant', 'recessive', 'allele', 'genotype', 'phenotype', 'pedigree', 'cytoplasmic inheritance', 'mitochondrial inheritance'] },
    'sex-determination': { labels: ['Sex Determination'], words: ['sex determination', 'sex-linked|X-linked|Y-linked', 'blood group', 'syndrome', 'Turner', 'Klinefelter', 'Down'] },
    'bacterial-genetics': { labels: ['Bacterial Genetics'], words: ['bacteri', 'phage', 'plasmid', 'conjugation', 'transduction', 'transformation'] },
    'recombinant-dna': { labels: ['Recombinant'], words: ['recombinant', 'restriction', '\\bPCR\\b', 'cloning', 'vector', 'electrophoresis', 'blot'] },
    genomics: { labels: ['Genome'], words: ['genome', 'genomics', 'sequencing'] },
    apoptosis: { labels: ['Apoptosis'], words: ['apoptosis', 'caspase', 'programmed cell death', 'necrosis'] },
    prions: { labels: ['Prion'], words: ['prion', 'spongiform', 'Creutzfeldt', 'kuru', 'scrapie'] },
    immunology: { labels: ['Immunolog'], words: ['immun', 'antibod', 'antigen', 'lymphocyte'] },
  },
  cellstruct: {
    'microscopy-fundamentals': { labels: ['Microscopy Fundamentals'], words: ['microscop', 'magnification', 'resolution', 'objective', 'eyepiece'] },
    'lens-aberrations': { labels: ['Lens', 'Optics'], words: ['aberration', 'lens', 'refract', 'focal'] },
    'microscopy-techniques': { labels: ['Microscopy Techniques'], words: ['electron microscop', 'phase contrast', 'dark field|dark-field', 'fluorescen', 'confocal'] },
    'specimen-preparation': { labels: ['Specimen'], words: ['specimen', 'stain', 'fixation|fixative', 'section', 'slide'] },
    'cell-biology': { labels: ['Cell Biology'], words: ['cell', 'prokaryot', 'eukaryot', 'organelle', 'membrane'] },
  },
  bmc: {
    hydrocarbons: { labels: ['Hydrocarbon'], words: ['alkane', 'alkene', 'alkyne', 'hydrocarbon'] },
    'alkyl-halides-and-aromatics': { labels: ['Alkyl Halide', 'Aromatic'], words: ['halide', 'benzene', 'aromatic', 'chloro|bromo|iodo'] },
    'alcohols-phenols-ethers': { labels: ['Alcohol', 'Phenol', 'Ether', 'Thiol'], words: ['alcohol', 'phenol', 'ether', 'thiol', '-ol\\b'] },
    'aldehydes-and-ketones': { labels: ['Aldehyde', 'Ketone'], words: ['aldehyde', 'ketone', 'carbonyl', '-al\\b', '-one\\b'] },
    'carboxylic-acids-and-esters': { labels: ['Carboxylic', 'Ester'], words: ['carboxylic', 'ester', 'amide', 'anhydride', 'acid chloride'] },
  },
  algebra: {
    'numbers-sets-radicals': { labels: ['Number Classification', 'Sets, Intervals'], words: ['\\bsets?\\b', 'interval', 'radical', 'surd', 'rational', 'irrational', 'integer', 'real number'] },
    'absolute-value-inequalities': { labels: ['Absolute Value', 'Inequalit'], words: ['absolute value', 'inequalit', '\\|x'] },
    'equations-quadratics': { labels: ['Equations'], words: ['equation', 'quadratic', 'roots?\\b', 'gradient|slope', 'line', 'coordinate'] },
    'sequences-series': { labels: ['Sequences', 'Series'], words: ['sequence', 'series', 'arithmetic', 'geometric', 'progression', 'terms?\\b', 'sum'] },
    'binomial-theorem': { labels: ['Binomial'], words: ['binomial', 'expansion', 'coefficient'] },
    trigonometry: { labels: ['Trigonometr'], words: ['\\bsin', '\\bcos', '\\btan', 'trigonometr', 'angle'] },
    matrices: { labels: ['^Matrices$'], words: ['matri', 'determinant', 'inverse'] },
  },
  stats: {
    'data-and-surveys': { labels: ['Data & Measurement', 'Survey'], words: ['data', 'variable', 'scale', 'nominal', 'ordinal', 'survey', 'sampl', 'questionnaire', 'ethic'] },
    'descriptive-statistics': { labels: ['Descriptive'], words: ['mean', 'median', 'mode', 'average'] },
    'frequency-distributions': { labels: ['Frequency', 'Class Boundar'], words: ['frequency', 'class', 'histogram', 'ogive', 'boundar', 'tally'] },
    'dispersion-and-skewness': { labels: ['Dispersion', 'Skewness', 'Outlier'], words: ['dispersion', 'variance', 'standard deviation', 'range', 'skew', 'kurtosis', 'outlier', 'quartile'] },
    probability: { labels: ['Probability'], words: ['probabilit', 'random variable', 'event', 'expected value', 'distribution'] },
    'bayes-theorem': { labels: ['Bayes'], words: ['Bayes', 'conditional', 'given that'] },
  },
  commskills: {
    'word-classes': { labels: ['Word Class'], words: ['noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'part of speech'] },
    'the-sentence': { labels: ['The Sentence'], words: ['sentence', 'clause', 'phrase', 'subject', 'predicate'] },
    'errors-and-concord': { labels: ['Errors', 'Concord'], words: ['error', 'correct', 'concord', 'agreement'] },
    punctuation: { labels: ['Punctuation'], words: ['punctuation', 'comma', 'colon', 'apostrophe', 'full stop', 'hyphen'] },
    ambiguity: { labels: ['Ambiguity'], words: ['ambigu', 'meaning'] },
  },
  compapp: {
    'excel-basics': { labels: [], words: ['spreadsheet', 'workbook', 'worksheet', '\\bcell', 'column', '\\brows?\\b', 'format', 'print', 'page setup', 'chart', 'axis', 'sort', 'filter', 'hide', 'freeze', 'Ctrl', 'tab\\b', 'ribbon', 'protect', 'Name box', 'data type', 'key', 'date|serial number', 'numbers', 'open'] },
    'excel-formulas-functions': { labels: ['Excel & Spreadsheet Functions'], words: ['formula', 'function', '\\(\\)', '=', 'SUM', '\\bIF\\b', 'LOOKUP', 'COUNT', 'AVERAGE', 'reference', '\\$', 'operator', 'precedence', 'return'] },
    powerpoint: { labels: ['PowerPoint'], words: ['PowerPoint', 'slide', 'presentation', 'placeholder', 'transition', 'animation'] },
  },
  biochemistry: {
    'metabolism-introduction': { labels: [], words: ['metabolism', 'anabol', 'catabol', 'free energy', 'high[- ]energy', '\\bATP\\b', 'NAD', 'FAD', 'oxidation', 'reduction', 'design', 'pathway'] },
    enzymes: { labels: ['^Enzymes$'], words: ['enzyme', 'active site', '\\bKm\\b', 'Vmax', 'Michaelis', 'inhibit', 'cofactor', 'coenzyme', 'allosteric', 'isoenzyme|isozyme', 'zymogen', 'apoenzyme', 'holoenzyme', 'catalys', 'substrate', 'competitive', 'lock and key', 'induced fit', 'specificity', 'denatur', 'optimum'] },
    glycolysis: { labels: ['^Glycolysis$'], words: ['glycoly', 'hexokinase', 'glucokinase', 'phosphofructokinase|PFK', 'pyruvate kinase', 'aldolase', 'glyceraldehyde', 'lactate', 'BPG|bisphosphoglycerate', 'Rapoport', 'enolase', 'triose', 'Embden'] },
    gluconeogenesis: { labels: ['^Gluconeogenesis$'], words: ['gluconeogen', 'pyruvate carboxylase', 'PEPCK|carboxykinase', 'glucose-6-phosphatase', 'bisphosphatase', 'Cori', 'alanine cycle', 'glycerol', 'oxaloacetate'] },
    'krebs-cycle': { labels: ['^Krebs Cycle$'], words: ['Krebs', 'citric acid', '\\bTCA\\b', 'tricarboxylic', 'citrate', 'isocitrate', 'ketoglutarate', 'succin', 'fumar', 'malate', 'pyruvate dehydrogenase', 'acetyl[- ]?CoA', 'aconitase'] },
    'pentose-phosphate-pathway': { labels: ['^Pentose Phosphate Pathway$'], words: ['pentose', 'hexose monophosphate|\\bHMP', 'G6PD|glucose-6-phosphate dehydrogenase', 'NADPH', 'ribose', 'transketolase', 'transaldolase'] },
    'fructose-and-galactose': { labels: ['^Fructose & Galactose'], words: ['fructose', 'galactos', 'fructokinase', 'aldolase B', 'GALT|uridyl', 'fructose intolerance', 'sorbitol', 'lactose', 'epimerase'] },
    'laboratory-practicals': { labels: [], words: ['pipette', 'dilut', 'stock', 'molar', 'specific gravity', 'purity', 'tube', 'heparin', 'EDTA', 'oxalate', 'fluoride', 'centrifug', 'specimen', 'solution'] },
  },
  physiology: {
    'homeostasis-and-cell-signalling': { labels: ['Homeostasis', 'Cell Signal', 'G Proteins', 'Second Messenger', 'Signal Transduction', '^Receptors$', 'Control Systems'], words: ['homeosta', 'feedback', 'set point', 'control system', 'signal', 'receptor', 'second messenger', 'cAMP', 'G[- ]protein', 'ligand', 'paracrine', 'autocrine'] },
    'body-fluids-and-membrane-transport': { labels: ['Body Fluid', 'Fluid Compartments', 'Body Water', 'Membrane', 'Passive Transport', 'Active & Vesicular'], words: ['body fluid', 'compartment', 'intracellular fluid|extracellular fluid|\\bICF\\b|\\bECF\\b', 'body water', 'osmo', 'diffusion', 'transport', 'channel', 'pump', 'Na\\+?/K\\+?|sodium[- ]potassium', 'endocytosis|exocytosis', 'membrane', 'tonic'] },
    'neurons-and-action-potential': { labels: ['Neurons', 'Action Potential', 'Propagation'], words: ['neuron', 'glia', 'resting membrane potential|resting potential', 'action potential', 'depolari', 'repolari', 'hyperpolari', 'threshold', 'refractory', 'myelin', 'saltatory', 'axon', 'conduction'] },
    'synaptic-transmission': { labels: ['Synap', 'NMJ', 'NMBA', 'Neurotransmitter'], words: ['synap', 'neuromuscular junction|\\bNMJ\\b', 'acetylcholine', 'neurotransmitter', 'end[- ]plate', 'curare|tubocurarine|succinylcholine|neuromuscular block', 'myasthenia', 'EPSP|IPSP', 'cholinesterase'] },
    'autonomic-nervous-system': { labels: ['Autonomic'], words: ['autonomic', 'sympathetic', 'parasympathetic', 'adrenergic', 'cholinergic', 'muscarinic', 'nicotinic', 'ganglion|ganglia', 'adrenal medulla'] },
    'sensory-physiology': { labels: ['Sensory'], words: ['sensory', 'receptor potential', 'adaptation', 'mechanoreceptor', 'nocicept', 'pain', 'touch', 'proprioce', 'transduc'] },
    'skeletal-muscle': { labels: ['Skeletal Muscle', '^Muscle Physiology$', '^Contraction$', 'Excitation', '^Relaxation$', 'Mechanical Properties'], words: ['skeletal muscle', 'sarcomere', 'actin', 'myosin', 'troponin', 'tropomyosin', 'cross[- ]bridge', 'sarcoplasmic', 'T[- ]tubule', 'twitch', 'tetan', 'motor unit', 'muscle fib', 'isometric|isotonic', 'length[- ]tension', 'rigor', '\bATP\b', 'contraction'] },
    'cardiac-muscle': { labels: ['Cardiac', 'Pacemaker', 'Electrical Activity'], words: ['cardiac', 'heart', 'pacemaker', 'SA node|sinoatrial', 'AV node', 'Purkinje', 'plateau', 'intercalated', 'smooth muscle'] },
    blood: { labels: ['Hemostasis', 'Hemoglobin', 'RBC', 'Blood Composition', 'Clotting'], words: ['blood', 'plasma', 'haemo|hemo', 'erythro', 'platelet', 'clot', 'coagul', 'leuco|leuko', 'anaemia|anemia'] },
  },
  anatomy: {
    introduction: { labels: ['What Is Anatomy', 'History of Anatomy', 'Terminology', 'Anatomical Position', 'Directional', 'Body Organization', 'Overview of Body Systems', 'Medical Imaging', 'Terms of Movement', 'Radiology'], words: ['anatomical position', 'plane', 'sagittal', 'coronal|frontal plane', 'transverse plane', 'anterior|posterior|superior|inferior|medial|lateral|proximal|distal', 'body cavit', 'ventral', 'dorsal', 'imaging', 'X-ray|radiograph', '\\bCT\\b|\\bMRI\\b|ultrasound', 'terminolog', 'flexion|extension|abduction|adduction|rotation', 'body system', 'history', 'gross anatomy', 'region'] },
    'bones-and-skeleton': { labels: ['Skeletal Development', 'Appendicular skeleton'], words: ['bone', 'skeleton', 'ossification', 'epiphys', 'diaphys', 'periosteum', 'endosteum', 'marrow', 'compact', 'spongy|cancellous', 'long bone|flat bone|short bone|irregular bone|sesamoid', 'weight[- ]bearing', 'foramen|fossa|condyle|tubercle|tuberosity|process|facet', 'axial skeleton', 'appendicular'] },
    'axial-skeleton': { labels: ['Skull', 'Vertebral', 'Thorax', '^Ribs$'], words: ['skull', 'cranium|cranial', 'mandible', 'maxilla', 'vertebra', 'atlas', '\\baxis\\b', '\\bdens\\b', 'cervical', 'thoracic', 'lumbar', 'sacrum|sacral', 'coccyx', '\\bribs?\\b', 'sternum', 'hyoid', 'sphenoid', 'ethmoid', 'temporal bone', 'occipital', 'parietal', 'frontal bone', 'zygomatic', 'nasal', 'suture', 'fontanelle', 'scoliosis|kyphosis|lordosis', 'thorax'] },
    'upper-limb': { labels: ['Upper Limb', '^Ulna', '^Scapula', '^Humerus', '^Radius', '^Carpus', '^Clavicle', 'Forearm', 'Shoulder'], words: ['upper limb', 'clavicle', 'scapula', 'humerus', 'radius', 'ulna', 'carpal|carpus', 'metacarp', 'phalan', 'shoulder', 'elbow', 'wrist', '\\bhand\\b', 'forearm', '\\barm\\b', 'olecranon', 'acromion', 'glenoid', 'trochlea', 'capitulum'] },
    'lower-limb-and-pelvis': { labels: ['Lower Limb', '^Femur', '^Tibia', '^Fibula', 'Os coxae', '^Pubis', '^Ischium', 'Pelv', 'Foot', 'Arches', 'Pudendal'], words: ['lower limb', 'femur', 'tibia', 'fibula', 'patella', 'tars', 'calcaneus', 'talus', 'metatars', 'os coxae|hip bone|innominate', 'ilium|iliac', 'ischium|ischial', 'pubis|pubic', 'acetabulum', 'pelvi', '\\bfoot\\b|\\bfeet\\b', 'knee', 'ankle', '\\bleg\\b', 'thigh', 'arch'] },
    joints: { labels: ['^Joints'], words: ['joint', 'articulation', 'synovial', 'fibrous joint', 'cartilaginous joint', 'synarthros|amphiarthros|diarthros', 'ligament', 'bursa', 'menisc', 'hinge|pivot|ball and socket|saddle|condyloid|plane joint', 'symphysis', 'syndesmosis', 'gomphosis'] },
    'cells-and-epithelia': { labels: ['Epitheli', 'Cell Junction', 'Gland'], words: ['epitheli', 'squamous', 'cuboidal', 'columnar', 'pseudostratified', 'transitional', 'stratified', 'keratin', 'microvilli', 'cilia', 'goblet', 'basement membrane|basal lamina', 'junction', 'desmosome', 'gland', 'exocrine', 'endocrine', 'merocrine|apocrine|holocrine', 'secret', 'ribosome', 'Golgi', 'endoplasmic', 'organelle', 'cell membrane|plasma membrane', 'cytosol', 'lysosome', 'transcytosis|endocytosis|exocytosis', 'mucous membrane'] },
    'connective-tissue': { labels: ['Connective', 'Cartilage'], words: ['connective tissue', 'fibroblast', 'collagen', 'elastic', 'reticular', 'ground substance', 'glycosaminoglycan', 'adipo', 'cartilag', 'chondr', 'hyaline', 'fibrocartilage', 'osteon|haversian', 'osteoblast|osteoclast|osteocyte', 'lamell', 'mast cell', 'macrophage', 'blood', 'lymph', 'mucous connective|mesenchym', 'tendon'] },
    'muscle-tissue': { labels: ['Muscle'], words: ['muscle', 'myofib', 'myofilament', 'sarcomere', 'sarcolemma', 'sarcoplasm', 'actin', 'myosin', 'skeletal muscle|smooth muscle|cardiac muscle', 'intercalated', 'striat', 'muscular'] },
    'nervous-tissue': { labels: ['Neuron', 'Neuroglia', 'Myelin', 'Nervous Tissue', 'Synapses'], words: ['neuron', 'nerve', 'neuroglia|glia', 'astrocyte', 'oligodendro', 'Schwann', 'microglia', 'ependymal', 'myelin', 'axon', 'dendrite', 'synap', 'gr[ae]y matter|white matter', 'ganglion', 'Nissl'] },
    embryology: { labels: [], words: ['embryo', 'foetus|fetus|foetal|fetal', 'placenta', 'fertili[sz]', 'zygote', 'morula', 'blastocyst', 'trophoblast', 'implantation', 'chorion', 'amnio', 'yolk sac', 'gastrulation', 'germ layer', 'ectoderm|mesoderm|endoderm', 'notochord', 'neural tube', 'sperm', 'oocyte|ovum|ova\\b', 'oogenesis', 'follicle', 'ovulation', 'corpus luteum', 'pregnan', 'semen', 'endometri', 'decidua', 'pronucle', 'zona', 'acrosom', 'gonad', 'infertil', 'menstru', 'twin', 'congenital', 'contracept'] },
  },
  behavioural: {
    'overview-and-research': { labels: ['Overview of Psychology'], words: ['psychology (is|comes|is considered)', 'science', 'research', 'experiment', 'variable', 'control group', 'correlat', 'hypothes', 'case study', 'survey', 'sample', 'psychiatrist', 'clinical psycholog', 'subfield|specialt', 'covert|overt', 'behaviou?r is', 'scientific method', 'ethic', 'placebo', 'double[- ]blind', 'animals in', 'word "?psychology', 'comparative|species'] },
    'schools-and-perspectives': { labels: ['Theoretical Paradigms'], words: ['structural', 'functional', 'Gestalt', 'psychoanaly', 'psychodynamic', 'Freud', 'neo-Freud', 'humanistic', 'Rogers', 'cognitive (perspective|approach|psycholog|view)', 'evolutionary', 'perspective', 'school of', 'viewpoint', 'approach', 'Titchener', 'Wundt', 'William James', 'Watson', 'introspection', 'sociocultural|socio-cultural', 'paradigm', 'unconscious'] },
    'biological-foundations': { labels: ['Biological Foundations'], words: ['brain', 'neuron', 'neurotransmitter', 'cortex', 'lobe', 'amygdala', 'hypothalamus', 'hippocampus', 'cerebell', 'hemisphere', 'nervous system', 'endocrine', 'hormone', 'gene', 'heredit', 'synap', 'dopamine', 'serotonin', 'spinal cord'] },
    'learning-and-conditioning': { labels: [], words: ['condition', 'reinforce', 'punish', 'Pavlov', 'Skinner', 'operant', 'classical', 'stimulus', 'extinction', 'extinguish', 'shaping|shape', 'schedule', 'generali[sz]', 'Thorndike', 'law of effect', 'observational', 'Bandura', 'model(l)?ing', 'learn', 'spontaneous recovery', 'habituat', 'avoidance', 'escape', 'reward', 'interval|ratio', 'behaviou?r modification', 'token'] },
    'motivation-and-emotion': { labels: ['Motivation'], words: ['motivat', '\\bdrives?\\b', '\\bneeds?\\b', 'Maslow', 'hierarchy', 'incentive', 'hunger', 'thirst', 'arousal', 'instinct', 'emotion', 'intrinsic', 'extrinsic', 'self-actuali', 'James-Lange|Cannon-Bard|Schachter'] },
    'memory-intelligence-stress': { labels: ['Memory', 'Intelligence', 'Stress'], words: ['memory', 'recall', 'recogni', 'forget', 'encod', 'retriev', 'short-term|long-term', 'amnesia', 'intelligen', '\\bIQ\\b', 'Binet', 'Wechsler', 'Gardner', 'stress', 'coping', 'general adaptation', 'burnout'] },
  },
  entomology: {
    'insect-biology': { labels: ['Introduction to Entomology'], words: ['arthropod', 'class', 'insect body', 'exoskeleton', 'cuticle', 'chitin', 'head, thorax', 'metamorphosis', 'instar', 'nymph', 'Malpighian', 'haemolymph|hemolymph', 'spiracle', 'trache', 'alimentary', 'antenna', 'wing', 'halteres', 'mouthpart', 'pterygota', 'millipede|centipede', 'crustacean', 'arachnid', 'order', 'entomolog', 'saliva', 'excret', '\bgut\b', 'midgut|foregut|hindgut', 'peritrophic', 'digest'] },
    mosquitoes: { labels: ['Mosquito'], words: ['mosquito', 'anophel', 'culex|culicine', 'aedes', 'mansonia', 'larva', 'pupa', 'malaria', 'plasmodium', 'filaria', 'wuchereria', 'dengue', 'yellow fever', 'arbovir', 'gonotrophic', 'endophag|exophag|endophil|exophil', 'Duffy', 'egg raft'] },
    'lice-and-bed-bugs': { labels: ['Lice', 'Bed Bug'], words: ['\\blice\\b', 'louse', 'pediculus', 'pthirus', 'pubic', 'bed ?bugs?', 'cimex', 'typhus', 'trench fever', 'relapsing fever'] },
    'other-vectors': { labels: ['Blackfl', 'Flea'], words: ['black ?fl', 'simulium', 'onchocerc', 'river blindness', 'flea', 'plague', 'xenopsylla', 'tunga', 'tsetse', 'glossina', 'trypanosom', 'sleeping sickness', 'sand ?fl', 'phlebotom', 'leishman', 'house ?fl', 'musca', 'myiasis', '\\bticks?\\b', '\\bmites?\\b', 'scabies', 'triatom', 'chagas', 'cockroach'] },
    'vector-control': { labels: ['IVM', 'Roll Back', 'Bed nets'], words: ['insecticid', 'pyrethroid', 'organophosphate', '\\bDDT\\b', 'carbamate', 'larvicid', '\\bIVM\\b', 'integrated vector', 'bed ?nets?', '\\bITNs?\\b|\\bLLINs?\\b', 'indoor residual|\\bIRS\\b', 'roll back malaria', 'resistance', 'repellent', 'source reduction', 'environmental management', 'biological control', 'residual'] },
  },
};

// Decisive words: a question whose own text names one of these goes to that topic
// whatever else it mentions. Checked in this order.
const DECISIVE = {
  anatomy: {
    embryology: ['contracept', 'embryo', 'placenta', 'fertili[sz]', 'zygote', 'trophoblast', 'blastocyst', 'chorion', 'oocyte', 'spermatogenesis|oogenesis', 'corpus luteum', 'pregnan'],
    joints: ['\\bjoints?\\b', 'synovial', 'articulat', 'ligament', 'arthros'],
    'upper-limb': ['clavicle', 'scapula', 'humerus', 'radius', 'ulna', 'carpal', 'metacarp', 'upper limb'],
    'lower-limb-and-pelvis': ['femur', 'tibia', 'fibula', 'patella', 'tarsal', 'calcaneus', 'talus', 'metatars', 'os coxae', 'ischium', 'pubis', 'acetabulum', 'pelvis', 'lower limb'],
    'axial-skeleton': ['vertebra', 'skull', 'cranial|cranium', 'mandible', 'maxilla', '\\bribs?\\b', 'sternum', 'hyoid', 'sphenoid', 'ethmoid', 'zygomatic', 'fontanelle', 'scoliosis|kyphosis|lordosis'],
  },
  biochemistry: {
    'laboratory-practicals': ['\btop\b.*tube|\btube\b', 'pipette', 'dilut', 'stock solution', 'specific gravity'],
    'pentose-phosphate-pathway': ['pentose phosphate', 'G6PD', 'transketolase'],
    'fructose-and-galactose': ['fructose intolerance', 'galactosaemia|galactosemia', 'fructokinase', 'aldolase B'],
  },
  entomology: {
    'lice-and-bed-bugs': ['\\blice\\b', 'louse', 'bed ?bug'],
  },
};

const QUESTION_WEIGHT = 2;
const OTHER_WEIGHT = 1;

const kind = (name) => (/^predicted paper/i.test(name) ? 'predicted' : /^past questions/i.test(name) ? 'past' : 'other');
const plain = (s) => String(s ?? '').replace(/<[^>]+>/g, ' ');
const regexes = (words) => words.map((word) => new RegExp(word, 'i'));

const samplesAt = process.argv.indexOf('--samples');
const samples = samplesAt === -1 ? null : { course: process.argv[samplesAt + 1], topic: process.argv[samplesAt + 2] };

for (const [courseId, config] of Object.entries(COURSES)) {
  const path = `public/curriculum/${courseId}.json`;
  const bank = JSON.parse(readFileSync(path, 'utf8'));
  const topics = Object.entries(config).map(([id, topic]) => ({ id, labels: regexes(topic.labels), words: regexes(topic.words) }));
  const decisive = Object.entries(DECISIVE[courseId] ?? {}).map(([id, words]) => ({ id, words: regexes(words) }));
  const given = new Map(); // question id → topic, so a question in two papers is sorted once
  const counts = {};
  let total = 0;

  for (const set of bank.sets) {
    if (kind(set.name) === 'other') continue;
    const rows = set.questions.map((q) => {
      if (given.has(q.id)) return { q, topic: given.get(q.id), fixed: true };
      const label = String(q.t ?? '');
      const byLabel = label && topics.find((topic) => topic.labels.some((re) => re.test(label)));
      if (byLabel) return { q, topic: byLabel.id, fixed: true };
      const stem = plain(q.q);
      const named = decisive.find((topic) => topic.words.some((re) => re.test(stem)));
      if (named) return { q, topic: named.id, fixed: true };
      const rest = `${(q.o ?? []).map(plain).join(' \n ')} \n ${plain(q.e)}`;
      const score = {};
      let topic = 'other';
      let top = 0;
      for (const item of topics) {
        score[item.id] = item.words.filter((re) => re.test(stem)).length * QUESTION_WEIGHT + item.words.filter((re) => re.test(rest)).length * OTHER_WEIGHT;
        if (score[item.id] > top) { top = score[item.id]; topic = item.id; }
      }
      return { q, topic, top, score, fixed: false };
    });
    // A weakly sorted question between two questions of the same topic joins them.
    rows.forEach((row, i) => {
      const before = rows[i - 1]?.topic;
      const after = rows[i + 1]?.topic;
      if (row.fixed || !before || before !== after || before === row.topic || before === 'other') return;
      if (row.topic === 'other' || (row.score[before] ?? 0) > 0 || row.top <= 2) row.smoothed = before;
    });
    for (const row of rows) {
      const topic = row.smoothed ?? row.topic;
      row.q.tp = topic;
      if (!given.has(row.q.id)) {
        given.set(row.q.id, topic);
        counts[topic] = (counts[topic] ?? 0) + 1;
        total += 1;
        if (samples?.course === courseId && samples.topic === topic) console.log(`  [${set.name}] ${plain(row.q.q).replace(/\s+/g, ' ').slice(0, 140)}`);
      }
    }
  }
  writeFileSync(path, JSON.stringify(bank));
  const other = counts.other ?? 0;
  console.log(`\n${courseId} (${total} questions, ${Math.round((other / Math.max(1, total)) * 100)}% other):`, Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([id, n]) => `${id} ${n}`).join(' · '));
}
