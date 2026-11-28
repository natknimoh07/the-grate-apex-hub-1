# Source archive verification report

The user-provided `Z-Anatomy.zip` was checked locally on 2026-11-28.

- ZIP integrity: `unzip -t` reported no errors.
- SHA-256: `e029688545627bd0214b269e1063143abb580aad72b2c2445d6d8a9a0d9da736`
- Pinned SHA-256 in `pipeline/fetch-source.sh`: matches.
- `Startup.blend` archive member: present; reported size 306,838,281 bytes (293 MiB uncompressed).
- Blender executable: not installed in the current execution environment; collection inventory and GLB export were not run here.

The supplied source was selectively extracted to inspect its archive contents. The full blend file was not modified.
