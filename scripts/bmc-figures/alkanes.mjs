// Hydrocarbons & Alkanes (bmc-alkanes).
import { angle, arrow, at, BLUE, GREEN, INK, L, mol, MUTED, ORANGE, P, PURPLE, rect, ring, tag, text, zigzag } from './kit.mjs';

const H = (p) => ({ ...p, label: 'H' });
const C = (p, color) => ({ ...p, label: 'C', color });

/** Full structural formula of a straight chain of n carbons, H above, below and at the ends. */
function fullChain(x, y, n, { len = 46, hColor = INK } = {}) {
  const atoms = {};
  const bonds = [];
  for (let i = 0; i < n; i += 1) {
    const c = P(x + i * len, y);
    atoms[`c${i}`] = C(c);
    atoms[`u${i}`] = { ...H(at(c, 90, 40)), color: hColor };
    atoms[`d${i}`] = { ...H(at(c, -90, 40)), color: hColor };
    bonds.push([`c${i}`, `u${i}`], [`c${i}`, `d${i}`]);
    if (i) bonds.push([`c${i - 1}`, `c${i}`]);
  }
  atoms.l = { ...H(P(x - 40, y)), color: hColor };
  atoms.r = { ...H(P(x + (n - 1) * len + 40, y)), color: hColor };
  bonds.push(['l', 'c0'], [`c${n - 1}`, 'r']);
  return mol(atoms, bonds);
}

