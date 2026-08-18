import fs from 'node:fs/promises';
import path from 'node:path';
import {gunzipSync} from 'node:zlib';
import {pathToFileURL} from 'node:url';
const root=path.resolve('.');
const dist=path.join(root,'dist');
const pub=path.join(root,'public');
const imgDir=path.join(pub,'images');
await fs.mkdir(path.join(root,'src'),{recursive:true});
await fs.mkdir(pub,{recursive:true});
await fs.mkdir(imgDir,{recursive:true});
for(const [source,out] of [
 ['scripts/v3-site.gz.b64','src/site-v3.mjs'],
 ['scripts/v3-style.gz.b64','public/styles-v3.css'],
 ['scripts/v3-app.gz.b64','public/app-v3.js']
]){
 const packed=(await fs.readFile(path.join(root,source),'utf8')).trim();
 await fs.writeFile(path.join(root,out),gunzipSync(Buffer.from(packed,'base64')));
}
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
 try{const stat=await fs.stat(target);if(stat.size>8000)return}catch{}
 const res=await fetch(url,{headers:{'User-Agent':'CosmoSchoolPrototype/5.0'}});
 if(!res.ok)throw new Error(`Could not fetch ${name}: ${res.status}`);
 const bytes=Buffer.from(await res.arrayBuffer());
 if(bytes.length<8000)throw new Error(`Image ${name} is unexpectedly small`);
 await fs.writeFile(target,bytes);
}));
const {pages}=await import(pathToFileURL(path.join(root,'src/site-v5.mjs')).href+`?v=${Date.now()}`);
await fs.rm(dist,{recursive:true,force:true});
await fs.mkdir(dist,{recursive:true});
await fs.cp(pub,dist,{recursive:true});
for(const [file,html] of Object.entries(pages)){
 const out=path.join(dist,file);await fs.mkdir(path.dirname(out),{recursive:true});await fs.writeFile(out,html);
}
console.log(`Built ${Object.keys(pages).length} business-focused routes + dedicated mobile layouts + Cosmo quality layer v5 → dist/`);
