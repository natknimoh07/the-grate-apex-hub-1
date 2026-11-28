# GRATEAPEX — Atlas model upgrade starter

This is a **model-source upgrade pipeline**, not a viewer redesign. It stages the fuller Z-Anatomy Blender source, inventories collection coverage, and exports separate full-quality/mobile GLBs while preserving each mesh as a named, selectable node.

## Important current status

- Existing Atlas remains unchanged and keeps working.
- This bundle does not contain the 87 MB upstream archive or generated meshes.
- The initial system collection mapping is a starting point. Run the inventory first; confirm exact collection names and nested anatomy before final mapping/integration.
- Integration into `public/atlas/anatomy.html` is intentionally a later step after validating exports and source coverage. The current Atlas loader expects its existing model file paths and a `names.json` map.

## Source

The source archive is pinned by SHA-256 in `pipeline/fetch-source.sh`. It downloads `Z-Anatomy.zip` from the official public repository, verifies the checksum, and extracts `Startup.blend`. Do not use a different archive without reviewing the attribution and license.

## Requirements

- Blender 4.x (with glTF exporter enabled)
- Bash, curl, unzip, sha256sum
- Optional: `gltfpack` for Meshopt compression (`-cc -kn`)

## Run

From this folder:

```bash
./pipeline/fetch-source.sh
BLEND="$(cat source/BLEND_PATH)"
blender -b "$BLEND" -P pipeline/inventory_blend.py -- --out source/collection-inventory.json
```

Review `source/collection-inventory.json` to identify exact collection paths, nested systems, and mesh counts. Then edit `systems.initial.json` to match paths; copy it to a working `systems.json`.

Export full and mobile meshes:

```bash
blender -b "$BLEND" -P pipeline/export_collections.py -- \
  --config systems.json --out dist/raw --lite-ratio 0.58
```

Output per system: `<key>.glb`, `<key>-lite.glb`, `names.json`, `systems.json`.

Optional Meshopt compression (preserving node names):

```bash
for f in dist/raw/*.glb; do gltfpack -i "$f" -o "${f%.glb}.meshopt.glb" -cc -kn; done
```

Validate the exported GLBs in a Three.js/GLTFLoader preview before integrating. Check anatomy coverage, object naming, coordinates, scale, mesh count, total size, and selection on each side. The Lite export is lossy geometry simplification; keep the Full GLBs as the source of truth.

## Planned integration steps

1. Inventory the source hierarchy and confirm the mapping for the existing Atlas categories.
2. Export the complete anatomical systems, preserving unique object names and sides.
3. Validate geometry and load/selection in a preview scene.
4. Add full/mobile file routing to the Atlas loader, keeping old assets as fallback.
5. Update `MODEL_VERSION`, run type/tests and browser/mobile performance checks.
6. Add credits/modified-asset notices and only then swap the existing models.

## License

The derived model files are subject to CC BY-SA 4.0 and attribution requirements. See `SOURCE-CREDITS.md`.

## Using the source archive already supplied

To use the owner's source ZIP without another download, set `ZANATOMY_ZIP` when running the staging script:

```bash
ZANATOMY_ZIP=/path/to/Z-Anatomy.zip ./pipeline/fetch-source.sh
```

The script still checks the pinned SHA-256 before extracting. A source-verification report is included in `SOURCE-VERIFICATION.md`.

## Remote export route (GitHub Actions)

I added a manual workflow at `.github/workflows/atlas-model-upgrade.yml`. It uses a GitHub-hosted runner (which has outbound network access), installs Blender, downloads and checksum-verifies the source, then uploads a 14-day artifact.

1. In your repository, create a folder named `atlas-upgrade` and copy this toolkit's contents into it.
2. Copy `.github/workflows/atlas-model-upgrade.yml` from this toolkit into your repository's `.github/workflows/` folder.
3. Commit those files using GitHub's web interface (or your local Git client).
4. In GitHub, open **Actions → Atlas Z-Anatomy Model Pipeline → Run workflow**, and run **inventory** first.
5. Download the `atlas-z-anatomy-inventory` artifact and share its `collection-inventory.json` with me. I'll use the real collection paths to make the system mapping.
6. Once mapping is reviewed, run **export** to generate full and Lite GLBs.

The workflow is manual-only; it does not run on every push. It is read-only for repository permissions and uploads results as a workflow artifact. Export mode should not be run using the initial mapping until the inventory has been reviewed.
