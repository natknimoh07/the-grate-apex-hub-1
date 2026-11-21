import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { BackLink } from '@/components/learning/nav-bits';
import { Button } from '@/components/ui/button';
import { Card, Interactive } from '@/components/ui/interactive';
import { Columns, PageHeader, Screen, SectionHeader } from '@/components/ui/screen';
import { ErrorScreen, LoadingState } from '@/components/ui/state-views';
import { Text } from '@/components/ui/text';
import { Type, type ThemeColors } from '@/constants/theme';
import {
  autoAdvanceLiveQuizQuestion,
  createLiveQuiz,
  endLiveQuiz,
  getLiveQuizCatalog,
  getLiveQuizHostSession,
  getLiveQuizQuestions,
  nextLiveQuizQuestion,
  showLiveQuizResults,
  showLiveQuizLeaderboard,
  startLiveQuizQuestion,
  watchLiveQuiz,
  watchLiveQuizParticipants,
  type LiveQuizCourse,
  type LiveQuizParticipant,
  type LiveQuizQuestion,
  type LiveQuizQuestionSummary,
  type LiveQuizSession,
} from '@/data/live-quiz';
import { friendlyError } from '@/lib/errors';
import { LIVE_SITE } from '@/lib/live-site';
import { param, routes } from '@/lib/routes';
import { useAuth } from '@/hooks/use-auth';
import { useThemedStyles } from '@/hooks/use-theme';

const RESULT_REVEAL_MS = 4_000;
const LEADERBOARD_DISPLAY_MS = 10_000;

export default function LiveQuizHostScreen() {
  const params = useLocalSearchParams<{ code?: string | string[] }>();
  const code = param(params.code);
  const { user, loading } = useAuth();
  if (loading) return <LoadingState label="Opening Live Quiz…" />;
  if (!user) return <ErrorScreen title="Sign in to host" message="Sign in to create and control a Live Quiz session." primary={{ label: 'Sign in', onPress: () => router.replace('/login') }} />;
  return code ? <HostRoom code={code} /> : <HostBuilder />;
}

