import json,subprocess,re
from PIL import Image,ImageDraw
figs=json.load(open('figs.json')); cv=json.load(open('covers.json'));masks=cv['masks'];ext=cv['extend']
def norm(w): return re.sub(r'[^a-z0-9]','',w.lower())
for f in figs:
  im=Image.open(__import__('os').path.join(__import__('os').path.dirname(__import__('os').path.abspath(__file__)),'..','..','public')+f['src']).convert('RGB'); W,H=im.size
  d=ImageDraw.Draw(im)
  for b in [b for s in f['spots'] for b in s['boxes']]+masks.get(f['id'],[])+[b for v in ext.get(f['id'],{}).values() for b in v]:
    bx,by,bw,bh=b; d.rectangle([bx*W,by*H,(bx+bw)*W,(by+bh)*H],fill=(220,220,220))
  sc=2 if max(W,H)<1600 else 1
  im.convert('L').resize((W*sc,H*sc)).save('/tmp/fc-ocr.png')
  tsv=subprocess.run(['tesseract','/tmp/fc-ocr.png','-','--psm','11','tsv'],capture_output=True,text=True).stdout
  words=[c[11] for c in (l.split('\t') for l in tsv.splitlines()[1:]) if len(c)>=12 and c[11].strip() and float(c[10])>=40]
  labs={norm(s['label']):s['label'] for s in f['spots']}
  lw=set(norm(t) for s in f['spots'] for t in re.split(r'[\s/,()\-]+',s['label']) if len(norm(t))>=5)
  hits=[w for w in words if norm(w) in lw]
  if hits: print(f['id'],hits)
