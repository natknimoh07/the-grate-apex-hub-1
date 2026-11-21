import { StyleSheet, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/interactive';
import type { Lesson, Topic } from '@/data/lesson-types';
import { Type, type ThemeColors } from '@/constants/theme';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

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

/** Topic-level rapid review, grouped by lesson and sourced from authored high-yield notes. */
export function TopicQuickSummary({ topic }: { topic: Topic }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  return (
    <Card style={styles.topicCard}>
      <View style={styles.topicHeader}>
        <View style={styles.flex}>
          <Text style={styles.kicker}>QUICK TOPIC REVIEW</Text>
          <Text style={styles.topicTitle}>High-yield summary</Text>
        </View>
        <Text style={styles.lessonCount}>{topic.lessons.length} lessons</Text>
      </View>
      <Text style={styles.topicDescription}>The main exam-relevant ideas across this topic, grouped by lesson.</Text>
      <View style={styles.topicLessons}>
        {topic.lessons.map((lesson, index) => {
          const points = lesson.highYield?.length
            ? lesson.highYield
            : lesson.summary?.length
              ? lesson.summary
              : lesson.chunks.flatMap((chunk) => chunk.keyPoints ?? []);
          return (
            <View key={lesson.id} style={styles.topicLesson}>
              <Text style={styles.lessonTitle}>{index + 1}. {lesson.title}</Text>
              {points.length ? points.map((point, pointIndex) => (
                <View key={`${lesson.id}-${pointIndex}`} style={styles.pointRow}>
                  <View style={[styles.dot, { backgroundColor: colors.primaryText }]} />
                  <Text style={styles.point}>{point}</Text>
                </View>
              )) : <Text style={styles.fallback}>{lesson.description}</Text>}
            </View>
          );
        })}
      </View>
    </Card>
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
    lessonCount: { fontSize: 12, fontWeight: '700', color: colors.textTertiary },
    topicDescription: { fontSize: 13, lineHeight: 19, color: colors.textSecondary },
    topicLessons: { gap: 15, marginTop: 2 },
    topicLesson: { gap: 7, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.border, paddingTop: 12 },
    lessonTitle: { fontSize: 14, fontWeight: '800', color: colors.text, marginBottom: 2 },
    fallback: { fontSize: 13, lineHeight: 19, color: colors.textSecondary },
  });
}
