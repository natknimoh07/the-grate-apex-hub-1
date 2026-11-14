import { type Href } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { LectureSource } from '@/components/learning/lecture-source';
import { BackLink } from '@/components/learning/nav-bits';
import { Icon, type IconName } from '@/components/ui/icon';
import { PressableCard } from '@/components/ui/interactive';
import { Screen } from '@/components/ui/screen';
import { Text } from '@/components/ui/text';
import { Type, type ThemeColors } from '@/constants/theme';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

/**
 * Opening a lesson asks how to study it (owner, 2026-10-31): learn by answering (the
 * step-by-step questions) or read it section by section, one page at a time.
 */
export function LessonStartChoice({
  kicker,
  title,
  description,
  source,
  steps,
  sections,
  completed,
  back,
  onLearn,
  onRead,
}: {
  kicker: string;
  title: string;
  description?: string;
  /** The lecture slides the lesson was built from (data/lesson-lecture.ts). */
  source?: string | null;
  steps: number;
  sections: number;
  completed: boolean;
  back: Href;
  onLearn: () => void;
  onRead: () => void;
}) {
  const styles = useThemedStyles(createStyles);
  return (
    <Screen width="content">
      <BackLink fallback={back} />
      <View style={styles.head}>
        <Text style={styles.kicker}>{kicker}</Text>
        <Text style={styles.title} accessibilityRole="header">{title}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
        <LectureSource text={source} style={styles.source} />
      </View>
      <Text style={styles.question}>How do you want to study this lesson?</Text>
      <View style={styles.options}>
        <Option
          icon="challenge"
          title="Learn by answering"
          detail={`${steps} steps: short explanations with questions as you go.${completed ? '' : ' Best the first time.'}`}
          onPress={onLearn}
        />
        <Option
          icon="book"
          title="Read section by section"
          detail={`${sections} section${sections === 1 ? '' : 's'}, one page at a time, with Next to move on.${completed ? ' Good for revising.' : ''}`}
          onPress={onRead}
        />
      </View>
    </Screen>
  );
}

function Option({ icon, title, detail, onPress }: { icon: IconName; title: string; detail: string; onPress: () => void }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  return (
    <PressableCard onPress={onPress} accessibilityRole="button" accessibilityLabel={`${title}. ${detail}`} style={styles.option}>
      <View style={styles.optionIcon}><Icon name={icon} size={22} color={colors.primaryText} /></View>
      <View style={styles.flex}>
        <Text style={styles.optionTitle}>{title}</Text>
        <Text style={styles.optionDetail}>{detail}</Text>
      </View>
      <Icon name="chevronRight" size={20} color={colors.textTertiary} />
    </PressableCard>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    flex: { flex: 1, minWidth: 0 },
    head: { gap: 6, marginTop: 8, marginBottom: 20 },
    kicker: { ...Type.overline, color: colors.primaryText },
    title: { ...Type.title1, color: colors.text },
    description: { fontSize: 15, lineHeight: 22, color: colors.textSecondary },
    source: { marginTop: 2 },
    question: { ...Type.headline, color: colors.text, marginBottom: 10 },
    options: { gap: 12 },
    option: { flexDirection: 'row', alignItems: 'center', gap: 14 },
    optionIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primarySubtle },
    optionTitle: { ...Type.title3, color: colors.text },
    optionDetail: { fontSize: 13.5, lineHeight: 19, color: colors.textSecondary, marginTop: 2 },
  });
}
