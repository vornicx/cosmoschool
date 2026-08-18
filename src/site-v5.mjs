import { pages as basePages } from './site-v3.mjs';

const arrow = '<span aria-hidden="true">↗</span>';

const homeDesktop = `
<section class="qv5 qv5-desktop qv5-finder" aria-labelledby="qv5-finder-title">
  <div class="qv5-wrap">
    <div class="qv5-kicker"><span>ENCUENTRA TU CAMINO</span><span>30 segundos · sin compromiso</span></div>
    <div class="qv5-finder-grid">
      <div class="qv5-finder-copy">
        <h2 id="qv5-finder-title">No necesitas saber qué curso elegir.</h2>
        <p>Dinos para quién es, qué objetivo tiene y cómo quiere estudiar. Te orientamos hacia la opción que mejor encaja con la oferta actual de Cosmo.</p>
        <div class="qv5-step" data-finder-step="person">
          <small>01 / ¿PARA QUIÉN?</small>
          <div class="qv5-choice-row">
            <button type="button" data-finder="person" data-value="kids">Niños</button>
            <button type="button" data-finder="person" data-value="teens">Adolescentes</button>
            <button type="button" data-finder="person" data-value="adults">Adultos</button>
          </div>
        </div>
        <div class="qv5-step" data-finder-step="goal">
          <small>02 / OBJETIVO</small>
          <div class="qv5-choice-row">
            <button type="button" data-finder="goal" data-value="general">Mejorar inglés</button>
            <button type="button" data-finder="goal" data-value="cambridge">Cambridge B1—C2</button>
            <button type="button" data-finder="goal" data-value="flex">Flexibilidad</button>
          </div>
        </div>
      </div>
      <aside class="qv5-result" data-finder-result>
        <span>RECOMENDACIÓN COSMO</span>
        <strong>Cuéntanos dos cosas y te orientamos.</strong>
        <p>La recomendación aparecerá aquí con el siguiente paso más útil.</p>
        <a href="/contacto/">Hablar con la academia ${arrow}</a>
      </aside>
    </div>
  </div>
</section>
<section class="qv5 qv5-desktop qv5-proof" aria-labelledby="qv5-proof-title">
  <div class="qv5-wrap">
    <div class="qv5-section-head"><span>LO QUE IMPORTA ANTES DE APUNTARTE</span><h2 id="qv5-proof-title">Menos promesas. Más claridad.</h2></div>
    <div class="qv5-proof-grid">
      <article><b>4+</b><h3>Desde los 4 años</h3><p>Una ruta distinta para niños, adolescentes y adultos, en lugar de intentar encajar a todo el mundo en el mismo formato.</p></article>
      <article><b>B1—C2</b><h3>Cambridge de verdad</h3><p>Preparación específica para B1, B2, C1 y C2, con curso regular de septiembre a junio e intensivos.</p></article>
      <article><b>4 FORMATOS</b><h3>Presencial, online, 1:1 e intensivo</h3><p>El formato se adapta al objetivo y a la disponibilidad. En online, Cosmo indica además la posibilidad de recibir la grabación si faltas.</p></article>
      <article><b>2 CENTROS</b><h3>Dos sedes en Écija</h3><p>C/ Merinos, 54 y C/ Fuente Nueva, 2. Puedes contactar antes para confirmar grupo, nivel y disponibilidad.</p></article>
    </div>
  </div>
</section>`;

const homeMobile = `
<section class="qv5 qv5-mobile qv5-mdecision">
  <div class="qv5-mpad">
    <span class="qv5-meyebrow">¿QUÉ NECESITAS?</span>
    <h2>Encuentra tu opción sin perderte entre cursos.</h2>
    <div class="qv5-mscroll" role="list">
      <a role="listitem" href="/cursos/"><b>01</b><strong>Para mi hijo/a</strong><span>Desde 4 años →</span></a>
      <a role="listitem" href="/cursos/"><b>02</b><strong>Para mí</strong><span>Adultos · online · 1:1 →</span></a>
      <a role="listitem" href="/cambridge/"><b>03</b><strong>Quiero Cambridge</strong><span>B1 · B2 · C1 · C2 →</span></a>
    </div>
  </div>
</section>`;

