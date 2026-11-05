// Pictures in the Basic Medical Chemistry lessons (owner, 2026-11-05: "add images to
// illustrate what you want to put across in the lesson, in terms of bond formation…
// you can't just learn organic chemistry by reading only").
//
// The pictures are our own drawings (scripts/bmc-figures/, built into public/images/bmc/),
// each showing what its lesson says: shapes and bond angles, how σ and π bonds form,
// curly-arrow mechanisms, isomers and naming. This file says where each one goes:
// in which section, after which block (0 = after the first block). The lesson files
// themselves are unchanged; HB1_LOCAL_LESSONS adds the pictures (withBmcPictures).
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { BMC_FIGURES, type BmcFigureId } from '@/data/hb1-lessons/bmc-figures';
import { numberFigures } from '@/data/hb1-lessons/pictures';
import type { LegacySection } from '@/data/legacy-study';

type Block = LegacySection['blocks'][number];
export type BmcPicture = { section: string; after: number; id: BmcFigureId; cap: string; note: string };

const CREDIT = 'drawn for GrAte Apex from the lecture';

const reduction: Omit<BmcPicture, 'section' | 'after'> = {
  id: 'carbonyl-reduction',
  cap: 'Reduction adds H across the C=O: an aldehyde gives a primary alcohol, a ketone a secondary alcohol.',
  note: 'The carbonyl carbon gains an H (green) and the oxygen becomes –OH. Count the carbons on the alcohol carbon afterwards: an aldehyde leaves one (1°), a ketone two (2°).',
};

