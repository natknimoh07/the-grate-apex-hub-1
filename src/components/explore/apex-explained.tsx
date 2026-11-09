import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CardGrid } from '@/components/ui/card-grid';
import { Icon } from '@/components/ui/icon';
import { Card, Interactive, PressableCard } from '@/components/ui/interactive';
import { Pill } from '@/components/ui/pill';
import { Text } from '@/components/ui/text';
import { YoutubePlayer } from '@/components/ui/youtube-player';
import { Type, type ThemeColors } from '@/constants/theme';
import { type ApexSubjectId, type ApexVideo, APEX_VIDEOS, chapterSeconds, thumbnailUrl, videosBySubject } from '@/data/apex-explained';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

// Explore → Apex Explained. Three taps: the Apex Explained button, then a subject,
// then the video (it plays here; tap a chapter to jump to it).
function VideoCard({ video, autoOpen }: { video: ApexVideo; autoOpen: boolean }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const [playing, setPlaying] = useState(autoOpen);
  const [start, setStart] = useState(0);
  return (
    <Card style={styles.card}>
      {playing ? (
        <YoutubePlayer id={video.id} title={video.title} start={start} />
      ) : (
        <Interactive onPress={() => setPlaying(true)} accessibilityRole="button" accessibilityLabel={`Play ${video.title}`} style={styles.thumb}>
          <Image source={{ uri: thumbnailUrl(video.id) }} contentFit="cover" style={StyleSheet.absoluteFill} />
          <View style={styles.play}><Icon name="play" size={22} color="#FFFFFF" filled /></View>
          <View style={styles.length}><Text style={styles.lengthText}>{video.length}</Text></View>
        </Interactive>
      )}
      <Text style={styles.title}>{video.title}</Text>
      {video.summary ? <Text style={styles.summary}>{video.summary}</Text> : null}
      {video.chapters?.length ? (
        <View style={styles.chapters}>
          {video.chapters.map((chapter) => (
            <Interactive
              key={chapter.at}
              onPress={() => { setStart(chapterSeconds(chapter.at)); setPlaying(true); }}
              accessibilityRole="button"
              accessibilityLabel={`Jump to ${chapter.label} at ${chapter.at}`}
              style={styles.chapter}
            >
              <Text style={styles.chapterTime}>{chapter.at}</Text>
              <Text style={styles.chapterLabel} numberOfLines={1}>{chapter.label}</Text>
              <Icon name="chevronRight" size={14} color={colors.textTertiary} />
            </Interactive>
          ))}
        </View>
      ) : null}
    </Card>
  );
}

export function ApexExplainedSection({ style }: { style?: object }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState<ApexSubjectId | null>(null);
  const groups = videosBySubject();
  if (groups.length === 0) return null;
  const chosen = groups.find((group) => group.id === subject);
  return (
    <View style={style}>
      <PressableCard
        onPress={() => { setOpen((value) => !value); setSubject(null); }}
        accessibilityRole="button"
        accessibilityLabel="Apex Explained video lessons"
        accessibilityHint={open ? 'Hides the subjects' : 'Shows the subjects'}
        style={styles.entry}
      >
        <View style={styles.entryIcon}><Icon name="play" size={18} color={colors.onPrimary} filled /></View>
        <View style={styles.flex}>
          <View style={styles.titleRow}>
            <Text style={styles.entryTitle}>Apex Explained</Text>
            <Pill label={`${APEX_VIDEOS.length} videos`} tone="gold" />
          </View>
          <Text style={styles.entryText} numberOfLines={2}>Video lessons from The GrAte Apex Team. Pick a subject, then watch.</Text>
        </View>
        <Icon name={open ? 'chevronUp' : 'chevronDown'} size={18} color={colors.primaryText} />
      </PressableCard>

      {open ? (
        <View style={styles.panel}>
          <Text style={styles.step}>Choose a subject</Text>
          <View style={styles.subjects}>
            {groups.map((group) => {
              const active = group.id === subject;
              return (
                <Interactive
                  key={group.id}
                  onPress={() => setSubject(active ? null : group.id)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: active }}
                  accessibilityLabel={`${group.label}, ${group.videos.length} ${group.videos.length === 1 ? 'video' : 'videos'}`}
                  style={({ hovered }) => [styles.subject, active && styles.subjectActive, hovered && !active && styles.subjectHover]}
                >
                  <Text style={[styles.subjectText, active && styles.subjectTextActive]}>{group.label}</Text>
                  <Text style={[styles.subjectCount, active && styles.subjectTextActive]}>{group.videos.length}</Text>
                </Interactive>
              );
            })}
          </View>
          {chosen ? (
            <View key={chosen.id} style={styles.videos}>
              <Text style={styles.step}>{chosen.label}</Text>
              <CardGrid minItemWidth={300} maxColumns={2}>
                {chosen.videos.map((video) => <VideoCard key={video.id} video={video} autoOpen={chosen.videos.length === 1} />)}
              </CardGrid>
            </View>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    flex: { flex: 1, minWidth: 180, gap: 3 },
    entry: { flexDirection: 'row', alignItems: 'center', gap: 14 },
    entryIcon: { width: 42, height: 42, borderRadius: 13, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
    titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
    entryTitle: { ...Type.title3, color: colors.text },
    entryText: { fontSize: 13.5, lineHeight: 19, color: colors.textSecondary },
    panel: { marginTop: 12, gap: 12 },
    step: { fontSize: 12, fontWeight: '800', letterSpacing: 0.4, color: colors.textTertiary, textTransform: 'uppercase' },
    subjects: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
    subject: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 12, paddingHorizontal: 18, borderRadius: 14, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface },
    subjectHover: { borderColor: colors.primaryBorder },
    subjectActive: { backgroundColor: colors.primary, borderColor: colors.primary },
    subjectText: { fontSize: 15, fontWeight: '800', color: colors.text },
    subjectTextActive: { color: colors.onPrimary },
    subjectCount: { fontSize: 13, fontWeight: '700', color: colors.textSecondary },
    videos: { gap: 10 },
    card: { flexGrow: 1, gap: 10, padding: 14 },
    thumb: { width: '100%', aspectRatio: 16 / 9, borderRadius: 14, overflow: 'hidden', backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
    play: { width: 52, height: 52, borderRadius: 26, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center' },
    length: { position: 'absolute', right: 8, bottom: 8, borderRadius: 6, backgroundColor: 'rgba(0,0,0,0.75)', paddingHorizontal: 6, paddingVertical: 2 },
    lengthText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
    title: { ...Type.headline, color: colors.text },
    summary: { fontSize: 13, lineHeight: 19, color: colors.textSecondary },
    chapters: { gap: 2, borderTopWidth: 1, borderTopColor: colors.divider, paddingTop: 8 },
    chapter: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 6 },
    chapterTime: { width: 44, fontSize: 12, fontWeight: '800', color: colors.primaryText },
    chapterLabel: { flex: 1, minWidth: 0, fontSize: 13, color: colors.textSecondary },
  });
}
