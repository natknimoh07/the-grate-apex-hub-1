#!/usr/bin/env node
/**
 * Upgrades the atlas's coarse "prototype" meshes (public/atlas/models/meshes*.glb) with the finer meshes of the same
 * structures from the Z-Anatomy files next to them (public/atlas/*100.glb and CardioVascular41.glb, plus lite/ for phones).
 *
 * Owner, 2026-11-27: "the meshes" are mid. The prototype set has about 40% of Z-Anatomy's triangles and no smooth normals.
 *
 * What it does, for every structure that exists in both sets under the same name and side:
 *   - keeps the prototype's node name ("<id>|<English name>[.l|.r]"), so Latin names, search, colours, quiz and
 *     body-system grouping work exactly as before;
 *   - takes the Z-Anatomy mesh (same coordinates), as models/hd/<group>--<source>.glb (full detail) and
 *     models/hd-lite/<group>--<source>.glb (phones: Z-Anatomy's lite meshes);
 *   - removes the structure from the prototype file, so nothing is downloaded twice.
 * Structures are upgraded only when Z-Anatomy has at least 1.3x the triangles (and 100 more), its lite copy is at least
 * as detailed as the prototype's, and it is not a thin tube (nerves, branches, arteries, veins: more triangles there cost
 * speed and show nothing). Left alone on purpose: the stomach and sigmoid colon (the viewer treats them specially), the
 * spinal cord internals (models/meshes2-nervous-spinal.glb), fasciae, lymphatics, bones and the endocrine glands (no gain).
 *
 * Run it on a clean checkout of public/atlas/models (it rewrites the prototype files; a second run finds nothing to do):
 *   node upgrade-meshes.mjs <path to public/atlas>
 * Needs the glTF-Transform tools, which are not project dependencies (install outside the project):
 *   npm i @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions meshoptimizer
 * It prints the `files:` lines for the SYSTEMS list in anatomy.html. After it, bump MODEL_VERSION (see AGENTS.md).
 * Licence: Z-Anatomy, CC BY-SA 4.0 (public/atlas/ATTRIBUTION.md).
 */
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, join, meshopt } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';
import fs from 'fs';
import path from 'path';

const R = path.resolve(process.argv[2] || '.') + '/';
await MeshoptDecoder.ready;
await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });

const Z_FILES = { muscular: 'MuscularSystem100.glb', skeletal: 'SkeletalSystem100.glb', nervous: 'NervousSystem100.glb', cardio: 'CardioVascular41.glb', visceral: 'VisceralSystem100.glb' };
// prototype files that may be upgraded (base names; each has a "-more" twin)
const GROUPS = ['meshes-muscle', 'meshes2-nervous', 'meshes2-cardio', 'meshes2-sense', 'meshes-digestive', 'meshes-uro', 'meshes-resp', 'meshes2-resp'];
const THIN = /nerve|branch|ramus|rami|plexus|ganglion|tributar|capillar|venule|arteriol|artery|vein|vena cava|trunk|fasciculus|tract/i;
const SKIP = /^(stomach|sigmoid colon)\b|of spinal cord|^central canal|lat_fis|jensen|pectoralis major muscle$/i;

