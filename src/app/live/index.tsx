import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { BackLink } from '@/components/learning/nav-bits';
import { Button } from '@/components/ui/button';
import { Card, Interactive } from '@/components/ui/interactive';
import { Screen } from '@/components/ui/screen';
import { ErrorScreen, LoadingState } from '@/components/ui/state-views';
import { Text } from '@/components/ui/text';
import { Type, type ThemeColors } from '@/constants/theme';
import { answerLiveQuiz, joinLiveQuiz, watchLiveQuiz, type LiveQuizSession } from '@/data/live-quiz';
import { friendlyError } from '@/lib/errors';
import { param, routes } from '@/lib/routes';
import { useAuth } from '@/hooks/use-auth';
import { useThemedStyles } from '@/hooks/use-theme';

export default function LiveQuizScreen() {
  const params = useLocalSearchParams<{ code?: string | string[] }>();
  const code = param(params.code);
  return code ? <LiveQuizPlayer code={code} /> : <JoinLiveQuiz />;
}

function JoinLiveQuiz() {
  const styles = useThemedStyles(createStyles);
  const { user } = useAuth();
  const [code, setCode] = useState('');
  const [displayName, setDisplayName] = useState(user?.displayName ?? '');
  const [problem, setProblem] = useState<string | null>(null);
  const [joining, setJoining] = useState(false);

  useEffect(() => {
    if (!displayName && user?.displayName) setDisplayName(user.displayName);
  }, [displayName, user?.displayName]);

  async function join() {
    setProblem(null);
    setJoining(true);
    try {
      const joined = await joinLiveQuiz(code, displayName);
      router.replace(routes.liveQuiz(joined.code));
    } catch (error) {
      setProblem(friendlyError(error, 'That live quiz could not be joined.'));
    } finally {
      setJoining(false);
    }
  }

  return (
    <Screen width="learning" contentStyle={styles.page}>
      <BackLink fallback={routes.home()} />
      <View style={styles.hero}>
        <Text style={styles.kicker}>GRATEAPEX LIVE</Text>
        <Text style={styles.title}>Learn together. Rise together.</Text>
        <Text style={styles.lead}>Enter the code from your host, answer live questions and see where you rank after every round.</Text>
      </View>
      <Card style={styles.joinCard}>
        <Text style={styles.cardTitle}>Join a live quiz</Text>
        <Text style={styles.label}>Session code</Text>
        <TextInput value={code} onChangeText={(value) => setCode(value.toUpperCase().replace(/\s/g, ''))} autoCapitalize="characters" autoCorrect={false} maxLength={6} placeholder="APX42K" placeholderTextColor={styles.placeholder.color} style={styles.input} accessibilityLabel="Session code" />
        <Text style={styles.label}>Your display name</Text>
        <TextInput value={displayName} onChangeText={setDisplayName} autoCapitalize="words" maxLength={32} placeholder="What should we call you?" placeholderTextColor={styles.placeholder.color} style={styles.input} accessibilityLabel="Your display name" />
        {problem ? <Text style={styles.error}>{problem}</Text> : null}
        <Button label="Join quiz" variant="apex" size="lg" fullWidth loading={joining} disabled={code.length !== 6 || !displayName.trim()} onPress={() => void join()} />
        <Button label="I’m the host" variant="ghost" onPress={() => router.push(routes.liveQuizHost())} />
      </Card>
    </Screen>
  );
}

