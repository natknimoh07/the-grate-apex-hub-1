import { Image } from 'expo-image';
import { Linking, StyleSheet, View } from 'react-native';

import { Icon } from '@/components/ui/icon';
import { Interactive } from '@/components/ui/interactive';
import { Text } from '@/components/ui/text';
import { thumbnailUrl, watchUrl } from '@/data/apex-explained';

// Phones: the video's still frame; tapping opens it in YouTube.
// (The web version, youtube-player.web.tsx, plays it inside the page.)
export function YoutubePlayer({ id, title, start = 0 }: { id: string; title: string; start?: number }) {
  return (
    <Interactive onPress={() => void Linking.openURL(watchUrl(id, start)).catch(() => {})} accessibilityRole="button" accessibilityLabel={`Play ${title}`} style={styles.frame}>
      <Image source={{ uri: thumbnailUrl(id) }} contentFit="cover" style={StyleSheet.absoluteFill} />
      <View style={styles.play}>
        <Icon name="play" size={22} color="#FFFFFF" filled />
        <Text style={styles.text}>Watch</Text>
      </View>
    </Interactive>
  );
}

const styles = StyleSheet.create({
  frame: { width: '100%', aspectRatio: 16 / 9, borderRadius: 14, overflow: 'hidden', backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  play: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 9, paddingHorizontal: 16, borderRadius: 999, backgroundColor: 'rgba(0,0,0,0.6)' },
  text: { color: '#FFFFFF', fontWeight: '700' },
});
