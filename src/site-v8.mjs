import { pages as basePages } from './site-v7.mjs';

const wa='https://wa.me/34643349226?text='+encodeURIComponent('Hola Cosmo School. Quiero información sobre vuestros cursos y me gustaría que me orientaseis sobre la mejor opción para mí.');

const routeLabel={
  'index.html':'Inicio',
  'cursos/index.html':'Cursos',
  'cambridge/index.html':'Cambridge',
  'metodologia/index.html':'Método',
  'sobre-nosotros/index.html':'Nosotros',
  'matricula/index.html':'Matrícula',
  'contacto/index.html':'Contacto',
  'legal/index.html':'Legal',
  'gracias/index.html':'Gracias'
};

const mobileDock=(file)=>file==='legal/index.html'?'' : `
<nav class="v8-mobile-dock" aria-label="Acciones rápidas">
  <a href="tel:+34643349226"><span>Llamar</span><b>643 349 226</b></a>
  <a class="v8-dock-primary" href="${wa}" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><b>Quiero información ↗</b></a>
</nav>`;

const decisionRibbon=`
<section class="v8-decision-ribbon" aria-label="Cómo empezar con Cosmo School">
  <div class="v8-ribbon-inner">
    <div class="v8-ribbon-copy"><small>EMPIEZA POR LO IMPORTANTE</small><strong>No necesitas elegir curso antes de hablar con Cosmo.</strong></div>
    <div class="v8-ribbon-facts"><span><b>4+</b> desde cuatro años</span><span><b>2</b> centros en Écija</span><span><b>B1—C2</b> Cambridge</span></div>
    <a href="/matricula/">Quiero que me orientéis ↗</a>
  </div>
</section>`;

const enhance=(html,file)=>{
  html=html.replaceAll('Reservar plaza','Solicitar información');
  html=html.replace('</head>',`<link rel="stylesheet" href="/flagship-v8.css"><meta name="color-scheme" content="light dark"></head>`);
  if(file==='index.html' && !html.includes('v8-decision-ribbon')) html=html.replace('</main>',`${decisionRibbon}</main>`);
  html=html.replace('</body>',`${mobileDock(file)}<div class="v8-route-tag" aria-hidden="true">${routeLabel[file]||'Cosmo'}</div><script src="/flagship-v8.js"></script></body>`);
  return html;
};

export const pages=Object.fromEntries(Object.entries(basePages).map(([file,html])=>[file,enhance(html,file)]));