export default [
  {
    id: 'alk-saturation',
    w: 680,
    h: 240,
    title: 'Ethane, ethene and ethyne: saturated and unsaturated',
    draw() {
      let s = '';
      // Ethane
      s += fullChain(95, 95, 2);
      // Ethene
      const e1 = P(318, 95);
      const e2 = P(364, 95);
      s += mol({ a: C(e1), b: C(e2), h1: H(at(e1, 150, 42)), h2: H(at(e1, 210, 42)), h3: H(at(e2, 30, 42)), h4: H(at(e2, -30, 42)) }, [['a', 'b', 2], ['a', 'h1'], ['a', 'h2'], ['b', 'h3'], ['b', 'h4']]);
      // Ethyne
      s += mol({ h1: H(P(500, 95)), a: C(P(546, 95)), b: C(P(598, 95)), h2: H(P(644, 95)) }, [['h1', 'a'], ['a', 'b', 3], ['b', 'h2']]);
      const cap = (x, name, formula, kind, color, bonds) => text(x, 170, name, { weight: 600 }) + text(x, 192, formula, { size: 15, color: MUTED }) + text(x, 214, `${kind} · ${bonds}`, { size: 13, color, weight: 600 });
      s += cap(118, 'Ethane', 'C_2H_6 (alkane)', 'Saturated', GREEN, 'all single bonds');
      s += cap(341, 'Ethene', 'C_2H_4 (alkene)', 'Unsaturated', ORANGE, 'one C=C');
      s += cap(572, 'Ethyne', 'C_2H_2 (alkyne)', 'Unsaturated', ORANGE, 'one C≡C');
      return s;
    },
  },
  {
    id: 'alk-tetrahedral',
    w: 640,
    h: 260,
    title: 'The tetrahedral sp3 carbon of methane, and why alkane chains zig-zag',
    draw() {
      let s = '';
      const c = P(130, 128);
      s += mol({ c: C(c), up: H(at(c, 90, 52)), left: H(at(c, 205, 52)), w: H(at(c, -25, 50)), h: H(at(c, -70, 50)) }, [['c', 'up'], ['c', 'left'], ['c', 'w', 'wedge'], ['c', 'h', 'hash']]);
      s += angle(c, 90, 205, '109.5°', { r: 26, labelDist: 44 });
      s += text(190, 148, 'wedge: toward you', { size: 12, color: MUTED, anchor: 'start' });
      s += text(162, 184, 'hash: away from you', { size: 12, color: MUTED, anchor: 'start' });
      s += tag(130, 234, 'Methane, CH_4: sp^3, tetrahedral');
      // Butane chain
      const pts = zigzag(P(392, 140), 4, { len: 56 });
      const atoms = {};
      pts.forEach((p, i) => { atoms[`c${i}`] = C(p); });
      s += mol(atoms, [['c0', 'c1'], ['c1', 'c2'], ['c2', 'c3']]);
      s += angle(pts[1], 210, 330, '109.5°', { r: 20, labelDist: 34 });
      s += tag(475, 234, 'Butane’s carbon chain zig-zags');
      s += text(475, 64, 'each C keeps its 109.5° angles', { size: 12, color: MUTED });
      return s;
    },
  },
  {
    id: 'alk-carbon-classes',
    w: 640,
    h: 230,
    title: 'Primary, secondary and tertiary carbons in butane and isobutane',
    draw() {
      let s = '';
      const y = 92;
      const xs = [60, 138, 216, 294];
      const labels = ['CH_3', 'CH_2', 'CH_2', 'CH_3'];
      const kinds = ['1°', '2°', '2°', '1°'];
      const colors = [BLUE, PURPLE, PURPLE, BLUE];
      const atoms = {};
      xs.forEach((x, i) => { atoms[`c${i}`] = { x, y, label: labels[i] }; });
      s += mol(atoms, [['c0', 'c1'], ['c1', 'c2'], ['c2', 'c3']]);
      xs.forEach((x, i) => { s += text(x, y + 32, kinds[i], { size: 15, color: colors[i], weight: 700 }); });
      s += tag(177, 196, 'Butane: 2 primary, 2 secondary, 0 tertiary');
      // Isobutane
      const c = P(500, 104);
      s += mol({ c: { ...c, label: 'CH' }, a: { ...at(c, 180, 72), label: 'H_3C' }, b: { ...at(c, 0, 72), label: 'CH_3' }, d: { ...at(c, 90, 62), label: 'CH_3' } }, [['c', 'a'], ['c', 'b'], ['c', 'd']]);
      s += text(500, 104 + 32, '3°', { size: 15, color: ORANGE, weight: 700 });
      s += text(428, 104 + 32, '1°', { size: 15, color: BLUE, weight: 700 });
      s += text(572, 104 + 32, '1°', { size: 15, color: BLUE, weight: 700 });
      s += text(536, 42, '1°', { size: 15, color: BLUE, weight: 700 });
      s += tag(500, 196, 'Isobutane: 3 primary, 1 tertiary');
      s += text(320, 222, 'Count the carbons each carbon is bonded to: one = 1°, two = 2°, three = 3°', { size: 12, color: MUTED });
      return s;
    },
  },
  {
    id: 'alk-pentane-isomers',
    w: 660,
    h: 230,
    title: 'The three constitutional isomers of C5H12',
    draw() {
      let s = '';
      const line = (pts, extra = []) => {
        const atoms = {};
        pts.forEach((p, i) => { atoms[`c${i}`] = p; });
        const bonds = pts.slice(1).map((_, i) => [`c${i}`, `c${i + 1}`]);
        return mol({ ...atoms, ...Object.fromEntries(extra.map((e, i) => [`b${i}`, e.p])) }, [...bonds, ...extra.map((e, i) => [`c${e.on}`, `b${i}`, 1, { color: GREEN }])]);
      };
      // n-pentane
      const a = zigzag(P(40, 110), 5, { len: 40 });
      s += line(a);
      s += text(110, 170, 'n-Pentane', { weight: 600 }) + text(110, 192, 'chain of 5', { size: 13, color: MUTED });
      // isopentane: chain of 4, methyl on C2
      const b = zigzag(P(258, 110), 4, { len: 40 });
      s += line(b, [{ on: 1, p: at(b[1], 90, 40) }]);
      s += text(318, 170, 'Isopentane', { weight: 600 }) + text(318, 192, 'chain of 4 + 1 branch', { size: 13, color: MUTED });
      // neopentane: chain of 3, two methyls on C2
      const c = [P(470, 110), P(530, 110), P(590, 110)];
      s += line(c, [{ on: 1, p: P(530, 60) }, { on: 1, p: P(530, 160) }]);
      s += text(530, 186, 'Neopentane', { weight: 600 }) + text(530, 208, 'chain of 3 + 2 branches', { size: 13, color: MUTED });
      s += tag(330, 28, 'All are C_5H_12 · branches in green');
      return s;
    },
  },
  {
    id: 'alk-four-drawings',
    w: 680,
    h: 210,
    title: 'Four ways to draw butane',
    draw() {
      let s = '';
      s += rect(12, 22, 656, 176, { stroke: '#e5e7eb' });
      s += text(70, 98, 'C_4H_10', { size: 20 });
      s += tag(70, 168, 'Molecular formula');
      s += fullChain(178, 98, 4, { len: 42 });
      s += tag(241, 168, 'Full structural');
      s += text(450, 98, 'CH_3CH_2CH_2CH_3', { size: 17 });
      s += tag(450, 168, 'Condensed');
      const z = zigzag(P(556, 112), 4, { len: 36 });
      const atoms = {};
      z.forEach((p, i) => { atoms[`c${i}`] = p; });
      s += mol(atoms, [['c0', 'c1'], ['c1', 'c2'], ['c2', 'c3']]);
      s += tag(608, 168, 'Line (bond-line)');
      s += text(600, 58, 'each corner and end is a C;', { size: 11, color: MUTED });
      s += text(600, 72, 'H on carbon not drawn', { size: 11, color: MUTED });
      return s;
    },
  },
  {
    id: 'alk-naming-example',
    w: 600,
    h: 300,
    title: 'Naming 3-ethyl-2,6-dimethylheptane',
    draw() {
      let s = '';
      const chain = zigzag(P(110, 150), 7, { len: 62, up: false });
      const atoms = {};
      chain.forEach((p, i) => { atoms[`c${i + 1}`] = p; });
      // Branches point away from the chain: down from the low corners (C2, C6), up from the high one (C3).
      atoms.m2 = at(chain[1], -90, 52);
      atoms.m6 = at(chain[5], -90, 52);
      atoms.e1 = at(chain[2], 90, 52);
      atoms.e2 = at(atoms.e1, 30, 52);
      s += mol(atoms, [['c1', 'c2'], ['c2', 'c3'], ['c3', 'c4'], ['c4', 'c5'], ['c5', 'c6'], ['c6', 'c7'], ['c2', 'm2', 1, { color: PURPLE, width: 3 }], ['c6', 'm6', 1, { color: PURPLE, width: 3 }], ['c3', 'e1', 1, { color: GREEN, width: 3 }], ['e1', 'e2', 1, { color: GREEN, width: 3 }]], { width: 2.4 });
      chain.forEach((p, i) => { s += text(p.x, p.y + (i % 2 ? -18 : 20), String(i + 1), { size: 14, color: BLUE, weight: 700 }); });
      s += text(atoms.m2.x, atoms.m2.y + 16, 'methyl', { size: 13, color: PURPLE, weight: 600 });
      s += text(atoms.m6.x, atoms.m6.y + 16, 'methyl', { size: 13, color: PURPLE, weight: 600 });
      s += text(atoms.e2.x + 26, atoms.e2.y, 'ethyl', { size: 13, color: GREEN, weight: 600 });
      s += tag(300, 26, 'Longest chain: 7 carbons (heptane), numbered from the end nearer the first branch');
      s += text(300, 282, '3-ethyl-2,6-dimethylheptane', { size: 17, weight: 700 });
      return s;
    },
  },
  {
    id: 'alk-halogenation',
    w: 640,
    h: 170,
    title: 'Halogenation of methane: chlorine replaces a hydrogen',
    draw() {
      let s = '';
      const cx = 70;
      const c = P(cx, 82);
      s += mol({ c: C(c), a: H(at(c, 90, 40)), b: H(at(c, 180, 40)), d: H(at(c, -90, 40)), e: { ...H(at(c, 0, 40)), color: ORANGE, weight: 700 } }, [['c', 'a'], ['c', 'b'], ['c', 'd'], ['c', 'e']]);
      s += text(152, 82, '+');
      s += mol({ a: { ...P(190, 82), label: 'Cl', color: GREEN, weight: 700 }, b: { ...P(236, 82), label: 'Cl' } }, [['a', 'b']]);
      s += arrow(P(276, 82), P(376, 82), { above: 'light', below: 'substitution' });
      const d = P(440, 82);
      s += mol({ c: C(d), a: H(at(d, 90, 40)), b: H(at(d, 180, 40)), dd: H(at(d, -90, 40)), e: { ...at(d, 0, 44), label: 'Cl', color: GREEN, weight: 700 } }, [['c', 'a'], ['c', 'b'], ['c', 'dd'], ['c', 'e']]);
      s += text(530, 82, '+');
      s += mol({ a: { ...P(568, 82), label: 'H', color: ORANGE, weight: 700 }, b: { ...P(610, 82), label: 'Cl' } }, [['a', 'b']]);
      s += text(70, 150, 'methane', { size: 13, color: MUTED }) + text(445, 150, 'chloromethane, CH_3Cl', { size: 13, color: MUTED }) + text(590, 150, 'HCl', { size: 13, color: MUTED });
      return s;
    },
  },
];
