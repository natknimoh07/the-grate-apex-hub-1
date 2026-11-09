import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon } from '@/components/ui/icon';
import { Card, Interactive, PressableCard } from '@/components/ui/interactive';
import { Pill } from '@/components/ui/pill';
import { Text } from '@/components/ui/text';
import { YoutubePlayer } from '@/components/ui/youtube-player';
import { Type, type ThemeColors } from '@/constants/theme';
import { chapterSeconds, lessonVideoFor, videoById } from '@/data/apex-explained';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

// "Watch this part": the Apex Explained video (or the part of it) that matches a lesson.
// Closed until tapped, so it never gets in the way of the lesson. Shows nothing for a
// lesson with no video.
export function LessonVideoCard({ lessonId }: { lessonId?: string }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const link = lessonVideoFor(lessonId);
  const video = link ? videoById(link.videoId) : undefined;
  const [open, setOpen] = useState(false);
  // -1 is the whole video; otherwise the index of the part being watched.
  const [part, setPart] = useState(0);
  if (!link || !video) return null;
  const parts = link.parts ?? [];
  const current = part >= 0 ? parts[part] : undefined;
  const start = current ? chapterSeconds(current.start) : 0;
  const end = current?.end ? chapterSeconds(current.end) : 0;
  return (
    <View style={styles.wrap}>
      <PressableCard
        onPress={() => setOpen((value) => !value)}
        accessibilityRole="button"
        accessibilityLabel={`Watch the video for this lesson: ${video.title}`}
        style={styles.entry}
      >
        <View style={styles.icon}><Icon name="play" size={16} color={colors.onPrimary} filled /></View>
        <View style={styles.flex}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{parts.length ? 'Watch this part of the video' : 'Watch the video for this lesson'}</Text>
            <Pill label="Apex Explained" tone="gold" />
          </View>
          <Text style={styles.sub} numberOfLines={1}>{video.title}</Text>
        </View>
        <Icon name={open ? 'chevronUp' : 'chevronDown'} size={18} color={colors.primaryText} />
      </PressableCard>
      {open ? (
        <Card style={styles.player}>
          {parts.length ? (
            <View style={styles.parts}>
              {parts.map((item, index) => {
                const active = index === part;
                return (
                  <Interactive
                    key={item.start}
                    onPress={() => setPart(index)}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    style={({ hovered }) => [styles.part, active && styles.partActive, hovered && !active && styles.partHover]}
                  >
                    <Text style={[styles.partTime, active && styles.partTextActive]}>{item.start}</Text>
                    <Text style={[styles.partText, active && styles.partTextActive]} numberOfLines={1}>{item.label}</Text>
                  </Interactive>
                );
              })}
              <Interactive
                onPress={() => setPart(-1)}
                accessibilityRole="button"
                accessibilityState={{ selected: part === -1 }}
                style={({ hovered }) => [styles.part, part === -1 && styles.partActive, hovered && part !== -1 && styles.partHover]}
              >
                <Text style={[styles.partText, part === -1 && styles.partTextActive]}>Whole video</Text>
              </Interactive>
            </View>
          ) : null}
          <YoutubePlayer id={video.id} title={current ? `${video.title}: ${current.label}` : video.title} start={start} end={end} />
        </Card>
      ) : null}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    wrap: { gap: 10 },
    flex: { flex: 1, minWidth: 0, gap: 2 },
    entry: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    icon: { width: 34, height: 34, borderRadius: 11, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
    titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
    title: { ...Type.headline, color: colors.text },
    sub: { fontSize: 12.5, color: colors.textSecondary },
    player: { gap: 12, padding: 14 },
    parts: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    part: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, maxWidth: '100%' },
    partHover: { borderColor: colors.primaryBorder },
    partActive: { backgroundColor: colors.primary, borderColor: colors.primary },
    partTime: { fontSize: 12, fontWeight: '800', color: colors.primaryText },
    partText: { flexShrink: 1, fontSize: 13, fontWeight: '700', color: colors.text },
    partTextActive: { color: colors.onPrimary },
  });
}
