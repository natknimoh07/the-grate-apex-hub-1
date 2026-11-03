// Regression tests for fixes made from learners' "Report a problem" emails.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const { wrongIsPartOfAnswer, typedAcceptVariants } = await import('@/data/true-false');
const { typedAnswerMatches } = await import('@/data/questions');
const { buildPractice } = await import('@/data/legacy-questions');

describe('report 2026-10-31: legacy:cellstruct:1bmqjkt:tf', () => {
  it('a half-right option is never shown as a false statement', () => {
    assert.ok(wrongIsPartOfAnswer('wavelength of light used', 'wavelength of light used and numerical aperture of lens system'));
    assert.ok(!wrongIsPartOfAnswer('refractive index', 'wavelength of light used and numerical aperture of lens system'));
  });
  it('no true/false is made from it with the partial option', () => {
    const bank = JSON.parse(readFileSync('public/curriculum/cellstruct.json', 'utf8')).sets.flatMap((set) => set.questions);
    const target = bank.filter((q) => q.id === '1bmqjkt');
    assert.equal(target.length, 1);
    for (let i = 0; i < 300; i++) {
      for (const q of buildPractice(target, { course: 'cellstruct' }, 1, `seed-${i}`)) {
        if (q.id.endsWith(':tf')) assert.doesNotMatch(q.prompt, /wavelength of light used\s*\.?\s*(\(repeated\))?\.?$/i, q.prompt);
      }
    }
  });
});

describe('report 2026-10-31: legacy:cellstruct:7ekx8h:type', () => {
  it('"30x", "about 30x" and "30" are all accepted', () => {
    const accept = typedAcceptVariants('About 30x');
    for (const input of ['About 30x', 'about 30x', '30x', '30 X', '30', 'approx 30x'.replace('approx ', 'about ')]) assert.ok(typedAnswerMatches(input, accept), input);
    assert.ok(!typedAnswerMatches('300x', accept));
    assert.ok(!typedAnswerMatches('3', accept));
  });
});

// ---- Report follow-up 2026-10-31 (checked against the lectures) ----

const { heart } = await import('@/data/figures/cardiovascular-physiology');
const bank = (course) => JSON.parse(readFileSync(new URL(`../public/curriculum/${course}.json`, import.meta.url), 'utf8'));
const find = (course, id) => bank(course).sets.flatMap((set) => set.questions).find((q) => q.id === id);

it('heart diagram: mitral valve is the one under the left atrium, aortic valve is at the aortic root', () => {
  const spot = (id) => heart.spots.find((s) => s.id === id);
  // On the slide, 9 (mitral) is right of and below the left atrium (10); 8 (aortic) is left of it.
  assert.ok(spot('mitral').x > spot('left-atrium').x - 0.01 && spot('mitral').x > spot('aortic-valve').x);
  assert.ok(Math.abs(spot('mitral').x - 0.707) < 0.01 && Math.abs(spot('aortic-valve').x - 0.573) < 0.01);
});

it('algebra duality options are complete and distinct', () => {
  for (const id of ['1is6tdq', '1fd692', 'ppswc3', '18acuf3']) {
    const q = find('algebra', id);
    assert.equal(new Set(q.o).size, q.o.length, id);
    for (const option of q.o) assert.ok(option.length >= 8 && !/^\s*[∪∩′]/.test(option), `${id}: ${option}`);
  }
  assert.equal(find('algebra', '1is6tdq').o[2], '(A ∪ B) ∩ D');
  assert.equal(find('algebra', '1fd692').o[1], 'A ∪ ((B′ ∪ A) ∩ B)′ = U');
  assert.equal(find('algebra', 'ppswc3').o[0], 'A ∩ (B ∪ A) = A');
  assert.equal(find('algebra', '18acuf3').o[0], '(A ∩ B′)′ ∪ B = A′ ∪ B');
});

it('Big Bang: the one-second mark is stage 3 (quarks clump into protons and neutrons)', () => {
  const q = find('biolchem', 'm2rrr4');
  assert.equal(q.a, 1);
  assert.match(q.o[1], /Quarks clump together into protons and neutrons/);
});

it('medgen permeability question labels (a) and (b) in its options', () => {
  const q = find('medgen', '56v4sb');
  assert.match(q.o[0], /^\(a\)/);
  assert.match(q.o[1], /^\(b\)/);
});

it('typed set answers are right in any order, with or without brackets', () => {
  const accept = ['{−3, −2, −1, 0}'];
  assert.ok(typedAnswerMatches('{-3,-2,-1,0}'.replace(/-/g, '−'), accept));
  assert.ok(typedAnswerMatches('{0, −1, −2, −3}', accept));
  assert.ok(typedAnswerMatches('−1, 0, −3, −2', accept));
  assert.ok(!typedAnswerMatches('{−3, −2, −1}', accept));
  assert.ok(!typedAnswerMatches('{−3, −2, −1, 1}', accept));
});


it('no question bank has options that lost their symbols (scripts/audit-missing-symbols.mjs)', async () => {
  const { execFileSync } = await import('node:child_process');
  const out = execFileSync('node', ['scripts/audit-missing-symbols.mjs'], { encoding: 'utf8' });
  assert.match(out, /Total flagged: 0/, out);
});

it('cell-cycle keys follow the standard accounts (checked online 2026-10-31)', () => {
  const key = (id) => { const q = find('medgen', id); return q.o[q.a]; };
  assert.equal(key('1d86bov'), 'S phase');
  assert.equal(key('whyj6j'), 'Prophase');
  assert.equal(key('6z57du'), 'M phase');
  assert.equal(key('sise1b'), 'G₁ phase');
});

it('the Windows file-name question keeps "<" and explains the older-Windows list', () => {
  const q = find('compapp', '18dut31');
  assert.equal(q.o[q.a], '<');
  assert.match(q.e, /older Windows/);
  assert.match(q.e, /allows ' and !/);
});

describe('report 2026-11-02: legacy:cellstruct:1yhpue3:type', () => {
  it('the calculated 244 nm (or 0.24 µm) is accepted as well as 240nm', () => {
    const bank = JSON.parse(readFileSync('public/curriculum/cellstruct.json', 'utf8')).sets.flatMap((set) => set.questions);
    const target = bank.filter((q) => q.id === '1yhpue3');
    assert.equal(target.length, 1);
    let seen = 0;
    for (let i = 0; i < 400 && seen < 3; i++) {
      for (const q of buildPractice(target, { course: 'cellstruct' }, 1, `seed-${i}`)) {
        if (!q.id.endsWith(':type')) continue;
        seen++;
        for (const input of ['240nm', '240 nm', '244 nm', '244', '0.24 µm', '0.24 um']) assert.ok(typedAnswerMatches(input, q.accept), input);
        assert.ok(!typedAnswerMatches('120 nm', q.accept));
        assert.ok(!typedAnswerMatches('244 um', q.accept));
      }
    }
    assert.ok(seen > 0, 'a typed version was never made');
  });
});

it('typed signed numbers keep their sign (report on legacy:algebra:eme29e:type, 2026-11-03)', () => {
  const accept = typedAcceptVariants('x = -5/8');
  for (const input of ['x = -5/8', '-5/8', 'x=-5/8', 'x = −5/8', '-0.625', 'x = -0.625', '-5 / 8']) assert.ok(typedAnswerMatches(input, accept), input);
  for (const input of ['5/8', 'x = 5/8', '-8/5', '0.625']) assert.ok(!typedAnswerMatches(input, accept), input);
});
