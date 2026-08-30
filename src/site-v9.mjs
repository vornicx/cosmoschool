import { pages as basePages } from './site-v8.mjs';

const origin = 'https://academiacosmoschool.com';
const whatsapp = 'https://wa.me/34643349226?text=Hola%20Cosmo%20School.%20Quiero%20que%20me%20orient%C3%A9is%20sobre%20el%20curso%20que%20mejor%20encaja.';
const officialCambridge = 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/preparation/';

const routeMeta = {
  'index.html': ['/', 'Academia de inglés en Écija | Cosmo School', 'Academia de inglés en Écija para niños desde 4 años, adolescentes y adultos. Presencial, online, one to one y Cambridge B1, B2, C1 y C2.'],
  'cursos/index.html': ['/cursos/', 'Cursos de inglés en Écija | Cosmo School', 'Cursos de inglés en Écija para niños, adolescentes y adultos: presencial, online, clases one to one, intensivos y preparación Cambridge.'],
  'cambridge/index.html': ['/cambridge/', 'Preparación Cambridge en Écija B1–C2 | Cosmo School', 'Preparación de exámenes Cambridge en Écija para B1, B2, C1 y C2 con curso regular e intensivos en Cosmo School.'],
  'metodologia/index.html': ['/metodologia/', 'Método para aprender inglés | Cosmo School Écija', 'Conoce el enfoque de Cosmo School: comprensión, uso real del inglés, práctica, corrección y seguimiento en cada etapa.'],
  'sobre-nosotros/index.html': ['/sobre-nosotros/', 'Cosmo School | Academia de inglés en Écija desde 2015', 'Conoce Cosmo School, academia de inglés en Écija desde 2015, con dos centros y preparación de exámenes Cambridge B1–C2.'],
  'matricula/index.html': ['/matricula/', 'Matrícula y solicitud de plaza | Cosmo School Écija', 'Solicita información de matrícula en Cosmo School Écija. Indica edad, objetivo, formato y sede para recibir una orientación más útil.'],
  'contacto/index.html': ['/contacto/', 'Contacto y centros | Cosmo School Écija', 'Contacta con Cosmo School por teléfono, WhatsApp o email. Consulta los dos centros en Écija y el horario de recepción.'],
  'legal/index.html': ['/legal/', 'Información legal | Cosmo School', 'Información legal, privacidad y condiciones relacionadas con la propuesta digital de Cosmo School.'],
  'gracias/index.html': ['/gracias/', 'Consulta enviada | Cosmo School', 'Tu consulta se ha enviado a Cosmo School. Puedes añadir contexto por WhatsApp o volver a explorar los cursos.'],
  'test-de-nivel/index.html': ['/test-de-nivel/', 'Test de nivel de inglés orientativo | Cosmo School Écija', 'Haz un test breve de nivel de inglés y obtén una orientación inicial A1–C1 antes de hablar con Cosmo School en Écija.'],
  'guias/index.html': ['/guias/', 'Guías para aprender inglés y preparar Cambridge | Cosmo School', 'Guías prácticas de Cosmo School para elegir curso, orientar tu nivel y preparar exámenes Cambridge con un plan realista.'],
  'guias/elegir-curso-ingles/index.html': ['/guias/elegir-curso-ingles/', 'Cómo elegir un curso de inglés | Guía Cosmo School', 'Qué mirar antes de elegir un curso de inglés: edad, objetivo, nivel, formato, disponibilidad y tipo de acompañamiento.'],
  'guias/elegir-examen-cambridge/index.html': ['/guias/elegir-examen-cambridge/', 'Cómo elegir examen Cambridge: B1, B2, C1 o C2', 'Guía para elegir el nivel Cambridge adecuado según tu punto de partida, objetivo, tiempo disponible y preparación real.'],
  'guias/diferencias-b1-b2/index.html': ['/guias/diferencias-b1-b2/', 'Diferencias entre B1 y B2 de inglés | Cosmo School', 'Entiende las diferencias prácticas entre B1 y B2 y qué conviene valorar antes de preparar un examen Cambridge.'],
  'guias/preparar-speaking-cambridge/index.html': ['/guias/preparar-speaking-cambridge/', 'Cómo preparar el speaking de Cambridge | Cosmo School', 'Rutina práctica para preparar el speaking de Cambridge: fluidez, interacción, precisión, grabación y práctica con propósito.']
};

