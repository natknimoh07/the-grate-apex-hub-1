// Biochemistry 1 practicals → Units, Amounts and Concentration. From "03 Units Amount and
// Concentration_2024.pdf" and "UNITS, AMOUNTS, CONCENTRATIONS_STUDENT_EDIT.pptx" (Department of
// Molecular Medicine, KNUST; HB1 Biochemistry 1 practical class), in the owner's Telegram
// downloads (2026-11-05). The two decks are merged; the worked answers to the deck's questions
// are calculated here, and slide slips are kept in a red box.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const biochemistryPracUnits: Hb1Lesson = {
  id: 'biochemistry-prac-units',
  order: 102,
  section: 'Biochem practicals',
  title: 'Practical 2: Units, Amounts and Concentration',
  summary: 'Practical · Why units matter, SI base and derived units and prefixes, parts per million, percentage, mass concentration, molarity and molality, making solutions from solids and from liquids (density and purity), and parallel and serial dilutions',
  minutes: 24,
  source: '03 Units Amount and Concentration_2024.pdf; UNITS, AMOUNTS, CONCENTRATIONS_STUDENT_EDIT.pptx (Department of Molecular Medicine, KNUST)',
  quizId: 'prunit',
  quizName: 'Quiz · Practical 2: Units and Concentration (lesson)',
  pastTopics: ['laboratory-practicals'],
  sections: [
    {
      id: 'unit-why',
      title: 'Why units matter',
      kicker: 'A number without a unit means nothing',
      blocks: [
        { k: 'p', x: 'A lab result takes effort and money to produce, yet it reaches the doctor as just a number. Without its <b>unit</b> the number cannot be understood or compared, and careless use of units causes errors between health workers that put <b>patients at risk</b>.' },
        { k: 'box', title: 'The haemoglobin example', tone: 'red', blocks: [{ k: 'p', x: 'A haemoglobin of “25” is meaningless. As <b>25 g/L</b> the patient is severely <b>anaemic</b>; as <b>25 g/dL</b> the patient is <b>polycythaemic</b>. (Normal: men 13.8–17.2 g/dL = 138–172 g/L; women 12.1–15.1 g/dL = 121–151 g/L.)' }] },
        { k: 'p', x: 'Reporting everything in the same units also makes calculations such as <b>osmolarity</b> and <b>electrolyte balance</b> easier and avoids confusion between laboratories, which is why <b>SI (Système International) units</b> are recommended.' },
        { k: 'ul', items: [
          'In the laboratory: preparing reagents; screening for and <b>diagnosing</b> disease; judging <b>prognosis</b>.',
          'In treatment: <b>drug doses</b> (a 500 mg capsule, a syrup of 250 mg/5 mL) and monitoring therapy.',
          'In research: measuring how much of a substance is in a body fluid.',
        ] },
      ],
    },
    {
      id: 'unit-si',
      title: 'SI units and prefixes',
      kicker: 'Base, derived and permitted units',
      blocks: [
        { k: 'p', x: 'A <b>unit</b> is the smallest standardised measure of a quantity. There are <b>seven base quantities</b>, each with a base unit (length, metre; mass, kilogram; time, second; electric current, ampere; temperature, kelvin; <b>amount of substance, mole</b>; luminous intensity, candela). Base quantities combine into <b>derived quantities</b>, such as <b>substance concentration</b> (mol/L). Some <b>non-SI units</b> are permitted: hours, minutes, electronvolts, inches.' },
        { k: 'p', x: 'To keep numbers between about <b>0.1 and 999</b>, units take <b>SI prefixes</b>: <b>milli (m) = 10<sup>−3</sup></b>, <b>micro (µ) = 10<sup>−6</sup></b>, <b>nano (n) = 10<sup>−9</sup></b>. So one quantity can have several units: substance concentration may be mol/L, mmol/L, µmol/L or nmol/L.' },
        { k: 'p', x: 'A <b>concentration</b> is the amount of a substance in a mixture, so its unit always has a part for <b>quantity</b> (grams, equivalents or moles, or mg, mEq, mmol) and a part for <b>volume</b> (litres, millilitres, or decilitres = 100 mL).' },
      ],
    },
    {
      id: 'unit-conc',
      title: 'Ways of expressing concentration',
      kicker: 'ppm, %, mass concentration, molarity, molality',
      blocks: [
        { k: 'table', head: ['Expression', 'Formula', 'Notes'], rows: [
          { c: ['<b>Parts per million (ppm)</b>', '(mass of solute ÷ mass of solution) × 10<sup>6</sup>', 'For <b>extremely dilute</b> solutions, such as contaminants in water'] },
          { c: ['<b>% by mass (w/w)</b>', '(mass of solute ÷ mass of solution) × 100', '1% w/w = 1 g in 100 g of mixture'] },
          { c: ['<b>% weight/volume (w/v)</b>', '(grams of solute ÷ mL of solution) × 100', '1% w/v = 1 g in 100 mL of solution'] },
          { c: ['<b>% by volume (v/v)</b>', '(volume of solute ÷ volume of solution) × 100', '1% v/v = 1 mL in 100 mL of solution'] },
          { c: ['<b>Mass concentration</b>', 'mass of solute ÷ volume of solution', 'e.g. 10 g/L, 20 mg/mL, 2 µg/mL'] },
          { c: ['<b>Molarity (M)</b>', 'moles of solute ÷ <b>litres of solution</b>', 'Moles = given mass ÷ molar mass'] },
          { c: ['<b>Molality (m)</b>', 'moles of solute ÷ <b>kg of solvent</b>', 'Does not change with temperature, because it uses mass, not volume'] },
        ] },
        { k: 'box', title: 'Worked examples', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Drinking water in Ghana and Togo may hold no more than 5 × 10<sup>−4</sup> mg of mercury per 1 × 10<sup>3</sup> mg of sample: (5 × 10<sup>−4</sup> ÷ 10<sup>3</sup>) × 10<sup>6</sup> = <b>0.5 ppm</b>.',
          '4 mg of NaCl in 8 kg of solution: (0.004 g ÷ 8000 g) × 10<sup>6</sup> = <b>0.5 ppm</b>.',
          'A 7500 g solution of KI at 150 ppm holds 150 × 7500 ÷ 10<sup>6</sup> = <b>1.125 g</b> of KI.',
          '24 g of NaCl in 176 g of solution: 24 ÷ 176 × 100 ≈ <b>14%</b> by mass.',
          '10 mL of propanone made up to 200 mL: 10 ÷ 200 × 100 = <b>5%</b> by volume.',
          '5.0 g of glucose in 200 mL: 5.0 ÷ 200 = <b>0.025 g/mL</b> (25 g/L).',
          '40 g of NaOH (molar mass 40 g/mol = 1 mol) made up to 500 mL: 1 ÷ 0.5 = <b>2 M</b>.',
          '40 g of NaOH in 50 kg of solvent: 1 ÷ 50 = <b>0.02 mol/kg</b>.',
        ] }] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The NaCl example divides by <b>174 g</b> though the question says 176 g (24 ÷ 176 is 13.6%, which still rounds to 14%), and the propanone answer is labelled “% by volume (NaCl)”: it is propanone.' }] },
      ],
    },
    {
      id: 'unit-prepare',
      title: 'Making a solution',
      kicker: 'From a solid, and from a liquid stock',
      blocks: [
        { k: 'p', x: 'To make a solution of a set concentration, work out the <b>moles of solute</b> needed in the final volume, convert moles to <b>grams</b> (moles × molar mass), and dissolve that in enough solvent to reach the final volume.' },
        { k: 'step', n: '1', title: 'From a solid', blocks: [{ k: 'p', x: 'Weigh the sample → transfer it to a beaker → measure the diluent → mix solute and diluent → stir gently to dissolve → transfer to a <b>volumetric flask</b> (and make up to the mark) or a storage bottle.' }] },
        { k: 'p', x: '<b>Example:</b> CuSO<sub>4</sub>·5H<sub>2</sub>O has a molar mass of <b>250 g/mol</b>, so 250 g in 1 L = <b>1 M</b>, 25.0 g in 1 L = <b>0.1 M</b>, and 2.50 g in 1 L = <b>0.01 M</b>.' },
        { k: 'step', n: '2', title: 'From a liquid', blocks: [{ k: 'p', x: 'Get the stock bottle → pour the needed volume into a beaker → measure the diluent → mix → stir gently → transfer to a volumetric flask or storage bottle. For a volume-percent solution, measure the solute volume and add solvent to the total volume.' }] },
        { k: 'p', x: 'For a liquid stock, note from the label its <b>density</b> (g/cm<sup>3</sup> = g/mL), <b>specific gravity</b>, <b>percentage purity</b> (by mass) and <b>molar mass</b>. Since volume = mass ÷ density, the volume of a <b>pure</b> liquid holding one mole is <b>molar mass ÷ density</b> (g/mol ÷ g/mL = mL/mol); for an impure stock divide again by the purity fraction.' },
        { k: 'box', title: 'Concentrated HCl', tone: 'formula', blocks: [
          { k: 'p', x: 'HCl: molar mass <b>36.5 g/mol</b>, density <b>1.2 g/mL</b>. If it were 100% pure, 36.5 ÷ 1.2 = <b>30.4 mL</b> in 1 L would give 1 M (about 30 mL for 1 M, 3.0 mL for 0.1 M, 0.3 mL for 0.01 M).' },
          { k: 'p', x: 'The bottle is only <b>38%</b> pure, so the volume for 1 M is (36.5 ÷ 1.2) × (100 ÷ 38) = <b>80.0 mL</b> made up to 1 L.' },
        ] },
      ],
    },
    {
      id: 'unit-dilution',
      title: 'Dilutions: parallel and serial',
      kicker: 'C1V1 = C2V2',
      blocks: [
        { k: 'p', x: 'The <b>dilution factor (DF)</b> = C<sub>1</sub> ÷ C<sub>2</sub> = V<sub>2</sub> ÷ V<sub>1</sub>, where V<sub>2</sub> is the volume of diluted solution you want and V<sub>1</sub> the volume of the more concentrated solution you mix with solvent. So <b>V<sub>1</sub> = V<sub>2</sub> ÷ DF</b>, and the solvent added is V<sub>2</sub> − V<sub>1</sub>.' },
        { k: 'cards', items: [
          { title: 'Parallel dilution', blocks: [{ k: 'p', x: 'Each dilution is made <b>directly from the stock</b>, using its own V<sub>1</sub>. An error in one tube does not pass to the others.' }] },
          { title: 'Serial dilution', blocks: [{ k: 'p', x: 'Each dilution is made from the <b>previous</b> one: stock → 1 in 10 → 1 in 100 → 1 in 1000 → 1 in 10 000. For 10 mL per tube: 1 mL of the previous solution + 9 mL of diluent each time. Errors carry forward.' }] },
        ] },
        { k: 'box', title: 'The post-lab question, solved', tone: 'recall', blocks: [
          { k: 'p', x: 'A <b>2.5%</b> (w/v) CuSO<sub>4</sub>·5H<sub>2</sub>O stock is 25 g/L = 25 ÷ 250 = <b>0.1 M (100 mM)</b>. Make 9 mL of each by parallel dilution:' },
          { k: 'table', head: ['Tube', 'DF', 'Stock (mL)', 'Diluent (mL)', '% conc', 'g/L', 'mM'], rows: [
            { c: ['X1', '1.5', '6.0', '3.0', '1.67', '16.7', '66.7'] },
            { c: ['X2', '3.0', '3.0', '6.0', '0.83', '8.3', '33.3'] },
            { c: ['X3', '4.5', '2.0', '7.0', '0.56', '5.6', '22.2'] },
            { c: ['X4', '6.0', '1.5', '7.5', '0.42', '4.2', '16.7'] },
          ] },
        ] },
      ],
    },
  ],
  quiz: [
    ['A haemoglobin result of 25 g/L indicates', 'Severe anaemia', ['Polycythaemia', 'A normal adult value', 'Dehydration only'], 'As 25 g/dL it would mean polycythaemia.', 'Units'],
    ['The SI base unit for amount of substance is the', 'Mole', ['Gram', 'Litre', 'Kilogram'], 'Concentration in mol/L is a derived quantity.', 'Units'],
    ['The SI prefix micro (µ) stands for', '10⁻⁶', ['10⁻³', '10⁻⁹', '10⁻¹²'], 'Milli is 10⁻³ and nano 10⁻⁹.', 'Units'],
    ['A 1% (w/v) solution contains', '1 g in 100 mL of solution', ['1 g in 100 g of solution', '1 mL in 100 mL of solution', '1 g in 1 L of solution'], 'w/w uses grams of mixture; v/v uses mL.', 'Concentration'],
    ['4 mg of NaCl dissolved in 8 kg of solution is', '0.5 ppm', ['5 ppm', '0.05 ppm', '50 ppm'], '(0.004 ÷ 8000) × 10⁶ = 0.5.', 'Concentration'],
    ['40 g of NaOH (40 g/mol) made up to 500 mL gives a molarity of', '2 M', ['1 M', '0.5 M', '20 M'], '1 mol ÷ 0.5 L.', 'Concentration'],
    ['Molality is moles of solute per', 'Kilogram of solvent', ['Litre of solution', 'Litre of solvent', 'Kilogram of solution'], 'Molarity is per litre of solution.', 'Concentration'],
    ['5.0 g of glucose in 200 mL has a mass concentration of', '0.025 g/mL', ['0.25 g/mL', '2.5 g/mL', '40 g/mL'], '5.0 ÷ 200.', 'Concentration'],
    ['To make 1 L of 0.1 M CuSO₄·5H₂O (250 g/mol) you need', '25.0 g', ['2.50 g', '250 g', '0.25 g'], '0.1 mol × 250 g/mol.', 'Preparation'],
    ['For 100% pure HCl (36.5 g/mol, density 1.2 g/mL), the volume giving 1 mol is about', '30.4 mL', ['80.0 mL', '43.8 mL', '3.04 mL'], '36.5 ÷ 1.2; at 38% purity it is about 80 mL.', 'Preparation'],
    ['Which of these is NOT needed from a liquid stock label to make a molar solution?', 'Its boiling point', ['Its density', 'Its percentage purity', 'Its molar mass'], 'Specific gravity is also noted.', 'Preparation'],
    ['To make 9 mL with a dilution factor of 3, you take', '3 mL of stock + 6 mL of diluent', ['6 mL of stock + 3 mL of diluent', '1 mL of stock + 8 mL of diluent', '3 mL of stock + 9 mL of diluent'], 'V1 = V2 ÷ DF.', 'Dilution'],
    ['In a serial dilution each new dilution is made from', 'The previous dilution', ['The original stock', 'Pure solvent alone', 'A separate standard'], 'In parallel dilution each comes from the stock.', 'Dilution'],
    ['A 2.5% (w/v) CuSO₄·5H₂O stock (250 g/mol) has a molarity of', '0.1 M', ['0.01 M', '1.0 M', '2.5 M'], '25 g/L ÷ 250 g/mol.', 'Dilution'],
  ],
};