function LiveQuizPlayer({ code }: { code: string }) {
  const styles = useThemedStyles(createStyles);
  const [session, setSession] = useState<LiveQuizSession | null>(null);
  const [problem, setProblem] = useState<string | null>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [sending, setSending] = useState(false);
  const [clock, setClock] = useState(Date.now());

  useEffect(() => watchLiveQuiz(code, setSession, (error) => setProblem(friendlyError(error, 'This live quiz is unavailable.'))), [code]);
  useEffect(() => {
    setChoice(null);
    setSending(false);
  }, [session?.currentIndex]);
  useEffect(() => {
    if (session?.phase !== 'question') return undefined;
    const timer = setInterval(() => setClock(Date.now()), 250);
    return () => clearInterval(timer);
  }, [session?.phase, session?.currentIndex]);

  const secondsLeft = useMemo(() => {
    if (!session?.questionStartedAt) return session?.durationSeconds ?? 0;
    return Math.max(0, Math.ceil((session.questionStartedAt + session.durationSeconds * 1000 - clock) / 1000));
  }, [clock, session?.durationSeconds, session?.questionStartedAt]);

  async function answer(index: number) {
    if (choice !== null || sending || secondsLeft <= 0) return;
    setChoice(index);
    setSending(true);
    setProblem(null);
    try {
      await answerLiveQuiz(code, index);
    } catch (error) {
      setChoice(null);
      setProblem(friendlyError(error, 'Your answer did not reach the quiz. Try again.'));
    } finally {
      setSending(false);
    }
  }

  if (problem && !session) return <ErrorScreen title="Live quiz unavailable" message={problem} primary={{ label: 'Join another quiz', onPress: () => router.replace(routes.liveQuiz()) }} />;
  if (!session) return <LoadingState label="Joining the live quiz…" />;
  if (session.phase === 'question' && session.currentQuestion) {
    return (
      <Screen width="learning" contentStyle={styles.playPage}>
        <View style={styles.topLine}><Text style={styles.kicker}>QUESTION {session.currentIndex + 1} OF {session.questionCount}</Text><View style={styles.timer}><Text style={styles.timerNumber}>{secondsLeft}</Text><Text style={styles.timerWord}>SECONDS</Text></View></View>
        <Text style={styles.question}>{session.currentQuestion.prompt}</Text>
        <View style={styles.options}>
          {session.currentQuestion.options.map((option, index) => (
            <Interactive key={`${index}:${option}`} disabled={choice !== null || secondsLeft <= 0} onPress={() => void answer(index)} style={[styles.option, choice === index && styles.optionChosen]} accessibilityLabel={`${String.fromCharCode(65 + index)}: ${option}`}>
              <View style={styles.optionLetter}><Text style={styles.optionLetterText}>{String.fromCharCode(65 + index)}</Text></View>
              <Text style={styles.optionText}>{option}</Text>
            </Interactive>
          ))}
        </View>
        <Text style={styles.status}>{choice !== null ? 'Answer locked in. Watch for the leaderboard.' : secondsLeft <= 0 ? 'Time is up. Waiting for the leaderboard.' : 'Choose one answer.'}</Text>
        {problem ? <Text style={styles.error}>{problem}</Text> : null}
      </Screen>
    );
  }

  if (session.phase === 'leaderboard' || session.phase === 'ended') return <Results session={session} styles={styles} />;

  return (
    <Screen width="learning" contentStyle={styles.waitingPage}>
      <View style={styles.pulse} />
      <Text style={styles.kicker}>YOU’RE IN · {code}</Text>
      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.lead}>{session.currentIndex === 0 ? 'The host will begin shortly.' : 'The next question is being prepared.'}</Text>
      {problem ? <Text style={styles.error}>{problem}</Text> : null}
    </Screen>
  );
}