const coursesDesktop = `
<section class="qv5 qv5-desktop qv5-compare">
  <div class="qv5-wrap">
    <div class="qv5-section-head"><span>COMPARADOR DE FORMATOS</span><h2>La misma meta no exige el mismo camino.</h2></div>
    <div class="qv5-table" role="table" aria-label="Comparación de formatos Cosmo School">
      <div class="qv5-tr qv5-th" role="row"><span>Formato</span><span>Ideal para</span><span>Ventaja principal</span><span>Siguiente paso</span></div>
      <div class="qv5-tr" role="row"><strong>Presencial</strong><span>Niños, teens y adultos</span><span>Ritmo de grupo y seguimiento cercano</span><a href="/contacto/">Consultar grupo →</a></div>
      <div class="qv5-tr" role="row"><strong>Online</strong><span>Adultos con poco margen</span><span>Flexibilidad; grabación si faltas según la oferta publicada</span><a href="/contacto/">Consultar online →</a></div>
      <div class="qv5-tr" role="row"><strong>One to one</strong><span>Objetivo muy específico</span><span>Trabajo individual y horario de mañana</span><a href="/contacto/">Consultar 1:1 →</a></div>
      <div class="qv5-tr" role="row"><strong>Intensivo</strong><span>Preparar examen en poco tiempo</span><span>Preparación concentrada de aprox. un mes</span><a href="/cambridge/">Ver Cambridge →</a></div>
    </div>
  </div>
</section>
<section class="qv5 qv5-desktop qv5-process">
  <div class="qv5-wrap qv5-process-grid">
    <div><span>NO SABES TU NIVEL</span><h2>Eso no debería frenarte.</h2><p>No hace falta llegar sabiendo si eres A2, B1 o B2. Contacta con la academia, explica tu experiencia y objetivo y confirma con ellos el grupo más adecuado antes de matricularte.</p></div>
    <ol><li><b>01</b><span>Cuéntales edad y experiencia previa.</span></li><li><b>02</b><span>Explica tu objetivo: mejorar, examen o flexibilidad.</span></li><li><b>03</b><span>Confirma nivel, grupo, horario y disponibilidad.</span></li></ol>
  </div>
</section>`;

const coursesMobile = `
<section class="qv5 qv5-mobile qv5-mfacts"><div class="qv5-mpad"><span class="qv5-meyebrow">ANTES DE ELEGIR</span><h2>Cuatro formatos. Cuatro necesidades.</h2><div class="qv5-mstack"><article><b>Presencial</b><p>Para avanzar con grupo y rutina.</p></article><article><b>Online</b><p>Para estudiar con más flexibilidad.</p></article><article><b>1:1</b><p>Para un objetivo individual concreto.</p></article><article><b>Intensivo</b><p>Para concentrar la preparación Cambridge.</p></article></div><a class="qv5-mcta" href="/contacto/">No sé cuál elegir →</a></div></section>`;

const cambridgeDesktop = `
<section class="qv5 qv5-desktop qv5-camplan">
  <div class="qv5-wrap">
    <div class="qv5-section-head"><span>ANTES DEL EXAMEN</span><h2>Preparar Cambridge no es hacer ejercicios al azar.</h2></div>
    <div class="qv5-camplan-grid">
      <article><span>01</span><h3>Ubicar nivel</h3><p>Primero hay que saber qué examen tiene sentido preparar ahora, no cuál “suena mejor”.</p></article>
      <article><span>02</span><h3>Elegir ritmo</h3><p>Curso regular de septiembre a junio o intensivo de aproximadamente un mes, según disponibilidad.</p></article>
      <article><span>03</span><h3>Entrenar las 4 partes</h3><p>Reading, Writing, Listening y Speaking necesitan práctica específica y equilibrio.</p></article>
      <article><span>04</span><h3>Ir a convocatoria</h3><p>Cosmo publica al menos cuatro convocatorias durante el curso regular. Confirma fechas concretas con la academia.</p></article>
    </div>
    <div class="qv5-callout"><strong>¿B1, B2, C1 o C2?</strong><p>Si dudas entre niveles, lo más útil es hablar con Cosmo antes de elegir curso.</p><a href="/contacto/">Pedir orientación ${arrow}</a></div>
  </div>
</section>`;

