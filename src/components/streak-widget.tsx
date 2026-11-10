// Streak widget — the flame and day count shown on Study (compact button), on
// My Progress (stat tile) and on the /widget page (full card). The flame is a
// small illustration with a live flicker: the outer flame sways and stretches,
// the inner tongue bobs on its own rhythm and a soft glow breathes behind it.
// Once the streak has lapsed the flame is grey and still.

import { useEffect, useRef } from 'react';
import { Platform, Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { Text } from '@/components/ui/text';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { router } from 'expo-router';

import { SPRING } from '@/constants/motion';
import { Radius, elevation, Type, type ThemeColors } from '@/constants/theme';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';
import { useProgress } from '@/data/progress';
import { getStreakStatus } from '@/data/progression';
import { routes } from '@/lib/routes';
import { triggerStreakCelebration } from '@/components/streak-celebration';
import { Interactive } from '@/components/ui/interactive';

// ── Flame illustration ────────────────────────────────────────────────────────
// The flame's own colours are part of the picture (like the organ colours in
// lesson simulations), the same in every theme. Everything around it — the
// button, the count, the glow — uses theme tokens.

const FLAME = {
  outerTop: '#FFC53D',
  outerMid: '#FF7A1A',
  outerBottom: '#E8431F',
  innerTop: '#FFF6C2',
  innerBottom: '#FFD24A',
} as const;

const OUTER_PATH = 'M50 4 C56 22 76 38 76 66 C76 88 64 106 50 112 C36 106 24 88 24 66 C24 52 31 44 35 32 C37 45 44 50 47 44 C42 34 44 18 50 4Z';
const INNER_PATH = 'M50 56 C56 66 64 74 64 86 C64 97 57 104 50 106 C43 104 36 97 36 86 C36 74 44 66 50 56Z';

function OuterFlame({ size, id }: { size: number; id: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 116">
      <Defs>
        <LinearGradient id={`${id}o`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor={FLAME.outerTop} />
          <Stop offset="55%" stopColor={FLAME.outerMid} />
          <Stop offset="100%" stopColor={FLAME.outerBottom} />
        </LinearGradient>
      </Defs>
      <Path d={OUTER_PATH} fill={`url(#${id}o)`} />
    </Svg>
  );
}

function InnerFlame({ size, id }: { size: number; id: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 116">
      <Defs>
        <LinearGradient id={`${id}i`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor={FLAME.innerTop} />
          <Stop offset="100%" stopColor={FLAME.innerBottom} />
        </LinearGradient>
      </Defs>
      <Path d={INNER_PATH} fill={`url(#${id}i)`} />
    </Svg>
  );
}

let flameIds = 0;

/**
 * The streak flame. `lit` draws it in colour with the flicker (unless the
 * learner prefers reduced motion); otherwise it is grey and still. `glow` adds
 * the breathing halo behind it (off by default inside small buttons).
 */
export function Flame({ size, lit = true, glow = false }: { size: number; lit?: boolean; glow?: boolean }) {
  const colors = useTheme();
  const reduced = useReducedMotion();
  const sway = useSharedValue(0);
  const stretch = useSharedValue(1);
  const tongue = useSharedValue(1);
  const halo = useSharedValue(0.6);
  // Gradient ids must be unique per flame on the web, or every flame shares one.
  const id = useFlameId();

  useEffect(() => {
    if (!lit || reduced) {
      sway.value = withTiming(0);
      stretch.value = withTiming(1);
      tongue.value = withTiming(1);
      halo.value = withTiming(0.6);
      return;
    }
    const ease = Easing.inOut(Easing.sin);
    sway.value = withRepeat(withSequence(withTiming(-4, { duration: 700, easing: ease }), withTiming(4, { duration: 700, easing: ease })), -1, true);
    stretch.value = withRepeat(withSequence(withTiming(1.06, { duration: 520, easing: ease }), withTiming(0.96, { duration: 520, easing: ease })), -1, true);
    tongue.value = withRepeat(withSequence(withTiming(1.14, { duration: 380, easing: ease }), withTiming(0.9, { duration: 380, easing: ease })), -1, true);
    halo.value = withRepeat(withSequence(withTiming(1, { duration: 900, easing: ease }), withTiming(0.45, { duration: 900, easing: ease })), -1, true);
  }, [lit, reduced, sway, stretch, tongue, halo]);

  // The flame pivots around its base, so the top sways while the bottom stays put.
  const outerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: size * 0.45 },
      { rotate: `${sway.value}deg` },
      { scaleY: stretch.value },
      { translateY: -size * 0.45 },
    ],
  }));
  const innerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: size * 0.45 },
      { rotate: `${-sway.value * 0.6}deg` },
      { scaleY: tongue.value },
      { translateY: -size * 0.45 },
    ],
  }));
  const haloStyle = useAnimatedStyle(() => ({
    opacity: halo.value * 0.28,
    transform: [{ scale: 0.85 + halo.value * 0.25 }],
  }));

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {glow && lit ? (
        <Animated.View
          style={[
            { position: 'absolute', width: size * 1.3, height: size * 1.3, borderRadius: size, backgroundColor: colors.accent },
            haloStyle,
          ]}
        />
      ) : null}
      <Animated.View style={[outerStyle, !lit && { opacity: 0.3 }]}>
        <OuterFlame size={size} id={id} />
      </Animated.View>
      <Animated.View style={[{ position: 'absolute' }, innerStyle, !lit && { opacity: 0.3 }]}>
        <InnerFlame size={size} id={id} />
      </Animated.View>
    </View>
  );
}

