// "Learn it first" activities for every simulation (owner, 2026-10-31: "most
// people do not understand the physiology simulations — explain them and
// teach them, add activities").
//
// Each activity is a small experiment the learner runs on the model itself:
//   "Drag <control> from its lowest to its highest value. What happens to
//    <readout>?"  (sliders)
//   "Switch to <situation>. What happens to <readout>?"  (the lecture's
//    situations, i.e. the model's scenarios)
// The right answer is worked out by running the model, so it is always what
// the learner then sees on the screen. Pure (no React), checked by
// tests/simulation-guides.test.mjs.
import type { SimDefinition, SimReadout, SimValues } from '@/data/simulations/types';

export const CHANGE_OPTIONS = ['It goes up', 'It goes down', 'It stays about the same'] as const;
export type ChangeAnswer = 0 | 1 | 2;

export type GuideActivity = {
  id: string;
  title: string; // "Experiment 1 · PO₂"
  instruction: string; // what to do
  question: string; // what to predict
  readout: string; // readout key watched
  from: SimValues;
  to: SimValues;
  /** Index into CHANGE_OPTIONS, or null when the readout is a word, not a number (watch only). */
  answer: ChangeAnswer | null;
  before: number;
  after: number;
};

const MAX_ACTIVITIES = 4;

/** The readout an activity watches: the first highlighted number, else the first number shown. */
export function watchedReadout(definition: SimDefinition): SimReadout | undefined {
  const shown = definition.readouts.filter((readout) => !readout.hidden);
  const numeric = shown.filter((readout) => !readout.text);
  return numeric.find((readout) => readout.primary) ?? numeric[0] ?? shown.find((readout) => readout.primary) ?? shown[0];
}

/** Up, down or about the same: a change smaller than 2% of the larger value (or one display step) counts as "the same". */
export function changeOf(before: number, after: number, decimals = 0): ChangeAnswer {
  const step = Math.pow(10, -decimals) / 2;
  const threshold = Math.max(step, 0.02 * Math.max(Math.abs(before), Math.abs(after)));
  if (after - before > threshold) return 0;
  if (before - after > threshold) return 1;
  return 2;
}

function readoutValue(definition: SimDefinition, values: SimValues, key: string) {
  return definition.model(values).readouts[key] ?? 0;
}

export function guideActivities(definition: SimDefinition): GuideActivity[] {
  const watch = watchedReadout(definition);
  if (!watch) return [];
  const numeric = !watch.text;
  const start = definition.scenarios[0]?.values ?? definition.initial;
  const activities: GuideActivity[] = [];
  const make = (id: string, title: string, instruction: string, from: SimValues, to: SimValues): GuideActivity => {
    const before = readoutValue(definition, from, watch.key);
    const after = readoutValue(definition, to, watch.key);
    return {
      id,
      title,
      instruction,
      question: `What happens to ${lowerFirst(watch.label)}?`,
      readout: watch.key,
      from,
      to,
      answer: numeric ? changeOf(before, after, watch.decimals ?? 0) : null,
      before,
      after,
    };
  };

  // 1. Sliders: lowest → highest, everything else at the starting values.
  const sliders = definition.controls.filter((control) => control.kind === 'slider');
  const sliderItems: GuideActivity[] = [];
  for (const control of sliders) {
    if (control.kind !== 'slider') continue;
    const from = { ...definition.initial, [control.key]: control.min };
    const to = { ...definition.initial, [control.key]: control.max };
    sliderItems.push(make(`slider:${control.key}`, control.label, `Move “${control.label}” from its lowest to its highest value. Everything else stays at the start.`, from, to));
  }
  // Experiments that show a change first; at most one "stays the same".
  const changing = sliderItems.filter((item) => item.answer !== 2);
  const flat = sliderItems.filter((item) => item.answer === 2).slice(0, 1);
  activities.push(...changing.slice(0, 3), ...flat);

  // 2. The lecture's situations, compared with the first (normal) one.
  for (const scenario of definition.scenarios.slice(1)) {
    if (activities.length >= MAX_ACTIVITIES + 1) break;
    const item = make(`scenario:${scenario.id}`, scenario.label, `Switch from “${definition.scenarios[0]?.label ?? 'the start'}” to “${scenario.label}”.`, start, scenario.values);
    if (item.answer === 2 && activities.some((other) => other.answer === 2)) continue;
    activities.push(item);
  }

  return activities.slice(0, MAX_ACTIVITIES + 1).map((item, index) => ({ ...item, title: `Experiment ${index + 1} · ${item.title}` }));
}

function lowerFirst(text: string) {
  // Keep symbols and abbreviations as written (PO₂, GFR, ADH…).
  if (/^[A-Z][a-z]/.test(text) && !/^[A-Z][a-z]*[A-Z0-9₀-₉]/.test(text)) return text[0].toLowerCase() + text.slice(1);
  return text;
}
