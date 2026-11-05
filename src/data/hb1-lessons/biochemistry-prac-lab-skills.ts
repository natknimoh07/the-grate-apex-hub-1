// Biochemistry 1 practicals → Basic Laboratory Skills and Pipetting. From "02 BASIC LABORATORY
// SKILLS_2024.pdf" (Department of Molecular Medicine, KNUST; HB1 Biochemistry 1 practical
// class), in the owner's Telegram downloads (2026-11-05). The facts and the worked example are
// the deck's; the explanations of forward and reverse pipetting, which the deck shows only as
// pictures, are from standard laboratory texts, in our own words.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const biochemistryPracLabSkills: Hb1Lesson = {
  id: 'biochemistry-prac-lab-skills',
  order: 101,
  section: 'Biochem practicals',
  title: 'Practical 1: Basic Laboratory Skills and Pipetting',
  summary: 'Practical · Repeatability and reproducibility, accuracy and precision, the kinds of pipette and pipette filler, micropipette tips and parts, forward and reverse pipetting, sources of pipetting error, and validating a pipette by percentage accuracy and precision',
  minutes: 18,
  source: '02 BASIC LABORATORY SKILLS_2024.pdf (Department of Molecular Medicine, KNUST)',
  quizId: 'prlab',
  quizName: 'Quiz · Practical 1: Laboratory Skills (lesson)',
  pastTopics: ['laboratory-practicals'],
  sections: [
    {
      id: 'lab-terms',
      title: 'Getting results you can trust',
      kicker: 'Repeatability, reproducibility, accuracy, precision',
      blocks: [
        { k: 'p', x: '<b>Basic laboratory skills</b> are the skills you need to survive in the biochemistry lab. Everything you measure is judged by four ideas, and in the practical class the measurement you will make most often is a <b>volume, with a pipette</b>.' },
        { k: 'table', head: ['Term', 'Meaning'], rows: [
          { c: ['<b>Repeatability</b>', 'Agreement between results obtained by the <b>same observer</b>, under the <b>same conditions</b>, with the <b>same instruments</b>, at the <b>same place</b>'] },
          { c: ['<b>Reproducibility</b>', 'Agreement between results of experiments by <b>different people</b>, under <b>different conditions</b>, at <b>different places</b>'] },
          { c: ['<b>Accuracy</b>', 'How close a measurement, calculation or specification is to the <b>true (correct) value</b>'] },
          { c: ['<b>Precision</b>', 'How close <b>two or more measurements are to each other</b>'] },
        ] },
        { k: 'p', x: 'Accuracy and precision are independent. Picture shots at a target: shots scattered all over and away from the centre are <b>low accuracy, low precision</b>; shots clustered tightly but off-centre are <b>low accuracy, high precision</b>; shots spread around the centre are <b>high accuracy, low precision</b>; a tight cluster on the centre is <b>high accuracy, high precision</b>, the goal. A precise but inaccurate result usually means a <b>systematic error</b> (a badly calibrated pipette), while poor precision means <b>random error</b> (inconsistent technique).' },
      ],
    },
    {
      id: 'lab-pipettes',
      title: 'Pipettes and their accessories',
      kicker: 'The pipette is the tool; pipetting is the skill',
      blocks: [
        { k: 'p', x: 'A <b>pipette</b> is the instrument; <b>pipetting</b> is the technique of using it to draw up (aspirate) and deliver (dispense) an exact volume. A good pipette in careless hands still gives bad results.' },
        { k: 'table', head: ['Type', 'Description'], rows: [
          { c: ['<b>Glass (graduated) pipette</b>', 'A marked glass tube, filled with a <b>pipette filler</b>, never by mouth'] },
          { c: ['<b>Variable (micro) pipette</b>', 'An adjustable air-displacement pipette for microlitre volumes; <b>single-channel</b> or <b>multichannel</b> (several tips at once, for plates)'] },
          { c: ['<b>Dropper (Pasteur) pipette</b>', 'For moving liquid in drops when the exact volume does not matter'] },
        ] },
        { k: 'p', x: '<b>Glass pipette fillers</b> are either <b>rubber bulb</b> fillers or <b>plastic</b> fillers. Micropipettes use disposable <b>tips</b>, sized to the volume range: about <b>0–10 µL</b>, <b>10–200 µL</b>, <b>100–1000 µL</b> and <b>more than 1000 µL</b>. The parts of a micropipette include the plunger (push button), the tip-ejector button, the volume-adjustment dial and display, the shaft and the tip cone.' },
      ],
    },
    {
      id: 'lab-pipetting',
      title: 'Forward and reverse pipetting',
      kicker: 'Two ways to push the plunger',
      blocks: [
        { k: 'p', x: 'A micropipette plunger has two stops: the <b>first stop</b> (the set volume) and the <b>second stop</b> (blow-out).' },
        { k: 'step', n: '1', title: 'Forward pipetting', blocks: [{ k: 'p', x: 'Press to the <b>first</b> stop, dip the tip and release slowly to draw up the liquid; dispense by pressing to the first stop, then to the <b>second</b> stop to blow out the last drop. The standard method for <b>aqueous</b> solutions such as buffers.' }] },
        { k: 'step', n: '2', title: 'Reverse pipetting', blocks: [{ k: 'p', x: 'Press to the <b>second</b> stop, then release to draw up more than the set volume; dispense by pressing only to the <b>first</b> stop, leaving the extra liquid in the tip to be discarded. Better for <b>viscous, foaming or volatile</b> liquids (glycerol, serum, detergents) and very small volumes, but it wastes some sample.' }] },
        { k: 'box', title: 'Sources of error in pipetting', tone: 'red', blocks: [{ k: 'ul', items: [
          'A tip that is <b>not well fitted</b> to the pipette.',
          'Pushing the plunger <b>beyond the correct</b> (first or second) point of resistance.',
          '<b>Not dispensing all the liquid</b> into the receiving tube.',
          'Pipetting <b>too fast or too slowly</b>.',
        ] }] },
      ],
    },
    {
      id: 'lab-validation',
      title: 'Validating a pipette',
      kicker: 'Percentage accuracy and percentage precision',
      blocks: [
        { k: 'p', x: 'A pipette is checked by <b>weighing</b> the water it delivers: 1 g of water is about 1 mL (1000 µL), so each mass converts to a volume.' },
        { k: 'step', n: '1', title: 'Protocol', blocks: [{ k: 'ul', items: [
          'Weigh a beaker and <b>tare</b> (zero) the balance.',
          'Set the pipette to its <b>maximum volume</b>.',
          'Aspirate distilled water and dispense it into the beaker on the balance; record the mass.',
          'Repeat to make a <b>triplicate</b>, then convert the three masses to volumes in µL.',
        ] }] },
        { k: 'box', title: 'The formulas', tone: 'formula', blocks: [
          { k: 'p', x: '<b>% accuracy = (mean volume ÷ set volume) × 100</b>. Good pipetting: <b>99–101%</b>.' },
          { k: 'p', x: '<b>Standard deviation</b> SD = √[Σ(x<sub>i</sub> − µ)<sup>2</sup> ÷ N], where x<sub>i</sub> is each measurement, µ the mean and N the number of measurements.' },
          { k: 'p', x: '<b>% precision (coefficient of variation) = (SD ÷ mean volume) × 100</b>. A <b>higher</b> percentage means <b>less precise</b>; good pipetting: <b>0–2%</b>.' },
        ] },
        { k: 'box', title: 'Worked example (from the deck)', tone: 'recall', blocks: [{ k: 'p', x: 'A 1000 µL pipette set to <b>900 µL</b> delivered 910, 887, 882, 902 and 921 µL. Mean = 4502 ÷ 5 = <b>900.4 µL</b>, so accuracy = 900.4 ÷ 900 × 100 = <b>100.04%</b> (good). The deck gives SD = <b>16</b> µL (dividing by N − 1, the sample formula, gives 16.1; dividing by N, as the formula on the slide does, gives 14.4), so precision ≈ 16 ÷ 900.4 × 100 ≈ <b>1.8%</b>: within 0–2%, good.' }] },
        { k: 'p', x: '<b>Post-lab questions</b>: find the percentage accuracy and precision of your own triplicate (SD to the nearest whole number), explain what they show, and give two advantages and two disadvantages each of forward and reverse pipetting.' },
      ],
    },
  ],
  quiz: [
    ['Agreement between results obtained by the same person with the same instrument under the same conditions is', 'Repeatability', ['Reproducibility', 'Accuracy', 'Sensitivity'], 'Reproducibility involves different people, conditions and places.', 'Lab skills'],
    ['Agreement between results of different people in different laboratories is', 'Reproducibility', ['Repeatability', 'Precision', 'Specificity'], 'Same-observer agreement is repeatability.', 'Lab skills'],
    ['How close a measurement is to the true value is its', 'Accuracy', ['Precision', 'Repeatability', 'Resolution'], 'Precision is closeness of measurements to each other.', 'Lab skills'],
    ['Results tightly clustered but far from the true value are', 'Precise but not accurate', ['Accurate but not precise', 'Both accurate and precise', 'Neither accurate nor precise'], 'This suggests a systematic error.', 'Lab skills'],
    ['A micropipette tip of 10–200 µL would be used to deliver', '50 µL', ['5 mL', '1500 µL', '2 mL'], 'Choose the tip whose range includes the volume.', 'Pipettes'],
    ['Reverse pipetting is preferred for', 'Viscous or foaming liquids', ['Plain aqueous buffers', 'Large volumes of water', 'Dry powdered reagents'], 'Forward pipetting is standard for aqueous solutions.', 'Pipetting'],
    ['In forward pipetting the liquid is drawn up after pressing the plunger to the', 'First stop', ['Second stop', 'Tip ejector', 'Volume dial'], 'Dispensing then goes to the second stop to blow out.', 'Pipetting'],
    ['Which is NOT listed as a source of pipetting error?', 'Using distilled water as the sample', ['A poorly fitted tip', 'Pipetting too fast', 'Not dispensing all the liquid'], 'Distilled water is used to validate pipettes.', 'Pipetting'],
    ['Good pipetting accuracy is indicated by', '99–101%', ['90–110%', '0–2%', '95–105%'], '0–2% is the target for % precision.', 'Validation'],
    ['A % precision of 0–2% indicates', 'Good pipetting', ['Poor pipetting', 'A faulty balance', 'Wrong tip size'], 'A higher % precision means less precise.', 'Validation'],
    ['A 900 µL setting gives a mean of 900.4 µL. The % accuracy is about', '100%', ['90%', '99.6%', '110%'], '900.4 ÷ 900 × 100 = 100.04%.', 'Validation'],
    ['% precision is calculated as', '(SD ÷ mean) × 100', ['(mean ÷ set volume) × 100', '(set volume ÷ SD) × 100', 'SD × mean ÷ 100'], 'It is the coefficient of variation.', 'Validation'],
    ['A pipette is validated by weighing water because', '1 g of water is about 1 mL', ['Water evaporates very slowly', 'Water has no density', 'Balances cannot weigh other liquids'], 'Mass converts directly to volume.', 'Validation'],
  ],
};
