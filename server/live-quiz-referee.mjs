export class LiveQuizError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export const LIVE_QUIZ_POINTS = { base: 500, speed: 500 };

export function scoreLiveAnswer({ correct, answeredAt, startedAt, durationSeconds }) {
  if (!correct || answeredAt > startedAt + durationSeconds * 1000) return 0;
  const pace = Math.max(0, 1 - (answeredAt - startedAt) / (durationSeconds * 1000));
  return LIVE_QUIZ_POINTS.base + Math.round(LIVE_QUIZ_POINTS.speed * pace);
}

export function leaderboard(entries) {
  return [...entries]
    .sort((first, second) => second.score - first.score || first.joinedAt - second.joinedAt)
    .map((entry, index) => ({ rank: index + 1, displayName: entry.displayName, score: entry.score }));
}
