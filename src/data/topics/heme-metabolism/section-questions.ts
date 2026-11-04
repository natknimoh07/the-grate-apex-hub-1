// Biochemistry → Haem and Haem Metabolism: five more questions for every reading
// section (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/heme-metabolism/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 Where haem is found ─────────────────────────────
  mcq('s1-1-1', 'haem-proteins', 'Which haem protein is a globular monomer with tertiary structure?', 'Myoglobin', ['Haemoglobin', 'Catalase', 'Cytochrome c oxidase'], {
    explanation: 'Slide 3: myoglobin is a globular monomer with tertiary structure.',
  }),
  mcq('s1-1-2', 'haem-proteins', 'Which of these haem proteins works in the respiratory chain?', 'Cytochromes', ['Myoglobin', 'Catalase', 'Haemoglobin in red cells'], {
    explanation: 'Cytochromes are the haem proteins of the respiratory chain.',
  }),
  tf({ id: 's1-1-3', conceptId: 'haem-proteins', statement: 'Haem is found only in haemoglobin and myoglobin.', answer: false, explanation: 'Cytochromes and several enzymes, such as catalase, also contain haem.' }),
  mcq('s1-1-4', 'haem-proteins', 'Which enzyme is NOT in the lecture’s list of haem-containing enzymes?', 'Hexokinase', ['Catalase', 'Tryptophan pyrrolase', 'Prostaglandin synthase'], {
    explanation: 'The list includes catalase, some peroxidases, tryptophan pyrrolase, prostaglandin synthase and NO synthase.',
  }),
  fill('s1-1-5', 'haem-proteins', 'Haem is the ____ group of a whole family of proteins.', ['prosthetic'], {
    explanation: 'Haem is a prosthetic group: bound to the protein and needed for its work.',
  }),

  // ─── Lesson 1 · S2 The porphin ring ────────────────────────────────
  mcq('s1-2-1', 'porphin-structure', 'What links the four pyrroles of porphin together?', 'Four methene (–CH=) bridges', ['Four disulfide (–S–S–) bridges', 'Four peptide (–CO–NH–) bonds', 'Four ester (–CO–O–) links'], {
    explanation: 'Porphin is four pyrrole rings joined by four methene bridges.',
  }),
  mcq('s1-2-2', 'porphin-structure', 'Where is the nitrogen in each pyrrole ring?', 'At the apex of the five-membered ring', ['At the centre of a six-membered ring', 'On a side chain outside the ring', 'Between two of the methene bridges of the ring'], {
    explanation: 'Pyrroles are five-membered rings with a nitrogen at the apex.',
  }),
  tf({ id: 's1-2-3', conceptId: 'porphin-structure', statement: 'Porphin itself has no side chains.', answer: true, explanation: 'Porphin (C₂₀H₁₄N₄) has no side chains; porphyrins are named by theirs.' }),
  mcq('s1-2-4', 'porphin-structure', 'Which molecule does NOT share the porphin-type macrocycle?', 'Cholesterol', ['Chlorophyll', 'Vitamin B₁₂', 'Bilirubin'], {
    explanation: 'Chlorophyll, vitamin B₁₂, protoporphyrin, haem and bilirubin share it; cholesterol is a steroid.',
  }),
  mcq('s1-2-5', 'porphin-structure', 'Which description of porphin is correct?', 'Macrocyclic and highly unsaturated', ['Linear and fully saturated', 'Macrocyclic and fully saturated, with no bonds', 'Linear and highly unsaturated'], {
    explanation: 'Porphin is a big ring with many double bonds.',
  }),

  // ─── Lesson 1 · S3 Side chains name the porphyrin ──────────────────
  mcq('s1-3-1', 'porphyrin-series', 'What happens to the acetates when uroporphyrin becomes coproporphyrin?', 'They become methyl groups', ['They become vinyl groups', 'They become propionates', 'They are lost from the ring completely'], {
    explanation: 'Uro → copro: the acetates become methyls.',
  }),
  mcq('s1-3-2', 'porphyrin-series', 'What does protoporphyrin carry in place of two of coproporphyrin’s propionates?', 'Two vinyl groups', ['Two acetate groups', 'Two methyl groups', 'Two hydroxyl groups'], {
    explanation: 'Copro → proto: two propionates become vinyls.',
  }),
  tf({ id: 's1-3-3', conceptId: 'porphyrin-series', statement: 'In uroporphyrin, each pyrrole carries one acetate and one propionate.', answer: true, explanation: 'Uroporphyrin: each pyrrole has one A and one P.' }),
  mcq('s1-3-4', 'porphyrin-series', 'In what order does haem synthesis pass through the porphyrins?', 'Uro → copro → proto', ['Proto → copro → uro', 'Copro → uro → proto', 'Uro → proto → copro'], {
    explanation: 'Slide 9: uro → copro → proto.',
  }),
  fill('s1-3-5', 'porphyrin-series', 'Porphyrins differ in the ____ on their four pyrroles.', ['side chains', 'side-chains', 'substituents'], {
    explanation: 'The side chains name the porphyrin.',
  }),

  // ─── Lesson 1 · S4 Isomers: why protoporphyrin IX ──────────────────
  mcq('s1-4-1', 'porphyrin-series', 'How does uroporphyrin type III differ from type I?', 'One pyrrole is reversed', ['Two pyrroles are missing', 'Every pyrrole is reversed', 'It has no propionates left'], {
    explanation: 'Type I: -AP-AP-AP-AP-; type III: -AP-AP-AP-PA-.',
  }),
  mcq('s1-4-2', 'protoporphyrin-ix', 'Which protoporphyrin isomer is found in haem proteins?', 'The ninth (IX)', ['The first (I)', 'The third (III)', 'The fifteenth (XV)'], {
    explanation: 'Of the fifteen possible protoporphyrins, the ninth is in haem.',
  }),
  tf({ id: 's1-4-3', conceptId: 'porphyrin-series', statement: 'Natural porphyrins come from uroporphyrin types I and III.', answer: true, explanation: 'Slide 10: natural porphyrins come from types I and III.' }),
  mcq('s1-4-4', 'porphyrin-series', 'Why are there also four coproporphyrins?', 'Each pyrrole still has two different groups', ['Each pyrrole has three different groups', 'All four pyrroles carry the same group', 'The methene bridges can sit in four different places'], {
    explanation: 'Methyl and propionate are still two different groups, so the same four arrangements exist.',
  }),
  mcq('s1-4-5', 'protoporphyrin-ix', 'Why does protoporphyrin have more isomers than uroporphyrin?', 'It carries three kinds of side chain, not two', ['It has five pyrrole rings instead of four', 'Its methene bridges can move freely around the ring', 'Its iron can sit in several different places'], {
    explanation: 'Methyl, vinyl and propionate — three kinds — allow fifteen isomers.',
  }),

  // ─── Lesson 1 · S5 Protoporphyrin IX and the iron ──────────────────
  mcq('s1-5-1', 'protoporphyrin-ix', 'Which positions of protoporphyrin IX carry the vinyl groups?', '2 and 4', ['6 and 7', '1 and 3', '5 and 8'], {
    explanation: 'Methyl 1, 3, 5, 8 · vinyl 2, 4 · propionate 6, 7.',
  }),
  mcq('s1-5-2', 'protoporphyrin-ix', 'How many bonds can the iron of haem form?', 'Six', ['Four', 'Two', 'Eight'], {
    explanation: 'Four in the plane of the haem and one on each side (the fifth and sixth positions).',
  }),
  mcq('s1-5-3', 'protoporphyrin-ix', 'What does methaemoglobin lose, compared with normal haemoglobin?', 'The ability to bind oxygen', ['Its four globin chains', 'Its whole protoporphyrin IX ring', 'Its central iron atom'], {
    explanation: 'Methaemoglobin has ferric iron, and only ferrous haem binds oxygen.',
  }),
  tf({ id: 's1-5-4', conceptId: 'protoporphyrin-ix', statement: 'Both ferrous and ferric haem bind oxygen.', answer: false, explanation: 'Only the ferrous (Fe²⁺) form binds oxygen.' }),
  mcq('s1-5-5', 'protoporphyrin-ix', 'Which side chains of protoporphyrin IX are the longest?', 'The propionates', ['The methyls', 'The vinyls', 'The acetate groups'], {
    explanation: 'Propionates (–CH₂–CH₂–COO⁻) are longest; methyls are shortest.',
  }),

  // ─── Lesson 2 · S1 Step 1: ALA synthase ────────────────────────────
  mcq('s2-1-1', 'ala-formation', 'A person is deficient in vitamin B₆. Which haem-synthesis step is most directly affected?', 'ALA synthase (step 1)', ['ALA dehydrase (step 2)', 'Ferrochelatase (step 8)', 'PBG deaminase (step 3)'], {
    explanation: 'ALA synthase needs pyridoxal phosphate (vitamin B₆).',
    difficulty: 'intermediate',
  }),
  mcq('s2-1-2', 'ala-formation', 'Which products are released alongside ALA in step 1?', 'CO₂ and CoA', ['NH₄⁺ and water', 'Two water molecules', 'ATP and NADPH'], {
    explanation: 'Succinyl-CoA + glycine → ALA + CO₂ + CoA.',
  }),
  tf({ id: 's2-1-3', conceptId: 'ala-formation', statement: 'ALA synthase works in the mitochondria.', answer: true, explanation: 'The first step of haem synthesis is mitochondrial.' }),
  mcq('s2-1-4', 'ala-formation', 'What is ALA chemically?', '5-Amino-4-oxopentanoic acid', ['2-Amino-3-oxobutanoic acid', '4-Amino-5-oxohexanoic acid', '3-Amino-2-oxopropanoic acid'], {
    explanation: 'δ-Aminolevulinic acid is a 4-oxo-pentanoic acid: 5-amino-4-oxopentanoic acid.',
    difficulty: 'advanced',
  }),
  fill('s2-1-5', 'ala-formation', 'Step 1 is the ____ step of haem synthesis, and it is regulated.', ['committed', 'rate-limiting', 'first committed'], {
    explanation: 'ALA synthase catalyses the committed, regulated step.',
  }),

  // ─── Lesson 2 · S2 Where haem’s atoms come from ────────────────────
  mcq('s2-2-1', 'haem-atom-origins', 'How many of haem’s carbons come from glycine’s α-carbon?', '8', ['26', '4', '34'], {
    explanation: '8 carbons come from glycine’s α-carbon; the other 26 from acetate via succinyl-CoA.',
  }),
  mcq('s2-2-2', 'haem-atom-origins', 'What happens to glycine’s carboxyl carbon?', 'It is lost as CO₂', ['It becomes a methyl group', 'It forms a methene bridge', 'It binds the central iron'], {
    explanation: 'None of haem’s carbons come from glycine’s carboxyl carbon; it leaves as CO₂.',
  }),
  tf({ id: 's2-2-3', conceptId: 'haem-atom-origins', statement: 'All four nitrogens of haem come from glycine.', answer: true, explanation: 'Labelling studies trace haem’s nitrogens to glycine.' }),
  tf({ id: 's2-2-4', conceptId: 'haem-atom-origins', statement: 'Haem has 34 carbons: 8 from glycine and 26 from acetate via succinyl-CoA.', answer: true, explanation: 'Labelling studies trace 8 carbons to glycine’s α-carbon and 26 to acetate.' }),
  fill('s2-2-5', 'haem-atom-origins', 'Haem’s other 26 carbons come from ____, by way of succinyl-CoA.', ['acetate', 'acetyl-CoA'], {
    explanation: 'The 26 non-glycine carbons come from acetate via succinyl-CoA.',
  }),

  // ─── Lesson 2 · S3 Step 2: two ALA → porphobilinogen ───────────────
  mcq('s2-3-1', 'pbg-formation', 'How many water molecules are removed when two ALA form PBG?', 'Two', ['One', 'Four', 'None'], {
    explanation: '2 ALA → porphobilinogen + 2 H₂O.',
  }),
  mcq('s2-3-2', 'pbg-formation', 'Which metal does ALA dehydrase need?', 'Zinc', ['Iron', 'Copper', 'Magnesium'], {
    explanation: 'ALA dehydrase (PBG synthase) is a zinc enzyme.',
  }),
  tf({ id: 's2-3-3', conceptId: 'pbg-formation', statement: 'Porphobilinogen is the first pyrrole of the haem pathway.', answer: true, explanation: 'PBG is the first pyrrole formed.' }),
  mcq('s2-3-4', 'pbg-formation', 'Where in the cell does ALA dehydrase work?', 'In the cytosol', ['In the mitochondrial matrix', 'On the inner mitochondrial membrane', 'In the nucleus'], {
    explanation: 'ALA leaves the mitochondria; ALA dehydrase works in the cytosol.',
  }),
  mcq('s2-3-5', 'pbg-formation', 'Which is NOT another name for ALA dehydrase?', 'ALA synthase', ['ALA dehydratase', 'Porphobilinogen synthase', 'PBG synthase'], {
    explanation: 'ALA synthase is the step 1 enzyme; ALA dehydrase = ALA dehydratase = PBG synthase.',
  }),

  // ─── Lesson 2 · S4 Step 3: PBG deaminase builds a chain ────────────
  mcq('s2-4-1', 'pbg-deaminase', 'Through which atom is the dipyrromethane linked to PBG deaminase?', 'A cysteine sulphur', ['A serine oxygen', 'A lysine nitrogen', 'A central iron atom'], {
    explanation: 'The dipyrromethane is linked at the active site through a cysteine S.',
  }),
  mcq('s2-4-2', 'pbg-deaminase', 'What does PBG deaminase build on its dipyrromethane before releasing the product?', 'A linear hexapyrrole', ['A closed porphyrin ring', 'A linear dipyrrole only', 'A spiro intermediate'], {
    explanation: 'Four PBG are added, giving a linear hexapyrrole on the enzyme.',
  }),
  tf({ id: 's2-4-3', conceptId: 'pbg-deaminase', statement: 'PBG deaminase makes its own dipyrromethane prosthetic group.', answer: true, explanation: 'Slide 17: the enzyme makes this prosthetic group itself.' }),
  mcq('s2-4-4', 'pbg-deaminase', 'How many PBG units does PBG deaminase add to its dipyrromethane?', 'Four', ['Two', 'Six', 'Eight'], {
    explanation: 'Four PBG are added, giving a hexapyrrole with the two cofactor pyrroles.',
  }),
  tf({ id: 's2-4-5', conceptId: 'pbg-deaminase', statement: 'PBG deaminase’s dipyrromethane cofactor leaves the enzyme together with the product.', answer: false, explanation: 'Hydrolysis releases hydroxymethylbilane; the cofactor stays on the enzyme.' }),
  // ─── Lesson 2 · S5 Step 4: closing the ring — III, not I ───────────
  mcq('s2-5-1', 'urogen-iii-synthase', 'What happens to hydroxymethylbilane without the cosynthase?', 'It closes spontaneously into uroporphyrinogen I', ['It stays linear and is excreted in bile', 'It is broken back down into four PBG units', 'It closes into uroporphyrinogen III anyway, but slowly'], {
    explanation: 'Without cosynthase, hydroxymethylbilane cyclises spontaneously to the type I isomer.',
  }),
  mcq('s2-5-2', 'urogen-iii-synthase', 'Uroporphyrinogen III synthase is also called…', 'Cosynthase', ['Ferrochelatase', 'PBG synthase', 'Haem oxygenase'], {
    explanation: 'Uroporphyrinogen III synthase = cosynthase.',
  }),
  mcq('s2-5-3', 'urogen-iii-synthase', 'Uroporphyrinogen I leads on to which molecule?', 'Coproporphyrinogen I', ['Protoporphyrinogen IX', 'Haem', 'Uroporphyrinogen III'], {
    explanation: 'Type I goes to coproporphyrinogen I, which does not lead to haem.',
  }),
  mcq('s2-5-4', 'urogen-iii-synthase', 'Which side-chain order belongs to uroporphyrinogen III?', '-AP-AP-AP-PA- (asymmetric)', ['-AP-AP-AP-AP- (symmetric)', '-PA-PA-PA-PA- (symmetric)', '-AA-PP-AA-PP- (alternating)'], {
    explanation: 'Type III has one pyrrole flipped: -AP-AP-AP-PA-.',
  }),
  mcq('s2-5-5', 'urogen-iii-synthase', 'PBG deaminase is also called…', 'Uroporphyrinogen I synthase', ['Uroporphyrinogen III synthase', 'Porphobilinogen synthase', 'Coproporphyrinogen oxidase'], {
    explanation: 'PBG deaminase = uroporphyrinogen I synthase; cosynthase = uroporphyrinogen III synthase.',
  }),

  // ─── Lesson 3 · S1 Step 5: uroporphyrinogen decarboxylase ──────────
  mcq('s3-1-1', 'urogen-decarboxylase', 'How many CO₂ does uroporphyrinogen decarboxylase remove?', 'Four', ['Two', 'One', 'Eight'], {
    explanation: 'All four acetate side chains lose CO₂, becoming methyls.',
  }),
  mcq('s3-1-2', 'urogen-decarboxylase', 'Which substrate does uroporphyrinogen decarboxylase act on?', 'Uroporphyrinogen III', ['Coproporphyrinogen III', 'Porphobilinogen', 'Hydroxymethylbilane'], {
    explanation: 'Step 5: uroporphyrinogen III → coproporphyrinogen III.',
  }),
  tf({ id: 's3-1-3', conceptId: 'urogen-decarboxylase', statement: 'Uroporphyrinogen decarboxylase works in the cytosol.', answer: true, explanation: 'Step 5 is one of the four cytosolic steps.' }),
  mcq('s3-1-4', 'urogen-decarboxylase', 'Which side chains does step 5 act on?', 'The four acetates', ['The two vinyls', 'The four propionates', 'The four methyls'], {
    explanation: 'Step 5 decarboxylates the acetates into methyl groups.',
  }),
  fill('s3-1-5', 'urogen-decarboxylase', 'Decarboxylating an acetate side chain leaves a ____ group.', ['methyl'], {
    explanation: 'Acetate (–CH₂–COO⁻) minus CO₂ gives a methyl.',
  }),

  // ─── Lesson 3 · S2 Step 6: coproporphyrinogen oxidase ──────────────
  mcq('s3-2-1', 'coprogen-oxidase', 'Which positions of protoporphyrin IX keep their propionate side chains?', '6 and 7', ['2 and 4', '1 and 3', '5 and 8'], {
    explanation: 'Only the propionates at 2 and 4 become vinyls; those at 6 and 7 stay.',
  }),
  tf({ id: 's3-2-2', conceptId: 'coprogen-oxidase', statement: 'Coproporphyrinogen oxidase acts on all four propionate side chains.', answer: false, explanation: 'It acts only on the propionates at positions 2 and 4.' }),
  tf({ id: 's3-2-3', conceptId: 'coprogen-oxidase', statement: 'The two vinyl groups of haem are made at step 6.', answer: true, explanation: 'Coproporphyrinogen oxidase makes the vinyls.' }),
  mcq('s3-2-4', 'coprogen-oxidase', 'What two chemical changes does an “oxido-decarboxylation” combine?', 'Decarboxylation and dehydrogenation', ['Hydrolysis and phosphorylation', 'Reduction and hydration', 'Methylation and oxidative deamination'], {
    explanation: 'The enzyme decarboxylates and dehydrogenates the propionates.',
  }),
  fill('s3-2-5', 'coprogen-oxidase', 'Coproporphyrinogen oxidase is a ____ enzyme.', ['mitochondrial'], {
    explanation: 'Step 6 brings the pathway back into the mitochondria.',
  }),

  // ─── Lesson 3 · S3 Steps 7–8: protoporphyrin IX, then iron ─────────
  mcq('s3-3-1', 'ferrochelatase-step', 'Which enzyme makes protoporphyrin IX?', 'Protoporphyrinogen oxidase', ['Coproporphyrinogen oxidase', 'Ferrochelatase', 'Uroporphyrinogen decarboxylase'], {
    explanation: 'Step 7: protoporphyrinogen oxidase oxidises protoporphyrinogen IX.',
  }),
  tf({ id: 's3-3-2', conceptId: 'ferrochelatase-step', statement: 'Ferrochelatase is one of the cytosolic enzymes that mature red cells keep.', answer: false, explanation: 'Ferrochelatase is on the inner mitochondrial membrane.' }),
  tf({ id: 's3-3-3', conceptId: 'ferrochelatase-step', statement: 'Protoporphyrinogen oxidase oxidises protoporphyrinogen IX to protoporphyrin IX.', answer: true, explanation: 'Step 7 makes protoporphyrin IX; step 8 adds the iron.' }),
  mcq('s3-3-4', 'ferrochelatase-step', 'Besides iron, what is the substrate of ferrochelatase?', 'Protoporphyrin IX', ['Protoporphyrinogen IX', 'Coproporphyrinogen III', 'Biliverdin IXα'], {
    explanation: 'Ferrochelatase inserts Fe²⁺ into protoporphyrin IX.',
  }),
  mcq('s3-3-5', 'ferrochelatase-step', 'Which is the last step of haem synthesis?', 'Protoporphyrin IX + Fe²⁺ → haem', ['Protoporphyrinogen IX → protoporphyrin IX', 'Coproporphyrinogen III → protoporphyrinogen IX', 'Uroporphyrinogen III → coproporphyrinogen III'], {
    explanation: 'Step 8: ferrochelatase inserts iron to make haem.',
  }),

  // ─── Lesson 3 · S4 Two compartments ────────────────────────────────
  mcq('s3-4-1', 'compartments', 'How many steps of haem synthesis happen in the cytosol?', 'Four', ['Three', 'Five', 'Two'], {
    explanation: 'Steps 2–5 are cytosolic; steps 1 and 6–8 are mitochondrial.',
  }),
  mcq('s3-4-2', 'compartments', 'Which step of haem synthesis happens in the mitochondria?', 'Coproporphyrinogen oxidase (step 6)', ['PBG deaminase (step 3)', 'Uroporphyrinogen III synthase (step 4)', 'ALA dehydrase (step 2)'], {
    explanation: 'The first step and the last three are mitochondrial.',
  }),
  tf({ id: 's3-4-3', conceptId: 'compartments', statement: 'Red cells keep the four cytosolic haem enzymes after they lose their mitochondria.', answer: true, explanation: 'Slide 24: the cytosolic enzymes stay in red cells.' }),
  mcq('s3-4-4', 'compartments', 'Which is the only haem-synthesis enzyme that needs a metal activator?', 'PBG synthase (zinc)', ['Ferrochelatase (copper)', 'ALA synthase (iron)', 'PBG deaminase (zinc)'], {
    explanation: 'Only PBG synthase needs a metal activator: zinc.',
  }),
  mcq('s3-4-5', 'compartments', 'Which sequence of compartments does the pathway follow?', 'Mitochondria → cytosol → mitochondria', ['Cytosol → mitochondria → cytosol', 'Mitochondria → nucleus → cytosol → nucleus', 'Cytosol → ER → mitochondria'], {
    explanation: 'Step 1 in mitochondria, steps 2–5 in cytosol, steps 6–8 back in mitochondria.',
  }),

  // ─── Lesson 4 · S1 ALA synthase: the control point ─────────────────
  mcq('s4-1-1', 'alas-regulation', 'How is ALA synthase mainly regulated in most cells?', 'Haem represses transcription of its gene', ['Haem activates its gene transcription', 'Iron destroys the enzyme in the proteasome', 'Glycine levels switch the enzyme on and off'], {
    explanation: 'Haem is a feedback inhibitor, repressing transcription of the ALA synthase gene.',
  }),
  mcq('s4-1-2', 'alas-regulation', 'What regulates the ALA synthase of developing red cells?', 'The availability of iron, as iron–sulphur clusters', ['The amount of glycine in the plasma and the marrow', 'The level of bilirubin in the blood', 'The amount of succinyl-CoA in the cytosol'], {
    explanation: 'The red-cell variant responds to iron (iron–sulphur clusters).',
  }),
  tf({ id: 's4-1-3', conceptId: 'alas-regulation', statement: 'The red-cell form of ALA synthase is regulated mainly by haem repressing its gene.', answer: false, explanation: 'The red-cell variant responds to iron, as iron–sulphur clusters.' }),
  mcq('s4-1-4', 'alas-regulation', 'Haem levels rise in a liver cell. What follows?', 'Less ALA synthase, so less haem is made', ['More ALA synthase, so more haem is made', 'More ferrochelatase, so more iron is used', 'Less bilirubin, so less haem is broken down'], {
    explanation: 'Haem ↑ → ALA synthase gene repressed → less haem made.',
  }),
  fill('s4-1-5', 'alas-regulation', 'ALA synthase is usually the ____ step for the whole haem pathway.', ['rate-limiting', 'rate limiting'], {
    explanation: 'ALA synthase catalyses the committed step and is usually rate-limiting.',
  }),

  // ─── Lesson 4 · S2 Liver vs red cells ──────────────────────────────
  mcq('s4-2-1', 'liver-vs-red-cells', 'Which tissue keeps making haem throughout life, unlike red cells?', 'The liver', ['Mature red cells', 'The spleen', 'Skeletal muscle'], {
    explanation: 'Red-cell haem synthesis stops at maturity; the liver’s does not.',
  }),
  mcq('s4-2-2', 'liver-vs-red-cells', 'Which tissue uses most of its haem to make haemoglobin?', 'Immature red cells', ['The liver hepatocytes', 'Red muscle', 'The spleen'], {
    explanation: 'Immature red cells make haem for haemoglobin; the liver mainly for P450s.',
  }),
  tf({ id: 's4-2-3', conceptId: 'liver-vs-red-cells', statement: 'Haem synthesis in red cells stops when they mature.', answer: true, explanation: 'Synthesis ceases in mature red cells; the liver does not stop.' }),
  mcq('s4-2-4', 'liver-vs-red-cells', 'Besides ALA synthase, at which enzymes is red-cell haem synthesis also controlled?', 'Ferrochelatase and PBG deaminase', ['ALA dehydrase and cosynthase', 'Haem oxygenase and biliverdin reductase', 'Coproporphyrinogen oxidase only'], {
    explanation: 'Red cells also control synthesis at ferrochelatase and PBG deaminase.',
    difficulty: 'intermediate',
  }),
  mcq('s4-2-5', 'liver-vs-red-cells', 'What extra job does haem do in reticulocytes?', 'It stimulates protein synthesis', ['It stores iron as ferritin', 'It makes bilirubin for the bile duct', 'It forms cytochrome P450'], {
    explanation: 'In reticulocytes, haem also stimulates protein synthesis.',
  }),

  // ─── Lesson 4 · S3 Hemin keeps haem and globin in step ─────────────
  mcq('s4-3-1', 'hemin-globin-balance', 'What happens to free haem that accumulates in a red-cell precursor?', 'It is spontaneously oxidised to hemin', ['It is broken down to biliverdin at once', 'It binds to albumin and leaves the cell', 'It is stored as haemosiderin in the cell'], {
    explanation: 'Accumulated free haem is spontaneously oxidised to hemin.',
  }),
  mcq('s4-3-2', 'hemin-globin-balance', 'Which kinase does hemin inhibit?', 'The eIF2 kinase', ['AMP-activated kinase', 'Protein kinase A', 'The ALA kinase'], {
    explanation: 'Hemin inhibits the kinase that would phosphorylate and inactivate eIF2.',
  }),
  tf({ id: 's4-3-3', conceptId: 'hemin-globin-balance', statement: 'When eIF2 stays active, more globin is made to combine with the excess haem.', answer: true, explanation: 'Active eIF2 lets globin synthesis keep up with haem.' }),
  mcq('s4-3-4', 'hemin-globin-balance', 'What is eIF2?', 'A translation initiation factor', ['A haem-binding storage protein', 'A transcription repressor of ALA synthase', 'An enzyme that inserts iron into haem'], {
    explanation: 'eIF2 is a translation initiation factor; phosphorylation inactivates it.',
  }),
  mcq('s4-3-5', 'hemin-globin-balance', 'Besides repressing ALA synthase, what else may hemin block?', 'Transfer of ALA synthase into the mitochondria', ['Release of haem from the mitochondria', 'Breakdown of globin in the proteasome', 'Uptake of glycine into the developing red cell'], {
    explanation: 'Hemin may block ALA synthase transfer from the cytosol into the mitochondria.',
    difficulty: 'intermediate',
  }),

  // ─── Lesson 4 · S4 Hemin as a drug ─────────────────────────────────
  mcq('s4-4-1', 'hemin-drug', 'Hemin and haem both repress which enzyme?', 'ALA synthase', ['Ferrochelatase', 'Haem oxygenase', 'PBG deaminase'], {
    explanation: 'Hemin works like haem, by repressing ALA synthase.',
  }),
  mcq('s4-4-2', 'hemin-drug', 'In a porphyria attack, what does hemin stop?', 'Accumulation of toxic precursors', ['Loss of iron in the urine', 'Breakdown of red cells', 'Build-up of conjugated bilirubin in the skin'], {
    explanation: 'Feedback on the pathway stops the toxic precursors accumulating.',
  }),
  tf({ id: 's4-4-3', conceptId: 'hemin-drug', statement: 'Hematin is the “X factor” that Haemophilus influenzae needs to grow.', answer: true, explanation: 'Slide 32 names hematin as the X factor.' }),
  mcq('s4-4-4', 'hemin-drug', 'How does hemin treat a porphyria attack?', 'By feedback repression of the haem pathway', ['By supplying the missing enzyme directly', 'By binding and removing the iron from the blood', 'By speeding up the breakdown of bilirubin'], {
    explanation: 'Like haem, hemin represses ALA synthase, so toxic precursors stop accumulating.',
  }),
  fill('s4-4-5', 'hemin-drug', 'Hemin is sold under the trade name ____.', ['Panhematin'], {
    explanation: 'Panhematin is hemin for intravenous use.',
  }),

  // ─── Lesson 5 · S1 What an enzyme block does ───────────────────────
  mcq('s5-1-1', 'inborn-error-principles', 'An enzyme in a pathway is blocked. What happens to the material before the block?', 'It accumulates', ['It is used up faster', 'It is unchanged', 'It turns into the product'], {
    explanation: 'Substrate and intermediates upstream of the block build up.',
  }),
  mcq('s5-1-2', 'inborn-error-principles', 'What happens to the main product (P₁) of a blocked pathway?', 'Less of it is made', ['More of it is made', 'It is made faster', 'It is made elsewhere'], {
    explanation: 'The main product falls when its pathway is blocked.',
  }),
  tf({ id: 's5-1-3', conceptId: 'inborn-error-principles', statement: 'An alternative pathway may take over upstream intermediates after a block.', answer: true, explanation: 'Upstream intermediates can be diverted to another product (P₂).' }),
  mcq('s5-1-4', 'inborn-error-principles', 'What finally happens to the material that builds up behind a block?', 'It is excreted or deposited in tissues', ['It is converted back into the substrate', 'It is broken down into CO₂ and water', 'It is stored safely inside the nucleus'], {
    explanation: 'Accumulated material is excreted or deposited.',
  }),
  fill('s5-1-5', 'inborn-error-principles', 'Diverting intermediates to P₂ is the use of an ____ pathway.', ['alternative', 'alternate', 'alternative minor'], {
    explanation: 'An alternative pathway may take over the upstream intermediates.',
  }),

  // ─── Lesson 5 · S2 Porphyrias ──────────────────────────────────────
  mcq('s5-2-1', 'porphyria-basics', 'What are porphyrias caused by?', 'Deficiencies of enzymes of haem synthesis', ['Excess iron absorbed from the diet', 'Too much bilirubin being made by the spleen and liver', 'Faulty globin chains in the red cells'], {
    explanation: 'Porphyrias are deficiencies of haem-biosynthesis enzymes.',
  }),
  mcq('s5-2-2', 'porphyria-basics', 'How much enzyme do people with a dominant porphyria usually have?', 'About 50% of the normal level', ['None of the enzyme at all', 'About 10% of the normal level', 'Twice the normal level'], {
    explanation: 'Affected people have about 50% of normal enzyme and still make some haem.',
  }),
  tf({ id: 's5-2-3', conceptId: 'porphyria-basics', statement: 'Porphyrias are common disorders.', answer: false, explanation: 'Slide 39: porphyrias are rare.' }),
  mcq('s5-2-4', 'porphyria-basics', 'Why do haem precursors cause harm in porphyrias?', 'They are toxic at high concentrations', ['They block the uptake of iron by the gut', 'They destroy globin in the red cells', 'They lower the oxygen in the blood'], {
    explanation: 'Porphyrins are toxic at high concentrations.',
  }),
  mcq('s5-2-5', 'porphyria-basics', 'Which of these does NOT trigger porphyria attacks, according to the lecture?', 'Drinking water', ['Certain drugs', 'Certain kinds of food', 'Sun exposure'], {
    explanation: 'The triggers listed are certain drugs, chemicals, foods and sun.',
  }),

  // ─── Lesson 5 · S3 Which enzyme, which porphyria ───────────────────
  mcq('s5-3-1', 'porphyria-map', 'Which porphyria comes from a block at the second enzyme of the pathway?', 'δ-ALA dehydratase porphyria', ['Acute intermittent porphyria', 'Variegate porphyria', 'Hereditary coproporphyria'], {
    explanation: 'ALA dehydratase is step 2; its deficiency is δ-ALA dehydratase porphyria.',
  }),
  mcq('s5-3-2', 'porphyria-map', 'How many haem-synthesis enzymes does slide 40 link to a porphyria?', 'Seven', ['Eight', 'Five', 'Three'], {
    explanation: 'Every enzyme from ALA dehydratase to ferrochelatase has its porphyria: seven.',
  }),
  mcq('s5-3-3', 'porphyria-map', 'A deficiency of uroporphyrinogen III cosynthase causes…', 'Congenital erythropoietic porphyria', ['Hereditary coproporphyria', 'Erythropoietic protoporphyria', 'δ-ALA dehydratase porphyria (step 2)'], {
    explanation: 'Cosynthase → congenital erythropoietic porphyria.',
  }),
  tf({ id: 's5-3-4', conceptId: 'porphyria-map', statement: 'Hereditary coproporphyria results from a deficiency of coproporphyrinogen oxidase.', answer: true, explanation: 'Slide 40 pairs coproporphyrinogen oxidase with hereditary coproporphyria.' }),
  mcq('s5-3-5', 'porphyria-map', 'Which pairing of enzyme and porphyria is WRONG?', 'PBG deaminase — porphyria cutanea tarda', ['Ferrochelatase — erythropoietic protoporphyria', 'Coproporphyrinogen oxidase — hereditary coproporphyria', 'Protoporphyrinogen oxidase — variegate porphyria'], {
    explanation: 'PBG deaminase deficiency causes acute intermittent porphyria; PCT is uroporphyrinogen decarboxylase.',
  }),

  // ─── Lesson 5 · S4 Acute intermittent porphyria ────────────────────
  mcq('s5-4-1', 'acute-intermittent-porphyria', 'Which kind of symptoms mark acute intermittent porphyria?', 'Neurovisceral: neuropsychiatric and abdominal pain', ['Cutaneous: blistering photosensitivity of the skin', 'Haematological: severe anaemia from birth only', 'Renal: kidney failure with blood in the urine'], {
    explanation: 'AIP causes neuropsychiatric symptoms and abdominal pain (“neurovisceral”).',
  }),
  mcq('s5-4-2', 'acute-intermittent-porphyria', 'Where do PBG, uroporphyrin and 5-ALA accumulate in AIP?', 'In plasma and urine', ['In the skin only', 'In the bile only', 'In the bone marrow only'], {
    explanation: 'AIP: PBG, uroporphyrin and 5-ALA in plasma and urine.',
  }),
  tf({ id: 's5-4-3', conceptId: 'acute-intermittent-porphyria', statement: 'In acute intermittent porphyria, the skin is the main organ affected.', answer: false, explanation: 'AIP is neurovisceral; skin damage marks porphyria cutanea tarda.' }),
  mcq('s5-4-4', 'acute-intermittent-porphyria', 'Which drug is used to manage attacks of acute intermittent porphyria?', 'Hemin', ['Insulin', 'Aspirin', 'Penicillin'], {
    explanation: 'Hemin is used particularly in acute intermittent porphyria.',
  }),
  fill('s5-4-5', 'acute-intermittent-porphyria', 'In acute intermittent porphyria the deficient enzyme is porphobilinogen ____.', ['deaminase'], {
    explanation: 'AIP is a PBG deaminase deficiency.',
  }),

  // ─── Lesson 5 · S5 Porphyria cutanea tarda ─────────────────────────
  mcq('s5-5-1', 'porphyria-cutanea-tarda', 'What turns the accumulated porphyrinogens into porphyrins in PCT?', 'Light', ['Bacteria', 'Bile acids', 'Insulin'], {
    explanation: 'Light converts porphyrinogens to porphyrins.',
  }),
  mcq('s5-5-2', 'porphyria-cutanea-tarda', 'How do porphyrins damage the skin in PCT?', 'They react with O₂, making oxygen radicals', ['They bind iron and starve the skin of it', 'They block the sweat glands and pores of the skin', 'They digest the collagen of the skin'], {
    explanation: 'Porphyrins react with O₂ to form radicals that severely damage the skin.',
  }),
  tf({ id: 's5-5-3', conceptId: 'porphyria-cutanea-tarda', statement: 'In porphyria cutanea tarda, uroporphyrinogen is found in the urine.', answer: true, explanation: 'Slide 42: uroporphyrinogen accumulates and appears in urine.' }),
  mcq('s5-5-4', 'porphyria-cutanea-tarda', 'Which reaction is blocked in porphyria cutanea tarda?', 'Uroporphyrinogen III → coproporphyrinogen III', ['Coproporphyrinogen III → protoporphyrinogen IX', 'Porphobilinogen → hydroxymethylbilane', 'Protoporphyrin IX → haem'], {
    explanation: 'PCT is a uroporphyrinogen decarboxylase deficiency.',
  }),
  mcq('s5-5-5', 'porphyria-cutanea-tarda', 'Put the PCT mechanism in order.', 'Porphyrinogens build up → light → radicals → skin damage', ['Light → porphyrinogens build up → skin damage → radicals', 'Radicals → porphyrinogens build up → light → skin damage', 'Skin damage → light → radicals → porphyrinogens build up'], {
    explanation: 'Porphyrinogens accumulate, light makes porphyrins, which make radicals that damage the skin.',
  }),

  // ─── Lesson 5 · S6 Lead poisoning ──────────────────────────────────
  mcq('s5-6-1', 'lead-poisoning', 'Which enzyme does lead inhibit most strongly?', 'ALA dehydrase (PBG synthase)', ['Ferrochelatase (haem synthase)', 'ALA synthase in the mitochondria', 'Uroporphyrinogen decarboxylase'], {
    explanation: 'Lead inhibits ALA dehydrase most strongly, and also ferrochelatase.',
  }),
  mcq('s5-6-2', 'lead-poisoning', 'Why can lead bind to PBG synthase?', 'Pb²⁺ takes the place of zinc at its sites', ['Pb²⁺ takes the place of iron in haem', 'Pb²⁺ binds glycine before it reaches the enzyme', 'Pb²⁺ breaks the enzyme’s peptide bonds'], {
    explanation: 'The zinc-binding sites, with cysteine sulphur ligands, can bind Pb²⁺ instead.',
  }),
  tf({ id: 's5-6-3', conceptId: 'lead-poisoning', statement: 'Lead poisoning gives symptoms like those of acute intermittent porphyria.', answer: true, explanation: 'Slide 35: the symptoms resemble AIP.' }),
  mcq('s5-6-4', 'lead-poisoning', 'Which laboratory sign reflects CHRONIC lead exposure?', 'Raised erythrocyte zinc protoporphyrin', ['Low erythrocyte ALA dehydratase activity', 'Raised urinary δ-aminolevulinic acid', 'Raised urinary coproporphyrin'], {
    explanation: 'Raised zinc protoporphyrin (ferrochelatase blocked) reflects chronic exposure.',
  }),
  mcq('s5-6-5', 'lead-poisoning', 'Why might high ALA be toxic to the brain?', 'It resembles GABA and its autoxidation makes ROS', ['It resembles glucose and blocks its entry to the brain', 'It binds haemoglobin and lowers brain oxygen', 'It is converted to bilirubin inside the brain'], {
    explanation: 'ALA resembles the neurotransmitter GABA, and its autoxidation generates reactive oxygen species.',
  }),

  // ─── Lesson 6 · S1 Where the haem comes from ───────────────────────
  mcq('s6-1-1', 'haem-sources', 'What share of daily bilirubin comes from ineffective erythropoiesis and other haem proteins?', 'About 15%', ['About 85%', 'About 50%', 'About 1%'], {
    explanation: '~85% from senescent red cells; ~15% from the other sources.',
  }),
  tf({ id: 's6-1-2', conceptId: 'haem-sources', statement: 'Cytochrome P450 enzymes are one source of the haem that is broken down.', answer: true, explanation: 'Slide 2 lists cytochrome P450s among the sources.' }),
  tf({ id: 's6-1-3', conceptId: 'haem-sources', statement: 'Old red cells are removed from the circulation by the reticuloendothelial system, especially in the spleen.', answer: true, explanation: 'Slide 2: removed especially in the spleen.' }),
  mcq('s6-1-4', 'haem-sources', 'Which condition is an example of ineffective erythropoiesis?', 'Thalassaemia', ['Gilbert’s syndrome', 'Lead poisoning', 'Viral hepatitis'], {
    explanation: 'The lecture gives pernicious anaemia and thalassaemia as examples.',
  }),
  mcq('s6-1-5', 'haem-sources', 'Which is NOT a source of haem for breakdown?', 'Dietary cholesterol', ['Cytochrome P450 enzymes', 'Senescent red cells', 'Ineffective erythropoiesis'], {
    explanation: 'Haem comes from red cells, P450s, other haem proteins and ineffective erythropoiesis.',
  }),

  // ─── Lesson 6 · S2 Haem oxygenase ──────────────────────────────────
  mcq('s6-2-1', 'haem-oxygenase', 'Which bridge does haem oxygenase cleave?', 'The α-methene bridge between the vinyl pyrroles', ['The bridge between the two propionate pyrroles', 'The iron bond at the centre of the ring', 'Any one of the four methene bridges at random'], {
    explanation: 'It cleaves the bridge joining the two pyrroles that carry the vinyl groups.',
  }),
  mcq('s6-2-2', 'haem-oxygenase', 'What makes haem oxygenase unique in the body?', 'It is the only reaction that releases CO', ['It is the only reaction that uses NADPH', 'It is the only reaction that makes iron', 'It is the only reaction that happens in the spleen'], {
    explanation: 'Endogenous carbon monoxide comes from the haem oxygenase reaction.',
  }),
  mcq('s6-2-3', 'haem-oxygenase', 'Haem oxygenase opens the haem ring. How are biliverdin’s four pyrroles arranged?', 'Four, in a line', ['Four, in a ring', 'Two, in a line', 'Three, in a ring'], {
    explanation: 'Biliverdin IXα is a linear tetrapyrrole.',
  }),
  mcq('s6-2-4', 'haem-oxygenase', 'Which are the products of the haem oxygenase reaction?', 'Biliverdin, CO and iron', ['Bilirubin, CO₂ and iron', 'Biliverdin, CO₂ and water', 'Urobilinogen, CO and iron'], {
    explanation: 'Haem + O₂ + NADPH → biliverdin + CO + iron.',
  }),
  fill('s6-2-5', 'haem-oxygenase', 'Haem oxygenase is substrate ____: more haem gives more enzyme.', ['inducible', 'induced'], {
    explanation: 'The enzyme is induced by its substrate.',
  }),

  // ─── Lesson 6 · S3 Biliverdin → bilirubin ──────────────────────────
  mcq('s6-3-1', 'biliverdin-to-bilirubin', 'Which enzyme turns the green pigment into the orange-yellow one?', 'Biliverdin reductase', ['Haem oxygenase', 'UDP-glucuronyl transferase', 'Ferrochelatase'], {
    explanation: 'Biliverdin reductase reduces green biliverdin to orange-yellow bilirubin.',
  }),
  tf({ id: 's6-3-2', conceptId: 'biliverdin-to-bilirubin', statement: 'Both haem oxygenase and biliverdin reductase use NADPH.', answer: true, explanation: 'Haem + O₂ + NADPH → biliverdin; biliverdin reductase is NADPH-dependent.' }),
  tf({ id: 's6-3-3', conceptId: 'biliverdin-to-bilirubin', statement: 'Biliverdin IXα is a linear tetrapyrrole.', answer: true, explanation: 'Opening the ring leaves a linear tetrapyrrole.' }),
  mcq('s6-3-4', 'biliverdin-to-bilirubin', 'Where does biliverdin reductase work?', 'In the cytosol', ['In the bile canaliculus', 'In the endoplasmic reticulum', 'In the large intestine'], {
    explanation: 'Biliverdin reductase is cytosolic.',
  }),
  mcq('s6-3-5', 'biliverdin-to-bilirubin', 'What does biliverdin reductase do to biliverdin?', 'Reduces it to bilirubin', ['Oxidises it to urobilin', 'Conjugates it with glucuronate', 'Splits it into four pyrroles'], {
    explanation: 'Biliverdin is reduced to bilirubin IXα.',
  }),

  // ─── Lesson 6 · S4 Inside the macrophage ───────────────────────────
  mcq('s6-4-1', 'macrophage-handling', 'Which cell takes up and degrades a worn-out red cell?', 'A macrophage', ['A neutrophil', 'A hepatocyte', 'A platelet'], {
    explanation: 'Effete red cells are phagocytosed by macrophages.',
  }),
  mcq('s6-4-2', 'macrophage-handling', 'Inside the macrophage, the red cell is split into which two parts?', 'Haem and globin', ['Iron and bilirubin', 'Albumin and haem', 'Globin and biliverdin'], {
    explanation: 'Degradation in the phagolysosome gives haem and globin.',
  }),
  mcq('s6-4-3', 'macrophage-handling', 'Which protein carries released iron in the blood?', 'Transferrin', ['Ceruloplasmin', 'Albumin', 'Ligandin'], {
    explanation: 'Iron is released to transferrin, with the aid of ceruloplasmin.',
  }),
  tf({ id: 's6-4-4', conceptId: 'macrophage-handling', statement: 'Unconjugated bilirubin leaves the macrophage bound to albumin.', answer: true, explanation: 'It travels to the liver bound to albumin.' }),
  mcq('s6-4-5', 'macrophage-handling', 'In which forms can iron from haem be stored?', 'Ferritin or haemosiderin', ['Transferrin or albumin', 'Bilirubin or biliverdin', 'Myoglobin or catalase enzyme'], {
    explanation: 'Iron is stored as ferritin or haemosiderin, reused, or released to transferrin.',
  }),

  // ─── Lesson 7 · S1 To the liver ────────────────────────────────────
  mcq('s7-1-1', 'bilirubin-transport', 'Which proteins carry unconjugated bilirubin in the blood?', 'Albumin and α-globulins', ['Transferrin and ferritin', 'Haemoglobin and myoglobin', 'Ligandin and globin'], {
    explanation: 'Unconjugated bilirubin travels bound to albumin and α-globulins.',
  }),
  mcq('s7-1-2', 'bilirubin-transport', 'Which is the correct order of bilirubin’s journey?', 'Macrophage → blood (albumin) → hepatocyte (ligandin)', ['Hepatocyte → blood (albumin) → macrophage (ligandin)', 'Macrophage → bile (ligandin) → blood (albumin)', 'Blood (ligandin) → macrophage → hepatocyte (albumin)'], {
    explanation: 'Bilirubin leaves the macrophage on albumin and is bound by ligandin in the hepatocyte.',
  }),
  tf({ id: 's7-1-3', conceptId: 'bilirubin-transport', statement: 'Bilirubin is taken up across the hepatocyte’s sinusoidal membrane.', answer: true, explanation: 'The textbook page shows uptake across the sinusoidal membrane.' }),
  mcq('s7-1-4', 'bilirubin-transport', 'Why must unconjugated bilirubin be carried by proteins in the blood?', 'It is not water-soluble', ['It is too small to stay in the blood', 'It is destroyed by plasma enzymes', 'It is filtered at once by the kidney'], {
    explanation: 'Unconjugated bilirubin is not water-soluble; conjugation later makes it soluble.',
  }),
  fill('s7-1-5', 'bilirubin-transport', 'Unconjugated bilirubin is carried to the ____.', ['liver'], {
    explanation: 'It travels on albumin to the liver for conjugation.',
  }),

  // ─── Lesson 7 · S2 Conjugation ─────────────────────────────────────
  mcq('s7-2-1', 'bilirubin-conjugation', 'To which carbon of glucuronic acid are bilirubin’s propionic acid chains esterified?', 'C-1', ['C-6', 'C-3', 'C-4'], {
    explanation: 'Each propionic acid side chain is esterified to the C-1 hydroxyl of glucuronic acid.',
  }),
  mcq('s7-2-2', 'bilirubin-conjugation', 'Where in the hepatocyte is UDP-glucuronyl transferase?', 'The endoplasmic reticulum', ['The mitochondrial matrix', 'The nucleus of the cell', 'The sinusoidal plasma membrane'], {
    explanation: 'The conjugating enzyme sits in the endoplasmic reticulum.',
  }),
  tf({ id: 's7-2-3', conceptId: 'bilirubin-conjugation', statement: 'Conjugation makes bilirubin water-soluble so it can leave in bile.', answer: true, explanation: 'Bilirubin diglucuronide is water-soluble and is excreted into bile.' }),
  mcq('s7-2-4', 'bilirubin-conjugation', 'Which molecule donates the glucuronic acid for conjugation?', 'UDP-glucuronate', ['Glucose 6-phosphate', 'UDP-glucose', 'Glucuronyl-CoA'], {
    explanation: 'UDP-glucuronate is the donor; UDP is released.',
  }),
  fill('s7-2-5', 'bilirubin-conjugation', 'Conjugated bilirubin is bilirubin ____.', ['diglucuronide', 'di-glucuronide'], {
    explanation: 'Two glucuronic acids are attached: bilirubin diglucuronide.',
  }),

  // ─── Lesson 7 · S3 In the gut ──────────────────────────────────────
  mcq('s7-3-1', 'intestinal-fate', 'What removes the glucuronides from bilirubin in the gut?', 'Bacterial hydrolases', ['Pancreatic lipases', 'Gastric acid', 'Liver ligandin protein'], {
    explanation: 'Bacterial hydrolases in the terminal ileum and large intestine remove them.',
  }),
  mcq('s7-3-2', 'intestinal-fate', 'Which products give colour after urobilinogens are oxidised?', 'Urobilins (stercobilins)', ['Biliverdins (green pigments)', 'Porphyrins (red pigments)', 'Bilirubins (yellow pigments)'], {
    explanation: 'Colourless urobilinogens are oxidised to coloured urobilins.',
  }),
  tf({ id: 's7-3-3', conceptId: 'intestinal-fate', statement: 'Urobilinogens are colourless.', answer: true, explanation: 'Urobilinogens are colourless; urobilins are coloured.' }),
  mcq('s7-3-4', 'intestinal-fate', 'What is the return of some urobilinogen to the liver called?', 'Enterohepatic recirculation', ['Reverse cholesterol transport', 'Portal hypertension', 'Hepatic first-pass loss'], {
    explanation: 'Reabsorbed urobilinogen returns to the liver: enterohepatic recirculation.',
  }),
  mcq('s7-3-5', 'intestinal-fate', 'According to the textbook page, how much urobilinogen reaches the urine?', '2–5%', ['20–25%', '50%', 'None'], {
    explanation: 'Up to ~20% is reabsorbed, with 2–5% reaching the urine.',
  }),

  // ─── Lesson 7 · S4 Causes of jaundice ──────────────────────────────
  mcq('s7-4-1', 'jaundice-causes', 'Into which group of jaundice does G6PD deficiency fall?', 'Prehepatic (haemolytic)', ['Hepatic (genetic excretion)', 'Posthepatic (extrahepatic)', 'Hepatic (viral infection)'], {
    explanation: 'G6PD deficiency causes haemolysis: prehepatic jaundice.',
  }),
  mcq('s7-4-2', 'jaundice-causes', 'Which syndromes are genetic errors of bilirubin EXCRETION?', 'Dubin–Johnson and Rotor', ['Gilbert’s and Crigler–Najjar', 'Wilson’s and α₁-antitrypsin', 'Sickle cell and thalassaemia'], {
    explanation: 'Dubin–Johnson and Rotor affect excreting conjugated bilirubin.',
  }),
  mcq('s7-4-3', 'jaundice-causes', 'A tumour of the head of the pancreas causes which type of jaundice?', 'Posthepatic, extrahepatic ducts', ['Prehepatic, haemolytic', 'Hepatic, genetic error of conjugation', 'Hepatic, viral infection'], {
    explanation: 'It blocks the extrahepatic bile ducts: posthepatic jaundice.',
  }),
  tf({ id: 's7-4-4', conceptId: 'jaundice-causes', statement: 'Gilbert’s syndrome is a genetic error of bilirubin uptake and conjugation.', answer: true, explanation: 'Gilbert’s and Crigler–Najjar are errors of uptake and conjugation.' }),
  mcq('s7-4-5', 'jaundice-causes', 'In viral hepatitis, what happens to conjugated bilirubin?', 'It regurgitates into the serum', ['It is never made in the liver', 'It is excreted only in sweat', 'It is turned back into haem in the liver'], {
    explanation: 'Intrahepatic cholestasis: conjugated bilirubin regurgitates into the serum.',
  }),

  // ─── Lesson 7 · S5 Phototherapy ────────────────────────────────────
  mcq('s7-5-1', 'phototherapy', 'Why can newborns become jaundiced?', 'Their conjugating system is immature', ['They make no bilirubin at all yet', 'They cannot break down any haem', 'Their bile ducts are always blocked at birth'], {
    explanation: 'The conjugating system of the newborn is immature.',
  }),
  mcq('s7-5-2', 'phototherapy', 'Which wavelengths of light does phototherapy use?', 'Blue', ['Red', 'Ultraviolet C', 'Infrared'], {
    explanation: 'Phototherapy uses blue light.',
  }),
  tf({ id: 's7-5-3', conceptId: 'phototherapy', statement: 'The photoisomers made by phototherapy need conjugation before they can be excreted.', answer: false, explanation: 'They are water-soluble and excreted in bile and urine without conjugation.' }),
  mcq('s7-5-4', 'phototherapy', 'What does phototherapy turn unconjugated bilirubin into?', 'Less toxic, water-soluble photoisomers', ['Insoluble crystals stored in the skin', 'Biliverdin that is breathed out', 'Haem that is reused by the new red cells'], {
    explanation: 'Light converts it to less toxic, water-soluble photoisomers.',
  }),
  mcq('s7-5-5', 'phototherapy', 'Which bilirubin does phototherapy act on?', 'Unconjugated bilirubin in the skin', ['Conjugated bilirubin in the bile', 'Urobilinogen in the gut', 'Bilirubin bound to ligandin in the liver'], {
    explanation: 'Phototherapy alters the unconjugated bilirubin in the skin.',
  }),
];
