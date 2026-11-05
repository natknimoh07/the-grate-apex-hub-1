// Alkyl Halides (bmc-02) and Alcohols (bmc-alcohols).
import { ARROW, arrow, at, BLUE, charge, curly, ellipse, GREEN, INK, lobe, lonePair, mol, MUTED, ORANGE, ORB, P, PURPLE, rect, star, tag, text, zigzag } from './kit.mjs';

const ME = 'CH_3';

export default [
  {
    id: 'rxh-classes',
    w: 800,
    h: 230,
    title: 'Methyl, primary, secondary and tertiary alkyl halides',
    draw() {
      let s = '';
      const brOn = (c, groups, name, cls, n) => {
        let out = star(c, 'C', [[-90, 'Br', 1, { color: GREEN, weight: 700 }], ...groups], { color: ORANGE, weight: 700 });
        out += text(c.x, 176, name, { weight: 600, size: 15 }) + text(c.x, 196, cls, { size: 13, color: BLUE, weight: 600 }) + text(c.x, 214, n, { size: 12, color: MUTED });
        return out;
      };
      s += brOn(P(95, 92), [[90, 'H'], [180, 'H'], [0, 'H']], 'Bromomethane', 'methyl', 'no other C');
      s += brOn(P(290, 92), [[90, 'H'], [180, ME, 1, { len: 50, label: 'H_3C' }], [0, 'H']], 'Bromoethane', 'primary (1°)', 'C bonded to 1 carbon');
      s += brOn(P(490, 92), [[90, 'H'], [180, 'H_3C', 1, { len: 50 }], [0, ME, 1, { len: 50 }]], '2-Bromopropane', 'secondary (2°)', 'C bonded to 2 carbons');
      s += brOn(P(695, 92), [[90, ME, 1, { len: 44 }], [180, 'H_3C', 1, { len: 50 }], [0, ME, 1, { len: 50 }]], '2-Bromo-2-methylpropane', 'tertiary (3°)', 'C bonded to 3 carbons');
      s += text(400, 22, 'Classify by the carbon that carries the halogen (orange)', { size: 13, color: MUTED, weight: 600 });
      return s;
    },
  },
  {
    id: 'rxh-sn2',
    w: 760,
    h: 290,
    title: 'SN2: one step, backside attack, inversion',
    draw() {
      let s = '';
      const y = 130;
      // Reactant: the three groups point toward the nucleophile.
      s += text(44, y, 'HO', { size: 17 }) + charge(P(44, y), 70, '−', { dist: 19, size: 15 }) + lonePair(P(44, y), -70, { dist: 16 });
      const c1 = P(170, y);
      s += star(c1, 'C', [[115, 'H'], [200, 'CH_3', 'wedge', { len: 52, label: 'H_3C', color: PURPLE }], [255, 'C_2H_5', 'hash', { len: 50, color: BLUE }], [0, 'Br', 1, { color: GREEN, weight: 700 }]]);
      s += curly(P(62, y - 6), P(150, y - 6), 26);
      s += curly(P(196, y + 6), P(212, y + 16), -14);
      s += tag(130, 236, 'Nu^− attacks from the back,');
      s += tag(130, 254, '180° from the leaving group');
      s += arrow(P(250, y), P(300, y));
      // Transition state
      const c2 = P(410, y);
      s += star(c2, 'C', [[90, 'H'], [235, 'CH_3', 'wedge', { len: 50, label: 'H_3C', color: PURPLE }], [305, 'C_2H_5', 'hash', { len: 50, color: BLUE }], [180, 'HO', 'partial', { len: 64 }], [0, 'Br', 'partial', { len: 64, color: GREEN, weight: 700 }]]);
      s += text(330, y - 4, '[', { size: 120, color: MUTED }) + text(490, y - 4, ']', { size: 120, color: MUTED }) + text(504, 70, '‡', { size: 16, color: MUTED });
      s += text(410, 236, 'transition state: 5 groups on C,', { size: 13, color: MUTED });
      s += text(410, 254, 'one bond forming as one breaks', { size: 13, color: MUTED });
      s += arrow(P(522, y), P(572, y));
      // Product: inverted, like an umbrella in the wind.
      const c3 = P(650, y);
      s += star(c3, 'C', [[65, 'H'], [-20, 'CH_3', 'wedge', { len: 52, color: PURPLE }], [-75, 'C_2H_5', 'hash', { len: 50, color: BLUE }], [180, 'HO', 1, { len: 50 }]]);
      s += text(722, y + 58, '+ Br^−', { size: 15 });
      s += tag(650, 236, 'inverted, like an umbrella');
      s += tag(650, 254, 'turned inside out');
      s += text(380, 282, 'One step · rate = k[R–X][Nu^−] · methyl > 1° > 2°; 3° never (no room at the back)', { size: 13, color: BLUE, weight: 600 });
      return s;
    },
  },
  {
    id: 'rxh-sn1',
    w: 760,
    h: 336,
    title: 'SN1: a flat carbocation, attacked from either face',
    draw() {
      let s = '';
      const y = 150;
      const groups = (c, flip) => [[90 + (flip ? 0 : 0), 'R^1'], [210, 'R^2', 'wedge', { color: PURPLE }], [330, 'R^3', 'hash', { color: BLUE }]];
      // Reactant
      const c1 = P(80, y);
      s += star(c1, 'C', [[95, 'R^1'], [205, 'R^2', 'wedge', { color: PURPLE }], [258, 'R^3', 'hash', { color: BLUE }], [-20, 'Br', 1, { color: GREEN, weight: 700 }]]);
      s += curly(P(104, y + 4), P(128, y + 22), -12);
      s += arrow(P(150, y), P(220, y), { above: 'slow', below: 'Br^− leaves' });
      // Carbocation: flat, an empty p orbital above and below.
      const c2 = P(320, y);
      s += lobe(c2, 90, { len: 52, w: 14, fill: '#ffffff', opacity: 0.0 }).replace('stroke-width="1.2"', 'stroke-width="1.6" stroke-dasharray="4 3"');
      s += lobe(c2, -90, { len: 52, w: 14, fill: '#ffffff', opacity: 0.0 }).replace('stroke-width="1.2"', 'stroke-width="1.6" stroke-dasharray="4 3"');
      s += star(c2, 'C', [[180, 'R^1'], [-30, 'R^2', 1, { color: PURPLE }], [30, 'R^3', 1, { color: BLUE }]]);
      s += charge(c2, 135, '+', { dist: 18, size: 17, color: ARROW });
      s += text(320, 60, 'Nu^−', { size: 15 }) + text(320, 246, 'Nu^−', { size: 15 });
      s += arrow(P(320, 72), P(320, 92), { color: ARROW }) + arrow(P(320, 232), P(320, 210), { color: ARROW });
      s += tag(320, 276, 'flat (sp^2) carbocation, 6 electrons:');
      s += tag(320, 294, 'attacked from top or bottom');
      s += arrow(P(410, y - 30), P(480, y - 70), { above: '' }) + arrow(P(410, y + 30), P(480, y + 70));
      // Two products: mirror images.
      const c3 = P(560, 80);
      s += star(c3, 'C', [[90, 'Nu', 1, { color: ORANGE, weight: 700 }], [180, 'R^1'], [-20, 'R^2', 'wedge', { color: PURPLE }], [-60, 'R^3', 'hash', { color: BLUE }]]);
      const c4 = P(560, 226);
      s += star(c4, 'C', [[-90, 'Nu', 1, { color: ORANGE, weight: 700 }], [180, 'R^1'], [20, 'R^2', 'wedge', { color: PURPLE }], [60, 'R^3', 'hash', { color: BLUE }]]);
      s += text(690, 140, '50 : 50', { size: 17, weight: 700 }) + text(690, 162, 'racemisation', { size: 13, color: MUTED });
      s += text(380, 322, 'Two steps · rate = k[R–X] · 3° > 2° (stable carbocation); 1° almost never', { size: 13, color: BLUE, weight: 600 });
      void groups;
      return s;
    },
  },
  {
    id: 'rxh-e2',
    w: 720,
    h: 260,
    title: 'E2 elimination: the base removes a beta hydrogen as the bromide leaves',
    draw() {
      let s = '';
      const ca = P(220, 140);
      const cb = P(150, 140);
      s += mol({
        a: { ...ca, label: 'C', color: ORANGE, weight: 700 },
        b: { ...cb, label: 'C' },
        br: { ...at(ca, -90, 50), label: 'Br', color: GREEN, weight: 700 },
        m1: { ...at(ca, 40, 50), label: 'CH_3' },
        m2: { ...at(ca, 0, 56), label: 'CH_3' },
        h: { ...at(cb, 90, 46), label: 'H', color: BLUE, weight: 700 },
        h2: { ...at(cb, 180, 44), label: 'H' },
        h3: { ...at(cb, -90, 44), label: 'H' },
      }, [['a', 'b'], ['a', 'br'], ['a', 'm1'], ['a', 'm2'], ['b', 'h'], ['b', 'h2'], ['b', 'h3']]);
      s += text(ca.x - 14, ca.y - 18, 'α', { size: 14, color: ORANGE, weight: 700 }) + text(cb.x - 18, cb.y + 20, 'β', { size: 14, color: BLUE, weight: 700 });
      s += text(70, 50, 'HO', { size: 17 }) + charge(P(70, 50), 160, '−', { dist: 20, size: 15 }) + lonePair(P(70, 50), 0, { dist: 20 });
      s += curly(P(90, 52), P(140, 90), -18);
      s += curly(P(152, 112), P(186, 132), -16);
      s += curly(P(226, 160), P(230, 182), -14);
      s += tag(180, 230, 'one step, no intermediate');
      s += arrow(P(320, 140), P(400, 140));
      s += mol({ a: { ...P(510, 140), label: 'C', color: ORANGE, weight: 700 }, b: { ...P(456, 140), label: 'C' }, m1: { ...at(P(510, 140), 30, 48), label: 'CH_3' }, m2: { ...at(P(510, 140), -30, 48), label: 'CH_3' }, h1: { ...at(P(456, 140), 150, 40), label: 'H' }, h2: { ...at(P(456, 140), 210, 40), label: 'H' } }, [['a', 'b', 2], ['a', 'm1'], ['a', 'm2'], ['b', 'h1'], ['b', 'h2']]);
      s += text(640, 128, '+ H_2O', { size: 15 }) + text(640, 152, '+ Br^−', { size: 15 });
      s += tag(500, 230, '2-methylpropene: new C=C between α and β');
      return s;
    },
  },
  {
    id: 'roh-classes',
    w: 660,
    h: 230,
    title: 'Primary, secondary and tertiary alcohols: three C4H9OH isomers',
    draw() {
      let s = '';
      const chainWithOH = (pts, ohOn, ohDeg, extra = []) => {
        const atoms = {};
        pts.forEach((p, i) => { atoms[`c${i}`] = i === ohOn ? { ...p } : p; });
        atoms.o = { ...at(pts[ohOn], ohDeg, 42), label: 'OH', color: GREEN, weight: 700 };
        const bonds = pts.slice(1).map((_, i) => [`c${i}`, `c${i + 1}`]);
        extra.forEach((p, i) => { atoms[`x${i}`] = p; bonds.push([`c${ohOn}`, `x${i}`]); });
        let out = mol(atoms, [...bonds, [`c${ohOn}`, 'o']]);
        out += `<circle cx="${pts[ohOn].x}" cy="${pts[ohOn].y}" r="6" fill="${ORANGE}"/>`;
        return out;
      };
      const a = zigzag(P(40, 110), 4, { len: 42 });
      s += chainWithOH(a, 3, 30);
      s += text(110, 168, '1-butanol', { weight: 600 }) + text(110, 188, 'primary (1°)', { size: 13, color: BLUE, weight: 600 });
      const b = zigzag(P(250, 120), 4, { len: 42 });
      s += chainWithOH(b, 1, 90);
      s += text(316, 168, '2-butanol', { weight: 600 }) + text(316, 188, 'secondary (2°)', { size: 13, color: BLUE, weight: 600 });
      const c = P(540, 110);
      s += chainWithOH([at(c, 180, 42), c, at(c, 0, 42)], 1, 90, [at(c, -90, 42)]);
      s += text(540, 168, '2-methyl-2-propanol', { weight: 600 }) + text(540, 188, 'tertiary (3°)', { size: 13, color: BLUE, weight: 600 });
      s += text(330, 220, 'The orange dot marks the carbon carrying –OH: bonded to 1, 2 or 3 other carbons', { size: 12, color: MUTED });
      return s;
    },
  },
  {
    id: 'roh-hbonds',
    w: 600,
    h: 290,
    title: 'Hydrogen bonds between ethanol molecules and with water',
    draw() {
      let s = '';
      const O = (p) => ({ ...p, label: 'O', color: ORANGE, weight: 700 });
      const Hh = (p) => ({ ...p, label: 'H', color: BLUE, weight: 700 });
      // A hydrogen bond from an H to an O, stopping short of both letters.
      const hb = (h, o) => {
        const d = Math.hypot(o.x - h.x, o.y - h.y);
        const u = { x: (o.x - h.x) / d, y: (o.y - h.y) / d };
        return `<line x1="${(h.x + u.x * 10).toFixed(1)}" y1="${(h.y + u.y * 10).toFixed(1)}" x2="${(o.x - u.x * 12).toFixed(1)}" y2="${(o.y - u.y * 12).toFixed(1)}" stroke="${BLUE}" stroke-width="2.4" stroke-dasharray="2 5" stroke-linecap="round"/>`;
      };
      // Ethanol A
      const oA = P(150, 90);
      const hA = at(oA, -40, 36);
      s += mol({ o: O(oA), h: Hh(hA), r: { ...at(oA, 170, 62), label: 'CH_3CH_2' } }, [['o', 'h'], ['o', 'r']]);
      s += charge(oA, 90, 'δ−', { dist: 20, size: 13, color: ORANGE }) + charge(hA, 20, 'δ+', { dist: 18, size: 13, color: BLUE });
      // Ethanol B
      const oB = P(220, 170);
      const hB = at(oB, 0, 36);
      s += mol({ o: O(oB), h: Hh(hB), r: { ...at(oB, 200, 62), label: 'CH_3CH_2' } }, [['o', 'h'], ['o', 'r']]);
      s += hb(hA, oB);
      // Water
      const oW = P(322, 170);
      const w1 = at(oW, 52, 36);
      const w2 = at(oW, -52, 36);
      s += mol({ o: O(oW), a: Hh(w1), b: Hh(w2) }, [['o', 'a'], ['o', 'b']]);
      s += hb(hB, oW);
      s += text(322, 232, 'water', { size: 13, color: MUTED, weight: 600 });
      // Ethanol C, held by water's H
      const oC = P(400, 90);
      s += mol({ o: O(oC), h: Hh(at(oC, 140, 36)), r: { ...at(oC, 10, 62), label: 'CH_2CH_3' } }, [['o', 'h'], ['o', 'r']]);
      s += hb(w1, oC);
      s += text(440, 214, '· · ·  hydrogen bond', { size: 14, color: BLUE, weight: 600, anchor: 'start' });
      s += text(300, 262, 'In O–H the H is δ+ and the O δ−. Boiling means breaking these bonds (high boiling point);', { size: 13, color: MUTED });
      s += text(300, 280, 'making them with water lets small alcohols dissolve.', { size: 13, color: MUTED });
      return s;
    },
  },
  {
    id: 'roh-oxidation',
    w: 720,
    h: 400,
    title: 'Oxidising primary, secondary and tertiary alcohols',
    draw() {
      let s = '';
      const H = { color: BLUE, weight: 700 };
      const OX = { color: GREEN, weight: 700 };
      // Primary → aldehyde → acid
      let y = 74;
      s += text(18, y, '1°', { size: 15, color: BLUE, weight: 700, anchor: 'start' });
      s += star(P(100, y), 'C', [[180, 'R'], [90, 'H', 1, H], [-90, 'H'], [0, 'OH', 1, OX]]);
      s += arrow(P(176, y), P(250, y), { above: '[O]', below: 'PCC stops here' });
      s += star(P(310, y), 'C', [[180, 'R'], [-60, 'H', 1, H], [60, 'O', 2, OX]]);
      s += text(320, y + 64, 'aldehyde', { size: 13, color: MUTED });
      s += arrow(P(370, y), P(450, y), { above: '[O]', below: 'KMnO_4, H_2CrO_4' });
      s += star(P(512, y), 'C', [[180, 'R'], [-60, 'OH', 1, OX], [60, 'O', 2, OX]]);
      s += text(522, y + 64, 'carboxylic acid', { size: 13, color: MUTED });
      // Secondary → ketone
      y = 210;
      s += text(18, y, '2°', { size: 15, color: BLUE, weight: 700, anchor: 'start' });
      s += star(P(100, y), 'C', [[180, 'R'], [90, 'H', 1, H], [-90, 'R′'], [0, 'OH', 1, OX]]);
      s += arrow(P(176, y), P(250, y), { above: '[O]' });
      s += star(P(310, y), 'C', [[180, 'R'], [-60, 'R′'], [60, 'O', 2, OX]]);
      s += text(320, y + 64, 'ketone', { size: 13, color: MUTED });
      s += text(392, y, 'stops here: no H left on that carbon', { size: 13, color: MUTED, anchor: 'start' });
      // Tertiary → nothing
      y = 340;
      s += text(18, y, '3°', { size: 15, color: BLUE, weight: 700, anchor: 'start' });
      s += star(P(100, y), 'C', [[180, 'R'], [90, 'R″'], [-90, 'R′'], [0, 'OH', 1, OX]]);
      s += arrow(P(176, y), P(250, y), { above: '[O]' });
      s += text(266, y, 'no reaction: no H on the carbon bearing –OH', { size: 14, color: ARROW, weight: 600, anchor: 'start' });
      s += text(600, 300, 'blue H = the H that', { size: 12, color: BLUE, weight: 600 }) + text(600, 316, 'oxidation removes', { size: 12, color: BLUE, weight: 600 });
      return s;
    },
  },
];