const routeLabels = {
  cursos: 'Cursos', cambridge: 'Cambridge', metodologia: 'Método', 'sobre-nosotros': 'Nosotros', matricula: 'Matrícula', contacto: 'Contacto', legal: 'Legal', gracias: 'Consulta enviada',
  'test-de-nivel': 'Test de nivel', guias: 'Guías', 'elegir-curso-ingles': 'Elegir curso', 'elegir-examen-cambridge': 'Elegir examen Cambridge', 'diferencias-b1-b2': 'B1 o B2', 'preparar-speaking-cambridge': 'Preparar speaking'
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${origin}/#organization`,
  name: 'Cosmo School',
  url: `${origin}/`,
  telephone: '+34643349226',
  email: 'cosmoschool2015@gmail.com',
  foundingDate: '2015',
  areaServed: { '@type': 'City', name: 'Écija' },
  location: [
    { '@type': 'Place', name: 'Cosmo School · Merinos', address: { '@type': 'PostalAddress', streetAddress: 'C/ Merinos, 54', postalCode: '41400', addressLocality: 'Écija', addressRegion: 'Sevilla', addressCountry: 'ES' } },
    { '@type': 'Place', name: 'Cosmo School · Fuente Nueva', address: { '@type': 'PostalAddress', streetAddress: 'C/ Fuente Nueva, 2', postalCode: '41400', addressLocality: 'Écija', addressRegion: 'Sevilla', addressCountry: 'ES' } }
  ],
  sameAs: ['https://www.instagram.com/cosmoschool2015/', 'https://www.facebook.com/profile.php?id=100057386202789']
};

const imageData = {
  'cosmo-hero.png': ['cosmo-hero', 1516, 652],
  'cosmo-dictionary.jpg': ['cosmo-dictionary', 2560, 1707],
  'cosmo-classroom.jpg': ['cosmo-classroom', 1600, 1066],
  'cosmo-learning.jpg': ['cosmo-learning', 1535, 1024],
  'cosmo-cambridge.jpg': ['cosmo-cambridge', 1516, 652],
  'cosmo-abroad.webp': ['cosmo-abroad', 1024, 576]
};

const nav = `<nav><a href="/cursos/">Cursos</a><a href="/cambridge/">Cambridge</a><a href="/metodologia/">Método</a><a href="/sobre-nosotros/">Nosotros</a><a href="/test-de-nivel/">Test de nivel</a><a href="/matricula/">Matrícula</a></nav>`;

function improveNavigation(html) {
  html = html
    .replace(/<nav><a href="\/cursos\/">Cursos<\/a>[\s\S]*?<\/nav>/, nav)
    .replace(/<a class="cta-chip" href="\/matricula\/">Matrícula /, '<a class="cta-chip" href="/test-de-nivel/">Orientación ')
    .replace('<a href="/matricula/" class="primary"><span>02</span>Matrícula</a>', '<a href="/test-de-nivel/" class="primary"><span>02</span>Nivel</a>')
    .replace('<a href="/cambridge/"><small>03</small><span>Cambridge</span><b>↗</b></a>', '<a href="/cambridge/"><small>03</small><span>Cambridge</span><b>↗</b></a><a href="/test-de-nivel/"><small>04</small><span>Test de nivel</span><b>↗</b></a><a href="/guias/"><small>05</small><span>Guías</span><b>↗</b></a>')
    .replace('<a href="/metodologia/"><small>04</small>', '<a href="/metodologia/"><small>06</small>')
    .replace('<a href="/sobre-nosotros/"><small>05</small>', '<a href="/sobre-nosotros/"><small>07</small>')
    .replace('<a href="/matricula/"><small>06</small>', '<a href="/matricula/"><small>08</small>')
    .replace('<a href="/contacto/"><small>07</small>', '<a href="/contacto/"><small>09</small>')
    .replace('<a href="/metodologia/">Método</a></div>', '<a href="/metodologia/">Método</a><a href="/guias/">Guías</a><a href="/test-de-nivel/">Test de nivel</a></div>')
    .replace('<a class="btn light" href="/matricula/">Solicitar información ', '<a class="btn light" href="/test-de-nivel/">Orientación inicial ');
  return html;
}

const rawHome = improveNavigation(basePages['index.html']);
const sharedHeader = rawHome.match(/<header class="top"[\s\S]*?<\/header>/)?.[0] || '';
const sharedEnding = rawHome.match(/<footer class="foot"[\s\S]*?<\/footer><nav class="mobile-dock"[\s\S]*?<\/nav>/)?.[0] || '';

const jsonLd = data => `<script type="application/ld+json">${JSON.stringify(data)}</script>`;

