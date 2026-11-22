import { type AtlasQuizResult } from '@/data/learning/atlas-quiz-rules';
import { atlasQuizXp } from '@/data/learning/xp-rules';
import { awardXp } from '@/data/progress';

// Records each finished 3D atlas quiz round. Its reward scales with the number of questions;
// the timestamp makes each completed round its own one-off XP source.
export async function recordAtlasQuiz(result: AtlasQuizResult, at = Date.now()): Promise<number> {
  return awardXp({
    sourceType: 'practice',
    sourceId: `atlas-quiz:${at}:${result.system}:${result.region ?? ''}:${result.side ?? ''}:${result.part ?? ''}`,
    amount: atlasQuizXp({ correct: result.score, total: result.total }),
    label: 'Anatomy atlas quiz',
  });
}