function HostBuilder() {
  const styles = useThemedStyles(createStyles);
  const [courses, setCourses] = useState<LiveQuizCourse[]>([]);
  const [courseId, setCourseId] = useState('');
  const [topicId, setTopicId] = useState('');
  const [editingCourse, setEditingCourse] = useState(true);
  const [editingTopic, setEditingTopic] = useState(true);
  const [questions, setQuestions] = useState<LiveQuizQuestionSummary[]>([]);
  const [selected, setSelected] = useState<LiveQuizQuestionSummary[]>([]);
  const [questionCount, setQuestionCount] = useState(10);
  const [title, setTitle] = useState('GrateApex Live Quiz');
  const [durationSeconds, setDurationSeconds] = useState(30);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [problem, setProblem] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    void getLiveQuizCatalog()
      .then(({ courses: found }) => {
        if (!live) return;
        setCourses(found);
      })
      .catch((error) => { if (live) setProblem(friendlyError(error, 'The question bank could not be loaded.')); })
      .finally(() => { if (live) setLoading(false); });
    return () => { live = false; };
  }, []);

  useEffect(() => {
    let live = true;
    setQuestions([]);
    if (!courseId) return () => { live = false; };
    void getLiveQuizQuestions(courseId, topicId || undefined)
      .then(({ questions: found }) => { if (live) setQuestions(found); })
      .catch((error) => { if (live) setProblem(friendlyError(error, 'Questions could not be loaded.')); });
    return () => { live = false; };
  }, [courseId, topicId]);

  const course = courses.find((item) => item.id === courseId);
  const selectedKeys = useMemo(() => new Set(selected.map((item) => item.key)), [selected]);
  const availableCount = Math.min(30, questions.length);
  const countOptions = [...new Set([5, 10, 15, 20, 30, ...(availableCount > 0 && availableCount < 5 ? [availableCount] : [])])];

  function chooseCourse(id: string) {
    setCourseId(id);
    setTopicId('');
    setEditingCourse(false);
    setEditingTopic(true);
  }

  function chooseTopic(id: string) {
    setTopicId(id);
    setEditingTopic(false);
  }

  function toggle(question: LiveQuizQuestionSummary) {
    const selectedNow = selectedKeys.has(question.key);
    if (!selectedNow && selected.length >= questionCount) {
      setProblem(`This quiz is set for ${questionCount} questions. Increase the question count or remove one first.`);
      return;
    }
    setSelected((current) => current.some((item) => item.key === question.key)
      ? current.filter((item) => item.key !== question.key)
      : [...current, question]);
  }

  function removeQuestion(key: string) {
    setSelected((current) => current.filter((item) => item.key !== key));
  }

  function addRandomQuestions() {
    const needed = questionCount - selected.length;
    const available = questions.filter((item) => !selectedKeys.has(item.key));
    if (needed <= 0) return;
    if (available.length < needed) {
      setProblem(`Only ${available.length} more questions are available here. Choose another topic or reduce the quiz size.`);
      return;
    }
    const shuffled = [...available];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swap]] = [shuffled[swap], shuffled[index]];
    }
    setSelected((current) => [...current, ...shuffled.slice(0, needed)]);
    setProblem(null);
  }

  function moveQuestion(key: string, direction: -1 | 1) {
    setSelected((current) => {
      const from = current.findIndex((item) => item.key === key);
      const to = from + direction;
      if (from < 0 || to < 0 || to >= current.length) return current;
      const next = [...current];
      [next[from], next[to]] = [next[to], next[from]];
      return next;
    });
  }

  async function create() {
    setProblem(null);
    if (selected.length !== questionCount) {
      setProblem(`Choose exactly ${questionCount} questions before creating the live quiz.`);
      return;
    }
    setSaving(true);
    try {
      const session = await createLiveQuiz({ title, durationSeconds, questionKeys: selected.map((item) => item.key) });
      router.replace(routes.liveQuizHost(session.code));
    } catch (error) {
      setProblem(friendlyError(error, 'The live quiz could not be created.'));
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <LoadingState label="Opening the GrateApex question bank…" />;
  return (
    <Screen width="wide" contentStyle={styles.page}>
      <BackLink fallback={routes.liveQuiz()} />
      <PageHeader title="Build a Live Quiz" eyebrow="GrateApex Live" subtitle="Choose a course, set the pace, and build your quiz in a few taps." right={<Text style={styles.count}>{selected.length}/{questionCount} questions</Text>} />
      <Button label="Quiz history" variant="secondary" onPress={() => router.push(routes.liveQuizHistory())} />
      <Columns
        sideFirstOnMobile
        sideWidth={300}
        gap={28}
        side={
          <Card style={styles.library}>
            <Text style={styles.stepLabel}>STEP 1</Text>
            <SectionHeader title="Course library" subtitle="Choose where your questions come from." />
            {course && !editingCourse ? <Interactive onPress={() => setEditingCourse(true)} style={styles.selectedCourse} accessibilityLabel={`Selected course: ${course.name}. Change course.`}><View style={styles.courseText}><Text style={styles.courseMeta}>COURSE</Text><Text style={styles.courseName}>{course.name}</Text></View><Text style={styles.changeLabel}>Change</Text></Interactive> : <View style={styles.courseList}>
              {courses.map((item) => {
                const active = courseId === item.id;
                return <Interactive key={item.id} onPress={() => chooseCourse(item.id)} style={[styles.courseRow, active && styles.courseRowActive]} accessibilityLabel={`Choose ${item.name}`} accessibilityState={{ selected: active }}><View style={styles.courseText}><Text style={styles.courseName}>{item.name}</Text><Text style={styles.courseMeta}>{item.total} questions</Text></View><Text style={[styles.courseArrow, active && styles.courseArrowActive]}>›</Text></Interactive>;
              })}
            </View>}
            {course ? editingTopic ? <View style={styles.topicSection}>
              <Text style={styles.topicHeading}>Choose a topic in {course.name}</Text>
              <View style={styles.topicList}>
                <Interactive onPress={() => chooseTopic('')} style={[styles.topicRow, !topicId && styles.topicRowActive]} accessibilityLabel="Show all topics" accessibilityState={{ selected: !topicId }}><Text style={styles.topicName}>All topics</Text><Text style={styles.topicCount}>{course.total}</Text></Interactive>
                {course.topics.map((topic) => {
                  const active = topicId === topic.id;
                  const total = topic.easy + topic.medium + topic.hard + topic.unrated;
                  return <Interactive key={topic.id} onPress={() => chooseTopic(topic.id)} style={[styles.topicRow, active && styles.topicRowActive]} accessibilityLabel={`Choose ${topic.title}`} accessibilityState={{ selected: active }}><Text style={styles.topicName}>{topic.title}</Text><Text style={styles.topicCount}>{total}</Text></Interactive>;
                })}
              </View>
            </View> : <Interactive onPress={() => setEditingTopic(true)} style={styles.selectedCourse} accessibilityLabel={`Selected topic: ${topicId ? course.topics.find((topic) => topic.id === topicId)?.title : 'All topics'}. Change topic.`}><View style={styles.courseText}><Text style={styles.courseMeta}>TOPIC</Text><Text style={styles.courseName}>{topicId ? course.topics.find((topic) => topic.id === topicId)?.title ?? course.name : 'All topics'}</Text></View><Text style={styles.changeLabel}>Change</Text></Interactive> : <View style={styles.libraryEmpty}><Text style={styles.libraryEmptyText}>Select a course to reveal its topics.</Text></View>}
          </Card>
        }
        main={
          <View style={styles.builderMain}>
            <Card style={styles.quizSettings} tone="elevated">
              <View style={styles.settingsHeading}>
                <View style={styles.settingsCopy}><Text style={styles.stepLabel}>STEP 2</Text><Text style={styles.settingsTitle}>Quiz details</Text><Text style={styles.settingsHint}>Choose the number of questions and the time players get for each answer.</Text></View>
                <Button label={`Create · ${selected.length}/${questionCount}`} variant="apex" loading={saving} disabled={selected.length !== questionCount || !title.trim()} onPress={() => void create()} />
              </View>
              <View style={styles.detailsGrid}>
                <View style={styles.titleField}><Text style={styles.label}>Quiz title</Text><TextInput value={title} onChangeText={setTitle} maxLength={80} style={styles.input} placeholder="Name your quiz" placeholderTextColor={styles.placeholder.color} /></View>
                <View style={styles.settingField}><Text style={styles.label}>Number of questions</Text><View style={styles.durationRow}>{countOptions.map((count) => <Button key={count} label={String(count)} size="sm" variant={questionCount === count ? 'apex' : 'secondary'} onPress={() => { setQuestionCount(count); setProblem(null); }} />)}</View><Text style={styles.settingNote}>Select exactly {questionCount} questions below.</Text></View>
                <View style={styles.settingField}><Text style={styles.label}>Answer time per question</Text><View style={styles.durationRow}>{[10, 15, 20, 30, 45, 60, 90, 120, 180].map((seconds) => <Button key={seconds} label={`${seconds}s`} size="sm" variant={durationSeconds === seconds ? 'apex' : 'secondary'} onPress={() => setDurationSeconds(seconds)} />)}</View></View>
              </View>
              {problem ? <Text style={styles.error}>{problem}</Text> : null}
            </Card>

            {selected.length ? <Card style={styles.queue}>
              <SectionHeader title="Your quiz" subtitle="Questions play in this order. Reorder or remove any question." right={<Button label="Clear" size="sm" variant="ghost" onPress={() => setSelected([])} />} />
              <View style={styles.queueList}>{selected.map((question, index) => <View key={question.key} style={styles.queueRow}><Text style={styles.queueNumber}>{String(index + 1).padStart(2, '0')}</Text><View style={styles.queueText}><Text style={styles.queuePrompt} numberOfLines={2}>{question.prompt}</Text><Text style={styles.queueMeta}>{question.course || course?.name || 'GrateApex'} · {question.topic || 'General'}</Text></View><View style={styles.queueActions}><Button label="↑" size="sm" variant="ghost" disabled={index === 0} onPress={() => moveQuestion(question.key, -1)} /><Button label="↓" size="sm" variant="ghost" disabled={index === selected.length - 1} onPress={() => moveQuestion(question.key, 1)} /><Button label="Remove" size="sm" variant="ghost" onPress={() => removeQuestion(question.key)} /></View></View>)}</View>
            </Card> : <Card tone="outline" style={styles.emptyQueue}><Text style={styles.emptyQueueTitle}>Your quiz is empty</Text><Text style={styles.emptyQueueText}>Pick a course, then add questions from the list. You can mix courses and rearrange the final order.</Text></Card>}

            {!course ? <Card tone="outline" style={styles.emptyBank}><Text style={styles.emptyBankTitle}>Start with a course</Text><Text style={styles.emptyBankText}>Choose a course on the left. Then pick questions yourself or let GrateApex choose them for you.</Text></Card> : <Card style={styles.questionPanel}>
              <View style={styles.questionPanelHeader}><View style={styles.questionHeaderCopy}><Text style={styles.stepLabel}>STEP 3 · QUESTIONS</Text><Text style={styles.questionPanelTitle}>{topicId ? course.topics.find((topic) => topic.id === topicId)?.title ?? course.name : course.name}</Text><Text style={styles.resultsLabel}>{questions.length ? `${questions.length} available · ${selected.length} of ${questionCount} selected` : 'Loading questions…'}</Text></View><Button label={selected.length < questionCount ? `Pick ${questionCount - selected.length} at random` : 'Quiz ready'} size="sm" variant="secondary" disabled={!questions.length || selected.length >= questionCount} onPress={addRandomQuestions} /></View>
              <View style={styles.questionList}>{questions.map((question) => {
                const selectedNow = selectedKeys.has(question.key);
                return <Interactive key={question.key} onPress={() => toggle(question)} style={[styles.questionRow, selectedNow && styles.questionSelected]} accessibilityLabel={`${selectedNow ? 'Remove' : 'Add'} question: ${question.prompt}`} accessibilityState={{ selected: selectedNow }}><View style={[styles.checkbox, selectedNow && styles.checkboxOn]}><Text style={styles.checkmark}>{selectedNow ? '✓' : '+'}</Text></View><View style={styles.questionText}><Text style={styles.questionPrompt}>{question.prompt}</Text><Text style={styles.questionMeta}>{question.topic || 'General'}{question.level ? ` · ${question.level}` : ''}</Text></View></Interactive>;
              })}</View>
            </Card>}
          </View>
        }
      />
    </Screen>
  );
}

function HostRoom({ code }: { code: string }) {
  const styles = useThemedStyles(createStyles);
  const [session, setSession] = useState<LiveQuizSession | null>(null);
  const [questions, setQuestions] = useState<LiveQuizQuestion[]>([]);
  const [participants, setParticipants] = useState<LiveQuizParticipant[]>([]);
  const [problem, setProblem] = useState<string | null>(null);
  const [action, setAction] = useState<string | null>(null);
  const autoTransition = useRef('');

  useEffect(() => watchLiveQuiz(code, setSession, (error) => setProblem(friendlyError(error, 'This live session is unavailable.'))), [code]);
  useEffect(() => watchLiveQuizParticipants(code, setParticipants, (error) => setProblem(friendlyError(error, 'Participant updates are unavailable.'))), [code]);
  useEffect(() => {
    let live = true;
    void getLiveQuizHostSession(code)
      .then(({ questions: found }) => { if (live) setQuestions(found); })
      .catch((error) => { if (live) setProblem(friendlyError(error, 'This host session could not be opened.')); });
    return () => { live = false; };
  }, [code]);

  const current = questions[session?.currentIndex ?? 0];
  const run = useCallback(async (name: string, task: () => Promise<unknown>) => {
    setProblem(null);
    setAction(name);
    try {
      await task();
    } catch (error) {
      setProblem(friendlyError(error, 'That live session action did not complete.'));
    } finally {
      setAction(null);
    }
  }, []);

  useEffect(() => {
    if (!session) return undefined;
    let timer: ReturnType<typeof setTimeout>;
    if (session.phase === 'question' && session.status === 'live') {
      const key = `reveal:${session.currentIndex}:${session.questionStartedAt}`;
      if (autoTransition.current === key) return undefined;
      const deadline = session.questionStartedAt + session.durationSeconds * 1000 + 1_500;
      timer = setTimeout(() => {
        if (autoTransition.current === key) return;
        autoTransition.current = key;
        void run('auto-reveal', () => showLiveQuizResults(code));
      }, Math.max(0, deadline - Date.now()));
    } else if (session.phase === 'reveal') {
      const shownAt = Number(session.revealAt ?? session.updatedAt ?? Date.now());
      const key = `leaderboard:${session.currentIndex}:${shownAt}`;
      if (autoTransition.current === key) return undefined;
      timer = setTimeout(() => {
        if (autoTransition.current === key) return;
        autoTransition.current = key;
        void run('auto-leaderboard', () => showLiveQuizLeaderboard(code));
      }, Math.max(0, shownAt + RESULT_REVEAL_MS - Date.now()));
    } else if (session.phase === 'leaderboard' && session.status !== 'ended') {
      const shownAt = Number(session.leaderboardAt ?? session.updatedAt ?? Date.now());
      const key = `advance:${session.currentIndex}:${shownAt}`;
      if (autoTransition.current === key) return undefined;
      timer = setTimeout(() => {
        if (autoTransition.current === key) return;
        autoTransition.current = key;
        void run('auto-advance', () => autoAdvanceLiveQuizQuestion(code));
      }, Math.max(0, shownAt + LEADERBOARD_DISPLAY_MS - Date.now()));
    } else {
      return undefined;
    }
    return () => clearTimeout(timer);
  }, [code, run, session?.currentIndex, session?.durationSeconds, session?.leaderboardAt, session?.phase, session?.questionStartedAt, session?.revealAt, session?.status, session?.updatedAt]);

  if (problem && !session) return <ErrorScreen title="Host session unavailable" message={problem} primary={{ label: 'Create a live quiz', onPress: () => router.replace(routes.liveQuizHost()) }} />;
  if (!session || !questions.length) return <LoadingState label="Preparing the host controls…" />;
  const finalQuestion = session.currentIndex + 1 >= session.questionCount;
  const joinAddress = `${LIVE_SITE}/live?code=${code}`;

  return (
    <Screen width="wide" contentStyle={styles.page}>
      <View style={styles.hostTop}><View><Text style={styles.kicker}>LIVE SESSION · {session.phase.toUpperCase()}</Text><Text style={styles.hostTitle}>{session.title}</Text><Text style={styles.hostSub}>Question {Math.min(session.currentIndex + 1, session.questionCount)} of {session.questionCount} · {participants.length} joined</Text></View><Card style={styles.codeCard}><Text style={styles.codeLabel}>JOIN AT</Text><Text style={styles.codeUrl}>{joinAddress.replace(/^https:\/\//, '')}</Text><Text style={styles.code}>{code}</Text></Card></View>
      <Columns
        side={
          <Card style={styles.participantCard}>
            <SectionHeader title="Players" subtitle={`${participants.length} joined`} />
            {participants.length ? participants.slice(0, 12).map((participant, index) => <View key={participant.uid} style={styles.participantRow}><Text style={styles.rank}>{index + 1}</Text><Text style={styles.participantName}>{participant.displayName}</Text><Text style={styles.participantScore}>{participant.score}</Text></View>) : <Text style={styles.settingsHint}>Players will appear here as they join with the session code.</Text>}
          </Card>
        }
        main={
          <Card style={styles.stage}>
            <Text style={styles.kicker}>QUESTION {session.currentIndex + 1}</Text>
            {session.phase === 'reveal' ? <><Text style={styles.stageTitle}>Players are seeing their results.</Text><Text style={styles.settingsHint}>The leaderboard opens automatically in a few seconds.</Text></> : session.phase === 'leaderboard' ? <><Text style={styles.stageTitle}>Leaderboard is live.</Text><Text style={styles.settingsHint}>{finalQuestion ? 'Final scores will show before the quiz ends.' : 'The next question starts automatically after the 10-second leaderboard.'}</Text></> : session.status === 'ended' ? <Text style={styles.stageTitle}>This live quiz has ended.</Text> : <><Text style={styles.stageTitle}>{current?.prompt}</Text><View style={styles.stageOptions}>{current?.options.map((option, index) => <View key={`${index}:${option}`} style={styles.stageOption}><Text style={styles.stageLetter}>{String.fromCharCode(65 + index)}</Text><Text style={styles.stageOptionText}>{option}</Text></View>)}</View></>}
            {problem ? <Text style={styles.error}>{problem}</Text> : null}
            <View style={styles.actions}>
              {session.phase === 'lobby' && session.status !== 'ended' ? <Button label="Open question" variant="apex" size="lg" loading={action === 'start'} onPress={() => void run('start', () => startLiveQuizQuestion(code))} /> : null}
              {session.phase === 'question' ? <Button label="Show results now" variant="apex" size="lg" loading={action === 'reveal'} onPress={() => void run('reveal', () => showLiveQuizResults(code))} /> : null}
              {session.phase === 'reveal' ? <Button label="Show leaderboard now" variant="apex" size="lg" loading={action === 'leaderboard'} onPress={() => void run('leaderboard', () => showLiveQuizLeaderboard(code))} /> : null}
              {session.phase === 'leaderboard' ? <Button label={finalQuestion ? 'Finish quiz' : 'Prepare next question'} variant="primary" size="lg" loading={action === 'next'} onPress={() => void run('next', () => nextLiveQuizQuestion(code))} /> : null}
              {session.status !== 'ended' ? <Button label="End session" variant="danger" loading={action === 'end'} onPress={() => void run('end', () => endLiveQuiz(code))} /> : <><Button label="Review quiz answers" variant="secondary" onPress={() => router.push(routes.liveQuizHistory(code))} /><Button label="Create another quiz" variant="secondary" onPress={() => router.replace(routes.liveQuizHost())} /></>}
            </View>
          </Card>
        }
      />
    </Screen>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    page: { gap: 20 },
    library: { gap: 14, padding: 16 },
    stepLabel: { ...Type.overline, color: colors.apexGlow, letterSpacing: 1.2 },
    courseList: { gap: 7 },
    courseRow: { flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 58, paddingHorizontal: 13, paddingVertical: 10, borderRadius: 12, backgroundColor: colors.surfaceMuted, borderWidth: 1, borderColor: colors.border },
    courseRowActive: { backgroundColor: colors.apexSurface, borderColor: colors.apexGlow },
    courseText: { flex: 1, gap: 3 },
    courseName: { color: colors.text, fontSize: 13.5, fontWeight: '800' },
    courseMeta: { color: colors.textTertiary, fontSize: 11.5, fontWeight: '600' },
    courseArrow: { color: colors.textTertiary, fontSize: 24, lineHeight: 26, fontWeight: '500' },
    courseArrowActive: { color: colors.apexGlow },
    selectedCourse: { flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 56, paddingHorizontal: 13, paddingVertical: 10, borderRadius: 12, backgroundColor: colors.apexSurface, borderWidth: 1, borderColor: colors.apexGlow },
    changeLabel: { color: colors.apexGlow, fontSize: 12, fontWeight: '800' },
    settingField: { flex: 1, minWidth: 220, gap: 7 },
    settingNote: { color: colors.textTertiary, fontSize: 11.5, lineHeight: 16 },
    topicSection: { gap: 9, paddingTop: 14, borderTopWidth: 1, borderTopColor: colors.border },
    topicHeading: { color: colors.textSecondary, fontSize: 12, fontWeight: '800' },
    topicList: { gap: 5 },
    topicRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, minHeight: 38, paddingHorizontal: 10, borderRadius: 9 },
    topicRowActive: { backgroundColor: colors.apexSurface },
    topicName: { flex: 1, color: colors.text, fontSize: 12.5, fontWeight: '600' },
    topicCount: { color: colors.textTertiary, fontSize: 11, fontWeight: '700' },
    libraryEmpty: { padding: 12, borderRadius: 10, backgroundColor: colors.surfaceMuted },
    libraryEmptyText: { color: colors.textTertiary, fontSize: 12, lineHeight: 18 },
    builderMain: { gap: 16 },
    quizSettings: { gap: 16, padding: 18 },
    settingsHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 },
    settingsCopy: { flex: 1, minWidth: 210, gap: 5 },
    detailsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
    titleField: { flex: 1, minWidth: 220, gap: 7 },
    queue: { gap: 14, padding: 18 },
    queueList: { gap: 8 },
    queueRow: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10, borderRadius: 11, backgroundColor: colors.surfaceMuted },
    queueNumber: { color: colors.apexGlow, fontSize: 12, fontWeight: '900', width: 24, textAlign: 'center' },
    queueText: { flex: 1, gap: 3 },
    queuePrompt: { color: colors.text, fontSize: 13, lineHeight: 18, fontWeight: '700' },
    queueMeta: { color: colors.textTertiary, fontSize: 11, fontWeight: '600' },
    queueActions: { flexDirection: 'row', alignItems: 'center', gap: 2 },
    emptyQueue: { gap: 6, padding: 18 },
    emptyQueueTitle: { color: colors.text, fontSize: 15, fontWeight: '800' },
    emptyQueueText: { color: colors.textSecondary, fontSize: 13, lineHeight: 19 },
    emptyBank: { gap: 6, padding: 20, minHeight: 130, justifyContent: 'center' },
    emptyBankTitle: { color: colors.text, fontSize: 16, fontWeight: '800' },
    emptyBankText: { color: colors.textSecondary, fontSize: 13, lineHeight: 19 },
    questionPanel: { gap: 14, padding: 18 },
    questionPanelHeader: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
    questionHeaderCopy: { flex: 1, minWidth: 190 },
    questionPanelTitle: { ...Type.title3, color: colors.text, marginTop: 4 },
    count: { backgroundColor: colors.apexSurface, color: colors.apexGlow, fontWeight: '900', fontSize: 13, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999 },
    settings: { gap: 10, padding: 18 },
    settingsTitle: { ...Type.title3, color: colors.text },
    label: { color: colors.textSecondary, fontSize: 13, fontWeight: '800', marginTop: 2 },
    input: { minHeight: 46, borderRadius: 11, paddingHorizontal: 12, backgroundColor: colors.surfaceMuted, borderWidth: 1, borderColor: colors.border, color: colors.text, fontSize: 15, fontWeight: '700' },
    placeholder: { color: colors.textTertiary },
    durationRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 7 },
    settingsHint: { color: colors.textSecondary, lineHeight: 19, fontSize: 12.5, marginVertical: 4 },
    error: { color: colors.error, fontWeight: '700', fontSize: 13, lineHeight: 19, textAlign: 'center' },
    bank: { gap: 13 },
    chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 7 },
    resultsLabel: { color: colors.textSecondary, fontSize: 12.5, fontWeight: '700', marginTop: 2 },
    questionList: { gap: 8 },
    questionRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 11, padding: 14, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 14 },
    questionSelected: { borderColor: colors.apexGlow, backgroundColor: colors.apexSurface },
    checkbox: { width: 21, height: 21, borderRadius: 6, borderWidth: 1.5, borderColor: colors.borderStrong, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
    checkboxOn: { backgroundColor: colors.apexGlow, borderColor: colors.apexGlow },
    checkmark: { color: '#0A1F5C', fontSize: 13, fontWeight: '900' },
    questionText: { flex: 1, gap: 4 },
    questionPrompt: { color: colors.text, fontSize: 14, lineHeight: 20, fontWeight: '700' },
    questionMeta: { color: colors.textTertiary, fontSize: 11.5, fontWeight: '600' },
    hostTop: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 },
    kicker: { ...Type.overline, color: colors.apexGlow, letterSpacing: 1.3 },
    hostTitle: { ...Type.title1, color: colors.text, marginTop: 5 },
    hostSub: { color: colors.textSecondary, fontSize: 14, marginTop: 4 },
    codeCard: { minWidth: 220, alignItems: 'center', gap: 3, padding: 14, backgroundColor: colors.apexSurface, borderColor: colors.apexGlow + '66', borderWidth: 1 },
    codeLabel: { color: colors.apexMuted, fontSize: 9, fontWeight: '900', letterSpacing: 1 },
    codeUrl: { color: colors.apexText, fontSize: 11, fontWeight: '700' },
    code: { color: colors.apexGlow, fontSize: 28, fontWeight: '900', letterSpacing: 4 },
    stage: { gap: 18, padding: 24, minHeight: 380 },
    stageTitle: { ...Type.title2, color: colors.text, lineHeight: 34 },
    stageOptions: { gap: 8 },
    stageOption: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10, borderRadius: 10, backgroundColor: colors.surfaceMuted },
    stageLetter: { color: colors.apexGlow, fontWeight: '900', width: 20, textAlign: 'center' },
    stageOptionText: { flex: 1, color: colors.textSecondary, fontSize: 14, lineHeight: 20, fontWeight: '600' },
    actions: { marginTop: 'auto', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 9 },
    participantCard: { gap: 8, padding: 16 },
    participantRow: { flexDirection: 'row', alignItems: 'center', gap: 8, minHeight: 34 },
    rank: { width: 22, color: colors.apexGlow, fontSize: 12, fontWeight: '900', textAlign: 'center' },
    participantName: { flex: 1, color: colors.text, fontSize: 13.5, fontWeight: '700' },
    participantScore: { color: colors.textSecondary, fontSize: 12.5, fontWeight: '800' },
  });
}