function breadcrumbSchema(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  const items = [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${origin}/` }];
  let path = '';
  parts.forEach((part, index) => {
    path += `/${part}`;
    items.push({ '@type': 'ListItem', position: index + 2, name: routeLabels[part] || part, item: `${origin}${path}/` });
  });
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

function routeSeo(html, file) {
  const [pathname, title, description] = routeMeta[file];
  const canonical = `${origin}${pathname}`;
  html = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`)
    .replace(/<link rel="canonical"[^>]*>/g, '')
    .replace(/<meta (?:property|name)="(?:og:|twitter:)[^>]+>/g, '');
  const social = `<link rel="canonical" href="${canonical}"><meta property="og:locale" content="es_ES"><meta property="og:type" content="${file.startsWith('guias/') && file !== 'guias/index.html' ? 'article' : 'website'}"><meta property="og:site_name" content="Cosmo School"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin}/images/cosmo-hero-1280.webp"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}">`;
  const breadcrumb = pathname === '/' ? '' : jsonLd(breadcrumbSchema(pathname));
  return html.replace('</head>', `${social}${breadcrumb}</head>`);
}

function bundleAssets(html) {
  html = html
    .replace(/<link rel="stylesheet" href="\/(?:styles-v3|quality-v5|quality-v6|local-growth-v7|quality-v8)\.css">/g, '')
    .replace(/<script src="\/(?:app-v3|quality-v5|quality-v6|local-growth-v7|quality-v8)\.js"><\/script>/g, '');
  html = html.replace('</head>', '<link rel="stylesheet" href="/__COSMO_CSS__"></head>');
  return html.replace('</body>', '<script src="/__COSMO_JS__" defer></script></body>');
}

function responsiveImages(html) {
  let first = true;
  return html.replace(/<img src="\/images\/(cosmo-[^"]+)"([^>]*)>/g, (match, filename, rest) => {
    const data = imageData[filename];
    if (!data) return match;
    const [base, width, height] = data;
    const max = width <= 1024 ? 1024 : 1280;
    const widths = [480, 768, max].filter((value, index, list) => value <= width && list.indexOf(value) === index);
    const srcset = widths.map(value => `/images/${base}-${value}.webp ${value}w`).join(', ');
    const primary = first;
    first = false;
    return `<img src="/images/${base}-${widths.at(-1)}.webp" srcset="${srcset}" sizes="(max-width:820px) 100vw, 56vw" width="${width}" height="${height}" loading="${primary ? 'eager' : 'lazy'}"${primary ? ' fetchpriority="high"' : ''} decoding="async"${rest}>`;
  });
}

const homeProof = `<div class="v9-proof-rail" aria-label="Datos de Cosmo School"><div><strong>2015</strong><span>En Écija desde</span></div><div><strong>2</strong><span>Centros en la ciudad</span></div><div><strong>4+</strong><span>Desde cuatro años</span></div><div><strong>B1—C2</strong><span>Preparación Cambridge</span></div></div>`;
const mobileProof = `<div class="v9-proof-rail" aria-label="Datos de Cosmo School"><div><strong>2015</strong><span>En Écija desde</span></div><div><strong>2</strong><span>Centros</span></div><div><strong>4+</strong><span>Desde cuatro años</span></div><div><strong>B1—C2</strong><span>Cambridge</span></div></div>`;

const homeGuides = `<section class="v9-home-guides" aria-labelledby="v9-guides-title"><div class="v9-wrap"><div class="v9-section-head"><small>GUÍAS PARA DECIDIR MEJOR</small><h2 id="v9-guides-title">Respuestas útiles antes de matricularte.</h2><a href="/guias/">Ver todas las guías ↗</a></div><div class="v9-guide-rows"><a href="/guias/elegir-curso-ingles/"><span>01</span><strong>Cómo elegir un curso de inglés</strong><em>Edad · objetivo · formato</em><b>→</b></a><a href="/guias/elegir-examen-cambridge/"><span>02</span><strong>Qué examen Cambridge preparar</strong><em>B1 · B2 · C1 · C2</em><b>→</b></a><a href="/guias/preparar-speaking-cambridge/"><span>03</span><strong>Cómo practicar el speaking</strong><em>Rutina · feedback · confianza</em><b>→</b></a></div></div></section>`;

