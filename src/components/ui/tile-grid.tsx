import { StyleSheet, View } from 'react-native';

import { useLayoutWidth } from '@/components/side-panel-store';
import { CardGrid } from '@/components/ui/card-grid';
import { Icon, type IconName } from '@/components/ui/icon';
import { PressableCard } from '@/components/ui/interactive';
import { Pill } from '@/components/ui/pill';
import { Text } from '@/components/ui/text';
import { TABLET_BREAKPOINT, Type, type ThemeColors } from '@/constants/theme';
import { useExperience } from '@/hooks/use-experience';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

export type Tile = { id: string; icon: IconName; title: string; detail: string; badge?: string; onPress: () => void; disabled?: boolean; hidden?: boolean };

/**
 * Uniform tiles: every tile has the same layout (icon, title, up to three
 * lines, an optional badge) and the same width and height, in every row; an
 * unfinished last row keeps its tiles the same size. `columns` is the most per
 * row; narrower space shows fewer.
 *
 * Phones (under the tablet width): two compact tiles per row, with the icon
 * above the title and two lines of detail, so a long list of tools is a short
 * grid instead of a tall stack of near-empty cards.
 */
export function TileGrid({ tiles, columns = 2 }: { tiles: readonly Tile[]; columns?: number }) {
  return <TileCards tiles={tiles} columns={columns} />;
}

function TileCards({ tiles, columns }: { tiles: readonly Tile[]; columns: number }) {
  const styles = useThemedStyles(createStyles);
  // Originate: the same tiles as flat bordered cards; the icon sits on its own
  // in the brand colour instead of in a tinted square.
  const originate = useExperience() === 'originate';
  const colors = useTheme();
  const compact = useLayoutWidth() < TABLET_BREAKPOINT;
  const iconColor = originate ? colors.primaryText : colors.accentText;
  const visible = tiles.filter((tile) => !tile.hidden);

  if (compact) {
    return (
      <CardGrid maxColumns={2} minItemWidth={140} gap={10}>
        {visible.map((tile) => (
          <PressableCard key={tile.id} onPress={tile.onPress} disabled={tile.disabled} accessibilityLabel={`${tile.title}. ${tile.detail}`} style={[styles.compactTile, tile.disabled && styles.off]}>
            <View style={styles.compactTop}>
              <View style={[styles.icon, styles.compactIcon, originate && styles.iconPlain]}><Icon name={tile.icon} size={20} color={iconColor} /></View>
              {tile.badge ? <Pill label={tile.badge} tone="gold" /> : null}
            </View>
            <Text style={styles.compactTitle} numberOfLines={2}>{tile.title}</Text>
            <Text style={styles.compactDetail} numberOfLines={2}>{tile.detail}</Text>
          </PressableCard>
        ))}
      </CardGrid>
    );
  }

  return (
    <CardGrid maxColumns={columns} minItemWidth={250}>
      {visible.map((tile) => (
        <PressableCard key={tile.id} onPress={tile.onPress} disabled={tile.disabled} accessibilityLabel={`${tile.title}. ${tile.detail}`} style={[styles.tile, tile.disabled && styles.off]}>
          <View style={[styles.icon, originate && styles.iconPlain]}><Icon name={tile.icon} size={20} color={iconColor} /></View>
          <View style={styles.text}>
            <View style={styles.head}>
              <Text style={styles.title} numberOfLines={1}>{tile.title}</Text>
              {tile.badge ? <Pill label={tile.badge} tone="gold" /> : null}
            </View>
            <Text style={styles.detail} numberOfLines={3}>{tile.detail}</Text>
          </View>
        </PressableCard>
      ))}
    </CardGrid>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    tile: { flexGrow: 1, flexDirection: 'row', alignItems: 'flex-start', gap: 14, paddingVertical: 16 },
    off: { opacity: 0.6 },
    icon: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.accentSubtle },
    iconPlain: { width: 24, height: 24, backgroundColor: 'transparent', alignItems: 'flex-start' },
    text: { flex: 1, minWidth: 0, gap: 3 },
    head: { flexDirection: 'row', alignItems: 'center', gap: 8, minHeight: 24 },
    title: { ...Type.headline, color: colors.text, flexShrink: 1 },
    // Room for all three lines on every tile, so every tile is the same height.
    detail: { fontSize: 13.5, lineHeight: 20, minHeight: 60, color: colors.textSecondary },

    // Phones: a square-ish tile, icon above the words.
    compactTile: { flexGrow: 1, padding: 14, gap: 6 },
    compactTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, minHeight: 36, marginBottom: 2 },
    compactIcon: { width: 36, height: 36, borderRadius: 12 },
    compactTitle: { fontSize: 15, lineHeight: 20, fontWeight: '700', color: colors.text, minHeight: 20 },
    // Two lines reserved, so tiles in a row stay the same height.
    compactDetail: { fontSize: 12.5, lineHeight: 17, minHeight: 34, color: colors.textSecondary },
  });
}
