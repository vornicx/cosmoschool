import fs from 'node:fs/promises';
import path from 'node:path';
import {pages} from '../src/site.mjs';

const root=path.resolve('dist');
let failed=false;
for(const [rel,html] of Object.entries(pages)){
  const h1=(html.match(/<h1[\s>]/g)||[]).length;
  if(h1!==1){console.error(`${rel}: expected 1 h1, found ${h1}`);failed=true;}
  for(const match of html.matchAll(/src="(\/images\/[^\"]+)"/g)){
    const file=path.join(root,match[1]);
    try{await fs.access(file)}catch{console.error(`${rel}: missing asset ${match[1]}`);failed=true;}
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
if(failed) process.exit(1);
console.log(`QA passed: ${Object.keys(pages).length} routes, local assets and internal links verified.`);
