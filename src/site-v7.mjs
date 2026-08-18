import { pages as basePages } from './site-v6.mjs';

const mapsMerinos='https://www.google.com/maps/dir/?api=1&destination=C%2F%20Merinos%2C%2054%2C%2041400%20%C3%89cija%2C%20Sevilla';
const mapsFuente='https://www.google.com/maps/dir/?api=1&destination=C%2F%20Fuente%20Nueva%2C%202%2C%2041400%20%C3%89cija%2C%20Sevilla';
const wa=(text)=>`https://wa.me/34643349226?text=${encodeURIComponent(text)}`;

const compactForm=(name='cosmo-interest')=>`
<form class="v7-lead-form" name="${name}" method="POST" action="/gracias/" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="${name}">
  <p class="v7-hp"><label>No rellenar <input name="bot-field"></label></p>
  <div class="v7-field"><label for="${name}-name">Nombre</label><input id="${name}-name" name="nombre" autocomplete="name" required placeholder="Tu nombre"></div>
  <div class="v7-field"><label for="${name}-phone">Teléfono</label><input id="${name}-phone" name="telefono" autocomplete="tel" inputmode="tel" required placeholder="Tu teléfono"></div>
  <div class="v7-field"><label for="${name}-person">¿Para quién?</label><select id="${name}-person" name="para_quien" data-prefill="person" required><option value="">Elige una opción</option><option value="kids">Niño/a</option><option value="teens">Adolescente</option><option value="adults">Adulto/a</option></select></div>
  <div class="v7-field"><label for="${name}-goal">Objetivo</label><select id="${name}-goal" name="objetivo" data-prefill="goal" required><option value="">Elige una opción</option><option value="general">Mejorar inglés</option><option value="cambridge">Preparar Cambridge</option><option value="flex">Necesito flexibilidad</option><option value="unknown">No lo tengo claro</option></select></div>
  <div class="v7-field"><label for="${name}-centre">Sede preferida</label><select id="${name}-centre" name="sede" data-prefill="centre"><option value="indiferente">Me da igual</option><option value="merinos">C/ Merinos, 54</option><option value="fuente-nueva">C/ Fuente Nueva, 2</option></select></div>
  <div class="v7-field v7-field-wide"><label for="${name}-note">Algo que debamos saber <span>opcional</span></label><textarea id="${name}-note" name="mensaje" rows="3" placeholder="Nivel aproximado, disponibilidad, edad si es menor..."></textarea></div>
  <label class="v7-consent"><input type="checkbox" name="privacidad" required> <span>He leído la <a href="/legal/">información de privacidad</a> y acepto que Cosmo use estos datos para responder a mi consulta.</span></label>
  <button class="v7-submit" type="submit"><span>Enviar mi consulta</span><b aria-hidden="true">↗</b></button>
  <p class="v7-form-note">La solicitud no confirma plaza ni horario. Cosmo podrá orientarte con tu contexto antes de cerrar matrícula.</p>
</form>`;

const homeGrowth=`
<section class="v7 v7-local" aria-labelledby="v7-local-title">
  <div class="v7-wrap">
    <div class="v7-local-intro">
      <span class="v7-kicker">ACADEMIA DE INGLÉS EN ÉCIJA</span>
      <h2 id="v7-local-title">Que vivir cerca de Cosmo haga más fácil empezar.</h2>
      <p>Dos centros en Écija, una oferta que va desde los 4 años hasta adultos y preparación Cambridge B1—C2. El siguiente paso útil no es leer otra promesa: es saber qué opción encaja contigo y dónde te viene mejor.</p>
    </div>
    <div class="v7-centre-switch" data-centre-switch>
      <div class="v7-centre-tabs" role="tablist" aria-label="Centros Cosmo School">
        <button type="button" class="is-active" role="tab" aria-selected="true" data-centre="merinos" data-map="https://www.google.com/maps?q=C%2F%20Merinos%2054%20%C3%89cija&output=embed">01 · Merinos</button>
        <button type="button" role="tab" aria-selected="false" data-centre="fuente-nueva" data-map="https://www.google.com/maps?q=C%2F%20Fuente%20Nueva%202%20%C3%89cija&output=embed">02 · Fuente Nueva</button>
      </div>
      <div class="v7-map-frame"><iframe title="Mapa de Cosmo School" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=C%2F%20Merinos%2054%20%C3%89cija&output=embed"></iframe></div>
      <div class="v7-centre-info" data-centre-info>
        <div><small>CENTRO 01</small><strong>C/ Merinos, 54</strong><span>41400 Écija, Sevilla</span></div>
        <div class="v7-centre-actions"><a data-route-link href="${mapsMerinos}" target="_blank">Cómo llegar ↗</a><a data-centre-wa href="${wa('Hola Cosmo School. Quiero información y me interesa la sede de C/ Merinos, 54.')}" target="_blank">Preguntar por esta sede ↗</a></div>
      </div>
    </div>
  </div>
</section>
<section class="v7 v7-capture" aria-labelledby="v7-capture-title">
  <div class="v7-wrap v7-capture-grid">
    <div class="v7-capture-copy"><span class="v7-kicker">QUIERO INFORMACIÓN</span><h2 id="v7-capture-title">Cinco datos. Una conversación mucho mejor.</h2><p>Este formulario está pensado para que Cosmo reciba el contexto que realmente necesita para orientarte: quién estudia, qué busca y qué sede le viene mejor.</p><div class="v7-proof-line"><span>Desde 4 años</span><span>Cambridge B1—C2</span><span>Presencial · online · 1:1</span></div></div>
    ${compactForm('cosmo-interest')}
  </div>
</section>`;

