// Biochemistry 1 practicals → Determination of Glucose in Blood. From "Determination of Glucose in
// Blood_Final.pdf" (Department of Molecular Medicine, KNUST; HB1 Biochemistry 1 practical
// class), in the owner's Telegram downloads (2026-11-05). The glucose oxidase method, which the
// deck shows as a picture, and the answers to the post-lab questions are worked out here from
// standard clinical chemistry texts, in our own words.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const biochemistryPracGlucose: Hb1Lesson = {
  id: 'biochemistry-prac-glucose',
  order: 106,
  section: 'Biochem practicals',
  title: 'Practical 6: Determination of Glucose in Blood',
  summary: 'Practical · Where blood glucose comes from and the hormones that control it, hyper- and hypoglycaemia, glucose in urine and CSF, the glucose oxidase method, fasting and random glucose, the OGTT and its curves, gestational diabetes, impaired glucose tolerance, glucometers and HbA1c',
  minutes: 22,
  source: 'Determination of Glucose in Blood_Final.pdf (Department of Molecular Medicine, KNUST)',
  quizId: 'prglu',
  quizName: 'Quiz · Practical 6: Blood Glucose (lesson)',
  sections: [
    {
      id: 'glu-control',
      title: 'Blood glucose and its control',
      kicker: 'Insulin, glucagon, adrenaline, cortisol',
      blocks: [
        { k: 'p', x: '<b>Glucose</b> is the main carbohydrate in blood; it is stored as <b>glycogen</b> in the liver and, as fatty acids (triglyceride), in adipose tissue. <b>After a meal</b> most blood glucose comes from the diet; <b>when fasting</b>, <b>gluconeogenesis</b> and <b>glycogenolysis</b> keep it up. Several hormones control it, the most important from the pancreas.' },
        { k: 'table', head: ['Hormone', 'Source', 'Effect on glucose'], rows: [
          { c: ['<b>Insulin</b>', '<b>β-cells</b> of the islets of Langerhans', '<b>Lowers</b>: stimulates glucose uptake into cells'] },
          { c: ['<b>Glucagon</b>', '<b>α-cells</b> of the islets', '<b>Raises</b>: glycogen → glucose released into the blood'] },
          { c: ['<b>Adrenaline (epinephrine)</b>', 'Adrenal glands (on top of each kidney)', '<b>Raises</b>: more liver glucose output by glycogenolysis and gluconeogenesis'] },
          { c: ['<b>Cortisol</b>', 'Adrenal glands (a steroid)', '<b>Raises</b>: high levels increase gluconeogenesis in the liver'] },
        ] },
        { k: 'cards', items: [
          { title: 'Hyperglycaemia', blocks: [{ k: 'p', x: 'Usually <b>diabetes mellitus</b> (too little insulin or poor insulin action); also pancreatitis, thyroid dysfunction, renal failure and liver disease.' }] },
          { title: 'Hypoglycaemia', blocks: [{ k: 'p', x: 'Less common: <b>too much insulin</b>, <b>alcohol</b>, <b>hypopituitarism</b>.' }] },
        ] },
        { k: 'p', x: 'Glucose is measured in <b>blood</b>, <b>urine</b> (glycosuria, renal tubular defects, diabetes management) and <b>CSF</b> (meningitis and other neurological disease, where CSF glucose falls).' },
        { k: 'box', title: 'The principle: glucose oxidase', tone: 'formula', blocks: [{ k: 'p', x: '<b>Glucose oxidase</b> oxidises glucose: glucose + O<sub>2</sub> + H<sub>2</sub>O → gluconic acid + <b>H<sub>2</sub>O<sub>2</sub></b>. <b>Peroxidase</b> then uses the H<sub>2</sub>O<sub>2</sub> to oxidise a colourless dye (e.g. 4-aminophenazone with phenol, the Trinder reaction) to a coloured product. The colour, read in a colorimeter against a standard, is proportional to the glucose.' }] },
      ],
    },
    {
      id: 'glu-tests',
      title: 'Fasting, random and OGTT',
      kicker: 'The numbers to know',
      blocks: [
        { k: 'table', head: ['Test', 'Normal', 'Prediabetes', 'Diabetes'], rows: [
          { c: ['<b>Fasting blood glucose</b> (after an overnight fast)', '<b>3.6–5.5 mmol/L</b>', '<b>5.6–6.9 mmol/L</b>', '<b>above 6.9 mmol/L</b> (7.0 or more)'] },
          { c: ['<b>Random blood glucose</b> (any time)', 'Depends on the last meal', '—', '<b>above 11.1 mmol/L</b>'] },
          { c: ['<b>2-hour OGTT</b>', 'below 7.8 mmol/L', '<b>7.8–11.1 mmol/L</b> (impaired glucose tolerance)', '11.1 mmol/L or more'] },
          { c: ['<b>HbA1c</b>', '<b>below 5.7%</b>', '<b>5.7–6.4%</b>', '<b>above 6.4%</b>'] },
        ] },
        { k: 'p', x: 'The <b>oral glucose tolerance test (OGTT)</b> measures glucose before and at intervals after a set oral glucose load. It is more <b>sensitive</b> than a fasting glucose but has <b>poor reproducibility</b>, because so many things affect it:' },
        { k: 'ul', items: [
          'The patient: <b>duration of fast</b>, <b>3 days of unrestricted diet and activity</b> beforehand, <b>medicines</b> (oral contraceptives, corticosteroids), age, weight, posture and <b>smoking</b>.',
          'The test: time of day (<b>7–9 a.m.</b>), form of glucose (anhydrous or monohydrate), amount (<b>75 g</b>), volume (<b>300 mL</b>) and rate of drinking (<b>within 5 minutes</b>).',
        ] },
        { k: 'p', x: 'Plotted against time (0, 60, 120, 180 minutes), the <b>OGTT curve</b> shows a pattern: <b>normal</b> (a modest rise, back near baseline by 2 hours), <b>diabetic</b> (high start, high peak, still high at 2–3 hours), <b>impaired</b> (between the two), <b>hypoglycaemic</b> (a rise, then a fall below baseline: reactive hypoglycaemia) and <b>flat</b> (hardly any rise, as in malabsorption).' },
        { k: 'cards', items: [
          { title: 'Gestational diabetes', blocks: [{ k: 'p', x: 'Any glucose intolerance first starting in pregnancy. These women are at much higher risk of later <b>type 2 diabetes</b>, especially with marked hyperglycaemia, obesity, or a diagnosis <b>before 24 weeks</b>.' }] },
          { title: 'Impaired glucose tolerance', blocks: [{ k: 'p', x: 'Fasting glucose below the diabetic level but a <b>2-hour OGTT of 7.8–11.1 mmol/L</b> (140–199 mg/dL). It can only be diagnosed with an <b>OGTT</b>.' }] },
        ] },
      ],
    },
    {
      id: 'glu-meters-hba1c',
      title: 'Glucometers and HbA1c',
      kicker: 'Today’s glucose, and the last three months',
      blocks: [
        { k: 'p', x: '<b>Glucometers</b> are used in wards, clinics, emergency rooms and at home for fast results in managing hypo- and hyperglycaemia. They have two parts: an <b>enzyme reaction</b> and a <b>detector</b>. The enzyme is dried onto a disposable strip; the blood rehydrates it and reacts to form a detectable product, or, in <b>biosensor</b> meters, generates electrons that the meter measures.' },
        { k: 'p', x: '<b>Glycation</b> is the <b>non-enzymatic</b> attachment of a sugar to the amino groups of proteins. Adult haemoglobin is <b>HbA (97%)</b>, HbA<sub>2</sub> (2.5%) and HbF (0.5%); HbA has two α and two β chains. <b>HbA1c</b> forms when glucose condenses with the <b>N-terminal valine of each β-chain</b>, first as an unstable <b>Schiff base</b>, which then rearranges (the Amadori rearrangement, from the textbooks) into a stable form; glycation can also occur on lysines or the α-chain.' },
        { k: 'ul', items: [
          'It is essentially <b>irreversible</b>, so the level depends on the <b>blood glucose</b> and the <b>red-cell lifespan</b>.',
          'Its rate of formation is proportional to glucose, so HbA1c reflects the average glucose over the previous <b>8–12 weeks</b>, free of day-to-day swings, recent exercise or food.',
          '<b>Falsely low</b>: haemolytic disease and other causes of short red-cell survival, and <b>recent blood loss</b> (more young red cells). These patients can still be monitored against their <b>own</b> previous values, not published ranges.',
          '<b>Falsely high</b>: <b>iron-deficiency anaemia</b>, probably from a high proportion of old red cells.',
          'Haemoglobin variants (HbF, HbS, HbC) affect results in ways that depend on the method.',
        ] },
        { k: 'box', title: 'The post-lab questions, worked', tone: 'recall', blocks: [
          { k: 'table', head: ['Patient', '0 min', '60', '120', '180', 'Interpretation'], rows: [
            { c: ['P1', '7.2', '12.4', '14.8', '13.4', '<b>Diabetic</b>: fasting above 6.9 and 2-hour above 11.1 mmol/L'] },
            { c: ['P2', '4.0', '12.8', '2.2', '3.0', 'Normal fasting, then a fall far below baseline: <b>reactive hypoglycaemia</b>'] },
            { c: ['P3', '5.8', '11.0', '9.6', '7.2', 'Fasting 5.6–6.9 and 2-hour 7.8–11.1 mmol/L: <b>impaired fasting glucose and impaired glucose tolerance</b>'] },
          ] },
          { k: 'p', x: '<b>Sickle cell disease</b>: red cells survive only 10–20 days, so there is less time for glycation and HbA1c is <b>falsely low</b>; HbS can also interfere with some methods, so fasting glucose or fructosamine is used instead.' },
        ] },
      ],
    },
  ],
  quiz: [
    ['Insulin is produced by the', 'β-cells of the islets', ['α-cells of the islets', 'Adrenal cortex', 'Adrenal medulla'], 'Glucagon comes from α-cells.', 'Control'],
    ['Which hormone LOWERS blood glucose?', 'Insulin', ['Glucagon', 'Cortisol', 'Adrenaline'], 'The others all raise it.', 'Control'],
    ['A cause of hypoglycaemia listed in the practical is', 'Hypopituitarism', ['Pancreatitis', 'Thyroid dysfunction', 'Renal failure'], 'Also excess insulin and alcohol.', 'Control'],
    ['A normal fasting blood glucose is', '3.6–5.5 mmol/L', ['5.6–6.9 mmol/L', '7.0–11.0 mmol/L', '11.1–14.0 mmol/L'], '5.6–6.9 is prediabetes.', 'Tests'],
    ['A random blood glucose that indicates diabetes is above', '11.1 mmol/L', ['5.5 mmol/L', '6.9 mmol/L', '7.8 mmol/L'], 'Fasting above 6.9 also indicates it.', 'Tests'],
    ['The standard oral glucose load in the OGTT is', '75 g', ['25 g', '50 g', '100 g'], 'In 300 mL, drunk within 5 minutes.', 'OGTT'],
    ['Impaired glucose tolerance is a 2-hour OGTT glucose of', '7.8–11.1 mmol/L', ['5.6–6.9 mmol/L', '3.6–5.5 mmol/L', 'Above 15.0 mmol/L'], '140–199 mg/dL.', 'OGTT'],
    ['A drawback of the OGTT compared with fasting glucose is', 'Poor reproducibility', ['Lower sensitivity', 'It needs no preparation', 'It cannot detect diabetes'], 'Many factors affect it.', 'OGTT'],
    ['The enzyme in most glucose test strips and kits is', 'Glucose oxidase', ['Hexokinase only', 'Salivary amylase', 'Lactate dehydrogenase'], 'It makes H2O2 for a colour reaction.', 'Methods'],
    ['HbA1c is formed by glucose binding the', 'N-terminal valine of the β-chain', ['N-terminal valine of the α-chain', 'Haem iron of each subunit', 'C-terminal histidine of the β-chain'], 'First a Schiff base.', 'HbA1c'],
    ['HbA1c reflects the average blood glucose over the previous', '8–12 weeks', ['1–2 days', '1 week', '1 year'], 'It depends on red-cell lifespan.', 'HbA1c'],
    ['An HbA1c of 6.0% is classed as', 'Prediabetes', ['Normal', 'Diabetes', 'Hypoglycaemia'], '5.7–6.4% is prediabetes.', 'HbA1c'],
    ['HbA1c is falsely low after recent blood loss because', 'More red cells are young', ['Glucose rises sharply', 'Old red cells accumulate', 'Haemoglobin is glycated faster'], 'Iron deficiency gives falsely high values.', 'HbA1c'],
    ['In sickle cell disease HbA1c tends to be', 'Falsely low', ['Falsely high', 'Always accurate', 'Unmeasurable at all'], 'Red cells survive a short time.', 'HbA1c'],
    ['Low CSF glucose is used in the evaluation of', 'Meningitis', ['Diabetes insipidus', 'Renal tubular defects', 'Gestational diabetes'], 'Urine glucose is used for renal tubular defects.', 'Methods'],
    ['Glucagon raises blood glucose mainly by', 'Stimulating glycogenolysis', ['Stimulating glucose uptake', 'Inhibiting gluconeogenesis', 'Increasing insulin release'], 'It converts glycogen to glucose.', 'Control'],
    ['Cortisol raises blood glucose by increasing', 'Gluconeogenesis', ['Glycolysis', 'Glycogenesis', 'Lipogenesis'], 'In the liver.', 'Control'],
    ['In the fasting state blood glucose is maintained by', 'Gluconeogenesis and glycogenolysis', ['Dietary glucose only', 'Glycogenesis and lipogenesis', 'Insulin secretion alone'], 'After a meal it comes from the diet.', 'Control'],
    ['A fasting blood glucose of 6.2 mmol/L is classed as', 'Prediabetes', ['Normal', 'Diabetes', 'Hypoglycaemia'], '5.6–6.9 mmol/L.', 'Tests'],
    ['The OGTT is best performed', 'Between 7 and 9 a.m.', ['Late in the evening', 'After a large meal', 'During a fever'], 'Time of day is one of its factors.', 'OGTT'],
    ['Impaired glucose tolerance can only be diagnosed by', 'An OGTT', ['A random glucose', 'A urine dipstick', 'A glucometer reading'], 'It needs the 2-hour value.', 'OGTT'],
    ['High HbA1c values in iron-deficiency anaemia are probably due to', 'More old red cells', ['More young red cells', 'Lower blood glucose', 'Faster haemolysis'], 'Old cells have had longer to glycate.', 'HbA1c'],
  ],
};
