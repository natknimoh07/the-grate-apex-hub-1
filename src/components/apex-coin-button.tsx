import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from '@/components/ui/text';

import { Interactive } from '@/components/ui/interactive';
import { Sheet } from '@/components/ui/sheet';
import { Type, type ThemeColors } from '@/constants/theme';
import { coinsOf, LESSON_COINS } from '@/data/apex-coins';
import { useAuth } from '@/hooks/use-auth';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

/** A compact GA coin in the Home toolbar, opening balance and earning details. */
export function ApexCoinButton() {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const { user } = useAuth();
  const [visible, setVisible] = useState(false);
  // The account is watched live (hooks/use-auth), so the balance is always current and
  // costs no reads. Until the account has been read, the copy kept on this device is shown
  // (it used to show "—" until then).
  const known = user?.profileLoaded || user?.profile?.coins !== undefined || user?.profile?.apexCoins !== undefined;
  const balance = known && user ? coinsOf(user.profile) : null;

  if (!user) return null;
  return (
    <>
      <Interactive onPress={() => setVisible(true)} accessibilityLabel={`Apex Coins${balance !== null ? `: ${balance.toLocaleString()}` : ''}`} accessibilityHint="Shows your coin balance and how to earn coins" style={styles.button}>
        <View style={styles.coin}>
          <Image source={require('@/assets/images/grateapex-mark-letters.png')} style={styles.logoLayer} tintColor="#0A1F5C" resizeMode="contain" />
          <Image source={require('@/assets/images/grateapex-mark-gold.png')} style={styles.logoLayer} resizeMode="contain" />
        </View>
        {/* The balance beside the coin, so it is seen without opening anything. */}
        {balance !== null ? <Text style={styles.count} numberOfLines={1}>{balance.toLocaleString()}</Text> : null}
      </Interactive>
      <Sheet visible={visible} onClose={() => setVisible(false)} title="Apex Coins" subtitle="Your balance and ways to earn." footer={null}>
        <View style={styles.content}>
          <View style={styles.balancePanel}>
            <Text style={styles.balanceLabel}>YOUR BALANCE</Text>
            <Text style={styles.balance}>{balance === null ? 'Loading…' : balance.toLocaleString()}</Text>
            <Text style={styles.balanceLabel}>APEX COINS</Text>
          </View>
          <Text style={styles.heading}>How to earn coins</Text>
          {/* The amounts paid in data/apex-coins.ts. */}
          <View style={styles.rewardRow}>
            <Text style={styles.rewardText}>Complete a lesson (the first time)</Text>
            <Text style={styles.rewardAmount}>+{LESSON_COINS}</Text>
          </View>
          <View style={styles.rewardRow}>
            <Text style={styles.rewardText}>Complete an Apex Challenge</Text>
            <Text style={styles.rewardAmount}>+10</Text>
          </View>
          <View style={styles.rewardRow}>
            <Text style={styles.rewardText}>Finish a topic</Text>
            <Text style={styles.rewardAmount}>+5</Text>
          </View>
          <Text style={styles.note}>You can also share Apex Coins with accepted friends from the You tab.</Text>
        </View>
      </Sheet>
    </>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    button: { minWidth: 40, height: 40, borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingHorizontal: 3 },
    count: { fontSize: 14, fontWeight: '800', color: colors.text, maxWidth: 80 },
    coin: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.accent, borderWidth: 2, borderColor: colors.accentText, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
    logoLayer: { position: 'absolute', width: 23, height: 19 },
    content: { gap: 10 },
    balancePanel: { alignItems: 'center', justifyContent: 'center', gap: 3, paddingVertical: 18, borderRadius: 16, backgroundColor: colors.accentSubtle },
    balanceLabel: { ...Type.overline, color: colors.accentText, letterSpacing: 1 },
    balance: { ...Type.display, color: colors.text, fontSize: 32 },
    heading: { ...Type.callout, color: colors.text, fontWeight: '800', marginTop: 6 },
    rewardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: colors.hairline },
    rewardText: { ...Type.callout, color: colors.textSecondary },
    rewardAmount: { ...Type.callout, color: colors.accentText, fontWeight: '900' },
    note: { ...Type.caption, color: colors.textTertiary, marginTop: 4 },
  });
}