const key = (n) => n.replace(/^[^|]*\|/, '').replace(/\s*\((left|right)\)$/i, (m) => (/left/i.test(m) ? '.l' : '.r')).replace(/[*'\s]+$/, '').trim().toLowerCase();
const tris = (n) => { let t = 0; for (const p of n.getMesh().listPrimitives()) { const i = p.getIndices(); t += (i ? i.getCount() : p.getAttribute('POSITION').getCount()) / 3; } return t; };
const isMeshNode = (n) => !!n.getMesh();
const isMarker = (nm) => /\.[eo]\d*[rl]?$/.test(nm); // muscle origin/insertion patches on bones

// 1. the prototype's structures
const proto = new Map(); // key -> { group, tris }
for (const g of GROUPS) for (const f of [g, g + '-more']) {
  const file = R + 'models/' + f + '.glb';
  if (!fs.existsSync(file)) continue;
  const doc = await io.read(file);
  for (const n of doc.getRoot().listNodes()) if (isMeshNode(n)) proto.set(key(n.getName()), { group: g, tris: tris(n), name: n.getName() });
}

// 2. which Z-Anatomy structures are better: full and lite must both have the structure
const zIndex = (doc) => { const m = new Map(); for (const n of doc.getRoot().listNodes()) { const nm = n.getName(); if (isMeshNode(n) && nm.trim() && !isMarker(nm) && !m.has(key(nm))) m.set(key(nm), n); } return m; };
const chosen = new Map(); // key -> { group, src }
for (const [src, zf] of Object.entries(Z_FILES)) {
  const full = zIndex(await io.read(R + zf));
  const lite = zIndex(await io.read(R + 'lite/' + zf));
  for (const [k, n] of full) {
    const p = proto.get(k);
    if (!p || chosen.has(k) || THIN.test(k) || SKIP.test(k) || !lite.has(k)) continue;
    const zt = tris(n);
    if (zt >= 1.3 * p.tris && zt - p.tris >= 100 && tris(lite.get(k)) >= p.tris) chosen.set(k, { group: p.group, src });
  }
}
console.log('upgrading', chosen.size, 'structures');

// 3. write the HD files (full, and lite for phones), named like the prototype's nodes
fs.mkdirSync(R + 'models/hd', { recursive: true });
fs.mkdirSync(R + 'models/hd-lite', { recursive: true });
const hdFiles = {}; // group -> [file names]
for (const variant of ['hd', 'hd-lite']) {
  for (const [src, zf] of Object.entries(Z_FILES)) {
    const wanted = new Map([...chosen].filter(([, v]) => v.src === src));
    for (const group of GROUPS) {
      const keys = [...wanted].filter(([, v]) => v.group === group).map(([k]) => k);
      if (!keys.length) continue;
      const doc = await io.read(R + (variant === 'hd' ? '' : 'lite/') + zf);
      const used = new Set();
      for (const n of doc.getRoot().listNodes()) {
        if (!isMeshNode(n)) continue;
        const nm = n.getName(); const k = key(nm);
        if (nm.trim() && !isMarker(nm) && keys.includes(k) && !used.has(k)) { used.add(k); n.setName(proto.get(k).name); }
        else n.dispose();
      }
      // Z-Anatomy splits some structures into two primitives (by material). The viewer paints its own materials and expects one
      // mesh per named structure (the id lives on that node: Latin names, search and selection break otherwise), so merge them.
      for (const mesh of doc.getRoot().listMeshes()) for (const prim of mesh.listPrimitives()) prim.setMaterial(null);
      await doc.transform(join({ keepMeshes: true }), prune(), meshopt({ encoder: MeshoptEncoder, level: 'high' }));
      const name = `${group}--${src}.glb`;
      await io.write(`${R}models/${variant}/${name}`, doc);
      if (variant === 'hd') (hdFiles[group] ??= []).push(name);
    }
  }
}

// 4. take the upgraded structures out of the prototype files
for (const g of GROUPS) for (const f of [g, g + '-more']) {
  const file = R + 'models/' + f + '.glb';
  if (!fs.existsSync(file)) continue;
  const doc = await io.read(file);
  let removed = 0;
  for (const n of doc.getRoot().listNodes()) if (isMeshNode(n) && chosen.has(key(n.getName())) && chosen.get(key(n.getName())).group === g) { n.dispose(); removed += 1; }
  if (!removed) continue;
  await doc.transform(prune(), meshopt({ encoder: MeshoptEncoder, level: 'high' }));
  await io.write(file, doc);
  console.log(`${f}.glb: removed ${removed}`);
}

for (const [g, list] of Object.entries(hdFiles)) console.log(g, '->', list.join(', '));
