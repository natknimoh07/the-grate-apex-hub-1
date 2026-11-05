// Biochemistry 1 practicals → Blood Sample Collection, Tubes and Anticoagulants. From "04 Blood
// Sample Collection Tubes 2024.pdf" (and the near-identical "3.Blood Sample Collection
// Tubes.pdf"; Department of Molecular Medicine, KNUST; HB1 Biochemistry 1 practical class), in
// the owner's Telegram downloads (2026-11-05). The tube colours and the order of draw, which the
// deck shows only as pictures, are the standard ones from laboratory texts, in our own words.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const biochemistryPracBloodTubes: Hb1Lesson = {
  id: 'biochemistry-prac-blood-tubes',
  order: 103,
  section: 'Biochem practicals',
  title: 'Practical 3: Blood Collection, Tubes and Anticoagulants',
  summary: 'Practical · Getting the right specimen, capillary, arterial and venous sampling, the venepuncture procedure and precautions, plasma and serum, EDTA, citrate, heparin and fluoride–oxalate tubes, blood-bag anticoagulants, plain and gel tubes, and the order of draw',
  minutes: 20,
  source: '04 Blood Sample Collection Tubes 2024.pdf; 3.Blood Sample Collection Tubes.pdf (Department of Molecular Medicine, KNUST)',
  quizId: 'prtube',
  quizName: 'Quiz · Practical 3: Blood Collection and Tubes (lesson)',
  pastTopics: ['laboratory-practicals'],
  sections: [
    {
      id: 'tube-overview',
      title: 'Quality starts before the test',
      kicker: 'Pre-analytical, analytical and post-analytical',
      blocks: [
        { k: 'p', x: 'A laboratory result is only as good as the sample. Errors can creep in <b>before</b> the analysis (pre-analytical: the wrong patient, tube or handling), <b>during</b> it (analytical) and <b>after</b> it (post-analytical: reporting). Getting each stage right means the <b>right person</b>, the <b>right specimen</b> in the <b>right tube</b>, the <b>tests required</b>, and results <b>delivered to the right clinician</b>.' },
        { k: 'p', x: 'Blood is collected in three ways: <b>capillary sampling</b>, <b>arterial sampling</b> and <b>venepuncture</b>.' },
      ],
    },
    {
      id: 'tube-methods',
      title: 'Capillary, arterial and venous blood',
      kicker: 'Where and how to sample',
      blocks: [
        { k: 'table', head: ['Sample', 'Used for', 'Sites'], rows: [
          { c: ['<b>Capillary</b>', 'Small volumes: glucose strips, bleeding time', '<b>Finger pulp</b>; the <b>heel</b> in babies'] },
          { c: ['<b>Arterial</b>', '<b>Arterial blood gases</b>: pH, CO<sub>2</sub>, O<sub>2</sub>', '<b>Radial</b> and <b>brachial</b> arteries; the <b>femoral</b> artery'] },
          { c: ['<b>Venous</b>', 'The <b>commonest</b>; most routine tests', 'Veins of the <b>antecubital fossa</b> (elbow pit); also the back of the hand, femoral and jugular veins'] },
        ] },
        { k: 'step', n: '1', title: 'Capillary blood', blocks: [{ k: 'p', x: 'Choose the <b>least used finger</b>, clean with an alcohol swab, puncture <b>across the grain</b> of the skin (so the drop forms rather than running along the ridges), and transfer the blood to the strip.' }] },
        { k: 'p', x: 'In the antecubital fossa the veins are used in this order: <b>median cubital</b> (large, well anchored, away from nerves and the artery), then <b>cephalic</b>, then <b>basilic</b> (close to the brachial artery and median nerve). Arterial and venous sampling need the same kit: tourniquet, vacutainer or syringe and needle, alcohol swabs and a bandage.' },
      ],
    },
    {
      id: 'tube-venepuncture',
      title: 'Venepuncture step by step',
      kicker: 'Procedure and precautions',
      blocks: [
        { k: 'step', n: '1', title: 'Prepare', blocks: [{ k: 'p', x: 'Tie a <b>tourniquet</b> on the upper arm; look for and <b>feel</b> the vein; disinfect the site with an alcohol swab and <b>let it dry</b>.' }] },
        { k: 'step', n: '2', title: 'Draw', blocks: [{ k: 'p', x: 'Insert the needle <b>bevel up</b>; draw the blood the tests need; <b>loosen the tourniquet</b>; withdraw the needle.' }] },
        { k: 'step', n: '3', title: 'Finish', blocks: [{ k: 'p', x: 'Press on the gauze with enough pressure, apply a bandage, and put the blood into the <b>right tube</b>.' }] },
        { k: 'box', title: 'Precautions', tone: 'red', blocks: [{ k: 'ul', items: [
          'Clean and disinfect the site properly.',
          'Do not leave the tourniquet on for long: <b>no more than 1 minute</b> (longer causes haemoconcentration and falsely high results).',
          'Make no <b>blind</b> attempts, and do not dig about under the skin with the needle to find a vein.',
          'After withdrawing the needle, keep <b>pressure for 1–2 minutes</b>.',
        ] }] },
      ],
    },
    {
      id: 'tube-tubes',
      title: 'Plasma, serum and the tubes',
      kicker: 'Anticoagulant tubes and clotting tubes',
      blocks: [
        { k: 'cards', items: [
          { title: 'Plasma', blocks: [{ k: 'p', x: 'The fluid from <b>anticoagulated</b>, centrifuged blood; it still has its clotting factors. Needed for the <b>coagulation profile</b> and <b>fibrinogen</b> assay.' }] },
          { title: 'Serum', blocks: [{ k: 'p', x: 'The liquid left after blood has <b>clotted</b>, in a plain tube or with a clot activator; the clotting factors are used up. The commonest specimen for <b>chemistry</b> and <b>serology</b>.' }] },
        ] },
        { k: 'p', x: 'Collection tubes have a <b>colour-coded rubber stopper</b>, come in adult and paediatric sizes, and hold a <b>pre-measured vacuum</b> that draws the right volume.' },
        { k: 'table', head: ['Tube (usual cap)', 'Additive', 'How it works', 'Uses'], rows: [
          { c: ['<b>EDTA</b> (lavender/purple)', 'Na<sub>2</sub>, K<sub>2</sub> or K<sub>3</sub> EDTA, about 2.0 mg/mL', '<b>Chelates calcium</b>', '<b>Full blood count</b>, cell counts, smears, <b>HbA1c</b>, PCR; invert <b>5–8 times</b>'] },
          { c: ['<b>Sodium citrate</b> (light blue)', '<b>3.2%</b>, <b>1 part to 9 parts blood</b>', 'Binds calcium', '<b>Coagulation studies</b>, platelet function'] },
          { c: ['<b>Black</b>', '<b>3.8%</b> sodium citrate, <b>1 : 4</b>', 'Removes calcium', '<b>ESR</b> (Westergren)'] },
          { c: ['<b>Heparin</b> (green)', 'Sodium or lithium heparin, 0.5–1.0 mg per 5 mL', 'Inactivates <b>thrombin</b> and thromboplastin (with antithrombin); a natural anticoagulant', '<b>Blood gases</b>, transfusion work; expensive, and gives a <b>blue background</b> on stained smears'] },
          { c: ['<b>Grey</b>', '<b>Sodium fluoride + potassium oxalate</b>', 'Fluoride stops red-cell <b>glycolysis</b> (it inhibits enolase); oxalate binds calcium', '<b>Blood glucose</b>'] },
          { c: ['<b>Plain</b> (red)', 'None', 'Blood clots naturally', '<b>Toxicology</b>, <b>serology</b>'] },
          { c: ['<b>Serum separator (SST)</b> (gold/yellow)', '<b>Clot activator + separating gel</b>', 'Gel sits between clot and serum after spinning', '<b>Chemistry</b>, immunology, serology'] },
        ] },
        { k: 'p', x: '<b>Oxalates</b>: <b>potassium oxalate</b> (2 mg/mL) <b>shrinks</b> red cells (about 8% lower PCV), so it is used for chemistry but not PCV or ESR; <b>ammonium oxalate</b> (2 mg/mL) <b>swells</b> them, and is also not used for PCV or ESR. Every anticoagulant tube must be <b>mixed thoroughly</b> with the blood.' },
        { k: 'box', title: 'Order of draw', tone: 'recall', blocks: [{ k: 'p', x: 'The deck shows it as a picture. The usual order is: <b>blood cultures</b> → <b>citrate</b> (light blue) → <b>serum</b> tubes (red, gold) → <b>heparin</b> (green) → <b>EDTA</b> (lavender) → <b>fluoride–oxalate</b> (grey). It stops additives carrying over: EDTA in a serum tube, for instance, binds calcium and falsely raises potassium.' }] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The deck calls heparin “highly acidic” as the reason for the blue colour on smears; the blue background comes from heparin’s strongly <b>negative (anionic)</b> charge binding the stain. Heparin is used for <b>plasma chemistry and blood gases</b>; blood for transfusion is collected into citrate-based bags (below).' }] },
      ],
    },
    {
      id: 'tube-bank',
      title: 'Blood bank bags',
      kicker: 'Anticoagulant–preservatives',
      blocks: [
        { k: 'table', head: ['Solution', 'Contents', 'Storage of red cells at 2–4 °C'], rows: [
          { c: ['<b>CPD</b>', 'Citrate, phosphate, dextrose', '<b>21 days</b>'] },
          { c: ['<b>CPDA-1</b>', 'Citrate, phosphate, dextrose, <b>adenine</b>', '<b>35 days</b>'] },
          { c: ['<b>SAGM</b>', 'Saline, adenine, glucose, mannitol (an additive solution)', 'About 42 days (textbook)'] },
        ] },
        { k: 'p', x: 'Citrate prevents clotting, dextrose (glucose) feeds the red cells’ glycolysis, phosphate buffers, and adenine helps the cells keep making ATP, which is why adenine lengthens storage.' },
      ],
    },
  ],
  quiz: [
    ['Arterial blood is specially required for', 'Blood gas analysis', ['Full blood count', 'Blood glucose strips', 'Serology'], 'pH, CO2 and O2.', 'Sampling'],
    ['The first-choice vein for venepuncture is the', 'Median cubital vein', ['Cephalic vein', 'Basilic vein', 'External jugular vein'], 'Then cephalic, then basilic.', 'Sampling'],
    ['During venepuncture the needle is inserted', 'Bevel up', ['Bevel down', 'Sideways', 'At 90 degrees'], 'The tourniquet is loosened before withdrawing.', 'Venepuncture'],
    ['The tourniquet should stay on for no more than', '1 minute', ['5 minutes', '10 minutes', '30 seconds after withdrawal'], 'Longer causes haemoconcentration.', 'Venepuncture'],
    ['After the needle is withdrawn, pressure is kept on the site for', '1–2 minutes', ['5–10 seconds', '10–15 minutes', 'No time at all'], 'This prevents a haematoma.', 'Venepuncture'],
    ['Serum differs from plasma in that serum', 'Has no clotting factors', ['Contains anticoagulant', 'Contains fibrinogen', 'Comes from unclotted blood'], 'They are used up in the clot.', 'Tubes'],
    ['EDTA prevents clotting by', 'Chelating calcium', ['Inactivating thrombin', 'Inhibiting glycolysis', 'Activating plasmin'], 'Heparin inactivates thrombin.', 'Tubes'],
    ['A full blood count is collected into', 'An EDTA tube', ['A sodium citrate tube', 'A fluoride–oxalate tube', 'A plain red tube'], 'Invert 5–8 times.', 'Tubes'],
    ['Coagulation studies use sodium citrate in a ratio of', '1 part to 9 parts blood', ['1 part to 4 parts blood', '1 part to 1 part blood', '2 parts to 3 parts blood'], '1 : 4 (3.8%) is for ESR.', 'Tubes'],
    ['The black-top tube (3.8% citrate, 1 : 4) is used for', 'ESR', ['Blood glucose', 'Blood gases', 'HbA1c'], 'Westergren method.', 'Tubes'],
    ['Blood glucose is collected in the grey tube because fluoride', 'Inhibits red-cell glycolysis', ['Chelates calcium ions in the blood', 'Activates clotting quickly', 'Lyses the red cells'], 'Otherwise cells keep using glucose.', 'Tubes'],
    ['Heparin acts as an anticoagulant by', 'Inactivating thrombin', ['Chelating calcium ions', 'Inhibiting enolase', 'Shrinking red cells'], 'With antithrombin.', 'Tubes'],
    ['Potassium oxalate is unsuitable for PCV because it', 'Shrinks the red cells', ['Swells the red cells', 'Lyses the white cells', 'Clots the sample'], 'About 8% lower PCV.', 'Tubes'],
    ['Adding adenine to CPD (CPDA-1) extends red-cell storage at 2–4 °C to', '35 days', ['21 days', '7 days', '90 days'], 'CPD alone gives 21 days.', 'Blood bank'],
    ['A serum separator tube contains', 'Clot activator and gel', ['EDTA and separating gel', 'Heparin and fluoride', 'No additive at all'], 'For chemistry, immunology and serology.', 'Tubes'],
  ],
};
