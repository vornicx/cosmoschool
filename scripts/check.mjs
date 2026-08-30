import fs from 'node:fs/promises';
import path from 'node:path';

const root=path.resolve('dist');
let failed=false;
const fail=message=>{console.error(message);failed=true};

async function collectHtml(directory){
  const entries=await fs.readdir(directory,{withFileTypes:true});
  const nested=await Promise.all(entries.map(async entry=>{
    const absolute=path.join(directory,entry.name);
    if(entry.isDirectory())return collectHtml(absolute);
    return entry.name==='index.html'?[path.relative(root,absolute)]:[];
  }));
  return nested.flat();
}

const routeFiles=(await collectHtml(root)).sort();
if(routeFiles.length!==15)fail(`expected 15 routes, found ${routeFiles.length}`);

for(const rel of routeFiles){
  const html=await fs.readFile(path.join(root,rel),'utf8').catch(()=>null);
  if(!html){fail(`${rel}: output missing`);continue}
  const h1=(html.match(/<h1[\s>]/g)||[]).length;
  const isNew=rel==='test-de-nivel/index.html'||rel.startsWith('guias/');
  const expectedH1=rel==='gracias/index.html'||isNew?1:2;
  if(h1!==expectedH1)fail(`${rel}: expected ${expectedH1} h1, found ${h1}`);

  const css=html.match(/<link rel="stylesheet" href="(\/assets\/cosmo-[a-f0-9]{12}\.css)">/g)||[];
  const js=html.match(/<script src="(\/assets\/cosmo-[a-f0-9]{12}\.js)" defer><\/script>/g)||[];
  if(css.length!==1||js.length!==1)fail(`${rel}: expected one versioned CSS and one deferred JS bundle`);
  if(/\/(?:styles-v3|quality-v5|quality-v6|local-growth-v7|quality-v8|quality-v9)\.(?:css|js)/.test(html))fail(`${rel}: legacy asset request remains`);

  for(const m of html.matchAll(/(?:src|href)="(\/(?:assets|images)\/[^\"]+)"/g)){
    try{await fs.access(path.join(root,m[1]))}catch{fail(`${rel}: missing ${m[1]}`)}
  }
  for(const m of html.matchAll(/href="(\/[^"#?]*)/g)){
    const href=m[1];let target;
    if(href==='/')target=path.join(root,'index.html');
    else if(href.endsWith('/'))target=path.join(root,href,'index.html');
    else continue;
    try{await fs.access(target)}catch{fail(`${rel}: broken ${href}`)}
  }

  if(!/<meta name="description" content="[^"]{55,}">/.test(html))fail(`${rel}: route meta description missing or too short`);
  if(!/<link rel="canonical" href="https:\/\/academiacosmoschool\.com\/[^"]*">/.test(html))fail(`${rel}: canonical missing`);
  for(const signal of ['og:title','og:description','og:url','twitter:card','site.webmanifest'])if(!html.includes(signal))fail(`${rel}: discovery metadata missing ${signal}`);
  if(rel!=='gracias/index.html'&&(!html.includes('application/ld+json')||!html.includes('EducationalOrganization')||(!html.includes('BreadcrumbList')&&rel!=='index.html')))fail(`${rel}: structured data incomplete`);
  if(!html.includes('data-route='))fail(`${rel}: route context missing`);

  for(const image of html.matchAll(/<img[^>]+src="\/images\/(cosmo-[^"]+)"[^>]*>/g)){
    const tag=image[0];
    for(const attr of ['srcset=','sizes=','width=','height=','loading=','decoding="async"'])if(!tag.includes(attr))fail(`${rel}: responsive image missing ${attr}`);
    if(!tag.includes('.webp'))fail(`${rel}: non-WebP content image remains`);
  }
}

const assetsDir=path.join(root,'assets');
const bundleFiles=await fs.readdir(assetsDir).catch(()=>[]);
const cssFile=bundleFiles.find(file=>file.endsWith('.css'));
const jsFile=bundleFiles.find(file=>file.endsWith('.js'));
if(bundleFiles.length!==2||!cssFile||!jsFile)fail(`expected exactly two production bundles, found ${bundleFiles.join(', ')}`);
if(cssFile){const size=(await fs.stat(path.join(assetsDir,cssFile))).size;if(size>180000)fail(`CSS bundle too large: ${size} bytes`)}
if(jsFile){const size=(await fs.stat(path.join(assetsDir,jsFile))).size;if(size>70000)fail(`JS bundle too large: ${size} bytes`)}

for(const legacy of ['styles-v3.css','quality-v5.css','quality-v6.css','local-growth-v7.css','quality-v8.css','quality-v9.css','app-v3.js','quality-v5.js','quality-v6.js','local-growth-v7.js','quality-v8.js','quality-v9.js']){
  try{await fs.access(path.join(root,legacy));fail(`legacy deploy asset remains: ${legacy}`)}catch{}
}

