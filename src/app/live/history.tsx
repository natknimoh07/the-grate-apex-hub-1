import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Platform, Share, StyleSheet, View } from 'react-native';

import { BackLink } from '@/components/learning/nav-bits';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/interactive';
import { PageHeader, Screen, SectionHeader } from '@/components/ui/screen';
import { ErrorScreen, LoadingState } from '@/components/ui/state-views';
import { Text } from '@/components/ui/text';
import { Type, type ThemeColors } from '@/constants/theme';
import { getLiveQuizHistory, getLiveQuizHistoryDetail, type LiveQuizHistoryItem, type LiveQuizHistoryQuestion } from '@/data/live-quiz';
import { useAuth } from '@/hooks/use-auth';
import { useThemedStyles } from '@/hooks/use-theme';
import { friendlyError } from '@/lib/errors';
import { param, routes } from '@/lib/routes';

export default function LiveQuizHistoryScreen() {
  const params = useLocalSearchParams<{ code?: string | string[] }>();
  const code = param(params.code);
  const { user, loading: authLoading } = useAuth();

  if (authLoading) return <LoadingState label="Opening quiz history…" />;
  if (!user) return <ErrorScreen title="Sign in to view history" message="Only the host who created a quiz can review its saved questions and answers." primary={{ label: 'Sign in', onPress: () => router.replace('/login') }} />;
  return <HistoryContent code={code} />;
}

function HistoryContent({ code }: { code?: string }) {
  const styles = useThemedStyles(createStyles);
  const [quizzes, setQuizzes] = useState<LiveQuizHistoryItem[]>([]);
  const [quiz, setQuiz] = useState<LiveQuizHistoryItem | null>(null);
  const [questions, setQuestions] = useState<LiveQuizHistoryQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [problem, setProblem] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setProblem(null);
    setNotice(null);
    if (code) {
      setQuiz(null);
      setQuestions([]);
      void getLiveQuizHistoryDetail(code)
        .then((result) => {
          if (!active) return;
          setQuiz(result.quiz);
          setQuestions(result.questions);
        })
        .catch((error) => { if (active) setProblem(friendlyError(error, 'The saved quiz could not be opened.')); })
        .finally(() => { if (active) setLoading(false); });
    } else {
      setQuiz(null);
      setQuestions([]);
      void getLiveQuizHistory()
        .then(({ quizzes: found }) => { if (active) setQuizzes(found); })
        .catch((error) => { if (active) setProblem(friendlyError(error, 'Quiz history could not be loaded.')); })
        .finally(() => { if (active) setLoading(false); });
    }
    return () => { active = false; };
  }, [code]);

  const shareText = useMemo(() => {
    if (!quiz) return '';
    return [
      quiz.title,
      ...questions.map((question, index) => {
        const answer = question.options[question.answerIndex];
        return [
          `${index + 1}. ${question.prompt}`,
          ...question.options.map((option, optionIndex) => `${String.fromCharCode(65 + optionIndex)}. ${option}`),
          answer ? `Correct answer: ${String.fromCharCode(65 + question.answerIndex)}. ${answer}` : 'Correct answer: unavailable',
        ].join('\n');
      }),
    ].join('\n\n');
  }, [questions, quiz]);

  async function shareQuestions() {
    try {
      if (Platform.OS === 'web' && typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareText);
        setNotice('Questions and answers copied. You can paste them into a message.');
        return;
      }
      await Share.share({ title: quiz?.title ?? 'Live Quiz questions', message: shareText });
    } catch {
      setProblem('The share menu could not be opened. You can still review the questions on this page.');
    }
  }

  if (loading) return <LoadingState label={code ? 'Loading saved questions…' : 'Loading quiz history…'} />;
  if (problem && (code ? !quiz : !quizzes.length)) return <ErrorScreen title={code ? 'Quiz history unavailable' : 'History unavailable'} message={problem} primary={{ label: code ? 'Back to quiz history' : 'Back to Live Quiz', onPress: () => router.replace(code ? routes.liveQuizHistory() : routes.liveQuizHost()) }} />;

  if (code && quiz) {
    return (
      <Screen width="learning" contentStyle={styles.page}>
        <BackLink fallback={routes.liveQuizHistory()} label="Quiz history" />
        <PageHeader title={quiz.title} eyebrow="COMPLETED LIVE QUIZ" subtitle={`${questions.length} questions · Code ${quiz.code} · Finished ${formatDate(quiz.endedAt)}`} />
        {problem ? <Text style={styles.error}>{problem}</Text> : null}
        <View style={styles.detailActions}><Button label={Platform.OS === 'web' ? 'Copy questions and answers' : 'Share questions and answers'} variant="apex" onPress={() => void shareQuestions()} />{notice ? <Text style={styles.notice}>{notice}</Text> : null}</View>
        {questions.map((question, index) => (
          <Card key={`${question.key}:${index}`} style={styles.questionCard}>
            <Text style={styles.questionNumber}>QUESTION {index + 1}</Text>
            <Text style={styles.questionPrompt}>{question.prompt}</Text>
            {question.course || question.topic ? <Text style={styles.meta}>{[question.course, question.topic].filter(Boolean).join(' · ')}</Text> : null}
            <View style={styles.options}>
              {question.options.map((option, optionIndex) => {
                const correct = optionIndex === question.answerIndex;
                return <View key={`${optionIndex}:${option}`} style={[styles.option, correct && styles.optionCorrect]}><Text style={[styles.optionLetter, correct && styles.optionLetterCorrect]}>{String.fromCharCode(65 + optionIndex)}</Text><Text style={[styles.optionText, correct && styles.optionTextCorrect]}>{option}</Text>{correct ? <Text style={styles.correctBadge}>CORRECT</Text> : null}</View>;
              })}
            </View>
          </Card>
        ))}
      </Screen>
    );
  }

  return (
    <Screen width="learning" contentStyle={styles.page}>
      <BackLink fallback={routes.liveQuizHost()} label="Live Quiz host" />
      <PageHeader title="Quiz history" eyebrow="GRATEAPEX LIVE" subtitle="Review questions and correct answers from quizzes you have finished." />
      {problem ? <Text style={styles.error}>{problem}</Text> : null}
      {quizzes.length ? quizzes.map((item) => (
        <Card key={item.code} style={styles.historyCard}>
          <View style={styles.historyCopy}>
            <Text style={styles.historyTitle}>{item.title}</Text>
            <Text style={styles.meta}>{item.questionCount} questions · Finished {formatDate(item.endedAt)} · Code {item.code}</Text>
          </View>
          <Button label="Review answers" size="sm" variant="secondary" onPress={() => router.push(routes.liveQuizHistory(item.code))} />
        </Card>
      )) : <Card style={styles.emptyCard}><SectionHeader title="No completed quizzes yet" subtitle="When you finish hosting a quiz, it will appear here with its questions and correct answers." /></Card>}
    </Screen>
  );
}

