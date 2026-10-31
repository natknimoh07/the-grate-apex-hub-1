// "Learn" tab of a simulation (owner, 2026-10-31: "most people do not
// understand the physiology simulations — explain them and teach them, add
// activities"). Shown first, before Predict:
//   1. The idea      what the physiology is (data/simulations/guides.ts)
//   2. Reading it    what the picture, each control and each tile mean
//   3. Experiments   small guided runs of the real model: guess what a
//                    number will do, then watch it happen
//                    (data/simulations/guide-activities.ts)
// Experiments are practice: nothing is recorded.
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Interactive } from '@/components/ui/interactive';
import { Text } from '@/components/ui/text';
import type { ThemeColors } from '@/constants/theme';
import { CHANGE_OPTIONS, guideActivities, type ChangeAnswer } from '@/data/simulations/guide-activities';
import { SIMULATION_GUIDES } from '@/data/simulations/guides';
import { formatReadout, type SimControl, type SimDefinition, type SimValues } from '@/data/simulations/types';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

type Section = 'idea' | 'read' | 'try';

function controlRangeText(control: SimControl) {
  if (control.kind === 'choice') return control.options.map((option) => option.label).join(' · ');
  const show = (value: number) => (control.format ? control.format(value) : String(value));
  return `${show(control.min)} to ${show(control.max)}${control.unit ? ` ${control.unit}` : ''}`;
}

