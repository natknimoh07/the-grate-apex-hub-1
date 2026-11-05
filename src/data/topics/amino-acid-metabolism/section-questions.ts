// Biochemistry → Amino Acid Metabolism: five more questions for every reading section
// (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L (its place in the topic), section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/amino-acid-metabolism/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 The α-amino acid ────────────────────────────────
  mcq('s1-1-1', 'aa-structure', 'What is glycine’s side chain (R group)?', 'A hydrogen atom', ['A methyl group', 'A hydroxyl group', 'An amino group on the side'], {
    explanation: 'Glycine’s R group is hydrogen, which is why it is not chiral.',
  }),
  mcq('s1-1-2', 'aa-structure', 'What shape are the bonds around the α-carbon?', 'Tetrahedral', ['Flat and square', 'Linear', 'Trigonal and planar in shape'], {
    explanation: 'The α-carbon is central and tetrahedral.',
  }),
  tf({ id: 's1-1-3', conceptId: 'aa-structure', statement: 'Twenty amino acids are common in proteins.', answer: true, explanation: 'Hundreds exist; 22 are in the genetic code; twenty are common in proteins.' }),
  mcq('s1-1-4', 'aa-structure', 'Under the newer IUPAC system, what replaces the L/D labels?', 'The (S)/(R) system', ['The α/β system', 'The cis/trans system', 'The (+)/(−) rotation system of optics'], {
    explanation: 'L/D forms are replaced by (S)/(R).',
  }),
  mcq('s1-1-5', 'aa-structure', 'What makes one amino acid different from another?', 'Its side chain (R)', ['Its α-carbon', 'Its amino group', 'Its carboxyl group at the end of the chain'], {
    explanation: 'All share the core; they differ in R.',
  }),

  // ─── Lesson 1 · S2 Charge and the isoelectric point ────────────────
  mcq('s1-2-1', 'aa-ionisation', 'What is the pKa of the α-amino group, roughly?', 'About 9', ['About 2', 'About 7', 'About 12 or more'], {
    explanation: 'α-COOH ≈ 2; α-NH₂ ≈ 9.',
  }),
  mcq('s1-2-2', 'aa-ionisation', 'Why are amino acids called amphoteric?', 'They can act as both acids and bases', ['They are all positively charged', 'They dissolve only in fats and oils', 'They cannot carry any electric charge at all'], {
    explanation: '–COOH is acidic and –NH₂ basic: ampholytes.',
  }),
  tf({ id: 's1-2-3', conceptId: 'aa-ionisation', statement: 'At its isoelectric point an amino acid does not move in an electric field.', answer: true, explanation: 'With no net charge it does not move.' }),
  mcq('s1-2-4', 'aa-ionisation', 'In a basic environment, what does the carboxyl group do?', 'Gives up a proton (–COO⁻)', ['Accepts a proton (–COOH₂⁺)', 'Loses its oxygen atoms', 'Joins to the amino group'], {
    explanation: 'In base the carboxyl group gives up a proton.',
  }),
  mcq('s1-2-5', 'aa-ionisation', 'At a pH below its pI, an amino acid is…', 'A cation (+)', ['An anion (−)', 'A zwitterion only', 'Uncharged and neutral overall'], {
    explanation: 'Below the pI: cation; above: anion.',
  }),

  // ─── Lesson 1 · S3 From amino acids to proteins ────────────────────
  mcq('s1-3-1', 'protein-structure', 'What kind of reaction forms a peptide bond?', 'A condensation reaction', ['A hydrolysis reaction', 'A redox reaction', 'A phosphorylation reaction with ATP'], {
    explanation: 'Condensation between a carboxyl and an amino group.',
  }),
  mcq('s1-3-2', 'protein-structure', 'How many residues does an oligopeptide have?', '2–10', ['11–100', 'More than 100', 'Exactly one residue only'], {
    explanation: 'Oligopeptides 2–10, polypeptides 11–100, proteins >100.',
  }),
  tf({ id: 's1-3-3', conceptId: 'protein-structure', statement: 'Primary structure is held together by peptide bonds.', answer: true, explanation: 'The linear sequence is joined by peptide bonds.' }),
  mcq('s1-3-4', 'protein-structure', 'Which level of structure includes β-pleated sheets?', 'Secondary', ['Primary', 'Quaternary', 'None — they are a separate level'], {
    explanation: 'Secondary: α-helix and β-pleated sheet.',
  }),
  mcq('s1-3-5', 'protein-structure', 'Which bonds sometimes join subunits in quaternary structure?', 'Disulfide bonds', ['Peptide bonds', 'Glycosidic bonds', 'Phosphodiester bonds of nucleotides'], {
    explanation: 'Mostly non-covalent; sometimes disulfide bonds.',
  }),

  // ─── Lesson 1 · S4 What amino acids do ─────────────────────────────
  mcq('s1-4-1', 'aa-functions', 'Which amino acid forms part of bile salts?', 'Glycine', ['Serine', 'Lysine', 'Phenylalanine (aromatic)'], {
    explanation: 'Glycine forms part of bile salts; serine part of phospholipids.',
  }),
  mcq('s1-4-2', 'aa-functions', 'At what temperature do amino acids decompose?', 'Above 200 °C', ['At 37 °C', 'Below 0 °C', 'Only above 1000 °C in a flame'], {
    explanation: 'They are crystalline solids that decompose above 200 °C.',
  }),
  tf({ id: 's1-4-3', conceptId: 'aa-functions', statement: 'Ornithine is an unusual amino acid made by modifying a common one.', answer: true, explanation: 'Hydroxyproline, ornithine and norleucine.' }),
  mcq('s1-4-4', 'aa-functions', 'Which amino acid forms part of phospholipids?', 'Serine', ['Glycine', 'Valine', 'Tryptophan (aromatic)'], {
    explanation: 'Serine forms part of phospholipids.',
  }),
  mcq('s1-4-5', 'aa-functions', 'Which describes amino acids as solids?', 'Colourless and non-volatile', ['Coloured and volatile', 'Oily and liquid', 'Gaseous at room temperature and pressure'], {
    explanation: 'Colourless, non-volatile crystalline solids.',
  }),

  // ─── Lesson 2 · S1 Five classes by R group ─────────────────────────
  mcq('s2-1-1', 'r-group-classes', 'Which amino acid has an imidazole ring?', 'Histidine', ['Arginine', 'Tryptophan', 'Lysine (positively charged)'], {
    explanation: 'His: imidazole; Arg: guanidino; Trp: indole.',
  }),
  mcq('s2-1-2', 'r-group-classes', 'Which group does methionine’s sulfur form?', 'A thioether', ['A sulfhydryl', 'A disulfide', 'A sulfate ester on the side chain'], {
    explanation: 'Cysteine: sulfhydryl; methionine: thioether.',
  }),
  tf({ id: 's2-1-3', conceptId: 'r-group-classes', statement: 'Tyrosine contains a hydroxyl group.', answer: true, explanation: 'Serine, threonine and tyrosine are hydroxyl-containing.' }),
  mcq('s2-1-4', 'r-group-classes', 'What forms from two cysteines?', 'Cystine', ['Cysteamine', 'Cystathionine', 'Homocysteine with a methyl group'], {
    explanation: 'Two cysteines form cystine.',
  }),
  mcq('s2-1-5', 'r-group-classes', 'What does the R group determine about an amino acid?', 'Its solubility in water', ['Its chirality alone', 'Its number of α-carbons', 'Whether it can form a peptide bond'], {
    explanation: 'The R group determines solubility in water.',
  }),

  // ─── Lesson 2 · S2 Essential and non-essential ─────────────────────
  mcq('s2-2-1', 'essential-aa', 'When does tyrosine become essential?', 'When phenylalanine hydroxylase is missing (PKU)', ['When too much vitamin C is eaten every day for years', 'When the person exercises a lot', 'When methionine is eaten in excess'], {
    explanation: 'Tyrosine is made from phenylalanine — essential in PKU.',
  }),
  mcq('s2-2-2', 'essential-aa', 'From which amino acid is cysteine made?', 'Methionine', ['Serine only', 'Tyrosine', 'Glutamate with ammonia'], {
    explanation: 'Cysteine is made from methionine.',
  }),
  tf({ id: 's2-2-3', conceptId: 'essential-aa', statement: 'Plants and bacteria can make all twenty amino acids.', answer: true, explanation: 'Animals lack many of the enzymes.' }),
  mcq('s2-2-4', 'essential-aa', 'Why is histidine’s status called “controversial”?', 'It is essential for growth in children', ['It is never found in proteins', 'It is made only by plants', 'It is toxic to adults in any amount at all'], {
    explanation: 'Histidine is essential for growth in children.',
  }),
  mcq('s2-2-5', 'essential-aa', 'Why can animals not make all twenty amino acids?', 'They lack many of the enzymes', ['They lack the genetic code for them', 'They cannot absorb nitrogen', 'They break them down too fast to keep'], {
    explanation: 'Animals lack many of the enzymes that plants and bacteria have.',
  }),

  // ─── Lesson 2 · S3 Glucogenic and ketogenic ────────────────────────
  mcq('s2-3-1', 'glucogenic-ketogenic', 'Which amino acids are purely ketogenic?', 'Leucine and lysine', ['Valine and alanine', 'Tyrosine and tryptophan', 'Glutamine and asparagine together'], {
    explanation: 'Leucine and lysine are purely ketogenic.',
  }),
  mcq('s2-3-2', 'glucogenic-ketogenic', 'Which product makes an amino acid glucogenic?', 'Oxaloacetate', ['Acetyl-CoA', 'Acetoacetyl-CoA', 'Ketone bodies such as acetoacetate'], {
    explanation: 'Glucogenic: pyruvate, succinyl-CoA, α-KG, fumarate or oxaloacetate.',
  }),
  tf({ id: 's2-3-3', conceptId: 'glucogenic-ketogenic', statement: 'Phenylalanine is both glucogenic and ketogenic.', answer: true, explanation: 'Isoleucine, phenylalanine, tryptophan and tyrosine are both.' }),
  mcq('s2-3-4', 'glucogenic-ketogenic', 'Which amino acid is glucogenic only?', 'Alanine', ['Leucine', 'Lysine', 'Isoleucine (branched chain)'], {
    explanation: 'Alanine is glucogenic; leucine and lysine are ketogenic.',
  }),
  mcq('s2-3-5', 'glucogenic-ketogenic', 'Which can a ketogenic amino acid NOT give rise to directly?', 'Glucose', ['Acetyl-CoA', 'Acetoacetyl-CoA', 'Ketone bodies in the liver'], {
    explanation: 'Ketogenic amino acids give acetyl-CoA or acetoacetyl-CoA, not glucose.',
  }),

  // ─── Lesson 3 · S1 Digestion and the amino acid pool ───────────────
  mcq('s3-1-1', 'protein-digestion', 'Where are dietary proteins mostly digested?', 'The small intestine', ['The stomach', 'The mouth', 'The large intestine and colon'], {
    explanation: 'Mostly in the small intestine.',
  }),
  mcq('s3-1-2', 'protein-digestion', 'Where do aminopeptidases come from?', 'The intestinal epithelium', ['The pancreas', 'The stomach lining', 'The liver, secreted in the bile'], {
    explanation: 'Aminopeptidases come from the intestinal epithelium.',
  }),
  tf({ id: 's3-1-3', conceptId: 'protein-digestion', statement: 'Pepsinogen becomes pepsin in the stomach.', answer: true, explanation: 'Pepsin has maximum activity at pH 2.' }),
  mcq('s3-1-4', 'protein-digestion', 'What happens to absorbed amino acids?', 'They join the amino acid pool', ['They are all excreted as urea', 'They are stored as protein granules', 'They stay in the gut wall for good'], {
    explanation: 'They join the pool for protein synthesis or metabolites.',
  }),
  mcq('s3-1-5', 'protein-digestion', 'Which enzyme activates chymotrypsinogen?', 'Trypsin', ['Pepsin', 'Enteropeptidase', 'Aminopeptidase from the gut wall'], {
    explanation: 'Trypsin activates chymotrypsinogen, proelastase and procarboxypeptidase.',
  }),

  // ─── Lesson 3 · S2 Decarboxylation ─────────────────────────────────
  mcq('s3-2-1', 'decarboxylation', 'Which amine is called the “feel good” neurotransmitter?', 'Dopamine', ['Histamine', 'Serotonin', 'Adrenaline from the adrenal'], {
    explanation: 'Dopamine, intermediate to adrenaline.',
  }),
  mcq('s3-2-2', 'decarboxylation', 'What is serotonin’s other name?', '5-Hydroxytryptamine', ['5-Hydroxytryptophan', 'Dihydroxyphenylalanine', 'Tetrahydrobiopterin cofactor'], {
    explanation: 'Serotonin is 5-HT, from 5-hydroxytryptophan.',
  }),
  tf({ id: 's3-2-3', conceptId: 'decarboxylation', statement: 'Histamine is involved in the itching of an immune response.', answer: true, explanation: 'Histamine: gastric secretion and immune response (itching).' }),
  mcq('s3-2-4', 'decarboxylation', 'What is removed from an amino acid to make an amine?', 'CO₂', ['NH₃', 'H₂O', 'A phosphate from ATP'], {
    explanation: 'Decarboxylation removes CO₂.',
  }),
  mcq('s3-2-5', 'decarboxylation', 'Serotonin is a neurotransmitter mainly for…', 'Mood and memory', ['Muscle contraction', 'Blood clotting', 'Digestion of fats in the gut'], {
    explanation: 'Serotonin: mood and memory.',
  }),

  // ─── Lesson 3 · S3 Transamination ──────────────────────────────────
  mcq('s3-3-1', 'transamination', 'Which vitamin supplies PLP?', 'Vitamin B6', ['Vitamin B12', 'Vitamin B1', 'Vitamin C (ascorbate)'], {
    explanation: 'Pyridoxal phosphate comes from vitamin B6.',
  }),
  mcq('s3-3-2', 'transamination', 'What does transamination transfer an amino group to?', 'A keto acid', ['A fatty acid', 'A sugar', 'A nucleotide base in DNA'], {
    explanation: 'Amino acid + keto acid → new keto acid + new amino acid.',
  }),
  tf({ id: 's3-3-3', conceptId: 'transamination', statement: 'Transamination funnels nitrogen from many amino acids into a few compounds.', answer: true, explanation: 'Those few are then deaminated or turned into urea.' }),
  mcq('s3-3-4', 'transamination', 'Which two forms does PLP switch between during transamination?', 'Aldehyde and pyridoxamine phosphate', ['Alcohol and ketone forms', 'Phosphorylated and free forms', 'Oxidised and reduced flavin (FAD) forms'], {
    explanation: 'PLP (aldehyde) ↔ pyridoxamine phosphate.',
  }),
  mcq('s3-3-5', 'transamination', 'What kind of amino group does proline have?', 'A secondary amino group', ['A primary amino group', 'A quaternary amino group', 'No amino group at all on its ring'], {
    explanation: 'Proline’s secondary amino group stops PLP-dependent reactions.',
  }),

  // ─── Lesson 3 · S4 Oxidative deamination ───────────────────────────
  mcq('s3-4-1', 'oxidative-deamination', 'Where does oxidative deamination of glutamate happen?', 'Liver mitochondria', ['Muscle cytosol', 'Brain lysosomes', 'Kidney cell nucleus'], {
    explanation: 'In liver mitochondria, by GDH.',
  }),
  mcq('s3-4-2', 'oxidative-deamination', 'Which nucleotides inhibit glutamate dehydrogenase?', 'GTP and ATP', ['GDP and ADP', 'AMP and UMP', 'NAD⁺ and FAD together'], {
    explanation: 'GDP and ADP activate; GTP and ATP inhibit.',
  }),
  tf({ id: 's3-4-3', conceptId: 'oxidative-deamination', statement: 'Glutamate dehydrogenase is a complex allosteric enzyme.', answer: true, explanation: 'AA1 slide 61.' }),
  mcq('s3-4-4', 'oxidative-deamination', 'Where does the ammonia from GDH go?', 'The urea cycle', ['The citric acid cycle', 'Fatty acid synthesis', 'Glycogen synthesis in muscle'], {
    explanation: 'The ammonia goes to the urea cycle.',
  }),
  mcq('s3-4-5', 'oxidative-deamination', 'When does GDH activity rise?', 'When the liver needs fuel from the citric acid cycle', ['When ATP and GTP have built up', 'When the person has just eaten a large meal of sugar and fat', 'When the urea cycle is fully blocked'], {
    explanation: 'Low energy (more GDP/ADP) activates GDH.',
  }),

  // ─── Lesson 4 · S1 Branched-chain amino acids ──────────────────────
  mcq('s4-1-1', 'bcaa-catabolism', 'Where does most BCAA transamination take place?', 'Skeletal muscle', ['Liver', 'Brain', 'Kidney cortex and medulla'], {
    explanation: '65% of BCAA transamination is in skeletal muscle.',
  }),
  mcq('s4-1-2', 'bcaa-catabolism', 'Which BCAA gives acetyl-CoA AND propionyl-CoA?', 'Isoleucine', ['Leucine', 'Valine', 'Lysine (not branched)'], {
    explanation: 'Isoleucine → acetyl-CoA + propionyl-CoA.',
  }),
  tf({ id: 's4-1-3', conceptId: 'bcaa-catabolism', statement: 'BCAA catabolism yields NADH and FADH₂.', answer: true, explanation: 'AA2 slides 7, 9.' }),
  mcq('s4-1-4', 'bcaa-catabolism', 'Which enzyme does the α-keto acid dehydrogenase complex resemble?', 'Pyruvate dehydrogenase', ['Glutamate dehydrogenase', 'Lactate dehydrogenase', 'Malate dehydrogenase of the TCA cycle'], {
    explanation: 'It resembles the pyruvate dehydrogenase complex.',
  }),
  mcq('s4-1-5', 'bcaa-catabolism', 'Which BCAA is strictly ketogenic?', 'Leucine', ['Valine', 'Isoleucine', 'Alanine (not branched)'], {
    explanation: 'Leucine → acetyl-CoA + acetoacetyl-CoA.',
  }),

  // ─── Lesson 4 · S2 Disorders of BCAA catabolism ────────────────────
  mcq('s4-2-1', 'msud', 'Which disorder gives a “cheesy” odour of breath and urine?', 'Isovaleric acidaemia', ['Maple syrup urine disease', 'Phenylketonuria', 'Intermittent ketonuria of children'], {
    explanation: 'Isovaleric acidaemia: cheesy odour.',
  }),
  mcq('s4-2-2', 'msud', 'Which amino acid is restricted in isovaleric acidaemia?', 'Leucine', ['Valine', 'Isoleucine', 'Phenylalanine and tyrosine'], {
    explanation: 'The defect is in the leucine pathway.',
  }),
  tf({ id: 's4-2-3', conceptId: 'msud', statement: 'In maple syrup urine disease, α-keto acids appear in blood and urine.', answer: true, explanation: 'The α-keto acid dehydrogenase complex is defective.' }),
  mcq('s4-2-4', 'msud', 'Which disorder shows symptoms later in life and only intermittently?', 'Intermittent branched-chain ketonuria', ['Maple syrup urine disease', 'Isovaleric acidaemia', 'Phenylketonuria of the newborn period'], {
    explanation: 'A milder deficiency of the same complex as MSUD.',
  }),
  mcq('s4-2-5', 'msud', 'What can untreated MSUD lead to in infancy?', 'Death', ['Extra growth', 'Better brain development', 'A stronger immune system'], {
    explanation: 'Abnormal brain development, mental retardation, death in infancy.',
  }),

  // ─── Lesson 4 · S3 Phenylketonuria ─────────────────────────────────
  mcq('s4-3-1', 'pku', 'Which sweetener should people with PKU avoid?', 'Aspartame', ['Sucrose', 'Saccharin', 'Glucose syrup from maize'], {
    explanation: 'Aspartame is aspartyl-phenylalanine methyl ester.',
  }),
  mcq('s4-3-2', 'pku', 'How long after blood phenylalanine rises does phenylpyruvic acid appear in urine?', '2–6 weeks', ['2–6 hours', '2–6 days', '2–6 years after birth'], {
    explanation: 'Phenylpyruvic acid appears 2–6 weeks later.',
  }),
  tf({ id: 's4-3-3', conceptId: 'pku', statement: 'A deficiency of the reductase that regenerates tetrahydrobiopterin can cause PKU.', answer: true, explanation: 'Hydroxylase, cofactor or reductase deficiency can each cause PKU.' }),
  mcq('s4-3-4', 'pku', 'With a carrier frequency of about 1 in 50, what is the chance of PKU at random?', '1 in 10,000', ['1 in 2,500', '1 in 100', '1 in 1,000,000 births'], {
    explanation: '0.02 × 0.02 × 0.25 = 1 in 10,000.',
  }),
  mcq('s4-3-5', 'pku', 'For how long should the PKU diet be high in tyrosine?', 'The first 4–5 years', ['The first 4–5 weeks', 'The first 4–5 days', 'Only during pregnancy of the mother'], {
    explanation: 'High in tyrosine for the first 4–5 years.',
  }),

  // ─── Lesson 5 · S1 Fates of tyrosine ───────────────────────────────
  mcq('s5-1-1', 'tyrosine-fates', 'Which enzyme makes L-DOPA from tyrosine?', 'Tyrosine hydroxylase', ['Tyrosinase', 'Aromatic amino acid decarboxylase', 'Dopamine β-hydroxylase'], {
    explanation: 'Tyrosine hydroxylase (needs tetrahydrobiopterin).',
  }),
  mcq('s5-1-2', 'tyrosine-fates', 'What colour are eumelanins?', 'Brown or black', ['Red or yellow', 'Blue or green', 'White or colourless'], {
    explanation: 'Eumelanins brown/black; pheomelanins red/yellow.',
  }),
  tf({ id: 's5-1-3', conceptId: 'tyrosine-fates', statement: 'The thyroid hormones T₄ and T₃ are made from tyrosine.', answer: true, explanation: 'Tyrosine → catecholamines, melanin and thyroid hormones.' }),
  mcq('s5-1-4', 'tyrosine-fates', 'From which molecule do melanins come?', 'Dopaquinone', ['Dopamine', 'Noradrenaline', 'Homogentisic acid in urine'], {
    explanation: 'Melanins come from dopaquinone.',
  }),
  mcq('s5-1-5', 'tyrosine-fates', 'Into which product is tyrosine catabolised?', 'Acetoacetyl-CoA', ['Succinyl-CoA', 'Propionyl-CoA', 'Pyruvate directly'], {
    explanation: 'Via transamination, dioxygenation and isomerisation.',
  }),

  // ─── Lesson 5 · S2 Disorders of tyrosine metabolism ────────────────
  mcq('s5-2-1', 'tyrosine-disorders', 'Which enzyme is deficient in tyrosinaemia type III?', '4-Hydroxyphenylpyruvate dioxygenase', ['Fumarylacetoacetase', 'Tyrosine aminotransferase', 'Homogentisate 1,2-dioxygenase (HGD)'], {
    explanation: 'Type III: 4-hydroxyphenylpyruvate dioxygenase.',
  }),
  mcq('s5-2-2', 'tyrosine-disorders', 'Which enzyme is missing in albinism?', 'Tyrosinase', ['Tyrosine hydroxylase', 'Fumarylacetoacetase', 'Phenylalanine hydroxylase'], {
    explanation: 'Albinism: tyrosinase, so no melanin.',
  }),
  tf({ id: 's5-2-3', conceptId: 'tyrosine-disorders', statement: 'Alkaptonuria has no effective treatment.', answer: true, explanation: 'AA2: no effective treatment.' }),
  mcq('s5-2-4', 'tyrosine-disorders', 'Which tyrosinaemia is also called Richner–Hanhart syndrome?', 'Type II (oculocutaneous)', ['Type I (hepatorenal)', 'Type III (neurological)', 'Transient neonatal tyrosinaemia'], {
    explanation: 'Type II: tyrosine aminotransferase.',
  }),
  mcq('s5-2-5', 'tyrosine-disorders', 'Why are people with PKU not albinos?', 'They get enough tyrosine from the diet', ['They have extra tyrosinase enzyme', 'They make melanin directly from phenylalanine', 'They have no melanocytes at all'], {
    explanation: 'Dietary tyrosine lets them make melanin.',
  }),

  // ─── Lesson 5 · S3 Tryptophan ──────────────────────────────────────
  mcq('s5-3-1', 'tryptophan', 'What controls the pineal gland’s melatonin production?', 'Light', ['Food intake', 'Blood glucose', 'Body temperature changes'], {
    explanation: 'Melatonin is made mainly in the pineal gland under the control of light.',
  }),
  mcq('s5-3-2', 'tryptophan', 'Which drug class acting on serotonin treats depression?', 'SSRIs', ['Statins', 'β-Blockers', 'Sulfonamide antibiotics'], {
    explanation: 'Selective serotonin reuptake inhibitors.',
  }),
  tf({ id: 's5-3-3', conceptId: 'tryptophan', statement: 'Tryptophan can be converted to niacin and NAD.', answer: true, explanation: 'In several steps, to nicotinic acid and NAD.' }),
  mcq('s5-3-4', 'tryptophan', 'What does serotonin do in platelets?', 'Aggregation and vasoconstriction', ['Digestion of fats', 'Storage of iron', 'Making of antibodies in the plasma'], {
    explanation: 'Platelets: aggregation and vasoconstriction.',
  }),
  mcq('s5-3-5', 'tryptophan', 'Which drug is a serotonin agonist?', 'LSD', ['Aspirin', 'Insulin', 'Allopurinol (for gout)'], {
    explanation: 'LSD is a serotonin agonist.',
  }),

  // ─── Lesson 5 · S4 Histidine, serine and glycine ───────────────────
  mcq('s5-4-1', 'histidine-serine', 'In histidinaemia, which product falls?', 'Urocanic acid', ['Histamine', 'Glutamate', 'Formiminoglutamate in urine'], {
    explanation: 'Histidine rises; urocanic acid falls.',
  }),
  mcq('s5-4-2', 'histidine-serine', 'Which enzyme turns serine into glycine?', 'Serine hydroxymethyltransferase', ['Serine dehydrogenase', 'Glycine synthase', 'Phosphoserine phosphatase (PSP)'], {
    explanation: 'SHMT, PLP-dependent, making N⁵,N¹⁰-methylene-FH₄.',
  }),
  tf({ id: 's5-4-3', conceptId: 'histidine-serine', statement: 'Histidinaemia seems benign in most people.', answer: true, explanation: 'Benign in most; some have CNS, eye or speech problems.' }),
  mcq('s5-4-4', 'histidine-serine', 'How many steps make serine from 3-phosphoglycerate?', 'Three', ['One', 'Two', 'Seven'], {
    explanation: 'Dehydrogenase, transaminase, phosphatase.',
  }),
  mcq('s5-4-5', 'histidine-serine', 'Which molecules are made using glycine?', 'Haem, porphyrins and purines', ['Cholesterol and bile acids', 'Fatty acids and glycerol', 'Glycogen and starch in cells'], {
    explanation: 'Glycine is used for haem, porphyrins and purines.',
  }),

  // ─── Lesson 6 · S1 Capturing ammonia ───────────────────────────────
  mcq('s6-1-1', 'glu-gln', 'Which coenzyme does GDH need to fix ammonia into α-ketoglutarate?', 'NADPH', ['FADH₂', 'ATP', 'Coenzyme A'], {
    explanation: 'An NADPH-requiring reaction gives glutamate.',
  }),
  mcq('s6-1-2', 'glu-gln', 'What does glutamine synthetase use to add a second ammonium?', 'ATP', ['NADPH', 'GTP', 'Biotin'], {
    explanation: 'Glutamate + NH₄⁺ + ATP → glutamine.',
  }),
  tf({ id: 's6-1-3', conceptId: 'glu-gln', statement: 'Gut bacteria are a source of ammonia for the body.', answer: true, explanation: 'Reduced nitrogen enters as amino acids, protein and bacterial ammonia.' }),
  mcq('s6-1-4', 'glu-gln', 'How does glutamine synthetase protect neurons?', 'It turns excess ammonia and glutamate into glutamine', ['It turns glutamine into glutamate for signalling', 'It breaks ammonia down into nitrogen gas', 'It pumps ammonia out of the brain into the blood plasma'], {
    explanation: 'It protects neurons from excitotoxicity.',
  }),
  mcq('s6-1-5', 'glu-gln', 'Which brain tumour is linked to glutamine synthetase malfunction?', 'Glioblastoma multiforme', ['Meningioma', 'Medulloblastoma', 'Pituitary macroadenoma'], {
    explanation: 'Alzheimer’s, epilepsy and glioblastoma multiforme.',
  }),

  // ─── Lesson 6 · S2 Glutamine and alanine as carriers ───────────────
  mcq('s6-2-1', 'kidney-ammonia', 'In acidosis, why does more glutamine go to the kidney?', 'To conserve bicarbonate, which urea synthesis uses', ['To make more urea in the kidney itself', 'To store ammonia in the kidney for later', 'To make more glucose for the brain during the acidosis'], {
    explanation: 'Sending glutamine to the kidney spares bicarbonate.',
  }),
  mcq('s6-2-2', 'alanine-glucose', 'In the liver, what is alanine transaminated to?', 'Pyruvate', ['Oxaloacetate', 'Lactate', 'Acetyl-CoA'], {
    explanation: 'Alanine → pyruvate (and glutamate).',
  }),
  tf({ id: 's6-2-3', conceptId: 'alanine-glucose', statement: 'The alanine–glucose cycle puts the burden of gluconeogenesis on the liver.', answer: true, explanation: 'Muscle sends alanine; the liver makes glucose.' }),
  mcq('s6-2-4', 'kidney-ammonia', 'In what form is ammonia excreted by the kidney?', 'NH₄⁺', ['Urea', 'Uric acid', 'Glutamine'], {
    explanation: 'Renal glutaminase and GDH release ammonia, excreted as NH₄⁺.',
  }),
  mcq('s6-2-5', 'alanine-glucose', 'Which enzyme makes muscle alanine from pyruvate?', 'ALT', ['AST', 'GDH', 'Glutaminase'], {
    explanation: 'Muscle alanine comes from protein breakdown and from ALT.',
  }),

  // ─── Lesson 6 · S3 Why ammonia is toxic ────────────────────────────
  mcq('s6-3-1', 'ammonia-toxicity', 'Which molecule does excess ammonia deplete by reversing GDH?', 'α-Ketoglutarate', ['Glutamine', 'Urea', 'Pyruvate (glycolysis)'], {
    explanation: 'Reversed GDH uses up α-ketoglutarate, so ATP synthesis falls.',
  }),
  mcq('s6-3-2', 'ammonia-toxicity', 'Which pump does ammonia inhibit?', 'The Na⁺/K⁺-ATPase', ['The proton pump of the stomach', 'The calcium pump of muscle', 'The chloride pump of the lungs'], {
    explanation: 'Ammonia inhibits amino acid transport and the Na⁺/K⁺-ATPase.',
  }),
  tf({ id: 's6-3-3', conceptId: 'ammonia-toxicity', statement: 'Ammonia may impede the synthesis of the neurotransmitter GABA.', answer: true, explanation: 'AA3 slide 16.' }),
  mcq('s6-3-4', 'ammonia-toxicity', 'Why does a fall in ATP harm nerve cells?', 'Active transport and the nerve gradient fail', ['The cells make far too much protein for their needs', 'The cells swell with glucose', 'The cells divide too quickly'], {
    explanation: 'Active transport fails and the electrochemical gradient is lost.',
  }),
  mcq('s6-3-5', 'ammonia-toxicity', 'What may increased glutamine synthesis lead to?', 'Encephalopathy', ['Hepatomegaly', 'Osteoporosis (bone)', 'Anaemia'], {
    explanation: 'Increased glutamine synthesis may lead to encephalopathy.',
  }),

  // ─── Lesson 6 · S4 Excreting nitrogen ──────────────────────────────
  mcq('s6-4-1', 'nitrogen-excretion', 'How do birds and reptiles excrete nitrogen?', 'As uric acid', ['As ammonia', 'As urea', 'As glutamine'], {
    explanation: 'Birds and reptiles are uricotelic.',
  }),
  mcq('s6-4-2', 'nitrogen-excretion', 'Bony fishes excrete ammonia. What are they called?', 'Ammonotelic', ['Ureotelic', 'Uricotelic', 'Aminotelic (amino)'], {
    explanation: 'Most aquatic species are ammonotelic.',
  }),
  tf({ id: 's6-4-3', conceptId: 'nitrogen-excretion', statement: 'Humans are ureotelic.', answer: true, explanation: 'Terrestrial animals such as humans excrete urea.' }),
  mcq('s6-4-4', 'nitrogen-excretion', 'Which kind of animal is ureotelic?', 'Terrestrial animals', ['Bony fishes in the sea', 'Birds', 'Reptiles'], {
    explanation: 'Terrestrial animals excrete urea.',
  }),
  fill('s6-4-5', 'nitrogen-excretion', 'Animals that excrete uric acid are called ____.', ['uricotelic'], {
    explanation: 'Birds and reptiles are uricotelic.',
  }),

  // ─── Lesson 7 · S1 Five steps in two compartments ──────────────────
  mcq('s7-1-1', 'urea-cycle-steps', 'Which enzyme catalyses step I of the urea cycle?', 'Carbamoyl phosphate synthetase I', ['Ornithine transcarbamoylase', 'Argininosuccinate synthetase', 'Arginase (releasing urea and ornithine)'], {
    explanation: 'Step I: NH₃ → carbamoyl phosphate.',
  }),
  mcq('s7-1-2', 'urea-cycle-steps', 'Which molecule must ENTER the mitochondria for the cycle?', 'Ornithine', ['Citrulline', 'Arginine', 'Argininosuccinate'], {
    explanation: 'Ornithine enters; citrulline leaves.',
  }),
  tf({ id: 's7-1-3', conceptId: 'urea-cycle-steps', statement: 'Steps III, IV and V of the urea cycle are in the cytosol.', answer: true, explanation: 'The first two steps are mitochondrial.' }),
  mcq('s7-1-4', 'urea-cycle-steps', 'What drives step III forward?', 'Pyrophosphate cleavage', ['Orthophosphate cleavage', 'NADH oxidation', 'GTP hydrolysis by a G protein'], {
    explanation: 'Step II: orthophosphate; step III: pyrophosphate cleavage.',
  }),
  mcq('s7-1-5', 'urea-cycle-steps', 'Which blood test reflects LIVER function in the urea cycle story?', 'Blood ammonia', ['Blood urea nitrogen', 'Serum creatinine', 'Serum bilirubin only'], {
    explanation: 'BUN tests the kidney; blood ammonia tests the liver.',
  }),

  // ─── Lesson 7 · S2 Link to the citric acid cycle ───────────────────
  mcq('s7-2-1', 'urea-cycle-link', 'Which urea cycle step makes the fumarate that links to the citric acid cycle?', 'Argininosuccinate lyase', ['Arginase', 'Ornithine transcarbamoylase', 'Carbamoyl phosphate synthetase'], {
    explanation: 'Argininosuccinate → arginine + fumarate.',
  }),
  mcq('s7-2-2', 'urea-cycle-link', 'Which two enzymes turn fumarate into oxaloacetate?', 'Fumarase and malate dehydrogenase', ['Arginase and ornithine transcarbamoylase', 'Citrate synthase and aconitase', 'Pyruvate carboxylase and PEPCK'], {
    explanation: 'Fumarate → malate → oxaloacetate.',
  }),
  tf({ id: 's7-2-3', conceptId: 'urea-cycle-link', statement: 'Oxaloacetate from the urea cycle link can be converted to aspartate.', answer: true, explanation: 'Aspartate is a nitrogen donor for the urea cycle.' }),
  mcq('s7-2-4', 'urea-cycle-link', 'Why is aspartate made from oxaloacetate useful to the urea cycle?', 'It donates a nitrogen', ['It donates a carbon dioxide', 'It provides ATP directly', 'It removes the urea from cells'], {
    explanation: 'Aspartate supplies the second nitrogen in step III.',
  }),
  mcq('s7-2-5', 'urea-cycle-link', 'Where is fumarate turned into oxaloacetate?', 'In the mitochondria', ['In the cytosol', 'In the nucleus', 'In the kidney tubule'], {
    explanation: 'Fumarate enters the mitochondria.',
  }),

  // ─── Lesson 7 · S3 Regulation ──────────────────────────────────────
  mcq('s7-3-1', 'urea-regulation', 'Which amino acid stimulates NAG synthase?', 'Arginine', ['Lysine', 'Glycine (simplest)', 'Alanine'], {
    explanation: 'NAG synthase is stimulated by arginine.',
  }),
  mcq('s7-3-2', 'urea-regulation', 'From which two molecules is N-acetylglutamate made?', 'Acetyl-CoA and glutamate', ['Acetate and glutamine', 'Glycine and acetyl-CoA', 'Glutamate and free ornithine'], {
    explanation: 'NAG synthase uses acetyl-CoA and glutamate.',
  }),
  tf({ id: 's7-3-3', conceptId: 'urea-regulation', statement: 'Regulation of urea cycle enzymes is largely transcriptional.', answer: true, explanation: 'AA3 slide 34.' }),
  mcq('s7-3-4', 'urea-regulation', 'When is more N-acetylglutamate made?', 'When protein intake is high', ['When the person is fasting', 'When protein intake is low', 'When glucose levels are high'], {
    explanation: 'High protein intake raises NAG and so the cycle.',
  }),
  mcq('s7-3-5', 'urea-regulation', 'Outside the liver, what regulates the urea cycle enzymes?', 'Cytokines', ['Insulin only', 'Thyroxine', 'Vitamin K'], {
    explanation: 'Glucagon, insulin and glucocorticoids in the liver; cytokines elsewhere.',
  }),

  // ─── Lesson 7 · S4 Inherited defects ───────────────────────────────
  mcq('s7-4-1', 'urea-defects', 'What happens to infants with a complete urea cycle enzyme deficiency?', 'They die soon after their first protein meal', ['They develop normally into adulthood', 'They only show symptoms in old age', 'They recover fully without any treatment at all'], {
    explanation: 'Complete deficiency is fatal soon after the first protein meal.',
  }),
  mcq('s7-4-2', 'urea-defects', 'Which diet can urea cycle patients NOT tolerate?', 'Protein-rich diets', ['Fat-rich diets', 'Low-salt diets', 'Fruit and vegetable-rich diets'], {
    explanation: 'They cannot tolerate protein-rich diets.',
  }),
  tf({ id: 's7-4-3', conceptId: 'urea-defects', statement: 'Partial urea cycle enzyme deficiency can allow survival into adulthood with management.', answer: true, explanation: 'AA3 slide 31.' }),
  mcq('s7-4-4', 'urea-defects', 'Which raised blood substance causes the symptoms of urea cycle defects?', 'Ammonia', ['Urea', 'Glucose', 'Bilirubin'], {
    explanation: 'Hyperammonaemia: lethargy, stupor, convulsions.',
  }),
  mcq('s7-4-5', 'urea-defects', 'What happens in severe hyperammonaemia?', 'Coma and death', ['Rapid weight gain', 'Improved memory', 'Stronger muscles'], {
    explanation: 'Severe cases go on to coma and death.',
  }),

  // ─── Lesson 8 · S1 Methionine ──────────────────────────────────────
  mcq('s8-1-1', 'methionine', 'Which sulfur amino acid is essential?', 'Methionine', ['Cysteine', 'Taurine', 'Homocysteine from methionine'], {
    explanation: 'Methionine is essential; cysteine is made from it.',
  }),
  mcq('s8-1-2', 'methionine', 'Which cofactor do both enzymes of trans-sulfuration need?', 'PLP', ['Biotin', 'Thiamine', 'NADPH'], {
    explanation: 'Cystathionine β-synthase and γ-lyase are PLP enzymes.',
  }),
  tf({ id: 's8-1-3', conceptId: 'methionine', statement: 'The cystathionine β-synthase step is irreversible.', answer: true, explanation: 'Homocysteine + serine → cystathionine (irreversible).' }),
  mcq('s8-1-4', 'methionine', 'Which molecule forms when SAM donates its methyl group?', 'S-Adenosylhomocysteine', ['Cystathionine', 'Homocystine', 'Methyl-tetrahydrofolate'], {
    explanation: 'SAM → S-adenosylhomocysteine → homocysteine.',
  }),
  mcq('s8-1-5', 'methionine', 'What is the net effect of trans-sulfuration?', 'Homocysteine’s sulfhydryl moves to serine’s chain', ['Serine’s hydroxyl moves to homocysteine', 'Methionine’s methyl moves to cysteine', 'Cysteine’s sulfur is lost to the urine as sulfate'], {
    explanation: 'AA4 slide 10.',
  }),

  // ─── Lesson 8 · S2 Homocystinuria and cystathioninuria ─────────────
  mcq('s8-2-1', 'homocystinuria', 'Why is homocysteine dangerous to the heart?', 'It is prothrombotic', ['It lowers blood pressure', 'It slows the heart rate', 'It dissolves the heart valves'], {
    explanation: 'Homocysteine is prothrombotic, increasing cardiac events.',
  }),
  mcq('s8-2-2', 'homocystinuria', 'Which eye problem marks homocystinuria?', 'Bilateral lens dislocation', ['A cherry red spot', 'Blue whites of the eyes', 'Night blindness from birth only'], {
    explanation: 'Bilateral lens dislocation is a feature.',
  }),
  tf({ id: 's8-2-3', conceptId: 'homocystinuria', statement: 'Most people with cystathioninuria have no symptoms.', answer: true, explanation: 'AA4 slide 14: most are asymptomatic.' }),
  mcq('s8-2-4', 'homocystinuria', 'Which substance can be fed in cystathionine synthase deficiency?', 'Betaine', ['Methionine', 'Homocysteine', 'Aspartame'], {
    explanation: 'Feed betaine or its precursor choline; give less methionine.',
  }),
  mcq('s8-2-5', 'homocystinuria', 'How does homocysteine interfere with collagen?', 'It reacts with lysyl semialdehydes, blocking cross-links', ['It adds extra glycine to the collagen chains', 'It hydroxylates proline in the wrong place', 'It breaks the collagen triple helix apart with sulfite'], {
    explanation: 'It reacts with lysyl semialdehydes and interferes with cross-linking.',
  }),

  // ─── Lesson 8 · S3 Cysteine ────────────────────────────────────────
  mcq('s8-3-1', 'cysteine', 'Which coenzyme’s synthesis needs cysteine?', 'Coenzyme A', ['NAD⁺', 'FAD', 'Pyridoxal phosphate'], {
    explanation: 'Cysteine is a precursor of thiamine, biotin, lipoic acid and CoA.',
  }),
  mcq('s8-3-2', 'cysteine', 'Which enzyme makes sulfate from sulfite?', 'Sulfite oxidase', ['Cystathionine γ-lyase', 'Cysteine dioxygenase', 'Taurine synthase'], {
    explanation: 'Mitochondrial sulfite oxidase makes sulfate.',
  }),
  tf({ id: 's8-3-3', conceptId: 'cysteine', statement: 'Taurine helps clear cholesterol by conjugating bile acids.', answer: true, explanation: 'AA4 slides 19–20.' }),
  mcq('s8-3-4', 'cysteine', 'Which two proteins/peptides protect cells from oxidative stress using cysteine?', 'Thioredoxin and glutathione', ['Albumin and haemoglobin', 'Collagen and elastin fibres', 'Insulin and glucagon'], {
    explanation: 'Thioredoxin and glutathione protect cells.',
  }),
  mcq('s8-3-5', 'cysteine', 'What is the major catabolic product of cysteine?', 'Pyruvate', ['Acetyl-CoA', 'Succinyl-CoA', 'Oxaloacetate'], {
    explanation: 'A three-step pathway to pyruvate.',
  }),

  // ─── Lesson 9 · S1 Three carriers ──────────────────────────────────
  mcq('s9-1-1', 'one-carbon-carriers', 'Which carrier carries only methyl groups?', 'SAM', ['Biotin', 'Tetrahydrofolate', 'Vitamin B12 alone'], {
    explanation: 'SAM carries methyl (–CH₃).',
  }),
  mcq('s9-1-2', 'one-carbon-carriers', 'Which one-carbon form is the methylene group?', '–CH₂–', ['–CH₃', '–CHO', '–CH=NH (formimino)'], {
    explanation: 'Methylene is –CH₂–.',
  }),
  tf({ id: 's9-1-3', conceptId: 'one-carbon-carriers', statement: 'Biotin comes from the diet and from gut flora.', answer: true, explanation: 'AA4 slide 23.' }),
  mcq('s9-1-4', 'one-carbon-carriers', 'Which reactions use biotin?', 'Carboxylation reactions', ['Methylation reactions', 'Transamination reactions', 'Hydroxylation reactions'], {
    explanation: 'Biotin carries CO₂ for carboxylations.',
  }),
  mcq('s9-1-5', 'one-carbon-carriers', 'Which carrier carries the most kinds of one-carbon group?', 'Tetrahydrofolate', ['Biotin', 'SAM', 'Pyridoxal phosphate'], {
    explanation: 'FH₄ carries formyl, methenyl/methylene and methyl.',
  }),

  // ─── Lesson 9 · S2 Tetrahydrofolate ────────────────────────────────
  mcq('s9-2-1', 'thf', 'Which vitamin number is folate?', 'B9', ['B6', 'B12', 'B2'], {
    explanation: 'Folate is vitamin B9.',
  }),
  mcq('s9-2-2', 'thf', 'What is the first product when dihydrofolate reductase reduces folate?', '7,8-Dihydrofolate (FH₂)', ['5,6,7,8-Tetrahydrofolate', 'N⁵-Methyl-tetrahydrofolate', 'Para-aminobenzoic acid'], {
    explanation: 'Folate → FH₂ → FH₄.',
  }),
  tf({ id: 's9-2-3', conceptId: 'thf', statement: 'Folic acid is the synthetic form of folate.', answer: true, explanation: 'AA4 slide 28.' }),
  mcq('s9-2-4', 'thf', 'Which part of folate is para-aminobenzoate?', 'The middle part, between pteridine and glutamate', ['The ring that carries the one-carbon unit', 'The glutamate tail at the end', 'A part that is found only in synthetic folic acid tablets'], {
    explanation: 'Folate: pteridine + para-aminobenzoate + glutamate.',
  }),
  mcq('s9-2-5', 'thf', 'Are the one-carbon units on THF fixed in one form?', 'No — they are interconvertible', ['Yes — each stays in one form', 'Yes — only the methyl group is carried', 'No — they are lost at once'], {
    explanation: 'One-carbon units on FH₄ are interconvertible.',
  }),

  // ─── Lesson 9 · S3 The one-carbon pool ─────────────────────────────
  mcq('s9-3-1', 'thf', 'What is the major source of one-carbon units?', 'Serine', ['Histidine', 'Tryptophan', 'Formaldehyde from the air'], {
    explanation: 'The carbon removed when serine becomes glycine.',
  }),
  mcq('s9-3-2', 'thf', 'Which THF form supplies purine carbon C8?', 'N⁵,N¹⁰-Methenyl', ['N¹⁰-Formyl', 'N⁵-Methyl', 'N⁵,N¹⁰-Methylene'], {
    explanation: 'Histidine → N⁵,N¹⁰-methenyl → purine C8.',
  }),
  tf({ id: 's9-3-3', conceptId: 'thf', statement: 'Thymine synthesis depends on one-carbon units from THF.', answer: true, explanation: 'Methionine, homocysteine, purines and thymine depend on THF.' }),
  mcq('s9-3-4', 'thf', 'Which THF form passes its methyl to vitamin B12?', 'N⁵-Methyl', ['N¹⁰-Formyl', 'N⁵,N¹⁰-Methenyl', 'N⁵,N¹⁰-Methylene'], {
    explanation: 'N⁵-Methyl → methyl-B12.',
  }),
  mcq('s9-3-5', 'thf', 'Which THF form supplies purine carbon C2?', 'N¹⁰-Formyl', ['N⁵-Methyl', 'N⁵,N¹⁰-Methenyl', 'N⁵,N¹⁰-Methylene'], {
    explanation: 'Formate and tryptophan → N¹⁰-formyl → purine C2.',
  }),

  // ─── Lesson 9 · S4 Sulfonamides and folate disorders ───────────────
  mcq('s9-4-1', 'folate-disorders', 'Why do sulfonamides harm bacteria but not humans?', 'Humans lack the dihydropteroate enzymes', ['Humans have no folate at all', 'Bacteria have no DNA to protect', 'Sulfonamides cannot enter human cells at all'], {
    explanation: 'Bacteria make THF via dihydropteroate; humans do not.',
  }),
  mcq('s9-4-2', 'folate-disorders', 'With which molecule do sulfonamides compete?', 'Para-aminobenzoic acid (PABA)', ['Glutamic acid in folate', 'Pteridine ring of folate', 'Tetrahydrofolate itself (FH₄)'], {
    explanation: 'Sulfonamides compete with PABA.',
  }),
  tf({ id: 's9-4-3', conceptId: 'folate-disorders', statement: 'Impaired folate status can increase uracil in DNA.', answer: true, explanation: 'Less thymidylate means more uracil in DNA.' }),
  mcq('s9-4-4', 'folate-disorders', 'Which birth defects are linked to impaired folate status?', 'Neural tube defects', ['Cleft lip only', 'Extra fingers', 'Heart valve defects'], {
    explanation: 'Neural tube defects are on the list.',
  }),
  mcq('s9-4-5', 'folate-disorders', 'Which disorder is cblG?', 'Methionine synthase deficiency', ['Methionine synthase reductase deficiency', 'Hereditary folate malabsorption', 'Formiminotransferase deficiency'], {
    explanation: 'cblE: synthase reductase; cblG: methionine synthase.',
  }),
];
