import fs from 'node:fs/promises';import path from 'node:path';import {pages} from '../src/site-v5.mjs';
const root=path.resolve('dist');let failed=false;
for(const [rel,html] of Object.entries(pages)){
 const h1=(html.match(/<h1[\s>]/g)||[]).length;if(h1!==2){console.error(`${rel}: expected desktop + mobile h1 (2), found ${h1}`);failed=true}
 for(const m of html.matchAll(/src="(\/[^\"]+)"/g)){const src=m[1];if(!src.startsWith('/images/')&&!src.startsWith('/app-')&&!src.startsWith('/styles-')&&!src.startsWith('/quality-'))continue;try{await fs.access(path.join(root,src))}catch{console.error(`${rel}: missing ${src}`);failed=true}}
 for(const m of html.matchAll(/href="(\/[^"#?]*)/g)){const href=m[1];let target;if(href==='/')target=path.join(root,'index.html');else if(href.endsWith('/'))target=path.join(root,href,'index.html');else continue;try{await fs.access(target)}catch{console.error(`${rel}: broken ${href}`);failed=true}}
 if(rel!=='legal/index.html'&&!html.includes('quality-v5.css')){console.error(`${rel}: quality layer missing`);failed=true}
}
for(const asset of ['styles-v3.css','app-v3.js','quality-v5.css','quality-v5.js']){try{await fs.access(path.join(root,asset))}catch{console.error(`missing ${asset}`);failed=true}}
for(const image of ['hero-cosmo.webp','book-red.webp','one-to-one.webp','online.webp','cambridge-dictionary.webp','abroad-cosmo.webp']){try{const s=await fs.stat(path.join(root,'images',image));if(s.size<8000)throw new Error('small')}catch{console.error(`missing/invalid image ${image}`);failed=true}}
const requiredBusinessSignals=['ENCUENTRA TU CAMINO','COMPARADOR DE FORMATOS','ANTES DEL EXAMEN','QUÉ SIGNIFICA “APRENDER USANDO”','MATRÍCULA / QUÉ PREPARAR','ANTES DE ESCRIBIR'];
const all=Object.values(pages).join('\n');for(const signal of requiredBusinessSignals){if(!all.includes(signal)){console.error(`missing business section: ${signal}`);failed=true}}
if(failed)process.exit(1);console.log(`QA passed: ${Object.keys(pages).length} routes, business decision components, dedicated mobile layouts, local imagery, quality layer v5 and internal links.`)