const deployedImageFiles=await fs.readdir(path.join(root,'images'));
const derivativeBases=['cosmo-hero','cosmo-dictionary','cosmo-classroom','cosmo-learning','cosmo-cambridge','cosmo-abroad'];
for(const base of derivativeBases){
  const matches=deployedImageFiles.filter(file=>file.startsWith(`${base}-`)&&file.endsWith('.webp'));
  if(matches.length!==3)fail(`${base}: expected three responsive derivatives, found ${matches.length}`);
  for(const file of matches){const size=(await fs.stat(path.join(root,'images',file))).size;if(size<3000)fail(`${file}: optimized image unexpectedly small`)}
}
for(const original of ['cosmo-hero.png','cosmo-dictionary.jpg','cosmo-classroom.jpg','cosmo-learning.jpg','cosmo-cambridge.jpg','cosmo-abroad.webp']){
  try{await fs.access(path.join(root,'images',original));fail(`unoptimized original remains in deploy: ${original}`)}catch{}
}

const allHtml=(await Promise.all(routeFiles.map(file=>fs.readFile(path.join(root,file),'utf8')))).join('\n');
for(const signal of ['INGLÉS PARA','LA VIDA REAL.','¿Qué inglés necesitas ahora?','TU MEJOR PUNTO DE PARTIDA','2015','2</strong><span>Centros','GUÍAS PARA DECIDIR MEJOR','PREGUNTAS FRECUENTES','Test de nivel','B1 · B2 · C1 · C2','Orientación inicial'])if(!allHtml.includes(signal))fail(`missing v9 business signal: ${signal}`);
for(const signal of ['TEST ORIENTATIVO','data-level-test','Pregunta 1 de 8','Este resultado no es un certificado','Cómo elegir un curso de inglés','Cómo elegir qué examen Cambridge preparar','B1 o B2: qué cambia de verdad','Cómo preparar el speaking de Cambridge'])if(!allHtml.includes(signal))fail(`missing reach/content signal: ${signal}`);
for(const removed of ['class="qv5','class="v6-mobile','v7-seasonal','/images/hero-cosmo.webp','/images/book-red.webp','/__COSMO_'])if(allHtml.includes(removed))fail(`redundant or unresolved layer remains: ${removed}`);

for(const formName of ['cosmo-interest','cosmo-enrolment','cosmo-interest-mobile','cosmo-enrolment-mobile']){
  if(!allHtml.includes(`name="${formName}"`)||!allHtml.includes(`value="${formName}"`)||!allHtml.includes('data-netlify="true"')||!allHtml.includes('action="/gracias/"'))fail(`functional Netlify form missing/incomplete: ${formName}`);
}
for(const localSignal of ['C/ Merinos, 54','C/ Fuente Nueva, 2','OpeningHoursSpecification','areaServed','LocalBusiness','google.com/maps/dir/'])if(!allHtml.includes(localSignal))fail(`local discovery signal missing: ${localSignal}`);

const sitemap=await fs.readFile(path.join(root,'sitemap.xml'),'utf8').catch(()=>null);
const robots=await fs.readFile(path.join(root,'robots.txt'),'utf8').catch(()=>null);
const manifest=await fs.readFile(path.join(root,'site.webmanifest'),'utf8').catch(()=>null);
if(!sitemap||!sitemap.includes('/test-de-nivel/')||!sitemap.includes('/guias/preparar-speaking-cambridge/')||sitemap.includes('/gracias/'))fail('sitemap routes are incomplete or include the conversion confirmation page');
if(!robots?.includes('Sitemap: https://academiacosmoschool.com/sitemap.xml'))fail('robots.txt sitemap declaration missing');
if(!manifest?.includes('Cosmo School')||!manifest.includes('/favicon.svg'))fail('web manifest missing or icon invalid');
try{const favicon=await fs.readFile(path.join(root,'favicon.svg'),'utf8');if(!favicon.includes('#1737d1')||!favicon.includes('#f04438'))fail('brand favicon is invalid')}catch{fail('brand favicon missing')}

const netlify=await fs.readFile('netlify.toml','utf8');
if(!netlify.includes('X-Robots-Tag = "noindex, nofollow"'))fail('demo indexing safeguard missing');
if(!netlify.includes('for = "/assets/*"')||!netlify.includes('immutable'))fail('immutable bundle caching missing');

if(failed)process.exit(1);
console.log(`QA passed: ${routeFiles.length} routes, 2 hashed bundles, 18 responsive WebP assets, level orientation, 4 useful guides, local SEO, social metadata, sitemap, four Netlify forms and protected demo indexing.`);
