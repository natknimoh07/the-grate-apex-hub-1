import { StyleSheet, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/interactive';
import type { Lesson, Topic } from '@/data/lesson-types';
import { Type, type ThemeColors } from '@/constants/theme';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Pill } from '@/components/ui/pill';
import { Screen } from '@/components/ui/screen';
import { BackLink, Breadcrumbs } from '@/components/learning/nav-bits';
import { TopicGlyph } from '@/components/learning/glyphs';
import { ErrorScreen } from '@/components/ui/state-views';
import { router } from 'expo-router';
import { routes } from '@/lib/routes';

/** Concise revision view using the key points already authored for each lesson. */
export function LessonQuickSummary({ lesson }: { lesson: Lesson }) {
  const styles = useThemedStyles(createStyles);
  const sections = lesson.chunks.filter((chunk) => chunk.keyPoints?.length);

  return (
    <View style={styles.container}>
      <Card tone="primary" style={styles.intro}>
        <Text style={styles.kicker}>QUICK REVIEW</Text>
        <Text style={styles.introText}>{lesson.description}</Text>
      </Card>

      {lesson.highYield?.length ? (
        <PointGroup title="High-yield points" points={lesson.highYield} featured />
      ) : null}
      {lesson.summary?.length ? <PointGroup title="Key points to remember" points={lesson.summary} /> : null}

      {sections.map((section, index) => (
        <PointGroup key={`${section.title}-${index}`} title={section.title} points={section.keyPoints ?? []} />
      ))}

      {!lesson.highYield?.length && !lesson.summary?.length && sections.length === 0 ? (
        <PointGroup title="Lesson overview" points={lesson.objectives?.length ? lesson.objectives : [lesson.description]} />
      ) : null}
    </View>
  );
}

/** Compact entry point on the topic page; keeps the lesson list visible. */
export function TopicSummaryLink({ topic }: { topic: Topic }) {
  const styles = useThemedStyles(createStyles);
  return (
    <Card style={styles.topicCard} tone="primary">
      <View style={styles.topicHeader}>
        <View style={styles.flex}>
          <Text style={styles.kicker}>SHORT ON TIME?</Text>
          <Text style={styles.topicTitle}>High-yield topic summary</Text>
        </View>
        <Pill label={`${topic.lessons.length} lessons`} />
      </View>
      <Text style={styles.topicDescription}>Review the exam-focused ideas across the topic without scrolling past them to reach your lessons.</Text>
      <Button label="View high-yield summary" trailing="chevronRight" onPress={() => router.push(routes.topicSummary(topic.id))} />
    </Card>
  );
}

/** Dedicated, readable topic review grouped by lesson. */
export function TopicSummaryPage({ topic }: { topic: Topic }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  return (
    <Screen width="content">
      <BackLink fallback={routes.topic(topic.id)} />
      <Breadcrumbs items={[{ label: 'Study', href: routes.learn() }, { label: topic.title, href: routes.topic(topic.id) }, { label: 'High-yield summary' }]} style={styles.crumbs} />

      <Card tone="primary" style={styles.hero}>
        <View style={styles.heroTop}>
          <TopicGlyph title={topic.title} subject={topic.subject} size={48} />
          <View style={styles.flex}>
            <Text style={styles.kicker}>QUICK TOPIC REVIEW</Text>
            <Text style={styles.heroTitle} accessibilityRole="header">{topic.title}</Text>
          </View>
        </View>
        <Text style={styles.heroDescription}>A concise review of the high-yield ideas from this topic, organized in lesson order. Use it to refresh the big ideas, then open the full lessons for detailed explanations and practice.</Text>
        <Pill label={`${topic.lessons.length} lessons`} />
      </Card>

      <View style={styles.topicLessons}>
        {topic.lessons.map((lesson, index) => {
          // The lesson summary is the fuller exam review. High-yield bullets are
          // a shorter subset, so use them only when no authored summary exists.
          const points = lesson.summary?.length
            ? lesson.summary
            : lesson.highYield?.length
              ? lesson.highYield
              : lesson.chunks.flatMap((chunk) => chunk.keyPoints ?? []);
          return (
            <Card key={lesson.id} style={styles.topicLesson}>
              <View style={styles.lessonHeading}>
                <View style={[styles.lessonNumber, { backgroundColor: colors.primarySubtle }]}>
                  <Text style={styles.lessonNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.lessonTitle} accessibilityRole="header">{lesson.title}</Text>
              </View>
              <View style={styles.lessonPoints}>
                {points.length ? points.map((point, pointIndex) => (
                  <View key={`${lesson.id}-${pointIndex}`} style={styles.pointRow}>
                    <View style={[styles.dot, { backgroundColor: colors.primaryText }]} />
                    <Text style={styles.point}>{point}</Text>
                  </View>
                )) : <Text style={styles.fallback}>{lesson.description}</Text>}
              </View>
            </Card>
          );
        })}
      </View>

      <Card style={styles.endCard}>
        <Text style={styles.endTitle}>Want the full explanations?</Text>
        <Text style={styles.topicDescription}>The topic lessons include section-by-section reading, interactive learning and questions.</Text>
        <Button label="Back to all lessons" variant="secondary" onPress={() => router.replace(routes.topic(topic.id))} />
      </Card>
    </Screen>
  );
}

function PointGroup({ title, points, featured = false }: { title: string; points: string[]; featured?: boolean }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  return (
    <Card style={styles.group}>
      <Text style={[styles.groupTitle, featured && styles.featuredTitle]}>{title}</Text>
      {points.map((point, index) => (
        <View key={`${title}-${index}`} style={styles.pointRow}>
          <View style={[styles.dot, { backgroundColor: featured ? colors.accentText : colors.primaryText }]} />
          <Text style={styles.point}>{point}</Text>
        </View>
      ))}
    </Card>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    container: { gap: 12 },
    intro: { gap: 5 },
    kicker: { ...Type.overline, color: colors.primaryText },
    introText: { fontSize: 14, lineHeight: 21, color: colors.textSecondary },
    group: { gap: 10 },
    groupTitle: { ...Type.title3, color: colors.text },
    featuredTitle: { color: colors.accentText },
    pointRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 9 },
    dot: { width: 6, height: 6, borderRadius: 3, marginTop: 8 },
    point: { flex: 1, fontSize: 14, lineHeight: 21, color: colors.textSecondary },
    topicCard: { gap: 12, marginBottom: 20 },
    topicHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    flex: { flex: 1, minWidth: 0 },
    topicTitle: { ...Type.title2, color: colors.text, marginTop: 2 },
    topicDescription: { fontSize: 13, lineHeight: 19, color: colors.textSecondary },
    crumbs: { marginBottom: 14 },
    hero: { gap: 14, marginBottom: 18, padding: 20 },
    heroTop: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    heroTitle: { ...Type.title1, color: colors.text, marginTop: 2 },
    heroDescription: { fontSize: 15, lineHeight: 24, color: colors.textSecondary },
    topicLessons: { gap: 14 },
    topicLesson: { gap: 14, padding: 18 },
    lessonHeading: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    lessonNumber: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
    lessonNumberText: { fontSize: 14, fontWeight: '800', color: colors.primaryText },
    lessonTitle: { flex: 1, fontSize: 17, lineHeight: 23, fontWeight: '800', color: colors.text },
    lessonPoints: { gap: 12 },
    endCard: { gap: 12, marginTop: 18, marginBottom: 18, padding: 18 },
    endTitle: { ...Type.title3, color: colors.text },
    fallback: { fontSize: 13, lineHeight: 19, color: colors.textSecondary },
  });
}
