import assert from 'node:assert/strict';
import { test } from 'node:test';

import { judgeBlock, parseJudge, JUDGE_RULES } from '../api/_judge.mjs';

const { acceptTypedAnswer, aiAcceptedReason, isAnswerCorrect } = await import('@/data/questions');

test('the judge is sent the question, the key and the typed answer', () => {
  const block = judgeBlock({ prompt: 'Prefix?', accept: ['n- (normal)'], answer: 'normal', explanation: 'Unbranched: n-' });
  assert.match(block, /QUESTION/);
  assert.match(block, /- n- \(normal\)/);
  assert.match(block, /normal/);
  assert.match(block, /EXPLANATION/);
  assert.equal(judgeBlock({ prompt: 'Q', accept: ['a'], answer: '  ' }), null);
  assert.equal(judgeBlock({ prompt: 'Q', accept: [], answer: 'x' }), null);
});

test('only same / different with a reason is accepted from the AI', () => {
  assert.deepEqual(parseJudge('```json\n{"verdict":"same","reason":"Your answer names the same prefix."}\n```'), { verdict: 'same', reason: 'Your answer names the same prefix.' });
  assert.equal(parseJudge('{"verdict":"different","reason":"iso- is a branched prefix."}').verdict, 'different');
  assert.equal(parseJudge('{"verdict":"yes","reason":"x"}'), null);
  assert.equal(parseJudge('{"verdict":"same"}'), null);
  assert.equal(parseJudge('nope'), null);
  assert.match(JUDGE_RULES, /wrong answer must never be marked correct/);
});

test('an AI-accepted typed answer counts as correct, others stay wrong', () => {
  const question = { id: 'legacy:test:x:type', type: 'type', prompt: 'Q', concept: 'c', accept: ['n- (normal)'] };
  assert.equal(isAnswerCorrect(question, 'iso'), false);
  assert.equal(isAnswerCorrect(question, 'straight-chain prefix'), false);
  acceptTypedAnswer(question.id, 'straight-chain prefix', 'Your answer means the same.');
  assert.equal(isAnswerCorrect(question, 'Straight-chain prefix'), true);
  assert.equal(aiAcceptedReason(question.id, 'straight-chain prefix'), 'Your answer means the same.');
  assert.equal(isAnswerCorrect(question, 'iso'), false);
  assert.equal(aiAcceptedReason('other:id', 'straight-chain prefix'), null);
});