const enrolGrowth=`
<section class="v7 v7-enrol-live" aria-labelledby="v7-enrol-live-title">
  <div class="v7-wrap v7-enrol-live-grid">
    <div><span class="v7-kicker">SOLICITUD DE MATRÍCULA</span><h2 id="v7-enrol-live-title">Del “me interesa” a una consulta que Cosmo puede trabajar.</h2><p>La matrícula se publica a partir del 1 de abril. Grupo, nivel, horario y plaza se confirman después con la academia.</p><div class="v7-next"><small>QUÉ PASA DESPUÉS</small><ol><li><b>01</b><span>Cosmo recibe tu contexto.</span></li><li><b>02</b><span>Te orienta sobre nivel, formato y grupo.</span></li><li><b>03</b><span>Confirmáis disponibilidad y matrícula.</span></li></ol></div></div>
    ${compactForm('cosmo-enrolment')}
  </div>
</section>`;

const contactGrowth=`
<section class="v7 v7-contact-intent" aria-labelledby="v7-contact-intent-title"><div class="v7-wrap"><span class="v7-kicker">¿PARA QUÉ ESCRIBES?</span><h2 id="v7-contact-intent-title">Empieza la conversación con contexto.</h2><div class="v7-intent-rail">
<a href="${wa('Hola Cosmo School. Quiero información para matricularme. Os puedo indicar edad, nivel aproximado, objetivo y disponibilidad.')}" target="_blank"><small>01</small><strong>Quiero matricularme</strong><span>WhatsApp preparado ↗</span></a>
<a href="${wa('Hola Cosmo School. Quiero empezar inglés pero no sé qué nivel ni qué grupo me corresponde. ¿Podéis orientarme?')}" target="_blank"><small>02</small><strong>No sé mi nivel</strong><span>Pedir orientación ↗</span></a>
<a href="${wa('Hola Cosmo School. Me interesa preparar Cambridge y quiero saber qué nivel y modalidad me conviene.')}" target="_blank"><small>03</small><strong>Quiero Cambridge</strong><span>B1 · B2 · C1 · C2 ↗</span></a>
<a href="tel:+34643349226"><small>04</small><strong>Prefiero llamar</strong><span>643 349 226 ↗</span></a>
</div></div></section>`;

const seasonal=`<div class="v7-seasonal" data-seasonal role="status" aria-live="polite"><span>COSMO / AHORA</span><strong>Consulta grupos, nivel y disponibilidad.</strong><a href="/matricula/">Matrícula ↗</a></div>`;

