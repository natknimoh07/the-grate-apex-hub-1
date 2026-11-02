// Basic Medical Chemistry → Aldehydes and Ketones. From "LECTURE 1-SMS 151_AROMATICS_
// CARBONYLS_CARBOXYLICS.pptx" (J. N. A. Addotey, Dept. of Pharmaceutical Chemistry,
// FPPS, KNUST), slides 58–107. Explanations are in our own words; facts are the lecture's.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const bmcAldehydesKetones: Hb1Lesson = {
  id: 'bmc-aldehydes-ketones',
  order: 2.5, // after alcohols (their oxidation gives these), before carboxylic acids
  title: 'Aldehydes & Ketones',
  summary: 'SMS 151 · J. N. A. Addotey · The carbonyl group, naming aldehydes and ketones, their properties, oxidation (Tollens’ test), nucleophilic addition and reduction',
  minutes: 15,
  source: 'LECTURE 1-SMS 151_AROMATICS_CARBONYLS_CARBOXYLICS.pptx, slides 58–107 (J. N. A. Addotey)',
  quizId: 'ald',
  quizName: 'Quiz 7 · Aldehydes & Ketones',
  pastTopics: ['aldehydes-and-ketones'],
  sections: [
    {
      id: 'ald-overview',
      title: 'By the end of this lecture, you will be able to…',
      kicker: 'Learning objectives',
      blocks: [
        { k: 'p', x: 'Much of organic chemistry is the chemistry of <b>carbonyl compounds</b>. Aldehydes and ketones are intermediates in making medicines, in biological pathways and in many industrial processes, so their properties are worth knowing well.', lede: 1 },
        { k: 'ul', items: [
          '<b>Identify</b> the functional groups that contain a carbonyl.',
          '<b>Name</b> aldehydes and ketones correctly.',
          '<b>Explain</b> the reaction mechanisms of each type.',
        ] },
      ],
    },
    {
      id: 'ald-carbonyl',
      title: 'The carbonyl group',
      kicker: 'Structure',
      blocks: [
        { k: 'p', x: 'The <b>carbonyl group, C=O</b>, appears in aldehydes, ketones and many other functional groups (carboxylic acids, esters, amides). Both the carbon and the oxygen are <b>sp<sup>2</sup> hybridised</b>, so the group is flat, with bond angles of <b>120°</b>.', lede: 1 },
        { k: 'p', x: 'What decides the family is what else is attached to the carbonyl carbon:' },
        { k: 'table', head: ['Family', 'Carbonyl carbon carries', 'Ending'], rows: [
          { c: ['Aldehyde (RCHO)', 'At least one hydrogen, plus an alkyl or aryl group', '-al'] },
          { c: ['Ketone (RCOR′)', 'Two alkyl or aryl groups', '-one'] },
        ] },
        { k: 'p', x: 'Oxygen is much more electronegative than carbon, so it pulls the shared electrons of the C=O towards itself. The bond is <b>polar</b>: the oxygen is slightly negative and the carbon slightly positive (electron-poor). That electron-poor carbon is the key to almost every reaction in this lesson.' },
      ],
    },
    {
      id: 'ald-naming',
      title: 'Naming aldehydes and ketones',
      kicker: 'Nomenclature',
      blocks: [
        { k: 'p', x: 'The simplest members keep <b>common names</b> (formaldehyde, acetaldehyde, acetone), and many others keep <b>traditional names</b> because they were known long before the systematic rules existed.', lede: 1 },
        { k: 'cards', items: [
          { title: 'Aldehydes', blocks: [{ k: 'ul', items: [
            'Choose the longest chain that contains the carbonyl carbon.',
            'Replace the <b>-e</b> of the alkane name with <b>-al</b>.',
            'The carbonyl carbon is always <b>carbon 1</b>, so its number is not written.',
            'Name the substituents in the usual way.',
          ] }] },
          { title: 'Ketones', blocks: [{ k: 'ul', items: [
            'Choose the longest chain that contains the carbonyl carbon.',
            'Replace the <b>-e</b> of the alkane name with <b>-one</b>.',
            'Number from the end <b>nearest the carbonyl</b>, so it gets the lowest number.',
            'Name the substituents in the usual way.',
          ] }] },
        ] },
        { k: 'h', x: 'Additional rules', l: 3 },
        { k: 'ul', items: [
          'In a <b>cyclic ketone</b> the carbonyl carbon is carbon 1 (not written); number round the ring to give the next substituent the lowest number.',
          'Several ketone groups: put a counting prefix before the suffix — <b>-dione, -trione</b> — with a position number for each.',
          'An aldehyde group on a benzene ring is named from <b>benzaldehyde</b>; the ring carbon carrying it is carbon 1.',
          'As a substituent, R–C=O is an <b>acyl</b> group: CH<sub>3</sub>CO– acetyl, HCO– formyl, C<sub>6</sub>H<sub>5</sub>CO– benzoyl.',
          'When another functional group names the chain, the C=O oxygen is shown with the prefix <b>oxo-</b>.',
        ] },
        { k: 'box', title: 'From the lecture’s assignment', tone: 'recall', blocks: [{ k: 'p', x: 'What is wrong with “3-ethyl-2-butanone”? An ethyl group on carbon 3 makes the longest chain five carbons, not four: the correct name is <b>3-methyl-2-pentanone</b>.' }] },
      ],
    },
    {
      id: 'ald-properties',
      title: 'Physical properties',
      kicker: 'Smell, solubility and polarity',
      blocks: [
        { k: 'cards', items: [
          { title: 'Aldehydes', blocks: [{ k: 'p', x: 'Simple aldehydes such as <b>formaldehyde</b> smell unpleasant and irritating. Aldehydes next to a string of double bonds (e.g. 3-phenyl-2-propenal) often smell pleasant: benzaldehyde (PhCHO) flavours <b>oil of bitter almond</b>, and vanillin flavours <b>vanilla</b>.' }] },
          { title: 'Ketones', blocks: [{ k: 'p', x: 'Simple ketones have distinctive smells like <b>acetone</b>, not unpleasant in low doses. Double bonds next to the carbonyl make them more fragrant — the main flavour of <b>oil of caraway</b> is such a ketone.' }] },
        ] },
        { k: 'p', x: 'Because the C=O is a dipole, carbonyl molecules attract each other more than alkanes do — but less than molecules that hydrogen-bond. They <b>cannot hydrogen-bond to each other</b> (there is no H on oxygen), but the carbonyl oxygen <b>can accept a hydrogen bond from water</b>. So small aldehydes and ketones dissolve in water, and solubility falls as the carbon chain grows.', lede: 1 },
      ],
    },
    {
      id: 'ald-oxidation',
      title: 'Oxidation and the Tollens’ test',
      kicker: 'Reactions of the carbonyl group',
      blocks: [
        { k: 'p', x: 'The reactions fall into two groups: <b>reactions of the carbonyl group</b> and <b>reactions involving the α-carbon</b> (the carbon next to the C=O).', lede: 1 },
        { k: 'p', x: 'An aldehyde still has a hydrogen on its carbonyl carbon, so it can be oxidised one step further to a <b>carboxylic acid</b> — just as a primary alcohol can. A <b>secondary alcohol</b> oxidises to a ketone, and the ketone is <b>not oxidised further</b>: its carbonyl carbon has no hydrogen left to lose.' },
        { k: 'table', head: ['Starting compound', 'Oxidised to'], rows: [
          { c: ['Primary alcohol', 'Aldehyde → carboxylic acid'] },
          { c: ['Secondary alcohol', 'Ketone (stops here)'] },
        ] },
        { k: 'h', x: 'The Tollens’ (silver mirror) test', l: 3 },
        { k: 'p', x: '<b>Tollens’ reagent</b> is a mild oxidising agent: silver ions in a basic solution of ammonia. An aldehyde is oxidised to a <b>carboxylate salt</b> (the solution is basic), and the silver ions are reduced to <b>solid silver</b>, which coats the tube as a <b>silver mirror</b>. A ketone cannot be oxidised this way, so it gives <b>no mirror</b> — which is how the test tells the two apart.' },
      ],
    },
    {
      id: 'ald-addition',
      title: 'Nucleophilic addition',
      kicker: 'The most important carbonyl reaction',
      blocks: [
        { k: 'p', x: 'The electron-poor carbonyl carbon attracts <b>nucleophiles</b> — species with an electron pair to give, negatively charged (:Nu<sup>−</sup>) or neutral (:Nu). The nucleophile can attack from either face of the flat group. The carbon ends up <b>sp<sup>3</sup></b>, which is a particularly stable state for it.', lede: 1 },
        { k: 'cards', items: [
          { title: 'Under basic (or neutral) conditions — 2 steps', blocks: [{ k: 'p', x: '(1) OH<sup>−</sup> adds to the carbonyl carbon; (2) the oxygen is protonated. Addition happens directly because OH<sup>−</sup> is a stronger nucleophile than water.' }] },
          { title: 'Under acidic conditions — 3 steps', blocks: [{ k: 'p', x: '(1) <b>Protonation</b> of the carbonyl oxygen, making the carbon even more electron-poor; (2) <b>addition</b> of the weak nucleophile (water); (3) <b>deprotonation</b>.' }] },
        ] },
        { k: 'p', x: 'Adding <b>H–Y</b> (where Y is electronegative) across the C=O gives an addition product, an <b>adduct</b>; its formation is <b>readily reversible</b>. With alcohols, aldehydes give <b>hemiacetals</b> and then <b>acetals</b>; ketones give <b>hemiketals</b> and then <b>ketals</b>.' },
        { k: 'h', x: 'Why aldehydes react faster than ketones', l: 3 },
        { k: 'ul', items: [
          '<b>Room (steric):</b> an aldehyde has one large group on the C=O, a ketone two — the transition state for the aldehyde is less crowded and lower in energy.',
          '<b>Charge (electronic):</b> alkyl groups stabilise the partial positive charge on the carbonyl carbon, as they do in carbocations. A ketone has more alkyl groups, so its carbonyl carbon is less positive and less attractive to nucleophiles; the aldehyde C=O is more polarised.',
          '<b>Aromatic aldehydes</b> are less reactive than aliphatic ones: the ring donates electrons by resonance, making the carbonyl a weaker electrophile.',
        ] },
      ],
    },
    {
      id: 'ald-reduction',
      title: 'Reduction to alcohols',
      kicker: 'Adding hydrogen',
      blocks: [
        { k: 'p', x: 'Reduction adds hydrogen across the C=O and turns the carbonyl compound into an alcohol: <b>aldehydes give primary (1°) alcohols, ketones give secondary (2°) alcohols</b> — the reverse of the oxidations above.', lede: 1 },
        { k: 'ul', items: [
          '<b>Industrial scale:</b> hydrogen gas with a metal catalyst — usually <b>nickel, platinum or palladium</b>.',
          '<b>Hydride reagents:</b> <b>NaBH<sub>4</sub></b> and <b>LiAlH<sub>4</sub></b>, each a source of hydride (H<sup>−</sup>). In two steps, the hydride attacks the positive end of the C=O dipole, then an H<sup>+</sup> from dilute acid (or even water) protonates the oxygen.',
        ] },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'C=O: both atoms sp<sup>2</sup>, 120°, polar (C δ+, O δ−).',
        'Aldehyde -al (carbonyl is C1, not written); ketone -one (lowest number for the carbonyl).',
        'Acyl groups: acetyl CH<sub>3</sub>CO–, formyl HCO–, benzoyl C<sub>6</sub>H<sub>5</sub>CO–; oxo- when another group names the chain.',
        'No hydrogen bonding to each other, but H-bond to water: small ones are water-soluble.',
        'Aldehydes oxidise to carboxylic acids; ketones do not. Tollens’: aldehyde → silver mirror; ketone → nothing.',
        'Nucleophilic addition: basic = 2 steps; acidic = protonation, addition, deprotonation. Aldehydes react faster than ketones.',
        'Reduction (H<sub>2</sub> + Ni/Pt/Pd, or NaBH<sub>4</sub>/LiAlH<sub>4</sub>): aldehyde → 1° alcohol; ketone → 2° alcohol.',
      ] },
    ],
  },
  quiz: [
    ['In the carbonyl group of aldehydes and ketones, the carbon and oxygen are', 'sp² hybridised, with 120° bond angles', ['sp³ hybridised, with 109.5° bond angles', 'sp hybridised, with 180° bond angles', 'sp² hybridised, with 90° bond angles'], 'The C and O of C=O are sp²-hybridised with bond angles of 120° (slide 62).', 'Carbonyl group'],
    ['What makes a carbonyl compound an aldehyde rather than a ketone?', 'At least one hydrogen on the carbonyl carbon', ['Two alkyl or aryl groups on the carbonyl carbon', 'An –OH group on the carbonyl carbon', 'A nitrogen atom on the carbonyl carbon'], 'Aldehyde: RCHO (H on the carbonyl carbon); ketone: two alkyl or aryl groups.', 'Carbonyl group'],
    ['Why is the carbonyl carbon attacked by nucleophiles?', 'Oxygen pulls electrons away, leaving the carbon electron-poor', ['Carbon pulls electrons away, leaving the oxygen electron-poor', 'The carbonyl carbon carries a full negative charge', 'The carbonyl group has no dipole at all'], 'C=O is polar: the electron-deficient carbon is open to nucleophilic attack (slide 92).', 'Carbonyl group'],
    ['The suffix used to name an aldehyde is', '-al', ['-one', '-ol', '-oic acid'], 'Replace the -e of the alkane with -al (slide 67).', 'Nomenclature'],
    ['When naming an aldehyde, the carbonyl carbon is', 'Always carbon 1, and its number is not written', ['Given the highest possible number', 'Numbered from whichever end is farthest from it', 'Always carbon 2 of the main chain'], 'The carbonyl carbon is always numbered 1 (slide 67).', 'Nomenclature'],
    ['How is the chain of a ketone numbered?', 'From the end that gives the carbonyl carbon the lowest number', ['From the end that gives all of the substituents the lowest numbers', 'Always from the left-hand end of the drawn chain', 'From the end that gives the carbonyl the highest number'], 'Number from the end closest to the ketone group (slide 69).', 'Nomenclature'],
    ['A molecule with two ketone groups takes which ending?', '-dione', ['-dial', '-diol', '-dioic acid'], 'More than one ketone group: dione, trione…, with a position number for each (slide 72).', 'Nomenclature'],
    ['An aldehyde group attached directly to a benzene ring is named from', 'Benzaldehyde', ['Benzoic acid', 'Acetophenone', 'Phenol'], 'Aromatic aldehydes are named after the parent compound benzaldehyde (slide 72).', 'Nomenclature'],
    ['The acyl group CH₃CO– is called', 'Acetyl', ['Formyl', 'Benzoyl', 'Methoxy'], 'CH₃CO: acetyl; HCO: formyl; C₆H₅CO: benzoyl (slide 73).', 'Nomenclature'],
    ['When other functional groups are present, the C=O oxygen is named with the prefix', 'oxo-', ['hydroxy-', 'keto-acid', 'carbonyl-'], 'The prefix oxo- labels the doubly bonded oxygen as a substituent (slide 73).', 'Nomenclature'],
    ['What is the correct name for the compound wrongly called “3-ethyl-2-butanone”?', '3-Methyl-2-pentanone', ['3-Ethyl-2-pentanone', '2-Ethyl-3-butanone', '3-Methyl-2-butanone'], 'The ethyl group lengthens the longest chain to five carbons.', 'Nomenclature'],
    ['Oil of bitter almond owes its flavour to', 'Benzaldehyde (PhCHO)', ['Formaldehyde (HCHO)', 'Acetone (CH₃COCH₃)', 'Acetic acid (CH₃COOH)'], 'Benzaldehyde is the primary flavouring agent of oil of bitter almond (slide 77).', 'Physical properties'],
    ['Why can small aldehydes and ketones dissolve in water?', 'Their carbonyl oxygen accepts hydrogen bonds from water', ['They form strong hydrogen bonds between their own molecules', 'They ionise completely in water', 'They have no dipole, like water'], 'They cannot H-bond to each other but can H-bond to water through the carbonyl oxygen (slide 81).', 'Physical properties'],
    ['As aldehydes and ketones get larger, their water solubility', 'Decreases', ['Increases', 'Stays the same', 'First rises, then falls'], 'Low-molecular-weight members are water-soluble; solubility falls as size increases (slide 79).', 'Physical properties'],
    ['The reactions of aldehydes and ketones fall into which two groups?', 'Reactions of the carbonyl group and of the α-carbon', ['Reactions of the hydroxyl group and of the benzene ring', 'Substitution of hydrogens and of halogens', 'Reactions in light and reactions in the dark'], 'Slide 83.', 'Reactions'],
    ['Oxidation of an aldehyde gives', 'A carboxylic acid', ['A ketone', 'A secondary alcohol', 'An alkane'], 'Aldehydes, like primary alcohols, oxidise to carboxylic acids (slide 86).', 'Oxidation'],
    ['Why is a ketone not oxidised further?', 'Its carbonyl carbon has no hydrogen to lose', ['It is already a carboxylic acid', 'It has no carbonyl group left for the oxidant to attack', 'It is too polar to react with oxidants'], 'Secondary alcohols oxidise to ketones, which are not oxidised further (slide 86).', 'Oxidation'],
    ['Tollens’ reagent is', 'Silver ions in basic aqueous ammonia', ['Copper ions in an acidic solution', 'Potassium dichromate in sulfuric acid', 'Sodium borohydride in dry ether'], 'A mild oxidising agent of silver ions in aqueous basic ammonia (slide 88).', 'Oxidation'],
    ['A positive Tollens’ test (silver mirror) shows', 'An aldehyde', ['A ketone', 'An alkane', 'A tertiary alcohol'], 'Aldehydes are oxidised and Ag⁺ is reduced to a silver mirror; ketones give no mirror.', 'Oxidation'],
    ['In the Tollens’ test, the aldehyde is converted to', 'A carboxylate salt', ['A primary alcohol', 'A ketone', 'An acetal'], 'The solution is basic, so the acid formed is present as its carboxylate salt (slide 88).', 'Oxidation'],
    ['Addition of water to a carbonyl under basic conditions has how many steps?', 'Two: OH⁻ adds, then the oxygen is protonated', ['Three: protonation, addition, deprotonation', 'One: water adds in a single step', 'Four: two additions and two protonations'], 'Slide 100. Under acidic conditions there are three steps (slide 99).', 'Addition'],
    ['Under acidic conditions, the first step of water addition to a carbonyl is', 'Protonation of the carbonyl oxygen', ['Attack of hydroxide on the carbonyl carbon', 'Loss of a hydrogen from the α-carbon', 'Deprotonation of the attacking water'], 'Protonation → addition → deprotonation (slide 99).', 'Addition'],
    ['Why do aldehydes react faster than ketones in nucleophilic addition?', 'They are less crowded and their C=O is more polarised', ['They are more crowded and their C=O is less polar', 'They have two alkyl groups on the C=O carbon', 'They cannot be attacked from either face'], 'Steric and electronic reasons (slides 94–95).', 'Addition'],
    ['Aromatic aldehydes are less reactive than aliphatic aldehydes because', 'The ring donates electrons by resonance to the carbonyl', ['The ring withdraws all electrons from the carbonyl', 'They have no carbonyl group at all', 'They cannot dissolve in any solvent'], 'The electron-donating resonance effect makes the C=O a weaker electrophile (slide 96).', 'Addition'],
    ['Adding an alcohol to an aldehyde first gives a', 'Hemiacetal', ['Hemiketal', 'Carboxylic acid', 'Ester'], 'Aldehydes give hemiacetals and acetals; ketones give hemiketals and ketals (slides 102–104).', 'Addition'],
    ['Reduction of a ketone gives', 'A secondary alcohol', ['A primary alcohol', 'A carboxylic acid', 'An aldehyde'], 'Aldehydes reduce to 1° alcohols and ketones to 2° alcohols (slide 105).', 'Reduction'],
    ['Which metals are usually used as catalysts for reducing aldehydes and ketones with hydrogen?', 'Nickel, platinum or palladium', ['Sodium, potassium or lithium metal', 'Iron, copper or zinc', 'Silver, gold or mercury'], 'Industrial reductions use H₂ with Ni, Pt or Pd (slide 105).', 'Reduction'],
    ['NaBH₄ and LiAlH₄ reduce carbonyl compounds by acting as a source of', 'Hydride ions (H⁻)', ['Protons (H⁺)', 'Hydroxide ions (OH⁻)', 'Oxygen atoms'], 'The hydride attacks the positive end of the C=O dipole; H⁺ then comes from dilute acid or water (slide 106).', 'Reduction'],
  ],
};
