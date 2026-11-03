// Basic Medical Chemistry → Amines. From "AMINES PPT SOB 2021 updated.pptx" (S. O. Bekoe;
// the same deck continues with stereochemistry, taught in bmc-stereochemistry). Rewrites the
// original database lesson bmc-01 with the same id, so progress is kept; practises the
// course's Quiz 1. Explanations are in our own words; facts and data are the lecture's.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const bmcAmines: Hb1Lesson = {
  id: 'bmc-01',
  order: 11, // the last functional group; stereochemistry follows, as in the same lecture
  title: 'Amines',
  summary: 'SMS 151 · S. O. Bekoe · Amines as organic ammonia: classifying and naming them, why their basicity matters for how drugs are absorbed, heterocyclic amines, and their reactions',
  minutes: 12,
  source: 'AMINES PPT SOB 2021 updated.pptx (S. O. Bekoe)',
  quizId: 'amn',
  quizName: 'Quiz · Amines (lesson)',
  pastSets: ['s1'],
  sections: [
    {
      id: 'amn-what',
      title: 'Amines: organic ammonia',
      kicker: 'The –NH₂ family',
      blocks: [
        { k: 'p', x: 'Ammonia, NH<sub>3</sub>, is inorganic. Its nitrogen is trivalent and <b>sp<sup>3</sup> hybridised</b>, with a <b>lone pair</b> that makes it <b>basic</b> and a <b>nucleophile</b>. Replace one, two or all three of its hydrogens with organic groups — aliphatic, aromatic or cyclic — and you have an <b>amine</b>: N–H bonds become N–C bonds, but the lone pair stays. So amines are still basic and nucleophilic.', lede: 1 },
        { k: 'ul', items: [
          '<b>Recognise</b> the –NH<sub>2</sub> functional group and <b>classify</b> amines.',
          '<b>Name</b> amines, including heterocyclic amines.',
          '<b>Explain</b> how basicity affects biological activity, and <b>identify</b> amine drugs.',
          '<b>Outline</b> the reactions of amines.',
        ] },
      ],
    },
    {
      id: 'amn-classes',
      title: 'Classifying and naming amines',
      kicker: 'Primary, secondary, tertiary',
      blocks: [
        { k: 'table', head: ['Class', 'H atoms of NH<sub>3</sub> replaced', 'Example'], rows: [
          { c: ['Primary (1°)', 'One', 'CH<sub>3</sub>NH<sub>2</sub>'] },
          { c: ['Secondary (2°)', 'Two', 'CH<sub>3</sub>NHCH<sub>3</sub>'] },
          { c: ['Tertiary (3°)', 'All three', '(CH<sub>3</sub>)<sub>3</sub>N'] },
        ] },
        { k: 'box', title: 'Not the same as alcohols', tone: 'trap', blocks: [{ k: 'p', x: 'An amine’s class counts the groups on the <b>nitrogen</b>; an alcohol’s or alkyl halide’s counts the groups on the <b>carbon</b>.' }] },
        { k: 'p', x: '2° and 3° amines can also be <b>symmetrical</b> (identical groups) or <b>unsymmetrical</b>; a primary amine has only one group, so the idea does not apply. <b>Alkylamines</b> have N on an alkyl group; <b>arylamines</b> on an aryl group. If the nitrogen is part of a ring with carbon, the amine is <b>heterocyclic</b>.' },
        { k: 'h', x: 'Naming primary alkylamines', l: 3 },
        { k: 'ul', items: [
          'Like alcohols: replace the alkane’s -e with <b>-amine</b> (propanamine, cyclopentanamine).',
          'Or name the alkyl group and add <b>-amine</b> (n-propylamine, cyclopentylamine, 2-bromo-3-chlorobutylamine).',
          'Two amino groups: <b>-diamine</b> (1,2-propanediamine, 1,4-benzenediamine; H<sub>2</sub>NCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> is 1,4-butanediamine).',
          'The amine has <b>lower priority</b> than –OH, –COOH and C=O, so with them it becomes the prefix <b>amino-</b>: HOCH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> is <b>2-aminoethanol</b>.',
        ] },
      ],
    },
    {
      id: 'amn-basicity',
      title: 'Basicity, and why it matters for drugs',
      kicker: 'Ionised or not',
      blocks: [
        { k: 'p', x: 'Amines are weak (Lewis) bases. The lecture’s data:', lede: 1 },
        { k: 'table', head: ['', 'NH<sub>3</sub>', 'CH<sub>3</sub>NH<sub>2</sub> (1°)', 'CH<sub>3</sub>NHCH<sub>3</sub> (2°)', '(CH<sub>3</sub>)<sub>3</sub>N (3°)'], rows: [
          { c: ['pK<sub>b</sub>', '4.74', '3.34', '3.27', '4.19'] },
          { c: ['pK<sub>a</sub>', '9.26', '10.66', '10.73', '9.81'] },
          { c: ['Rank', '4 (weakest)', '2', '1 (strongest)', '3'] },
        ] },
        { k: 'p', x: 'So for simple alkylamines in water, <b>2° &gt; 1° &gt; 3°</b>, all stronger than ammonia. A <b>stronger base has the lower pK<sub>b</sub></b> — and the <b>higher pK<sub>a</sub></b> (of its conjugate acid). Why 3° is not the strongest is left as the lecture’s assignment.' },
        { k: 'h', x: 'Absorption of drugs', l: 3 },
        { k: 'p', x: 'Most drugs are weak acids, bases, salts or amphoteric, so in water they exist partly <b>ionised</b> and partly <b>un-ionised</b>, depending on the drug’s <b>pK<sub>a</sub></b> and the <b>pH</b> around it. The three compartments that matter are the <b>stomach (pH 1)</b>, <b>intestine (pH 6–8)</b> and <b>plasma (pH 7.4)</b>.' },
        { k: 'p', x: 'The <b>un-ionised</b> form is lipid-soluble and crosses cell membranes easily; the <b>ionised</b> form crosses with difficulty. So weakly basic drugs with pK<sub>a</sub> above 7.4 are absorbed well in the <b>small intestine</b>, where much more of them is un-ionised than in the acid stomach.' },
      ],
    },
    {
      id: 'amn-reactions',
      title: 'Heterocyclic amines and reactions',
      kicker: 'Life chemistry',
      blocks: [
        { k: 'p', x: '<b>Heterocyclic compounds</b> have rings containing more than one kind of atom — carbon plus one or more of O, N or S. They are bound up with life: <b>thiamine, folic acid, nucleic acids, haemoglobin and chlorophyll</b>. Many medicines are amines too.', lede: 1 },
        { k: 'p', x: 'Being nucleophiles, amines react with the common electrophiles:' },
        { k: 'table', head: ['Electrophile', 'Type of reaction'], rows: [
          { c: ['Alkyl halides', 'Nucleophilic substitution'] },
          { c: ['Aldehydes and ketones', 'Nucleophilic addition'] },
          { c: ['Carboxylic acid derivatives (acid chlorides, anhydrides)', 'Nucleophilic acyl substitution'] },
        ] },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Amines: organic derivatives of ammonia; sp³ N with a lone pair → basic and nucleophilic.',
        '1°, 2°, 3° = one, two, three H of NH₃ replaced (counted on N, unlike alcohols).',
        'Names: -amine (propanamine, propylamine); lower priority than –OH, –COOH, C=O → amino- (2-aminoethanol).',
        'Basicity: 2° > 1° > 3° > NH₃ (pKb 3.27, 3.34, 4.19, 4.74). Stronger base: lower pKb, higher pKa.',
        'Stomach pH 1, intestine 6–8, plasma 7.4. Un-ionised crosses membranes; weak bases (pKa > 7.4) absorbed in the small intestine.',
        'React by substitution (RX), addition (aldehydes/ketones) and acyl substitution (acid chlorides, anhydrides).',
      ] },
    ],
  },
  quiz: [
    ['Why are amines basic and nucleophilic?', 'Their nitrogen keeps a lone pair of electrons', ['Their nitrogen has lost all of its outer-shell electrons', 'They contain a carbon–oxygen double bond', 'They release hydroxide ions directly'], 'Slides 7, 11–12.', 'Amines'],
    ['A secondary amine has', 'Two hydrogens of ammonia replaced by organic groups', ['One hydrogen of ammonia replaced by an organic group', 'All three hydrogens of ammonia replaced', 'Its nitrogen bonded to a secondary carbon'], 'Slide 13.', 'Classification'],
    ['Symmetrical and unsymmetrical amines apply to', 'Secondary and tertiary amines', ['Primary amines only, never the others', 'Ammonia and its salts', 'Heterocyclic amines only'], 'Slide 19.', 'Classification'],
    ['An arylamine has its nitrogen attached to', 'An aryl group', ['An alkyl group', 'An oxygen atom', 'A carbonyl group'], 'Slide 22.', 'Naming'],
    ['HOCH₂CH₂NH₂ is named', '2-Aminoethanol', ['2-Hydroxyethanamine', 'Ethanolamide', '1-Amino-2-ethanone'], 'Slide 25: –OH has priority, so the amine is a prefix.', 'Naming'],
    ['Which is the strongest base of NH₃, CH₃NH₂, CH₃NHCH₃ and (CH₃)₃N?', 'CH₃NHCH₃', ['NH₃', 'CH₃NH₂', '(CH₃)₃N'], 'Slides 31–33: 2° > 1° > 3°.', 'Basicity'],
    ['Which is the weakest base of NH₃, CH₃NH₂, CH₃NHCH₃ and (CH₃)₃N?', 'NH₃', ['CH₃NH₂', 'CH₃NHCH₃', '(CH₃)₃N'], 'Slide 32: pKb 4.74.', 'Basicity'],
    ['A stronger base has', 'A lower pKb', ['A higher pKb', 'A lower pKa', 'No measurable pKa'], 'Slides 34–35.', 'Basicity'],
    ['What is the pH of the stomach, as given in the lecture?', '1', ['6–8', '7.4', '12'], 'Slide 36.', 'Drugs'],
    ['Which form of a drug crosses cell membranes easily?', 'The un-ionised, lipid-soluble form', ['The ionised, water-soluble (charged) form', 'Only the salt form', 'Only the protein-bound form'], 'Slide 38.', 'Drugs'],
    ['Where are weakly basic drugs with pKa above 7.4 absorbed well?', 'In the small intestine', ['In the stomach', 'In the mouth only', 'In the large intestine only'], 'Slide 38.', 'Drugs'],
    ['Which of these is a heterocyclic compound named in the lecture?', 'Folic acid', ['Ethanol', 'Methane', 'Acetone'], 'Slide 39: also thiamine, nucleic acids, haemoglobin, chlorophyll.', 'Heterocyclic amines'],
    ['Amines react with acid chlorides by', 'Nucleophilic acyl substitution', ['Electrophilic addition', 'Free-radical substitution', 'Elimination'], 'Slide 43.', 'Reactions'],
  ],
};
