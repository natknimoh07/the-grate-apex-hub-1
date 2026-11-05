// Aromatic Compounds (bmc-04).
import { ARROW, arrow, at, BLUE, charge, circle, curly, ellipse, GREEN, INK, lobe, mol, MUTED, ORANGE, ORB, P, PURPLE, rect, resonance, ring, tag, text } from './kit.mjs';

/** A benzene ring as a line structure: doubles on edges `doubles` (edge i joins corner i and i+1). */
function benzene(c, { r = 44, doubles = [0, 2, 4], circleInside = false, subs = {} } = {}) {
  const pts = ring(c, r, 90);
  const atoms = {};
  pts.forEach((p, i) => { atoms[`r${i}`] = p; });
  const bonds = pts.map((_, i) => [`r${i}`, `r${(i + 1) % 6}`, !circleInside && doubles.includes(i) ? 2 : 1, { side: 'l' }]);
  // Substituents: corner → [label, color]
  for (const [corner, [label, color]] of Object.entries(subs)) {
    const p = pts[corner];
    const deg = (Math.atan2(-(p.y - c.y), p.x - c.x) * 180) / Math.PI;
    atoms[`s${corner}`] = { ...at(p, deg, 38), label, color, weight: color ? 700 : 400 };
    bonds.push([`r${corner}`, `s${corner}`]);
  }
  let s = mol(atoms, bonds);
  if (circleInside) s += circle(c, r * 0.56, { width: 2 });
  return s;
}

export { benzene };

