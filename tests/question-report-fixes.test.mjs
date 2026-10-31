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
