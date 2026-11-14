// Abbreviations in HB1 lessons are spelled out the first time each section uses them (owner,
// 2026-11-07: "some acronyms are assumed to be known already by the user … mch and mcv and stuff are
// never explained"): src/data/hb1-lessons/abbreviations.ts. This test fails when a lesson uses an
// abbreviation that has no meaning there and is not explained in the lesson's own text. Add the
// meaning to abbreviations.ts, or (if it is not an abbreviation: a formula, a genotype, a name, an
// Excel function) to NOT_ABBREVIATIONS below.
// `node --import ./tests/register.mjs scripts/hb1-abbreviations-report.mjs` lists what is added.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

const { HB1_LOCAL_LESSONS, hb1ReadableSections } = await import('@/data/hb1-lessons');
const { abbreviationsFor, expandAbbreviations, sectionsWithAbbreviations } = await import('@/data/hb1-lessons/abbreviations');
const { plainText } = await import('@/data/legacy-questions');

// Capital letters that are not abbreviations to explain.
const NOT_ABBREVIATIONS = new Set([
  // Years, places, people, organisations named as such, product and course codes
  'BC', 'AD', 'BCE', 'UK', 'US', 'USA', 'KwaZulu', 'MacLeod', 'McCarty', 'McCrae', 'McBroom', 'MacNeal', 'UNITAID', 'KBR', 'SMS', 'CSM', 'STAT', 'RTS', 'RU', 'KNUST', 'NewMedia', 'BMDP', 'STATA', 'SAS',
  // Mnemonics and word parts the lessons spell out themselves
  'OIL', 'RIG', 'HILL', 'SOH', 'CAH', 'TOA', 'HEPAT', 'ITIS', 'SUB', 'IC', 'PHY', 'IVPPSS', 'UCC', 'CWA',
  // Names of genes, proteins, receptors and systems that are not short for anything taught
  'ABO', 'AB', 'MYC', 'RAS', 'BLM', 'MT', 'RecA', 'FtsH', 'RuBisCO', 'SOS', 'PRM', 'PR', 'PRE', 'GABAA', 'GABAB', 'PDZ', 'CuA', 'CuB', 'APC', 'WHOPES', 'NNN',
  // Symbols in formulas, fibre and clotting-factor types, sex chromosomes, DNA sequences
  'RT', 'PK', 'PNa', 'PCl', 'EX', 'ET', 'EP', 'IIa', 'IIb', 'XIIa', 'XIa', 'IXa', 'VIIa', 'XY', 'XX', 'XXX', 'XXY', 'XYY', 'XXXX', 'TATA', 'TATAAT', 'TTAGGG', 'GT', 'AG', 'CA', 'CoASH', 'SH',
  // Words written in capitals, menus and file types
  'OR', 'AND', 'NOT', 'IT', 'TV', 'CDs', 'OK', 'TRUE', 'FALSE', 'NULL', 'NEW', 'LIST', 'EASY', 'AS', 'XLS', 'XLSX', 'XLC', 'XLM', 'TXT', 'WK', 'DB', 'PC', 'GH', 'AM', 'PM', 'MATH', 'PARK', 'NOTATION', 'RELATION', 'ID', 'MP', 'PTA',
]);
const ROMAN = /^(?:I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XX|XXX|XXIII)$/;
// A chemical formula: element symbols (and R or X for a group) with nothing else.
const FORMULA = /^(?:(?:H|He|Li|Be|B|C|N|O|F|Ne|Na|Mg|Al|Si|P|S|Cl|Ar|K|Ca|Fe|Cu|Zn|Br|I|Hg|Pb|Ag|Mn|Cr|Co|Ni|Cs|R|X)\d*)+$/;
const notAbbreviation = (token, course) =>
  NOT_ABBREVIATIONS.has(token) || ROMAN.test(token) || FORMULA.test(token) ||
  // Genotypes and allele symbols (AaBb, YYrr, IAi), and coin, child and point sequences in probability and geometry
  (course === 'medgen' && /^(?:(?:Aa|Bb|Cc|Yy|Rr|YY|yy|RR|rr|AA|aa|BB|bb|IA|IB|Ii|AY|AYa|i|a|b|c|r|y)+|I[AB][iAB]*|TT|IAIA|IBIB|IAIB|IAi|IBi)$/.test(token)) ||
  (course === 'stats' && /^[HTBG]{2,3}$/.test(token)) ||
  (course === 'algebra' && /^[A-Z]{2,4}$/.test(token)) ||
  // Excel function names are written in capitals
  (course === 'compapp' && /^[A-Z]{2,}[A-Z0-9]*s?$/.test(token));

const texts = (blocks, out = []) => {
  for (const b of blocks ?? []) {
    if (b.k === 'p') out.push(b.x);
    else if (b.k === 'ul') out.push(...b.items);
    else if (b.k === 'table') for (const r of b.rows) out.push(...r.c);
    else if (b.k === 'term') out.push(b.def);
    else if (b.k === 'box' || b.k === 'step' || b.k === 'reveal') texts(b.blocks, out);
    else if (b.k === 'cards') for (const c of b.items) texts(c.blocks, out);
    else if (b.k === 'illus') { out.push(b.cap); if (b.note) out.push(b.note); }
  }
  return out;
};

