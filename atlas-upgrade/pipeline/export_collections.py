#!/usr/bin/env python3
"""Export named Z-Anatomy collection groups to full and mobile GLBs.

Usage: blender -b Startup.blend -P export_collections.py -- --config systems.json --out dist/raw
Collections are matched by full path (or exact collection name if a path has no slash).
Objects remain separate, retain anatomical labels, and get stable ids for Atlas selection.
"""
import bpy, argparse, json, sys, hashlib, re
from pathlib import Path

def args_after_dash():
    a=sys.argv
    return a[a.index('--')+1:] if '--' in a else []

p=argparse.ArgumentParser(); p.add_argument('--config',required=True); p.add_argument('--out',required=True); p.add_argument('--lite-ratio',type=float,default=0.58); opts=p.parse_args(args_after_dash())
if not 0.1 <= opts.lite_ratio <= 1: raise SystemExit('--lite-ratio must be 0.1..1.0')
config=json.loads(Path(opts.config).read_text(encoding='utf-8'))
out=Path(opts.out); out.mkdir(parents=True,exist_ok=True)
# Build path->collection index.
collections={}
def index_coll(c,prefix=''):
    path=f'{prefix}/{c.name}' if prefix else c.name
    collections[path]=c
    for ch in c.children: index_coll(ch,path)
for c in bpy.data.collections: index_coll(c)

def resolve(path):
    if path in collections: return collections[path]
    matches=[c for c in collections.values() if c.name==path]
    if len(matches)==1: return matches[0]
    if not matches: raise ValueError(f'Collection not found: {path}')
    raise ValueError(f'Collection name is ambiguous; use full path: {path}')

def descendants(c):
    yield c
    for ch in c.children:
        yield from descendants(ch)

def collect(paths):
    objs={}
    for path in paths:
        c=resolve(path)
        for sub in descendants(c):
            for o in sub.objects:
                if o.type=='MESH' and o.data and len(o.data.polygons): objs[o.name]=o
    return sorted(objs.values(),key=lambda o:o.name.lower())

def clean_label(name):
    # Strip Blender's collision suffix only when it looks like a generated numeric suffix.
    return re.sub(r'\.\d{3}$','',name).strip()

def stable_id(name):
    return hashlib.sha1(name.encode('utf-8')).hexdigest()[:12]

def export_group(key, group, objects, ratio=None):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objects: o.select_set(True)
    bpy.context.view_layer.objects.active=objects[0] if objects else None
    if ratio is not None and ratio < 0.999:
        for o in objects:
            if len(o.data.polygons)<120: continue
            mod=o.modifiers.new('Atlas mobile reduction','DECIMATE')
            mod.ratio=ratio
    filepath=str(out/f'{key}{"-lite" if ratio is not None else ""}.glb')
    if not objects:
        print(f'WARNING: {key} has no exportable mesh objects'); return
    bpy.ops.export_scene.gltf(filepath=filepath,export_format='GLB',use_selection=True,
        export_apply=True,export_yup=True,export_normals=True,export_materials='NONE',
        export_texcoords=False,export_animations=False,export_skins=False)
    # Remove temporary decimate modifiers after export so the next (full) export remains intact.
    if ratio is not None:
        for o in objects:
            for m in list(o.modifiers):
                if m.name=='Atlas mobile reduction': o.modifiers.remove(m)
    print(f'{key}: {len(objects)} objects -> {filepath}')

names={}
for entry in config['systems']:
    key=entry['key']; paths=entry['collections']; objects=collect(paths)
    # Keep original names keyed by object identity: renaming before export must not
    # break restoration when the full and Lite exports run consecutively.
    originals={o: o.name for o in objects}
    for o in objects:
        original=originals[o]
        label=clean_label(original)
        sid=stable_id(original)
        # Viewer parser uses "id|label" and later converts trailing (left/right) into .l/.r.
        o.name=f'{sid}|{label}'
        names[sid]={'en':label,'source':original}
    export_group(key,entry,objects,ratio=None)
    export_group(key,entry,objects,ratio=opts.lite_ratio)
    # restore original Blender object names after export to avoid affecting later groups
    for o in objects:
        o.name=originals[o]
Path(out/'names.json').write_text(json.dumps(names,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
Path(out/'systems.json').write_text(json.dumps(config,indent=2),encoding='utf-8')
