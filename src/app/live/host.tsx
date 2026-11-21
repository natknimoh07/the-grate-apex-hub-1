import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { BackLink } from '@/components/learning/nav-bits';
import { Button } from '@/components/ui/button';
import { Card, Interactive } from '@/components/ui/interactive';
import { Columns, PageHeader, Screen, SectionHeader } from '@/components/ui/screen';
import { ErrorScreen, LoadingState } from '@/components/ui/state-views';
import { Text } from '@/components/ui/text';
import { Type, type ThemeColors } from '@/constants/theme';
import {
  createLiveQuiz,
  endLiveQuiz,
  getLiveQuizCatalog,
  getLiveQuizHostSession,
  getLiveQuizQuestions,
  nextLiveQuizQuestion,
  showLiveQuizLeaderboard,
  startLiveQuizQuestion,
  watchLiveQuiz,
  watchLiveQuizParticipants,
  type LiveQuizCourse,
  type LiveQuizParticipant,
  type LiveQuizQuestion,
  type LiveQuizSession,
} from '@/data/live-quiz';
import { friendlyError } from '@/lib/errors';
import { LIVE_SITE } from '@/lib/live-site';
import { param, routes } from '@/lib/routes';
import { useAuth } from '@/hooks/use-auth';
import { useThemedStyles } from '@/hooks/use-theme';

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
  const [questions, setQuestions] = useState<LiveQuizQuestion[]>([]);
  const [selected, setSelected] = useState<LiveQuizQuestion[]>([]);
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
        setCourseId(found[0]?.id ?? '');
      })
      .catch((error) => { if (live) setProblem(friendlyError(error, 'The question bank could not be loaded.')); })
      .finally(() => { if (live) setLoading(false); });
    return () => { live = false; };
  }, []);

  useEffect(() => {
    if (!courseId) return;
    let live = true;
    setQuestions([]);
    void getLiveQuizQuestions(courseId, topicId || undefined)
      .then(({ questions: found }) => { if (live) setQuestions(found); })
      .catch((error) => { if (live) setProblem(friendlyError(error, 'Questions could not be loaded.')); });
    return () => { live = false; };
  }, [courseId, topicId]);

  const course = courses.find((item) => item.id === courseId);
  const selectedKeys = useMemo(() => new Set(selected.map((item) => item.key)), [selected]);

  function chooseCourse(id: string) {
    setCourseId(id);
    setTopicId('');
  }

  function toggle(question: LiveQuizQuestion) {
    setSelected((current) => current.some((item) => item.key === question.key)
      ? current.filter((item) => item.key !== question.key)
      : [...current, question]);
  }

  async function create() {
    setProblem(null);
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
      <PageHeader title="Create a Live Quiz" eyebrow="GrateApex Live" subtitle="Select existing GrateApex questions. The original curriculum stays the source of truth." right={<Text style={styles.count}>{selected.length} selected</Text>} />
      <Columns
        sideFirstOnMobile
        side={
          <Card style={styles.settings}>
            <Text style={styles.settingsTitle}>Session settings</Text>
            <Text style={styles.label}>Quiz title</Text>
            <TextInput value={title} onChangeText={setTitle} maxLength={80} style={styles.input} placeholderTextColor={styles.placeholder.color} />
            <Text style={styles.label}>Answer time</Text>
            <View style={styles.durationRow}>{[15, 30, 45, 60].map((seconds) => <Button key={seconds} label={`${seconds}s`} size="sm" variant={durationSeconds === seconds ? 'apex' : 'secondary'} onPress={() => setDurationSeconds(seconds)} />)}</View>
            <Text style={styles.settingsHint}>Correct answers and scoring stay on the server. Players never receive an answer key.</Text>
            {problem ? <Text style={styles.error}>{problem}</Text> : null}
            <Button label={`Create session · ${selected.length} questions`} variant="apex" fullWidth loading={saving} disabled={!selected.length || !title.trim()} onPress={() => void create()} />
            {selected.length ? <Button label="Clear selection" variant="ghost" onPress={() => setSelected([])} /> : null}
          </Card>
        }
        main={
          <View style={styles.bank}>
            <SectionHeader title="Question bank" subtitle="Questions are generated from the same GrateApex curriculum used elsewhere in the app." />
            <View style={styles.chips}>{courses.map((item) => <Button key={item.id} label={item.name} size="sm" variant={courseId === item.id ? 'primary' : 'secondary'} onPress={() => chooseCourse(item.id)} />)}</View>
            {course ? <View style={styles.chips}><Button label="All topics" size="sm" variant={!topicId ? 'apex' : 'secondary'} onPress={() => setTopicId('')} />{course.topics.map((topic) => <Button key={topic.id} label={topic.title} size="sm" variant={topicId === topic.id ? 'apex' : 'secondary'} onPress={() => setTopicId(topic.id)} />)}</View> : null}
            <Text style={styles.resultsLabel}>{questions.length ? `${questions.length} available questions` : 'Loading questions…'} · Select up to 30</Text>
            <View style={styles.questionList}>{questions.map((question) => {
              const selectedNow = selectedKeys.has(question.key);
              return <Interactive key={question.key} onPress={() => toggle(question)} style={[styles.questionRow, selectedNow && styles.questionSelected]} accessibilityLabel={`${selectedNow ? 'Remove' : 'Add'} question: ${question.prompt}`}><View style={[styles.checkbox, selectedNow && styles.checkboxOn]}><Text style={styles.checkmark}>{selectedNow ? '✓' : ''}</Text></View><View style={styles.questionText}><Text style={styles.questionPrompt}>{question.prompt}</Text><Text style={styles.questionMeta}>{question.topic || 'General'} · {question.options.length} choices</Text></View></Interactive>;
            })}</View>
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
            {session.phase === 'leaderboard' ? <Text style={styles.stageTitle}>Leaderboard is live.</Text> : session.status === 'ended' ? <Text style={styles.stageTitle}>This live quiz has ended.</Text> : <><Text style={styles.stageTitle}>{current?.prompt}</Text><View style={styles.stageOptions}>{current?.options.map((option, index) => <View key={`${index}:${option}`} style={styles.stageOption}><Text style={styles.stageLetter}>{String.fromCharCode(65 + index)}</Text><Text style={styles.stageOptionText}>{option}</Text></View>)}</View></>}
            {problem ? <Text style={styles.error}>{problem}</Text> : null}
            <View style={styles.actions}>
              {session.phase === 'lobby' && session.status !== 'ended' ? <Button label="Open question" variant="apex" size="lg" loading={action === 'start'} onPress={() => void run('start', () => startLiveQuizQuestion(code))} /> : null}
              {session.phase === 'question' ? <Button label="Show leaderboard" variant="apex" size="lg" loading={action === 'leaderboard'} onPress={() => void run('leaderboard', () => showLiveQuizLeaderboard(code))} /> : null}
              {session.phase === 'leaderboard' ? <Button label={finalQuestion ? 'Finish quiz' : 'Prepare next question'} variant="primary" size="lg" loading={action === 'next'} onPress={() => void run('next', () => nextLiveQuizQuestion(code))} /> : null}
              {session.status !== 'ended' ? <Button label="End session" variant="danger" loading={action === 'end'} onPress={() => void run('end', () => endLiveQuiz(code))} /> : <Button label="Create another quiz" variant="secondary" onPress={() => router.replace(routes.liveQuizHost())} />}
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
