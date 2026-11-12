// Confetti: a short shower of small coloured pieces over the whole screen, shown
// once when a quiz has just been finished (results page). Pieces fall with a
// little gravity, drift sideways, spin and fade out; the whole thing lasts about
// three seconds and is skipped when the learner prefers reduced motion. It never
// takes taps (pointerEvents none), so the page under it keeps working.
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, { Easing, interpolate, runOnJS, type SharedValue, useAnimatedStyle, useReducedMotion, useSharedValue, withTiming } from 'react-native-reanimated';

import { useTheme } from '@/hooks/use-theme';

const DURATION = 3000;

type Piece = {
  x: number; // start, as a share of the width
  delay: number; // ms before this piece starts falling
  size: number;
  tall: boolean; // a strip (tall) or a square
  color: string;
  drift: number; // sideways travel in px, either way
  spin: number; // total turn in degrees
  wobble: number; // how much it sways while falling
};

/**
 * `count` pieces fall from the top of the screen. `onDone` is called when the
 * shower is over, so the caller can unmount it.
 */
export function Confetti({ count = 56, onDone }: { count?: number; onDone?: () => void }) {
  const colors = useTheme();
  const reduced = useReducedMotion();
  const { width, height } = useWindowDimensions();
  const progress = useSharedValue(0);
  const [done, setDone] = useState(false);

  // Brand blue and gold carry it; a little green, white and navy for variety.
  const pieces = useMemo<Piece[]>(() => {
    const palette = [colors.primary, colors.accent, colors.accent, colors.success, colors.primary, colors.onPrimary, colors.secondary];
    return Array.from({ length: count }, (_, i) => ({
      x: Math.random(),
      delay: Math.random() * 500,
      size: 6 + Math.random() * 6,
      tall: Math.random() > 0.45,
      color: palette[i % palette.length],
      drift: (Math.random() - 0.5) * 160,
      spin: (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 720),
      wobble: 10 + Math.random() * 30,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- one shower per mount
  }, []);

  useEffect(() => {
    if (reduced) {
      setDone(true);
      return;
    }
    progress.value = withTiming(1, { duration: DURATION, easing: Easing.linear }, (finished) => {
      if (finished) runOnJS(setDone)(true);
    });
  }, [progress, reduced]);

  useEffect(() => {
    if (done) onDone?.();
  }, [done, onDone]);

  if (reduced || done) return null;

  return (
    <View pointerEvents="none" style={styles.layer} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {pieces.map((piece, index) => (
        <ConfettiPiece key={index} piece={piece} progress={progress} width={width} height={height} />
      ))}
    </View>
  );
}

function ConfettiPiece({ piece, progress, width, height }: { piece: Piece; progress: SharedValue<number>; width: number; height: number }) {
  const style = useAnimatedStyle(() => {
    // This piece's own 0→1, after its delay.
    const start = piece.delay / DURATION;
    const t = Math.min(1, Math.max(0, (progress.value - start) / (1 - start)));
    const fall = t * t; // speeds up like gravity
    const y = interpolate(fall, [0, 1], [-24, height + 24]);
    const x = piece.x * width + piece.drift * t + Math.sin(t * Math.PI * 4) * piece.wobble;
    return {
      opacity: interpolate(t, [0, 0.05, 0.8, 1], [0, 1, 1, 0]),
      transform: [
        { translateX: x },
        { translateY: y },
        { rotate: `${piece.spin * t}deg` },
        { rotateX: `${(piece.spin * 1.3 * t) % 360}deg` },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        styles.piece,
        { width: piece.size, height: piece.tall ? piece.size * 2.2 : piece.size, borderRadius: piece.tall ? 2 : piece.size / 2, backgroundColor: piece.color },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  // absoluteFill, as elsewhere in the app (absoluteFillObject is gone from React Native 0.86).
  layer: { ...StyleSheet.absoluteFill, overflow: 'hidden', zIndex: 50 },
  piece: { position: 'absolute', top: 0, left: 0 },
});
