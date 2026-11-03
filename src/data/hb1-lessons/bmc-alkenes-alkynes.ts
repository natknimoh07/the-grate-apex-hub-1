// Basic Medical Chemistry → Alkenes, then Alkynes (owner, 2026-11-03: one functional group
// per lesson, in teaching order). From "SMS 151 2026_Alkenes_Alkynes.pdf" (Prof. Isaac Ayensu,
// Dept. of Pharmaceutical Chemistry, FPPS, KNUST). The Alkenes lesson keeps the id of the
// original database lesson bmc-05 ("Alkenes & Alkynes"), so progress is kept. Both practise
// their half of the course's Quiz 5 and the past questions on hydrocarbons.
// Explanations are in our own words; facts, reactions and examples are the lecture's.
import type { Hb1Lesson } from '@/data/hb1-lessons';

const SOURCE = 'SMS 151 2026_Alkenes_Alkynes.pdf (Prof. I. Ayensu)';

export const bmcAlkenes: Hb1Lesson = {
  id: 'bmc-05',
  order: 2,
  title: 'Alkenes',
  summary: 'SMS 151 · Prof. Isaac Ayensu · The C=C double bond, naming alkenes, electrophilic addition and Markovnikov’s rule, cis/trans isomers and conjugation',
  minutes: 15,
  source: SOURCE,
  quizId: 'ken',
  quizName: 'Quiz · Alkenes (lesson)',
  bankTopics: ['s5:Bonding & Hybridization', 's5:Alkene Structure & Properties', 's5:Alkene Addition Reactions'],
  pastTopics: ['hydrocarbons'],
  sections: [
    {
      id: 'ken-bond',
      title: 'The carbon–carbon double bond',
      kicker: 'Why alkenes react',
      blocks: [
        { k: 'p', x: '<b>Alkenes</b> are hydrocarbons with a carbon–carbon <b>double bond</b>. The double bond is stronger than a single bond, yet it is the <b>source of the reactivity</b> of these molecules. Nature uses alkenes widely — ethylene, a plant hormone; insect alarm pheromones and termite trail markers; and the bacterial anticancer agent calicheamicin.', lede: 1 },
        { k: 'table', head: ['Bond', 'Carbon', 'Shape', 'Bonds between the two carbons'], rows: [
          { c: ['C–C (alkane)', 'sp<sup>3</sup>', 'Tetrahedral, 109.5°', 'One σ'] },
          { c: ['C=C (alkene)', 'sp<sup>2</sup> (2s + two 2p), one p left over', 'Trigonal planar, 120°', 'One σ + one π'] },
        ] },
        { k: 'p', x: 'A carbon in a double bond has only three bonding partners, so it needs only three hybrid orbitals. The left-over p orbitals on the two carbons overlap sideways to make the <b>π bond</b>, above and below the plane of the molecule. Those <b>exposed π electrons</b> attract electron-seeking reagents, so alkenes react by <b>addition</b>: a reagent adds across the double bond and no atoms are lost.' },
        { k: 'p', x: 'The π electrons interact slightly with water, so alkenes are a little more soluble than alkanes, though still non-polar; their boiling points are otherwise much like their parent alkanes’.' },
      ],
    },
    {
      id: 'ken-naming',
      title: 'Naming alkenes',
      kicker: 'Nomenclature',
      blocks: [
        { k: 'ul', items: [
          'Replace the alkane’s <b>-ane</b> with <b>-ene</b>, numbering so the double bond gets the lowest locant: ethene, propene, 2-methyl-2-pentene, cyclohexene.',
          'Several double bonds: <b>-diene, -triene</b> — 1,3-butadiene, 2-methyl-1,3-butadiene, 1,3,5-hexatriene.',
          'With a higher-priority group, the -ene stays in the name: 2-butenoic acid, 3-buten-1-ol.',
          'Trivial alkenyl group names: <b>methylene</b> (CH<sub>2</sub>=), <b>vinyl</b> (CH<sub>2</sub>=CH–, as in vinyl chloride), <b>allyl</b> (CH<sub>2</sub>=CHCH<sub>2</sub>–, as in allyl bromide).',
        ] },
      ],
    },
    {
      id: 'ken-addition',
      title: 'Electrophilic addition and Markovnikov’s rule',
      kicker: 'The main reaction',
      blocks: [
        { k: 'p', x: 'In <b>electrophilic addition</b>, an electrophile such as H<sup>+</sup> is drawn to the π electrons and adds first, leaving a positive carbon — a <b>carbocation intermediate</b> (formed during the reaction but not a product). A nucleophile such as Br<sup>−</sup> then joins it. Overall, X–Y adds across C=C.', lede: 1 },
        { k: 'p', x: '<b>Markovnikov’s rule</b> (V. W. Markovnikov, 1838–1904): when HX adds to an unsymmetrical alkene, the <b>hydrogen goes to the carbon that already has more hydrogens</b> — “the rich get richer” — and X to the <b>more substituted</b> carbon. The reason: the slow first step makes the carbocation, and a secondary or tertiary carbocation is more stable and forms faster than a primary one. The anti-Markovnikov product, via a primary carbocation, is minor.' },
        { k: 'p', x: 'A reaction that gives one possible product in larger amounts is <b>regioselective</b>; one that gives only one (100%) is <b>regiospecific</b>.' },
        { k: 'box', title: 'Watch out', tone: 'trap', blocks: [{ k: 'p', x: 'A carbocation can <b>rearrange</b> to a more stable one before the nucleophile arrives, so the major product may have a rearranged skeleton. And HBr with <b>peroxides/oxygen</b> adds the <b>anti-Markovnikov</b> way.' }] },
        { k: 'table', head: ['Reagent', 'Product', 'Note'], rows: [
          { c: ['HX (HCl, HBr, HI)', 'Alkyl halide', 'Markovnikov'] },
          { c: ['H<sub>2</sub>O with H<sup>+</sup> catalyst', 'Alcohol', 'Markovnikov (hydration)'] },
          { c: ['Cold, concentrated H<sub>2</sub>SO<sub>4</sub>', 'Alkyl hydrogen sulfate', '—'] },
          { c: ['Br<sub>2</sub> in CCl<sub>4</sub> or CH<sub>2</sub>Cl<sub>2</sub>', 'Vicinal dibromide', 'The alkene polarises Br<sub>2</sub>; <b>anti</b>-addition (stereospecific)'] },
          { c: ['H<sub>2</sub> with Pt, Pd or Ni (also PtO<sub>2</sub>, Ru, Rh, Re)', 'Alkane', '<b>Syn</b>-addition; the catalyst holds the reactants together. Hardening oils into margarine'] },
          { c: ['Cold KMnO<sub>4</sub>/OH<sup>−</sup>', '1,2-Diol (glycol), via an epoxide', 'Mild oxidation'] },
          { c: ['Hot KMnO<sub>4</sub>', 'Aldehydes, ketones, carboxylic acids', 'The double bond is cleaved'] },
        ] },
        { k: 'p', x: '<b>Making alkenes:</b> by <b>elimination</b> from alkyl halides or alcohols, which usually gives a mixture. 2-Bromopentane with warm ethoxide gives trans-2-pentene (51%), 1-pentene (31%) and cis-2-pentene (18%).' },
      ],
    },
    {
      id: 'ken-isomers',
      title: 'Cis/trans isomers and conjugation',
      kicker: 'Shape and stability',
      blocks: [
        { k: 'p', x: 'Unlike a single bond, a C=C <b>cannot rotate</b>: twisting would break the π overlap. So groups on the two carbons are fixed on the <b>same side (cis)</b> or <b>opposite sides (trans)</b> — <b>geometric isomers</b>.', lede: 1 },
        { k: 'p', x: 'Double and single bonds that alternate are <b>conjugated</b>, and conjugation brings <b>extra stability</b> — in chains (1,3-butadiene) and in rings (1,3-cyclohexadiene). Three conjugated double bonds in a six-membered ring is <b>benzene</b>, which reacts with Br<sub>2</sub> only with a catalyst, and then by <b>substitution, not addition</b> — see the Aromatic Compounds lesson.' },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'C=C: sp², 120°, σ + π. The exposed π electrons make alkenes react by addition.',
        'Names: -ene, -diene; vinyl CH₂=CH–, allyl CH₂=CHCH₂–, methylene CH₂=.',
        'Electrophilic addition via a carbocation; Markovnikov: H to the carbon with more H. Peroxides reverse it for HBr.',
        'Br₂: anti-addition. H₂/Pt: syn-addition. Cold KMnO₄ → diol; hot KMnO₄ cleaves.',
        'No rotation about C=C → cis/trans isomers. Conjugation stabilises; benzene substitutes rather than adds.',
      ] },
    ],
    mnemonics: [
      { h: 'Markovnikov’s rule', lines: ['“<b>The rich get richer</b>”: the H of HX joins the carbon that is already richer in hydrogens.'] },
    ],
  },
  quiz: [
    ['Why does an alkene react by addition?', 'Its exposed π electrons attract electrophiles', ['Its σ bonds are much weaker than those of the alkanes', 'It has no hydrogens left to lose', 'Its carbons are sp³ hybridised'], 'The π bond is the source of reactivity (lecture, alkenes overview).', 'Alkenes'],
    ['Compared with alkanes, alkenes are', 'Slightly more soluble in water, but still non-polar', ['Strongly polar, and fully soluble in water in all amounts', 'Completely insoluble in any solvent', 'Ionic compounds with high melting points'], 'Exposed π electrons interact slightly with water (lecture, properties).', 'Alkenes'],
    ['In Markovnikov addition of HX, the halogen ends up on', 'The more substituted carbon', ['The carbon with more hydrogens', 'Either carbon equally often', 'A carbon away from the double bond'], 'The H goes to the carbon with more H; X to the more substituted carbon.', 'Addition'],
    ['Why is the Markovnikov product the major one?', 'It forms through the more stable carbocation', ['It forms through a free radical in light', 'It is the only product that can exist', 'It forms through the less stable carbocation'], 'Secondary/tertiary carbocations are more stable than primary (lecture, mechanism).', 'Addition'],
    ['A reaction that gives one of the possible products in larger amounts is', 'Regioselective', ['Regiospecific', 'Stereospecific', 'Non-selective'], 'Regiospecific means only one product (100%).', 'Addition'],
    ['Adding Br₂ to an alkene in CCl₄ occurs by', 'Anti-addition', ['Syn-addition', 'Substitution', 'Elimination'], 'Bromination is stereospecific anti-addition (lecture).', 'Addition'],
    ['Catalytic hydrogenation of an alkene (H₂, Pt) is', 'Syn-addition, giving an alkane', ['Anti-addition, giving an alcohol', 'Substitution, giving an alkyl halide', 'Oxidation, giving a carboxylic acid'], 'Lecture: hydrogenation is syn-addition (stereospecific).', 'Addition'],
    ['Cold, dilute KMnO₄ in base oxidises an alkene to', 'A 1,2-diol (glycol)', ['A carboxylic acid', 'An alkyne', 'An alkyl halide'], 'Hot KMnO₄ instead cleaves it to aldehydes, ketones and acids.', 'Oxidation'],
    ['Why can an alkene have cis and trans isomers but an alkane cannot?', 'The C=C bond cannot rotate', ['The C=C bond rotates very freely', 'Alkenes have no hydrogens', 'Alkanes contain a ring'], 'Lecture, cis/trans isomerism.', 'Isomers'],
    ['CH₂=CH– is called the', 'Vinyl group', ['Allyl group', 'Methylene group', 'Phenyl group'], 'Lecture: trivial names of alkenyl groups.', 'Naming'],
  ],
};