const homeFaq = `<section class="v9-faq" aria-labelledby="v9-faq-title"><div class="v9-wrap v9-faq-grid"><div><small>PREGUNTAS FRECUENTES</small><h2 id="v9-faq-title">Lo importante, sin letra pequeña.</h2><p>Si tu caso es distinto, cuéntanoslo y te orientamos antes de elegir.</p><a href="${whatsapp}" target="_blank" rel="noopener noreferrer">Preguntar por WhatsApp ↗</a></div><div class="v9-faq-list"><details><summary>¿Necesito saber mi nivel?</summary><p>No. El test de esta web ofrece una primera orientación y Cosmo puede valorar contigo el punto de partida antes de cerrar grupo.</p></details><details><summary>¿Hay cursos para niños y adultos?</summary><p>Sí. Cosmo publica clases desde los 4 años, para adolescentes y para adultos, con distintos formatos.</p></details><details><summary>¿Qué niveles Cambridge prepara Cosmo?</summary><p>La oferta publicada incluye B1, B2, C1 y C2, mediante curso regular e intensivos.</p></details><details><summary>¿Dónde están los centros?</summary><p>En C/ Merinos, 54 y C/ Fuente Nueva, 2, ambos en Écija.</p></details></div></div></section>`;

function improveHome(html) {
  html = html
    .replace('</div></section><section class="quick-strip">', `</div></section>${homeProof}<section class="quick-strip">`)
    .replace('<small>PARA FAMILIAS</small><b>Inglés desde 4 años</b>', '<small>PARA MI HIJO/A</small><b>Inglés desde 4 años</b>')
    .replace('<small>PARA ADULTOS</small><b>Presencial · Online · 1:1</b>', '<small>PARA MÍ</small><b>Presencial · Online · 1:1</b>')
    .replace('<small>OBJETIVO EXAMEN</small><b>Cambridge B1–C2</b>', '<small>PREPARAR CAMBRIDGE</small><b>B1 · B2 · C1 · C2</b>')
    .replace('</div></section><section class="m-needs">', `</div></section>${mobileProof}<section class="m-needs">`)
    .replace('<section class="v7 v7-desktop v7-capture"', `${homeGuides}${homeFaq}<section class="v7 v7-desktop v7-capture"`);
  return html;
}

const cambridgeGuides = `<section class="v9-cambridge-guides"><div class="v9-wrap"><div class="v9-section-head"><small>ANTES DE ELEGIR EXAMEN</small><h2>Tu nivel objetivo necesita contexto.</h2><a href="/test-de-nivel/">Hacer orientación inicial ↗</a></div><div class="v9-guide-rows"><a href="/guias/elegir-examen-cambridge/"><span>01</span><strong>Cómo elegir nivel</strong><em>Punto de partida y objetivo</em><b>→</b></a><a href="/guias/diferencias-b1-b2/"><span>02</span><strong>B1 o B2: qué cambia</strong><em>Uso real, no solo etiqueta</em><b>→</b></a><a href="/guias/preparar-speaking-cambridge/"><span>03</span><strong>Preparar el speaking</strong><em>Una rutina sostenible</em><b>→</b></a></div></div></section>`;

function improveExisting(html, file) {
  html = improveNavigation(html);
  if (file === 'index.html') html = improveHome(html);
  if (file === 'cambridge/index.html') html = html.replace('</main>', `${cambridgeGuides}</main>`);
  if (file === 'cursos/index.html') html = html.replace('</main>', `<section class="v9-inline-cta"><div><small>¿NO SABES POR DÓNDE EMPEZAR?</small><h2>Haz una orientación inicial de nivel.</h2><a href="/test-de-nivel/">Empezar el test ↗</a></div></section></main>`);
  return html;
}

function pageShell(route, main, extraSchema = '') {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#1737d1"><meta name="description" content=""><title>Cosmo School</title><link rel="icon" href="data:,">${jsonLd(organizationSchema)}${extraSchema}</head><body data-route="${route}" class="v8-ready v9-ready">${sharedHeader}<main>${main}</main>${sharedEnding}</body></html>`;
}

const visibleBreadcrumb = items => `<nav class="v9-breadcrumb" aria-label="Migas de pan"><a href="/">Inicio</a>${items.map(([href, label], index) => `<span aria-hidden="true">/</span>${index === items.length - 1 ? `<span aria-current="page">${label}</span>` : `<a href="${href}">${label}</a>`}`).join('')}</nav>`;

const testQuestions = [
  ['I ___ from Écija.', ['am', 'is', 'are']],
  ['She ___ coffee every morning.', ['drink', 'drinks', 'drinking']],
  ['We ___ there last Saturday.', ['went', 'go', 'have go']],
  ["I've lived here ___ 2020.", ['for', 'since', 'during']],
  ["If I ___ more time, I'd practise every day.", ['have', 'will have', 'had']],
  ['The meeting ___ by the time we arrived.', ['had finished', 'has finished', 'finishes']],
  ['Hardly ___ the room when the phone rang.', ['I had left', 'had I left', 'did I left']],
  ['Her explanation was so ___ that nobody challenged it.', ['compelling', 'compelled', 'compel']]
];

