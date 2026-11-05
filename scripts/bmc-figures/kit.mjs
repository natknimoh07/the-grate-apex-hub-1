// A tiny drawing kit for chemistry pictures (Basic Medical Chemistry, HB1):
// atoms, bonds (single, double, triple, wedge, hash, partial), curly arrows,
// reaction arrows, lone pairs, charges and p-orbital lobes, written as SVG.
// The pictures are our own drawings of what each lesson teaches (owner, 2026-11-05:
// "you can't just learn organic chemistry by reading only").
//
// Labels: "_" starts a subscript (CH_3), "^" a superscript (Br^−, sp^3); each runs
// until the next space or letter-case change is not a digit/sign: "CH_3CH_2^+".

export const INK = '#1f2937';
export const MUTED = '#6b7280';
export const ARROW = '#dc2626'; // curly arrows: where electrons go
export const BLUE = '#2563eb';
export const GREEN = '#047857';
export const PURPLE = '#7c3aed';
export const ORANGE = '#c2410c';
export const ORB = '#60a5fa';
export const ORB2 = '#f59e0b';
export const SOFT = '#eef2ff';
export const HIGHLIGHT = '#fef3c7';

const FONT = 'Helvetica, Arial, sans-serif';
export const L = 44; // bond length

const r1 = (n) => Math.round(n * 10) / 10;

// ─── geometry ──────────────────────────────────────────────────────────────
/** A point `len` away from p at `deg` (0 = right, 90 = up). */
export const at = (p, deg, len = L) => ({ x: p.x + len * Math.cos((deg * Math.PI) / 180), y: p.y - len * Math.sin((deg * Math.PI) / 180) });
export const P = (x, y) => ({ x, y });
export const mid = (a, b, t = 0.5) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });

/** Zig-zag chain of n points starting at p, first step going up (or down). */
export function zigzag(p, n, { up = true, len = L } = {}) {
  const pts = [p];
  for (let i = 1; i < n; i += 1) pts.push(at(pts[i - 1], (up ? i % 2 === 1 : i % 2 === 0) ? 30 : -30, len));
  return pts;
}

/** Corners of a regular hexagon (or n-gon) of "radius" r, first corner at `start` degrees. */
export function ring(c, r = L, start = 90, n = 6) {
  return Array.from({ length: n }, (_, i) => at(c, start + (360 / n) * i, r));
}

// ─── text ──────────────────────────────────────────────────────────────────
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Splits "CH_3^+" into runs: { t, kind: 'n' | 'sub' | 'sup' }. */
function runs(label) {
  const out = [];
  let i = 0;
  while (i < label.length) {
    const ch = label[i];
    if (ch === '_' || ch === '^') {
      let j = i + 1;
      // A run goes on while the characters are digits, signs or "n" ("C_nH_2n+2").
      while (j < label.length && /[0-9n+\-−δ‡]/.test(label[j]) && !(label[j] === 'n' && /[A-Za-z]/.test(label[j + 1] ?? ''))) j += 1;
      if (j === i + 1 && ch === '^') j = Math.min(label.length, i + 2);
      if (label[i + 1] === '{') {
        j = label.indexOf('}', i);
        out.push({ t: label.slice(i + 2, j), kind: ch === '_' ? 'sub' : 'sup' });
        i = j + 1;
        continue;
      }
      out.push({ t: label.slice(i + 1, j), kind: ch === '_' ? 'sub' : 'sup' });
      i = j;
    } else {
      let j = i;
      while (j < label.length && label[j] !== '_' && label[j] !== '^') j += 1;
      out.push({ t: label.slice(i, j), kind: 'n' });
      i = j;
    }
  }
  return out;
}

