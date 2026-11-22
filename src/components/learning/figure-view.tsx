// Tappable lecture diagrams (data/figures/).
//   FigureExplorer  in a lesson's reading section: a compact card (small
//                   preview + "Explore diagram"), so diagrams never take over the
//                   lesson. The interactive diagram opens in a sheet. "Explore": tap a numbered
//                   pin to see what it is. "Test yourself": the slide's own
//                   labels are covered; pick a pin, say the name to yourself,
//                   then reveal it. "Label it": pick a name, then tap the
//                   pin it belongs to (answers are recorded like quiz
//                   answers when the part has a quiz question).
//   QuestionFigure  with a quiz question: labels covered and the asked-about
//                   part marked; once answered, its label is uncovered.
//   QuestionImage   a plain picture with a question (past papers' diagrams).
import { LIVE_SITE } from '@/lib/live-site';
import { Image } from 'expo-image';
import Svg, { Line } from 'react-native-svg';
import { useMemo, useState, type ReactNode } from 'react';
import { Linking, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Interactive } from '@/components/ui/interactive';
import { Sheet } from '@/components/ui/sheet';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { Text } from '@/components/ui/text';
import { elevation, Paper, Radius, Type, type ThemeColors } from '@/constants/theme';
import { markQuest } from '@/data/daily-quest';
import { spotQuestionFor } from '@/data/figure-practice';
import { getFigure, getSpot } from '@/data/figures';
import { recordAnswer } from '@/data/learning/actions';
import { chipDone, labelChips, labelFits } from '@/data/learning/label-it';
import { labelDiagramXp } from '@/data/learning/xp-rules';
import { awardXp } from '@/data/progress';
import type { FigureSpot, LessonFigure } from '@/data/lesson-types';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

// Pictures are served from public/ by the website; the phone app loads
// them from the live site.
const SITE = LIVE_SITE;
const figureUri = (src: string) => (Platform.OS === 'web' ? src : `${SITE}${src}`);
const pct = (fraction: number) => `${fraction * 100}%` as const;
// A real dissection photo (data/figures/cadaver.ts) rather than a lecture slide's diagram.
const kindOf = (figure: LessonFigure) => (figure.credit ? 'Dissection photo' : 'Lecture diagram');

// Tall diagrams are kept short enough to see the picture and its panel
// together; on big screens they get more of the window (owner, 2026-10-31).
const MAX_HEIGHT = 480;
function useDiagramHeight() {
  const { height } = useWindowDimensions();
  return Math.max(MAX_HEIGHT, Math.min(760, height - 300));
}
// In a quiz question the diagram stays modest beside the question and its options.
const QUESTION_MAX_HEIGHT = 280;
// The preview card in a lesson.
const PREVIEW_HEIGHT = 120;

/** The picture a question shows (a lecture diagram or a past paper's picture), or null. */
export function questionPictureUri(question: { figure?: { id: string }; image?: string }): string | null {
  if (question.image) return figureUri(question.image);
  const figure = question.figure ? getFigure(question.figure.id) : undefined;
  return figure ? figureUri(figure.src) : null;
}

/** Starts downloading the pictures of the next questions, so they are ready when reached. */
export function prefetchQuestionPictures(questions: readonly { figure?: { id: string }; image?: string }[]) {
  const uris = questions.map(questionPictureUri).filter((uri): uri is string => Boolean(uri));
  if (uris.length) void Image.prefetch(uris).catch(() => undefined);
}

/**
 * A picture that says when it is ready: "Loading the picture…" until it has
 * loaded (timed questions start their clock only then), and "Try again" if it
 * fails.
 */
