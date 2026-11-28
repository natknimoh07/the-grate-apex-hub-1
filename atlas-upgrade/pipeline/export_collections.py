#!/usr/bin/env python3
"""Blender headless exporter: collection-path systems to full + lite GLB.
Objects are duplicated into a temporary collection, deduplicated by source object,
curve-like anatomy is converted to meshes, and source names are preserved.
"""
import bpy, argparse, json, sys, os
from pathlib import Path

def cli_args():
    argv=sys.argv
    return argv[argv.index('--')+1:] if '--' in argv else []

p=argparse.ArgumentParser()
p.add_argument('--config', required=True)
p.add_argument('--out', required=True)
p.add_argument('--lite-ratio', type=float, default=.58)
p.add_argument('--only', default='', help='Comma-separated export keys for pilot runs')
args=p.parse_args(cli_args())
if not 0.05 <= args.lite_ratio <= 1.0:
    raise SystemExit('--lite-ratio must be between 0.05 and 1.0')
config=json.loads(Path(args.config).read_text(encoding='utf-8'))
out=Path(args.out); out.mkdir(parents=True, exist_ok=True)

collection_paths={}
def walk_collection(c, path=''):
    full=f'{path}/{c.name}' if path else c.name
    collection_paths[full]=c
    for child in sorted(c.children, key=lambda x:x.name.casefold()): walk_collection(child, full)
for root in bpy.context.scene.collection.children: walk_collection(root)

missing=[]
for system in config.get('systems', []):
    for path in system.get('collections', []):
        if path not in collection_paths: missing.append((system['key'], path))
if missing:
    print('Missing configured collection paths:')
    for key,path in missing: print(f'  {key}: {path}')
    raise SystemExit(2)

selected_keys=set(k.strip() for k in args.only.split(',') if k.strip())
if selected_keys:
    systems=[s for s in config['systems'] if s['key'] in selected_keys]
    unknown=selected_keys-{s['key'] for s in systems}
    if unknown: raise SystemExit('Unknown pilot keys: '+', '.join(sorted(unknown)))
else: systems=config['systems']

def export_variant(system, variant, ratio):
    key=system['key']; src_objects=[]; seen=set()
    for path in system['collections']:
        col=collection_paths[path]
        for obj in col.all_objects:
            if obj.as_pointer() in seen: continue
            seen.add(obj.as_pointer())
            if obj.type in {'MESH','CURVE','SURFACE','META'}: src_objects.append(obj)
            elif obj.type == 'FONT': continue
    if not src_objects:
        raise RuntimeError(f'{key}: resolved collection paths but found no exportable objects')
    tmp=bpy.data.collections.new(f'__ATLAS_TMP_{key}_{variant}')
    bpy.context.scene.collection.children.link(tmp); copies=[]
    try:
        for source in src_objects:
            dup=source.copy()
            if source.data: dup.data=source.data.copy()
            dup.name=source.name; tmp.objects.link(dup); copies.append(dup)
        convertables=[o for o in copies if o.type in {'CURVE','SURFACE','META'}]
        if convertables:
            bpy.ops.object.select_all(action='DESELECT')
            for o in convertables: o.select_set(True)
            bpy.context.view_layer.objects.active=convertables[0]
            bpy.ops.object.convert(target='MESH')
        if ratio < 0.999:
            for obj in copies:
                if obj.type!='MESH' or not obj.data or len(obj.data.polygons)<4: continue
                mod=obj.modifiers.new('Atlas_Lite_Decimate','DECIMATE'); mod.ratio=ratio
                bpy.context.view_layer.objects.active=obj; obj.select_set(True)
                bpy.ops.object.modifier_apply(modifier=mod.name); obj.select_set(False)
        bpy.ops.object.select_all(action='DESELECT')
        for obj in copies: obj.select_set(True)
        bpy.context.view_layer.objects.active=copies[0]
        file=out/f'{key}{"-lite" if variant=="lite" else ""}.glb'
        # Blender 5.x removed the legacy export_colors operator argument.
        # Color attributes remain handled by the glTF exporter defaults.
        bpy.ops.export_scene.gltf(filepath=str(file), export_format='GLB', use_selection=True,
            export_materials='EXPORT', export_texcoords=True, export_normals=True,
            export_cameras=False, export_lights=False, export_animations=False, export_yup=True)
        names=[{'node':obj.name,'source_type':obj.type,'system':key} for obj in copies]
        (out/f'{key}{"-lite" if variant=="lite" else ""}-names.json').write_text(json.dumps(names,indent=2),encoding='utf-8')
        if not file.exists() or file.stat().st_size < 1024:
            raise RuntimeError(f'{key} {variant}: GLB output missing or suspiciously small: {file}')
        print(f'EXPORTED {file} | objects={len(copies)} | ratio={ratio} | bytes={file.stat().st_size}')
    finally:
        for obj in list(tmp.objects): bpy.data.objects.remove(obj, do_unlink=True)
        bpy.data.collections.remove(tmp)

summary=[]
for system in systems:
    export_variant(system,'full',1.0); export_variant(system,'lite',args.lite_ratio)
    summary.append({'key':system['key'],'label':system.get('label',system['key']),'collections':system['collections']})
(out/'export-systems.json').write_text(json.dumps(summary,indent=2),encoding='utf-8')
print('Atlas export pipeline completed.')
