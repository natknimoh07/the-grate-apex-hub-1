import { readFileSync } from 'node:fs';

import { leaderboard, LiveQuizError, scoreLiveAnswer } from '../server/live-quiz-referee.mjs';

const codeAlphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const codePattern = /^[A-Z2-9]{6}$/;
const LEADERBOARD_DISPLAY_MS = 5_000;
const bankDirectory = new URL('../server/live-quiz-bank/', import.meta.url);
let cachedCourses = null;
const cachedCourseBanks = new Map();

function catalog() {
  if (cachedCourses) return cachedCourses;
  try {
    const data = JSON.parse(readFileSync(new URL('index.json', bankDirectory), 'utf8'));
    cachedCourses = Array.isArray(data.courses) ? data.courses : [];
    return cachedCourses;
  } catch {
    throw new LiveQuizError(503, 'The Live Quiz question bank is being prepared. Try again in a moment.');
  }
}

function courseBank(course) {
  const found = cachedCourseBanks.get(course);
  if (found) return found;
  if (!catalog().some((item) => item.id === course)) throw new LiveQuizError(400, 'Choose a course.');
  try {
    const data = JSON.parse(readFileSync(new URL(`${encodeURIComponent(course)}.json`, bankDirectory), 'utf8'));
    const questions = Array.isArray(data.questions) ? data.questions : [];
    const bank = { questions, byKey: new Map(questions.map((question) => [question.key, question])) };
    cachedCourseBanks.set(course, bank);
    return bank;
  } catch {
    throw new LiveQuizError(503, 'The Live Quiz question bank is being prepared. Try again in a moment.');
  }
}

function text(value, max) {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : '';
}

function codeOf(value) {
  const code = text(value, 6).toUpperCase();
  if (!codePattern.test(code)) throw new LiveQuizError(400, 'Enter the six-character live quiz code.');
  return code;
}

function questionFor(key) {
  const separator = key.indexOf('/');
  const course = separator < 0 ? '' : key.slice(0, separator);
  const question = course ? courseBank(course).byKey.get(key) : null;
  if (!question) throw new LiveQuizError(404, 'One selected question is no longer available. Choose it again.');
  return question;
}

function publicQuestion(question, position) {
  return { position, key: question.key, prompt: question.prompt, options: question.options };
}

async function signedIn(admin, req) {
  const token = text(String(req.headers.authorization ?? '').replace(/^Bearer\s+/i, ''), 5000);
  if (!token) throw new LiveQuizError(401, 'Please sign in again.');
  try {
    return await admin.auth.verifyIdToken(token);
  } catch {
    throw new LiveQuizError(401, 'Please sign in again.');
  }
}

async function session(admin, code) {
  const found = await admin.db.doc(`liveQuizSessions/${code}`).get();
  if (!found.exists) throw new LiveQuizError(404, 'That live quiz could not be found.');
  return found.data();
}

async function hostSession(admin, uid, code) {
  const found = await session(admin, code);
  if (found.hostUid !== uid) throw new LiveQuizError(403, 'This live quiz belongs to another host.');
  return found;
}

async function participantRows(admin, code) {
  const result = await admin.db.collection('liveQuizParticipants').where('sessionCode', '==', code).get();
  return result.docs.map((item) => item.data());
}

async function writeLeaderboard(admin, current) {
  const rows = await participantRows(admin, current.code);
  const entries = leaderboard(rows.map((row) => ({
    displayName: row.displayName,
    score: Number(row.score ?? 0),
    joinedAt: Number(row.joinedAt ?? 0),
  }))).slice(0, 50);
  await admin.db.doc(`liveQuizSessions/${current.code}`).update({ leaderboard: entries, updatedAt: Date.now() });
  return entries;
}

function publicHostQuestions(privateQuestions) {
  return privateQuestions.map((question, position) => publicQuestion(question, position));
}

async function newCode(admin) {
  for (let attempt = 0; attempt < 12; attempt += 1) {
    let code = '';
    for (let index = 0; index < 6; index += 1) {
      code += codeAlphabet[Math.floor(Math.random() * codeAlphabet.length)];
    }
    if (!(await admin.db.doc(`liveQuizSessions/${code}`).get()).exists) return code;
  }
  throw new LiveQuizError(503, 'Could not make a new session code. Please try again.');
}

async function actionCatalog() {
  return { courses: catalog() };
}

async function actionQuestions(body) {
  const course = text(body.course, 80);
  const topic = text(body.topic, 100);
  const search = text(body.search, 100).toLowerCase();
  const questions = courseBank(course).questions
    .filter((item) => !topic || item.topic === topic)
    .filter((item) => !search || `${item.prompt} ${item.topic}`.toLowerCase().includes(search))
    .slice(0, 200)
    .map((item) => ({ key: item.key, course: item.course, topic: item.topic, level: item.level, prompt: item.prompt }));
  return { questions };
}