export const BMC_PICTURES: Record<string, BmcPicture[]> = {
  'bmc-alkanes': [
    { section: 'alk-hydrocarbons', after: 1, id: 'alk-saturation', cap: 'Ethane, ethene and ethyne: two carbons each, with single, double and triple bonds.', note: 'Every carbon still makes four bonds. Each extra bond between the carbons uses up a place a hydrogen could have taken: 6 H, then 4, then 2. Only ethane holds the most hydrogens it can, so only ethane is saturated.' },
    { section: 'alk-family', after: 2, id: 'alk-tetrahedral', cap: 'Methane’s sp³ carbon points its four bonds to the corners of a tetrahedron (109.5°), so carbon chains zig-zag.', note: 'A wedge comes toward you and a hash goes away from you: that is how a 3D shape is drawn on flat paper. Because every carbon keeps the 109.5° angle, a chain bends at each carbon instead of lying in a straight line.' },
    { section: 'alk-family', after: 6, id: 'alk-carbon-classes', cap: 'Classifying carbons in butane and isobutane.', note: 'Ignore the hydrogens and count only the carbons each carbon touches. The end CH₃ groups always touch one (1°); a CH₂ in the middle of a chain touches two (2°); the central CH of isobutane touches three (3°).' },
    { section: 'alk-isomerism', after: 2, id: 'alk-pentane-isomers', cap: 'The three isomers of C₅H₁₂ as line structures: a chain of five, four, and three carbons.', note: 'Each step shortens the longest chain by one carbon and moves it to a branch (green). The atoms and the formula are identical; only the connections change, which is what makes them different compounds.' },
    { section: 'alk-nomenclature', after: 9, id: 'alk-naming-example', cap: 'Naming 3-ethyl-2,6-dimethylheptane: find the chain, number it, name and order the branches.', note: 'The blue numbers start at the end nearer the first branch, giving 2, 3, 6 rather than 2, 5, 6. The ethyl comes before the methyls because e comes before m; the “di” of dimethyl is not counted when alphabetising.' },
    { section: 'alk-nomenclature', after: 12, id: 'alk-four-drawings', cap: 'Butane drawn four ways: molecular formula, full structural formula, condensed formula and line structure.', note: 'All four describe the same molecule. The line structure is the quickest: every corner and every line end is a carbon, and you supply the hydrogens yourself so that each carbon has four bonds.' },
    { section: 'alk-properties', after: 5, id: 'alk-halogenation', cap: 'Halogenation of methane: in light, a chlorine atom takes the place of a hydrogen.', note: 'Follow the coloured atoms: the hydrogen that leaves (orange) ends up in HCl, and one chlorine (green) takes its place on the carbon. Nothing adds across a bond, because an alkane has no double bond: this is substitution.' },
  ],
  'bmc-05': [
    { section: 'ken-bond', after: 2, id: 'ken-pi-bond', cap: 'The C=C of ethene: a σ bond between the carbons and a π bond from the sideways overlap of their p orbitals.', note: 'The σ bond lies on the line between the two nuclei. The π electrons sit above and below the flat molecule, exposed: this is where electrophiles attack, and why breaking the overlap (twisting) is not possible without breaking the bond.' },
    { section: 'ken-addition', after: 1, id: 'ken-markovnikov', cap: 'HBr adds to propene in two steps, through the more stable secondary carbocation.', note: 'Red curly arrows show electron pairs moving. Step 1: the π electrons grab the H, and the H–Br electrons go to Br. The H goes to the CH₂ end so that the positive charge sits on the middle carbon (2°, more stable). Step 2: Br⁻ joins that carbon.' },
    { section: 'ken-isomers', after: 0, id: 'ken-cis-trans', cap: 'cis- and trans-2-butene: the same atoms, fixed on the same or opposite sides of the double bond.', note: 'Because the C=C cannot rotate, the two CH₃ groups (purple) are locked where they are. Converting one into the other would need the π bond to break, so these are two separate compounds.' },
  ],
  'bmc-alkynes': [
    { section: 'yne-bond', after: 1, id: 'yne-triple-bond', cap: 'The C≡C of ethyne: one σ bond and two π bonds at right angles to each other.', note: 'Each sp carbon has two p orbitals left. One pair (blue) overlaps in the plane of the page, the other pair (orange) in front of and behind it. With only two partners, the molecule is a straight line (180°), so it cannot have cis/trans forms.' },
    { section: 'yne-acidity', after: 0, id: 'yne-acetylide', cap: 'A very strong base (NH₂⁻ from NaNH₂) removes the H from a terminal alkyne, giving an acetylide ion.', note: 'The base’s lone pair takes the H (first arrow); the C–H electrons stay on carbon as a lone pair (second arrow). This works because the sp carbon, with 50% s character, holds electrons tightly. Only a terminal alkyne has this H.' },
    { section: 'yne-reactions', after: 0, id: 'yne-reduction', cap: 'Three ways to reduce 2-butyne: to butane, to cis-2-butene (Lindlar catalyst) or to trans-2-butene (Na in NH₃).', note: 'The catalyst decides the shape. On a Lindlar catalyst both new H atoms (green) arrive from the same side (syn), giving cis; sodium in liquid ammonia adds them from opposite sides (anti), giving trans. An ordinary catalyst does not stop at the alkene.' },
  ],
  'bmc-04': [
    { section: 'aro-benzene', after: 3, id: 'aro-pi-cloud', cap: 'Benzene’s six p orbitals overlap all round the ring, making one π cloud above and below it.', note: 'Every carbon contributes one p orbital with one electron, so six electrons spread over the whole ring instead of sitting in three separate double bonds. Spreading out (delocalisation) is what makes benzene so stable.' },
    { section: 'aro-benzene', after: 4, id: 'aro-kekule', cap: 'Two equivalent Kekulé structures, and the ring with a circle that shows the real molecule.', note: 'Neither Kekulé structure exists by itself; the double-headed arrow means “both at once”. The circle shows the result: six identical C–C bonds, each between a single and a double bond.' },
    { section: 'aro-naming', after: 0, id: 'aro-ortho-meta-para', cap: 'Ortho, meta and para: the three xylenes (dimethylbenzenes).', note: 'Number from one substituent (1). The next CH₃ at position 2 is ortho, at 3 meta, at 4 para. Going round the other way gives the same names (6 is also ortho, 5 also meta).' },
    { section: 'aro-eas', after: 3, id: 'aro-eas', cap: 'Electrophilic aromatic substitution: E⁺ adds to the ring, then H⁺ leaves and the ring becomes aromatic again.', note: 'In the slow step the ring’s π electrons bond to E⁺, giving a positive ring that is no longer aromatic (dashed arc). In the fast step a base takes the H from that same carbon, and its electrons return to the ring. The result is substitution, not addition.' },
  ],
  'bmc-02': [
    { section: 'rxh-intro', after: 1, id: 'rxh-classes', cap: 'Methyl, primary, secondary and tertiary alkyl bromides.', note: 'Look only at the orange carbon, the one holding Br, and count the carbons attached to it: none, one, two or three. This decides whether SN1, SN2 or elimination is likely later in the lesson.' },
    { section: 'rxh-sn', after: 1, id: 'rxh-sn2', cap: 'SN2: the nucleophile attacks from the back as the bromide leaves, in a single step.', note: 'HO⁻ approaches at 180° to the C–Br bond. In the middle (in brackets) the carbon is partly bonded to both. The three other groups flip over to the other side, like an umbrella turning inside out: the configuration is inverted.' },
    { section: 'rxh-sn', after: 1, id: 'rxh-sn1', cap: 'SN1: the C–Br bond breaks first, leaving a flat carbocation that the nucleophile can attack from either face.', note: 'The carbocation is flat (sp²), with an empty p orbital above and below. Nu⁻ is equally likely to come from the top or the bottom, so the two mirror-image products form 50:50: racemisation.' },
    { section: 'rxh-elimination', after: 1, id: 'rxh-e2', cap: 'E2: the base removes a β-hydrogen while bromide leaves from the α-carbon, forming a C=C.', note: 'Three arrows move at once: the base takes the H, the C–H electrons become the new π bond, and the C–Br electrons leave with Br⁻. The α carbon holds the halogen; the β carbon is next to it.' },
  ],
  'bmc-alcohols': [
    { section: 'roh-classes', after: 1, id: 'roh-classes', cap: 'Three alcohols with the same formula, C₄H₉OH: primary, secondary and tertiary.', note: 'The orange dot marks the carbon carrying –OH. Count how many carbons it touches: one, two or three. The formula cannot tell them apart; only the drawing can.' },
    { section: 'roh-properties', after: 0, id: 'roh-hbonds', cap: 'Hydrogen bonds (dotted) link alcohol molecules to each other and to water.', note: 'The δ+ H of one O–H is drawn to the δ− O of a neighbour. These links must be broken to boil an alcohol, and they form with water too, which is why small alcohols dissolve.' },
    { section: 'roh-reactions', after: 3, id: 'roh-oxidation', cap: 'Oxidation of primary, secondary and tertiary alcohols.', note: 'Oxidation removes an H from the carbon bearing –OH (blue). A primary alcohol has two, so it can go to the aldehyde and then the acid; a secondary has one, so it stops at the ketone; a tertiary has none, so nothing happens.' },
  ],
  'bmc-aldehydes-ketones': [
    { section: 'aldh-carbonyl', after: 3, id: 'aldh-carbonyl', cap: 'The carbonyl group: flat, 120°, polar; with one H it is an aldehyde, with two carbon groups a ketone.', note: 'Oxygen pulls the shared electrons toward itself (δ−), leaving the carbon electron-poor (δ+). That δ+ carbon is the target of nucleophiles in almost every reaction in this lesson.' },
    { section: 'aldh-oxidation', after: 3, id: 'aldh-tollens', cap: 'The Tollens’ test: an aldehyde reduces silver ions to a silver mirror; a ketone does not.', note: 'The aldehyde’s C–H becomes C–O⁻ (it is oxidised), while each Ag⁺ gains an electron and becomes silver metal, which coats the glass. A ketone has no H on its carbonyl carbon, so it gives no mirror.' },
    { section: 'aldh-addition', after: 1, id: 'aldh-addition', cap: 'Nucleophilic addition under basic conditions: the nucleophile adds, then the oxygen is protonated.', note: 'Step 1: Nu⁻ bonds to the δ+ carbon and the π electrons move onto oxygen, leaving O⁻. Step 2: O⁻ takes H⁺ from water. The carbon changes from flat (sp²) to tetrahedral (sp³).' },
    { section: 'aldh-addition', after: 5, ...reduction },
  ],
  'bmc-ketones': [
    { section: 'ket-naming', after: 2, id: 'ket-naming', cap: 'The lecture’s assignment: why “3-ethyl-2-butanone” is 3-methyl-2-pentanone.', note: 'The longest chain runs through the ethyl branch, so it has five carbons (blue), not four. Numbered from the end nearest the C=O, the carbonyl is at 2 and the left-over carbon is a methyl at 3.' },
    { section: 'ket-reactions', after: 2, id: 'ket-crowding', cap: 'Why nucleophiles add to ketones more slowly than to aldehydes.', note: 'The nucleophile has to reach the carbonyl carbon between the groups (orange circles). An aldehyde has one large group and a small H; a ketone has two large groups in the way, and both push electrons toward the carbon, so it is less δ+.' },
    { section: 'ket-reactions', after: 4, ...reduction },
  ],
  'bmc-03': [
    { section: 'cxa-what', after: 0, id: 'cxa-group', cap: 'The carboxyl group is an acyl group (RCO–) joined to a hydroxyl (–OH).', note: 'Seeing the two parts helps with the next lesson: every acid derivative keeps the acyl part (blue box) and swaps the –OH (green box) for something else.' },
    { section: 'cxa-properties', after: 0, id: 'cxa-dimer', cap: 'Two acetic acid molecules hold each other with two hydrogen bonds, forming a dimer.', note: 'Each O–H points at the other molecule’s C=O oxygen. Two hydrogen bonds per pair, instead of one, is why acids boil higher than alcohols of similar size.' },
    { section: 'cxa-properties', after: 1, id: 'cxa-fatty-acids', cap: 'Stearic acid (saturated) and oleic acid (one cis double bond), both with 18 carbons.', note: 'The cis double bond (red) puts a permanent bend in oleic acid. Straight chains lie side by side like pencils and pack into a solid (72 °C); bent chains cannot pack closely, so oleic acid melts at 16 °C.' },
    { section: 'cxa-acidity', after: 4, id: 'cxa-substituents', cap: 'Substituted benzoic acids: groups that pull electrons make the acid stronger.', note: 'Read the Kₐ values from left to right: –NH₂ gives electrons and weakens the acid; –Cl and especially –NO₂ pull electrons away, stabilising the carboxylate ion left behind, so the acid gives up its H⁺ more readily.' },
  ],
  'bmc-acid-derivatives': [
    { section: 'acd-family', after: 1, id: 'acd-family', cap: 'The acyl family: acid chloride, anhydride, ester and amide, from most to least reactive.', note: 'The acyl part, R–C=O, is the same in all four. Only the green group changes, and the better it is at leaving, the more reactive the compound. That is why chlorides make esters and amides, and never the reverse.' },
    { section: 'acd-family', after: 2, id: 'acd-mechanism', cap: 'Nucleophilic acyl substitution: the nucleophile adds, then the C=O re-forms and the old group leaves.', note: 'Compare with aldehydes: there the reaction stops after addition. Here the tetrahedral intermediate has a group that can leave (Cl⁻), so the oxygen’s electrons come back down, the C=O re-forms and Cl⁻ is pushed out.' },
    { section: 'acd-esters', after: 0, id: 'acd-fischer', cap: 'Fischer esterification: acetic acid + ethanol give ethyl acetate and water, with an acid catalyst.', note: 'The water is made from the acid’s –OH (orange box) and the alcohol’s H (blue box); the rest joins up as the ester. The double arrows mean the reaction is reversible, so the conditions decide how much ester you get.' },
  ],
  'bmc-01': [
    { section: 'amn-classes', after: 0, id: 'amn-classes', cap: 'Ammonia and the methylamines: one, two or three of its hydrogens replaced by carbon groups.', note: 'Count the carbon groups on the nitrogen (purple). Whatever replaces the hydrogens, the lone pair (two dots) stays on the pyramidal nitrogen, so every amine can still act as a base and a nucleophile.' },
    { section: 'amn-basicity', after: 2, id: 'amn-base', cap: 'An amine acts as a base: its lone pair takes H⁺ from water, giving an ammonium ion.', note: 'The curly arrow starts at the lone pair and ends at the H: a new N–H bond forms, the nitrogen becomes positive, and OH⁻ is left. This ionised form is the one that crosses membranes poorly.' },
    { section: 'amn-basicity', after: 5, id: 'amn-absorption', cap: 'A weakly basic drug in the stomach and in the small intestine.', note: 'Only the un-ionised form (green B) slips through the fatty membrane. In the acid stomach almost all of the drug is BH⁺; in the intestine much more is B, so that is where it is absorbed.' },
  ],
  'bmc-stereochemistry': [
    { section: 'ste-isomerism', after: 1, id: 'ste-structural', cap: 'Ethanol and dimethyl ether: both C₂H₆O, joined in a different order.', note: 'In ethanol the oxygen sits between a carbon and a hydrogen (an alcohol); in dimethyl ether it sits between two carbons (an ether). Different connections make different compounds: these are structural isomers, not stereoisomers.' },
    { section: 'ste-chirality', after: 1, id: 'ste-mirror', cap: 'The two enantiomers of lactic acid: mirror images that cannot be superimposed.', note: 'The ringed carbon carries four different groups. However you turn the right-hand molecule, you cannot make all four groups line up with the left-hand one, just as a left glove will not fit a right hand.' },
    { section: 'ste-chirality', after: 4, id: 'ste-dichlorocyclohexane', cap: 'cis- and trans-1,2-dichlorocyclohexane and the plane of symmetry test.', note: 'In the cis compound both Cl point toward you, so a mirror plane (blue) cuts the molecule into two matching halves: it is achiral. In the trans compound one Cl points toward you and one away, so no such plane exists and the molecule is chiral.' },
    { section: 'ste-enantiomers', after: 3, id: 'ste-polarimeter', cap: 'A polarimeter: plane-polarised light is rotated by a solution of one enantiomer.', note: 'The polariser lets through light vibrating in one plane only. The sample turns that plane by an angle α; the analyser measures how far and which way. The other enantiomer gives the same angle in the opposite direction.' },
    { section: 'ste-biology', after: 0, id: 'ste-receptor', cap: 'A chiral receptor with three binding sites: only one enantiomer fits all three.', note: 'Compound 1 puts A, B and C over sites a, b and c. Its mirror image can match A to a, but then B and C land on the wrong sites. That is why one enantiomer of a drug can work while the other does nothing.' },
  ],
};

/** The lesson with its pictures placed and numbered "Figure <section>.<n>". */
export function withBmcPictures(lesson: Hb1Lesson): Hb1Lesson {
  const places = BMC_PICTURES[lesson.id];
  if (!places?.length) return lesson;
  const sections = lesson.sections.map((section) => {
    const here = places.filter((place) => place.section === section.id);
    if (!here.length) return section;
    const blocks: Block[] = [];
    section.blocks.forEach((block, index) => {
      blocks.push(block);
      for (const place of here.filter((item) => item.after === index)) {
        const [w, h] = BMC_FIGURES[place.id];
        blocks.push({ k: 'illus', src: `/images/bmc/${place.id}.svg`, w, h, cap: place.cap, credit: CREDIT, url: '', note: place.note });
      }
    });
    return { ...section, blocks };
  });
  return { ...lesson, sections: numberFigures(sections) };
}
