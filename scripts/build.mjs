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
  'cosmo-hero.png':'https://academiacosmoschool.com/wp-content/uploads/2023/03/Rectangle-255-1516x652.png',
  'cosmo-dictionary.jpg':'https://academiacosmoschool.com/wp-content/uploads/2024/03/diccionario-ingles-scaled.jpg',
  'cosmo-classroom.jpg':'https://academiacosmoschool.com/wp-content/uploads/2017/09/home4-gallery.jpg',
  'cosmo-learning.jpg':'https://academiacosmoschool.com/wp-content/uploads/2017/08/pexels-photo-40120-e1500018015404-1.jpg',
  'cosmo-cambridge.jpg':'https://academiacosmoschool.com/wp-content/uploads/2017/08/home-1-bg-e1503477367706-1516x652.jpg',
  'cosmo-abroad.webp':'https://academiacosmoschool.com/wp-content/uploads/2025/10/filters_quality70-1024x576.webp'
};

const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));

async function packageImage(name,url){
  const target=path.join(imgDir,name);
  try{
    const stat=await fs.stat(target);
    if(stat.size>8000)return;
  }catch{}

  let lastError;
  for(let attempt=1;attempt<=3;attempt++){
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),18000);
    try{
      const res=await fetch(url,{
        signal:controller.signal,
        redirect:'follow',
        headers:{
          'User-Agent':'Mozilla/5.0 (compatible; CosmoSchoolPrototype/7.0)',
          'Accept':'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'Referer':'https://academiacosmoschool.com/'
        }
      });
      if(!res.ok)throw new Error(`HTTP ${res.status}`);
      const type=res.headers.get('content-type')||'';
      if(!type.startsWith('image/'))throw new Error(`unexpected content-type ${type||'unknown'}`);
      const bytes=Buffer.from(await res.arrayBuffer());
      if(bytes.length<8000)throw new Error(`image is unexpectedly small (${bytes.length} bytes)`);
      await fs.writeFile(target,bytes);
      return;
    }catch(error){
      lastError=error;
      if(attempt<3)await sleep(600*attempt);
    }finally{
      clearTimeout(timer);
    }
  }
  throw new Error(`Could not package ${name} from Cosmo's official media: ${lastError?.message||'unknown error'}`);
}

await Promise.all(Object.entries(assets).map(([name,url])=>packageImage(name,url)));

const {pages}=await import(pathToFileURL(path.join(root,'src/site-v7.mjs')).href+`?v=${Date.now()}`);
await fs.rm(dist,{recursive:true,force:true});
await fs.mkdir(dist,{recursive:true});
await fs.cp(pub,dist,{recursive:true});
for(const [file,html] of Object.entries(pages)){
  const out=path.join(dist,file);
  await fs.mkdir(path.dirname(out),{recursive:true});
  await fs.writeFile(out,html);
}

console.log(`Built ${Object.keys(pages).length} routes + dedicated mobile + official Cosmo imagery + functional local lead capture v7 → dist/`);
