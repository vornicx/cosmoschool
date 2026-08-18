import fs from 'node:fs/promises';
import path from 'node:path';
import {pages} from '../src/site.mjs';
const root=path.resolve('.');
const dist=path.join(root,'dist');
await fs.rm(dist,{recursive:true,force:true});
await fs.mkdir(dist,{recursive:true});
await fs.cp(path.join(root,'public'),dist,{recursive:true});
for(const [file,html] of Object.entries(pages)){
 const out=path.join(dist,file); await fs.mkdir(path.dirname(out),{recursive:true}); await fs.writeFile(out,html);
}
console.log(`Built ${Object.keys(pages).length} pages → dist/`);