function Picture({ uri, label, onReady }: { uri: string; label: string; onReady?: () => void }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  return (
    <>
      <Image
        key={attempt}
        source={{ uri: attempt ? `${uri}${uri.includes('?') ? '&' : '?'}retry=${attempt}` : uri }}
        style={StyleSheet.absoluteFill}
        contentFit="contain"
        accessibilityLabel={label}
        transition={150}
        onLoad={() => {
          setState('ready');
          onReady?.();
        }}
        onError={() => setState('error')}
      />
      {state !== 'ready' ? (
        <View style={styles.pictureState} pointerEvents="box-none">
          {state === 'loading' ? (
            <Text style={styles.pictureText}>Loading the picture…</Text>
          ) : (
            <>
              <Icon name="image" size={20} color={colors.textTertiary} />
              <Text style={styles.pictureText}>The picture did not load.</Text>
              <Button label="Try again" size="sm" variant="secondary" onPress={() => { setState('loading'); setAttempt((value) => value + 1); }} />
            </>
          )}
        </View>
      ) : null}
    </>
  );
}

/** A plain picture with a question (a past paper's labelled diagram). */
export function QuestionImage({ src, label = 'Diagram for this question', onReady }: { src: string; label?: string; onReady?: () => void }) {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={[styles.canvas, styles.questionImage]}>
      <Picture uri={figureUri(src)} label={label} onReady={onReady} />
    </View>
  );
}

/** The picture at its own shape, with covers and pins drawn over it. */
function Canvas({ figure, children, label, maxHeight, onReady }: { figure: LessonFigure; children?: ReactNode; label: string; maxHeight?: number; onReady?: () => void }) {
  const styles = useThemedStyles(createStyles);
  const roomy = useDiagramHeight();
  const height = maxHeight ?? roomy;
  const aspectRatio = figure.width / figure.height;
  return (
    <View style={[styles.canvas, { aspectRatio, maxWidth: Math.min(1100, height * aspectRatio) }]}>
      <Picture uri={figureUri(figure.src)} label={label} onReady={onReady} />
      {children}
    </View>
  );
}

/** Covers the slide's printed label(s) for a spot. */
function Covers({ spot }: { spot: FigureSpot }) {
  const styles = useThemedStyles(createStyles);
  return (
    <>
      {spot.boxes?.map(([x, y, w, h], index) => (
        <View key={index} pointerEvents="none" style={[styles.cover, { left: pct(x), top: pct(y), width: pct(w), height: pct(h) }]} />
      ))}
    </>
  );
}

/**
 * Covers every other printed label that could give an answer away (second
 * labels, labels of parts no spot asks about: data/figures/covers.ts). Shown
 * whenever labels are hidden: "Test yourself", "Label it" and quiz questions.
 */
function Masks({ figure }: { figure: LessonFigure }) {
  const styles = useThemedStyles(createStyles);
  if (!figure.masks?.length) return null;
  return (
    <>
      {figure.masks.map(([x, y, w, h], index) => (
        <View key={`m${index}`} pointerEvents="none" style={[styles.cover, { left: pct(x), top: pct(y), width: pct(w), height: pct(h) }]} />
      ))}
    </>
  );
}

/** The selected part's name, in a small bubble beside its pin. */
function Bubble({ spot, text }: { spot: FigureSpot; text: string }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const side = spot.x < 0.5 ? { left: pct(spot.x) } : { right: pct(1 - spot.x) };
  const level = spot.y < 0.75 ? { top: pct(spot.y), marginTop: 18 } : { bottom: pct(1 - spot.y), marginBottom: 18 };
  return (
    <View pointerEvents="none" style={[styles.bubble, elevation(colors, 2), side, level]}>
      <Text style={styles.bubbleText} numberOfLines={2}>{text}</Text>
    </View>
  );
}

type PinTone = 'idle' | 'selected' | 'done' | 'wrong';

/** Recolours the diagram's leader line for the part a quiz question asks about. */
function TargetMark({ spot }: { spot: FigureSpot }) {
  const leader = leaderLineFor(spot);
  return (
    <Svg pointerEvents="none" width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" style={StyleSheet.absoluteFill}>
      {leader ? <>
        <Line x1={leader.x} y1={leader.y} x2={spot.x * 1000} y2={spot.y * 1000} stroke="#FFFFFF" strokeWidth={11} strokeLinecap="round" />
        <Line x1={leader.x} y1={leader.y} x2={spot.x * 1000} y2={spot.y * 1000} stroke="#D5222A" strokeWidth={6} strokeLinecap="round" />
      </> : null}
    </Svg>
  );
}

