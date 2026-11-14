import { useId } from 'react';
import { type StyleProp, StyleSheet, View, type ViewStyle } from 'react-native';
import { Text } from '@/components/ui/text';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { Icon } from '@/components/ui/icon';
import { Type } from '@/constants/theme';
import type { SubjectId } from '@/data/lesson-types';
import { useExperience } from '@/hooks/use-experience';
import { useTheme } from '@/hooks/use-theme';

// Visual identity for subjects and topics — replaces emoji.
//
//   SubjectGlyph: a gradient tile with the subject's drawn icon.
//   TopicGlyph:   a picture of the topic (a heart, lungs, a blood drop…) on a
//                 gradient tile in the subject's colours (owner, 2026-10-31: no more
//                 "Ur" / "Fa" letters).

export const SUBJECT_TINTS: Record<SubjectId, { gradient: readonly [string, string]; ink: string; soft: string }> = {
  biochemistry: { gradient: ['#3B5BDF', '#142A98'], ink: '#FFFFFF', soft: '#91A9FF' },
  physiology: { gradient: ['#1FA08F', '#0E6159'], ink: '#FFFFFF', soft: '#1FA08F' },
  anatomy: { gradient: ['#273766', '#121B3E'], ink: '#FDC00A', soft: '#6F7FB8' },
};

// The Originals: the original hub's course icon — its emoji on its own
// vertical gradient (old-reference/src/data/catalog.ts and StudyScreen GRADS).
const ORIGINAL_COURSE: Record<SubjectId, { emoji: string; gradient: readonly [string, string] }> = {
  biochemistry: { emoji: '🧪', gradient: ['#10b981', '#047857'] },
  physiology: { emoji: '🫀', gradient: ['#f43f5e', '#b91c3c'] },
  anatomy: { emoji: '🩻', gradient: ['#3b82f6', '#1d4ed8'] },
};

function GradientTile({ size, radius, colors: stops, vertical = false }: { size: number; radius: number; colors: readonly [string, string]; vertical?: boolean }) {
  const id = `t${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
      <Defs>
        <LinearGradient id={id} x1="0" y1="0" x2={vertical ? '0' : '1'} y2="1">
          <Stop offset="0" stopColor={stops[0]} />
          <Stop offset="1" stopColor={stops[1]} />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={size} height={size} rx={radius} fill={`url(#${id})`} />
      {vertical ? null : <Rect x={0.5} y={0.5} width={size - 1} height={size - 1} rx={radius} fill="none" stroke="#FFFFFF" strokeOpacity={0.14} />}
    </Svg>
  );
}

export function SubjectGlyph({ subject, size = 48, style }: { subject: SubjectId; size?: number; style?: StyleProp<ViewStyle> }) {
  const tint = SUBJECT_TINTS[subject];
  const radius = Math.round(size * 0.3);
  const experience = useExperience();
  if (experience === 'originals') {
    const original = ORIGINAL_COURSE[subject];
    return (
      <View style={[{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }, style]} aria-hidden>
        <GradientTile size={size} radius={Math.round(size * 0.28)} colors={original.gradient} vertical />
        <View style={styles.glyphIcon}>
          <Text style={{ fontSize: Math.round(size * 0.52) }}>{original.emoji}</Text>
        </View>
      </View>
    );
  }
  const stops = tint.gradient;
  return (
    <View style={[{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }, style]} aria-hidden>
      <GradientTile size={size} radius={radius} colors={stops} />
      {/* Positioned above the tile: an absolutely positioned SVG would
          otherwise paint over an in-flow icon on the web. */}
      <View style={styles.glyphIcon}>
        <Icon name={subject} size={Math.round(size * 0.52)} color={tint.ink} strokeWidth={1.9} />
      </View>
    </View>
  );
}

const SKIP = new Set(['and', 'of', 'the', 'in', 'to', 'a', 'an', 'system:', 'system']);

