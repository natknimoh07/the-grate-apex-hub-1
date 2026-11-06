// A typed answer that is not in the answer key is checked by the AI (owner, 2026-11-06:
// "when a user types an answer and it is correct even though it is not in our answer key, the
// AI marks it as correct if it is correct; if the learner still wants to argue, they report it").
// Only a clear "same" from the AI counts; a failure, a timeout or "different" leaves the answer wrong.
import { aiLessonForQuestion } from '@/data/ai-context';
import { acceptTypedAnswer, type Answer, isAnswerCorrect, type Question } from '@/data/questions';
import { judgeTypedAnswer } from '@/lib/ai-study-api';

export const JUDGE_TIMEOUT_MS = 9000;
const asked = new Set<string>();

/** True when the question is a typed one, the answer is wrong by the key, and has not been checked yet. */
export function needsAiJudge(question: Question, answer: Answer | undefined): boolean {
  return question.type === 'type' && typeof answer === 'string' && answer.trim().length > 0 && !isAnswerCorrect(question, answer) && !asked.has(`${question.id}|${answer.trim().toLowerCase()}`);
}

/** Asks the AI once per question and answer; when it says "same", the answer now counts as correct everywhere. */
export async function judgeAnswerWithAi(question: Question, answer: Answer | undefined): Promise<void> {
  if (question.type !== 'type' || !needsAiJudge(question, answer)) return;
  const typed = (answer as string).trim();
  asked.add(`${question.id}|${typed.toLowerCase()}`);
  const work = (async () => {
    const lesson = await aiLessonForQuestion(question).catch(() => null);
    return judgeTypedAnswer(lesson, { prompt: question.prompt, accept: question.accept, answer: typed, explanation: question.explanation });
  })();
  const result = await Promise.race([work, new Promise<null>((resolve) => setTimeout(() => resolve(null), JUDGE_TIMEOUT_MS))]);
  if (result?.verdict === 'same') acceptTypedAnswer(question.id, typed, result.reason);
  else if (!result) asked.delete(`${question.id}|${typed.toLowerCase()}`); // could not check: allow another try
}
