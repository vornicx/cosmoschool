import { pages as basePages } from './site-v7.mjs';

const whatsapp = 'https://wa.me/34643349226?text=Hola%20Cosmo%20School.%20Quiero%20informaci%C3%B3n%20sobre%20qu%C3%A9%20curso%20encaja%20mejor%20conmigo.';

const removeSectionFamily = (html, className) =>
  html.replace(new RegExp(`<section class="${className}[\\s\\S]*?<\\/section>`, 'g'), '');

function refineShared(html) {
  html = removeSectionFamily(html, 'qv5');
  html = removeSectionFamily(html, 'v6-mobile');
  html = html
    .replace(/<body([^>]*)class="([^"]*)"([^>]*)>/, (_match, before, classes, after) => `<body${before}class="${`${classes} v8-ready`.trim()}"${after}>`)
    .replace('</head>', '<link rel="stylesheet" href="/quality-v8.css"></head>')
    .replace('</body>', '<script src="/quality-v8.js"></script></body>')
    .replaceAll('YOUR ENGLISH.<br><em>YOUR NEXT MOVE.</em>', 'TU INGLÉS.<br><em>TU SIGUIENTE PASO.</em>')
    .replaceAll('© 2026 Cosmo School · Propuesta digital', '© 2026 Cosmo School · Écija');
  return html;
}

function refineHome(html) {
  html = html
    .replace(/<section class="v7 v7-desktop v7-local"[\s\S]*?<\/section>/, '')
    .replace(/<section class="v7 v7-mobile v7-mnear"[\s\S]*?<\/section>/, '');
  html = html.replace(/<div class="v7-seasonal"[\s\S]*?<\/div>/, '');
  return html
    .replace('<h1><span>LEARN</span><span class="outline">FOR REAL.</span></h1>', '<h1><span>INGLÉS PARA</span><span class="outline">LA VIDA REAL.</span></h1>')
    .replace('Niños desde 4 años, adolescentes y adultos. Presencial, online, one to one y preparación oficial Cambridge B1–C2.', 'Desde los 4 años hasta Cambridge C2. Aprende con un plan que encaja contigo.')
    .replace('<a class="btn light" href="/matricula/">Solicitar información', '<a class="btn light" href="#encuentra-tu-curso">Encuentra tu curso')
    .replace('<a class="text-link light" href="/cursos/">Ver cursos ↗</a>', `<a class="text-link light" href="${whatsapp}" target="_blank" rel="noopener noreferrer">Hablar con Cosmo ↗</a>`)
    .replace('<section class="finder reveal" data-finder>', '<section class="finder reveal" id="encuentra-tu-curso" data-finder>')
    .replace('Cuéntanos qué necesitas.<br><em>Te orientamos en 20 segundos.</em>', '¿Qué inglés necesitas ahora?<br><em>Encuentra tu punto de partida.</em>')
    .replaceAll('<small>RECOMENDACIÓN</small>', '<small>TU MEJOR PUNTO DE PARTIDA</small>')
    .replace('<h2>No necesitas “más inglés”.<br>Necesitas preparar <em>tu nivel.</em></h2>', '<h2>Tu nivel.<br><em>Tu plan.</em></h2>')
    .replace('<h1>LEARN<br><span>FOR REAL.</span></h1>', '<h1>INGLÉS PARA<br><span>LA VIDA REAL.</span></h1>')
    .replace('Inglés para cada etapa. Desde 4 años hasta Cambridge C2.', 'Desde los 4 años hasta Cambridge C2. Un plan que encaja contigo.')
    .replace('<a href="/matricula/">Quiero información <b>↗</b></a>', '<a href="#encuentra-tu-curso-mobile">Encuentra tu curso <b>↗</b></a>')
    .replace('<section class="m-finder" data-finder>', '<section class="m-finder" id="encuentra-tu-curso-mobile" data-finder>')
    .replace('3 preguntas.<br>Una recomendación.', '¿Qué necesitas<br>ahora?');
}

function refineRoute(html, file) {
  html = refineShared(html);
  if (file === 'index.html') return refineHome(html);
  if (file === 'contacto/index.html') html = removeSectionFamily(html, 'v7');
  return html;
}

export const pages = Object.fromEntries(
  Object.entries(basePages).map(([file, html]) => [file, refineRoute(html, file)])
);