// "Blood Coagulation and Fibrinolysis" → "BC"; "Haem and Haem Metabolism" → "HM".
export function topicMonogram(title: string) {
  const words = title
    .replace(/[^A-Za-z\s:]/g, ' ')
    .split(/\s+/)
    .filter((word) => word && !SKIP.has(word.toLowerCase()));
  const unique = words.filter((word, index) => words.findIndex((other) => other.toLowerCase() === word.toLowerCase()) === index);
  const letters = (unique.length >= 2 ? unique[0][0] + unique[1][0] : (unique[0] ?? '?').slice(0, 2)).toUpperCase();
  return letters.length === 2 ? letters[0] + letters[1].toLowerCase() : letters;
}

// A picture for each topic, from words in its title (first match wins); a topic
// with none of them gets its subject's picture.
const TOPIC_PICTURES: readonly [RegExp, string][] = [
  // Organology: how organs are built, taught from microscope slides of organ walls.
  [/organology/i, '🔬'],
  [/cardio|heart/i, '🫀'],
  [/respirat|lung|thora/i, '🫁'],
  [/gastro|digest|abdom|\bgi\b/i, '🍽️'],
  [/urinary|renal|kidney/i, '💧'],
  [/upper limb|\barm\b|hand/i, '💪'],
  [/lower limb|\bleg\b|\bfoot\b/i, '🦵'],
  [/head and neck|\bface\b/i, '🗣️'],
  [/special sense|vision|visual|\beye\b|hearing|auditory/i, '👁️'],
  [/nervous|neuro|brain|\bcns\b|spinal/i, '🧠'],
  [/endocrin|hormone|thyroid/i, '🦋'],
  [/reproduct|pregnan|puberty/i, '👶'],
  [/immun|defen/i, '🛡️'],
  [/oxygen carrier|myoglobin|haemoglobin|hemoglobin/i, '💨'],
  [/coagul|fibrinol|blood|clot/i, '🩸'],
  [/\bhaem|\bheme|porphyr/i, '🧲'],
  [/free radical|oxidative|toxicity/i, '💥'],
  [/fatty acid|lipid|\bfat\b/i, '🥑'],
  [/cholesterol|bile|steroid/i, '🧈'],
  [/amino acid|protein|enzyme/i, '🧩'],
  [/collagen|elastin|connective/i, '🧶'],
  [/inborn|newborn/i, '🍼'],
  [/nucleic|\bdna\b|\brna\b|gene|purine|pyrimidine/i, '🧬'],
  [/carbohydrate|glyco|glucose|sugar/i, '🍬'],
  [/vitamin|nutrition|mineral/i, '🥕'],
  [/bioenerget|citric|krebs|\batp\b|energy/i, '⚡'],
  [/bone|skelet|osteo/i, '🦴'],
  [/muscle|musculo/i, '💪'],
  [/embryo|develop/i, '🌱'],
  [/histolog|microanat|cell|tissue/i, '🔬'],
];
const SUBJECT_PICTURE: Record<SubjectId, string> = { anatomy: '🦴', physiology: '🩺', biochemistry: '🧪' };

export function topicPicture(title: string, subject: SubjectId | null | undefined): string {
  return TOPIC_PICTURES.find(([pattern]) => pattern.test(title))?.[1] ?? SUBJECT_PICTURE[subject ?? 'biochemistry'];
}

export function TopicGlyph({
  title,
  subject,
  size = 46,
  style,
}: {
  title: string;
  subject: SubjectId | null | undefined;
  /** No longer drawn (the tile shows the topic's picture); kept so older callers still work. */
  index?: number;
  size?: number;
  style?: StyleProp<ViewStyle>;
}) {
  const experience = useExperience();
  const stops = experience === 'originals' ? ORIGINAL_COURSE[subject ?? 'biochemistry'].gradient : SUBJECT_TINTS[subject ?? 'biochemistry'].gradient;
  return (
    <View style={[{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }, style]} aria-hidden>
      <GradientTile size={size} radius={Math.round(size * 0.28)} colors={stops} vertical={experience === 'originals'} />
      <View style={styles.glyphIcon}>
        <Text style={{ fontSize: Math.round(size * 0.5), lineHeight: Math.round(size * 0.66) }}>{topicPicture(title, subject)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  glyphIcon: { zIndex: 1 },
});