const testMain = `${visibleBreadcrumb([['/test-de-nivel/', 'Test de nivel']])}<section class="v9-test-hero"><div><small>ORIENTACIÓN INICIAL · 8 PREGUNTAS</small><h1>¿Cuál puede ser tu punto de partida?</h1><p>Una comprobación breve de gramática y vocabulario para orientar la conversación. No sustituye una evaluación completa de speaking, listening, reading y writing.</p><div class="v9-test-trust"><span>Sin registro</span><span>Resultado inmediato</span><span>≈ 4 minutos</span></div></div><aside><strong>A1</strong><strong>A2</strong><strong>B1</strong><strong>B2</strong><strong>C1</strong></aside></section><section class="v9-test-wrap"><div class="v9-test-intro"><small>TEST ORIENTATIVO</small><h2>Elige una respuesta en cada paso.</h2><p>Si dudas, marca la que te parezca más natural. El resultado servirá para iniciar la orientación, no para certificar un nivel.</p></div><form class="v9-level-test" data-level-test>${testQuestions.map((question, index) => `<fieldset data-question><legend><span>${String(index + 1).padStart(2, '0')}</span>${question[0]}</legend><div>${question[1].map((answer, answerIndex) => `<label><input type="radio" name="q${index + 1}" value="${answerIndex}" required><span>${answer}</span></label>`).join('')}</div></fieldset>`).join('')}<div class="v9-test-controls"><button type="button" data-test-back>Anterior</button><span data-test-progress aria-live="polite">Pregunta 1 de 8</span><button type="button" data-test-next>Siguiente</button><button type="submit" data-test-submit>Ver mi orientación</button></div><p class="v9-test-error" data-test-error role="alert"></p></form><section class="v9-test-result" data-test-result hidden aria-live="polite"><small>TU ORIENTACIÓN INICIAL</small><strong data-level-result>—</strong><h2 data-level-title>Tu siguiente paso</h2><p data-level-copy></p><div><a data-level-cta href="/matricula/">Pedir orientación a Cosmo ↗</a><button type="button" data-test-restart>Repetir test</button></div><small>Este resultado no es un certificado ni una prueba oficial. Cosmo puede completar la orientación con tu objetivo, edad, experiencia y destrezas comunicativas.</small></section></section><section class="v9-test-next"><div><small>EL NIVEL NO LO ES TODO</small><h2>Edad, objetivo y tiempo también cambian la recomendación.</h2></div><a href="/cursos/">Comparar cursos ↗</a><a href="${whatsapp}" target="_blank" rel="noopener noreferrer">Hablar con Cosmo ↗</a></section>`;

const guideCards = [
  ['/guias/elegir-curso-ingles/', '01', 'Elegir curso', 'Cómo combinar edad, objetivo, formato y disponibilidad sin complicar la decisión.', 'DECISIÓN'],
  ['/guias/elegir-examen-cambridge/', '02', 'Elegir examen Cambridge', 'B1, B2, C1 o C2: empieza por tu nivel real y por qué necesitas el certificado.', 'CAMBRIDGE'],
  ['/guias/diferencias-b1-b2/', '03', 'Diferencias entre B1 y B2', 'Una comparación práctica para entender qué cambia en el uso cotidiano del inglés.', 'NIVELES'],
  ['/guias/preparar-speaking-cambridge/', '04', 'Preparar el speaking', 'Una rutina de práctica, grabación y feedback que se puede mantener cada semana.', 'PRÁCTICA']
];

const guidesMain = `${visibleBreadcrumb([['/guias/', 'Guías']])}<section class="v9-page-hero v9-page-hero-blue"><div><small>RECURSOS COSMO</small><h1>Guías para avanzar con criterio.</h1><p>Contenido práctico para elegir curso, entender niveles y preparar Cambridge sin convertir la decisión en un laberinto.</p></div><aside><span>Elegir</span><span>Practicar</span><span>Avanzar</span></aside></section><section class="v9-guides-index"><div class="v9-guide-rows">${guideCards.map(([href, number, title, text, topic]) => `<a href="${href}"><span>${number}</span><strong>${title}</strong><em>${text}</em><small>${topic}</small><b>→</b></a>`).join('')}</div></section><section class="v9-source-note"><div><small>UNA REFERENCIA MÁS</small><h2>También puedes consultar recursos oficiales.</h2><p>Cambridge English publica actividades, pruebas de muestra y materiales de preparación por nivel.</p></div><a href="${officialCambridge}" target="_blank" rel="noopener noreferrer">Recursos oficiales Cambridge ↗</a></section>`;

