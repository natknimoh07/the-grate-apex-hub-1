// Biochemistry → Fatty Acid Biosynthesis: five more questions for every reading
// section (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n. Same rules as questions.ts.
// Lesson 7 section 5 (the ER elongation chart added to deck B) is an annotation,
// so it is not tested until confirmed.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/fatty-acid-biosynthesis/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 Where this topic starts ─────────────────────────
  mcq('s1-1-1', 'beta-oxidation-product', 'How much of the chain does each round of β-oxidation remove?', 'Two carbons, as one acetyl-CoA', ['One carbon, as carbon dioxide', 'Three carbons, as malonyl-CoA', 'Four carbons, as acetoacetyl-CoA'], {
    explanation: 'β-Oxidation removes the chain two carbons at a time; each piece leaves as acetyl-CoA.',
  }),
  tf({ id: 's1-1-2', conceptId: 'beta-oxidation-product', statement: 'Fatty acid synthesis and β-oxidation share acetyl-CoA but run in opposite directions.', answer: true, explanation: 'One breaks chains down to acetyl-CoA; the other builds them up from it.' }),
  mcq('s1-1-3', 'beta-oxidation-product', 'In which directions do the two pathways run?', 'β-Oxidation breaks chains down; synthesis builds them up', ['Both break fatty acid chains down, at different rates', 'Both build fatty acid chains up, in different organelles', 'β-Oxidation builds chains up; synthesis breaks them down'], {
    explanation: 'β-Oxidation breaks fatty acids down; biosynthesis builds them up from acetyl-CoA.',
  }),
  fill('s1-1-4', 'beta-oxidation-product', 'Acetyl-CoA is the ____ of β-oxidation and the starting material of fatty acid synthesis.', ['product', 'end product', 'final product'], {
    explanation: 'Acetyl-CoA links the pathways: the product of one and the starting material of the other.',
  }),
  mcq('s1-1-5', 'beta-oxidation-product', 'A 16-carbon fatty acid is broken down completely by β-oxidation. How many acetyl-CoA does it give?', '8', ['16', '4', '7'], {
    explanation: 'Each acetyl-CoA carries two carbons, so 16 carbons give 8 acetyl-CoA.',
    difficulty: 'intermediate',
  }),

  // ─── Lesson 1 · S2 Enzyme names tell you the job ───────────────────
  mcq('s1-2-1', 'enzyme-nomenclature', 'Most enzyme names are built from which two parts?', 'What the enzyme acts on plus the reaction type, ending “-ase”', ['The name of its discoverer plus the organ where it was first found', 'The cofactor it uses plus the product it makes, ending “-ose”', 'Its cell compartment plus its energy source, ending “-in”'], {
    explanation: 'An enzyme name joins its substrate to the type of reaction, ending in “-ase”.',
  }),
  mcq('s1-2-2', 'enzyme-nomenclature', 'From its name alone, what should “glucose kinase” do?', 'Transfer a phosphate group to glucose', ['Add water across a double bond in glucose', 'Join two glucose molecules using ATP energy', 'Break glucose apart by adding water to it'], {
    explanation: 'A kinase transfers a phosphate group, so a glucose kinase phosphorylates glucose.',
  }),
  tf({ id: 's1-2-3', conceptId: 'enzyme-nomenclature', statement: 'A hydrolase breaks a bond by adding water.', answer: true, explanation: 'Hydrolases catalyse hydrolysis: a bond is broken by adding water.' }),
  mcq('s1-2-4', 'enzyme-nomenclature', 'Which of these is NOT one of the reaction types the lecture reminds you of?', 'Isomerase', ['Kinase', 'Hydrolase', 'Hydratase'], {
    explanation: 'The lecture reminds you of kinases, synthases, hydrolases and hydratases.',
  }),
  mcq('s1-2-5', 'enzyme-nomenclature', 'Why is it worth learning the reaction words in enzyme names?', 'You can predict what an unfamiliar enzyme does', ['You can work out the enzyme’s molecular mass', 'You can tell which organ makes the enzyme', 'You can tell how fast the enzyme works in cells'], {
    explanation: 'The name carries the reaction type, so an unfamiliar enzyme’s job can be predicted.',
  }),

  // ─── Lesson 1 · S3 Synthase or synthetase? ─────────────────────────
  mcq('s1-3-1', 'synthase-vs-synthetase', 'What is the one difference between a synthase and a synthetase?', 'Whether ATP must be hydrolysed for it to work', ['Whether it forms bonds or breaks them apart', 'Whether it works in the cytosol or mitochondria', 'Whether it acts on fats or on carbohydrates'], {
    explanation: 'Both form bonds to build a molecule; only a synthetase must hydrolyse ATP.',
  }),
  tf({ id: 's1-3-2', conceptId: 'synthase-vs-synthetase', statement: 'A synthase does not need energy from ATP hydrolysis to work.', answer: true, explanation: 'By definition, a synthetase must cleave ATP; a synthase does not.' }),
  tf({ id: 's1-3-3', conceptId: 'synthase-vs-synthetase', statement: 'Only synthetases form chemical bonds; synthases break them.', answer: false, explanation: 'Both kinds of enzyme form bonds to build a new molecule. The difference is ATP.' }),
  mcq('s1-3-4', 'synthase-vs-synthetase', 'An enzyme joins two molecules and cleaves ATP to ADP while doing so. What is it?', 'A synthetase', ['A synthase', 'A hydratase', 'A carboxylase'], {
    explanation: 'An enzyme that must hydrolyse ATP to join molecules is a synthetase.',
  }),
  fill('s1-3-5', 'synthase-vs-synthetase', 'Both synthases and synthetases form chemical ____ to build a new molecule.', ['bonds', 'bond', 'chemical bonds'], {
    explanation: 'Both form bonds; only the synthetase must hydrolyse ATP to do it.',
  }),

  // ─── Lesson 1 · S4 Hydratase or dehydratase? ───────────────────────
  mcq('s1-4-1', 'hydratase-vs-dehydratase', 'What does the prefix “de-” mean in “dehydratase” and “dehydrogenase”?', 'Removal', ['Addition', 'Doubling', 'Transfer'], {
    explanation: '“De-” means removal: a dehydratase removes water, a dehydrogenase removes hydrogen.',
  }),
  mcq('s1-4-2', 'hydratase-vs-dehydratase', 'A hydratase acts on a C=C double bond. What group does it leave behind?', 'An –OH group', ['A keto C=O group', 'A carboxyl group', 'A thioester bond'], {
    explanation: 'A hydratase adds water across the double bond, giving an –OH group.',
  }),
  tf({ id: 's1-4-3', conceptId: 'hydratase-vs-dehydratase', statement: 'A dehydratase creates a C=C double bond by removing water.', answer: true, explanation: 'Removing water from a hydroxyl intermediate forms a C=C double bond.' }),
  mcq('s1-4-4', 'hydratase-vs-dehydratase', 'Which pairing of example enzyme and pathway is correct?', 'β-Hydroxyacyl-ACP dehydratase — fatty acid synthesis', ['Enoyl-CoA hydratase — fatty acid synthesis', 'β-Hydroxyacyl-ACP dehydratase — mitochondrial β-oxidation', 'Enoyl-CoA dehydratase — the citrate shunt'], {
    explanation: 'The dehydratase acts in synthesis; enoyl-CoA hydratase acts in β-oxidation.',
    difficulty: 'intermediate',
  }),
  fill('s1-4-5', 'hydratase-vs-dehydratase', 'A dehydrogenase removes ____.', ['hydrogen', 'hydrogens', 'H'], {
    explanation: '“De-” means removal: a dehydrogenase removes hydrogen.',
  }),

  // ─── Lesson 1 · S5 Reading the enzyme names in this topic ──────────
  mcq('s1-5-1', 'enzyme-names-in-topic', 'Which enzyme in this topic makes the new carbon–carbon bond?', 'Ketoacyl-ACP synthase', ['Acetyl-CoA carboxylase', 'β-Ketoacyl-ACP reductase', 'ATP-citrate lyase'], {
    explanation: 'A synthase joins two groups; ketoacyl-ACP synthase makes the new C–C bond.',
  }),
  mcq('s1-5-2', 'enzyme-names-in-topic', 'Which enzyme releases the finished fatty acid from the synthase?', 'Thioesterase', ['Transacylase', 'Dehydratase', 'Carboxylase'], {
    explanation: 'A thioesterase breaks the thioester bond by hydrolysis, releasing the chain.',
  }),
  mcq('s1-5-3', 'enzyme-names-in-topic', 'Where do the reductases of this topic get their electrons?', 'From NADPH', ['From FADH₂', 'From ATP', 'From biotin'], {
    explanation: 'β-Ketoacyl-ACP reductase and enoyl-ACP reductase reduce their substrates with NADPH.',
  }),
  tf({ id: 's1-5-4', conceptId: 'enzyme-names-in-topic', statement: 'The two transacylases load acetyl and malonyl groups onto the synthase.', answer: true, explanation: 'A transacylase moves an acyl group from one carrier to another — here from CoA to the synthase.' }),
  mcq('s1-5-5', 'enzyme-names-in-topic', 'Which enzyme in this topic is a lyase?', 'ATP-citrate lyase', ['Malate dehydrogenase', 'Acetyl-CoA carboxylase', 'Enoyl-ACP reductase'], {
    explanation: 'A lyase splits a molecule without hydrolysis or oxidation; ATP-citrate lyase splits citrate.',
  }),

  // ─── Lesson 2 · S1 An anabolic pathway of the fed state ────────────
  mcq('s2-1-1', 'synthesis-location-state', 'Why does an anabolic pathway such as fatty acid synthesis cost the cell something?', 'Building larger molecules needs energy and reducing power', ['Breaking molecules down always releases heat that is lost', 'Anabolic pathways destroy the enzymes that carry them out', 'Anabolic pathways happen only when no glucose is available'], {
    explanation: 'An anabolic pathway builds a larger molecule from smaller ones, which costs energy and reducing power.',
  }),
  mcq('s2-1-2', 'synthesis-location-state', 'When does the body store extra fuel as fat?', 'After a meal, when it has more fuel than it needs now', ['During fasting, when the glucose stores of the liver have run low', 'During exercise, when muscles need quick energy', 'Overnight, when the liver is releasing glucose'], {
    explanation: 'Synthesis runs under fed conditions, when there is more fuel than is needed right now.',
  }),
  tf({ id: 's2-1-3', conceptId: 'synthesis-location-state', statement: 'After a meal, more glucose gives more acetyl-CoA and more citrate in the mitochondria.', answer: true, explanation: 'Flux through the TCA cycle increases, so more citrate is made in the mitochondria.' }),
  mcq('s2-1-4', 'citrate-shunt', 'In the fed liver, what carries acetyl groups out of the mitochondria?', 'Citrate', ['Malonyl-CoA', 'Palmitate', 'Pyruvate'], {
    explanation: 'Excess citrate leaves via the citrate shunt, carrying acetyl groups to the cytosol.',
  }),
  fill('s2-1-5', 'synthesis-location-state', 'After a meal, fuel the body cannot use right away is stored as ____.', ['fat', 'fats', 'triacylglycerol', 'triglyceride'], {
    explanation: 'Under fed conditions the extra fuel is stored as fat — which is why synthesis runs then.',
  }),

  // ─── Lesson 2 · S2 Is synthesis just β-oxidation in reverse? ──────
  mcq('s2-2-1', 'not-simple-reversal', 'What does activating acetyl-CoA with CO₂ give the synthesis pathway?', 'Malonyl-CoA, which drives the chain-joining step', ['Palmitate, the finished 16-carbon fatty acid', 'NADPH, the reducing agent for both reductions', 'Citrate, the carrier that leaves the mitochondria'], {
    explanation: 'Adding CO₂ makes malonyl-CoA, which drives the chain-joining step.',
  }),
  mcq('s2-2-2', 'not-simple-reversal', 'For which steps is NADPH used in place of FADH₂?', 'The two reduction steps', ['The chain-joining step', 'The loading of the carriers', 'The release of palmitate'], {
    explanation: 'NADPH is used as the reducing agent for the two reduction steps.',
  }),
  tf({ id: 's2-2-3', conceptId: 'not-simple-reversal', statement: 'Running β-oxidation backwards would add carbons two at a time.', answer: true, explanation: 'β-Oxidation removes two carbons at a time, so its reverse would add two — which is why the question arises.' }),
  mcq('s2-2-4', 'not-simple-reversal', 'How many key changes does the lecture say make the synthesis pathway possible?', 'Two', ['One', 'Three', 'Four'], {
    explanation: 'Two: activating acetyl-CoA with CO₂, and using NADPH as the reducing agent.',
  }),
  mcq('s2-2-5', 'not-simple-reversal', 'Which pair lists the two changes that make synthesis possible?', 'CO₂ activation of acetyl-CoA, and NADPH as the reductant', ['FADH₂ as the reductant, and acetyl-CoA used without change', 'Loss of CoA from acetyl-CoA, and ATP as the reductant', 'Splitting of malonyl-CoA, and NADH as the reductant'], {
    explanation: 'Acetyl-CoA is activated by adding CO₂, and NADPH replaces FADH₂ as the reducing agent.',
    difficulty: 'intermediate',
  }),

  // ─── Lesson 2 · S3 The stages of the synthesis cycle ──────────────
  mcq('s2-3-1', 'synthesis-stages', 'Which stage of the cycle comes directly after transfer?', 'Elongation', ['Reduction', 'Dehydration', 'Release'], {
    explanation: 'The stages run transfer → elongation → reduction → dehydration → reduction.',
  }),
  mcq('s2-3-2', 'synthesis-stages', 'At which stage is water removed, forming a double bond?', 'Dehydration', ['Condensation', 'Elongation', 'Reduction'], {
    explanation: 'Dehydration removes water and forms a double bond.',
  }),
  tf({ id: 's2-3-3', conceptId: 'synthesis-stages', statement: 'The final stage of each round reduces the double bond, giving a saturated chain.', answer: true, explanation: 'The second reduction uses NADPH to reduce the double bond.' }),
  mcq('s2-3-4', 'synthesis-stages', 'How long is the chain when the cycle stops?', '16 carbons', ['18 carbons', '14 carbons', '12 carbons'], {
    explanation: 'The cycle continues until palmitoyl-ACP, a 16-carbon chain, is formed.',
  }),
  fill('s2-3-5', 'synthesis-stages', 'Once formed, palmitoyl-ACP is released as ____.', ['palmitate', 'palmitic acid'], {
    explanation: 'The 16-carbon chain is released as palmitate.',
  }),

  // ─── Lesson 3 · S1 The first step ──────────────────────────────────
  mcq('s3-1-1', 'malonyl-coa', 'Compared with acetyl-CoA, how many extra carbons does malonyl-CoA carry?', 'One, in the added carboxyl group', ['Two, in an added acetyl group', 'None — only a phosphate is added', 'Three, in an added malonate group'], {
    explanation: 'Malonyl-CoA is acetyl-CoA carrying an added carboxyl group: three carbons in the acyl part.',
  }),
  mcq('s3-1-2', 'acetyl-coa-carboxylase', 'Why is the enzyme of the first step called a carboxylase?', 'It adds a carboxyl group to its substrate', ['It removes a carboxyl group from its substrate', 'It splits its substrate without using water', 'It transfers a phosphate group onto its substrate'], {
    explanation: 'A carboxylase adds a carboxyl group; acetyl-CoA carboxylase adds CO₂ to acetyl-CoA.',
  }),
  tf({ id: 's3-1-3', conceptId: 'malonyl-coa', statement: 'The acyl part of malonyl-CoA has one more carbon than that of acetyl-CoA.', answer: true, explanation: 'The added carboxyl group gives three carbons instead of two.' }),
  mcq('s3-1-4', 'acetyl-coa-carboxylase', 'Which are the starting materials of the first step?', 'Acetyl-CoA and carbon dioxide', ['Malonyl-CoA and water', 'Palmitate and coenzyme A', 'Citrate and mitochondrial oxaloacetate'], {
    explanation: 'Acetyl-CoA carboxylase joins acetyl-CoA and CO₂ to give malonyl-CoA.',
  }),
  fill('s3-1-5', 'acetyl-coa-carboxylase', 'Before any chain can be built, acetyl-CoA must be ____.', ['activated', 'carboxylated'], {
    explanation: 'The first step “activates” acetyl-CoA by adding a carbon dioxide.',
  }),

  // ─── Lesson 3 · S2 Behind the reaction ─────────────────────────────
  mcq('s3-2-1', 'acc-energy', 'Where does the CO₂ used by acetyl-CoA carboxylase come from?', 'From bicarbonate', ['From malonyl-CoA', 'From palmitate', 'From citrate'], {
    explanation: 'In the first half-reaction, CO₂ from bicarbonate is attached to biotin.',
  }),
  mcq('s3-2-2', 'acc-energy', 'What happens in the second half of the acetyl-CoA carboxylase reaction?', 'Biotin hands the CO₂ on to acetyl-CoA', ['ATP is made from the carbon dioxide', 'Biotin is released into the cytosol', 'Malonyl-CoA is split back to acetyl-CoA'], {
    explanation: 'Biotin passes its CO₂ on to acetyl-CoA, giving malonyl-CoA.',
  }),
  tf({ id: 's3-2-3', conceptId: 'acc-energy', statement: 'The acetyl-CoA carboxylase reaction is irreversible.', answer: true, explanation: 'The lecture describes the carboxylation as irreversible.' }),
  mcq('s3-2-4', 'acc-energy', 'Which half of the reaction uses the energy of ATP?', 'Attaching CO₂ to biotin', ['Passing CO₂ to acetyl-CoA', 'Releasing malonyl-CoA', 'Loading biotin onto the enzyme'], {
    explanation: 'ATP energy is used in the first half, when CO₂ is attached to biotin.',
    difficulty: 'intermediate',
  }),
  fill('s3-2-5', 'acc-energy', 'Fatty acid synthesis spends one ____ for every malonyl-CoA made.', ['ATP'], {
    explanation: 'This is where synthesis spends its ATP: one per malonyl-CoA.',
  }),

  // ─── Lesson 3 · S3 Why add CO₂ at all? ─────────────────────────────
  mcq('s3-3-1', 'co2-fate', 'The CO₂ added to acetyl-CoA is best described as…', 'A temporary handle that pays for the new C–C bond', ['A permanent part of the finished fatty acid chain', 'A waste product that the cell cannot get rid of', 'The source of the electrons for both reductions'], {
    explanation: 'The cell carboxylates now to decarboxylate later: the CO₂ is a temporary handle.',
  }),
  tf({ id: 's3-3-2', conceptId: 'co2-fate', statement: 'The cell carboxylates acetyl-CoA so that it can decarboxylate it later.', answer: true, explanation: 'Losing the CO₂ at condensation drives the joining reaction.' }),
  mcq('s3-3-3', 'co2-fate', 'In the first round, which product forms as the added CO₂ leaves?', 'Acetoacetyl-ACP', ['Butyryl-ACP', 'Crotonyl-ACP', 'β-Hydroxybutyryl-ACP'], {
    explanation: 'Decarboxylation during the first condensation gives acetoacetyl-ACP.',
  }),
  mcq('s3-3-4', 'co2-fate', 'Put in order: what happens to the malonyl group after carboxylation?', 'Loaded onto the synthase, then decarboxylated at condensation', ['Decarboxylated in the cytosol, then loaded onto the synthase', 'Reduced twice by NADPH, then loaded onto the synthase complex', 'Released as palmitate, then decarboxylated'], {
    explanation: 'Carboxylation → loading onto the synthase → decarboxylation during condensation.',
    difficulty: 'intermediate',
  }),
  fill('s3-3-5', 'co2-fate', 'The joining of malonyl to the growing chain is called the ____ reaction.', ['condensation'], {
    explanation: 'The electrons from the departing CO₂’s bond drive the condensation reaction.',
  }),

  // ─── Lesson 4 · S1 One complex, two carriers ───────────────────────
  mcq('s4-1-1', 'fas-carriers', 'Where is the growing fatty acid chain during synthesis?', 'Attached to the synthase complex the whole time', ['Free in the cytosol between the steps', 'Bound to coenzyme A between the steps', 'Inside the mitochondria until it is finally released'], {
    explanation: 'The growing chain never floats free: it stays attached to the complex.',
  }),
  mcq('s4-1-2', 'fas-carriers', 'What is the textbook name for the lecture’s ACP₂?', 'Acyl carrier protein (ACP)', ['β-Ketoacyl-ACP synthase (KS)', 'Acetyl-CoA carboxylase (ACC)', 'Thioesterase (TE) site'], {
    explanation: 'ACP₂ is the acyl carrier protein with its long phosphopantetheine arm.',
  }),
  mcq('s4-1-3', 'fas-carriers', 'In textbook terms, ACP₁ is the cysteine –SH of which enzyme?', 'β-Ketoacyl-ACP synthase (KS)', ['Enoyl-ACP reductase (ER)', 'β-Ketoacyl-ACP reductase (KR)', 'Malonyl-CoA transacylase'], {
    explanation: 'The lecture’s ACP₁ corresponds to the cysteine –SH of β-ketoacyl-ACP synthase.',
    difficulty: 'advanced',
  }),
  tf({ id: 's4-1-4', conceptId: 'fas-carriers', statement: 'All the chain-building reactions happen on one large enzyme complex, the fatty acid synthase.', answer: true, explanation: 'The synthase is one large complex carrying both carriers and all the activities.' }),
  fill('s4-1-5', 'fas-carriers', 'ACP₁ is a holding station for acetyl or fatty ____ groups.', ['acyl'], {
    explanation: 'ACP₁ holds acetyl or fatty acyl groups on its cysteinyl –SH.',
  }),

  // ─── Lesson 4 · S2 Loading the carriers ────────────────────────────
  mcq('s4-2-1', 'carrier-loading', 'Where does each loading enzyme take its group from?', 'Coenzyme A', ['The acyl carrier protein', 'The mitochondrial matrix', 'Biotin on the carboxylase'], {
    explanation: 'Each transacylase moves a group off coenzyme A and onto the synthase.',
  }),
  mcq('s4-2-2', 'carrier-loading', 'Which group ends up on the cysteinyl-S of ACP₁ during loading?', 'Acetyl', ['Malonyl', 'Butyryl', 'Palmitoyl'], {
    explanation: 'Acetyl → ACP₁ (cysteinyl-S); malonyl → ACP₂ (pantetheinyl-S).',
  }),
  tf({ id: 's4-2-3', conceptId: 'carrier-loading', statement: 'Both carriers must be “charged” before chain building can start.', answer: true, explanation: 'Acetyl and malonyl groups are loaded before the first condensation.' }),
  mcq('s4-2-4', 'carrier-loading', 'In the lecture diagram, why does the acetyl group pass via ACP to the KSase?', 'To free ACP so it can take up the malonyl group', ['To reduce the acetyl group before condensation', 'To release the acetyl group into the cytosol as acetate', 'To add carbon dioxide to the acetyl group'], {
    explanation: 'The acetyl group moves on to the KSase, freeing ACP for malonyl.',
    difficulty: 'intermediate',
  }),
  fill('s4-2-5', 'carrier-loading', 'Each loading enzyme is a ____.', ['transacylase', 'transacylase enzyme'], {
    explanation: 'Acetyl-CoA:ACP and malonyl-CoA:ACP transacylases load the two carriers.',
  }),

  // ─── Lesson 4 · S3 Condensation ────────────────────────────────────
  mcq('s4-3-1', 'condensation', 'Which stage of the cycle is the condensation?', 'Elongation', ['Transfer', 'Reduction', 'Dehydration'], {
    explanation: 'Joining the acetyl and malonyl groups is the elongation stage.',
  }),
  mcq('s4-3-2', 'condensation', 'Where is the keto group of the condensation product?', 'On the β-carbon of the chain', ['On the α-carbon of the chain', 'On the last carbon of the chain', 'On the sulfur of the carrier'], {
    explanation: 'Condensation gives a β-ketoacyl group, with C=O on the β-carbon.',
  }),
  mcq('s4-3-3', 'condensation', 'First round: acetyl (2 C) plus malonyl (3 C), minus the CO₂ released. How many carbons remain?', '4', ['5', '3', '6'], {
    explanation: '2 + 3 − 1 = 4 carbons: acetoacetyl-ACP.',
  }),
  tf({ id: 's4-3-4', conceptId: 'condensation', statement: 'Each condensation adds two carbons to the chain.', answer: true, explanation: 'Malonyl brings three carbons, but one leaves as CO₂, so the chain grows by two.' }),
  mcq('s4-3-5', 'condensation', 'Which happens FIRST during condensation?', 'CO₂ leaves the malonyl group', ['A β-ketoacyl group is formed', 'The keto group is reduced by NADPH', 'The chain moves back to ACP₁'], {
    explanation: 'CO₂ leaves first; its bond electrons attack the acyl group, forming the β-ketoacyl group.',
  }),

  // ─── Lesson 5 · S1 Why three more steps? ───────────────────────────
  mcq('s5-1-1', 'keto-reduction', 'Why are three more steps needed after condensation?', 'A saturated fatty acid has no keto group, so it must be removed', ['The chain must be released from the synthase after each round', 'The CO₂ must be put back onto the chain before the chain can grow', 'The acetyl group must be reloaded onto ACP₂ each time'], {
    explanation: 'Condensation leaves a β-keto group; a finished saturated chain has only –CH₂– units.',
  }),
  tf({ id: 's5-1-2', conceptId: 'keto-reduction', statement: 'The three steps after condensation are reduce, dehydrate, reduce.', answer: true, explanation: 'Three steps remove the keto group: reduce, dehydrate, reduce.' }),
  mcq('s5-1-3', 'keto-reduction', 'What does a finished, saturated fatty acid chain consist of?', '–CH₂– units', ['Keto C=O groups', 'Hydroxyl –OH groups', 'C=C double bonds'], {
    explanation: 'A saturated fatty acid has no keto group — just –CH₂– units.',
  }),
  mcq('s5-1-4', 'keto-reduction', 'Why does the lecture call these steps a “reversal of β-oxidation”?', 'They are the reverse of three β-oxidation reactions', ['They use exactly the same enzymes as β-oxidation', 'They take place inside the mitochondria as well', 'They remove two carbons from the chain in every round'], {
    explanation: 'Reduce, dehydrate, reduce are the reverse of three β-oxidation reactions (Lesson 6).',
  }),
  fill('s5-1-5', 'keto-reduction', 'Condensation leaves a ____ group on the β-carbon of the chain.', ['keto', 'ketone', 'C=O', 'carbonyl'], {
    explanation: 'The β-ketoacyl group carries a keto (C=O) group on its β-carbon.',
  }),

  // ─── Lesson 5 · S2 The three steps (first round) ───────────────────
  mcq('s5-2-1', 'dehydration-step', 'Which first-round intermediate does the dehydratase act on?', 'D-β-Hydroxybutyryl-ACP', ['Acetoacetyl-ACP', 'Crotonyl-ACP', 'L-3-Hydroxybutyryl-CoA chain'], {
    explanation: 'DH removes water from D-β-hydroxybutyryl-ACP, giving crotonyl-ACP.',
  }),
  mcq('s5-2-2', 'keto-reduction', 'Which enzyme turns acetoacetyl-ACP into D-β-hydroxybutyryl-ACP?', 'β-Ketoacyl-ACP reductase', ['β-Hydroxyacyl-ACP dehydratase', 'Enoyl-ACP reductase', 'Ketoacyl-ACP synthase'], {
    explanation: 'KR reduces the keto group to an alcohol, using NADPH.',
  }),
  mcq('s5-2-3', 'enoyl-reduction', 'What is another name for crotonyl-ACP?', 'trans-Δ²-Butenoyl-ACP', ['D-β-Hydroxybutyryl-ACP', 'Acetoacetyl-ACP', 'cis-Δ³-Butenoyl-ACP'], {
    explanation: 'The lecture names crotonyl-ACP as trans-Δ²-butenoyl-ACP.',
    difficulty: 'advanced',
  }),
  tf({ id: 's5-2-4', conceptId: 'dehydration-step', statement: 'The dehydration step needs no cofactor; water is simply removed.', answer: true, explanation: 'Only the two reductions use NADPH; dehydration removes H₂O.' }),
  mcq('s5-2-5', 'enoyl-reduction', 'What happens at the β-carbon in the enoyl-ACP reductase step?', 'C=C → saturated C–C', ['C=O → C–OH alcohol', 'C–OH → C=C trans bond', 'C–C → C=O keto group'], {
    explanation: 'ER reduces the double bond with NADPH, giving a saturated chain.',
  }),

  // ─── Lesson 5 · S3 Reset and repeat ────────────────────────────────
  mcq('s5-3-1', 'acyl-transfer', 'After the second reduction, which carrier holds the saturated chain?', 'ACP₂', ['ACP₁', 'Coenzyme A', 'Biotin'], {
    explanation: 'The chain sits on ACP₂ until it is moved back to ACP₁.',
  }),
  mcq('s5-3-2', 'acyl-transfer', 'The acyl group moves from which site to which during the reset?', 'From pantetheinyl-S of ACP₂ to cysteinyl-S of ACP₁', ['From cysteinyl-S of ACP₁ to pantetheinyl-S of ACP₂', 'From coenzyme A to the pantetheinyl-S of ACP₂', 'From pantetheinyl-S of ACP₂ to coenzyme A'], {
    explanation: 'ACP-acyltransferase moves the chain from ACP₂ to ACP₁, freeing ACP₂.',
    difficulty: 'intermediate',
  }),
  mcq('s5-3-3', 'acyl-transfer', 'Which chain lengths does the cycle pass through after butyryl?', '6 → 8 … → 16 carbons', ['5 → 6 … → 16 carbons', '6 → 10 … → 18 carbons', '8 → 12 … → 16 carbons'], {
    explanation: 'Each round adds two carbons: 4 → 6 → 8 … → 16.',
  }),
  tf({ id: 's5-3-4', conceptId: 'acyl-transfer', statement: 'Once ACP₂ is free again, it picks up the next malonyl group.', answer: true, explanation: 'The reset frees ACP₂ for the next malonyl group.' }),
  fill('s5-3-5', 'acyl-transfer', 'The enzyme that moves the chain from ACP₂ back to ACP₁ is ACP-____.', ['acyltransferase', 'acyl transferase'], {
    explanation: 'ACP-acyltransferase resets the complex for the next round.',
  }),

  // ─── Lesson 5 · S4 Releasing palmitate ─────────────────────────────
  mcq('s5-4-1', 'synthase-activities', 'In what order do KR, DH and ER act on the β-keto group?', 'KR, then DH, then ER', ['DH, then KR, then ER', 'ER, then DH, then KR', 'KR, then ER, then DH'], {
    explanation: 'The ketoreductase, dehydratase and enoyl reductase act in sequence.',
  }),
  mcq('s5-4-2', 'palmitate-release', 'At what chain length does the thioesterase release the chain?', '16 carbons', ['14 carbons', '18 carbons', '20 carbons'], {
    explanation: 'When the chain reaches 16 carbons, the thioesterase releases it.',
  }),
  mcq('s5-4-3', 'palmitate-release', 'In animal cells, what are the products of the thioesterase reaction?', 'Free palmitate and ACP-SH', ['Palmitoyl-CoA and free ACP', 'Stearate and ACP-SH', 'Triacylglycerol and ACP'], {
    explanation: 'Palmitoyl-ACP is hydrolysed to free palmitate and ACP-SH.',
  }),
  tf({ id: 's5-4-4', conceptId: 'synthase-activities', statement: 'The growing chain is carried between the active sites on the phosphopantetheine group of ACP.', answer: true, explanation: 'Slide 12: the chain stays on the phosphopantetheine prosthetic group of ACP.' }),
  fill('s5-4-5', 'synthase-activities', 'The activity abbreviated TE is the ____.', ['thioesterase'], {
    explanation: 'TE, the thioesterase, releases the chain at 16 carbons.',
  }),

  // ─── Lesson 5 · S5 Counting cycles and NADPH ───────────────────────
  mcq('s5-5-1', 'cycle-accounting', 'How many cycles in total make one palmitate?', '7', ['6', '8', '16'], {
    explanation: 'One cycle to butyryl-ACP plus 6 more to palmitoyl-ACP: 7 cycles.',
  }),
  mcq('s5-5-2', 'cycle-accounting', 'How many of palmitate’s 16 carbons come from its single acetyl-CoA primer?', '2', ['16', '14', '3'], {
    explanation: 'The primer gives 2 carbons; the 7 malonyl-CoA give the other 14.',
  }),
  mcq('s5-5-3', 'cycle-accounting', 'How many malonyl-CoA and acetyl-CoA go into one palmitate?', '7 malonyl-CoA and 1 acetyl-CoA', ['8 malonyl-CoA and no acetyl-CoA', '7 acetyl-CoA and 1 malonyl-CoA', '6 malonyl-CoA and 2 acetyl-CoA'], {
    explanation: 'One acetyl-CoA primes the chain; seven malonyl-CoA donate two carbons each.',
  }),
  fill('s5-5-4', 'cycle-accounting', 'Making one palmitate releases ____ CO₂, one per condensation.', ['7', 'seven'], {
    explanation: 'Seven condensations, each releasing one CO₂.',
  }),
  tf({ id: 's5-5-5', conceptId: 'cycle-accounting', statement: 'Each cycle of fatty acid synthesis uses one NADPH.', answer: false, explanation: 'Each cycle uses two NADPH — one for each reduction.' }),

  // ─── Lesson 6 · S1 β-Oxidation in four reactions ───────────────────
  mcq('s6-1-1', 'beta-oxidation-reactions', 'Which is the first reaction of β-oxidation?', 'Acyl-CoA dehydrogenase makes a double bond', ['Enoyl-CoA hydratase adds water to the chain', 'Acetyl-CoA acyltransferase splits off acetyl-CoA', 'L-3-Hydroxyacyl-CoA dehydrogenase uses NAD⁺'], {
    explanation: 'β-Oxidation starts with acyl-CoA dehydrogenase making the double bond (FAD → FADH₂).',
  }),
  mcq('s6-1-2', 'beta-oxidation-reactions', 'Which β-oxidation step produces NADH + H⁺?', 'L-3-Hydroxyacyl-CoA dehydrogenase', ['Acyl-CoA dehydrogenase (FAD-linked)', 'Enoyl-CoA hydratase', 'Acetyl-CoA acyltransferase'], {
    explanation: 'Oxidising L-3-hydroxyacyl-CoA by NAD⁺ gives 3-oxoacyl-CoA plus NADH + H⁺.',
  }),
  tf({ id: 's6-1-3', conceptId: 'beta-oxidation-reactions', statement: 'Each round of β-oxidation leaves an acyl-CoA two carbons shorter.', answer: true, explanation: 'Acetyl-CoA acyltransferase splits off acetyl-CoA, shortening the chain by two.' }),
  mcq('s6-1-4', 'beta-oxidation-reactions', 'Which β-oxidation intermediate is formed by adding water across the double bond?', 'L-3-Hydroxyacyl-CoA', ['2-trans-Enoyl-CoA', '3-Oxoacyl-CoA (β-ketoacyl)', 'Fatty acyl-CoA'], {
    explanation: 'Enoyl-CoA hydratase adds water, giving L-3-hydroxyacyl-CoA.',
  }),
  fill('s6-1-5', 'beta-oxidation-reactions', 'In the first β-oxidation step, FAD is reduced to ____.', ['FADH2', 'FADH₂'], {
    explanation: 'Acyl-CoA dehydrogenase reduces FAD to FADH₂ as it makes the double bond.',
  }),

  // ─── Lesson 6 · S2 One pathway undoes the other ────────────────────
  mcq('s6-2-1', 'pathway-comparison', 'Which synthesis enzyme undoes the work of enoyl-CoA hydratase?', 'β-Hydroxyacyl-ACP dehydratase', ['Enoyl-ACP reductase', 'β-Ketoacyl-ACP reductase', 'β-Ketoacyl-ACP synthase (KSase)'], {
    explanation: 'The hydratase adds H₂O in β-oxidation; the dehydratase removes it in synthesis.',
  }),
  mcq('s6-2-2', 'pathway-comparison', 'Which synthesis step is the counterpart of acetyl-CoA acyltransferase?', 'Ketoacyl-ACP synthase adding two carbons', ['Enoyl-ACP reductase removing a double bond', 'β-Ketoacyl-ACP reductase forming C–OH', 'Thioesterase releasing the finished chain'], {
    explanation: 'One splits two carbons off as acetyl-CoA; the other adds two carbons from malonyl.',
    difficulty: 'intermediate',
  }),
  tf({ id: 's6-2-3', conceptId: 'pathway-comparison', statement: 'Each synthesis step reverses a β-oxidation step, but with a different enzyme and cofactor.', answer: true, explanation: 'Read from the bottom up, each synthesis step undoes a β-oxidation step with its own enzyme.' }),
  mcq('s6-2-4', 'pathway-comparison', 'β-Ketoacyl-ACP reductase does C=O → C–OH. Which β-oxidation step does the reverse?', 'L-3-Hydroxyacyl-CoA dehydrogenase (NAD⁺)', ['Acyl-CoA dehydrogenase (FAD)', 'Enoyl-CoA hydratase (adds H₂O)', 'Acetyl-CoA acyltransferase (splits with CoASH)'], {
    explanation: 'L-3-Hydroxyacyl-CoA dehydrogenase oxidises C–OH to C=O with NAD⁺.',
  }),
  mcq('s6-2-5', 'pathway-comparison', 'Which cofactor does each pathway use where synthesis removes a double bond?', 'Synthesis uses NADPH; β-oxidation uses FAD', ['Synthesis uses FAD; β-oxidation uses NADPH', 'Both pathways use NAD⁺ at this step', 'Both pathways use ATP at this step'], {
    explanation: 'Enoyl-ACP reductase uses NADPH; acyl-CoA dehydrogenase uses FAD.',
  }),

  // ─── Lesson 6 · S3 Side by side ────────────────────────────────────
  mcq('s6-3-1', 'pathway-comparison', 'Where does β-oxidation take place, according to the comparison table?', 'Mitochondria', ['Cytosol', 'Endoplasmic reticulum', 'Nucleus'], {
    explanation: 'Synthesis is cytosolic; β-oxidation is mitochondrial.',
  }),
  mcq('s6-3-2', 'pathway-comparison', 'What is the two-carbon unit in each pathway?', 'Activated malonyl in synthesis; acetyl-CoA in β-oxidation', ['Acetyl-CoA in synthesis; activated malonyl in β-oxidation', 'Palmitate in synthesis; citrate in β-oxidation', 'Pyruvate in both pathways, as the main donor'], {
    explanation: 'Synthesis adds from malonyl (acetyl + CO₂); β-oxidation removes acetyl-CoA.',
  }),
  tf({ id: 's6-3-3', conceptId: 'pathway-comparison', statement: 'The hydroxy intermediates of the two pathways have the same configuration.', answer: false, explanation: 'Synthesis makes D-β-hydroxyacyl-ACP; β-oxidation makes L-3-hydroxyacyl-CoA.' }),
  mcq('s6-3-4', 'pathway-comparison', 'Which carrier holds the intermediates of β-oxidation?', 'Coenzyme A', ['Acyl carrier protein', 'Biotin', 'Citrate'], {
    explanation: 'β-Oxidation intermediates are held on coenzyme A; synthesis uses ACP.',
  }),
  fill('s6-3-5', 'pathway-comparison', 'In fatty acid synthesis the intermediates are carried on ____.', ['ACP', 'acyl carrier protein'], {
    explanation: 'Synthesis holds its intermediates on ACP; β-oxidation uses coenzyme A.',
  }),

  // ─── Lesson 6 · S4 Why NADPH? ──────────────────────────────────────
  mcq('s6-4-1', 'electron-carriers', 'What does synthesis need to do with electrons at its reductions?', 'Push electrons into the chain', ['Pull electrons out of the chain', 'Store electrons as ATP', 'Pass electrons to oxygen'], {
    explanation: 'Synthesis pushes electrons into the chain, so it uses a strong electron donor.',
  }),
  tf({ id: 's6-4-2', conceptId: 'electron-carriers', statement: 'NADPH is a more powerful reducing agent than FADH₂.', answer: true, explanation: 'That is the lecture’s reason for using NADPH in synthesis.' }),
  mcq('s6-4-3', 'electron-carriers', 'How many reductions per cycle does NADPH drive in synthesis?', 'Two', ['One', 'Three', 'Four'], {
    explanation: 'NADPH supplies both reductions of each cycle.',
  }),
  mcq('s6-4-4', 'electron-carriers', 'Which kind of molecule does synthesis need for its reductions?', 'A strong electron donor', ['A strong electron acceptor', 'A high-energy phosphate', 'A carboxyl carrier'], {
    explanation: 'Pushing electrons into the chain needs a strong electron donor: NADPH.',
  }),
  fill('s6-4-5', 'electron-carriers', 'NADPH is substituted for ____ as a more powerful reducing agent.', ['FADH2', 'FADH₂'], {
    explanation: 'NADPH replaces FADH₂ as the reducing agent in synthesis.',
  }),

  // ─── Lesson 6 · S5 So — a reversal of β-oxidation? ────────────────
  mcq('s6-5-1', 'pathway-comparison', 'Which feature does NOT make synthesis a separate pathway from β-oxidation?', 'Its reduce–dehydrate–reduce steps', ['Activation of acetyl-CoA to malonyl', 'Its use of NADPH as reductant', 'Its location in the cytosol'], {
    explanation: 'Reduce–dehydrate–reduce is the shared, reversed part; the others make synthesis separate.',
    difficulty: 'intermediate',
  }),
  tf({ id: 's6-5-2', conceptId: 'pathway-comparison', statement: 'Synthesis is partly a reversal of β-oxidation, but it is a separate pathway.', answer: true, explanation: 'Three steps are reversed, but malonyl, NADPH, ACP and the cytosol make it separate.' }),
  mcq('s6-5-3', 'pathway-comparison', 'What is the best one-word answer to “Is synthesis a reversal of β-oxidation?”', 'Partly', ['Exactly', 'Never', 'Mostly'], {
    explanation: 'The lecture’s answer is “partly”.',
  }),
  mcq('s6-5-4', 'electron-carriers', 'Which four features together make synthesis separate from β-oxidation?', 'Malonyl, NADPH, ACP and the cytosol', ['Acetyl-CoA, FAD, CoA and mitochondria', 'Citrate, NADH, biotin and the nucleus', 'Palmitate, ATP, CoA and the cytosol'], {
    explanation: 'Activation to malonyl, NADPH, ACP and the cytosolic location.',
  }),
  fill('s6-5-5', 'pathway-comparison', 'Synthesis is carried out in the ____, while β-oxidation is mitochondrial.', ['cytosol', 'cytoplasm'], {
    explanation: 'The cytosolic location is one of the features that makes synthesis separate.',
  }),

  // ─── Lesson 7 · S1 Palmitate is the synthase’s product ────────────
  mcq('s7-1-1', 'other-fatty-acids', 'Why is palmitate the product of the fatty acid synthase?', 'The complex releases its chain at 16 carbons', ['Palmitate is the only fatty acid cells can use', 'The complex runs out of NADPH after 16 carbons', 'Longer chains are made only in the nucleus'], {
    explanation: 'The thioesterase releases the chain at 16 carbons, so the product is palmitate.',
  }),
  mcq('s7-1-2', 'other-fatty-acids', 'How are fatty acids LONGER than palmitate made?', 'By separate fatty acid elongation systems', ['By running β-oxidation on palmitate', 'By the synthase skipping the thioesterase', 'By joining two palmitates together'], {
    explanation: 'Separate elongation systems add more carbons to palmitate.',
  }),
  tf({ id: 's7-1-3', conceptId: 'other-fatty-acids', statement: 'Fatty acids shorter than palmitate can be made by shortening palmitate through β-oxidation.', answer: true, explanation: 'β-Oxidation removes two carbons at a time from palmitate.' }),
  mcq('s7-1-4', 'other-fatty-acids', 'A cell needs a 12-carbon fatty acid. Which route fits the lecture?', 'Shorten palmitate by two rounds of β-oxidation', ['Elongate palmitate on the endoplasmic reticulum', 'Release the chain early from the synthase', 'Desaturate palmitate in the mitochondria'], {
    explanation: 'Shorter fatty acids come from shortening palmitate; 16 → 14 → 12 is two rounds.',
    difficulty: 'intermediate',
  }),
  fill('s7-1-5', 'other-fatty-acids', 'The fatty acid synthase complex releases its chain at ____ carbons.', ['16', 'sixteen'], {
    explanation: 'Its product is palmitate, a 16-carbon fatty acid.',
  }),

  // ─── Lesson 7 · S2 Elongation on the endoplasmic reticulum ────────
  mcq('s7-2-1', 'er-elongation', 'Which carrier holds the chain during ER elongation?', 'Coenzyme A', ['Acyl carrier protein (ACP)', 'Biotin', 'Citrate'], {
    explanation: 'The fatty acid synthase uses ACP; ER elongation uses coenzyme A.',
  }),
  mcq('s7-2-2', 'er-elongation', 'How many carbons does stearoyl-CoA have?', '18', ['16', '20', '14'], {
    explanation: 'Stearoyl-CoA (C18) is the major product of ER elongation.',
  }),
  tf({ id: 's7-2-3', conceptId: 'er-elongation', statement: 'ER elongation is carried out by one multi-enzyme complex, like the fatty acid synthase.', answer: false, explanation: 'ER elongation uses individual enzymes, not one complex.' }),
  mcq('s7-2-4', 'er-elongation', 'Which step comes first in ER elongation?', 'Palmitate is activated to palmitoyl-CoA', ['Stearoyl-CoA is released by a thioesterase', 'Palmitate is loaded onto ACP₂ of the synthase', 'Palmitate is desaturated in the mitochondria'], {
    explanation: 'Palmitate is first activated to palmitoyl-CoA, then elongated.',
  }),
  mcq('s7-2-5', 'er-elongation', 'How do the reactions of ER elongation compare with those of synthesis?', 'The same reactions, done by individual enzymes', ['Different reactions, done by one complex', 'The reverse reactions, done by individual enzymes', 'The same reactions, done inside the nucleus'], {
    explanation: 'The same reactions occur as in synthesis, but by individual enzymes.',
  }),

  // ─── Lesson 7 · S3 Why longer fatty acids are mostly unsaturated ──
  mcq('s7-3-1', 'unsaturated-elongation', 'Why are long SATURATED chains poor substrates for ER elongation?', 'The enzymes prefer chains of C16 or less', ['Saturated chains cannot be activated to CoA', 'Saturated chains are too kinked to bind', 'Saturated chains are made only in mitochondria'], {
    explanation: 'The ER enzymes prefer chains of C16 or less, so long saturated chains bind poorly.',
  }),
  mcq('s7-3-2', 'unsaturated-elongation', 'Which of these fatty acids does the lecture say is also made by elongation?', 'A 22-carbon unsaturated fatty acid', ['A 22-carbon saturated fatty acid', 'A 30-carbon saturated fatty acid', 'A 10-carbon unsaturated fatty acid'], {
    explanation: 'Unsaturated fatty acids of 20, 22 and 24 carbons are made.',
  }),
  tf({ id: 's7-3-3', conceptId: 'unsaturated-elongation', statement: 'A cis double bond makes a chain behave as if it were shorter.', answer: true, explanation: 'The kink lets a longer unsaturated chain fit the enzymes that prefer ≤ C16.' }),
  mcq('s7-3-4', 'unsaturated-elongation', 'Put the reasoning in order: why are longer fatty acids mostly unsaturated?', 'Enzymes prefer ≤ C16 → cis bond kinks the chain → it still binds', ['Cis bond kinks the chain → enzymes prefer ≥ C18 → it binds', 'It still binds → enzymes prefer ≤ C16 → cis bond kinks the chain', 'Enzymes prefer ≥ C18 → trans bond straightens it → it binds'], {
    explanation: 'Enzymes prefer ≤ C16; a cis bond kinks the chain; the kinked chain still binds and is elongated.',
    difficulty: 'advanced',
  }),
  fill('s7-3-5', 'unsaturated-elongation', 'Most longer fatty acids are ____.', ['polyunsaturated', 'unsaturated'], {
    explanation: 'Because kinked chains can still be elongated, most longer fatty acids are polyunsaturated.',
  }),

  // ─── Lesson 7 · S4 A second system in the mitochondria ────────────
  mcq('s7-4-1', 'mitochondrial-elongation', 'Which cofactor does the mitochondrial enoyl-CoA reductase depend on?', 'NADPH', ['FAD', 'NAD⁺', 'Biotin'], {
    explanation: 'An NADPH-dependent enoyl-CoA reductase replaces the FAD-dependent dehydrogenase.',
  }),
  mcq('s7-4-2', 'mitochondrial-elongation', 'Which β-oxidation enzyme is replaced in mitochondrial elongation?', 'The FAD-dependent dehydrogenase', ['The enoyl-CoA hydratase', 'The NAD⁺-dependent dehydrogenase', 'The acetyl-CoA acyltransferase'], {
    explanation: 'The FAD-dependent dehydrogenase is replaced by an NADPH-dependent enoyl-CoA reductase.',
  }),
  tf({ id: 's7-4-3', conceptId: 'mitochondrial-elongation', statement: 'The mitochondrial elongation system uses most of the same activities as β-oxidation.', answer: true, explanation: 'It reuses most β-oxidation activities, but with an NADPH-dependent reductase.' }),
  mcq('s7-4-4', 'mitochondrial-elongation', 'What is the “mitosol”?', 'The mitochondrial matrix', ['The cytosol around the mitochondria', 'The outer mitochondrial membrane', 'The space between the membranes'], {
    explanation: 'The lecture uses mitosol for the mitochondrial matrix.',
  }),
  fill('s7-4-5', 'mitochondrial-elongation', 'The mitochondrial system probably provides long fatty acids for mitochondrial ____.', ['structure', 'structures', 'membranes'], {
    explanation: 'The mitochondrial system probably supplies long fatty acids for mitochondrial structure.',
  }),

  // ─── Lesson 8 · S1 The problem ─────────────────────────────────────
  mcq('s8-1-1', 'transport-problem', 'Where is the acetyl-CoA for fatty acid synthesis made?', 'In the mitochondria', ['In the cytosol', 'In the nucleus', 'On the endoplasmic reticulum'], {
    explanation: 'Acetyl-CoA is made in the mitochondria, but synthesis happens in the cytosol.',
  }),
  mcq('s8-1-2', 'transport-problem', 'Which two jobs does the Pyruvate–Malate Cycle do for synthesis?', 'Moves acetyl groups out and makes NADPH from NADH', ['Makes ATP and moves palmitate into the mitochondria', 'Makes malonyl-CoA and releases palmitate', 'Moves NADPH into the mitochondria and makes citrate'], {
    explanation: 'It takes acetyl groups to the cytosol and provides NADPH from NADH.',
  }),
  tf({ id: 's8-1-3', conceptId: 'transport-problem', statement: 'The Pyruvate–Malate Cycle couples fatty acid synthesis to glycolysis.', answer: true, explanation: 'Glucose → pyruvate feeds the cycle, coupling the two pathways.' }),
  mcq('s8-1-4', 'transport-problem', 'Why does the cell need a special cycle to supply fatty acid synthesis?', 'Acetyl-CoA cannot cross the inner mitochondrial membrane', ['Acetyl-CoA is destroyed as soon as it reaches the cytosol', 'Fatty acid synthase works only inside the mitochondria', 'Pyruvate cannot be made into acetyl-CoA in the cell'], {
    explanation: 'Acetyl-CoA is made in the mitochondria and cannot cross the inner membrane.',
  }),
  fill('s8-1-5', 'transport-problem', 'The Pyruvate–Malate Cycle is also called the Citrate–____ Cycle.', ['Pyruvate'], {
    explanation: 'The lecture gives both names: Pyruvate–Malate Cycle and Citrate–Pyruvate Cycle.',
  }),

  // ─── Lesson 8 · S2 Around the cycle ────────────────────────────────
  mcq('s8-2-1', 'citrate-export', 'Which enzyme complex turns pyruvate into acetyl-CoA in the mitochondria?', 'Pyruvate DH complex', ['Pyruvate carboxylase', 'Malic enzyme', 'Citrate synthase'], {
    explanation: 'The pyruvate DH complex makes acetyl-CoA; citrate synthase then makes citrate.',
  }),
  mcq('s8-2-2', 'citrate-cleavage', 'What does ATP-citrate lyase need to make citrate cleavage favourable?', 'ATP', ['NADPH', 'Biotin', 'NADH'], {
    explanation: 'Cleaving citrate in the cytosol requires ATP.',
  }),
  mcq('s8-2-3', 'cycle-return', 'What regenerates oxaloacetate in the mitochondria?', 'Pyruvate carboxylase, using CO₂ and ATP', ['Malic enzyme, using NADPH and CO₂', 'Citrate synthase, using acetyl-CoA and water', 'Malate dehydrogenase, using NADH'], {
    explanation: 'Pyruvate re-enters and pyruvate carboxylase regenerates oxaloacetate.',
  }),
  tf({ id: 's8-2-4', conceptId: 'oaa-to-malate', statement: 'In the cytosol, malate dehydrogenase oxidises malate to oxaloacetate.', answer: false, explanation: 'It REDUCES oxaloacetate to malate, using NADH.' }),
  mcq('s8-2-5', 'malic-enzyme', 'What does malic enzyme make from malate?', 'Pyruvate, CO₂ and NADPH', ['Oxaloacetate, CO₂ and NADH', 'Citrate and ATP', 'Acetyl-CoA and NADPH'], {
    explanation: 'Malic enzyme oxidises malate to pyruvate, releasing CO₂ and producing NADPH.',
  }),

  // ─── Lesson 8 · S3 Where each step happens ─────────────────────────
  mcq('s8-3-1', 'citrate-cleavage', 'Which step of the cycle happens in the cytosol?', 'Citrate → acetyl-CoA + oxaloacetate', ['Pyruvate → acetyl-CoA', 'Pyruvate → oxaloacetate', 'Oxaloacetate + acetyl-CoA → citrate'], {
    explanation: 'ATP-citrate lyase splits citrate in the cytosol; the others are mitochondrial.',
  }),
  mcq('s8-3-2', 'cycle-return', 'Which mitochondrial step of the cycle uses ATP?', 'Pyruvate → oxaloacetate', ['Pyruvate → acetyl-CoA', 'Oxaloacetate + acetyl-CoA → citrate', 'Malate → pyruvate'], {
    explanation: 'Pyruvate carboxylase uses ATP (and CO₂) to make oxaloacetate.',
  }),
  mcq('s8-3-3', 'citrate-export', 'Which enzyme of the cycle has no cost or gain listed in the table?', 'Citrate synthase', ['Pyruvate carboxylase', 'Malic enzyme', 'ATP-citrate lyase'], {
    explanation: 'Citrate synthase joins oxaloacetate and acetyl-CoA with no listed cost.',
    difficulty: 'intermediate',
  }),
  tf({ id: 's8-3-4', conceptId: 'malic-enzyme', statement: 'CO₂ is lost at both the pyruvate DH complex and malic enzyme.', answer: true, explanation: 'The table lists CO₂ lost at pyruvate → acetyl-CoA and at malate → pyruvate.' }),
  mcq('s8-3-5', 'oaa-to-malate', 'Which cytosolic step uses NADH?', 'Oxaloacetate → malate', ['Malate → pyruvate', 'Citrate → acetyl-CoA', 'Pyruvate → oxaloacetate'], {
    explanation: 'Malate dehydrogenase uses NADH to reduce oxaloacetate to malate.',
  }),

  // ─── Lesson 8 · S4 Turning NADH into NADPH ─────────────────────────
  mcq('s8-4-1', 'malic-enzyme', 'In the cytosol, how do electrons get from NADH to NADPH?', 'Via malate: malate dehydrogenase, then malic enzyme', ['Directly, by a single transhydrogenase step in the membrane', 'Via citrate: citrate synthase, then lyase', 'Via ATP: pyruvate carboxylase, then lyase'], {
    explanation: 'NADH reduces oxaloacetate to malate; malic enzyme then makes NADPH from malate.',
  }),
  tf({ id: 's8-4-2', conceptId: 'malic-enzyme', statement: 'The net effect of the two cytosolic steps is that reducing power from NADH ends up as NADPH.', answer: true, explanation: 'That is what the lecture means by “providing a source of NADPH from NADH”.' }),
  mcq('s8-4-3', 'malic-enzyme', 'Which steps of synthesis use the NADPH made by malic enzyme?', 'The two reduction steps', ['The condensation step', 'The loading of ACP₁', 'The release of palmitate'], {
    explanation: 'NADPH is exactly what the two reduction steps of synthesis need.',
  }),
  mcq('s8-4-4', 'oaa-to-malate', 'Which molecule carries the electrons between the NADH step and the NADPH step?', 'Malate', ['Citrate', 'Pyruvate', 'Acetyl-CoA'], {
    explanation: 'Malate dehydrogenase puts NADH’s electrons into malate; malic enzyme takes them out as NADPH.',
  }),
  fill('s8-4-5', 'malic-enzyme', 'Malic enzyme takes electrons from malate to make ____.', ['NADPH'], {
    explanation: 'Malic enzyme oxidises malate, producing NADPH for biosynthesis.',
  }),

  // ─── Lesson 8 · S5 Why it matters ──────────────────────────────────
  mcq('s8-5-1', 'glycolysis-coupling', 'Which steps of the Pyruvate–Malate Cycle cost ATP?', 'Citrate cleavage and pyruvate carboxylase', ['Malic enzyme and cytosolic malate dehydrogenase', 'Citrate synthase and the co-transporter', 'Pyruvate DH and malate dehydrogenase'], {
    explanation: 'ATP is spent at ATP-citrate lyase and at pyruvate carboxylase.',
  }),
  mcq('s8-5-2', 'glycolysis-coupling', 'In what form are acetyl groups delivered to the cytosol?', 'As citrate', ['As malonyl-CoA', 'As free acetate', 'As pyruvate'], {
    explanation: 'The cycle delivers acetyl groups to the cytosol as citrate.',
  }),
  tf({ id: 's8-5-3', conceptId: 'glycolysis-coupling', statement: 'The Pyruvate–Malate Cycle provides acetyl groups and NADPH, but costs ATP.', answer: true, explanation: 'It delivers acetyl groups and NADPH; citrate cleavage and pyruvate carboxylase cost ATP.' }),
  mcq('s8-5-4', 'glycolysis-coupling', 'What links glucose breakdown to fat building in this cycle?', 'Glucose → pyruvate feeds the cycle', ['Palmitate → pyruvate feeds glycolysis', 'NADPH → glucose feeds the cycle', 'Malonyl-CoA → glucose feeds glycolysis'], {
    explanation: 'Glycolysis makes the pyruvate that enters the cycle.',
  }),
  mcq('s8-5-5', 'glycolysis-coupling', 'Which is NOT a job of the Pyruvate–Malate Cycle?', 'Releasing palmitate from the synthase', ['Delivering acetyl groups to the cytosol', 'Providing NADPH for the reductions', 'Coupling synthesis to glycolysis'], {
    explanation: 'Palmitate is released by the thioesterase; the cycle supplies acetyl groups and NADPH.',
  }),
];