export default [
  {
    id: 'aro-kekule',
    w: 620,
    h: 230,
    title: 'Benzene: two Kekulé structures and the resonance hybrid',
    draw() {
      let s = '';
      s += benzene(P(90, 105), { doubles: [0, 2, 4] });
      s += resonance(150, 200, 105);
      s += benzene(P(260, 105), { doubles: [1, 3, 5] });
      s += text(380, 105, '=', { size: 26, color: MUTED });
      s += benzene(P(500, 105), { circleInside: true });
      s += tag(175, 182, 'Two equivalent Kekulé structures');
      s += tag(500, 182, 'The hybrid (ring with a circle)');
      s += text(310, 214, 'Every C–C bond is the same, “1½” bonds; a regular hexagon with 120° angles', { size: 13, color: BLUE, weight: 600 });
      return s;
    },
  },
  {
    id: 'aro-pi-cloud',
    w: 620,
    h: 290,
    title: 'The p orbitals of benzene overlap all round the ring into a pi cloud',
    draw() {
      let s = '';
      const c = P(185, 150);
      const R = 104;
      // The ring seen from a little above: a flattened hexagon.
      const pts = Array.from({ length: 6 }, (_, i) => {
        const t = (Math.PI / 3) * i;
        return P(c.x + R * Math.cos(t), c.y + 0.4 * R * Math.sin(t));
      });
      // π cloud above and below (behind the lobes).
      s += ellipse(P(c.x, c.y - 40), R + 14, 40, { fill: ORB, stroke: BLUE, opacity: 0.16, dash: '5 4' });
      s += ellipse(P(c.x, c.y + 40), R + 14, 40, { fill: ORB, stroke: BLUE, opacity: 0.16, dash: '5 4' });
      // Back corners first, so the front lobes are drawn on top.
      const order = [...pts.keys()].sort((a, b) => pts[a].y - pts[b].y);
      for (const i of order) {
        s += lobe(pts[i], 90, { len: 46, w: 12 });
        s += lobe(pts[i], -90, { len: 46, w: 12 });
      }
      const atoms = {};
      pts.forEach((p, i) => { atoms[`c${i}`] = { ...p, label: 'C', size: 15 }; });
      s += mol(atoms, pts.map((_, i) => [`c${i}`, `c${(i + 1) % 6}`]), { size: 15 });
      s += text(330, 60, 'six p orbitals, one on each sp^2 carbon,', { size: 14, anchor: 'start' });
      s += text(330, 80, 'each holding one electron', { size: 14, anchor: 'start' });
      s += text(330, 130, 'they overlap all round the ring:', { size: 14, anchor: 'start', color: BLUE, weight: 600 });
      s += text(330, 150, 'a continuous π cloud above and', { size: 14, anchor: 'start', color: BLUE, weight: 600 });
      s += text(330, 170, 'below the flat ring', { size: 14, anchor: 'start', color: BLUE, weight: 600 });
      s += text(330, 220, '6 π electrons fill the three bonding', { size: 14, anchor: 'start' });
      s += text(330, 240, 'orbitals: very stable, so benzene', { size: 14, anchor: 'start' });
      s += text(330, 260, 'resists addition', { size: 14, anchor: 'start' });
      return s;
    },
  },
  {
    id: 'aro-ortho-meta-para',
    w: 640,
    h: 290,
    title: 'Ortho, meta and para: the xylenes',
    draw() {
      let s = '';
      const show = (x, other, name, pos) => {
        const c = P(x, 118);
        let out = benzene(c, { subs: { 0: ['CH_3', PURPLE], [other]: ['CH_3', PURPLE] } });
        const pts = ring(c, 44, 90);
        pts.forEach((p, i) => { out += text(c.x + (p.x - c.x) * 0.62, c.y + (p.y - c.y) * 0.62, String(i === 0 ? 1 : 7 - i), { size: 11, color: BLUE, weight: 700 }); });
        out += text(x, 250, name, { weight: 600 }) + text(x, 272, pos, { size: 13, color: MUTED });
        return out;
      };
      s += show(110, 5, 'o-xylene', 'ortho: 1,2');
      s += show(320, 4, 'm-xylene', 'meta: 1,3');
      s += show(530, 3, 'p-xylene', 'para: 1,4');
      return s;
    },
  },
  {
    id: 'aro-eas',
    w: 760,
    h: 300,
    title: 'Electrophilic aromatic substitution: the electrophile replaces a hydrogen',
    draw() {
      let s = '';
      // 1. Benzene and E+
      const c1 = P(80, 130);
      s += benzene(c1, { doubles: [0, 2, 4] });
      s += text(190, 72, 'E', { size: 18, color: ORANGE, weight: 700 }) + charge(P(190, 72), 30, '+', { dist: 13, size: 14, color: ORANGE });
      const p0 = ring(c1, 44, 90);
      s += curly(P((p0[0].x + p0[1].x) / 2 + 4, (p0[0].y + p0[1].y) / 2 - 2), P(180, 76), -26);
      s += tag(110, 210, 'benzene + E^+');
      s += arrow(P(220, 130), P(290, 130), { above: 'slow', below: 'rate-determining' });
      // 2. The arenium ion (σ complex): the top carbon is sp3, holding H and E.
      const c2 = P(392, 140);
      const q = ring(c2, 44, 90);
      const atoms = {};
      q.forEach((p, i) => { atoms[`r${i}`] = p; });
      atoms.h = { ...at(q[0], 125, 38), label: 'H', color: GREEN, weight: 700 };
      atoms.e = { ...at(q[0], 55, 38), label: 'E', color: ORANGE, weight: 700 };
      s += mol(atoms, [...q.map((_, i) => [`r${i}`, `r${(i + 1) % 6}`]), ['r0', 'h'], ['r0', 'e']]);
      const rr = 26;
      const a1 = at(c2, 130, rr);
      const a2 = at(c2, 50, rr);
      s += `<path d="M${a1.x.toFixed(1)},${a1.y.toFixed(1)} A${rr} ${rr} 0 1 0 ${a2.x.toFixed(1)},${a2.y.toFixed(1)}" fill="none" stroke="${INK}" stroke-width="1.8" stroke-dasharray="4 3"/>`;
      s += text(c2.x, c2.y + 2, '+', { size: 18, color: ARROW, weight: 700 });
      s += text(470, 86, 'B', { size: 17 }) + charge(P(470, 86), 30, '−', { dist: 13, size: 13 });
      s += curly(P(462, 92), P(atoms.h.x + 10, atoms.h.y - 2), 34);
      s += curly(P((q[0].x + atoms.h.x) / 2 + 2, (q[0].y + atoms.h.y) / 2 + 4), P(c2.x - 10, c2.y - 22), 16);
      s += tag(392, 226, 'resonance-stabilised cation');
      s += text(392, 246, '(the ring is not aromatic here)', { size: 12, color: MUTED });
      s += arrow(P(500, 140), P(570, 140), { above: 'fast', below: 'base removes H^+' });
      // 3. Product
      const c3 = P(660, 140);
      s += benzene(c3, { doubles: [0, 2, 4], subs: { 0: ['E', ORANGE] } });
      s += tag(660, 226, 'aromatic ring restored');
      s += rect(20, 262, 720, 30, { fill: '#f1f5f9', stroke: '#e2e8f0' });
      s += text(380, 277, 'E can be a halogen (Br_2 needs a catalyst), a nitro, sulfonyl, alkyl (Friedel–Crafts) or acyl group', { size: 13 });
      return s;
    },
  },
];
