import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

// The atlas info card shows nerve / artery / vein supply from public/atlas/supply.json (see the "supply" block in
// public/atlas/anatomy.html). Every structure and every model part named there must exist in the real model files, on both
// sides, otherwise a button would light up nothing.

const ATLAS = new URL('../public/atlas/', import.meta.url);

function glbJson(file) {
  const d = readFileSync(new URL(file, ATLAS));
  const length = d.readUInt32LE(12);
  return JSON.parse(d.subarray(20, 20 + length).toString('utf8'));
}

// What the atlas calls each mesh: the nearest named node (itself or a parent), without ".l" / ".r".
function labels(file) {
  const { nodes } = glbJson(file);
  const parent = new Map();
  nodes.forEach((n, i) => (n.children || []).forEach(c => parent.set(c, i)));
  const found = new Set();
  nodes.forEach((n, i) => {
    if (n.mesh === undefined) return;
    let k = i;
    let raw = null;
    while (k !== undefined) {
      if (nodes[k].name) { raw = nodes[k].name; break; }
      k = parent.get(k);
    }
    if (!raw) return;
    raw = raw.replace(/-mesh$/i, '');
    const side = /\.l$/i.test(raw) ? 'Left' : /\.r$/i.test(raw) ? 'Right' : '';
    found.add(raw.replace(/\.[a-z]{1,2}$/i, '').trim() + '|' + side);
  });
  return found;
}

const models = {
  muscle: labels('MuscularSystem100.glb'),
  nerve: labels('NervousSystem100.glb'),
  vessel: labels('CardioVascular41.glb'),
};
const has = (set, name, side) => set.has(name + '|' + side) || set.has(name + '|');

const supply = JSON.parse(readFileSync(new URL('supply.json', ATLAS), 'utf8'));
const entries = Object.entries(supply).filter(([k]) => k !== '_about');

describe('atlas supply data', () => {
  it('has entries', () => {
    assert.ok(entries.length > 50);
  });

  it('gives every structure text and a parts list for nerve, artery and vein', () => {
    for (const [name, e] of entries) {
      for (const kind of ['n', 'a', 'v']) {
        assert.ok(e[kind], `${name} has no ${kind}`);
        assert.equal(typeof e[kind].t, 'string', `${name}.${kind}.t`);
        assert.ok(e[kind].t.length > 10 && e[kind].t.length < 400, `${name}.${kind}.t length`);
        assert.ok(Array.isArray(e[kind].m), `${name}.${kind}.m`);
      }
    }
  });

  it('only describes muscles that are in the muscular model, on both sides', () => {
    for (const [name] of entries) {
      for (const side of ['Right', 'Left']) assert.ok(has(models.muscle, name, side), `${name} (${side}) is not in MuscularSystem100.glb`);
    }
  });

  it('only lights up nerves and vessels that are in the models, on both sides', () => {
    for (const [name, e] of entries) {
      for (const side of ['Right', 'Left']) {
        for (const p of e.n.m) assert.ok(has(models.nerve, p, side), `${name}: nerve "${p}" (${side}) is not in NervousSystem100.glb`);
        for (const p of [...e.a.m, ...e.v.m]) assert.ok(has(models.vessel, p, side), `${name}: vessel "${p}" (${side}) is not in CardioVascular41.glb`);
      }
    }
  });

  it('is wired into the atlas page', () => {
    const page = readFileSync(new URL('anatomy.html', ATLAS), 'utf8');
    assert.match(page, /id="supplyBox"/);
    assert.match(page, /fetch\(BASE \+ 'supply\.json'\)/);
    for (const kind of ['nerve', 'artery', 'vein']) assert.match(page, new RegExp(`data-supply="${kind}"`));
  });
});
