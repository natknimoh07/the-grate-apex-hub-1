import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { BackLink } from '@/components/learning/nav-bits';
import { LegacyCourseTile } from '@/components/learning/legacy-course-tile';
import { Icon } from '@/components/ui/icon';
import { Card, Interactive } from '@/components/ui/interactive';
import { PageHeader, Screen } from '@/components/ui/screen';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { LoadingState } from '@/components/ui/state-views';
import { Text } from '@/components/ui/text';
import { Type, type ThemeColors } from '@/constants/theme';
import { readClassSelection } from '@/data/class-curriculum';
import { HB2_COURSES, type LocalCourse } from '@/data/hb2-study';
import { LEGACY_COURSES, type LegacyCourse, loadCourseSets, loadLegacyBank } from '@/data/legacy-study';
import { PAST_TOPICS } from '@/data/past-question-topics';
import { PAST_TOPIC_COUNTS, setKind } from '@/data/practice-modes';
import { useAuth } from '@/hooks/use-auth';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';
import { routes } from '@/lib/routes';
import { findPractice, resumeHref, resumeLabel, useQuizDrafts } from '@/hooks/use-quiz-drafts';

type Paper = { id: string; name: string; count: number; kind: 'past' | 'predicted' };
type CoursePapers = { course: LegacyCourse | LocalCourse; papers: Paper[] };
type Tab = 'hb1s1' | 'hb1s2' | 'hb2s1';
type View_ = 'paper' | 'topic';
type Course = LegacyCourse | LocalCourse;
type CourseTopics = { course: Course; topics: { id: string; title: string; count: number }[] };

/** The courses on a tab, in course order. */
function tabCourses(tab: Tab): Course[] {
  // HB2 Semester 1: Anatomy, Biochemistry, Physiology — past questions from
  // the supplementary bank files (hb2-biochemistry.json, hb2-physiology.json).
  if (tab === 'hb2s1') return [...HB2_COURSES];
  // HB1 tabs show only HB1 courses. (HB2 courses used to be added here for HB2
  // learners, which made the HB2 past papers appear under both HB1 semesters.)
  const semester = tab === 'hb1s2' ? 2 : 1;
  return LEGACY_COURSES.filter((course) => course.classId === 'HB1' && course.semester === semester);
}

/** A course's past questions counted by topic (each question once), in course order. */
async function loadCourseTopics(course: Course): Promise<CourseTopics> {
  const bank = await loadLegacyBank(course.id);
  const counts = new Map<string, number>();
  const seen = new Set<string>();
  for (const set of bank.sets) {
    for (const q of set.questions) {
      // Only sorted questions have a topic (HB1 quizzes and practice tests have none).
      if (!q.tp || seen.has(q.id)) continue;
      seen.add(q.id);
      counts.set(q.tp, (counts.get(q.tp) ?? 0) + 1);
    }
  }
  const topics = (PAST_TOPICS[course.id] ?? []).map((topic) => ({ ...topic, count: counts.get(topic.id) ?? 0 })).filter((topic) => topic.count > 0);
  return { course, topics };
}

/**
 * Papers in a sensible order: past papers, then predicted papers; each by its number
 * ("Past Questions 2" before "Past Questions 10"). Papers without a number (Basic
 * Medical Genetics names its papers by topic) follow the course's topic order.
 */
async function orderPapers(course: Course, papers: Paper[]): Promise<Paper[]> {
  const bank = await loadLegacyBank(course.id).catch(() => null);
  const topicIds = (PAST_TOPICS[course.id] ?? []).map((topic) => topic.id);
  const topicRank = (paperId: string) => {
    const counts = new Map<string, number>();
    for (const q of bank?.sets.find((set) => set.id === paperId)?.questions ?? []) if (q.tp) counts.set(q.tp, (counts.get(q.tp) ?? 0) + 1);
    const main = [...counts].sort((a, b) => b[1] - a[1])[0]?.[0];
    const rank = main ? topicIds.indexOf(main) : -1;
    return rank === -1 ? Infinity : rank;
  };
  const numberOf = (name: string) => Number(/\d+/.exec(name)?.[0] ?? Infinity);
  return papers
    .map((paper, index) => ({ paper, index, kind: paper.kind === 'past' ? 0 : 1, number: numberOf(paper.name), topic: topicRank(paper.id) }))
    .sort((a, b) => a.kind - b.kind || a.number - b.number || a.topic - b.topic || a.index - b.index)
    .map((item) => item.paper);
}

