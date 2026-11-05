// Alkenes (bmc-05) and Alkynes (bmc-alkynes).
import { angle, arrow, ARROW, at, BLUE, charge, curly, ellipse, GREEN, INK, lobe, lonePair, mol, MUTED, ORANGE, ORB, ORB2, P, PURPLE, rect, tag, text } from './kit.mjs';

const H = (p, extra) => ({ ...p, label: 'H', ...extra });
const C = (p, extra) => ({ ...p, label: 'C', ...extra });

export default [
  {
    id: 'ken-pi-bond',
    w: 600,
    h: 300,
    title: 'The C=C double bond of ethene: one sigma bond and one pi bond',
    draw() {
      let s = '';
      const a = P(255, 150);
      const b = P(345, 150);
      // π: the two p orbitals overlap sideways above and below the plane.
      s += ellipse(P(300, 100), 78, 28, { fill: ORB, stroke: BLUE, opacity: 0.18, dash: '5 4' });
      s += ellipse(P(300, 200), 78, 28, { fill: ORB, stroke: BLUE, opacity: 0.18, dash: '5 4' });
      for (const c of [a, b]) {
        s += lobe(c, 90, { len: 62, w: 15 });
        s += lobe(c, -90, { len: 62, w: 15 });
      }
      s += mol({ a: C(a), b: C(b), h1: H(at(a, 150, 60)), h2: H(at(a, 210, 60)), h3: H(at(b, 30, 60)), h4: H(at(b, -30, 60)) }, [['a', 'b', 1, { width: 3 }], ['a', 'h1'], ['a', 'h2'], ['b', 'h3'], ['b', 'h4']]);
      s += angle(a, 150, 210, '120°', { r: 30, labelDist: 46 });
      s += text(300, 140, 'σ', { size: 18, color: INK, weight: 700 });
      s += text(300, 52, 'π bond: p orbitals overlap sideways', { size: 14, color: BLUE, weight: 600 });
      s += text(300, 262, '(above and below the plane of the molecule)', { size: 13, color: BLUE });
      s += text(500, 140, 'σ bond: head-on', { size: 13, color: INK, anchor: 'start' });
      s += text(500, 158, 'overlap of sp^2', { size: 13, color: INK, anchor: 'start' });
      s += text(80, 284, 'Each C: sp^2, three partners, trigonal planar (120°), one p orbital left over', { size: 13, color: MUTED, anchor: 'start' });
      return s;
    },
  },
  {
    id: 'ken-markovnikov',
    w: 780,
    h: 300,
    title: 'Electrophilic addition of HBr to propene (Markovnikov’s rule)',
    draw() {
      let s = '';
      const y = 110;
      // Step 1: the π electrons attack H of H–Br.
      s += mol({ a: { ...P(40, y), label: 'H_3C' }, b: { ...P(100, y), label: 'CH' }, c: { ...P(160, y), label: 'CH_2' }, h: { ...P(218, y), label: 'H', color: ORANGE, weight: 700 }, br: { ...P(262, y), label: 'Br' } }, [['a', 'b'], ['b', 'c', 2], ['h', 'br']]);
      s += curly(P(130, y - 6), P(214, y - 12), 26);
      s += curly(P(238, y + 5), P(266, y + 13), -12);
      s += tag(150, 168, 'propene + HBr');
      s += text(150, 188, 'step 1 (slow)', { size: 12, color: MUTED });
      s += arrow(P(292, y), P(348, y));
      // The secondary carbocation and bromide.
      s += mol({ a: { ...P(388, y), label: 'H_3C' }, b: { ...P(446, y), label: 'CH' }, c: { ...P(506, y), label: 'CH_3' } }, [['a', 'b'], ['b', 'c']]);
      s += charge(P(446, y), 60, '+', { dist: 18, size: 16, color: ARROW });
      s += text(446, 168, 'Br', { size: 17 }) + charge(P(446, 168), 30, '−', { dist: 17, size: 15 });
      s += lonePair(P(446, 168), 180, { dist: 15 }) + lonePair(P(446, 168), -90, { dist: 13 });
      s += curly(P(436, 154), P(440, 124), 16);
      s += tag(446, 200, '2° carbocation (more stable)');
      s += text(446, 220, 'step 2 (fast)', { size: 12, color: MUTED });
      s += arrow(P(538, y), P(594, y));
      // Product.
      s += mol({ a: { ...P(630, y), label: 'H_3C' }, b: { ...P(688, y), label: 'CH' }, c: { ...P(746, y), label: 'CH_3' }, br: { ...P(688, y + 52), label: 'Br', color: GREEN, weight: 700 } }, [['a', 'b'], ['b', 'c'], ['b', 'br']]);
      s += tag(688, 200, '2-bromopropane (major)');
      s += rect(20, 238, 740, 50, { fill: '#f1f5f9', stroke: '#e2e8f0' });
      s += text(390, 256, 'H goes to the CH_2 end (the carbon that already has more H); Br ends on the more substituted carbon.', { size: 13 });
      s += text(390, 276, 'H on the middle carbon would leave a 1° carbocation → 1-bromopropane, the minor product.', { size: 13, color: MUTED });
      return s;
    },
  },
  {
    id: 'ken-cis-trans',
    w: 600,
    h: 230,
    title: 'cis- and trans-2-butene',
    draw() {
      let s = '';
      const pair = (x, trans) => {
        const a = P(x - 26, 100);
        const b = P(x + 26, 100);
        return mol({ a: C(a), b: C(b), m1: { ...at(a, 150, 52), label: 'H_3C', color: PURPLE, weight: 700 }, h1: H(at(a, 210, 46)), m2: { ...at(b, trans ? -30 : 30, 52), label: 'CH_3', color: PURPLE, weight: 700 }, h2: H(at(b, trans ? 30 : -30, 46)) }, [['a', 'b', 2], ['a', 'm1'], ['a', 'h1'], ['b', 'm2'], ['b', 'h2']]);
      };
      s += pair(150, false);
      s += pair(450, true);
      s += text(150, 176, 'cis-2-butene', { weight: 600 }) + text(150, 198, 'CH_3 groups on the same side', { size: 13, color: MUTED });
      s += text(450, 176, 'trans-2-butene', { weight: 600 }) + text(450, 198, 'CH_3 groups on opposite sides', { size: 13, color: MUTED });
      s += text(300, 28, 'The C=C cannot rotate (it would break the π overlap), so these are two different compounds', { size: 13, color: BLUE, weight: 600 });
      return s;
    },
  },
  {
    id: 'yne-triple-bond',
    w: 620,
    h: 290,
    title: 'The C≡C triple bond of ethyne: one sigma bond and two pi bonds',
    draw() {
      let s = '';
      const a = P(262, 145);
      const b = P(358, 145);
      // π bond 1 (in the page) and π bond 2 (toward and away from you).
      for (const c of [a, b]) {
        s += lobe(c, 90, { len: 56, w: 14 });
        s += lobe(c, -90, { len: 56, w: 14 });
        s += lobe(c, 240, { len: 40, w: 12, fill: ORB2, opacity: 0.45 });
        s += lobe(c, 60, { len: 40, w: 12, fill: ORB2, opacity: 0.45 });
      }
      s += mol({ h1: H(P(150, 145)), a: C(a), b: C(b), h2: H(P(470, 145)) }, [['h1', 'a'], ['a', 'b', 1, { width: 3 }], ['b', 'h2']]);
      s += text(150, 205, 'H–C≡C–H: linear, 180°', { size: 13, color: MUTED, anchor: 'start' });
      s += text(310, 40, 'π bond 1 (blue): p orbitals in the page', { size: 13, color: BLUE, weight: 600 });
      s += text(310, 252, 'π bond 2 (orange): p orbitals at right angles to the first', { size: 13, color: ORANGE, weight: 600 });
      s += text(498, 122, 'σ bond:', { size: 13, anchor: 'start' }) + text(498, 140, 'sp–sp, head-on', { size: 13, anchor: 'start' });
      s += text(310, 276, 'Each C: sp (2s + one 2p), two partners; two p orbitals left over', { size: 13, color: MUTED });
      return s;
    },
  },
  {
    id: 'yne-acetylide',
    w: 680,
    h: 230,
    title: 'A terminal alkyne loses H+ to a very strong base, giving an acetylide ion',
    draw() {
      let s = '';
      const y = 92;
      s += mol({ r: { ...P(40, y), label: 'R' }, a: C(P(86, y)), b: C(P(138, y)), h: H(P(198, y), { color: ORANGE, weight: 700 }) }, [['r', 'a'], ['a', 'b', 3], ['b', 'h']]);
      s += mol({ n: { ...P(276, y), label: 'NH_2' } }, []);
      s += charge(P(276, y), 60, '−', { dist: 22, size: 15 });
      s += lonePair(P(276, y), 180, { dist: 22 });
      s += curly(P(252, y - 3), P(204, y - 11), 20);
      s += curly(P(168, y + 5), P(142, y + 13), -12);
      s += arrow(P(322, y), P(398, y), { above: 'NaNH_2', below: 'liquid NH_3' });
      s += mol({ r: { ...P(430, y), label: 'R' }, a: C(P(476, y)), b: C(P(528, y)) }, [['r', 'a'], ['a', 'b', 3]]);
      s += lonePair(P(528, y), 0, { dist: 15 }) + charge(P(528, y), 50, '−', { dist: 22, size: 15 });
      s += text(612, y, '+  NH_3', { size: 17 });
      s += tag(112, 140, 'terminal alkyne') + tag(500, 140, 'acetylide ion');
      s += rect(20, 166, 640, 52, { fill: '#f1f5f9', stroke: '#e2e8f0' });
      s += text(340, 184, 's character: sp^3 25% · sp^2 33% · sp 50%', { size: 13, weight: 600 });
      s += text(340, 204, 'More s character holds the electrons closer to C, so the ≡C–H bond is polar and the H can leave', { size: 13, color: MUTED });
      return s;
    },
  },
  {
    id: 'yne-reduction',
    w: 660,
    h: 320,
    title: 'Reducing 2-butyne: all the way, to the cis alkene, or to the trans alkene',
    draw() {
      let s = '';
      s += mol({ a: { ...P(42, 160), label: 'H_3C' }, b: C(P(96, 160)), c: C(P(146, 160)), d: { ...P(200, 160), label: 'CH_3' } }, [['a', 'b'], ['b', 'c', 3], ['c', 'd']]);
      s += tag(121, 196, '2-butyne');
      s += arrow(P(238, 140), P(372, 62)) + text(292, 82, 'H_2, Ni / Pt / Pd', { size: 13, color: MUTED, anchor: 'end' });
      s += arrow(P(238, 160), P(372, 160), { above: 'H_2, Lindlar', below: 'syn-addition' });
      s += arrow(P(238, 180), P(372, 258)) + text(292, 240, 'Na or Li', { size: 13, color: MUTED, anchor: 'end' }) + text(292, 256, 'in liquid NH_3', { size: 13, color: MUTED, anchor: 'end' }) + text(292, 272, 'anti-addition', { size: 12, color: MUTED, anchor: 'end' });
      // Butane
      s += text(510, 56, 'CH_3CH_2CH_2CH_3', { size: 17 }) + text(510, 80, 'butane', { size: 13, color: MUTED });
      // cis-2-butene
      const cisA = P(484, 150);
      const cisB = P(532, 150);
      s += mol({ a: C(cisA), b: C(cisB), m1: { ...at(cisA, 150, 50), label: 'H_3C' }, h1: H(at(cisA, 210, 42), { color: GREEN, weight: 700 }), m2: { ...at(cisB, 30, 50), label: 'CH_3' }, h2: H(at(cisB, -30, 42), { color: GREEN, weight: 700 }) }, [['a', 'b', 2], ['a', 'm1'], ['a', 'h1'], ['b', 'm2'], ['b', 'h2']]);
      s += text(508, 200, 'cis-2-butene (both H on one side)', { size: 13, color: MUTED });
      // trans-2-butene
      const trA = P(484, 262);
      const trB = P(532, 262);
      s += mol({ a: C(trA), b: C(trB), m1: { ...at(trA, 150, 50), label: 'H_3C' }, h1: H(at(trA, 210, 42), { color: GREEN, weight: 700 }), m2: { ...at(trB, -30, 50), label: 'CH_3' }, h2: H(at(trB, 30, 42), { color: GREEN, weight: 700 }) }, [['a', 'b', 2], ['a', 'm1'], ['a', 'h1'], ['b', 'm2'], ['b', 'h2']]);
      s += text(508, 310, 'trans-2-butene (H on opposite sides)', { size: 13, color: MUTED });
      return s;
    },
  },
];