const cambridgeMobile = `
<section class="qv5 qv5-mobile qv5-mtimeline"><div class="qv5-mpad"><span class="qv5-meyebrow">TU PLAN CAMBRIDGE</span><h2>Del nivel actual al examen.</h2><ol><li><b>01</b><span>Ubica tu nivel</span></li><li><b>02</b><span>Elige regular o intensivo</span></li><li><b>03</b><span>Entrena las 4 partes</span></li><li><b>04</b><span>Confirma convocatoria</span></li></ol><a class="qv5-mcta" href="/contacto/">Quiero saber qué nivel preparar →</a></div></section>`;

const methodDesktop = `
<section class="qv5 qv5-desktop qv5-method">
  <div class="qv5-wrap qv5-method-grid">
    <div><span>QUÉ SIGNIFICA “APRENDER USANDO”</span><h2>Una clase tiene que producir algo.</h2></div>
    <div class="qv5-method-steps"><article><b>01 / INPUT</b><h3>Escuchar y comprender</h3><p>Vocabulario, estructuras y contexto antes de exigir producción.</p></article><article><b>02 / USE</b><h3>Hablar y escribir</h3><p>El idioma pasa a ser una herramienta, no una lista de reglas.</p></article><article><b>03 / FEEDBACK</b><h3>Corregir con intención</h3><p>Detectar errores útiles y convertirlos en siguiente objetivo.</p></article><article><b>04 / REPEAT</b><h3>Volver a usarlo</h3><p>La soltura aparece cuando lo aprendido reaparece en contextos distintos.</p></article></div>
  </div>
</section>`;

const aboutDesktop = `
<section class="qv5 qv5-desktop qv5-aboutfacts"><div class="qv5-wrap"><div class="qv5-section-head"><span>COSMO EN UNA PÁGINA</span><h2>Lo que sí sabemos del centro.</h2></div><div class="qv5-about-grid"><article><b>2015</b><p>Cosmo School comunica actividad en Écija desde 2015.</p></article><article><b>2</b><p>Dos centros: Merinos 54 y Fuente Nueva 2.</p></article><article><b>4+</b><p>Oferta de inglés desde los 4 años.</p></article><article><b>B1—C2</b><p>Preparación Cambridge en cuatro niveles.</p></article></div><p class="qv5-honesty">En esta propuesta no inventamos profesores, resultados ni testimonios. Cuando Cosmo quiera publicar equipo, acreditaciones, ratios o historias reales de alumnos, esos datos tendrán aquí un lugar protagonista.</p></div></section>`;

const enrolDesktop = `
<section class="qv5 qv5-desktop qv5-enrol">
  <div class="qv5-wrap">
    <div class="qv5-section-head"><span>MATRÍCULA / QUÉ PREPARAR</span><h2>Que la primera conversación sirva para algo.</h2></div>
    <div class="qv5-enrol-grid"><article><b>01</b><h3>Quién se apunta</h3><p>Edad y, si aplica, curso escolar.</p></article><article><b>02</b><h3>Experiencia previa</h3><p>Nivel aproximado, academia anterior o tiempo sin estudiar.</p></article><article><b>03</b><h3>Objetivo</h3><p>Mejorar inglés general, Cambridge, trabajo, estudios o flexibilidad.</p></article><article><b>04</b><h3>Disponibilidad</h3><p>Presencial, online, mañana o necesidad de intensivo.</p></article></div>
    <div class="qv5-enrol-note"><strong>Matrícula desde el 1 de abril</strong><p>La disponibilidad de grupos y horarios puede cambiar. La web debe ayudar a llegar a la conversación correcta, no prometer una plaza que aún no está confirmada.</p></div>
  </div>
</section>`;

