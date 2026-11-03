// Basic Medical Chemistry → Carboxylic Acids, then Carboxylic Acid Derivatives (owner,
// 2026-11-03: one functional group per lesson, in teaching order). From "Basic medical
// Chemistry_Carboxylic Acids and derivatives (2).pdf" (Prof. J. N. Addotey). The acids lesson
// keeps the id of the original database lesson bmc-03, so progress is kept. Both practise
// their half of the course's Quiz 3 and the past questions on carboxylic acids and esters.
// Explanations are in our own words; facts and data are the lecture's.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const bmcCarboxylicAcids: Hb1Lesson = {
  id: 'bmc-03',
  order: 9,
  title: 'Carboxylic Acids',
  summary: 'SMS 151 · Prof. J. N. Addotey · The carboxyl group, naming, hydrogen-bonded dimers, acidity and salts, and how carboxylic acids are made and reduced',
  minutes: 14,
  source: 'Basic medical Chemistry_Carboxylic Acids and derivatives (2).pdf (Prof. J. N. Addotey)',
  quizId: 'cxa',
  quizName: 'Quiz · Carboxylic Acids (lesson)',
  bankTopics: ['s3:Structure & Terminology', 's3:Physical Properties', 's3:Acidity & Salts', 's3:Synthesis'],
  pastTopics: ['carboxylic-acids-and-esters'],
  sections: [
    {
      id: 'cxa-what',
      title: 'The carboxyl group',
      kicker: 'RCOOH',
      blocks: [
        { k: 'p', x: 'A <b>carboxylic acid</b> has an <b>acyl group (RCO–)</b> joined to a <b>hydroxyl (–OH)</b>: the <b>carboxyl group</b>, written –COOH or –CO<sub>2</sub>H. With an alkyl group it is an <b>aliphatic</b> acid; with an aryl group, an <b>aromatic</b> acid.', lede: 1 },
        { k: 'p', x: 'Carboxylic acids are the starting materials for the <b>acyl derivatives</b> — esters, amides and acid chlorides — and are common in nature from the oxidation of aldehydes and alcohols in metabolism: <b>acetic acid</b> in vinegar, <b>butanoic acid</b> in rancid butter, and the long-chain acids released when fats break down. Drugs such as <b>salicylic acid</b> and <b>acetylsalicylic acid</b> (aspirin) carry the group.' },
      ],
    },
    {
      id: 'cxa-naming',
      title: 'Naming carboxylic acids',
      kicker: 'Common and IUPAC names',
      blocks: [
        { k: 'table', head: ['Formula', 'Common name (origin)', 'IUPAC name'], rows: [
          { c: ['HCOOH', 'Formic acid (Latin <i>formica</i>, ant)', 'Methanoic acid'] },
          { c: ['CH<sub>3</sub>COOH', 'Acetic acid (<i>acetum</i>, vinegar)', 'Ethanoic acid'] },
          { c: ['CH<sub>3</sub>CH<sub>2</sub>COOH', 'Propionic acid (Greek, “first salt”)', 'Propanoic acid'] },
          { c: ['CH<sub>3</sub>(CH<sub>2</sub>)<sub>2</sub>COOH', 'Butyric acid (<i>butyrum</i>, butter)', 'Butanoic acid'] },
          { c: ['CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>COOH', 'Valeric acid', 'Pentanoic acid'] },
        ] },
        { k: 'ul', items: [
          '<b>IUPAC:</b> the longest chain containing the carboxyl group; drop the alkane’s -e and add <b>-oic acid</b>. The carboxyl carbon is <b>C1</b>: 2-methylpropanoic acid, 2-bromobutanoic acid, trans-3-phenyl-2-propenoic acid (cinnamic acid). In common names, positions are Greek letters.',
          'Rings: <b>cycloalkanecarboxylic acids</b> (2-isopropylcyclopentanecarboxylic acid); aromatic acids are <b>benzoic acids</b> (o-hydroxybenzoic acid is salicylic acid; o-, m- and p-toluic acids).',
          'Two carboxyl groups: <b>-dioic acid</b>. Common names: oxalic, malonic, succinic, glutaric, adipic, pimelic acids (2 to 7 carbons).',
          'Salts: cation name + acid name with -ic acid changed to <b>-ate</b>: sodium acetate (ethanoate), ammonium butyrate, magnesium propionate.',
        ] },
      ],
    },
    {
      id: 'cxa-properties',
      title: 'Physical properties',
      kicker: 'Dimers',
      blocks: [
        { k: 'p', x: 'Two carboxylic acid molecules hold each other by <b>two hydrogen bonds</b>, forming a <b>dimer</b>. That is why acids boil <b>higher than similar alcohols</b> (acetic acid boils at <b>118 °C</b>) and why they dissolve even in fairly non-polar solvents such as chloroform — as dimers.', lede: 1 },
        { k: 'ul', items: [
          '<b>Solubility in water</b> falls as the chain grows: up to <b>4 carbons</b> they mix completely with water. They are more soluble in alcohol.',
          '<b>Melting points:</b> aliphatic acids with <b>more than 8 carbons</b> are solids. <b>Cis double bonds lower</b> the melting point, because the kinks stop the chains packing. Among the 18-carbon acids: stearic acid (saturated) <b>72 °C</b>, oleic (one cis bond) <b>16 °C</b>, linoleic (two cis bonds) <b>−5 °C</b>.',
        ] },
      ],
    },
    {
      id: 'cxa-acidity',
      title: 'Acidity and salts',
      kicker: 'Why they are acids',
      blocks: [
        { k: 'p', x: 'Carboxylic acids are more acidic than alcohols and acetylene. The full order in the lecture: <b>CH<sub>4</sub> &lt; NH<sub>3</sub> &lt; HC≡CH &lt; ROH &lt; H<sub>2</sub>O &lt; H<sub>2</sub>CO<sub>3</sub> &lt; RCOOH &lt; HF</b>.', lede: 1 },
        { k: 'p', x: 'They react with active metals (RCOOH + Na → RCOO<sup>−</sup>Na<sup>+</sup> + H<sub>2</sub>) and with bases: NaOH removes the proton to form a <b>salt</b>, and a strong acid such as HCl turns the salt back into the acid. Being stronger than carbonic acid, they also release <b>CO<sub>2</sub> from NaHCO<sub>3</sub></b>.' },
        { k: 'p', x: 'Salts are odourless solids; the <b>Na<sup>+</sup>, K<sup>+</sup>, Li<sup>+</sup> and NH<sub>4</sub><sup>+</sup></b> salts dissolve in water but not in non-polar solvents (hexane, dichloromethane). <b>Soap</b> is the soluble sodium salt of a long-chain fatty acid.' },
        { k: 'h', x: 'Substituents change acidity', l: 3 },
        { k: 'p', x: 'For substituted benzoic acids (K<sub>a</sub> × 10<sup>−5</sup>): p-aminobenzoic 1.4 &lt; p-hydroxybenzoic 2.6 &lt; p-methoxybenzoic 3.3 &lt; p-toluic 4.2 &lt; benzoic 6.3 &lt; p-chlorobenzoic 10.3 &lt; <b>p-nitrobenzoic 36.0</b>. Electron-donating groups (–NH<sub>2</sub>, –OH, –OCH<sub>3</sub>, –CH<sub>3</sub>) weaken the acid; electron-withdrawing groups (–Cl, –NO<sub>2</sub>) strengthen it by stabilising the carboxylate ion.' },
      ],
    },
    {
      id: 'cxa-making',
      title: 'Making and reducing carboxylic acids',
      kicker: 'Synthesis',
      blocks: [
        { k: 'ul', items: [
          '<b>Oxidising primary alcohols and aldehydes</b>: 1-butanol + CrO<sub>3</sub> → butanoic acid; isobutyl alcohol + KMnO<sub>4</sub> → 2-methylpropanoic acid.',
          '<b>Cleaving an alkene with hot KMnO<sub>4</sub></b>, if the double-bonded carbon carries a hydrogen.',
          '<b>Oxidising an alkylbenzene</b> with hot KMnO<sub>4</sub> or chromic acid: toluene or ethylbenzene → <b>benzoic acid</b>; p-xylene → terephthalic acid. This gives aromatic acids only.',
          'From the acid derivatives.',
        ] },
        { k: 'p', x: '<b>Reduction:</b> LiAlH<sub>4</sub>, then H<sup>+</sup>, reduces RCOOH to a <b>primary alcohol</b>, RCH<sub>2</sub>OH (octanoic acid → 1-octanol).', lede: 1 },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'RCOOH: acyl + hydroxyl. IUPAC -oic acid, carboxyl carbon = C1; salts -ate; -dioic acids.',
        'Hydrogen-bonded dimers: higher b.p. than alcohols (acetic acid 118 °C); miscible up to 4 C.',
        'Cis double bonds lower m.p.: stearic 72 °C, oleic 16 °C, linoleic −5 °C.',
        'Acidity: … ROH < H₂O < H₂CO₃ < RCOOH < HF; releases CO₂ from NaHCO₃. Electron-withdrawing groups strengthen (p-nitrobenzoic strongest).',
        'Made by oxidising 1° alcohols, aldehydes, alkenes (hot KMnO₄) or alkylbenzenes. LiAlH₄ reduces to 1° alcohol.',
      ] },
    ],
  },
  quiz: [
    ['A carboxylic acid consists of', 'An acyl group joined to a hydroxyl group', ['A carbonyl group joined to two alkyl groups', 'A hydroxyl group joined to a benzene ring', 'An amino group joined to an acyl group'], 'Slide 3.', 'Structure'],
    ['Which acid takes its name from the Latin for ant?', 'Formic acid', ['Acetic acid', 'Butyric acid', 'Valeric acid'], 'Slide 7: formica, ant.', 'Naming'],
    ['In IUPAC naming, which carbon is number 1 in a carboxylic acid?', 'The carboxyl carbon', ['The carbon furthest from the carboxyl', 'The first branched carbon', 'Any carbon bearing a substituent'], 'Slide 10.', 'Naming'],
    ['o-Hydroxybenzoic acid is better known as', 'Salicylic acid', ['Cinnamic acid', 'Toluic acid', 'Terephthalic acid'], 'Slide 12.', 'Naming'],
    ['CH₃CO₂Na is named', 'Sodium acetate (sodium ethanoate)', ['Sodium acetic acid (sodium ethanoic acid)', 'Acetyl sodium', 'Sodium methanoate'], 'Slide 19: drop -ic acid, add -ate.', 'Naming'],
    ['Why do carboxylic acids boil higher than similar alcohols?', 'They form hydrogen-bonded dimers', ['They are ionic in the liquid', 'They cannot form hydrogen bonds', 'They have lower molecular masses'], 'Slide 14: acetic acid boils at 118 °C.', 'Properties'],
    ['Up to how many carbons are carboxylic acids miscible with water?', '4', ['1', '8', '18'], 'Slide 16.', 'Properties'],
    ['Why does oleic acid melt far lower than stearic acid?', 'Its cis double bond stops the chains packing', ['It has many more carbon atoms than stearic acid', 'It has no carboxyl group at all', 'It forms no hydrogen bonds at all'], 'Slide 15: 16 °C versus 72 °C.', 'Properties'],
    ['A carboxylic acid added to NaHCO₃ releases', 'Carbon dioxide', ['Hydrogen gas', 'Oxygen gas', 'Ammonia'], 'Slide 20.', 'Acidity'],
    ['Which substituted benzoic acid is the strongest acid?', 'p-Nitrobenzoic acid', ['p-Aminobenzoic acid', 'p-Methoxybenzoic acid', 'p-Toluic acid'], 'Slide 27: Ka 36.0 × 10⁻⁵.', 'Acidity'],
    ['Hot KMnO₄ oxidises toluene to', 'Benzoic acid', ['Benzyl alcohol', 'Benzaldehyde', 'Phenol'], 'Slide 23.', 'Synthesis'],
    ['LiAlH₄ followed by acid reduces a carboxylic acid to', 'A primary alcohol', ['A secondary alcohol', 'An aldehyde that stays put', 'An alkane'], 'Slide 28.', 'Reduction'],
  ],
};

