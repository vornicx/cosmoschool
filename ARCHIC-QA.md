# ARCHIC QA — Cosmo School v9

## Page modes

| Page family | Mode | Primary job |
|---|---|---|
| Home | Atmosphere + Decide | Identificar la academia y abrir la ruta correcta |
| Cursos | Decide | Comparar persona, formato y necesidad |
| Cambridge | Decide | Entender B1—C2 y pedir orientación |
| Test de nivel | Engage + Convert | Transformar una duda en un siguiente paso |
| Guías | Discover | Responder búsquedas útiles y conectar con la oferta |
| Metodología / Nosotros | Story + Prove | Explicar enfoque e historia verificable |
| Matrícula / Contacto | Convert | Recoger contexto o abrir el canal adecuado |
| Legal / Gracias | Prove / Continue | Confianza y continuidad después del lead |

## Quality targets

- Client-ready: 84+
- Home: 82+
- Critical pages: 80+
- Mobile: 80+
- Section Gate: 16/20; hero: 17/20
- Hard gates: 0 failures
- High-severity AI Slop: 0

## Automated gates

- Quince rutas generadas y todos los enlaces internos resueltos.
- Un único CSS y un único JS diferido, ambos con hash de contenido.
- Bundle CSS menor de 180 KB y JS menor de 70 KB sin comprimir.
- Dieciocho derivados WebP; tres tamaños por cada imagen oficial.
- Imágenes con `srcset`, `sizes`, dimensiones, decoding y política de carga.
- Canonical, descripción, Open Graph, Twitter Card y manifest en cada ruta.
- Structured data por contexto: organización/local, breadcrumb, FAQ, artículo y aplicación educativa.
- Sitemap sin la página de agradecimiento y robots con declaración del sitemap.
- Demo protegida con `X-Robots-Tag: noindex, nofollow`.
- Cuatro formularios Netlify reales con honeypot, privacidad, atribución UTM y destino `/gracias/`.
- Test orientativo con ocho preguntas, disclaimer, resultado A1—C1 y CTA contextual.
- Sin rutas de imagen placeholder ni capas de contenido redundantes v5/v6/v7.

## Responsive gates

- Desktop editorial, tablet con densidad reducida y mobile táctil dedicado.
- Breakpoints principales: 1180, 1020 y 820 px.
- Dock móvil con cursos, nivel y WhatsApp.
- Objetivos táctiles de al menos 48 px.
- Selector, FAQ, test y lectura mantienen foco visible y navegación por teclado.
- `prefers-reduced-motion` desactiva transiciones no esenciales.

## Content integrity

Solo se conservan hechos publicados o ya validados para el proyecto: actividad desde 2015, dos centros en Écija, clases desde los 4 años, niños/adolescentes/adultos, presencial/online, one to one, intensivos, preparación Cambridge B1—C2, matrícula desde 1 de abril, teléfono, email y horario de recepción.

No se publican resultados, ratios, precios, profesores, testimonios o acreditaciones inventadas. El test no se presenta como prueba oficial y las guías remiten a Cambridge English cuando la información puede actualizarse.

## Release check

```bash
npm run check
```

Antes de producción: revisar preview desktop/mobile, confirmar datos comerciales variables, configurar notificaciones de Netlify Forms, retirar el `noindex` únicamente al sustituir el sitio oficial y enviar sitemap a Search Console.