const guideContent = {
  'guias/elegir-curso-ingles/index.html': {
    slug: 'elegir-curso-ingles', topic: 'ELEGIR CURSO', title: 'Cómo elegir un curso de inglés que puedas mantener', lead: 'El mejor curso no es el que promete más, sino el que conecta tu punto de partida, tu objetivo y una rutina posible.', reading: '6 MIN',
    sections: [
      ['1. Empieza por la persona, no por el formato', `<p>La decisión cambia si el curso es para un niño de cuatro años, un adolescente que necesita continuidad o un adulto con un objetivo concreto. Antes de comparar horarios, define para quién es, qué experiencia previa tiene y qué le ayudaría a usar el inglés con más seguridad.</p><p>En edades tempranas importan la adaptación, la constancia y una relación positiva con el idioma. En adolescentes conviene unir base, comunicación y progreso académico. En adultos suele pesar más la compatibilidad con trabajo, estudios o una necesidad específica.</p>`],
      ['2. Convierte “quiero mejorar” en una meta observable', `<p>“Mejorar inglés” es un buen inicio, pero no basta para elegir. Intenta completar la frase: quiero poder mantener una conversación, preparar Cambridge, desenvolverme en viajes, trabajar con más soltura o recuperar una base que he perdido.</p><p>Una meta concreta permite decidir si conviene un curso general, preparación de examen, clases individuales o un formato más flexible. También ayuda a revisar el progreso sin depender únicamente de una etiqueta de nivel.</p>`],
      ['3. El formato debe proteger la continuidad', `<p>Presencial, online y one to one no son categorías de calidad; son maneras distintas de sostener la práctica. El formato adecuado es el que podrás mantener con atención y regularidad. Si los desplazamientos son sencillos, el aula aporta contexto y hábito. Si la agenda cambia, la opción online puede reducir fricción. Una necesidad muy específica puede pedir trabajo individual.</p><p>Antes de matricularte, pregunta por el grupo, el horario, la recomendación de nivel y qué ocurre después de la primera conversación. Una orientación breve evita elegir solo por cercanía o por el nombre del curso.</p>`],
      ['Checklist antes de decidir', `<ul><li>¿Para quién es y qué experiencia previa tiene?</li><li>¿Qué debería poder hacer con el inglés dentro de unos meses?</li><li>¿Qué horario y formato puede mantener de verdad?</li><li>¿Necesita inglés general, Cambridge o un objetivo específico?</li><li>¿Qué información falta para confirmar nivel, grupo y plaza?</li></ul>`]
    ]
  },
  'guias/elegir-examen-cambridge/index.html': {
    slug: 'elegir-examen-cambridge', topic: 'CAMBRIDGE', title: 'Cómo elegir qué examen Cambridge preparar', lead: 'B1, B2, C1 o C2 no debería elegirse por prestigio: debe responder a tu nivel actual, tu objetivo y el tiempo disponible.', reading: '7 MIN',
    sections: [
      ['1. Separa el nivel actual del nivel objetivo', `<p>El primer dato útil es lo que puedes hacer hoy con el idioma. Un test breve puede orientar gramática y vocabulario, pero la decisión también necesita observar comprensión, expresión escrita e interacción oral. Por eso un resultado automático debe entenderse como punto de partida.</p><p>Después define el nivel objetivo: el que exige un estudio, un trabajo o una meta personal. La distancia entre ambos marca la preparación necesaria. Saltar directamente al examen deseado sin valorar esa distancia puede convertir el plan en una carrera difícil de sostener.</p>`],
      ['2. Decide entre recorrido regular e intensivo', `<p>Un curso regular permite desarrollar destrezas, consolidar base y familiarizarse con las tareas de examen a lo largo del tiempo. Un intensivo concentra la preparación y puede encajar cuando la base ya existe y hay una fecha próxima.</p><p>La pregunta clave no es cuál termina antes, sino cuánto idioma necesitas construir además de practicar la prueba. Si todavía hay lagunas frecuentes, más tiempo de exposición y feedback suele ser parte del objetivo.</p>`],
      ['3. Busca evidencias de preparación', `<p>Antes de elegir convocatoria, revisa tu desempeño de forma repetida: comprensión, producción, gestión del tiempo y capacidad para corregir errores. Una práctica aislada puede salir especialmente bien o mal; una tendencia es más informativa.</p><p>Cambridge English ofrece materiales de preparación y pruebas de muestra por nivel. Úsalos para familiarizarte con el tipo de trabajo y combina esa práctica con feedback. La academia puede ayudarte a convertir los resultados en prioridades concretas.</p>`],
      ['Cuatro preguntas para la conversación inicial', `<ul><li>¿Para qué necesitas el certificado y cuándo?</li><li>¿Qué nivel aproximado tienes ahora?</li><li>¿Cuánto tiempo real puedes dedicar cada semana?</li><li>¿Te conviene desarrollar base, practicar examen o ambas cosas?</li></ul>`]
    ], source: true
  },
  'guias/diferencias-b1-b2/index.html': {
    slug: 'diferencias-b1-b2', topic: 'NIVELES', title: 'B1 o B2: qué cambia de verdad', lead: 'La diferencia no está solo en saber más palabras. Está en la independencia, el detalle y la capacidad para mantener el mensaje.', reading: '6 MIN',
    sections: [
      ['B1: resolver situaciones habituales', `<p>En un nivel intermedio, el objetivo práctico es desenvolverse en contextos familiares, comprender las ideas principales y producir mensajes conectados sobre temas conocidos. Puede haber pausas, simplificaciones y errores, pero la comunicación funciona.</p><p>Para preparar este paso conviene fortalecer estructuras frecuentes, vocabulario cotidiano y estrategias para explicar una idea cuando falta una palabra. La confianza crece cuando se practica el uso, no solo el reconocimiento.</p>`],
      ['B2: sostener y desarrollar el mensaje', `<p>En B2 aumenta la autonomía. Se espera más capacidad para seguir textos y conversaciones con detalle, desarrollar argumentos, matizar y participar con una interacción más fluida. No significa hablar sin errores, sino disponer de más recursos para que esos errores no bloqueen el mensaje.</p><p>El salto suele pedir ampliar vocabulario activo, controlar estructuras con mayor consistencia y aprender a organizar respuestas más completas. También requiere escuchar y leer materiales más variados.</p>`],
      ['Elige por necesidad, no por una etiqueta', `<p>Si una titulación o proyecto exige un nivel concreto, esa necesidad ayuda a fijar el destino. Si el objetivo es personal, conviene elegir el siguiente paso realista. Preparar B2 con una base B1 todavía inestable puede ser posible, pero el plan deberá incluir desarrollo de idioma además de técnica de examen.</p><p>La orientación más útil combina un test inicial, conversación sobre objetivos y evidencias de las cuatro destrezas. El resultado debería indicar qué trabajar primero, no solo asignar una letra y un número.</p>`],
      ['Señales para revisar tu punto de partida', `<ul><li>¿Comprendes la idea general o también detalles y matices?</li><li>¿Puedes explicar una opinión y sostenerla con razones?</li><li>¿Tu vocabulario te permite reformular cuando te bloqueas?</li><li>¿Escribes textos conectados con una estructura clara?</li></ul>`]
    ], source: true
  },
  'guias/preparar-speaking-cambridge/index.html': {
    slug: 'preparar-speaking-cambridge', topic: 'SPEAKING', title: 'Cómo preparar el speaking de Cambridge cada semana', lead: 'La fluidez no aparece al memorizar una respuesta perfecta. Se construye hablando, escuchándose y corrigiendo una prioridad cada vez.', reading: '7 MIN',
    sections: [
      ['1. Practica con una frecuencia que puedas repetir', `<p>Dos o tres sesiones breves suelen ser más útiles que una práctica larga y aislada. Elige un tema, prepara algunas ideas y habla durante uno o dos minutos. Después repite intentando conectar mejor el mensaje, no recitarlo de memoria.</p><p>Alterna práctica individual y conversación. La primera ayuda a observar el lenguaje; la segunda obliga a escuchar, reaccionar y mantener el intercambio.</p>`],
      ['2. Grábate con una pregunta concreta', `<p>Escucharse funciona mejor si no intentas corregirlo todo. En una sesión observa pausas y fluidez; en otra, pronunciación; en otra, variedad de vocabulario. Anota un patrón recurrente y vuelve a grabar la misma tarea aplicando una mejora.</p><p>La grabación convierte una sensación vaga —“hablo mal”— en evidencia concreta. También permite comprobar el progreso al comparar respuestas separadas por varias semanas.</p>`],
      ['3. Entrena interacción, no solo monólogos', `<p>El speaking también exige responder a otra persona: mostrar acuerdo o desacuerdo, pedir aclaraciones, recoger una idea y hacer avanzar la conversación. Practica expresiones que cumplen esas funciones, pero úsalas dentro de intercambios reales.</p><p>Con un compañero, fija un objetivo distinto en cada ronda: hacer una pregunta de seguimiento, justificar una elección o invitar al otro a participar. Así la práctica se parece más a comunicación que a una lista de frases.</p>`],
      ['4. Simula y recibe feedback', `<p>Combina práctica libre con tareas de muestra y condiciones similares a las del examen que preparas. Cambridge English publica materiales y vídeos de speaking con comentarios para distintos niveles. Úsalos como referencia actual y evita depender de resúmenes antiguos.</p><p>Después de cada simulación, elige dos prioridades: una lingüística y otra estratégica. Un plan pequeño y concreto es más fácil de aplicar en la siguiente sesión.</p>`]
    ], source: true
  }
};