export const bmcAcidDerivatives: Hb1Lesson = {
  id: 'bmc-acid-derivatives',
  order: 10,
  title: 'Carboxylic Acid Derivatives',
  summary: 'SMS 151 · Prof. J. N. Addotey · Acid chlorides, anhydrides, esters and amides: how each is made from the acid, Fischer esterification, and their order of reactivity',
  minutes: 12,
  source: 'Basic medical Chemistry_Carboxylic Acids and derivatives (2).pdf (Prof. J. N. Addotey)',
  quizId: 'acd',
  quizName: 'Quiz · Acid Derivatives (lesson)',
  bankTopics: ['s3:Derivatives'],
  pastTopics: ['carboxylic-acids-and-esters'],
  sections: [
    {
      id: 'acd-family',
      title: 'The acyl family',
      kicker: 'One acyl group, different partners',
      blocks: [
        { k: 'p', x: 'Every acid derivative keeps the <b>acyl group</b> (RCO–) of a carboxylic acid; what changes is the group bonded to the acyl carbon, and that decides the class:', lede: 1 },
        { k: 'table', head: ['Group on the acyl carbon', 'Class', 'General formula'], rows: [
          { c: ['–OH', 'Carboxylic acid', 'RCOOH'] },
          { c: ['–Cl', 'Acid chloride', 'RCOCl'] },
          { c: ['–O–COR', 'Acid anhydride', 'RCO–O–COR'] },
          { c: ['–OR′', 'Ester', 'RCOOR′'] },
          { c: ['–NH<sub>2</sub>', 'Amide', 'RCONH<sub>2</sub>'] },
        ] },
        { k: 'p', x: 'They react by <b>nucleophilic acyl substitution</b>: a nucleophile adds to the acyl carbon and the old group leaves. The better that group is at leaving, the more reactive the derivative.' },
        { k: 'box', title: 'Reactivity order', tone: 'formula', blocks: [{ k: 'p', x: '<b>Acid chloride &gt; acid anhydride &gt; ester &gt; amide.</b> All can be made from the acid, and the less reactive ones (esters, amides) are readily made from the more reactive ones (chlorides, anhydrides) — never the reverse.' }] },
      ],
    },
    {
      id: 'acd-chlorides',
      title: 'Acid chlorides and anhydrides',
      kicker: 'The activated forms',
      blocks: [
        { k: 'p', x: 'An <b>acid chloride</b> is an <b>activated</b> carboxylic acid: chloride is a good leaving group, so it undergoes acyl substitution easily. It is made by treating the acid with <b>thionyl chloride (SOCl<sub>2</sub>)</b>, or PCl<sub>3</sub> or PCl<sub>5</sub>: RCOOH → RCOCl.', lede: 1 },
        { k: 'p', x: 'An <b>acid anhydride</b> can be made directly by heating the acid to about <b>200 °C</b> with an acid catalyst, which removes water between two molecules — good for <b>acetic anhydride</b> and for five- or six-membered ring anhydrides, such as the one from <b>phthalic acid</b>.' },
      ],
    },
    {
      id: 'acd-esters',
      title: 'Esters',
      kicker: 'Direct and indirect esterification',
      blocks: [
        { k: 'cards', items: [
          { title: 'Direct: Fischer esterification', blocks: [{ k: 'p', x: 'Acid + alcohol, with an <b>acid catalyst</b> (the alcohol is a weak nucleophile) → ester + water. <b>Every step is reversible</b>, so the reaction reaches equilibrium and often does not favour the ester. Push it on by using an <b>excess of the alcohol or acid</b>, or by <b>removing a product</b>.' }] },
          { title: 'Indirect: via the acid chloride', blocks: [{ k: 'p', x: 'Convert the acid to the acid chloride first (PCl<sub>3</sub> or SOCl<sub>2</sub>), then add the alcohol: the alcohol adds to the carbonyl, chloride leaves, and a proton is lost. Good yield, and <b>not reversible</b>.' }] },
        ] },
        { k: 'p', x: 'Esters typically have a pleasant, <b>fruity smell</b> and are only slightly polar (from the alkanes lecture).' },
      ],
    },
    {
      id: 'acd-amides',
      title: 'Amides',
      kicker: 'Usually made indirectly',
      blocks: [
        { k: 'p', x: 'Mixing a carboxylic acid with <b>ammonia</b> simply gives an <b>ammonium salt</b> (RCOO<sup>−</sup>NH<sub>4</sub><sup>+</sup>): the base takes the acid’s proton. With an <b>amine</b> the same kind of salt forms, but heating it <b>above 100 °C</b> drives off water (as steam) and gives the amide.', lede: 1 },
        { k: 'p', x: 'The reliable route is <b>indirect</b>: make the <b>acid chloride</b>, then add ammonia or an amine. A base — <b>NaOH or pyridine</b> — is added to remove the HCl by-product. 3-Methylbutanoic acid → its acid chloride (PCl<sub>3</sub>) → the amide (NH<sub>3</sub>).' },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Group on the acyl carbon: –OH acid, –Cl acid chloride, –O–COR anhydride, –OR′ ester, –NH₂ amide.',
        'Reactivity: chloride > anhydride > ester > amide; make the less reactive from the more reactive.',
        'Acid chlorides: SOCl₂, PCl₃ or PCl₅. Anhydrides: heat the acid to about 200 °C.',
        'Fischer esterification: acid-catalysed, reversible; use an excess or remove products. Via the acid chloride: not reversible.',
        'Acid + NH₃ → ammonium salt; amides via acid chloride + NH₃/amine (with NaOH or pyridine), or an amine salt heated above 100 °C.',
      ] },
    ],
  },
  quiz: [
    ['Which group on the acyl carbon makes a compound an ester?', '–OR′', ['–Cl', '–NH₂', '–OH'], 'Acid derivatives slide.', 'Derivatives'],
    ['Why are acid chlorides called activated carboxylic acids?', 'Chloride is a good leaving group', ['Chlorine makes them very weak acids', 'They have no carbonyl group', 'They cannot react with alcohols'], 'Acid chlorides slide.', 'Acid chlorides'],
    ['Which reagent converts a carboxylic acid into an acid chloride?', 'Thionyl chloride (SOCl₂)', ['Sodium borohydride (NaBH₄)', 'Tollens’ reagent (Ag⁺ in NH₃)', 'Lithium aluminium hydride'], 'Acid chlorides slide (also PCl₃, PCl₅).', 'Acid chlorides'],
    ['Acetic anhydride can be made from acetic acid by', 'Heating it to about 200 °C with an acid catalyst', ['Cooling it below 0 °C in liquid ammonia for a day', 'Adding sodium hydroxide at room temperature', 'Reducing it with LiAlH₄'], 'Anhydrides slide.', 'Anhydrides'],
    ['Why is Fischer esterification often incomplete?', 'All its steps are reversible, so it reaches equilibrium', ['The ester decomposes into carbon dioxide as soon as it forms', 'The acid catalyst is used up quickly', 'Alcohols cannot react with carboxylic acids'], 'Fischer esterification slides.', 'Esters'],
    ['How can the yield of a Fischer esterification be increased?', 'Use excess alcohol or remove a product', ['Add plenty of water to the reaction mixture', 'Leave out the acid catalyst', 'Cool the mixture to −50 °C'], 'Esterification slide.', 'Esters'],
    ['Why are amides usually made from acid chlorides rather than directly from acids and ammonia?', 'Ammonia and the acid just form an ammonium salt', ['Ammonia does not react with anything at all, even when heated', 'Amides decompose in the presence of acid', 'Acid chlorides are less reactive than acids'], 'Amide slides: “indirect” only.', 'Amides'],
    ['Why is NaOH or pyridine added when an acid chloride reacts with an amine?', 'To remove the HCl by-product', ['To act as the nucleophile instead', 'To turn the amide back into acid', 'To oxidise the amine first'], 'Amides from acid chlorides slide.', 'Amides'],
    ['Which shows the reactivity of acid derivatives correctly?', 'Acid chloride > anhydride > ester > amide', ['Amide > ester > anhydride > acid chloride', 'Ester > amide > acid chloride > anhydride', 'Anhydride > amide > acid chloride > ester'], 'Final slide.', 'Reactivity'],
  ],
};
