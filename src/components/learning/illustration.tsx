// A picture in the reading, like the pictures beside the text of an
// encyclopaedia article (owner, 2026-10-31). Data: data/illustrations.ts.
//   IllustrationFigure  one picture with its caption and credit (a real
//                       dissection photo stays blurred until tapped)
//   WithIllustrations   lays a section's text and its pictures out together:
//                       side by side when the page is wide enough, the
//                       pictures after the opening paragraph otherwise
import { LIVE_SITE } from '@/lib/live-site';
import { Image } from 'expo-image';
import { useState, type ReactNode } from 'react';
import { Linking, Platform, StyleSheet, View } from 'react-native';

import { useLayoutWidth } from '@/components/side-panel-store';
import { Sheet } from '@/components/ui/sheet';
import { Interactive } from '@/components/ui/interactive';
import { Text } from '@/components/ui/text';
import { Paper, Radius, Type, type ThemeColors } from '@/constants/theme';
import type { Illustration } from '@/data/illustrations';
import { useThemedStyles } from '@/hooks/use-theme';

const uriOf = (src: string) => (Platform.OS === 'web' ? src : `${LIVE_SITE}${src}`);

// Wide enough for text and a picture side by side (the lesson page also has
// its outline column on desktop, so this is the window, not the text column).
const SIDE_BY_SIDE = 1180;
const SIDE_WIDTH = 320;

export function IllustrationFigure({ item, side = false }: { item: Illustration; side?: boolean }) {
  const styles = useThemedStyles(createStyles);
  const [open, setOpen] = useState(false);
  // Photos of real bodies (data/cadaver-photos.ts) stay blurred until the learner taps "Show".
  const [shown, setShown] = useState(!item.realSpecimen);
  const ratio = item.width / item.height;
  return (
    <View style={[styles.figure, side && styles.figureSide]}>
      <Interactive
        onPress={() => (shown ? setOpen(true) : setShown(true))}
        accessibilityRole="imagebutton"
        accessibilityLabel={shown ? `${item.caption} Opens the picture larger.` : 'Photo of a real human dissection, hidden. Shows the photo.'}
        style={styles.frame}
      >
        <View style={[styles.box, { aspectRatio: ratio, maxHeight: side ? 420 : 380 }]}>
          <Image source={{ uri: uriOf(item.src) }} style={StyleSheet.absoluteFill} contentFit="contain" transition={150} blurRadius={shown ? 0 : 40} accessibilityIgnoresInvertColors />
          {shown ? null : (
            <View style={styles.cover}>
              <Text style={styles.coverTitle}>Real dissection photo</Text>
              <Text style={styles.coverText}>A photo of a donated human body. Tap to show it.</Text>
            </View>
          )}
        </View>
      </Interactive>
      <Text style={styles.caption}>
        {item.label ? <Text style={styles.label}>{`${item.label}  `}</Text> : null}
        {item.caption}
      </Text>
      {item.note ? (
        <View style={styles.note}>
          <Text style={styles.noteTitle}>What to notice</Text>
          <Text style={styles.noteText}>{item.note}</Text>
        </View>
      ) : null}
      {/* Drawings made for the app (e.g. the chemistry structures) have no outside source to open. */}
      {item.sourceUrl ? (
        <View style={styles.creditRow}>
          <Interactive onPress={() => void Linking.openURL(item.sourceUrl).catch(() => undefined)} accessibilityRole="link">
            <Text style={styles.credit}>{`${item.realSpecimen ? 'Photo' : 'Image'}: ${item.credit}`}</Text>
          </Interactive>
          {/* CC BY-SA asks for a link to the licence itself. */}
          {item.licenseUrl ? (
            <Interactive onPress={() => void Linking.openURL(item.licenseUrl!).catch(() => undefined)} accessibilityRole="link">
              <Text style={styles.credit}>Licence</Text>
            </Interactive>
          ) : null}
        </View>
      ) : (
        <Text style={[styles.credit, styles.creditPlain]}>{`Image: ${item.credit}`}</Text>
      )}
      <Sheet visible={open} onClose={() => setOpen(false)} title="Picture" subtitle={item.credit} width={1000}>
        <View style={[styles.big, { aspectRatio: ratio }]}>
          <Image source={{ uri: uriOf(item.src) }} style={StyleSheet.absoluteFill} contentFit="contain" accessibilityLabel={item.caption} />
        </View>
        <Text style={styles.bigCaption}>{item.label ? `${item.label}. ` : ''}{item.caption}</Text>
        {item.note ? <Text style={styles.bigNote}>{item.note}</Text> : null}
      </Sheet>
    </View>
  );
}

/**
 * A reading section's opening text with its pictures: beside it on wide
 * screens, after the first paragraph on phones and tablets.
 */
export function WithIllustrations({ items, lead, rest }: { items: Illustration[]; lead: ReactNode; rest?: ReactNode }) {
  const styles = useThemedStyles(createStyles);
  const width = useLayoutWidth();
  if (!items.length) return <>{lead}{rest}</>;
  if (width >= SIDE_BY_SIDE) {
    return (
      <View style={styles.row}>
        <View style={styles.text}>{lead}{rest}</View>
        <View style={styles.side}>
          {items.map((item) => <IllustrationFigure key={item.src} item={item} side />)}
        </View>
      </View>
    );
  }
  return (
    <>
      {lead}
      {items.map((item) => <IllustrationFigure key={item.src} item={item} />)}
      {rest}
    </>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'flex-start', gap: 20 },
    text: { flex: 1, minWidth: 0 },
    side: { width: SIDE_WIDTH, gap: 12 },
    figure: { marginVertical: 10, gap: 4, alignSelf: 'stretch' },
    figureSide: { marginVertical: 2 },
    frame: { borderRadius: Radius.md, overflow: 'hidden' },
    box: { width: '100%', alignSelf: 'center', borderRadius: Radius.md, overflow: 'hidden', backgroundColor: Paper, borderWidth: 1, borderColor: colors.border },
    caption: { ...Type.caption, color: colors.textSecondary, lineHeight: 18 },
    label: { fontWeight: '700', color: colors.text },
    note: { gap: 3, marginTop: 4, paddingVertical: 8, paddingHorizontal: 10, borderLeftWidth: 3, borderLeftColor: colors.accentText, backgroundColor: colors.surfaceMuted, borderRadius: Radius.sm },
    noteTitle: { fontSize: 11, fontWeight: '700', letterSpacing: 0.6, color: colors.accentText, textTransform: 'uppercase' },
    noteText: { fontSize: 13, lineHeight: 20, color: colors.text },
    bigNote: { ...Type.callout, color: colors.text, marginTop: 8 },
    credit: { fontSize: 11, color: colors.textTertiary, textDecorationLine: 'underline' },
    creditRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
    cover: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', padding: 16, gap: 4, backgroundColor: 'rgba(0,0,0,0.35)' },
    coverTitle: { fontSize: 15, fontWeight: '700', color: '#fff', textAlign: 'center' },
    coverText: { fontSize: 13, color: '#fff', textAlign: 'center' },
    creditPlain: { textDecorationLine: 'none' },
    big: { width: '100%', backgroundColor: Paper, borderRadius: Radius.md, overflow: 'hidden' },
    bigCaption: { ...Type.callout, color: colors.textSecondary, marginTop: 10 },
  });
}