function formatDate(timestamp: number) {
  if (!timestamp) return 'date unavailable';
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(timestamp));
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    page: { flexGrow: 1, paddingTop: 34, gap: 18, paddingBottom: 36 },
    historyCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: 17 },
    historyCopy: { flex: 1, gap: 6 },
    historyTitle: { ...Type.title3, color: colors.text },
    meta: { color: colors.textSecondary, fontSize: 13, lineHeight: 19 },
    emptyCard: { padding: 20 },
    detailActions: { alignItems: 'flex-start' },
    questionCard: { gap: 12, padding: 18 },
    questionNumber: { ...Type.overline, color: colors.apexGlow, letterSpacing: 1.1 },
    questionPrompt: { ...Type.title3, color: colors.text, lineHeight: 27 },
    options: { gap: 8, marginTop: 2 },
    option: { flexDirection: 'row', alignItems: 'center', gap: 11, paddingHorizontal: 12, paddingVertical: 12, borderRadius: 12, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surfaceMuted },
    optionCorrect: { borderColor: colors.success, backgroundColor: colors.successSubtle },
    optionLetter: { width: 25, height: 25, borderRadius: 8, textAlign: 'center', textAlignVertical: 'center', overflow: 'hidden', color: colors.textSecondary, backgroundColor: colors.surface, fontSize: 12, fontWeight: '900' },
    optionLetterCorrect: { color: colors.success, backgroundColor: colors.surface },
    optionText: { flex: 1, color: colors.text, fontSize: 14.5, lineHeight: 20 },
    optionTextCorrect: { color: colors.text, fontWeight: '800' },
    correctBadge: { color: colors.success, fontSize: 10, fontWeight: '900', letterSpacing: 0.5 },
    error: { color: colors.error, fontSize: 13.5, fontWeight: '700' },
    notice: { color: colors.success, fontSize: 13, fontWeight: '700' },
  });
}