/** Find the closest edge of the covered printed label, where its leader line begins. */
function leaderLineFor(spot: FigureSpot): { x: number; y: number } | null {
  if (!spot.boxes?.length) return null;
  const px = spot.x * 1000;
  const py = spot.y * 1000;
  let nearest: { x: number; y: number; distance: number } | null = null;
  for (const [x, y, width, height] of spot.boxes) {
    const left = x * 1000;
    const top = y * 1000;
    const right = (x + width) * 1000;
    const bottom = (y + height) * 1000;
    const candidates = [
      { x: Math.max(left, Math.min(right, px)), y: top },
      { x: Math.max(left, Math.min(right, px)), y: bottom },
      { x: left, y: Math.max(top, Math.min(bottom, py)) },
      { x: right, y: Math.max(top, Math.min(bottom, py)) },
    ];
    for (const point of candidates) {
      const distance = (point.x - px) ** 2 + (point.y - py) ** 2;
      if (!nearest || distance < nearest.distance) nearest = { ...point, distance };
    }
  }
  return nearest ? { x: nearest.x, y: nearest.y } : null;
}

function Pin({ spot, number, tone, onPress, label }: { spot: FigureSpot; number: string; tone: PinTone; onPress?: () => void; label: string }) {
  const styles = useThemedStyles(createStyles);
  const small = useWindowDimensions().width < 600; // phones: smaller pins, same touch area
  const body = (
    <View style={[styles.pin, small && styles.pinSmall, styles[`pin_${tone}`]]}>
      <Text style={[styles.pinText, small && styles.pinTextSmall, tone === 'selected' && styles.pinTextStrong]}>{number}</Text>
    </View>
  );
  return (
    <View pointerEvents="box-none" style={[styles.pinSlot, { left: pct(spot.x), top: pct(spot.y) }]}>
      {onPress ? (
        <Interactive onPress={onPress} accessibilityLabel={label} style={styles.pinHit}>
          {body}
        </Interactive>
      ) : (
        <View accessibilityLabel={label} style={styles.pinHit}>{body}</View>
      )}
    </View>
  );
}

/** In a lesson: a compact preview card; the interactive diagram opens in a sheet. */
export function FigureExplorer({ figureId }: { figureId: string }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const [open, setOpen] = useState(false);
  const figure = getFigure(figureId);
  if (!figure) return null;
  const aspectRatio = figure.width / figure.height;
  return (
    <>
      <Interactive
        onPress={() => setOpen(true)}
        accessibilityRole="button"
        accessibilityLabel={`${kindOf(figure)}: ${figure.title}. Opens the interactive diagram.`}
        style={({ hovered }) => [styles.previewCard, hovered && styles.previewHover]}
      >
        <View style={[styles.previewImage, { width: Math.min(220, PREVIEW_HEIGHT * aspectRatio) }]}>
          {/* A real body is only shown in full once the learner opens it. */}
          <Image source={{ uri: figureUri(figure.src) }} style={StyleSheet.absoluteFill} contentFit="contain" accessibilityIgnoresInvertColors transition={150} blurRadius={figure.credit ? 30 : 0} />
        </View>
        <View style={styles.previewText}>
          <Text style={styles.kicker}>{kindOf(figure).toUpperCase()}</Text>
          <Text style={styles.previewTitle} numberOfLines={2}>{figure.title}</Text>
          <Text style={styles.muted} numberOfLines={1}>{figure.spots.length} labelled parts · explore, test or label it</Text>
          <View style={styles.previewGo}>
            <Icon name="sparkle" size={14} color={colors.primaryText} />
            <Text style={styles.previewGoText}>Explore diagram</Text>
          </View>
        </View>
      </Interactive>
      <Sheet visible={open} onClose={() => setOpen(false)} title={figure.title} subtitle={figure.credit ? 'Real dissection photo' : 'Lecture diagram'} width={1180}>
        <FigureExplorerBody figure={figure} />
      </Sheet>
    </>
  );
}

