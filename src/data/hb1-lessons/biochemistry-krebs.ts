// Biochemistry 1 → The Krebs Cycle. From "TCA-2023 pdf.pdf" and "KRebs 2024 Physio copy.pdf"
// (Prof. L. A. Fondjo, KNUST; HB1 Biochemistry 1 theory); both versions are merged. Rewrites the
// original database lesson biochemistry-06 with the same id, so progress is kept; practises the
// course's Quiz 6 and the past questions on the Krebs cycle. The decks show most reactions as
// pictures only; the reactions are given here from the textbooks the lecture recommends
// (Lehninger, Stryer), in our own words.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostx, ostxBio } from '@/data/hb1-lessons/pictures';

export const biochemistryKrebs: Hb1Lesson = {
  id: 'biochemistry-06',
  order: 6,
  title: 'The Krebs (Citric Acid) Cycle',
  summary: 'L. A. Fondjo · The link from glycolysis (the pyruvate dehydrogenase complex and its vitamins), the eight reactions of the cycle, its energy yield, inhibitors and poisons, its regulation, and its amphibolic and anaplerotic roles',
  minutes: 32,
  source: 'TCA-2023 pdf.pdf; KRebs 2024 Physio copy.pdf (L. A. Fondjo)',
  quizId: 'tca',
  quizName: 'Quiz · Krebs Cycle (lesson)',
  pastSets: ['s6'],
  pastTopics: ['krebs-cycle'],
  sections: numberFigures([
    {
      id: 'tca-what',
      title: 'What the Krebs cycle is',
      kicker: 'The final common pathway',
      blocks: [
        { k: 'p', x: 'The <b>Krebs cycle</b> (citric acid cycle, tricarboxylic acid or TCA cycle, after <b>Hans Adolf Krebs, 1900–1981</b>) is a series of enzymatic reactions used by all aerobic organisms to generate energy by <b>oxidising acetyl units</b>, derived from <b>carbohydrates, fats and proteins</b>, to <b>CO<sub>2</sub> and water</b>.' },
        { k: 'ul', items: [
          '<b>Describe</b> how pyruvate becomes acetyl CoA, and the pyruvate dehydrogenase complex.',
          '<b>List</b> the eight reactions of the cycle with their enzymes and products.',
          '<b>Calculate</b> the ATP yield and <b>explain</b> the cycle’s regulation.',
          '<b>Explain</b> why the cycle is amphibolic and what anaplerotic reactions do.',
        ] },
        { k: 'ul', items: [
          'It is the <b>central</b> pathway connecting almost all others, and the <b>final oxidative pathway</b> for carbohydrate, protein and fat.',
          'It is the <b>2nd stage of cellular respiration</b> (the process that turns the energy in food into ATP): glycolysis → TCA cycle → electron transport chain.',
          'It is <b>aerobic</b> and takes place in the <b>mitochondrial matrix</b>.',
          'It supplies a little ATP (as GTP) and, above all, the <b>reduced coenzymes NADH and FADH<sub>2</sub></b> for the ETC.',
          'It provides precursors for <b>haem (porphyrins), nucleotide bases and amino acids</b>.',
        ] },
        ostx('2503-cellular-respiration.jpg', 1000, 1117, 'Cellular respiration: glycolysis, the Krebs cycle and oxidative phosphorylation.', 'Notice where each stage runs and what it gives: glycolysis in the cytoplasm makes a little ATP; the Krebs cycle in the matrix makes mainly NADH and FADH₂; the electron transport chain on the inner membrane turns those into most of the ATP and uses the oxygen.'),
      ],
    },
    {
      id: 'tca-pdh',
      title: 'The link: pyruvate to acetyl CoA',
      kicker: 'The pyruvate dehydrogenase complex',
      blocks: [
        { k: 'p', x: 'Pyruvate made in the cytosol is <b>translocated into the mitochondrion</b> and <b>oxidatively decarboxylated</b> to <b>acetyl CoA</b>, releasing CO<sub>2</sub> and making NADH. The reaction is <b>irreversible</b>, which is why acetyl CoA (and so fatty acids) cannot be turned back into glucose in humans.' },
        ostxBio('figure-07-03-01-a059.jpg', 544, 450, 'Pyruvate is converted to acetyl CoA by a multi-enzyme complex in the mitochondrial matrix, releasing CO₂ and making NADH.', 'Three things happen to the three-carbon pyruvate: one carbon leaves as CO₂, the remaining two-carbon acetyl group is oxidised (electrons go to NAD⁺), and it is attached to coenzyme A.'),
        { k: 'table', head: ['Enzyme of the complex', 'Cofactor'], rows: [
          { c: ['E1 <b>Pyruvate dehydrogenase</b>', '<b>TPP</b> (thiamine pyrophosphate)'] },
          { c: ['E2 <b>Dihydrolipoamide acetyltransferase</b>', '<b>Lipoamide, CoA-SH</b>'] },
          { c: ['E3 <b>Dihydrolipoamide dehydrogenase</b>', '<b>FAD, NAD<sup>+</sup></b>'] },
        ] },
        { k: 'p', x: 'So the complex has <b>3 enzymes and 5 cofactors</b>: TPP, CoA-SH, lipoic acid, FAD and NAD<sup>+</sup>.' },
        { k: 'table', head: ['Cofactor', 'Vitamin'], rows: [
          { c: ['TPP', '<b>Thiamine</b> (B<sub>1</sub>)'] },
          { c: ['NAD', '<b>Niacin</b> (B<sub>3</sub>)'] },
          { c: ['FAD', '<b>Riboflavin</b> (B<sub>2</sub>)'] },
          { c: ['CoA', '<b>Pantothenic acid</b> (B<sub>5</sub>)'] },
        ] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The 2024 deck writes “Lipoic acid (CoA/CoASH) – pantothenic acid”. In the textbooks it is <b>CoA</b> that comes from pantothenic acid; <b>lipoic acid</b> is a separate cofactor that the body makes itself.' }] },
        { k: 'h', x: 'When the link fails', l: 3 },
        { k: 'cards', items: [
          { title: 'Pyruvate dehydrogenase deficiency', blocks: [{ k: 'p', x: 'Rare. Raises serum <b>lactate and pyruvate</b>, causes <b>acidosis</b> (fatal in severe cases) and <b>neurological disorders</b>: the brain depends almost entirely on glucose oxidation.' }] },
          { title: 'Thiamine deficiency (beriberi)', blocks: [{ k: 'p', x: 'Dietary lack of thiamine (in malnourished <b>alcoholics</b>, or diets of <b>polished rice</b> with the husk removed) causes <b>neurological and cardiac</b> disease. Pyruvate cannot be oxidised and accumulates in the blood; the cycle’s two TPP-dependent dehydrogenases are slowed, so ATP falls.' }] },
        ] },
      ],
    },
    {
      id: 'tca-steps',
      title: 'The eight reactions',
      kicker: 'Round the cycle',
      blocks: [
        ostxBio('figure-07-03-02-a978.jpg', 800, 884, 'The citric acid cycle: acetyl CoA joins oxaloacetate to make citrate, which is oxidised back to oxaloacetate, releasing two CO₂.', 'Track the carbons: 2 (acetyl) + 4 (oxaloacetate) = 6 (citrate); two CO₂ leave at isocitrate and α-ketoglutarate dehydrogenase (6 → 5 → 4), and the four-carbon acids are rearranged back into oxaloacetate.'),
        { k: 'step', n: '1', title: 'Citrate synthase (condensation)', blocks: [{ k: 'p', x: '<b>Acetyl CoA + oxaloacetate (C4) → citrate (C6)</b> + CoA. Irreversible; the entry point of the cycle.' }] },
        { k: 'step', n: '2', title: 'Aconitase (isomerisation)', blocks: [{ k: 'p', x: '<b>Citrate → isocitrate</b> by dehydration then rehydration through <b>cis-aconitate</b>, moving the OH group so it can be oxidised.' }] },
        { k: 'step', n: '3', title: 'Isocitrate dehydrogenase', blocks: [{ k: 'p', x: '<b>Isocitrate → α-ketoglutarate (C5) + CO<sub>2</sub></b>, making the <b>first NADH</b>; an oxidative decarboxylation through the enzyme-bound intermediate <b>oxalosuccinate</b>. A key regulatory step.' }] },
        { k: 'step', n: '4', title: 'α-Ketoglutarate dehydrogenase complex', blocks: [{ k: 'p', x: '<b>α-Ketoglutarate → succinyl CoA (C4) + CO<sub>2</sub></b>: the <b>second oxidative decarboxylation</b>, making the <b>second NADH</b>. The complex is almost identical to pyruvate dehydrogenase in structure and mechanism and uses the same <b>5 coenzymes</b> (TPP, CoA-SH, lipoic acid, NAD<sup>+</sup>, FAD). The lecture lists its enzymes as transsuccinylase, α-ketoglutarate dehydrogenase and dihydrolipoyl dehydrogenase (textbooks number α-KG dehydrogenase as E1 and the transsuccinylase as E2).' }] },
        { k: 'step', n: '5', title: 'Succinyl CoA synthetase', blocks: [{ k: 'p', x: '<b>Succinyl CoA → succinate</b> + CoA, making <b>GTP (or ATP)</b>: the cycle’s only <b>substrate-level phosphorylation</b>. GTP passes its phosphate to ADP to make ATP.' }] },
        { k: 'step', n: '6', title: 'Succinate dehydrogenase', blocks: [{ k: 'p', x: '<b>Succinate → fumarate</b>, making <b>FADH<sub>2</sub></b>. The only cycle enzyme bound to the <b>inner mitochondrial membrane</b>: it is also <b>Complex II</b> of the ETC. Its FADH<sub>2</sub> stays enzyme-bound (not a diffusible carrier). Strongly and <b>competitively inhibited by malonate</b>.' }] },
        { k: 'step', n: '7', title: 'Fumarase', blocks: [{ k: 'p', x: '<b>Fumarate + H<sub>2</sub>O → L-malate</b>: hydration across the double bond. <b>Highly stereospecific</b>: it acts on fumarate (trans) but not on its cis isomer, maleate.' }] },
        { k: 'step', n: '8', title: 'Malate dehydrogenase', blocks: [{ k: 'p', x: '<b>Malate → oxaloacetate</b>, making the <b>third NADH</b> and <b>regenerating oxaloacetate</b> for the next turn.' }] },
        { k: 'box', title: 'Memory aid', tone: 'recall', blocks: [{ k: 'p', x: '“<b>C</b>itrate <b>I</b>s <b>K</b>rebs’ <b>S</b>tarting <b>S</b>ubstrate <b>F</b>or <b>M</b>aking <b>O</b>xaloacetate”: citrate, isocitrate, α-ketoglutarate, succinyl CoA, succinate, fumarate, malate, oxaloacetate.' }] },
      ],
    },
    {
      id: 'tca-yield',
      title: 'What one turn produces',
      kicker: '10 ATP per acetyl CoA',
      blocks: [
        { k: 'box', title: 'Overall reaction', tone: 'formula', blocks: [{ k: 'p', x: '<b>Acetyl CoA + 3 NAD<sup>+</sup> + FAD + GDP + P<sub>i</sub> + 2 H<sub>2</sub>O → CoA-SH + 3 NADH + FADH<sub>2</sub> + GTP + 2 CO<sub>2</sub> + 2 H<sup>+</sup></b>' }] },
        { k: 'table', head: ['Enzyme', 'Product', 'ATP equivalent'], rows: [
          { c: ['Isocitrate dehydrogenase', '1 NADH', '2.5'] },
          { c: ['α-Ketoglutarate dehydrogenase', '1 NADH', '2.5'] },
          { c: ['Succinyl CoA synthetase', '1 GTP', '1.0'] },
          { c: ['Succinate dehydrogenase', '1 FADH<sub>2</sub>', '1.5'] },
          { c: ['Malate dehydrogenase', '1 NADH', '2.5'] },
          { c: ['<b>Total per acetyl CoA</b>', '', '<b>10 ATP</b>'] },
        ] },
        { k: 'p', x: 'Only about <b>10%</b> of the cycle’s energy is captured directly (the one GTP): one turn makes <b>no ATP directly</b> beyond that GTP. The rest is carried as NADH and FADH<sub>2</sub> to the electron transport chain.' },
        { k: 'box', title: 'The lecture’s assignment: one glucose, fully oxidised', tone: 'formula', blocks: [{ k: 'ul', items: [
          'Glycolysis: 2 ATP + 2 NADH (2 × 2.5 = 5, or 3 if shuttled as FADH<sub>2</sub>) = <b>5–7</b>.',
          'Pyruvate dehydrogenase: 2 NADH = <b>5</b>.',
          'Two turns of the cycle: 2 × 10 = <b>20</b>.',
          'Total: <b>30–32 ATP</b> per glucose with today’s values (the older textbook figure, using 3 and 2 ATP per NADH and FADH<sub>2</sub>, is 36–38).',
        ] }] },
      ],
    },
    {
      id: 'tca-poisons',
      title: 'Inhibitors and poisons',
      kicker: 'Stopping the cycle',
      blocks: [
        { k: 'cards', items: [
          { title: 'Sodium fluoroacetate (a rodenticide)', blocks: [{ k: 'ul', items: [
            'Fluoroacetate combines with CoA to make <b>fluoroacetyl CoA</b>, which substitutes for acetyl CoA.',
            'Citrate synthase turns it into <b>fluorocitrate</b>.',
            'Fluorocitrate <b>binds tightly to aconitase</b>, halting the cycle (citrate accumulates).',
          ] }] },
          { title: 'Malonate', blocks: [{ k: 'p', x: 'A <b>strong competitive inhibitor of succinate dehydrogenase</b> (it looks like succinate). Succinate accumulates and respiration is blocked, since no FADH<sub>2</sub> reaches the respiratory chain.' }] },
          { title: 'Arsenite', blocks: [{ k: 'p', x: 'Binds the lipoic acid of pyruvate and α-ketoglutarate dehydrogenase (textbook example).' }] },
        ] },
        { k: 'p', x: 'Fluoride (which inhibits enolase in glycolysis) does <b>not</b> inhibit the TCA cycle.' },
      ],
    },
    {
      id: 'tca-regulation',
      title: 'Regulation of the cycle',
      kicker: 'Supply, products and energy charge',
      blocks: [
        { k: 'p', x: 'Three factors control the rate:' },
        { k: 'step', n: '1', title: 'Availability of substrate', blocks: [{ k: 'p', x: '<b>Acetyl CoA</b> and <b>oxaloacetate</b>.' }] },
        { k: 'step', n: '2', title: 'Inhibition by accumulating products', blocks: [{ k: 'p', x: 'For example citrate inhibits citrate synthase, and succinyl CoA inhibits α-ketoglutarate dehydrogenase.' }] },
        { k: 'step', n: '3', title: 'Allosteric feedback by energy charge', blocks: [{ k: 'p', x: 'A <b>high NADH/NAD<sup>+</sup> ratio</b> (and high ATP) inhibits the three key enzymes: <b>citrate synthase, isocitrate dehydrogenase and α-ketoglutarate dehydrogenase</b>. <b>ADP</b> activates citrate synthase and isocitrate dehydrogenase, and <b>Ca<sup>2+</sup></b> (released in muscle contraction) activates isocitrate and α-ketoglutarate dehydrogenase, so rising Ca<sup>2+</sup> and falling ATP in exercise speed the cycle up.' }] },
        { k: 'h', x: 'Control of the pyruvate dehydrogenase complex', l: 3 },
        { k: 'p', x: 'PDH is switched off by <b>phosphorylation</b> (PDH kinase, activated by high acetyl CoA, NADH and ATP) and on by <b>dephosphorylation</b> (PDH phosphatase). In <b>PDH phosphatase deficiency</b> the complex stays phosphorylated and inactive, glucose ends as lactic acid, and <b>lactic acidosis</b> disrupts tissue function, especially in the <b>CNS</b>.' },
      ],
    },
    {
      id: 'tca-amphibolic',
      title: 'An amphibolic cycle and anaplerotic reactions',
      kicker: 'Breaking down and building up',
      blocks: [
        { k: 'p', x: 'The cycle is <b>amphibolic</b>: it serves both <b>catabolism</b> (oxidising fuel) and <b>anabolism</b> (supplying building blocks).' },
        { k: 'table', head: ['Intermediate', 'Drawn off to make'], rows: [
          { c: ['Citrate', 'Fatty acids and cholesterol (exported as citrate, split to acetyl CoA)'] },
          { c: ['α-Ketoglutarate', '<b>Glutamate</b> (and other amino acids by transamination)'] },
          { c: ['Succinyl CoA', '<b>Porphyrins and haem</b> (its immediate precursor)'] },
          { c: ['Oxaloacetate', 'Aspartate, pyrimidines, and glucose (gluconeogenesis)'] },
        ] },
        ostxBio('figure-07-06-02.jpg', 544, 238, 'Glycogen, fats and proteins feed into the same pathways as glucose.', 'The cycle sits at the crossroads: sugars, fats and amino acids are all fed in, and its intermediates are drawn out to build other molecules.'),
        { k: 'h', x: 'Anaplerotic (“filling-up”) reactions', l: 3 },
        { k: 'p', x: 'When biosynthesis draws intermediates off, <b>anaplerotic reactions</b> replenish them so the cycle can keep turning. The key one in mammals is <b>pyruvate carboxylase</b> (pyruvate + CO<sub>2</sub> → oxaloacetate, activated by acetyl CoA). Others: PEP + CO<sub>2</sub> → oxaloacetate (PEP carboxylase/carboxykinase); pyruvate → malate (malic enzyme); glutamate → α-ketoglutarate; and amino acids that give succinyl CoA or fumarate.' },
        { k: 'box', title: 'Two traps', tone: 'red', blocks: [{ k: 'ul', items: [
          'Acetyl CoA <b>cannot</b> give net glucose in humans: its two carbons are lost as two CO<sub>2</sub> in each turn.',
          'The <b>glyoxylate cycle</b>, found in plants and some bacteria (in <b>glyoxysomes</b>), bypasses the two decarboxylations so acetyl CoA can be used for carbohydrate as well as energy; humans lack it.',
        ] }] },
      ],
    },
  ]),
  extras: {
    facts: [
      { h: 'Key points', lines: [
        'PDH: E1 TPP; E2 lipoamide, CoA; E3 FAD, NAD⁺. Vitamins: thiamine, niacin, riboflavin, pantothenic acid.',
        'Citrate synthase → aconitase → isocitrate DH (NADH, CO₂) → α-KG DH (NADH, CO₂) → succinyl CoA synthetase (GTP) → succinate DH (FADH₂) → fumarase → malate DH (NADH).',
        '3 NADH + 1 FADH₂ + 1 GTP = 10 ATP per acetyl CoA. Fluorocitrate blocks aconitase; malonate blocks succinate DH.',
        'High NADH/NAD⁺ inhibits citrate synthase, isocitrate DH, α-KG DH; Ca²⁺ and ADP activate.',
        'Amphibolic; anaplerotic pyruvate carboxylase. Succinyl CoA → haem; α-KG → glutamate.',
      ] },
    ],
  },
  quiz: [
    ['The Krebs cycle takes place in the', 'Mitochondrial matrix', ['Cytosol', 'Nucleus', 'Endoplasmic reticulum'], 'Succinate dehydrogenase alone is bound to the inner membrane.', 'Overview'],
    ['The Krebs cycle is the second stage of', 'Cellular respiration', ['Glycogenesis', 'Gluconeogenesis', 'Protein synthesis on ribosomes'], 'Glycolysis → TCA cycle → electron transport chain.', 'Overview'],
    ['Hans Adolf Krebs was born in', '1900', ['1850', '1937', '1981'], 'He lived 1900–1981.', 'Overview'],
    ['Pyruvate dehydrogenase converts pyruvate into', 'Acetyl CoA', ['Oxaloacetate', 'Lactate', 'Citrate'], 'An irreversible oxidative decarboxylation in the mitochondrion.', 'PDH complex'],
    ['The cofactor of E1 (pyruvate dehydrogenase) is', 'Thiamine pyrophosphate', ['Flavin adenine dinucleotide', 'Lipoamide', 'NAD⁺'], 'E2 uses lipoamide and CoA; E3 uses FAD and NAD⁺.', 'PDH complex'],
    ['Coenzyme A is derived from the vitamin', 'Pantothenic acid', ['Thiamine', 'Riboflavin', 'Niacin (nicotinic acid)'], 'TPP: thiamine; FAD: riboflavin; NAD: niacin.', 'PDH complex'],
    ['Beriberi is caused by deficiency of', 'Thiamine', ['Niacin', 'Riboflavin', 'Vitamin C'], 'Pyruvate cannot be oxidised; neurological and cardiac disease follow.', 'PDH complex'],
    ['Pyruvate dehydrogenase deficiency leads to', 'Raised lactate and pyruvate with acidosis', ['Low blood lactate and alkalosis', 'Fructose in the urine', 'Accumulation of glycogen in the muscles'], 'It is rare and causes neurological disorders.', 'PDH complex'],
    ['The first reaction of the cycle joins acetyl CoA with', 'Oxaloacetate', ['Citrate', 'Succinate', 'α-Ketoglutarate'], 'Citrate synthase forms citrate (C6).', 'Reactions'],
    ['Fluorocitrate halts the Krebs cycle by inhibiting', 'Aconitase', ['Citrate synthase', 'Fumarase', 'Malate dehydrogenase'], 'Fluoroacetate → fluoroacetyl CoA → fluorocitrate, which binds aconitase tightly.', 'Inhibitors'],
    ['The intermediate formed transiently in the isocitrate dehydrogenase reaction is', 'Oxalosuccinate', ['Cis-aconitate', 'Fumarate', 'Succinyl CoA'], 'Isocitrate is oxidised to oxalosuccinate, which is decarboxylated to α-KG.', 'Reactions'],
    ['The α-ketoglutarate dehydrogenase complex resembles', 'The pyruvate dehydrogenase complex', ['Citrate synthase', 'Succinate dehydrogenase', 'The mitochondrial ATP synthase'], 'It uses the same five coenzymes and makes the second NADH.', 'Reactions'],
    ['The only substrate-level phosphorylation in the Krebs cycle is catalysed by', 'Succinyl CoA synthetase', ['Succinate dehydrogenase', 'Isocitrate dehydrogenase', 'Malate dehydrogenase'], 'It makes GTP (or ATP).', 'Reactions'],
    ['Malonate inhibits succinate dehydrogenase', 'Competitively', ['Non-competitively', 'Irreversibly by covalent binding', 'By binding its FAD'], 'Malonate resembles succinate; succinate accumulates.', 'Inhibitors'],
    ['Which Krebs cycle enzyme is also Complex II of the electron transport chain?', 'Succinate dehydrogenase', ['Malate dehydrogenase', 'Fumarase', 'Aconitase'], 'It is bound to the inner mitochondrial membrane.', 'Reactions'],
    ['Fumarase converts fumarate into', 'L-malate', ['Oxaloacetate', 'Succinate', 'Maleate'], 'Hydration across the double bond; it does not act on maleate.', 'Reactions'],
    ['The third NADH of the cycle is made by', 'Malate dehydrogenase', ['Succinate dehydrogenase', 'Fumarase', 'Citrate synthase'], 'It also regenerates oxaloacetate.', 'Reactions'],
    ['One acetyl CoA oxidised in the cycle yields about', '10 ATP', ['2 ATP', '32 ATP', '38 ATP'], '3 NADH × 2.5 + FADH₂ × 1.5 + 1 GTP.', 'Energy'],
    ['Per turn, the Krebs cycle produces', '3 NADH, 1 FADH₂ and 1 GTP', ['2 NADH, 2 FADH₂ and 2 GTP', '1 NADH, 3 FADH₂ and 1 ATP', '4 NADH and 2 GTP only'], 'Plus 2 CO₂.', 'Energy'],
    ['A high NADH/NAD⁺ ratio', 'Inhibits three key enzymes of the cycle', ['Activates citrate synthase', 'Has no effect on the rate of the cycle', 'Activates PDH phosphatase'], 'Citrate synthase, isocitrate DH and α-KG DH are inhibited.', 'Regulation'],
    ['During strenuous exercise, the Krebs cycle speeds up because of', 'Rising Ca²⁺ and falling ATP', ['Rising ATP and NADH', 'Falling ADP and Ca²⁺', 'Rising citrate levels in the matrix'], 'Ca²⁺ activates isocitrate and α-KG dehydrogenases; ADP activates citrate synthase.', 'Regulation'],
    ['PDH phosphatase deficiency causes', 'Lactic acidosis', ['Beriberi', 'Essential fructosuria', 'Hyperglycaemia'], 'PDH stays phosphorylated and inactive; glucose ends as lactic acid.', 'Regulation'],
    ['The Krebs cycle is called amphibolic because it', 'Serves both catabolism and anabolism', ['Works with and without oxygen', 'Runs in both directions equally', 'Occurs in both cytosol and mitochondria'], 'It oxidises fuel and supplies biosynthetic precursors.', 'Amphibolic'],
    ['The immediate precursor for haem synthesis is', 'Succinyl CoA', ['α-Ketoglutarate', 'Citrate', 'Fumarate'], 'Succinyl CoA + glycine begin porphyrin synthesis.', 'Amphibolic'],
    ['α-Ketoglutarate is the precursor of the amino acid', 'Glutamate', ['Aspartate', 'Alanine', 'Glycine'], 'Oxaloacetate gives aspartate; pyruvate gives alanine.', 'Amphibolic'],
    ['The key mammalian anaplerotic enzyme is', 'Pyruvate carboxylase', ['Pyruvate kinase', 'Citrate synthase', 'Lactate dehydrogenase'], 'It makes oxaloacetate from pyruvate when acetyl CoA is high.', 'Anaplerotic'],
    ['Why can acetyl CoA not give net glucose in humans?', 'Both its carbons are lost as CO₂ each turn', ['It cannot enter the mitochondrion', 'It is converted directly into ketones', 'It inhibits pyruvate carboxylase in the liver'], 'Humans lack the glyoxylate cycle.', 'Anaplerotic'],
    ['The glyoxylate cycle occurs in', 'Glyoxysomes of plants and some bacteria', ['Human liver mitochondria', 'The cytosol of red blood cells', 'Peroxisomes of the human kidney'], 'It lets acetyl CoA be used for carbohydrate synthesis.', 'Anaplerotic'],
  ],
};
