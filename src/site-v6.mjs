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
    'https://www.facebook.com/cosmoschool2015/'
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

  for (const [from, to] of Object.entries(imageMap)) {
    html = html.replaceAll(from, to);
  }

  const description = descriptions[file];
  if (description) {
    const meta = `<meta name="description" content="${description}">`;
    if (/<meta name="description" content="[^"]*">/.test(html)) {
      html = html.replace(/<meta name="description" content="[^"]*">/, meta);
    } else {
      html = html.replace('</head>', `${meta}</head>`);
    }
  }

  html = html
    .replace('data-finder-result>', 'data-finder-result aria-live="polite">')
    .replace('</head>', `${schema}</head>`);

  return html;
};

export const pages = Object.fromEntries(
  Object.entries(basePages).map(([file, html]) => [file, enhance(html, file)])
);