type BoardMode = 'explore' | 'test' | 'label';

/** The interactive diagram (also the "Label a diagram" page, which opens in "Label it"). */
export function FigureExplorerBody({ figure, initialMode = 'explore', onLabelled }: { figure: LessonFigure; initialMode?: BoardMode; onLabelled?: (right: number, total: number) => void }) {
  const styles = useThemedStyles(createStyles);
  const [mode, setMode] = useState<BoardMode>(initialMode);
  const [selected, setSelected] = useState<string | null>(null);
  const [shown, setShown] = useState<readonly string[]>([]);

  if (mode === 'label') {
    return (
      <View style={styles.block}>
        <ModeRow figure={figure} mode={mode} onChange={(next) => { setMode(next); setSelected(null); setShown([]); }} />
        <LabelBoard key={figure.id} figure={figure} onDone={onLabelled} />
        {figure.caption ? <Text style={styles.caption}>{figure.caption}</Text> : null}
        <FigureCredit figure={figure} />
      </View>
    );
  }

  const testing = mode === 'test';
  const index = figure.spots.findIndex((spot) => spot.id === selected);
  const spot = index >= 0 ? figure.spots[index] : null;
  const isShown = (id: string) => shown.includes(id);
  const reveal = (id: string) => setShown((list) => (list.includes(id) ? list : [...list, id]));
  const switchMode = (next: BoardMode) => {
    setMode(next);
    setSelected(null);
    setShown([]);
  };

  return (
    <View style={styles.block}>
      <ModeRow figure={figure} mode={mode} onChange={switchMode} />
      <Canvas figure={figure} label={`${figure.title} — ${kindOf(figure).toLowerCase()}`}>
        {testing ? <Masks figure={figure} /> : null}
        {testing ? figure.spots.filter((item) => !isShown(item.id)).map((item) => <Covers key={item.id} spot={item} />) : null}
        {figure.spots.map((item, i) => (
          <Pin
            key={item.id}
            spot={item}
            number={String(i + 1)}
            tone={item.id === selected ? 'selected' : testing && isShown(item.id) ? 'done' : 'idle'}
            onPress={() => setSelected(item.id === selected ? null : item.id)}
            label={testing && !isShown(item.id) ? `Part ${i + 1}` : `Part ${i + 1}: ${item.label}`}
          />
        ))}
        {spot && (!testing || isShown(spot.id)) ? <Bubble spot={spot} text={spot.label} /> : null}
      </Canvas>
      <View style={styles.panel} accessibilityLiveRegion="polite">
        {spot ? (
          testing && !isShown(spot.id) ? (
            <View style={styles.panelRow}>
              <Text style={styles.panelTitle}>{index + 1}. What is this?</Text>
              <Button label="Show answer" size="sm" variant="secondary" onPress={() => reveal(spot.id)} />
            </View>
          ) : (
            <>
              <Text style={styles.panelTitle}>{index + 1}. {spot.label}</Text>
              {spot.note ? <Text style={styles.body}>{spot.note}</Text> : null}
            </>
          )
        ) : (
          <Text style={styles.muted}>
            {testing ? 'The labels are covered. Tap a number, name it, then check.' : 'Tap a number to see what it is.'}
          </Text>
        )}
        {testing ? (
          <View style={styles.panelRow}>
            <Text style={styles.muted}>{shown.length} of {figure.spots.length} checked</Text>
            {shown.length ? <Button label="Start again" size="sm" variant="ghost" onPress={() => switchMode('test')} /> : null}
            {shown.length < figure.spots.length ? <Button label="Show all" size="sm" variant="ghost" onPress={() => setShown(figure.spots.map((item) => item.id))} /> : null}
          </View>
        ) : null}
      </View>
      {figure.caption ? <Text style={styles.caption}>{figure.caption}</Text> : null}
      <FigureCredit figure={figure} />
    </View>
  );
}

