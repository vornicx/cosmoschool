import fs from 'node:fs/promises';
import path from 'node:path';
import {gunzipSync} from 'node:zlib';
import {pages} from '../src/site-v2.mjs';

const root=path.resolve('.');
const dist=path.join(root,'dist');
const pub=path.join(root,'public');
const imgDir=path.join(pub,'images');

await fs.mkdir(imgDir,{recursive:true});

// Mobile is a separate authored experience. Keep its source bundle compact in GitHub,
// then materialise the readable runtime assets during the build.
for (const [source,out] of [
  ['scripts/mobile-v4.js.gz.b64','public/mobile-v4.js'],
  ['scripts/mobile-v4.css.gz.b64','public/mobile-v4.css']
]) {
  const packed=(await fs.readFile(path.join(root,source),'utf8')).trim();
  const decoded=gunzipSync(Buffer.from(packed,'base64'));
  await fs.writeFile(path.join(root,out),decoded);
}

// Package imagery into the deployed site instead of hotlinking it from the browser.
// Unsplash is used only as the build-time image source; visitors receive local assets.
const assets={
  'hero-cosmo.webp':'https://images.unsplash.com/photo-1758270704191-5d7255cc02dd?auto=format&fit=crop&w=1500&q=84&fm=webp',
  'book-red.webp':'https://images.unsplash.com/photo-1772396867158-e26d9e6256b2?auto=format&fit=crop&w=1200&q=82&fm=webp',
  'one-to-one.webp':'https://images.unsplash.com/photo-1758685848270-16e64139fe0c?auto=format&fit=crop&w=1200&q=84&fm=webp',
  'online.webp':'https://images.unsplash.com/photo-1758685733395-dba201403b4d?auto=format&fit=crop&w=1200&q=82&fm=webp',
  'cambridge-dictionary.webp':'https://images.unsplash.com/photo-1695238665698-06fd32f56272?auto=format&fit=crop&w=1200&q=84&fm=webp',
  'abroad-cosmo.webp':'https://images.unsplash.com/photo-1779896412124-9d2711feda0c?auto=format&fit=crop&w=1400&q=84&fm=webp'
};

await Promise.all(Object.entries(assets).map(async([name,url])=>{
  const target=path.join(imgDir,name);
  try {
    const stat=await fs.stat(target);
    if(stat.size>8000) return;
  } catch {}
  const res=await fetch(url,{headers:{'User-Agent':'CosmoSchoolPrototype/1.0'}});
  if(!res.ok) throw new Error(`Could not fetch ${name}: ${res.status}`);
  const bytes=Buffer.from(await res.arrayBuffer());
  if(bytes.length<8000) throw new Error(`Image ${name} is unexpectedly small`);
  await fs.writeFile(target,bytes);
}));

await fs.rm(dist,{recursive:true,force:true});
await fs.mkdir(dist,{recursive:true});
await fs.cp(pub,dist,{recursive:true});
for(const [file,html] of Object.entries(pages)){
  const out=path.join(dist,file);
  await fs.mkdir(path.dirname(out),{recursive:true});
  await fs.writeFile(out,html);
}
console.log(`Built ${Object.keys(pages).length} pages + dedicated mobile experience → dist/`);
