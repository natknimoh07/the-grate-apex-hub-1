import { collection, doc, getDoc, onSnapshot, query, where, type Unsubscribe } from 'firebase/firestore';
import { signInWithCustomToken } from 'firebase/auth';

import { auth } from '@/lib/firebase';
import { liveQuizAuth, liveQuizDb, liveQuizFirebaseConfigured } from '@/lib/live-quiz-firebase';
import { API_BASE, LIVE_SITE_LABEL } from '@/lib/live-site';

export type LiveQuizPhase = 'lobby' | 'question' | 'reveal' | 'leaderboard' | 'ended';
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

export type LiveQuizHistoryItem = {
  code: string;
  title: string;
  questionCount: number;
  createdAt: number;
  endedAt: number;
};

export type LiveQuizHistoryQuestion = LiveQuizQuestion & {
  answerIndex: number;
};

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
  revealAt?: number;
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

let secondarySignIn: Promise<void> | null = null;
let secondaryUid: string | null = null;
let liveDataFailover: boolean | null = null;
let liveDataFailoverCheckedAt = 0;

export async function ensureLiveQuizSignIn() {
  if (!liveQuizFirebaseConfigured) return;
  await auth.authStateReady();
  const mainUser = auth.currentUser;
  if (!mainUser) throw new LiveQuizServerError(401, 'Sign in to use Live Quiz.');
  await liveQuizAuth.authStateReady();
  if (liveQuizAuth.currentUser?.uid === mainUser.uid) {
    secondaryUid = mainUser.uid;
    return;
  }
  if (secondarySignIn && secondaryUid === mainUser.uid) return secondarySignIn;
  secondaryUid = mainUser.uid;
  secondarySignIn = (async () => {
    const { customToken } = await call<{ customToken: string }>('client-token');
    await signInWithCustomToken(liveQuizAuth, customToken);
  })();
  try {
    await secondarySignIn;
  } finally {
    secondarySignIn = null;
  }
}

/** Whether the original Firestore project has been put into shared quota failover mode. */
export async function isLiveDataFailoverActive() {
  if (!liveQuizFirebaseConfigured) return false;
  if (liveDataFailover === true) return true;
  if (liveDataFailover === false && Date.now() - liveDataFailoverCheckedAt < 30_000) return false;
  await ensureLiveQuizSignIn();
  const status = await getDoc(doc(liveQuizDb, 'systemStatus', 'database'));
  liveDataFailover = status.exists() && status.data().failover === true;
  liveDataFailoverCheckedAt = Date.now();
  return liveDataFailover;
}

/** Every signed-in device watches the same switch, so one device cannot split XP from another. */
export function watchLiveDataFailover(onChange: (active: boolean) => void, onError?: (error: Error) => void): Unsubscribe {
  if (!liveQuizFirebaseConfigured) {
    onChange(false);
    return () => {};
  }
  return watchWithLiveQuizAuth(
    () => onSnapshot(doc(liveQuizDb, 'systemStatus', 'database'), (snapshot) => {
      liveDataFailover = snapshot.exists() && snapshot.data().failover === true;
      liveDataFailoverCheckedAt = Date.now();
      onChange(liveDataFailover);
    }, (error) => onError?.(error)),
    onError ?? (() => {})
  );
}

/** Permanently routes XP and live league reads/writes to GrAte Apex live after quota exhaustion. */
export async function activateLiveDataFailover(reason: string) {
  if (!liveQuizFirebaseConfigured) throw new LiveQuizServerError(503, 'The separate GrAte Apex live Firebase project is not configured.');
  await call<{ failover: boolean }>('activate-data-fallback', { reason: reason.slice(0, 80) });
  liveDataFailover = true;
  liveDataFailoverCheckedAt = Date.now();
}

/** Server-side write for the current learner's shared live league row in failover mode. */
export const saveLiveLeagueFallbackRow = (input: { week: string; tier: number; username: string; weeklyXp: number; league?: Record<string, unknown> }) =>
  call<{ saved: boolean }>('save-league-fallback-row', input);

export function isPrimaryFirestoreQuotaError(error: unknown) {
  const value = error as { code?: unknown; message?: unknown } | null;
  return String(value?.code ?? '').toLowerCase() === 'resource-exhausted'
    || /quota exceeded|resource_exhausted|429/i.test(String(value?.message ?? error ?? ''));
}

function watchWithLiveQuizAuth<T>(subscribe: () => Unsubscribe, onError: (error: Error) => void): Unsubscribe {
  let active = true;
  let unsubscribe: Unsubscribe | undefined;
  void ensureLiveQuizSignIn()
    .then(() => { if (active) unsubscribe = subscribe(); })
    .catch((error) => { if (active) onError(error instanceof Error ? error : new Error('Live Quiz connection failed.')); });
  return () => {
    active = false;
    unsubscribe?.();
  };
}

export const getLiveQuizCatalog = () => call<{ courses: LiveQuizCourse[] }>('catalog');
export const getLiveQuizQuestions = (course: string, topic?: string, search?: string) => call<{ questions: LiveQuizQuestionSummary[] }>('questions', { course, topic, search });
export const createLiveQuiz = (input: { title: string; durationSeconds: number; questionKeys: string[] }) => call<{ code: string }>('create', input);
export const getLiveQuizHostSession = (code: string) => call<{ session: LiveQuizSession; questions: LiveQuizQuestion[] }>('host-session', { code });
export const getLiveQuizHistory = () => call<{ quizzes: LiveQuizHistoryItem[] }>('history');
export const getLiveQuizHistoryDetail = (code: string) => call<{ quiz: LiveQuizHistoryItem; questions: LiveQuizHistoryQuestion[] }>('history-detail', { code });
export const joinLiveQuiz = (code: string, displayName: string) => call<{ code: string }>('join', { code, displayName });
export const startLiveQuizQuestion = (code: string) => call<{ now: number }>('start', { code });
export const answerLiveQuiz = (code: string, choiceIndex: number) => call<{ accepted: boolean; now: number }>('answer', { code, choiceIndex });
export const getMyLiveQuizResult = (code: string) => call<{ answered: boolean; correct: boolean; points: number }>('my-result', { code });
export const showLiveQuizResults = (code: string) => call<{ entries: LiveQuizEntry[] }>('reveal', { code });
export const showLiveQuizLeaderboard = (code: string) => call<{ entries: LiveQuizEntry[] }>('leaderboard', { code });
export const nextLiveQuizQuestion = (code: string) => call<void>('next', { code });
export const autoAdvanceLiveQuizQuestion = (code: string) => call<{ advanced: boolean; ended?: boolean }>('auto-advance', { code });
export const endLiveQuiz = (code: string) => call<void>('end', { code });

export function watchLiveQuiz(code: string, onChange: (session: LiveQuizSession | null) => void, onError: (error: Error) => void): Unsubscribe {
  return watchWithLiveQuizAuth(() => onSnapshot(doc(liveQuizDb, 'liveQuizSessions', code), (snapshot) => onChange(snapshot.exists() ? (snapshot.data() as LiveQuizSession) : null), onError), onError);
}

export function watchLiveQuizParticipants(code: string, onChange: (participants: LiveQuizParticipant[]) => void, onError: (error: Error) => void): Unsubscribe {
  return watchWithLiveQuizAuth(() => onSnapshot(query(collection(liveQuizDb, 'liveQuizParticipants'), where('sessionCode', '==', code)), (snapshot) => {
    onChange(snapshot.docs.map((item) => item.data() as LiveQuizParticipant).sort((first, second) => second.score - first.score || first.joinedAt - second.joinedAt));
  }, onError), onError);
}
