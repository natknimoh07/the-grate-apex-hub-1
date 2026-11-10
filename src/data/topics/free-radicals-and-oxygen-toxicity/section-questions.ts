// Biochemistry → Free Radicals and Oxygen Toxicity: five more questions for every
// reading section (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n (S as numbered on 2026-11-04).
// When the 2026 deck was added (2026-11-10), new sections were inserted, so S no
// longer always matches the section's position; the ids were kept so learners'
// answer history is kept. The new sections' questions are in newSections below,
// with ids sL-<section>-n.
import { fill, mcq, multi, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/free-radicals-and-oxygen-toxicity/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 Why free radicals matter ────────────────────────
  mcq('s1-1-1', 'free-radical-definition', 'When does the body’s steady making of free radicals start to damage cells?', 'When antioxidants are lacking or production is excessive', ['Only when the person is over the age of sixty years old', 'Only when bacteria enter the bloodstream', 'Never — the body always copes with them'], {
    explanation: 'Normally it copes; damage follows a lack of antioxidants or excess production.',
  }),
  mcq('s1-1-2', 'free-radical-definition', 'Which neurological diseases does the lecture link to free radical damage?', 'Alzheimer’s and Parkinson’s disease', ['Migraine and epilepsy', 'Meningitis and polio', 'Stroke and tetanus of the nerves'], {
    explanation: 'The list includes Alzheimer’s and Parkinson’s disease.',
  }),
  tf({ id: 's1-1-3', conceptId: 'free-radical-definition', statement: 'Poor digestion is one way the body can come to make free radicals.', answer: true, explanation: 'Radicals come from own processes, toxins, radiation or poor digestion, and disease.' }),
  mcq('s1-1-4', 'free-radical-definition', 'Which of these does the lecture NOT link to free radical damage?', 'Broken bones from a fall', ['Ageing', 'Impaired immunity to infection', 'Arthritis'], {
    explanation: 'Ageing, cancer, impaired immunity, cardiovascular disease, arthritis, Alzheimer’s, Parkinson’s.',
  }),
  fill('s1-1-5', 'free-radical-definition', 'Some researchers see free radical damage behind almost every ____.', ['disease', 'illness'], {
    explanation: 'HB slide 4: behind almost every disease.',
  }),

  // ─── Lesson 1 · S2 What a free radical is ──────────────────────────
  mcq('s1-2-1', 'free-radical-definition', 'Where is the unpaired electron of a free radical?', 'In its outer orbit', ['In its nucleus', 'In its inner shell', 'Shared with water'], {
    explanation: 'A single unpaired electron in its outer orbit.',
  }),
  mcq('s1-2-2', 'ros-terms', 'Which reactive species comes from nitric oxide?', 'Peroxynitrite', ['Hypochlorous acid', 'Hydrogen peroxide', 'Singlet oxygen'], {
    explanation: 'ROS include peroxynitrite, from NO.',
  }),
  tf({ id: 's1-2-3', conceptId: 'ros-terms', statement: 'Hypochlorous acid (HOCl) is a non-radical reactive oxygen species.', answer: true, explanation: 'ROS include non-radical derivatives such as H₂O₂ and HOCl.' }),
  mcq('s1-2-4', 'free-radical-definition', 'Why is a free radical unstable?', 'It has an unpaired electron', ['It has too many protons', 'It has no electrons at all', 'It carries a large positive charge'], {
    explanation: 'Its unpaired electron makes it highly reactive.',
  }),
  mcq('s1-2-5', 'ros-terms', 'Which term means the overall effect of oxidative species in causing tissue injury?', 'Oxidative stress', ['Oxygen toxicity', 'Reactive oxygen species', 'Lipid peroxidation'], {
    explanation: 'Oxidative stress = tissue injury or disease; oxygen toxicity = cellular-level effect.',
  }),

  // ─── Lesson 1 · S3 Sources ─────────────────────────────────────────
  mcq('s1-3-1', 'radical-sources', 'Which hormone states are listed as sources of free radicals?', 'Hyperthyroidism and high glucocorticoids', ['Hypothyroidism and low cortisol', 'Diabetes insipidus and low ADH', 'Low insulin and low glucagon levels together'], {
    explanation: 'Stress, fever, glucocorticoids and hyperthyroidism.',
  }),
  mcq('s1-3-2', 'radical-sources', 'Which gas in the air is an external source of radicals?', 'Ozone', ['Nitrogen', 'Argon', 'Helium'], {
    explanation: 'Ozone is on the external list.',
  }),
  tf({ id: 's1-3-3', conceptId: 'radical-sources', statement: 'Ozone and mineral dust are internal sources of free radicals.', answer: false, explanation: 'They are external sources, with smoke, pollutants and radiation.' }),
  mcq('s1-3-4', 'radical-sources', 'Which anticancer drug is listed as an external source of radicals?', 'Adriamycin', ['Penicillin', 'Insulin', 'Paracetamol'], {
    explanation: 'Nitrofurantoin, adriamycin and methotrexate.',
  }),
  mcq('s1-3-5', 'radical-sources', 'Which enzyme of the lecture’s list makes radicals by enzymatic oxidation?', 'Xanthine oxidase', ['Hexokinase', 'Carbonic anhydrase', 'Amylase'], {
    explanation: 'Xanthine oxidase, prostaglandin synthase, lipoxygenase, aldehyde oxidase.',
  }),

  // ─── Lesson 1 · S4 Ischaemia–reperfusion and the respiratory burst ─
  mcq('s1-4-1', 'ischaemia-reperfusion', 'When do radicals flood an ischaemic tissue?', 'When blood flow returns', ['As soon as blood flow stops', 'Only after the tissue dies', 'Never in ischaemic tissue'], {
    explanation: 'Xanthine oxidase rises and antioxidants fall during ischaemia; reperfusion floods the tissue.',
  }),
  mcq('s1-4-2', 'ischaemia-reperfusion', 'Which two antioxidants are lost during ischaemia?', 'SOD and glutathione peroxidase', ['Catalase and vitamin C', 'Transferrin and plasma albumin', 'Vitamin E and β-carotene'], {
    explanation: 'HB slide 10: SOD and glutathione peroxidase are lost.',
  }),
  tf({ id: 's1-4-3', conceptId: 'ischaemia-reperfusion', statement: 'Phagocytes use very little oxygen during phagocytosis.', answer: false, explanation: 'In the respiratory burst they consume large amounts.' }),
  mcq('s1-4-4', 'ischaemia-reperfusion', 'Which substrate rises with xanthine oxidase during ischaemia?', 'Xanthine', ['Glucose', 'Lactate', 'Glycogen'], {
    explanation: 'Xanthine and xanthine oxidase rise greatly.',
  }),
  fill('s1-4-5', 'ischaemia-reperfusion', 'The large oxygen use of phagocytes is called the respiratory ____.', ['burst'], {
    explanation: 'The respiratory burst turns 70–90% of the oxygen into superoxide.',
  }),

  // ─── Lesson 2 · S1 Reactions ───────────────────────────────────────
  mcq('s2-1-1', 'radical-reactions', 'Which disease can begin with radical attack on lipoproteins?', 'Atherosclerosis', ['Haemophilia A (VIII)', 'Scurvy', 'Gout'], {
    explanation: 'Attack on membranes or lipoproteins starts lipid peroxidation, e.g. atherosclerosis.',
  }),
  mcq('s2-1-2', 'radical-reactions', 'What kind of bond forms when two radicals pair their electrons?', 'A covalent bond', ['An ionic bond', 'A hydrogen bond', 'A metal bond'], {
    explanation: 'Two radicals can pair their electrons into a covalent bond.',
  }),
  tf({ id: 's2-1-3', conceptId: 'radical-reactions', statement: 'Dismutation of superoxide can happen without an enzyme.', answer: true, explanation: 'It happens non-enzymatically or by SOD.' }),
  mcq('s2-1-4', 'radical-reactions', 'Which enzyme speeds up the dismutation of superoxide?', 'Superoxide dismutase (SOD)', ['Catalase (CAT)', 'Xanthine oxidase', 'Glutathione reductase (GR)'], {
    explanation: 'SOD dismutates superoxide to H₂O₂ and O₂.',
  }),
  mcq('s2-1-5', 'radical-reactions', 'What are the products of superoxide dismutation?', 'Hydrogen peroxide and oxygen', ['Water and carbon dioxide', 'Hydroxyl radical and liquid water', 'Peroxynitrite and oxygen'], {
    explanation: 'Superoxide → H₂O₂ + O₂.',
  }),

  // ─── Lesson 2 · S2 Biologically significant species ────────────────
  mcq('s2-2-1', 'major-ros', 'What is RS·?', 'A thiyl radical', ['A peroxyl radical', 'An alkoxyl radical', 'A hydroxyl radical'], {
    explanation: 'RS· is the thiyl radical.',
  }),
  mcq('s2-2-2', 'major-ros', 'What is the symbol for singlet oxygen?', '¹O₂', ['O₂·⁻', '·OH', 'ROO·'], {
    explanation: '¹O₂ is singlet oxygen.',
  }),
  tf({ id: 's2-2-3', conceptId: 'major-ros', statement: 'RO· is an alkoxyl radical.', answer: true, explanation: 'Fay slide 8: alkoxyl (RO·) and trichloromethyl (CCl₃·).' }),
  mcq('s2-2-4', 'major-ros', 'Which species in the table is NOT a radical?', 'Hypochlorous acid (HOCl)', ['Peroxyl radical (ROO·) of lipids', 'Nitric oxide (NO·)', 'Thiyl radical (RS·)'], {
    explanation: 'HOCl is a non-radical; the others carry a dot (unpaired electron).',
  }),
  mcq('s2-2-5', 'major-ros', 'What does the dot (·) in ·OH show?', 'An unpaired electron', ['A positive charge on oxygen', 'A double bond', 'A missing proton'], {
    explanation: 'The dot marks the radical’s unpaired electron.',
  }),

  // ─── Lesson 2 · S3 The major ROS ───────────────────────────────────
  mcq('s2-3-1', 'major-ros', 'In which enzyme deficiency is singlet oxygen involved in red cell damage?', 'G6PD deficiency', ['Factor VIII deficiency', 'Lactase deficiency', 'ALA dehydratase deficiency'], {
    explanation: 'Singlet oxygen is involved in red cell damage in G6PD deficiency.',
  }),
  mcq('s2-3-2', 'major-ros', 'Why is hydrogen peroxide dangerous even though it is not very reactive?', 'With transition metals it gives hydroxyl radicals', ['It is a radical with two unpaired electrons', 'It destroys every enzyme it meets', 'It cannot cross any cell membrane in the body'], {
    explanation: 'H₂O₂ is the main source of ·OH in the presence of transition metals.',
  }),
  tf({ id: 's2-3-3', conceptId: 'major-ros', statement: 'Singlet oxygen is involved in lens ageing and photoageing.', answer: true, explanation: 'It is involved in photo-oxygenation, photoageing, lens ageing and carcinogenesis.' }),
  mcq('s2-3-4', 'major-ros', 'Which ROS is the most reactive of the four major ones?', 'The hydroxyl radical', ['Superoxide', 'Hydrogen peroxide (H₂O₂)', 'Singlet oxygen'], {
    explanation: '·OH is extremely reactive and attacks most biomolecules.',
  }),
  mcq('s2-3-5', 'major-ros', 'Which ROS is NOT a radical?', 'Hydrogen peroxide', ['Superoxide', 'Hydroxyl radical (·OH)', 'Peroxyl radical'], {
    explanation: 'H₂O₂ is not a radical.',
  }),

  // ─── Lesson 2 · S4 Making the hydroxyl radical ─────────────────────
  mcq('s2-4-1', 'fenton-haber-weiss', 'Which reaction uses ferrous iron to make the hydroxyl radical?', 'The Fenton reaction', ['The Haber–Weiss reaction', 'The dismutation reaction', 'The respiratory burst'], {
    explanation: 'Fenton: H₂O₂ + Fe²⁺ → ·OH + OH⁻ + Fe³⁺.',
  }),
  mcq('s2-4-2', 'fenton-haber-weiss', 'Which species comes directly after superoxide when oxygen is reduced?', 'Hydrogen peroxide', ['Hydroxyl radical (·OH)', 'Water', 'Singlet oxygen'], {
    explanation: 'O₂ → superoxide → H₂O₂ → ·OH → water.',
  }),
  tf({ id: 's2-4-3', conceptId: 'fenton-haber-weiss', statement: 'Both the Fenton and Haber–Weiss reactions make the hydroxyl radical.', answer: true, explanation: 'Both give ·OH and OH⁻.' }),
  mcq('s2-4-4', 'fenton-haber-weiss', 'What is the end product of the four-electron reduction of oxygen?', 'Water', ['Hydroxyl radical', 'Superoxide', 'Ozone'], {
    explanation: 'Four one-electron steps take O₂ all the way to water.',
  }),
  mcq('s2-4-5', 'fenton-haber-weiss', 'Which reaction needs no metal ion in its equation?', 'The Haber–Weiss reaction', ['The Fenton reaction with iron', 'Neither reaction', 'Both reactions'], {
    explanation: 'Haber–Weiss: O₂·⁻ + H₂O₂ → O₂ + ·OH + OH⁻.',
  }),

  // ─── Lesson 3 · S1 Mechanisms of toxicity ──────────────────────────
  mcq('s3-1-1', 'toxicity-mechanisms', 'Which kind of molecule is attacked most readily by free radicals?', 'Polyunsaturated fatty acids', ['Proteins of the cytoskeleton', 'Nucleic acids in the nucleus', 'Simple sugars like glucose'], {
    explanation: 'Proteins and nucleic acids are less susceptible than PUFAs.',
  }),
  mcq('s3-1-2', 'toxicity-mechanisms', 'What can happen to a cell killed by lethal DNA injury?', 'It is removed by phagocytes', ['It divides more quickly', 'It turns into a stem cell', 'It repairs all of its damaged DNA'], {
    explanation: 'Lethal injury: cell death and removal by phagocytes.',
  }),
  tf({ id: 's3-1-3', conceptId: 'toxicity-mechanisms', statement: 'Free radicals can alter calcium homeostasis in cells.', answer: true, explanation: 'Altered calcium homeostasis is one mechanism of toxicity.' }),
  mcq('s3-1-4', 'toxicity-mechanisms', 'What do radicals do to proteins?', 'Cross-link and fragment them', ['Turn them into lipids', 'Make them water-insoluble starch', 'Join them to DNA in long chains'], {
    explanation: 'Protein damage: cross-linking and fragmentation.',
  }),
  mcq('s3-1-5', 'toxicity-mechanisms', 'Which mechanism of toxicity involves foreign chemicals?', 'Covalent binding of xenobiotics', ['Altered calcium homeostasis in the cell', 'Strand breaks in DNA', 'Lipid peroxidation'], {
    explanation: 'Xenobiotics are foreign chemicals that radicals can bind covalently.',
  }),

  // ─── Lesson 3 · S2 Lipid peroxidation ──────────────────────────────
  mcq('s3-2-1', 'lipid-peroxidation', 'Which stage of lipid peroxidation makes the membrane leaky?', 'Accumulation of lipid peroxides', ['Initiation by a hydroxyl radical attack', 'Termination of the chain', 'Inhibition by tocopherol'], {
    explanation: 'Accumulating peroxides make the membrane leaky to ions.',
  }),
  mcq('s3-2-2', 'lipid-peroxidation', 'In which stage do radicals combine into non-radical products?', 'Termination', ['Initiation', 'Propagation', 'Accumulation'], {
    explanation: 'Termination: LOO· + LOO·, L· + LOO·, L· + L·.',
  }),
  tf({ id: 's3-2-3', conceptId: 'lipid-peroxidation', statement: 'Mannitol and formate inhibit the initiation of lipid peroxidation.', answer: true, explanation: 'Initiation is inhibited by tocopherols, mannitol and formate.' }),
  mcq('s3-2-4', 'lipid-peroxidation', 'Which reaction is part of PROPAGATION?', 'LOO· + LH → L· + LOOH', ['LH + X· → L· + XH', 'L· + L· → stable dimer', 'LOO· + LOO· → non-radical'], {
    explanation: 'Propagation: the peroxyl radical attacks another side chain.',
  }),
  mcq('s3-2-5', 'lipid-peroxidation', 'Why is malondialdehyde dangerous?', 'It forms mutagenic DNA adducts', ['It blocks oxygen uptake in the lungs', 'It removes iron from haemoglobin', 'It digests the cell membrane enzymes'], {
    explanation: 'Malondialdehyde forms DNA adducts — mutagenic and carcinogenic.',
  }),

  // ─── Lesson 3 · S3 DNA damage ──────────────────────────────────────
  mcq('s3-3-1', 'dna-damage', 'Which radical, made near DNA, attacks its bases?', 'The hydroxyl radical', ['The thiyl radical', 'The lipid peroxyl radical', 'Nitric oxide'], {
    explanation: 'Hydroxyl radicals near DNA attack purines and pyrimidines.',
  }),
  mcq('s3-3-2', 'dna-damage', 'Which base becomes 8-hydroxyguanine?', 'Guanine', ['Adenine', 'Cytosine', 'Thymine'], {
    explanation: 'Guanine → 8-hydroxyguanine or ring-opened guanine.',
  }),
  tf({ id: 's3-3-3', conceptId: 'dna-damage', statement: 'Hydroxyl radicals attack both purine and pyrimidine bases.', answer: true, explanation: 'They attack purine and pyrimidine bases.' }),
  mcq('s3-3-4', 'dna-damage', 'What did the estradiol catechol study suggest did NOT cause the DNA damage?', 'Free hydroxyl radicals', ['Localised singlet oxygen', 'A bound reactive species', 'Copper-dependent oxidation'], {
    explanation: 'The damage seemed to come from singlet oxygen or a bound species, not free ·OH.',
    difficulty: 'intermediate',
  }),
  mcq('s3-3-5', 'dna-damage', 'Which two guanine lesions does the lecture describe?', '8-Hydroxyguanine and ring-opened guanine', ['8-Hydroxyadenine and ring-opened cytosine', 'Thymine dimers and deaminated cytosine', 'Methylguanine and oxidised uracil'], {
    explanation: 'Guanine → 8-hydroxyguanine (mutagenic) or ring-opened guanine (halts replication).',
  }),

  // ─── Lesson 3 · S4 Oxidised LDL and atherosclerosis ────────────────
  mcq('s3-4-1', 'oxidised-ldl', 'Which cells take up oxidised LDL avidly, becoming foam cells?', 'Macrophages', ['Neutrophils', 'Red cells', 'Platelets'], {
    explanation: 'Macrophages take it up, enriching themselves in cholesteryl ester.',
  }),
  mcq('s3-4-2', 'oxidised-ldl', 'Which cells does oxidised LDL attract by chemotaxis?', 'Monocytes and T cells', ['Red cells and platelets', 'Neutrophils and mast cells', 'Fibroblasts and osteocytes'], {
    explanation: 'It is chemotactic for monocytes and T cells.',
  }),
  tf({ id: 's3-4-3', conceptId: 'oxidised-ldl', statement: 'Oxidised LDL is immunogenic, eliciting autoantibodies.', answer: true, explanation: 'It elicits autoantibodies and reactive T cells.' }),
  mcq('s3-4-4', 'oxidised-ldl', 'Which lipid enriches foam cells?', 'Cholesteryl ester', ['Phosphatidylcholine', 'Free fatty acids', 'Triacylglycerol'], {
    explanation: 'Foam cells are enriched in cholesteryl ester.',
  }),
  mcq('s3-4-5', 'oxidised-ldl', 'How does oxidised LDL affect coagulation?', 'It induces tissue factor', ['It destroys tissue factor', 'It removes calcium from blood', 'It makes platelets inactive'], {
    explanation: 'It induces tissue factor (coagulation).',
  }),

  // ─── Lesson 4 · S1 What antioxidants are ───────────────────────────
  mcq('s4-1-1', 'antioxidant-action', 'Which kind of tissue is used to measure serum antioxidant activity?', 'A standard brain homogenate', ['A standard liver biopsy', 'A sample of red cell membrane', 'A culture of skin fibroblasts'], {
    explanation: 'Activity is % inhibition of lipid peroxidation in a brain homogenate.',
  }),
  mcq('s4-1-2', 'antioxidant-action', 'What results when radicals outweigh antioxidants?', 'Oxidative stress', ['Reductive stress', 'Anaerobic glycolysis', 'Oxygen debt'], {
    explanation: 'Broken balance → oxidative stress.',
  }),
  tf({ id: 's4-1-3', conceptId: 'antioxidant-action', statement: 'A good antioxidant decays to harmless products.', answer: true, explanation: 'Unreactive as a radical, repaired rapidly, harmless breakdown products.' }),
  mcq('s4-1-4', 'antioxidant-action', 'What are “in vivo” antioxidants?', 'Those the body makes itself', ['Those taken as tablets', 'Those found only in food', 'Those made by the gut bacteria'], {
    explanation: 'The body has its own (in vivo) antioxidants; more can be added from outside.',
  }),
  fill('s4-1-5', 'antioxidant-action', 'An antioxidant neutralises a radical by donating an ____.', ['electron'], {
    explanation: 'It is stable enough to donate an electron.',
  }),

  // ─── Lesson 4 · S2 Modes of action ─────────────────────────────────
  mcq('s4-2-1', 'antioxidant-action', 'Which protein holds iron as a preventive antioxidant?', 'Transferrin', ['Caeruloplasmin', 'Albumin', 'Haptoglobin'], {
    explanation: 'Transferrin binds iron; caeruloplasmin binds copper.',
  }),
  mcq('s4-2-2', 'antioxidant-action', 'In which phase does SOD work?', 'The aqueous phase', ['The lipid membrane phase', 'The gas phase', 'The solid phase'], {
    explanation: 'SOD scavenges initiating radicals in the aqueous phase.',
  }),
  tf({ id: 's4-2-3', conceptId: 'antioxidant-action', statement: 'Albumin can hold copper as an antioxidant.', answer: true, explanation: 'Caeruloplasmin and albumin hold copper.' }),
  mcq('s4-2-4', 'antioxidant-action', 'What is another name for scavenger antioxidants?', 'Chain-breaking antioxidants', ['Preventive antioxidants', 'Binding antioxidants', 'Enzymatic (catalytic) antioxidants'], {
    explanation: 'Scavenger (chain-breaking) antioxidants break the radical chain.',
  }),
  mcq('s4-2-5', 'antioxidant-action', 'Which antioxidant is largely extracellular?', 'Haptoglobin', ['Glutathione', 'Vitamin E', 'Catalase'], {
    explanation: 'Transferrin, lactoferrin, caeruloplasmin, haemopexin, haptoglobin.',
  }),

  // ─── Lesson 4 · S3 Antioxidant enzymes ─────────────────────────────
  mcq('s4-3-1', 'antioxidant-enzymes', 'Which form of SOD is found in the cytoplasm?', 'CuZnSOD', ['MnSOD', 'FeSOD (bacterial)', 'FeSOD'], {
    explanation: 'MnSOD mitochondrial, CuZnSOD cytoplasmic, CuSOD extracellular.',
  }),
  mcq('s4-3-2', 'antioxidant-enzymes', 'Which molecule does glutathione peroxidase use to remove peroxides?', 'Reduced glutathione (GSH)', ['Oxidised glutathione (GSSG)', 'Ascorbate (vitamin C)', 'NADH from glycolysis'], {
    explanation: 'Glutathione peroxidase removes H₂O₂ and lipid peroxides using GSH.',
  }),
  tf({ id: 's4-3-3', conceptId: 'antioxidant-enzymes', statement: 'Glutathione peroxidase is found in red cells.', answer: true, explanation: 'It is in the cytosol, mitochondria and red cells.' }),
  mcq('s4-3-4', 'antioxidant-enzymes', 'Which enzyme acts on superoxide itself?', 'SOD', ['Catalase', 'Glutathione peroxidase', 'Xanthine oxidase'], {
    explanation: 'SOD: O₂·⁻ → H₂O₂; catalase and GPx act on H₂O₂.',
  }),
  mcq('s4-3-5', 'antioxidant-enzymes', 'Put the enzymes in the order they act on a superoxide.', 'SOD → then catalase or glutathione peroxidase', ['Catalase → then SOD', 'Glutathione peroxidase → then SOD', 'Catalase → then glutathione peroxidase → then SOD'], {
    explanation: 'SOD makes H₂O₂, which catalase or GPx then remove.',
  }),

  // ─── Lesson 4 · S4 Vitamins and other antioxidants ─────────────────
  mcq('s4-4-1', 'antioxidant-vitamins', 'Which vitamin neutralises neutrophil oxidants?', 'Ascorbic acid (vitamin C)', ['α-Tocopherol (vitamin E)', 'β-Carotene (provitamin A)', 'Cobalamin (vitamin B12)'], {
    explanation: 'Vitamin C neutralises neutrophil oxidants.',
  }),
  mcq('s4-4-2', 'antioxidant-vitamins', 'Which antioxidant drug class do adenosine and Ca²⁺ channel blockers belong to?', '“NADPH inhibitors”', ['Xanthine oxidase inhibitors', 'Iron chelators', 'Vitamin analogues'], {
    explanation: 'HB slide 45 groups them as “NADPH inhibitors”.',
  }),
  tf({ id: 's4-4-3', conceptId: 'antioxidant-vitamins', statement: 'Coenzyme Q10 is one of the other antioxidants named in the lecture.', answer: true, explanation: 'Glutathione, CoQ10, uric acid and albumin.' }),
  mcq('s4-4-4', 'antioxidant-vitamins', 'Which pair are fat-soluble antioxidant vitamins?', 'Vitamin E and β-carotene', ['Vitamin C and vitamin E', 'Vitamin C and β-carotene', 'Vitamin B12 and vitamin C'], {
    explanation: 'α-Tocopherol and β-carotene are fat-soluble; vitamin C is water-soluble.',
  }),
  tf({ id: 's4-4-5', conceptId: 'antioxidant-vitamins', statement: 'Deferoxamine and apotransferrin work by inhibiting xanthine oxidase.', answer: false, explanation: 'They inhibit iron redox cycling; allopurinol inhibits xanthine oxidase.' }),
  // ─── Lesson 4 · S5 Sources ─────────────────────────────────────────
  mcq('s4-5-1', 'antioxidant-sources', 'Which spice is named among antioxidant foods?', 'Turmeric', ['Cinnamon', 'Pepper', 'Ginger'], {
    explanation: 'Green and yellow vegetables, turmeric, garlic, grapes, tea…',
  }),
  mcq('s4-5-2', 'antioxidant-sources', 'Which minerals are given as antioxidant medicines?', 'Selenium and zinc', ['Sodium and potassium', 'Calcium and magnesium', 'Iron and iodine'], {
    explanation: 'Medicines: vitamins A, C, E; cystine, glutathione, methionine; selenium, zinc.',
  }),
  tf({ id: 's4-5-3', conceptId: 'antioxidant-sources', statement: 'Chocolate contains polyphenolic flavonoids.', answer: true, explanation: 'Flavonoids: berries, green tea, apples, chocolate, red grapes.' }),
  mcq('s4-5-4', 'antioxidant-sources', 'Which animal foods are named as antioxidant sources?', 'Red meat, kidney and liver', ['Fish, eggs and milk', 'Chicken, cheese and butter', 'Pork, shellfish and cream'], {
    explanation: 'The lecture lists red meat, kidney and liver.',
  }),
  mcq('s4-5-5', 'antioxidant-sources', 'Which group of phytochemicals do carrots, tomatoes and mangoes provide?', 'Carotenoids', ['Flavonoids', 'Alkaloids', 'Saponins (soap-like)'], {
    explanation: 'Carotenoids: carrots, tomatoes, greens, mangoes, spinach, legumes, nuts.',
  }),

  // ─── Lesson 5 · S1 Oxidative stress and disease ────────────────────
  mcq('s5-1-1', 'ros-disease', 'Which heart injury is linked to radical chain reactions?', 'Reperfusion injury', ['Congenital valve defects', 'Rheumatic fever scarring', 'Heart block from age'], {
    explanation: 'Chain reactions are linked to reperfusion injury of the heart.',
  }),
  mcq('s5-1-2', 'ros-disease', 'Which metabolic conditions are linked to radical chain reactions?', 'Diabetes, obesity and lipid disorders', ['Gout, scurvy and rickets', 'Anaemia, jaundice and porphyria', 'Goitre, cretinism and adult myxoedema'], {
    explanation: 'HB slide 31 lists diabetes, obesity and lipid disorders.',
  }),
  tf({ id: 's5-1-3', conceptId: 'ros-disease', statement: 'Oxidative stress speeds up ageing.', answer: true, explanation: 'HB slide 52: ageing speeds up.' }),
  mcq('s5-1-4', 'ros-disease', 'How may endogenous radical reactions cause tumours?', 'Like the reactions of ionising radiation', ['By lowering blood glucose levels', 'By blocking all cell division', 'By removing oxygen from the body’s cells'], {
    explanation: 'Endogenous radical reactions, like those of ionising radiation, may cause tumours.',
  }),
  mcq('s5-1-5', 'ros-disease', 'What do peroxides from dietary lipids injure in atherosclerosis?', 'The endothelium', ['The kidney tubules', 'The bone marrow', 'The cornea'], {
    explanation: 'Peroxides formed in the artery wall injure the endothelium.',
  }),

  // ─── Lesson 5 · S2 Carcinogenesis ──────────────────────────────────
  mcq('s5-2-1', 'ros-cancer', 'Which stage of carcinogenesis gives a clinical cancer?', 'Progression', ['Initiation', 'Promotion', 'Reversion (repair)'], {
    explanation: 'Progression → clinical cancer.',
  }),
  mcq('s5-2-2', 'ros-cancer', 'How do antioxidants help in the LATER stages of carcinogenesis?', 'They deactivate genotoxins and tumour promoters', ['They destroy every dividing cell in the body', 'They raise the levels of growth factors', 'They block the immune system’s detection of the cell'], {
    explanation: 'They deactivate genotoxins and promoters and maintain gap junctions.',
  }),
  tf({ id: 's5-2-3', conceptId: 'ros-cancer', statement: 'A transformed cell can revert early on if the immune system corrects it.', answer: true, explanation: 'Early detection and correction can return it to normal.' }),
  mcq('s5-2-4', 'ros-cancer', 'Which DNA damage terms does the lecture use for initiation?', 'Mutagenesis and clastogenesis', ['Transcription and translation', 'Replication and repair', 'Methylation and acetylation'], {
    explanation: 'Radicals damage DNA — mutagenesis and clastogenesis.',
  }),
  mcq('s5-2-5', 'ros-cancer', 'What do radicals activate in the promotion stage?', 'Procarcinogens and tumour promoters', ['Tumour suppressor genes such as Rb', 'DNA repair enzymes', 'Immune T cells'], {
    explanation: 'Promotion: radicals activate procarcinogens and promoters.',
  }),

  // ─── Lesson 5 · S3 HIV ─────────────────────────────────────────────
  mcq('s5-3-1', 'ros-hiv-pregnancy', 'Which supplement reduced HIV expression in infected cells?', 'Glutathione', ['Iron', 'Glucose (dextrose)', 'Sodium'], {
    explanation: 'Glutathione supplementation reduced HIV expression.',
  }),
  mcq('s5-3-2', 'ros-hiv-pregnancy', 'Which ROS crosses membranes easily and promotes viral gene expression?', 'Hydrogen peroxide', ['Superoxide', 'Singlet oxygen (¹O₂)', 'Peroxynitrite'], {
    explanation: 'H₂O₂ crosses membranes easily.',
  }),
  tf({ id: 's5-3-3', conceptId: 'ros-hiv-pregnancy', statement: 'People living with HIV have higher SOD levels than other people.', answer: false, explanation: 'They have lower SOD and glutathione peroxidase.' }),
  mcq('s5-3-4', 'ros-hiv-pregnancy', 'What kind of loop links ROS and cytokines at an HIV infection site?', 'Each releases more of the other', ['Each destroys the other', 'They never interact', 'Cytokines block all ROS at the infection site'], {
    explanation: 'ROS induce cytokines; cytokines release ROS and activate HIV.',
  }),
  mcq('s5-3-5', 'ros-hiv-pregnancy', 'Which oral vitamin has helped in HIV and influenza?', 'Vitamin C', ['Vitamin K', 'Vitamin D', 'Vitamin B1'], {
    explanation: 'Oral vitamin C has helped in HIV, hepatitis, influenza and mononucleosis.',
  }),

  // ─── Lesson 5 · S4 Pregnancy, diabetic embryopathy, Down syndrome ──
  mcq('s5-4-1', 'ros-hiv-pregnancy', 'What should be avoided in normal pregnancy, according to the lecture?', 'Drugs that generate radicals', ['All fruit and vegetables', 'Any kind of physical activity', 'Every source of iron'], {
    explanation: 'No need for antioxidants, but radical-generating drugs should be avoided.',
  }),
  mcq('s5-4-2', 'ros-hiv-pregnancy', 'Which iron and copper carriers rise during pregnancy?', 'Transferrin and caeruloplasmin', ['Ferritin and plasma albumin', 'Haemoglobin and myoglobin', 'Lactoferrin and haptoglobin'], {
    explanation: 'Tocopherol, glutathione peroxidase, caeruloplasmin and transferrin rise.',
  }),
  tf({ id: 's5-4-3', conceptId: 'ros-hiv-pregnancy', statement: 'Antioxidant activity falls during normal pregnancy.', answer: false, explanation: 'It rises progressively: tocopherol, GPx, caeruloplasmin and transferrin.' }),
  mcq('s5-4-4', 'ros-hiv-pregnancy', 'In poorly controlled diabetes, how does a glucose load harm the embryo?', 'It speeds electron flow and radical leakage', ['It blocks all oxygen from reaching the embryo', 'It destroys the placenta at once', 'It stops the embryo’s heart'], {
    explanation: 'A glucose load accelerates mitochondrial electron flow and radical leakage.',
  }),
  mcq('s5-4-5', 'ros-hiv-pregnancy', 'Which condition linked to maternal age may involve radicals?', 'Down syndrome', ['Cystic fibrosis', 'Haemophilia A', 'Phenylketonuria'], {
    explanation: 'Radicals may play a role in Down syndrome.',
  }),

  // ─── Lesson 5 · S5 Transplantation and measurement ─────────────────
  mcq('s5-5-1', 'ros-transplant', 'Which antioxidant reduced acute renal failure in kidney transplants?', 'SOD', ['Iron', 'Glucose', 'Insulin'], {
    explanation: 'SOD reduced acute renal failure in renal transplants.',
  }),
  mcq('s5-5-2', 'ros-transplant', 'Which antioxidant biomarker is an enzyme that breaks down H₂O₂?', 'Catalase', ['Malondialdehyde', 'Total nitric oxide', 'Hydrogen peroxide'], {
    explanation: 'Catalase is an antioxidant biomarker; the others are oxidative.',
  }),
  tf({ id: 's5-5-3', conceptId: 'ros-transplant', statement: 'In the US, antioxidant therapy before bypass and kidney transplant has become routine.', answer: true, explanation: 'HB slides 65–67.' }),
  mcq('s5-5-4', 'ros-transplant', 'Why do transplant organs risk ischaemia–reperfusion injury?', 'They suffer long hypoxia before blood returns', ['They are kept too warm in storage before surgery', 'They contain too many antioxidants', 'They are rejected by the immune system'], {
    explanation: 'Long hypoxia, then reperfusion triggered by xanthine oxidase.',
  }),
  mcq('s5-5-5', 'ros-transplant', 'Which ratio is an antioxidant biomarker?', 'GSH/GSSG', ['MDA/H₂O₂', 'NO/O₂', 'Fe²⁺/Fe³⁺'], {
    explanation: 'The GSH/GSSG ratio is on the antioxidant side.',
  }),
  ...newSections(),
];

