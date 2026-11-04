// Biochemistry → Endocrine System: Hormones: five more questions for every reading
// section (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/hormones-endocrine-biochemistry/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 The endocrine glands ────────────────────────────
  mcq('s1-1-1', 'endocrine-glands', 'Which gland on the lecture’s list is found only in males?', 'Testes', ['Ovaries', 'Thymus gland', 'Pineal gland'], {
    explanation: 'Ovaries (females) and testes (males) end the list of ten.',
  }),
  mcq('s1-1-2', 'endocrine-glands', 'Which part of the pancreas is endocrine?', 'The islets', ['The acini', 'The ducts', 'The capsule of the gland'], {
    explanation: 'The lecture lists the pancreas (islets) among the endocrine glands.',
  }),
  tf({ id: 's1-1-3', conceptId: 'endocrine-glands', statement: 'The endocrine system works together with the CNS to coordinate the body’s activities.', answer: true, explanation: 'It interacts with the CNS to coordinate and integrate activities.' }),
  mcq('s1-1-4', 'endocrine-glands', 'Which of these is NOT on the lecture’s list of ten endocrine glands?', 'Liver', ['Pineal', 'Parathyroid', 'Hypothalamus'], {
    explanation: 'The liver is not among the ten listed glands.',
  }),
  fill('s1-1-5', 'endocrine-glands', 'The ____ gland sits in the brain and appears third on the lecture’s list.', ['pineal'], {
    explanation: 'Hypothalamus, pituitary, pineal, thyroid… — the pineal is third.',
  }),

  // ─── Lesson 1 · S2 What a hormone is ───────────────────────────────
  mcq('s1-2-1', 'hormone-definition', 'Into which fluid do endocrine glands release their hormones?', 'The extracellular fluid', ['A duct leading to the gut', 'The cerebrospinal fluid only', 'The urine in the bladder'], {
    explanation: 'A hormone is secreted by a ductless gland into the extracellular fluid.',
  }),
  mcq('s1-2-2', 'hormone-definition', 'Which two kinds of adipose tissue does the lecture name?', 'White and brown', ['Red and yellow', 'Hard and soft', 'Deep and surface'], {
    explanation: 'White (WAT) and brown (BAT) adipose tissue have different functions and locations.',
  }),
  tf({ id: 's1-2-3', conceptId: 'hormone-definition', statement: 'The kidney produces hormones even though it is not an endocrine gland.', answer: true, explanation: 'Slide 8 lists the small intestine, stomach and kidney.' }),
  mcq('s1-2-4', 'hormone-definition', 'Which is NOT a role the lecture gives adipose tissue as an endocrine organ?', 'Making red blood cells', ['Effects on metabolism', 'Effects on inflammation', 'Energy homeostasis'], {
    explanation: 'Adipose tissue affects metabolism, inflammation and energy homeostasis.',
  }),
  mcq('s1-2-5', 'hormone-definition', 'What kind of substance is a hormone, according to the lecture?', 'An organic chemical', ['An inorganic salt', 'A dissolved gas', 'A living cell or tissue'], {
    explanation: 'A hormone is a chemical (organic) substance.',
  }),

  // ─── Lesson 1 · S3 Target-cell specificity ─────────────────────────
  mcq('s1-3-1', 'target-specificity', 'Which hormone is called the main stimulant of cellular metabolism?', 'Thyroxine', ['ACTH', 'Insulin', 'Hydrocortisone'], {
    explanation: 'Thyroxine is the main stimulant of cellular metabolism.',
  }),
  mcq('s1-3-2', 'target-specificity', 'How do the three activation factors compare in importance?', 'They matter equally', ['Blood level matters most', 'Receptor number matters most', 'Affinity matters least of all'], {
    explanation: 'Slide 10: activation depends equally on the three factors.',
  }),
  tf({ id: 's1-3-3', conceptId: 'target-specificity', statement: 'A hormone affects every cell it reaches.', answer: false, explanation: 'It affects only target cells with specific receptors.' }),
  mcq('s1-3-4', 'target-specificity', 'Why does ACTH act on the adrenal cortex but not on most other tissues?', 'Only certain adrenal cortex cells have its receptors', ['ACTH never leaves the pituitary', 'Other tissues destroy ACTH as soon as it arrives in them', 'ACTH is made in the adrenal itself'], {
    explanation: 'ACTH receptors are found on certain cells of the adrenal cortex.',
  }),
  fill('s1-3-5', 'target-specificity', 'Cells that respond to a hormone are called its ____ cells.', ['target'], {
    explanation: 'Target cells carry specific protein receptors for the hormone.',
  }),

  // ─── Lesson 1 · S4 What hormones control ───────────────────────────
  mcq('s1-4-1', 'hormone-functions', 'Mobilising the body against stressors is one process hormones control. Which hormone fits it?', 'Cortisol', ['Oxytocin', 'Prolactin', 'Calcitonin'], {
    explanation: 'Cortisol, the stress glucocorticoid, mobilises body defences.',
  }),
  mcq('s1-4-2', 'hormone-functions', 'How many major processes controlled by hormones does slide 11 list?', 'Five', ['Three', 'Seven', 'Ten'], {
    explanation: 'Reproduction, growth, stress defences, balance, and metabolism.',
  }),
  tf({ id: 's1-4-3', conceptId: 'hormone-functions', statement: 'Directly setting the heartbeat is on slide 11’s list of hormone-controlled processes.', answer: false, explanation: 'Slide 11 lists reproduction, growth, stress defences, balance and metabolism.' }),
  mcq('s1-4-4', 'hormone-functions', 'Which is NOT on slide 11’s list of processes controlled by hormones?', 'Contracting skeletal muscle', ['Reproduction', 'Water and electrolyte balance', 'Energy balance'], {
    explanation: 'Muscle contraction is not on the list; the others are.',
  }),
  fill('s1-4-5', 'hormone-functions', 'Hormones help maintain electrolyte, water and ____ balance.', ['nutrient', 'nutrients'], {
    explanation: 'Slide 11: maintaining electrolyte, water and nutrient balance.',
  }),

  // ─── Lesson 2 · S1 Structural categories ───────────────────────────
  mcq('s2-1-1', 'structural-categories', 'Which pair of hormones belongs to the same structural category?', 'Epinephrine and thyroxine', ['Insulin and cortisol', 'FSH and glucagon', 'Oxytocin and testosterone'], {
    explanation: 'Both are amino acid derivatives.',
  }),
  mcq('s2-1-2', 'structural-categories', 'Thromboxanes and leukotrienes are in which category?', 'Lipid / fatty acid derivatives', ['Amino acid derivatives (tyrosine)', 'Glycoproteins', 'Polypeptides'], {
    explanation: 'They sit with the steroids among lipid / fatty acid derivatives.',
  }),
  tf({ id: 's2-1-3', conceptId: 'structural-categories', statement: 'Tri-iodothyronine is an amino acid derivative.', answer: true, explanation: 'Thyroxine and tri-iodothyronine are amino acid derivatives.' }),
  mcq('s2-1-4', 'structural-categories', 'Which hormone is a glycoprotein?', 'TSH', ['Insulin', 'Cortisol', 'Oxytocin'], {
    explanation: 'FSH, LH and TSH are glycoproteins.',
  }),
  mcq('s2-1-5', 'structural-categories', 'Parathyroid hormone belongs to which category?', 'Proteins', ['Polypeptides', 'Glycoproteins', 'Amino acid derivatives'], {
    explanation: 'Growth hormone, prolactin, insulin and parathyroid hormone are proteins.',
  }),
  // ─── Lesson 2 · S2 What a hormone does ─────────────────────────────
  mcq('s2-2-1', 'hormone-effects', 'How does a hormone change a cell’s membrane permeability?', 'By opening or closing ion channels', ['By removing the membrane lipids', 'By adding new DNA to the membrane', 'By changing the shape of the whole cell only'], {
    explanation: 'Permeability or electrical state changes by opening or closing ion channels.',
  }),
  mcq('s2-2-2', 'hormone-effects', 'Which change can a hormonal stimulus produce, according to slide 13?', 'Stimulation of mitosis', ['Destruction of the nucleus', 'Loss of all receptors', 'Fusion of two cells'], {
    explanation: 'Slide 13 includes stimulation of mitosis.',
  }),
  tf({ id: 's2-2-3', conceptId: 'hormone-effects', statement: 'Induction of secretory activity is one change a hormone can cause.', answer: true, explanation: 'Slide 13 lists it among the typical changes.' }),
  mcq('s2-2-4', 'hormone-effects', 'How many main mechanisms of hormone action does slide 14 describe?', 'Two', ['One', 'Three', 'Five'], {
    explanation: 'Second messengers (peptides) and direct gene activation (steroids).',
  }),
  mcq('s2-2-5', 'hormone-effects', 'A hormone makes a cell build a new enzyme. Which change is this?', 'Synthesis of a protein or regulatory molecule', ['Activation of an enzyme that is already there', 'A change in the cell’s electrical state', 'Stimulation of mitosis in the cell'], {
    explanation: 'Making a new enzyme is synthesis of a protein or regulatory molecule.',
  }),

  // ─── Lesson 2 · S3 cAMP as second messenger ────────────────────────
  mcq('s2-3-1', 'camp-pathway', 'Which part of the cAMP system is the signal transducer?', 'The G protein', ['Adenylate cyclase', 'The hormone', 'Protein kinase'], {
    explanation: 'Receptor, signal transducer (G protein) and effector (adenylate cyclase).',
  }),
  mcq('s2-3-2', 'camp-pathway', 'Which activity of the G protein releases the energy for the signal?', 'Its GTPase activity', ['Its ATPase activity', 'Its kinase activity', 'Its phosphatase activity'], {
    explanation: 'The G protein cleaves GTP’s terminal phosphate.',
  }),
  tf({ id: 's2-3-3', conceptId: 'camp-pathway', statement: 'Glucagon acts through cAMP.', answer: true, explanation: 'Glucagon is on the list of cAMP hormones.' }),
  mcq('s2-3-4', 'camp-pathway', 'Which part of the cAMP system is the first messenger?', 'The hormone', ['cAMP', 'The G protein', 'Adenylate cyclase'], {
    explanation: 'The hormone is the first messenger; cAMP is the second.',
  }),
  mcq('s2-3-5', 'camp-pathway', 'What does protein phosphorylation do in the cAMP pathway?', 'Triggers the cell’s responses', ['Destroys the hormone receptor', 'Makes the first messenger', 'Converts cAMP back to ATP'], {
    explanation: 'Phosphorylation triggers enzyme activation, secretion and other responses.',
  }),

  // ─── Lesson 2 · S4 DAG, IP₃ and calcium ────────────────────────────
  mcq('s2-4-1', 'ip3-dag-calcium', 'Where does IP₃ release Ca²⁺ from?', 'The endoplasmic reticulum', ['The nucleus', 'The mitochondrial matrix space', 'The Golgi apparatus'], {
    explanation: 'IP₃ releases Ca²⁺ from the ER and other stores.',
  }),
  tf({ id: 's2-4-2', conceptId: 'ip3-dag-calcium', statement: 'IP₃ and DAG are both second messengers.', answer: true, explanation: 'PIP₂ is split into two second messengers, DAG and IP₃.' }),
  tf({ id: 's2-4-3', conceptId: 'ip3-dag-calcium', statement: 'Oxytocin is one of the hormones that use the PIP₂–calcium system.', answer: true, explanation: 'Slide 19 lists catecholamines, TRH, ADH, LHRH and oxytocin.' }),
  mcq('s2-4-4', 'ip3-dag-calcium', 'Which kind of enzyme splits PIP₂?', 'A membrane phospholipase', ['A cytosolic protein kinase', 'An adenylate cyclase', 'A nuclear polymerase'], {
    explanation: 'Hormone binding activates a membrane phospholipase that splits PIP₂.',
  }),
  fill('s2-4-5', 'ip3-dag-calcium', 'DAG stands for ____.', ['diacylglycerol', 'diacyl glycerol'], {
    explanation: 'PIP₂ is split into diacylglycerol (DAG) and IP₃.',
  }),

  // ─── Lesson 3 · S1 Steroid hormones ────────────────────────────────
  mcq('s3-1-1', 'steroid-classes', 'Mineralocorticoid deficiency causes which change in plasma potassium?', 'Hyperkalaemia — K⁺ rises', ['Hypokalaemia — K⁺ falls', 'No change in K⁺ at all', 'K⁺ rises then quickly falls'], {
    explanation: 'Less K⁺ is excreted by the kidney: hyperkalaemia.',
  }),
  mcq('s3-1-2', 'steroid-classes', 'Mineralocorticoid deficiency causes which change in plasma sodium?', 'Hyponatraemia — Na⁺ falls', ['Hypernatraemia — Na⁺ rises', 'No change in Na⁺ at all', 'Na⁺ rises then quickly falls'], {
    explanation: 'Less Na⁺ is reabsorbed: hyponatraemia.',
  }),
  tf({ id: 's3-1-3', conceptId: 'steroid-classes', statement: 'All steroid hormones are derived from cholesterol.', answer: true, explanation: 'Slide 20: all are cholesterol-derived and lipid-soluble.' }),
  mcq('s3-1-4', 'steroid-classes', 'Which effect of glucocorticoids is used in medicine against inflammation?', 'Their anti-inflammatory action', ['Their effect on sodium balance', 'Their effect on sexual function', 'Their effect on calcium only'], {
    explanation: 'Glucocorticoids are anti-inflammatory.',
  }),
  mcq('s3-1-5', 'steroid-classes', 'Which is a mineralocorticoid?', 'Aldosterone', ['Cortisol', 'Testosterone', 'Estradiol'], {
    explanation: 'Aldosterone is the mineralocorticoid; cortisol is a glucocorticoid.',
  }),

  // ─── Lesson 3 · S2 Making adrenal steroids ─────────────────────────
  mcq('s3-2-1', 'adrenal-synthesis', 'Which hormone stimulates the rate-limiting step in the zona glomerulosa?', 'Angiotensin', ['ACTH', 'Growth hormone', 'TSH'], {
    explanation: 'ACTH in the fasciculata and reticularis; angiotensin in the glomerulosa.',
  }),
  mcq('s3-2-2', 'adrenal-synthesis', 'Why can the zona glomerulosa not make cortisol?', 'It has no 17-hydroxylase', ['It has no cholesterol', 'It has no 21-hydroxylase', 'It has no ACTH receptors'], {
    explanation: 'Without 17-hydroxylase it hydroxylates at 21, 11 and 18 → aldosterone.',
  }),
  tf({ id: 's3-2-3', conceptId: 'adrenal-synthesis', statement: 'LDL can deliver cholesterol made in the liver to the adrenal.', answer: true, explanation: 'Adrenal cholesterol is made there or delivered by LDL.' }),
  mcq('s3-2-4', 'adrenal-synthesis', 'Which position is hydroxylated only on the way to aldosterone?', '18', ['17', '21', '11'], {
    explanation: 'Aldosterone needs 18-hydroxylation; cortisol needs 17.',
  }),
  fill('s3-2-5', 'adrenal-synthesis', 'Cholesterol is converted to ____ in the rate-limiting step of steroid synthesis.', ['pregnenolone'], {
    explanation: 'Cholesterol → pregnenolone is rate-limiting for all steroids.',
  }),

  // ─── Lesson 3 · S3 How steroid hormones act ────────────────────────
  mcq('s3-3-1', 'steroid-mechanism', 'Where does the hormone–receptor complex bind to start transcription?', 'Specific sites on the chromatin', ['The outer cell membrane', 'The free ribosomes in the cytosol', 'The Golgi apparatus'], {
    explanation: 'The complex binds specific chromatin sites (acceptors).',
  }),
  mcq('s3-3-2', 'steroid-mechanism', 'What directs synthesis of the new proteins after transcription?', 'The mRNA, in the cytoplasm', ['The hormone itself, in the nucleus', 'cAMP, at the cell membrane', 'DAG, at the endoplasmic reticulum'], {
    explanation: 'The mRNA moves to the cytoplasm and directs protein synthesis.',
  }),
  tf({ id: 's3-3-3', conceptId: 'steroid-mechanism', statement: 'Steroid hormones need a membrane channel to enter cells.', answer: false, explanation: 'They are small and hydrophobic and cross by simple diffusion.' }),
  mcq('s3-3-4', 'steroid-mechanism', 'Why do steroids act more slowly than cAMP hormones?', 'They work through new gene transcription', ['They cannot cross the cell membrane', 'They are destroyed in the blood before arriving', 'They act only through calmodulin'], {
    explanation: 'Steroids change gene expression, which takes time.',
  }),
  fill('s3-3-5', 'steroid-mechanism', 'Inside the nucleus, some steroids bind an ____ molecule on the chromatin.', ['acceptor'], {
    explanation: 'Some steroids diffuse into the nucleus and bind an acceptor molecule.',
  }),

  // ─── Lesson 3 · S4 Feedback control: the HPA axis ──────────────────
  mcq('s3-4-1', 'hpa-axis', 'Besides cortisol, which steroid does ACTH stimulate the adrenal cortex to make?', 'Corticosterone', ['Aldosterone', 'Thyroxine (T4)', 'Estradiol'], {
    explanation: 'ACTH stimulates cortisol (and corticosterone).',
  }),
  mcq('s3-4-2', 'hpa-axis', 'Which gland releases ACTH?', 'The anterior pituitary', ['The hypothalamus', 'The adrenal cortex', 'The posterior pituitary'], {
    explanation: 'CRF from the hypothalamus stimulates the anterior pituitary to release ACTH.',
  }),
  tf({ id: 's3-4-3', conceptId: 'hpa-axis', statement: 'High cortisol stimulates more CRF release.', answer: false, explanation: 'Rising cortisol inhibits CRF and ACTH production.' }),
  mcq('s3-4-4', 'hpa-axis', 'Where does cortisol act to inhibit its own production?', 'On the hypothalamus and pituitary', ['On the kidney and liver', 'On the adrenal medulla and its nerves only', 'On the pancreas and gut'], {
    explanation: 'Cortisol acts on receptors in the hypothalamus and pituitary.',
  }),
  mcq('s3-4-5', 'hpa-axis', 'Which is the correct order of the HPA axis?', 'CRF → ACTH → cortisol', ['ACTH → CRF → cortisol', 'Cortisol → CRF → ACTH', 'CRF → cortisol → ACTH'], {
    explanation: 'Hypothalamus (CRF) → anterior pituitary (ACTH) → adrenal cortex (cortisol).',
  }),
];
