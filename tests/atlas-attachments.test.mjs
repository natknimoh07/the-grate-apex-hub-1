import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

// The atlas info card shows where a muscle starts (origin) and ends (insertion) from public/atlas/attachments.json (see the
// "origin and insertion" block in public/atlas/anatomy.html). Its keys are the same structure names as supply.json, so every
// key must be a real muscle in the model, and every muscle in supply.json must have an entry unless the textbooks give none.

const ATLAS = new URL('../public/atlas/', import.meta.url);
const read = file => JSON.parse(readFileSync(new URL(file, ATLAS), 'utf8'));

function muscleNames() {
  const d = readFileSync(new URL('MuscularSystem100.glb', ATLAS));
  const length = d.readUInt32LE(12);
  const { nodes } = JSON.parse(d.subarray(20, 20 + length).toString('utf8'));
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
    if (raw) found.add(raw.replace(/-mesh$/i, '').replace(/\.[a-z]{1,2}$/i, '').trim());
  });
  return found;
}

// Muscles the source textbooks (OpenStax Anatomy and Physiology; Human Anatomy, OERI) give no origin and insertion for.
const NOT_IN_TEXTBOOKS = [
  'Levator scapulae',
  'Scalenus anterior muscle',
  'Scalenus medius muscle',
  'Scalenus posterior muscle',
  'Platysma',
  'Fibularis tertius muscle',
];

const data = read('attachments.json');
const supply = read('supply.json');
const entries = Object.entries(data).filter(([k]) => !k.startsWith('_'));
const model = muscleNames();

describe('atlas muscle origins and insertions', () => {
  it('names its sources', () => {
    assert.match(data._source, /OpenStax/);
    assert.match(data._source, /CC BY 4\.0/);
  });

  it('gives every entry an origin and an insertion', () => {
    assert.ok(entries.length > 100);
    for (const [name, e] of entries) {
      for (const f of ['o', 'i']) {
        assert.equal(typeof e[f], 'string', `${name}.${f}`);
        assert.ok(e[f].length >= 5 && e[f].length < 140, `${name}.${f} length`);
        assert.doesNotMatch(e[f], /[<>]|\.\.\./, `${name}.${f} markup`);
      }
      if (e.n !== undefined) assert.ok(typeof e.n === 'string' && e.n.length < 120, `${name}.n`);
    }
  });

  it('only names muscles that are in the model and in supply.json', () => {
    for (const [name] of entries) {
      assert.ok(model.has(name), `${name} is not a muscle in MuscularSystem100.glb`);
      assert.ok(supply[name], `${name} is not in supply.json`);
    }
  });

  it('covers every muscle in supply.json except those the textbooks leave out', () => {
    for (const name of Object.keys(supply)) {
      if (name === '_about' || !model.has(name)) continue;
      if (NOT_IN_TEXTBOOKS.includes(name)) assert.equal(data[name], undefined, `${name} should have no entry`);
      else assert.ok(data[name], `${name} has no origin and insertion`);
    }
  });
});