// Five questions for each reading section added from the 2026 deck (2026-11-10).
function newSections(): Q[] {
  return [
    // ─── Lesson 1 · Not all bad: the useful side of reactive species ───
    mcq('s1-useful-1', 'redox-biology', 'Which reactive species do neutrophils use in host defence?', 'Superoxide and HOCl', ['Nitric oxide and urate', 'Singlet oxygen and bilirubin', 'Hydroxyl radicals and vitamin C'], { explanation: '2026 slide 54: superoxide and HOCl in the respiratory burst.' }),
    mcq('s1-useful-2', 'redox-biology', 'Which reactive species acts as a second messenger in cell signalling?', 'Hydrogen peroxide', ['Hydroxyl radical (·OH)', 'Peroxynitrite', 'Singlet oxygen'], { explanation: '2026 slide 54.' }),
    mcq('s1-useful-3', 'redox-biology', 'Which reactive species regulates vascular tone?', 'Nitric oxide (NO·)', ['Superoxide (O₂·⁻)', 'Hypochlorous acid (HOCl)', 'Hydroxyl radical (·OH)'], { explanation: '2026 slide 54.' }),
    tf({ id: 's1-useful-4', conceptId: 'redox-biology', statement: 'High concentrations of H₂O₂ induce apoptosis.', answer: true, explanation: '2026 slide 33: low concentrations promote survival.' }),
    fill('s1-useful-5', 'redox-biology', 'The study of the useful roles of reactive species at physiological levels is called redox ____.', ['biology'], { explanation: '2026 slide 54.' }),

    // ─── Lesson 2 · How radicals form ──────────────────────────────────
    mcq('s2-form-1', 'radical-formation', 'What forms when a non-radical loses a single electron?', 'A radical cation', ['A radical anion', 'A neutral molecule', 'A hydride ion'], { explanation: '2026 slide 8: X − e⁻ → X·⁺.' }),
    mcq('s2-form-2', 'radical-formation', 'In homolytic fission of a covalent bond, the two shared electrons…', 'Split, one going to each atom', ['Both go to the more electronegative atom', 'Both stay between the atoms as before', 'Are lost from the molecule as light'], { explanation: '2026 slide 8.' }),
    mcq('s2-form-3', 'radical-formation', 'Radiolysis of water by ionising radiation gives…', 'H· and ·OH', ['H⁺ and OH⁻', 'H₂ and O₂', 'H₂O₂ and H₂'], { explanation: '2026 slide 8.' }),
    mcq('s2-form-4', 'radical-formation', 'How many electrons does a hydroxyl radical have, and how many are unpaired?', 'Nine, one unpaired', ['Eight, none unpaired', 'Ten, two unpaired', 'Nine, three unpaired'], { explanation: '2026 slide 8: nine electrons, four pairs and one unpaired.' }),
    tf({ id: 's2-form-5', conceptId: 'radical-formation', statement: 'The hydrogen radical (H·) carries a positive charge.', answer: false, explanation: '2026 slide 8: one proton, one electron, no charge.' }),

    // ─── Lesson 2 · Nitric oxide and peroxynitrite ─────────────────────
    mcq('s2-no-1', 'nitric-oxide-peroxynitrite', 'Which enzyme makes nitric oxide?', 'Nitric oxide synthase', ['Xanthine oxidase', 'NADPH oxidase', 'Soluble guanylate cyclase'], { explanation: '2026 slide 59.' }),
    mcq('s2-no-2', 'nitric-oxide-peroxynitrite', 'Nitric oxide stimulates which enzyme in blood vessels?', 'Guanylate cyclase', ['Adenylate cyclase', 'Phospholipase C', 'Xanthine oxidase'], { explanation: '2026 slide 59: with protein kinases.' }),
    mcq('s2-no-3', 'nitric-oxide-peroxynitrite', 'How does nitric oxide take part in redox regulation?', 'By nitrosylating proteins', ['By phosphorylating DNA', 'By methylating lipids', 'By hydrolysing ATP in the cytosol'], { explanation: '2026 slide 59.' }),
    mcq('s2-no-4', 'nitric-oxide-peroxynitrite', 'Peroxynitrite’s reactivity is described as similar to that of…', 'Hypochlorous acid', ['Molecular oxygen', 'Reduced glutathione', 'Ascorbic acid'], { explanation: '2026 slide 59.' }),
    tf({ id: 's2-no-5', conceptId: 'nitric-oxide-peroxynitrite', statement: 'Peroxynitrite is a free radical.', answer: false, explanation: '2026 slide 7: it is a reactive species, but not a radical; protonated, it splits into radicals.', skill: 'misconception' }),

    // ─── Lesson 3 · Protein damage ─────────────────────────────────────
    mcq('s3-protein-1', 'protein-damage', 'Which chemical groups in proteins are easily oxidised by reactive species?', 'Thiol groups', ['Amide groups', 'Peptide bonds', 'Carboxyl groups'], { explanation: '2026 slide 23.' }),
    mcq('s3-protein-2', 'protein-damage', 'Why can surface methionine residues protect a protein?', 'They act as sinks that soak up reactive species', ['They hold the iron that catalyses the Fenton reaction', 'They make the protein too large for radicals to reach', 'They are cut off as soon as radicals appear'], { explanation: '2026 slide 23.' }),
    multi('s3-protein-3', 'protein-damage', 'Which oxidise methionine to methionine sulphoxide? Select all that apply.', ['·OH', '¹O₂', 'HOCl', 'ONOOH'], ['Vitamin C'], { explanation: '2026 slide 23 (also HOBr).' }),
    mcq('s3-protein-4', 'protein-damage', 'Which secondary products of lipid peroxidation damage proteins?', 'MDA and HNE', ['GSH and GSSG', 'ATP and ADP', 'NAD⁺ and NADH'], { explanation: '2026 slide 23.' }),
    multi('s3-protein-5', 'protein-damage', 'Which can oxidative protein damage impair? Select all that apply.', ['Receptors', 'Antibodies', 'Enzymes', 'Transport proteins'], ['Dietary starch'], { explanation: '2026 slide 24.' }),

    // ─── Lesson 3 · What happens to damaged DNA ────────────────────────
    mcq('s3-dnafate-1', 'dna-repair-outcomes', 'Which enzyme removes uracil from DNA, leaving an abasic site?', 'Uracil DNA glycosylase (UNG)', ['Apurinic endonuclease 1 (APE1)', 'DNA ligase I', 'Telomerase'], { explanation: '2026 slide 37.' }),
    mcq('s3-dnafate-2', 'dna-repair-outcomes', 'If a deaminated cytosine (now uracil) is simply copied, what does a daughter cell get in place of G·C?', 'An A·T pair', ['A C·G pair', 'A G·U pair', 'No base at all'], { explanation: '2026 slide 37: the uracil is read as thymine.' }),
    mcq('s3-dnafate-3', 'dna-repair-outcomes', 'Which mismatch repair proteins recognise the mismatch in the 2026 figure?', 'MSH2–MSH6', ['BRCA1–BRCA2', 'Ku70–Ku80', 'XPA–XPC'], { explanation: '2026 slide 37: MutS homologues 2 and 6, with exonuclease I.' }),
    mcq('s3-dnafate-4', 'dna-repair-outcomes', 'Which type of DNA damage is caused by UV irradiation?', 'Thymine dimers', ['Strand breaks', 'Depurination', 'Microsatellite variation'], { explanation: '2026 slide 38: X-irradiation causes strand breaks; heat causes depurination.' }),
    multi('s3-dnafate-5', 'dna-repair-outcomes', 'Which repair double-strand breaks? Select all that apply.', ['Non-homologous end joining (NHEJ)', 'Homology-directed repair (HDR)'], ['Removal of the break by catalase'], { explanation: '2026 slide 38.' }),

    // ─── Lesson 4 · Principles of antioxidant defence ──────────────────
    mcq('s4-principles-1', 'antioxidant-principles', 'What is the simplest antioxidant defence of all?', 'Minimising exposure to oxygen', ['Eating vitamin C every day', 'Making more superoxide dismutase', 'Binding all the iron to ferritin'], { explanation: '2026 slide 28.' }),
    mcq('s4-principles-2', 'antioxidant-principles', 'Carotenoids such as lycopene protect against singlet oxygen by acting as…', 'Physical quenchers', ['Sacrificial agents', 'Metal chelators', 'Catalytic enzymes'], { explanation: '2026 slide 26.' }),
    multi('s4-principles-3', 'antioxidant-principles', 'Which act as sacrificial agents? Select all that apply.', ['GSH', 'α-Tocopherol', 'Ascorbate'], ['Catalase'], { explanation: '2026 slide 27.' }),
    mcq('s4-principles-4', 'antioxidant-principles', 'Keeping iron ions away from H₂O₂ is an example of…', 'Compartmentalisation', ['Physical quenching of ¹O₂', 'Catalytic removal', 'Sacrificial defence'], { explanation: '2026 slide 27.' }),
    mcq('s4-principles-5', 'antioxidant-principles', 'Which proteins minimise the availability of pro-oxidants such as iron, copper or haem?', 'Transferrins, albumin and metallothionein', ['Catalase, SOD and glutathione peroxidase', 'Chaperones and proteins that coat DNA', 'Uncoupling proteins of the mitochondria'], { explanation: '2026 slide 26.' }),

    // ─── Lesson 4 · Protecting red cells: NADPH and glutathione ────────
    mcq('s4-redcell-1', 'antioxidant-network', 'Which enzyme returns methaemoglobin to haemoglobin?', 'Methaemoglobin reductase', ['Glutathione reductase', 'Haem oxygenase in the red cell', 'Superoxide dismutase'], { explanation: '2026 slide 29: using NADH (or NADPH).' }),
    mcq('s4-redcell-2', 'antioxidant-network', 'Which enzyme regenerates reduced glutathione (GSH) from GSSG?', 'Glutathione reductase', ['Glutathione peroxidase', 'Glutathione S-transferase', 'Thioredoxin reductase'], { explanation: '2026 slides 3, 29: using NADPH.' }),
    multi('s4-redcell-3', 'antioxidant-network', 'Which remove hydrogen peroxide in red cells? Select all that apply.', ['Catalase', 'Glutathione peroxidase', 'Peroxiredoxins'], ['Methaemoglobin reductase'], { explanation: '2026 slide 29.' }),
    mcq('s4-redcell-4', 'antioxidant-network', 'Which enzyme of the pentose phosphate pathway supplies NADPH for glutathione reductase?', 'Glucose 6-phosphate dehydrogenase', ['Glyceraldehyde 3-phosphate dehydrogenase', 'Lactate dehydrogenase', 'Pyruvate kinase'], { explanation: '2026 slide 3.' }),
    tf({ id: 's4-redcell-5', conceptId: 'antioxidant-network', statement: 'Reduced glutathione keeps the cysteine thiol groups of enzymes reduced, reactivating enzymes inactivated by oxidative stress.', answer: true, explanation: '2026 slide 3.' }),

    // ─── Lesson 4 · Stopping lipid peroxidation: antioxidants as a team ─
    mcq('s4-team-1', 'chain-breaking', 'What does vitamin E become after it neutralises a lipid peroxyl radical?', 'The α-tocopheroxyl radical', ['Dehydroascorbate (DHA)', 'A stable lipid hydroperoxide', 'Oxidised glutathione'], { explanation: '2026 slides 22, 30.' }),
    mcq('s4-team-2', 'chain-breaking', 'Which molecules regenerate vitamin E from its radical?', 'Vitamin C or ubiquinol', ['Catalase or SOD', 'Iron or copper ions', 'Malondialdehyde or HNE'], { explanation: '2026 slide 22.' }),
    mcq('s4-team-3', 'chain-breaking', 'What does GPx4 turn lipid hydroperoxides (LOOH) into?', 'Harmless lipid alcohols (LOH)', ['Alkoxyl radicals (LO·)', 'Peroxyl radicals (LOO·)', 'Conjugated dienes in the membrane'], { explanation: '2026 slide 22.' }),
    mcq('s4-team-4', 'chain-breaking', 'Without GPx4, iron turns lipid hydroperoxides into alkoxyl radicals, leading to a cell death called…', 'Ferroptosis', ['Necroptosis', 'Pyroptosis', 'Autophagy'], { explanation: '2026 slide 22.' }),
    mcq('s4-team-5', 'chain-breaking', 'What does PON1 do?', 'Hydrolyses lipid hydroperoxides; protects LDL', ['Reduces vitamin E radicals back to vitamin E', 'Chelates the free iron that makes ·OH', 'Makes NADPH for glutathione reductase'], { explanation: '2026 slide 22.' }),

    // ─── Lesson 5 · Cause or consequence? ──────────────────────────────
    mcq('s5-cause-1', 'cause-or-consequence', 'Which disorder does the 2026 lecture say can sometimes be caused by oxidative stress?', 'Cancer', ['A broken bone', 'Haemophilia A', 'Colour blindness'], { explanation: '2026 slide 35.' }),
    multi('s5-cause-2', 'cause-or-consequence', 'Which kinds of injury lead to oxidative stress? Select all that apply.', ['Heat', 'Trauma', 'Freezing', 'Radiation'], ['Restful sleep'], { explanation: '2026 slide 62.' }),
    mcq('s5-cause-3', 'cause-or-consequence', 'After tissue injury, phospholipase A₂ releases which substrate for prostaglandin and leukotriene synthesis?', 'Arachidonic acid', ['Linoleic acid', 'Palmitic acid', 'Eicosapentaenoic acid'], { explanation: '2026 slide 62.' }),
    mcq('s5-cause-4', 'cause-or-consequence', 'Haem proteins released from damaged cells can scavenge which molecule, reducing its antioxidant effects?', 'Nitric oxide', ['Vitamin E', 'Glucose', 'Ascorbic acid'], { explanation: '2026 slide 62.' }),
    tf({ id: 's5-cause-5', conceptId: 'cause-or-consequence', statement: 'Tissue injury can lower the levels of GSH and ascorbate.', answer: true, explanation: '2026 slide 62.' }),

    // ─── Lesson 5 · Cancer: p53 and the lung ───────────────────────────
    mcq('s5-p53-1', 'p53-lung-cancer', 'After mild, reversible damage, normal p53 switches on…', 'Antioxidant genes, lowering ROS', ['Pro-oxidant genes, raising ROS', 'Oncogenes, speeding cell division', 'Nothing, because p53 stays inactive'], { explanation: '2026 slide 47.' }),
    mcq('s5-p53-2', 'p53-lung-cancer', 'After extended stress or irreparable damage, abundant p53…', 'Raises ROS to eliminate the damaged cell', ['Lowers ROS so the damaged cell survives', 'Stops making any protein in the cell', 'Turns the cell into a stem cell'], { explanation: '2026 slide 47.' }),
    mcq('s5-p53-3', 'p53-lung-cancer', 'What happens when p53 is mutant?', 'ROS rise and mutations accumulate', ['ROS fall and the cell dies at once', 'DNA repair becomes faster', 'The cell can no longer divide'], { explanation: '2026 slide 47: tumorigenesis.' }),
    multi('s5-p53-4', 'p53-lung-cancer', 'Which are endogenous sources of oxidants in lung carcinogenesis? Select all that apply.', ['The respiratory chain', 'Xanthine oxidase', 'P450 oxidase', 'The cyclooxygenase pathway'], ['Tobacco smoke'], { explanation: '2026 slide 48.' }),
    mcq('s5-p53-5', 'p53-lung-cancer', 'In cancer, ROS help tumours evade immunity by…', 'Killing cytotoxic T cells and NK cells', ['Making more antibodies against the tumour', 'Raising the number of activated macrophages', 'Increasing MHC class I on the tumour cells'], { explanation: '2026 slide 63: and recruiting immunosuppressive cells.' }),

    // ─── Lesson 5 · Biomarkers of oxidative damage ─────────────────────
    mcq('s5-markers-1', 'oxidative-biomarkers', 'Isoprostanes are biomarkers of oxidative damage to…', 'Lipids', ['DNA', 'Proteins', 'Carbohydrates'], { explanation: '2026 slide 53.' }),
    mcq('s5-markers-2', 'oxidative-biomarkers', 'Aldehyde–DNA base adducts are measured in…', 'Cells and urine', ['Hair and nails', 'Saliva only', 'Sweat and tears'], { explanation: '2026 slide 53.' }),
    multi('s5-markers-3', 'oxidative-biomarkers', 'Which are biomarkers of protein damage? Select all that apply.', ['–SH oxidation', 'Carbonyl formation', 'Nitrated tyrosine', 'Protein peroxides'], ['Isoprostanes'], { explanation: '2026 slide 53.' }),
    mcq('s5-markers-4', 'oxidative-biomarkers', 'Nitrated, chlorinated or brominated tyrosine marks damage to…', 'Proteins', ['Lipids', 'DNA', 'Glycogen'], { explanation: '2026 slide 53.' }),
    tf({ id: 's5-markers-5', conceptId: 'oxidative-biomarkers', statement: 'Deaminated and chlorinated bases in cells and urine are biomarkers of lipid damage.', answer: false, explanation: '2026 slide 53: they mark DNA damage.' }),

    // ─── Lesson 6 · Atherosclerosis ────────────────────────────────────
    mcq('s6-athero-1', 'atherosclerosis-ros', 'What do foam cells secrete that amplifies inflammation in the lesion?', 'Pro-inflammatory cytokines', ['Anti-inflammatory steroids', 'Antioxidant enzymes', 'Clotting inhibitors'], { explanation: '2026 slide 40.' }),
    mcq('s6-athero-2', 'atherosclerosis-ros', 'Which cells mature into macrophages and then foam cells in the intima?', 'Monocytes', ['Neutrophils', 'Platelets', 'Fibroblasts'], { explanation: '2026 slides 41–42.' }),
    multi('s6-athero-3', 'atherosclerosis-ros', 'Which appear in a progressing plaque in the 2026 figure? Select all that apply.', ['Migrating and dividing smooth muscle cells', 'Cholesterol crystals', 'Apoptotic macrophages', 'Small vessels (vasa vasorum)'], ['Cartilage cells'], { explanation: '2026 slide 42.' }),
    mcq('s6-athero-4', 'atherosclerosis-ros', 'Heart failure linked to reactive species involves…', 'Cardiomyocyte apoptosis and less ATP', ['More ATP and stronger contraction of the heart', 'Faster healing of the heart muscle after injury', 'Loss of all the heart valves at once'], { explanation: '2026 slide 63: also mitochondrial damage and fibrosis.' }),
    tf({ id: 's6-athero-5', conceptId: 'atherosclerosis-ros', statement: 'In myocardial infarction, reactive species damage cardiomyocytes through ischaemia–reperfusion injury.', answer: true, explanation: '2026 slide 63.' }),

    // ─── Lesson 6 · Ischaemia–reperfusion injury ───────────────────────
    mcq('s6-iri-1', 'iri-mechanism', 'In the ischaemic cell, what does anaerobic metabolism do to the pH?', 'Lowers it (acidification)', ['Raises it (alkalosis)', 'Leaves it unchanged', 'Makes it swing up and down'], { explanation: '2026 slide 44: glucose → pyruvate → lactate.' }),
    mcq('s6-iri-2', 'iri-mechanism', 'Which ions build up in the cytosol during ischaemia through the two exchangers?', 'Na⁺ and then Ca²⁺', ['K⁺ and then Mg²⁺', 'Cl⁻ and then HCO₃⁻', 'Fe²⁺ and then Cu⁺'], { explanation: '2026 slide 44.' }),
    mcq('s6-iri-3', 'iri-mechanism', 'Deamination in the ATP breakdown pathway turns adenosine into…', 'Inosine', ['Guanosine', 'Xanthine', 'Uridine'], { explanation: '2026 slide 43.' }),
    mcq('s6-iri-4', 'iri-mechanism', 'What does xanthine oxidase produce when reperfusion restores O₂?', 'Superoxide, H₂O₂, xanthine and urate', ['Glucose, lactate and pyruvate', 'Nitric oxide and citrulline', 'Glutathione, NADPH and reduced vitamin C'], { explanation: '2026 slide 43.' }),
    mcq('s6-iri-5', 'iri-mechanism', 'What triggers ischaemia of the heart or brain in the 2026 lecture?', 'Plaque rupture, then thrombosis blocking an artery', ['Breathing pure oxygen at sea level for a few minutes', 'A diet rich in fresh fruit and vegetables', 'Normal exercise of a healthy person'], { explanation: '2026 slide 43.' }),

    // ─── Lesson 6 · Obesity and diabetes ───────────────────────────────
    mcq('s6-diabetes-1', 'obesity-diabetes-ros', 'Obesity is associated with increased oxidative damage to…', 'Lipids and proteins', ['Bone and cartilage only', 'Hair and skin only', 'No molecules at all'], { explanation: '2026 slide 39.' }),
    mcq('s6-diabetes-2', 'obesity-diabetes-ros', 'Which tissue releases IL-6 and TNF-α, linking obesity to oxidative stress?', 'White adipose tissue', ['Brown adipose tissue', 'Skeletal muscle', 'Red bone marrow'], { explanation: '2026 slide 39.' }),
    multi('s6-diabetes-3', 'obesity-diabetes-ros', 'Through which does oxidative stress link to diabetes? Select all that apply.', ['β-Cell dysfunction', 'Insulin resistance', 'Vascular complications'], ['More antioxidant enzymes in β-cells'], { explanation: '2026 slide 55.' }),
    mcq('s6-diabetes-4', 'obesity-diabetes-ros', 'Which diabetic complication involves activation of HIF-1α and VEGF and new vessel formation?', 'Diabetic retinopathy', ['Diabetic neuropathy', 'Diabetic nephropathy', 'Diabetic foot ulcer'], { explanation: '2026 slide 65.' }),
    mcq('s6-diabetes-5', 'obesity-diabetes-ros', 'Diabetic nephropathy shows glomerular hypertrophy, tubulointerstitial fibrosis and…', 'Mesangial expansion', ['Retinal haemorrhage', 'Lewy body formation', 'Thymine dimer formation'], { explanation: '2026 slide 65.' }),

    // ─── Lesson 6 · Alzheimer's, Parkinson's and the brain ─────────────
    mcq('s6-brain-1', 'neurodegeneration-ros', 'Which caspases does the 2026 figure name for apoptosis after mitochondrial damage?', 'Caspases 3 and 9', ['Caspases 1 and 11', 'Caspases 2 and 6', 'Caspases 8 and 10'], { explanation: '2026 slide 49.' }),
    mcq('s6-brain-2', 'neurodegeneration-ros', 'Which system fails to handle misfolded proteins in neurodegeneration?', 'The ubiquitin–proteasome system', ['The renin–angiotensin–aldosterone system', 'The complement system', 'The kallikrein–kinin system'], { explanation: '2026 slide 49.' }),
    mcq('s6-brain-3', 'neurodegeneration-ros', 'Which free radicals does the 2026 table list for Parkinson’s disease?', 'Hydroxyl radicals and H₂O₂', ['Superoxide and RNS only', 'Singlet oxygen and HOCl', 'Thiyl and alkoxyl radicals'], { explanation: '2026 slide 64.' }),
    mcq('s6-brain-4', 'neurodegeneration-ros', 'Huntington’s disease damages which neurons, and impairs what?', 'Motor neurons; axonal transport', ['Sensory neurons; myelin synthesis', 'Retinal cells; light detection', 'Hair cells; hearing'], { explanation: '2026 slide 64.' }),
    mcq('s6-brain-5', 'neurodegeneration-ros', 'In multiple sclerosis, which cells does oxidative stress activate?', 'Microglia and astrocytes', ['Platelets and red cells', 'Hepatocytes and Kupffer cells', 'Osteoblasts and osteoclasts'], { explanation: '2026 slide 64.' }),

    // ─── Lesson 6 · Free radicals and ageing ───────────────────────────
    mcq('s6-ageing-1', 'ageing-theory', 'Harman’s theory says ageing results from…', 'Random, cumulative damage to tissues by free radicals', ['A fixed number of cell divisions, set for each cell at birth', 'Loss of all antioxidant vitamins at age forty', 'A single gene that switches the body off'], { explanation: '2026 slide 51.' }),
    mcq('s6-ageing-2', 'ageing-theory', 'Which pathway is the 2026 lecture’s example of inappropriate signalling by reactive species?', 'The insulin pathway', ['The Wnt pathway', 'The Notch pathway', 'The Hedgehog pathway'], { explanation: '2026 slide 51.' }),
    tf({ id: 's6-ageing-3', conceptId: 'ageing-theory', statement: 'Reactive species can only promote inflammation, never suppress it.', answer: false, explanation: '2026 slide 52: they may promote or suppress inflammation.', skill: 'misconception' }),
    mcq('s6-ageing-4', 'ageing-theory', 'Which cells does the lecture single out when reactive species promote apoptosis or senescence?', 'Stem cells', ['Red cells', 'Fat cells', 'Mast cells'], { explanation: '2026 slide 51: impairing tissue renewal.' }),
    mcq('s6-ageing-5', 'ageing-theory', 'Which could have complex, linked effects on lifespan and health span?', 'Genetic or epigenetic changes in ROS handling', ['Differences in blood group between healthy people', 'Changes in eye colour after childhood', 'The number of fingers on each hand'], { explanation: '2026 slide 52: changes in ROS production, defences, targets or repair.' }),
  ];
}
