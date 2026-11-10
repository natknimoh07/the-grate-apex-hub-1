import { router } from 'expo-router';
import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { LegacyCourseTile } from '@/components/learning/legacy-course-tile';
import { CardGrid } from '@/components/ui/card-grid';
import { Icon } from '@/components/ui/icon';
import { Card, Interactive } from '@/components/ui/interactive';
import { InlineNotice } from '@/components/ui/state-views';
import { ProgressRing } from '@/components/ui/progress-ring';
import { SectionHeader } from '@/components/ui/screen';
import { Text } from '@/components/ui/text';
import { Type, type ThemeColors } from '@/constants/theme';
import type { ClassSelection } from '@/data/class-curriculum';
import { type LegacyCourse, type LegacyLessonMeta, loadLegacyLessonList } from '@/data/legacy-study';
import { hb2Lessons } from '@/data/hb2-study';
import { useProgress } from '@/data/progress';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';
import { routes } from '@/lib/routes';

/**
 * A class's courses on Study, side by side (owner, 2026-10-31: a new arrangement, the same in
 * every interface and theme): each card has the course's picture and name, a ring with the
 * share of lessons done, and "Up next" — the first lesson not yet completed, in course order.
 */
export function LegacyCourseList({ courses, selection, headerRight }: { courses: readonly LegacyCourse[]; selection: ClassSelection; headerRight?: ReactNode }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const progress = useProgress();
  const [lessons, setLessons] = useState<LegacyLessonMeta[] | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let live = true;
    loadLegacyLessonList().then((list) => { if (live) setLessons(list); }).catch(() => { if (live) { setLessons([]); setFailed(true); } });
    return () => { live = false; };
  }, []);
  const completed = useMemo(() => new Set(progress.completedLessons), [progress.completedLessons]);
  const needsList = courses.some((course) => !course.subject);

  return (
    <View style={styles.column}>
      <SectionHeader title="Courses" subtitle={`${selection.classId} · Semester ${selection.semester} · ${courses.length} course${courses.length === 1 ? '' : 's'}`} right={headerRight} style={styles.header} />
      {failed && needsList ? <InlineNotice tone="warning" message="Some lessons could not be loaded. Check your connection, then reopen Study." /> : null}
      <CardGrid minItemWidth={250} maxColumns={3} gap={12}>
        {courses.map((course) => {
          const own = course.subject ? hb2Lessons(course.id) : (lessons ?? []).filter((lesson) => lesson.course === course.id);
          const loading = !course.subject && lessons === null;
          const done = own.filter((lesson) => completed.has(lesson.id)).length;
          const share = own.length ? done / own.length : 0;
          const next = own.find((lesson) => !completed.has(lesson.id));
          return (
            <Card key={course.id} style={styles.card}>
              <Interactive
                onPress={() => router.push(routes.legacyCourse(course.id))}
                accessibilityRole="link"
                accessibilityLabel={`${course.name}. ${loading ? 'Loading lessons' : `${done} of ${own.length} lessons completed`}`}
                style={({ hovered }) => [styles.main, hovered && styles.hovered]}
              >
                <View style={styles.top}>
                  <LegacyCourseTile course={course} size={48} />
                  <View style={styles.flex}>
                    <Text style={styles.name} numberOfLines={2}>{course.name}</Text>
                    <Text style={styles.desc} numberOfLines={2}>{course.desc}</Text>
                  </View>
                </View>
                <View style={styles.stats}>
                  <ProgressRing value={share} size={52} thickness={5} label={`${course.name}: ${Math.round(share * 100)}% of lessons completed`}>
                    <Text style={styles.ringText}>{loading ? '…' : `${Math.round(share * 100)}%`}</Text>
                  </ProgressRing>
                  <View style={styles.flex}>
                    <Text style={styles.count}>{loading ? 'Loading…' : own.length ? `${done} of ${own.length}` : 'No lessons yet'}</Text>
                    {!loading && own.length ? <Text style={styles.meta}>lessons completed</Text> : null}
                  </View>
                  <Icon name="chevronRight" size={18} color={colors.textTertiary} />
                </View>
              </Interactive>
              {next ? (
                <Interactive
                  onPress={() => router.push(course.subject ? routes.lesson(next.id) : routes.legacyLesson(next.id))}
                  accessibilityRole="link"
                  accessibilityLabel={`Up next in ${course.name}: ${next.title}`}
                  style={({ hovered }) => [styles.next, hovered && styles.hovered]}
                >
                  <View style={styles.flex}>
                    <Text style={styles.nextLabel}>{done ? 'Up next' : 'Start with'}</Text>
                    <Text style={styles.nextTitle} numberOfLines={1}>{next.title}</Text>
                  </View>
                  <Icon name="arrowRight" size={16} color={colors.primaryText} />
                </Interactive>
              ) : own.length ? (
                <View style={styles.next}>
                  <Icon name="check" size={16} color={colors.success} strokeWidth={2.6} />
                  <Text style={[styles.nextTitle, styles.flex]}>Every lesson done</Text>
                </View>
              ) : null}
            </Card>
          );
        })}
      </CardGrid>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    flex: { flex: 1, minWidth: 0 },
    column: { gap: 12 },
    header: { marginTop: 6 },
    card: { padding: 0, gap: 0, overflow: 'hidden', flexGrow: 1 },
    main: { padding: 16, gap: 16, flexGrow: 1 },
    hovered: { backgroundColor: colors.surfaceMuted },
    top: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
    name: { ...Type.title3, color: colors.text },
    desc: { fontSize: 13, lineHeight: 18, minHeight: 36, color: colors.textSecondary, marginTop: 2 },
    stats: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    ringText: { fontSize: 13, fontWeight: '800', color: colors.text },
    count: { fontSize: 16, fontWeight: '800', color: colors.text },
    meta: { fontSize: 12, color: colors.textSecondary },
    next: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 12, paddingHorizontal: 16, borderTopWidth: 1, borderTopColor: colors.border },
    nextLabel: { fontSize: 11.5, fontWeight: '700', color: colors.primaryText },
    nextTitle: { fontSize: 13.5, fontWeight: '600', color: colors.text },
  });
}