/** Who took a photo and its licence (CC BY-SA asks for both, with links). Lecture diagrams have none. */
function FigureCredit({ figure }: { figure: LessonFigure }) {
  const styles = useThemedStyles(createStyles);
  const credit = figure.credit;
  if (!credit) return null;
  const open = (url: string) => void Linking.openURL(url).catch(() => undefined);
  return (
    <View style={styles.creditRow}>
      <Interactive onPress={() => open(credit.sourceUrl)} accessibilityRole="link">
        <Text style={styles.credit}>{`Photo: ${credit.author}, Wikimedia Commons`}</Text>
      </Interactive>
      <Interactive onPress={() => open(credit.licenseUrl)} accessibilityRole="link">
        <Text style={styles.credit}>{credit.license}</Text>
      </Interactive>
    </View>
  );
}

function ModeRow({ figure, mode, onChange }: { figure: LessonFigure; mode: BoardMode; onChange: (mode: BoardMode) => void }) {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.headRow}>
      <Text style={styles.kicker}>{kindOf(figure).toUpperCase()}</Text>
      <SegmentedControl
        options={[{ value: 'explore', label: 'Explore' }, { value: 'test', label: 'Test yourself' }, { value: 'label', label: 'Label it' }] as const}
        value={mode}
        onChange={onChange}
        label="Diagram mode"
        style={styles.modes}
      />
    </View>
  );
}

/**
 * "Label it": the slide's labels are covered and listed as names below. Pick a
 * name, then tap the pin it belongs to. The first try on each part is recorded
 * like a quiz answer (when the part has a quiz question), so it counts for
 * memory and Review; finishing a diagram ticks the daily quest.
 */
