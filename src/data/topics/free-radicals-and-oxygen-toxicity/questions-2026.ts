// Biochemistry → Free Radicals and Oxygen Toxicity — bank questions from the
// 2026 deck, "Free Radicals & Reactive Oxygen Species" (owner, 2026-11-10).
//
// Same rules as questions.ts: only what the lessons teach. Not asked: the
// deck's open discussion questions (slides 27, 35, 49, 51), its speaker notes
// (figure legends), or points the decks disagree on. The deck's own quiz
// slides (12, 33, 45, 50) are used where the answer follows from its slides.
// IDs: qN-41 onwards (lessons 1–5) and q6-xx (lesson 6).
import { fill, match, mcq, multi, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/free-radicals-and-oxygen-toxicity/sources';

type Q = QuestionDraft<ConceptId>;

const lesson1: Q[] = [
  mcq('q1-41', 'reactive-species', 'Which statement about ROS and oxygen radicals is correct?', 'All oxygen radicals are ROS, but not all ROS are radicals', ['All ROS are radicals, but not all oxygen radicals are ROS', 'ROS and oxygen radicals are two names for one group', 'No oxygen radical is counted as a reactive oxygen species'], { explanation: '2026 slide 4.', skill: 'terminology' }),
  multi('q1-42', 'reactive-species', 'Besides oxygen, which reactive species does the 2026 lecture name? Select all that apply.', ['Reactive nitrogen species', 'Reactive chlorine species', 'Reactive bromine species', 'Reactive iron species', 'Reactive sulphur species'], ['Reactive neon species'], { explanation: '2026 slide 7.' }),
  mcq('q1-43', 'ros-terms', 'In the 2026 lecture, oxidative stress is defined as…', 'An imbalance between ROS generation and their detoxification', ['A rise in the delivery of oxygen to the tissues during heavy exercise', 'The use of oxygen to make ATP in the mitochondria', 'A fall in blood oxygen caused by disease of the lungs'], { explanation: '2026 slide 5.', skill: 'terminology' }),
  mcq('q1-44', 'ros-terms', 'The biomolecular damage caused by reactive species attacking the constituents of living organisms is called…', 'Oxidative damage', ['Oxygen toxicity', 'Oxidative phosphorylation', 'Redox signalling'], { explanation: '2026 slide 5.', skill: 'terminology' }),
  mcq('q1-45', 'ros-terms', 'The 2026 lecture describes oxygen toxicity as cell and tissue injury caused by…', 'Excess oxygen, through radicals that overwhelm the defences', ['Too little oxygen reaching the tissues for a long time', 'Carbon monoxide binding to haemoglobin in place of oxygen', 'Nitrogen bubbles forming in the blood after a deep dive'], { explanation: '2026 slide 5.', skill: 'terminology' }),
  tf({ id: 'q1-46', conceptId: 'radical-sources', statement: 'Lysosomes, cell membranes, mitochondria, the nucleus and the cytoplasm can all be cellular sources of free radicals.', answer: true, explanation: '2026 slides 10, 12; HB slide 7.' }),
  mcq('q1-47', 'ischaemia-reperfusion', 'In activated neutrophils and macrophages, which enzyme makes the superoxide that goes on to H₂O₂ and HOCl?', 'NADPH oxidase', ['Xanthine dehydrogenase', 'Nitric oxide synthase', 'Glutathione reductase'], { explanation: '2026 slide 60.' }),
  mcq('q1-48', 'radical-sources', 'Which enzyme makes NO, which can react to form other reactive nitrogen species?', 'Nitric oxide synthase', ['Cytochrome P450 reductase', 'Xanthine dehydrogenase', 'Prostaglandin synthase'], { explanation: '2026 slide 60.' }),
  mcq('q1-49', 'radical-sources', 'Peroxisomes produce hydrogen peroxide during…', 'Fatty acid oxidation', ['Glycogen breakdown', 'Protein synthesis', 'Cholesterol transport'], { explanation: '2026 slide 60.' }),
  multi('q1-50', 'radical-sources', 'Which does the 2026 lecture list as exogenous sources of free radicals? Select all that apply.', ['UV radiation', 'Ionising radiation', 'Tobacco smoke', 'Pollution', 'Chemicals and drugs'], ['Mitochondrial respiration'], { explanation: '2026 slide 11.' }),
  mcq('q1-51', 'radical-sources', 'Which system makes free radicals while metabolising and detoxifying drugs?', 'Cytochrome P450', ['Glutathione reductase', 'The urea cycle in the liver', 'Superoxide dismutase'], { explanation: '2026 slide 60.' }),
  mcq('q1-52', 'redox-biology', 'Low H₂O₂ activates MAPK signalling and helps cells survive; high H₂O₂ induces apoptosis. This shows that…', 'ROS have concentration-dependent effects', ['Free radicals are always harmful to cells', 'Antioxidants completely suppress ROS signalling', 'Hydrogen peroxide is not a reactive oxygen species'], { explanation: '2026 slide 33.', skill: 'application' }),
];

const lesson2: Q[] = [
  mcq('q2-41', 'radical-reactions', 'The hydroxyl radical oxidises the sedative promethazine. What does promethazine become?', 'A radical cation', ['A radical anion', 'A stable non-radical dimer', 'A lipid hydroperoxide'], { explanation: '2026 slide 14: PR + ·OH → PR·⁺ + OH⁻.' }),
  mcq('q2-42', 'radical-reactions', 'When ·OH adds on to guanine at position 8, the first product is…', 'A radical', ['A stable, repaired base', 'A molecule of water', 'A peroxynitrite ion'], { explanation: '2026 slide 13.' }),
  mcq('q2-43', 'radical-reactions', 'A radical acting as a reducing agent (X· + Y → X⁺ + Y·⁻)…', 'Gives its unpaired electron to the recipient', ['Takes a hydrogen atom from the recipient', 'Adds on to the recipient to form one radical', 'Pairs with the recipient’s unpaired electron'], { explanation: '2026 slide 13.' }),
  mcq('q2-44', 'major-ros', 'In the 2026 table, hydrogen peroxide is harmful to cells even at about…', '10 µM', ['10 mM', '1 M', '100 mM'], { explanation: '2026 slide 59.' }),
  tf({ id: 'q2-45', conceptId: 'major-ros', statement: 'Hydrogen peroxide readily diffuses across membranes.', answer: true, explanation: '2026 slide 59.' }),
  mcq('q2-46', 'major-ros', 'Which is the simplest peroxyl radical, formed when superoxide is protonated?', 'The perhydroxyl radical (HOO·)', ['The hydroxyl radical (·OH)', 'The alkoxyl radical (RO·)', 'The trichloromethyl radical (CCl₃·)'], { explanation: '2026 slide 59.' }),
  multi('q2-47', 'major-ros', 'With the help of which enzymes is superoxide generated? Select all that apply.', ['Cyclooxygenase', 'Lipoxygenase', 'Xanthine oxidase', 'NADPH oxidase'], ['Catalase'], { explanation: '2026 slide 59.' }),
  fill('q2-48', 'fenton-haber-weiss', 'Like Fe²⁺, the copper ion ____ reacts with H₂O₂ to give a hydroxyl radical.', ['Cu+', 'Cu⁺', 'cuprous', 'cuprous ion', 'copper(I)', 'copper I'], { explanation: '2026 slide 9: Cu⁺ + H₂O₂ → Cu²⁺ + ·OH + OH⁻.' }),
  mcq('q2-49', 'fenton-haber-weiss', 'In the metal cycle, what returns the oxidised metal (Mⁿ⁺¹) to its reduced form?', 'Superoxide, in the Haber–Weiss reaction', ['Hydrogen peroxide, in the Fenton reaction', 'Catalase, in the red blood cells', 'Oxygen, in the respiratory chain'], { explanation: '2026 slide 9.' }),
  mcq('q2-50', 'nitric-oxide-peroxynitrite', 'Nitric oxide synthase converts L-arginine into…', 'L-Citrulline', ['L-Ornithine', 'L-Glutamine', 'Urea and ammonia'], { explanation: '2026 slide 59.' }),
  match('q2-51', 'nitric-oxide-peroxynitrite', 'Match each NOS isoform to its name.', [
    ['nNOS', 'Neuronal'],
    ['eNOS', 'Endothelial'],
    ['iNOS', 'Inducible'],
  ], { explanation: '2026 slide 59.' }),
  mcq('q2-52', 'nitric-oxide-peroxynitrite', 'Protonated peroxynitrite (ONOOH) breaks down into…', '·OH and ·NO₂', ['H₂O₂ and NO·', 'O₂·⁻ and NO·', 'HOCl and NO₃⁻'], { explanation: '2026 slide 7.' }),
  tf({ id: 'q2-53', conceptId: 'nitric-oxide-peroxynitrite', statement: 'Nitric oxide diffuses easily through the cytoplasm and plasma membrane because it is soluble in both water and lipid.', answer: true, explanation: '2026 slide 59.' }),
  mcq('q2-54', 'radical-formation', 'A molecule that gains a single electron becomes a…', 'Radical anion', ['Radical cation', 'Stable cation', 'Neutral dimer'], { explanation: '2026 slide 8: Y + e⁻ → Y·⁻.' }),
];

const lesson3: Q[] = [
  mcq('q3-41', 'toxicity-mechanisms', 'Which biomolecules are affected earliest during oxidative stress?', 'Lipids', ['Carbohydrates', 'RNA', 'Glycoproteins'], { explanation: '2026 slide 33.' }),
  mcq('q3-42', 'lipid-peroxidation', 'A carbon radical in a fatty acid can stabilise itself by molecular rearrangement into…', 'A conjugated diene', ['A cyclic peroxide', 'A trans fatty acid', 'A saturated chain'], { explanation: '2026 slides 18, 20.' }),
  mcq('q3-43', 'lipid-peroxidation', 'What is the Russell mechanism?', 'Two peroxyl radicals reacting to form singlet oxygen', ['A peroxyl radical taking H· from a neighbouring lipid', 'Vitamin E trapping a lipid peroxyl radical', 'Iron turning a lipid hydroperoxide into an alkoxyl radical'], { explanation: '2026 slide 18.' }),
  multi('q3-44', 'lipid-peroxidation', 'Besides abstracting hydrogen, what else can lipid peroxyl radicals do? Select all that apply.', ['Oxidise cholesterol', 'Attack membrane proteins', 'React in pairs to form singlet oxygen'], ['Repair damaged fatty acids'], { explanation: '2026 slide 18.' }),
  mcq('q3-45', 'lipid-peroxidation', 'How does lipid peroxidation usually begin, in the 2026 lecture?', 'Abstraction of H· from a methylene (–CH₂–) group', ['Addition of a phosphate group to the glycerol', 'Hydrolysis of the ester bond by a lipase', 'Removal of a whole fatty acid from the membrane'], { explanation: '2026 slide 19: it can also start by addition of a reactive species to a lipid.' }),
  tf({ id: 'q3-46', conceptId: 'protein-damage', statement: 'Methionine sulphoxide reductases can reverse the oxidation of methionine.', answer: true, explanation: '2026 slide 23.' }),
  mcq('q3-47', 'dna-damage', 'Which DNA base is most susceptible to oxidation?', 'Guanine', ['Adenine', 'Cytosine', 'Thymine'], { explanation: '2026 slide 16.' }),
  multi('q3-48', 'dna-damage', 'What decides how much DNA damage by reactive species matters? Select all that apply.', ['The extent of the damage', 'Where it lies in the genome', 'How fast it can be repaired'], ['The person’s blood group'], { explanation: '2026 slide 16.' }),
  mcq('q3-49', 'dna-damage', 'Besides the bases, which part of DNA can reactive species chemically modify?', '2-Deoxyribose', ['The ribose of mRNA', 'Thymidine kinase', 'The histone H1'], { explanation: '2026 slide 16.' }),
  mcq('q3-50', 'oxidised-ldl', 'Which adhesion molecules does oxidised LDL increase in the endothelium?', 'VCAM-1 and ICAM-1', ['E-cadherin and N-cadherin', 'Integrin β1 and laminin', 'PECAM-1 and VE-cadherin'], { explanation: '2026 slide 41.' }),
  tf({ id: 'q3-51', conceptId: 'oxidised-ldl', statement: 'Superoxide, H₂O₂ and NO· made by macrophages can oxidise LDL directly.', answer: false, explanation: '2026 slide 41: they cannot; ONOOH readily does.', skill: 'misconception' }),
];

const lesson4: Q[] = [
  mcq('q4-41', 'antioxidant-action', 'The 2026 lecture defines an antioxidant as any substance that…', 'Delays, prevents or removes oxidative damage to a target molecule', ['Adds oxygen to a target molecule so that it can no longer be oxidised', 'Raises the production of ROS so that microbes are killed more quickly', 'Binds glucose so that fewer electrons enter the respiratory chain'], { explanation: '2026 slide 4.', skill: 'terminology' }),
  tf({ id: 'q4-42', conceptId: 'antioxidant-action', statement: 'Antioxidants are meant to eliminate ROS completely.', answer: false, explanation: '2026 slide 56: they help maintain redox balance.', skill: 'misconception' }),
  mcq('q4-43', 'antioxidant-enzymes', 'Catalase converts two molecules of H₂O₂ into…', 'Two waters and one oxygen', ['Two hydroxyl radicals', 'One superoxide and water', 'Two waters and hydrogen'], { explanation: '2026 slide 28: 2H₂O₂ → 2H₂O + O₂.' }),
  multi('q4-44', 'antioxidant-enzymes', 'Which are among the six enzymes of the antioxidant enzyme system in the 2026 figure? Select all that apply.', ['Glutathione reductase', 'Thioredoxin reductase', 'Peroxiredoxin'], ['Xanthine oxidase', 'Lipoxygenase'], { explanation: '2026 slide 28.' }),
  mcq('q4-45', 'antioxidant-vitamins', 'Why must humans get vitamin C from the diet?', 'They lack L-gulonolactone oxidase', ['They lack glucose 6-phosphate dehydrogenase', 'Their kidneys excrete all the vitamin C made', 'Their liver turns it all into vitamin E'], { explanation: '2026 slide 32.' }),
  multi('q4-46', 'antioxidant-vitamins', 'Which are good dietary sources of vitamin C in the 2026 lecture? Select all that apply.', ['Oranges', 'Guava', 'Broccoli', 'Peppers'], ['Vegetable oil'], { explanation: '2026 slide 32.' }),
  mcq('q4-47', 'antioxidant-vitamins', 'Besides inhibiting lipid peroxidation in vivo, α-tocopherol has been used…', 'As an antioxidant in plastics', ['As a preservative of blood for transfusion', 'As a drug to dissolve gallstones', 'As a sweetener in fizzy drinks'], { explanation: '2026 slide 31.' }),
  multi('q4-48', 'antioxidant-vitamins', 'Which species does vitamin C scavenge? Select all that apply.', ['Superoxide', 'Hydroperoxyl radical (HO₂·)', 'Peroxyl radicals', 'Hydroxyl radical'], ['Transferrin'], { explanation: '2026 slide 32.' }),
  multi('q4-49', 'antioxidant-vitamins', 'Which are non-enzymatic antioxidants in the 2026 deck? Select all that apply.', ['Urate (uric acid)', 'Bilirubin', 'Dietary polyphenols', 'Carotenoids'], ['Catalase'], { explanation: '2026 slide 28.' }),
  mcq('q4-50', 'antioxidant-sources', 'Which phenolic compound from turmeric scavenges radicals and modulates NF-κB and Nrf2?', 'Curcumin', ['Quercetin', 'Resveratrol', 'Catechin'], { explanation: '2026 slide 61.' }),
  match('q4-51', 'antioxidant-sources', 'Match each compound to its source.', [
    ['Quercetin', 'Onions, apples, berries'],
    ['Catechins', 'Green tea'],
    ['Resveratrol', 'Grapes, red wine'],
    ['Ferulic acid', 'Grains, vegetables'],
  ], { explanation: '2026 slide 61.' }),
  mcq('q4-52', 'antioxidant-sources', 'Fruits and vegetables also supply micronutrients that the antioxidant enzymes need, such as…', 'Selenium and zinc', ['Sodium and chloride', 'Iodine and fluoride', 'Lead and mercury'], { explanation: '2026 slide 57.' }),
];

const lesson5: Q[] = [
  mcq('q5-41', 'p53-lung-cancer', 'Much of the genetic damage done by radiation is mediated by…', 'The hydroxyl radical', ['Singlet oxygen from the skin', 'Nitric oxide from neurons', 'Uric acid from purines'], { explanation: '2026 slide 46: some comes from direct absorption of energy by DNA.' }),
  tf({ id: 'q5-42', conceptId: 'p53-lung-cancer', statement: 'The p53 protein can be inactivated by oxidation of its cysteine residues.', answer: true, explanation: '2026 slide 46.' }),
  multi('q5-43', 'p53-lung-cancer', 'Which are exogenous sources of ROS in lung carcinogenesis? Select all that apply.', ['Tobacco smoke', 'Infections', 'Occupational exposure', 'Domestic exposure'], ['The respiratory chain'], { explanation: '2026 slide 48.' }),
  mcq('q5-44', 'p53-lung-cancer', 'In lung carcinogenesis, oxidative stress activates which transcription factors?', 'NF-κB and AP-1', ['p53 and Rb', 'SREBP and LXR', 'HIF-1 and VEGF'], { explanation: '2026 slide 48.' }),
  mcq('q5-45', 'cause-or-consequence', 'After tissue injury, what activates and recruits phagocytes?', 'DAMPs and PAMPs', ['Vitamins C and E', 'Insulin and glucagon', 'Transferrin and ferritin'], { explanation: '2026 slide 62.' }),
  multi('q5-46', 'cause-or-consequence', 'After injury, raised intracellular Ca²⁺ stimulates which? Select all that apply.', ['Calpains', 'Ca²⁺-dependent nucleases', 'Nitric oxide synthases', 'Phospholipase A₂'], ['Catalase'], { explanation: '2026 slide 62.' }),
  tf({ id: 'q5-47', conceptId: 'cause-or-consequence', statement: 'Increased formation of reactive species probably accompanies tissue injury in most human diseases.', answer: true, explanation: '2026 slide 35.' }),
  mcq('q5-48', 'ros-transplant', 'Why can transfusion of older stored blood cause adverse effects?', 'Reactive species build up and damage the red cells', ['The red cells lose all their haemoglobin to the bag', 'Stored blood holds too much vitamin C and catalase', 'The plasma clots completely after one week in storage'], { explanation: '2026 slide 45: with pro-inflammatory responses in the recipient.' }),
  multi('q5-49', 'oxidative-biomarkers', 'Which are biomarkers of lipid damage? Select all that apply.', ['Isoprostanes', 'Malondialdehyde (MDA)', 'Cholesterol oxidation products', 'HNE and other aldehydes'], ['Protein carbonyls'], { explanation: '2026 slide 53.' }),
  mcq('q5-50', 'oxidative-biomarkers', 'Deoxyribose breakdown products are biomarkers of oxidative damage to…', 'DNA', ['Lipids', 'Proteins', 'Glycogen'], { explanation: '2026 slide 53.' }),
];

const lesson6: Q[] = [
  mcq('q6-01', 'atherosclerosis-ros', 'Atherosclerosis begins with…', 'Impaired function of the vascular endothelium', ['Calcium deposits forming in the heart valves', 'A clot forming in a healthy coronary artery', 'Rupture of a fibrous cap over a mature plaque'], { explanation: '2026 slide 40.' }),
  mcq('q6-02', 'atherosclerosis-ros', 'What is the hallmark cell of the arterial lesion?', 'The foam cell', ['The mast cell', 'The plasma cell', 'The giant cell'], { explanation: '2026 slide 40.' }),
  mcq('q6-03', 'atherosclerosis-ros', 'Activated mononuclear phagocytes are implicated in the thrombotic complications of atherosclerosis by producing…', 'Matrix metalloproteinases', ['Tissue plasminogen activator', 'Antithrombin and heparin', 'Superoxide dismutase'], { explanation: '2026 slide 40.' }),
  multi('q6-04', 'atherosclerosis-ros', 'Which do activated monocytes and macrophages produce? Select all that apply.', ['Superoxide (O₂·⁻)', 'Hydrogen peroxide', 'Possibly nitric oxide'], ['Vitamin E'], { explanation: '2026 slide 41.' }),
  mcq('q6-05', 'atherosclerosis-ros', 'In the 2026 disease table, which free radicals are involved in atherosclerosis?', 'Superoxide, NO· and ONOO⁻', ['Singlet oxygen on its own', 'The hydroxyl radical only', 'Thiyl radicals and HOCl'], { explanation: '2026 slide 63.' }),
  mcq('q6-06', 'atherosclerosis-ros', 'Which condition linked to reactive species involves impaired vasodilation, sodium retention and a larger blood volume?', 'Hypertension', ['Heart failure', 'Atherosclerosis', 'Multiple sclerosis'], { explanation: '2026 slide 63.' }),
  mcq('q6-07', 'iri-mechanism', 'During ischaemia, ATP is broken down to which compound that xanthine oxidase later oxidises?', 'Hypoxanthine', ['Uric acid (urate)', 'Glutathione', 'Lactic acid'], { explanation: '2026 slide 43.' }),
  multi('q6-08', 'iri-mechanism', 'How is xanthine dehydrogenase converted to xanthine oxidase? Select all that apply.', ['Oxidation of its –SH groups', 'Proteolysis by Ca²⁺-stimulated proteinases'], ['Phosphorylation by protein kinase A', 'Binding of vitamin C'], { explanation: '2026 slide 43.' }),
  mcq('q6-09', 'iri-mechanism', 'In ischaemia, which exchanger brings Ca²⁺ into the cell after Na⁺ has risen?', 'The Na⁺/Ca²⁺ exchanger', ['The Na⁺/K⁺ ATPase pump', 'The Cl⁻/HCO₃⁻ exchanger', 'The H⁺/K⁺ ATPase pump'], { explanation: '2026 slide 44.' }),
  mcq('q6-10', 'iri-mechanism', 'On reperfusion, opening of which structure is followed by release of cytochrome c?', 'The mitochondrial permeability transition pore', ['The nuclear pore complex of the cell nucleus', 'The voltage-gated sodium channel of the membrane', 'The gap junction between two cardiomyocytes'], { explanation: '2026 slide 44.' }),
  tf({ id: 'q6-11', conceptId: 'iri-mechanism', statement: 'Ischaemia–reperfusion injury can occur only in transplanted organs.', answer: false, explanation: '2026 slides 43, 45: it also follows blockage of a coronary or cerebral artery.', skill: 'misconception' }),
  tf({ id: 'q6-12', conceptId: 'iri-mechanism', statement: 'Organs for transplantation should be put through bouts of hypoxia to make them immune-compromised.', answer: false, explanation: '2026 slide 45; HB slide 65: hypoxia and reperfusion injure organs for transplant.', skill: 'misconception' }),
  mcq('q6-13', 'obesity-diabetes-ros', 'In obesity, the activity of which enzyme, which removes 4-HNE and other aldehydes using GSH, decreases?', 'GST-A4 (glutathione S-transferase A4)', ['GPx4 (glutathione peroxidase 4)', 'GR (glutathione reductase, cytosolic)', 'ALDH2 (mitochondrial aldehyde dehydrogenase)'], { explanation: '2026 slide 39.' }),
  multi('q6-14', 'obesity-diabetes-ros', 'Which pro-inflammatory cytokines does white adipose tissue release? Select all that apply.', ['IL-1β', 'IL-6', 'MCP-1', 'TNF-α'], ['IL-10'], { explanation: '2026 slide 39.' }),
  tf({ id: 'q6-15', conceptId: 'obesity-diabetes-ros', statement: 'Oxidative stress contributes to diabetes, and diabetes then causes oxidative stress.', answer: true, explanation: '2026 slide 54.' }),
  mcq('q6-16', 'obesity-diabetes-ros', 'Which diabetic complication involves polyol pathway activity, less NADPH and GSH, and osmotic damage?', 'Diabetic neuropathy', ['Diabetic retinopathy', 'Diabetic nephropathy', 'Diabetic ketoacidosis'], { explanation: '2026 slide 65.' }),
  mcq('q6-17', 'neurodegeneration-ros', 'Which respiratory chain complex does oxidative stress inhibit in the brain, in the 2026 figure?', 'Complex I', ['Complex II', 'Complex IV', 'Complex V (ATP synthase)'], { explanation: '2026 slide 49.' }),
  mcq('q6-18', 'neurodegeneration-ros', 'Neurofibrillary tau tangles and amyloid-β aggregates are features of…', 'Alzheimer’s disease', ['Parkinson’s disease', 'Huntington’s disease', 'Multiple sclerosis'], { explanation: '2026 slide 49.' }),
  mcq('q6-19', 'neurodegeneration-ros', 'In rheumatoid arthritis, oxidative modification of self-antigens…', 'Forms neo-antigens that activate autoreactive T cells', ['Destroys the antigens so that no autoimmunity can occur', 'Turns the antigens into antioxidants that protect joints', 'Removes MHC molecules from the joint cells'], { explanation: '2026 slide 64.' }),
  mcq('q6-20', 'neurodegeneration-ros', 'A Parkinson’s brain with more lipid peroxidation and less glutathione most likely has impaired…', 'Mitochondrial electron transport chain function', ['Peroxisomal β-oxidation of very-long-chain fatty acids', 'Ribosomal protein synthesis in neurons', 'Lysosomal autophagy of old organelles'], { explanation: '2026 slide 50.', skill: 'application' }),
  mcq('q6-21', 'ageing-theory', 'Reactive species may impair tissue renewal in ageing by…', 'Promoting apoptosis or senescence of stem cells', ['Making stem cells divide faster than normal', 'Turning all stem cells into cancer cells at once', 'Raising telomerase activity in every tissue'], { explanation: '2026 slide 51.' }),
  mcq('q6-22', 'ageing-theory', 'Reactive species raising the levels of antioxidants and other defences is called a…', 'Hormetic effect', ['Pasteur effect of oxygen', 'Warburg effect', 'Bohr effect'], { explanation: '2026 slide 52.', skill: 'terminology' }),
  multi('q6-23', 'ageing-theory', 'Which are ways reactive species may affect ageing? Select all that apply.', ['Inappropriate signalling, e.g. the insulin pathway', 'Promoting or suppressing inflammation', 'Causing or contributing to age-related diseases'], ['Lengthening every telomere'], { explanation: '2026 slides 51–52.' }),
  fill('q6-24', 'ageing-theory', 'In 1956 Denham ____ proposed the free radical theory of ageing.', ['Harman'], { explanation: '2026 slide 51.' }),
];

export const questions2026: Q[] = [...lesson1, ...lesson2, ...lesson3, ...lesson4, ...lesson5, ...lesson6];
