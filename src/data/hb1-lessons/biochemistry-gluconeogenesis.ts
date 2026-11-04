// Biochemistry 1 → Gluconeogenesis. From "LECTURE 3 GLUCONEOGENESIS SOA.pptx" (C. Obirikorang)
// and "5. Gluconeogenesis.pdf" (S. N. Darko), KNUST, HB1 Biochemistry 1 theory; both decks are
// merged. Rewrites the original database lesson biochemistry-04 with the same id, so progress is
// kept; practises the course's Quiz 4 and the past questions on gluconeogenesis. Facts from the
// speaker notes are labelled as such and are not asked in the quiz.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostx } from '@/data/hb1-lessons/pictures';

export const biochemistryGluconeogenesis: Hb1Lesson = {
  id: 'biochemistry-04',
  order: 4,
  title: 'Gluconeogenesis',
  summary: 'C. Obirikorang and S. N. Darko · Making glucose from lactate, amino acids and glycerol: why it matters, the three bypasses of glycolysis, its cost, the Cori and glucose–alanine cycles, and its allosteric and hormonal control',
  minutes: 28,
  source: 'LECTURE 3 GLUCONEOGENESIS SOA.pptx (C. Obirikorang); 5. Gluconeogenesis.pdf (S. N. Darko)',
  quizId: 'gng',
  quizName: 'Quiz · Gluconeogenesis (lesson)',
  pastSets: ['s4'],
  pastTopics: ['gluconeogenesis'],
  sections: numberFigures([
    {
      id: 'gng-why',
      title: 'What gluconeogenesis is and why it matters',
      kicker: 'New glucose from non-sugars',
      blocks: [
        { k: 'p', x: '<b>Gluconeogenesis</b> is the synthesis of glucose from <b>non-carbohydrate precursors</b>: lactate, pyruvate, glycerol, citric acid cycle intermediates, glucogenic amino acids and propionate. It occurs mainly in the <b>cytosol</b>, and essentially the same reactions are found in all animals, plants, fungi and microorganisms.' },
        { k: 'ul', items: [
          '<b>Relate</b> gluconeogenesis to glycolysis.',
          '<b>Explain</b> how the three irreversible steps of glycolysis are bypassed.',
          '<b>Explain</b> how lactate, amino acids and glycerol feed in (Cori and glucose–alanine cycles).',
          '<b>Describe</b> its allosteric, hormonal and substrate regulation.',
        ] },
        { k: 'h', x: 'The glucose budget', l: 3 },
        { k: 'table', head: ['Figure', 'Amount'], rows: [
          { c: ['Daily glucose requirement', '<b>160 g</b>'] },
          { c: ['Used by the brain', '<b>About 120 g</b> a day'] },
          { c: ['Stored as glycogen', '<b>About 190 g</b>: enough for about <b>one day</b>'] },
        ] },
        { k: 'p', x: 'So in a fast longer than about a day, in starvation or in intense exercise, glycogen runs out and glucose must be made. Glucose is the major fuel of the <b>brain, CNS, testes, erythrocytes and kidney medulla</b>; red cells, the renal medulla and the nervous system cannot get energy from fat and depend on glucose as their <b>sole</b> fuel. (Darko’s deck adds that glucose is the only fuel of skeletal muscle in anaerobic conditions.)' },
        { k: 'ul', items: [
          'Meets the body’s basal glucose need in fasting, and keeps up the <b>citric acid cycle intermediates</b>; essential for survival.',
          '<b>Clears metabolites</b> that would otherwise build up in the blood: <b>lactate, glycerol, propionate</b>.',
        ] },
        { k: 'box', title: 'Check the decks', tone: 'red', blocks: [{ k: 'p', x: 'Darko’s deck says gluconeogenesis produces “about 1 kg of glucose daily”. Textbooks give a much smaller figure for a fasting adult (well under 200 g a day, in line with the 160 g requirement above). Use the lecture’s figure if asked, but be aware of the difference.' }] },
        { k: 'h', x: 'Where it happens', l: 3 },
        { k: 'p', x: 'The <b>liver</b> is the major site; the <b>kidney cortex</b> is secondary (about <b>1/10</b> of the liver’s capacity), and the <b>intestinal mucosa</b> also has the enzymes. Together they keep blood glucose up so the brain and muscle can take what they need.' },
      ],
    },
    {
      id: 'gng-bypass',
      title: 'The three bypasses',
      kicker: 'Not glycolysis in reverse',
      blocks: [
        { k: 'p', x: 'Gluconeogenesis closely resembles glycolysis run backwards, but it is <b>not</b> a complete reversal. Seven of glycolysis’s ten reactions are reversible and are shared. The three irreversible ones, catalysed by <b>hexokinase, phosphofructokinase and pyruvate kinase</b>, cannot run backwards for energetic reasons, so they are <b>bypassed</b> by other enzymes.' },
        ostx('2510-gluconeogenesis.jpg', 1000, 1557, 'Gluconeogenesis: glucose made from pyruvate, lactate, glycerol and amino acids, mostly in the liver.', 'Find the bypasses: pyruvate goes round through oxaloacetate (in the mitochondrion) to PEP; fructose 1,6-bisphosphate loses a phosphate to fructose 6-phosphate; glucose 6-phosphate loses its phosphate to give free glucose. The middle steps are glycolysis in reverse.'),
        { k: 'step', n: '1', title: 'Pyruvate → phosphoenolpyruvate (bypasses pyruvate kinase)', blocks: [
          { k: 'p', x: '<b>Pyruvate carboxylase</b> carboxylates pyruvate to <b>oxaloacetate</b>. <b>Phosphoenolpyruvate carboxykinase (PEPCK)</b> then decarboxylates and phosphorylates oxaloacetate to <b>PEP</b>: the decarboxylation drives the reaction, and the phosphorylation (from GTP) makes PEP’s high-energy bond.' },
        ] },
        { k: 'step', n: '2–7', title: 'PEP → fructose 1,6-bisphosphate', blocks: [{ k: 'p', x: 'Glycolysis in reverse, with the same enzymes: PEP → 2-phosphoglycerate → 3-phosphoglycerate → 1,3-bisphosphoglycerate → glyceraldehyde 3-phosphate (+ DHAP) → fructose 1,6-bisphosphate. <b>1 ATP and 1 NADH + H<sup>+</sup></b> are used per three-carbon unit.' }] },
        { k: 'step', n: '8', title: 'Fructose 1,6-bisphosphate → fructose 6-phosphate (bypasses PFK)', blocks: [{ k: 'p', x: '<b>Fructose 1,6-bisphosphatase</b>, which needs <b>Mg<sup>2+</sup></b>. It is <b>absent in smooth and heart muscle</b>, and it is a <b>regulatory</b> enzyme of gluconeogenesis.' }] },
        { k: 'step', n: '9', title: 'Fructose 6-phosphate → glucose 6-phosphate', blocks: [{ k: 'p', x: 'Simply the reverse of the glycolytic isomerase step.' }] },
        { k: 'step', n: '10', title: 'Glucose 6-phosphate → glucose (bypasses hexokinase)', blocks: [{ k: 'p', x: '<b>Glucose 6-phosphatase</b>. Whether a tissue has it decides whether it can <b>release glucose into the blood</b>: present mainly in <b>liver and kidney</b>, <b>absent in muscle, brain and adipose tissue</b>.' }] },
        { k: 'box', title: 'The four key enzymes', tone: 'gold', blocks: [{ k: 'p', x: '<b>Pyruvate carboxylase, PEPCK, fructose 1,6-bisphosphatase, glucose 6-phosphatase</b>. They are found almost only in the <b>liver, kidney and intestinal mucosa</b>, which is why gluconeogenesis happens only there.' }] },
      ],
    },
    {
      id: 'gng-cost',
      title: 'The cost of gluconeogenesis',
      kicker: 'Six high-energy phosphates per glucose',
      blocks: [
        { k: 'box', title: 'Overall equation', tone: 'formula', blocks: [
          { k: 'p', x: '<b>2 pyruvate + 4 ATP + 2 GTP + 2 NADH + 2 H<sup>+</sup> + 4 H<sub>2</sub>O → glucose + 4 ADP + 2 GDP + 6 P<sub>i</sub> + 2 NAD<sup>+</sup></b>' },
        ] },
        { k: 'p', x: 'Each glucose costs <b>six high-energy phosphates</b> (<b>4 ATP + 2 GTP</b>) plus <b>2 NADH</b> (to reduce two 1,3-bisphosphoglycerates). Compare glycolysis, which <b>gains</b> 2 ATP: making glucose costs three times what breaking it down earns, which is why the two cannot simply be the same pathway run both ways.' },
        { k: 'table', head: ['Where the energy goes', 'Per glucose'], rows: [
          { c: ['Pyruvate carboxylase', '2 ATP'] },
          { c: ['PEPCK', '2 GTP'] },
          { c: ['Phosphoglycerate kinase (reverse)', '2 ATP'] },
          { c: ['Glyceraldehyde 3-phosphate dehydrogenase (reverse)', '2 NADH'] },
        ] },
        { k: 'p', x: '<i>From the speaker notes:</i> inside cells the overall ΔG of glycolysis is at least −63 kJ/mol and that of gluconeogenesis −16 kJ/mol, so both are essentially irreversible in the cell.' },
      ],
    },
    {
      id: 'gng-precursors',
      title: 'The precursors and their cycles',
      kicker: 'Lactate, alanine and glycerol',
      blocks: [
        { k: 'p', x: 'The major precursors are <b>lactate</b> (from muscle and red cells), <b>glucogenic amino acids</b> (mainly alanine, from muscle) and <b>glycerol</b> (from fat). Lactate and the amino acids are turned into pyruvate (or citric acid cycle intermediates) and enter the pathway.' },
        { k: 'h', x: 'Lactate: the Cori cycle', l: 3 },
        { k: 'ul', items: [
          'Active skeletal muscle makes lactate (pyruvate reduced by <b>lactate dehydrogenase, LDH</b>) under anaerobic conditions. Lactate is a <b>dead end</b>: it must become pyruvate again to be used.',
          'Muscle cannot make glucose from it, because it lacks the key enzymes <b>glucose 6-phosphatase and fructose 1,6-bisphosphatase</b>.',
          'The plasma membrane is freely permeable to lactate, so it travels in the blood to the <b>liver</b>, is oxidised to pyruvate, made into glucose, and the glucose returns to the muscle (or is stored as glycogen).',
        ] },
        { k: 'h', x: 'Alanine: the glucose–alanine cycle', l: 3 },
        { k: 'p', x: 'During <b>starvation</b> amino acids travel continuously from muscle to liver, <b>alanine</b> most of all. Pyruvate in muscle is <b>transaminated</b> to alanine, which is carried to the liver and used for gluconeogenesis: the <b>glucose–alanine cycle</b>. All amino acids are glucogenic <b>except leucine and lysine</b> (purely ketogenic).' },
        { k: 'h', x: 'Glycerol', l: 3 },
        { k: 'p', x: 'Glycerol from fat hydrolysis is phosphorylated to <b>glycerol 3-phosphate</b>, which <b>glycerol 3-phosphate dehydrogenase</b> oxidises to <b>dihydroxyacetone phosphate</b>, a glycolytic intermediate that can be built into glucose.' },
        { k: 'box', title: 'Fat cannot make glucose (almost)', tone: 'recall', blocks: [{ k: 'p', x: 'Only the <b>glycerol</b> backbone of fat is gluconeogenic. Fatty acids give acetyl CoA, which cannot be turned back into pyruvate in humans. Fatty acids help indirectly: acetyl CoA <b>activates pyruvate carboxylase</b>.' }] },
      ],
    },
    {
      id: 'gng-regulation',
      title: 'Regulation of gluconeogenesis',
      kicker: 'Reciprocal with glycolysis',
      blocks: [
        { k: 'p', x: 'Gluconeogenesis and glycolysis are <b>reciprocally regulated</b>: what switches one on switches the other off, so the cell does not run both at once and waste ATP. Control is <b>allosteric</b> (fast, inside the cell), <b>hormonal</b>, and by <b>substrate supply</b>. High AMP means low energy and a need for ATP; high ATP and citrate mean energy and intermediates are plentiful.' },
        { k: 'h', x: 'Control point 1: pyruvate ⇌ PEP', l: 3 },
        { k: 'table', head: ['Enzyme', 'Pathway', 'Off', 'On'], rows: [
          { c: ['<b>Pyruvate kinase</b>', 'Glycolysis', '<b>ATP, alanine</b>', '<b>Fructose 1,6-bisphosphate</b>'] },
          { c: ['<b>Pyruvate carboxylase</b>', 'Gluconeogenesis', '<b>ADP</b>', '<b>Acetyl CoA</b>'] },
          { c: ['<b>PEPCK</b>', 'Gluconeogenesis', '<b>ADP</b>', '—'] },
        ] },
        { k: 'h', x: 'Control point 2: fructose 1,6-bisphosphate ⇌ fructose 6-phosphate', l: 3 },
        { k: 'p', x: '<b>Fructose 1,6-bisphosphatase</b> is <b>inhibited by fructose 2,6-bisphosphate and AMP</b>; the same molecules <b>activate PFK-1</b>. One signal, opposite effects.' },
        ostx('2522-the-postabsorptive-stage.jpg', 1000, 1307, 'The postabsorptive state: with no food coming in, the body draws on glycogen, makes new glucose and burns fat.', 'In the fasting liver, glycogen breakdown and gluconeogenesis supply blood glucose for the brain, while fat cells release fatty acids and glycerol: the fatty acids fuel other tissues, and the glycerol feeds gluconeogenesis.'),
        { k: 'h', x: 'Hormonal control', l: 3 },
        { k: 'cards', items: [
          { title: 'Short-term', blocks: [{ k: 'p', x: '<b>Glucagon</b> (released when blood glucose is low) raises cAMP, activating <b>protein kinase A</b>, which phosphorylates and inactivates <b>PFK-2</b>. <b>Fructose 2,6-bisphosphate falls</b>, so PFK-1 slows (less glycolysis) and fructose 1,6-bisphosphatase is freed (more gluconeogenesis). <b>Insulin</b> does the opposite.' }] },
          { title: 'Long-term', blocks: [{ k: 'p', x: 'Glucagon <b>induces</b> synthesis of PEPCK, fructose 1,6-bisphosphatase, glucose 6-phosphatase and some aminotransferases, and <b>represses</b> glucokinase, PFK-1 and pyruvate kinase. Insulin generally opposes these actions.' }] },
        ] },
        { k: 'p', x: '<i>From the speaker notes:</i> PFK-2 and fructose 2,6-bisphosphatase (FBPase-2) are one <b>bifunctional protein</b>. Phosphorylation by protein kinase A turns on its FBPase-2 activity and turns off PFK-2, breaking down fructose 2,6-bisphosphate; insulin activates a phosphoprotein phosphatase that removes the phosphate and restores PFK-2. Adrenaline acts like glucagon.' },
        { k: 'h', x: 'Substrate supply', l: 3 },
        { k: 'ul', items: [
          'More free <b>glucogenic amino acids</b> stimulate gluconeogenesis; important in <b>diabetes mellitus</b> (low insulin), when muscle protein is broken down to supply them.',
          'In <b>starvation</b>, heavy lipolysis makes <b>acetyl CoA</b> accumulate in the liver, which allosterically <b>activates pyruvate carboxylase</b>.',
          'Lactate for gluconeogenesis comes mostly from muscle, reflecting its high rate of glycolysis.',
        ] },
        { k: 'box', title: 'Bottom line', tone: 'gold', blocks: [{ k: 'p', x: 'A high <b>glucagon/insulin ratio</b> raises the capacity for gluconeogenesis and lowers that for glycolysis. <b>Low blood glucose: glycolysis falls, gluconeogenesis rises.</b>' }] },
      ],
    },
    {
      id: 'gng-keto',
      title: 'Ketogenic diets and diabetic ketosis',
      kicker: 'When glucose is scarce',
      blocks: [
        { k: 'p', x: 'A <b>ketogenic diet</b> cuts carbohydrate to <b>under 50 g a day</b>, typically <b>70–80% of calories from fat, 5–10% carbohydrate and 10–20% protein</b>. Because amino acids can be made into glucose, the diet keeps enough protein to preserve lean body mass.' },
        { k: 'p', x: 'In <b>diabetes</b>, without enough insulin, glucose cannot enter cells properly, so hormones break down fat for fuel, producing acids called <b>ketones</b>. Excess ketones build up in the blood and <b>spill over into the urine</b>.' },
      ],
    },
  ]),
  extras: {
    facts: [
      { h: 'Key points', lines: [
        'Daily need 160 g glucose; brain 120 g; glycogen 190 g (about a day). Liver main site; kidney cortex 1/10 of liver.',
        'Bypasses: pyruvate carboxylase + PEPCK; fructose 1,6-bisphosphatase; glucose 6-phosphatase.',
        'Cost: 4 ATP + 2 GTP + 2 NADH per glucose.',
        'Cori cycle: muscle lactate → liver glucose. Glucose–alanine cycle in starvation. Glycerol → G3P → DHAP.',
        'Acetyl CoA activates pyruvate carboxylase; ADP inhibits it and PEPCK. F2,6BP and AMP inhibit FBPase-1.',
      ] },
    ],
  },
  quiz: [
    ['Gluconeogenesis is the synthesis of glucose from', 'Non-carbohydrate precursors', ['Glycogen stores in muscle and liver', 'Dietary starch in the gut', 'Fatty acids by β-oxidation'], 'Lactate, pyruvate, glycerol, amino acids and propionate are the precursors.', 'Introduction'],
    ['The daily glucose requirement quoted in the lecture is about', '160 g', ['120 g', '190 g', '1 kg'], 'The brain uses about 120 g; about 190 g is stored as glycogen.', 'Introduction'],
    ['Stored glycogen covers about how long of the body’s glucose needs?', 'One day', ['One hour', 'One week', 'One month'], 'About 190 g of glycogen against a daily need of 160 g.', 'Introduction'],
    ['The major site of gluconeogenesis is the', 'Liver', ['Kidney cortex', 'Skeletal muscle', 'Brain'], 'The kidney cortex is secondary, with about a tenth of the liver’s capacity.', 'Introduction'],
    ['Which cells rely on glucose as their sole energy source?', 'Red blood cells', ['Hepatocytes', 'Adipocytes', 'Cardiac muscle cells'], 'Red cells, the renal medulla and the nervous system cannot use fat for energy.', 'Introduction'],
    ['Which glycolytic enzyme is NOT bypassed in gluconeogenesis?', 'Aldolase', ['Hexokinase', 'Phosphofructokinase', 'Pyruvate kinase'], 'Aldolase is reversible and shared; the three irreversible kinases are bypassed.', 'Bypasses'],
    ['Pyruvate carboxylase converts pyruvate into', 'Oxaloacetate', ['Phosphoenolpyruvate', 'Acetyl CoA', 'Lactate'], 'PEPCK then converts oxaloacetate into PEP.', 'Bypasses'],
    ['PEPCK forms phosphoenolpyruvate from oxaloacetate by', 'Decarboxylation and phosphorylation', ['Carboxylation and hydrolysis', 'Oxidation and isomerisation', 'Reduction followed by dehydration'], 'Decarboxylation drives it; GTP supplies the phosphate.', 'Bypasses'],
    ['Fructose 1,6-bisphosphatase requires', 'Mg²⁺ ions', ['K⁺ ions', 'Biotin (a B vitamin)', 'NADPH'], 'It is absent in smooth and heart muscle and is a regulatory enzyme.', 'Bypasses'],
    ['A tissue can release glucose into the blood only if it has', 'Glucose 6-phosphatase', ['Hexokinase', 'Glucokinase', 'Phosphoglucose isomerase'], 'Present in liver and kidney; absent in muscle, brain and fat.', 'Bypasses'],
    ['Glucose 6-phosphatase is absent from', 'Muscle, brain and adipose tissue', ['Liver and kidney', 'Liver and intestinal mucosa', 'Kidney cortex and intestine'], 'So muscle glycogen cannot supply blood glucose directly.', 'Bypasses'],
    ['Making one glucose from two pyruvate costs', '4 ATP, 2 GTP and 2 NADH', ['2 ATP and 2 NADH', '6 ATP, 4 GTP and no NADH', '1 ATP and 1 NADH'], 'Six high-energy phosphates in all, plus two NADH.', 'Cost'],
    ['Muscle cannot make glucose from its own lactate because it lacks', 'Glucose 6-phosphatase and fructose 1,6-bisphosphatase', ['Lactate dehydrogenase and hexokinase', 'Pyruvate kinase and aldolase', 'Phosphoglycerate kinase and the enzyme enolase'], 'So lactate is sent to the liver in the Cori cycle.', 'Cori cycle'],
    ['In the Cori cycle, lactate is converted back to glucose in the', 'Liver', ['Skeletal muscle', 'Red blood cells', 'Brain'], 'Muscle lactate travels in the blood to the liver.', 'Cori cycle'],
    ['The amino acid that dominates transport from muscle to liver in starvation is', 'Alanine', ['Leucine', 'Lysine', 'Glutamine'], 'Muscle pyruvate is transaminated to alanine: the glucose–alanine cycle.', 'Precursors'],
    ['Which amino acids are NOT glucogenic?', 'Leucine and lysine', ['Alanine and glycine', 'Serine and cysteine', 'Aspartate and glutamate'], 'All other amino acids can give pyruvate or TCA intermediates.', 'Precursors'],
    ['Glycerol enters gluconeogenesis as', 'Dihydroxyacetone phosphate', ['Oxaloacetate', 'Pyruvate', 'Acetyl CoA from β-oxidation'], 'Glycerol → glycerol 3-phosphate → DHAP (glycerol 3-phosphate dehydrogenase).', 'Precursors'],
    ['Pyruvate carboxylase is allosterically activated by', 'Acetyl CoA', ['ADP', 'AMP', 'Insulin'], 'In starvation, lipolysis raises liver acetyl CoA, boosting glucose production.', 'Regulation'],
    ['PEPCK and pyruvate carboxylase are both turned off by', 'ADP', ['Acetyl CoA', 'Citrate', 'Glucagon'], 'When energy charge is low, glucose synthesis is switched off.', 'Regulation'],
    ['Fructose 1,6-bisphosphatase is inhibited by', 'Fructose 2,6-bisphosphate and AMP', ['ATP and citrate', 'Acetyl CoA and glucagon', 'Alanine and high ATP levels'], 'The same two molecules activate PFK-1.', 'Regulation'],
    ['Glucagon stimulates gluconeogenesis in the short term by', 'Lowering liver fructose 2,6-bisphosphate', ['Raising liver fructose 2,6-bisphosphate', 'Activating pyruvate kinase', 'Inducing glucokinase synthesis in the liver'], 'Via cAMP and protein kinase A, which inactivates PFK-2.', 'Regulation'],
    ['In the long term, glucagon induces the synthesis of', 'PEPCK and glucose 6-phosphatase', ['Glucokinase and PFK-1', 'Pyruvate kinase and PFK-1', 'Hexokinase and the enzyme aldolase'], 'It represses the glycolytic enzymes glucokinase, PFK-1 and pyruvate kinase.', 'Regulation'],
    ['A high glucagon/insulin ratio', 'Increases gluconeogenesis and decreases glycolysis', ['Increases glycolysis and decreases gluconeogenesis', 'Increases both pathways equally', 'Has no effect on either pathway'], 'Low blood glucose: glycolysis falls, gluconeogenesis rises.', 'Regulation'],
    ['Why are glucogenic amino acids important in diabetes mellitus?', 'Muscle protein is mobilised to make glucose', ['They lower blood glucose directly', 'They stimulate insulin release', 'They block ketone formation in the liver'], 'With low insulin, amino acids feed gluconeogenesis.', 'Regulation'],
    ['A ketogenic diet typically limits carbohydrate to less than', '50 g a day', ['150 g a day', '300 g a day', '10 g a week'], 'About 70–80% of calories come from fat.', 'Ketosis'],
  ],
};
