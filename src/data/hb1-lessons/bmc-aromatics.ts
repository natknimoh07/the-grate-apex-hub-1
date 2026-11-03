// Basic Medical Chemistry → Aromatic Compounds. From "LECTURE 1-SMS 151_AROMATICS_CARBONYLS_
// CARBOXYLICS.pptx", slides 1–56, and "Aromatics_lecture.pdf" (J. N. A. Addotey). Rewrites
// the original database lesson bmc-04 with the same id, so progress is kept; practises the
// course's Quiz 4. Explanations are in our own words; facts and examples are the lecture's.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const bmcAromatics: Hb1Lesson = {
  id: 'bmc-04',
  order: 4, // the last of the hydrocarbons, before the functional groups
  title: 'Aromatic Compounds',
  summary: 'SMS 151 · J. N. A. Addotey · Benzene and why it is so stable, Hückel’s rule, classes and heterocyclic aromatics, naming, electrophilic aromatic substitution, Friedel–Crafts reactions and directing effects',
  minutes: 18,
  source: 'LECTURE 1-SMS 151_AROMATICS_CARBONYLS_CARBOXYLICS.pptx, slides 1–56; Aromatics_lecture.pdf (J. N. A. Addotey)',
  quizId: 'aro',
  quizName: 'Quiz · Aromatic Compounds (lesson)',
  pastSets: ['s4'],
  sections: [
    {
      id: 'aro-benzene',
      title: 'Benzene: unsaturated but unreactive',
      kicker: 'Why aromatics matter',
      blocks: [
        { k: 'p', x: '<b>Many drugs are aromatic compounds</b> — paracetamol (acetaminophen), ibuprofen, atorvastatin, dabigatran — so their chemical nature, stability, actions and toxicity all rest on aromatic chemistry.', lede: 1 },
        { k: 'p', x: '<b>Benzene</b>, C<sub>6</sub>H<sub>6</sub>, the simplest aromatic hydrocarbon (arene), was isolated from coal gas by <b>Michael Faraday in 1825</b>. It is highly unsaturated, yet it does <b>not</b> undergo the addition reactions of alkenes, alkynes and dienes. <b>August Kekulé</b> proposed its ring structure in 1872, but the explanation of its stability came later with <b>Erich Hückel’s</b> idea of aromaticity.' },
        { k: 'h', x: 'Its structure', l: 3 },
        { k: 'p', x: 'The six carbons form a <b>regular hexagon</b>, all C–C–C and H–C–C angles <b>120°</b>. Each carbon is sp<sup>2</sup> with one 2p orbital holding one electron; the six parallel p orbitals overlap into a continuous <b>π cloud</b> above and below the ring. The six π electrons fill the three lowest, <b>bonding</b> molecular orbitals — a very stable arrangement.' },
        { k: 'p', x: 'Benzene is drawn as a hybrid of <b>two equivalent Kekulé structures</b> contributing equally (or as a ring with a circle). Each C–C bond is neither single nor double but in between — a “<b>1½</b>” bond.' },
        { k: 'p', x: 'Aromatics have a high ratio of carbon to hydrogen, so they burn with a <b>yellow, sooty flame</b>.' },
      ],
    },
    {
      id: 'aro-huckel',
      title: 'What makes a compound aromatic: Hückel’s rule',
      kicker: 'Four criteria',
      blocks: [
        { k: 'ul', ol: 1, items: [
          '<b>Cyclic</b> — each p orbital must overlap with those of its neighbours all round.',
          '<b>Planar</b> — so the p orbitals line up and the electrons can delocalise.',
          '<b>Completely conjugated</b> — a p orbital on every ring atom.',
          '<b>Hückel’s rule</b> — the right number of π electrons: <b>4n + 2</b> (2, 6, 10…).',
        ] },
        { k: 'table', head: ['Compound', 'Aromatic?', 'Why'], rows: [
          { c: ['Benzene', 'Yes', 'Cyclic, planar, conjugated, 6 π electrons'] },
          { c: ['Naphthalene', 'Yes', 'Every carbon sp<sup>2</sup>, 10 π electrons'] },
          { c: ['Hexatriene', 'No', 'Not cyclic'] },
          { c: ['Cycloheptatriene', 'No', 'One sp<sup>3</sup> ring carbon breaks the conjugation'] },
          { c: ['Cyclooctatetraene', 'No', 'Not planar and only 8 π electrons — it adds like an alkene'] },
          { c: ['Cyclobutadiene', '<b>Antiaromatic</b>', '4 π electrons: especially unstable'] },
        ] },
      ],
    },
    {
      id: 'aro-classes',
      title: 'Classes and heterocyclic aromatics',
      kicker: 'Beyond benzene',
      blocks: [
        { k: 'p', x: 'Aromatics are classified as benzene and its <b>monocyclic</b> derivatives, <b>polycyclic benzenoids</b>, and <b>non-benzenoids</b> (macrocyclic and heterocyclic).', lede: 1 },
        { k: 'p', x: '<b>Polycyclic aromatic hydrocarbons (PAHs)</b> have two or more fused aromatic rings and several resonance structures; <b>many PAHs are carcinogenic</b>.' },
        { k: 'p', x: 'A <b>heterocyclic</b> compound has a heteroatom (N, O, S…) in its ring; if the ring is aromatic it is a heterocyclic aromatic. <b>Pyridine</b> (C<sub>5</sub>H<sub>5</sub>N) and <b>pyrimidine</b> are aromatic analogues of benzene.' },
        { k: 'table', head: ['Ring', 'Where the heteroatom’s lone pair is'], rows: [
          { c: ['Pyridine', 'In an sp<sup>2</sup> orbital in the ring plane — <b>not</b> part of the aromatic sextet'] },
          { c: ['Furan', 'One oxygen lone pair is not part of the π system'] },
          { c: ['Pyrrole', 'The nitrogen lone pair <b>is</b> part of the π system'] },
        ] },
      ],
    },
    {
      id: 'aro-naming',
      title: 'Naming benzene derivatives',
      kicker: 'Nomenclature',
      blocks: [
        { k: 'ul', items: [
          'With benzene as the parent, substituents are prefixes: <b>nitrobenzene, ethoxybenzene, fluorobenzene, butylbenzene</b>.',
          'As a substituent, C<sub>6</sub>H<sub>5</sub>– is <b>phenyl</b>. <b>Benzyl</b> is C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>– (a benzene ring plus one carbon); that carbon is the <b>benzylic</b> carbon, with benzylic hydrogens.',
          'Many common names are kept (e.g. toluene); <b>xylene</b> is benzene with two methyl groups.',
          '<b>Two substituents:</b> lowest numbers, or <b>ortho (1,2), meta (1,3), para (1,4)</b>. If one group gives a special name, name the compound from that parent.',
          '<b>Three or more:</b> number the ring; a group with a special name becomes the parent at C1; otherwise use the smallest set of numbers and alphabetical order.',
        ] },
      ],
    },
    {
      id: 'aro-eas',
      title: 'Electrophilic aromatic substitution',
      kicker: 'Substitution, not addition',
      blocks: [
        { k: 'p', x: 'The typical reaction of benzene is <b>substitution at a ring carbon</b>: an electrophile E<sup>+</sup> replaces an H, and the aromatic ring survives. (Adding across the ring would destroy its special stability.) Halogens, nitro, sulfonyl, alkyl and acyl groups can all be put on this way.', lede: 1 },
        { k: 'step', n: '1', title: 'Make the electrophile', blocks: [{ k: 'p', x: 'Often with a catalyst — benzene reacts with Br<sub>2</sub> only in the presence of one.' }] },
        { k: 'step', n: '2', title: 'The π electrons attack E⁺', blocks: [{ k: 'p', x: 'A new bond forms and a resonance-stabilised cation results. This is the <b>slow, rate-determining step</b>.' }] },
        { k: 'step', n: '3', title: 'A base removes H⁺', blocks: [{ k: 'p', x: 'The aromatic ring is restored.' }] },
        { k: 'cards', items: [
          { title: 'Friedel–Crafts alkylation', blocks: [{ k: 'p', x: 'Forms a new C–C bond between ring and alkyl group. Limits: practical only with <b>stable (2° or 3°) carbocations</b>, and it <b>fails</b> on rings bearing strongly electron-withdrawing groups. Carbocations can also come from an alcohol with H<sub>2</sub>SO<sub>4</sub> or H<sub>3</sub>PO<sub>4</sub>.' }] },
          { title: 'Friedel–Crafts acylation', blocks: [{ k: 'p', x: 'An <b>acid chloride</b> (the acid with –OH replaced by Cl) and <b>AlCl<sub>3</sub></b> give a <b>ketone</b> with the ring on one side of the carbonyl.' }] },
        ] },
      ],
    },
    {
      id: 'aro-directing',
      title: 'Directing effects',
      kicker: 'Where the next group goes, and how fast',
      blocks: [
        { k: 'p', x: 'A group already on the ring affects both the <b>rate</b> (activating or deactivating) and the <b>orientation</b> of the next substitution. The deciding factor is how stable the cation formed in the slow step is: the more stable, the faster.', lede: 1 },
        { k: 'table', head: ['', 'Ortho/para directors', 'Meta directors'], rows: [
          { c: ['Examples', '–NH<sub>2</sub>, –OH, –OR (e.g. –OCH<sub>3</sub>), alkyl, phenyl, halogens', '–NO<sub>2</sub>, –C=O, –SO<sub>3</sub>H, –NR<sub>3</sub><sup>+</sup>, –CCl<sub>3</sub>, –CF<sub>3</sub>'] },
          { c: ['Effect on the ring', 'Electron-donating (lone pair in resonance): <b>activating</b>, faster', 'Electron-withdrawing: <b>deactivating</b>, slower'] },
          { c: ['Why', 'Ortho/para attack gives a cation the lone pair can help stabilise', 'Meta attack avoids putting + next to the already positive ring atom'] },
        ] },
        { k: 'box', title: 'Generalisations', tone: 'formula', blocks: [{ k: 'ul', items: [
          'Ortho/para directors: alkyl and phenyl groups, and groups whose ring-bonded atom has a lone pair.',
          'All ortho/para directors activate — <b>except the halogens</b>, which are weakly deactivating.',
          'Every other group directs meta, and all meta directors carry a partial or full <b>positive charge</b> on the atom bonded to the ring.',
          'With excess reagent, di- and trisubstituted rings are likely.',
        ] }] },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Benzene C₆H₆ (Faraday 1825, Kekulé 1872): planar hexagon, 120°, six delocalised π electrons; C–C bonds “1½”.',
        'Aromatic = cyclic, planar, fully conjugated, 4n + 2 π electrons. Cyclobutadiene (4) antiaromatic; cyclooctatetraene not aromatic.',
        'Pyridine’s lone pair is not in the sextet; pyrrole’s is. Many PAHs are carcinogenic.',
        'Phenyl C₆H₅–; benzyl C₆H₅CH₂–; ortho 1,2, meta 1,3, para 1,4.',
        'EAS: make E⁺ → slow attack (cation) → lose H⁺. Friedel–Crafts alkylation needs stable carbocations; acylation (RCOCl, AlCl₃) gives ketones.',
        'Donors (–NH₂, –OH, –OR, alkyl) activate, o/p; withdrawers (–NO₂, –C=O, –SO₃H, –CF₃) deactivate, meta; halogens deactivate but direct o/p.',
      ] },
    ],
  },
  quiz: [
    ['Who first isolated benzene, and from what?', 'Michael Faraday, from coal gas', ['August Kekulé, from crude oil', 'Erich Hückel, from coal tar', 'Michael Faraday, from whale oil'], 'Slide 4: in 1825.', 'Benzene'],
    ['Why does benzene not react like an alkene?', 'Its delocalised π electrons make it especially stable', ['It contains no double bonds or π electrons in its ring at all', 'Its carbons are all sp³ hybridised', 'It is a saturated hydrocarbon'], 'Slides 5, 12–13.', 'Benzene'],
    ['The C–C bonds in benzene are best described as', 'Between single and double (“1½” bonds)', ['Three single and three double bonds', 'All triple bonds', 'All single bonds'], 'Slide 14.', 'Benzene'],
    ['Which is one of the four criteria for aromaticity?', 'The molecule must be planar', ['The molecule must contain oxygen', 'The molecule must be open-chain', 'The molecule must have sp³ carbons'], 'Slides 7–10.', 'Aromaticity'],
    ['Cyclobutadiene, with 4 π electrons, is', 'Antiaromatic and especially unstable', ['Aromatic and especially stable', 'Non-aromatic and unreactive', 'Aromatic like naphthalene'], 'Slide 10.', 'Aromaticity'],
    ['Why is cycloheptatriene not aromatic?', 'One ring carbon is sp³, breaking the conjugation', ['It has far too many π electrons in its ring', 'It is not a ring compound at all', 'It contains a nitrogen atom in the ring'], 'Slide 15.', 'Aromaticity'],
    ['How many π electrons does naphthalene have?', '10', ['6', '8', '12'], 'Slide 15.', 'Aromaticity'],
    ['In pyridine, the nitrogen’s lone pair', 'Is not part of the aromatic sextet', ['Is part of the aromatic sextet', 'Is lost when pyridine forms', 'Sits in a p orbital above the ring'], 'Slide 21.', 'Heterocyclic aromatics'],
    ['Many polycyclic aromatic hydrocarbons are', 'Carcinogenic', ['Vitamins', 'Antibiotics', 'Non-aromatic'], 'Slide 19.', 'Classes'],
    ['The C₆H₅CH₂– group is called', 'Benzyl', ['Phenyl', 'Tolyl', 'Benzoyl'], 'Slide 26.', 'Naming'],
    ['Substituents at positions 1 and 3 of a benzene ring are', 'Meta', ['Ortho', 'Para', 'Geminal'], 'Slide 28.', 'Naming'],
    ['In electrophilic aromatic substitution, the rate-determining step is', 'Attack of the electrophile on the ring', ['Generation of the electrophile by the catalyst', 'Loss of H⁺ to restore the ring', 'Addition of a nucleophile to the ring'], 'Slide 46.', 'EAS'],
    ['Friedel–Crafts acylation with an acid chloride and AlCl₃ gives', 'A ketone', ['An alcohol', 'A carboxylic acid', 'An alkane'], 'Slide 44.', 'EAS'],
    ['Friedel–Crafts alkylation fails on rings bearing', 'Strongly electron-withdrawing groups', ['Methyl groups', 'Hydroxyl groups', 'No substituents at all on the ring'], 'Slide 42.', 'EAS'],
    ['A nitro group on benzene directs further substitution to the', 'Meta position, and deactivates the ring', ['Ortho and para positions, and activates the ring', 'Ortho position only, with no effect on rate', 'Para position only, and activates the ring'], 'Slides 50–51.', 'Directing effects'],
    ['Which ortho/para directors are deactivating?', 'The halogens', ['Alkyl groups', 'Hydroxyl groups', 'Amino groups'], 'Slide 53.', 'Directing effects'],
  ],
};