function LabelBoard({ figure, onDone }: { figure: LessonFigure; onDone?: (right: number, total: number) => void }) {
  const styles = useThemedStyles(createStyles);
  const [round, setRound] = useState(0);
  const [sessionId] = useState(() => `${figure.id}:${Date.now().toString(36)}:${Math.random().toString(36).slice(2)}`);
  const [earnedXp, setEarnedXp] = useState<number | null>(null);
  const chips = useMemo(() => labelChips(figure.spots, `${figure.id}:${round}`), [figure, round]);
  const [chip, setChip] = useState<string | null>(null);
  const [placed, setPlaced] = useState<ReadonlySet<string>>(new Set());
  const [tried, setTried] = useState<ReadonlySet<string>>(new Set()); // spots answered once (first try recorded)
  const [firstRight, setFirstRight] = useState(0);
  const [wrongPin, setWrongPin] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const done = placed.size === figure.spots.length;

  function restart() {
    setRound((value) => value + 1);
    setChip(null);
    setPlaced(new Set<string>());
    setTried(new Set<string>());
    setFirstRight(0);
    setWrongPin(null);
    setMessage(null);
    setEarnedXp(null);
  }

  function record(spot: FigureSpot, label: string, correct: boolean) {
    const question = spotQuestionFor(figure.id, spot.id);
    if (!question || question.type !== 'choice') return;
    const picked = question.options.findIndex((option) => option.trim().toLowerCase() === label.trim().toLowerCase());
    const answer = correct ? question.answer : picked >= 0 && picked !== question.answer ? picked : (question.answer + 1) % question.options.length;
    void recordAnswer(question, answer, 'practice', `label:${sessionId}:${round}`).catch(() => undefined);
  }

  function tapPin(spot: FigureSpot) {
    if (placed.has(spot.id)) return;
    if (!chip) {
      setMessage('Pick a name below first, then tap where it goes.');
      return;
    }
    const correct = labelFits(spot, chip);
    if (!tried.has(spot.id)) {
      setTried((previous) => new Set<string>(previous).add(spot.id));
      record(spot, chip, correct);
      if (correct) setFirstRight((value) => value + 1);
    }
    if (!correct) {
      setWrongPin(spot.id);
      setMessage(`Not “${chip}”. Try another pin, or another name.`);
      return;
    }
    const next = new Set<string>(placed).add(spot.id);
    setPlaced(next);
    setWrongPin(null);
    if (chipDone(figure.spots, next, chip)) setChip(null);
    setMessage(`${chip}: right.`);
    if (next.size === figure.spots.length) {
      const right = firstRight + (tried.has(spot.id) ? 0 : 1);
      setMessage(null);
      void markQuest('label').catch(() => undefined);
      void awardXp({
        sourceType: 'practice',
        sourceId: `label-diagram:${sessionId}:${round}`,
        amount: labelDiagramXp({ correct: right, total: figure.spots.length }),
        label: `Label diagram · ${figure.title}`,
      }).then(setEarnedXp).catch(() => setEarnedXp(0));
      onDone?.(right, figure.spots.length);
    }
  }

  const remaining = chips.filter((label) => !chipDone(figure.spots, placed, label));

  return (
    <>
      <Canvas figure={figure} label={`${figure.title} — ${kindOf(figure).toLowerCase()} to label`}>
        <Masks figure={figure} />
        {figure.spots.filter((item) => !placed.has(item.id)).map((item) => <Covers key={item.id} spot={item} />)}
        {figure.spots.map((item, i) => (
          <Pin
            key={item.id}
            spot={item}
            number={String(i + 1)}
            tone={placed.has(item.id) ? 'done' : item.id === wrongPin ? 'wrong' : 'idle'}
            onPress={placed.has(item.id) ? undefined : () => tapPin(item)}
            label={placed.has(item.id) ? `Part ${i + 1}: ${item.label}` : `Part ${i + 1}, not labelled yet`}
          />
        ))}
      </Canvas>
      <View style={styles.panel} accessibilityLiveRegion="polite">
        {done ? (
          <>
            <View style={styles.panelRow}>
              <Text style={styles.panelTitle}>
                Labelled! {firstRight} of {figure.spots.length} right first time.
              </Text>
              <Button label="Again" size="sm" variant="secondary" onPress={restart} />
            </View>
            <Text style={styles.muted}>
              {earnedXp === null ? 'Adding XP…' : earnedXp > 0 ? `+${earnedXp} XP earned` : 'XP already awarded for this round.'}
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.muted}>
              {message ?? (chip ? `Now tap the pin for “${chip}”.` : 'Pick a name, then tap the pin it belongs to.')}
            </Text>
            <View style={styles.chips}>
              {remaining.map((label) => (
                <Interactive
                  key={label}
                  onPress={() => { setChip(label === chip ? null : label); setMessage(null); setWrongPin(null); }}
                  accessibilityLabel={`Name: ${label}`}
                  accessibilityState={{ selected: label === chip }}
                  style={({ hovered }) => [styles.chip, label === chip && styles.chipOn, hovered && label !== chip && styles.chipHover]}
                >
                  <Text style={[styles.chipText, label === chip && styles.chipTextOn]}>{label}</Text>
                </Interactive>
              ))}
            </View>
            <Text style={styles.muted}>{placed.size} of {figure.spots.length} placed</Text>
          </>
        )}
      </View>
    </>
  );
}

/** The diagram for a quiz question: labels covered, the asked-about part marked. */
export function QuestionFigure({ figure: ref, revealed, onReady }: { figure: { id: string; spot?: string }; revealed: boolean; onReady?: () => void }) {
  const styles = useThemedStyles(createStyles);
  // Laptops and tablets have room for a bigger picture beside the options.
  const questionHeight = useWindowDimensions().width >= 900 ? 400 : QUESTION_MAX_HEIGHT;
  const figure = getFigure(ref.id);
  if (!figure) return null;
  const target = getSpot(figure, ref.spot);
  return (
    <View style={styles.questionFigure}>
      <Canvas figure={figure} maxHeight={questionHeight} onReady={onReady} label={`${figure.title} — ${kindOf(figure).toLowerCase()}${target ? ', one part marked' : ''}`}>
        <Masks figure={figure} />
        {figure.spots.filter((spot) => !(revealed && spot.id === target?.id)).map((spot) => <Covers key={spot.id} spot={spot} />)}
        {target ? <TargetMark spot={target} /> : null}
      </Canvas>
      {/* A dissection photo must carry its credit wherever it is shown, quizzes included. */}
      <FigureCredit figure={figure} />
    </View>
  );
}

