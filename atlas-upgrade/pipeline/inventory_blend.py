#!/usr/bin/env python3
"""Blender background script: inventory Z-Anatomy collections and mesh sizes.
Run: blender -b Startup.blend -P inventory_blend.py -- --out inventory.json
"""
import bpy, argparse, json, sys
from pathlib import Path

def args_after_dash():
    a=sys.argv
    return a[a.index('--')+1:] if '--' in a else []

p=argparse.ArgumentParser(); p.add_argument('--out',required=True); opts=p.parse_args(args_after_dash())

def walk(coll, prefix=''):
    path=f'{prefix}/{coll.name}' if prefix else coll.name
    own=list(coll.objects)
    mesh_objs=[o for o in own if o.type=='MESH']
    verts=sum(len(o.data.vertices) for o in mesh_objs)
    tris=sum(sum(max(0,len(poly.vertices)-2) for poly in o.data.polygons) for o in mesh_objs)
    yield {'path':path,'name':coll.name,'direct_objects':len(own),'mesh_objects':len(mesh_objs),'vertices':verts,'triangles':tris,
           'types':{t:sum(o.type==t for o in own) for t in sorted({o.type for o in own})}}
    for child in sorted(coll.children,key=lambda c:c.name.lower()):
        yield from walk(child,path)
rows=[]
for root in sorted(bpy.context.scene.collection.children,key=lambda c:c.name.lower()):
    rows.extend(list(walk(root)))
Path(opts.out).parent.mkdir(parents=True,exist_ok=True)
Path(opts.out).write_text(json.dumps({'blend':bpy.data.filepath,'collection_inventory':rows},indent=2),encoding='utf-8')
print(f'Inventory written: {opts.out} ({len(rows)} collections)')
