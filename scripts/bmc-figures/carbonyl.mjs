// Aldehydes (bmc-aldehydes-ketones), Ketones (bmc-ketones), Carboxylic Acids (bmc-03)
// and Carboxylic Acid Derivatives (bmc-acid-derivatives).
import { angle, ARROW, arrow, at, BLUE, charge, curly, equilibrium, GREEN, INK, lonePair, mol, MUTED, ORANGE, P, PURPLE, rect, star, tag, text, zigzag } from './kit.mjs';
import { benzene } from './aromatics.mjs';

const O = { color: ORANGE, weight: 700 };
const Hb = { color: BLUE, weight: 700 };
/** A carbonyl carbon at c: =O up, two groups at lower left and lower right. */
const carbonyl = (c, left, right, { leftExtra = {}, rightExtra = {}, o = O, len = 46 } = {}) => star(c, 'C', [[90, 'O', 2, { ...o, len }], [210, left, 1, { len, ...leftExtra }], [330, right, 1, { len, ...rightExtra }]]);

export default [
  {
    id: 'aldh-carbonyl',
    w: 680,
    h: 240,
    title: 'The carbonyl group, in an aldehyde and in a ketone',
    draw() {
      let s = '';
      const c = P(110, 120);
      s += carbonyl(c, '', '', { len: 50 });
      s += angle(c, 210, 330, '120°', { r: 22, labelDist: 36 });
      s += charge(c, 150, 'δ+', { dist: 24, size: 15, color: BLUE }) + charge(at(c, 90, 50), 0, 'δ−', { dist: 22, size: 15, color: ORANGE });
      s += tag(110, 200, 'C=O: flat (sp^2), polar');
      s += text(110, 220, 'the δ+ carbon attracts nucleophiles', { size: 12, color: MUTED });
      s += carbonyl(P(340, 120), 'H_3C', 'H', { rightExtra: Hb, leftExtra: { len: 52 } });
      s += tag(340, 200, 'Aldehyde (ethanal)') + text(340, 220, 'at least one H on the C=O carbon', { size: 12, color: MUTED });
      s += carbonyl(P(560, 120), 'H_3C', 'CH_3', { leftExtra: { len: 52 }, rightExtra: { len: 52 } });
      s += tag(560, 200, 'Ketone (propanone, acetone)') + text(560, 220, 'two carbon groups, no H', { size: 12, color: MUTED });
      return s;
    },
  },
  {
    id: 'aldh-tollens',
    w: 740,
    h: 250,
    title: 'The Tollens’ (silver mirror) test',
    draw() {
      let s = '';
      const y = 96;
      s += carbonyl(P(70, y), 'R', 'H', { rightExtra: Hb });
      s += text(150, y + 6, '+  2 Ag^+', { size: 17 });
      s += arrow(P(206, y + 6), P(322, y + 6), { above: 'Tollens’ reagent', below: 'Ag^+ in NH_3 (basic)' });
      s += carbonyl(P(392, y), 'R', 'O^−', { rightExtra: O });
      s += text(484, y + 6, '+  2 Ag', { size: 17 }) + text(484, y + 30, '(solid)', { size: 12, color: MUTED });
      s += tag(70, 168, 'aldehyde') + tag(392, 168, 'carboxylate salt');
      // Test tubes
      const tube = (x, silver, label) => {
        let out = `<path d="M${x - 16},40 L${x - 16},170 A16 16 0 0 0 ${x + 16},170 L${x + 16},40" fill="${silver ? '#cbd5e1' : '#eef6ff'}" stroke="${INK}" stroke-width="1.6"/>`;
        if (silver) out += `<path d="M${x - 10},60 L${x - 10},168" stroke="#ffffff" stroke-width="4" opacity="0.8"/>`;
        out += text(x, 204, label, { size: 12, color: MUTED });
        return out;
      };
      s += tube(610, true, 'aldehyde: mirror');
      s += tube(696, false, 'ketone: none');
      s += text(370, 236, 'The aldehyde is oxidised (its C–H becomes C–O); silver ions are reduced to silver metal', { size: 13, color: BLUE, weight: 600 });
      return s;
    },
  },
  {
    id: 'aldh-addition',
    w: 760,
    h: 260,
    title: 'Nucleophilic addition to a carbonyl group (basic conditions)',
    draw() {
      let s = '';
      const y = 120;
      // Step 1: Nu− adds to the δ+ carbon; the π electrons move onto O.
      s += text(40, 170, 'Nu', { size: 17, color: PURPLE, weight: 700 }) + charge(P(40, 170), 40, '−', { dist: 20, size: 15 }) + lonePair(P(40, 170), 90, { dist: 16 });
      const c1 = P(120, y);
      s += carbonyl(c1, 'R', 'H', { rightExtra: Hb });
      s += charge(c1, 150, 'δ+', { dist: 22, size: 13, color: BLUE });
      s += curly(P(50, 156), P(108, 128), -22);
      s += curly(P(126, y - 22), P(138, y - 50), -16);
      s += tag(110, 216, '1. Nu^− attacks the δ+ carbon');
      s += arrow(P(210, y), P(290, y));
      // Tetrahedral alkoxide
      const c2 = P(380, y + 10);
      s += star(c2, 'C', [[90, 'O^−', 1, O], [200, 'R'], [-20, 'H', 1, Hb], [-90, 'Nu', 'wedge', { color: PURPLE, weight: 700 }]]);
      s += text(480, 70, 'H–OH', { size: 17 });
      s += curly(P(392, y - 34), P(458, 80), 22);
      s += tag(390, 216, '2. the O^− takes H^+ (from water)');
      s += text(390, 236, 'the carbon is now sp^3 (tetrahedral)', { size: 12, color: MUTED });
      s += arrow(P(520, y), P(590, y));
      const c3 = P(660, y + 10);
      s += star(c3, 'C', [[90, 'OH', 1, O], [200, 'R'], [-20, 'H', 1, Hb], [-90, 'Nu', 'wedge', { color: PURPLE, weight: 700 }]]);
      s += tag(660, 216, 'the adduct');
      return s;
    },
  },
  {
    id: 'ket-crowding',
    w: 680,
    h: 260,
    title: 'Why ketones react more slowly than aldehydes',
    draw() {
      let s = '';
      const show = (x, right, rightExtra, label, note1, note2) => {
        const c = P(x, 110);
        let out = carbonyl(c, 'R', right, { rightExtra });
        out += text(x, 200, 'Nu', { size: 16, color: PURPLE, weight: 700 }) + charge(P(x, 200), 30, '−', { dist: 18, size: 14 });
        out += arrow(P(x, 186), P(x, 128), { color: PURPLE });
        out += tag(x, 30, label);
        out += text(x, 226, note1, { size: 12, color: MUTED }) + text(x, 242, note2, { size: 12, color: MUTED });
        return out;
      };
      s += show(170, 'H', Hb, 'Aldehyde: one large group', 'room to approach; the C=O carbon', 'is more δ+ (one alkyl group)');
      s += show(500, 'R′', { color: PURPLE }, 'Ketone: two large groups', 'crowded approach; two alkyl groups', 'make the carbon less δ+');
      s += `<circle cx="540" cy="134" r="22" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-dasharray="4 3"/>`;
      s += `<circle cx="460" cy="134" r="22" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-dasharray="4 3"/>`;
      s += `<circle cx="130" cy="134" r="22" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-dasharray="4 3"/>`;
      return s;
    },
  },
  {
    id: 'ket-naming',
    w: 640,
    h: 270,
    title: 'Why “3-ethyl-2-butanone” is really 3-methyl-2-pentanone',
    draw() {
      let s = '';
      // The molecule as drawn in the question: a 4-carbon chain with an ethyl on C3.
      const pts = zigzag(P(60, 140), 4, { len: 50 });
      const atoms = {};
      pts.forEach((p, i) => { atoms[`c${i}`] = p; });
      atoms.o = { ...at(pts[1], 90, 46), label: 'O', ...O };
      atoms.e1 = at(pts[2], -90, 50);
      atoms.e2 = at(atoms.e1, -30, 50);
      s += mol(atoms, [['c0', 'c1'], ['c1', 'c2'], ['c2', 'c3'], ['c1', 'o', 2], ['c2', 'e1'], ['e1', 'e2']]);
      s += tag(150, 26, 'Drawn as “3-ethyl-2-butanone”');
      s += text(150, 256, 'chain of 4 + an ethyl branch?', { size: 13, color: ARROW, weight: 600 });
      s += arrow(P(270, 140), P(340, 140));
      // The same molecule, longest chain (5 C) highlighted and numbered.
      const q = zigzag(P(370, 140), 4, { len: 50 });
      const b = {};
      q.forEach((p, i) => { b[`c${i}`] = p; });
      b.o = { ...at(q[1], 90, 46), label: 'O', ...O };
      b.e1 = at(q[2], -90, 50);
      b.e2 = at(b.e1, -30, 50);
      s += mol(b, [['c0', 'c1', 1, { color: BLUE, width: 3.2 }], ['c1', 'c2', 1, { color: BLUE, width: 3.2 }], ['c2', 'c3'], ['c1', 'o', 2], ['c2', 'e1', 1, { color: BLUE, width: 3.2 }], ['e1', 'e2', 1, { color: BLUE, width: 3.2 }]]);
      [[q[0], '1', -12, -12], [q[1], '2', 0, 20], [q[2], '3', 0, -20], [b.e1, '4', -16, 0], [b.e2, '5', 16, 10]].forEach(([p, n, dx, dy]) => { s += text(p.x + dx, p.y + dy, n, { size: 14, color: BLUE, weight: 700 }); });
      s += text(q[3].x + 26, q[3].y, 'methyl', { size: 13, color: PURPLE, weight: 600 });
      s += tag(470, 26, 'Longest chain: 5 carbons (blue)');
      s += text(470, 256, '3-methyl-2-pentanone', { size: 16, weight: 700 });
      return s;
    },
  },
  {
    id: 'carbonyl-reduction',
    w: 640,
    h: 262,
    title: 'Reducing aldehydes and ketones to alcohols',
    draw() {
      let s = '';
      const row = (y, right, rightExtra, product, cls) => {
        let out = carbonyl(P(80, y), 'R', right, { rightExtra });
        out += arrow(P(160, y), P(300, y), { above: 'H_2 + Ni, Pt or Pd', below: 'or NaBH_4, LiAlH_4' });
        out += star(P(390, y), 'C', [[90, 'OH', 1, O], [180, 'R'], [0, right, 1, rightExtra], [-90, 'H', 1, { color: GREEN, weight: 700 }]]);
        out += text(470, y, product, { size: 15, weight: 600, anchor: 'start' }) + text(470, y + 20, cls, { size: 13, color: BLUE, weight: 600, anchor: 'start' });
        return out;
      };
      s += row(70, 'H', Hb, 'aldehyde →', 'primary (1°) alcohol');
      s += row(180, 'R′', { color: PURPLE }, 'ketone →', 'secondary (2°) alcohol');
      s += text(320, 252, 'H adds to the C=O carbon (green) and to the oxygen', { size: 12, color: MUTED });
      return s;
    },
  },
  {
    id: 'cxa-group',
    w: 620,
    h: 220,
    title: 'The carboxyl group: an acyl group joined to a hydroxyl',
    draw() {
      let s = '';
      const c = P(150, 120);
      s += carbonyl(c, 'R', 'OH', { rightExtra: { color: GREEN, weight: 700 } });
      s += `<rect x="62" y="56" width="104" height="110" rx="10" fill="#2563eb" fill-opacity="0.07" stroke="${BLUE}" stroke-dasharray="5 4"/>`;
      s += `<rect x="168" y="118" width="64" height="48" rx="10" fill="#047857" fill-opacity="0.07" stroke="${GREEN}" stroke-dasharray="5 4"/>`;
      s += text(112, 186, 'acyl group, RCO–', { size: 13, color: BLUE, weight: 600 }) + text(206, 186, 'hydroxyl', { size: 13, color: GREEN, weight: 600 });
      s += tag(150, 30, '–COOH  (–CO_2H)');
      s += carbonyl(P(450, 120), 'H_3C', 'OH', { rightExtra: { color: GREEN, weight: 700 }, leftExtra: { len: 52 } });
      s += tag(450, 186, 'acetic (ethanoic) acid, in vinegar');
      return s;
    },
  },
  {
    id: 'cxa-dimer',
    w: 560,
    h: 230,
    title: 'Two carboxylic acid molecules held together by two hydrogen bonds (a dimer)',
    draw() {
      let s = '';
      const a = P(180, 115);
      const b = P(380, 115);
      s += star(a, 'C', [[180, 'H_3C', 1, { len: 54 }], [60, 'O', 2, O], [-60, 'O', 1, O]]);
      s += star(b, 'C', [[0, 'CH_3', 1, { len: 54 }], [120, 'O', 1, O], [240, 'O', 2, O]]);
      const oa1 = at(a, 60, 44);
      const oa2 = at(a, -60, 44);
      const ob1 = at(b, 120, 44);
      const ob2 = at(b, 240, 44);
      // H on the single-bonded O of each, pointing at the other molecule's C=O.
      const h1 = at(ob1, 180, 34);
      const h2 = at(oa2, 0, 34);
      s += mol({ o: { ...ob1, label: 'O', ...O }, h: { ...h1, label: 'H', ...Hb } }, [['o', 'h']]);
      s += mol({ o: { ...oa2, label: 'O', ...O }, h: { ...h2, label: 'H', ...Hb } }, [['o', 'h']]);
      const hb = (p, q) => `<line x1="${p.x - 10}" y1="${p.y}" x2="${q.x + 12}" y2="${q.y}" stroke="${BLUE}" stroke-width="2.4" stroke-dasharray="2 5" stroke-linecap="round"/>`;
      s += hb(h1, oa1);
      s += `<line x1="${h2.x + 10}" y1="${h2.y}" x2="${ob2.x - 12}" y2="${ob2.y}" stroke="${BLUE}" stroke-width="2.4" stroke-dasharray="2 5" stroke-linecap="round"/>`;
      s += text(280, 30, 'two hydrogen bonds (blue dots) hold the pair together', { size: 13, color: BLUE, weight: 600 });
      s += text(280, 206, 'This is why acetic acid boils at 118 °C, higher than a similar alcohol', { size: 13, color: MUTED });
      return s;
    },
  },
  {
    id: 'cxa-fatty-acids',
    w: 700,
    h: 350,
    title: 'Stearic and oleic acids: a cis double bond kinks the chain',
    draw() {
      let s = '';
      const len = 26;
      const draw = (start, kinkAt) => {
        // 18 carbons; for oleic, the chain turns at the cis C9=C10 bond.
        const pts = [start];
        let heading = 0;
        for (let i = 1; i < 18; i += 1) {
          if (kinkAt && i === kinkAt + 1) heading -= 50;
          const zig = i % 2 === 1 ? 30 : -30;
          pts.push(at(pts[i - 1], heading + zig, len));
        }
        const atoms = {};
        pts.forEach((p, i) => { atoms[`c${i}`] = p; });
        const head = pts[0];
        atoms.o1 = { ...at(head, 150, 34), label: 'O', ...O };
        atoms.o2 = { ...at(head, 210, 34), label: 'OH', ...O };
        const bonds = pts.slice(1).map((_, i) => [`c${i}`, `c${i + 1}`, kinkAt && i === kinkAt - 1 ? 2 : 1, { side: 'r', color: kinkAt && i === kinkAt - 1 ? ARROW : INK }]);
        return mol(atoms, [...bonds, ['c0', 'o1', 2], ['c0', 'o2']]);
      };
      s += draw(P(70, 70), 0);
      s += text(560, 62, 'stearic acid', { size: 15, weight: 600, anchor: 'start' }) + text(560, 82, 'saturated · mp 72 °C', { size: 13, color: MUTED, anchor: 'start' });
      s += draw(P(70, 150), 9);
      s += text(470, 200, 'oleic acid', { size: 15, weight: 600, anchor: 'start' }) + text(470, 220, 'one cis C=C (red) · mp 16 °C', { size: 13, color: MUTED, anchor: 'start' });
      s += text(350, 338, 'Straight chains pack closely (solid); a kink stops packing, so the melting point falls', { size: 13, color: BLUE, weight: 600 });
      return s;
    },
  },
  {
    id: 'cxa-substituents',
    w: 700,
    h: 260,
    title: 'Electron-withdrawing groups make benzoic acid stronger',
    draw() {
      let s = '';
      const acid = (x, sub, color, name, ka) => {
        const c = P(x, 140);
        let out = benzene(c, { r: 34, subs: sub ? { 3: [sub, color] } : {} });
        const top = at(c, 90, 34);
        out += star(at(top, 90, 34), 'C', [[150, 'O', 2, O], [30, 'OH', 1, O], [-90, '', 1, { len: 34 }]], { len: 34, size: 15 });
        out += text(x, 234, name, { size: 13, weight: 600 }) + text(x, 252, `K_{a} ${ka} × 10^−5`, { size: 12, color: MUTED });
        return out;
      };
      s += acid(100, 'NH_2', BLUE, 'p-aminobenzoic', '1.4');
      s += acid(290, '', INK, 'benzoic', '6.3');
      s += acid(480, 'Cl', ORANGE, 'p-chlorobenzoic', '10.3');
      s += acid(640, 'NO_2', ARROW, 'p-nitrobenzoic', '36.0');
      s += arrow(P(120, 24), P(600, 24), { above: '' });
      s += text(360, 14, 'stronger acid →', { size: 12, color: MUTED });
      return s;
    },
  },
  {
    id: 'acd-family',
    w: 760,
    h: 250,
    title: 'The acyl family, from most to least reactive',
    draw() {
      let s = '';
      const items = [
        ['Cl', 'acid chloride', GREEN],
        ['O–COR', 'acid anhydride', GREEN],
        ['OR′', 'ester', GREEN],
        ['NH_2', 'amide', GREEN],
      ];
      items.forEach(([g, name, color], i) => {
        const x = 90 + i * 180;
        s += carbonyl(P(x, 110), 'R', g, { rightExtra: { color, weight: 700, len: g.length > 3 ? 52 : 46 } });
        s += text(x + 10, 188, name, { size: 15, weight: 600 });
      });
      s += arrow(P(620, 224), P(130, 224), { color: ARROW });
      s += text(380, 244, 'more reactive: the group on the acyl carbon (green) leaves more easily', { size: 12, color: ARROW, weight: 600 });
      s += text(380, 26, 'Every member keeps the acyl group, RCO–; only the group bonded to the acyl carbon changes', { size: 13, color: MUTED });
      return s;
    },
  },
  {
    id: 'acd-mechanism',
    w: 760,
    h: 260,
    title: 'Nucleophilic acyl substitution: add, then the old group leaves',
    draw() {
      let s = '';
      const y = 120;
      s += text(40, 170, 'Nu', { size: 17, color: PURPLE, weight: 700 }) + charge(P(40, 170), 40, '−', { dist: 20, size: 15 }) + lonePair(P(40, 170), 90, { dist: 16 });
      const c1 = P(130, y);
      s += carbonyl(c1, 'R', 'Cl', { rightExtra: { color: GREEN, weight: 700 } });
      s += curly(P(50, 156), P(118, 128), -22);
      s += curly(P(136, y - 22), P(148, y - 50), -16);
      s += tag(110, 216, '1. the nucleophile adds');
      s += arrow(P(214, y), P(284, y));
      const c2 = P(380, y + 10);
      s += star(c2, 'C', [[90, 'O^−', 1, O], [200, 'R'], [-20, 'Cl', 1, { color: GREEN, weight: 700 }], [-90, 'Nu', 1, { color: PURPLE, weight: 700 }]]);
      s += curly(P(372, y - 30), P(372, y - 6), 20);
      s += curly(P(408, y - 2), P(430, y - 22), 16);
      s += tag(380, 216, '2. tetrahedral intermediate:');
      s += text(380, 236, 'C=O re-forms and Cl^− leaves', { size: 12, color: MUTED });
      s += arrow(P(470, y), P(540, y));
      s += carbonyl(P(610, y), 'R', 'Nu', { rightExtra: { color: PURPLE, weight: 700 } });
      s += text(700, y + 30, '+ Cl^−', { size: 15 });
      s += tag(620, 216, 'a new acyl derivative');
      return s;
    },
  },
  {
    id: 'acd-fischer',
    w: 840,
    h: 220,
    title: 'Fischer esterification: acetic acid + ethanol ⇌ ethyl acetate + water',
    draw() {
      let s = '';
      const y = 110;
      s += carbonyl(P(70, y), 'H_3C', 'O', { leftExtra: { len: 50 } });
      // The –OH of the acid (orange) and the H of the alcohol (blue) become water.
      s += mol({ o: { ...at(P(70, y), 330, 46), label: 'O' }, h: { ...at(at(P(70, y), 330, 46), 0, 34), label: 'H', color: ORANGE, weight: 700 } }, [['o', 'h']]).replace(/<text[^>]*><tspan[^>]*>O<\/tspan><\/text>/, '');
      s += `<rect x="84" y="${y + 6}" width="68" height="34" rx="8" fill="none" stroke="${ORANGE}" stroke-dasharray="4 3"/>`;
      s += text(178, y + 22, '+', { size: 18 });
      s += mol({ h: { ...P(206, y + 22), label: 'H', color: BLUE, weight: 700 }, o: { ...P(244, y + 22), label: 'O' }, r: { ...P(304, y + 22), label: 'CH_2CH_3' } }, [['h', 'o'], ['o', 'r']]);
      s += `<rect x="192" y="${y + 6}" width="30" height="34" rx="8" fill="none" stroke="${BLUE}" stroke-dasharray="4 3"/>`;
      s += equilibrium(372, 452, y + 18, { above: 'H^+ catalyst', below: 'reversible' });
      s += carbonyl(P(540, y), 'H_3C', 'O', { leftExtra: { len: 50 } });
      s += mol({ o: { ...at(P(540, y), 330, 46), label: 'O' }, r: { ...at(at(P(540, y), 330, 46), 0, 58), label: 'CH_2CH_3' } }, [['o', 'r']]).replace(/<text[^>]*><tspan[^>]*>O<\/tspan><\/text>/, '');
      s += text(730, y + 22, '+  H_2O', { size: 17, color: ORANGE, weight: 700 });
      s += tag(150, 194, 'acetic acid + ethanol') + tag(590, 194, 'ethyl acetate (an ester, fruity smell)');
      s += text(420, 212, 'Push it toward the ester with excess alcohol or acid, or by removing water', { size: 12, color: MUTED });
      return s;
    },
  },
];
