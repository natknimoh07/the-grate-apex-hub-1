// Biochemistry 1 → Fructose and Galactose Metabolism. From "4. Fructose Metabolism and
// Fructosuria.pptx" (C. O. Obirikorang, KNUST; HB1 Biochemistry 1 theory). Rewrites the original
// database lesson biochemistry-05 with the same id, so progress is kept; practises the course's
// Quiz 5 and the past questions on fructose and galactose. Every fact on the slides is here; the
// teaching text is in our own words.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostxBio } from '@/data/hb1-lessons/pictures';

export const biochemistryFructoseGalactose: Hb1Lesson = {
  id: 'biochemistry-05',
  order: 5,
  title: 'Fructose and Galactose Metabolism',
  summary: 'C. O. Obirikorang · How fructose and galactose are absorbed and turned into glycolytic intermediates, the polyol (sorbitol) pathway and diabetic complications, and the inherited disorders: essential fructosuria, hereditary fructose intolerance and the galactosaemias',
  minutes: 28,
  source: '4. Fructose Metabolism and Fructosuria.pptx (C. O. Obirikorang)',
  quizId: 'frg',
  quizName: 'Quiz · Fructose & Galactose (lesson)',
  pastSets: ['s5'],
  pastTopics: ['fructose-and-galactose'],
  sections: numberFigures([
    {
      id: 'frg-fructose',
      title: 'Fructose: sources and absorption',
      kicker: 'Fruit sugar',
      blocks: [
        { k: 'p', x: '<b>Fructose</b> is one of the three dietary monosaccharides (with glucose and galactose). It is a <b>6-carbon polyhydroxyketone</b>, an <b>isomer of glucose</b>, and makes up about <b>20%</b> of our carbohydrate intake.' },
        { k: 'ul', items: [
          '<b>Describe</b> how fructose is absorbed and metabolised, and why it is metabolised faster than glucose.',
          '<b>Explain</b> the polyol pathway and its role in diabetic complications.',
          '<b>Describe</b> essential fructosuria and hereditary fructose intolerance.',
          '<b>Describe</b> galactose metabolism and the galactosaemias.',
        ] },
        ostxBio('figure-03-02-02.jpg', 725, 550, 'Glucose, galactose and fructose: three hexoses with the same formula, C₆H₁₂O₆.', 'Glucose and galactose are aldoses (a CHO group at carbon 1) that differ only at carbon 4; fructose is a ketose (C=O at carbon 2). Same atoms, different arrangement: structural isomers.'),
        { k: 'ul', items: [
          'The major dietary source is <b>sucrose</b> (cane sugar), with equal amounts of fructose and glucose; it is also <b>free</b> in honey and many fruits, berries, flowers and root vegetables. Commercially it comes from sugar cane, sugar beet and corn.',
          'It can be fermented by yeast or bacteria: yeast enzymes turn glucose or fructose into <b>ethanol and CO<sub>2</sub></b>.',
          'Free fructose is absorbed directly; the mechanism is not fully understood (uptake against a gradient suggests some active transport), but it is <b>not sodium-dependent</b>: it enters intestinal cells by facilitated diffusion through <b>GLUT5</b>, and leaves them into the blood, with glucose and galactose, through <b>GLUT2</b>. The liver takes it up through <b>GLUT2</b>.',
          'Fructose entry into cells is <b>not controlled by insulin</b>, unlike glucose entry into most tissues, and fructose does <b>not stimulate insulin</b> secretion. Fructose transport is slower than glucose transport.',
        ] },
        ostxBio('figure-03-02-05-fda3.jpg', 800, 1180, 'The common disaccharides: maltose, lactose and sucrose.', 'Sucrose = glucose + fructose; lactose = glucose + galactose. These are the main dietary sources of fructose and galactose, freed in the gut by sucrase and lactase.'),
      ],
    },
    {
      id: 'frg-fructolysis',
      title: 'Fructolysis',
      kicker: 'A fast lane past PFK',
      blocks: [
        { k: 'p', x: '<b>Fructolysis</b> is the metabolism of dietary fructose. Unlike glucose, which is used all over the body, fructose is metabolised <b>almost entirely in the liver</b>. Its products are directed to <b>liver glycogen</b> and <b>de novo lipogenesis</b> (fatty acids, triglycerides), even though it shares many intermediates with glycolysis.' },
        { k: 'step', n: '1', title: 'Fructokinase', blocks: [{ k: 'p', x: 'Fructose is phosphorylated to <b>fructose 1-phosphate</b> by <b>fructokinase</b> (found in liver, kidney and intestine), which traps it in the liver. Almost all fructose in the human liver goes this way. Hexokinase can make fructose 6-phosphate, but its affinity for fructose is low, so that route is minor.' }] },
        { k: 'step', n: '2', title: 'Aldolase B', blocks: [{ k: 'p', x: '<b>Fructose 1-phosphate aldolase (aldolase B)</b> splits fructose 1-phosphate into <b>dihydroxyacetone phosphate (DHAP)</b> and <b>glyceraldehyde</b>.' }] },
        { k: 'step', n: '3', title: 'Into the main pathways', blocks: [{ k: 'ul', items: [
          'DHAP → glyceraldehyde 3-phosphate (<b>triose phosphate isomerase</b>), or → glycerol 3-phosphate (<b>glycerol 3-phosphate dehydrogenase</b>).',
          'Glyceraldehyde → glyceraldehyde 3-phosphate (<b>glyceraldehyde kinase</b>, triokinase), or → glycerol 3-phosphate (the slide names glyceraldehyde 3-phosphate dehydrogenase for this step).',
          'From here the trioses can go to <b>gluconeogenesis and glycogen</b>, or be oxidised to pyruvate and reduced to lactate.',
        ] }] },
        { k: 'box', title: 'Why fructose is metabolised faster than glucose', tone: 'gold', blocks: [{ k: 'p', x: 'Fructose enters glycolysis <b>below phosphofructokinase</b>, so it skips the rate-limiting, regulated step. High fructose intake therefore floods the liver with trioses, raising <b>acetyl CoA</b> and <b>lipogenesis</b>: fatty acids, triacylglycerol and VLDL.' }] },
      ],
    },
    {
      id: 'frg-polyol',
      title: 'The polyol (sorbitol) pathway',
      kicker: 'Glucose → sorbitol → fructose',
      blocks: [
        { k: 'step', n: '1', title: 'Aldose reductase', blocks: [{ k: 'p', x: 'Reduces <b>glucose to sorbitol</b> (glucitol), using <b>NADPH</b>.' }] },
        { k: 'step', n: '2', title: 'Sorbitol dehydrogenase', blocks: [{ k: 'p', x: 'Oxidises <b>sorbitol to fructose</b>, using <b>NAD<sup>+</sup></b>.' }] },
        { k: 'ul', items: [
          'The pathway is <b>absent in the liver</b> (aldose reductase is absent there).',
          'Aldose reductase is found in the <b>lens and retina</b>, <b>kidney</b>, <b>placenta</b>, <b>Schwann cells</b> of peripheral nerves, <b>erythrocytes</b> and <b>seminal vesicles</b>.',
          'Its activity rises with glucose concentration, so it is <b>higher in uncontrolled diabetes</b>.',
          'In the <b>seminal vesicles</b> it turns glucose into fructose, which is secreted in semen: fructose is the <b>preferred fuel of sperm</b>.',
        ] },
        { k: 'h', x: 'The sorbitol pathway in diabetes', l: 3 },
        { k: 'p', x: 'In hyperglycaemia, lots of glucose enters cells that do not need insulin. The lens, retina, nerve cells and kidney have <b>high aldose reductase</b> activity and plenty of NADPH, so they convert glucose to sorbitol rapidly. But their <b>sorbitol dehydrogenase is low or absent</b>, so sorbitol is not turned into fructose. Sorbitol <b>cannot cross the cell membrane</b> and accumulates; being hydrophilic, it draws water in osmotically and the cells swell.' },
        { k: 'p', x: 'Sorbitol accumulation is believed to cause many diabetic complications: <b>cataract, peripheral neuropathy, nephropathy</b>; most of them may share this common mechanism.' },
      ],
    },
    {
      id: 'frg-fructose-disorders',
      title: 'Disorders of fructose metabolism',
      kicker: 'One harmless, one dangerous',
      blocks: [
        { k: 'table', head: ['', 'Essential fructosuria', 'Hereditary fructose intolerance (fructosaemia)'], rows: [
          { c: ['Missing enzyme', '<b>Hepatic fructokinase</b>', '<b>Aldolase B</b> (fructose 1-phosphate aldolase)'] },
          { c: ['Inheritance', '<b>Autosomal recessive</b>', 'Hereditary; as common as <b>1 in 20 000</b> in some European countries'] },
          { c: ['What happens', 'Fructose cannot be phosphorylated, so it is not trapped: it leaves the liver, plasma fructose rises above the <b>renal threshold</b>, and fructose appears in the <b>urine</b>', '<b>Fructose 1-phosphate accumulates</b> in liver, kidney and small intestine, trapping phosphate'] },
          { c: ['Effect', '<b>Benign and asymptomatic</b>; the amount lost depends on fructose intake and is small', 'Phosphate is unavailable for <b>glycogen phosphorylase</b>, so glycogenolysis and gluconeogenesis are inhibited: <b>severe hypoglycaemia</b> after fructose'] },
          { c: ['Signs', 'None', '<b>Vomiting, hypoglycaemia, jaundice, haemorrhage, hepatomegaly, hyperuricaemia, kidney failure</b>'] },
          { c: ['Treatment', '<b>None needed</b>', '<b>Fructose-free diet</b>: good prognosis if kept to'] },
        ] },
        { k: 'h', x: 'Too much fructose', l: 3 },
        { k: 'p', x: 'Even in healthy people, a large fructose load is phosphorylated quickly by fructokinase, but <b>aldolase B is relatively slow</b>, so fructose 1-phosphate builds up and ties up inorganic phosphate: <b>sequestering of phosphate</b>. With less P<sub>i</sub>, the liver makes less ATP from ADP, and accumulated ADP and AMP are broken down to <b>uric acid</b>. High fructose intake over a long time is therefore linked with raised blood uric acid and <b>gout</b>.' },
      ],
    },
    {
      id: 'frg-galactose',
      title: 'Galactose metabolism',
      kicker: 'From milk sugar to glucose',
      blocks: [
        { k: 'p', x: 'The main dietary source of galactose is <b>lactose</b> (milk and milk products), which <b>lactase</b> (β-galactosidase) of the intestinal mucosa splits into galactose and glucose. Galactose is also in sugar beet, gums and mucilages, and is made in the body from the lysosomal breakdown of <b>glycoproteins and glycolipids</b> (it is part of them). Like fructose, its entry into cells is <b>not insulin-dependent</b>.' },
        { k: 'p', x: 'The <b>only</b> way to catabolise galactose is to convert it to glucose: a <b>slow</b> process that happens <b>only in the liver</b>. The liver’s ability to do it can be used as a <b>liver function test</b>.' },
        { k: 'step', n: '1', title: 'Galactokinase', blocks: [{ k: 'p', x: '<b>Galactose + ATP → galactose 1-phosphate + ADP</b> (Mg<sup>2+</sup>).' }] },
        { k: 'step', n: '2', title: 'Galactose 1-phosphate uridyltransferase', blocks: [{ k: 'p', x: 'Galactose 1-phosphate swaps with the glucose 1-phosphate of <b>UDP-glucose</b>, giving <b>UDP-galactose</b> and freeing <b>glucose 1-phosphate</b>.' }] },
        { k: 'step', n: '3', title: 'UDP-galactose 4-epimerase', blocks: [{ k: 'p', x: 'Converts <b>UDP-galactose back to UDP-glucose</b>, so UDP-glucose acts like a <b>coenzyme</b> in the conversion.' }] },
        { k: 'step', n: '4', title: 'Onward', blocks: [{ k: 'p', x: 'Glucose 1-phosphate goes to <b>glycogenesis</b>, or <b>phosphoglucomutase</b> makes it glucose 6-phosphate, which enters glycolysis or is turned into glucose by <b>glucose 6-phosphatase</b>.' }] },
      ],
    },
    {
      id: 'frg-galactosaemia',
      title: 'Disorders of galactose metabolism',
      kicker: 'Galactosaemias and cataract',
      blocks: [
        { k: 'table', head: ['', 'Galactokinase deficiency (galactosaemia type 2, GALK)', 'Classical galactosaemia'], rows: [
          { c: ['Missing enzyme', '<b>Galactokinase</b>', '<b>Galactose 1-phosphate uridyltransferase</b>'] },
          { c: ['Inheritance', 'Autosomal recessive', 'Autosomal recessive; rare, congenital, in infants'] },
          { c: ['Accumulates', '<b>Galactose and galactitol</b>', '<b>Galactose, galactose 1-phosphate and galactitol</b>; galactosaemia and galactosuria'] },
          { c: ['Main features', '<b>Cataracts</b> in the first weeks or months of life', 'Weight loss in infants, <b>hepatosplenomegaly, jaundice, mental retardation</b>; in severe cases cataract, aminoaciduria, albuminuria'] },
          { c: ['Diagnosis and treatment', '—', 'Measure the transferase in <b>erythrocytes</b>; a diet free of <b>galactose and lactose</b>'] },
        ] },
        { k: 'p', x: 'Why cataract? Excess galactose is diverted by <b>aldose reductase</b> (in lens, nervous tissue and seminal vesicles) into <b>galactitol</b>, a route that is insignificant normally. Like sorbitol, galactitol <b>cannot leave the lens</b>, so water follows it in and the lens is damaged osmotically.' },
        { k: 'box', title: 'Pattern to remember', tone: 'recall', blocks: [{ k: 'p', x: 'Block at the <b>first</b> enzyme (fructokinase, galactokinase) → the sugar just leaks into urine or turns into a polyol (mild). Block at the <b>second</b> enzyme (aldolase B, uridyltransferase) → a phosphorylated sugar is trapped in cells (severe, liver damage).' }] },
      ],
    },
  ]),
  extras: {
    facts: [
      { h: 'Key points', lines: [
        'Fructose ≈ 20% of carbohydrate intake; GLUT5 into gut cells, GLUT2 out and into liver; insulin-independent.',
        'Fructokinase → fructose 1-P → aldolase B → DHAP + glyceraldehyde. Bypasses PFK, so faster; feeds lipogenesis.',
        'Polyol: aldose reductase (NADPH) → sorbitol → sorbitol dehydrogenase (NAD⁺) → fructose. Absent in liver.',
        'Essential fructosuria: fructokinase, benign. HFI: aldolase B, hypoglycaemia; fructose-free diet.',
        'Galactose: galactokinase → Gal-1-P → uridyltransferase (UDP-Glc) → Glc-1-P; epimerase. Only in liver.',
        'GALK deficiency: cataract. Classical galactosaemia: uridyltransferase; liver, brain, lens.',
      ] },
    ],
  },
  quiz: [
    ['The major dietary source of fructose is', 'Sucrose', ['Lactose', 'Maltose', 'Starch'], 'Sucrose contains equal amounts of glucose and fructose.', 'Fructose'],
    ['About what share of our carbohydrate intake is fructose?', '20%', ['5%', '50%', '80%'], 'Fructose forms about 20% of carbohydrate intake.', 'Fructose'],
    ['Fructose enters intestinal cells through', 'GLUT5', ['GLUT4', 'SGLT1', 'GLUT1'], 'Facilitated diffusion, not sodium-dependent; it leaves by GLUT2.', 'Fructose'],
    ['Fructose uptake by the liver is', 'Insulin-independent, through GLUT2', ['Insulin-dependent, through GLUT4', 'Sodium-dependent, through SGLT1', 'By endocytosis of fructose vesicles'], 'Fructose does not need insulin and does not stimulate its release.', 'Fructose'],
    ['Fructose is metabolised almost entirely in the', 'Liver', ['Brain', 'Skeletal muscle', 'Red blood cells'], 'Unlike glucose, which is used all over the body.', 'Fructolysis'],
    ['The main first step of fructose metabolism in the liver is', 'Fructokinase making fructose 1-phosphate', ['Hexokinase making fructose 6-phosphate', 'Aldolase A splitting fructose', 'Glucokinase making glucose from fructose'], 'Hexokinase has low affinity for fructose, so that route is minor.', 'Fructolysis'],
    ['Aldolase B splits fructose 1-phosphate into', 'DHAP and glyceraldehyde', ['Two molecules of pyruvate', 'Glucose and galactose', 'Sorbitol and fructose'], 'Glyceraldehyde is then phosphorylated by glyceraldehyde kinase.', 'Fructolysis'],
    ['Fructose is metabolised faster than glucose because it', 'Bypasses the phosphofructokinase step', ['Is absorbed by active transport', 'Needs insulin to enter cells', 'Is converted to glucose first in the gut'], 'Skipping the rate-limiting step lets it flood into glycolysis.', 'Fructolysis'],
    ['High fructose intake increases', 'Lipogenesis and VLDL synthesis', ['Insulin secretion', 'Ketone body excretion in urine', 'Muscle glycogen use'], 'More acetyl CoA from fructose feeds fatty acid and triglyceride synthesis.', 'Fructolysis'],
    ['Aldose reductase converts glucose into', 'Sorbitol', ['Fructose', 'Galactitol', 'Gluconic acid'], 'It uses NADPH; sorbitol dehydrogenase then makes fructose.', 'Polyol pathway'],
    ['The polyol pathway is absent in the', 'Liver', ['Lens', 'Seminal vesicles', 'Schwann cells'], 'Aldose reductase is absent in the liver.', 'Polyol pathway'],
    ['In the seminal vesicles, the sorbitol pathway provides', 'Fructose as fuel for sperm', ['Glucose for the prostate', 'Galactose for the testes', 'Sorbitol to increase semen volume'], 'Fructose is the preferred fuel of sperm.', 'Polyol pathway'],
    ['Sorbitol damages lens and nerve cells in diabetes because it', 'Cannot leave the cell and draws in water', ['Is converted rapidly to fructose', 'Inhibits insulin release from β cells', 'Is excreted too quickly in the urine'], 'Sorbitol dehydrogenase is low there, so sorbitol accumulates.', 'Polyol pathway'],
    ['Which diabetic complication is linked to the sorbitol pathway?', 'Cataract', ['Hypertension', 'Hypothyroidism', 'Anaemia'], 'Also peripheral neuropathy and nephropathy.', 'Polyol pathway'],
    ['Essential fructosuria is caused by deficiency of', 'Hepatic fructokinase', ['Aldolase B', 'Galactokinase', 'Sorbitol dehydrogenase'], 'Fructose is not trapped, so it spills into the urine.', 'Disorders'],
    ['Essential fructosuria is', 'Benign and needs no treatment', ['Fatal without a fructose-free diet', 'A cause of severe hypoglycaemia', 'A cause of cataract in infancy'], 'It is asymptomatic; the urinary loss is small.', 'Disorders'],
    ['Hereditary fructose intolerance is caused by deficiency of', 'Aldolase B', ['Fructokinase', 'Hexokinase', 'Aldose reductase'], 'Fructose 1-phosphate accumulates in liver, kidney and gut.', 'Disorders'],
    ['Hypoglycaemia in hereditary fructose intolerance results from', 'Trapped phosphate blocking glycogenolysis', ['Excess insulin from the pancreas', 'Loss of glucose in the urine', 'Too much glucagon release from α cells'], 'Fructose 1-phosphate sequesters Pi needed by glycogen phosphorylase.', 'Disorders'],
    ['Hereditary fructose intolerance is treated with', 'A fructose-free diet', ['Insulin injections', 'Extra dietary fructose', 'A galactose-free diet'], 'If adhered to, the prognosis is good.', 'Disorders'],
    ['Long-term high fructose intake raises blood uric acid because', 'ADP and AMP build up and are degraded', ['Fructose is itself turned into urate', 'The kidney stops excreting urate', 'Fructose blocks purine synthesis'], 'Phosphate is sequestered, ATP falls, and adenine nucleotides become uric acid (gout).', 'Disorders'],
    ['Lactose is hydrolysed in the gut by', 'Lactase (β-galactosidase)', ['Sucrase (invertase)', 'Maltase', 'Galactokinase'], 'It gives glucose and galactose.', 'Galactose'],
    ['Conversion of galactose to glucose occurs', 'Only in the liver', ['In all tissues equally', 'Only in the kidney', 'Only in skeletal muscle'], 'It is slow, and can be used as a liver function test.', 'Galactose'],
    ['Galactose 1-phosphate uridyltransferase produces UDP-galactose and', 'Glucose 1-phosphate', ['Glucose 6-phosphate', 'Free galactose', 'Fructose 1-phosphate'], 'Galactose 1-P replaces glucose 1-P in UDP-glucose.', 'Galactose'],
    ['UDP-galactose is converted back to UDP-glucose by', 'UDP-galactose 4-epimerase', ['Phosphoglucomutase', 'Galactokinase', 'Galactose 1-phosphate uridyltransferase'], 'So UDP-glucose works like a coenzyme.', 'Galactose'],
    ['Classical galactosaemia is due to deficiency of', 'Galactose 1-phosphate uridyltransferase', ['Galactokinase', 'Intestinal lactase (β-galactosidase)', 'UDP-galactose 4-epimerase'], 'Autosomal recessive; liver, brain, lens and kidney are damaged.', 'Galactosaemia'],
    ['The main feature of galactokinase deficiency is', 'Cataract in early infancy', ['Severe hypoglycaemia after fruit', 'Gout in adulthood', 'Haemolytic anaemia'], 'Galactitol accumulates in the lens and causes osmotic damage.', 'Galactosaemia'],
    ['Classical galactosaemia is diagnosed by measuring the transferase in', 'Erythrocytes', ['Urine', 'Cerebrospinal fluid', 'Saliva'], 'Treatment is a diet free of galactose and lactose.', 'Galactosaemia'],
  ],
};
