// Biochemistry 1 → The Pentose Phosphate Pathway. From "PPP 2024-physio .pdf" (Prof. L. A.
// Fondjo, KNUST; HB1 Biochemistry 1 theory). Rewrites the original database lesson
// biochemistry-07 with the same id, so progress is kept; practises the course's Quiz 7 and the
// past questions on the pathway. The deck shows the reactions as pictures; they are given here
// from the textbooks it recommends, in our own words.
// Also checked against "PPP 2026 HB.pdf" (2026-11-05).
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostxBio } from '@/data/hb1-lessons/pictures';

export const biochemistryPpp: Hb1Lesson = {
  id: 'biochemistry-07',
  order: 7,
  title: 'The Pentose Phosphate Pathway and G6PD Deficiency',
  summary: 'L. A. Fondjo · Why the shunt exists (ribose 5-phosphate and NADPH), its oxidative and non-oxidative phases, its control by NADP⁺, glutathione in the red cell, and glucose 6-phosphate dehydrogenase deficiency',
  minutes: 24,
  source: 'PPP 2024-physio .pdf (L. A. Fondjo)',
  quizId: 'ppp',
  quizName: 'Quiz · Pentose Phosphate Pathway (lesson)',
  pastSets: ['s7'],
  pastTopics: ['pentose-phosphate-pathway'],
  sections: numberFigures([
    {
      id: 'ppp-what',
      title: 'What the pathway is for',
      kicker: 'Ribose and NADPH',
      blocks: [
        { k: 'p', x: 'The <b>pentose phosphate pathway (PPP)</b>, also called the <b>hexose monophosphate (HMP) shunt</b> or the <b>phosphogluconate pathway</b>, is a series of reactions that oxidises phosphorylated glucose to make <b>ribose 5-phosphate</b> and <b>NADPH</b>. It occurs in the <b>cytosol</b>. It makes <b>no ATP</b>: its products are building blocks and reducing power.' },
        { k: 'ul', items: [
          '<b>Explain</b> what the pathway achieves and why it is called a shunt.',
          '<b>Describe</b> its oxidative and non-oxidative phases.',
          '<b>Explain</b> how it is regulated.',
          '<b>Relate</b> NADPH, glutathione and the red cell to G6PD deficiency, its triggers, symptoms and management.',
        ] },
        { k: 'cards', items: [
          { title: 'Ribose 5-phosphate', blocks: [{ k: 'p', x: 'For <b>nucleotide synthesis</b>: <b>DNA, RNA</b> and cofactors such as <b>CoA, FAD, NAD<sup>+</sup>/NADP<sup>+</sup></b>.' }] },
          { title: 'NADPH', blocks: [{ k: 'p', x: 'Reducing power for <b>biosynthesis</b> (fatty acids, steroids) and for keeping <b>glutathione</b> reduced. NADPH is the phosphorylated form of NADH: <b>NADH</b> mainly drives ATP synthesis; <b>NADPH</b> is used where biosynthesis needs electrons.' }] },
        ] },
        ostxBio('figure-07-01-01ab.jpg', 726, 481, 'The electron carrier NAD⁺ and its reduced form NADH.', 'NADP⁺ is the same molecule with one extra phosphate on the ribose. That phosphate is a “label”: enzymes of biosynthesis recognise NADPH, enzymes of energy production recognise NADH, so the cell can keep the two pools separate.'),
        { k: 'h', x: 'Why it is called a shunt', l: 3 },
        { k: 'p', x: 'It <b>begins</b> with the glycolytic intermediate <b>glucose 6-phosphate</b>, and two of its <b>end products</b>, <b>glyceraldehyde 3-phosphate and fructose 6-phosphate</b>, are glycolytic intermediates too. So the PPP leaves glycolysis and rejoins it: a <b>shunt</b>.' },
      ],
    },
    {
      id: 'ppp-phases',
      title: 'The two phases',
      kicker: 'Oxidative, then non-oxidative',
      blocks: [
        { k: 'h', x: 'The oxidative phase (irreversible)', l: 3 },
        { k: 'step', n: '1', title: 'Glucose 6-phosphate dehydrogenase (G6PD)', blocks: [{ k: 'p', x: '<b>Glucose 6-phosphate + NADP<sup>+</sup> → 6-phosphogluconolactone + NADPH</b>. The <b>rate-limiting, regulatory</b>, essentially irreversible step; the enzyme is <b>highly specific for NADP<sup>+</sup></b>. Its deficiency causes disease.' }] },
        { k: 'step', n: '2', title: 'Lactonase (hydrolysis)', blocks: [{ k: 'p', x: 'The lactone is hydrolysed to <b>6-phosphogluconate</b>.' }] },
        { k: 'step', n: '3', title: '6-Phosphogluconate dehydrogenase', blocks: [{ k: 'p', x: '<b>Oxidation and decarboxylation</b>: 6-phosphogluconate → <b>ribulose 5-phosphate + CO<sub>2</sub> + NADPH</b>.' }] },
        { k: 'box', title: 'Balance of the oxidative phase', tone: 'formula', blocks: [{ k: 'p', x: 'Per glucose 6-phosphate: <b>2 NADPH</b> (from the two dehydrogenase steps) + <b>1 CO<sub>2</sub></b> + <b>1 ribulose 5-phosphate</b>.' }] },
        { k: 'h', x: 'The non-oxidative phase (reversible)', l: 3 },
        { k: 'ul', items: [
          '<b>Isomerase</b>: ribulose 5-phosphate → <b>ribose 5-phosphate</b>; <b>epimerase</b>: ribulose 5-phosphate → <b>xylulose 5-phosphate</b>.',
          '<b>Transketolase</b> (needs <b>TPP</b>, from thiamine) moves 2-carbon units, and <b>transaldolase</b> 3-carbon units, between 3-, 4-, 5-, 6- and 7-carbon sugars.',
          'Excess pentoses are turned into the glycolytic intermediates <b>fructose 6-phosphate and glyceraldehyde 3-phosphate</b> for ATP; run the other way, glycolytic intermediates can be made into pentoses.',
        ] },
        { k: 'p', x: 'Most cells need <b>more NADPH than ribose 5-phosphate</b>, so the non-oxidative phase recycles the extra pentoses back to glucose 6-phosphate, which can pass through the oxidative phase again for more NADPH. A dividing cell that needs ribose more than NADPH can make it from glycolytic intermediates by the reverse reactions.' },
      ],
    },
    {
      id: 'ppp-regulation',
      title: 'Regulation',
      kicker: 'NADP⁺ is the signal',
      blocks: [
        { k: 'ul', items: [
          '<b>G6PD</b> is the regulatory enzyme, controlled by the availability of its substrate <b>NADP<sup>+</sup></b>.',
          '<b>NADPH</b> is a potent <b>competitive inhibitor</b> of G6PD.',
          'When NADPH is used up in reductive biosynthesis, the <b>NADP<sup>+</sup></b> concentration rises and stimulates the pathway to replace it.',
          'The <b>non-oxidative</b> reactions are readily reversible and are controlled by the <b>availability of substrates</b>: their direction shifts with each tissue’s needs.',
        ] },
        { k: 'p', x: 'The pathway is therefore busiest in tissues that make a lot of fat or steroid (liver, adipose tissue, adrenal cortex, lactating breast) and in red cells, which need NADPH to protect themselves from oxidation.' },
      ],
    },
    {
      id: 'ppp-glutathione',
      title: 'Glutathione and the red cell',
      kicker: 'Why red cells need NADPH',
      blocks: [
        { k: 'p', x: '<b>Glutathione</b> is a <b>tripeptide of glutamate, cysteine and glycine</b> made by cells. Its reduced form (<b>GSH</b>) keeps the cell in its normal reduced state. It is a potent <b>antioxidant</b>, <b>conjugates drugs</b> to make them water-soluble, helps <b>amino acid transport</b> across membranes, and is a <b>cofactor</b> in some reactions, such as rearranging protein disulfide bonds.' },
        { k: 'step', n: '1', title: 'GSH destroys peroxide', blocks: [{ k: 'p', x: '<b>2 GSH + H<sub>2</sub>O<sub>2</sub> → GSSG + 2 H<sub>2</sub>O</b> (glutathione peroxidase). Oxidised glutathione (GSSG) is two molecules joined by a <b>disulfide bridge</b>.' }] },
        { k: 'step', n: '2', title: 'NADPH remakes GSH', blocks: [{ k: 'p', x: '<b>GSSG + NADPH + H<sup>+</sup> → 2 GSH + NADP<sup>+</sup></b> (<b>glutathione reductase</b>).' }] },
        { k: 'p', x: 'Red cells live in a highly oxidising, oxygen-rich environment, and <b>reactive oxygen species (ROS)</b> arise spontaneously during O<sub>2</sub> transport. Mature red cells <b>lack mitochondria</b>, so the PPP is their <b>only source of NADPH</b> to regenerate GSH. GSH also keeps the <b>iron of haemoglobin in the ferrous (Fe<sup>2+</sup>) state</b>.' },
        { k: 'p', x: 'Without enough GSH, ROS attack the double bonds of membrane fatty acids, weakening the membrane until the cell <b>haemolyses</b>; they also damage DNA, RNA and proteins. Glutathione can be lowered by <b>stress, poor nutrition, environmental toxins</b> and <b>ageing</b>.' },
      ],
    },
    {
      id: 'ppp-g6pd',
      title: 'G6PD deficiency',
      kicker: 'The commonest enzyme defect',
      blocks: [
        { k: 'p', x: '<b>G6PD deficiency</b> affects <b>more than 400 million</b> people worldwide, about <b>20% of the population in Africa</b>. It is commonest in <b>tropical Africa, Asia, the Middle East, the Mediterranean and Papua New Guinea</b>, and carriers have increased <b>resistance to malaria</b>, which explains the distribution. (In the textbooks it is X-linked, so boys are mostly affected.)' },
        { k: 'box', title: 'The chain of events', tone: 'formula', blocks: [{ k: 'p', x: 'Defective G6PD → <b>too little NADPH</b> → <b>too little reduced glutathione</b> → peroxides and ROS not destroyed → membrane damage → <b>acute haemolytic anaemia</b>. Red cells are hit hardest because they have no mitochondria and no other NADPH source.' }] },
        { k: 'p', x: 'People are usually <b>asymptomatic</b>, but an oxidative stressor can trigger a severe haemolytic episode <b>within hours</b>:' },
        { k: 'table', head: ['Trigger', 'Examples'], rows: [
          { c: ['Infections', 'Bacterial and viral'] },
          { c: ['Pain and fever drugs', '<b>Aspirin, NSAIDs (ibuprofen)</b>'] },
          { c: ['Antibiotics and antimalarials', '<b>Sulfonamides</b>; antimalarials (e.g. primaquine)'] },
          { c: ['Chemicals', '<b>Naphthalene</b> (mothballs)'] },
          { c: ['Foods', '<b>Fava beans</b>, soybeans and some other legumes (favism)'] },
        ] },
        { k: 'p', x: '<b>Symptoms:</b> pallor (of mouth, lips, tongue), extreme tiredness, rapid heartbeat, shortness of breath, dizziness, <b>jaundice</b> (especially in newborns), and <b>dark, tea-coloured urine</b> (haemoglobin from burst cells).' },
        { k: 'p', x: '<b>Management:</b> <b>avoid the oxidative stressors</b>; <b>folic acid and iron</b> supplements; <b>oxygen</b> therapy at times; <b>blood transfusion</b> if anaemia is severe. Haemolysis is usually short-lived but can be <b>life-threatening</b>.' },
        { k: 'box', title: 'G6PD deficiency in pregnancy (2026 deck)', tone: 'life', blocks: [{ k: 'p', x: 'Cells with little reduced glutathione cannot clear peroxides (2 GSH + H<sub>2</sub>O<sub>2</sub> → GSSG + 2 H<sub>2</sub>O), so red cells haemolyse. In pregnancy the deficiency raises the risk of <b>anaemia</b>, <b>spontaneous abortion</b>, <b>low birth-weight</b> babies and <b>neonatal jaundice</b>.' }] },
      ],
    },
  ]),
  extras: {
    facts: [
      { h: 'Key points', lines: [
        'Cytosol. Products: ribose 5-phosphate (nucleotides) and NADPH (biosynthesis, glutathione). No ATP.',
        'Oxidative (irreversible): G6PD → lactonase → 6-phosphogluconate DH; 2 NADPH + CO₂ + ribulose 5-P.',
        'Non-oxidative (reversible): isomerase, epimerase, transketolase (TPP), transaldolase → F6P + G3P.',
        'G6PD is rate-limiting; NADPH inhibits it competitively; NADP⁺ stimulates.',
        'Glutathione = Glu-Cys-Gly; 2 GSH + H₂O₂ → GSSG + 2 H₂O; glutathione reductase uses NADPH.',
        'G6PD deficiency: > 400 million, ≈ 20% in Africa, malaria resistance; triggers: infections, aspirin, sulfonamides, naphthalene, fava beans.',
      ] },
    ],
  },
  quiz: [
    ['The pentose phosphate pathway takes place in the', 'Cytosol', ['Mitochondrial matrix', 'Nucleus', 'Lysosome'], 'Both phases run in the cytosol.', 'Overview'],
    ['The two main products of the pentose phosphate pathway are', 'Ribose 5-phosphate and NADPH', ['ATP and NADH', 'Pyruvate and lactate', 'Acetyl CoA and reduced FADH₂'], 'It makes building blocks and reducing power, not ATP.', 'Overview'],
    ['Ribose 5-phosphate is used mainly to make', 'Nucleotides for DNA and RNA', ['Fatty acids for membranes', 'Glycogen for liver storage', 'Amino acids for new proteins'], 'Also cofactors such as CoA, FAD and NAD⁺.', 'Overview'],
    ['The pathway is called a shunt because', 'It leaves and rejoins glycolysis', ['It bypasses the mitochondria', 'It runs only in red blood cells', 'It converts stored fat into glucose'], 'It starts from glucose 6-P and ends with F6P and G3P.', 'Overview'],
    ['NADPH differs from NADH in that it', 'Has an extra phosphate', ['Carries no electrons at all, unlike NADH', 'Is used mainly to make ATP in the ETC', 'Is made only in the mitochondrial matrix'], 'NADH drives ATP synthesis; NADPH donates electrons for biosynthesis.', 'Overview'],
    ['The rate-limiting enzyme of the pentose phosphate pathway is', 'Glucose 6-phosphate dehydrogenase', ['Transketolase (with TPP)', 'Transaldolase', '6-Phosphogluconate dehydrogenase'], 'It is the regulatory, essentially irreversible step.', 'Oxidative phase'],
    ['Glucose 6-phosphate dehydrogenase is highly specific for', 'NADP⁺', ['NAD⁺', 'FAD', 'ATP'], 'Each oxidative dehydrogenase makes NADPH.', 'Oxidative phase'],
    ['How many NADPH are made per glucose 6-phosphate in the oxidative phase?', 'Two', ['One', 'Four', 'None'], 'One by G6PD and one by 6-phosphogluconate dehydrogenase.', 'Oxidative phase'],
    ['6-Phosphogluconate dehydrogenase catalyses', 'Oxidation and decarboxylation', ['Hydrolysis of a lactone', 'Isomerisation of a ketose', 'Transfer of two-carbon sugar units'], 'It gives ribulose 5-phosphate, CO₂ and NADPH.', 'Oxidative phase'],
    ['The non-oxidative phase', 'Interconverts 3- to 7-carbon sugars', ['Is the main source of NADPH', 'Is irreversible and rate-limiting', 'Takes place in the mitochondria'], 'It turns excess pentoses into glycolytic intermediates.', 'Non-oxidative phase'],
    ['Transketolase requires the coenzyme', 'Thiamine pyrophosphate', ['Biotin', 'Pyridoxal phosphate (B₆)', 'Vitamin K'], 'TPP comes from thiamine.', 'Non-oxidative phase'],
    ['Most cells need more NADPH than ribose, so the non-oxidative phase', 'Recycles excess pentoses', ['Makes extra ribose for export', 'Shuts down the oxidative phase', 'Converts all the NADPH back to NADP⁺'], 'The recycled sugars can pass through the oxidative phase again.', 'Non-oxidative phase'],
    ['G6PD is competitively inhibited by', 'NADPH', ['NADP⁺', 'Glucose 6-phosphate', 'Ribose 5-phosphate'], 'High NADP⁺ stimulates the pathway to replace used NADPH.', 'Regulation'],
    ['The non-oxidative phase is controlled mainly by', 'Availability of substrates', ['Insulin and glucagon', 'Allosteric ATP inhibition', 'Phosphorylation by kinases'], 'Its reactions are readily reversible.', 'Regulation'],
    ['Glutathione is a tripeptide of', 'Glutamate, cysteine and glycine', ['Glycine, alanine and serine', 'Lysine, arginine and histidine', 'Glutamine, cysteine and methionine'], 'The cysteine SH group does the reducing.', 'Glutathione'],
    ['Reduced glutathione destroys hydrogen peroxide by', '2 GSH + H₂O₂ → GSSG + 2 H₂O', ['2 GSH + O₂ → GSSG + H₂O₂', 'GSSG + H₂O₂ → 2 GSH + O₂', 'GSH + NADP⁺ → GSSG + NADPH'], 'GSSG is two glutathiones joined by a disulfide bridge.', 'Glutathione'],
    ['GSSG is converted back to GSH by glutathione reductase using', 'NADPH', ['NADH', 'FADH₂', 'ATP'], 'That is why red cells depend on the PPP.', 'Glutathione'],
    ['Red blood cells depend entirely on the PPP for NADPH because they', 'Lack mitochondria', ['Lack a cell membrane', 'Cannot carry out glycolysis', 'Have no haemoglobin'], 'Mature red cells have no other source of NADPH.', 'Glutathione'],
    ['GSH helps keep the iron of haemoglobin in the', 'Ferrous (Fe²⁺) state', ['Ferric (Fe³⁺) state', 'Free ionic state', 'Haemosiderin storage form'], 'Fe²⁺ haemoglobin carries oxygen.', 'Glutathione'],
    ['About what proportion of the population in Africa has G6PD deficiency?', '20%', ['2%', '50%', '80%'], 'Over 400 million people worldwide are affected.', 'G6PD deficiency'],
    ['Carriers of G6PD deficiency have increased resistance to', 'Malaria', ['Tuberculosis', 'Cholera', 'HIV infection'], 'This explains its distribution in the tropics.', 'G6PD deficiency'],
    ['In G6PD deficiency, haemolysis results from', 'Too little NADPH and reduced glutathione', ['Too much NADPH in the red cells', 'Loss of glycolytic ATP production', 'Antibodies against the red cell surface antigens'], 'ROS damage the red cell membrane.', 'G6PD deficiency'],
    ['Which can trigger haemolysis in G6PD deficiency?', 'Fava beans', ['White rice', 'Cow’s milk', 'Ripe bananas'], 'Also infections, aspirin, sulfonamides, antimalarials and naphthalene.', 'G6PD deficiency'],
    ['Dark, tea-coloured urine in G6PD deficiency is due to', 'Haemoglobin from burst red cells', ['Excess bilirubin from the liver', 'Fructose spilling into urine', 'Myoglobin from damaged muscle'], 'Jaundice, pallor and tiredness also occur.', 'G6PD deficiency'],
    ['The main management of G6PD deficiency is', 'Avoiding oxidative stressors', ['Lifelong insulin injections', 'A strict fructose-free diet', 'Daily aspirin for life'], 'Plus folic acid, iron, oxygen and transfusion if needed.', 'G6PD deficiency'],
    ['A pregnancy outcome linked to G6PD deficiency is', 'Low birth-weight infants', ['Unusually large (macrosomic) babies', 'Gestational diabetes mellitus', 'Neural tube defects in the fetus'], 'Also anaemia, miscarriage and neonatal jaundice.', 'G6PD'],
  ],
};
