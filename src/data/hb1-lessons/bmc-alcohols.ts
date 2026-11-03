// Basic Medical Chemistry → Alcohols. The "Alcohols" lecture listed in "BMC2026 (1).pptx"
// (Prof. Abena Brobbey) is not in that file, so this lesson is built from the alcohol part
// of the course's original lesson (database lesson bmc-02, "Alkyl Halides & Alcohols"),
// plus the alcohols-and-phenols slides of "SMS 151 2025.pdf". Practises the bank's alcohol
// questions (Quiz 2's "ROH" topics) and the past questions on alcohols, phenols and ethers.
// Explanations are in our own words; facts are the course's.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const bmcAlcohols: Hb1Lesson = {
  id: 'bmc-alcohols',
  order: 6,
  title: 'Alcohols',
  summary: 'SMS 151 · Classifying and naming alcohols, hydrogen bonding and its effects, five ways to make them, acidity, oxidation, dehydration, and alcohols in medicine',
  minutes: 16,
  source: 'Original course lesson bmc-02 (Alkyl Halides & Alcohols); SMS 151 2025.pdf, alcohols and phenols',
  quizId: 'roh',
  quizName: 'Quiz · Alcohols (lesson)',
  bankTopics: ['ROH Classification & Naming', 'ROH Properties & Synthesis', 'ROH Reactions & Significance', 'ROH Commercial & Pharmaceutical Significance'],
  pastTopics: ['alcohols-phenols-ethers'],
  sections: [
    {
      id: 'roh-classes',
      title: 'What alcohols are, and their names',
      kicker: 'R–OH',
      blocks: [
        { k: 'p', x: 'An <b>alcohol</b> has a <b>hydroxyl group (–OH)</b> on an alkyl carbon: R–OH. On a benzene ring the same group makes a <b>phenol</b>. Like alkyl halides, alcohols are <b>primary, secondary or tertiary</b> according to the carbon carrying the –OH.', lede: 1 },
        { k: 'table', head: ['Alcohol (all C<sub>4</sub>H<sub>9</sub>OH)', 'Class'], rows: [
          { c: ['CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH — 1-butanol', '1°'] },
          { c: ['CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub> — 2-butanol (sec-butyl alcohol)', '2°'] },
          { c: ['(CH<sub>3</sub>)<sub>3</sub>COH — 2-methyl-2-propanol (tert-butyl alcohol)', '3°'] },
        ] },
        { k: 'p', x: 'Same formula, three classes: classification depends on how the atoms are connected, not on the formula.' },
        { k: 'h', x: 'Naming', l: 3 },
        { k: 'ul', items: [
          '<b>IUPAC:</b> the parent is the longest chain containing the –OH; replace the final -e with <b>-ol</b>; number to give the –OH the lowest number; two –OH groups make a <b>-diol</b>; other substituents go in alphabetical order. 1-pentanol, 5-chloro-2-methyl-2-pentanol, 7-methyl-3,5-octanediol, 4,4-dimethyl-1-cyclohexanol. CH<sub>3</sub>CH<sub>2</sub>OH is <b>ethanol</b>.',
          '<b>Common names:</b> the alkyl group, then “alcohol” — n-propyl (1°), isopropyl (2°), sec-butyl (2°), isobutyl (1°), t-butyl (3°), neopentyl (1°) and benzyl alcohol (1°).',
        ] },
      ],
    },
    {
      id: 'roh-properties',
      title: 'Hydrogen bonding and physical properties',
      kicker: 'Why alcohols boil high',
      blocks: [
        { k: 'p', x: 'The O–H bond lets alcohol molecules <b>hydrogen-bond</b> to each other and to water. That single fact explains their physical properties.', lede: 1 },
        { k: 'table', head: ['Property', 'Explanation'], rows: [
          { c: ['Boiling point', '<b>Much higher</b> than alkanes or alkyl halides of similar mass: hydrogen bonds must be broken to boil them'] },
          { c: ['Solubility', 'Under about 4 carbons: soluble in water (they hydrogen-bond with it); over 4: insoluble, as the chain behaves like a hydrocarbon. Branched chains are more soluble (tert-butyl &gt; n-butyl alcohol)'] },
          { c: ['Density', 'Liquid alcohols are about <b>0.8 g/mL</b> — lighter than water'] },
        ] },
        { k: 'p', x: 'So propanol boils higher than propane and dissolves in water, but n-hexanol does not dissolve: as R grows, ROH behaves more like the hydrocarbon.' },
      ],
    },
    {
      id: 'roh-synthesis',
      title: 'Making alcohols',
      kicker: 'Five routes',
      blocks: [
        { k: 'ul', ol: 1, items: [
          '<b>Hydration</b> of an alkene: water adds across the double bond (Markovnikov or anti-Markovnikov).',
          '<b>Reducing an aldehyde or ketone</b>: H<sub>2</sub> with Pt, Pd, Ni or Ru, or LiAlH<sub>4</sub> / NaBH<sub>4</sub>.',
          '<b>Reducing a carboxylic acid</b> to a primary alcohol — needs the strong reducer LiAlH<sub>4</sub>.',
          '<b>Reducing an ester</b> with LiAlH<sub>4</sub>, giving two alcohols (methyl benzoate → benzyl alcohol + methanol).',
          '<b>Grignard reaction</b> (RMgX): with formaldehyde → <b>1°</b>; with another aldehyde → <b>2°</b>; with a ketone → <b>3°</b> alcohol.',
        ] },
        { k: 'p', x: '<b>LiAlH<sub>4</sub></b> is a very strong reducing agent that reduces many groups; <b>NaBH<sub>4</sub></b> is much milder and reduces essentially only aldehydes and ketones.' },
      ],
    },
    {
      id: 'roh-reactions',
      title: 'Reactions of alcohols',
      kicker: 'At the O–H and the C–O bond',
      blocks: [
        { k: 'p', x: 'Oxygen polarises both of its bonds. At the <b>O–H</b> bond the hydrogen is slightly positive, so alcohols are <b>weak acids</b>: methyl &gt; 1° &gt; 2° &gt; 3°. At the <b>C–O</b> bond, OH<sup>−</sup> is a strong base and therefore a <b>very poor leaving group</b>.', lede: 1 },
        { k: 'cards', items: [
          { title: 'With metals: alkoxides and ethers', blocks: [{ k: 'p', x: '2 C<sub>2</sub>H<sub>5</sub>OH + 2 Na → 2 C<sub>2</sub>H<sub>5</sub>O<sup>−</sup>Na<sup>+</sup> + H<sub>2</sub>. The <b>alkoxide</b> then reacts with a primary alkyl halide to make an ether — the <b>Williamson ether synthesis</b> (C<sub>2</sub>H<sub>5</sub>O<sup>−</sup>Na<sup>+</sup> + CH<sub>3</sub>Cl → C<sub>2</sub>H<sub>5</sub>OCH<sub>3</sub> + NaCl).' }] },
          { title: 'Dehydration to alkenes', blocks: [{ k: 'p', x: 'Hot strong acid removes H and OH from adjacent carbons. <b>Tertiary</b> alcohols dehydrate under very mild conditions, <b>secondary</b> under milder ones, <b>primary</b> with most difficulty — following carbocation stability, as in E1.' }] },
          { title: 'Esters and alkyl halides', blocks: [{ k: 'p', x: 'With carboxylic acids, anhydrides or acid chlorides, alcohols form <b>esters</b>. With HX (or PCl<sub>3</sub>, PCl<sub>5</sub>) they give alkyl halides: R–OH + HX → R–X + H<sub>2</sub>O.' }] },
        ] },
        { k: 'h', x: 'Oxidation', l: 3 },
        { k: 'table', head: ['Alcohol', 'Product', 'Reagents'], rows: [
          { c: ['Primary', 'Aldehyde, then carboxylic acid', '<b>PCC</b> or PDC (in CH<sub>2</sub>Cl<sub>2</sub>) stops at the aldehyde; KMnO<sub>4</sub> or H<sub>2</sub>CrO<sub>4</sub> go on to the acid'] },
          { c: ['Secondary', 'Ketone (stops there)', 'Collins reagent, Jones reagent (chromic acid in acetone), KMnO<sub>4</sub>'] },
          { c: ['Tertiary', '<b>No reaction</b>', 'There is no H on the carbon bearing the –OH'] },
        ] },
      ],
    },
    {
      id: 'roh-uses',
      title: 'Alcohols in medicine and the laboratory',
      kicker: 'Solvents, disinfectants and beverages',
      blocks: [
        { k: 'table', head: ['Preparation', 'Composition'], rows: [
          { c: ['Absolute alcohol', '100% ethanol, no water'] },
          { c: ['Rectified spirit', '95.5% ethanol, 4.5% water'] },
          { c: ['Methylated spirit (denatured alcohol)', 'Rectified spirit made poisonous with 4–10% methanol, traces of pyridine and copper sulphate'] },
          { c: ['Alcoholic beverages', '2–50% ethanol by volume'] },
        ] },
        { k: 'p', x: '<b>Alcohol disinfectants</b> (ethanol, isopropyl alcohol) evaporate quickly, dissolve lipids and <b>denature the proteins</b> of infecting organisms. Isopropyl alcohol, butanol and methanol are common laboratory solvents.', lede: 1 },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'R–OH; 1°, 2°, 3° by the carbon bearing –OH. Names end in -ol; two –OH = -diol.',
        'Hydrogen bonding: high boiling points; soluble below about 4 carbons; density about 0.8 g/mL.',
        'Grignard + HCHO → 1°; + RCHO → 2°; + ketone → 3°. LiAlH₄ strong, NaBH₄ mild.',
        'Weak acids (methyl > 1° > 2° > 3°); OH⁻ is a poor leaving group. Na → alkoxide → Williamson ether.',
        'Oxidation: 1° → aldehyde (PCC) → acid; 2° → ketone; 3° → none. Dehydration easiest for 3°.',
        'Absolute 100%; rectified 95.5%; methylated spirit = rectified + methanol, pyridine, CuSO₄.',
      ] },
    ],
  },
  quiz: [
    ['2-Methyl-2-propanol (tert-butyl alcohol) is a', 'Tertiary alcohol', ['Primary alcohol', 'Secondary alcohol', 'Phenol'], 'The –OH carbon is bonded to three other carbons.', 'Classification'],
    ['Why do alcohols boil much higher than alkanes of similar mass?', 'Their molecules hydrogen-bond to each other', ['They are much heavier than the alkanes of the same size', 'They are ionic compounds in the liquid', 'They have no dipole at all'], 'Original lesson, physical properties.', 'Properties'],
    ['Above about how many carbons do alcohols become insoluble in water?', 'About 4', ['About 1', 'About 12', 'About 40'], 'As R grows, ROH behaves more like the hydrocarbon.', 'Properties'],
    ['A Grignard reagent reacting with a ketone gives', 'A tertiary alcohol', ['A primary alcohol', 'A secondary alcohol', 'A carboxylic acid'], 'Formaldehyde gives 1°, other aldehydes 2°, ketones 3°.', 'Synthesis'],
    ['Which reducing agent reduces essentially only aldehydes and ketones?', 'NaBH₄', ['LiAlH₄', 'KMnO₄', 'H₂CrO₄'], 'NaBH₄ is mild; LiAlH₄ is very strong.', 'Synthesis'],
    ['Reducing a carboxylic acid to a primary alcohol needs', 'LiAlH₄', ['NaBH₄', 'PCC', 'Dilute HCl'], 'A strong reducing agent is required.', 'Synthesis'],
    ['Which shows the acid strength of alcohols correctly?', 'Methyl > 1° > 2° > 3°', ['3° > 2° > 1° > methyl', '2° > 3° > methyl > 1°', 'All are equally acidic'], 'Original lesson, acidity of alcohols.', 'Reactions'],
    ['Why is the –OH group a poor leaving group?', 'Hydroxide is a strong base', ['Hydroxide is a very weak base', 'The C–O bond is not polarised', 'Oxygen has no lone pairs'], 'Original lesson.', 'Reactions'],
    ['An alkoxide reacting with a primary alkyl halide gives', 'An ether (Williamson synthesis)', ['An ester (Fischer synthesis)', 'An alkene (dehydration)', 'A ketone (oxidation)'], 'C₂H₅O⁻Na⁺ + CH₃Cl → C₂H₅OCH₃ + NaCl.', 'Reactions'],
    ['Which reagent oxidises a primary alcohol and stops at the aldehyde?', 'PCC', ['KMnO₄', 'H₂CrO₄', 'Jones reagent'], 'PCC or PDC in CH₂Cl₂.', 'Oxidation'],
    ['Why is a tertiary alcohol not oxidised?', 'Its –OH carbon has no hydrogen', ['It has no oxygen atom', 'It is too soluble in water', 'It is already a ketone'], 'Original lesson, oxidation table.', 'Oxidation'],
    ['Which alcohols are hardest to dehydrate?', 'Primary', ['Secondary', 'Tertiary', 'All equally'], 'Ease of dehydration follows carbocation stability.', 'Reactions'],
    ['Rectified spirit is', '95.5% ethanol and 4.5% water', ['100% ethanol with no water', 'Ethanol made poisonous with methanol', '50% ethanol and 50% water'], 'Original lesson, alcoholic solvents.', 'Uses'],
    ['How do alcohol disinfectants kill organisms?', 'They dissolve lipids and denature proteins', ['They oxidise DNA into carboxylic acids', 'They block the organisms’ ribosomes only', 'They starve organisms of glucose'], 'Original lesson.', 'Uses'],
  ],
};
