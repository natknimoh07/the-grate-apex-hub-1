// Biochemistry 1 practicals → Enzymes: Salivary Amylase. From "05 Enzymes.pdf" and "05
// Enzymes_FINAL_1.pptx" (Department of Molecular Medicine, KNUST; HB1 Biochemistry 1 practical
// class), in the owner's Telegram downloads (2026-11-05). The two decks are the same practical;
// the repeated procedure slides are merged, and slide slips are kept in a red box.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const biochemistryPracAmylase: Hb1Lesson = {
  id: 'biochemistry-prac-amylase',
  order: 104,
  section: 'Biochem practicals',
  title: 'Practical 4: Enzymes — Salivary Amylase',
  summary: 'Practical · Enzymes and their classes, roles and clinical uses, diagnostic enzymes, the factors that affect activity, salivary amylase (ptyalin) and starch, the achromic point with iodine, and the effect of temperature on amylase',
  minutes: 18,
  source: '05 Enzymes.pdf; 05 Enzymes_FINAL_1.pptx (Department of Molecular Medicine, KNUST)',
  quizId: 'prenz',
  quizName: 'Quiz · Practical 4: Salivary Amylase (lesson)',
  pastTopics: ['enzymes'],
  sections: [
    {
      id: 'amy-enzymes',
      title: 'Enzymes in the laboratory and the clinic',
      kicker: 'A quick reminder before the experiment',
      blocks: [
        { k: 'p', x: 'The practical has two aims: to find the <b>achromic point</b> of an enzyme, and to study the <b>effect of temperature</b> on <b>salivary amylase</b>.' },
        { k: 'p', x: '<b>Enzymes</b> are biological catalysts, mostly proteins (<b>ribozymes</b> are catalytic nucleic acids), that speed up the body’s reactions by <b>lowering the activation energy</b>. By composition they are <b>simple</b> (protein only) or <b>complex</b> (protein plus a cofactor); by mechanism they are oxidoreductases, transferases, hydrolases, lyases, isomerases and ligases. They work in digestion, respiration, metabolism, muscle and nerve function, and DNA reactions.' },
        { k: 'p', x: '<b>Diagnostic enzymes</b> help diagnosis and prognosis. Because each is <b>specific for its substrate</b>, its activity can be measured even among many other proteins. Disease damages tissue to a degree that depends on how long and how severe it is, and the damaged tissue <b>releases its own enzymes into the blood</b>, raising their activity in body fluids.' },
        { k: 'table', head: ['Clinical use', 'Example'], rows: [
          { c: ['<b>Biomarkers</b>', '<b>Creatine kinase</b> for muscle weakness and injury'] },
          { c: ['<b>Therapy</b> (replacing deficient enzymes)', '<b>Papain</b> taken after food to help digestion in elderly patients'] },
          { c: ['<b>Disinfection</b>', 'Enzymatic detergents for reusable medical devices; <b>proteases</b> to clean wounds and speed healing'] },
          { c: ['<b>Analytical tests (biosensors)</b>', '<b>Glucose oxidase</b> on diabetics’ test strips'] },
        ] },
        { k: 'p', x: 'Activity depends on <b>temperature, pH, substrate concentration, enzyme concentration, cofactors</b> and <b>product concentration</b>. This practical uses <b>ptyalin</b> (salivary amylase) to show the effect of temperature.' },
      ],
    },
    {
      id: 'amy-starch',
      title: 'Salivary amylase and starch',
      kicker: 'Ptyalin cuts α-1,4 bonds',
      blocks: [
        { k: 'p', x: '<b>Salivary α-amylase</b> breaks large, insoluble starch molecules into successively smaller soluble pieces, the <b>dextrins</b> (<b>amylodextrin → erythrodextrin → achrodextrin</b>), and finally into <b>maltose</b>.' },
        { k: 'table', head: ['Property of salivary amylase', 'Value'], rows: [
          { c: ['Nature', 'Protein'] },
          { c: ['Optimum temperature', '<b>37 °C</b>'] },
          { c: ['Optimum pH', '<b>6.8</b>'] },
          { c: ['Activators', 'Halide ions, especially <b>Cl<sup>−</sup></b>'] },
          { c: ['Duration of action', 'About <b>15 minutes</b>'] },
        ] },
        { k: 'p', x: 'Starch has two parts: <b>amylose</b> (20–30%), a straight chain of glucose joined by <b>α-1,4</b> bonds, and <b>amylopectin</b> (70–80%), branched, with α-1,4 bonds in the chains and <b>α-1,6</b> bonds at the branch points. Amylase hydrolyses <b>only α-1,4</b> bonds, so it digests <b>starch and glycogen</b> but not <b>cellulose</b>, whose glucose units are joined by <b>β-1,4</b> bonds.' },
        { k: 'box', title: 'Reading the iodine colour', tone: 'formula', blocks: [{ k: 'p', x: 'Iodine fits inside the coils of long starch chains: <b>starch → blue-black</b>; <b>amylodextrin/erythrodextrin → violet to red-brown</b>; <b>achrodextrin and maltose → no colour change</b> (the brown-yellow of iodine itself). So the colour tells you how far digestion has gone.' }] },
      ],
    },
    {
      id: 'amy-achromic',
      title: 'Procedure 1: the achromic point',
      kicker: 'How long until iodine stops turning blue?',
      blocks: [
        { k: 'p', x: 'The <b>achromic point</b> is the time salivary amylase takes, under optimum conditions, to hydrolyse starch to <b>achrodextrin</b>: the moment iodine no longer gives a colour.' },
        { k: 'step', n: '1', title: 'Set up', blocks: [{ k: 'p', x: 'Prepare a <b>37 °C</b> water bath. Put 2 drops of iodine into each well of a microtitre plate. Keep <b>3 control wells</b>: iodine + a drop of starch, iodine + a drop of amylase, and iodine only.' }] },
        { k: 'step', n: '2', title: 'Start the reaction', blocks: [{ k: 'p', x: 'In a tube labelled “Ach + group number”, mix <b>2 mL starch + 2 mL amylase</b> and put it straight into the water bath; start a stopwatch.' }] },
        { k: 'step', n: '3', title: 'Sample every minute', blocks: [{ k: 'p', x: 'Each minute, add a drop of the mixture to a fresh iodine well. At first it turns <b>blue-black</b>. Record the time when the colour stops changing from the iodine colour: that is the <b>achromic time</b>. Record time, observation and inference in a table and explain what has happened to the starch.' }] },
      ],
    },
    {
      id: 'amy-temperature',
      title: 'Procedure 2: the effect of temperature',
      kicker: '37 °C, ice and boiling',
      blocks: [
        { k: 'step', n: '1', title: 'Set up five tubes', blocks: [{ k: 'p', x: 'Label them <b>37 °C</b>, <b>100 °C M</b>, <b>100 °C T</b>, <b>0 °C M</b> and <b>0 °C T</b> (M = measured at that temperature; T = transferred to 37 °C afterwards). Put 1 mL starch and 1 mL enzyme in each, and place them at once in a 37 °C bath, an ice bath and a boiling water bath. Leave them for the achromic time.' }] },
        { k: 'step', n: '2', title: 'Test three tubes', blocks: [{ k: 'p', x: 'Add 2 drops of iodine to <b>37 °C</b>, <b>0 °C M</b> and <b>100 °C M</b>, and record the colours.' }] },
        { k: 'step', n: '3', title: 'Rewarm the other two', blocks: [{ k: 'p', x: 'Move <b>0 °C T</b> and <b>100 °C T</b> to 37 °C for another achromic time, then add 3–5 drops of iodine and record any change.' }] },
        { k: 'table', head: ['Tube', 'Expected colour', 'Inference'], rows: [
          { c: ['<b>37 °C</b>', '<b>Brown</b> (iodine colour)', 'Starch digested to achrodextrin: 37 °C is the optimum'] },
          { c: ['<b>0 °C M</b>', '<b>Violet</b>', 'Digestion incomplete (erythrodextrin/amylodextrin): the cold slows the enzyme'] },
          { c: ['<b>100 °C M</b>', '<b>Blue</b>', 'Starch undigested: boiling <b>denatured</b> the enzyme'] },
          { c: ['<b>0 °C T</b>', '<b>Brown</b>', 'The enzyme <b>recovered</b> at 37 °C: cold only <b>inactivates</b> reversibly'] },
          { c: ['<b>100 °C T</b>', '<b>Blue</b>', 'No recovery: heat denaturation is <b>irreversible</b>'] },
        ] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'For the 0 °C M tube the deck says “room temperature is not optimum”; the tube is in <b>ice</b>, so the reason is the low temperature. The deck’s line that diabetics use strips “fertilized with aldohexose enzyme” means strips <b>impregnated with glucose oxidase</b>, the enzyme that acts on glucose (an aldohexose).' }] },
      ],
    },
  ],
  quiz: [
    ['The achromic point is the time taken by salivary amylase to convert starch to', 'Achrodextrin', ['Amylodextrin', 'Erythrodextrin', 'Glucose'], 'Iodine then gives no colour.', 'Achromic point'],
    ['The optimum pH of salivary amylase is about', '6.8', ['2.0', '8.5', '4.5'], 'Its optimum temperature is 37 °C.', 'Amylase'],
    ['Salivary amylase is activated especially by', 'Chloride ions', ['Calcium ions', 'Sodium ions', 'Phosphate ions'], 'Halide ions activate it.', 'Amylase'],
    ['Amylase cannot digest cellulose because cellulose has', 'β-1,4 glycosidic bonds', ['α-1,4 glycosidic bonds', 'α-1,6 glycosidic bonds', 'No glycosidic bonds'], 'Amylase hydrolyses only α-1,4 bonds.', 'Starch'],
    ['The branched component of starch, making up 70–80%, is', 'Amylopectin', ['Amylose', 'Cellulose', 'Maltose'], 'It has α-1,6 bonds at branch points.', 'Starch'],
    ['Iodine added to undigested starch gives a', 'Blue-black colour', ['Brown colour', 'Brick-red precipitate', 'Purple ring'], 'Achrodextrin gives no colour change.', 'Achromic point'],
    ['In the temperature experiment, the 100 °C tube stays blue because', 'Boiling denatured the amylase', ['Heat speeds starch digestion', 'Iodine is destroyed by heat', 'Starch cannot dissolve when hot'], 'Denaturation is irreversible.', 'Temperature'],
    ['The 0 °C tube turns brown after rewarming to 37 °C because', 'Cold inactivation is reversible', ['The enzyme was denatured', 'Starch froze into maltose', 'Iodine reacts only when warm'], 'The 100 °C tube does not recover.', 'Temperature'],
    ['The violet colour in the 0 °C M tube shows', 'Starch digestion was incomplete', ['Starch was fully digested', 'The enzyme was denatured', 'No reaction began at all'], 'Erythrodextrin or amylodextrin remains.', 'Temperature'],
    ['Glucose test strips used by diabetics rely on', 'Glucose oxidase', ['Salivary amylase', 'Creatine kinase', 'Papain'], 'An enzyme biosensor.', 'Clinical uses'],
    ['An enzyme used clinically as a biomarker of muscle injury is', 'Creatine kinase', ['Papain', 'Glucose oxidase', 'Salivary amylase'], 'Papain aids digestion.', 'Clinical uses'],
    ['Diagnostic enzymes rise in blood mainly because', 'Damaged tissue releases them', ['The liver makes extra enzymes', 'The kidneys stop excreting them', 'Diet adds them to the blood'], 'Each tissue has its own enzymes.', 'Clinical uses'],
  ],
};