function useFlameId() {
  const ref = useRef(0);
  if (ref.current === 0) {
    flameIds += 1;
    ref.current = flameIds;
  }
  return `fl${ref.current}`;
}

/** Kept for older callers: the flame, still and lit. */
export function FlameSvg({ size }: { size: number }) {
  return <Flame size={size} lit glow={false} />;
}

// ── Status labels ──────────────────────────────────────────────────────────────

function getStatusText(streak: number, status: ReturnType<typeof getStreakStatus>): string {
  if (status === 'none') return 'Start your streak today';
  if (status === 'lapsed') return 'Streak ended — restart today';
  if (status === 'continueToday') return `Keep your ${streak}-day streak alive`;
  if (streak >= 100) return 'Century streak — legendary';
  if (streak >= 30) return `${streak} days and counting`;
  if (streak >= 7) return `${streak} days of dedication`;
  if (streak === 1) return 'Day 1 — great start!';
  return `${streak} days in a row`;
}

// ── Streak stat tile (matches StatTile layout on My Progress page) ──────────────

export type StreakStatTileProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function StreakStatTile({ style, onPress }: StreakStatTileProps) {
  const styles = useThemedStyles(createStatTileStyles);
  const progress = useProgress();

  const status = getStreakStatus(progress.streak, progress.lastActivityDate, new Date(), progress.streakFreezes);
  const isLapsed = status === 'lapsed';
  const hasStreak = progress.streak > 0 && !isLapsed;
  const label = getStatusText(progress.streak, status);

  function handlePress() {
    if (onPress) {
      onPress();
    } else {
      triggerStreakCelebration({ streak: progress.streak, isNew: false });
    }
  }

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel={`Streak: ${progress.streak} days. ${label}.`}
      style={({ pressed }) => [
        styles.stat,
        hasStreak && styles.statActive,
        isLapsed && styles.statLapsed,
        pressed && styles.statPressed,
        style,
      ]}
    >
      <View style={styles.valueRow}>
        <View style={styles.flameWrap}>
          <Flame size={24} lit={hasStreak} />
        </View>
        <Text style={[styles.statValue, isLapsed && styles.statValueLapsed]} numberOfLines={1}>
          {progress.streak}
        </Text>
      </View>
      <Text style={[styles.statLabel, hasStreak && styles.statLabelActive]}>day streak</Text>
      <Text style={[styles.statHint, hasStreak && styles.statHintActive]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

// ── Compact streak (page headers, e.g. Study) ───────────────────────────────
// Just the flame beside the day count, in the theme's own reward colour, with
// nothing around it (owner, 2026-11-10: no outline or box), so it blends into
// every theme's page. The flame flickers while the streak is alive and goes
// grey once it has lapsed.

type CompactProps = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function StreakWidgetCompact({ onPress, style }: CompactProps) {
  const styles = useThemedStyles(createCompactStyles);
  const progress = useProgress();

  // A small pop when it appears.
  const enter = useSharedValue(0.9);
  useEffect(() => {
    enter.value = withSpring(1, SPRING.pop);
  }, [enter]);
  const enterStyle = useAnimatedStyle(() => ({ transform: [{ scale: enter.value }] }));

  const status = getStreakStatus(progress.streak, progress.lastActivityDate, new Date(), progress.streakFreezes);
  const isLapsed = status === 'lapsed';
  const hasStreak = progress.streak > 0 && !isLapsed;
  const label = getStatusText(progress.streak, status);

  function handlePress() {
    if (onPress) {
      onPress();
    } else {
      router.push(routes.progress());
    }
  }

  return (
    <Animated.View style={[enterStyle, styles.wrapper, style]}>
      <Interactive
        onPress={handlePress}
        accessibilityLabel={`Streak: ${progress.streak} days. ${label}.`}
        accessibilityHint="Opens your progress"
        style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      >
        <Flame size={26} lit={hasStreak} glow={hasStreak} />
        <Text style={[styles.count, !hasStreak && styles.countQuiet]} numberOfLines={1}>
          {progress.streak}
        </Text>
      </Interactive>
    </Animated.View>
  );
}

// ── Full widget (for /widget page) ────────────────────────────────────────────

export function StreakWidgetFull() {
  const styles = useThemedStyles(createFullStyles);
  const progress = useProgress();
  const reduced = useReducedMotion();

  const glowScale = useSharedValue(1);
  const glowOpacity = useSharedValue(0.55);

  useEffect(() => {
    if (reduced) return;
    glowScale.value = withRepeat(withSequence(
      withTiming(1.2, { duration: 1100, easing: Easing.inOut(Easing.sin) }),
      withTiming(0.9, { duration: 1100, easing: Easing.inOut(Easing.sin) })
    ), -1, true);
    glowOpacity.value = withRepeat(withSequence(
      withTiming(0.85, { duration: 1000 }),
      withTiming(0.38, { duration: 1000 })
    ), -1, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const glowStyle = useAnimatedStyle(() => ({ opacity: glowOpacity.value, transform: [{ scale: glowScale.value }] }));

  const status = getStreakStatus(progress.streak, progress.lastActivityDate, new Date(), progress.streakFreezes);
  const isLapsed = status === 'lapsed';
  const hasStreak = progress.streak > 0 && !isLapsed;
  const label = getStatusText(progress.streak, status);

  return (
    <View style={styles.card}>
      {/* Glow */}
      {hasStreak && <Animated.View style={[styles.glow, glowStyle]} />}

      {/* Flame */}
      <View style={styles.flameArea}>
        <Flame size={90} lit={hasStreak} />
      </View>

      {/* Count */}
      <Text style={[styles.count, !hasStreak && styles.countGrey]}>{progress.streak}</Text>
      <Text style={styles.dayLabel}>DAY STREAK</Text>
      <Text style={styles.statusText}>{label}</Text>

      {/* Study button */}
      <Pressable
        onPress={() => router.push(routes.learn())}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
        accessibilityRole="button"
        accessibilityLabel="Continue studying"
      >
        <Text style={styles.btnText}>Continue studying</Text>
      </Pressable>
    </View>
  );
}

// ── Stat tile styles (matches StatTile on My Progress) ─────────────────────────

function createStatTileStyles(colors: ThemeColors) {
  return StyleSheet.create({
    stat: {
      flex: 1,
      minWidth: 120,
      backgroundColor: colors.surface,
      borderRadius: Radius.md,
      paddingVertical: 14,
      paddingHorizontal: 14,
      borderWidth: 1,
      borderColor: colors.hairline,
      ...elevation(colors, 1),
    },
    statActive: {
      borderColor: 'rgba(255, 167, 38, 0.45)',
      backgroundColor: colors.surface,
      ...(Platform.OS === 'web'
        ? ({ boxShadow: '0 2px 14px rgba(255,140,0,0.12)' } as object)
        : {}),
    },
    statLapsed: {
      borderColor: colors.border,
      opacity: 0.8,
    },
    statPressed: {
      transform: [{ scale: 0.98 }],
    },
    valueRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    flameWrap: {
      width: 22,
      height: 22,
      alignItems: 'center',
      justifyContent: 'center',
    },
    coldFlame: {
      opacity: 0.28,
    },
    statValue: {
      ...Type.numeral,
      fontSize: 22,
      color: colors.text,
      lineHeight: 26,
    },
    statValueLapsed: {
      color: colors.textSecondary,
    },
    statLabel: {
      fontSize: 12,
      fontWeight: '700',
      color: colors.textSecondary,
      marginTop: 2,
    },
    statLabelActive: {
      color: '#FFA726',
    },
    statHint: {
      fontSize: 11,
      color: colors.textTertiary,
      marginTop: 2,
    },
    statHintActive: {
      color: colors.textSecondary,
    },
  });
}

// ── Compact styles ─────────────────────────────────────────────────────────────

function createCompactStyles(colors: ThemeColors) {
  return StyleSheet.create({
    wrapper: { alignSelf: 'flex-start' },
    row: { flexDirection: 'row', alignItems: 'center', gap: 4, minHeight: 40, paddingHorizontal: 4 },
    pressed: { opacity: 0.8 },
    count: {
      ...Type.numeral,
      fontSize: 17,
      fontWeight: '800',
      color: colors.accentText,
      lineHeight: 20,
    },
    countQuiet: { color: colors.textTertiary },
  });
}

// ── Full widget styles ─────────────────────────────────────────────────────────

function createFullStyles(colors: ThemeColors) {
  const cardBg = colors.surface === '#FFFEFC' ? '#0D1526' : colors.surface;
  return StyleSheet.create({
    card: {
      backgroundColor: cardBg,
      borderRadius: 28,
      paddingTop: 8,
      paddingBottom: 24,
      paddingHorizontal: 24,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(253,192,10,0.2)',
      overflow: 'hidden',
      ...(Platform.OS === 'web'
        ? ({ boxShadow: '0 8px 40px rgba(0,0,0,0.3), 0 0 40px rgba(255,138,0,0.12)' } as object)
        : {
            shadowColor: '#FF8800',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.25,
            shadowRadius: 20,
            elevation: 12,
          }),
    },
    flameArea: {
      width: 120,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 6,
    },
    flameInner: { alignItems: 'center', justifyContent: 'center' },
    flameGrey: { opacity: 0.28 },
    glow: {
      position: 'absolute',
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: 'rgba(255,140,0,0.22)',
    },
    count: {
      fontSize: 56,
      fontWeight: '900',
      color: '#FFFFFF',
      lineHeight: 62,
      letterSpacing: -1.5,
    },
    countGrey: { color: colors.textSecondary },
    dayLabel: {
      ...Type.overline,
      color: '#FFA726',
      letterSpacing: 3.5,
      fontSize: 10,
      marginTop: 2,
      marginBottom: 8,
    },
    statusText: {
      fontSize: 14,
      fontWeight: '500',
      color: 'rgba(255,255,255,0.62)',
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: 20,
    },
    btn: {
      backgroundColor: '#1677F2',
      borderRadius: 14,
      paddingVertical: 12,
      paddingHorizontal: 32,
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    btnPressed: { opacity: 0.85 },
    btnText: {
      fontSize: 15,
      fontWeight: '700',
      color: '#FFFFFF',
    },
  });
}
