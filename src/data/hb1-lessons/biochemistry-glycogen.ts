// Biochemistry 1 → Glycogen Metabolism. From "LECTURE 10 Glycogen Metabolism[24].pdf"
// (S. N. Darko) and "Glycogen Met 2024. physio pdf.pdf" (L. A. Fondjo), KNUST, HB1 Biochemistry 1
// theory; both decks are merged. Rewrites the original database lesson biochemistry-08 with the
// same id, so progress is kept; practises the course's glycogen quiz (set s16). The decks show
// the regulation cascades and storage diseases as pictures; those are given here from the
// textbooks the lectures recommend, in our own words.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostx } from '@/data/hb1-lessons/pictures';

export const biochemistryGlycogen: Hb1Lesson = {
  id: 'biochemistry-08',
  order: 8,
  title: 'Glycogen Metabolism',
  summary: 'S. N. Darko and L. A. Fondjo · What glycogen is and why it is branched, how it is built (UDP-glucose, glycogenin, glycogen synthase, branching enzyme) and broken down (phosphorylase, debranching enzyme), liver versus muscle, its regulation and the storage diseases',
  minutes: 28,
  source: 'LECTURE 10 Glycogen Metabolism[24].pdf (S. N. Darko); Glycogen Met 2024. physio pdf.pdf (L. A. Fondjo)',
  quizId: 'gyc',
  quizName: 'Quiz · Glycogen Metabolism (lesson)',
  pastSets: ['s16'],
  sections: numberFigures([
    {
      id: 'gyc-what',
      title: 'Glycogen: structure and roles',
      kicker: 'The animal’s glucose store',
      blocks: [
        { k: 'p', x: '<b>Glycogen</b> is the storage form of glucose in animals, found in the <b>cytosol</b>, mainly of <b>liver (6–8% of its weight)</b> and <b>muscle (1–2%)</b>. Because muscle is so much bigger, it holds more in total: about <b>250 g in muscle and 75 g in liver</b> (Fondjo’s figures; the gluconeogenesis lecture quotes about 190 g available as stored glycogen).' },
        { k: 'ul', items: [
          '<b>Describe</b> the structure of glycogen and why branching matters.',
          '<b>Describe</b> glycogenesis and glycogenolysis step by step.',
          '<b>Explain</b> the different roles of liver and muscle glycogen.',
          '<b>Explain</b> the allosteric, covalent and hormonal regulation of glycogen synthase and phosphorylase.',
          '<b>Name</b> the main glycogen storage diseases.',
        ] },
        { k: 'ul', items: [
          'A very large polymer of glucose: straight chains linked <b>α(1→4)</b>, with branches by <b>α(1→6)</b> bonds about every <b>8–10 residues</b>.',
          'Its single <b>reducing end</b> is attached to the protein <b>glycogenin</b>; its many <b>non-reducing ends</b> are where enzymes add and remove glucose.',
        ] },
        ostx('219-three-important-polysaccharides-01.jpg', 1000, 346, 'Three polysaccharides: starch, glycogen and cellulose (fibre).', 'Compare the branching: amylose (starch) is unbranched, amylopectin is branched, and glycogen is the most highly branched of all, giving it many ends to work on at once.'),
        { k: 'table', head: ['', 'Liver glycogen', 'Muscle glycogen'], rows: [
          { c: ['Role', 'Supplies glucose to <b>the whole body</b> when blood glucose is low; maintains blood glucose between meals', 'A quick source of glucose for <b>the muscle only</b>: fuel for ATP during contraction'] },
          { c: ['Changes', 'Rises in the fed state, depleted in fasting', 'Used up in exercise'] },
          { c: ['Why', 'Has <b>glucose 6-phosphatase</b>', '<b>Lacks</b> glucose 6-phosphatase, so its glucose 6-phosphate stays in the cell for glycolysis'] },
        ] },
        { k: 'p', x: 'Glycogen also buffers blood glucose, supplies glucose 6-phosphate for glycolysis or for the <b>pentose phosphate pathway</b> (NADPH and ribose), and lets the cell store glucose without raising its <b>osmotic pressure</b> (one large polymer instead of thousands of free glucose molecules).' },
      ],
    },
    {
      id: 'gyc-synthesis',
      title: 'Glycogenesis: building glycogen',
      kicker: 'UDP-glucose, glycogenin and two enzymes',
      blocks: [
        { k: 'p', x: 'Glycogenesis has three stages: making the activated glucose (<b>UDP-glucose</b>), adding glucose units by <b>α(1→4)</b> links, and creating <b>α(1→6)</b> branches.' },
        { k: 'step', n: '1', title: 'Glucose → glucose 1-phosphate', blocks: [{ k: 'p', x: 'Glucose is phosphorylated to glucose 6-phosphate (hexokinase/glucokinase), and <b>phosphoglucomutase</b> moves the phosphate to give <b>glucose 1-phosphate</b>.' }] },
        { k: 'step', n: '2', title: 'UDP-glucose pyrophosphorylase', blocks: [{ k: 'p', x: '<b>Glucose 1-phosphate + UTP → UDP-glucose + PP<sub>i</sub></b>. Pyrophosphate is split to 2 P<sub>i</sub>, pulling the reaction forward. <b>UDP-glucose</b> (not P<sub>i</sub>-glucose) is the activated glucose donor.' }] },
        { k: 'step', n: '3', title: 'Glycogenin: the primer', blocks: [{ k: 'p', x: 'Glycogen synthase cannot start a chain from nothing. <b>Glycogenin</b>, a protein of <b>two identical subunits</b>, is both the <b>primer</b> and the enzyme that builds it: it has <b>glucosyltransferase</b> and <b>chain-extending</b> activity. The first glucose is linked to a <b>tyrosine –OH</b> of glycogenin, and each subunit adds about <b>8 glucose units</b> to its partner (autoglycosylation).' }] },
        { k: 'step', n: '4', title: 'Glycogen synthase: elongation', blocks: [{ k: 'p', x: 'Needs a primer of <b>4–8 glucose residues</b> on glycogenin. It transfers glucosyl units from UDP-glucose to the <b>C-4 hydroxyl of a non-reducing end</b>, forming <b>α(1→4)</b> bonds: UDP-glucose + glycogen(n) → glycogen(n + 1) + UDP. The <b>regulated</b> enzyme of synthesis.' }] },
        { k: 'step', n: '5', title: 'Branching enzyme', blocks: [{ k: 'p', x: 'Also called <b>amylo(1→4)→(1→6) transglycosylase</b>, oligo-1,4→1,6-glucantransferase or glycosyl-(4→6)-transferase. It moves a block of <b>6 or 7 glucose residues</b> from a chain at least <b>11 residues long</b> to a C-6 hydroxyl, making an <b>α(1→6)</b> branch at least <b>4 residues</b> from an existing branch point.' }] },
        { k: 'box', title: 'Why branching matters', tone: 'gold', blocks: [{ k: 'ul', items: [
          '<b>Increases solubility</b>.',
          '<b>Multiplies the non-reducing ends</b>: the sites where synthase and phosphorylase work, so glucose can be stored or released very fast.',
        ] }] },
        { k: 'box', title: 'Overall', tone: 'formula', blocks: [{ k: 'p', x: '<b>Glycogen(n) + glucose 1-phosphate + UTP → glycogen(n + 1) + UDP + 2 P<sub>i</sub></b>: one high-energy bond (UTP) per glucose stored.' }] },
      ],
    },
    {
      id: 'gyc-breakdown',
      title: 'Glycogenolysis: breaking it down',
      kicker: 'Phosphorolysis and debranching',
      blocks: [
        { k: 'p', x: 'Synthesis and breakdown are separate, <b>irreversible</b> pathways with their own enzymes, all in the cytosol. Breakdown has three stages: releasing glucose 1-phosphate, rearranging the branches, and converting glucose 1-phosphate to glucose 6-phosphate.' },
        { k: 'step', n: '1', title: 'Glycogen phosphorylase', blocks: [{ k: 'p', x: 'Cleaves <b>α(1→4)</b> bonds at the non-reducing ends by <b>phosphorolysis</b>, using inorganic phosphate (not water): glycogen(n) + P<sub>i</sub> → glycogen(n − 1) + <b>glucose 1-phosphate</b>. This is economical: the glucose comes off already phosphorylated, saving an ATP. Phosphorylase works repeatedly but <b>stops 4 residues from an α(1→6) branch</b>. It needs <b>pyridoxal phosphate</b> (vitamin B<sub>6</sub>).' }] },
        { k: 'step', n: '2', title: 'Debranching enzyme (bifunctional)', blocks: [{ k: 'ul', items: [
          '<b>Transferase</b> activity (oligo-α(1→6)→α(1→4)-glucantransferase): moves <b>3</b> of the 4 remaining glucose units to a nearby non-reducing end by an α(1→4) bond.',
          '<b>α(1→6)-glucosidase</b> activity: removes the single glucose left at the branch point as <b>free glucose</b> (hydrolysis).',
          'Phosphorylase can then carry on.',
        ] }] },
        { k: 'step', n: '3', title: 'Phosphoglucomutase', blocks: [{ k: 'p', x: '<b>Glucose 1-phosphate ⇌ glucose 6-phosphate</b>. Its active site has a <b>phosphorylated serine</b> that donates and accepts the phosphate.' }] },
        { k: 'h', x: 'The fate of glucose 6-phosphate', l: 3 },
        { k: 'p', x: 'Glucose 6-phosphate is not readily transported out of cells. The <b>liver</b> has <b>glucose 6-phosphatase</b> (in the endoplasmic reticulum), which removes the phosphate so free glucose can leave by <b>GLUT2</b> and keep blood glucose nearly constant, between meals and during exercise, for the brain and muscle. <b>Muscle and most other tissues lack it</b>, so their glucose 6-phosphate is kept to make ATP by glycolysis.' },
      ],
    },
    {
      id: 'gyc-regulation',
      title: 'Regulation',
      kicker: 'Synthase and phosphorylase, in opposite directions',
      blocks: [
        { k: 'p', x: 'The two regulated enzymes are <b>glycogen phosphorylase</b> (breakdown) and <b>glycogen synthase</b> (synthesis). They are controlled <b>allosterically</b>, by <b>covalent modification</b> (phosphorylation) and by <b>hormones</b>, always in opposite directions, so the cell does not build and break glycogen at once.' },
        { k: 'table', head: ['Enzyme', 'Active form', 'Less active / inactive form'], rows: [
          { c: ['<b>Glycogen phosphorylase</b>', '<b>Phosphorylase a: phosphorylated</b>', 'Phosphorylase b: dephosphorylated'] },
          { c: ['<b>Glycogen synthase</b>', '<b>Synthase a: dephosphorylated</b>', 'Synthase b: phosphorylated'] },
        ] },
        { k: 'box', title: 'One phosphate, opposite effects', tone: 'recall', blocks: [{ k: 'p', x: '<b>Phosphorylation turns breakdown on and synthesis off.</b> Dephosphorylation (by <b>protein phosphatase 1</b>) does the reverse.' }] },
        { k: 'h', x: 'Allosteric control', l: 3 },
        { k: 'ul', items: [
          'Liver phosphorylase is <b>inhibited by glucose</b> (the liver stops releasing glucose when there is plenty).',
          'Muscle phosphorylase is <b>inhibited by ATP and glucose 6-phosphate</b> and <b>activated by AMP and Ca<sup>2+</sup></b>. AMP switches phosphorylase b on without hormones when energy runs low; Ca<sup>2+</sup> released for contraction links breakdown directly to muscle work.',
          'Glycogen synthase is <b>activated by glucose 6-phosphate</b> (it activates synthase b).',
        ] },
        { k: 'h', x: 'Hormonal and covalent control', l: 3 },
        { k: 'step', n: '1', title: 'The breakdown cascade', blocks: [{ k: 'p', x: '<b>Glucagon</b> (on the <b>liver</b>) or <b>adrenaline</b> (on <b>liver and muscle</b>) binds its G protein-coupled receptor → adenylyl cyclase makes <b>cAMP</b> → cAMP activates <b>protein kinase A (PKA)</b> → PKA phosphorylates <b>phosphorylase kinase</b>, which phosphorylates phosphorylase b to <b>a</b> (active). PKA also phosphorylates glycogen synthase to <b>b</b> (inactive). Muscle has no glucagon receptors, so glucagon does not act there.' }] },
        { k: 'step', n: '2', title: 'The storage signal', blocks: [{ k: 'p', x: '<b>Insulin</b> activates <b>protein phosphatase 1</b>, which removes the phosphates: synthase becomes active and phosphorylase inactive, so glucose is stored.' }] },
        ostx('2522-the-postabsorptive-stage.jpg', 1000, 1307, 'The postabsorptive state: between meals the liver breaks down glycogen to keep blood glucose up.', 'This is the job of liver glycogen in action: with no food arriving, glucagon drives glycogenolysis and the liver releases glucose for the brain, while muscle keeps its own glycogen for itself.'),
      ],
    },
    {
      id: 'gyc-gsd',
      title: 'Glycogen storage diseases',
      kicker: 'When an enzyme is missing',
      blocks: [
        { k: 'p', x: 'Inherited deficiencies of the enzymes of glycogen metabolism cause <b>glycogen storage diseases</b>: abnormal amounts or structures of glycogen, with liver or muscle effects depending on which enzyme is missing.' },
        { k: 'table', head: ['Type', 'Name', 'Missing enzyme', 'Main features'], rows: [
          { c: ['I (Ia)', '<b>Von Gierke</b>', '<b>Glucose 6-phosphatase</b>', 'Liver cannot release glucose: <b>severe fasting hypoglycaemia</b>, enlarged liver, lactic acidosis'] },
          { c: ['II', '<b>Pompe</b>', 'Lysosomal <b>α(1→4)-glucosidase</b> (acid maltase)', 'Glycogen in lysosomes of all organs; heart failure in infants'] },
          { c: ['III', '<b>Cori</b> (Forbes)', '<b>Debranching enzyme</b>', 'Short-branched glycogen; liver enlargement, mild hypoglycaemia'] },
          { c: ['IV', '<b>Andersen</b>', '<b>Branching enzyme</b>', 'Long unbranched chains; liver cirrhosis'] },
          { c: ['V', '<b>McArdle</b>', '<b>Muscle phosphorylase</b>', '<b>Exercise-induced cramps</b> and weakness; blood lactate fails to rise in exercise (the liver is normal)'] },
          { c: ['VI', '<b>Hers</b>', '<b>Liver phosphorylase</b>', 'Mild hypoglycaemia, enlarged liver'] },
        ] },
        { k: 'box', title: 'Liver or muscle?', tone: 'recall', blocks: [{ k: 'p', x: 'A liver enzyme missing → <b>hypoglycaemia and a big liver</b> (von Gierke, Hers). A muscle enzyme missing → <b>cramps and weakness on exercise</b> (McArdle). Pompe hits the heart because its enzyme is lysosomal and needed everywhere.' }] },
      ],
    },
  ]),
  extras: {
    facts: [
      { h: 'Key points', lines: [
        'Liver 6–8% (≈ 75 g) for blood glucose; muscle 1–2% (≈ 250 g) for muscle only. α(1→4) chains, α(1→6) branches every 8–10 residues.',
        'Synthesis: G1P + UTP → UDP-glucose; glycogenin primer (Tyr, ≈ 8 units); synthase α(1→4); branching enzyme moves 6–7 from ≥ 11, ≥ 4 from a branch.',
        'Breakdown: phosphorylase (Pi, stops 4 from a branch) → debranching (transfers 3, frees 1 glucose) → phosphoglucomutase.',
        'Phosphorylase a = phosphorylated (active); synthase a = dephosphorylated (active). cAMP → PKA → phosphorylase kinase; insulin → protein phosphatase 1.',
        'Von Gierke: G6Pase. Pompe: lysosomal glucosidase. Cori: debranching. Andersen: branching. McArdle: muscle phosphorylase. Hers: liver phosphorylase.',
      ] },
    ],
  },
  quiz: [
    ['Glycogen is stored mainly in the', 'Liver and skeletal muscle', ['Brain and kidney', 'Adipose tissue and skin', 'Red blood cells and plasma'], 'Liver 6–8% of its weight; muscle 1–2%.', 'Structure'],
    ['Which holds more glycogen in total?', 'Skeletal muscle', ['The liver', 'The brain', 'The kidney cortex'], 'Muscle ≈ 250 g, liver ≈ 75 g, because muscle mass is so large.', 'Structure'],
    ['The branches of glycogen are formed by', 'α(1→6) glycosidic bonds', ['α(1→4) glycosidic bonds', 'β(1→4) glycosidic bonds', 'Peptide bonds'], 'Straight chains are α(1→4); branches α(1→6) every 8–10 residues.', 'Structure'],
    ['The reducing end of glycogen is attached to', 'Glycogenin', ['Glycogen synthase', 'Phosphorylase', 'Branching enzyme'], 'There is only one reducing end per molecule.', 'Structure'],
    ['Muscle glycogen cannot raise blood glucose because muscle lacks', 'Glucose 6-phosphatase', ['Glycogen phosphorylase', 'Phosphoglucomutase', 'Hexokinase'], 'Its glucose 6-phosphate stays in the cell for glycolysis.', 'Liver vs muscle'],
    ['The activated glucose donor for glycogen synthesis is', 'UDP-glucose', ['Glucose 6-phosphate', 'Free glucose', 'ADP-glucose'], 'Made from glucose 1-phosphate and UTP by UDP-glucose pyrophosphorylase.', 'Glycogenesis'],
    ['Glycogenin attaches the first glucose to its', 'Tyrosine hydroxyl', ['Serine hydroxyl', 'Lysine amino group', 'Cysteine thiol'], 'Each subunit then adds about 8 glucose units to its partner.', 'Glycogenesis'],
    ['Glycogen synthase needs a primer of about', '4–8 glucose residues', ['1–2 glucose residues', '20–30 glucose residues', '100 glucose residues'], 'It extends chains at non-reducing ends by α(1→4) bonds.', 'Glycogenesis'],
    ['Branching enzyme transfers a block of about', '6–7 glucose residues', ['1–2 glucose residues', '3 glucose residues', '11 glucose residues'], 'From a chain at least 11 long; the new branch ≥ 4 residues from another.', 'Glycogenesis'],
    ['Branching increases the number of', 'Non-reducing ends', ['Reducing ends', 'Glycogenin molecules', 'Phosphate groups'], 'More ends mean faster synthesis and breakdown, and more solubility.', 'Glycogenesis'],
    ['Glycogen phosphorylase cleaves bonds by', 'Phosphorolysis', ['Hydrolysis', 'Oxidation', 'Decarboxylation'], 'Using Pi gives glucose 1-phosphate directly, saving ATP.', 'Glycogenolysis'],
    ['Glycogen phosphorylase stops when it is how far from a branch point?', '4 glucose residues', ['1 glucose residue', '8 glucose residues', '11 glucose residues'], 'The debranching enzyme takes over there.', 'Glycogenolysis'],
    ['The glucosidase activity of the debranching enzyme releases', 'Free glucose', ['Glucose 1-phosphate', 'Glucose 6-phosphate', 'UDP-glucose'], 'It hydrolyses the single α(1→6)-linked residue.', 'Glycogenolysis'],
    ['Phosphoglucomutase converts', 'Glucose 1-phosphate to glucose 6-phosphate', ['Glucose to glucose 6-phosphate', 'UDP-glucose to glycogen', 'Glucose 6-phosphate to glucose'], 'It uses a phosphorylated serine at its active site.', 'Glycogenolysis'],
    ['The active form of glycogen phosphorylase is', 'Phosphorylase a (phosphorylated)', ['Phosphorylase b (dephosphorylated)', 'Phosphorylase a (dephosphorylated)', 'Phosphorylase b (phosphorylated)'], 'Phosphorylation activates breakdown.', 'Regulation'],
    ['The active form of glycogen synthase is', 'Synthase a (dephosphorylated)', ['Synthase b (phosphorylated)', 'Synthase a (phosphorylated)', 'Synthase b (dephosphorylated)'], 'Phosphorylation inactivates synthesis.', 'Regulation'],
    ['In muscle, phosphorylase b is switched on without hormones by', 'AMP', ['ATP', 'Glucose 6-phosphate', 'Insulin'], 'AMP signals low energy; Ca²⁺ also activates it during contraction.', 'Regulation'],
    ['Glucose 6-phosphate allosterically', 'Activates glycogen synthase', ['Activates glycogen phosphorylase', 'Inhibits glycogen synthase', 'Activates protein kinase A'], 'Plenty of G6P signals glucose is available for storage.', 'Regulation'],
    ['Glucagon stimulates glycogen breakdown in the', 'Liver only', ['Muscle only', 'Liver and muscle', 'Brain and liver'], 'Muscle lacks glucagon receptors; adrenaline acts on both.', 'Regulation'],
    ['In the breakdown cascade, cAMP activates', 'Protein kinase A', ['Protein phosphatase 1', 'Glycogen synthase', 'Glucose 6-phosphatase'], 'PKA activates phosphorylase kinase and inactivates synthase.', 'Regulation'],
    ['Insulin favours glycogen storage by activating', 'Protein phosphatase 1', ['Protein kinase A', 'Adenylyl cyclase', 'Phosphorylase kinase'], 'Dephosphorylation activates synthase and inactivates phosphorylase.', 'Regulation'],
    ['Von Gierke disease is a deficiency of', 'Glucose 6-phosphatase', ['Muscle phosphorylase', 'Branching enzyme', 'Debranching enzyme'], 'Severe fasting hypoglycaemia with an enlarged liver.', 'Storage diseases'],
    ['McArdle disease causes', 'Exercise-induced muscle cramps', ['Severe fasting hypoglycaemia', 'Liver cirrhosis in infancy', 'Cataracts in the newborn'], 'Muscle phosphorylase is missing; the liver is normal.', 'Storage diseases'],
    ['Andersen disease (type IV) is a deficiency of', 'Branching enzyme', ['Debranching enzyme', 'Glucose 6-phosphatase', 'Lysosomal glucosidase'], 'Long unbranched chains accumulate; liver cirrhosis.', 'Storage diseases'],
  ],
};
