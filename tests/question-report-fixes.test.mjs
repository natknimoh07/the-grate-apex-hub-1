// Regression tests for fixes made after learners' question reports (2026-10-31).
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

import { typedAnswerMatches } from '../src/data/questions.ts';
import { buildPractice } from '../src/data/legacy-questions.ts';
import { heart } from '../src/data/figures/cardiovascular-physiology.ts';

const bank = (course) => JSON.parse(readFileSync(new URL(`../public/curriculum/${course}.json`, import.meta.url), 'utf8'));
const find = (course, id) => bank(course).sets.flatMap((set) => set.questions).find((q) => q.id === id);

test('heart diagram: mitral valve is the one under the left atrium, aortic valve is at the aortic root', () => {
  const spot = (id) => heart.spots.find((s) => s.id === id);
  // On the slide, 9 (mitral) is right of and below the left atrium (10); 8 (aortic) is left of it.
  assert.ok(spot('mitral').x > spot('left-atrium').x - 0.01 && spot('mitral').x > spot('aortic-valve').x);
  assert.ok(Math.abs(spot('mitral').x - 0.707) < 0.01 && Math.abs(spot('aortic-valve').x - 0.573) < 0.01);
});

test('algebra duality options are complete and distinct', () => {
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

test('Big Bang: the one-second mark is stage 3 (quarks clump into protons and neutrons)', () => {
  const q = find('biolchem', 'm2rrr4');
  assert.equal(q.a, 1);
  assert.match(q.o[1], /Quarks clump together into protons and neutrons/);
});

test('medgen permeability question labels (a) and (b) in its options', () => {
  const q = find('medgen', '56v4sb');
  assert.match(q.o[0], /^\(a\)/);
  assert.match(q.o[1], /^\(b\)/);
});

test('typed set answers are right in any order, with or without brackets', () => {
  const accept = ['{−3, −2, −1, 0}'];
  assert.ok(typedAnswerMatches('{-3,-2,-1,0}'.replace(/-/g, '−'), accept));
  assert.ok(typedAnswerMatches('{0, −1, −2, −3}', accept));
  assert.ok(typedAnswerMatches('−1, 0, −3, −2', accept));
  assert.ok(!typedAnswerMatches('{−3, −2, −1}', accept));
  assert.ok(!typedAnswerMatches('{−3, −2, −1, 1}', accept));
});

test('typed answers: a leading "about" is optional', () => {
  const q = find('cellstruct', '7ekx8h');
  const set = buildPractice([q], { course: 'cellstruct' }, 1, 'x');
  assert.ok(set.length === 1);
  for (let i = 0; i < 400; i++) {
    const [item] = buildPractice([q], { course: 'cellstruct' }, 1, `seed-${i}`);
    if (item.type === 'type') {
      assert.ok(typedAnswerMatches('About 30x', item.accept) && typedAnswerMatches('30x', item.accept));
      return;
    }
  }
  assert.fail('no typed version was produced');
});

test('true/false never shows a partly-true wrong option as false (resolving power)', () => {
  const q = find('cellstruct', '1bmqjkt');
  let seen = 0;
  for (let i = 0; i < 600; i++) {
    const [item] = buildPractice([q], { course: 'cellstruct' }, 1, `seed-${i}`);
    if (item.id.endsWith(':tf')) {
      seen++;
      // A statement marked False must use the really wrong option, never a part of the full answer.
      if (item.answer === 1) assert.match(item.prompt, /refractive index/, item.prompt);
      else assert.match(item.prompt, /wavelength of light used and numerical aperture/, item.prompt);
    }
  }
  assert.ok(seen > 0, 'expected some true/false versions');
});
