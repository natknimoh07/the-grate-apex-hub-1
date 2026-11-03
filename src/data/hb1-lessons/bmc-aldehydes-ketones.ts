// Basic Medical Chemistry → Aldehydes, then Ketones (owner, 2026-11-03: one functional group
// per lesson, in teaching order). From "LECTURE 1-SMS 151_AROMATICS_CARBONYLS_CARBOXYLICS.pptx"
// (J. N. A. Addotey, Dept. of Pharmaceutical Chemistry, FPPS, KNUST), slides 58–107, where the
// two are taught together. The Aldehydes lesson keeps the id of the earlier joint lesson
// ("bmc-aldehydes-ketones"), so progress is kept. Both practise the course's past questions on
// aldehydes and ketones. Explanations are in our own words; facts are the lecture's.
import type { Hb1Lesson } from '@/data/hb1-lessons';

const SOURCE = 'LECTURE 1-SMS 151_AROMATICS_CARBONYLS_CARBOXYLICS.pptx, slides 58–107 (J. N. A. Addotey)';

export const bmcAldehydes: Hb1Lesson = {
  id: 'bmc-aldehydes-ketones',
  order: 7,
  title: 'Aldehydes',
  summary: 'SMS 151 · J. N. A. Addotey · The carbonyl group, naming aldehydes, their smells and solubility, oxidation and the Tollens’ test, nucleophilic addition, and reduction to primary alcohols',
  minutes: 14,
  source: SOURCE,
  quizId: 'aldh',
  quizName: 'Quiz · Aldehydes (lesson)',
  pastTopics: ['aldehydes-and-ketones'],
  sections: [
    {
      id: 'aldh-carbonyl',
      title: 'The carbonyl group',
      kicker: 'C=O',
      blocks: [
        { k: 'p', x: 'Much of organic chemistry is the chemistry of <b>carbonyl compounds</b>. Aldehydes are intermediates in making medicines, in biological pathways and in many industrial processes, so their properties are worth knowing well.', lede: 1 },
        { k: 'p', x: 'The <b>carbonyl group, C=O</b>, appears in aldehydes, ketones and many other functional groups (carboxylic acids, esters, amides). Both the carbon and the oxygen are <b>sp<sup>2</sup> hybridised</b>, so the group is flat, with bond angles of <b>120°</b>.' },
        { k: 'p', x: 'In an <b>aldehyde (RCHO)</b> the carbonyl carbon carries <b>at least one hydrogen</b>, plus an alkyl or aryl group. (In a ketone, the next lesson, it carries two carbon groups.)' },
        { k: 'p', x: 'Oxygen is much more electronegative than carbon, so the C=O bond is <b>polar</b>: oxygen slightly negative, carbon slightly positive (electron-poor). That electron-poor carbon is the key to almost every reaction below.' },
      ],
    },
    {
      id: 'aldh-naming',
      title: 'Naming aldehydes',
      kicker: 'Nomenclature',
      blocks: [
        { k: 'p', x: 'The simplest aldehydes keep <b>common names</b> (formaldehyde, acetaldehyde), and many keep <b>traditional names</b> because they were known long before the systematic rules.', lede: 1 },
        { k: 'ul', items: [
          'Choose the longest chain that contains the carbonyl carbon.',
          'Replace the <b>-e</b> of the alkane name with <b>-al</b>.',
          'The carbonyl carbon is always <b>carbon 1</b>, so its number is not written.',
          'Name the substituents in the usual way.',
          'An aldehyde group on a benzene ring is named from <b>benzaldehyde</b>; the ring carbon carrying it is carbon 1.',
          'As a substituent, HCO– is <b>formyl</b>; when another group names the chain, the C=O oxygen is the prefix <b>oxo-</b>.',
        ] },
      ],
    },
    {
      id: 'aldh-properties',
      title: 'Physical properties',
      kicker: 'Smell and solubility',
      blocks: [
        { k: 'p', x: 'Simple aldehydes such as <b>formaldehyde</b> smell unpleasant and irritating. Aldehydes next to a string of double bonds (e.g. 3-phenyl-2-propenal) often smell pleasant: benzaldehyde (PhCHO) flavours <b>oil of bitter almond</b>, and vanillin flavours <b>vanilla</b>.', lede: 1 },
        { k: 'p', x: 'The C=O dipole makes aldehyde molecules attract each other more than alkanes do — but less than molecules that hydrogen-bond. They <b>cannot hydrogen-bond to each other</b> (no H on oxygen), but the carbonyl oxygen <b>can accept a hydrogen bond from water</b>. So small aldehydes dissolve in water, and solubility falls as the chain grows.' },
      ],
    },
    {
      id: 'aldh-oxidation',
      title: 'Oxidation and the Tollens’ test',
      kicker: 'Reactions of the carbonyl group',
      blocks: [
        { k: 'p', x: 'The reactions of aldehydes fall into two groups: <b>reactions of the carbonyl group</b> and <b>reactions of the α-carbon</b> (the carbon next to the C=O).', lede: 1 },
        { k: 'p', x: 'An aldehyde still has a hydrogen on its carbonyl carbon, so it can be <b>oxidised one step further to a carboxylic acid</b> — just as a primary alcohol is oxidised to an aldehyde and then to an acid.' },
        { k: 'h', x: 'The Tollens’ (silver mirror) test', l: 3 },
        { k: 'p', x: '<b>Tollens’ reagent</b> is a mild oxidising agent: silver ions in a basic solution of ammonia. An aldehyde is oxidised to a <b>carboxylate salt</b> (the solution is basic), and the silver ions are reduced to <b>solid silver</b>, coating the tube as a <b>silver mirror</b>. Ketones give no mirror — which is how the test tells the two apart.' },
      ],
    },
    {
      id: 'aldh-addition',
      title: 'Nucleophilic addition and reduction',
      kicker: 'The most important carbonyl reaction',
      blocks: [
        { k: 'p', x: 'The electron-poor carbonyl carbon attracts <b>nucleophiles</b> — negatively charged (:Nu<sup>−</sup>) or neutral (:Nu). They can attack from either face of the flat group, and the carbon ends up <b>sp<sup>3</sup></b>, a particularly stable state.', lede: 1 },
        { k: 'cards', items: [
          { title: 'Basic (or neutral) conditions — 2 steps', blocks: [{ k: 'p', x: '(1) OH<sup>−</sup> adds to the carbonyl carbon; (2) the oxygen is protonated. Addition is direct because OH<sup>−</sup> is a stronger nucleophile than water.' }] },
          { title: 'Acidic conditions — 3 steps', blocks: [{ k: 'p', x: '(1) <b>Protonation</b> of the carbonyl oxygen, making the carbon even more electron-poor; (2) <b>addition</b> of the weak nucleophile (water); (3) <b>deprotonation</b>.' }] },
        ] },
        { k: 'p', x: 'Adding <b>H–Y</b> (Y electronegative) across C=O gives an <b>adduct</b>, formed reversibly. With alcohols, aldehydes give <b>hemiacetals</b> and then <b>acetals</b>.' },
        { k: 'p', x: '<b>Aldehydes are more reactive than ketones</b>: they carry only one large group, so the transition state is less crowded; and with fewer alkyl groups to stabilise it, their carbonyl carbon is more positive. <b>Aromatic aldehydes</b> are less reactive than aliphatic ones, because the ring donates electrons by resonance.' },
        { k: 'h', x: 'Reduction', l: 3 },
        { k: 'p', x: 'Adding hydrogen across the C=O turns an aldehyde into a <b>primary (1°) alcohol</b> — the reverse of oxidation. Industrially: H<sub>2</sub> with <b>nickel, platinum or palladium</b>. In the laboratory: the hydride reagents <b>NaBH<sub>4</sub></b> and <b>LiAlH<sub>4</sub></b>, sources of H<sup>−</sup>, which attacks the positive carbon; H<sup>+</sup> from dilute acid or water then protonates the oxygen.' },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'C=O: sp², 120°, polar (C δ+, O δ−). Aldehyde RCHO: at least one H on the carbonyl carbon.',
        'Names end in -al; the carbonyl carbon is C1 and not numbered. Benzaldehyde; formyl HCO–; oxo-.',
        'Formaldehyde irritating; benzaldehyde (bitter almond), vanillin (vanilla). Accept H-bonds from water.',
        'Aldehydes oxidise to carboxylic acids; Tollens’ (Ag⁺, NH₃) gives a silver mirror.',
        'Nucleophilic addition: basic 2 steps, acidic 3 steps; alcohols → hemiacetals → acetals. More reactive than ketones.',
        'Reduction (H₂/Ni, Pt, Pd or NaBH₄, LiAlH₄) → primary alcohol.',
      ] },
    ],
  },
  quiz: [
    ['In the carbonyl group of an aldehyde, the carbon and oxygen are', 'sp² hybridised, with 120° bond angles', ['sp³ hybridised, with 109.5° bond angles', 'sp hybridised, with 180° bond angles', 'sp² hybridised, with 90° bond angles'], 'Slide 62.', 'Carbonyl group'],
    ['What makes a carbonyl compound an aldehyde?', 'At least one hydrogen on the carbonyl carbon', ['Two alkyl or aryl groups on the carbonyl carbon', 'An –OH group on the carbonyl carbon', 'A nitrogen atom on the carbonyl carbon'], 'Aldehyde: RCHO.', 'Carbonyl group'],
    ['The suffix used to name an aldehyde is', '-al', ['-one', '-ol', '-oic acid'], 'Slide 67.', 'Naming'],
    ['When naming an aldehyde, the carbonyl carbon is', 'Always carbon 1, and its number is not written', ['Given the highest possible number', 'Numbered from whichever end is farthest from it', 'Always carbon 2 of the main chain'], 'Slide 67.', 'Naming'],
    ['An aldehyde group attached directly to a benzene ring is named from', 'Benzaldehyde', ['Benzoic acid', 'Acetophenone', 'Phenol'], 'Slide 72.', 'Naming'],
    ['Oil of bitter almond owes its flavour to', 'Benzaldehyde (PhCHO)', ['Formaldehyde (HCHO)', 'Acetone (CH₃COCH₃)', 'Acetic acid (CH₃COOH)'], 'Slide 77.', 'Properties'],
    ['Why can small aldehydes dissolve in water?', 'Their carbonyl oxygen accepts hydrogen bonds from water', ['They form strong hydrogen bonds between their own molecules', 'They ionise completely in water', 'They have no dipole, like water'], 'Slide 81.', 'Properties'],
    ['Oxidation of an aldehyde gives', 'A carboxylic acid', ['A ketone', 'A secondary alcohol', 'An alkane'], 'Slide 86.', 'Oxidation'],
    ['Tollens’ reagent is', 'Silver ions in basic aqueous ammonia', ['Copper ions in an acidic solution', 'Potassium dichromate in sulfuric acid', 'Sodium borohydride in dry ether'], 'Slide 88.', 'Oxidation'],
    ['In the Tollens’ test, the aldehyde is converted to', 'A carboxylate salt', ['A primary alcohol', 'A ketone', 'An acetal'], 'Slide 88: the solution is basic.', 'Oxidation'],
    ['Under acidic conditions, the first step of water addition to a carbonyl is', 'Protonation of the carbonyl oxygen', ['Attack of hydroxide on the carbonyl carbon', 'Loss of a hydrogen from the α-carbon', 'Deprotonation of the attacking water'], 'Slide 99.', 'Addition'],
    ['Adding an alcohol to an aldehyde first gives a', 'Hemiacetal', ['Hemiketal', 'Carboxylic acid', 'Ester'], 'Slides 102–104.', 'Addition'],
    ['Aromatic aldehydes are less reactive than aliphatic aldehydes because', 'The ring donates electrons by resonance to the carbonyl', ['The ring withdraws all electrons from the carbonyl', 'They have no carbonyl group at all', 'They cannot dissolve in any solvent'], 'Slide 96.', 'Addition'],
    ['Reduction of an aldehyde gives', 'A primary alcohol', ['A secondary alcohol', 'A carboxylic acid', 'A ketone'], 'Slide 105.', 'Reduction'],
  ],
};

