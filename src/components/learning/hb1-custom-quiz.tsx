import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { SavedQuizList } from '@/components/learning/quiz-in-progress-card';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Card, Interactive } from '@/components/ui/interactive';
import { Pill } from '@/components/ui/pill';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { InlineNotice, LoadingState } from '@/components/ui/state-views';
import { Text } from '@/components/ui/text';
import { Type, type ThemeColors } from '@/constants/theme';
import { bankQuestions, LEGACY_COURSES, lessonQuestionTest, loadLegacyBank, loadLegacyLessons, type LegacyCourse } from '@/data/legacy-study';
import { PAST_TOPICS } from '@/data/past-question-topics';
import { CUSTOM_COUNTS, CUSTOM_SECONDS } from '@/data/practice-modes';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';
import { friendlyError } from '@/lib/errors';
import { routes } from '@/lib/routes';

// Study → Custom quiz for HB1 (owner, 2026-11-04): semester → course → topics → quiz.
// HB2 learners use it to revise HB1. A quiz comes from one course (each HB1 course has its
// own question bank) and runs as that course's custom practice (/learn/hb-practice?custom=1).
// A "topic" is a lesson (its questions, plus the past questions it practises) or one of the
// course's past-question topics (`tp`, data/past-question-topics.ts).

type Choice = { id: string; title: string; count: number };
type CourseTopics = { lessons: Choice[]; past: Choice[]; ids: { lesson: Map<string, Set<string>>; past: Map<string, Set<string>> } };

const SEMESTER_TITLE = { 1: '1st semester', 2: '2nd semester' } as const;

async function loadCourseTopics(course: LegacyCourse): Promise<CourseTopics> {
  const [bank, lessonList] = await Promise.all([loadLegacyBank(course.id), loadLegacyLessons(course.id)]);
  const all = bankQuestions(bank);
  const lesson = new Map<string, Set<string>>();
  const lessons: Choice[] = [];
  for (const item of [...lessonList].sort((a, b) => a.order - b.order)) {
    const test = lessonQuestionTest(item);
    const ids = new Set(all.filter(test).map((q) => q.id));
    if (ids.size === 0) continue;
    lesson.set(item.id, ids);
    lessons.push({ id: item.id, title: item.title, count: ids.size });
  }
  const past = new Map<string, Set<string>>();
  const pastTopics: Choice[] = [];
  for (const topic of PAST_TOPICS[course.id] ?? []) {
    const ids = new Set(all.filter((q) => q.tp === topic.id).map((q) => q.id));
    if (ids.size === 0) continue;
    past.set(topic.id, ids);
    pastTopics.push({ id: topic.id, title: topic.title, count: ids.size });
  }
  return { lessons, past: pastTopics, ids: { lesson, past } };
}