function Results({ session, styles }: { session: LiveQuizSession; styles: ReturnType<typeof createStyles> }) {
  return (
    <Screen width="learning" contentStyle={styles.resultsPage}>
      <Text style={styles.kicker}>{session.phase === 'ended' ? 'LIVE QUIZ COMPLETE' : 'ROUND RESULTS'}</Text>
      <Text style={styles.title}>{session.phase === 'ended' ? 'That’s a wrap.' : 'Leaderboard'}</Text>
      <Card style={styles.board}>
        {session.leaderboard.length ? session.leaderboard.map((entry) => (
          <View key={`${entry.rank}:${entry.displayName}`} style={styles.boardRow}>
            <Text style={styles.rank}>{entry.rank}</Text><Text style={styles.boardName}>{entry.displayName}</Text><Text style={styles.score}>{entry.score.toLocaleString()}</Text>
          </View>
        )) : <Text style={styles.muted}>Scores will appear here when the host reveals the results.</Text>}
      </Card>
      <Text style={styles.lead}>{session.phase === 'ended' ? 'Thanks for playing GrateApex Live.' : 'The next question starts automatically after the leaderboard.'}</Text>
      {session.phase === 'ended' ? <Button label="Back to GrateApex" variant="secondary" onPress={() => router.replace(routes.home())} /> : null}
    </Screen>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    page: { flexGrow: 1, alignItems: 'center', paddingTop: 38, gap: 24 },
    playPage: { flexGrow: 1, paddingTop: 34, gap: 20 },
    waitingPage: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', gap: 14, paddingBottom: 160 },
    resultsPage: { flexGrow: 1, alignItems: 'center', paddingTop: 52, gap: 16 },
    hero: { alignItems: 'center', gap: 10, maxWidth: 620 },
    kicker: { ...Type.overline, color: colors.apexGlow, letterSpacing: 1.5, textAlign: 'center' },
    title: { ...Type.display, color: colors.text, textAlign: 'center' },
    lead: { fontSize: 16, lineHeight: 24, color: colors.textSecondary, textAlign: 'center', maxWidth: 530 },
    joinCard: { width: '100%', maxWidth: 430, gap: 10, padding: 22 },
    cardTitle: { ...Type.title3, color: colors.text, marginBottom: 6 },
    label: { fontSize: 13, fontWeight: '800', color: colors.textSecondary, marginTop: 4 },
    input: { minHeight: 48, paddingHorizontal: 14, borderRadius: 12, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surfaceMuted, color: colors.text, fontSize: 16, fontWeight: '700' },
    placeholder: { color: colors.textTertiary },
    error: { color: colors.error, fontSize: 13.5, lineHeight: 20, textAlign: 'center', fontWeight: '700' },
    topLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    timer: { width: 68, height: 68, borderRadius: 34, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.apexSurface, borderWidth: 3, borderColor: colors.apexGlow },
    timerNumber: { ...Type.numeral, color: colors.apexGlow, fontSize: 25, lineHeight: 28 },
    timerWord: { fontSize: 8, fontWeight: '800', letterSpacing: 0.8, color: colors.apexMuted },
    question: { ...Type.title2, color: colors.text, textAlign: 'center', lineHeight: 34, marginTop: 10 },
    options: { gap: 10 },
    option: { minHeight: 62, padding: 13, borderRadius: 16, borderWidth: 1.5, borderColor: colors.border, backgroundColor: colors.surface, flexDirection: 'row', alignItems: 'center', gap: 13 },
    optionChosen: { borderColor: colors.apexGlow, backgroundColor: colors.apexSurface },
    optionLetter: { width: 30, height: 30, borderRadius: 9, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.apexSurface },
    optionLetterText: { color: colors.apexGlow, fontWeight: '800', fontSize: 13 },
    optionText: { flex: 1, color: colors.text, fontWeight: '700', fontSize: 15.5, lineHeight: 22 },
    status: { color: colors.textSecondary, textAlign: 'center', fontSize: 14, fontWeight: '600' },
    pulse: { width: 68, height: 68, borderRadius: 34, backgroundColor: colors.apexGlow, boxShadow: `0px 0px 0px 16px ${colors.apexGlow}22, 0px 0px 0px 32px ${colors.apexGlow}0d` },
    board: { width: '100%', maxWidth: 560, padding: 12, gap: 7 },
    boardRow: { minHeight: 48, flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 10, borderRadius: 11, backgroundColor: colors.surfaceMuted },
    rank: { width: 28, color: colors.apexGlow, fontWeight: '900', textAlign: 'center' },
    boardName: { flex: 1, color: colors.text, fontSize: 15, fontWeight: '700' },
    score: { color: colors.apexGlow, fontSize: 14, fontWeight: '900' },
    muted: { color: colors.textSecondary, textAlign: 'center', padding: 18 },
  });
}
