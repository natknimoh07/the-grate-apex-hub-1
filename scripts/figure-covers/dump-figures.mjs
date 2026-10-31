const { allFigures } = await import('@/data/figures');
console.log(JSON.stringify(allFigures.map(f=>({id:f.id,src:f.src,width:f.width,height:f.height,spots:f.spots.map(s=>({id:s.id,label:s.label,x:s.x,y:s.y,boxes:s.boxes||[]}))}))));
