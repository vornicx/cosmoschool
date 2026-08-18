import { pages as basePages } from './site-v5.mjs';

const imageMap = {
  '/images/hero-cosmo.webp': '/images/cosmo-hero.png',
  '/images/book-red.webp': '/images/cosmo-dictionary.jpg',
  '/images/one-to-one.webp': '/images/cosmo-classroom.jpg',
  '/images/online.webp': '/images/cosmo-learning.jpg',
  '/images/cambridge-dictionary.webp': '/images/cosmo-cambridge.jpg',
  '/images/abroad-cosmo.webp': '/images/cosmo-abroad.webp'
};

const descriptions = {
  'index.html': 'Academia de inglés en Écija para niños desde 4 años, adolescentes y adultos. Clases presenciales, online, one to one y preparación Cambridge B1, B2, C1 y C2.',
  'cursos/index.html': 'Cursos de inglés de Cosmo School en Écija: niños, adolescentes y adultos, presencial, online, one to one e intensivos Cambridge.',
  'cambridge/index.html': 'Preparación Cambridge en Écija para B1, B2, C1 y C2 con curso regular e intensivos en Cosmo School.',
  'metodologia/index.html': 'Conoce el enfoque de Cosmo School para aprender inglés mediante comprensión, uso, práctica y seguimiento.',
  'sobre-nosotros/index.html': 'Cosmo School, academia de inglés en Écija desde 2015 y centro preparador de exámenes Cambridge.',
  'matricula/index.html': 'Información de matrícula de Cosmo School en Écija. El proceso de matriculación comienza a partir del 1 de abril.',
  'contacto/index.html': 'Contacta con Cosmo School en Écija por teléfono, WhatsApp o email y consulta sus dos centros y horario de recepción.',
  'legal/index.html': 'Información legal de la propuesta digital de Cosmo School.'
};

const routeNames = {
  'index.html': 'inicio',
  'cursos/index.html': 'cursos',
  'cambridge/index.html': 'cambridge',
  'metodologia/index.html': 'metodologia',
  'sobre-nosotros/index.html': 'sobre-nosotros',
  'matricula/index.html': 'matricula',
  'contacto/index.html': 'contacto',
  'legal/index.html': 'legal'
};

