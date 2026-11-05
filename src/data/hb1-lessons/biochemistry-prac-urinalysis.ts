// Biochemistry 1 practicals → Urinalysis. From "07 Urinalysis.pdf" (Department of Molecular
// Medicine, KNUST; HB1 Biochemistry 1 practical class), in the owner's Telegram downloads
// (2026-11-05). The sample types and the microscopic elements, which the deck shows only as
// pictures, are the standard ones from clinical chemistry texts, in our own words; slide slips
// are kept in a red box.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const biochemistryPracUrinalysis: Hb1Lesson = {
  id: 'biochemistry-prac-urinalysis',
  order: 107,
  section: 'Biochem practicals',
  title: 'Practical 7: Urinalysis',
  summary: 'Practical · Body fluids, urine and what it contains, types of urine sample, physical examination (volume, colour, clarity, odour), the dipstick tests for pH, specific gravity, protein, glucose, ketones, blood, bilirubin, urobilinogen, leukocyte esterase and nitrite, microscopy, the procedure and the report',
  minutes: 22,
  source: '07 Urinalysis.pdf (Department of Molecular Medicine, KNUST)',
  quizId: 'prurin',
  quizName: 'Quiz · Practical 7: Urinalysis (lesson)',
  sections: [
    {
      id: 'uri-urine',
      title: 'Body fluids and urine',
      kicker: 'What urine is made of',
      blocks: [
        { k: 'p', x: '<b>Body fluids (biofluids)</b> lie inside and outside cells; the adult body is about <b>50–60% water</b>. They contain electrolytes, metabolites and proteins in amounts that depend on where they are, and they are essential for physiology and homeostasis. Examples: amniotic fluid, aqueous humour, breast milk, bile, CSF, plasma, saliva, pericardial, peritoneal and pleural fluid, semen, synovial fluid, sweat, tears and <b>urine</b>.' },
        { k: 'p', x: '<b>Urine</b> is a waste product of metabolism formed by the kidneys; a healthy adult makes about <b>1.4 L a day</b>, depending on health. It is <b>95% water and 5% solutes</b> (mainly urea, then chloride, sodium, potassium, creatinine and others), and its make-up varies with <b>diet, physical activity, metabolism, medicines and disease</b>.' },
        { k: 'p', x: '<b>Urinalysis</b> is the complete examination of urine, used to <b>screen</b> general health, <b>diagnose</b> disease, <b>monitor</b> disease progress, and monitor how well treatment works or its complications. It has three parts: <b>physical</b>, <b>chemical</b> and <b>microscopic</b> examination.' },
        { k: 'table', head: ['Sample type', 'Use'], rows: [
          { c: ['<b>Random</b>', 'Any time; routine screening'] },
          { c: ['<b>First morning</b>', 'Most concentrated; pregnancy tests, protein, casts'] },
          { c: ['<b>Midstream clean-catch</b>', 'Culture and microscopy with less contamination'] },
          { c: ['<b>Timed (24-hour)</b>', 'Measuring how much of a substance is passed per day'] },
          { c: ['<b>Catheter or suprapubic</b>', 'Sterile samples when a clean catch is not possible'] },
        ] },
      ],
    },
    {
      id: 'uri-physical',
      title: 'Physical examination',
      kicker: 'Volume, colour, clarity, odour',
      blocks: [
        { k: 'table', head: ['Volume', 'Definition', 'Causes'], rows: [
          { c: ['<b>Normal</b>', '<b>800–2000 mL</b> in 24 hours (with about 2 L intake); proportional to water intake', '—'] },
          { c: ['<b>Polyuria</b>', 'Consistently <b>more than 3000 mL</b> per 24 hours', 'Diabetes mellitus, diabetes insipidus'] },
          { c: ['<b>Oliguria</b>', 'Consistently <b>less than 400 mL</b> per 24 hours', 'Dehydration, fasting, heart conditions'] },
          { c: ['<b>Anuria</b>', '<b>Less than 100 mL</b> per 24 hours', 'Extreme dehydration, severe shock, kidney stones'] },
        ] },
        { k: 'table', head: ['Feature', 'Findings'], rows: [
          { c: ['<b>Colour</b>', 'Straw to amber = normal; yellow-brown = <b>bilirubin</b>; yellow-orange = <b>urobilin</b>; red = <b>red cells or haemoglobin</b>'] },
          { c: ['<b>Clarity</b>', 'Clear, hazy, cloudy, very cloudy or turbid; turbidity from <b>pus cells (UTI)</b>, red cells, yeast-like cells, many bacteria or many epithelial cells'] },
          { c: ['<b>Odour</b>', 'Mild = normal; foul = pus or inflammation; sweet = <b>glucose</b>; fruity = <b>ketones</b>'] },
        ] },
      ],
    },
    {
      id: 'uri-dipstick',
      title: 'Chemical examination: the dipstick',
      kicker: 'Ten pads, ten chemical reactions',
      blocks: [
        { k: 'p', x: 'Chemical changes can show disease <b>early</b>. Dipping the strip starts a reaction on each pad; after the stated time, each colour is compared with the <b>reference chart</b>.' },
        { k: 'table', head: ['Pad', 'Principle', 'Meaning and limits'], rows: [
          { c: ['<b>pH</b> (5–8.5)', 'Double indicator: <b>methyl red + bromothymol blue</b> (orange → yellow → green)', 'Shows the kidney’s ability to keep plasma pH normal; adult urine is pH <b>5–8</b>. A high-protein diet makes it more acidic; heavy bacterial growth makes it alkaline (urea → ammonia). Test <b>fresh</b> urine and read quickly'] },
          { c: ['<b>Specific gravity</b> (1.000–1.030)', 'Reflects solutes from small ions to proteins', '<b>1.005–1.030</b> on a random sample is normal if kidney function is normal'] },
          { c: ['<b>Protein</b>', '“Protein error” of the indicator <b>tetrabromophenol blue</b> at constant pH: yellow-green to green-blue', 'Trace, + (30), ++ (100), +++ (300), ++++ (2000 mg/dL). Needs slightly acidic urine. Raised after strenuous exercise, fever, in pregnancy, <b>eclampsia</b> and <b>multiple myeloma</b>'] },
          { c: ['<b>Glucose</b>', '<b>Glucose oxidase</b> makes H<sub>2</sub>O<sub>2</sub>; <b>peroxidase</b> uses it to oxidise iodide to a coloured product', 'Trace (100) to ++++ (2000+ mg/dL); normal amounts are below detection. Specific for glucose, so infants’ urine is also screened for other <b>reducing sugars</b> with a modified Benedict’s test'] },
          { c: ['<b>Ketones</b>', '<b>Acetoacetate + nitroprusside</b> → coloured complex', 'Trace (5) to ++++ (160+ mg/dL). Seen in fasting, strenuous exercise, pregnancy, high-fat diets in children, and fasting patients in hospital; some drugs (ACE inhibitors) give false positives'] },
          { c: ['<b>Blood</b>', 'Red cells are lysed; haemoglobin’s peroxidase-like action lets a hydroperoxide oxidise <b>tetramethylbenzidine</b>', 'Separate pads read intact (non-haemolysed, spotted) and haemolysed (even) blood'] },
          { c: ['<b>Bilirubin</b>', 'Bilirubin + <b>diazo salt</b> → azobilirubin', 'Normal adult urine holds only undetectable traces'] },
          { c: ['<b>Urobilinogen</b>', 'Urobilinogen + <b>diethylaminobenzaldehyde</b> (Ehrlich) → coloured complex', '0.2–1 mg/dL normal. False positives: sulphonamides (sulfadiazine); false negatives: high nitrite; pigmented urine interferes'] },
          { c: ['<b>Leukocyte esterase</b>', 'White-cell esterases split a pyrrole amino acid ester; the product couples with a diazo salt', 'Shows white cells (UTI). False positive: eosinophils, <i>Trichomonas</i>, vaginal epithelial cells; false negative: much vitamin C, albumin, high specific gravity'] },
          { c: ['<b>Nitrite</b>', 'Bacteria reduce dietary <b>nitrate</b> to <b>nitrite</b>, which reacts with p-arsanilic acid and a coupling agent', 'Positive = bacteriuria. False positive: urine stored long at room temperature; false negative: organisms without the reductase (yeasts, Gram-positive bacteria)'] },
        ] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The glucose pad equation “3 H<sub>2</sub>O<sub>2</sub> + KI → KIO<sub>3</sub> + 3 H<sub>2</sub>O” is a simplification: on the strip, peroxidase uses H<sub>2</sub>O<sub>2</sub> to oxidise iodide (or another chromogen) to a <b>coloured</b> product. The note that ketones matter “only in the presence of urine glucose” refers to diabetes; ketonuria without glycosuria is common in fasting and vomiting and can still matter clinically.' }] },
      ],
    },
    {
      id: 'uri-procedure',
      title: 'Microscopy, procedure and report',
      kicker: 'Doing the practical',
      blocks: [
        { k: 'p', x: '<b>Microscopy</b> of the spun sediment shows the <b>formed elements</b>: red and white cells, epithelial cells, <b>casts</b> (cylinders moulded in the tubules: hyaline, granular, red-cell, white-cell), <b>crystals</b> (oxalate, urate, phosphate), bacteria, yeasts and parasites (e.g. <i>Trichomonas</i>, <i>Schistosoma haematobium</i> eggs).' },
        { k: 'step', n: '1', title: 'Record the sample', blocks: [{ k: 'p', x: 'Note the kind of urine sample.' }] },
        { k: 'step', n: '2', title: 'Physical examination', blocks: [{ k: 'p', x: 'Record clarity, colour and odour.' }] },
        { k: 'step', n: '3', title: 'Dipstick', blocks: [{ k: 'p', x: 'Dip the strip in the urine; run it along the rim of the container as you withdraw it to drain excess urine; hold it beside the container and compare each pad with the chart at the time the maker states; write down the results.' }] },
        { k: 'p', x: 'The <b>report</b> has five parts: <b>title, aim, procedure, results</b> and <b>clinical significance</b>.' },
      ],
    },
  ],
  quiz: [
    ['A healthy adult passes about how much urine a day?', '1.4 L', ['0.4 L', '4.0 L', '10 L'], 'The normal range is 800–2000 mL.', 'Urine'],
    ['Urine is roughly', '95% water and 5% solutes', ['50% water and 50% solutes', '75% water and 25% solutes', '99.9% water and 0.1% solutes'], 'Mostly urea among the solutes.', 'Urine'],
    ['Polyuria is consistently passing more than', '3000 mL in 24 hours', ['400 mL in 24 hours', '100 mL in 24 hours', '1400 mL in 24 hours'], 'Oliguria is under 400 mL.', 'Physical'],
    ['Anuria is urine output of less than', '100 mL in 24 hours', ['400 mL in 24 hours', '800 mL in 24 hours', '3000 mL in 24 hours'], 'Seen in severe shock.', 'Physical'],
    ['A fruity smell of urine suggests', 'Ketones', ['Glucose', 'Pus cells', 'Bilirubin'], 'A sweet smell suggests glucose.', 'Physical'],
    ['Yellow-brown urine suggests', 'Bilirubin', ['Urobilin', 'Red blood cells', 'Ketones'], 'Yellow-orange suggests urobilin.', 'Physical'],
    ['The urine pH pad uses', 'Methyl red and bromothymol blue', ['Tetrabromophenol blue alone', 'Nitroprusside and glycine', 'A diazo salt and bilirubin'], 'A double indicator.', 'Dipstick'],
    ['The protein pad works by', 'The protein error of an indicator', ['Glucose oxidase and peroxidase', 'Reduction of nitrate to nitrite', 'Reaction with nitroprusside'], 'Tetrabromophenol blue at constant pH.', 'Dipstick'],
    ['Ketones are detected on the strip with', 'Nitroprusside', ['Glucose oxidase', 'Ehrlich’s reagent', 'p-Arsanilic acid'], 'It reacts with acetoacetate.', 'Dipstick'],
    ['Newborn urine is also screened with a modified Benedict’s test because the glucose pad', 'Detects only glucose', ['Detects all sugars', 'Is too sensitive for infants', 'Needs alkaline urine'], 'Galactose would be missed.', 'Dipstick'],
    ['A positive nitrite test indicates', 'Bacteria in the urine', ['Glucose in the urine', 'Blood in the urine', 'Ketones in the urine'], 'Bacteria reduce nitrate to nitrite.', 'Dipstick'],
    ['A false-negative nitrite result can occur with', 'Gram-positive bacteria', ['Long storage at room temperature', 'Gram-negative bacilli', 'A high-nitrate diet'], 'They lack nitrate reductase.', 'Dipstick'],
    ['Leukocyte esterase can be falsely negative with high', 'Vitamin C', ['Eosinophils', 'Trichomonas', 'Vaginal epithelial cells'], 'Those three give false positives.', 'Dipstick'],
    ['Proteinuria may be found in', 'Multiple myeloma', ['Diabetes insipidus', 'Fasting', 'Iron deficiency'], 'Also exercise, fever, pregnancy, eclampsia.', 'Dipstick'],
    ['A normal random specific gravity, with normal kidneys, is', '1.005–1.030', ['1.000 exactly', '1.040–1.060', '0.900–1.000'], 'It reflects the solutes present.', 'Dipstick'],
    ['Oliguria is consistently passing less than', '400 mL in 24 hours', ['100 mL in 24 hours', '800 mL in 24 hours', '3000 mL in 24 hours'], 'Seen in dehydration, fasting and heart conditions.', 'Physical'],
    ['Polyuria is a feature of', 'Diabetes insipidus', ['Severe shock', 'Kidney stones', 'Dehydration'], 'And diabetes mellitus.', 'Physical'],
    ['Turbid urine is most often caused by', 'Pus cells in a UTI', ['Urobilin pigment', 'Normal urea content', 'A low specific gravity'], 'Also red cells, yeasts, bacteria and epithelial cells.', 'Physical'],
    ['Heavy bacterial growth makes urine pH', 'More alkaline', ['More acidic', 'Unchanged', 'Exactly neutral'], 'Urea is converted to ammonia.', 'Dipstick'],
    ['Bilirubin is detected on the dipstick by reaction with', 'A diazo salt', ['Nitroprusside', 'Glucose oxidase', 'Methyl red'], 'It forms azobilirubin.', 'Dipstick'],
    ['Urobilinogen is detected with', 'Diethylaminobenzaldehyde', ['Tetramethylbenzidine', 'Tetrabromophenol blue', 'p-Arsanilic acid'], 'Ehrlich’s reagent.', 'Dipstick'],
    ['The five parts of the urinalysis report are title, aim, procedure, results and', 'Clinical significance', ['Patient address', 'Reagent costs', 'Instrument serial number'], 'As set out in the practical.', 'Procedure'],
  ],
};
