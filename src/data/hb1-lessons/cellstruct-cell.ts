// Cell Structure → Cell Fundamentals. From "2025 BIOL 151 CELL STRUCTURE.pdf" (Prof. W. G.
// Akanwariwiak), pages 189–205; the deck sets cell theory, size and shape and prokaryote vs
// eukaryote as assignments, so those are filled in from the textbooks it recommends. Rewrites the
// original database lesson cellstruct-03 (same id, so progress is kept). Checked 2026-11-04;
// teaching text in our own words. Practises Quiz 3.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostxMicro } from '@/data/hb1-lessons/pictures';

export const cellstructCell: Hb1Lesson = {
  id: 'cellstruct-03',
  order: 3,
  title: 'Cell Fundamentals',
  summary: 'The cell as the smallest unit of life; the three tenets of cell theory; the general functions of cells; cellular diversity in the body; factors that set cell shape; the surface-area-to-volume ratio and why cells stay small; prokaryotes compared with eukaryotes (DNA packaging, cell wall, organelles, ribosomes, size)',
  minutes: 20,
  source: '2025 BIOL 151 CELL STRUCTURE.pdf (pages 189–205, with the assignment topics from the set textbooks)',
  quizId: 'csce',
  quizName: 'Quiz · Cell Fundamentals (lesson)',
  pastSets: ['s3'],
  sections: numberFigures([
    {
      id: 'ce-cell',
      title: 'The cell and cell theory',
      kicker: 'The smallest unit of life',
      blocks: [
        { k: 'term', name: 'Cell', def: 'The <b>smallest unit of life</b> that can independently carry out all the functions of life: the basic, living, <b>structural and functional unit</b> of every organism, capable of independent reproduction.' },
        { k: 'p', x: 'Like us, single cells <b>grow, reproduce, process information, respond to stimuli</b> and carry out a huge range of <b>chemical reactions</b> (metabolism): the abilities that define life. Even a unicellular organism (a bacterium, an amoeba) shows all of them, which is why the cell is the fundamental unit of life. An organism’s activity depends on the individual and collective activity of its cells, and each cell’s chemistry is dictated by its <b>subcellular structure</b>.' },
        { k: 'box', title: 'The three tenets of cell theory', tone: 'recall', blocks: [{ k: 'ul', items: [
          '<b>All living things are made of one or more cells.</b>',
          '<b>The cell is the basic unit of structure and organisation</b> in organisms.',
          '<b>Cells arise only from pre-existing cells</b>, by cell division (no spontaneous generation).',
        ] }] },
        { k: 'p', x: 'History in brief: Hooke named cells (1665); <b>Schleiden</b> (plants, 1838) and <b>Schwann</b> (animals, 1839) proposed that all organisms are made of cells; <b>Virchow</b> (1855) added <i>omnis cellula e cellula</i>, “every cell from a cell”.' },
        { k: 'table', head: ['General function', 'Meaning'], rows: [
          { c: ['<b>Compartmentalisation</b>', 'Chemical reactions are kept in specialised structures (organelles), so incompatible processes do not interfere'] },
          { c: ['<b>Regulating material flow</b>', 'Controls inflow and outflow of materials across its membrane'] },
          { c: ['<b>Direction by genetic material</b>', 'Uses its DNA to direct its activities'] },
          { c: ['<b>Continuity of life</b>', 'New cells and organisms come only from existing cells'] },
        ] },
        { k: 'p', x: '<b>Cellular diversity</b>: the human body has about <b>100 trillion cells</b> of about <b>200 types</b> (neurons, red cells, muscle, epithelium…), varying in size and shape according to <b>function</b>.' },
      ],
    },
    {
      id: 'ce-size',
      title: 'Cell shape and size',
      kicker: 'Why cells stay small',
      blocks: [
        { k: 'table', head: ['Factor that determines shape', 'Example'], rows: [
          { c: ['<b>Surface tension and viscosity</b> of the cytoplasm', 'A free cell in fluid tends to round up (a white cell in blood)'] },
          { c: ['<b>Mechanical action of adjoining cells</b>', 'Tightly packed cells press into polygonal (e.g. hexagonal) shapes'] },
          { c: ['<b>Rigidity of the membrane</b> (and cytoskeleton, cell wall)', 'A rigid boundary keeps a fixed shape (plant cells, the red cell disc)'] },
          { c: ['<b>Functional adaptation</b>', 'Long neurons carry signals far; flat squamous cells allow diffusion; biconcave red cells carry O<sub>2</sub>'] },
        ] },
        { k: 'h', x: 'The surface-area-to-volume ratio', l: 3 },
        { k: 'p', x: 'A cell takes in food and O<sub>2</sub> and gets rid of waste <b>across its surface</b>, but its needs depend on its <b>volume</b>. Model a cell as a cube of side L: surface area = 6L², volume = L³.' },
        { k: 'table', head: ['Side', 'Area of one face', 'Volume', 'Total surface area', 'SA : V'], rows: [
          { c: ['1 cm', '1 cm²', '1 cm³', '6 cm²', '<b>6 cm⁻¹</b>'] },
          { c: ['2 cm', '4 cm²', '8 cm³', '24 cm²', '<b>3 cm⁻¹</b>'] },
          { c: ['4 cm', '16 cm²', '64 cm³', '96 cm²', '<b>1.5 cm⁻¹</b>'] },
        ] },
        { k: 'box', title: 'The rule', tone: 'formula', blocks: [{ k: 'p', x: 'Doubling the side makes the surface <b>4×</b> bigger but the volume <b>8×</b> bigger, so SA:V <b>halves</b> (SA:V = 6/L). Volume grows as the <b>cube</b>, surface only as the <b>square</b>. A big cell would have too little membrane to supply its interior by diffusion, so cells stay <b>microscopic</b>, divide when they grow, or increase surface by flattening, lengthening or folding (microvilli).' }] },
      ],
    },
    {
      id: 'ce-prok',
      title: 'Prokaryotes and eukaryotes',
      kicker: 'The big split',
      blocks: [
        { k: 'p', x: 'Every cell is one of two kinds: <b>prokaryotic</b> (no nucleus: the domains <b>Bacteria</b> and <b>Archaea</b>) or <b>eukaryotic</b> (with a nucleus: animals, plants, fungi, protists).' },
        ostxMicro('m03-03-prokcell.jpg', 900, 768, 'A typical prokaryotic cell: plasma membrane, cell wall, nucleoid DNA, ribosomes and inclusions; some have a capsule, flagella, pili and fimbriae.', 'There is no nucleus and no membrane-bound organelle: the DNA lies in the nucleoid.'),
        ostxMicro('m03-04-eukcell.jpg', 900, 730, 'A generalised eukaryotic cell with its nucleus and membrane-bound organelles.', 'Nucleus, ER, Golgi, mitochondria, lysosomes, peroxisomes and the cytoskeleton divide the cell into compartments.'),
        { k: 'table', head: ['Feature', 'Prokaryote', 'Eukaryote'], rows: [
          { c: ['<b>Nucleus</b>', '<b>None</b>; DNA in a <b>nucleoid</b> region, free in the cytoplasm', '<b>True nucleus</b> with a double nuclear envelope'] },
          { c: ['<b>DNA packaging</b>', 'Usually one circular chromosome, <b>not wrapped round histones</b>; often plasmids', 'Several linear chromosomes <b>wrapped round histones</b> (chromatin)'] },
          { c: ['<b>Cell wall</b>', 'Bacteria: <b>peptidoglycan</b>; Archaea: tough walls of <b>other, distinctive chemicals</b> (no peptidoglycan)', 'Plants: cellulose; fungi: chitin; <b>animals: none</b>'] },
          { c: ['<b>Organelles</b>', '<b>No complex membrane-bound organelles</b>', 'Mitochondria, ER, Golgi, lysosomes, peroxisomes (plants: chloroplasts)'] },
          { c: ['Ribosomes', '<b>70S</b>', '<b>80S</b> in cytoplasm (70S in mitochondria and chloroplasts)'] },
          { c: ['Size', 'Small, about <b>1–10 µm</b>', 'Larger, about <b>10–100 µm</b>'] },
          { c: ['Cytoskeleton', 'Simple', 'Elaborate (microtubules, actin, intermediate filaments)'] },
          { c: ['Division', 'Binary fission', 'Mitosis and meiosis'] },
        ] },
        { k: 'box', title: 'Shared by both', tone: 'life', blocks: [{ k: 'p', x: 'Plasma membrane, cytoplasm, ribosomes, and <b>DNA as the genetic material</b>. The <b>single clearest difference</b> is the presence or absence of a <b>membrane-bound nucleus</b>.' }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Cell = smallest unit of life; cell theory: made of cells, basic unit, cells from cells.',
          'Functions: compartmentalisation, regulating flow, direction by DNA, continuity of life.',
          '~100 trillion cells, ~200 types; shape set by surface tension/viscosity, neighbours, membrane rigidity, function.',
          'SA:V = 6/L for a cube: 6, 3, 1.5 cm⁻¹ for 1, 2, 4 cm. Big cells cannot exchange enough.',
          'Prokaryote: no nucleus, nucleoid, no histones, peptidoglycan (Bacteria), no membrane organelles, 70S, small.',
        ] }] },
      ],
    },
  ]),
  quiz: [
    ['The smallest unit able to carry out all functions of life is the', 'Cell', ['Organelle', 'Molecule', 'Tissue'], 'Basic structural and functional unit.', 'Cell'],
    ['Which is NOT a tenet of cell theory?', 'All cells have a nucleus', ['All living things are made of cells', 'The cell is the basic unit of life', 'Cells come from pre-existing cells'], 'Prokaryotes have none.', 'Cell theory'],
    ['“Every cell from a cell” is associated with', 'Rudolf Virchow', ['Robert Hooke', 'Theodor Schwann', 'Antonie van Leeuwenhoek'], 'Omnis cellula e cellula.', 'Cell theory'],
    ['Cell theory rejects spontaneous generation because', 'Cells arise only from cells', ['Cells are too small to form', 'Cells need sunlight to form', 'Only animals have cells'], 'By cell division.', 'Cell theory'],
    ['Confining reactions inside organelles is called', 'Compartmentalisation', ['Homeostasis', 'Differentiation', 'Osmoregulation of fluids'], 'Keeps processes apart.', 'Functions'],
    ['A cell directs its activities using its', 'Genetic material', ['Cell wall', 'Cytosol water', 'Ribosomal sugars'], 'DNA.', 'Functions'],
    ['The human body contains about', '100 trillion cells', ['100 million cells', '100 billion cells', '1 trillion cells'], 'Of about 200 types.', 'Diversity'],
    ['The number of cell types in the human body is about', '200', ['20', '2000', '20 000'], 'Neurons, muscle, epithelium…', 'Diversity'],
    ['A neuron’s long shape is best explained by', 'Functional adaptation', ['Surface tension', 'Cytoplasm viscosity', 'Pressure of neighbours'], 'Signals travel far.', 'Shape'],
    ['A free cell in fluid tends to round up because of', 'Surface tension', ['Its rigid cell wall', 'Its long axon', 'Its beating cilia'], 'And cytoplasmic viscosity.', 'Shape'],
    ['A cube of side 1 cm has an SA:V ratio of', '6 cm⁻¹', ['1 cm⁻¹', '3 cm⁻¹', '1.5 cm⁻¹'], '6 cm² / 1 cm³.', 'SA:V'],
    ['A cube of side 2 cm has a volume of', '8 cm³', ['4 cm³', '6 cm³', '24 cm³'], '2 × 2 × 2.', 'SA:V'],
    ['A cube of side 4 cm has an SA:V ratio of', '1.5 cm⁻¹', ['6 cm⁻¹', '3 cm⁻¹', '0.75 cm⁻¹'], '96 / 64.', 'SA:V'],
    ['When a cube’s side doubles, its surface area', 'Quadruples', ['Doubles', 'Rises eightfold', 'Halves'], 'Area goes with L².', 'SA:V'],
    ['When a cube’s side doubles, its volume', 'Rises eightfold', ['Simply doubles', 'Quadruples', 'Falls by half'], 'Volume goes with L³.', 'SA:V'],
    ['Cells stay small mainly because', 'Large cells have too low an SA:V', ['Large cells cannot ever divide', 'Membranes cannot stretch further', 'DNA cannot grow any longer'], 'Too little surface for exchange.', 'SA:V'],
    ['A prokaryotic cell lacks a', 'Membrane-bound nucleus', ['Plasma membrane', 'Set of 70S ribosomes', 'DNA genome'], 'DNA is in the nucleoid.', 'Prokaryotes'],
    ['Prokaryotic DNA is found in the', 'Nucleoid', ['Nucleolus', 'Nucleus', 'Nucleosome'], 'Free in the cytoplasm.', 'Prokaryotes'],
    ['Unlike eukaryotic DNA, prokaryotic DNA is not wrapped around', 'Histones', ['Ribosomes', 'Plasmids', 'Lipids'], 'No nucleosomes.', 'Prokaryotes'],
    ['Bacterial cell walls are made of', 'Peptidoglycan', ['Cellulose', 'Chitin', 'Keratin protein'], 'Archaea use other chemicals.', 'Prokaryotes'],
    ['Archaeal cell walls', 'Lack peptidoglycan', ['Are made of cellulose', 'Are made of chitin', 'Are absent in all'], 'Tough, distinctive chemicals.', 'Prokaryotes'],
    ['Which is found in eukaryotes but not prokaryotes?', 'Mitochondria', ['Ribosomes', 'A plasma membrane', 'DNA'], 'A membrane-bound organelle.', 'Comparison'],
    ['Prokaryotic ribosomes are', '70S', ['80S', '60S', '90S'], 'Eukaryotic cytoplasmic ones are 80S.', 'Comparison'],
    ['Compared with eukaryotic cells, prokaryotic cells are usually', 'Smaller', ['Larger', 'The same size', 'Always multicellular'], 'About 1–10 µm.', 'Comparison'],
    ['Animals, plants and fungi are made of', 'Eukaryotic cells', ['Prokaryotic cells', 'Archaeal cells', 'Acellular units'], 'They have nuclei.', 'Comparison'],
    ['A feature shared by prokaryotes and eukaryotes is', 'DNA as genetic material', ['A nuclear envelope', 'Histone-bound DNA', 'Membrane-bound organelles'], 'Plus membrane and ribosomes.', 'Comparison'],
    ['The clearest single difference between the two cell types is the', 'Presence of a nucleus', ['Presence of DNA', 'Presence of ribosomes', 'Presence of a membrane'], 'Membrane-bound nucleus.', 'Comparison'],
  ],
};