export const bmcKetones: Hb1Lesson = {
  id: 'bmc-ketones',
  order: 8,
  title: 'Ketones',
  summary: 'SMS 151 · J. N. A. Addotey · The ketone carbonyl, naming ketones (including cyclic ketones and diones), why ketones resist oxidation, why they add more slowly than aldehydes, and reduction to secondary alcohols',
  minutes: 12,
  source: SOURCE,
  quizId: 'ket',
  quizName: 'Quiz · Ketones (lesson)',
  pastTopics: ['aldehydes-and-ketones'],
  sections: [
    {
      id: 'ket-what',
      title: 'What a ketone is',
      kicker: 'RCOR′',
      blocks: [
        { k: 'p', x: 'A <b>ketone</b> has the same flat, polar <b>C=O</b> group as an aldehyde (sp<sup>2</sup>, 120°), but its carbonyl carbon carries <b>two alkyl or aryl groups</b> and <b>no hydrogen</b>. That one difference explains how ketones behave differently from aldehydes.', lede: 1 },
        { k: 'table', head: ['', 'Aldehyde', 'Ketone'], rows: [
          { c: ['Groups on the carbonyl carbon', 'At least one H + R', 'Two R groups'] },
          { c: ['Name ending', '-al', '-one'] },
          { c: ['Oxidised further?', 'Yes, to a carboxylic acid', 'No'] },
          { c: ['Tollens’ test', 'Silver mirror', 'No mirror'] },
          { c: ['Nucleophilic addition', 'Faster', 'Slower'] },
          { c: ['Reduction gives', 'Primary alcohol', 'Secondary alcohol'] },
        ] },
      ],
    },
    {
      id: 'ket-naming',
      title: 'Naming ketones',
      kicker: 'Nomenclature',
      blocks: [
        { k: 'p', x: 'The simplest ketone keeps its common name, <b>acetone</b>. Systematically:', lede: 1 },
        { k: 'ul', items: [
          'Choose the longest chain that contains the carbonyl carbon.',
          'Replace the <b>-e</b> of the alkane name with <b>-one</b>.',
          'Number from the end <b>nearest the carbonyl</b>, so it gets the lowest number.',
          'Name the substituents in the usual way.',
          'In a <b>cyclic ketone</b> the carbonyl carbon is carbon 1 (not written); number round the ring to give the next substituent the lowest number (3-ethylcyclopentanone).',
          'Several ketone groups: <b>-dione, -trione</b>, with a position number for each.',
          'As substituents: <b>acetyl</b> (CH<sub>3</sub>CO–) and <b>benzoyl</b> (C<sub>6</sub>H<sub>5</sub>CO–) are acyl groups; with another main group the C=O oxygen is <b>oxo-</b>.',
        ] },
        { k: 'box', title: 'From the lecture’s assignment', tone: 'recall', blocks: [{ k: 'p', x: 'What is wrong with “3-ethyl-2-butanone”? The ethyl group on carbon 3 makes the longest chain five carbons, not four: the correct name is <b>3-methyl-2-pentanone</b>.' }] },
      ],
    },
    {
      id: 'ket-properties',
      title: 'Physical properties',
      kicker: 'Smell and solubility',
      blocks: [
        { k: 'p', x: 'Simple ketones have distinctive smells like <b>acetone</b>, not unpleasant in low doses. As with aldehydes, double bonds next to the carbonyl make them more fragrant — the main flavour of <b>oil of caraway</b> is such a ketone.', lede: 1 },
        { k: 'p', x: 'Ketones cannot hydrogen-bond to each other, but the carbonyl oxygen accepts hydrogen bonds from water, so <b>small ketones are water-soluble</b>; solubility falls as the molecule grows.' },
      ],
    },
    {
      id: 'ket-reactions',
      title: 'Reactions of ketones',
      kicker: 'Oxidation, addition, reduction',
      blocks: [
        { k: 'p', x: '<b>Oxidation:</b> a <b>secondary alcohol</b> oxidises to a ketone, and the ketone is <b>not oxidised further</b> — its carbonyl carbon has no hydrogen left to lose. So a ketone gives <b>no silver mirror</b> with Tollens’ reagent.', lede: 1 },
        { k: 'p', x: '<b>Nucleophilic addition</b> works as for aldehydes (two steps under basic conditions, three under acidic ones), but <b>more slowly</b>, for two reasons:' },
        { k: 'ul', items: [
          '<b>Room (steric):</b> two large groups crowd the carbonyl carbon, so the transition state is more crowded and higher in energy.',
          '<b>Charge (electronic):</b> alkyl groups stabilise the partial positive charge on the carbonyl carbon, as they do in carbocations. With two of them, a ketone’s carbonyl carbon is less positive and less attractive to nucleophiles.',
        ] },
        { k: 'p', x: 'With alcohols, ketones give <b>hemiketals</b> and then <b>ketals</b>.' },
        { k: 'p', x: '<b>Reduction</b> — H<sub>2</sub> with Ni, Pt or Pd, or NaBH<sub>4</sub> / LiAlH<sub>4</sub> — turns a ketone into a <b>secondary (2°) alcohol</b>.' },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Ketone RCOR′: two carbon groups on the C=O carbon, no H.',
        'Names end in -one; number for the lowest carbonyl locant; cyclic ketone carbonyl = C1; -dione, -trione; acetyl, benzoyl, oxo-.',
        'Acetone smell; oil of caraway. Small ketones water-soluble.',
        '2° alcohol → ketone, which is not oxidised further: no Tollens’ mirror.',
        'Slower nucleophilic addition than aldehydes (crowding, less positive carbon). Alcohols → hemiketals → ketals.',
        'Reduction → secondary alcohol.',
      ] },
    ],
  },
  quiz: [
    ['What makes a carbonyl compound a ketone rather than an aldehyde?', 'Two carbon groups and no hydrogen on the carbonyl carbon', ['At least one hydrogen and one carbon group on the carbonyl carbon', 'An –OH group on the carbonyl carbon', 'A nitrogen atom on the carbonyl carbon'], 'Ketone: RCOR′.', 'Ketones'],
    ['The suffix used to name a ketone is', '-one', ['-al', '-ol', '-oic acid'], 'Slide 69.', 'Naming'],
    ['How is the chain of a ketone numbered?', 'From the end that gives the carbonyl carbon the lowest number', ['From the end that gives all of the substituents the lowest numbers', 'Always from the left-hand end of the drawn chain', 'From the end that gives the carbonyl the highest number'], 'Slide 69.', 'Naming'],
    ['A molecule with two ketone groups takes which ending?', '-dione', ['-dial', '-diol', '-dioic acid'], 'Slide 72.', 'Naming'],
    ['What is the correct name for the compound wrongly called “3-ethyl-2-butanone”?', '3-Methyl-2-pentanone', ['3-Ethyl-2-pentanone', '2-Ethyl-3-butanone', '3-Methyl-2-butanone'], 'The ethyl group lengthens the longest chain to five carbons.', 'Naming'],
    ['The acyl group CH₃CO– is called', 'Acetyl', ['Formyl', 'Benzoyl', 'Methoxy'], 'Slide 73.', 'Naming'],
    ['The main flavour of oil of caraway is', 'A ketone', ['An aldehyde', 'An alkane', 'An amine'], 'Slide 78.', 'Properties'],
    ['Why is a ketone not oxidised further?', 'Its carbonyl carbon has no hydrogen to lose', ['It is already a carboxylic acid', 'It has no carbonyl group left for the oxidant to attack', 'It is too polar to react with oxidants'], 'Slide 86.', 'Oxidation'],
    ['What does a ketone give in the Tollens’ test?', 'No silver mirror', ['A silver mirror', 'A red precipitate', 'A purple colour'], 'Slide 88.', 'Oxidation'],
    ['Why do ketones react more slowly than aldehydes in nucleophilic addition?', 'Two groups crowd the carbonyl and make its carbon less positive', ['They have no carbonyl group that a nucleophile could attack', 'Their carbonyl carbon is more positive than an aldehyde’s', 'They have only one group on the carbonyl'], 'Slides 94–95.', 'Addition'],
    ['Adding an alcohol to a ketone first gives a', 'Hemiketal', ['Hemiacetal', 'Carboxylic acid', 'Ester'], 'Slides 102–104.', 'Addition'],
    ['Reduction of a ketone gives', 'A secondary alcohol', ['A primary alcohol', 'A carboxylic acid', 'An aldehyde'], 'Slide 105.', 'Reduction'],
  ],
};