export function SimulationGuide({
  definition,
  running,
  onRun,
  onDone,
  doneLabel,
}: {
  definition: SimDefinition;
  running: boolean;
  /** Sets the model to `from`, then moves it smoothly to `to`. */
  onRun: (from: SimValues, to: SimValues) => void;
  onDone: () => void;
  doneLabel: string;
}) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const guide = SIMULATION_GUIDES[definition.id];
  const activities = useMemo(() => guideActivities(definition), [definition]);
  const [section, setSection] = useState<Section>('idea');
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<ChangeAnswer | null>(null);
  const [ran, setRan] = useState(false);
  const [score, setScore] = useState(0);

  const activity = activities[step];
  const watched = activity ? definition.readouts.find((readout) => readout.key === activity.readout) : undefined;
  const sections: { id: Section; label: string }[] = [
    { id: 'idea', label: '1 · The idea' },
    { id: 'read', label: '2 · Reading the screen' },
    ...(activities.length ? [{ id: 'try' as const, label: '3 · Try it' }] : []),
  ];

  function startActivity(index: number) {
    setStep(index);
    setPicked(null);
    setRan(false);
    const next = activities[index];
    if (next) onRun(next.from, next.from);
  }

  function run(answer: ChangeAnswer | null) {
    if (!activity) return;
    if (answer !== null) {
      setPicked(answer);
      if (answer === activity.answer) setScore((value) => value + 1);
    }
    setRan(true);
    onRun(activity.from, activity.to);
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.sectionRow}>
        {sections.map((item) => {
          const on = item.id === section;
          return (
            <Interactive
              key={item.id}
              onPress={() => {
                setSection(item.id);
                if (item.id === 'try') startActivity(step);
              }}
              accessibilityRole="button"
              accessibilityState={{ selected: on }}
              style={[styles.sectionChip, on && styles.sectionChipOn]}
            >
              <Text style={[styles.sectionText, on && styles.sectionTextOn]}>{item.label}</Text>
            </Interactive>
          );
        })}
      </View>

      {section === 'idea' ? (
        <View style={styles.block}>
          <Text style={styles.kicker}>THE IDEA</Text>
          {(guide?.idea ?? []).map((paragraph) => (
            <Text key={paragraph.slice(0, 40)} style={styles.body}>{paragraph}</Text>
          ))}
          <View style={styles.actions}>
            <Button label="How to read the screen" trailing="→" variant="secondary" size="sm" onPress={() => setSection('read')} />
          </View>
        </View>
      ) : null}

      {section === 'read' ? (
        <View style={styles.block}>
          <Text style={styles.kicker}>READING THE SCREEN</Text>
          {guide?.look ? <Text style={styles.body}>{guide.look}</Text> : null}
          <Text style={styles.subhead}>The controls (what you change)</Text>
          {definition.controls.map((control) => (
            <View key={control.key} style={styles.item}>
              <Icon name="chevronRight" size={14} color={colors.primaryText} />
              <View style={styles.itemText}>
                <Text style={styles.itemTitle}>{control.label}</Text>
                <Text style={styles.itemBody}>{controlRangeText(control)}{control.hint ? ` — ${control.hint}` : ''}</Text>
              </View>
            </View>
          ))}
          <Text style={styles.subhead}>The number tiles (what the body does)</Text>
          <Text style={styles.itemBody}>
            Each tile under the picture is a result of the model. The highlighted ones matter most. Under a number, “↑ +3” or “↓ 3” is the change from where you started, so you can see what your move did.
          </Text>
          <View style={styles.readoutList}>
            {definition.readouts
              .filter((readout) => !readout.hidden)
              .map((readout) => (
                <View key={readout.key} style={[styles.readoutPill, readout.primary && styles.readoutPillOn]}>
                  <Text style={[styles.readoutText, readout.primary && styles.readoutTextOn]}>{readout.label}</Text>
                </View>
              ))}
          </View>
          <View style={styles.actions}>
            {activities.length ? (
              <Button label="Try the experiments" trailing="→" variant="secondary" size="sm" onPress={() => { setSection('try'); startActivity(0); }} />
            ) : (
              <Button label={doneLabel} trailing="→" size="sm" onPress={onDone} />
            )}
          </View>
        </View>
      ) : null}

      {section === 'try' && activity ? (
        <View style={styles.block}>
          <Text style={styles.kicker}>{`${activity.title.toUpperCase()} · ${step + 1} OF ${activities.length}`}</Text>
          <Text style={styles.body}>{activity.instruction}</Text>
          <Text style={styles.question}>{activity.answer === null ? `Watch ${watched?.label ?? 'the result'}.` : `First, guess: ${activity.question}`}</Text>
          {activity.answer !== null ? (
            <View style={styles.options}>
              {CHANGE_OPTIONS.map((label, index) => {
                const chosen = picked === index;
                const right = ran && index === activity.answer;
                const wrong = ran && chosen && index !== activity.answer;
                return (
                  <Interactive
                    key={label}
                    disabled={ran}
                    dimDisabled={false}
                    onPress={() => run(index as ChangeAnswer)}
                    accessibilityRole="button"
                    accessibilityState={{ selected: chosen, disabled: ran }}
                    style={[styles.option, chosen && styles.optionOn, right && styles.optionRight, wrong && styles.optionWrong]}
                  >
                    <Text style={[styles.optionText, (right || wrong) && styles.optionTextStrong]}>{label}</Text>
                  </Interactive>
                );
              })}
            </View>
          ) : !ran ? (
            <View style={styles.actions}>
              <Button label="Run it" size="sm" onPress={() => run(null)} />
            </View>
          ) : null}
          {ran && watched ? (
            <View style={styles.result}>
              <Text style={styles.resultLabel}>{running ? 'RUNNING THE MODEL… WATCH THE PICTURE' : activity.answer === null ? 'WHAT HAPPENED' : picked === activity.answer ? 'RIGHT — HERE IS WHAT HAPPENED' : 'NOT QUITE — HERE IS WHAT HAPPENED'}</Text>
              <Text style={styles.resultText}>
                {`${watched.label}: ${formatReadout(watched, { ...definition.model(activity.from).readouts })} → ${formatReadout(watched, { ...definition.model(activity.to).readouts })}`}
              </Text>
              <Text style={styles.itemBody}>Look at the picture and the other tiles too: what else changed, and why?</Text>
            </View>
          ) : null}
          {ran && !running ? (
            <View style={styles.actions}>
              <Button label="Watch it again" size="sm" variant="ghost" onPress={() => onRun(activity.from, activity.to)} />
              {step < activities.length - 1 ? (
                <Button label="Next experiment" trailing="→" size="sm" variant="secondary" onPress={() => startActivity(step + 1)} />
              ) : (
                <Button label={doneLabel} trailing="→" size="sm" onPress={onDone} />
              )}
            </View>
          ) : null}
          {step === activities.length - 1 && ran && !running && activities.some((item) => item.answer !== null) ? (
            <Text style={styles.itemBody}>{`You guessed ${score} of ${activities.filter((item) => item.answer !== null).length} right. Experiments are practice — nothing is recorded.`}</Text>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    wrap: { backgroundColor: colors.surfaceMuted, borderRadius: 16, padding: 14, gap: 12 },
    sectionRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    sectionChip: { borderRadius: 999, borderWidth: 1.5, borderColor: colors.border, backgroundColor: colors.surface, paddingVertical: 7, paddingHorizontal: 12 },
    sectionChipOn: { borderColor: colors.primary, backgroundColor: colors.primarySubtle },
    sectionText: { fontSize: 13, fontWeight: '800', color: colors.textSecondary },
    sectionTextOn: { color: colors.primaryText },
    block: { gap: 8 },
    kicker: { fontSize: 11, fontWeight: '800', letterSpacing: 1.1, color: colors.primaryText },
    subhead: { fontSize: 14, fontWeight: '800', color: colors.text, marginTop: 6 },
    body: { fontSize: 15, lineHeight: 23, color: colors.text },
    question: { fontSize: 16, lineHeight: 23, fontWeight: '800', color: colors.text },
    item: { flexDirection: 'row', alignItems: 'flex-start', gap: 6 },
    itemText: { flex: 1, minWidth: 0 },
    itemTitle: { fontSize: 14, fontWeight: '800', color: colors.text },
    itemBody: { fontSize: 13.5, lineHeight: 20, color: colors.textSecondary },
    readoutList: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
    readoutPill: { borderRadius: 999, paddingVertical: 4, paddingHorizontal: 10, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
    readoutPillOn: { backgroundColor: colors.primarySubtle, borderColor: colors.primaryBorder },
    readoutText: { fontSize: 12.5, fontWeight: '700', color: colors.textSecondary },
    readoutTextOn: { color: colors.primaryText },
    options: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    option: { flexGrow: 1, flexBasis: 150, borderRadius: 12, borderWidth: 1.5, borderColor: colors.border, backgroundColor: colors.surface, paddingVertical: 10, paddingHorizontal: 12, alignItems: 'center' },
    optionOn: { borderColor: colors.primary },
    optionRight: { borderColor: colors.success, backgroundColor: colors.successSubtle },
    optionWrong: { borderColor: colors.error, backgroundColor: colors.errorSubtle },
    optionText: { fontSize: 14, fontWeight: '700', color: colors.text },
    optionTextStrong: { fontWeight: '900' },
    result: { backgroundColor: colors.primarySubtle, borderRadius: 12, padding: 12, gap: 4 },
    resultLabel: { fontSize: 11, fontWeight: '800', letterSpacing: 1, color: colors.primaryText },
    resultText: { fontSize: 15, lineHeight: 22, fontWeight: '800', color: colors.text },
    actions: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end', gap: 8 },
  });
}