async function actionCreate(admin, uid, body) {
  const title = text(body.title, 80);
  const durationSeconds = Number(body.durationSeconds);
  const refs = Array.isArray(body.questionKeys) ? [...new Set(body.questionKeys.map((item) => text(item, 220)).filter(Boolean))] : [];
  if (!title) throw new LiveQuizError(400, 'Give the live quiz a title.');
  if (!Number.isInteger(durationSeconds) || durationSeconds < 5 || durationSeconds > 180) {
    throw new LiveQuizError(400, 'Set an answer time between 5 and 180 seconds.');
  }
  if (refs.length < 1 || refs.length > 30) throw new LiveQuizError(400, 'Select between 1 and 30 questions.');
  const questions = refs.map(questionFor);
  const code = await newCode(admin);
  const now = Date.now();
  await admin.db.doc(`liveQuizKeys/${code}`).set({
    code,
    questions: questions.map((question) => ({ ...publicQuestion(question, 0), answer: question.answer })),
    createdAt: now,
  }, { exists: false });
  await admin.db.doc(`liveQuizSessions/${code}`).set({
    code,
    title,
    hostUid: uid,
    status: 'lobby',
    phase: 'lobby',
    currentIndex: 0,
    questionCount: questions.length,
    durationSeconds,
    questionRefs: questions.map((question) => question.key),
    currentQuestion: null,
    questionStartedAt: 0,
    leaderboard: [],
    createdAt: now,
    updatedAt: now,
  }, { exists: false });
  return { code };
}

async function actionHostSession(admin, uid, body) {
  const current = await hostSession(admin, uid, codeOf(body.code));
  const keys = await admin.db.doc(`liveQuizKeys/${current.code}`).get();
  if (!keys.exists) throw new LiveQuizError(500, 'The private answer key is missing for this session.');
  return { session: current, questions: publicHostQuestions(keys.data().questions ?? []) };
}

async function actionJoin(admin, uid, body) {
  const code = codeOf(body.code);
  const current = await session(admin, code);
  if (current.status === 'ended') throw new LiveQuizError(409, 'This live quiz has ended.');
  const profile = await admin.db.doc(`users/${uid}`).get();
  const profileName = text(profile.data?.()?.displayName || profile.data?.()?.username, 32);
  const displayName = text(body.displayName, 32) || profileName;
  if (!displayName) throw new LiveQuizError(400, 'Enter the name you want to use in the quiz.');
  const ref = admin.db.doc(`liveQuizParticipants/${code}_${uid}`);
  const found = await ref.get();
  const now = Date.now();
  await ref.set({
    sessionCode: code,
    uid,
    displayName,
    score: Number(found.data?.()?.score ?? 0),
    joinedAt: Number(found.data?.()?.joinedAt ?? now),
    updatedAt: now,
  });
  return { code };
}

async function actionStart(admin, uid, body) {
  const current = await hostSession(admin, uid, codeOf(body.code));
  if (current.status === 'ended') throw new LiveQuizError(409, 'This live quiz has ended.');
  if (current.currentIndex >= current.questionCount) throw new LiveQuizError(409, 'There are no questions left.');
  const keys = await admin.db.doc(`liveQuizKeys/${current.code}`).get();
  const question = keys.data?.()?.questions?.[current.currentIndex];
  if (!question) throw new LiveQuizError(500, 'This question is unavailable.');
  const now = Date.now();
  await admin.db.doc(`liveQuizSessions/${current.code}`).update({
    status: 'live',
    phase: 'question',
    currentQuestion: publicQuestion(question, current.currentIndex),
    questionStartedAt: now,
    updatedAt: now,
  });
  return { now };
}

async function actionAnswer(admin, uid, body) {
  const code = codeOf(body.code);
  const choiceIndex = Number(body.choiceIndex);
  const current = await session(admin, code);
  if (current.status !== 'live' || current.phase !== 'question' || !current.currentQuestion) {
    throw new LiveQuizError(409, 'Answers are not open right now.');
  }
  if (!Number.isInteger(choiceIndex) || choiceIndex < 0 || choiceIndex >= current.currentQuestion.options.length) {
    throw new LiveQuizError(400, 'Choose one of the available answers.');
  }
  const participant = await admin.db.doc(`liveQuizParticipants/${code}_${uid}`).get();
  if (!participant.exists) throw new LiveQuizError(403, 'Join this live quiz before answering.');
  const answerRef = admin.db.doc(`liveQuizAnswers/${code}_${current.currentIndex}_${uid}`);
  if ((await answerRef.get()).exists) throw new LiveQuizError(409, 'Your answer is already locked in.');
  const keys = await admin.db.doc(`liveQuizKeys/${code}`).get();
  const question = keys.data?.()?.questions?.[current.currentIndex];
  if (!question) throw new LiveQuizError(500, 'This question is unavailable.');
  const now = Date.now();
  const correct = choiceIndex === question.answer;
  const points = scoreLiveAnswer({ correct, answeredAt: now, startedAt: current.questionStartedAt, durationSeconds: current.durationSeconds });
  await answerRef.set({ code, uid, position: current.currentIndex, choiceIndex, correct, points, answeredAt: now }, { exists: false });
  const priorScore = Number(participant.data().score ?? 0);
  await participant.ref.update({ score: priorScore + points, updatedAt: now });
  return { accepted: true, now };
}

