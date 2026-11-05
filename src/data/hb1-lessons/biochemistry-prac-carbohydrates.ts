// Biochemistry 1 practicals → Qualitative Tests for Carbohydrates. From "06 CARBOHYDRATES.pdf"
// (Department of Molecular Medicine, KNUST; HB1 Biochemistry 1 practical class), in the owner's
// Telegram downloads (2026-11-05). The colour chemistry behind each test is explained from
// standard practical texts, in our own words.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const biochemistryPracCarbohydrates: Hb1Lesson = {
  id: 'biochemistry-prac-carbohydrates',
  order: 105,
  section: 'Biochem practicals',
  title: 'Practical 5: Qualitative Tests for Carbohydrates',
  summary: 'Practical · What carbohydrates are and how they are classified, reducing and non-reducing sugars, clinical uses of sugar tests, and the Molisch, Benedict’s, Barfoed’s, Seliwanoff’s and Bial’s tests: principles, procedures and results',
  minutes: 20,
  source: '06 CARBOHYDRATES.pdf (Department of Molecular Medicine, KNUST)',
  quizId: 'prcarb',
  quizName: 'Quiz · Practical 5: Carbohydrate Tests (lesson)',
  sections: [
    {
      id: 'carb-basics',
      title: 'Carbohydrates and how they are grouped',
      kicker: 'Aldoses, ketoses, and sugars by size',
      blocks: [
        { k: 'p', x: 'The objective is to <b>identify the carbohydrates in an unknown solution</b> with chemical tests. Carbohydrates (saccharides) are the most abundant biomolecules on Earth: <b>polyhydroxy aldehydes or polyhydroxy ketones</b>, “hydrates of carbon” with the general formula <b>C<sub>n</sub>(H<sub>2</sub>O)<sub>n</sub></b>.' },
        { k: 'cards', items: [
          { title: 'Aldose', blocks: [{ k: 'p', x: 'Has a <b>terminal aldehyde</b> group plus –OH groups: glucose, galactose, ribose.' }] },
          { title: 'Ketose', blocks: [{ k: 'p', x: 'Has a <b>carbonyl (keto) group between two R groups</b> bearing –OH: fructose.' }] },
        ] },
        { k: 'table', head: ['Group', 'Units', 'Examples'], rows: [
          { c: ['<b>Monosaccharides</b> (simple sugars)', '1', 'Glucose (dextrose), fructose (levulose), galactose, ribose, xylose'] },
          { c: ['<b>Disaccharides</b>', '2', '<b>Sucrose</b> = glucose + fructose (table sugar); <b>lactose</b> = glucose + galactose (milk); <b>maltose</b> = glucose + glucose (from starch digestion)'] },
          { c: ['<b>Oligosaccharides</b>', '3–9', '<b>Raffinose</b> (glucose + galactose + fructose), verbascose'] },
          { c: ['<b>Polysaccharides</b>', 'more than 9', 'Starch, cellulose, glycogen'] },
        ] },
        { k: 'p', x: 'Complex carbohydrates are broken into smaller sugars by <b>hydrolysis</b>. Monosaccharides are also named by their number of carbons: <b>trioses</b> (3), <b>tetroses</b> (4), <b>pentoses</b> (5), <b>hexoses</b> (6), <b>heptoses</b> (7).' },
        { k: 'p', x: 'Carbohydrates fuel cells (D-glucose), give <b>structural support</b> in cell walls, are attached to proteins and lipids to modify their function (for example in <b>cell signalling</b>), and as <b>ribose and deoxyribose</b> form part of RNA and DNA.' },
      ],
    },
    {
      id: 'carb-reducing',
      title: 'Reducing and non-reducing sugars',
      kicker: 'Is the anomeric carbon free?',
      blocks: [
        { k: 'p', x: 'If the oxygen on a sugar’s <b>anomeric carbon</b> (the former carbonyl carbon) is <b>not attached</b> to another structure, the ring can open to a free aldehyde or ketone that donates electrons: the sugar is a <b>reducing sugar</b>. <b>All monosaccharides</b> are reducing. <b>Lactose</b> and <b>maltose</b> keep one free anomeric carbon and are reducing; in <b>sucrose</b> both anomeric carbons are tied up in the bond, so it is <b>non-reducing</b> and does not react with Benedict’s solution. Polysaccharides such as <b>starch</b> are effectively non-reducing.' },
        { k: 'box', title: 'Clinical significance', tone: 'life', blocks: [{ k: 'ul', items: [
          '<b>Diabetes mellitus</b>: blood glucose concentration.',
          '<b>Seizures</b>: blood glucose is checked for hyper- or hypoglycaemia.',
          '<b>Lactose intolerance</b>: lactose in the stool.',
          '<b>Semen analysis</b>: seminal <b>fructose</b> (WHO normal about <b>13 µmol per sample</b>); its absence suggests a problem with the <b>seminal vesicles</b>.',
        ] }] },
      ],
    },
    {
      id: 'carb-tests',
      title: 'The five tests',
      kicker: 'Principles, methods and positive results',
      blocks: [
        { k: 'p', x: 'Each test uses <b>0.5 mL</b> of each test solution in a separate tube.' },
        { k: 'step', n: '1', title: 'Molisch test: is it a carbohydrate?', blocks: [
          { k: 'p', x: '<b>Principle</b>: concentrated <b>H<sub>2</sub>SO<sub>4</sub></b> dehydrates pentoses to <b>furfural</b> and hexoses to <b>5-hydroxymethylfurfural</b>, which react with <b>α-naphthol</b> (or thymol) in the reagent to give a <b>purple</b> product. A general test for all carbohydrates.' },
          { k: 'p', x: '<b>Method</b>: add 3 drops of Molisch reagent (alcoholic α-naphthol), mix, tilt the tube and run about 1 mL of concentrated H<sub>2</sub>SO<sub>4</sub> slowly down the side to form a layer; leave 5 minutes <b>without mixing</b>. <b>Positive: a purple ring</b> at the junction.' },
        ] },
        { k: 'step', n: '2', title: 'Benedict’s test: is it a reducing sugar?', blocks: [
          { k: 'p', x: '<b>Principle</b>: in an alkaline medium (sodium citrate and sodium carbonate), the <b>Cu<sup>2+</sup></b> of copper sulphate is reduced by the aldehyde or ketone group of a reducing sugar; the sugar is oxidised to a carboxylic acid and red <b>copper(I) oxide</b> precipitates.' },
          { k: 'p', x: '<b>Method</b>: add 1 mL Benedict’s reagent, boil all tubes together for 1–2 minutes, cool and look. <b>Positive: a brick-red precipitate</b> (green, yellow and orange mean smaller amounts).' },
        ] },
        { k: 'step', n: '3', title: 'Barfoed’s test: monosaccharide or disaccharide?', blocks: [
          { k: 'p', x: '<b>Principle</b>: also a copper reduction, but in <b>acid</b> (cupric acetate and sodium acetate in weak acetic acid), where sugars reduce copper less vigorously. <b>Monosaccharides</b> reduce Cu<sup>2+</sup> on boiling within a few minutes; <b>disaccharides do not</b>. Prolonged boiling may hydrolyse a disaccharide and give a slight positive.' },
          { k: 'p', x: '<b>Method</b>: add 1 mL Barfoed’s reagent, mix and put all tubes in boiling water; note the minutes until a <b>red Cu<sub>2</sub>O precipitate</b> appears, removing each positive tube; after 10 minutes remove the rest, let them stand and look for any precipitate. Record in a table.' },
        ] },
        { k: 'step', n: '4', title: 'Seliwanoff’s test: ketose or aldose?', blocks: [
          { k: 'p', x: '<b>Principle</b>: <b>ketoses form furfurals faster than aldoses</b> in hot acid; the furfural reacts with resorcinol in the reagent. The <b>rate</b> of colour formation distinguishes <b>fructose</b> from <b>glucose</b>.' },
          { k: 'p', x: '<b>Method</b>: add 1 mL Seliwanoff’s reagent, mix and boil for 1 minute; record; continue heating to 5 minutes. <b>Positive: a cherry-red colour</b> appearing quickly (sucrose also reacts, because acid splits it to give fructose).' },
        ] },
        { k: 'step', n: '5', title: 'Bial’s test: pentose or hexose?', blocks: [
          { k: 'p', x: '<b>Principle</b>: carbohydrates are dehydrated to furfurals, which react with <b>orcinol</b>. <b>Pentoses</b> give a distinctive <b>bluish</b> colour; <b>hexoses</b> give a <b>brown or grey</b> one.' },
          { k: 'p', x: '<b>Method</b>: add 1 mL Bial’s reagent, mix and boil for 1 minute; record; continue for 5 minutes and record again.' },
        ] },
        { k: 'table', head: ['Test', 'Tells you', 'Positive result'], rows: [
          { c: ['<b>Molisch</b>', 'Carbohydrate vs lipid or protein', 'Purple ring'] },
          { c: ['<b>Benedict’s</b>', 'Reducing sugar present', 'Brick-red precipitate'] },
          { c: ['<b>Barfoed’s</b>', 'Monosaccharide vs disaccharide', 'Red precipitate within a few minutes'] },
          { c: ['<b>Seliwanoff’s</b>', 'Ketose vs aldose', 'Rapid cherry-red colour'] },
          { c: ['<b>Bial’s</b>', 'Pentose vs hexose', 'Blue (pentose); brown/grey (hexose)'] },
        ] },
        { k: 'box', title: 'Working out an unknown', tone: 'recall', blocks: [{ k: 'p', x: 'Run the tests in order: Molisch positive → a carbohydrate. Benedict’s negative → non-reducing (sucrose or starch; iodine would separate them). Benedict’s positive → reducing; then Barfoed’s quickly positive → a monosaccharide, slow or negative → a reducing disaccharide (lactose, maltose). Among monosaccharides, Seliwanoff’s fast cherry-red → fructose; Bial’s blue → a pentose (ribose, xylose).' }] },
      ],
    },
  ],
  quiz: [
    ['The general test for all carbohydrates is the', 'Molisch test', ['Benedict’s test', 'Barfoed’s test', 'Bial’s test'], 'It gives a purple ring.', 'Tests'],
    ['A positive Molisch test is', 'A purple ring at the junction', ['A brick-red copper precipitate', 'A cherry-red colour', 'A blue-green colour'], 'H2SO4 is layered under the sample.', 'Tests'],
    ['In the Molisch test, hexoses are dehydrated by sulphuric acid to', '5-Hydroxymethylfurfural', ['Furfural only', 'Orcinol and α-naphthol', 'Resorcinol and furfural'], 'Pentoses give furfural.', 'Tests'],
    ['Benedict’s test detects', 'Reducing sugars', ['All polysaccharides', 'Ketoses only', 'Pentoses only'], 'Copper(II) is reduced to red copper(I) oxide.', 'Tests'],
    ['Which sugar gives a negative Benedict’s test?', 'Sucrose', ['Glucose', 'Lactose', 'Maltose'], 'Both anomeric carbons are bound.', 'Reducing sugars'],
    ['Barfoed’s test distinguishes', 'Monosaccharides from disaccharides', ['Aldoses from ketoses (by rate)', 'Pentoses from hexoses', 'Sugars from proteins and lipids'], 'It is a copper reduction in acid.', 'Tests'],
    ['Barfoed’s reagent differs from Benedict’s because it is', 'Acidic', ['Strongly alkaline', 'Free of copper', 'An iodine solution'], 'Cupric acetate in weak acetic acid.', 'Tests'],
    ['Seliwanoff’s test is used to tell fructose from', 'Glucose', ['Sucrose', 'Ribose', 'Starch'], 'Ketoses form furfurals faster.', 'Tests'],
    ['A rapid cherry-red colour in Seliwanoff’s test indicates a', 'Ketose', ['Pentose', 'Aldose', 'Polysaccharide'], 'Fructose is the classic ketose.', 'Tests'],
    ['Bial’s test gives a bluish colour with', 'Pentoses', ['Hexoses', 'Disaccharides', 'Ketoses'], 'Hexoses give brown or grey.', 'Tests'],
    ['Bial’s reagent contains', 'Orcinol', ['α-Naphthol', 'Resorcinol', 'Copper sulphate'], 'Molisch uses α-naphthol; Seliwanoff resorcinol.', 'Tests'],
    ['Lactose is made of', 'Glucose and galactose', ['Glucose and fructose', 'Two glucose units', 'Galactose and fructose'], 'Sucrose is glucose and fructose.', 'Classification'],
    ['Raffinose is an example of', 'An oligosaccharide', ['A disaccharide', 'A polysaccharide', 'A pentose monosaccharide'], 'A trisaccharide of three sugars.', 'Classification'],
    ['Absence of fructose in semen suggests a problem with the', 'Seminal vesicles', ['Prostate gland', 'Testes', 'Bulbourethral glands'], 'The seminal vesicles add fructose.', 'Clinical'],
    ['Carbohydrates have the general formula', 'Cn(H2O)n', ['CnH2n+2', 'CnH2nO', '(CH3)nOH'], 'Hydrates of carbon.', 'Classification'],
    ['Fructose is classed as a', 'Ketohexose', ['Aldohexose', 'Aldopentose', 'Ketopentose'], 'Glucose is an aldohexose.', 'Classification'],
    ['Ribose is a', 'Pentose', ['Hexose', 'Triose', 'Heptose'], 'Five carbons.', 'Classification'],
    ['Maltose is made of', 'Two glucose units', ['Glucose and galactose', 'Glucose and fructose', 'Two galactose units'], 'It comes from starch digestion.', 'Classification'],
    ['All monosaccharides are reducing sugars because they have', 'A free carbonyl group', ['A glycosidic bond', 'No hydroxyl groups', 'A phosphate group'], 'The anomeric carbon is free.', 'Reducing sugars'],
    ['In Benedict’s test the red precipitate is', 'Copper(I) oxide', ['Copper(II) sulphate', 'Sodium citrate', 'Cupric acetate'], 'Cu2+ is reduced to Cu+.', 'Tests'],
    ['Benedict’s reagent is made alkaline by', 'Sodium carbonate', ['Acetic acid', 'Sulphuric acid', 'Orcinol'], 'With sodium citrate to keep copper in solution.', 'Tests'],
  ],
};