const mobileAddons = {
  'cambridge/index.html': `
<section class="v6-mobile v6-cambridge-next" aria-labelledby="v6-cambridge-title">
  <div class="v6-pad">
    <span class="v6-eyebrow">ANTES DE ELEGIR NIVEL</span>
    <h2 id="v6-cambridge-title">B1 no siempre es el siguiente paso.</h2>
    <div class="v6-level-strip" aria-label="Niveles Cambridge preparados por Cosmo"><span>B1</span><span>B2</span><span>C1</span><span>C2</span></div>
    <p>Tu examen objetivo debería depender de tu nivel real, del tiempo disponible y de para qué necesitas el certificado. Cosmo puede orientarte antes de elegir preparación.</p>
    <a class="v6-link" href="https://wa.me/34643349226?text=Hola%20Cosmo%20School.%20Quiero%20preparar%20Cambridge%20pero%20no%20sé%20qué%20nivel%20me%20corresponde.%20¿Podéis%20orientarme%3F" target="_blank">Consultar mi nivel <span aria-hidden="true">↗</span></a>
  </div>
</section>`,

  'metodologia/index.html': `
<section class="v6-mobile v6-method" aria-labelledby="v6-method-title">
  <div class="v6-pad">
    <span class="v6-eyebrow">MÉTODO / EN MOVIMIENTO</span>
    <h2 id="v6-method-title">Entender.<br>Usar.<br>Corregir.<br>Repetir.</h2>
    <p class="v6-intro">En móvil no repetimos el layout de escritorio: convertimos el método en una secuencia clara que explica qué debería ocurrir durante el aprendizaje.</p>
    <div class="v6-method-flow">
      <article class="v6-method-step"><b>01</b><div><h3>Input</h3><p>Escuchar y leer con contexto para construir vocabulario y estructuras que tengan sentido.</p></div></article>
      <article class="v6-method-step"><b>02</b><div><h3>Use</h3><p>Hablar y escribir para sacar el idioma del ejercicio y convertirlo en una herramienta.</p></div></article>
      <article class="v6-method-step"><b>03</b><div><h3>Feedback</h3><p>Detectar qué necesita atención y corregir con un siguiente objetivo concreto.</p></div></article>
      <article class="v6-method-step"><b>04</b><div><h3>Repeat</h3><p>Volver a utilizar lo aprendido en situaciones distintas hasta ganar soltura.</p></div></article>
    </div>
    <a class="v6-link light" href="/cursos/">Encontrar mi curso <span aria-hidden="true">↗</span></a>
  </div>
</section>`,

  'sobre-nosotros/index.html': `
<section class="v6-mobile v6-about" aria-labelledby="v6-about-title">
  <div class="v6-pad">
    <span class="v6-eyebrow">COSMO / ÉCIJA</span>
    <h2 id="v6-about-title">Una academia que ya tiene una historia.</h2>
    <p class="v6-intro">La propuesta visual puede ser nueva sin inventar el negocio. Estos son datos que Cosmo publica actualmente sobre su actividad.</p>
    <div class="v6-about-rail" role="list">
      <article class="v6-about-card" role="listitem"><small>TRAYECTORIA</small><b>2015</b><p>Cosmo comunica actividad en Écija desde 2015.</p></article>
      <article class="v6-about-card" role="listitem"><small>EDADES</small><b>4+</b><p>Oferta de inglés desde los cuatro años hasta adultos.</p></article>
      <article class="v6-about-card" role="listitem"><small>CAMBRIDGE</small><b>B1—C2</b><p>Preparación para cuatro niveles de certificación.</p></article>
    </div>
    <div class="v6-centres" aria-label="Centros Cosmo School">
      <a href="https://maps.google.com/?q=Calle+Merinos+54+Ecija" target="_blank"><small>01</small><strong>C/ Merinos, 54</strong><span aria-hidden="true">↗</span></a>
      <a href="https://maps.google.com/?q=Calle+Fuente+Nueva+2+Ecija" target="_blank"><small>02</small><strong>C/ Fuente Nueva, 2</strong><span aria-hidden="true">↗</span></a>
    </div>
  </div>
</section>`,

  'matricula/index.html': `
<section class="v6-mobile v6-enrol" aria-labelledby="v6-enrol-title">
  <div class="v6-pad">
    <span class="v6-eyebrow">MATRÍCULA / SIN FRICCIÓN</span>
    <h2 id="v6-enrol-title">Llega a la conversación con lo importante claro.</h2>
    <p class="v6-intro">No hace falta rellenar diez pantallas para empezar. Con cuatro datos la academia puede orientarte mucho mejor.</p>
    <div class="v6-enrol-list">
      <article class="v6-enrol-item"><span>01</span><div><strong>Edad</strong><p>Y curso escolar si se trata de un menor.</p></div></article>
      <article class="v6-enrol-item"><span>02</span><div><strong>Experiencia previa</strong><p>Nivel aproximado o cuánto tiempo llevas sin estudiar.</p></div></article>
      <article class="v6-enrol-item"><span>03</span><div><strong>Objetivo</strong><p>Inglés general, Cambridge, trabajo, estudios o flexibilidad.</p></div></article>
      <article class="v6-enrol-item"><span>04</span><div><strong>Disponibilidad</strong><p>Presencial, online, mañana o necesidad de intensivo.</p></div></article>
    </div>
    <div class="v6-enrol-date"><small>APERTURA PUBLICADA</small><strong>Matrícula desde el 1 de abril.</strong><p>Grupo, horario y plaza deben confirmarse directamente con Cosmo School.</p></div>
    <a class="v6-link" href="https://wa.me/34643349226?text=Hola%20Cosmo%20School.%20Quiero%20información%20para%20matricularme.%20Os%20puedo%20indicar%20edad%2C%20nivel%20aproximado%2C%20objetivo%20y%20disponibilidad." target="_blank">Empezar por WhatsApp <span aria-hidden="true">↗</span></a>
  </div>
</section>`,

  'contacto/index.html': `
<section class="v6-mobile v6-contact" aria-labelledby="v6-contact-title">
  <div class="v6-pad">
    <span class="v6-eyebrow">CONTACTO / ELIGE EL CANAL</span>
    <h2 id="v6-contact-title">Hablar con Cosmo debería ser lo más fácil de la web.</h2>
    <p class="v6-intro">Usa el canal que mejor encaje con tu consulta. Para pedir curso, incluye edad, objetivo y disponibilidad.</p>
    <div class="v6-contact-actions">
      <a href="tel:+34643349226"><b>01</b><strong>Llamar · 643 349 226</strong><span aria-hidden="true">↗</span></a>
      <a href="https://wa.me/34643349226?text=Hola%20Cosmo%20School.%20Quiero%20información%20sobre%20vuestros%20cursos." target="_blank"><b>02</b><strong>Abrir WhatsApp</strong><span aria-hidden="true">↗</span></a>
      <a href="mailto:cosmoschool2015@gmail.com"><b>03</b><strong>Enviar email</strong><span aria-hidden="true">↗</span></a>
    </div>
    <div class="v6-hours"><small>HORARIO DE RECEPCIÓN PUBLICADO</small><p><b>Martes—viernes</b><span>10:00—12:00</span></p><p><b>Lunes—viernes</b><span>16:00—20:00</span></p></div>
  </div>
</section>`
};

const organisation = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Cosmo School',
  description: 'Academia de inglés en Écija y centro preparador de exámenes Cambridge.',
  foundingDate: '2015',
  telephone: '+34643349226',
  email: 'cosmoschool2015@gmail.com',
  sameAs: [
    'https://www.instagram.com/cosmoschool2015/',
    'https://www.facebook.com/profile.php?id=100057386202789'
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'C/ Merinos, 54',
      postalCode: '41400',
      addressLocality: 'Écija',
      addressRegion: 'Sevilla',
      addressCountry: 'ES'
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'C/ Fuente Nueva, 2',
      postalCode: '41400',
      addressLocality: 'Écija',
      addressRegion: 'Sevilla',
      addressCountry: 'ES'
    }
  ]
};

const schema = `<script type="application/ld+json">${JSON.stringify(organisation)}</script>`;

const enhance = (source, file) => {
  let html = source;

  for (const [from, to] of Object.entries(imageMap)) html = html.replaceAll(from, to);

  const description = descriptions[file];
  if (description) {
    const meta = `<meta name="description" content="${description}">`;
    if (/<meta name="description" content="[^"]*">/.test(html)) html = html.replace(/<meta name="description" content="[^"]*">/, meta);
    else html = html.replace('</head>', `${meta}</head>`);
  }

  const route = routeNames[file] || 'page';
  const addon = mobileAddons[file] || '';

  html = html
    .replace('<body', `<body data-route="${route}"`)
    .replace('data-finder-result>', 'data-finder-result aria-live="polite">')
    .replace('</head>', `<link rel="stylesheet" href="/quality-v6.css">${schema}</head>`)
    .replace('</main>', `${addon}</main>`)
    .replace('</body>', '<script src="/quality-v6.js"></script></body>');

  return html;
};

export const pages = Object.fromEntries(
  Object.entries(basePages).map(([file, html]) => [file, enhance(html, file)])
);
