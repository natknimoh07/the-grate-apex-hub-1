// HB1 question review (owner, 2026-10-31: "do a topic review and question
// review and update their content"). Corrections to the HB1 banks in
// public/curriculum/, by question id, each with the reason. Answer keys
// that were wrong were worked out again from first principles (genetics
// ratios, arithmetic) or checked against the lecture slides in the HB1
// folder. Run: node scripts/hb1-review/fixes.mjs  (idempotent)
import { readFileSync, writeFileSync } from 'node:fs';

export const FIXES = {
  // Questions that pointed at a picture the app does not have ("the given
  // pedigree", "Fig. 1", "the following graph") were reworded so the words
  // describe what the picture showed; the answer is unchanged.
  algebra: [
    { id: 'gbqkwd', q: 'Which equation describes a parabola that opens downwards with its vertex at (h, k), to the right of the y-axis and above the x-axis? (a, h and k are positive real numbers.)', why: 'referred to a graph that is not in the app' },
  ],
  biolchem: [
    { id: '1wx9b83', q: "In the lecture's chart of minerals and what they do, which mineral helps the body 'fight infection'?", why: 'referred to a diagram that is not in the app' },
    { id: '1tolkvt', q: "In the lecture's chart of minerals and what they do, which mineral helps to 'reduce blood pressure'?", why: 'referred to a diagram that is not in the app' },
    { id: '3aixvm', q: "In the lecture's chart of minerals and what they do, which mineral is linked to 'blood production and disease resistance'?", why: 'referred to a diagram that is not in the app' },
  ],
  cellstruct: [
    { id: 'dw3kx1', q: 'In a fluorescence microscope, what is the name and function of the angled mirror that sends the excitation light down to the sample and lets the emitted light pass up to the detector?', why: 'referred to Fig. 1, which is not in the app' },
    { id: '1aau42b', q: 'In a fluorescence microscope, what is the name and function of the filter between the lamp and the dichroic mirror?', why: 'referred to Fig. 1, which is not in the app' },
    { id: 'dov8kf', q: 'In a fluorescence microscope, what is the name and function of the filter between the dichroic mirror and the detector?', why: 'referred to Fig. 1, which is not in the app' },
  ],
  compapp: [
    { id: 'uwq3po', q: 'In PowerPoint, the small toolbar at the very top left of the window, with the Save, Undo and Redo buttons, is known as the _____', e: 'The Quick Access toolbar (menu) holds the commands you use most — Save, Undo, Redo — and can be customised.', why: 'referred to a labelled screenshot that is not in the app' },
  ],
  medgen: [
    { id: '1qkypg3', q: 'In a family pedigree, a trait affects both males and females, appears in every generation, and each affected parent passes it to about half of the children. The pattern of inheritance is:', e: 'Both sexes affected and no skipped generations, with a 1 in 2 chance from an affected parent: autosomal dominant.', why: 'referred to a pedigree that is not in the app' },
    { id: '1qd9eo4', a: 4, e: 'A 1:1:1:1 litter is a testcross of a double heterozygote: the belted syndactylous sow is Bb Ss and the unbelted cloven boar (both recessive) is bb ss.', why: 'key said Bb Ss × BB ss, which cannot give unbelted piglets' },
    { id: '18480ys', a: 1, e: 'White = cc: 1/4 white means both parents are Cc. Among the coloured, red : blue = 1 : 1, so the R gene is a testcross (Rr × rr). Cc Rr × Cc rr gives 3/8 red, 3/8 blue, 1/4 white.', why: 'Cc Rr × Cc Rr gives 9 red : 3 blue : 4 white, not 3/8 : 3/8 : 1/4' },
    { id: '18ijxlr', a: 1, e: 'Pigmented : unpigmented = 3 : 1, so Pp × Pp; tall : dwarf = 1 : 1, so Tt × tt. The parents are Pp Tt × Pp tt.', why: 'Pp TT × PP tt would give no unpigmented or dwarf progeny' },
    { id: 'rj03c', a: 3, e: 'Coat colour is X-linked. The orange daughter (X^R X^R) got an X^R from each parent, so the father is X^R Y — written R.', why: 'an orange (RR) daughter needs an R from her father' },
    { id: '1fg5ir1', o: { 2: 'Bb × Bb.' }, why: 'option text was garbled (Cyrillic letters)' },
    { id: 'xmyad7', a: 3, e: 'Tt × Tt gives 1 TT : 2 Tt : 1 tt, so homozygotes (TT + tt) are 2 in 4 = 50%.', why: 'TT and tt together are 50%, not 25%' },
    { id: 'j73qws', a: 0, e: 'A chiasma is the visible point where non-sister chromatids have crossed over.', why: 'chiasmata result from crossing over, not nondisjunction' },
    { id: '1wi7m1o', o: { 1: '1:2:2:4:1:2:1:2:1' }, e: 'Nine genotypes: 1 YYRR : 2 YYRr : 2 YyRR : 4 YyRr : 1 YYrr : 2 Yyrr : 1 yyRR : 2 yyRr : 1 yyrr (16 in all).', why: 'the keyed ratio was misprinted (it added up to 19, not 16)' },
    { id: 'vk7395', a: 1, e: 'Polygenic traits (height, skin colour) vary continuously; they are quantitative, not discrete.', why: 'polygenic traits are continuous' },
    { id: '492qgy', a: 1, e: 'Most enzyme deficiencies are autosomal recessive, but acute intermittent porphyria (porphobilinogen deaminase deficiency) is autosomal dominant.', why: 'acute intermittent porphyria is the autosomal dominant one' },
    { id: '3r19mt', q: 'Mendel died on 6 January 1884, due to chronic nephritis.', why: 'the year was misprinted as 1984' },
    { id: '19rfh2y', a: 1, e: 'A cleft chin is the dominant form, so a smooth chin is recessive.', why: 'smooth chin is the recessive form of the chin-cleft trait' },
    { id: 'h8vio6', a: 1, e: 'A dihybrid is heterozygous at both genes (TtRr). Ttrr is heterozygous at only one, so it is not a true dihybrid.', why: 'Ttrr is heterozygous at one gene only' },
    { id: 'q6awrc', o: { 0: 'All' }, why: 'option text was garbled (AII)' },
    { id: 'fss214', o: { 1: 'X-linked recessive' }, why: 'option text was garbled (NX-linked)' },
    { id: '1g0ata1', o: { 1: 'All' }, why: 'option text was garbled (AII)' },
    { id: 'wuoshd', o: { 2: '7/16' }, a: 2, e: 'Each child escapes CF with probability 3/4 and PKU with 3/4, so has neither with 9/16. The chance of CF or PKU (or both) is 1 − 9/16 = 7/16.', why: 'the keyed 1/2 is not the right probability; the correct 7/16 was not among the options' },
  ],
};

const banks = Object.keys(FIXES);
let changed = 0;
for (const bank of banks) {
  const path = new URL(`../../public/curriculum/${bank}.json`, import.meta.url);
  const data = JSON.parse(readFileSync(path, 'utf8'));
  const byId = new Map(data.sets.flatMap((set) => set.questions.map((q) => [q.id, q])));
  for (const fix of FIXES[bank]) {
    const q = byId.get(fix.id);
    if (!q) throw new Error(`${bank}: no question ${fix.id}`);
    if (fix.q !== undefined && q.q !== fix.q) { q.q = fix.q; changed++; }
    for (const [index, text] of Object.entries(fix.o ?? {})) if (q.o[Number(index)] !== text) { q.o[Number(index)] = text; changed++; }
    if (fix.a !== undefined && q.a !== fix.a) { q.a = fix.a; changed++; }
    if (fix.e !== undefined && q.e !== fix.e) { q.e = fix.e; changed++; }
  }
  writeFileSync(path, JSON.stringify(data));
}
console.log(`HB1 fixes applied (${changed} changes).`);