async function actionLeaderboard(admin, uid, body) {
  const current = await hostSession(admin, uid, codeOf(body.code));
  if (current.status === 'ended') throw new LiveQuizError(409, 'This live quiz has ended.');
  const entries = await writeLeaderboard(admin, current);
  const now = Date.now();
  await admin.db.doc(`liveQuizSessions/${current.code}`).update({ phase: 'leaderboard', leaderboard: entries, leaderboardAt: now, updatedAt: now });
  return { entries };
}

async function actionAutoAdvance(admin, uid, body) {
  const current = await hostSession(admin, uid, codeOf(body.code));
  if (current.status === 'ended' || current.phase !== 'leaderboard') return { advanced: false };
  const leaderboardAt = Number(current.leaderboardAt ?? current.updatedAt ?? Date.now());
  if (Date.now() - leaderboardAt < LEADERBOARD_DISPLAY_MS) return { advanced: false };

  const next = current.currentIndex + 1;
  const now = Date.now();
  if (next >= current.questionCount) {
    await admin.db.doc(`liveQuizSessions/${current.code}`).update({ status: 'ended', phase: 'ended', currentQuestion: null, questionStartedAt: 0, updatedAt: now });
    return { advanced: true, ended: true };
  }

  const keys = await admin.db.doc(`liveQuizKeys/${current.code}`).get();
  if (!keys.exists) throw new LiveQuizError(500, 'The private answer key is missing for this session.');
  const question = keys.data()?.questions?.[next];
  if (!question) throw new LiveQuizError(500, 'This question is unavailable.');
  await admin.db.doc(`liveQuizSessions/${current.code}`).update({
    status: 'live',
    phase: 'question',
    currentIndex: next,
    currentQuestion: publicQuestion(question, next),
    questionStartedAt: now,
    leaderboardAt: 0,
    updatedAt: now,
  });
  return { advanced: true, ended: false };
}

async function actionNext(admin, uid, body) {
  const current = await hostSession(admin, uid, codeOf(body.code));
  if (current.status === 'ended') throw new LiveQuizError(409, 'This live quiz has ended.');
  const next = current.currentIndex + 1;
  if (next >= current.questionCount) {
    const entries = await writeLeaderboard(admin, current);
    await admin.db.doc(`liveQuizSessions/${current.code}`).update({ status: 'ended', phase: 'ended', leaderboard: entries, endedAt: Date.now(), updatedAt: Date.now() });
  } else {
    await admin.db.doc(`liveQuizSessions/${current.code}`).update({ currentIndex: next, phase: 'lobby', currentQuestion: null, questionStartedAt: 0, updatedAt: Date.now() });
  }
}

async function actionEnd(admin, uid, body) {
  const current = await hostSession(admin, uid, codeOf(body.code));
  const entries = await writeLeaderboard(admin, current);
  await admin.db.doc(`liveQuizSessions/${current.code}`).update({ status: 'ended', phase: 'ended', leaderboard: entries, endedAt: Date.now(), updatedAt: Date.now() });
}

export async function handleLiveQuiz({ req, res, admin, body }) {
  try {
    const token = await signedIn(admin, req);
    const action = text(body.liveAction, 40);
    if (action === 'catalog') {
      return res.status(200).json(await actionCatalog());
    }
    if (action === 'questions') {
      return res.status(200).json(await actionQuestions(body));
    }
    if (action === 'create') return res.status(200).json(await actionCreate(admin, token.uid, body));
    if (action === 'host-session') return res.status(200).json(await actionHostSession(admin, token.uid, body));
    if (action === 'join') return res.status(200).json(await actionJoin(admin, token.uid, body));
    if (action === 'start') return res.status(200).json(await actionStart(admin, token.uid, body));
    if (action === 'answer') return res.status(200).json(await actionAnswer(admin, token.uid, body));
    if (action === 'leaderboard') return res.status(200).json(await actionLeaderboard(admin, token.uid, body));
    if (action === 'next') return res.status(200).json(await actionNext(admin, token.uid, body));
    if (action === 'auto-advance') return res.status(200).json(await actionAutoAdvance(admin, token.uid, body));
    if (action === 'end') return res.status(200).json(await actionEnd(admin, token.uid, body));
    throw new LiveQuizError(400, 'Unknown Live Quiz action.');
  } catch (error) {
    if (error instanceof LiveQuizError) return res.status(error.status).json({ error: error.message });
    console.error('Live Quiz failed:', error);
    return res.status(500).json({ error: 'The Live Quiz server had a problem. Try again.' });
  }
}
