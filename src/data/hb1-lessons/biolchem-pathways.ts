// Biological Chemistry → Metabolic Pathways. From "BIOL 157_Lecture 9.pdf" (Dr S. A. Domfeh).
// Rewrites the original database lesson biolchem-09 (same id, so progress is kept). Checked
// 2026-11-04; teaching text in our own words. Practises Quiz 9.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostxBio } from '@/data/hb1-lessons/pictures';

export const biolchemPathways: Hb1Lesson = {
  id: 'biolchem-09',
  order: 9,
  title: 'Metabolic Pathways',
  summary: 'What a metabolic pathway is and how its enzymes are organised (free, multi-enzyme complexes, membranes, metabolons); the four principles (irreversible, first committed step, regulated, compartmentalised); the six reaction types with examples; and the four kinds of metabolic control: enzyme levels (induction, the lac operon), enzyme activity (allostery and covalent modification), compartmentation, and hormones (steroid receptors and second messengers)',
  minutes: 20,
  source: 'BIOL 157_Lecture 9.pdf',
  quizId: 'bcmp',
  quizName: 'Quiz · Metabolic Pathways (lesson)',
  pastSets: ['s9'],
  sections: numberFigures([
    {
      id: 'mp-what',
      title: 'Metabolic pathways and their principles',
      kicker: 'Sequences of enzyme reactions',
      blocks: [
        { k: 'term', name: 'Metabolic pathway', def: 'A series of connected <b>enzyme-catalysed reactions</b> that make a specific product. Metabolism has <b>over 2000 reactions</b>, each with its own enzyme; the enzymes’ substrates are <b>metabolites</b>.' },
        ostxBio('figure-06-01-03.jpg', 800, 255, 'Anabolic pathways use energy to build larger molecules; catabolic pathways release energy by breaking them down.', 'Both are chains of enzyme-catalysed steps.'),
        { k: 'table', head: ['How pathway enzymes are arranged', 'How intermediates move'], rows: [
          { c: ['<b>Physically separate</b> (soluble)', 'Intermediates <b>diffuse</b> from one active site to the next'] },
          { c: ['<b>Multi-enzyme complex</b>', 'Intermediates are <b>passed directly</b> between active sites (channelling)'] },
          { c: ['<b>In a membrane</b>', 'Enzymes and substrates diffuse in the <b>two dimensions</b> of the membrane'] },
          { c: ['<b>Metabolons</b>', 'Temporary complexes of sequential enzymes, held by non-covalent forces to membrane proteins and the cytoskeleton'] },
        ] },
        { k: 'box', title: 'Four principles', tone: 'recall', blocks: [{ k: 'ul', items: [
          '<b>Pathways are irreversible</b>: overall highly exergonic, which gives them direction. If A can become B and B can become A, the two routes must <b>differ</b>, so each can be regulated separately (e.g. glycolysis vs gluconeogenesis).',
          '<b>Every pathway has a first committed step</b>: most steps are near equilibrium, but one early <b>irreversible</b> step commits its product to the pathway.',
          '<b>All pathways are regulated</b>: flux is controlled at the <b>rate-determining step</b>, often the first committed step.',
          '<b>Pathways occur in specific places</b>: eukaryotes <b>compartmentalise</b> them in organelles (mitochondria, cytosol, nucleus) for independent control.',
        ] }] },
      ],
    },
    {
      id: 'mp-reactions',
      title: 'The six types of reaction',
      kicker: 'A small set of chemistry, used again and again',
      blocks: [
        { k: 'table', head: ['Type', 'What happens', 'Enzymes', 'Example'], rows: [
          { c: ['<b>1. Oxidation–reduction</b>', 'Electrons (H atoms) removed or added; main source of energy from carbon compounds', 'Oxidoreductases, dehydrogenases', '<b>Succinate → fumarate</b> (citric acid cycle), reducing <b>FAD → FADH<sub>2</sub></b>'] },
          { c: ['<b>2. Ligation</b>', 'Bond formation using the free energy of <b>ATP</b> cleavage', 'Ligases, synthetases', 'ATP-dependent C–C bond formation, building larger molecules (e.g. pyruvate carboxylase)'] },
          { c: ['<b>3. Isomerisation</b>', 'Atoms <b>rearranged</b> within a molecule, preparing it for the next step', 'Isomerases, epimerases', '<b>Citrate → isocitrate</b>: the OH moves from a tertiary to a secondary carbon, ready for oxidation and decarboxylation'] },
          { c: ['<b>4. Group transfer</b>', 'A group moved between molecules', 'Transferases (kinases)', '<b>ATP phosphorylates glucose</b> (hexokinase), trapping it in the cell'] },
          { c: ['<b>5. Hydrolysis</b>', 'Bonds broken by <b>adding water</b>', 'Hydrolases', 'Digestion of proteins by proteases'] },
          { c: ['<b>6. Addition to / formation of double bonds</b>', 'Groups added to or removed from double bonds, without hydrolysis', '<b>Lyases</b>', 'Aldolase splits <b>fructose-1,6-bisphosphate</b> into DHAP + glyceraldehyde-3-phosphate; enolase dehydrates <b>2-phosphoglycerate → PEP</b>, whose high phosphoryl-transfer potential then makes ATP'] },
        ] },
        ostxBio('figure-06-04-01.jpg', 469, 277, 'ATP: adenine, ribose and three phosphates.', 'Its high-energy phosphate bonds power ligations and group transfers.'),
      ],
    },
    {
      id: 'mp-control',
      title: 'Controlling metabolism',
      kicker: 'Levels, activity, compartments, hormones',
      blocks: [
        { k: 'step', n: '1', title: 'Control of enzyme levels', blocks: [{ k: 'p', x: 'Enzyme amounts change with conditions, mainly through their <b>rate of synthesis</b>. Add a usable substrate to bacteria and the enzymes to use it can rise from under one to thousands of molecules per cell: <b>enzyme induction</b>. The classic case is the <b>lac operon</b> of <i>E. coli</i>: lactose (as allolactose) removes the repressor, so the genes for lactose use are transcribed.' }] },
        { k: 'step', n: '2', title: 'Control of enzyme activity', blocks: [
          { k: 'p', x: '<b>(a) Reversible binding of ligands</b> (substrates, products, allosteric effectors). Allosteric activators and inhibitors usually act at <b>committed steps</b>, binding regulatory sites and changing subunit interactions to control product formation (e.g. feedback inhibition).' },
          { k: 'p', x: '<b>(b) Covalent modification</b>: mainly <b>phosphorylation</b> of <b>serine, threonine or tyrosine</b>; also <b>adenylation</b> (adding AMP from ATP) and <b>ADP-ribosylation</b> (adding ADP-ribose from NAD<sup>+</sup>).' },
        ] },
        { k: 'step', n: '3', title: 'Compartmentation', blocks: [{ k: 'p', x: 'Enzymes of one process sit together: <b>RNA polymerases in the nucleus</b>; <b>electron transport and oxidative phosphorylation in mitochondria</b>; glycolysis in the cytosol. Because membranes are <b>selectively permeable</b>, they control the passage of intermediates between compartments.' }] },
        { k: 'step', n: '4', title: 'Hormonal regulation', blocks: [
          { k: 'p', x: 'Hormones are made by specialised cells and carried in blood to distant targets. Two kinds of response:' },
          { k: 'ul', items: [
            '<b>Steroid hormones</b> (e.g. <b>oestrogen</b>) enter the cell, bind an <b>intracellular receptor</b>; the complex moves to the <b>nucleus</b>, binds DNA and <b>activates or represses genes</b> (slow, changes enzyme amounts).',
            '<b>Non-steroid hormones</b> (first messengers) bind <b>plasma-membrane receptors</b> and trigger <b>second messengers</b>. <b>Glucagon</b> → its receptor → <b>cAMP</b> → protein kinase cascade → <b>glycogen breakdown</b> (fast, changes enzyme activity).',
          ] },
        ] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Pathway = connected enzyme steps (>2000 reactions); enzymes free, in complexes, in membranes, or as metabolons.',
          'Irreversible overall; first committed step; regulated at the rate-determining step; compartmentalised.',
          'Six reactions: redox (succinate → fumarate, FAD), ligation (ATP), isomerisation (citrate → isocitrate), group transfer (glucose → G6P), hydrolysis, lyase (aldolase; 2-PG → PEP).',
          'Control: enzyme levels (induction, lac operon), activity (allostery; phosphorylation, adenylation, ADP-ribosylation), compartments, hormones (steroid → genes; glucagon → cAMP → glycogenolysis).',
        ] }] },
      ],
    },
  ]),
  quiz: [
    ['A metabolic pathway is', 'A chain of enzyme reactions', ['A single enzyme reaction', 'A channel in a membrane', 'A circulating hormone'], 'Making a specific product.', 'Pathways'],
    ['Metabolism involves more than about', '2000 reactions', ['20 reactions', '200 reactions', '2 million reactions'], 'Each with its own enzyme.', 'Pathways'],
    ['In a multi-enzyme complex, intermediates', 'Pass directly between active sites', ['Diffuse through the cytosol', 'Leave the cell between steps', 'Are stored in vacuoles first'], 'Channelling.', 'Pathways'],
    ['Temporary complexes of sequential pathway enzymes are called', 'Metabolons', ['Ribosomes', 'Operons', 'Peroxisomes'], 'Held by non-covalent forces.', 'Pathways'],
    ['Metabolic pathways are irreversible because they are', 'Highly exergonic overall', ['Highly endergonic overall', 'At equilibrium', 'Catalysed by one enzyme'], 'This gives direction.', 'Principles'],
    ['The irreversible step that commits a metabolite to a pathway is the', 'First committed step', ['Last hydrolysis step', 'Equilibrium step', 'Transport step'], 'Usually regulated.', 'Principles'],
    ['Flux through a pathway is controlled at the', 'Rate-determining step', ['Fastest step', 'Final product made', 'Near-equilibrium steps'], 'Often the committed step.', 'Principles'],
    ['Opposing pathways (A→B and B→A) must use different routes so that they', 'Can be regulated separately', ['Run at the same rate', 'Share all of their enzymes', 'Reach chemical equilibrium'], 'E.g. glycolysis vs gluconeogenesis.', 'Principles'],
    ['Succinate → fumarate with FAD → FADH₂ is a', 'Redox reaction', ['Ligation reaction', 'Hydrolysis', 'Isomerisation'], 'By succinate dehydrogenase.', 'Reactions'],
    ['Reactions that form bonds using ATP are', 'Ligations', ['Hydrolyses', 'Isomerisations', 'Lyase reactions'], 'By ligases (synthetases).', 'Reactions'],
    ['Citrate → isocitrate is an example of', 'Isomerisation', ['Ligation', 'Hydrolysis', 'Group transfer'], 'OH moves position.', 'Reactions'],
    ['Phosphorylation of glucose by ATP is a', 'Group-transfer reaction', ['Redox reaction', 'Hydrolysis reaction', 'Ligation reaction'], 'By a transferase (hexokinase).', 'Reactions'],
    ['Phosphorylating glucose', 'Traps it inside the cell', ['Releases it from the cell', 'Converts it to fructose', 'Oxidises it to CO₂'], 'G6P cannot leave.', 'Reactions'],
    ['Breaking bonds by adding water is', 'Hydrolysis', ['Condensation', 'Ligation', 'Isomerisation'], 'By hydrolases.', 'Reactions'],
    ['Splitting fructose-1,6-bisphosphate into two trioses is catalysed by a', 'Lyase', ['Ligase', 'Hydrolase', 'Kinase'], 'Aldolase.', 'Reactions'],
    ['2-Phosphoglycerate → phosphoenolpyruvate is a', 'Dehydration to a C=C bond', ['Hydrolysis of a phosphate', 'Ligation using ATP', 'Transfer of an amino group'], 'By enolase, a lyase.', 'Reactions'],
    ['A rise in enzyme amount when a substrate is added is', 'Enzyme induction', ['Enzyme repression', 'Allosteric inhibition', 'Zymogen activation'], 'E.g. the lac operon.', 'Control'],
    ['Allosteric effectors usually act on', 'Committed steps', ['Equilibrium steps', 'Hydrolytic steps only', 'Transport proteins only'], 'At regulatory sites.', 'Control'],
    ['Covalent control of enzymes is mainly by phosphorylating', 'Ser, Thr or Tyr', ['Gly, Ala or Val', 'Asp, Glu or Lys', 'Cys, Met or Pro'], 'Hydroxyl side chains.', 'Control'],
    ['ADP-ribosylation transfers ADP-ribose from', 'NAD⁺', ['ATP', 'FAD', 'Coenzyme A'], 'Adenylation uses ATP.', 'Control'],
    ['Enzymes of oxidative phosphorylation are located in the', 'Mitochondria', ['Nucleus', 'Cytosol', 'Peroxisomes'], 'Compartmentation.', 'Control'],
    ['RNA polymerases are found in the', 'Nucleus', ['Mitochondrial matrix', 'Cytosol', 'Golgi apparatus'], 'Where transcription occurs.', 'Control'],
    ['Steroid hormones act by binding', 'Receptors inside the cell', ['Membrane receptors making cAMP', 'Ion channels in the membrane', 'Enzymes in the blood plasma'], 'E.g. oestrogen.', 'Hormones'],
    ['Glucagon promotes glycogen breakdown through the second messenger', 'cAMP', ['Oestrogen', 'Insulin', 'Calcium oxalate'], 'Non-steroid hormone.', 'Hormones'],
  ],
};
