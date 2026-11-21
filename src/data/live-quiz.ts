import { collection, doc, onSnapshot, query, where, type Unsubscribe } from 'firebase/firestore';

import { auth, db } from '@/lib/firebase';
import { API_BASE, LIVE_SITE_LABEL } from '@/lib/live-site';

export type LiveQuizPhase = 'lobby' | 'question' | 'leaderboard' | 'ended';
export type LiveQuizStatus = 'lobby' | 'live' | 'ended';

export type LiveQuizQuestion = {
  position?: number;
  key: string;
  course?: string;
  topic?: string;
  level?: 'easy' | 'medium' | 'hard' | null;
  prompt: string;
  options: string[];
};

export type LiveQuizQuestionSummary = Pick<LiveQuizQuestion, 'key' | 'course' | 'topic' | 'level' | 'prompt'>;

export type LiveQuizCourse = {
  id: string;
  name: string;
  total: number;
  topics: { id: string; title: string; easy: number; medium: number; hard: number; unrated: number }[];
};

export type LiveQuizEntry = { rank: number; displayName: string; score: number };

export type LiveQuizSession = {
  code: string;
  title: string;
  hostUid: string;
  status: LiveQuizStatus;
  phase: LiveQuizPhase;
  currentIndex: number;
  questionCount: number;
  durationSeconds: number;
  currentQuestion: LiveQuizQuestion | null;
  questionStartedAt: number;
  leaderboardAt?: number;
  updatedAt?: number;
  leaderboard: LiveQuizEntry[];
};

export type LiveQuizParticipant = {
  uid: string;
  displayName: string;
  score: number;
  joinedAt: number;
};

export class LiveQuizServerError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

async function call<T>(action: string, body: Record<string, unknown> = {}): Promise<T> {
  await auth.authStateReady();
  const token = await auth.currentUser?.getIdToken().catch(() => undefined);
  if (!token) throw new LiveQuizServerError(401, 'Sign in to use Live Quiz.');
  let response: Response;
  try {
    response = await fetch(`${API_BASE}/api/battle`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
      body: JSON.stringify({ action: 'live-quiz', liveAction: action, ...body }),
    });
  } catch {
    throw new LiveQuizServerError(0, 'No connection to the Live Quiz server. Check your internet and try again.');
  }
  const data = await response.json().catch(() => null);
  if (!data) throw new LiveQuizServerError(response.status, `Live Quiz runs on the live app (${LIVE_SITE_LABEL}).`);
  if (!response.ok) throw new LiveQuizServerError(response.status, String(data.error ?? 'The Live Quiz server had a problem. Try again.'));
  return data as T;
}

export const getLiveQuizCatalog = () => call<{ courses: LiveQuizCourse[] }>('catalog');
export const getLiveQuizQuestions = (course: string, topic?: string, search?: string) => call<{ questions: LiveQuizQuestionSummary[] }>('questions', { course, topic, search });
export const createLiveQuiz = (input: { title: string; durationSeconds: number; questionKeys: string[] }) => call<{ code: string }>('create', input);
export const getLiveQuizHostSession = (code: string) => call<{ session: LiveQuizSession; questions: LiveQuizQuestion[] }>('host-session', { code });
export const joinLiveQuiz = (code: string, displayName: string) => call<{ code: string }>('join', { code, displayName });
export const startLiveQuizQuestion = (code: string) => call<{ now: number }>('start', { code });
export const answerLiveQuiz = (code: string, choiceIndex: number) => call<{ accepted: boolean; now: number }>('answer', { code, choiceIndex });
export const showLiveQuizLeaderboard = (code: string) => call<{ entries: LiveQuizEntry[] }>('leaderboard', { code });
export const nextLiveQuizQuestion = (code: string) => call<void>('next', { code });
export const autoAdvanceLiveQuizQuestion = (code: string) => call<{ advanced: boolean; ended?: boolean }>('auto-advance', { code });
export const endLiveQuiz = (code: string) => call<void>('end', { code });

export function watchLiveQuiz(code: string, onChange: (session: LiveQuizSession | null) => void, onError: (error: Error) => void): Unsubscribe {
  return onSnapshot(doc(db, 'liveQuizSessions', code), (snapshot) => onChange(snapshot.exists() ? (snapshot.data() as LiveQuizSession) : null), onError);
}

export function watchLiveQuizParticipants(code: string, onChange: (participants: LiveQuizParticipant[]) => void, onError: (error: Error) => void): Unsubscribe {
  return onSnapshot(query(collection(db, 'liveQuizParticipants'), where('sessionCode', '==', code)), (snapshot) => {
    onChange(snapshot.docs.map((item) => item.data() as LiveQuizParticipant).sort((first, second) => second.score - first.score || first.joinedAt - second.joinedAt));
  }, onError);
}
