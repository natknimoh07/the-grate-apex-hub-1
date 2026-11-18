// Lesson text with its bold, italics, highlights, bullets and numbers (data/lesson-marks.ts), for the
// Read tab (reading-layer.tsx). HB2 lesson pages get the same marks through data/hb2-study.ts.
// Text without marks looks exactly as before.
import { useMemo } from 'react';
import { StyleSheet, type TextStyle, View } from 'react-native';

import { Rich } from '@/components/learning/legacy-blocks';
import { Text } from '@/components/ui/text';
import type { ThemeColors } from '@/constants/theme';
import { markSegments, marksToTags } from '@/data/lesson-marks';
import { useThemedStyles } from '@/hooks/use-theme';

const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = (text: string) => marksToTags(escape(text));

export function MarkedText({ text, style }: { text: string; style?: (TextStyle | null | undefined | false)[] | TextStyle }) {
  const styles = useThemedStyles(createStyles);
  const segments = useMemo(() => markSegments(text), [text]);
  const base = StyleSheet.flatten(style) ?? {};
  return (
    <>
      {segments.map((segment, i) =>
        segment.kind === 'text' ? (
          <Rich key={i} x={rich(segment.text)} style={base} />
        ) : (
          <View key={i} style={[styles.list, { marginBottom: base.marginBottom ?? 12 }]}>
            {segment.items.map((item, j) => (
              <View key={j} style={styles.item}>
                <Text style={[base, styles.marker]}>{segment.ordered ? `${j + 1}.` : '•'}</Text>
                <Rich x={rich(item)} style={[base, styles.itemText]} />
              </View>
            ))}
          </View>
        )
      )}
    </>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    list: { gap: 6 },
    item: { flexDirection: 'row', alignItems: 'flex-start' },
    marker: { minWidth: 24, marginBottom: 0, color: colors.primaryText, fontWeight: '600' },
    itemText: { flex: 1, marginBottom: 0 },
  });