function articleMain(article) {
  const articleSchema = jsonLd({ '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.lead, author: { '@id': `${origin}/#organization` }, publisher: { '@id': `${origin}/#organization` }, mainEntityOfPage: `${origin}/guias/${article.slug}/`, inLanguage: 'es' });
  const breadcrumbs = visibleBreadcrumb([['/guias/', 'Guías'], [`/guias/${article.slug}/`, article.title]]);
  const content = `<article class="v9-article"><header><small>${article.topic} · ${article.reading}</small><h1>${article.title}</h1><p>${article.lead}</p><div><a href="/test-de-nivel/">Orientar mi nivel ↗</a><a href="/guias/">Todas las guías →</a></div></header><div class="v9-article-layout"><aside><small>EN ESTA GUÍA</small>${article.sections.map((section, index) => `<a href="#paso-${index + 1}">${section[0]}</a>`).join('')}</aside><div class="v9-article-body">${article.sections.map((section, index) => `<section id="paso-${index + 1}"><h2>${section[0]}</h2>${section[1]}</section>`).join('')}${article.source ? `<div class="v9-official-source"><small>FUENTE ÚTIL</small><h2>Contrasta siempre con materiales oficiales.</h2><p>Los recursos y formatos pueden actualizarse. Consulta la preparación publicada por Cambridge English para tu examen concreto.</p><a href="${officialCambridge}" target="_blank" rel="noopener noreferrer">Preparación oficial Cambridge ↗</a></div>` : ''}</div></div><footer><div><small>SIGUIENTE PASO</small><h2>Convierte la guía en un plan para ti.</h2></div><a href="${whatsapp}" target="_blank" rel="noopener noreferrer">Hablar con Cosmo ↗</a></footer></article>`;
  return { main: `${breadcrumbs}${content}`, schema: articleSchema };
}

const newPages = {
  'test-de-nivel/index.html': pageShell('test-de-nivel', testMain, jsonLd({ '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Test de nivel orientativo Cosmo School', applicationCategory: 'EducationalApplication', operatingSystem: 'Web', isAccessibleForFree: true, provider: { '@id': `${origin}/#organization` } })),
  'guias/index.html': pageShell('guias', guidesMain)
};

for (const [file, article] of Object.entries(guideContent)) {
  const built = articleMain(article);
  newPages[file] = pageShell('guias', built.main, built.schema);
}

const faqSchema = jsonLd({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: '¿Necesito saber mi nivel antes de contactar?', acceptedAnswer: { '@type': 'Answer', text: 'No. El test ofrece una orientación inicial y Cosmo puede completar la valoración con tu objetivo, experiencia y destrezas.' } },
  { '@type': 'Question', name: '¿Cosmo School tiene cursos para niños y adultos?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Cosmo School publica clases desde los 4 años, para adolescentes y adultos.' } },
  { '@type': 'Question', name: '¿Qué niveles Cambridge prepara Cosmo School?', acceptedAnswer: { '@type': 'Answer', text: 'Cosmo School publica preparación Cambridge para B1, B2, C1 y C2 mediante curso regular e intensivos.' } },
  { '@type': 'Question', name: '¿Dónde están los centros de Cosmo School?', acceptedAnswer: { '@type': 'Answer', text: 'Cosmo School tiene dos centros en Écija: C/ Merinos, 54 y C/ Fuente Nueva, 2.' } }
] });

const combined = { ...basePages, ...newPages };
export const pages = Object.fromEntries(Object.entries(combined).map(([file, source]) => {
  let html = file in newPages ? source : improveExisting(source, file);
  if (file === 'index.html') html = html.replace('</head>', `${faqSchema}</head>`);
  html = html.replace(/(<body[^>]*>)/, '$1<a class="v9-skip" href="#contenido">Saltar al contenido</a>').replace('<main>', '<main id="contenido">');
  html = routeSeo(html, file);
  html = responsiveImages(html);
  html = bundleAssets(html);
  return [file, html];
}));
