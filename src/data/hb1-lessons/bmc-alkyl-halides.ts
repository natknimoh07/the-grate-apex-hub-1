// Basic Medical Chemistry → Alkyl Halides. From "BMC2026 (1).pptx" (Prof. Abena Brobbey,
// Dept. of Pharmaceutical Chemistry, FPPS, KNUST), slides 1–45. Rewrites the alkyl-halide
// half of the original database lesson bmc-02 with the same id, so progress is kept;
// alcohols now have their own lesson (bmc-alcohols). Practises the bank's alkyl-halide
// questions (Quiz 2's "RX" topics). Explanations are in our own words; facts are the lecture's.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const bmcAlkylHalides: Hb1Lesson = {
  id: 'bmc-02',
  order: 5, // the first functional group
  title: 'Alkyl Halides',
  summary: 'SMS 151 · Prof. Abena Brobbey · Classifying and naming alkyl halides, their properties and synthesis, SN1 and SN2 substitution, E1 and E2 elimination, and which wins',
  minutes: 18,
  source: 'BMC2026 (1).pptx, slides 1–45 (Prof. A. Brobbey)',
  quizId: 'rxh',
  quizName: 'Quiz · Alkyl Halides (lesson)',
  bankTopics: ['RX Classification & Naming', 'RX Properties & Synthesis', 'SN1 / SN2 / Elimination', 'Organohalogen Compounds'],
  sections: [
    {
      id: 'rxh-intro',
      title: 'What alkyl halides are',
      kicker: 'R–X',
      blocks: [
        { k: 'p', x: 'An <b>alkyl halide (haloalkane)</b>, R–X, has a halogen — fluorine, chlorine, bromine or iodine — bonded to an alkyl group. Halogens on alkenes, alkynes and arenes give <b>alkenyl, alkynyl</b> and <b>aryl halides</b>.', lede: 1 },
        { k: 'p', x: 'They are classified by the carbon carrying the halogen: <b>primary (1°)</b> if that carbon is bonded to one other carbon, <b>secondary (2°)</b> to two, <b>tertiary (3°)</b> to three. CH<sub>3</sub>X is a <b>methyl</b> halide. This one fact decides most of the chemistry in this lesson.' },
        { k: 'p', x: 'Going down the group, the halogen atom gets bigger, so the <b>C–X bond gets longer and weaker</b>: C–F is the shortest and strongest, C–I the longest and weakest. The same holds for the acids: reactivity <b>HI &gt; HBr &gt; HCl ≫ HF</b>.' },
      ],
    },
    {
      id: 'rxh-naming',
      title: 'Naming alkyl halides',
      kicker: 'IUPAC and common names',
      blocks: [
        { k: 'ul', items: [
          '<b>IUPAC:</b> treat the halogen as a substituent (fluoro-, chloro-, bromo-, iodo-) on the longest chain; number to give the substituted carbon the lowest number; list different substituents alphabetically, numbering from the end nearer the one first in the alphabet if there is a tie. Bromoethane, 2-chloropropane, 1-bromo-2-methylcyclohexane.',
          '<b>Common names</b> (small groups only): the alkyl group, then the halide — ethyl bromide, butyl bromide, isopropyl chloride, methyl fluoride, cyclohexyl iodide.',
        ] },
        { k: 'table', head: ['Formula', 'Common name', 'Example'], rows: [
          { c: ['CH<sub>2</sub>X<sub>2</sub>', 'Methylene halide', 'CH<sub>2</sub>Cl<sub>2</sub>, methylene chloride'] },
          { c: ['CHX<sub>3</sub>', 'Haloform', 'CHCl<sub>3</sub>, chloroform'] },
          { c: ['CX<sub>4</sub>', 'Carbon tetrahalide', 'CCl<sub>4</sub>, carbon tetrachloride'] },
        ] },
        { k: 'box', title: 'Safety', tone: 'trap', blocks: [{ k: 'p', x: 'CH<sub>2</sub>Cl<sub>2</sub>, CHCl<sub>3</sub> and CCl<sub>4</sub> have <b>cumulative toxicity and are carcinogenic</b>: use them only in fume hoods and with great care.' }] },
      ],
    },
    {
      id: 'rxh-properties',
      title: 'Physical properties and synthesis',
      kicker: 'Heavier and more polar than alkanes',
      blocks: [
        { k: 'table', head: ['Property', 'Compared with the parent alkane'], rows: [
          { c: ['Boiling point', '<b>Higher</b> — heavier and more polar. Falls with branching. C<sub>2</sub>H<sub>5</sub>Cl &lt; C<sub>2</sub>H<sub>5</sub>Br &lt; C<sub>2</sub>H<sub>5</sub>I'] },
          { c: ['Solubility', 'Polar, yet <b>insoluble in water</b>: they cannot hydrogen-bond with it. Soluble in organic solvents'] },
          { c: ['Density', 'Denser: RI &gt; RBr &gt; RCl &gt; RF. Fluorides and monochlorides are lighter than water; dichlorides and up, all bromides and iodides are heavier'] },
          { c: ['Colour and odour', 'Colourless when pure (iodo- and bromoalkanes darken in light); lower members smell pleasant'] },
        ] },
        { k: 'h', x: 'Making alkyl halides', l: 3 },
        { k: 'ul', items: [
          'Halogenation of alkanes with Cl<sub>2</sub> or Br<sub>2</sub> under UV light.',
          'Addition of HX to alkenes; X<sub>2</sub> + alkene gives a vicinal dihalide.',
          '<b>From alcohols — the major method:</b> with HX (tertiary alcohols react fastest, primary slowest), with <b>thionyl chloride</b> (R–OH + SOCl<sub>2</sub> → R–Cl + SO<sub>2</sub> + HCl; the slide prints the last product as H<sub>2</sub>O — check with your lecturer), or with phosphorus halides PX<sub>3</sub>.',
        ] },
        { k: 'p', x: '(CH<sub>3</sub>)<sub>3</sub>COH + HCl → (CH<sub>3</sub>)<sub>3</sub>CCl + H<sub>2</sub>O goes by <b>S<sub>N</sub>1</b>: the alcohol takes a proton, the protonated alcohol loses water to give a carbocation, and Cl<sup>−</sup> joins it.' },
      ],
    },
    {
      id: 'rxh-sn',
      title: 'Nucleophilic substitution: SN1 and SN2',
      kicker: 'R–X + Nu⁻ → R–Nu + X⁻',
      blocks: [
        { k: 'p', x: 'Halogen is more electronegative than carbon, so the C–X bond is <b>polarised</b>: carbon δ+, halogen δ−. The δ+ carbon attracts <b>nucleophiles</b> (“nucleus lovers”: electron-rich species that give a pair of electrons); <b>electrophiles</b> (“electron lovers”) are electron-poor. In substitution, the nucleophile replaces X, which leaves as the <b>leaving group</b>.', lede: 1 },
        { k: 'table', head: ['', 'S<sub>N</sub>1 (unimolecular)', 'S<sub>N</sub>2 (bimolecular)'], rows: [
          { c: ['Steps', 'Two: slow ionisation to a <b>carbocation</b>, then fast attack by Nu<sup>−</sup>', 'One: Nu<sup>−</sup> bonds as X<sup>−</sup> leaves, through a pentacoordinate transition state'] },
          { c: ['Rate', 'k[R–X]', 'k[R–X][Nu<sup>−</sup>]'] },
          { c: ['Best substrate', '3° &gt; 2° (stable carbocation); 1° almost never', 'Methyl &gt; 1° &gt; 2°; 3° never (steric hindrance)'] },
          { c: ['Stereochemistry', '<b>Racemisation</b>: Nu<sup>−</sup> attacks the flat carbocation from either face (R → 50:50 R and S)', '<b>Inversion</b>: backside attack at 180° (R → S)'] },
          { c: ['Extra', 'Carbocations can <b>rearrange</b> by hydride or alkyl shift to a more stable one', '—'] },
        ] },
        { k: 'p', x: 'A carbocation has only <b>6 electrons</b> round the charged carbon, so it is very reactive; alkyl groups stabilise it, so stability is 3° &gt; 2° &gt; 1°. That is why isopropyl bromide (2°) reacts faster by S<sub>N</sub>1 than isobutyl bromide (1°). In S<sub>N</sub>2, bulky groups block the backside approach, so 3° halides do not react at all.' },
      ],
    },
    {
      id: 'rxh-elimination',
      title: 'Elimination: E1 and E2',
      kicker: 'Dehydrohalogenation',
      blocks: [
        { k: 'p', x: 'In <b>elimination</b>, H and X are removed from <b>adjacent</b> carbons and a C=C forms — e.g. (CH<sub>3</sub>)<sub>3</sub>CBr → (CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub> + HBr. To draw the products: find the α carbon (bearing X), find every β carbon with an H, remove X and H, and draw the π bond.', lede: 1 },
        { k: 'cards', items: [
          { title: 'E1', blocks: [{ k: 'p', x: 'Two steps, starting like S<sub>N</sub>1: slow ionisation to a carbocation, then a base removes a proton. Favoured by the same things as S<sub>N</sub>1 — polar protic solvents, stable carbocations, branched chains, good leaving groups, no good base — and by <b>higher temperatures</b>. E1 and S<sub>N</sub>1 compete.' }] },
          { title: 'E2', blocks: [{ k: 'p', x: 'One step, like S<sub>N</sub>2: the base removes the β-hydrogen as the leaving group departs and the double bond forms, with no intermediate.' }] },
        ] },
        { k: 'p', x: 'Common bases: hydroxide and the <b>alkoxides</b> — NaOH, KOH, sodium methoxide, sodium ethoxide, potassium <b>tert-butoxide</b>.' },
        { k: 'box', title: 'Substitution or elimination?', tone: 'formula', blocks: [{ k: 'p', x: 'A <b>stronger base</b> favours E2 over S<sub>N</sub>2: it plucks off a β-hydrogen before it can reach the α-carbon. A <b>bulky base</b> (tert-butoxide) struggles to reach the backside of the α-carbon, so it gives E2 easily and S<sub>N</sub>2 rarely.' }] },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        '1°, 2°, 3° by the carbon bearing X. C–X longer and weaker from F to I; HI > HBr > HCl ≫ HF.',
        'Haloform CHX₃ (chloroform); CH₂Cl₂, CHCl₃, CCl₄ are toxic and carcinogenic.',
        'Higher b.p. than alkanes; insoluble in water; RI > RBr > RCl > RF in density.',
        'Major synthesis: alcohols + HX, SOCl₂ or PX₃.',
        'SN1: carbocation, rate k[RX], 3° best, racemisation, rearrangements. SN2: one step, rate k[RX][Nu⁻], CH₃/1° best, inversion.',
        'E1 like SN1 (heat favours it); E2 like SN2. Strong or bulky bases → E2.',
      ] },
    ],
  },
  quiz: [
    ['A secondary alkyl halide has its halogen on a carbon bonded to', 'Two other carbons', ['One other carbon', 'Three other carbons', 'No other carbons'], 'Slide 6.', 'Classification'],
    ['Going from C–F to C–I, the carbon–halogen bond becomes', 'Longer and weaker', ['Shorter and stronger', 'Longer and stronger', 'Shorter and weaker'], 'Slide 8: halogen atoms get larger down the group.', 'Properties'],
    ['CHCl₃ is an example of a', 'Haloform', ['Methylene halide', 'Carbon tetrahalide', 'Vinyl halide'], 'Slide 13.', 'Naming'],
    ['Why must CH₂Cl₂, CHCl₃ and CCl₄ be used in a fume hood?', 'They have cumulative toxicity and are carcinogenic', ['They explode on contact with air at room temperature', 'They are strong acids that dissolve glassware', 'They are radioactive and give off radiation'], 'Slide 13.', 'Naming'],
    ['Why are alkyl halides insoluble in water although they are polar?', 'They cannot form hydrogen bonds with water', ['They are lighter than water in every case', 'They react with water to form alkanes', 'They contain no polar bonds at all'], 'Slide 15.', 'Properties'],
    ['Which ethyl halide has the highest boiling point?', 'C₂H₅I', ['C₂H₅Cl', 'C₂H₅Br', 'C₂H₅F'], 'Slides 14, 18: heavier halogen, higher boiling point.', 'Properties'],
    ['What is the major method of making alkyl halides?', 'From alcohols, with HX, SOCl₂ or PX₃', ['From alkanes, with water and acid', 'From carboxylic acids, with NaBH₄', 'From alkynes, with silver nitrate'], 'Slides 19–22.', 'Synthesis'],
    ['In an SN1 reaction, the rate-determining step is', 'Ionisation of R–X to a carbocation', ['Backside attack by the nucleophile', 'Removal of a β-hydrogen by a base', 'Collision of two R–X molecules'], 'Slide 26.', 'SN1 and SN2'],
    ['The rate law for an SN2 reaction is', 'Rate = k[R–X][Nu⁻]', ['Rate = k[R–X]', 'Rate = k[Nu⁻] only', 'Rate = k[R–X]²'], 'Slide 34: two species in the rate-determining step.', 'SN1 and SN2'],
    ['Which alkyl halides do not undergo SN2 reactions?', 'Tertiary', ['Methyl', 'Primary', 'Secondary'], 'Slide 37: steric hindrance blocks backside attack.', 'SN1 and SN2'],
    ['An SN1 reaction at a chiral carbon usually gives', 'Racemisation', ['Complete inversion', 'Complete retention', 'No product at all'], 'Slide 30: the nucleophile attacks either face of the flat carbocation.', 'SN1 and SN2'],
    ['An SN2 reaction at a chiral carbon gives', 'Inversion of configuration', ['Racemisation', 'A carbocation rearrangement', 'Retention of configuration'], 'Slide 38: an R-enantiomer becomes S.', 'SN1 and SN2'],
    ['Why does isopropyl bromide react faster than isobutyl bromide by SN1?', 'It forms a more stable secondary carbocation', ['It forms a less stable primary carbocation instead', 'It has a stronger carbon–bromine bond', 'It reacts by backside attack instead'], 'Slide 29.', 'SN1 and SN2'],
    ['Which conditions favour E1?', 'Higher temperatures and a stable carbocation', ['Low temperatures and a methyl halide', 'A strong, unhindered nucleophile', 'A primary halide with no heating'], 'Slide 44.', 'Elimination'],
    ['Why does potassium tert-butoxide give mainly elimination?', 'It is bulky, so it removes a β-hydrogen rather than attacking carbon', ['It is a weak base that cannot remove any protons from the substrate at all', 'It forms carbocations very easily', 'It is too small to reach the α-carbon'], 'Slide 45.', 'Elimination'],
  ],
};
