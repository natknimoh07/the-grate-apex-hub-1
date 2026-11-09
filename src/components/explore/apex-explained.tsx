import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CardGrid } from '@/components/ui/card-grid';
import { Icon } from '@/components/ui/icon';
import { Card, Interactive } from '@/components/ui/interactive';
import { Pill } from '@/components/ui/pill';
import { SectionHeader } from '@/components/ui/screen';
import { Text } from '@/components/ui/text';
import { YoutubePlayer } from '@/components/ui/youtube-player';
import { Type, type ThemeColors } from '@/constants/theme';
import { type ApexVideo, chapterSeconds, thumbnailUrl, videosBySubject } from '@/data/apex-explained';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

// Explore → Apex Explained: the team's video lessons, grouped by subject.
// Tap a video to play it here; tap a chapter to jump to it.
function VideoCard({ video }: { video: ApexVideo }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const [playing, setPlaying] = useState(false);
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
  const groups = videosBySubject();
  if (groups.length === 0) return null;
  const count = groups.reduce((total, group) => total + group.videos.length, 0);
  return (
    <View style={style}>
      <SectionHeader title="Apex Explained" subtitle="Video lessons from The GrAte Apex Team, by subject. Tap a video to watch it here, or a chapter to jump straight to it." />
      {groups.map((group) => (
        <View key={group.id} style={styles.group}>
          <View style={styles.groupHead}>
            <Text style={styles.groupTitle}>{group.label}</Text>
            <Pill label={`${group.videos.length} ${group.videos.length === 1 ? 'video' : 'videos'}`} tone="primary" />
          </View>
          <CardGrid minItemWidth={300} maxColumns={2}>{group.videos.map((video) => <VideoCard key={video.id} video={video} />)}</CardGrid>
        </View>
      ))}
      <Text style={styles.count}>{count} {count === 1 ? 'video' : 'videos'} so far. New ones are added as we publish them.</Text>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    group: { marginTop: 14, gap: 10 },
    groupHead: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    groupTitle: { ...Type.title3, color: colors.text },
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
    count: { marginTop: 10, fontSize: 12, color: colors.textTertiary },
  });
}
