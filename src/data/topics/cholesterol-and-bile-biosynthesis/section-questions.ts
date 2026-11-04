// Biochemistry → Cholesterol and Bile Biosynthesis: five more questions for every
// reading section (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/cholesterol-and-bile-biosynthesis/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 Where this topic goes ───────────────────────────
  mcq('s1-1-1', 'acetate-origin', 'Which molecule is cholesterol made from in the body?', 'Acetyl-CoA', ['Malonyl-CoA', 'Palmitate', 'Glycerol'], {
    explanation: 'Cholesterol is made from acetyl-CoA, starting with the mevalonate pathway.',
  }),
  mcq('s1-1-2', 'acetate-origin', 'What is the first reaction of the mevalonate pathway?', 'Two acetyl-CoA condense to form acetoacetyl-CoA', ['Acetyl-CoA is carboxylated to form malonyl-CoA', 'HMG-CoA is reduced to mevalonate by two NADPH', 'Squalene closes up into the four rings of the steroid nucleus'], {
    explanation: 'Synthesis starts when two molecules of acetyl-CoA condense to acetoacetyl-CoA.',
  }),
  tf({ id: 's1-1-3', conceptId: 'acetate-origin', statement: 'The lecture groups bile salts, lipoproteins and cholesterol together.', answer: true, explanation: 'This topic follows cholesterol from its synthesis to bile acids.' }),
  mcq('s1-1-4', 'acetate-origin', 'What does the liver finally turn cholesterol into, at the end of this topic?', 'Bile acids', ['Ketone bodies', 'Fatty acids', 'Glycogen'], {
    explanation: 'Lesson 5 shows how the liver turns cholesterol into bile acids.',
  }),
  fill('s1-1-5', 'acetate-origin', 'Cholesterol synthesis begins with the ____ pathway.', ['mevalonate'], {
    explanation: 'The mevalonate pathway is named after its key product, mevalonate.',
  }),

  // ─── Lesson 1 · S2 The steroid nucleus ─────────────────────────────
  mcq('s1-2-1', 'steroid-nucleus', 'How many of the steroid nucleus rings are six-membered?', 'Three — rings A, B and C', ['Two — rings A and D, at each end', 'Four — rings A to D', 'One — ring D only'], {
    explanation: 'Three six-membered rings (A, B, C) are fused to one five-membered ring (D).',
  }),
  tf({ id: 's1-2-2', conceptId: 'steroid-nucleus', statement: 'The steroid nucleus of cholesterol contains a benzene ring.', answer: false, explanation: 'It is not a benzene ring — animals cannot synthesise one.' }),
  mcq('s1-2-3', 'steroid-nucleus', 'Which ring of the steroid nucleus has five members?', 'Ring D', ['Ring A', 'Ring B', 'Ring C'], {
    explanation: 'Ring D is the five-membered ring.',
  }),
  mcq('s1-2-4', 'steroid-nucleus', 'How are the four rings of the steroid nucleus arranged?', 'All fused together', ['Joined by short chains', 'Linked in a straight line', 'Separate, side by side'], {
    explanation: 'Rings A–D are fused together into one four-ring nucleus.',
  }),
  mcq('s1-2-5', 'steroid-nucleus', 'Which description of the steroid nucleus is correct?', 'Four fused rings: three six-membered and one five-membered', ['Four separate rings joined by a long side chain', 'Three fused rings: two six-membered and one larger five-membered', 'Five fused rings, all of them six-membered'], {
    explanation: 'Cyclopentanoperhydrophenanthrene: rings A–C (six-membered) fused to ring D (five-membered).',
  }),

  // ─── Lesson 1 · S3 Landmarks on the molecule ───────────────────────
  mcq('s1-3-1', 'cholesterol-landmarks', 'Which ring carries the double bond between C-5 and C-6?', 'Ring B', ['Ring A', 'Ring C', 'Ring D'], {
    explanation: 'Ring B has the double bond between carbons 5 and 6.',
  }),
  mcq('s1-3-2', 'cholesterol-landmarks', 'What kind of side chain is attached at carbon 17?', 'A branched hydrocarbon chain', ['A short, charged carboxyl group', 'A phosphate ester chain', 'A hydroxylated sugar chain'], {
    explanation: 'Ring D carries the branched hydrocarbon side chain at C-17.',
  }),
  tf({ id: 's1-3-3', conceptId: 'cholesterol-landmarks', statement: 'Ring C is the six-membered ring between rings B and D.', answer: true, explanation: 'Slide 4 places ring C between B and D.' }),
  mcq('s1-3-4', 'cholesterol-landmarks', 'Which set of landmarks is correct for cholesterol?', '–OH at C-3, C-5=C-6 double bond, side chain at C-17', ['–OH at C-17, C-3=C-4 double bond, side chain at C-5', '–OH at C-5, C-6=C-7 double bond, side chain at C-3', '–OH at C-6, C-17=C-18 double bond, side chain at C-3'], {
    explanation: 'Slide 4: –OH at C-3 · C-5=C-6 · side chain at C-17.',
  }),
  fill('s1-3-5', 'cholesterol-landmarks', 'Cholesterol’s hydroxyl group sits on ring ____.', ['A'], {
    explanation: 'Ring A carries the HO– group on carbon 3.',
  }),

  // ─── Lesson 1 · S4 Where cholesterol is made ───────────────────────
  mcq('s1-4-1', 'synthesis-sites', 'About what share of total daily cholesterol production happens in the liver?', 'About 20%', ['About 50%', 'About 80%', 'About 5%'], {
    explanation: 'About 20% of total daily cholesterol production occurs in the liver.',
  }),
  mcq('s1-4-2', 'synthesis-sites', 'Which of these is NOT named as a site with a high rate of cholesterol synthesis?', 'The skeletal muscles', ['The intestines', 'The adrenal glands', 'The reproductive organs'], {
    explanation: 'The lecture names the intestines, adrenal glands and reproductive organs.',
  }),
  tf({ id: 's1-4-3', conceptId: 'synthesis-sites', statement: 'The liver makes most of the body’s daily cholesterol.', answer: false, explanation: 'About 20% of daily production is in the liver; the intestines, adrenals and reproductive organs also make a lot.' }),
  mcq('s1-4-4', 'synthesis-sites', 'In animal tissue, cholesterol is synthesised from which acid?', 'Acetic acid', ['Citric acid', 'Lactic acid', 'Malonic acid'], {
    explanation: 'Cholesterol is synthesised in animal tissue from acetic acid.',
  }),
  fill('s1-4-5', 'synthesis-sites', 'Besides the liver, the lecture names the intestinal ____ as a site of synthesis.', ['mucosa'], {
    explanation: 'The liver and the intestinal mucosa are named as sites of synthesis.',
  }),

  // ─── Lesson 1 · S5 Every carbon comes from acetate ─────────────────
  mcq('s1-5-1', 'acetate-origin', 'Which two parts of acetate supply cholesterol’s carbons?', 'Its methyl group and its carbonyl group', ['Its hydroxyl group and its amino group', 'Its phosphate group and its sulfur atom', 'Its carboxyl oxygen and its hydrogen atoms'], {
    explanation: 'Some carbons come from acetate’s methyl group and the rest from its carbonyl group.',
  }),
  tf({ id: 's1-5-2', conceptId: 'acetate-origin', statement: 'Some of cholesterol’s carbons come from sources other than acetate.', answer: false, explanation: 'All of cholesterol’s carbons come from acetate (acetyl-CoA).' }),
  mcq('s1-5-3', 'acetate-origin', 'Why does the cholesterol pathway begin with acetyl-CoA?', 'Inside the cell, acetate is used as acetyl-CoA', ['Acetyl-CoA is the only molecule the liver can store', 'Acetyl-CoA is made only in the endoplasmic reticulum', 'Acetate must be split before it can be used at all'], {
    explanation: 'Acetate is used in the cell as acetyl-CoA, so the pathway starts there.',
  }),
  mcq('s1-5-4', 'acetate-origin', 'What does slide 5 show about cholesterol’s carbons?', 'Each carbon coloured by the part of acetate it came from', ['Each carbon coloured by the organ that made it', 'Each carbon coloured by the enzyme that added it', 'Each carbon coloured by the ring of the nucleus it belongs to'], {
    explanation: 'Slide 5 colours every carbon by its acetate origin: methyl or carbonyl.',
  }),
  fill('s1-5-5', 'acetate-origin', 'Cholesterol is synthesised from ____ precursors.', ['acetate', 'acetyl-CoA', 'acetic acid'], {
    explanation: 'Every carbon of cholesterol comes from acetate precursors.',
  }),

  // ─── Lesson 1 · S6 The Pyruvate–Malate cycle ───────────────────────
  mcq('s1-6-1', 'pyruvate-malate-supply', 'Which two things does the Pyruvate–Malate cycle provide for cholesterol synthesis?', 'Acetyl-CoA in the cytosol and NADPH', ['Malonyl-CoA in the cytosol and FADH₂', 'Mevalonate in the cytosol and NADH', 'HMG-CoA in the matrix and ATP'], {
    explanation: 'It delivers acetyl-CoA (ATP-citrate lyase) and makes NADPH (malic enzyme).',
  }),
  mcq('s1-6-2', 'pyruvate-malate-supply', 'Which cholesterol-pathway enzyme uses the NADPH from malic enzyme?', 'HMG-CoA reductase', ['HMG-CoA synthase', 'ATP-citrate lyase', '7α-Hydroxylase only'], {
    explanation: 'NADPH is needed for HMG-CoA reductase (slide 12).',
  }),
  tf({ id: 's1-6-3', conceptId: 'pyruvate-malate-supply', statement: 'Citrate crosses both mitochondrial membranes to reach the cytosol.', answer: true, explanation: 'Step 2 of the cycle: citrate crosses both membranes.' }),
  mcq('s1-6-4', 'pyruvate-malate-supply', 'Which molecule is released when citrate synthase makes citrate in the matrix?', 'CoA-SH', ['NADPH', 'Pyruvate', 'Malate'], {
    explanation: 'Acetyl-CoA + oxaloacetate → citrate, releasing CoA-SH.',
  }),
  mcq('s1-6-5', 'pyruvate-malate-supply', 'Why is the Fatty Acid Biosynthesis deck included in this topic?', 'It shows the same cycle that supplies the cytosol', ['It explains how cholesterol is turned into fat', 'It lists the bile acids that the liver makes from cholesterol', 'It shows how statins lower fatty acid levels'], {
    explanation: 'The same Pyruvate–Malate cycle supplies both pathways with acetyl-CoA and NADPH.',
  }),

  // ─── Lesson 2 · S1 The pathway in five stages ──────────────────────
  mcq('s2-1-1', 'five-stages', 'Which stage of cholesterol synthesis makes squalene?', 'Stage 4: IPP → squalene', ['Stage 2: HMG-CoA → mevalonate', 'Stage 3: mevalonate → IPP', 'Stage 5: squalene → cholesterol'], {
    explanation: 'Stage 4 joins IPP units into squalene.',
  }),
  mcq('s2-1-2', 'five-stages', 'What is the product of stage 1?', 'HMG-CoA', ['Mevalonate', 'Squalene', 'Lanosterol'], {
    explanation: 'Stage 1: acetyl-CoAs → HMG-CoA (3-hydroxy-3-methylglutaryl-CoA).',
  }),
  tf({ id: 's2-1-3', conceptId: 'five-stages', statement: 'Lesson 2 covers stages 1 and 2; Lesson 3 covers stages 3 to 5.', answer: true, explanation: 'This lesson takes the pathway as far as mevalonate.' }),
  mcq('s2-1-4', 'five-stages', 'How many stages does the lecture divide cholesterol synthesis into?', 'Five', ['Three', 'Four', 'Seven'], {
    explanation: 'Slide 7 lists five stages, from acetyl-CoA to cholesterol.',
  }),
  fill('s2-1-5', 'five-stages', 'The last stage of cholesterol synthesis turns ____ into cholesterol.', ['squalene'], {
    explanation: 'Stage 5: squalene → cholesterol.',
  }),

  // ─── Lesson 2 · S2 Stage 1: building HMG-CoA ───────────────────────
  mcq('s2-2-1', 'hmg-coa-formation', 'Which molecule joins acetoacetyl-CoA to make HMG-CoA, along with water?', 'A third acetyl-CoA', ['A malonyl-CoA', 'A second NADPH molecule', 'A molecule of ATP'], {
    explanation: 'Acetoacetyl-CoA + acetyl-CoA + H₂O → HMG-CoA.',
  }),
  mcq('s2-2-2', 'acetoacetyl-coa-step', 'How many acetyl-CoA molecules form acetoacetyl-CoA?', 'Two', ['One', 'Three', 'Four'], {
    explanation: 'Two acetyl-CoA condense to acetoacetyl-CoA.',
  }),
  tf({ id: 's2-2-3', conceptId: 'hmg-coa-formation', statement: 'HMG-CoA is built from three acetyl-CoA units in total.', answer: true, explanation: 'Two make acetoacetyl-CoA; a third joins to make HMG-CoA.' }),
  mcq('s2-2-4', 'acetoacetyl-coa-step', 'Which sequence correctly opens the pathway?', 'Acetyl-CoA → acetoacetyl-CoA → HMG-CoA', ['Acetyl-CoA → HMG-CoA → acetoacetyl-CoA', 'Acetoacetyl-CoA → acetyl-CoA → HMG-CoA', 'Acetyl-CoA → mevalonate → HMG-CoA'], {
    explanation: 'Two acetyl-CoA → acetoacetyl-CoA, then + acetyl-CoA + H₂O → HMG-CoA.',
  }),
  fill('s2-2-5', 'acetoacetyl-coa-step', 'Two molecules of acetyl-CoA ____ to form acetoacetyl-CoA.', ['condense', 'combine', 'join'], {
    explanation: 'The mevalonate pathway starts with this condensation.',
  }),

  // ─── Lesson 2 · S3 HMG-CoA at a crossroads ─────────────────────────
  mcq('s2-3-1', 'hmg-coa-crossroads', 'Which enzyme acts on HMG-CoA in the mitochondria?', 'A cleavage enzyme', ['HMG-CoA reductase', 'ATP-citrate lyase', 'Mevalonate kinase'], {
    explanation: 'In the mitochondria a cleavage enzyme splits HMG-CoA.',
  }),
  mcq('s2-3-2', 'hmg-coa-crossroads', 'Which route for HMG-CoA leads on to cholesterol?', 'Reduction to mevalonate outside the mitochondria', ['Cleavage to acetoacetate inside the mitochondria', 'Hydrolysis to acetyl-CoA inside the nucleus', 'Oxidation to malonyl-CoA inside the cytosol'], {
    explanation: 'Only the reductase route, outside the mitochondria, leads to cholesterol.',
  }),
  tf({ id: 's2-3-3', conceptId: 'hmg-coa-crossroads', statement: 'The fate of HMG-CoA depends on where in the cell it is.', answer: true, explanation: 'Slide 8: mitochondrial HMG-CoA is cleaved; cytosolic HMG-CoA is reduced.' }),
  mcq('s2-3-4', 'hmg-coa-crossroads', 'HMG-CoA in the mitochondria is split. Does it lead to cholesterol?', 'No — it gives acetoacetate and acetyl-CoA', ['Yes — it gives mevalonate for stage 2', 'Yes — it gives squalene directly', 'No — it gives citrate for export to the cytosol'], {
    explanation: 'The mitochondrial cleavage route gives acetoacetate + acetyl-CoA, not cholesterol.',
  }),
  fill('s2-3-5', 'hmg-coa-crossroads', 'In the cytosol, HMG-CoA is turned into mevalonate by HMG-CoA ____.', ['reductase'], {
    explanation: 'The reductase route leads to cholesterol.',
  }),

  // ─── Lesson 2 · S4 Stage 2: HMG-CoA reductase ──────────────────────
  mcq('s2-4-1', 'hmg-coa-reductase-step', 'How many NADPH does HMG-CoA reductase use for each mevalonate?', 'Two', ['One', 'Three', 'None'], {
    explanation: 'HMG-CoA + 2 NADPH → mevalonate.',
  }),
  mcq('s2-4-2', 'hmg-coa-reductase-step', 'Where does the mevalonate pathway get its name?', 'From mevalonate, the product of stage 2', ['From mevalonic acid taken in with the diet', 'From the enzyme that makes squalene', 'From the scientist who found HMG-CoA'], {
    explanation: 'Mevalonate, made by HMG-CoA reductase, gives the pathway its name.',
  }),
  tf({ id: 's2-4-3', conceptId: 'hmg-coa-reductase-step', statement: 'The lecture calls HMGR the primary mechanism for regulating cholesterol.', answer: true, explanation: 'Slide 14: HMGR is the primary regulating mechanism.' }),
  mcq('s2-4-4', 'hmg-coa-reductase-step', 'What does the abbreviation HMGR stand for?', 'HMG-CoA reductase', ['HMG-CoA receptor', 'HMG-CoA regulator', 'Hydroxymethyl reductase'], {
    explanation: 'HMGR is HMG-CoA reductase.',
  }),
  mcq('s2-4-5', 'hmg-coa-reductase-step', 'Mevalonate is the product of stage 2 and the start of which stage?', 'Stage 3', ['Stage 1', 'Stage 4', 'Stage 5'], {
    explanation: 'Stage 3 turns mevalonate into isopentenyl pyrophosphate.',
  }),

  // ─── Lesson 3 · S1 Stage 3: mevalonate → IPP ───────────────────────
  mcq('s3-1-1', 'mevalonate-to-ipp', 'Which molecule is made from 5-phosphomevalonate?', '5-Pyrophosphomevalonate', ['Isopentenyl pyrophosphate', 'Geranyl pyrophosphate', 'Mevalonate'], {
    explanation: 'Mevalonate → 5-phosphomevalonate → 5-pyrophosphomevalonate → IPP.',
  }),
  mcq('s3-1-2', 'mevalonate-to-ipp', 'Which products come out of the last step of stage 3, besides IPP?', 'ADP, Pi and CO₂', ['NADPH and CO₂', 'PPi and water', 'AMP and acetyl-CoA'], {
    explanation: '5-Pyrophosphomevalonate → IPP: ATP → ADP + Pi + CO₂.',
  }),
  tf({ id: 's3-1-3', conceptId: 'mevalonate-to-ipp', statement: 'Each of the three steps of stage 3 uses one ATP.', answer: true, explanation: 'Slide 9 shows three ATP-driven steps.' }),
  mcq('s3-1-4', 'mevalonate-to-ipp', 'Put the stage 3 intermediates in order.', 'Mevalonate → 5-phospho → 5-pyrophospho → IPP', ['Mevalonate → 5-pyrophospho → 5-phospho → IPP', 'IPP → 5-phospho → 5-pyrophospho → mevalonate', '5-Phospho → mevalonate → IPP → 5-pyrophospho'], {
    explanation: 'Phosphate is added twice, then CO₂ leaves to give IPP.',
  }),
  fill('s3-1-5', 'mevalonate-to-ipp', 'Isopentenyl pyrophosphate is the ____-based building block of the pathway.', ['isoprene'], {
    explanation: 'IPP is the isoprene-based building block.',
  }),

  // ─── Lesson 3 · S2 Stage 4: joining isoprene units ─────────────────
  mcq('s3-2-1', 'prenyl-condensation', 'What does the allylic substrate lose to leave a positively charged carbon?', 'Its pyrophosphate (PPi)', ['Its carboxyl group (CO₂)', 'Its hydroxyl group (OH)', 'Its coenzyme A (CoA)'], {
    explanation: 'The allylic pyrophosphate ester loses PPi, leaving a carbonium ion.',
  }),
  mcq('s3-2-2', 'prenyl-condensation', 'What is the first product of chain building in stage 4?', 'Geranyl pyrophosphate', ['Farnesyl pyrophosphate', 'Squalene', 'Lanosterol'], {
    explanation: 'Geranyl pyrophosphate is the first product; farnesyl PP is one IPP longer.',
  }),
  tf({ id: 's3-2-3', conceptId: 'prenyl-condensation', statement: 'Each round of chain building adds one IPP unit and releases PPi.', answer: true, explanation: 'Slide 10: one IPP joins per round, and PPi is released.' }),
  mcq('s3-2-4', 'prenyl-condensation', 'Farnesyl pyrophosphate differs from geranyl pyrophosphate by…', 'One more IPP unit', ['One fewer IPP unit', 'An extra hydroxyl group', 'A ring closed at one end'], {
    explanation: 'Farnesyl PP is one IPP longer than geranyl PP.',
  }),
  mcq('s3-2-5', 'prenyl-condensation', 'Which order of chain-building products is correct?', 'Geranyl PP → farnesyl PP → squalene', ['Farnesyl PP → geranyl PP → squalene', 'Squalene → geranyl PP → farnesyl PP', 'Geranyl PP → squalene → farnesyl PP'], {
    explanation: 'Repeated condensations build geranyl PP, then farnesyl PP, then squalene.',
  }),

  // ─── Lesson 3 · S3 Stage 5: squalene → cholesterol ─────────────────
  mcq('s3-3-1', 'squalene-to-cholesterol', 'How many carbons does squalene have?', '30', ['27', '15', '20'], {
    explanation: 'Squalene is a long, linear C₃₀ molecule.',
  }),
  mcq('s3-3-2', 'squalene-to-cholesterol', 'At which molecule is the ring system first formed?', 'Lanosterol', ['Squalene', 'Farnesyl PP', 'Mevalonate'], {
    explanation: 'Squalene closes into the ring system as lanosterol.',
  }),
  tf({ id: 's3-3-3', conceptId: 'squalene-to-cholesterol', statement: 'Squalene is a linear molecule.', answer: true, explanation: 'Squalene is linear; slide 11 draws it folded to show how the rings close.' }),
  mcq('s3-3-4', 'squalene-to-cholesterol', 'Why does slide 11 draw squalene folded?', 'To show how it closes into the four rings', ['To show where CO₂ leaves the molecule', 'To show where the side chain is shortened', 'To show where bile acids attach to it'], {
    explanation: 'The folded drawing shows how squalene closes up into the rings of cholesterol.',
  }),
  fill('s3-3-5', 'squalene-to-cholesterol', 'Cholesterol is reached from ____ in several steps.', ['lanosterol'], {
    explanation: 'Slide 12 shows lanosterol → (several steps) → cholesterol as a dotted arrow.',
  }),

  // ─── Lesson 3 · S4 What branches off the pathway ───────────────────
  mcq('s3-4-1', 'pathway-branches', 'In endocrine glands, cholesterol is used to make…', 'Steroid hormones', ['Bile salts', 'Prenylated proteins', 'Dolichol'], {
    explanation: 'Slide 12: cholesterol in endocrine glands → steroids.',
  }),
  mcq('s3-4-2', 'pathway-branches', 'Which product is made from farnesyl pyrophosphate, not from cholesterol?', 'Ubiquinone', ['Bile salts', 'Steroid hormones', 'Cholyl-CoA'], {
    explanation: 'Farnesyl PP branches to heme a, dolichol and ubiquinone.',
  }),
  tf({ id: 's3-4-3', conceptId: 'pathway-branches', statement: 'Heme a is one of the branch products made from farnesyl pyrophosphate.', answer: true, explanation: 'Slide 12: farnesyl PP branches to heme a, dolichol and ubiquinone.' }),
  mcq('s3-4-4', 'pathway-branches', 'Which branch product is NOT made from farnesyl pyrophosphate?', 'Bile salts', ['Heme a', 'Dolichol', 'Ubiquinone'], {
    explanation: 'Bile salts are made from cholesterol itself, in the liver.',
  }),
  mcq('s3-4-5', 'pathway-branches', 'Which molecule is the main branch point before squalene?', 'Farnesyl pyrophosphate', ['Isopentenyl pyrophosphate', 'Mevalonate', 'Lanosterol'], {
    explanation: 'Farnesyl pyrophosphate feeds several branch products before squalene.',
  }),

  // ─── Lesson 4 · S1 Keeping the supply steady ───────────────────────
  mcq('s4-1-1', 'supply-mechanisms', 'How does the cell handle excess intracellular free cholesterol?', 'Through ACAT', ['Through AMPK', 'Through PKA', 'Through HMGR'], {
    explanation: 'Excess free cholesterol is handled by acyl-CoA:cholesterol acyltransferase (ACAT).',
  }),
  mcq('s4-1-2', 'supply-mechanisms', 'Which two processes regulate PLASMA cholesterol, according to slide 13?', 'LDL receptor uptake and HDL reverse transport', ['Bile salt release and fatty acid synthesis', 'HMGR phosphorylation and AMPK activation in the liver', 'Squalene folding and lanosterol formation'], {
    explanation: 'Plasma cholesterol: LDL receptor-mediated uptake and HDL-mediated reverse transport.',
  }),
  tf({ id: 's4-1-3', conceptId: 'supply-mechanisms', statement: 'Regulating HMGR activity and levels is one of the ways the cholesterol supply is kept steady.', answer: true, explanation: 'Slide 13 lists HMGR regulation first.' }),
  mcq('s4-1-4', 'supply-mechanisms', 'Which is NOT on slide 13’s list for keeping the cholesterol supply steady?', 'Raising the rate of fatty acid synthesis', ['Utilisation of cholesterol', 'Regulation of cellular sterol content', 'Handling excess intracellular free cholesterol'], {
    explanation: 'Slide 13 lists HMGR, ACAT, plasma cholesterol, utilisation and sterol content.',
  }),
  fill('s4-1-5', 'supply-mechanisms', 'HDL carries cholesterol in ____ transport.', ['reverse', 'reverse cholesterol'], {
    explanation: 'Plasma cholesterol is regulated by LDL receptor uptake and HDL-mediated reverse transport.',
  }),

  // ─── Lesson 4 · S2 HMGR: four controls ─────────────────────────────
  mcq('s4-2-1', 'hmgr-controls', 'Which control changes how much NEW HMGR is made?', 'Control of gene expression', ['Feedback inhibition', 'Rate of enzyme degradation', 'Phosphorylation–dephosphorylation'], {
    explanation: 'Gene expression controls how much new HMGR is made.',
  }),
  mcq('s4-2-2', 'hmgr-controls', 'Which control switches existing HMGR off and on by covalent modification?', 'Phosphorylation–dephosphorylation', ['Control of gene expression', 'Rate of enzyme degradation', 'Feedback inhibition by cholesterol'], {
    explanation: 'Adding and removing phosphate switches HMGR off and on.',
  }),
  tf({ id: 's4-2-3', conceptId: 'hmgr-controls', statement: 'HMGR is controlled in four distinct ways.', answer: true, explanation: 'Slide 14: feedback inhibition, gene expression, degradation, phosphorylation.' }),
  mcq('s4-2-4', 'hmgr-controls', 'Which control acts on HMGR that is already there, without destroying it?', 'Feedback inhibition', ['Rate of degradation', 'Gene expression', 'Proteasome breakdown'], {
    explanation: 'Feedback inhibition: cholesterol inhibits HMGR that is already present.',
  }),
  mcq('s4-2-5', 'hmgr-controls', 'Which control decides how fast existing HMGR is destroyed?', 'Rate of enzyme degradation', ['Control of gene expression', 'Feedback inhibition', 'Phosphorylation by AMPK'], {
    explanation: 'The rate of degradation controls how fast HMGR is destroyed.',
  }),

  // ─── Lesson 4 · S3 Cholesterol turns HMGR down — and destroys it ───
  mcq('s4-3-1', 'feedback-degradation', 'What is the signal that marks HMGR for destruction?', 'Polyubiquitination', ['Phosphorylation', 'Sugar glycosylation', 'Acetylation'], {
    explanation: 'Cholesterol triggers polyubiquitination of HMGR, which is then degraded.',
  }),
  mcq('s4-3-2', 'flux-ssd-statins', 'When flux through the mevalonate pathway is LOW, what happens to HMGR degradation?', 'It slows down', ['It speeds up', 'It stops the pathway', 'It is unchanged'], {
    explanation: 'High flux → faster degradation; low flux → slower.',
  }),
  tf({ id: 's4-3-3', conceptId: 'flux-ssd-statins', statement: 'A statin lowers flux through the pathway, so less HMGR is degraded.', answer: true, explanation: 'Slide 15: the statin example shows degradation following flux.' }),
  mcq('s4-3-4', 'flux-ssd-statins', 'In which organelle does HMGR, with its sterol-sensing domain, sit?', 'Endoplasmic reticulum', ['The mitochondrial matrix', 'Golgi apparatus', 'Nucleus'], {
    explanation: 'HMGR sits in the ER and contains a sterol-sensing domain.',
  }),
  mcq('s4-3-5', 'feedback-degradation', 'Which three effects does a rise in intracellular cholesterol have on HMGR?', 'Inhibits it, speeds its breakdown, cuts its synthesis', ['Activates it, slows its breakdown, raises its synthesis', 'Inhibits it, slows its breakdown, raises its synthesis', 'Activates it, speeds its breakdown, cuts its synthesis'], {
    explanation: 'Cholesterol inhibits HMGR, induces its degradation and inhibits its synthesis.',
    difficulty: 'intermediate',
  }),

  // ─── Lesson 4 · S4 Phosphorylation switches HMGR off ───────────────
  mcq('s4-4-1', 'hmgr-phosphorylation', 'In which form is HMGR most active?', 'Unmodified and dephosphorylated', ['Phosphorylated twice, by AMPK and PKA', 'Bound to ubiquitin chains', 'Phosphorylated by AMPKK'], {
    explanation: 'HMGR is most active dephosphorylated; phosphorylation decreases its activity.',
  }),
  mcq('s4-4-2', 'hmgr-phosphorylation', 'What is the net effect of AMPK kinase (AMPKK) on HMGR?', 'Off, indirectly — it activates AMPK', ['On, directly — it dephosphorylates HMGR', 'On, indirectly — it inactivates AMPK', 'Off, directly — it ubiquitinates HMGR'], {
    explanation: 'AMPKK phosphorylates and activates AMPK, which phosphorylates HMGR off.',
    difficulty: 'intermediate',
  }),
  tf({ id: 's4-4-3', conceptId: 'hmgr-phosphorylation', statement: 'AMPK is itself switched on by being phosphorylated.', answer: true, explanation: 'AMPKK phosphorylates AMPK, which activates it.' }),
  mcq('s4-4-4', 'hmgr-phosphorylation', 'Which enzyme’s net effect turns HMGR ON indirectly?', 'Protein phosphatase 2C', ['AMPK kinase (AMPKK)', 'AMP-activated protein kinase', 'Protein kinase A'], {
    explanation: 'Protein phosphatase 2C inactivates AMPK, so less HMGR is switched off.',
  }),
  fill('s4-4-5', 'hmgr-phosphorylation', 'Phosphorylated HMGR is the ____ form of the enzyme.', ['inactive', 'less active'], {
    explanation: 'Phosphorylated HMGR = inactive; dephosphorylated HMGR = active.',
  }),

  // ─── Lesson 4 · S5 Hormones ────────────────────────────────────────
  mcq('s4-5-1', 'hormonal-control', 'Which hormone increases cholesterol synthesis?', 'Insulin', ['Glucagon', 'Epinephrine', 'Cortisol'], {
    explanation: 'Insulin increases synthesis; glucagon and epinephrine reduce it.',
  }),
  mcq('s4-5-2', 'hormonal-control', 'How does PPI-1(a) keep HMGR switched off?', 'It blocks the phosphatases that would reactivate it', ['It adds a phosphate to HMGR directly', 'It speeds up the synthesis of new HMGR', 'It removes the cholesterol from the cell through ACAT'], {
    explanation: 'Active PPI-1 blocks HMGR phosphatase, protein phosphatase 2C and phosphoprotein phosphatase.',
  }),
  tf({ id: 's4-5-3', conceptId: 'hormonal-control', statement: 'Glucagon and epinephrine reduce cholesterol synthesis.', answer: true, explanation: 'Slide 16: they negatively affect cholesterol biosynthesis.' }),
  mcq('s4-5-4', 'hormonal-control', 'Which enzyme phosphorylates PPI-1 to its active form?', 'PKA', ['AMPK', 'AMPKK', 'HMGR'], {
    explanation: 'cAMP activates PKA, which phosphorylates PPI-1 → PPI-1(a).',
  }),
  mcq('s4-5-5', 'hormonal-control', 'A person has just eaten and insulin is high. What happens to HMGR?', 'Its phosphates are removed, so it is switched on', ['It is phosphorylated, so it is switched off', 'It is polyubiquitinated and destroyed in the proteasome', 'It is moved into the mitochondria'], {
    explanation: 'Insulin stimulates removal of the phosphates, switching HMGR on.',
  }),

  // ─── Lesson 5 · S1 From cholesterol to bile acids ──────────────────
  mcq('s5-1-1', 'bile-acid-synthesis', 'Which molecule is released as the side chain is shortened?', 'Propionyl-CoA', ['Acetyl-CoA', 'Malonyl-CoA', 'Butyryl-CoA chain'], {
    explanation: 'Propionyl-CoA is released on the way to cholyl-CoA and chenodeoxycholyl-CoA.',
  }),
  mcq('s5-1-2', 'bile-acid-synthesis', 'How many CoA-SH are used to make each bile acid–CoA from 7-hydroxycholesterol?', 'Two', ['One', 'Three', 'None'], {
    explanation: 'Each route uses 2 CoA-SH (slide 18).',
  }),
  tf({ id: 's5-1-3', conceptId: 'bile-acid-synthesis', statement: 'Both cholyl-CoA and chenodeoxycholyl-CoA end as CoA thioesters on a shortened side chain.', answer: true, explanation: 'Both products end in –CO–S-CoA on a shortened side chain.' }),
  mcq('s5-1-4', 'bile-acid-synthesis', 'What does 7α-hydroxylase add to the ring system?', 'An –OH group', ['A CoA thioester', 'A glycine unit', 'A double bond'], {
    explanation: '7α-Hydroxylase adds an –OH, giving 7-hydroxycholesterol.',
  }),
  mcq('s5-1-5', 'bile-acid-synthesis', 'Which of these does 7α-hydroxylase need?', 'NADPH + H⁺ and O₂', ['ATP and CoA-SH', 'NAD⁺ and two waters', 'FAD and biotin'], {
    explanation: 'The first step uses NADPH + H⁺ and O₂, forming NADP⁺.',
  }),

  // ─── Lesson 5 · S2 Conjugation ─────────────────────────────────────
  mcq('s5-2-1', 'bile-acid-conjugation', 'What does the prefix “tauro-” in a bile acid name tell you?', 'It is conjugated with taurine', ['It is conjugated with glycine', 'It carries three –OH groups', 'It is still bound to CoA'], {
    explanation: 'Glyco- = glycine; tauro- = taurine.',
  }),
  mcq('s5-2-2', 'bile-acid-conjugation', 'Which link joins the bile acid’s side chain to glycine or taurine?', 'A –CO–NH– link', ['A –CO–S– link', 'A –O–PO₃– link', 'A –CH=CH– link'], {
    explanation: 'In each conjugate the side chain is joined through a –CO–NH– link.',
  }),
  tf({ id: 's5-2-3', conceptId: 'bile-acid-conjugation', statement: 'Glycocholic acid’s side chain ends in –SO₃H.', answer: false, explanation: 'Glycocholic acid ends in –COOH; taurocholic acid ends in –SO₃H.' }),
  mcq('s5-2-4', 'bile-acid-conjugation', 'Which side-chain end belongs to glycocholic acid?', '–CO–NH–CH₂–COOH', ['–CO–NH–(CH₂)₂–SO₃H', '–CO–S-CoA', '–CH₂–OH'], {
    explanation: 'Glycine gives –CO–NH–CH₂–COOH.',
  }),
  mcq('s5-2-5', 'bile-acid-conjugation', 'Which bile acid’s side chain ends in –COOH?', 'Glycocholic acid', ['Taurocholic acid', 'Cholyl-CoA', 'Chenodeoxycholyl-CoA'], {
    explanation: 'Glycine gives –COOH; taurine gives –SO₃H.',
  }),

  // ─── Lesson 5 · S3 Why bile acids matter ───────────────────────────
  mcq('s5-3-1', 'bile-acid-functions', 'Which enzymes can reach dietary fats once bile acids have emulsified them?', 'Pancreatic lipases', ['Gastric proteases', 'Salivary α-amylases', 'Liver kinases'], {
    explanation: 'As emulsifiers, bile acids make triacylglycerols accessible to pancreatic lipases.',
  }),
  mcq('s5-3-2', 'bile-acid-functions', 'What is the ONLY significant way the body eliminates excess cholesterol?', 'Bile acid synthesis and excretion in the faeces', ['Breaking cholesterol down to CO₂ and water', 'Excreting free cholesterol unchanged in the urine', 'Turning cholesterol back into acetyl-CoA'], {
    explanation: 'Bile acid synthesis and faecal excretion is the only significant route.',
  }),
  tf({ id: 's5-3-3', conceptId: 'bile-acid-functions', statement: 'Bile acids help prevent cholesterol from precipitating in the gall bladder.', answer: true, explanation: 'With phospholipids, they keep cholesterol dissolved in bile.' }),
  mcq('s5-3-4', 'bile-acid-functions', 'How many physiologically significant functions of bile acids does the lecture list?', 'Four', ['Two', 'Three', 'Six'], {
    explanation: 'Slide 20 lists four functions.',
  }),
  mcq('s5-3-5', 'bile-acid-functions', 'Which is NOT one of the lecture’s functions of bile acids?', 'Making glucose from amino acids', ['Absorbing fat-soluble vitamins', 'Eliminating excess cholesterol', 'Keeping cholesterol dissolved in bile'], {
    explanation: 'The four are: eliminating cholesterol, solubilising it, digesting fats and absorbing fat-soluble vitamins.',
  }),
];