describe('abbreviations in HB1 lessons', () => {
  it('each has a meaning or is explained in the lesson', () => {
    const missing = [];
    for (const lesson of HB1_LOCAL_LESSONS) {
      const course = lesson.id.split('-')[0];
      const meanings = abbreviationsFor(lesson.id);
      const text = lesson.sections.flatMap((section) => texts(section.blocks)).map(plainText).join('\n');
      for (const match of text.matchAll(/(?<![A-Za-z0-9₀-₉])([A-Z][A-Za-z]{0,2}[A-Z][A-Za-z]{0,4})(?![A-Za-z0-9₀-₉⁰-⁹])/g)) {
        const token = match[1];
        if (meanings[token] || (token.endsWith('s') && meanings[token.slice(0, -1)]) || notAbbreviation(token, course)) continue;
        const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Explained by the lesson itself: "full name (ABBR)", "ABBR (full name)", "ABBR: …", "ABBR = …".
        if (new RegExp(`\\(${escaped}s?[),;]|${escaped}s? \\([A-Za-z][a-z]{3,}|${escaped}s?: [a-z]|${escaped}s? = [A-Za-z]`).test(text)) continue;
        missing.push(`${lesson.id}: ${token} («${text.slice(Math.max(0, match.index - 30), match.index + 30).replace(/\n/g, ' ')}»)`);
      }
    }
    assert.deepEqual([...new Set(missing)], [], 'abbreviations with no meaning: add them to src/data/hb1-lessons/abbreviations.ts');
  });

  it('spells one out at its first use in a section, once', () => {
    const meanings = { MCV: 'mean corpuscular volume', ECF: 'extracellular fluid', HMG: '3-hydroxy-3-methylglutaryl', CoA: 'coenzyme A', ACh: 'acetylcholine', RBC: 'red blood cell' };
    const seen = new Set();
    assert.equal(expandAbbreviations('A high MCV means big cells; MCV above 95 fL…', meanings, seen), 'A high MCV (mean corpuscular volume) means big cells; MCV above 95 fL…');
    assert.equal(expandAbbreviations('The MCV again.', meanings, seen), 'The MCV again.', 'the second use in a section is left alone');
    // Before a bracket of its own, or inside brackets: square brackets.
    assert.equal(expandAbbreviations('<b>MCV</b> (fL)', meanings, new Set()), '<b>MCV</b> [mean corpuscular volume] (fL)');
    assert.equal(expandAbbreviations('(e.g. ACh at the junction)', meanings, new Set()), '(e.g. ACh [acetylcholine] at the junction)');
    // Already explained: nothing added.
    assert.equal(expandAbbreviations('Cells live in extracellular fluid (ECF).', meanings, new Set()), 'Cells live in extracellular fluid (ECF).');
    // Part of a longer word: after the whole word, saying which part.
    assert.equal(expandAbbreviations('statins block HMG-CoA reductase', meanings, new Set()), 'statins block HMG-CoA (HMG: 3-hydroxy-3-methylglutaryl; CoA: coenzyme A) reductase');
    // Plurals, and never inside a fraction or a quoted example.
    assert.equal(expandAbbreviations('RBCs carry oxygen', meanings, new Set()), 'RBCs (red blood cells) carry oxygen');
    assert.equal(expandAbbreviations('<frac><n>Hct</n><d>RBC</d></frac>', meanings, new Set()), '<frac><n>Hct</n><d>RBC</d></frac>');
    assert.equal(expandAbbreviations('“The ACh is here.”', meanings, new Set(), { skipQuotes: true }), '“The ACh is here.”');
  });

  it('explains each again in a later section, but the very common ones once per lesson', () => {
    const lesson = { id: 'physiology-test', sections: [
      { id: 'a', title: 'A', blocks: [{ k: 'p', x: 'ATP and the ECF.' }] },
      { id: 'b', title: 'B', blocks: [{ k: 'p', x: 'ATP and the ECF again.' }] },
    ] };
    const [first, second] = sectionsWithAbbreviations(lesson.id, lesson.sections);
    assert.equal(first.blocks[0].x, 'ATP (adenosine triphosphate) and the ECF (extracellular fluid).');
    assert.equal(second.blocks[0].x, 'ATP and the ECF (extracellular fluid) again.');
  });

  it('explains the red cell indices in the Blood lesson (the owner’s example)', () => {
    const blood = HB1_LOCAL_LESSONS.find((lesson) => lesson.id === 'physiology-08');
    const section = hb1ReadableSections(blood).find((item) => item.id === 'bld-rbc');
    const text = texts(section.blocks).map(plainText).join('\n');
    for (const meaning of ['mean corpuscular volume', 'mean corpuscular haemoglobin', 'mean corpuscular haemoglobin concentration', 'red cell count', 'haematocrit', 'haemoglobin']) assert.ok(text.includes(meaning), `Blood lesson: "${meaning}" is not written out`);
    assert.ok(texts(section.blocks).some((item) => item.includes('<frac><n>Hct (%) × 10</n>')), 'Blood lesson: the MCV formula is not a fraction');
  });
});
