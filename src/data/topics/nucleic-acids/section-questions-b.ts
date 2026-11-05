// Biochemistry → Nucleic Acids: five more questions for every reading section, lessons
// 8–14 (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/nucleic-acids/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestionsB: Q[] = [
  // ─── Lesson 8 · S1 Kinds of RNA ────────────────────────────────────
  mcq('s8-1-1', 'rna-types', 'Which rRNAs are in the eukaryotic 60S subunit?', '5S, 5.8S and 28S', ['16S only', '5S and 23S', '18S and 28S together'], {
    explanation: '60S: 5S, 5.8S and 28S; 40S: 18S.',
  }),
  mcq('s8-1-2', 'rna-types', 'What caps the 5′ end of eukaryotic mRNA?', 'A methylated GTP', ['A poly(A) tail', 'A CCA sequence', 'A methylated cytosine'], {
    explanation: '5′ cap of methylated GTP; 3′ poly(A) tail.',
  }),
  tf({ id: 's8-1-3', conceptId: 'rna-types', statement: 'Most RNAs have stem–loop secondary structures.', answer: true, explanation: 'From base pairing within the strand.' }),
  mcq('s8-1-4', 'rna-types', 'Which RNA is involved in RNA silencing?', 'miRNA', ['rRNA', 'tRNA', 'snRNA of splicing'], {
    explanation: 'miRNA: silencing and post-transcriptional regulation.',
  }),
  mcq('s8-1-5', 'rna-types', 'How long is a typical snRNA?', 'About 150 nucleotides', ['About 15 nucleotides', 'About 1500 nucleotides', 'About 15,000 nucleotides'], {
    explanation: 'snRNA ~150 nucleotides.',
  }),

  // ─── Lesson 8 · S2 Transcription in E. coli ────────────────────────
  mcq('s8-2-1', 'prokaryotic-transcription', 'Which subunit of E. coli RNA polymerase binds DNA?', 'β′', ['α', 'ω', 'σ factor'], {
    explanation: 'β′ binds DNA, β holds the active site, α is the scaffold.',
  }),
  mcq('s8-2-2', 'prokaryotic-transcription', 'Which protein binds after sigma leaves?', 'NusA', ['Rho', 'TFIID', 'Tus protein'], {
    explanation: 'After 6–10 nucleotides sigma leaves and NusA binds.',
  }),
  tf({ id: 's8-2-3', conceptId: 'prokaryotic-transcription', statement: 'RNA polymerase needs no primer.', answer: true, explanation: 'Unlike DNA polymerase, it starts without one.' }),
  mcq('s8-2-4', 'prokaryotic-transcription', 'What kind of enzyme is rho?', 'An ATP-dependent helicase', ['A sigma factor that binds the promoter', 'An RNA ligase', 'A DNA gyrase'], {
    explanation: 'Rho unwinds the RNA–DNA hybrid.',
  }),
  mcq('s8-2-5', 'prokaryotic-transcription', 'About how fast does the core enzyme make RNA?', '20–50 bases per second', ['2–5 bases per second', '200–500 bases per second', '1 base per minute'], {
    explanation: 'About 20–50 bases per second.',
  }),

  // ─── Lesson 8 · S3 Eukaryotic transcription ────────────────────────
  mcq('s8-3-1', 'eukaryotic-transcription', 'Which RNA polymerase makes tRNA?', 'RNA polymerase III', ['RNA polymerase I', 'RNA polymerase II', 'Bacterial σ⁷⁰ holoenzyme'], {
    explanation: 'Pol I rRNA; pol II mRNA; pol III tRNA and small RNAs.',
  }),
  mcq('s8-3-2', 'eukaryotic-transcription', 'Where is the eukaryotic TATA box?', 'About −19 to −27', ['About −10', 'About −35', 'About +1 to +10 downstream'], {
    explanation: 'TATA (Goldberg–Hogness) box at about −19 to −27.',
  }),
  tf({ id: 's8-3-3', conceptId: 'eukaryotic-transcription', statement: 'Eukaryotic RNA polymerases bind promoters by themselves.', answer: false, explanation: 'Transcription factors assemble them.' }),
  mcq('s8-3-4', 'eukaryotic-transcription', 'Which antibiotic inhibits the bacterial RNA polymerase?', 'Rifamycin', ['α-Amanitin', 'Actinomycin D', 'Penicillin'], {
    explanation: 'Rifamycin: bacterial polymerase; α-amanitin: pol II.',
  }),
  mcq('s8-3-5', 'eukaryotic-transcription', 'How does the initial message compare with the final mRNA?', 'About twice the bases', ['About the same length', 'About half the bases', 'About ten times shorter'], {
    explanation: 'Introns removed: the initial message is about twice as long.',
  }),

  // ─── Lesson 9 · S1 Charging tRNA ───────────────────────────────────
  mcq('s9-1-1', 'trna-charging', 'What is the first product of amino acid activation?', 'Aminoacyl-AMP', ['Aminoacyl-tRNA', 'Peptidyl-tRNA', 'Free AMP'], {
    explanation: 'Amino acid + ATP → aminoacyl-AMP + PPi.',
  }),
  mcq('s9-1-2', 'trna-charging', 'How many aminoacyl-tRNA synthetases does each amino acid have?', 'Its own one', ['One shared by all', 'Two, one for each class', 'None — tRNAs charge themselves'], {
    explanation: 'Each amino acid has its own synthetase.',
  }),
  tf({ id: 's9-1-3', conceptId: 'trna-charging', statement: 'Charging a tRNA happens in two steps.', answer: true, explanation: 'Activation, then transfer to tRNA.' }),
  mcq('s9-1-4', 'trna-charging', 'What is released when aminoacyl-AMP transfers its amino acid to tRNA?', 'AMP', ['PPi', 'ATP', 'GTP'], {
    explanation: 'Aminoacyl-AMP + tRNA → aminoacyl-tRNA + AMP.',
  }),
  fill('s9-1-5', 'trna-charging', 'Synthetases recognise ____ elements, mostly in the acceptor stem and anticodon loop.', ['identity'], {
    explanation: 'Identity elements tell each synthetase its tRNA.',
  }),

  // ─── Lesson 9 · S2 On the ribosome ─────────────────────────────────
  mcq('s9-2-1', 'translation-steps', 'Which site holds the growing polypeptide chain?', 'The P site', ['The A site', 'The E site', 'The 5′ cap'], {
    explanation: 'A: incoming; P: peptidyl; E: exit.',
  }),
  mcq('s9-2-2', 'translation-steps', 'Which are the stop codons?', 'UAA, UGA and UAG', ['AUG, UAA and UGG', 'UUU, UAA and UGA', 'AAA, GGG and CCC'], {
    explanation: 'UAA, UGA and UAG have no tRNA.',
  }),
  tf({ id: 's9-2-3', conceptId: 'translation-steps', statement: 'In bacteria, transcription and translation are coupled.', answer: true, explanation: 'In eukaryotes mRNA is processed and exported first.' }),
  mcq('s9-2-4', 'translation-steps', 'Where does the small subunit bind prokaryotic mRNA?', 'At the leader sequence', ['At the 5′ cap', 'At the poly(A) tail', 'At the stop codon at the end'], {
    explanation: 'Leader sequence in prokaryotes; 5′ cap in eukaryotes.',
  }),
  mcq('s9-2-5', 'translation-steps', 'Where does the empty tRNA go after translocation?', 'The E site', ['The A site', 'The P site', 'The nucleus'], {
    explanation: 'It moves to the E site and leaves.',
  }),

  // ─── Lesson 9 · S3 The genetic code ────────────────────────────────
  mcq('s9-3-1', 'genetic-code', 'How many codons are there in total?', '64', ['61', '20', '3'], {
    explanation: '4 × 4 × 4 = 64; 61 code amino acids, 3 stop.',
  }),
  mcq('s9-3-2', 'genetic-code', 'How many tRNAs do mammalian cells make?', 'More than 150', ['Exactly 20', 'Exactly 31', 'About 64, one per codon'], {
    explanation: 'At least 31 are needed; mammals make more than 150.',
  }),
  tf({ id: 's9-3-3', conceptId: 'genetic-code', statement: 'The genetic code is non-overlapping.', answer: true, explanation: 'It is read continuously from a fixed start.' }),
  mcq('s9-3-4', 'genetic-code', 'What lets one tRNA read several codons?', 'Wobble at the third base', ['Overlap of codons', 'Two anticodons per tRNA', 'Reading the code backwards'], {
    explanation: 'Wobble at the third base.',
  }),
  mcq('s9-3-5', 'genetic-code', 'Why do similar codons code similar amino acids?', 'To limit the effects of mutation', ['To speed up translation', 'To save tRNAs', 'To start translation at the right place'], {
    explanation: 'NA slides 178, 180.',
  }),

  // ─── Lesson 10 · S1 Genes and their expression ─────────────────────
  mcq('s10-1-1', 'gene-regulation-basics', 'Which is a constitutive (housekeeping) gene?', 'Actin', ['β-Galactosidase', 'Tryptophan synthase', 'Tyrosine aminotransferase'], {
    explanation: 'Actin, ubiquitin, GAPDH and tubulin are housekeeping genes.',
  }),
  mcq('s10-1-2', 'gene-regulation-basics', 'How many genes do bacterial genomes have?', '500–600', ['15,000–50,000', '5–6', '5 million'], {
    explanation: 'Bacteria 500–600; multicellular eukaryotes 15,000–50,000.',
  }),
  tf({ id: 's10-1-3', conceptId: 'gene-regulation-basics', statement: 'All nucleated cells of a body have the same DNA.', answer: true, explanation: 'They differ in which genes they express.' }),
  mcq('s10-1-4', 'gene-regulation-basics', 'What does an activator do?', 'Increases expression (positive regulation)', ['Decreases expression (negative regulation)', 'Destroys the mRNA', 'Copies the gene'], {
    explanation: 'Positive regulation: an activator increases expression.',
  }),
  mcq('s10-1-5', 'gene-regulation-basics', 'In eukaryotes, where is gene expression controlled?', 'At many points', ['Only at transcription initiation', 'Only at translation', 'Only at protein breakdown'], {
    explanation: 'Control is spread over many points.',
  }),

  // ─── Lesson 10 · S2 Operons ────────────────────────────────────────
  mcq('s10-2-1', 'operon-parts', 'Where is the operator?', 'Between the promoter and the genes', ['Far away on another bacterial chromosome', 'After the terminator', 'Inside the first gene'], {
    explanation: 'The regulatory protein binds there.',
  }),
  mcq('s10-2-2', 'operon-parts', 'What does an inducer do?', 'Pulls the repressor off the operator', ['Keeps the repressor bound on the operator', 'Destroys RNA polymerase', 'Adds a new promoter'], {
    explanation: 'Inducer: on; corepressor: off.',
  }),
  tf({ id: 's10-2-3', conceptId: 'operon-parts', statement: 'The regulatory gene that makes the repressor can lie far from the operon.', answer: true, explanation: 'GE slides 46–48.' }),
  mcq('s10-2-4', 'operon-parts', 'Which binds the bacterial −10 and −35 regions?', 'Sigma factor', ['The repressor', 'The ribosome', 'TFIID protein'], {
    explanation: 'Conserved −10 and −35 regions bind sigma.',
  }),
  mcq('s10-2-5', 'operon-parts', 'Which part of an operon does RNA polymerase bind?', 'The promoter', ['The operator', 'The terminator', 'The regulatory gene'], {
    explanation: 'RNA polymerase binds the promoter.',
  }),

  // ─── Lesson 10 · S3 The lac operon ─────────────────────────────────
  mcq('s10-3-1', 'lac-operon', 'What does lacY encode?', 'Permease', ['β-Galactosidase', 'Thiogalactoside transacetylase', 'The Lac repressor'], {
    explanation: 'lacY: permease, bringing lactose in.',
  }),
  mcq('s10-3-2', 'lac-operon', 'Which molecule actually binds the Lac repressor?', 'Allolactose', ['Glucose', 'Galactose', 'Tryptophan (trp)'], {
    explanation: 'Lactose (allolactose) binds the repressor.',
  }),
  tf({ id: 's10-3-3', conceptId: 'lac-operon', statement: 'The lac operon is inducible.', answer: true, explanation: 'Lactose switches it on.' }),
  mcq('s10-3-4', 'lac-operon', 'What does β-galactosidase split lactose into?', 'Glucose and galactose', ['Two glucoses', 'Fructose and glucose', 'Galactose and mannose'], {
    explanation: 'Lactose → glucose + galactose.',
  }),
  mcq('s10-3-5', 'lac-operon', 'What does lacA encode?', 'Thiogalactoside transacetylase', ['Permease', 'β-Galactosidase', 'The Lac repressor made by the i gene'], {
    explanation: 'lacZ, lacY and lacA.',
  }),

  // ─── Lesson 10 · S4 The trp operon ─────────────────────────────────
  mcq('s10-4-1', 'trp-operon', 'What role does tryptophan play at the trp operon?', 'Corepressor', ['Inducer', 'Activator protein', 'Promoter'], {
    explanation: 'Bound to the repressor, it enhances operator binding.',
  }),
  mcq('s10-4-2', 'trp-operon', 'What is the attenuator?', 'A provisional stop signal in the leader', ['A permanent promoter for the genes', 'A second operator further downstream of the genes', 'A tRNA for tryptophan'], {
    explanation: 'It decides whether transcription stops early.',
  }),
  tf({ id: 's10-4-3', conceptId: 'trp-operon', statement: 'Without tryptophan, the trp operator is free and the genes are transcribed.', answer: true, explanation: 'GE slides 41, 56.' }),
  mcq('s10-4-4', 'trp-operon', 'What decides the outcome of attenuation?', 'A ribosome stalling in the leader', ['Sigma leaving the RNA polymerase', 'Rho binding the RNA', 'The 5′ cap'], {
    explanation: 'Coupled translation in the leader decides it.',
  }),
  mcq('s10-4-5', 'trp-operon', 'What kind of control does attenuation give?', 'Graded control', ['All-or-none control', 'No control at all', 'Control at the protein level'], {
    explanation: 'Attenuation adds graded control.',
  }),

  // ─── Lesson 11 · S1 Many control points ────────────────────────────
  mcq('s11-1-1', 'eukaryotic-control-levels', 'What separates transcription from translation in eukaryotes?', 'The nuclear membrane', ['The plasma cell membrane', 'The Golgi', 'The ER'], {
    explanation: 'The nuclear membrane separates them.',
  }),
  mcq('s11-1-2', 'eukaryotic-control-levels', 'What do Hox genes encode?', 'Homeodomain regulatory proteins', ['Structural collagen proteins of bone', 'Ribosomal RNAs', 'Histone proteins'], {
    explanation: 'Hox genes encode homeodomain regulatory proteins.',
  }),
  tf({ id: 's11-1-3', conceptId: 'eukaryotic-control-levels', statement: 'Operons are known in eukaryotes.', answer: false, explanation: 'Operons are not known in eukaryotes.' }),
  mcq('s11-1-4', 'eukaryotic-control-levels', 'Which is NOT one of the eukaryotic control levels?', 'Operator binding', ['RNA processing', 'mRNA degradation', 'Translation'], {
    explanation: 'Operators are only in prokaryotes.',
  }),
  mcq('s11-1-5', 'eukaryotic-control-levels', 'What do Hox genes control?', 'Development of body parts', ['Blood clotting', 'Breakdown of glucose', 'Cell division in adults only'], {
    explanation: 'Master genes for body-part development.',
  }),

  // ─── Lesson 11 · S2 Chromatin and methylation ──────────────────────
  mcq('s11-2-1', 'chromatin-epigenetics', 'What does acetylation of histones do?', 'Loosens their grip, allowing transcription', ['Tightens their grip, stopping transcription', 'Removes them from the cell', 'Methylates the DNA'], {
    explanation: 'Acetylation (and phosphorylation) loosens histones.',
  }),
  mcq('s11-2-2', 'chromatin-epigenetics', 'Which gene is silenced by methylation in fragile X syndrome?', 'FMR-1', ['TP53', 'CFTR', 'HEXA gene'], {
    explanation: 'FMR-1 is silenced by methylation.',
  }),
  tf({ id: 's11-2-3', conceptId: 'chromatin-epigenetics', statement: 'Euchromatin is diffuse and transcribed.', answer: true, explanation: 'Heterochromatin is condensed and not transcribed.' }),
  mcq('s11-2-4', 'chromatin-epigenetics', 'Why is one X chromosome inactivated in females?', 'To equalise X-linked gene dosage', ['To prevent cancer', 'To make more histones', 'To speed up replication of the whole X chromosome'], {
    explanation: 'It equalises dosage with males.',
  }),
  mcq('s11-2-5', 'chromatin-epigenetics', 'How do histones repress transcription?', 'By blocking DNA-binding proteins', ['By cutting the DNA', 'By binding mRNA', 'By making the DNA single-stranded'], {
    explanation: 'Histones block DNA-binding proteins.',
  }),

  // ─── Lesson 11 · S3 Transcription control ──────────────────────────
  mcq('s11-3-1', 'eukaryotic-control-levels', 'How can activators work thousands of base pairs away?', 'By DNA looping', ['By moving along the DNA', 'By cutting the DNA', 'By binding the ribosome'], {
    explanation: 'DNA looping, aided by architectural proteins and co-activators.',
  }),
  mcq('s11-3-2', 'eukaryotic-control-levels', 'Where do regulatory proteins bind to activate distant promoters?', 'Enhancers', ['Operators', 'Terminators', 'Introns only'], {
    explanation: 'Enhancers bind regulatory proteins.',
  }),
  tf({ id: 's11-3-3', conceptId: 'eukaryotic-control-levels', statement: 'Some signals act by phosphorylating transcription factors.', answer: true, explanation: 'GE slide 80.' }),
  mcq('s11-3-4', 'eukaryotic-control-levels', 'Where do steroid hormones find their receptors?', 'Inside the cell', ['On the cell surface', 'In the blood', 'In the ribosome'], {
    explanation: 'Intracellular receptors; the complex binds HREs.',
  }),
  mcq('s11-3-5', 'eukaryotic-control-levels', 'What gives combinatorial control?', 'Many shared regulatory proteins', ['One unique regulatory protein for each gene', 'Operators', 'Sigma factors'], {
    explanation: 'Combinatorial control from many shared regulators.',
  }),

  // ─── Lesson 11 · S4 After transcription ────────────────────────────
  mcq('s11-4-1', 'post-transcriptional', 'How many As are added to stored egg mRNAs after fertilisation?', 'About 150', ['About 15', 'About 1500', 'About 5'], {
    explanation: 'Short tails (15–90 As) are lengthened by ~150 As.',
  }),
  mcq('s11-4-2', 'post-transcriptional', 'What fraction of primary transcripts never leave the nucleus?', 'About half', ['None', 'Almost all', 'About a tenth'], {
    explanation: 'About half never leave.',
  }),
  tf({ id: 's11-4-3', conceptId: 'post-transcriptional', statement: 'tRNA and rRNA are very stable.', answer: true, explanation: 'GE slide 71.' }),
  mcq('s11-4-4', 'post-transcriptional', 'A protein starts with N-terminal glycine. What half-life does the lecture predict?', '20 hours or more', ['3 minutes or less', 'About 1 hour', 'About 1 second'], {
    explanation: 'Cys, Ala, Ser, Thr, Gly, Val, Pro, Met ≥ 20 h.',
  }),
  mcq('s11-4-5', 'post-transcriptional', 'With iron present, what do iron regulatory proteins do?', 'Let go of iron-responsive elements', ['Bind iron-responsive elements tightly', 'Destroy ferritin mRNA', 'Block transferrin'], {
    explanation: 'With iron they let go, allowing ferritin translation.',
  }),

  // ─── Lesson 11 · S5 Measuring expression ───────────────────────────
  mcq('s11-5-1', 'expression-measurement', 'What does a DNA microarray give?', 'A rough measure of many mRNAs at once', ['An exact count of a single chosen mRNA', 'The full genome sequence', 'The protein half-lives'], {
    explanation: 'Expression profiling of many mRNAs.',
  }),
  mcq('s11-5-2', 'expression-measurement', 'Which enzyme first copies mRNA into cDNA for real-time PCR?', 'Reverse transcriptase', ['Taq polymerase', 'RNA polymerase II', 'DNA ligase (sealing)'], {
    explanation: 'Reverse transcriptase makes cDNA.',
  }),
  tf({ id: 's11-5-3', conceptId: 'expression-measurement', statement: 'cDNA lacks introns.', answer: true, explanation: 'It is copied from mature mRNA.' }),
  mcq('s11-5-4', 'expression-measurement', 'Which is more sensitive: microarrays or real-time PCR?', 'Real-time PCR', ['Microarrays', 'They are the same', 'Neither measures mRNA'], {
    explanation: 'Real-time PCR is more sensitive and accurate.',
  }),
  fill('s11-5-5', 'expression-measurement', 'Measuring many mRNAs at once is called expression ____.', ['profiling'], {
    explanation: 'DNA microarrays do expression profiling.',
  }),

  // ─── Lesson 12 · S1 What cancer is ─────────────────────────────────
  mcq('s12-1-1', 'cancer-basics', 'From which tissue do sarcomas arise?', 'Mesoderm', ['Ectoderm', 'Endoderm', 'Bone marrow'], {
    explanation: 'Sarcomas from mesoderm (bone, muscle).',
  }),
  mcq('s12-1-2', 'cancer-basics', 'Which growth factors do malignant cells use to stimulate angiogenesis?', 'FGF and VEGF', ['EGF and NGF', 'PDGF and TGF-β', 'Insulin and IGF'], {
    explanation: 'FGF and VEGF.',
  }),
  tf({ id: 's12-1-3', conceptId: 'cancer-basics', statement: 'Malignant tumours lack contact inhibition.', answer: true, explanation: 'GE slides 85–86, 90, 95.' }),
  mcq('s12-1-4', 'cancer-basics', 'About what fraction of cells that break free manage to metastasise?', 'About 1 in 10⁶', ['About 1 in 10', 'About 1 in 100', 'All of them'], {
    explanation: 'About 1 in 10⁶ succeed.',
  }),
  mcq('s12-1-5', 'cancer-basics', 'Where do lymphomas arise?', 'In white cells of the lymph glands', ['In white cells of the bone marrow spaces', 'In the bone and muscle', 'In the skin epithelium'], {
    explanation: 'Leukaemias from marrow; lymphomas from lymph glands.',
  }),

  // ─── Lesson 12 · S2 Causes and stages ──────────────────────────────
  mcq('s12-2-1', 'cancer-basics', 'Which virus is linked to Burkitt’s lymphoma?', 'Epstein–Barr virus', ['Hepatitis B virus', 'HPV', 'HTLV I and HTLV II viruses'], {
    explanation: 'EBV: Burkitt’s lymphoma.',
  }),
  mcq('s12-2-2', 'cancer-basics', 'Which stage pushes a mutated cell into S phase with a mitogen?', 'Promotion', ['Initiation', 'Progression', 'Metastasis'], {
    explanation: 'Promotion: a mitogen pushes the cell into S phase.',
  }),
  tf({ id: 's12-2-3', conceptId: 'cancer-basics', statement: 'Most cancer is caused by somatic mutations.', answer: true, explanation: 'GE slides 91–92.' }),
  mcq('s12-2-4', 'cancer-basics', 'Which cancer is linked to hepatitis B?', 'Liver cancer', ['Cervical cancer', 'Leukaemia', 'Lymphoma'], {
    explanation: 'Hepatitis B: liver.',
  }),
  mcq('s12-2-5', 'cancer-basics', 'Which stage includes angiogenesis and metastasis?', 'Progression', ['Initiation', 'Promotion', 'Reversion (repair)'], {
    explanation: 'Progression: angiogenesis, invasiveness, metastasis.',
  }),

  // ─── Lesson 12 · S3 Oncogenes and tumour suppressors ───────────────
  mcq('s12-3-1', 'oncogenes-suppressors', 'In the car analogy, what is a tumour suppressor gene?', 'The brake', ['The accelerator', 'The steering wheel', 'The fuel'], {
    explanation: 'Oncogene = accelerator; tumour suppressor = brake.',
  }),
  mcq('s12-3-2', 'oncogenes-suppressors', 'How many copies of a proto-oncogene must be mutated to cause cancer?', 'One', ['Both', 'None', 'Three'], {
    explanation: 'Oncogenes are dominant: one copy is enough.',
  }),
  tf({ id: 's12-3-3', conceptId: 'oncogenes-suppressors', statement: 'p53 is called the “guardian of the genome”.', answer: true, explanation: 'GE slides 104–105.' }),
  mcq('s12-3-4', 'oncogenes-suppressors', 'What does accumulated p53 do after DNA damage?', 'Halts the cell cycle and starts apoptosis', ['Speeds up cell division', 'Repairs the DNA itself', 'Makes new histones to repack the damaged DNA'], {
    explanation: 'It switches on genes that halt the cycle and trigger apoptosis.',
  }),
  mcq('s12-3-5', 'oncogenes-suppressors', 'What kind of mutation turns a proto-oncogene into an oncogene?', 'Gain of function', ['Loss of function', 'Silent mutation', 'Deletion of both copies'], {
    explanation: 'Oncogenes: gain of function, dominant.',
  }),

  // ─── Lesson 12 · S4 Hallmarks, cell death and treatment ────────────
  mcq('s12-4-1', 'cancer-hallmarks-death', 'What happens to cells in necrosis?', 'They swell and burst', ['They shrink with intact membranes', 'They divide faster', 'They turn into stem cells'], {
    explanation: 'Necrosis: swelling and bursting; apoptosis: shrinking.',
  }),
  mcq('s12-4-2', 'cancer-hallmarks-death', 'Which drug targets HER2?', 'Herceptin', ['Tamoxifen', 'Gleevec', 'Methotrexate'], {
    explanation: 'Herceptin: HER2; tamoxifen: ER/PR; Gleevec: BCR/ABL.',
  }),
  tf({ id: 's12-4-3', conceptId: 'cancer-hallmarks-death', statement: 'Evading immune destruction is an emerging hallmark of cancer.', answer: true, explanation: 'With reprogrammed energy metabolism.' }),
  mcq('s12-4-4', 'cancer-hallmarks-death', 'What guides CRISPR–Cas9 to its site?', 'A guide RNA', ['A protein antibody', 'A DNA primer', 'A ribosome'], {
    explanation: 'A guide RNA directs the cut.',
  }),
  mcq('s12-4-5', 'cancer-hallmarks-death', 'Which is a target of caspases in apoptosis?', 'Lamins', ['Ribosomes', 'Mitochondrial DNA', 'Haemoglobin'], {
    explanation: 'Targets include lamins, the cytoskeleton and caspase-activated DNase.',
  }),

  // ─── Lesson 13 · S1 Cutting and joining DNA ────────────────────────
  mcq('s13-1-1', 'rdna-basics', 'What kinds of ends can restriction enzymes leave?', 'Sticky or blunt', ['Round or square', 'Long or short', 'Methylated or bare'], {
    explanation: 'Sticky or blunt ends.',
  }),
  mcq('s13-1-2', 'rdna-basics', 'How are transformed host cells selected?', 'With antibiotics', ['With heat', 'With UV light', 'With coloured dyes only'], {
    explanation: 'Select transformants with antibiotics.',
  }),
  tf({ id: 's13-1-3', conceptId: 'rdna-basics', statement: 'Restriction enzymes are called “molecular scissors”.', answer: true, explanation: 'RD slide 5.' }),
  mcq('s13-1-4', 'rdna-basics', 'Which step joins the gene into the vector?', 'Ligation', ['Transformation', 'Selection', 'Restriction'], {
    explanation: 'Mix and ligate.',
  }),
  mcq('s13-1-5', 'rdna-basics', 'What kind of host cells are used to multiply recombinant DNA?', 'Rapidly dividing cells', ['Nerve cells', 'Mature red blood cells', 'Dead cells'], {
    explanation: 'Rapidly dividing host cells multiply it.',
  }),

  // ─── Lesson 13 · S2 Vectors ────────────────────────────────────────
  mcq('s13-2-1', 'vectors', 'Which vector carries the largest insert?', 'YAC', ['Plasmid', 'Phage λ', 'Cosmid'], {
    explanation: 'YAC: up to 1 million bp.',
  }),
  mcq('s13-2-2', 'vectors', 'Up to what insert size does a cosmid carry?', '45 kb', ['10 kb', '15 kb', '1 Mb'], {
    explanation: 'Cosmid up to 45 kb.',
  }),
  tf({ id: 's13-2-3', conceptId: 'vectors', statement: 'Electroporation is one way to put DNA into cells.', answer: true, explanation: 'Also the particle gun.' }),
  mcq('s13-2-4', 'vectors', 'What does a particle gun shoot into cells?', 'DNA-coated tungsten pellets', ['Bacteria', 'Antibiotics', 'Restriction enzymes and ligase'], {
    explanation: 'Tungsten pellets carry the DNA.',
  }),
  mcq('s13-2-5', 'vectors', 'Which vector is made from plasmid and phage features?', 'Cosmid', ['YAC', 'Shuttle vector', 'Phage λ'], {
    explanation: 'Cosmids combine plasmid and phage features.',
  }),

  // ─── Lesson 13 · S3 Products ───────────────────────────────────────
  mcq('s13-3-1', 'rdna-products', 'Which recombinant product helps heal diabetic ulcers?', 'PDGF', ['TPA', 'DNase', 'Insulin'], {
    explanation: 'PDGF for diabetic ulcers.',
  }),
  mcq('s13-3-2', 'rdna-products', 'Which promoter lets proteins be secreted in transgenic animals’ milk?', 'β-Lactoglobulin', ['Insulin promoter', 'Lac promoter', 'Globin promoter'], {
    explanation: 'A mammary promoter (β-lactoglobulin).',
  }),
  tf({ id: 's13-3-3', conceptId: 'rdna-products', statement: 'A Plasmodium falciparum antigen made in E. coli is used for malaria vaccine work.', answer: true, explanation: 'RD slide 20.' }),
  mcq('s13-3-4', 'rdna-products', 'When did the Recombinant DNA Advisory Committee set containment rules?', '1974', ['1953', '1990', '2001'], {
    explanation: 'RAC, 1974.',
  }),
  mcq('s13-3-5', 'rdna-products', 'Which disease risk do recombinant clotting factors avoid?', 'HIV and hepatitis from pooled blood', ['Diabetes from the factor', 'Gout from the factor', 'Cancer caused by the clotting factor itself'], {
    explanation: 'Pooled blood may carry HIV or hepatitis B and C.',
  }),

  // ─── Lesson 13 · S4 Libraries ──────────────────────────────────────
  mcq('s13-4-1', 'libraries', 'What does RNase H do in making a cDNA library?', 'Nicks the mRNA to give primers', ['Copies the mRNA into DNA', 'Joins the two DNA strands together', 'Adds the poly(A) tail'], {
    explanation: 'RNase H nicks the mRNA, giving primers.',
  }),
  mcq('s13-4-2', 'libraries', 'How is genomic DNA cut for a genomic library?', 'Complete or partial digestion, or shearing', ['Only by complete digestion', 'Only by heat', 'Only by copying with reverse transcriptase'], {
    explanation: 'RD slides 77, 80.',
  }),
  tf({ id: 's13-4-3', conceptId: 'libraries', statement: 'In genomic libraries all sequences are equally represented.', answer: false, explanation: 'Not all sequences are equally represented.' }),
  mcq('s13-4-4', 'libraries', 'Which enzymes complete the second cDNA strand?', 'DNA polymerase I and ligase', ['Reverse transcriptase only', 'RNA polymerase II in the nucleus', 'Restriction enzymes'], {
    explanation: 'DNA polymerase I and ligase.',
  }),
  mcq('s13-4-5', 'libraries', 'Which library would contain intron sequences?', 'A genomic library', ['A cDNA library', 'A library of mature mRNA', 'Neither'], {
    explanation: 'cDNA has no introns; genomic DNA does.',
  }),

  // ─── Lesson 14 · S1 PCR ────────────────────────────────────────────
  mcq('s14-1-1', 'pcr', 'At about what temperature is DNA denatured in PCR?', 'About 95 °C', ['About 72 °C', 'About 54 °C', 'About 37 °C'], {
    explanation: 'Denaturation ~95 °C, annealing ~54 °C, extension 72 °C.',
  }),
  mcq('s14-1-2', 'pcr', 'How long are PCR primers?', 'About 20–35 nucleotides', ['About 2–3 nucleotides', 'About 200–350 nucleotides', 'About 2000 nucleotides'], {
    explanation: '~20–35 nucleotides.',
  }),
  tf({ id: 's14-1-3', conceptId: 'pcr', statement: 'PCR can work on damaged DNA.', answer: true, explanation: 'A listed benefit.' }),
  mcq('s14-1-4', 'pcr', 'Which dye stains DNA in a gel under UV?', 'Ethidium bromide', ['Methylene blue', 'Eosin', 'Crystal violet (Gram stain)'], {
    explanation: 'RD slides 58–59.',
  }),
  mcq('s14-1-5', 'pcr', 'How many cycles are usually run?', '25–40', ['2–4', '100–200', '1000'], {
    explanation: 'Usually 25–40 cycles.',
  }),

  // ─── Lesson 14 · S2 Genetic testing ────────────────────────────────
  mcq('s14-2-1', 'genetic-testing', 'How many DdeI sites does the HbS β-globin gene have?', 'Two', ['Three', 'One', 'Four'], {
    explanation: 'HbA has three; HbS two.',
  }),
  mcq('s14-2-2', 'genetic-testing', 'What does genetic SCREENING cover, compared with testing?', 'The population at large', ['Only people with symptoms', 'Only family members', 'Only newborns with jaundice'], {
    explanation: 'Testing targets symptoms or family history; screening covers everyone.',
  }),
  tf({ id: 's14-2-3', conceptId: 'genetic-testing', statement: 'Carrier detection is used for Duchenne muscular dystrophy.', answer: true, explanation: 'Also Tay–Sachs and cystic fibrosis.' }),
  mcq('s14-2-4', 'genetic-testing', 'Which method detects the GLC1A glaucoma mutation after PCR?', 'Allele-specific oligonucleotide hybridisation', ['Southern blotting with DdeI', 'Sanger sequencing only', 'RFLP analysis with a β-globin probe and DdeI'], {
    explanation: 'RD slide 32.',
  }),
  mcq('s14-2-5', 'genetic-testing', 'What does RFLP analysis detect?', 'Loss or gain of a restriction site', ['Changes in protein shape', 'Amounts of mRNA', 'Blood groups of the ABO system'], {
    explanation: 'RD slides 28–30.',
  }),

  // ─── Lesson 14 · S3 DNA typing ─────────────────────────────────────
  mcq('s14-3-1', 'dna-typing', 'How long are microsatellite (STR) repeats?', '2–4 bp', ['5 to a few tens of bp', '100–200 bp', '1000 bp'], {
    explanation: 'STRs 2–4 bp; VNTRs 5 to a few tens.',
  }),
  mcq('s14-3-2', 'dna-typing', 'How many loci of allele-sharing give convincing paternity?', 'Five or more', ['One', 'Two', 'Three or four'], {
    explanation: 'Sharing alleles at five or more loci.',
  }),
  tf({ id: 's14-3-3', conceptId: 'dna-typing', statement: 'A man who shares no alleles with the baby is excluded as the father.', answer: true, explanation: 'RD slides 38–39.' }),
  mcq('s14-3-4', 'dna-typing', 'Which of these is a use of DNA typing?', 'Detecting wildlife crime', ['Measuring blood glucose', 'Typing blood groups', 'Counting the red cells in blood'], {
    explanation: 'Forensic cases, wildlife crime, GMO detection and more.',
  }),
  mcq('s14-3-5', 'dna-typing', 'How many alleles does a baby share with its mother at each locus?', 'One', ['None', 'Two', 'Three'], {
    explanation: 'One from the mother, one from the father.',
  }),

  // ─── Lesson 14 · S4 Gene therapy ───────────────────────────────────
  mcq('s14-4-1', 'gene-therapy', 'Why is germ-line gene therapy not used?', 'For ethical reasons', ['It is too cheap', 'It cannot be done in cells', 'It only works in plants'], {
    explanation: 'RD slide 41.',
  }),
  mcq('s14-4-2', 'gene-therapy', 'In which cells do retroviruses integrate?', 'Only dividing cells', ['Only resting cells', 'Only red cells', 'Any cell, dividing or not'], {
    explanation: 'Retroviruses integrate only in dividing cells.',
  }),
  tf({ id: 's14-4-3', conceptId: 'gene-therapy', statement: 'Skin fibroblasts can be used in gene therapy for circulating proteins.', answer: true, explanation: 'RD slides 42–43.' }),
  mcq('s14-4-4', 'gene-therapy', 'Which cells receive the ADA gene in SCID gene therapy?', 'T cells', ['Red cells', 'Liver cells', 'Skin cells'], {
    explanation: 'A retroviral vector carries ADA into T cells.',
  }),
  mcq('s14-4-5', 'gene-therapy', 'Which cells can be used for thalassaemia gene therapy?', 'Bone marrow cells', ['Skin fibroblasts', 'Nerve cells', 'Skeletal muscle cells'], {
    explanation: 'Bone marrow for thalassaemia or sickle cell.',
  }),
];
