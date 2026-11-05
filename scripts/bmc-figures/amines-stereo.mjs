// Amines (bmc-01) and Stereochemistry (bmc-stereochemistry).
import { ARROW, arrow, at, BLUE, charge, circle, curly, equilibrium, GREEN, INK, line, lonePair, mol, MUTED, ORANGE, P, PURPLE, rect, ring, star, tag, text } from './kit.mjs';

const N = { color: BLUE, weight: 700 };

/** A pyramidal nitrogen: lone pair up, three groups (one in the page, one wedge, one hash). */
const amine = (c, [a, b, d], colors = []) => star(c, 'N', [[200, a, 1, { color: colors[0] }], [-25, b, 'wedge', { color: colors[1] }], [-80, d, 'hash', { color: colors[2] }]], N) + lonePair(c, 90, { dist: 16 });

export default [
  {
    id: 'amn-classes',
    w: 760,
    h: 230,
    title: 'Ammonia and primary, secondary and tertiary amines',
    draw() {
      let s = '';
      const items = [
        ['H', 'H', 'H', 'ammonia, NH_3', 'no carbon groups'],
        ['H_3C', 'H', 'H', 'methylamine (1°)', 'one H replaced'],
        ['H_3C', 'CH_3', 'H', 'dimethylamine (2°)', 'two H replaced'],
        ['H_3C', 'CH_3', 'CH_3', 'trimethylamine (3°)', 'all three replaced'],
      ];
      items.forEach(([a, b, d, name, note], i) => {
        const x = 100 + i * 190;
        const colors = [a === 'H' ? INK : PURPLE, b === 'H' ? INK : PURPLE, d === 'H' ? INK : PURPLE];
        s += amine(P(x, 92), [a, b, d], colors);
        s += text(x, 176, name, { size: 15, weight: 600 }) + text(x, 196, note, { size: 12, color: MUTED });
      });
      s += text(380, 222, 'The N is sp^3 and pyramidal; its lone pair (two dots) stays, so amines are bases and nucleophiles', { size: 13, color: BLUE, weight: 600 });
      return s;
    },
  },
  {
    id: 'amn-base',
    w: 680,
    h: 210,
    title: 'An amine is a base: its lone pair takes a proton',
    draw() {
      let s = '';
      const y = 100;
      s += star(P(80, y), 'N', [[180, 'H_3C', 1, { len: 50 }], [60, 'H'], [-60, 'H']], N) + lonePair(P(80, y), 0, { dist: 15 });
      s += mol({ h: { ...P(164, y), label: 'H', color: ORANGE, weight: 700 }, o: { ...P(206, y), label: 'O' }, h2: { ...P(248, y), label: 'H' } }, [['h', 'o'], ['o', 'h2']]);
      s += curly(P(98, y - 4), P(156, y - 10), 22);
      s += curly(P(184, y + 6), P(204, y + 14), -12);
      s += equilibrium(282, 350, y);
      s += star(P(440, y), 'N', [[180, 'H_3C', 1, { len: 50 }], [90, 'H'], [-30, 'H'], [-90, 'H', 1, { color: ORANGE, weight: 700 }]], N);
      s += charge(P(440, y), 40, '+', { dist: 20, size: 16, color: ARROW });
      s += text(560, y, '+  OH^−', { size: 17 });
      s += tag(150, 176, 'methylamine + water') + tag(470, 176, 'methylammonium ion (ionised)');
      s += text(340, 202, 'A stronger base has a lower pK_{b}, and its ion a higher pK_{a}', { size: 12, color: MUTED });
      return s;
    },
  },
  {
    id: 'amn-absorption',
    w: 720,
    h: 280,
    title: 'Why weakly basic drugs are absorbed in the small intestine, not the stomach',
    draw() {
      let s = '';
      const panel = (x, title, ph, ionised, unionised) => {
        let out = rect(x, 36, 300, 190, { fill: '#f8fafc', stroke: '#e2e8f0' });
        out += text(x + 150, 56, title, { size: 15, weight: 700 }) + text(x + 150, 76, ph, { size: 13, color: MUTED });
        // The membrane: a lipid bilayer drawn as two rows of heads.
        for (let i = 0; i < 14; i += 1) {
          const hx = x + 14 + i * 20.5;
          out += circle(P(hx, 150), 5, { fill: '#fde68a', stroke: '#d97706', width: 1 }) + circle(P(hx, 186), 5, { fill: '#fde68a', stroke: '#d97706', width: 1 });
          out += line(P(hx - 2, 155), P(hx - 2, 168), { color: '#d97706', width: 1 }) + line(P(hx + 2, 155), P(hx + 2, 168), { color: '#d97706', width: 1 });
          out += line(P(hx - 2, 169), P(hx - 2, 181), { color: '#d97706', width: 1 }) + line(P(hx + 2, 169), P(hx + 2, 181), { color: '#d97706', width: 1 });
        }
        ionised.forEach((p, i) => { out += text(x + p, 112 + (i % 2) * 18, 'BH^+', { size: 14, color: ARROW, weight: 700 }); });
        unionised.forEach((p, i) => { out += text(x + p, 112 + (i % 2) * 18, 'B', { size: 14, color: GREEN, weight: 700 }); });
        return out;
      };
      s += panel(20, 'Stomach', 'pH 1: mostly ionised', [40, 80, 120, 160, 200, 240], [270]);
      s += arrow(P(290, 140), P(290, 210), { color: GREEN });
      s += panel(390, 'Small intestine', 'pH 6–8: much more un-ionised', [60, 200], [30, 100, 140, 170, 240, 270]);
      for (const dx of [100, 170, 240]) s += arrow(P(390 + dx, 140), P(390 + dx, 210), { color: GREEN });
      s += text(360, 250, 'B = un-ionised (lipid-soluble): crosses the membrane.  BH^+ = ionised: crosses with difficulty.', { size: 13, weight: 600 });
      s += text(360, 270, 'For a weak base with pK_{a} above 7.4, much more is un-ionised in the intestine than in the acid stomach.', { size: 12, color: MUTED });
      return s;
    },
  },
  {
    id: 'ste-structural',
    w: 600,
    h: 190,
    title: 'Structural isomers: ethanol and dimethyl ether, both C2H6O',
    draw() {
      let s = '';
      s += mol({ a: { ...P(60, 90), label: 'CH_3' }, b: { ...P(130, 90), label: 'CH_2' }, o: { ...P(190, 90), label: 'O', color: ORANGE, weight: 700 }, h: { ...P(236, 90), label: 'H', color: BLUE, weight: 700 } }, [['a', 'b'], ['b', 'o'], ['o', 'h']]);
      s += mol({ a: { ...P(380, 90), label: 'CH_3' }, o: { ...P(446, 90), label: 'O', color: ORANGE, weight: 700 }, b: { ...P(512, 90), label: 'CH_3' } }, [['a', 'o'], ['o', 'b']]);
      s += text(150, 140, 'ethanol: an alcohol (C–O–H)', { size: 15, weight: 600 }) + text(446, 140, 'dimethyl ether: an ether (C–O–C)', { size: 15, weight: 600 });
      s += text(300, 30, 'Same formula, C_2H_6O; atoms joined in a different order', { size: 13, color: MUTED, weight: 600 });
      s += text(300, 176, 'Different connections, different compounds and properties', { size: 12, color: MUTED });
      return s;
    },
  },
  {
    id: 'ste-mirror',
    w: 640,
    h: 270,
    title: 'A chiral carbon and its mirror image: the two enantiomers of lactic acid',
    draw() {
      let s = '';
      const left = P(180, 130);
      const right = P(460, 130);
      s += star(left, 'C', [[90, 'COOH', 1, { color: ORANGE, weight: 700 }], [200, 'H_3C', 1, { len: 50, color: PURPLE, weight: 700 }], [-30, 'OH', 'wedge', { color: GREEN, weight: 700 }], [-75, 'H', 'hash', { color: BLUE, weight: 700 }]]);
      s += star(right, 'C', [[90, 'COOH', 1, { color: ORANGE, weight: 700 }], [-20, 'CH_3', 1, { len: 50, color: PURPLE, weight: 700 }], [210, 'HO', 'wedge', { color: GREEN, weight: 700 }], [255, 'H', 'hash', { color: BLUE, weight: 700 }]]);
      s += line(P(320, 40), P(320, 220), { color: MUTED, width: 2, dash: '6 5' });
      s += text(320, 30, 'mirror', { size: 12, color: MUTED });
      s += circle(left, 13, { stroke: ARROW, width: 1.5, dash: '3 3' }) + circle(right, 13, { stroke: ARROW, width: 1.5, dash: '3 3' });
      s += text(320, 246, 'Four different groups on one carbon (red ring): the two cannot be laid on each other,', { size: 13, weight: 600 });
      s += text(320, 264, 'like a left and a right hand. Each is the other’s enantiomer.', { size: 13, color: MUTED });
      return s;
    },
  },
  {
    id: 'ste-dichlorocyclohexane',
    w: 620,
    h: 270,
    title: 'cis- and trans-1,2-dichlorocyclohexane and the plane of symmetry',
    draw() {
      let s = '';
      const draw = (c, trans) => {
        const pts = ring(c, 46, 60);
        const atoms = {};
        pts.forEach((p, i) => { atoms[`r${i}`] = p; });
        // C1 and C2 are the two top corners (60° and 120°).
        atoms.cl1 = { ...at(pts[0], 40, 46), label: 'Cl', color: GREEN, weight: 700 };
        atoms.cl2 = { ...at(pts[1], 140, 46), label: 'Cl', color: GREEN, weight: 700 };
        const bonds = pts.map((_, i) => [`r${i}`, `r${(i + 1) % 6}`]);
        bonds.push(['r0', 'cl1', 'wedge'], ['r1', 'cl2', trans ? 'hash' : 'wedge']);
        return mol(atoms, bonds);
      };
      s += draw(P(160, 140), false);
      s += line(P(160, 50), P(160, 214), { color: BLUE, width: 2, dash: '6 5' });
      s += text(160, 232, 'cis: both Cl toward you', { size: 15, weight: 600 }) + text(160, 252, 'plane of symmetry (blue) → achiral', { size: 13, color: BLUE, weight: 600 });
      s += draw(P(460, 140), true);
      s += text(460, 232, 'trans: one toward, one away', { size: 15, weight: 600 }) + text(460, 252, 'no plane of symmetry → two enantiomers', { size: 13, color: ARROW, weight: 600 });
      return s;
    },
  },
  {
    id: 'ste-polarimeter',
    w: 760,
    h: 230,
    title: 'A polarimeter: an enantiomer rotates plane-polarised light',
    draw() {
      let s = '';
      const y = 100;
      // Lamp
      s += circle(P(50, y), 22, { fill: '#fef3c7', stroke: '#d97706' }) + text(50, y + 44, 'light', { size: 12, color: MUTED });
      // Unpolarised waves
      s += line(P(80, y), P(130, y), { color: '#d97706', width: 1.5 });
      for (const deg of [0, 45, 90, 135]) s += line(at(P(105, y), deg, 16), at(P(105, y), deg + 180, 16), { color: '#d97706', width: 1.6 });
      // Polariser
      s += rect(140, y - 40, 14, 80, { fill: '#e0e7ff', stroke: BLUE, r: 3 }) + text(147, y + 58, 'polariser', { size: 12, color: MUTED });
      s += line(P(162, y), P(222, y), { color: '#d97706', width: 1.5 });
      s += line(P(192, y - 20), P(192, y + 20), { color: '#d97706', width: 2.4 });
      s += text(192, y - 32, 'one plane', { size: 12, color: '#b45309' });
      // Sample tube
      s += rect(232, y - 26, 200, 52, { fill: '#ecfdf5', stroke: GREEN, r: 26 }) + text(332, y, 'one enantiomer in solution', { size: 13, color: GREEN, weight: 600 });
      s += line(P(440, y), P(520, y), { color: '#d97706', width: 1.5 });
      // Rotated plane
      const c = P(480, y);
      s += line(at(c, 90, 22), at(c, -90, 22), { color: '#d97706', width: 1.2, dash: '3 3' });
      s += line(at(c, 60, 22), at(c, 240, 22), { color: '#d97706', width: 2.4 });
      s += text(480, y - 34, 'rotated by α', { size: 12, color: '#b45309' });
      // Analyser and eye
      s += rect(530, y - 40, 14, 80, { fill: '#e0e7ff', stroke: BLUE, r: 3 }) + text(537, y + 58, 'analyser', { size: 12, color: MUTED });
      s += text(640, y - 10, 'clockwise: (+), d', { size: 14, weight: 600, anchor: 'start' }).replace('x="640"', 'x="566"');
      s += text(566, y + 14, 'anticlockwise: (−), l', { size: 14, weight: 600, anchor: 'start' });
      s += text(380, 196, 'The other enantiomer turns the plane by the same angle the other way;', { size: 13 });
      s += text(380, 216, 'a racemic (±) mixture does not turn it at all.', { size: 13, color: MUTED });
      return s;
    },
  },
  {
    id: 'ste-receptor',
    w: 680,
    h: 270,
    title: 'Only one enantiomer fits all three binding sites of a chiral receptor',
    draw() {
      let s = '';
      const show = (x, mirror, ok) => {
        let out = '';
        // Receptor surface with three sites a, b, c.
        out += `<path d="M${x - 120},200 L${x - 120},230 L${x + 120},230 L${x + 120},200 Z" fill="#e2e8f0" stroke="#94a3b8"/>`;
        const sites = [[-70, 'a', '#2563eb'], [0, 'b', '#047857'], [70, 'c', '#7c3aed']];
        for (const [dx, name, color] of sites) {
          out += `<path d="M${x + dx - 18},200 Q${x + dx},178 ${x + dx + 18},200 Z" fill="${color}" fill-opacity="0.18" stroke="${color}"/>`;
          out += text(x + dx, 216, name, { size: 12, color, weight: 700 });
        }
        // The molecule: three groups reaching down, one up.
        const c = P(x, 110);
        const groups = mirror ? [['A', -70, '#2563eb'], ['C', 0, '#7c3aed'], ['B', 70, '#047857']] : [['A', -70, '#2563eb'], ['B', 0, '#047857'], ['C', 70, '#7c3aed']];
        out += mol({ c: { ...c, label: 'C' }, d: { ...at(c, 90, 44), label: 'D' } }, [['c', 'd']]);
        for (const [g, dx, color] of groups) {
          const p = P(x + dx, 172);
          out += mol({ c: { ...c, label: 'C' }, g: { ...p, label: g, color, weight: 700 } }, [['c', 'g', dx === 0 ? (mirror ? 'hash' : 'wedge') : 1]]).replace(/<text[^>]*><tspan[^>]*>C<\/tspan><\/text>/, '');
        }
        out += text(x, 256, ok ? 'compound 1: A, B, C all fit → active' : 'compound 2 (mirror image): B and C miss → inactive', { size: 13, color: ok ? GREEN : ARROW, weight: 600 });
        return out;
      };
      s += show(170, false, true);
      s += show(510, true, false);
      s += text(340, 26, 'Receptors and enzyme active sites are chiral themselves', { size: 13, color: MUTED, weight: 600 });
      return s;
    },
  },
];
