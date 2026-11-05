// Biochemistry → Nucleic Acids: five more questions for every reading section, lessons
// 1–7 (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/nucleic-acids/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestionsA: Q[] = [
  // ─── Lesson 1 · S1 Bases ───────────────────────────────────────────
  mcq('s1-1-1', 'nucleotide-parts', 'Which bases are pyrimidines?', 'Cytosine, thymine and uracil', ['Adenine, guanine and cytosine', 'Adenine and guanine only, with two rings', 'Thymine and adenine only'], {
    explanation: 'Pyrimidines have one six-membered ring: C, T and U.',
  }),
  mcq('s1-1-2', 'nucleotide-parts', 'How are the atoms of the bases numbered?', 'Without primes', ['With primes', 'With Greek letters only', 'From the sugar outwards, with primes on each atom'], {
    explanation: 'Base atoms have no primes; sugar carbons have primes.',
  }),
  tf({ id: 's1-1-3', conceptId: 'nucleotide-parts', statement: 'The nitrogenous bases are planar and aromatic.', answer: true, explanation: 'They are planar, aromatic and heterocyclic.' }),
  mcq('s1-1-4', 'nucleotide-parts', 'What sizes of ring make up a purine?', 'One six-membered and one five-membered', ['Two six-membered rings fused together', 'One five-membered ring only', 'Three rings, each with two nitrogen atoms'], {
    explanation: 'Purines: a six- and a five-membered ring, fused.',
  }),
  fill('s1-1-5', 'nucleotide-parts', 'Adenine and guanine are ____.', ['purines', 'purine bases'], {
    explanation: 'Adenine and guanine are purines; C, T and U are pyrimidines.',
  }),

  // ─── Lesson 1 · S2 Nucleosides and nucleotides ─────────────────────
  mcq('s1-2-1', 'nucleotide-parts', 'Through which atom do pyrimidines join the sugar?', 'N1', ['N9', 'C1′', 'N3 of the ring'], {
    explanation: 'Purines bond at N9, pyrimidines at N1.',
  }),
  mcq('s1-2-2', 'nucleotide-parts', 'Why are nucleosides more water-soluble than free bases?', 'Their sugars make them more soluble', ['Their phosphates carry a positive charge', 'Their bases lose their rings in water', 'Their nitrogen atoms are all removed first'], {
    explanation: 'The sugar adds water-solubility.',
  }),
  tf({ id: 's1-2-3', conceptId: 'nucleotide-parts', statement: 'Uracil is found only in RNA.', answer: true, explanation: 'Uracil only in RNA; thymine only in DNA.' }),
  mcq('s1-2-4', 'nucleotide-parts', 'What is the nucleoside of guanine?', 'Guanosine', ['Guanylate', 'Guanidine', 'Deoxyguanylate (dGMP)'], {
    explanation: 'Guanine → guanosine → guanylate (GMP).',
  }),
  mcq('s1-2-5', 'nucleotide-parts', 'A nucleotide is a nucleoside plus what?', 'One or more phosphates', ['A second base', 'A second sugar', 'An amino acid on the base'], {
    explanation: 'Nucleotides are phosphate esters of nucleosides.',
  }),

  // ─── Lesson 1 · S3 What nucleotides do ─────────────────────────────
  mcq('s1-3-1', 'nucleotide-roles', 'Which nucleotide is part of NAD⁺, FAD and CoA?', 'AMP', ['GMP', 'UMP', 'CTP in its triphosphate form'], {
    explanation: 'AMP is a component of NAD⁺, NADP⁺, FAD and CoA.',
  }),
  mcq('s1-3-2', 'nucleotide-roles', 'What does adenosine help control?', 'Coronary blood flow', ['Bone growth', 'Hair colour', 'Insulin release from the pancreas'], {
    explanation: 'Adenosine helps control coronary blood flow.',
  }),
  tf({ id: 's1-3-3', conceptId: 'nucleotide-roles', statement: 'N⁶-methyladenosine is a minor base found in bacterial DNA.', answer: true, explanation: 'NA slide 28.' }),
  mcq('s1-3-4', 'nucleotide-roles', 'Which minor base is found in the DNA of animals and higher plants?', '5-Methylcytidine', ['N⁶-Methyladenosine', 'Pseudouridine', 'Dihydrouridine in tRNA'], {
    explanation: '5-Methylcytidine in animals and higher plants.',
  }),
  mcq('s1-3-5', 'nucleotide-roles', 'Which nucleotide is the main methyl donor?', 'SAM', ['ATP', 'cAMP', 'UDP-glucose in glycogen synthesis'], {
    explanation: 'S-Adenosylmethionine (SAM) donates methyl groups.',
  }),

  // ─── Lesson 1 · S4 A drug target ───────────────────────────────────
  mcq('s1-4-1', 'nucleotide-drugs', 'Which part of a nucleotide can be used for energy?', 'The ribose', ['The purine ring', 'The pyrimidine ring', 'The nitrogen atoms of both rings'], {
    explanation: 'Ribose can be used for energy; the rings cannot.',
  }),
  mcq('s1-4-2', 'nucleotide-drugs', 'Which two ways of making nucleotides do most organisms have?', 'De novo synthesis and salvage', ['Photosynthesis and digestion', 'Fermentation and oxidation', 'Transcription and translation'], {
    explanation: 'Nearly all make them de novo; many also salvage.',
  }),
  tf({ id: 's1-4-3', conceptId: 'nucleotide-drugs', statement: 'Nucleotide synthesis is a target for antibacterial drugs as well as anticancer drugs.', answer: true, explanation: 'Anticancer, antibacterial and antiviral drugs.' }),
  mcq('s1-4-4', 'nucleotide-drugs', 'Which drug is an antiviral named in the lecture?', 'Valacyclovir', ['Allopurinol', 'Methotrexate', 'Mycophenolic acid for transplants'], {
    explanation: 'Zidovudine, lamivudine and valacyclovir.',
  }),
  fill('s1-4-5', 'nucleotide-drugs', 'Making nucleotides from simple molecules, not recycled bases, is called ____ synthesis.', ['de novo'], {
    explanation: 'De novo synthesis builds the rings from scratch.',
  }),

  // ─── Lesson 2 · S1 Building on ribose phosphate ────────────────────
  mcq('s2-1-1', 'purine-de-novo', 'In which organ are purines mainly made?', 'The liver', ['The kidney', 'The spleen', 'Skeletal muscle cells'], {
    explanation: 'Purine synthesis is mainly in the liver.',
  }),
  tf({ id: 's2-1-2', conceptId: 'purine-de-novo', statement: 'PRPP synthetase catalyses the committed step of purine synthesis.', answer: false, explanation: 'The committed step is amidophosphoribosyl transferase; PRPP synthetase comes before it.' }),
  tf({ id: 's2-1-3', conceptId: 'purine-de-novo', statement: 'Purines are first made as free bases and then joined to ribose.', answer: false, explanation: 'The ring is assembled on ribose 5-phosphate.' }),
  mcq('s2-1-4', 'purine-de-novo', 'Why do methotrexate and sulfonamides block purine synthesis?', 'Two steps depend on THF', ['Two steps depend on vitamin B12', 'Every step needs biotin', 'The first step needs folate-free ATP'], {
    explanation: 'Two steps depend on tetrahydrofolate.',
  }),
  mcq('s2-1-5', 'purine-de-novo', 'What makes the committed step irreversible?', 'Hydrolysis of PPi', ['Release of CO₂', 'Use of GTP', 'Oxidation by NAD⁺'], {
    explanation: 'Hydrolysis of pyrophosphate drives it.',
  }),

  // ─── Lesson 2 · S2 Where the ring atoms come from ──────────────────
  mcq('s2-2-1', 'purine-de-novo', 'Which source gives the purine ring THREE atoms?', 'Glycine', ['Aspartate', 'CO₂', 'Glutamine amide'], {
    explanation: 'Glycine gives C4, C5 and N7.',
  }),
  mcq('s2-2-2', 'purine-de-novo', 'Which atom of the purine ring comes from CO₂?', 'C6', ['C2', 'N1', 'C8 of the five-membered ring'], {
    explanation: 'CO₂ supplies C6.',
  }),
  tf({ id: 's2-2-3', conceptId: 'purine-de-novo', statement: 'Glutamine supplies N3 and N9 of the purine ring.', answer: true, explanation: 'Glutamine: N3, N9.' }),
  mcq('s2-2-4', 'purine-de-novo', 'Which atom does aspartate supply?', 'N1', ['N3', 'N7', 'C6 from its carboxyl'], {
    explanation: 'Aspartate supplies N1.',
  }),
  mcq('s2-2-5', 'purine-de-novo', 'How many different sources build the purine ring, in the table?', 'Five', ['Three', 'Two', 'Seven'], {
    explanation: 'Aspartate, formyl-THF, glutamine, glycine and CO₂.',
  }),

  // ─── Lesson 2 · S3 IMP to AMP and GMP ──────────────────────────────
  mcq('s2-3-1', 'amp-gmp', 'Which intermediate lies between IMP and GMP?', 'Xanthylate (XMP)', ['Adenylosuccinate', 'Inosine', 'Hypoxanthine on its own'], {
    explanation: 'IMP → XMP (NAD⁺-linked) → GMP (using ATP).',
  }),
  mcq('s2-3-2', 'amp-gmp', 'Which molecule is released when adenylosuccinate becomes AMP?', 'Fumarate', ['Aspartate', 'Glutamate', 'Ammonia from the amide group'], {
    explanation: 'A lyase releases fumarate.',
  }),
  tf({ id: 's2-3-3', conceptId: 'amp-gmp', statement: 'Making AMP uses GTP, and making GMP uses ATP.', answer: true, explanation: 'Each branch uses the other’s triphosphate, balancing them.' }),
  mcq('s2-3-4', 'amp-gmp', 'Which drug blocks BOTH IMP → adenylate and IMP → xanthylate?', '6-Mercaptopurine', ['Mycophenolic acid', 'Allopurinol', 'Azaserine (glutamine analogue)'], {
    explanation: '6-MP blocks both; mycophenolic acid blocks IMP → guanylate.',
  }),
  mcq('s2-3-5', 'amp-gmp', 'Which enzymes convert AMP and GMP back to IMP?', 'AMP deaminase and GMP reductase', ['Adenylate kinase and GMP kinase', 'AMP synthase and GMP synthetase', 'Xanthine oxidase and urate oxidase'], {
    explanation: 'They keep AMP and GMP in balance.',
  }),

  // ─── Lesson 2 · S4 Regulation ──────────────────────────────────────
  mcq('s2-4-1', 'purine-regulation', 'What inhibits PRPP synthetase?', 'High phosphate and ADP', ['Low AMP and GMP', 'High glutamine and CO₂', 'Low glycine in the liver cell'], {
    explanation: 'High phosphate and ADP (with GDP).',
  }),
  mcq('s2-4-2', 'purine-regulation', 'Which enzyme does AMP inhibit in its own branch?', 'Adenylosuccinate synthetase', ['IMP dehydrogenase', 'GMP synthetase', 'PRPP synthetase of the ribose step'], {
    explanation: 'AMP inhibits adenylosuccinate synthetase.',
  }),
  tf({ id: 's2-4-3', conceptId: 'purine-regulation', statement: 'Regulation acts both at IMP synthesis and at the AMP/GMP branch.', answer: true, explanation: 'Two levels: PRPP → IMP, and IMP → AMP or GMP.' }),
  mcq('s2-4-4', 'purine-regulation', 'How do AMP, GMP and IMP inhibit the committed step?', 'Cumulatively', ['Competitively with PRPP only', 'Not at all', 'By destroying the enzyme'], {
    explanation: 'The committed step is inhibited cumulatively.',
  }),
  fill('s2-4-5', 'purine-regulation', 'Regulation keeps the amounts of AMP and GMP ____.', ['balanced', 'in balance', 'balance'], {
    explanation: 'Regulation balances the nucleotides.',
  }),

  // ─── Lesson 3 · S1 Salvage ─────────────────────────────────────────
  mcq('s3-1-1', 'purine-salvage', 'Which salvage enzyme acts on adenine?', 'APRT', ['HGPRT', 'ADA', 'Purine nucleoside phosphorylase'], {
    explanation: 'APRT salvages adenine; HGPRT salvages hypoxanthine and guanine.',
  }),
  mcq('s3-1-2', 'purine-salvage', 'Why does salvage save fuel compared with de novo synthesis?', 'Only one salvage reaction uses ATP', ['Salvage makes ATP as it goes', 'Salvage needs no PRPP', 'Salvage happens only during sleep at night'], {
    explanation: 'One ATP-using reaction, against several de novo steps.',
  }),
  tf({ id: 's3-1-3', conceptId: 'purine-salvage', statement: 'Salvage converts free purine bases straight back to nucleotides.', answer: true, explanation: 'With PRPP, bases become nucleotides again.' }),
  mcq('s3-1-4', 'purine-salvage', 'What is the by-product when a purine base is salvaged?', 'PPi', ['CO₂', 'NH₃', 'Free ribose without phosphate'], {
    explanation: 'Base + PRPP → nucleotide + PPi.',
  }),
  mcq('s3-1-5', 'purine-salvage', 'Which product does APRT make?', 'AMP', ['IMP', 'GMP', 'Adenosine (nucleoside)'], {
    explanation: 'Adenine + PRPP → AMP + PPi.',
  }),

  // ─── Lesson 3 · S2 Breaking purines down ───────────────────────────
  mcq('s3-2-1', 'purine-degradation', 'Where are dietary nucleic acids broken down?', 'In the duodenum', ['In the stomach', 'In the mouth', 'In the large intestine only'], {
    explanation: 'They survive the stomach and are degraded in the duodenum.',
  }),
  mcq('s3-2-2', 'purine-degradation', 'What do most other animals convert uric acid into?', 'Allantoin and onwards', ['Glucose', 'Creatinine', 'Ammonia only, directly'], {
    explanation: 'Uric acid → allantoin → allantoic acid → urea → ammonia.',
  }),
  tf({ id: 's3-2-3', conceptId: 'purine-degradation', statement: 'Xanthine oxidase catalyses two reactions in purine breakdown.', answer: true, explanation: 'Hypoxanthine → xanthine → uric acid.' }),
  mcq('s3-2-4', 'purine-degradation', 'Why do birds excrete uric acid as a paste?', 'To save water', ['To store energy', 'To make feathers', 'To kill bacteria in the gut'], {
    explanation: 'Excreting a paste saves water.',
  }),
  mcq('s3-2-5', 'purine-degradation', 'What happens to ribose 1-phosphate from purine breakdown?', 'It can be reused in PRPP', ['It is always excreted', 'It becomes uric acid', 'It is stored as glycogen'], {
    explanation: 'It is isomerised to ribose 5-phosphate and reused.',
  }),

  // ─── Lesson 3 · S3 Gout ────────────────────────────────────────────
  mcq('s3-3-1', 'gout', 'What was the patient’s serum uric acid in the lecture’s case?', '8.0 mg/dl', ['5.0 mg/dl', '7.0 mg/dl', '2.0 mg/dl'], {
    explanation: '8.0 mg/dl, above the normal < 7.0.',
  }),
  mcq('s3-3-2', 'gout', 'Which foods preceded the gout attack in the lecture’s case?', 'Liver, onions and beer', ['Rice, beans and water', 'Bread, milk and tea', 'Fish, eggs and orange juice'], {
    explanation: 'Liver, onions and beer — purine-rich food and alcohol.',
  }),
  tf({ id: 's3-3-3', conceptId: 'gout', statement: 'Colchicine is also used to treat gout.', answer: true, explanation: 'NM slide 42.' }),
  mcq('s3-3-4', 'gout', 'Which purine is allopurinol an analogue of?', 'Hypoxanthine', ['Adenine', 'Guanine', 'Uric acid itself'], {
    explanation: 'Allopurinol is a hypoxanthine analogue.',
  }),
  mcq('s3-3-5', 'gout', 'Where can uric acid crystals deposit, besides joints?', 'Kidneys and ureters', ['Lungs and heart', 'Brain and eyes', 'Skin and hair follicles'], {
    explanation: 'Joints (gouty arthritis), kidneys and ureters.',
  }),

  // ─── Lesson 3 · S4 Lesch–Nyhan syndrome and ADA deficiency ─────────
  mcq('s3-4-1', 'lesch-nyhan-ada', 'Why is de novo purine synthesis so high in Lesch–Nyhan syndrome?', 'Unused PRPP accumulates and drives it', ['Too much HGPRT is made', 'Uric acid activates the pathway', 'Allopurinol taken for gout stimulates it'], {
    explanation: 'PRPP piles up and drives synthesis up 200-fold.',
  }),
  mcq('s3-4-2', 'lesch-nyhan-ada', 'Which behaviour marks Lesch–Nyhan syndrome?', 'Self-mutilation', ['Excessive sleep', 'Loss of appetite only', 'Fear of water'], {
    explanation: 'Spasticity, aggressiveness and self-mutilation.',
  }),
  tf({ id: 's3-4-3', conceptId: 'lesch-nyhan-ada', statement: 'Lesch–Nyhan syndrome was the first neuropsychiatric abnormality traced to a single enzyme.', answer: true, explanation: 'NM slides 45–46.' }),
  mcq('s3-4-4', 'lesch-nyhan-ada', 'Which cells does ADA deficiency kill?', 'Both B and T lymphocytes', ['Red blood cells only', 'Liver cells only', 'Nerve cells of the brain'], {
    explanation: 'It selectively kills B and T lymphocytes.',
  }),
  mcq('s3-4-5', 'lesch-nyhan-ada', 'What do all known ADA mutants have in common?', 'They perturb the active site', ['They are all deletions', 'They all add an amino acid', 'They all change the gene’s promoter'], {
    explanation: 'All known ADA mutants perturb the active site.',
  }),

  // ─── Lesson 4 · S1 Six steps to UMP ────────────────────────────────
  mcq('s4-1-1', 'pyrimidine-de-novo', 'How many steps make UMP?', 'Six', ['Eleven', 'Three', 'Nine'], {
    explanation: 'Six steps, against eleven for IMP.',
  }),
  mcq('s4-1-2', 'pyrimidine-de-novo', 'Which statement about how the pyrimidine ring is assembled is correct?', 'The ring is made first, then joined to ribose phosphate', ['The ring is built on ribose phosphate from the start', 'No ribose phosphate is needed at any point', 'The ring is taken whole from the diet and never made in the body'], {
    explanation: 'Pyrimidine ring first; purine ring on ribose phosphate.',
  }),
  tf({ id: 's4-1-3', conceptId: 'pyrimidine-de-novo', statement: 'CPS II is cytosolic and serves pyrimidine synthesis.', answer: true, explanation: 'CPS I is mitochondrial (urea cycle); CPS II cytosolic.' }),
  mcq('s4-1-4', 'pyrimidine-de-novo', 'Which electron acceptor does dihydroorotate dehydrogenase reduce?', 'Ubiquinone', ['NAD⁺', 'NADP⁺', 'Oxygen directly'], {
    explanation: 'It sits on the inner mitochondrial membrane and reduces ubiquinone.',
  }),
  mcq('s4-1-5', 'pyrimidine-de-novo', 'Which atom of the pyrimidine ring comes from glutamine?', 'N3', ['N1', 'C2', 'C6 from aspartate'], {
    explanation: 'N3 from the amide of glutamine.',
  }),

  // ─── Lesson 4 · S2 Regulation ──────────────────────────────────────
  mcq('s4-2-1', 'pyrimidine-regulation', 'Which nucleotides inhibit CPS II in animals?', 'UDP and UTP', ['ATP and PRPP', 'CTP and GTP', 'AMP and GMP from purines'], {
    explanation: 'UDP and UTP inhibit; ATP and PRPP activate.',
  }),
  mcq('s4-2-2', 'pyrimidine-regulation', 'In E. coli, which enzyme is the regulated step?', 'ATCase', ['CPS II', 'OMP decarboxylase', 'CTP synthetase of the cell'], {
    explanation: 'Bacteria regulate at aspartate transcarbamoylase.',
  }),
  tf({ id: 's4-2-3', conceptId: 'pyrimidine-regulation', statement: 'ATP activates bacterial ATCase by competing with CTP for the regulatory sites.', answer: true, explanation: 'NM slides 60, 62.' }),
  mcq('s4-2-4', 'pyrimidine-regulation', 'What happens when ATCase is treated with a mercurial?', 'It loses allosteric control but stays active', ['It loses all catalytic activity', 'It becomes more sensitive to CTP', 'It turns into CPS II and loses its activity'], {
    explanation: 'Mercurials remove allosteric control without loss of activity.',
  }),
  mcq('s4-2-5', 'pyrimidine-regulation', 'Which nucleotides competitively inhibit OMP decarboxylase?', 'UMP and CMP', ['ATP and GTP', 'IMP and XMP', 'dTMP and dUMP'], {
    explanation: 'UMP and CMP inhibit OMP decarboxylase.',
  }),

  // ─── Lesson 4 · S3 Orotic aciduria ─────────────────────────────────
  mcq('s4-3-1', 'orotic-aciduria', 'Which enzymes are deficient in type I orotic aciduria?', 'Orotate phosphoribosyltransferase and OMP decarboxylase', ['OMP decarboxylase alone, in the cytosol', 'CPS II and ATCase of the CAD protein', 'Dihydroorotase and thymidylate synthase of the second protein'], {
    explanation: 'Type I: both; type II: OMP decarboxylase alone.',
  }),
  mcq('s4-3-2', 'orotic-aciduria', 'How is orotic aciduria treated?', 'With uridine or cytidine', ['With allopurinol', 'With vitamin C', 'With a purine-free diet for life'], {
    explanation: 'Uridine or cytidine bypass the block.',
  }),
  tf({ id: 's4-3-3', conceptId: 'orotic-aciduria', statement: 'Orotic aciduria causes severe anaemia.', answer: true, explanation: 'Stunted growth, severe anaemia and infections.' }),
  mcq('s4-3-4', 'orotic-aciduria', 'Why is orotic aciduria the only known inherited defect in this pathway?', 'Other defects are lethal to the fetus', ['Other steps never mutate', 'Other defects are treated before birth', 'Other steps are not needed'], {
    explanation: 'Other defects are lethal to the fetus.',
  }),
  mcq('s4-3-5', 'orotic-aciduria', 'What is excreted in excess in orotic aciduria?', 'Orotic acid', ['Uric acid', 'Uracil', 'β-Alanine (C3)'], {
    explanation: 'Orotic acid accumulates and is excreted.',
  }),

  // ─── Lesson 4 · S4 Deoxyribonucleotides and thymidylate ────────────
  mcq('s4-4-1', 'deoxyribonucleotides', 'Which proteins supply the hydrogens for ribonucleotide reductase?', 'Thioredoxin and glutaredoxin', ['Ferredoxin and flavodoxin', 'Cytochrome c and albumin', 'Ubiquitin and actin filaments'], {
    explanation: 'Hydrogens come via thioredoxin and glutaredoxin.',
  }),
  mcq('s4-4-2', 'deoxyribonucleotides', 'Why is dUTP hydrolysed by dUTPase?', 'To stop dUTP being put into DNA', ['To make more dUTP for RNA', 'To store energy as ATP', 'To make free uracil for the urine'], {
    explanation: 'dUTPase prevents dUTP being incorporated into DNA.',
  }),
  tf({ id: 's4-4-3', conceptId: 'deoxyribonucleotides', statement: 'Thymidylate synthase is the only reaction in which THF’s net oxidation state changes.', answer: true, explanation: 'It produces dihydrofolate.' }),
  mcq('s4-4-4', 'deoxyribonucleotides', 'Which drugs competitively inhibit dihydrofolate reductase?', 'Aminopterin, methotrexate and trimethoprim', ['Fluorodeoxyuridylate and 6-azauridine', 'Allopurinol and colchicine', 'Azaserine and acivicin, the glutamine analogues'], {
    explanation: 'All three are antifolates acting on DHFR.',
  }),
  mcq('s4-4-5', 'deoxyribonucleotides', 'Why do antifolates affect hair follicles and bone marrow?', 'They are rapidly growing normal cells', ['They store large amounts of folate', 'They have no DNA of their own', 'They are cancer cells already, before treatment'], {
    explanation: 'Rapidly dividing normal cells also need dTMP.',
  }),

  // ─── Lesson 4 · S5 Pyrimidine breakdown ────────────────────────────
  mcq('s4-5-1', 'pyrimidine-degradation', 'How are uracil and thymine broken down?', 'By reduction', ['By oxidation', 'By hydrolysis only', 'By phosphorylation'], {
    explanation: 'Reduction — unlike purines, which are oxidised.',
  }),
  mcq('s4-5-2', 'pyrimidine-degradation', 'What does β-aminoisobutyrate come from?', 'Thymine', ['Cytosine', 'Uracil', 'Adenine'], {
    explanation: 'Thymine → β-aminoisobutyrate; C and U → β-alanine.',
  }),
  tf({ id: 's4-5-3', conceptId: 'pyrimidine-degradation', statement: 'Pyrimidine bases are broken down in the liver.', answer: true, explanation: 'NM slides 79–81.' }),
  mcq('s4-5-4', 'pyrimidine-degradation', 'What does β-alanine become?', 'Malonyl-CoA', ['Methylmalonyl-CoA', 'Uric acid', 'Succinate'], {
    explanation: 'β-Alanine → malonyl-CoA; β-aminoisobutyrate → methylmalonyl-CoA.',
  }),
  mcq('s4-5-5', 'pyrimidine-degradation', 'Which bases give β-alanine?', 'Cytosine and uracil', ['Thymine only', 'Adenine and guanine', 'All five bases'], {
    explanation: 'Cytosine and uracil → β-alanine.',
  }),

  // ─── Lesson 5 · S1 The double helix ────────────────────────────────
  tf({ id: 's5-1-1', conceptId: 'dna-double-helix', statement: 'A–T pairs are held by more hydrogen bonds than G–C pairs.', answer: false, explanation: 'A–T has 2 hydrogen bonds; G–C has 3.' }),
  mcq('s5-1-2', 'dna-double-helix', 'Which metal ion helps stabilise the helix by reducing phosphate repulsion?', 'Mg²⁺', ['Fe²⁺', 'Cu⁺', 'Zn²⁺ at the bases'], {
    explanation: 'Cations such as Mg²⁺ reduce repulsion.',
  }),
  tf({ id: 's5-1-3', conceptId: 'dna-double-helix', statement: 'In DNA, the moles of guanine equal the moles of cytosine.', answer: true, explanation: 'Chargaff: A = T and G = C.' }),
  mcq('s5-1-4', 'dna-double-helix', 'Where are the bases in the double helix?', 'Inside, with backbones outside', ['Outside, with backbones inside', 'Alternating inside and outside', 'Free in the grooves only'], {
    explanation: 'Sugar–phosphate backbones outside; bases inside.',
  }),
  mcq('s5-1-5', 'dna-double-helix', 'When was the double-helix model built?', '1953', ['1952', '1962', '1973'], {
    explanation: 'Franklin’s pictures in 1952; the model in 1953.',
  }),

  // ─── Lesson 5 · S2 RNA versus DNA ──────────────────────────────────
  mcq('s5-2-1', 'dna-rna-differences', 'Why does DNA use thymine rather than uracil?', 'Deaminated cytosine (uracil) can then be spotted and repaired', ['Thymine is cheaper for the cell to make', 'Uracil cannot pair with adenine', 'Thymine binds more magnesium ions, so the whole helix becomes more stable'], {
    explanation: 'Cytosine deaminates to uracil; using T makes that damage detectable.',
  }),
  mcq('s5-2-2', 'dna-rna-differences', 'Where is RNA made?', 'In the nucleus', ['In the cytoplasm', 'In the mitochondria only', 'In the lysosomes'], {
    explanation: 'RNA is made in the nucleus and moves to the cytoplasm.',
  }),
  tf({ id: 's5-2-3', conceptId: 'dna-rna-differences', statement: 'RNA is usually single-stranded.', answer: true, explanation: 'DNA is double; RNA usually single.' }),
  mcq('s5-2-4', 'dna-rna-differences', 'What does ribose have at its 2′ carbon?', 'An –OH group', ['A hydrogen only', 'A phosphate group', 'A methyl group'], {
    explanation: 'Ribose: OH at 2′; deoxyribose: H at 2′.',
  }),
  mcq('s5-2-5', 'dna-rna-differences', 'Why can RNA use the cheaper uracil?', 'RNA is not repaired', ['RNA has no adenine', 'RNA lasts for years', 'RNA is double-stranded'], {
    explanation: 'RNA is not repaired, so it uses the cheaper U.',
  }),

  // ─── Lesson 5 · S3 Absorbance and melting ──────────────────────────
  mcq('s5-3-1', 'dna-properties', 'What does the A260/A280 ratio assess?', 'Purity', ['Length', 'Melting temperature', 'Base sequence'], {
    explanation: 'A260/A280 assesses purity.',
  }),
  mcq('s5-3-2', 'dna-properties', 'What happens to A260 when DNA is denatured?', 'It rises', ['It falls', 'It stays the same', 'It drops to zero'], {
    explanation: 'Base stacking reduces absorbance; unstacking raises it.',
  }),
  tf({ id: 's5-3-3', conceptId: 'dna-properties', statement: 'DNA rich in G:C pairs has a higher melting temperature.', answer: true, explanation: 'Three hydrogen bonds need more heat.' }),
  mcq('s5-3-4', 'dna-properties', 'What precipitates nucleic acids?', 'Ethanol', ['Water', 'Salt-free buffer', 'Heat above 90 °C alone'], {
    explanation: 'Nucleic acids are precipitated by ethanol.',
  }),
  mcq('s5-3-5', 'dna-properties', 'At about what temperature are DNA strands separated?', 'Above about 90 °C', ['About 37 °C', 'About 60 °C', 'Below 0 °C (frozen)'], {
    explanation: 'Heat above ~90 °C breaks hydrogen bonds.',
  }),

  // ─── Lesson 5 · S4 Forms, supercoiling and chromatin ───────────────
  mcq('s5-4-1', 'dna-forms-packaging', 'Which DNA form has almost no major groove?', 'Z-form', ['A-form', 'B-form', 'C-form'], {
    explanation: 'Z-DNA forms in G:C-rich regions with almost no major groove.',
  }),
  mcq('s5-4-2', 'dna-forms-packaging', 'How long is the DNA in a human nucleus, about?', 'About 2 m', ['About 2 mm', 'About 2 cm', 'About 2 µm'], {
    explanation: 'About 2 m fits in a 5 µm nucleus.',
  }),
  tf({ id: 's5-4-3', conceptId: 'dna-forms-packaging', statement: 'A-form is favoured at low water and common for RNA.', answer: true, explanation: 'NA slide 49.' }),
  mcq('s5-4-4', 'dna-forms-packaging', 'What do histone octamers form with DNA wrapped around them?', 'Nucleosomes', ['Ribosomes', 'Centrosomes', 'Spliceosomes'], {
    explanation: 'DNA wraps around histone octamers: nucleosomes.',
  }),
  mcq('s5-4-5', 'dna-forms-packaging', 'What can negative supercoiling promote at palindromic sequences?', 'Cruciforms', ['Telomeres', 'Okazaki fragments', 'Thymine dimers'], {
    explanation: 'Negative supercoiling can promote cruciforms.',
  }),

  // ─── Lesson 6 · S1 Three rules ─────────────────────────────────────
  mcq('s6-1-1', 'replication-rules', 'What does “semiconservative” mean?', 'Each daughter helix has one old and one new strand', ['Each daughter helix has two new strands', 'Half the genes are copied each time', 'The old helix is broken into pieces and rebuilt'], {
    explanation: 'Shown by Meselson and Stahl.',
  }),
  mcq('s6-1-2', 'replication-rules', 'How long are bacterial Okazaki fragments?', 'About 1000–2000 nucleotides', ['About 150–200 nucleotides', 'About 10–20 nucleotides', 'About 1 million nucleotides'], {
    explanation: 'Bacteria 1000–2000; eukaryotes 150–200.',
  }),
  tf({ id: 's6-1-3', conceptId: 'replication-rules', statement: 'The leading strand is made continuously towards the fork.', answer: true, explanation: 'The lagging strand is made in Okazaki fragments.' }),
  mcq('s6-1-4', 'replication-rules', 'How was the replication origin shown to be a unique A=T-rich site?', 'By denaturation mapping', ['By X-ray crystallography', 'By Sanger sequencing', 'By density gradients'], {
    explanation: 'Denaturation mapping showed the origin.',
  }),
  mcq('s6-1-5', 'replication-rules', 'What forces the lagging strand to be made as Okazaki fragments?', 'Polymerases make DNA only 5′→3′', ['The lagging strand has no template', 'Ligase cannot join long pieces', 'Primase works only once'], {
    explanation: 'Synthesis must run away from the fork on that strand.',
  }),

  // ─── Lesson 6 · S2 At the E. coli fork ─────────────────────────────
  mcq('s6-2-1', 'replication-machinery', 'Which enzyme relieves supercoiling ahead of the fork?', 'Gyrase', ['Helicase', 'Primase', 'DNA ligase'], {
    explanation: 'Gyrase, a topoisomerase.',
  }),
  mcq('s6-2-2', 'replication-machinery', 'Which enzyme seals nicks between fragments?', 'DNA ligase', ['DNA polymerase III', 'Primase', 'Helicase at the fork'], {
    explanation: 'Ligase seals nicks.',
  }),
  tf({ id: 's6-2-3', conceptId: 'replication-machinery', statement: 'All three E. coli DNA polymerases can proofread.', answer: true, explanation: 'All have 3′→5′ exonuclease.' }),
  mcq('s6-2-4', 'replication-machinery', 'How many origins does the E. coli chromosome have?', 'One', ['Two', 'Hundreds', 'None'], {
    explanation: 'One replicon, one origin (oriC).',
  }),
  mcq('s6-2-5', 'replication-machinery', 'What do helicase and primase form together?', 'The primosome', ['The replisome core', 'The nucleosome', 'The spliceosome'], {
    explanation: 'Primase with helicase forms the primosome.',
  }),

  // ─── Lesson 6 · S3 Eukaryotes ──────────────────────────────────────
  mcq('s6-3-1', 'eukaryotic-replication', 'Which eukaryotic polymerase replicates mitochondrial DNA?', 'γ', ['α', 'δ', 'ε'], {
    explanation: 'Pol γ replicates mitochondrial DNA.',
  }),
  mcq('s6-3-2', 'eukaryotic-replication', 'Which polymerase has primase activity?', 'α', ['β', 'γ', 'δ'], {
    explanation: 'Pol α starts replication with primase activity.',
  }),
  tf({ id: 's6-3-3', conceptId: 'eukaryotic-replication', statement: 'Eukaryotic replication is faster than bacterial replication.', answer: false, explanation: 'It is slower and more complex.' }),
  mcq('s6-3-4', 'eukaryotic-replication', 'Which polymerase is the main replicative enzyme for both strands?', 'δ', ['β', 'γ', 'α'], {
    explanation: 'Pol δ is the main replicative enzyme.',
  }),
  mcq('s6-3-5', 'eukaryotic-replication', 'Which polymerase repairs DNA with low fidelity?', 'β', ['δ', 'α', 'γ'], {
    explanation: 'Pol β: DNA repair, low fidelity.',
  }),

  // ─── Lesson 6 · S4 Telomeres ───────────────────────────────────────
  mcq('s6-4-1', 'telomeres', 'How many times is the telomere repeat repeated?', '500–5000 times', ['5–50 times', '50,000 times', 'Just once at each end'], {
    explanation: 'TTAGGG repeated 500–5000 times.',
  }),
  mcq('s6-4-2', 'telomeres', 'Why would chromosomes shorten without telomerase?', 'The end left after primer removal cannot be copied', ['Helicase cuts the ends off', 'Ligase joins the ends together', 'Histones digest the ends of each chromosome in turn'], {
    explanation: 'The terminal primer’s gap cannot be filled.',
  }),
  tf({ id: 's6-4-3', conceptId: 'telomeres', statement: 'Telomeres are capped by proteins.', answer: true, explanation: 'Telomeres are repeats capped by proteins.' }),
  mcq('s6-4-4', 'telomeres', 'What does telomerase carry to make the repeats?', 'Its own RNA template', ['Its own DNA template', 'A protein template', 'No template at all'], {
    explanation: 'An RNA-dependent DNA polymerase with its own RNA.',
  }),
  mcq('s6-4-5', 'telomeres', 'What do telomeres protect?', 'Chromosome ends', ['Gene promoters', 'Centromeres (middle)', 'Ribosomes'], {
    explanation: 'They protect chromosome ends.',
  }),

  // ─── Lesson 7 · S1 DNA damage ──────────────────────────────────────
  mcq('s7-1-1', 'dna-damage', 'What does UV light form in DNA?', 'Thymine dimers', ['Guanine adducts', 'Strand cross-links with protein', 'Uracil from cytosine'], {
    explanation: 'UV forms thymine dimers.',
  }),
  mcq('s7-1-2', 'dna-damage', 'Which of these is an EXOGENOUS cause of DNA damage?', 'X-rays', ['Replication errors', 'Deamination', 'Attack by ROS'], {
    explanation: 'UV, X-rays and γ-rays are exogenous.',
  }),
  tf({ id: 's7-1-3', conceptId: 'dna-damage', statement: 'Aflatoxin is a chemical mutagen.', answer: true, explanation: 'NA slide 95.' }),
  mcq('s7-1-4', 'dna-damage', 'Which alkylation product is given as an example of damage?', 'O⁶-Methylguanine', ['8-Hydroxyguanine', 'Thymine dimer', 'Pseudouridine'], {
    explanation: 'Alkylation, e.g. O⁶-methylguanine.',
  }),
  mcq('s7-1-5', 'dna-damage', 'Which drug is an alkylating mutagen?', 'Cyclophosphamide', ['Methotrexate', 'Allopurinol', 'Penicillin (antibiotic)'], {
    explanation: 'Nitrogen mustard and cyclophosphamide.',
  }),

  // ─── Lesson 7 · S2 Mutations ───────────────────────────────────────
  mcq('s7-2-1', 'mutations', 'Which kind of point mutation changes an amino acid?', 'Missense', ['Silent', 'Nonsense', 'Frameshift'], {
    explanation: 'Missense, e.g. sickle cell haemoglobin.',
  }),
  mcq('s7-2-2', 'mutations', 'How does mutation rate differ from mutation frequency?', 'Rate is per gene per generation; frequency per individuals', ['Rate is per individual; frequency per gene', 'They are two names for the same thing', 'Rate counts only germ-line mutations in a whole population'], {
    explanation: 'NA slide 94.',
  }),
  tf({ id: 's7-2-3', conceptId: 'mutations', statement: 'Somatic mutations are passed to the next generation.', answer: false, explanation: 'Only germ-line mutations are passed on.' }),
  mcq('s7-2-4', 'mutations', 'Which form of a base lets G pair with T?', 'The rare enol form', ['The usual keto form', 'The methylated form', 'The deaminated form'], {
    explanation: 'A tautomeric shift to the enol form.',
  }),
  mcq('s7-2-5', 'mutations', 'Which good effect of mutation does the lecture name?', 'They allow evolution and polymorphism', ['They always cure inherited disease', 'They make proteins last longer', 'They stop cancer from forming in the body'], {
    explanation: 'Mutations allow evolution and polymorphism.',
  }),

  // ─── Lesson 7 · S3 Repair ──────────────────────────────────────────
  mcq('s7-3-1', 'dna-repair', 'Which repair removes a whole damaged stretch, such as a thymine dimer?', 'Nucleotide excision', ['Base excision', 'Photoreactivation', 'Mismatch skipping by polymerase'], {
    explanation: 'Nucleases cut out the stretch; polymerase and ligase fill in.',
  }),
  mcq('s7-3-2', 'dna-repair', 'Which wavelengths activate photolyase?', '300–600 nm', ['100–200 nm', '700–900 nm', '1000–2000 nm'], {
    explanation: 'Photolyase is activated by 300–600 nm light.',
  }),
  tf({ id: 's7-3-3', conceptId: 'dna-repair', statement: 'Recombinational repair uses a piece of the parental strand to fill a gap.', answer: true, explanation: 'It fills the gap left after replication skips a lesion.' }),
  mcq('s7-3-4', 'dna-repair', 'Which eye problem is increased in xeroderma pigmentosum?', 'Cataracts', ['Glaucoma', 'Night blindness', 'A cherry red spot'], {
    explanation: 'Increased skin cancers and cataracts.',
  }),
  mcq('s7-3-5', 'dna-repair', 'Which enzyme starts base excision repair?', 'DNA glycosylase', ['Photolyase', 'Telomerase enzyme', 'Primase'], {
    explanation: 'DNA glycosylase removes the altered base.',
  }),
];
