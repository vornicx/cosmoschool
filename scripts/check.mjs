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
for(const asset of ['styles-v2.css','app-v2.js']){
  try{await fs.access(path.join(root,asset))}catch{console.error(`missing built asset: ${asset}`);failed=true;}
}
if(failed) process.exit(1);
console.log(`QA passed: ${Object.keys(pages).length} redesigned routes, assets and internal links verified.`);
