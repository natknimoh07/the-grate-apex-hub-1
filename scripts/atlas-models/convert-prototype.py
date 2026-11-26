#!/usr/bin/env python3
"""Turns the "Anatomy Atlas 3D (prototype)" single-file HTML into the atlas's model files.

Usage:  python3 -I scripts/atlas-models/convert-prototype.py <prototype.html> public/atlas/models

The prototype keeps, per body system, (1) a base64 .glb and (2) a "pack": a gzip blob of 16-bit
quantised meshes. This writes, per system key K:
  K.glb       the base .glb, unchanged (its node names are "<id>|<English name>")
  K-more.glb  the pack as a normal .glb (16-bit normalised positions + KHR_mesh_quantization,
              one node per structure named "<id>|<English name>[.l|.r]")
and names.json (id -> names in seven languages) and systems.json (key, label, colour).
"""
import base64, gzip, json, struct, sys, os, re

src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
line = next(l for l in open(src, encoding='utf-8') if l.startswith('const DATA = '))
d = json.loads(line[len('const DATA = '):].rstrip().rstrip(';'))
items = {i['id']: i for i in d['items']}

def pad4(b, fill=b'\0'):
    return b + fill * (-len(b) % 4)

def glb(gltf, binary):
    j = pad4(json.dumps(gltf, separators=(',', ':')).encode(), b' ')
    b = pad4(binary)
    return struct.pack('<4sII', b'glTF', 2, 12 + 8 + len(j) + 8 + len(b)) + struct.pack('<I4s', len(j), b'JSON') + j + struct.pack('<I4s', len(b), b'BIN\0') + b

def inflate(s):
    return gzip.decompress(base64.b64decode(s))

for key, b64 in d['glb'].items():
    open(os.path.join(out, key + '.glb'), 'wb').write(base64.b64decode(b64))

for key, p in d['pack'].items():
    buf = inflate(p['bin'])
    off = 0
    nodes, meshes, accessors, views, chunks = [], [], [], [], []
    pos_in_bin = 0
    def add_view(data, target):
        global pos_in_bin
        data = pad4(data)
        views.append({'buffer': 0, 'byteOffset': pos_in_bin, 'byteLength': len(data), 'target': target})
        chunks.append(data); pos_in_bin += len(data)
        return len(views) - 1
    for oid, nv, nt, x0, y0, z0, x1, y1, z1 in p['objs']:
        q = buf[off: off + nv * 6]; off += nv * 6
        ix = buf[off: off + nt * 6]; off += nt * 6
        vals = struct.unpack('<%dH' % (nv * 3), q)
        mn = [min(vals[k::3]) for k in range(3)]; mx = [max(vals[k::3]) for k in range(3)]
        pv = add_view(q, 34962); iv = add_view(ix, 34963)
        accessors.append({'bufferView': pv, 'componentType': 5123, 'normalized': True, 'count': nv, 'type': 'VEC3', 'min': mn, 'max': mx})
        accessors.append({'bufferView': iv, 'componentType': 5123, 'count': nt * 3, 'type': 'SCALAR'})
        meshes.append({'primitives': [{'attributes': {'POSITION': len(accessors) - 2}, 'indices': len(accessors) - 1, 'mode': 4}]})
        label = (items.get(oid) or {}).get('en') or oid
        # a pair of sided structures shares one id: the model's right side is -x, left is +x
        sided = sum(1 for o in p['objs'] if o[0] == oid) > 1
        suffix = ('.l' if (x0 + x1) / 2 > 0 else '.r') if sided else ''
        eps = 1e-9
        nodes.append({'name': '%s|%s%s' % (oid, label, suffix), 'mesh': len(meshes) - 1,
                      'translation': [x0, y0, z0],
                      'scale': [max(x1 - x0, eps), max(y1 - y0, eps), max(z1 - z0, eps)]})   # positions are normalised 0..1 across the box
    assert off == len(buf), (key, off, len(buf))
    gltf = {'asset': {'version': '2.0', 'generator': 'convert-prototype.py'},
            'extensionsUsed': ['KHR_mesh_quantization'], 'extensionsRequired': ['KHR_mesh_quantization'],
            'scene': 0, 'scenes': [{'nodes': list(range(len(nodes)))}], 'nodes': nodes, 'meshes': meshes,
            'accessors': accessors, 'bufferViews': views, 'buffers': [{'byteLength': pos_in_bin + (-pos_in_bin % 4)}]}
    open(os.path.join(out, key + '-more.glb'), 'wb').write(glb(gltf, b''.join(chunks)))
    print(key, len(nodes), 'structures')

names = {i['id']: {k: i[k] for k in ('en', 'la', 'fr', 'es', 'pt', 'it', 'fa') if i.get(k)} for i in d['items']}
json.dump(names, open(os.path.join(out, 'names.json'), 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
json.dump(d['systems'], open(os.path.join(out, 'systems.json'), 'w'), indent=1)
