// AI Questions in a lesson (owner, 2026-11-04): sets of 5, 10, 15 or 20 questions, and
// finishing one pays that many XP, for at most 3 sets per lesson a day.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const { aiQuestionsXp, XP_RULES } = await import('@/data/learning/xp-rules');

describe('AI questions XP', () => {
  it('pays one XP per question in the set', () => {
    assert.deepEqual([5, 10, 15, 20].map(aiQuestionsXp), [5, 10, 15, 20]);
    assert.equal(aiQuestionsXp(0), 0);
  });
  it('limits the sets paid per lesson a day', () => {
    assert.equal(XP_RULES.aiQuestions.setsPerLessonPerDay, 3);
  });
  it('offers 5, 10, 15 and 20, and the server makes up to 20', () => {
    const panel = readFileSync('src/components/learning/ai-study.tsx', 'utf8');
    assert.match(panel, /const QUESTION_COUNTS = \[5, 10, 15, 20\]/);
    assert.match(readFileSync('api/ai.mjs', 'utf8'), /const MAX_QUESTIONS = 20;/);
  });
});