export function Hb1CustomQuiz() {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const [openId, setOpenId] = useState<string | null>(null);
  const [topics, setTopics] = useState<CourseTopics | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pickedLessons, setPickedLessons] = useState<string[]>([]);
  const [pickedPast, setPickedPast] = useState<string[]>([]);
  const [count, setCount] = useState('20');
  const [seconds, setSeconds] = useState('0');
  const [feedback, setFeedback] = useState<'instant' | 'submit'>('instant');
  const open = LEGACY_COURSES.find((course) => course.id === openId) ?? null;

  useEffect(() => {
    if (!open) return;
    let live = true;
    setTopics(null);
    setError(null);
    loadCourseTopics(open)
      .then((loaded) => live && setTopics(loaded))
      .catch((problem) => live && setError(friendlyError(problem, 'The topics of this course could not be loaded.')));
    return () => {
      live = false;
    };
  }, [open]);

  // Opening another course starts a new choice (a quiz comes from one course).
  function toggleCourse(id: string) {
    setOpenId((current) => (current === id ? null : id));
    setPickedLessons([]);
    setPickedPast([]);
  }

  const toggle = (list: string[], id: string) => (list.includes(id) ? list.filter((item) => item !== id) : [...list, id]);

  const available = useMemo(() => {
    if (!topics) return 0;
    const ids = new Set<string>();
    for (const id of pickedLessons) topics.ids.lesson.get(id)?.forEach((qid) => ids.add(qid));
    for (const id of pickedPast) topics.ids.past.get(id)?.forEach((qid) => ids.add(qid));
    return ids.size;
  }, [topics, pickedLessons, pickedPast]);

  function start() {
    if (!open || available === 0) return;
    router.push(routes.legacyPractice({ course: open.id, custom: { lessons: pickedLessons, sets: [], topics: pickedPast, count: Number(count), seconds: Number(seconds) || undefined, feedback } }));
  }

  function checkRow(choice: Choice, on: boolean, onPress: () => void, past = false) {
    return (
      <Interactive
        key={choice.id}
        onPress={onPress}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: on }}
        accessibilityLabel={`${choice.title}, ${choice.count} questions`}
        style={({ hovered }) => [styles.row, hovered && styles.rowHover]}
      >
        <View style={[styles.checkbox, on && styles.checkboxOn]}>{on ? <Icon name="check" size={13} color={colors.surfaceElevated} /> : null}</View>
        {past ? <Icon name="book" size={15} color={colors.accentText} /> : null}
        <Text style={styles.rowTitle}>{choice.title}</Text>
        <Text style={styles.rowCount}>{choice.count}</Text>
      </Interactive>
    );
  }

  function selectAll(choices: Choice[], picked: string[], set: (ids: string[]) => void) {
    const all = choices.every((choice) => picked.includes(choice.id));
    return <Button label={all ? 'Clear' : 'Select all'} size="sm" variant="ghost" onPress={() => set(all ? [] : choices.map((choice) => choice.id))} />;
  }

  return (
    <View>
      <SavedQuizList match={(draft) => LEGACY_COURSES.some((course) => draft.key === `hb:${course.id}:custom`)} />
      {([1, 2] as const).map((semester) => (
        <View key={semester} style={styles.semester}>
          <Text style={styles.semesterTitle}>{SEMESTER_TITLE[semester]}</Text>
          {LEGACY_COURSES.filter((course) => course.semester === semester).map((course) => {
            const isOpen = course.id === openId;
            return (
              <Card key={course.id} style={styles.courseCard}>
                <Interactive
                  onPress={() => toggleCourse(course.id)}
                  accessibilityRole="button"
                  accessibilityState={{ expanded: isOpen }}
                  accessibilityLabel={`${course.name}: ${isOpen ? 'hide' : 'choose'} topics`}
                  style={styles.courseHeader}
                >
                  <View style={styles.flex}>
                    <Text style={styles.courseTitle}>{course.name}</Text>
                    <Text style={styles.courseDetail} numberOfLines={isOpen ? undefined : 1}>{course.desc}</Text>
                  </View>
                  <Icon name={isOpen ? 'chevronUp' : 'chevronDown'} size={18} color={colors.textTertiary} />
                </Interactive>
                {isOpen ? (
                  error ? (
                    <InlineNotice tone="warning" title="Topics unavailable" message={error} />
                  ) : !topics ? (
                    <LoadingState label="Loading the topics…" />
                  ) : topics.lessons.length === 0 && topics.past.length === 0 ? (
                    <Text style={styles.courseDetail}>This course has no quiz questions yet.</Text>
                  ) : (
                    <View style={styles.topics}>
                      {topics.lessons.length ? (
                        <>
                          <View style={styles.groupHeader}>
                            <Text style={styles.groupTitle}>Lessons</Text>
                            {selectAll(topics.lessons, pickedLessons, setPickedLessons)}
                          </View>
                          {topics.lessons.map((choice) => checkRow(choice, pickedLessons.includes(choice.id), () => setPickedLessons((list) => toggle(list, choice.id))))}
                        </>
                      ) : null}
                      {topics.past.length ? (
                        <>
                          <View style={styles.groupHeader}>
                            <Text style={styles.groupTitle}>Past questions by topic</Text>
                            {selectAll(topics.past, pickedPast, setPickedPast)}
                          </View>
                          {topics.past.map((choice) => checkRow(choice, pickedPast.includes(choice.id), () => setPickedPast((list) => toggle(list, choice.id)), true))}
                        </>
                      ) : null}
                    </View>
                  )
                ) : null}
              </Card>
            );
          })}
        </View>
      ))}

      {open && topics ? (
        <>
          <Card style={styles.options}>
            <View style={styles.groupHeader}>
              <Text style={styles.sectionTitle}>Quiz settings · {open.name}</Text>
              <Pill label={`${available} questions`} tone={available ? 'primary' : 'neutral'} />
            </View>
            <Text style={styles.label}>Question count</Text>
            <SegmentedControl label="Number of questions" options={CUSTOM_COUNTS.map((value) => ({ value: String(value), label: String(value) }))} value={count} onChange={setCount} />
            <Text style={styles.label}>Feedback</Text>
            <SegmentedControl label="When you see the answers" options={[{ value: 'instant', label: 'After each' }, { value: 'submit', label: 'At the end' }]} value={feedback} onChange={(value) => setFeedback(value as 'instant' | 'submit')} />
            <Text style={styles.label}>Timer per question</Text>
            <SegmentedControl label="Seconds per question" options={CUSTOM_SECONDS.map((value) => ({ value: String(value), label: value ? `${value} sec` : 'Off' }))} value={seconds} onChange={setSeconds} />
          </Card>
          <View style={styles.startRow}>
            <Button label="Clear selection" variant="ghost" onPress={() => { setPickedLessons([]); setPickedPast([]); }} disabled={available === 0} />
            <Button label={seconds === '0' ? 'Start custom quiz' : 'Start timed drill'} trailing="→" size="lg" onPress={start} disabled={available === 0} />
          </View>
          {available === 0 ? <Text style={styles.note}>Tick at least one topic of {open.name} above.</Text> : null}
        </>
      ) : (
        <Text style={styles.note}>Open a course to choose its topics.</Text>
      )}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    flex: { flex: 1, minWidth: 0 },
    semester: { marginBottom: 14 },
    semesterTitle: { ...Type.title3, color: colors.text, marginTop: 6, marginBottom: 8 },
    courseCard: { gap: 10, marginBottom: 10 },
    courseHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    courseTitle: { fontSize: 15, fontWeight: '800', color: colors.text },
    courseDetail: { fontSize: 12.5, lineHeight: 18, color: colors.textSecondary, marginTop: 2 },
    topics: { borderTopWidth: 1, borderTopColor: colors.divider },
    groupHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginTop: 8 },
    groupTitle: { ...Type.overline, color: colors.textSecondary },
    row: { minHeight: 44, flexDirection: 'row', alignItems: 'center', gap: 10, borderBottomWidth: 1, borderBottomColor: colors.divider, paddingVertical: 7 },
    rowHover: { backgroundColor: colors.surfaceMuted },
    checkbox: { width: 20, height: 20, borderWidth: 1.5, borderColor: colors.border, borderRadius: 6, alignItems: 'center', justifyContent: 'center' },
    checkboxOn: { borderColor: colors.primary, backgroundColor: colors.primary },
    rowTitle: { flex: 1, minWidth: 0, fontSize: 13.5, fontWeight: '600', color: colors.text },
    rowCount: { ...Type.numeral, fontSize: 12, color: colors.textTertiary },
    options: { gap: 8, marginTop: 10 },
    sectionTitle: { ...Type.title3, color: colors.text, flex: 1 },
    label: { fontSize: 14, fontWeight: '800', color: colors.text, marginTop: 6 },
    startRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end', gap: 10, marginTop: 16 },
    note: { fontSize: 12.5, color: colors.textTertiary, textAlign: 'right', marginTop: 8 },
  });
}
