// "Built from: CIRCULATION 1 (slides 41–58)" — the lecture slides a lesson was built from,
// shown on lesson cards and lesson openings before the learner starts (owner, 2026-11-14).
// The text comes from data/lesson-lecture.ts (HB2 lessons) or an HB1 lesson's `source`.
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import type { ThemeColors } from '@/constants/theme';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

export function LectureSource({ text, lines, style }: { text?: string | null; lines?: number; style?: StyleProp<ViewStyle> }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  if (!text) return null;
  return (
    <View style={[styles.row, style]} accessible accessibilityLabel={`Built from the lecture: ${text}`}>
      <Icon name="book" size={13} color={colors.textTertiary} style={styles.icon} />
      <Text style={styles.text} numberOfLines={lines}>
        <Text style={styles.label}>Built from: </Text>
        {text}
      </Text>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'flex-start', gap: 6 },
    icon: { marginTop: 2.5 },
    text: { flex: 1, minWidth: 0, fontSize: 12.5, lineHeight: 18, color: colors.textSecondary },
    label: { fontWeight: '600', color: colors.textSecondary },
  });
}
