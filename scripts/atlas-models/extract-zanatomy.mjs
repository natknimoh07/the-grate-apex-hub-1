#!/usr/bin/env node
/**
 * Copies structures out of one of the Z-Anatomy model files (public/atlas/*100.glb) into a small model file the
 * atlas viewer can load as an extra part of a body system (public/atlas/models/).
 *
 * Why: the viewer's body systems come from the "Anatomy Atlas" prototype files (models/meshes-*.glb), which lack some
 * structures the Z-Anatomy files have (the whole joints and ligaments system, the three heads of pectoralis major...).
 * Both sets use the same coordinates (metres, y up), so a copied structure sits exactly where it belongs.
 *
 * Needs the glTF-Transform tools, which are not project dependencies (install them somewhere outside the project
 * and copy this script next to them):
 *   npm i @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions meshoptimizer
 *
 * Usage:
 *   node extract-zanatomy.mjs <source.glb> <out.glb> --all                  every named structure
 *   node extract-zanatomy.mjs <source.glb> <out.glb> --only "<regex>"       only structures whose name matches
 *   (add --not "<regex>" to leave out names that match)
 *
 * Done so far (2026-11-27, owner: "no pectoralis major so far"):
 *   node extract-zanatomy.mjs public/atlas/MuscularSystem100.glb public/atlas/models/meshes-muscle-pectoralis.glb --only "pectoralis major"
 *   node extract-zanatomy.mjs public/atlas/Joints100.glb public/atlas/models/meshes-joints.glb --all
 * After changing any .glb, bump MODEL_VERSION (see AGENTS.md).
 *
 * Licence: Z-Anatomy, CC BY-SA 4.0 (public/atlas/ATTRIBUTION.md). Structures that have no name are dropped
 * (they are leftover helper meshes), and so are empty groups.
 */
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, meshopt } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';

const args = process.argv.slice(2);
const [src, out] = args;
const flag = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : null);
const only = flag('--only') ? new RegExp(flag('--only'), 'i') : null;
const not = flag('--not') ? new RegExp(flag('--not'), 'i') : null;
if (!src || !out || (!only && !args.includes('--all'))) {
  console.error('Usage: extract-zanatomy.mjs <source.glb> <out.glb> (--all | --only "<regex>") [--not "<regex>"]');
  process.exit(1);
}

await MeshoptDecoder.ready;
await MeshoptEncoder.ready;
const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });

const doc = await io.read(src);
let kept = 0;
let dropped = 0;
for (const node of doc.getRoot().listNodes()) {
  if (!node.getMesh()) continue; // groups stay for now; empty ones are removed below
  const name = node.getName().trim();
  const keep = name !== '' && (!only || only.test(name)) && !(not && not.test(name));
  if (keep) kept += 1;
  else { node.dispose(); dropped += 1; }
}
await doc.transform(prune(), dedup(), meshopt({ encoder: MeshoptEncoder, level: 'high' }));
await io.write(out, doc);
console.log(`${out}: kept ${kept} structures, dropped ${dropped}`);