const contactDesktop = `
<section class="qv5 qv5-desktop qv5-contactplan"><div class="qv5-wrap"><div class="qv5-section-head"><span>ANTES DE ESCRIBIR</span><h2>Elige el canal según lo que necesitas.</h2></div><div class="qv5-contact-grid"><a href="tel:+34643349226"><b>Llamar</b><p>Para resolver una duda concreta o confirmar disponibilidad.</p><span>643 349 226 →</span></a><a href="https://wa.me/34643349226" target="_blank"><b>WhatsApp</b><p>Para enviar edad, objetivo y disponibilidad de forma rápida.</p><span>Abrir WhatsApp →</span></a><a href="mailto:cosmoschool2015@gmail.com"><b>Email</b><p>Para consultas más detalladas o información por escrito.</p><span>cosmoschool2015@gmail.com →</span></a></div><div class="qv5-hours"><strong>Recepción</strong><span>Martes—viernes · 10:00—12:00</span><span>Lunes—viernes · 16:00—20:00</span><small>Confirma posibles cambios con la academia.</small></div></div></section>`;

const faq = `
<section class="qv5 qv5-desktop qv5-faq"><div class="qv5-wrap"><div class="qv5-section-head"><span>PREGUNTAS ÚTILES</span><h2>Lo que normalmente quieres saber antes de escribir.</h2></div><div class="qv5-faq-list">
<details><summary>¿Tengo que saber mi nivel antes de contactar?<i>+</i></summary><p>No. Puedes explicar tu experiencia previa y tu objetivo. La academia debe confirmar contigo qué grupo o preparación encaja mejor.</p></details>
<details><summary>¿Hay clases online?<i>+</i></summary><p>Sí. Cosmo publica formación online y señala que, si faltas a una clase online, puedes recibir la grabación.</p></details>
<details><summary>¿Preparan Cambridge?<i>+</i></summary><p>Sí: B1, B2, C1 y C2. También publican curso regular de septiembre a junio e intensivos de aproximadamente un mes.</p></details>
<details><summary>¿Dónde están?<i>+</i></summary><p>En Écija, en C/ Merinos, 54 y C/ Fuente Nueva, 2.</p></details>
</div></div></section>`;

const mobileCommon = `
<section class="qv5 qv5-mobile qv5-mtrust"><div class="qv5-mpad"><span class="qv5-meyebrow">COSMO / DATOS CLAVE</span><div class="qv5-mmetrics"><span><b>4+</b>años</span><span><b>B1—C2</b>Cambridge</span><span><b>2</b>centros</span><span><b>4</b>formatos</span></div><p>Si no sabes exactamente qué necesitas, no elijas a ciegas: habla con la academia y confirma nivel, grupo y disponibilidad.</p><a class="qv5-mcta" href="/contacto/">Pedir orientación →</a></div></section>`;

const routeAddons = {
  'index.html': homeDesktop + homeMobile,
  'cursos/index.html': coursesDesktop + coursesMobile,
  'cambridge/index.html': cambridgeDesktop + cambridgeMobile,
  'metodologia/index.html': methodDesktop + mobileCommon,
  'sobre-nosotros/index.html': aboutDesktop + mobileCommon,
  'matricula/index.html': enrolDesktop + mobileCommon,
  'contacto/index.html': contactDesktop + faq + mobileCommon,
  'legal/index.html': ''
};

const inject = (html, file) => {
  const addon = routeAddons[file] || '';
  return html
    .replace('</head>', '<link rel="stylesheet" href="/quality-v5.css"></head>')
    .replace('</main>', `${addon}</main>`)
    .replace('</body>', '<script src="/quality-v5.js"></script></body>');
};

export const pages = Object.fromEntries(Object.entries(basePages).map(([file, html]) => [file, inject(html, file)]));
