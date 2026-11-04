// Biochemistry 1 → Introduction to Biochemistry and the Design of Metabolism. From "Basic
// Concept and Design of Metabolism 2023.pptx" (C. Obirikorang, KNUST; HB1 Biochemistry 1
// theory); the history of biochemistry comes from the original database lesson biochemistry-01
// (written from the course's introductory material, which is not in the Human Biology folder).
// Rewrites biochemistry-01 with the same id, so progress is kept; practises the course's Quiz 1
// and the past questions on the introduction to metabolism.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostx, ostxBio } from '@/data/hb1-lessons/pictures';

export const biochemistryMetabolism: Hb1Lesson = {
  id: 'biochemistry-01',
  order: 1,
  title: 'Introduction to Biochemistry and the Design of Metabolism',
  summary: 'C. Obirikorang · What biochemistry and metabolism are, the history of the field, catabolism and anabolism, why all life shares the same pathways, how pathways are organised and regulated, Gibbs free energy, and the energy currencies',
  minutes: 26,
  source: 'Basic Concept and Design of Metabolism 2023.pptx (C. Obirikorang)',
  quizId: 'met',
  quizName: 'Quiz · Design of Metabolism (lesson)',
  pastSets: ['s1'],
  pastTopics: ['metabolism-introduction'],
  sections: numberFigures([
    {
      id: 'met-biochem',
      title: 'What biochemistry is',
      kicker: 'The chemistry of life',
      blocks: [
        { k: 'p', x: '<b>Biochemistry</b> is the chemistry of living things: the study, at the molecular level, of the four great families of biomolecules (<b>proteins, nucleic acids, carbohydrates and lipids</b>) and of how cells harness energy through the reactions called <b>metabolism</b>. It overlaps with cell biology, molecular biology, immunology and molecular genetics, and underlies medicine, agriculture, veterinary science and biotechnology.' },
        { k: 'ul', items: [
          '<b>Define</b> metabolism, catabolism and anabolism.',
          '<b>Explain</b> why organisms share a common set of pathways.',
          '<b>Describe</b> how pathways are organised (enzyme arrangement and shape) and regulated.',
          '<b>Use</b> Gibbs free energy to predict whether a reaction is spontaneous.',
          '<b>Explain</b> what makes ATP an energy currency.',
        ] },
        { k: 'p', x: 'The word was coined in <b>1903</b> by the German chemist <b>Carl Neuberg</b>, from the Greek <i>bios</i>, life.' },
        { k: 'table', head: ['Year', 'Scientist', 'Landmark'], rows: [
          { c: ['1773', 'Rouelle', 'Isolated urea from urine'] },
          { c: ['1785', 'Lavoisier', 'Oxidation of foodstuffs'] },
          { c: ['1828', '<b>Wöhler</b>', '<b>Synthesis of urea</b> (an organic compound made from inorganic ones)'] },
          { c: ['1835', 'Berzelius', 'Theory of enzyme catalysis'] },
          { c: ['1860', 'Louis Pasteur', 'Fermentation'] },
          { c: ['1897', 'Eduard Buchner', 'Extracted active enzymes from yeast'] },
          { c: ['1926', 'Fiske and Subbarow', 'Isolated <b>ATP</b> from muscle'] },
          { c: ['1932', 'Lohmann', 'Creatine phosphate'] },
          { c: ['1937', '<b>Hans Krebs</b>', 'The <b>citric acid cycle</b>'] },
          { c: ['1944', 'Avery and MacLeod', 'DNA is the genetic material'] },
          { c: ['1953', '<b>Watson and Crick</b>', 'Structure of <b>DNA</b>'] },
          { c: ['1965', 'Khorana', 'Synthesised a gene'] },
          { c: ['1985', 'Kary Mullis', '<b>PCR</b>'] },
          { c: ['2003', 'Human Genome Project', 'Human genes mapped'] },
        ] },
      ],
    },
    {
      id: 'met-metabolism',
      title: 'Metabolism',
      kicker: 'The network that keeps us alive',
      blocks: [
        { k: 'p', x: 'Living organisms need a continual input of <b>free energy</b> for three purposes:' },
        { k: 'ul', items: [
          '<b>Mechanical work</b> in cell movements (muscle contraction, cilia).',
          '<b>Synthesis</b> of macromolecules and other biomolecules from simple precursors.',
          '<b>Active transport</b> of molecules and ions across membranes.',
        ] },
        { k: 'p', x: '<b>Metabolism</b> is the sum of the chemical changes that convert food nutrients into energy and into the complex products of cells: the entire network of reactions that sustains life. Hundreds of enzyme reactions are organised into <b>discrete pathways</b>, in which substrates become products through many specific <b>intermediates</b> (<b>metabolites</b>: the small molecules in the breakdown or synthesis of biopolymers). These reactions let organisms grow, reproduce, maintain their structures and respond to their environment.' },
        { k: 'ul', items: [
          '<b>Enzymes</b> are crucial: they let organisms drive desirable reactions that need energy and would not happen by themselves, by coupling them to ones that release energy.',
          'The <b>metabolic rate</b> influences how much food an organism needs.',
          'The basic pathways are strikingly <b>similar</b> across vastly different species.',
          'Metabolism is <b>highly coordinated</b> and <b>strictly regulated</b>; <b>metabolic maps</b> portray its reactions.',
        ] },
      ],
    },
    {
      id: 'met-cat-ana',
      title: 'Catabolism and anabolism',
      kicker: 'Breaking down and building up',
      blocks: [
        ostxBio('figure-06-01-03.jpg', 800, 255, 'Anabolic pathways build large molecules and need energy; catabolic pathways break them down and release energy.', 'Read the arrows both ways: glucose to glycogen is anabolic and uses energy; glycogen to glucose (and glucose to CO₂) is catabolic and releases it. ATP carries the energy from one to the other.'),
        { k: 'table', head: ['', 'Catabolism', 'Anabolism'], rows: [
          { c: ['What', 'Pathways that <b>break down</b> complex molecules into smaller units', 'Pathways that <b>construct</b> molecules from smaller units'] },
          { c: ['Energy', '<b>Releases</b> energy (energy-yielding)', '<b>Requires</b> energy (often from <b>ATP</b>)'] },
          { c: ['Shape', 'Convergent: many fuels → a few products (acetyl CoA, CO<sub>2</sub>)', '<b>Divergent</b>: a few precursors → many products'] },
          { c: ['Role', 'Turns food into biologically useful energy', '“Builds up” tissues and organs'] },
        ] },
        { k: 'p', x: '<b>Anabolism is powered by catabolism</b>. It runs in three stages: production of small, simple <b>precursors</b>; <b>activation</b> of the precursors to reactive forms using ATP; and <b>assembly</b> into complex molecules.' },
        { k: 'h', x: 'The stages of energy extraction from food', l: 3 },
        ostx('2502-catabolic-reactions.jpg', 1000, 919, 'Catabolic reactions: proteins, lipids and polysaccharides are broken into building blocks, then into acetyl CoA, then oxidised.', 'Three stages: (1) large molecules become their building blocks (amino acids, fatty acids and glycerol, glucose); (2) these become acetyl CoA; (3) acetyl CoA is oxidised in the Krebs cycle and electron transport chain, which make most of the ATP.'),
        { k: 'p', x: 'Pathways that serve both, such as the <b>citric acid cycle</b>, are <b>amphibolic</b>. A genetic defect in one enzyme of a pathway is an <b>inborn error of metabolism</b> (for example the galactosaemias), and disordered metabolism underlies conditions such as diabetes, obesity and the metabolic syndrome.' },
      ],
    },
    {
      id: 'met-common',
      title: 'A common set of pathways',
      kicker: 'One chemistry for all life',
      blocks: [
        { k: 'p', x: 'There are more than <b>10 million species</b> on Earth, with specialised cells and tissues, yet their biochemistry is strikingly similar: similar chemical composition, similar cell components and similar metabolic routes. This is evidence that <b>all life descended from a common ancestor</b>, though there is also significant diversity.' },
        { k: 'p', x: 'Organisms share these common themes:' },
        { k: 'ul', items: [
          'They maintain specific internal concentrations of <b>ions, metabolites and enzymes</b>.',
          '<b>Cell membranes</b> are the physical barrier that separates cell components from the environment.',
          'They <b>extract energy</b> from external sources to drive energy-consuming reactions.',
          'Their pathways are <b>specified by their genes</b>.',
          'They <b>interact with their environment</b>.',
        ] },
      ],
    },
    {
      id: 'met-organisation',
      title: 'How pathways are organised',
      kicker: 'Enzyme arrangement and pathway shape',
      blocks: [
        { k: 'p', x: 'A pathway consists of <b>sequential steps</b>. Its enzymes may be arranged in three ways:' },
        { k: 'table', head: ['Arrangement', 'Features', 'Examples'], rows: [
          { c: ['<b>Separate enzymes</b>', 'Each step has its own free enzyme; intermediates diffuse between them; steps can be regulated independently', 'Glycolysis, pentose phosphate pathway'] },
          { c: ['<b>Multienzyme complex</b>', 'Enzymes clustered together, passing intermediates directly (<b>channelling</b>): faster, with little loss', 'Pyruvate dehydrogenase complex, fatty acid synthase'] },
          { c: ['<b>Membrane-bound system</b>', 'Enzymes embedded in or attached to a membrane', 'Electron transport chain, transport ATPases, cytochrome P450'] },
        ] },
        { k: 'p', x: 'Pathways also have three shapes:' },
        { k: 'table', head: ['Shape', 'What happens', 'Example'], rows: [
          { c: ['<b>Linear</b>', 'The product of each reaction is the substrate of the next', '<b>Biosynthesis of serine</b> (and glycolysis)'] },
          { c: ['<b>Cyclic</b> (closed loop)', 'The intermediates are <b>regenerated</b> each turn', '<b>Citric acid cycle</b>'] },
          { c: ['<b>Spiral</b>', 'The <b>same set of enzymes</b> is used repeatedly to lengthen (or shorten) a chain', '<b>Fatty acid synthesis</b> (and β-oxidation)'] },
        ] },
        { k: 'h', x: 'Why proceed in discrete steps?', l: 3 },
        { k: 'ul', items: [
          '<b>Enzyme specificity</b> defines the route.',
          'It <b>controls energy input and output</b> in manageable packets (rather than releasing it all at once as heat).',
          'It allows <b>control points</b> to be set up.',
          'It allows <b>interaction between pathways</b> through shared intermediates.',
        ] },
      ],
    },
    {
      id: 'met-regulation',
      title: 'Regulation of pathways',
      kicker: 'Controlling the flux',
      blocks: [
        { k: 'ul', items: [
          'Pathways are regulated so the organism can <b>respond to changing conditions</b>; most regulatory responses act within <b>milliseconds</b>.',
          '<b>Most pathways are irreversible</b> under physiological conditions: one or more steps release a lot of free energy.',
          'Pathways are <b>not at equilibrium</b>: material flows steadily through them (<b>flux</b>).',
          'Flux is set by regulated <b>enzymes</b>, usually at the first committed, irreversible step, which can be inhibited (−) or activated (+), for example by the pathway’s end product (<b>feedback inhibition</b>).',
        ] },
        ostxBio('figure-06-05-07-ef68.jpg', 1000, 337, 'Feedback inhibition: the end product of a pathway inhibits an enzyme near its start.', 'When enough end product has been made, it switches off its own production at the first step, so no energy is wasted making intermediates that are not needed.'),
      ],
    },
    {
      id: 'met-energy',
      title: 'Gibbs free energy and energy currencies',
      kicker: 'Will it run on its own?',
      blocks: [
        { k: 'p', x: '<b>Gibbs free energy (G)</b> is the maximal amount of useful energy a reaction can give at constant temperature and pressure: the <b>net driving force</b> of a reaction. It predicts the direction a reaction will proceed spontaneously.' },
        { k: 'box', title: 'The equation', tone: 'formula', blocks: [{ k: 'p', x: '<b>ΔG = ΔH − TΔS</b>: ΔH = enthalpy change, T = absolute temperature, ΔS = entropy change.' }] },
        ostxBio('figure-06-03-03.jpg', 1000, 368, 'Exergonic and endergonic reactions: changes in free energy.', 'In an exergonic reaction the products sit lower than the reactants (ΔG negative: energy released); in an endergonic reaction they sit higher (ΔG positive: energy must be supplied).'),
        { k: 'table', head: ['ΔG', 'Reaction is', 'Proceeds'], rows: [
          { c: ['<b>Negative</b> and large', '<b>Exergonic</b> (the slide adds exothermic), <b>spontaneous</b>', 'In the <b>forward</b> direction'] },
          { c: ['<b>Positive</b> and large', '<b>Endergonic</b> (endothermic), <b>not spontaneous</b>', 'In the <b>reverse</b> direction (needs energy to go forward)'] },
          { c: ['<b>Zero</b>', 'At <b>equilibrium</b>', 'No net change'] },
        ] },
        { k: 'p', x: 'Note: “spontaneous” means thermodynamically possible, not fast; enzymes make spontaneous reactions fast. Strictly, exothermic and endothermic describe ΔH (heat), and exergonic and endergonic describe ΔG.' },
        { k: 'h', x: 'Energy currencies', l: 3 },
        { k: 'p', x: '<b>Energy currencies</b> (ATP above all; also GTP, UTP, creatine phosphate) are activated molecules with <b>high-energy bonds</b> that release a lot of energy on hydrolysis. The phosphoanhydride bonds of ATP are “high-energy” because of:' },
        { k: 'ul', items: [
          '<b>Less resonance stabilisation</b> of the phosphoanhydride bonds than of the products.',
          '<b>High electrostatic repulsion</b> between the negatively charged phosphate groups, relieved on hydrolysis.',
        ] },
        { k: 'p', x: 'Hydrolysis of ATP gives <b>ADP + P<sub>i</sub> + energy</b>, and the energy drives a biological reaction, usually by <b>phosphorylating a substrate</b> (energy coupling). NADH and FADH<sub>2</sub> carry electrons to the electron transport chain, where their energy is converted to ATP.' },
      ],
    },
  ]),
  extras: {
    facts: [
      { h: 'Key points', lines: [
        'Biochemistry coined 1903 by Carl Neuberg (Greek bios). Wöhler 1828 urea; Krebs 1937; Watson and Crick 1953; Mullis 1985 PCR.',
        'Free energy is needed for mechanical work, biosynthesis and active transport.',
        'Catabolism: breakdown, releases energy. Anabolism: synthesis, needs energy (precursors → activation → assembly). Amphibolic: both.',
        'Enzymes: separate, multienzyme complex, membrane-bound. Pathways: linear (serine), cyclic (TCA), spiral (fatty acid synthesis).',
        'ΔG = ΔH − TΔS; negative = exergonic, spontaneous; positive = endergonic; zero = equilibrium.',
        'ATP: high-energy phosphoanhydride bonds (less resonance stabilisation, electrostatic repulsion).',
      ] },
    ],
  },
  quiz: [
    ['The term “biochemistry” was coined in 1903 by', 'Carl Neuberg', ['Friedrich Wöhler', 'Hans Krebs', 'Louis Pasteur'], 'From the Greek bios, meaning life.', 'History'],
    ['Wöhler’s landmark of 1828 was', 'The synthesis of urea', ['The discovery of ATP', 'The structure of DNA', 'The citric acid cycle'], 'It showed an organic compound could be made from inorganic ones.', 'History'],
    ['Which is NOT one of the three purposes for which organisms need free energy?', 'Storage of genetic information', ['Mechanical work in cell movement', 'Synthesis of macromolecules', 'Active transport across membranes'], 'The three purposes are mechanical work, biosynthesis and active transport.', 'Metabolism'],
    ['Metabolites are best described as', 'Small intermediates of pathways', ['Enzymes that catalyse metabolic steps', 'Hormones that regulate metabolism', 'Large polymers stored in cells'], 'They are the intermediates of pathways.', 'Metabolism'],
    ['Catabolism is', 'Degradative and usually energy-yielding', ['Biosynthetic and energy-requiring', 'Always reversible and at equilibrium', 'Driven directly by sunlight in all cells'], 'Anabolism is biosynthetic and energy-requiring.', 'Catabolism and anabolism'],
    ['Anabolism is described as a divergent process because it', 'Makes many products from a few precursors', ['Breaks many fuels down into a few products', 'Releases energy at each step', 'Only occurs in plants'], 'Catabolism converges many fuels to acetyl CoA and CO₂.', 'Catabolism and anabolism'],
    ['The second stage of anabolism is', 'Activation of precursors using ATP', ['Production of simple precursors', 'Assembly into complex molecules', 'Oxidation of acetyl CoA to carbon dioxide'], 'Precursors → activation → assembly.', 'Catabolism and anabolism'],
    ['A pathway that serves both catabolism and anabolism is called', 'Amphibolic', ['Anaplerotic', 'Exergonic', 'Divergent'], 'The citric acid cycle is the classic example.', 'Catabolism and anabolism'],
    ['The similarity of metabolic pathways across species is evidence that', 'All life has a common ancestor', ['All species live in the same environment', 'Enzymes are made outside the cell', 'Metabolism is not genetically controlled'], 'There are over 10 million species with similar biochemistry.', 'Common pathways'],
    ['Metabolic pathways are specified by', 'The genes of each organism', ['The cell membrane alone', 'The organism’s diet only', 'The local temperature of the habitat'], 'Genes encode the enzymes of each pathway.', 'Common pathways'],
    ['The citric acid cycle is an example of a', 'Cyclic pathway', ['Linear pathway', 'Spiral pathway', 'Branched linear pathway'], 'Its intermediates are regenerated with every turn.', 'Organisation'],
    ['Fatty acid synthesis is an example of a spiral pathway because', 'The same enzymes are reused', ['Its intermediates are regenerated each turn', 'Each product is used only once', 'It occurs in a spiral organelle'], 'Each pass adds two carbons with the same enzyme set.', 'Organisation'],
    ['The biosynthesis of serine is given as an example of a', 'Linear pathway', ['Cyclic pathway', 'Spiral pathway', 'Closed loop'], 'The product of each reaction is the substrate of the next.', 'Organisation'],
    ['Passing intermediates directly between clustered enzymes is called', 'Channelling', ['Feedback inhibition', 'Phosphorylation', 'Compartmentation'], 'It is the advantage of a multienzyme complex.', 'Organisation'],
    ['Under physiological conditions most metabolic pathways are', 'Irreversible and not at equilibrium', ['Reversible and at equilibrium', 'Irreversible and at equilibrium', 'Reversible and never regulated'], 'Steady flux, controlled at regulated steps.', 'Regulation'],
    ['Most regulatory responses of metabolic pathways occur within', 'Milliseconds', ['Several hours', 'A few days', 'Several weeks'], 'Allosteric control is very rapid.', 'Regulation'],
    ['Gibbs free energy is related to enthalpy and entropy by', 'ΔG = ΔH − TΔS', ['ΔG = ΔH + TΔS', 'ΔG = TΔS − ΔH', 'ΔG = ΔH × TΔS'], 'T is the absolute temperature.', 'Free energy'],
    ['A reaction with a large negative ΔG is', 'Exergonic and spontaneous', ['Endergonic and not spontaneous', 'At equilibrium', 'Impossible without an enzyme'], 'It proceeds in the forward direction.', 'Free energy'],
    ['A reaction with ΔG equal to zero is', 'At equilibrium', ['Highly exergonic', 'Highly endergonic', 'Proceeding in reverse'], 'There is no net change.', 'Free energy'],
    ['The high energy of ATP’s phosphoanhydride bonds is due partly to', 'Repulsion between phosphate groups', ['Strong hydrogen bonds between bases', 'The stability of the adenine ring', 'Covalent bonds to the ribose oxygen'], 'Also less resonance stabilisation of the bonds.', 'Energy currency'],
    ['ATP hydrolysis drives biological reactions mainly by', 'Phosphorylating a substrate', ['Releasing heat to warm the reaction', 'Donating electrons to oxygen', 'Breaking hydrogen bonds in water'], 'Energy coupling transfers the phosphate to a reactant.', 'Energy currency'],
  ],
};
