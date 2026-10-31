import { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useReducedMotion, useSharedValue, withDelay, withSequence, withSpring, withTiming } from 'react-native-reanimated';

import { Text } from '@/components/ui/text';
import { MOTION, SPRING } from '@/constants/motion';
import { elevation, type ThemeColors } from '@/constants/theme';
import { type CoinGain, catchUpLessonCoins, onCoinsGained } from '@/data/apex-coins';
import { findLesson } from '@/data/curriculum';
import { lessonCompletionXp } from '@/data/learning/xp-rules';
import { getProgressSnapshot, waitForProgressSync } from '@/data/progress';
import { useAuth } from '@/hooks/use-auth';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

// "+10 Apex Coins": a gold pill that floats in at the top whenever coins are earned
// (data/apex-coins.ts → onCoinsGained). Display only: it never blocks taps.
// It also starts the one-time payment of coins for lessons completed before coins
// existed (catchUpLessonCoins), a little after sign-in so the synced lessons are in.
const VISIBLE_MS = 2600;
const CATCH_UP_AFTER_MS = 20_000;

export function CoinGainFloat() {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const reduceMotion = useReducedMotion();
  const { user } = useAuth();
  const uid = user?.uid ?? null;
  const [queue, setQueue] = useState<(CoinGain & { key: number })[]>([]);
  const nextKey = useRef(0);
  const opacity = useSharedValue(0);
  const lift = useSharedValue(-16);
  const current = queue[0] ?? null;

  useEffect(() => onCoinsGained((gain) => setQueue((items) => [...items, { ...gain, key: nextKey.current++ }])), []);

  useEffect(() => {
    if (!uid) return;
    let live = true;
    const timer = setTimeout(() => {
      void (async () => {
        await waitForProgressSync();
        if (!live) return;
        const progress = getProgressSnapshot();
        const lessons = progress.completedLessons.map((id) => ({
          id,
          xp: lessonCompletionXp(findLesson(id)?.lesson.xp),
          completedAt: progress.lessonCompletedAt[id] ?? Date.now(),
        }));
        await catchUpLessonCoins(lessons);
      })().catch((error) => console.warn('Could not pay coins for earlier lessons:', error));
    }, CATCH_UP_AFTER_MS);
    return () => {
      live = false;
      clearTimeout(timer);
    };
  }, [uid]);

  useEffect(() => {
    if (!current) return;
    const shown = current.key;
    const done = (finished?: boolean) => {
      'worklet';
      if (finished) runOnJS(setQueue)((items) => items.filter((item) => item.key !== shown));
    };
    opacity.value = withSequence(withTiming(1, { duration: MOTION.standard }), withDelay(VISIBLE_MS, withTiming(0, { duration: MOTION.standard }, done)));
    lift.value = reduceMotion ? 0 : -16;
    if (!reduceMotion) lift.value = withSpring(0, SPRING.pop);
    // Only when the next gain comes up.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current?.key]);

  const pillStyle = useAnimatedStyle(() => ({ opacity: opacity.value, transform: [{ translateY: lift.value }] }));

  if (!current) return null;
  return (
    <View pointerEvents="none" style={styles.overlay}>
      <Animated.View
        accessibilityLiveRegion="polite"
        accessibilityLabel={`Earned ${current.amount} Apex Coins. ${current.label}`}
        style={[styles.pill, elevation(colors, 3), pillStyle]}
      >
        <View style={styles.coin}>
          <Image source={require('@/assets/images/grateapex-mark-letters.png')} style={styles.logoLayer} tintColor="#0A1F5C" resizeMode="contain" />
          <Image source={require('@/assets/images/grateapex-mark-gold.png')} style={styles.logoLayer} resizeMode="contain" />
        </View>
        <View style={styles.text}>
          <Text style={styles.amount}>+{current.amount.toLocaleString()} Apex Coins</Text>
          <Text style={styles.label} numberOfLines={1}>{current.label}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    overlay: { position: 'absolute', top: 18, left: 0, right: 0, alignItems: 'center', zIndex: 60 },
    pill: { flexDirection: 'row', alignItems: 'center', gap: 10, maxWidth: '92%', paddingVertical: 8, paddingLeft: 8, paddingRight: 16, borderRadius: 999, backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.accent },
    coin: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.accent, borderWidth: 2, borderColor: colors.accentText, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
    logoLayer: { position: 'absolute', width: 23, height: 19 },
    text: { flexShrink: 1 },
    amount: { fontSize: 15, fontWeight: '800', color: colors.accentText },
    label: { fontSize: 12, color: colors.textSecondary },
  });
}
