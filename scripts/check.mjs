import fs from 'node:fs/promises';
import path from 'node:path';
import {pages} from '../src/site-v7.mjs';

const root=path.resolve('dist');
let failed=false;

for(const [rel,html] of Object.entries(pages)){
  const h1=(html.match(/<h1[\s>]/g)||[]).length;
  const expectedH1=rel==='gracias/index.html'?1:2;
  if(h1!==expectedH1){console.error(`${rel}: expected ${expectedH1} h1, found ${h1}`);failed=true}
  for(const m of html.matchAll(/src="(\/[^\"]+)"/g)){
    const src=m[1];if(!src.startsWith('/images/')&&!src.startsWith('/app-')&&!src.startsWith('/styles-')&&!src.startsWith('/quality-')&&!src.startsWith('/local-growth-'))continue;
    try{await fs.access(path.join(root,src))}catch{console.error(`${rel}: missing ${src}`);failed=true}
  }
  for(const m of html.matchAll(/href="(\/[^"#?]*)/g)){
    const href=m[1];let target;if(href==='/')target=path.join(root,'index.html');else if(href.endsWith('/'))target=path.join(root,href,'index.html');else continue;
    try{await fs.access(target)}catch{console.error(`${rel}: broken ${href}`);failed=true}
  }
  if(!html.includes('quality-v5.css')||!html.includes('quality-v6.css')||!html.includes('local-growth-v7.css')){console.error(`${rel}: visual quality layers missing`);failed=true}
  if(rel!=='gracias/index.html'&&(!html.includes('application/ld+json')||!html.includes('EducationalOrganization'))){console.error(`${rel}: structured organisation data missing`);failed=true}
  if(!html.includes('data-route=')){console.error(`${rel}: route context missing`);failed=true}
  if(!/<meta name="description" content="[^"]{40,}">/.test(html)){console.error(`${rel}: route meta description missing/too short`);failed=true}
}

for(const asset of ['styles-v3.css','app-v3.js','quality-v5.css','quality-v5.js','quality-v6.css','quality-v6.js','local-growth-v7.css','local-growth-v7.js','local-growth-v7-mobile.css']){
  try{const s=await fs.stat(path.join(root,asset));if(s.size<500)throw new Error('small')}catch{console.error(`missing/invalid ${asset}`);failed=true}
}
const productionGrowthCss=await fs.readFile(path.join(root,'local-growth-v7.css'),'utf8').catch(()=>"");
for(const signal of ['.v7-mobile{display:none}','.v7-mnear','.v7-mform','.v7-desktop{display:none!important}']){
  if(!productionGrowthCss.includes(signal)){console.error(`purpose-built mobile growth style missing: ${signal}`);failed=true}
}

for(const image of ['cosmo-hero.png','cosmo-dictionary.jpg','cosmo-classroom.jpg','cosmo-learning.jpg','cosmo-cambridge.jpg','cosmo-abroad.webp']){
  try{const s=await fs.stat(path.join(root,'images',image));if(s.size<8000)throw new Error('small')}catch{console.error(`missing/invalid image ${image}`);failed=true}
}

const all=Object.values(pages).join('\n');
for(const signal of ['ENCUENTRA TU CAMINO','COMPARADOR DE FORMATOS','ANTES DEL EXAMEN','QUÉ SIGNIFICA “APRENDER USANDO”','MATRÍCULA / QUÉ PREPARAR','ANTES DE ESCRIBIR','MÉTODO / EN MOVIMIENTO','MATRÍCULA / SIN FRICCIÓN','CONTACTO / ELIGE EL CANAL','ACADEMIA DE INGLÉS EN ÉCIJA','QUIERO INFORMACIÓN','SOLICITUD DE MATRÍCULA','¿PARA QUÉ ESCRIBES?','CONSULTA ENVIADA','COSMO CERCA DE TI / ÉCIJA','QUIERO QUE ME ORIENTÉIS']){
  if(!all.includes(signal)){console.error(`missing business section: ${signal}`);failed=true}
}

for(const formName of ['cosmo-interest','cosmo-enrolment','cosmo-interest-mobile','cosmo-enrolment-mobile']){
  if(!all.includes(`name="${formName}"`)||!all.includes(`value="${formName}"`)||!all.includes('data-netlify="true"')||!all.includes('action="/gracias/"')){console.error(`functional Netlify form missing/incomplete: ${formName}`);failed=true}
}
for(const localSignal of ['C/ Merinos, 54','C/ Fuente Nueva, 2','OpeningHoursSpecification','areaServed','hasOfferCatalog','LocalBusiness','google.com/maps/dir/']){
  if(!all.includes(localSignal)){console.error(`local discovery signal missing: ${localSignal}`);failed=true}
}
for(const legacy of ['/images/hero-cosmo.webp','/images/book-red.webp','/images/one-to-one.webp','/images/online.webp','/images/cambridge-dictionary.webp','/images/abroad-cosmo.webp']){
  if(all.includes(legacy)){console.error(`legacy placeholder image remains in output: ${legacy}`);failed=true}
}
if(Object.keys(pages).length!==9){console.error(`expected 9 routes, found ${Object.keys(pages).length}`);failed=true}
if(failed)process.exit(1);
console.log(`QA passed: ${Object.keys(pages).length} routes, separate mobile lead journey, official imagery, local discovery, four functional Netlify forms, thank-you flow and structured data.`);
