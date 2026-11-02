// "References" at the end of a lesson's reading (owner, 2026-11-02): the lecture
// slides, textbooks, pictures and 3D models the lesson uses, numbered like a
// textbook's reference list. Data: data/lesson-references.ts.
import { useMemo } from 'react';
import { Linking, StyleSheet, View } from 'react-native';

import { Interactive } from '@/components/ui/interactive';
import { Text } from '@/components/ui/text';
import type { ThemeColors } from '@/constants/theme';
import type { Lesson } from '@/data/lesson-types';
import { lessonReferences, REFERENCES_NOTE } from '@/data/lesson-references';
import { useThemedStyles } from '@/hooks/use-theme';

export function LessonReferences({ lesson }: { lesson: Lesson }) {
  const styles = useThemedStyles(createStyles);
  const groups = useMemo(() => lessonReferences(lesson), [lesson]);
  if (groups.length === 0) return null;
  let number = 0;
  return (
    <View style={styles.box} accessibilityRole="summary">
      <Text style={styles.title}>References</Text>
      {groups.map((group) => (
        <View key={group.heading} style={styles.group}>
          <Text style={styles.heading}>{group.heading.toUpperCase()}</Text>
          {group.items.map((item) => {
            number += 1;
            return (
              <View key={item.text} style={styles.row}>
                <Text style={styles.number}>{number}.</Text>
                <View style={styles.flex}>
                  <Text style={styles.text}>{item.text}</Text>
                  {item.detail ? <Text style={styles.detail}>{item.detail}</Text> : null}
                  {item.url ? (
                    <Interactive onPress={() => void Linking.openURL(item.url!).catch(() => undefined)} accessibilityRole="link">
                      <Text style={styles.link}>{item.url.replace(/^https?:\/\//, '')}</Text>
                    </Interactive>
                  ) : null}
                </View>
              </View>
            );
          })}
        </View>
      ))}
      <Text style={styles.note}>{REFERENCES_NOTE}</Text>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    box: { gap: 12, marginTop: 8, paddingTop: 16, borderTopWidth: 1, borderTopColor: colors.border },
    title: { fontSize: 15, fontWeight: '700', color: colors.text },
    group: { gap: 8 },
    heading: { fontSize: 11, fontWeight: '700', letterSpacing: 0.8, color: colors.textSecondary },
    row: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
    number: { width: 22, fontSize: 12.5, lineHeight: 19, color: colors.textTertiary },
    flex: { flex: 1, minWidth: 0 },
    text: { fontSize: 12.5, lineHeight: 19, color: colors.textSecondary },
    detail: { fontSize: 12, lineHeight: 18, color: colors.textTertiary },
    link: { fontSize: 12, lineHeight: 18, color: colors.primaryText, textDecorationLine: 'underline' },
    note: { fontSize: 12, lineHeight: 18, color: colors.textTertiary, fontStyle: 'italic' },
  });
}