// /learn/past-questions — the past question bank: real past papers (and the
// predicted papers) from each course's question bank, sat as an exam with the
// answers at the end. Your own class comes first; other semesters are a tap away.
export default function PastQuestionsScreen() {
  const drafts = useQuizDrafts();
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const { session } = useAuth();
  const own = readClassSelection(session?.user.user_metadata);

  // Default to the learner's own class/semester tab.
  const defaultTab: Tab = own?.classId === 'HB2' ? 'hb2s1' : own?.classId === 'HB1' && own.semester === 2 ? 'hb1s2' : 'hb1s1';
  const [tab, setTab] = useState<Tab>(defaultTab);
  const [list, setList] = useState<CoursePapers[] | null>(null);
  // Past questions are sorted by topic too: HB2 (scripts/sort-past-questions-by-topic.mjs)
  // and HB1 (scripts/sort-hb1-past-questions-by-topic.mjs).
  const [view, setView] = useState<View_>('paper');
  // "By topic": how many questions to sit (0 = all; some topics have about 400).
  const [topicCount, setTopicCount] = useState(30);
  const byTopic = view === 'topic';
  const [topicList, setTopicList] = useState<CourseTopics[] | null>(null);

  useEffect(() => {
    if (!byTopic) return;
    let live = true;
    queueMicrotask(() => { if (live) setTopicList(null); });
    Promise.all(tabCourses(tab).map((course) => loadCourseTopics(course).catch(() => ({ course, topics: [] })))).then((result) => {
      if (live) setTopicList(result);
    });
    return () => {
      live = false;
    };
  }, [byTopic, tab]);

  useEffect(() => {
    let live = true;
    queueMicrotask(() => { if (live) setList(null); });
    Promise.all(
      tabCourses(tab).map((course) =>
        loadCourseSets(course.id)
          .then((sets) => orderPapers(course, sets.filter((set) => setKind(set.name) !== 'quiz' && setKind(set.name) !== 'test').map((set) => ({ ...set, kind: setKind(set.name) as 'past' | 'predicted' }))))
          .then((papers) => ({ course, papers }))
          .catch(() => ({ course, papers: [] as Paper[] }))
      )
    ).then((result) => { if (live) setList(result); });
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, own?.classId, own?.semester]);

  const total = (list ?? []).reduce((sum, item) => sum + item.papers.length, 0);
  const questions = (list ?? []).reduce((sum, item) => sum + item.papers.reduce((s, paper) => s + paper.count, 0), 0);

  const tabOptions: { value: Tab; label: string }[] = [
    { value: 'hb1s1', label: 'HB1 · Semester 1' },
    { value: 'hb1s2', label: 'HB1 · Semester 2' },
    { value: 'hb2s1', label: 'HB2 · Semester 1' },
  ];

  return (
    <Screen width="content">
      <BackLink fallback={routes.learn()} />
      <PageHeader eyebrow="Study" title="Apex High Yield" subtitle="Real past papers and predicted papers from your courses. Sit one as an exam: the answers are shown at the end, like the real paper." />
      <View style={styles.switch}>
        <SegmentedControl label="Class and semester" options={tabOptions} value={tab} onChange={(value) => setTab(value as Tab)} />
      </View>
      <View style={styles.switch}>
        <SegmentedControl
          label="Show the past questions"
          options={[
            { value: 'paper', label: 'By paper' },
            { value: 'topic', label: 'By topic' },
          ]}
          value={view}
          onChange={(value) => setView(value as View_)}
        />
      </View>
      {byTopic ? (
        topicList === null ? (
          <LoadingState label="Sorting the questions by topic…" />
        ) : (
          <>
            <Text style={styles.summary}>Past questions on a topic, from all the papers, drawn at random. Sit them as an exam: the answers are shown at the end.</Text>
            <View style={styles.switch}>
              <SegmentedControl
                label="How many questions?"
                options={[...PAST_TOPIC_COUNTS.map((count) => ({ value: String(count), label: String(count) })), { value: '0', label: 'All' }]}
                value={String(topicCount)}
                onChange={(value) => setTopicCount(Number(value))}
              />
            </View>
            <View style={styles.list}>
              {topicList.filter((item) => item.topics.length > 0).map(({ course, topics }) => (
                <Card key={course.id} style={styles.course}>
                  <View style={styles.courseHead}>
                    <LegacyCourseTile course={course as LegacyCourse} size={44} />
                    <View style={styles.flex}>
                      <Text style={styles.courseName}>{course.name}</Text>
                      <Text style={styles.meta}>{topics.length} topic{topics.length === 1 ? '' : 's'} · {topics.reduce((s, topic) => s + topic.count, 0)} questions</Text>
                    </View>
                  </View>
                  {topics.map((topic) => {
                    const saved = findPractice(drafts, course.id, `topic-${topic.id}`);
                    return (
                      <Interactive key={topic.id} onPress={() => router.push(saved ? resumeHref(saved) : routes.legacyPractice({ course: course.id, pastTopic: topic.id, pastTopicCount: topicCount }))} accessibilityRole="button" accessibilityLabel={`${topic.title}, ${topic.count} past questions`} style={({ hovered }) => [styles.paper, hovered && styles.paperHover]}>
                        <Icon name="book" size={16} color={colors.accentText} />
                        <Text style={styles.paperName}>{topic.title}</Text>
                        <Text style={styles.meta}>{saved ? `Resume · ${resumeLabel(saved)}` : topicCount && topicCount < topic.count ? `${topicCount} of ${topic.count} questions` : `${topic.count} questions`}</Text>
                        <Icon name="chevronRight" size={16} color={colors.textTertiary} />
                      </Interactive>
                    );
                  })}
                </Card>
              ))}
            </View>
          </>
        )
      ) : null}
      {byTopic ? null : list === null ? <LoadingState label="Loading the papers…" /> : <Text style={styles.summary}>{total} papers · {questions.toLocaleString()} questions</Text>}
      <View style={[styles.list, byTopic && styles.hidden]}>
        {(list ?? []).filter((item) => item.papers.length > 0).map(({ course, papers }) => (
          <Card key={course.id} style={styles.course}>
            <View style={styles.courseHead}>
              <LegacyCourseTile course={course as LegacyCourse} size={44} />
              <View style={styles.flex}>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.meta}>{papers.length} paper{papers.length === 1 ? '' : 's'} · {papers.reduce((s, paper) => s + paper.count, 0)} questions</Text>
              </View>
            </View>
            {papers.map((paper, index) => {
              const saved = findPractice(drafts, course.id, `paper-${paper.id}`);
              // A heading where a course has both kinds of paper: past papers, then predicted ones.
              const heading = papers.some((item) => item.kind !== paper.kind) && papers[index - 1]?.kind !== paper.kind
                ? <Text style={styles.group}>{paper.kind === 'past' ? 'Past papers' : 'Predicted papers'}</Text>
                : null;
              return (
              <View key={paper.id} style={styles.paperRow}>
              {heading}
              <Interactive onPress={() => router.push(saved ? resumeHref(saved) : routes.legacyPractice({ course: course.id, set: paper.id, exam: true }))} accessibilityRole="button" accessibilityLabel={`${paper.name}, ${paper.count} questions`} style={({ hovered }) => [styles.paper, hovered && styles.paperHover]}>
                <Icon name={paper.kind === 'predicted' ? 'achievement' : 'book'} size={16} color={colors.accentText} />
                <Text style={styles.paperName}>{paper.name}</Text>
                <Text style={styles.meta}>{saved ? `Resume · ${resumeLabel(saved)}` : `${paper.count} questions`}</Text>
                <Icon name="chevronRight" size={16} color={colors.textTertiary} />
              </Interactive>
              </View>
              );
            })}
          </Card>
        ))}
      </View>
      {!byTopic && list && total === 0 ? <Text style={styles.summary}>No past papers for these courses yet.</Text> : null}
    </Screen>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    flex: { flex: 1, minWidth: 0 },
    switch: { maxWidth: 560, marginBottom: 12 },
    summary: { fontSize: 13.5, color: colors.textSecondary, marginBottom: 10 },
    list: { gap: 14 },
    hidden: { display: 'none' },
    course: { gap: 8 },
    courseHead: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 4 },
    courseName: { ...Type.title3, color: colors.text },
    meta: { fontSize: 12.5, color: colors.textTertiary },
    paper: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 11, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface },
    paperHover: { borderColor: colors.primaryBorder },
    paperRow: { gap: 8 },
    group: { fontSize: 12.5, fontWeight: '600', color: colors.textSecondary, marginTop: 4 },
    paperName: { flex: 1, fontSize: 14.5, fontWeight: '700', color: colors.text },
  });
}