/** Rough width of a label in px (Helvetica-like). */
export function textWidth(label, size = 17) {
  let w = 0;
  for (const run of runs(String(label))) {
    const s = run.kind === 'n' ? size : size * 0.7;
    for (const ch of run.t) w += s * (/[MWmw]/.test(ch) ? 0.83 : /[A-Z0-9δ]/.test(ch) ? 0.66 : /[il.,:;'|!·]/.test(ch) ? 0.28 : /[  ]/.test(ch) ? 0.28 : /[–−+=→]/.test(ch) ? 0.6 : 0.52);
  }
  return w;
}

/** Text with sub/superscripts. anchor: start | middle | end. */
export function text(x, y, label, { size = 17, color = INK, anchor = 'middle', weight = 400, italic = false, opacity, halo = false } = {}) {
  const parts = runs(String(label));
  let body = '';
  let shift = 0;
  for (const run of parts) {
    if (!run.t) continue;
    const target = run.kind === 'sub' ? size * 0.3 : run.kind === 'sup' ? -size * 0.42 : 0;
    const fs = run.kind === 'n' ? size : r1(size * 0.7);
    body += `<tspan dy="${r1(target - shift)}" font-size="${fs}">${esc(run.t)}</tspan>`;
    shift = target;
  }
  return `<text x="${r1(x)}" y="${r1(y + size * 0.35)}" font-family="${FONT}" font-size="${size}" fill="${color}" text-anchor="${anchor}" font-weight="${weight}"${italic ? ' font-style="italic"' : ''}${halo ? ' stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke"' : ''}${opacity ? ` opacity="${opacity}"` : ''}>${body}</text>`;
}

// ─── atoms and bonds ───────────────────────────────────────────────────────
/**
 * A molecule: atoms { name: { x, y, label?, color?, size? } } (no label = a line-structure
 * corner), bonds [a, b, kind?, opts?] with kind 1 | 2 | 3 | 'wedge' | 'hash' | 'partial' | 'hbond'.
 * Bonds stop short of labels. A double bond's opts.side ('l' | 'r') draws the second line on
 * that side (rings, chains); otherwise both lines are centred.
 */
export function mol(atoms, bonds, { size = 17, width = 2 } = {}) {
  const box = (a) => {
    if (!a.label) return null;
    const s = a.size ?? size;
    return { hw: textWidth(a.label, s) / 2 + 3, hh: s * 0.5 + 2 };
  };
  // Where the segment from a toward b leaves a's label box.
  const trim = (a, b) => {
    const bx = box(a);
    if (!bx) return { x: a.x, y: a.y };
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const t = Math.min(dx ? bx.hw / Math.abs(dx) : Infinity, dy ? bx.hh / Math.abs(dy) : Infinity);
    return { x: a.x + dx * Math.min(t, 0.45), y: a.y + dy * Math.min(t, 0.45) };
  };
  let out = '';
  for (const [na, nb, kind = 1, opts = {}] of bonds) {
    const A = atoms[na];
    const B = atoms[nb];
    if (!A || !B) throw new Error(`bond ${na}-${nb}: no atom`);
    const a = trim(A, B);
    const b = trim(B, A);
    const color = opts.color ?? INK;
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    const nx = -(b.y - a.y) / len;
    const ny = (b.x - a.x) / len;
    const line = (p, q, extra = '', w = opts.width ?? width) => `<line x1="${r1(p.x)}" y1="${r1(p.y)}" x2="${r1(q.x)}" y2="${r1(q.y)}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"${extra}/>`;
    const off = (p, d) => ({ x: p.x + nx * d, y: p.y + ny * d });
    if (kind === 1) out += line(a, b);
    else if (kind === 2) {
      if (opts.side) {
        const d = opts.side === 'l' ? -6 : 6;
        const shrinkA = A.label ? 0 : 0.14;
        const shrinkB = B.label ? 0 : 0.14;
        out += line(a, b) + line(off(mid(a, b, shrinkA), d), off(mid(a, b, 1 - shrinkB), d));
      } else out += line(off(a, -3), off(b, -3)) + line(off(a, 3), off(b, 3));
    } else if (kind === 3) out += line(a, b) + line(off(a, -5), off(b, -5)) + line(off(a, 5), off(b, 5));
    else if (kind === 'wedge') {
      const w = 4.2;
      out += `<polygon points="${r1(a.x)},${r1(a.y)} ${r1(b.x + nx * w)},${r1(b.y + ny * w)} ${r1(b.x - nx * w)},${r1(b.y - ny * w)}" fill="${color}"/>`;
    } else if (kind === 'hash') {
      const n = 6;
      for (let i = 1; i <= n; i += 1) {
        const p = mid(a, b, i / n);
        const w = 0.8 + (3.6 * i) / n;
        out += line(off(p, -w), off(p, w), '', 1.6);
      }
    } else if (kind === 'partial') out += line(a, b, ` stroke-dasharray="5 4"`);
    else if (kind === 'hbond') out += `<line x1="${r1(a.x)}" y1="${r1(a.y)}" x2="${r1(b.x)}" y2="${r1(b.y)}" stroke="${opts.color ?? BLUE}" stroke-width="2.2" stroke-dasharray="2 5" stroke-linecap="round"/>`;
  }
  for (const a of Object.values(atoms)) {
    if (a.label) out += text(a.x, a.y, a.label, { size: a.size ?? size, color: a.color ?? INK, weight: a.weight ?? 400, halo: true });
  }
  return out;
}

/**
 * A central atom with groups around it: subs = [deg, label, kind?, extra?] (kind as in mol,
 * extra = atom fields such as color, weight, len). Returns { svg, at: { name → point } }.
 */
export function star(c, label, subs, { len = L, size = 17, color, weight } = {}) {
  const atoms = { c: { ...c, label, color, weight } };
  const bonds = [];
  subs.forEach(([deg, sub, kind = 1, extra = {}], i) => {
    atoms[`s${i}`] = { ...at(c, deg, extra.len ?? len), label: sub, ...extra };
    bonds.push(['c', `s${i}`, kind, { color: extra.bondColor }]);
  });
  return mol(atoms, bonds, { size });
}

/** Two dots (a lone pair) beside an atom, `deg` from it. */
export function lonePair(p, deg, { dist = 14, color = INK } = {}) {
  const c = at(p, deg, dist);
  const a = at(c, deg + 90, 3.4);
  const b = at(c, deg - 90, 3.4);
  return `<circle cx="${r1(a.x)}" cy="${r1(a.y)}" r="2" fill="${color}"/><circle cx="${r1(b.x)}" cy="${r1(b.y)}" r="2" fill="${color}"/>`;
}

/** A charge or partial charge (δ+, δ−, +, −) beside an atom. */
export function charge(p, deg, label, { dist = 16, color = INK, size = 14 } = {}) {
  const c = at(p, deg, dist);
  return text(c.x, c.y, label, { size, color, weight: 600 });
}

// ─── arrows ────────────────────────────────────────────────────────────────
function head(tip, from, color, size = 9) {
  const ang = Math.atan2(tip.y - from.y, tip.x - from.x);
  const p1 = { x: tip.x - size * Math.cos(ang - 0.42), y: tip.y - size * Math.sin(ang - 0.42) };
  const p2 = { x: tip.x - size * Math.cos(ang + 0.42), y: tip.y - size * Math.sin(ang + 0.42) };
  return `<polygon points="${r1(tip.x)},${r1(tip.y)} ${r1(p1.x)},${r1(p1.y)} ${r1(p2.x)},${r1(p2.y)}" fill="${color}"/>`;
}

/** A curly arrow from p to q, bowing `bend` px to the left of the direction of travel (negative: right). */
export function curly(p, q, bend = 30, { color = ARROW } = {}) {
  const len = Math.hypot(q.x - p.x, q.y - p.y);
  const nx = (q.y - p.y) / len;
  const ny = -(q.x - p.x) / len;
  const c1 = { x: p.x + (q.x - p.x) * 0.2 + nx * bend * 1.3, y: p.y + (q.y - p.y) * 0.2 + ny * bend * 1.3 };
  const c2 = { x: p.x + (q.x - p.x) * 0.8 + nx * bend * 1.3, y: p.y + (q.y - p.y) * 0.8 + ny * bend * 1.3 };
  return `<path d="M${r1(p.x)},${r1(p.y)} C${r1(c1.x)},${r1(c1.y)} ${r1(c2.x)},${r1(c2.y)} ${r1(q.x)},${r1(q.y)}" fill="none" stroke="${color}" stroke-width="1.8"/>${head(q, c2, color)}`;
}

/** A straight arrow (reaction arrow), with text above and below. */
export function arrow(p, q, { above = '', below = '', color = INK, size = 13, width = 2 } = {}) {
  const m = mid(p, q);
  let out = `<line x1="${r1(p.x)}" y1="${r1(p.y)}" x2="${r1(q.x - Math.sign(q.x - p.x) * 6)}" y2="${r1(q.y - Math.sign(q.y - p.y) * 6)}" stroke="${color}" stroke-width="${width}"/>${head(q, p, color, 11)}`;
  [].concat(above).forEach((line, i, all) => { if (line) out += text(m.x, m.y - 12 - (all.length - 1 - i) * (size + 3), line, { size, color: MUTED }); });
  [].concat(below).forEach((line, i) => { if (line) out += text(m.x, m.y + 13 + i * (size + 3), line, { size, color: MUTED }); });
  return out;
}

/** Equilibrium arrows (⇌) from x1 to x2 at height y. */
export function equilibrium(x1, x2, y, { above = '', below = '', size = 13 } = {}) {
  const h = (x, yy, dir) => `<line x1="${r1(x1)}" y1="${r1(yy)}" x2="${r1(x2)}" y2="${r1(yy)}" stroke="${INK}" stroke-width="2"/><polyline points="${r1(x - dir * 10)},${r1(yy - dir * 6)} ${r1(x)},${r1(yy)}" fill="none" stroke="${INK}" stroke-width="2"/>`;
  let out = h(x2, y - 4, 1) + h(x1, y + 4, -1);
  const m = (x1 + x2) / 2;
  [].concat(above).forEach((line, i, all) => { if (line) out += text(m, y - 20 - (all.length - 1 - i) * (size + 3), line, { size, color: MUTED }); });
  [].concat(below).forEach((line, i) => { if (line) out += text(m, y + 18 + i * (size + 3), line, { size, color: MUTED }); });
  return out;
}

/** Resonance arrow (↔). */
export function resonance(x1, x2, y) {
  return `<line x1="${r1(x1 + 6)}" y1="${y}" x2="${r1(x2 - 6)}" y2="${y}" stroke="${INK}" stroke-width="2"/>${head(P(x2, y), P(x1, y), INK, 10)}${head(P(x1, y), P(x2, y), INK, 10)}`;
}

// ─── shapes ────────────────────────────────────────────────────────────────
/** A p-orbital lobe (teardrop) from p, pointing `deg`, `len` long. */
export function lobe(p, deg, { len = 34, w = 13, fill = ORB, opacity = 0.45 } = {}) {
  const a = ((90 - deg) * Math.PI) / 180;
  const tf = (x, y) => ({ x: p.x + x * Math.cos(a) - y * Math.sin(a), y: p.y + x * Math.sin(a) + y * Math.cos(a) });
  const pts = [tf(0, 0), tf(w * 1.2, -len * 0.35), tf(w, -len), tf(0, -len), tf(-w, -len), tf(-w * 1.2, -len * 0.35)];
  const f = (q) => `${r1(q.x)},${r1(q.y)}`;
  return `<path d="M${f(pts[0])} C${f(pts[1])} ${f(pts[2])} ${f(pts[3])} C${f(pts[4])} ${f(pts[5])} ${f(pts[0])} Z" fill="${fill}" fill-opacity="${opacity}" stroke="${fill}" stroke-width="1.2"/>`;
}

export function rect(x, y, w, h, { fill = 'none', stroke = '#cbd5e1', r = 10, dash = '', width = 1.4, opacity } = {}) {
  return `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"${dash ? ` stroke-dasharray="${dash}"` : ''}${opacity ? ` opacity="${opacity}"` : ''}/>`;
}

export function circle(c, r, { fill = 'none', stroke = INK, width = 2, dash = '', opacity } = {}) {
  return `<circle cx="${r1(c.x)}" cy="${r1(c.y)}" r="${r1(r)}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"${dash ? ` stroke-dasharray="${dash}"` : ''}${opacity ? ` opacity="${opacity}"` : ''}/>`;
}

export function ellipse(c, rx, ry, { fill = 'none', stroke = INK, width = 1.6, dash = '', opacity } = {}) {
  return `<ellipse cx="${r1(c.x)}" cy="${r1(c.y)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"${dash ? ` stroke-dasharray="${dash}"` : ''}${opacity ? ` fill-opacity="${opacity}"` : ''}/>`;
}

export function line(p, q, { color = INK, width = 2, dash = '' } = {}) {
  return `<line x1="${r1(p.x)}" y1="${r1(p.y)}" x2="${r1(q.x)}" y2="${r1(q.y)}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

/** An angle arc at c between two directions (degrees), with a label. */
export function angle(c, from, to, label, { r = 22, color = BLUE, size = 12, labelDist } = {}) {
  // Counter-clockwise on screen from `from` to `to` (SVG sweep 0 with y pointing down).
  const span = (to - from + 360) % 360;
  const a = at(c, from, r);
  const b = at(c, to, r);
  const m = at(c, from + span / 2, labelDist ?? r + 13);
  return `<path d="M${r1(a.x)},${r1(a.y)} A${r} ${r} 0 ${span > 180 ? 1 : 0} 0 ${r1(b.x)},${r1(b.y)}" fill="none" stroke="${color}" stroke-width="1.4"/>${text(m.x, m.y, label, { size, color })}`;
}

/** A small heading inside a picture. */
export const tag = (x, y, label, opts = {}) => text(x, y, label, { size: 13, color: MUTED, weight: 600, ...opts });

/** The whole picture. */
export function svg(w, h, body, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img"><title>${esc(title)}</title>${body}</svg>\n`;
}
