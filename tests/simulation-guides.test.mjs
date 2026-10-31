// "Learn" tab of every simulation (data/simulations/guides.ts and
// guide-activities.ts). Run with: npm test
// - every simulation has a guide: the idea in 2–3 paragraphs and how to read it
// - the guide names only controls and tiles the simulation really has
// - every simulation has experiments, and each experiment's marked answer is
//   what the model really does when it is run
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

const { SIMULATIONS } = await import('@/data/simulations');
const { SIMULATION_GUIDES } = await import('@/data/simulations/guides');
const { guideActivities, changeOf } = await import('@/data/simulations/guide-activities');

describe('simulation guides', () => {
  it('cover every simulation, and only real ones', () => {
    for (const id of Object.keys(SIMULATIONS)) {
      const guide = SIMULATION_GUIDES[id];
      assert.ok(guide, `${id}: no guide`);
      assert.ok(guide.idea.length >= 2 && guide.idea.length <= 3, `${id}: the idea needs 2–3 paragraphs`);
      for (const paragraph of guide.idea) assert.ok(paragraph.length >= 80 && paragraph.length <= 600, `${id}: paragraph length`);
      assert.ok(guide.look.length >= 40, `${id}: say how to read the screen`);
    }
    for (const id of Object.keys(SIMULATION_GUIDES)) assert.ok(SIMULATIONS[id], `guide for unknown simulation ${id}`);
  });

  it('name tiles that exist when they quote one', () => {
    for (const [id, definition] of Object.entries(SIMULATIONS)) {
      const names = new Set([...definition.readouts.map((r) => r.label), ...definition.controls.map((c) => c.label), ...definition.scenarios.map((s) => s.label)]);
      const quoted = [...SIMULATION_GUIDES[id].look.matchAll(/"([^"]+)" tile|the "([^"]+)"|"([^"]+)" and "([^"]+)"/g)].flatMap((m) => m.slice(1).filter(Boolean));
      for (const name of quoted) {
        const known = [...names].some((label) => label.toLowerCase() === name.toLowerCase());
        assert.ok(known, `${id}: the guide quotes "${name}", which is not a control or tile`);
      }
    }
  });

  it('have experiments whose answers match the model', () => {
    for (const [id, definition] of Object.entries(SIMULATIONS)) {
      const activities = guideActivities(definition);
      assert.ok(activities.length >= 1, `${id}: no experiments`);
      for (const activity of activities) {
        const readout = definition.readouts.find((r) => r.key === activity.readout);
        assert.ok(readout, `${id}: unknown readout ${activity.readout}`);
        const before = definition.model(activity.from).readouts[activity.readout];
        const after = definition.model(activity.to).readouts[activity.readout];
        assert.ok(Number.isFinite(before) && Number.isFinite(after), `${id}/${activity.id}: readout is not a number`);
        if (activity.answer !== null) assert.equal(activity.answer, changeOf(before, after, readout.decimals ?? 0), `${id}/${activity.id}: wrong marked answer`);
      }
    }
  });
});