const enhancedSchema={
  '@context':'https://schema.org','@type':'EducationalOrganization',name:'Cosmo School',description:'Academia de inglés en Écija para niños desde 4 años, adolescentes y adultos. Centro preparador de exámenes Cambridge.',foundingDate:'2015',telephone:'+34643349226',email:'cosmoschool2015@gmail.com',areaServed:{'@type':'City',name:'Écija'},
  sameAs:['https://www.instagram.com/cosmoschool2015/','https://www.facebook.com/profile.php?id=100057386202789'],
  location:[
    {'@type':'Place',name:'Cosmo School · C/ Merinos',address:{'@type':'PostalAddress',streetAddress:'C/ Merinos, 54',postalCode:'41400',addressLocality:'Écija',addressRegion:'Sevilla',addressCountry:'ES'},hasMap:mapsMerinos},
    {'@type':'Place',name:'Cosmo School · C/ Fuente Nueva',address:{'@type':'PostalAddress',streetAddress:'C/ Fuente Nueva, 2',postalCode:'41400',addressLocality:'Écija',addressRegion:'Sevilla',addressCountry:'ES'},hasMap:mapsFuente}
  ],
  openingHoursSpecification:[
    {'@type':'OpeningHoursSpecification',dayOfWeek':['Tuesday','Wednesday','Thursday','Friday'],opens:'10:00',closes:'12:00'},
    {'@type':'OpeningHoursSpecification',dayOfWeek':['Monday','Tuesday','Wednesday','Thursday','Friday'],opens:'16:00',closes:'20:00'}
  ],
  hasOfferCatalog:{'@type':'OfferCatalog',name:'Formación de inglés',itemListElement:[
    {'@type':'OfferCatalog',name:'Inglés para niños desde 4 años'},
    {'@type':'OfferCatalog',name:'Inglés para adolescentes y adultos'},
    {'@type':'OfferCatalog',name:'Clases presenciales, online y one to one'},
    {'@type':'OfferCatalog',name:'Preparación Cambridge B1, B2, C1 y C2'}
  ]}
};

const faqSchema={
  '@context':'https://schema.org','@type':'FAQPage',mainEntity:[
    {'@type':'Question',name:'¿Tengo que saber mi nivel antes de contactar con Cosmo School?',acceptedAnswer:{'@type':'Answer',text:'No. Puedes explicar tu experiencia previa y tu objetivo para que la academia te oriente sobre el grupo o preparación que mejor encaja.'}},
    {'@type':'Question',name:'¿Cosmo School prepara exámenes Cambridge?',acceptedAnswer:{'@type':'Answer',text:'Sí. Cosmo School publica preparación para B1, B2, C1 y C2, con curso regular e intensivos.'}},
    {'@type':'Question',name:'¿Dónde está Cosmo School en Écija?',acceptedAnswer:{'@type':'Answer',text:'Cosmo School publica dos centros en Écija: C/ Merinos, 54 y C/ Fuente Nueva, 2.'}}
  ]
};

const thanks=`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#0b2cff"><meta name="description" content="Consulta enviada a Cosmo School. Puedes continuar por WhatsApp o volver a explorar los cursos."><title>Consulta enviada | Cosmo School</title><link rel="stylesheet" href="/styles-v3.css"><link rel="stylesheet" href="/quality-v5.css"><link rel="stylesheet" href="/quality-v6.css"><link rel="stylesheet" href="/local-growth-v7.css"></head><body data-route="gracias"><main class="v7-thanks"><div class="v7-thanks-orbit"></div><div class="v7-thanks-inner"><span>CONSULTA ENVIADA</span><h1>Ya has hecho la parte difícil: empezar.</h1><p>Cosmo tendrá tu contexto para poder responderte mejor. Si quieres añadir algo o prefieres continuar la conversación ahora, puedes abrir WhatsApp.</p><div><a href="${wa('Hola Cosmo School. Acabo de enviar una consulta desde la web y quería añadir una cosa...')}" target="_blank">Continuar por WhatsApp ↗</a><a href="/cursos/">Volver a cursos →</a></div><small>La solicitud no confirma plaza ni horario hasta que la academia te lo confirme.</small></div></main><script src="/local-growth-v7.js"></script></body></html>`;

const routeAddons={
  'index.html':homeGrowth,
  'matricula/index.html':enrolGrowth,
  'contacto/index.html':contactGrowth
};

const enhance=(html,file)=>{
  const addon=routeAddons[file]||'';
  html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,'');
  html=html.replace('</head>',`<link rel="stylesheet" href="/local-growth-v7.css"><script type="application/ld+json">${JSON.stringify(enhancedSchema)}</script>${file==='contacto/index.html'?`<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`:''}</head>`);
  if(file==='index.html')html=html.replace('<main>',`<main>${seasonal}`);
  html=html.replace('</main>',`${addon}</main>`).replace('</body>','<script src="/local-growth-v7.js"></script></body>');
  return html;
};

export const pages=Object.fromEntries(Object.entries(basePages).map(([file,html])=>[file,enhance(html,file)]));
pages['gracias/index.html']=thanks;
