import json, subprocess, re
from PIL import Image, ImageOps
figs=json.load(open('figs.json'))
import os
root=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','public')
ANAT=('cardiovascular-system-gross','respiratory-system-gross','gastrointestinal-system-gross','urinary-system-gross','upper-limb','head-and-neck','neuroanatomy')
import re as _r
def base(l): return _r.sub(r'\(.*?\)','',l).strip()
def norm(w): return re.sub(r'[^a-z0-9]','',w.lower())
def run(img,sc,W,H,minconf):
    img.resize((W*sc,H*sc)).save('/tmp/fc-ocr.png')
    tsv=subprocess.run(['tesseract','/tmp/fc-ocr.png','-','--psm','11','tsv'],capture_output=True,text=True).stdout
    ws=[]
    for line in tsv.splitlines()[1:]:
        c=line.split('\t')
        if len(c)<12 or not c[11].strip(): continue
        conf=float(c[10]); t=c[11]; a=re.sub(r'[^A-Za-z0-9]','',t)
        if conf<minconf or len(a)<1: continue
        if len(a)<3 and not a.isdigit() and conf<80: continue
        x,y,w,h=[int(v)/sc for v in c[6:10]]
        if h>H*0.08 or h<5: continue
        ws.append(dict(t=t,x=x,y=y,w=w,h=h,conf=conf))
    return ws
def ocr(path,minconf):
    img=Image.open(path).convert('L'); W,H=img.size
    sc=2 if max(W,H)<1600 else 1
    return run(img,sc,W,H,minconf)+run(ImageOps.invert(img),sc,W,H,max(minconf,70)),W,H
def cluster(ws):
    ws=sorted(ws,key=lambda d:d['x']); lines=[]
    for w in ws:
        cy=w['y']+w['h']/2
        for L in lines:
            lcy=L['y']+L['h']/2; hh=max(L['h'],w['h'])
            ov = w['x'] <= L['x']+L['w'] and w['x']+w['w']>=L['x'] and abs(cy-lcy)<0.4*hh
            if ov or (abs(cy-lcy)<0.5*hh and 0<= w['x']-(L['x']+L['w']) < 1.6*hh):
                x1=min(L['x'],w['x']);x2=max(L['x']+L['w'],w['x']+w['w']); y1=min(L['y'],w['y']); y2=max(L['y']+L['h'],w['y']+w['h'])
                L.update(x=x1,w=x2-x1,y=y1,h=y2-y1); L['t']+=' '+w['t']; break
        else: lines.append(dict(w))
    return lines
def frac(L,W,H,padf=0.25):
    pad=padf*L['h']; return [(L['x']-pad)/W,(L['y']-pad)/H,(L['w']+2*pad)/W,(L['h']+2*pad)/H]
def overlap(a,b):
    ix=max(0,min(a[0]+a[2],b[0]+b[2])-max(a[0],b[0])); iy=max(0,min(a[1]+a[3],b[1]+b[3])-max(a[1],b[1]))
    return ix*iy
def contains(big,a,tol=0.002): return a[0]>=big[0]-tol and a[1]>=big[1]-tol and a[0]+a[2]<=big[0]+big[2]+tol and a[1]+a[3]<=big[1]+big[3]+tol
def union(a,b):
    x1=min(a[0],b[0]);y1=min(a[1],b[1]);x2=max(a[0]+a[2],b[0]+b[2]);y2=max(a[1]+a[3],b[1]+b[3]); return [x1,y1,x2-x1,y2-y1]
R=lambda b:[round(max(0,v),4) for v in b]
masks={}; extend={}
for f in figs:
    anat=f['id'].split(':')[0] in ANAT
    ws,W,H=ocr(root+f['src'],40 if anat else 55)
    words=[frac(w,W,H,0.15) for w in ws]
    lines=cluster(ws)
    spotbox=[(s['id'],i,b) for s in f['spots'] for i,b in enumerate(s['boxes'])]
    # 1) spot boxes that cut a word in two: grow them over that word
    grown={}
    for sid,i,b in spotbox:
        nb=list(b)
        for wb in words:
            a=overlap(nb,wb)
            if a>0 and a>=0.25*wb[2]*wb[3] and not contains(nb,wb):
                nb=union(nb,wb)
        if nb!=list(b): grown.setdefault(sid,[]).append(R(nb))
    if grown: extend[f['id']]=grown
    allb=[b for _,_,b in spotbox]+[b for v in grown.values() for b in v]
    out=[]
    for L in lines:
        b=frac(L,W,H)
        if any(overlap(b,bb)>=0.5*b[2]*b[3] for bb in allb): continue
        nt=norm(L['t'])
        if anat: out.append(R(b))
        else:
            for s in f['spots']:
                nl=norm(base(s['label']))
                if len(nt)>=4 and (nt==nl or (len(nt)>=6 and nt in nl and len(nt)>=0.7*len(nl))):
                    out.append(R(b)); break
    if not anat:
        for w,wb in zip(ws,words):
            nw=norm(w['t'])
            if len(nw)<4 or any(overlap(wb,bb)>=0.5*wb[2]*wb[3] for bb in allb+out): continue
            for s in f['spots']:
                if nw==norm(base(s['label'])):
                    out.append(R(frac(w,W,H))); break
    if out: masks[f['id']]=out
json.dump({'masks':masks,'extend':extend},open('covers.json','w'))
print(len(masks),'figs masked',sum(len(v) for v in masks.values()),'| grown spot boxes in',len(extend),'figs',sum(len(v) for x in extend.values() for v in x.values()))
