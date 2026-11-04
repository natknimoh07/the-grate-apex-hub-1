// Biochemistry → Oxygen Carriers: five more questions for every reading section
// (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/oxygen-carriers/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 Two oxygen carriers ─────────────────────────────
  mcq('s1-1-1', 'carrier-roles', 'Besides storing oxygen, what else does myoglobin do in red muscle?', 'It helps oxygen move within the muscle', ['It carries CO₂ from the muscle to the lungs', 'It makes the haem group for haemoglobin', 'It buffers lactic acid during exercise only'], {
    explanation: 'Myoglobin is an oxygen reserve and helps oxygen move within red muscle.',
  }),
  tf({ id: 's1-1-2', conceptId: 'carrier-roles', statement: 'The haem group of myoglobin is a polypeptide unit.', answer: false, explanation: 'Haem is a non-polypeptide unit — that is why the proteins can bind oxygen.' }),
  mcq('s1-1-3', 'carrier-roles', 'Which protein acts as the oxygen reserve of red muscle?', 'Myoglobin', ['Haemoglobin', 'Albumin', 'Transferrin'], {
    explanation: 'Myoglobin serves as a reserve supply of oxygen in red muscle.',
  }),
  mcq('s1-1-4', 'carrier-roles', 'Which statement about the two carriers is correct?', 'Both bind O₂, CO₂ and H⁺, but are affected differently', ['Both bind O₂ only, and are affected in the same way', 'Only haemoglobin binds O₂; myoglobin binds only CO₂', 'Only myoglobin binds H⁺; haemoglobin binds only O₂ and CO₂'], {
    explanation: 'Slide 2: both bind the same species, which affect them differently.',
  }),
  fill('s1-1-5', 'carrier-roles', 'Both proteins bind oxygen because they carry a ____ group.', ['haem', 'heme'], {
    explanation: 'The haem group is the oxygen-binding unit.',
  }),

  // ─── Lesson 1 · S2 The haem iron ───────────────────────────────────
  mcq('s1-2-1', 'haem-iron', 'What is myoglobin called when its iron is ferric (Fe³⁺)?', 'Ferrimyoglobin', ['Ferromyoglobin', 'Oxymyoglobin', 'Carboxymyoglobin'], {
    explanation: 'Myoglobin is named like haemoglobin: ferro- for Fe²⁺, ferri- for Fe³⁺.',
  }),
  mcq('s1-2-2', 'haem-iron', 'How many bonds in total can the haem iron form?', 'Six — four in the ring and two on its faces', ['Four — all of them to the ring nitrogens', 'Five — four in the ring and one above it', 'Eight — four in the ring and four outside it'], {
    explanation: 'Four bonds to the ring nitrogens plus the fifth and sixth positions.',
  }),
  tf({ id: 's1-2-3', conceptId: 'haem-iron', statement: 'Ferromyoglobin binds oxygen.', answer: true, explanation: 'Only the ferrous (Fe²⁺) forms bind O₂.' }),
  mcq('s1-2-4', 'haem-iron', 'A haemoglobin sample turns into methaemoglobin. What has happened to its iron?', 'It has been oxidised from Fe²⁺ to Fe³⁺', ['It has been reduced from Fe³⁺ to Fe²⁺', 'It has been removed from the ring', 'It has been replaced by a zinc ion'], {
    explanation: 'Methaemoglobin is ferrihaemoglobin: the iron is ferric.',
  }),
  mcq('s1-2-5', 'haem-iron', 'Which of these forms can carry oxygen?', 'Ferromyoglobin', ['Ferrimyoglobin', 'Methaemoglobin', 'Ferrihaemoglobin'], {
    explanation: 'Only the ferrous (ferro-) forms bind oxygen.',
  }),
  // ─── Lesson 1 · S3 A compact, helical protein ──────────────────────
  mcq('s1-3-1', 'myoglobin-shape', 'Which non-helical segment of myoglobin lies between helices C and D?', 'CD', ['C1', 'DC', 'NA'], {
    explanation: 'Non-helical segments are named after the two helices they join.',
  }),
  mcq('s1-3-2', 'myoglobin-shape', 'What does the residue name “E7” tell you?', 'The seventh residue of helix E', ['The seventh helix, called E', 'The fifth residue of helix G', 'A segment between helices E and G'], {
    explanation: 'Residues are named by helix and position: E7 is the 7th residue of helix E.',
  }),
  tf({ id: 's1-3-3', conceptId: 'myoglobin-shape', statement: 'Myoglobin has a high α-helix content.', answer: true, explanation: 'About 75% of its main chain is α-helical.' }),
  mcq('s1-3-4', 'myoglobin-shape', 'How are myoglobin’s major helices labelled?', 'A to H', ['1 to 8', 'α to θ', 'I to VIII'], {
    explanation: 'Eight major helices, labelled A to H.',
  }),
  mcq('s1-3-5', 'myoglobin-shape', 'Which best describes the shape of myoglobin?', 'Compact', ['Long and fibrous', 'Flat and sheet-like', 'Open and loose'], {
    explanation: 'Myoglobin is compact, about 45 × 35 × 25 Å.',
  }),

  // ─── Lesson 1 · S4 What ends a helix ───────────────────────────────
  mcq('s1-4-1', 'helix-termination', 'Where in an α-helix can a proline sit?', 'At one end of the helix', ['In the middle of the helix', 'Anywhere inside the helix', 'Only in the helix core'], {
    explanation: 'Proline fits an α-helix only at one end.',
  }),
  mcq('s1-4-2', 'helix-termination', 'What does slide 10 call proline’s five-membered ring?', 'A pyrrolidone ring', ['A pyrrole ring', 'A benzene ring', 'An imidazole ring (histidine)'], {
    explanation: 'Slide 10 calls it a pyrrolidone ring.',
  }),
  mcq('s1-4-3', 'helix-termination', 'Myoglobin has four prolines but eight helix ends. What does that tell you?', 'Other factors must also end helices', ['Each proline ends exactly two helices', 'Half of the helices never end at all', 'Prolines are counted twice in each helix'], {
    explanation: 'Four prolines cannot explain eight terminations, so other factors also end helices.',
  }),
  mcq('s1-4-4', 'helix-termination', 'Which group of serine or threonine can help end a helix?', 'Its hydroxyl group', ['Its amino group', 'Its methyl group', 'Its carboxyl group'], {
    explanation: 'The –OH of serine or threonine can interact with a main-chain carbonyl.',
  }),
  mcq('s1-4-5', 'helix-termination', 'The serine or threonine –OH interacts with which part of the chain to end a helix?', 'A main-chain carbonyl group', ['A side-chain amino group', 'The haem propionate group', 'The iron at the haem centre'], {
    explanation: 'Slide 12: the hydroxyl interacts with a main-chain carbonyl group.',
  }),

  // ─── Lesson 1 · S5 Inside vs outside ───────────────────────────────
  mcq('s1-5-1', 'residue-distribution', 'Which of these would you NOT expect in myoglobin’s interior?', 'Aspartate', ['Leucine', 'Valine', 'Phenylalanine'], {
    explanation: 'Charged residues such as aspartate are not found inside; the interior is nonpolar.',
  }),
  mcq('s1-5-2', 'residue-distribution', 'Why do threonine, tyrosine and tryptophan point their nonpolar part inward?', 'They are amphipathic', ['They are fully charged', 'They are too small to fit', 'They bind the haem iron'], {
    explanation: 'Amphipathic residues put their nonpolar part inside.',
  }),
  tf({ id: 's1-5-3', conceptId: 'residue-distribution', statement: 'Methionine is one of the nonpolar residues found inside myoglobin.', answer: true, explanation: 'The interior holds leucine, valine, methionine and phenylalanine.' }),
  mcq('s1-5-4', 'residue-distribution', 'Which pair of side-chain types is missing from myoglobin’s interior?', 'Charged and amide side chains', ['Nonpolar and aromatic side chains', 'Small and branched side chains', 'Sulfur and methyl side chains'], {
    explanation: 'No charged or amide side chains are found inside.',
  }),
  fill('s1-5-5', 'residue-distribution', 'The interior of myoglobin is almost entirely ____.', ['nonpolar', 'non-polar', 'hydrophobic'], {
    explanation: 'Slides 13–16: the interior is almost entirely nonpolar.',
  }),

  // ─── Lesson 2 · S1 Two histidines ──────────────────────────────────
  mcq('s2-1-1', 'proximal-distal-histidine', 'On which side of the haem plane does the iron sit in deoxymyoglobin?', 'The F8 side', ['The E7 side', 'Exactly in the plane', 'The B6 side'], {
    explanation: 'The iron sits about 0.3 Å out of the plane, towards F8.',
  }),
  mcq('s2-1-2', 'proximal-distal-histidine', 'Which histidine is bonded directly to the iron?', 'The proximal histidine, F8', ['The distal histidine, E7', 'Both histidines equally', 'Neither — only the O₂ is bonded'], {
    explanation: 'F8 (proximal) binds the iron at the fifth position; E7 is not bonded.',
  }),
  tf({ id: 's2-1-3', conceptId: 'proximal-distal-histidine', statement: 'Oxygen binds on the opposite side of the haem plane from the proximal histidine.', answer: true, explanation: 'F8 is at the fifth position; O₂ binds at the sixth, on the other side.' }),
  mcq('s2-1-4', 'proximal-distal-histidine', 'What is the role of the distal histidine E7?', 'It shapes the O₂ site, protecting iron and hindering CO', ['It holds the haem iron at the fifth coordination position', 'It carries oxygen from the lungs to the haem pocket', 'It joins the haem propionates to the protein surface'], {
    explanation: 'E7 shapes the oxygen site but is not bonded to the haem.',
  }),
  fill('s2-1-5', 'proximal-distal-histidine', 'The histidine bonded to the haem iron is called the ____ histidine.', ['proximal'], {
    explanation: 'Proximal = near: F8 bonds the iron.',
  }),

  // ─── Lesson 2 · S2 Keeping the iron ferrous ────────────────────────
  mcq('s2-2-1', 'preventing-oxidation', 'For how long can free haem in water bind oxygen reversibly?', 'Only a very short time', ['For many days', 'For as long as O₂ is present', 'Not at all'], {
    explanation: 'Free haem binds O₂ briefly before being oxidised to methaem.',
  }),
  mcq('s2-2-2', 'preventing-oxidation', 'Put the fate of free haem in water in order.', 'Binds O₂ → haem–O₂–haem forms → methaem', ['Methaem → haem–O₂–haem forms → binds O₂', 'Haem–O₂–haem forms → binds O₂ → methaem', 'Binds O₂ → methaem → haem–O₂–haem forms'], {
    explanation: 'Free haem binds O₂ briefly; the sandwich forms; the iron is oxidised.',
  }),
  tf({ id: 's2-2-3', conceptId: 'preventing-oxidation', statement: 'Without its polypeptide chain, O₂ would become trapped in a haem–O₂–haem complex.', answer: true, explanation: 'Slide 20: the hindered environment prevents this trap.' }),
  mcq('s2-2-4', 'preventing-oxidation', 'Why can methaem not carry oxygen?', 'Its iron is ferric (Fe³⁺)', ['Its ring has been opened', 'Its iron has been lost', 'Its histidines are missing'], {
    explanation: 'Methaem has ferric iron, which cannot bind O₂.',
  }),
  mcq('s2-2-5', 'preventing-oxidation', 'What does the globin chain give the haem that free haem lacks?', 'A hindered environment around the iron', ['A second iron atom for each haem', 'A supply of electrons to reduce O₂', 'A channel that lets water reach the iron'], {
    explanation: 'The hindered pocket lets haem bind O₂ reversibly for long periods.',
  }),

  // ─── Lesson 2 · S3 Why CO binds less tightly ───────────────────────
  mcq('s2-3-1', 'co-binding', 'By about how many times is CO’s advantage over O₂ reduced inside the proteins?', 'About 125 times (25,000 → 200)', ['About 2 times (400 → 200)', 'About 1,000 times (200,000 → 200)', 'Not at all — it stays 25,000'], {
    explanation: '25,000 ÷ 200 = 125: the protein cuts CO’s preference about 125-fold.',
    difficulty: 'advanced',
  }),
  mcq('s2-3-2', 'co-binding', 'Why is O₂ binding not hindered by the distal histidine in the same way as CO?', 'O₂ binds in a bent mode anyway', ['O₂ binds in a straight line', 'O₂ binds to histidine E7', 'O₂ binds at the fifth position'], {
    explanation: 'O₂ normally binds bent, so the pocket does not strain it.',
  }),
  tf({ id: 's2-3-3', conceptId: 'co-binding', statement: 'In myoglobin, the Fe–C bond of bound CO is at an angle to the C–O bond.', answer: true, explanation: 'The distal histidine prevents linear binding, giving strained, weaker binding.' }),
  mcq('s2-3-4', 'co-binding', 'What kind of binding does CO have in myoglobin and haemoglobin?', 'Strained and weaker', ['Linear and stronger', 'Bent and stronger', 'Linear and weaker'], {
    explanation: 'Forced to bind bent, CO binds in a strained, weaker way.',
  }),
  fill('s2-3-5', 'co-binding', 'Free haem in solution binds CO about ____ times more strongly than O₂.', ['25,000', '25000', '25 000'], {
    explanation: 'In the proteins this falls to about 200.',
  }),

  // ─── Lesson 2 · S4 Conserved residues ──────────────────────────────
  mcq('s2-4-1', 'conserved-residues', 'From how many species were the haemoglobins compared?', 'More than 20', ['Exactly 9', 'About 5', 'More than 200'], {
    explanation: 'Haemoglobins from more than 20 species were compared.',
  }),
  mcq('s2-4-2', 'conserved-residues', 'Which conserved residue is phenylalanine?', 'CD1', ['F4', 'B6', 'HC2'], {
    explanation: 'CD1 is phenylalanine, a haem contact.',
  }),
  tf({ id: 's2-4-3', conceptId: 'conserved-residues', statement: 'Leucine F4 is a haem contact.', answer: true, explanation: 'F4 leucine and CD1 phenylalanine are the haem contacts.' }),
  mcq('s2-4-4', 'conserved-residues', 'Where do helices B and E cross closely enough to need glycine?', 'At position B6', ['At position F8', 'At position C2', 'At position H10'], {
    explanation: 'B6 is almost always glycine, leaving room where B and E cross.',
  }),
  mcq('s2-4-5', 'conserved-residues', 'Why are conserved residues thought to be especially important?', 'They hardly change across species', ['They are always on the surface', 'They all bind 2,3-BPG', 'They are all histidines in the haem pocket'], {
    explanation: 'Positions kept the same in nearly all species are especially important for function.',
  }),

  // ─── Lesson 3 · S1 Haemoglobin A ───────────────────────────────────
  mcq('s3-1-1', 'haemoglobin-structure', 'How many polypeptide chains make up haemoglobin A?', 'Four', ['Two', 'One', 'Eight'], {
    explanation: 'HbA (α₂β₂) has four chains packed together.',
  }),
  mcq('s3-1-2', 'haemoglobin-structure', 'Which describes the shape of haemoglobin A?', 'Spherical', ['Rod-shaped', 'Flat disc', 'Long fibre'], {
    explanation: 'Haemoglobin A is a spherical molecule about 55 Å across.',
  }),
  tf({ id: 's3-1-3', conceptId: 'haemoglobin-structure', statement: 'The four haems of haemoglobin sit close together at its centre.', answer: false, explanation: 'They sit in crevices near the outside, far apart from each other.' }),
  mcq('s3-1-4', 'haemoglobin-structure', 'How many more amino acids does a β chain have than an α chain?', '5', ['10', '1', '15'], {
    explanation: 'β chains have 146 amino acids; α chains 141.',
  }),
  fill('s3-1-5', 'haemoglobin-structure', 'Normal adult haemoglobin is called haemoglobin ____.', ['A', 'HbA'], {
    explanation: 'Haemoglobin A has the subunit composition α₂β₂.',
  }),

  // ─── Lesson 3 · S2 An allosteric protein ───────────────────────────
  mcq('s3-2-1', 'allostery', 'What is another name for 2,3-diphosphoglycerate?', '2,3-Bisphosphoglycerate (2,3-BPG)', ['1,3-Bisphosphoglycerate', '3-Phosphoglycerate', '1,3-Bisphosphoglycerate (1,3-BPG)'], {
    explanation: '2,3-DPG is also called 2,3-BPG.',
  }),
  mcq('s3-2-2', 'allostery', 'Which of these is an organic phosphate that regulates haemoglobin?', '2,3-BPG', ['ATP synthase', 'Pyridoxal phosphate', 'Glucose 6-phosphate'], {
    explanation: 'Slide 30 names organic phosphates such as 2,3-DPG (2,3-BPG).',
  }),
  tf({ id: 's3-2-3', conceptId: 'allostery', statement: 'H⁺ and CO₂ change the oxygen affinity of the haems from sites far away from them.', answer: true, explanation: 'That is the classic allosteric effect.' }),
  mcq('s3-2-4', 'allostery', 'Why is haemoglobin called an allosteric protein?', 'Molecules bound far from the haems change their O₂ affinity', ['Its four haems each bind a different gas molecule', 'It can switch from binding O₂ to binding glucose', 'It is made of two different kinds of polypeptide chain, α and β'], {
    explanation: 'Allosteric: binding at one site affects a separate site.',
  }),
  fill('s3-2-5', 'allostery', 'An allosteric interaction is between two spatially ____ sites on a protein.', ['separate', 'distinct', 'distant'], {
    explanation: 'Slide 30: an interaction between two spatially separate sites.',
  }),

  // ─── Lesson 3 · S3 Subunit contacts and the T ↔ R switch ──────────
  mcq('s3-3-1', 't-r-switch', 'Which subunit interface is the functional contact?', 'α₁β₂', ['α₁β₁', 'α₁α₂', 'β₁β₂'], {
    explanation: 'The α₁β₂ interface changes on oxygenation and is closely linked to the haems.',
  }),
  mcq('s3-3-2', 't-r-switch', 'What does the “T” in the T state stand for?', 'Taut', ['Tight', 'Tense', 'Tetramer'], {
    explanation: 'The lecture calls deoxyhaemoglobin the taut (T) form.',
  }),
  tf({ id: 's3-3-3', conceptId: 't-r-switch', statement: 'The relaxed (R) form is oxyhaemoglobin.', answer: true, explanation: 'On oxygenation the bonds between subunits break: the R form.' }),
  mcq('s3-3-4', 't-r-switch', 'What lets the subunits slide across each other at the α₁β₂ interface?', 'Its dove-tailed shape', ['Its covalent disulfide bonds', 'Its 2,3-BPG binding pocket', 'Its haem propionate groups'], {
    explanation: 'The dove-tailed interface lets the subunits slide on oxygenation.',
  }),
  mcq('s3-3-5', 't-r-switch', 'Why is the α₁β₁ contact called a stabilising contact?', 'It is large and relatively fixed', ['It changes greatly on oxygenation', 'It binds 2,3-BPG in the T state', 'It holds the proximal histidine'], {
    explanation: 'The α₁β₁ contact is large and stays fixed.',
  }),

  // ─── Lesson 3 · S4 Myoglobin vs haemoglobin binding ────────────────
  mcq('s3-4-1', 'mb-vs-hb-binding', 'Which is regulated by 2,3-DPG?', 'Haemoglobin only', ['Myoglobin only', 'Both proteins', 'Neither of the two'], {
    explanation: 'Slide 35: only haemoglobin is regulated by 2,3-DPG.',
  }),
  tf({ id: 's3-4-2', conceptId: 'mb-vs-hb-binding', statement: 'Myoglobin binds oxygen co-operatively.', answer: false, explanation: 'Myoglobin’s binding is non-co-operative.' }),
  mcq('s3-4-3', 'mb-vs-hb-binding', 'Which property belongs to myoglobin?', 'Unaffected by pH and pCO₂', ['Regulated by 2,3-DPG', 'Co-operative O₂ binding', 'Many weak bonds broken on binding'], {
    explanation: 'Myoglobin is not affected by pH, pCO₂ or 2,3-DPG.',
  }),
  mcq('s3-4-4', 'mb-vs-hb-binding', 'In how many of slide 35’s three features do the proteins differ?', 'All three', ['Only one', 'Only two', 'None of them'], {
    explanation: 'They differ in co-operativity, pH/pCO₂ effects and 2,3-DPG regulation.',
  }),
  fill('s3-4-5', 'mb-vs-hb-binding', 'Haemoglobin’s oxygen binding is ____: binding at one haem helps the next.', ['co-operative', 'cooperative'], {
    explanation: 'Haemoglobin binds O₂ co-operatively; myoglobin does not.',
  }),

  // ─── Lesson 3 · S5 The oxygen dissociation curve ───────────────────
  mcq('s3-5-1', 'dissociation-curve', 'What is the typical pO₂ in the alveoli?', 'About 100 torr', ['About 26 torr', 'About 20 torr', 'About 1 torr only'], {
    explanation: 'About 100 torr in the alveoli; about 20 torr in active muscle capillaries.',
  }),
  mcq('s3-5-2', 'dissociation-curve', 'What range of values can fractional saturation (Y) take?', '0 to 1', ['0 to 100 torr', '1 to 26', '−1 to +1'], {
    explanation: 'Y runs from 0 (no sites occupied) to 1 (all occupied).',
  }),
  tf({ id: 's3-5-3', conceptId: 'dissociation-curve', statement: 'Haemoglobin’s oxygen dissociation curve is sigmoid.', answer: true, explanation: 'Sigmoid and to the right, because binding is co-operative.' }),
  mcq('s3-5-4', 'dissociation-curve', 'Why can haemoglobin both load and unload oxygen?', 'Its P50 lies between lung and tissue pO₂', ['Its P50 is above the pO₂ of the lungs', 'Its P50 is below the pO₂ of active muscle', 'Its P50 equals the pO₂ of the alveoli'], {
    explanation: 'P50 = 26 torr, between ~100 (alveoli) and ~20 torr (active muscle).',
  }),
  fill('s3-5-5', 'dissociation-curve', 'The abbreviation ODC stands for oxygen ____ curve.', ['dissociation'], {
    explanation: 'Saturation plotted against pO₂ is the oxygen dissociation curve.',
  }),

  // ─── Lesson 4 · S1 The Bohr–Haldane effect ─────────────────────────
  mcq('s4-1-1', 'bohr-effect', 'Which two factors does the Bohr–Haldane effect describe?', 'pH and pCO₂', ['Temperature and pO₂', '2,3-BPG and pO₂', 'Iron and globin'], {
    explanation: 'It is the effect of pH and pCO₂ on oxygen binding by haemoglobin.',
  }),
  mcq('s4-1-2', 'bohr-effect', 'Where is the pH near the lower end of normal and pCO₂ near the upper end?', 'At the tissues', ['In the alveoli', 'In the plasma only', 'In the red-cell nucleus'], {
    explanation: 'At the tissues: low pH, high pCO₂ — the curve shifts right.',
  }),
  tf({ id: 's4-1-3', conceptId: 'bohr-effect', statement: 'A right shift of the curve means haemoglobin’s oxygen affinity falls.', answer: true, explanation: 'Right shift = lower affinity = O₂ released.' }),
  mcq('s4-1-4', 'bohr-effect', 'What happens to haemoglobin as blood passes the alveolar capillaries?', 'pH rises, pCO₂ falls, and O₂ is loaded', ['pH falls, pCO₂ rises, and O₂ is released', 'pH rises, pCO₂ rises, and O₂ is released', 'pH falls, pCO₂ falls, and O₂ is loaded'], {
    explanation: 'In the lungs the curve shifts left and affinity rises.',
  }),
  fill('s4-1-5', 'bohr-effect', 'Lowering the pH shifts haemoglobin’s curve to the ____.', ['right'], {
    explanation: 'Lower pH → right shift → lower O₂ affinity.',
  }),

  // ─── Lesson 4 · S2 Who carries the Bohr protons ────────────────────
  mcq('s4-2-1', 'bohr-mechanism', 'Into how many groups do slides 43–44 sort haemoglobin’s ionisable residues?', 'Three', ['Two', 'Four', 'Seven'], {
    explanation: 'Reversible binders, too basic, and too acidic.',
  }),
  mcq('s4-2-2', 'bohr-mechanism', 'A residue cannot bind H⁺ even at the tissues. Which group is it in?', 'Too acidic', ['Too basic', 'Reversible binder', 'Bohr carrier'], {
    explanation: 'Too-acidic residues cannot bind H⁺ even at tissue pH.',
  }),
  tf({ id: 's4-2-3', conceptId: 'bohr-mechanism', statement: 'Every ionisable residue of haemoglobin contributes to the Bohr effect.', answer: false, explanation: 'Only the reversible H⁺ binders do; too-basic and too-acidic residues do not.' }),
  mcq('s4-2-4', 'bohr-mechanism', 'Why do “too basic” residues not carry the Bohr effect?', 'They cannot release H⁺ in the lungs', ['They cannot bind H⁺ at the tissues', 'They bind O₂ instead of binding H⁺', 'They are buried in the haem pocket'], {
    explanation: 'They bind H⁺ at the tissues but keep it in the lungs.',
  }),
  mcq('s4-2-5', 'bohr-mechanism', 'Which residues carry the Bohr protons?', 'Those that bind H⁺ reversibly', ['Those that are too basic', 'Those that are too acidic', 'Those buried inside the haem pocket'], {
    explanation: 'Only the reversible H⁺ binders carry the Bohr effect.',
  }),

  // ─── Lesson 4 · S3 How 2,3-BPG binds ───────────────────────────────
  mcq('s4-3-1', 'bpg-binding', 'How many positive charges in total bind one 2,3-BPG?', 'Six', ['Three', 'Four', 'Eight'], {
    explanation: 'Three on each β chain: six positive charges.',
  }),
  mcq('s4-3-2', 'bpg-binding', 'Which chains of haemoglobin does 2,3-BPG cross-link?', 'The two β chains', ['The two α chains', 'An α and a β chain', 'All four chains'], {
    explanation: 'By cross-linking the β chains, BPG stabilises the T state.',
  }),
  tf({ id: 's4-3-3', conceptId: 'bpg-binding', statement: 'O₂ and 2,3-BPG binding to haemoglobin are mutually exclusive.', answer: true, explanation: 'BPG binds deoxyhaemoglobin but not oxyhaemoglobin.' }),
  mcq('s4-3-4', 'bpg-binding', 'Which state of haemoglobin does 2,3-BPG stabilise?', 'The deoxy (T) state', ['The oxy (R) state', 'The ferric (Fe³⁺) state', 'The CO-bound state'], {
    explanation: 'BPG stabilises the deoxyhaemoglobin (T) quaternary structure.',
  }),
  mcq('s4-3-5', 'bpg-binding', 'Which residue is numbered 82 (EF6) among the BPG-binding groups?', 'Lysine', ['Histidine', 'Serine', 'Aspartate'], {
    explanation: 'Lys 82 (EF6), with the α-amino group/His NA2 and His 143 (H21).',
  }),

  // ─── Lesson 4 · S4 Why 2,3-BPG matters ─────────────────────────────
  mcq('s4-4-1', 'bpg-p50', 'Without 2,3-BPG, haemoglobin’s binding curve would resemble which protein’s?', 'Myoglobin’s', ['Albumin’s', 'Transferrin’s', 'Fetal haemoglobin’s'], {
    explanation: 'Without BPG, P50 is 1 torr — like myoglobin.',
  }),
  mcq('s4-4-2', 'bpg-p50', 'At a capillary pO₂ of 26 torr WITHOUT 2,3-BPG, how much O₂ would haemoglobin unload?', 'Almost none', ['About half', 'About a quarter', 'All of it'], {
    explanation: 'Without BPG it stays fully saturated (SO₂ ≈ 1.0) at 26 torr.',
  }),
  tf({ id: 's4-4-3', conceptId: 'bpg-p50', statement: '2,3-BPG lets haemoglobin release half of its oxygen at a capillary pO₂ of 26 torr.', answer: true, explanation: 'With BPG, SO₂ = 0.5 at 26 torr.' }),
  mcq('s4-4-4', 'bpg-p50', 'What is the pO₂ in the capillaries, according to slide 53?', 'About 26 torr', ['About 100 torr', 'About 1 torr', 'About 60 torr'], {
    explanation: 'Capillary pO₂ is about 26 torr — the P50 of haemoglobin with BPG.',
  }),
  mcq('s4-4-5', 'bpg-p50', 'What happens to oxygen unloading if 2,3-BPG levels rise further?', 'More O₂ is unloaded — the curve shifts right', ['Less O₂ is unloaded — the curve shifts left', 'No change — BPG is already saturating', 'O₂ binding stops completely, even in the lungs'], {
    explanation: 'Higher BPG shifts the curve further right (slide 55).',
  }),

  // ─── Lesson 4 · S5 Fetal haemoglobin ───────────────────────────────
  mcq('s4-5-1', 'fetal-haemoglobin', 'Which chain replaces the β chain in fetal haemoglobin?', 'γ', ['δ', 'ε', 'ζ'], {
    explanation: 'HbF is α₂γ₂.',
  }),
  mcq('s4-5-2', 'fetal-haemoglobin', 'Why does 2,3-BPG bind fetal haemoglobin less strongly?', 'Serine at H21 relatively repels BPG', ['Histidine at H21 attracts more BPG', 'HbF has no central cavity at all', 'BPG is completely absent from fetal red cells'], {
    explanation: 'The slide describes serine as more negative than histidine, repelling BPG.',
  }),
  tf({ id: 's4-5-3', conceptId: 'fetal-haemoglobin', statement: 'When HbF is replaced by HbA, serine 143 is replaced by histidine 143.', answer: true, explanation: 'Slide 57: Ser 143 (HbF) → His 143 (HbA).' }),
  mcq('s4-5-4', 'fetal-haemoglobin', 'Which way does oxygen flow because of HbF’s higher affinity?', 'From the mother’s blood to the fetus', ['From the fetus to the mother’s blood', 'From the placenta to the mother’s lungs', 'From the fetal lungs to the mother'], {
    explanation: 'Higher affinity lets HbF take O₂ from maternal haemoglobin.',
  }),
  mcq('s4-5-5', 'fetal-haemoglobin', 'Put the chain of cause and effect for HbF in order.', 'Ser at H21 → less BPG bound → higher O₂ affinity', ['Higher O₂ affinity → less BPG bound → Ser at H21', 'Less BPG bound → Ser at H21 → lower O₂ affinity', 'His at H21 → more BPG bound → higher O₂ affinity'], {
    explanation: 'Serine at H21 binds less BPG, so HbF’s oxygen affinity is higher.',
  }),
];
