import fs from 'node:fs/promises';
import path from 'node:path';
import {pages} from '../src/site-v2.mjs';

const root=path.resolve('dist');
let failed=false;

for(const [rel,html] of Object.entries(pages)){
  const h1=(html.match(/<h1[\s>]/g)||[]).length;
  if(h1!==1){console.error(`${rel}: expected 1 h1, found ${h1}`);failed=true;}

  for(const match of html.matchAll(/src="(\/[^\"]+)"/g)){
    const src=match[1];
    if(!src.startsWith('/images/')&&!src.startsWith('/app-')&&!src.startsWith('/styles-')) continue;
    const file=path.join(root,src);
    try{await fs.access(file)}catch{console.error(`${rel}: missing asset ${src}`);failed=true;}
  }

  for(const match of html.matchAll(/href="(\/[^"#?]*)/g)){
    const href=match[1];
    let target;
    if(href==='/') target=path.join(root,'index.html');
    else if(href.endsWith('/')) target=path.join(root,href,'index.html');
    else continue;
    try{await fs.access(target)}catch{console.error(`${rel}: broken internal route ${href}`);failed=true;}
  }
}

for(const asset of ['styles-v2.css','app-v2.js','mobile-v4.css','mobile-v4.js']){
  try{
    const stat=await fs.stat(path.join(root,asset));
    if(stat.size<1000){console.error(`built asset too small: ${asset}`);failed=true;}
  }catch{console.error(`missing built asset: ${asset}`);failed=true;}
}

const mobileImages=['hero-cosmo.webp','book-red.webp','one-to-one.webp','online.webp','cambridge-dictionary.webp','abroad-cosmo.webp'];
for(const image of mobileImages){
  try{
    const stat=await fs.stat(path.join(root,'images',image));
    if(stat.size<8000){console.error(`mobile image too small: ${image}`);failed=true;}
  }catch{console.error(`missing mobile image: ${image}`);failed=true;}
}

const app=await fs.readFile(path.join(root,'app-v2.js'),'utf8').catch(()=>"");
if(!app.includes("max-width: 820px")||!app.includes('/mobile-v4.js')){
  console.error('mobile application loader is missing');failed=true;
}

const mobileRuntime=await fs.readFile(path.join(root,'mobile-v4.js'),'utf8').catch(()=>"");
for(const route of ["'/'","'/cursos'","'/cambridge'","'/metodologia'","'/sobre-nosotros'","'/matricula'","'/contacto'","'/legal'"]){
  if(!mobileRuntime.includes(route)){console.error(`mobile runtime missing route ${route}`);failed=true;}
}

if(failed) process.exit(1);
console.log(`QA passed: ${Object.keys(pages).length} desktop routes + dedicated mobile application, local imagery and internal links verified.`);
