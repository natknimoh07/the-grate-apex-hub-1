import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { app as grateApexApp, auth as grateApexAuth, db as grateApexDb } from '@/lib/firebase';

const liveQuizConfig = {
  apiKey: process.env.EXPO_PUBLIC_LIVE_QUIZ_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_LIVE_QUIZ_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_LIVE_QUIZ_FIREBASE_PROJECT_ID,
  appId: process.env.EXPO_PUBLIC_LIVE_QUIZ_FIREBASE_APP_ID,
  messagingSenderId: process.env.EXPO_PUBLIC_LIVE_QUIZ_FIREBASE_MESSAGING_SENDER_ID,
};

export const liveQuizFirebaseConfigured = Boolean(
  liveQuizConfig.apiKey && liveQuizConfig.authDomain && liveQuizConfig.projectId && liveQuizConfig.appId,
);

const liveQuizApp = liveQuizFirebaseConfigured
  ? getApps().find((candidate) => candidate.name === 'grateapex-live-quiz')
    ?? initializeApp(liveQuizConfig, 'grateapex-live-quiz')
  : grateApexApp;

export const liveQuizAuth = liveQuizFirebaseConfigured ? getAuth(liveQuizApp) : grateApexAuth;
export const liveQuizDb = liveQuizFirebaseConfigured ? getFirestore(liveQuizApp) : grateApexDb;