export const bmcAlkynes: Hb1Lesson = {
  id: 'bmc-alkynes',
  order: 3,
  title: 'Alkynes',
  summary: 'SMS 151 · Prof. Isaac Ayensu · The C≡C triple bond, naming alkynes, why terminal alkynes are acidic, how alkynes are made, and their reactions',
  minutes: 13,
  source: SOURCE,
  quizId: 'yne',
  quizName: 'Quiz · Alkynes (lesson)',
  bankTopics: ['s5:Alkyne Structure & Properties', 's5:Alkyne Synthesis & Reactions'],
  pastTopics: ['hydrocarbons'],
  sections: [
    {
      id: 'yne-bond',
      title: 'The carbon–carbon triple bond',
      kicker: 'sp carbons',
      blocks: [
        { k: 'p', x: '<b>Alkynes</b> have a carbon–carbon <b>triple bond</b> and the general formula <b>C<sub>n</sub>H<sub>2n−2</sub></b>. The simplest is <b>ethyne (acetylene)</b>, C<sub>2</sub>H<sub>2</sub>, H–C≡C–H.', lede: 1 },
        { k: 'p', x: 'A carbon with only two bonding partners needs only two hybrid orbitals: the 2s mixes with one 2p to give two <b>sp</b> orbitals pointing <b>180°</b> apart, so the molecule is <b>linear</b>. Two p orbitals are left on each carbon; they overlap to give <b>two π bonds</b> on top of the σ bond — the triple bond. A linear alkyne cannot have cis/trans isomers.' },
        { k: 'p', x: 'Alkynes are weakly or non-polar, cannot hydrogen-bond, have relatively low melting and boiling points, and do not dissolve in water.' },
      ],
    },
    {
      id: 'yne-naming',
      title: 'Naming alkynes',
      kicker: 'Nomenclature',
      blocks: [
        { k: 'ul', items: [
          '<b>IUPAC:</b> the parent is the longest chain <b>containing the triple bond</b>; drop -ane, add <b>-yne</b>, with a locant: CH<sub>3</sub>CH<sub>2</sub>C≡CCH<sub>3</sub> is <b>2-pentyne</b>; HC≡CCH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub> is 3-methyl-1-pentyne.',
          '<b>Common names:</b> “alkylacetylene” — 2-pentyne is ethylmethylacetylene; propyne is methylacetylene; phenylethyne is phenylacetylene.',
          '<b>Terminal</b> alkynes have the triple bond at the end of the chain (1-butyne, ethylacetylene); internal ones do not.',
        ] },
      ],
    },
    {
      id: 'yne-acidity',
      title: 'Terminal alkynes are acids',
      kicker: 'Electronegativity of sp carbon',
      blocks: [
        { k: 'p', x: 'An <b>sp carbon has more s character</b> (50%) than sp<sup>2</sup> or sp<sup>3</sup>, so its electrons sit closer to the nucleus and it is more <b>electronegative</b>. The ≡C–H bond is therefore more polar, and a <b>terminal alkyne is a weak acid</b>: weaker than water, but able to lose H<sup>+</sup> to a very strong base (NaNH<sub>2</sub> in liquid NH<sub>3</sub>) to give an <b>acetylide ion</b>, RC≡C:<sup>−</sup>. Alkanes and alkenes do not react this way.', lede: 1 },
        { k: 'p', x: 'Acid strength: <b>CH<sub>4</sub> &lt; NH<sub>3</sub> &lt; HC≡CH &lt; ROH &lt; H<sub>2</sub>O &lt; HF</b>. So NaOH cannot deprotonate acetylene (water is the stronger acid), but LiNH<sub>2</sub> or CH<sub>3</sub>MgBr can, and active metals (Na) give the sodium acetylide and H<sub>2</sub>.' },
      ],
    },
    {
      id: 'yne-synthesis',
      title: 'Making alkynes',
      kicker: 'Synthesis',
      blocks: [
        { k: 'step', n: '1', title: 'Double dehydrohalogenation of a vicinal dihalide', blocks: [{ k: 'p', x: 'An alkene plus X<sub>2</sub> gives a vicinal dihalide; KOH, then NaNH<sub>2</sub> (or 2 KOH with heat), removes two HX to give the alkyne: CH<sub>3</sub>CH=CH<sub>2</sub> → CH<sub>3</sub>CHBrCH<sub>2</sub>Br → CH<sub>3</sub>C≡CH.' }] },
        { k: 'step', n: '2', title: 'Coupling a metal acetylide with a primary or methyl halide', blocks: [{ k: 'p', x: 'An S<sub>N</sub>2 reaction: CH<sub>3</sub>C≡C<sup>−</sup>Li<sup>+</sup> + CH<sub>3</sub>CH<sub>2</sub>Br → CH<sub>3</sub>C≡CCH<sub>2</sub>CH<sub>3</sub>. The halide <b>must be 1° or methyl</b>: with a tertiary halide the acetylide acts as a base and <b>E2 elimination</b> wins.' }] },
      ],
    },
    {
      id: 'yne-reactions',
      title: 'Reactions of alkynes',
      kicker: 'Addition, acidity, oxidation',
      blocks: [
        { k: 'table', head: ['Reaction', 'Result'], rows: [
          { c: ['H<sub>2</sub> with Ni, Pt or Pd', 'All the way to the alkane'] },
          { c: ['H<sub>2</sub> with <b>Lindlar catalyst</b> (Pd–C)', '<b>Cis</b> alkene (syn-addition): 2-butyne → cis-2-butene'] },
          { c: ['<b>Na or Li in liquid NH<sub>3</sub></b>', '<b>Trans</b> alkene (anti-addition): 2-butyne → trans-2-butene'] },
          { c: ['X<sub>2</sub> (one or two moles)', 'Dihalide, then tetrahalide'] },
          { c: ['HX', 'Markovnikov; two moles give a geminal dihalide'] },
          { c: ['H<sub>2</sub>O, H<sub>2</sub>SO<sub>4</sub>, HgO', 'An enol, which tautomerises to a ketone (keto–enol tautomerism): 1-butyne → 2-butanone'] },
          { c: ['Na, or strong bases (terminal only)', 'Acetylides'] },
          { c: ['<b>AgNO<sub>3</sub></b> (terminal only)', 'A silver acetylide <b>precipitate</b> — a test for terminal alkynes'] },
          { c: ['Hot KMnO<sub>4</sub>, or O<sub>3</sub> then Zn/H<sub>2</sub>O', 'Cleavage to carboxylic acids (a terminal ≡CH gives CO<sub>2</sub>)'] },
        ] },
        { k: 'p', x: 'Few alkynes occur in nature: <b>capillin</b> (fungicidal), <b>ichthyothereol</b> (a convulsant used on Amazonian poison arrows), and the <b>enediynes</b> — nine- or ten-membered rings with two triple bonds separated by a double bond — with powerful antibiotic and anticancer activity (e.g. esperamicin); some are in clinical trials. Alkyne-containing drugs are synthetic.', lede: 1 },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'C≡C: sp, 180°, linear, σ + 2π. Alkynes CₙH₂ₙ₋₂. No cis/trans isomers.',
        'Names: -yne; common names “alkylacetylene”. Terminal = triple bond at the chain end.',
        'Terminal alkynes are weak acids: CH₄ < NH₃ < HC≡CH < ROH < H₂O < HF. NaNH₂ gives acetylides; NaOH does not.',
        'Made by double dehydrohalogenation, or acetylide + 1°/CH₃ halide (3° gives E2).',
        'Lindlar → cis alkene; Na/NH₃ → trans alkene. Hydration (HgO, H⁺) → ketone via an enol. AgNO₃ precipitate = terminal alkyne.',
      ] },
    ],
  },
  quiz: [
    ['What is the general formula of an alkyne?', 'CₙH₂ₙ₋₂', ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙHₙ'], 'Lecture: alkynes CnH2n−2.', 'Alkynes'],
    ['The carbons of a triple bond are', 'sp hybridised and linear, 180°', ['sp² hybridised and trigonal, 120°', 'sp³ hybridised and tetrahedral, 109.5°', 'sp hybridised and bent, 90°'], 'Lecture: sp hybrid orbitals.', 'Bonding'],
    ['CH₃CH₂C≡CCH₃ is named', '2-Pentyne', ['3-Pentyne', '2-Pentene', '1-Pentyne'], 'Lecture: nomenclature of alkynes.', 'Naming'],
    ['Why is a terminal alkyne C–H more acidic than an alkene C–H?', 'The sp carbon has more s character and is more electronegative', ['The sp carbon has less s character and is less electronegative', 'Alkynes form strong hydrogen bonds with water', 'Alkynes contain an extra σ bond to hydrogen'], 'Lecture, alkyne properties.', 'Acidity'],
    ['Which list gives acid strength in the correct order?', 'CH₄ < NH₃ < HC≡CH < ROH < H₂O', ['H₂O < ROH < HC≡CH < NH₃ < CH₄', 'HC≡CH < CH₄ < NH₃ < H₂O < ROH', 'NH₃ < CH₄ < ROH < HC≡CH < H₂O'], 'Lecture: CH₄ < NH₃ < HC≡CH < ROH < H₂O < HF.', 'Acidity'],
    ['Why does NaOH not deprotonate acetylene?', 'Water is a stronger acid than acetylene', ['Acetylene is a stronger acid than water', 'NaOH is too strong a base', 'Acetylene has no hydrogens to lose'], 'Lecture: HC≡CH + NaOH → no reaction.', 'Acidity'],
    ['Which reagent turns 2-butyne into cis-2-butene?', 'H₂ with Lindlar catalyst', ['Na or Li in liquid NH₃', 'Hot KMnO₄', 'H₂O, H₂SO₄ and HgO'], 'Lindlar gives syn-addition (cis); Na/NH₃ gives trans.', 'Reactions'],
    ['A precipitate with AgNO₃ shows that an alkyne', 'Has its triple bond at the end of the chain', ['Has its triple bond in the middle of the chain', 'Has been fully reduced to an alkane', 'Contains a conjugated double bond'], 'Only terminal alkynes form silver acetylides.', 'Reactions'],
    ['Hydration of 1-butyne (H₂O, H₂SO₄, HgO) gives', '2-Butanone, through an enol', ['1-Butanol, directly', 'Butanoic acid, through an epoxide', 'trans-2-Butene, by reduction'], 'Keto–enol tautomerism, Markovnikov orientation (lecture).', 'Reactions'],
    ['Why must a metal acetylide be coupled with a primary or methyl halide?', 'With tertiary halides E2 elimination wins instead of SN2', ['Primary halides are the only ones that dissolve in liquid ammonia', 'Tertiary halides add across the triple bond', 'Methyl halides make the acetylide more acidic'], 'Lecture, synthesis of alkynes.', 'Synthesis'],
    ['Enediynes found in nature are of interest because they are', 'Powerful antibiotic and anticancer agents', ['Common food flavourings and sweeteners', 'Plant growth hormones from fruit', 'Anaesthetic gases used in surgery'], 'Lecture: alkynes in nature.', 'Alkynes in nature'],
  ],
};
