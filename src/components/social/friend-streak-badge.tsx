import { StyleSheet, View } from 'react-native';

import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { type ThemeColors } from '@/constants/theme';
import { type StreakBadge } from '@/data/friend-streak-badges';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

/**
 * A friend streak beside a name, like Snapchat: the flame and the days, and a clock
 * when it is at risk (stamp each other today to keep it). Nothing when there is no streak.
 */
export function FriendStreakBadge({ badge, size = 'md' }: { badge: StreakBadge | undefined; size?: 'sm' | 'md' }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  if (!badge || badge.streak <= 0) return null;
  const small = size === 'sm';
  return (
    <View
      style={[styles.badge, badge.atRisk && styles.risk]}
      accessibilityLabel={`${badge.streak}-day friend streak${badge.atRisk ? ', at risk today' : ''}`}
    >
      <Icon name="streak" size={small ? 13 : 15} color={colors.accentText} filled />
      <Text style={[styles.days, small && styles.daysSmall]}>{badge.streak}</Text>
      {badge.atRisk ? <Icon name="clock" size={small ? 11 : 13} color={colors.warningStrong} /> : null}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    badge: { flexDirection: 'row', alignItems: 'center', gap: 3, paddingVertical: 2, paddingHorizontal: 7, borderRadius: 999, backgroundColor: colors.accentSubtle },
    risk: { borderWidth: 1, borderColor: colors.warningBorder },
    days: { fontSize: 13, fontWeight: '800', color: colors.accentText },
    daysSmall: { fontSize: 12 },
  });
}
