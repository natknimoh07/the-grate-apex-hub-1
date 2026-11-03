// Basic Medical Chemistry → Stereochemistry. From "SOB STEREOCHEMISTRY SMS 151 BMC PPT
// SEM 1 2025 2026.pptx" (Samuel O. Bekoe, Dept. of Pharm. Chemistry, FPPS, KNUST).
// Slides 34–36 (configuration, diastereoisomers, meso structures) are diagrams only; the
// lesson gives the standard definitions there and says so. Our own words throughout.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const bmcStereochemistry: Hb1Lesson = {
  id: 'bmc-stereochemistry',
  order: 12, // the end of the course
  title: 'Stereochemistry',
  summary: 'SMS 151 · Samuel O. Bekoe · Isomerism, chirality, enantiomers and optical activity, racemic mixtures, and why a drug’s 3D shape decides its action',
  minutes: 12,
  source: 'SOB STEREOCHEMISTRY SMS 151 BMC PPT SEM 1 2025 2026.pptx (S. O. Bekoe)',
  quizId: 'ste',
  quizName: 'Quiz 8 · Stereochemistry',
  pastTopics: [],
  sections: [
    {
      id: 'ste-overview',
      title: 'By the end of this lecture, you will be able to…',
      kicker: 'Learning objectives',
      blocks: [
        { k: 'p', x: 'Two molecules can contain exactly the same atoms, joined in exactly the same order, and still be different — one a medicine, the other inactive or even harmful. Stereochemistry explains how.', lede: 1 },
        { k: 'ul', items: [
          '<b>Outline and describe</b> the different types of isomerism.',
          '<b>Define</b> stereochemistry.',
          '<b>Identify</b> drug molecules that are stereoisomers.',
          '<b>Understand</b> the significance of stereospecific reactions.',
          '<b>Apply</b> stereochemistry to the link between 3D structure and biological action.',
        ] },
      ],
    },
    {
      id: 'ste-isomerism',
      title: 'Types of isomerism',
      kicker: 'Structural versus stereo',
      blocks: [
        { k: 'p', x: 'Isomers share a molecular formula. The question is <b>what</b> differs between them.', lede: 1 },
        { k: 'cards', items: [
          { title: 'Structural (constitutional) isomers', blocks: [
            { k: 'p', x: 'Same molecular formula, but the atoms are bonded in a <b>different nature or sequence</b>.' },
            { k: 'p', x: 'Lecture examples: <b>1-butene and 2-butene</b> (the double bond in a different place); <b>ethanol and dimethyl ether</b>, both C<sub>2</sub>H<sub>6</sub>O — one an alcohol (C–O–H), the other an ether (C–O–C).' },
          ] },
          { title: 'Stereoisomers', blocks: [
            { k: 'p', x: 'The atoms are connected in the <b>same order</b>, but differ in the <b>three-dimensional arrangement</b> of atoms or groups in space.' },
          ] },
        ] },
        { k: 'term', name: 'Stereochemistry', def: 'The study of the relative spatial arrangement, in three dimensions, of the atoms, radicals or groups in a molecule.' },
        { k: 'p', x: 'Stereochemistry has its own vocabulary: <b>chiral (asymmetric, stereogenic) centres</b>, <b>achiral centres</b>, <b>superimposable</b> and <b>non-superimposable</b> images, and the <b>plane of symmetry</b>.' },
      ],
    },
    {
      id: 'ste-chirality',
      title: 'Chirality and the chiral carbon',
      kicker: '“Handedness”',
      blocks: [
        { k: 'p', x: 'Your right-hand glove does not fit your left hand: your hands are mirror images, but you cannot lay one exactly on the other. An object is <b>chiral</b> if its mirror image <b>cannot be superimposed</b> on it.', lede: 1 },
        { k: 'p', x: 'A carbon bonded to <b>four different groups</b> is a <b>chiral (asymmetric, stereogenic) centre</b>. Its mirror image is a different compound — its <b>enantiomer</b>. If any two of the four groups are the same, the mirror image can be turned to fit the original, and the carbon is not chiral.' },
        { k: 'h', x: 'The plane of symmetry test', l: 3 },
        { k: 'p', x: 'A molecule with an internal <b>plane of symmetry</b> — a plane that cuts it into two mirror-image halves — is <b>achiral</b>, even if it contains chiral-looking carbons.' },
        { k: 'cards', items: [
          { title: 'cis-1,2-Dichlorocyclohexane', blocks: [{ k: 'p', x: 'Both Cl on the same side: the molecule has an internal plane of symmetry, so it is identical to its mirror image — <b>achiral</b>.' }] },
          { title: 'trans-1,2-Dichlorocyclohexane', blocks: [{ k: 'p', x: 'Cl on opposite sides: <b>no plane of symmetry</b>, so the mirror images do not superimpose and there are <b>two enantiomers</b>.' }] },
        ] },
      ],
    },
    {
      id: 'ste-enantiomers',
      title: 'Enantiomers and optical activity',
      kicker: 'Properties',
      blocks: [
        { k: 'p', x: 'Enantiomers are alike in every property that does not involve “handedness”. The lecture’s example, the two enantiomers of <b>2-methylbutan-1-ol</b>: boiling point 128.9 °C, density 0.8193 and refractive index 1.4107 for both — only the <b>specific rotation</b> differs in sign: +5.756° and −5.756°.', lede: 1 },
        { k: 'table', head: ['The same for both enantiomers', 'Different'], rows: [
          { c: ['Boiling point, melting point, density', 'Direction in which they rotate plane-polarised light'] },
          { c: ['Refractive index', 'How they interact with other chiral molecules — receptors, enzyme active sites, taste and smell receptors'] },
          { c: ['Size of the optical rotation', 'Smell (enantiomers may smell different)'] },
        ] },
        { k: 'h', x: 'Plane-polarised light and the polarimeter', l: 3 },
        { k: 'p', x: '<b>Plane-polarised light</b> vibrates in only one plane. Passed through a solution of one enantiomer in a <b>polarimeter</b>, the plane is rotated; the other enantiomer rotates it by the <b>same number of degrees in the opposite direction</b>. This is <b>optical activity</b>.' },
        { k: 'table', head: ['Rotation', 'Name', 'Symbols'], rows: [
          { c: ['Clockwise', 'Dextrorotatory', '(+), d'] },
          { c: ['Anticlockwise', 'Laevorotatory', '(−), l'] },
        ] },
        { k: 'box', title: 'A common trap', tone: 'trap', blocks: [{ k: 'p', x: 'The sign of rotation, (+) or (−), is measured in the polarimeter. It is <b>not related to (R) and (S)</b>, which describe the actual 3D arrangement (configuration) of the groups.' }] },
      ],
    },
    {
      id: 'ste-racemic',
      title: 'Racemic mixtures, configuration, diastereoisomers and meso compounds',
      kicker: 'More terms',
      blocks: [
        { k: 'p', x: 'A <b>racemic mixture (modification)</b> contains equal amounts of two enantiomers. Their rotations cancel, so it is optically inactive. The prefix <b>(±)</b> marks it: (±)-lactic acid, (±)-2-methyl-1-butanol.', lede: 1 },
        { k: 'p', x: 'Slides 34–36 present the next three ideas as diagrams; the definitions below are the standard ones.' },
        { k: 'ul', items: [
          '<b>Configuration</b> is the actual 3D arrangement of the groups around a chiral centre, written <b>(R)</b> or <b>(S)</b>. Older names use <b>D-</b> and <b>L-</b> (as in D- and L-citrulline). Neither label tells you the direction of rotation.',
          '<b>Diastereoisomers</b> are stereoisomers that are <b>not mirror images</b> of each other. They arise when a molecule has two or more chiral centres, and, unlike enantiomers, they have different physical properties.',
          '<b>Meso compounds</b> have chiral centres but also an internal plane of symmetry, so they are achiral and optically inactive.',
        ] },
      ],
    },
    {
      id: 'ste-biology',
      title: 'Why 3D shape decides biological action',
      kicker: 'Stereospecificity in medicine',
      blocks: [
        { k: 'p', x: 'Receptors and enzyme active sites are themselves chiral. A drug acts when its groups fit their binding sites in the receptor. The lecture’s diagram: of two enantiomers, only <b>compound 1</b> has groups <b>A, B and C</b> pointing the right way to fit their three sites; <b>compound 2</b> cannot fit all three and is <b>inactive</b>. So optical isomerism gives <b>stereospecific</b> biological action.', lede: 1 },
        { k: 'h', x: 'Examples of stereospecific action', l: 3 },
        { k: 'ul', items: [
          '<b>(+)-Glucose</b> plays a unique role in animal metabolism; <b>(−)-glucose</b> is neither metabolised by animals nor fermented by yeasts.',
          '<b>(−)-Adrenaline</b> is many times more active than (+)-adrenaline.',
          '<b>(+)-Ephedrine</b> has no activity as a drug, but it <b>interferes</b> with the action of its enantiomer, (−)-ephedrine.',
        ] },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Structural isomers: different bonding sequence (ethanol vs dimethyl ether). Stereoisomers: same sequence, different 3D arrangement.',
        'Chiral = mirror image not superimposable. A carbon with four different groups is a chiral (stereogenic) centre.',
        'Plane of symmetry → achiral: cis-1,2-dichlorocyclohexane is achiral; the trans isomer has two enantiomers.',
        'Enantiomers: same b.p., m.p., density, refractive index; equal but opposite rotation; different action at chiral receptors.',
        '(+)/d = dextrorotatory, clockwise; (−)/l = laevorotatory, anticlockwise. Not related to (R)/(S).',
        'Racemic mixture: equal amounts of both enantiomers, marked (±), optically inactive.',
        '(+)-glucose is metabolised, (−)-glucose is not; (−)-adrenaline is the more active; (+)-ephedrine blocks (−)-ephedrine.',
      ] },
    ],
  },
  quiz: [
    ['Structural (constitutional) isomers have', 'The same molecular formula but a different bonding sequence', ['The same bonding sequence but a different 3D arrangement in space', 'Different molecular formulas and different bonding', 'The same formula and identical 3D arrangement'], 'Definition on slide 5: same formula, different nature or sequence of bonding.', 'Isomerism'],
    ['Ethanol and dimethyl ether (both C₂H₆O) are', 'Structural isomers', ['Enantiomers', 'Diastereoisomers', 'The same compound'], 'Slides 4–5: they differ in the sequence of bonding.', 'Isomerism'],
    ['Stereoisomers are compounds whose atoms are', 'Joined in the same order but arranged differently in space', ['Joined in a different order but arranged the same in space', 'Joined in a different order, with a different formula', 'Identical in every way, including their 3D arrangement'], 'Slide 6.', 'Isomerism'],
    ['Stereochemistry is the study of', 'The 3D spatial arrangement of atoms or groups in a molecule', ['The rates and the mechanisms of chemical reactions in solution', 'The colours of organic compounds in light', 'The masses of the atoms in a molecule'], 'Slide 7.', 'Isomerism'],
    ['An object is chiral if', 'Its mirror image cannot be superimposed on it', ['Its mirror image can be superimposed exactly on it', 'It has an internal plane of symmetry', 'It contains no carbon atoms at all'], '“Handedness”: the right glove does not fit the left hand (slide 10).', 'Chirality'],
    ['A chiral (stereogenic) carbon is bonded to', 'Four different groups', ['Two identical groups and two different ones', 'Three identical groups', 'Four identical groups'], 'Slide 12.', 'Chirality'],
    ['The mirror image of a molecule with one chiral centre is', 'Its enantiomer, a different compound', ['The same compound, drawn backwards', 'A structural isomer with a new formula', 'A meso compound with no rotation'], 'Slide 12.', 'Chirality'],
    ['A molecule with an internal plane of symmetry is', 'Achiral', ['Always chiral', 'Always a racemic mixture', 'Always dextrorotatory'], 'Slide 14.', 'Chirality'],
    ['Why is cis-1,2-dichlorocyclohexane achiral?', 'It has an internal plane of symmetry', ['It has no chlorine atoms on the ring', 'Its two chlorines point in opposite directions', 'It contains a carbon–carbon double bond'], 'Both structures superimpose; they are identical to their mirror images (slide 15).', 'Chirality'],
    ['How many enantiomers does trans-1,2-dichlorocyclohexane have?', 'Two', ['None', 'One', 'Four'], 'It has no plane of symmetry, so its mirror images do not superimpose (slide 16).', 'Chirality'],
    ['Which property differs between two enantiomers?', 'Their direction of optical rotation', ['Their boiling point at normal pressure', 'Their density at room temperature', 'Their refractive index in light'], 'Same b.p., m.p., density and refractive index; opposite rotation (slide 21).', 'Enantiomers'],
    ['Enantiomers rotate plane-polarised light', 'By the same amount in opposite directions', ['By different amounts in the same direction', 'By the same amount in the same direction', 'Not at all, in any direction'], 'Slide 23.', 'Enantiomers'],
    ['Why can enantiomers have different biological effects?', 'Receptors and enzyme sites are chiral and fit one enantiomer', ['Enantiomers have different molecular formulas', 'One enantiomer always boils at body temperature', 'Enantiomers always dissolve to quite different extents in water'], 'Slide 21: active sites of receptors and enzymes are selective for a specific enantiomer.', 'Enantiomers'],
    ['Plane-polarised light is light that', 'Vibrates in only one plane', ['Vibrates in every plane at once', 'Has been split into its colours', 'Travels in a circular path'], 'Slide 22.', 'Optical activity'],
    ['A compound that rotates plane-polarised light clockwise is', 'Dextrorotatory, (+)', ['Laevorotatory, (−)', 'Racemic, (±)', 'Meso, achiral'], 'Clockwise: (+), dextrorotatory, d; anticlockwise: (−), laevorotatory, l (slides 24–25).', 'Optical activity'],
    ['The (+)/(−) sign of rotation is related to (R)/(S) configuration', 'Not at all', ['Always: (+) is always R', 'Always: (+) is always S', 'Only for molecules with two chiral centres'], 'Slide 24: the sign of rotation is not related to (R) and (S).', 'Optical activity'],
    ['The instrument that measures optical rotation is a', 'Polarimeter', ['Spectrophotometer', 'Refractometer', 'Calorimeter'], 'Slide 24.', 'Optical activity'],
    ['The two enantiomers of 2-methylbutan-1-ol differ in their', 'Specific rotation (+5.756° and −5.756°)', ['Boiling points (128.9 °C and 100 °C)', 'Densities (0.8193 and 1.0000)', 'Refractive indices (1.4107 and 1.3330)'], 'Slide 29: all the other properties listed are identical.', 'Enantiomers'],
    ['A racemic mixture contains', 'Equal amounts of two enantiomers', ['Only one pure enantiomer', 'Two different structural isomers', 'A meso compound and its enantiomer'], 'The prefix (±) marks a racemic sample, e.g. (±)-lactic acid (slide 33).', 'Racemic mixtures'],
    ['Which prefix shows that a sample is racemic?', '(±) before the name', ['(+) before the name', '(−) before the name', '(R) before the name'], 'Slide 33.', 'Racemic mixtures'],
    ['Which glucose is metabolised by animals and fermented by yeasts?', '(+)-Glucose', ['(−)-Glucose', 'Both enantiomers equally', 'Neither enantiomer'], 'Slide 30.', 'Biological activity'],
    ['Which form of adrenaline is many times more active?', '(−)-Adrenaline', ['(+)-Adrenaline', 'Both forms are equally active', 'The racemic mixture only'], 'Slide 30.', 'Biological activity'],
    ['(+)-Ephedrine', 'Has no activity but interferes with (−)-ephedrine', ['Is the active form of the drug ephedrine', 'Is many times more active than its enantiomer (−)-ephedrine', 'Is converted into (−)-ephedrine in the body'], 'Slide 30.', 'Biological activity'],
    ['In the lecture’s receptor diagram, why is compound 2 inactive?', 'Its groups A, B and C cannot all reach their receptor sites', ['It has a completely different molecular formula from compound 1', 'It cannot dissolve in the body fluids at all', 'It is broken down before it reaches the receptor'], 'Only compound 1 has the right orientation for all three sites (slide 38).', 'Biological activity'],
    ['Stereoisomers that are not mirror images of each other are called', 'Diastereoisomers', ['Enantiomers', 'Structural isomers', 'Racemates'], 'Standard definition (slide 35 shows it as a diagram).', 'Configuration'],
    ['A meso compound is', 'Achiral despite having chiral centres, because it has a plane of symmetry', ['Chiral, with no plane of symmetry and two mirror images', 'A mixture of equal amounts of two enantiomers', 'A structural isomer of its own enantiomer'], 'Standard definition (slide 36 shows it as a diagram).', 'Configuration'],
  ],
};
