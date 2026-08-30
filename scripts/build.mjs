import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {gunzipSync} from 'node:zlib';
import {pathToFileURL} from 'node:url';

const require=createRequire(import.meta.url);
const sharp=require('sharp');

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
  try{const stat=await fs.stat(target);if(stat.size>8000)return}catch{}
  let lastError;
  for(let attempt=1;attempt<=3;attempt++){
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),18000);
    try{
      const res=await fetch(url,{signal:controller.signal,redirect:'follow',headers:{'User-Agent':'Mozilla/5.0 (compatible; CosmoSchoolPrototype/7.0)','Accept':'image/avif,image/webp,image/apng,image/*,*/*;q=0.8','Referer':'https://academiacosmoschool.com/'}});
      if(!res.ok)throw new Error(`HTTP ${res.status}`);
      const type=res.headers.get('content-type')||'';if(!type.startsWith('image/'))throw new Error(`unexpected content-type ${type||'unknown'}`);
      const bytes=Buffer.from(await res.arrayBuffer());if(bytes.length<8000)throw new Error(`image is unexpectedly small (${bytes.length} bytes)`);
      await fs.writeFile(target,bytes);return;
    }catch(error){lastError=error;if(attempt<3)await sleep(600*attempt)}finally{clearTimeout(timer)}
  }
  throw new Error(`Could not package ${name} from Cosmo's official media: ${lastError?.message||'unknown error'}`);
}

await Promise.all(Object.entries(assets).map(([name,url])=>packageImage(name,url)));

const responsiveProfiles={
  'cosmo-hero.png':{base:'cosmo-hero',widths:[480,768,1280]},
  'cosmo-dictionary.jpg':{base:'cosmo-dictionary',widths:[480,768,1280]},
  'cosmo-classroom.jpg':{base:'cosmo-classroom',widths:[480,768,1280]},
  'cosmo-learning.jpg':{base:'cosmo-learning',widths:[480,768,1280]},
  'cosmo-cambridge.jpg':{base:'cosmo-cambridge',widths:[480,768,1280]},
  'cosmo-abroad.webp':{base:'cosmo-abroad',widths:[480,768,1024]}
};

await Promise.all(Object.entries(responsiveProfiles).flatMap(([source,{base,widths}])=>widths.map(async width=>{
  const output=path.join(imgDir,`${base}-${width}.webp`);
  await sharp(path.join(imgDir,source)).rotate().resize({width,withoutEnlargement:true}).webp({quality:78,effort:4,smartSubsample:true}).toFile(output);
})));

const {pages}=await import(pathToFileURL(path.join(root,'src/site-v9.mjs')).href+`?v=${Date.now()}`);
await fs.rm(dist,{recursive:true,force:true});
await fs.mkdir(dist,{recursive:true});
await fs.cp(pub,dist,{recursive:true});

const cssSources=['styles-v3.css','quality-v5.css','quality-v6.css','local-growth-v7.css','local-growth-v7-mobile.css','quality-v8.css','quality-v9.css'];
const jsSources=['app-v3.js','quality-v5.js','quality-v6.js','local-growth-v7.js','quality-v8.js','quality-v9.js'];
const cssBundle=(await Promise.all(cssSources.map(async file=>`/* ${file} */\n${await fs.readFile(path.join(pub,file),'utf8')}`))).join('\n');
const jsBundle=(await Promise.all(jsSources.map(async file=>`/* ${file} */\n${await fs.readFile(path.join(pub,file),'utf8')}`))).join('\n;');
const cssHash=createHash('sha256').update(cssBundle).digest('hex').slice(0,12);
const jsHash=createHash('sha256').update(jsBundle).digest('hex').slice(0,12);
const cssAsset=`cosmo-${cssHash}.css`;
const jsAsset=`cosmo-${jsHash}.js`;
await fs.mkdir(path.join(dist,'assets'),{recursive:true});
await Promise.all([
  fs.writeFile(path.join(dist,'assets',cssAsset),cssBundle),
  fs.writeFile(path.join(dist,'assets',jsAsset),jsBundle)
]);

const generatedInputs=[...cssSources,...jsSources,'styles.css','styles-v2.css','app.js','app-v2.js'];
await Promise.all(generatedInputs.map(file=>fs.rm(path.join(dist,file),{force:true})));
await Promise.all(Object.keys(assets).map(file=>fs.rm(path.join(dist,'images',file),{force:true})));
await fs.rm(path.join(dist,'images','logo-web.webp'),{force:true});

for(const [file,html] of Object.entries(pages)){
  const outputHtml=html
    .replaceAll('/__COSMO_CSS__',`/assets/${cssAsset}`)
    .replaceAll('/__COSMO_JS__',`/assets/${jsAsset}`)
    .replace('<link rel="icon" href="data:,">','<link rel="icon" type="image/svg+xml" href="/favicon.svg">')
    .replace('</head>','<link rel="manifest" href="/site.webmanifest"><meta name="apple-mobile-web-app-capable" content="yes"></head>');
  const out=path.join(dist,file);await fs.mkdir(path.dirname(out),{recursive:true});await fs.writeFile(out,outputHtml);
}

const publicRoutes=Object.keys(pages).filter(file=>file!=='gracias/index.html').map(file=>file==='index.html'?'':file.replace(/index\.html$/,''));
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicRoutes.map(route=>`  <url><loc>https://academiacosmoschool.com/${route}</loc></url>`).join('\n')}\n</urlset>\n`;
const manifest={name:'Cosmo School · Academia de inglés en Écija',short_name:'Cosmo School',start_url:'/',display:'standalone',background_color:'#ffffff',theme_color:'#1737d1',lang:'es',icons:[{src:'/favicon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]};
await Promise.all([
  fs.writeFile(path.join(dist,'sitemap.xml'),sitemap),
  fs.writeFile(path.join(dist,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://academiacosmoschool.com/sitemap.xml\n'),
  fs.writeFile(path.join(dist,'site.webmanifest'),JSON.stringify(manifest))
]);

const deployedImages=await fs.readdir(path.join(dist,'images'));
const deployedBytes=(await Promise.all(deployedImages.map(async file=>(await fs.stat(path.join(dist,'images',file))).size))).reduce((sum,size)=>sum+size,0);
await fs.writeFile(path.join(root,'src/site-v3.mjs'),'PLACEHOLDER');
console.log(`Built ${Object.keys(pages).length} routes · 1 versioned CSS + 1 deferred JS · ${deployedImages.length} optimized images (${Math.round(deployedBytes/1024)} KB) · sitemap + structured data + Netlify lead capture v9 → dist/`);
