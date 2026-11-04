// Biochemistry → Inborn Errors of Metabolism: five more questions for every reading
// section (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/inborn-errors-of-metabolism/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 Garrod’s hypothesis ─────────────────────────────
  mcq('s1-1-1', 'garrod-hypothesis', 'How does the lecture sum up Garrod’s idea in four words?', 'One gene → one enzyme', ['One cell → one disease', 'One enzyme → many genes', 'One gene → many diseases'], {
    explanation: 'Page 3: one gene → one enzyme.',
  }),
  mcq('s1-1-2', 'garrod-hypothesis', 'In Garrod’s figure, which compound shows “substrate excess”?', 'B, before the blocked step', ['C, after the blocked step', 'A, at the start of the pathway', 'D, the toxic side product'], {
    explanation: 'B piles up behind the blocked B → C step.',
  }),
  tf({ id: 's1-1-3', conceptId: 'garrod-hypothesis', statement: 'In Garrod’s model, the side route from B leads to a harmless product.', answer: false, explanation: 'B is pushed down a side route to D, a toxic metabolite.' }),
  mcq('s1-1-4', 'garrod-hypothesis', 'In the pathway A → B → C, which step does Garrod’s figure block?', 'B → C', ['A → B', 'C → D', 'A → C'], {
    explanation: 'The enzyme for B → C is blocked.',
  }),
  fill('s1-1-5', 'garrod-hypothesis', 'Garrod called a defect caused by a faulty enzyme an “inborn ____ of metabolism”.', ['error'], {
    explanation: 'A defective enzyme leads to an inborn error in metabolism.',
  }),

  // ─── Lesson 1 · S2 When inborn errors show themselves ──────────────
  mcq('s1-2-1', 'age-of-onset', 'Which pattern of onset does gout illustrate?', 'Much later in life', ['Early in life', 'Only after an infection', 'Only during pregnancy'], {
    explanation: 'Gout is the lecture’s example of a late-manifesting inborn error.',
  }),
  mcq('s1-2-2', 'age-of-onset', 'Whose effects depend on external factors?', 'G6PD deficiency', ['Phenylketonuria', 'Gout in old age', 'Cystic fibrosis'], {
    explanation: 'G6PD deficiency is the lecture’s example of onset depending on external factors.',
  }),
  tf({ id: 's1-2-3', conceptId: 'age-of-onset', statement: 'An inborn error is present from birth, even if its effects appear later.', answer: true, explanation: 'Present from birth, but effects can appear at very different times.' }),
  tf({ id: 's1-2-4', conceptId: 'age-of-onset', statement: 'PKU and gout are both inborn errors, though they show themselves at very different ages.', answer: true, explanation: 'PKU shows early in life; gout much later.' }),
  mcq('s1-2-5', 'age-of-onset', 'How many patterns of onset does page 4 describe?', 'Three', ['Two', 'Four', 'Seven'], {
    explanation: 'Early in life, much later in life, and depending on external factors.',
  }),

  // ─── Lesson 1 · S3 Consequences of a metabolic block ───────────────
  mcq('s1-3-1', 'metabolic-block', 'How many biochemical consequences of a metabolic block does page 5 list?', 'Four', ['Two', 'Three', 'Six'], {
    explanation: 'Accumulation, reduced product, alternate pathway, effects on other reactions.',
  }),
  mcq('s1-3-2', 'metabolic-block', 'A diverted compound starts to disturb a different pathway. Which consequence is this?', 'Effects on other metabolic reactions', ['Reduced formation of the end product C', 'Accumulation of the substrate', 'Use of the main pathway only'], {
    explanation: 'Built-up or diverted compounds disturb other pathways.',
  }),
  tf({ id: 's1-3-3', conceptId: 'metabolic-block', statement: 'The four consequences on page 5 are the same ones Garrod’s figure shows.', answer: true, explanation: 'The lecture links them directly to Garrod’s figure.' }),
  mcq('s1-3-4', 'metabolic-block', 'Which consequence describes C being deficient in Garrod’s figure?', 'Reduced formation of product', ['Accumulation of substrate', 'Use of an alternate pathway', 'Effects on other metabolic reactions'], {
    explanation: 'C, after the block, is made in reduced amounts.',
  }),
  fill('s1-3-5', 'metabolic-block', 'When the main step is blocked, the first consequence is ____ of substrate.', ['accumulation', 'build-up', 'buildup'], {
    explanation: 'B piles up behind the block.',
  }),

  // ─── Lesson 1 · S4 Remote products and feedback ────────────────────
  mcq('s1-4-1', 'remote-effects', 'What is a “remote product” of a blocked pathway?', 'A product several steps beyond the block', ['The substrate just before the block', 'A product made in another organ only', 'The toxic product of a side route from B'], {
    explanation: 'It is lacking even though its own enzyme works.',
  }),
  mcq('s1-4-2', 'remote-effects', 'Why is TSH raised in hypothyroidism?', 'Low thyroid hormone removes feedback inhibition', ['Thyroid hormone stimulates TSH directly', 'The pituitary is blocked by an enzyme defect', 'TSH is made by the failing thyroid gland itself'], {
    explanation: 'It illustrates interference with feedback control.',
  }),
  tf({ id: 's1-4-3', conceptId: 'remote-effects', statement: 'A remote product is lacking because its own enzyme is defective.', answer: false, explanation: 'Its own enzyme works; it is lacking because a step several stages earlier is blocked.' }),
  mcq('s1-4-4', 'remote-effects', 'Which condition does the lecture use for reduced formation of a remote product?', 'Congenital adrenal hyperplasia', ['Hypothyroidism', 'Phenylketonuria', 'Familial hypercholesterolaemia'], {
    explanation: '↓ cortisol due to 21-hydroxylase deficiency in CAH.',
  }),
  fill('s1-4-5', 'remote-effects', 'CAH stands for congenital adrenal ____.', ['hyperplasia'], {
    explanation: 'Congenital adrenal hyperplasia, from 21-hydroxylase deficiency.',
  }),

  // ─── Lesson 2 · S1 Detecting inborn errors ─────────────────────────
  mcq('s2-1-1', 'detection-methods', 'Which kind of investigation does detection of inborn errors rely on heavily?', 'Chemical investigations', ['Imaging by X-ray alone', 'Physical examination only', 'Psychological testing'], {
    explanation: 'Detection relies on chemical investigations (chromatography, electrophoresis).',
  }),
  mcq('s2-1-2', 'detection-methods', 'Which specimen is NOT on the lecture’s list?', 'Cerebrospinal fluid', ['Leucocyte concentrates', 'Red cell haemolysates', 'Skin biopsy'], {
    explanation: 'Page 7 lists urine, blood, leucocytes, haemolysates and skin, liver and thyroid biopsies.',
  }),
  tf({ id: 's2-1-3', conceptId: 'detection-methods', statement: 'Electrophoresis is one of the techniques used to detect inborn errors.', answer: true, explanation: 'Page 7: chromatography and electrophoresis.' }),
  mcq('s2-1-4', 'detection-methods', 'Which of these is a cell concentrate used as a specimen?', 'Leucocyte concentrate', ['Platelet-free plasma sample', 'Urine sediment', 'Saliva sample'], {
    explanation: 'Leucocyte concentrates are among the further specimens.',
  }),
  mcq('s2-1-5', 'detection-methods', 'Which pair of specimens is usually examined first?', 'Urine and blood', ['Liver and skin', 'Saliva and sweat', 'Hair and nails'], {
    explanation: 'The first specimens are usually urine and blood.',
  }),

  // ─── Lesson 2 · S2 Diagnosis before birth ──────────────────────────
  mcq('s2-2-1', 'prenatal-diagnosis', 'Where do the fibroblasts used for prenatal diagnosis come from?', 'The amniotic fluid', ['The mother’s blood', 'The umbilical vein', 'The placenta’s cord'], {
    explanation: 'Fibroblasts are cultured from the amniotic fluid.',
  }),
  mcq('s2-2-2', 'prenatal-diagnosis', 'Which prenatal method is used earliest in pregnancy?', 'Chorionic villus sampling', ['Newborn heel-prick test', 'Amniotic fibroblast culture', 'Liver biopsy of the fetus'], {
    explanation: 'Chorionic villus sampling is done in the first trimester.',
  }),
  tf({ id: 's2-2-3', conceptId: 'prenatal-diagnosis', statement: 'The cells from amniotic fluid are cultured before testing.', answer: true, explanation: 'Fibroblasts are cultured from the amniotic fluid.' }),
  mcq('s2-2-4', 'prenatal-diagnosis', 'How many approaches to diagnosis before birth does page 8 name?', 'Two', ['One', 'Three', 'Four'], {
    explanation: 'Amniotic fibroblast culture and chorionic villus sampling.',
  }),
  fill('s2-2-5', 'prenatal-diagnosis', 'Chorionic ____ sampling is used in the first trimester.', ['villus', 'villi'], {
    explanation: 'Chorionic villus sampling.',
  }),

  // ─── Lesson 2 · S3 Criteria for neonatal screening ─────────────────
  mcq('s2-3-1', 'screening-criteria', 'Why should a screened disease NOT be clinically apparent at screening?', 'Screening aims to find it before signs appear', ['Visible diseases cannot be treated in any way at all', 'Visible diseases are too rare to matter', 'Doctors cannot test visible diseases'], {
    explanation: 'The point is to find a hidden disease early.',
  }),
  mcq('s2-3-2', 'screening-criteria', 'How many criteria for neonatal screening does page 9 give?', 'Four', ['Two', 'Six', 'Eight'], {
    explanation: 'Not apparent and common; treatable; quick results; simple test.',
  }),
  tf({ id: 's2-3-3', conceptId: 'screening-criteria', statement: 'A screening test for newborns should be simple and reliable.', answer: true, explanation: 'Page 9’s last criterion.' }),
  mcq('s2-3-4', 'screening-criteria', 'A test is accurate but its results take six months. Which criterion does it fail?', 'Results before irreversible damage occurs', ['The disease must be relatively common', 'The disease must be treatable', 'The disease must be hidden at the time of screening'], {
    explanation: 'Results must be available before irreversible damage.',
  }),
  mcq('s2-3-5', 'screening-criteria', 'Which kind of disease fits the screening criteria best?', 'Hidden, common, treatable early', ['Obvious, rare, untreatable', 'Hidden, rare, untreatable', 'Obvious, common and untreatable later'], {
    explanation: 'Not apparent, relatively common, and improved by early treatment.',
  }),

  // ─── Lesson 2 · S4 The UK newborn screen ───────────────────────────
  mcq('s2-4-1', 'uk-screening', 'Which carbohydrate disorder is on the lecture’s UK screening list?', 'Galactosaemia', ['Tay-Sachs disease', 'Cystinosis', 'Menkes syndrome'], {
    explanation: 'Galactosaemia is on the list.',
  }),
  mcq('s2-4-2', 'uk-screening', 'How many conditions are on the lecture’s UK newborn screening list?', 'Six', ['Four', 'Eight', 'Ten'], {
    explanation: 'Hypothyroidism, PKU, sickle cell/thalassaemia, G6Pase deficiency, galactosaemia, CAH.',
  }),
  tf({ id: 's2-4-3', conceptId: 'uk-screening', statement: 'Glucose-6-phosphatase deficiency is on the lecture’s UK screening list.', answer: true, explanation: 'Page 10 lists glucose-6-phosphatase deficiency.' }),
  mcq('s2-4-4', 'uk-screening', 'Which condition is NOT on the lecture’s UK newborn screen?', 'Cystic fibrosis', ['Phenylketonuria', 'Galactosaemia', 'Congenital adrenal hyperplasia'], {
    explanation: 'Cystic fibrosis is not on page 10’s list.',
  }),
  mcq('s2-4-5', 'uk-screening', 'Which blood disorders share one line on the UK screening list?', 'Sickle cell disease and thalassaemia', ['Haemophilia A and haemophilia B', 'Hereditary spherocytosis and G6PD deficiency', 'Anaemia and leukaemia'], {
    explanation: 'Sickle cell disease and thalassaemia are screened together.',
  }),

  // ─── Lesson 3 · S1 When to suspect an inborn error ─────────────────
  mcq('s3-1-1', 'suspect-features', 'Which abdominal sign on the lecture’s list involves both liver and spleen?', 'Hepatosplenomegaly', ['Ascites', 'Splenic infarction', 'Hepatitis A'], {
    explanation: 'Hepatosplenomegaly is a suggestive feature.',
  }),
  mcq('s3-1-2', 'suspect-features', 'Which growth feature should make you suspect an inborn error?', 'Failure to thrive', ['Rapid weight gain', 'Early puberty', 'Tall stature'], {
    explanation: 'Failure to thrive is on the list.',
  }),
  tf({ id: 's3-1-3', conceptId: 'suspect-features', statement: 'Renal calculi are a late finding that appears only in adults.', answer: false, explanation: 'Renal calculi are on the list of features suggesting an inborn error in an infant.' }),
  mcq('s3-1-4', 'suspect-features', 'Which is NOT one of the lecture’s suggestive features?', 'A raised blood glucose', ['Hypoglycaemia', 'Metabolic acidosis in blood', 'Renal calculi'], {
    explanation: 'The list has hypoglycaemia, not hyperglycaemia.',
  }),
  mcq('s3-1-5', 'suspect-features', 'Fits and spasticity are on the list as signs of what?', 'Retarded mental development', ['A simple ear infection', 'Normal infant behaviour', 'Vitamin C deficiency (scurvy)'], {
    explanation: 'Retarded mental development, fits or spasticity are listed together.',
  }),

  // ─── Lesson 3 · S2 Late clinical findings ──────────────────────────
  mcq('s3-2-1', 'late-findings', 'Which nerve problem is a late finding of inborn errors?', 'Neuropathy', ['Trigeminal neuralgia', 'Neuroma', 'Neuritis'], {
    explanation: 'Late findings: intellectual disability, neuropathy, short stature.',
  }),
  mcq('s3-2-2', 'late-findings', 'How many late clinical findings does page 13 list?', 'Three', ['Two', 'Five', 'Seven'], {
    explanation: 'Intellectual disability, neuropathy and short stature.',
  }),
  tf({ id: 's3-2-3', conceptId: 'late-findings', statement: 'Intellectual disability is a late finding of inborn errors.', answer: true, explanation: 'Page 13 lists it among the late findings.' }),
  mcq('s3-2-4', 'late-findings', 'Which is an early suggestive feature rather than a late finding?', 'Hypoglycaemia', ['Short stature', 'Neuropathy', 'Intellectual disability'], {
    explanation: 'Hypoglycaemia is on the early list; the others are late findings.',
  }),
  fill('s3-2-5', 'late-findings', 'Short ____ is a late finding of inborn errors.', ['stature'], {
    explanation: 'Short stature appears later.',
  }),

  // ─── Lesson 3 · S3 Routine laboratory investigations ───────────────
  mcq('s3-3-1', 'routine-investigations', 'Which routine test looks for gout-related problems?', 'Serum uric acid', ['Plasma ammonia level', 'Urine ketones', 'Lipid profile'], {
    explanation: 'Serum uric acid is on the routine list.',
  }),
  mcq('s3-3-2', 'routine-investigations', 'Which routine blood test counts the blood cells?', 'Full blood count', ['Renal function tests', 'Liver function tests', 'Serum electrolytes'], {
    explanation: 'The full blood count heads the routine list.',
  }),
  mcq('s3-3-3', 'routine-investigations', 'Which routine test checks the kidneys?', 'Renal function tests', ['Liver function tests', 'Lipid profile', 'Blood glucose'], {
    explanation: 'Renal function tests are on the routine list.',
  }),
  mcq('s3-3-4', 'routine-investigations', 'Which test is on the SPECIALISED list rather than the routine one?', 'Urine organic acids', ['Blood glucose', 'Lipid profile', 'Plasma ammonia level'], {
    explanation: 'Urine organic acids are a specialised test.',
  }),
  mcq('s3-3-5', 'routine-investigations', 'How many routine investigations does the lecture list?', 'Eleven', ['Five', 'Eight', 'Fifteen'], {
    explanation: 'Pages 14–15 list eleven routine tests.',
  }),

  // ─── Lesson 3 · S4 Specialised tests ───────────────────────────────
  mcq('s3-4-1', 'specialised-tests', 'Which specialised test confirms the defect at the level of the protein?', 'A specific enzyme assay', ['A full blood count with film', 'A urine ketone test', 'A lipid profile'], {
    explanation: 'Specific enzyme assays measure the defective enzyme itself.',
  }),
  mcq('s3-4-2', 'specialised-tests', 'Which compound is measured in plasma as a specialised test?', 'Carnitine', ['Creatinine', 'Cholesterol', 'Calcium'], {
    explanation: 'Plasma carnitine is on the specialised list.',
  }),
  tf({ id: 's3-4-3', conceptId: 'specialised-tests', statement: 'Urine orotic acid is a specialised test for inborn errors.', answer: true, explanation: 'Page 16 lists urine orotic acid.' }),
  mcq('s3-4-4', 'specialised-tests', 'Which specialised test looks at the gene rather than its products?', 'DNA analysis of leucocytes or fibroblasts', ['Plasma and urine amino acids', 'Urine organic acid analysis by chromatography', 'Plasma carnitine measurement'], {
    explanation: 'DNA analysis looks at the gene itself.',
  }),
  fill('s3-4-5', 'specialised-tests', 'Metabolites in urine and plasma are measured by mass ____.', ['spectroscopy', 'spectrometry'], {
    explanation: 'Page 17: metabolites by mass spectroscopy.',
  }),

  // ─── Lesson 3 · S5 Principles of management ────────────────────────
  mcq('s3-5-1', 'management', 'How many principles of management does page 18 give?', 'Three', ['Two', 'Four', 'Seven'], {
    explanation: 'Limit precursors, supply the product, remove the accumulated product.',
  }),
  mcq('s3-5-2', 'management', 'Removing excess ammonia applies which principle?', 'Remove or reduce the accumulated product', ['Supply the deficient metabolic product', 'Limit dietary intake of precursors', 'Replace the defective gene directly in every cell'], {
    explanation: 'Ammonia is the lecture’s example of an accumulated product to remove.',
  }),
  tf({ id: 's3-5-3', conceptId: 'management', statement: 'Treatment of an inborn error follows from the consequences of the metabolic block.', answer: true, explanation: 'Each principle answers one consequence of the block.' }),
  mcq('s3-5-4', 'management', 'Which principle answers the consequence “reduced formation of product”?', 'Supply the deficient metabolic product', ['Remove or reduce the accumulated product', 'Limit precursors in the diet', 'Block the alternate pathway'], {
    explanation: 'Giving the missing product, e.g. cortisol in CAH.',
  }),
  mcq('s3-5-5', 'management', 'Why does limiting dietary precursors help?', 'Less substrate reaches the block', ['More product is made past the block', 'The enzyme is repaired by the diet', 'The toxic product is excreted faster'], {
    explanation: 'Less substrate means less accumulation behind the block.',
  }),

  // ─── Lesson 4 · S1 Mutations in different classes of enzymes ───────
  mcq('s4-1-1', 'enzyme-defects', 'Methylmalonic aciduria is a defect in which area of metabolism?', 'Organic acids', ['Amino acids', 'Complex lipids', 'Purines'], {
    explanation: 'Page 19: organic acids — methylmalonyl-CoA mutase.',
  }),
  mcq('s4-1-2', 'enzyme-defects', 'Which defective enzyme causes severe combined immunodeficiency?', 'Adenosine deaminase', ['Hexosaminidase A', 'Porphobilinogen deaminase', 'Phenylalanine hydroxylase'], {
    explanation: 'SCID: adenosine deaminase, a purine enzyme.',
  }),
  tf({ id: 's4-1-3', conceptId: 'enzyme-defects', statement: 'Acute intermittent porphyria appears in the lecture’s enzyme-defect table.', answer: true, explanation: 'Porphyrins: porphobilinogen deaminase → AIP.' }),
  mcq('s4-1-4', 'enzyme-defects', 'Which pairing of area and disease is WRONG?', 'Purines — Tay-Sachs disease', ['Amino acids — phenylketonuria', 'Carbohydrate — galactosaemia', 'Porphyrins — acute intermittent porphyria'], {
    explanation: 'Tay-Sachs is a complex-lipid disease; purines → SCID.',
  }),
  mcq('s4-1-5', 'enzyme-defects', 'How many areas of metabolism does page 19 cover?', 'Six', ['Four', 'Five', 'Eight'], {
    explanation: 'Amino acids, carbohydrate, organic acids, complex lipids, purines, porphyrins.',
  }),

  // ─── Lesson 4 · S2 Phenylketonuria ─────────────────────────────────
  mcq('s4-2-1', 'pku', 'On which chromosome is the PAH gene?', 'Chromosome 12', ['Chromosome 7', 'Chromosome X', 'Chromosome 21'], {
    explanation: 'The page 20 figure places PAH on chromosome 12.',
  }),
  mcq('s4-2-2', 'pku', 'How common is PKU compared with galactosaemia?', 'More common: 1 in 10,000 vs 1 in 30,000–60,000', ['Less common: 1 in 60,000 vs 1 in 10,000', 'Equally common: both 1 in 10,000', 'Much rarer: PKU 1 in 320,000 vs galactosaemia 1 in 30,000'], {
    explanation: 'PKU about 1 in 10,000; galactosaemia 1 in 30,000–60,000.',
  }),
  tf({ id: 's4-2-3', conceptId: 'pku', statement: 'A mousy odour is a feature of phenylketonuria.', answer: true, explanation: 'Page 20 lists a mousy odour among the features.' }),
  mcq('s4-2-4', 'pku', 'Two carriers of PKU have a child. What is the chance the child is an unaffected carrier?', '50%', ['25%', '75%', '100%'], {
    explanation: '25% affected, 50% carriers, 25% unaffected non-carriers.',
  }),
  mcq('s4-2-5', 'pku', 'Why might a child with PKU have light hair and skin?', 'Too little tyrosine, the step after the block', ['Too much tyrosine being made by the liver and skin', 'Too much copper stored in the skin', 'Too little phenylalanine in the diet'], {
    explanation: 'Tyrosine is the product after the blocked step; less is made.',
    difficulty: 'intermediate',
  }),

  // ─── Lesson 4 · S3 Galactosaemia ───────────────────────────────────
  mcq('s4-3-1', 'galactosaemia', 'Which enzyme splits lactose into glucose and galactose?', 'Lactase', ['Galactokinase', 'GALT', 'Hexokinase'], {
    explanation: 'Lactase splits lactose.',
  }),
  mcq('s4-3-2', 'galactosaemia', 'Which enzyme makes galactose-1-phosphate?', 'Galactokinase', ['Lactase', 'GALT', 'Galactose phosphatase'], {
    explanation: 'Galactokinase phosphorylates galactose.',
  }),
  tf({ id: 's4-3-3', conceptId: 'galactosaemia', statement: 'GALT uses UDP-glucose to convert galactose-1-phosphate.', answer: true, explanation: 'GALT gives glucose-1-phosphate and UDP-galactose.' }),
  mcq('s4-3-4', 'galactosaemia', 'Which eye problem is a feature of galactosaemia?', 'Cataract', ['Glaucoma', 'Cherry red spot', 'Retinal detachment'], {
    explanation: 'Features: jaundice, lethargy, renal tubular dysfunction and cataract.',
  }),
  mcq('s4-3-5', 'galactosaemia', 'Which products does GALT make?', 'Glucose-1-phosphate and UDP-galactose', ['Galactose-1-phosphate and UDP-glucose', 'Lactose and free glucose only', 'Glucose-6-phosphate and galactitol'], {
    explanation: 'Galactose-1-P + UDP-glucose → glucose-1-P + UDP-galactose.',
  }),

  // ─── Lesson 4 · S4 Methylmalonic aciduria ──────────────────────────
  mcq('s4-4-1', 'methylmalonic-aciduria', 'Which source of methylmalonyl-CoA is NOT an amino acid?', 'Odd-chain fatty acids', ['Valine', 'Methionine', 'Isoleucine and valine together'], {
    explanation: 'Odd-chain fatty acids and gut flora join the four amino acids.',
  }),
  mcq('s4-4-2', 'methylmalonic-aciduria', 'What does methylmalonyl-CoA back up to when the mutase fails?', 'Propionyl-CoA', ['Succinyl-CoA (C4)', 'Acetyl-CoA', 'Malonyl-CoA'], {
    explanation: 'Methylmalonyl-CoA rises and backs up to propionyl-CoA.',
  }),
  tf({ id: 's4-4-3', conceptId: 'methylmalonic-aciduria', statement: 'Severe ketoacidosis is a feature of methylmalonic aciduria.', answer: true, explanation: 'Page 22 lists severe ketoacidosis.' }),
  mcq('s4-4-4', 'methylmalonic-aciduria', 'Which of these does NOT feed into methylmalonyl-CoA in the figure?', 'Leucine', ['Valine', 'Isoleucine', 'Threonine'], {
    explanation: 'Isoleucine, valine, methionine, threonine, odd-chain fatty acids and gut flora.',
  }),
  fill('s4-4-5', 'methylmalonic-aciduria', 'Methylmalonyl-CoA mutase makes succinyl-CoA, which is used for ____.', ['energy'], {
    explanation: 'Succinyl-CoA enters metabolism for energy.',
  }),

  // ─── Lesson 4 · S5 Tay-Sachs disease ───────────────────────────────
  mcq('s4-5-1', 'tay-sachs', 'What incidence does the lecture give for Tay-Sachs disease?', 'About 1 in 320,000', ['About 1 in 3,200', 'About 1 in 32,000', 'About 1 in 3.2 million'], {
    explanation: 'Tay-Sachs: about 1 in 320,000.',
  }),
  mcq('s4-5-2', 'tay-sachs', 'Which gene is mutated in Tay-Sachs disease?', 'HEXA', ['CTNS', 'COL1A1', 'CFTR'], {
    explanation: 'A HEXA gene mutation removes hexosaminidase A.',
  }),
  tf({ id: 's4-5-3', conceptId: 'tay-sachs', statement: 'In Tay-Sachs disease, lysosomes lack every digestive enzyme.', answer: false, explanation: 'They have every enzyme except hexosaminidase A.' }),
  mcq('s4-5-4', 'tay-sachs', 'In which cells do the residual vacuoles accumulate in Tay-Sachs disease?', 'Neurons', ['Red cells', 'Hepatocytes', 'Osteoblasts'], {
    explanation: 'Neurons swell with lamellar inclusions and degenerate.',
  }),
  mcq('s4-5-5', 'tay-sachs', 'What happens to muscle tone in Tay-Sachs disease?', 'It is diminished', ['It is greatly increased', 'It is always normal', 'It changes only at night'], {
    explanation: 'Features include diminished muscle tone.',
  }),

  // ─── Lesson 4 · S6 SCID ────────────────────────────────────────────
  mcq('s4-6-1', 'scid', 'What does adenosine deaminase convert deoxyadenosine into?', 'Deoxyinosine', ['Deoxyguanosine', 'dATP', 'Uric acid'], {
    explanation: 'ADA deaminates deoxyadenosine to deoxyinosine.',
  }),
  mcq('s4-6-2', 'scid', 'Without ADA, which order of phosphorylation leads to the toxic molecule?', 'dAMP → dADP → dATP', ['dATP → dADP → dAMP', 'dADP → dAMP → dATP', 'dAMP → dATP → dADP'], {
    explanation: 'Deoxyadenosine is phosphorylated to dAMP, dADP and then dATP.',
  }),
  tf({ id: 's4-6-3', conceptId: 'scid', statement: 'Children with SCID can get viral infections from vaccinations.', answer: true, explanation: 'Page 25: viral infection from breast milk and vaccinations.' }),
  mcq('s4-6-4', 'scid', 'Which cells does dATP harm in ADA deficiency?', 'Lymphocytes', ['Red cells', 'Neurons', 'Hepatocytes'], {
    explanation: 'dATP is toxic to lymphocytes (lymphotoxicity).',
  }),
  mcq('s4-6-5', 'scid', 'What incidence does the lecture give for SCID?', 'About 1 in 100,000', ['About 1 in 10,000', 'About 1 in 1,000', 'About 1 in 320,000'], {
    explanation: 'SCID: about 1 in 100,000.',
  }),

  // ─── Lesson 5 · S1 Mutations in transport proteins ─────────────────
  mcq('s5-1-1', 'transport-defects', 'Thalassaemia is a defect of transport at which site?', 'Inter-organ', ['Organelle membrane', 'Intracellular', 'Epithelial membrane'], {
    explanation: 'Haemoglobin carries oxygen between organs: inter-organ transport.',
  }),
  mcq('s5-1-2', 'transport-defects', 'Which protein is defective at the epithelial membrane?', 'A chloride transport protein', ['A copper transport protein', 'A cystine transport protein', 'A haemoglobin subunit protein'], {
    explanation: 'Cystic fibrosis: the chloride transporter of lungs, sweat glands and pancreas.',
  }),
  tf({ id: 's5-1-3', conceptId: 'transport-defects', statement: 'Menkes syndrome is a defect of intracellular transport.', answer: true, explanation: 'Page 27: copper transport protein, intracellular transport.' }),
  mcq('s5-1-4', 'transport-defects', 'How many transport sites does page 27 list?', 'Four', ['Two', 'Three', 'Six'], {
    explanation: 'Inter-organ, organelle membrane, intracellular and epithelial membrane.',
  }),
  mcq('s5-1-5', 'transport-defects', 'Which pairing of transport site and disease is WRONG?', 'Inter-organ — cystinosis', ['Epithelial membrane — cystic fibrosis', 'Intracellular — Menkes syndrome', 'Organelle membrane — cystinosis'], {
    explanation: 'Cystinosis is an organelle-membrane defect; inter-organ is thalassaemia.',
  }),

  // ─── Lesson 5 · S2 Thalassaemias ───────────────────────────────────
  mcq('s5-2-1', 'thalassaemia', 'Which form of β-thalassaemia is relatively mild?', 'Intermedia', ['Major', 'Hb Barts', 'HbH disease'], {
    explanation: 'Minor trait, intermedia (relatively mild) and major (severe).',
  }),
  mcq('s5-2-2', 'thalassaemia', 'Which form of β-thalassaemia is the most severe?', 'Major', ['Minor trait', 'Intermedia', 'Silent carrier'], {
    explanation: 'Minor trait, intermedia (relatively mild), major (severe).',
  }),
  tf({ id: 's5-2-3', conceptId: 'thalassaemia', statement: 'Losing one or two α-globin genes gives a carrier trait.', answer: true, explanation: '1–2 genes lost: carrier traits; 3: HbH disease; 4: Hb Barts.' }),
  mcq('s5-2-4', 'thalassaemia', 'Which feature of thalassaemia does the lecture list?', 'Gallstones', ['Kidney stones', 'Cataract', 'Kinky hair'], {
    explanation: 'Features: jaundice, hyperuricaemia and gallstones.',
  }),
  mcq('s5-2-5', 'thalassaemia', 'What incidence does the lecture give for thalassaemia?', '4.4 per 10,000 live births', ['1 in 3,000 newborn live births', '1 in 300,000 live births', '44 per 10,000 live births'], {
    explanation: 'Thalassaemia: 4.4 per 10,000 live births.',
  }),

  // ─── Lesson 5 · S3 Cystic fibrosis ─────────────────────────────────
  mcq('s5-3-1', 'cystic-fibrosis', 'What does CFTR stand for?', 'Cystic fibrosis transmembrane conductance regulator', ['Cystic fibrosis transport and chloride receptor protein', 'Chloride flow transmembrane regulator', 'Cellular fluid transport regulator'], {
    explanation: 'CFTR = cystic fibrosis transmembrane conductance regulator.',
  }),
  mcq('s5-3-2', 'cystic-fibrosis', 'What does ENaC do on the airway surface?', 'Absorbs Na⁺', ['Secretes Cl⁻', 'Secretes mucus', 'Absorbs water only'], {
    explanation: 'CFTR moves Cl⁻ out; ENaC absorbs Na⁺.',
  }),
  tf({ id: 's5-3-3', conceptId: 'cystic-fibrosis', statement: 'Very salty-tasting skin is a feature of cystic fibrosis.', answer: true, explanation: 'Page 29 lists very salty-tasting skin.' }),
  mcq('s5-3-4', 'cystic-fibrosis', 'In which three places is the CF chloride transporter found?', 'Lungs, sweat glands and pancreas', ['Liver, kidney and the brain stem', 'Heart, muscle and bone', 'Skin, eye and ear'], {
    explanation: 'Page 27: lungs, sweat glands and pancreas.',
  }),
  mcq('s5-3-5', 'cystic-fibrosis', 'Why do lung infections become frequent in cystic fibrosis?', 'Dehydrated mucus stays in the airways', ['The lungs make too much surfactant', 'The airways lose all of their cilia at once', 'The blood carries too little oxygen'], {
    explanation: 'Na⁺ absorption continues without Cl⁻ secretion, dehydrating the mucus.',
  }),

  // ─── Lesson 5 · S4 Cystinosis ──────────────────────────────────────
  mcq('s5-4-1', 'cystinosis', 'What drives the cystinosin transporter?', 'H⁺', ['Na⁺', 'ATP', 'Ca²⁺'], {
    explanation: 'Cystinosin is an H⁺-driven cystine transporter.',
  }),
  mcq('s5-4-2', 'cystinosis', 'Which kidney problem is a feature of cystinosis?', 'Fanconi syndrome', ['Nephrotic syndrome', 'Kidney stones of oxalate', 'Polycystic kidneys'], {
    explanation: 'Features: photophobia, Fanconi syndrome and failure to thrive.',
  }),
  tf({ id: 's5-4-3', conceptId: 'cystinosis', statement: 'Photophobia is a feature of cystinosis.', answer: true, explanation: 'Page 30 lists photophobia.' }),
  mcq('s5-4-4', 'cystinosis', 'In which membrane is cystinosin found?', 'The lysosomal membrane', ['The plasma membrane', 'The nuclear envelope', 'The mitochondrial membrane'], {
    explanation: 'Cystinosin sits in the lysosomal membrane.',
  }),
  mcq('s5-4-5', 'cystinosis', 'What incidence does the lecture give for cystinosis?', '1 in 100,000–200,000', ['1 in 3,000–6,000', '1 in 10,000', '1 in 300,000–600,000'], {
    explanation: 'Cystinosis: 1 in 100,000–200,000.',
  }),

  // ─── Lesson 5 · S5 Menkes syndrome ─────────────────────────────────
  mcq('s5-5-1', 'menkes', 'Between which two places does ATP7A shuttle?', 'The trans-Golgi and the plasma membrane', ['The nucleus and the mitochondrial matrix', 'The lysosome and the peroxisome', 'The ER and the nuclear envelope'], {
    explanation: 'ATP7A moves between the trans-Golgi and the plasma membrane to export copper.',
  }),
  mcq('s5-5-2', 'menkes', 'What incidence does the lecture give for Menkes syndrome?', 'About 1 in 300,000', ['About 1 in 3,000', 'About 1 in 30,000', 'About 1 in 3 million'], {
    explanation: 'Menkes syndrome: about 1 in 300,000.',
  }),
  tf({ id: 's5-5-3', conceptId: 'menkes', statement: 'Loss of muscle tone is a feature of Menkes syndrome.', answer: true, explanation: 'Features: kinky hair, loss of muscle tone, mental retardation, seizures.' }),
  mcq('s5-5-4', 'menkes', 'What kind of protein is ATP7A?', 'A copper-transporting ATPase', ['A chloride channel protein (CFTR)', 'A cystine transporter', 'A haemoglobin chain'], {
    explanation: 'ATP7A is a copper-transporting ATPase.',
  }),
  mcq('s5-5-5', 'menkes', 'Why are boys mainly affected by Menkes syndrome?', 'It is X-linked recessive', ['It is autosomal dominant', 'It is caused by a virus', 'It needs a mutation in both parents'], {
    explanation: 'Menkes is X-linked recessive.',
  }),

  // ─── Lesson 6 · S1 Structure of cells and organs ───────────────────
  mcq('s6-1-1', 'structural-defects', 'Which disease results from a defect in dystrophin?', 'Duchenne/Becker muscular dystrophy', ['Hereditary spherocytosis of red cells', 'Osteogenesis imperfecta', 'Zellweger syndrome'], {
    explanation: 'Dystrophin (cytoskeleton) → Duchenne/Becker muscular dystrophy.',
  }),
  mcq('s6-1-2', 'structural-defects', 'Which collagen types are affected in osteogenesis imperfecta, according to page 32?', 'Types I and II', ['Types III and IV', 'Type IV only', 'Types V and VI'], {
    explanation: 'Page 32: type I and II collagen.',
  }),
  tf({ id: 's6-1-3', conceptId: 'structural-defects', statement: 'Hereditary spherocytosis is a defect of the red cell membrane.', answer: true, explanation: 'Spectrin, a red cell membrane protein, is affected.' }),
  mcq('s6-1-4', 'structural-defects', 'At which site is the defect in Zellweger syndrome?', 'An organelle', ['The cytoskeleton', 'The cell membrane', 'The extracellular matrix'], {
    explanation: 'A protein of peroxisome biogenesis: organelle.',
  }),
  mcq('s6-1-5', 'structural-defects', 'Which disease is caused by an EXTRACELLULAR structural defect?', 'Osteogenesis imperfecta', ['Hereditary spherocytosis', 'Duchenne muscular dystrophy', 'Zellweger syndrome'], {
    explanation: 'Collagen is extracellular.',
  }),

  // ─── Lesson 6 · S2 Osteogenesis imperfecta ─────────────────────────
  mcq('s6-2-1', 'osteogenesis-imperfecta', 'Which eye sign is a feature of osteogenesis imperfecta?', 'Bluish whites of the eyes', ['A cherry red spot', 'Cataracts present at birth', 'Photophobia'], {
    explanation: 'Features include bluish discolouration of the white of the eye.',
  }),
  mcq('s6-2-2', 'osteogenesis-imperfecta', 'What does a defect in one chain disturb in osteogenesis imperfecta?', 'The triple helix and its fibrils', ['The double helix of the DNA', 'The red cell membrane spectrin skeleton', 'The peroxisome membrane'], {
    explanation: 'One faulty chain disturbs the triple helix and the fibrils built from it.',
  }),
  tf({ id: 's6-2-3', conceptId: 'osteogenesis-imperfecta', statement: 'Osteogenesis imperfecta causes frequent bone fractures.', answer: true, explanation: 'Page 33: frequent fractures and bone deformity.' }),
  mcq('s6-2-4', 'osteogenesis-imperfecta', 'What incidence does the lecture give for osteogenesis imperfecta?', '1 in 20,000', ['1 in 5,000', '1 in 320,000', '1 in 100'], {
    explanation: 'Osteogenesis imperfecta: 1 in 20,000.',
  }),
  mcq('s6-2-5', 'osteogenesis-imperfecta', 'Which inborn error in this lesson is autosomal DOMINANT?', 'Osteogenesis imperfecta', ['Zellweger cerebro-hepato-renal syndrome', 'Haemophilia A', 'Tay-Sachs disease'], {
    explanation: 'Osteogenesis imperfecta is autosomal dominant.',
  }),

  // ─── Lesson 6 · S3 Zellweger syndrome ──────────────────────────────
  mcq('s6-3-1', 'zellweger', 'From which organelle do pre-peroxisomes bud?', 'The ER', ['The Golgi', 'The nucleus', 'The lysosome'], {
    explanation: 'Peroxisomes form from pre-peroxisomes budding from the ER.',
  }),
  mcq('s6-3-2', 'zellweger', 'Which facial feature does Zellweger syndrome cause?', 'Dysmorphic facial features', ['A cherry red spot in the eye', 'Kinky, brittle hair', 'Very salty-tasting skin'], {
    explanation: 'Features include dysmorphic facial features.',
  }),
  tf({ id: 's6-3-3', conceptId: 'zellweger', statement: 'Peroxisomes import their matrix proteins, then grow and divide.', answer: true, explanation: 'The page 34 figure shows import, growth and division.' }),
  mcq('s6-3-4', 'zellweger', 'What incidence does the lecture give for Zellweger syndrome?', '1 in 50,000–100,000', ['1 in 300,000–600,000', '1 in 20,000', '1 in 5,000'], {
    explanation: 'Zellweger syndrome: 1 in 50,000–100,000.',
  }),
  mcq('s6-3-5', 'zellweger', 'Which three organs degenerate in Zellweger syndrome?', 'Brain, liver and kidney', ['Heart, lung and gut', 'Skin, bone and skeletal muscle', 'Eye, ear and nose'], {
    explanation: 'Cerebro-hepato-renal: brain, liver and kidney.',
  }),

  // ─── Lesson 6 · S4 Extracellular homeostasis ───────────────────────
  tf({ id: 's6-4-1', conceptId: 'homeostasis-defects', statement: 'Pulmonary emphysema can result from an inborn error of a protease inhibitor.', answer: true, explanation: 'Defective α1-antitrypsin → pulmonary emphysema.' }),
  mcq('s6-4-2', 'homeostasis-defects', 'A defect in the complement system affects which function?', 'Immune protection', ['Haemostasis', 'Protease inhibition', 'Copper transport'], {
    explanation: 'Complement proteins: immune protection → C3 deficiency.',
  }),
  tf({ id: 's6-4-3', conceptId: 'homeostasis-defects', statement: 'Haemophilia A is listed under haemostasis.', answer: true, explanation: 'Factor VIII → haemophilia A, under haemostasis.' }),
  mcq('s6-4-4', 'homeostasis-defects', 'How many functions of extracellular homeostasis does page 35 list?', 'Three', ['Two', 'Four', 'Seven'], {
    explanation: 'Immune protection, haemostasis and protease inhibition.',
  }),
  mcq('s6-4-5', 'homeostasis-defects', 'Which pairing of function and protein is correct?', 'Protease inhibition — α1-antitrypsin', ['Haemostasis — complement C3', 'Immune protection — clotting factor VIII', 'Haemostasis — α1-antitrypsin'], {
    explanation: 'α1-Antitrypsin inhibits proteases.',
  }),

  // ─── Lesson 6 · S5 Haemophilia A ───────────────────────────────────
  mcq('s6-5-1', 'haemophilia-a', 'What incidence does the lecture give for haemophilia A?', '1 in 5,000', ['1 in 50,000', '1 in 500', '1 in 300,000'], {
    explanation: 'Haemophilia A: 1 in 5,000.',
  }),
  mcq('s6-5-2', 'haemophilia-a', 'Without factor VIII, what happens to the fibrin clot?', 'It is incomplete or delayed', ['It forms faster than usual', 'It forms but never dissolves', 'It forms only in the veins'], {
    explanation: 'The platelet plug is weak and the fibrin clot incomplete or delayed.',
  }),
  tf({ id: 's6-5-3', conceptId: 'haemophilia-a', statement: 'Easy bruising is a feature of haemophilia A.', answer: true, explanation: 'Page 36 lists easy bruising.' }),
  mcq('s6-5-4', 'haemophilia-a', 'What is the first response of a vessel to injury in the page 36 figure?', 'It constricts', ['It dilates', 'It forms fibrin', 'It bursts'], {
    explanation: 'After injury the vessel constricts, then clotting factors are activated.',
  }),
  mcq('s6-5-5', 'haemophilia-a', 'Which urinary sign is a feature of haemophilia A?', 'Haematuria', ['Glycosuria', 'Ketonuria', 'Proteinuria'], {
    explanation: 'Features include haematuria.',
  }),

  // ─── Lesson 6 · S6 Growth control, receptors and hormones ──────────
  mcq('s6-6-1', 'growth-control-defects', 'What kind of genes are bcr-abl, according to the table?', 'Proto-oncogenes', ['Tumour suppressors', 'Light receptors', 'Hormone receptors'], {
    explanation: 'bcr-abl proto-oncogenes → chronic myelogenous leukaemia.',
  }),
  mcq('s6-6-2', 'receptor-hormone-defects', 'Which defective receptor causes vitamin D-dependent rickets?', 'The vitamin D receptor', ['The LDL receptor', 'The androgen (testosterone) receptor', 'The insulin receptor'], {
    explanation: 'Vitamin D receptor → vitamin D-dependent rickets.',
  }),
  tf({ id: 's6-6-3', conceptId: 'receptor-hormone-defects', statement: 'A growth hormone defect causes dwarfism.', answer: true, explanation: 'Page 38: growth hormone → dwarfism.' }),
  mcq('s6-6-4', 'receptor-hormone-defects', 'Which hormone defect does the table link to type II diabetes mellitus?', 'Insulin', ['Glucagon', 'Cortisol', 'Thyroxine'], {
    explanation: 'Insulin → type II diabetes mellitus.',
  }),
  mcq('s6-6-5', 'receptor-hormone-defects', 'Which light receptor defect causes retinitis pigmentosa?', 'Rhodopsin', ['Green opsin', 'Red opsin', 'Melanopsin'], {
    explanation: 'Rhodopsin → retinitis pigmentosa; green and red opsins → colour blindness.',
  }),
];
