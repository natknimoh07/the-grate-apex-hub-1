// Divisions in HB1 lessons drawn as fractions (owner, 2026-11-07: "use math representations like the
// bar in divisions"): src/data/hb1-lessons/fractions.ts turns "a ÷ b" (and tight a/b in the maths
// lessons) into <frac><n>a</n><d>b</d></frac>, which the lesson page draws as a numerator over a bar.
// `node --import ./tests/register.mjs scripts/hb1-fractions-report.mjs` lists every conversion.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

const { divisionsAsFractions } = await import('@/data/hb1-lessons/fractions');
const { HB1_LOCAL_LESSONS, hb1ReadableSections } = await import('@/data/hb1-lessons');
const { parseRich, plainText } = await import('@/data/legacy-questions');

const frac = (n, d) => `<frac><n>${n}</n><d>${d}</d></frac>`;

describe('fractions in lesson text', () => {
  it('reads both sides of ÷ from the words and numbers around it', () => {
    assert.equal(divisionsAsFractions('Moles = given mass ÷ molar mass'), `Moles = ${frac('given mass', 'molar mass')}`);
    assert.equal(divisionsAsFractions('(mass of solute ÷ mass of solution) × 100'), `${frac('mass of solute', 'mass of solution')} × 100`);
    assert.equal(divisionsAsFractions('24 ÷ 176 × 100 ≈ 14%'), `${frac('24', '176')} × 100 ≈ 14%`);
    // A product on the left stays whole, as it is read left to right.
    assert.equal(divisionsAsFractions('Hct × 10 ÷ RBC'), frac('Hct × 10', 'RBC'));
    // A quantity keeps its unit; brackets that only grouped a side go.
    assert.equal(divisionsAsFractions('Volume = 25 mg ÷ 0.05 mg/ml = 500 ml'), `Volume = ${frac('25 mg', '0.05 mg/ml')} = 500 ml`);
    assert.equal(divisionsAsFractions('3 ÷ (1 − 0.40) = 5 L'), `${frac('3', '1 − 0.40')} = 5 L`);
    // Bold text and subscripts are kept whole.
    assert.equal(divisionsAsFractions('moles of solute ÷ <b>litres of solution</b>'), frac('moles of solute', '<b>litres of solution</b>'));
    assert.equal(divisionsAsFractions('DF = C<sub>1</sub> ÷ C<sub>2</sub>'), `DF = ${frac('C<sub>1</sub>', 'C<sub>2</sub>')}`);
  });

  it('turns tight slashes into fractions only in the maths lessons, and never units or word pairs', () => {
    assert.equal(divisionsAsFractions('dy/dx = 2x', { slashes: true }), `${frac('dy', 'dx')} = 2x`);
    assert.equal(divisionsAsFractions('(x + 1)/(x − 1)', { slashes: true }), frac('x + 1', 'x − 1'));
    assert.equal(divisionsAsFractions('[f(x + h) − f(x)]/h', { slashes: true }), frac('f(x + h) − f(x)', 'h'));
    assert.equal(divisionsAsFractions('lim<sub>h→0</sub> [f(x + h) − f(x)]/h', { slashes: true }), `lim<sub>h→0</sub> ${frac('f(x + h) − f(x)', 'h')}`);
    assert.equal(divisionsAsFractions('dy/dx', {}), 'dy/dx');
    for (const kept of ['5 g/L', 'and/or', '2 cm³/s', 'x<sup>1/2</sup>', '2 ln x/x', 'ln x/ln b', '16 000/3', '12/10/2025']) assert.equal(divisionsAsFractions(kept, { slashes: true }), kept, kept);
  });

  it('keeps the brackets of a function or a power, and puts d/dx before what it acts on', () => {
    assert.equal(divisionsAsFractions('ln(x/y)', { slashes: true }), `ln(${frac('x', 'y')})`);
    assert.equal(divisionsAsFractions('(3/4)ˣ', { slashes: true }), `(${frac('3', '4')})ˣ`);
    assert.equal(divisionsAsFractions('d/dx(y²) = 2y y′', { slashes: true }), `${frac('d', 'dx')}(y²) = 2y y′`);
    assert.equal(divisionsAsFractions('<b>(21/2)x</b>', { slashes: true }), `<b>${frac('21', '2')}x</b>`);
  });

  it('is parsed for drawing and written on one line where only plain text will do', () => {
    const runs = parseRich(`<b>accuracy = ${frac('mean volume', 'set volume')} × 100</b>`);
    const fraction = runs.find((run) => run.frac);
    assert.ok(fraction, 'no fraction run');
    assert.deepEqual(fraction.frac.num.map((run) => [run.t, run.b]), [['mean volume', true]]);
    assert.equal(fraction.t, '(mean volume)/(set volume)');
    assert.equal(plainText(`x = ${frac('1', '2')}`), 'x = 1/2');
  });

  it('leaves every lesson with well-formed fractions', () => {
    let count = 0;
    const walk = (blocks) => blocks.flatMap((block) => [block.x, ...(block.items ?? []).filter((item) => typeof item === 'string'), ...(block.rows ?? []).flatMap((row) => row.c), ...walk(block.blocks ?? [])]).filter(Boolean);
    for (const lesson of HB1_LOCAL_LESSONS) {
      for (const section of hb1ReadableSections(lesson)) {
        for (const text of walk(section.blocks)) {
          for (const fraction of text.match(/<frac>[\s\S]*?<\/frac>/g) ?? []) {
            count += 1;
            assert.match(fraction, /^<frac><n>(?:(?!<frac>)[\s\S])+<\/n><d>(?:(?!<frac>)[\s\S])+<\/d><\/frac>$/, `${lesson.id}: "${fraction}"`);
            assert.ok(parseRich(fraction).some((run) => run.frac), `${lesson.id}: "${fraction}" does not parse`);
          }
        }
      }
    }
    assert.ok(count > 500, `only ${count} fractions: has the conversion stopped working?`);
  });
});