const PIN = 21;

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    block: { gap: 10, marginTop: 4 },
    headRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
    modes: { minWidth: 300 },
    kicker: { fontSize: 11, fontWeight: '800', letterSpacing: 1, color: colors.textTertiary },
    title: { ...Type.headline, color: colors.text },
    canvas: { width: '100%', maxWidth: 1100, alignSelf: 'center', borderRadius: Radius.md, overflow: 'hidden', borderWidth: 1, borderColor: colors.border, backgroundColor: Paper },
    cover: { position: 'absolute', borderRadius: 4, backgroundColor: colors.surfaceSunken, borderWidth: 1, borderColor: colors.borderStrong },
    pinSlot: { position: 'absolute', width: 0, height: 0, alignItems: 'center', justifyContent: 'center', overflow: 'visible' },
    pinHit: { position: 'absolute', width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
    pin: { width: PIN, height: PIN, borderRadius: PIN / 2, alignItems: 'center', justifyContent: 'center', borderWidth: 1.5 },
    pinSmall: { width: 16, height: 16, borderRadius: 8, borderWidth: 1 },
    pinTextSmall: { fontSize: 9 },
    pin_idle: { backgroundColor: colors.primary, borderColor: colors.surface },
    pin_selected: { backgroundColor: colors.surface, borderColor: colors.primary, transform: [{ scale: 1.15 }] },
    pin_done: { backgroundColor: colors.success, borderColor: colors.surface },
    pin_wrong: { backgroundColor: colors.error, borderColor: colors.surface },
    chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
    chip: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface },
    chipOn: { backgroundColor: colors.primary, borderColor: colors.primary },
    chipHover: { borderColor: colors.primaryBorder },
    chipText: { fontSize: 13, fontWeight: '600', color: colors.text },
    chipTextOn: { color: colors.onPrimary },
    pinText: { fontSize: 10.5, fontWeight: '800', color: colors.onPrimary },
    pinTextStrong: { color: colors.text },
    bubble: { position: 'absolute', maxWidth: 220, paddingVertical: 5, paddingHorizontal: 9, borderRadius: Radius.sm, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.primary },
    bubbleText: { ...Type.caption, fontWeight: '700', color: colors.text },
    panel: { gap: 6, padding: 12, borderRadius: Radius.md, backgroundColor: colors.surfaceMuted, minHeight: 48, justifyContent: 'center' },
    panelRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 10 },
    panelTitle: { ...Type.headline, color: colors.text },
    body: { ...Type.callout, color: colors.textSecondary },
    muted: { ...Type.caption, color: colors.textTertiary },
    caption: { ...Type.caption, color: colors.textTertiary },
    creditRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
    credit: { fontSize: 11, color: colors.textTertiary, textDecorationLine: 'underline' },
    questionFigure: { marginVertical: 4 },
    questionImage: { height: QUESTION_MAX_HEIGHT, marginVertical: 4 },
    pictureState: { ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12 },
    pictureText: { fontSize: 13, color: colors.textSecondary, textAlign: 'center' },
    previewCard: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 10, marginVertical: 6, borderRadius: Radius.md, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface },
    previewHover: { borderColor: colors.primaryBorder },
    previewImage: { height: PREVIEW_HEIGHT, maxWidth: '45%', borderRadius: Radius.sm, overflow: 'hidden', backgroundColor: Paper },
    previewText: { flex: 1, minWidth: 0, gap: 3 },
    previewTitle: { ...Type.headline, color: colors.text },
    previewGo: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4 },
    previewGoText: { fontSize: 13.5, fontWeight: '800', color: colors.primaryText },
  });
}
