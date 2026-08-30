# Cosmo School — Archic growth prototype v9

Prototipo web completo para **Cosmo School (Écija)**. Es un sitio multipágina real y construible, pensado para presentar una alternativa comercial publicable, no una landing de demostración aislada.

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Build y QA

```bash
npm run build
npm run check
```

El resultado se genera en `dist/`. GitHub Actions ejecuta `npm run check` en cada push a `main` y en pull requests.

## Arquitectura

- `/` — Home / orientación + captación local
- `/cursos/` — Oferta y comparación / Decide
- `/cambridge/` — B1, B2, C1, C2 / Decide
- `/test-de-nivel/` — Test orientativo en ocho pasos / Engage + Convert
- `/guias/` — Hub de contenidos útiles / Discover
- `/guias/elegir-curso-ingles/` — Guía por edad, objetivo y formato / Discover
- `/guias/elegir-examen-cambridge/` — Decisión B1–C2 / Discover
- `/guias/diferencias-b1-b2/` — Comparación práctica de niveles / Discover
- `/guias/preparar-speaking-cambridge/` — Rutina de práctica oral / Discover
- `/metodologia/` — Método / Story
- `/sobre-nosotros/` — Historia y datos verificables / Story + Prove
- `/matricula/` — Solicitud de matrícula / Convert
- `/contacto/` — Canales, horarios y dos sedes / Convert
- `/legal/` — Marco legal de la propuesta / Prove
- `/gracias/` — Confirmación de lead + continuidad por WhatsApp / Convert

## Capas del proyecto

- `scripts/v3-site.gz.b64`, `scripts/v3-style.gz.b64` y `scripts/v3-app.gz.b64`: sistema visual base y páginas desktop/mobile.
- `src/site-v5.mjs`: selector de curso, comparador de formatos, plan Cambridge, matrícula, contacto y FAQ.
- `src/site-v6.mjs`: fotografía oficial, metadescripciones por ruta, structured data y módulos móviles específicos por intención.
- `src/site-v7.mjs`: captación local, selector de sede, formularios Netlify, página de confirmación, schema local y recorridos de contacto con contexto.
- `public/quality-v5.*` y `public/quality-v6.*`: dirección visual, accesibilidad, interacción y mobile específico.
- `public/local-growth-v7.*`: experiencia de captación local desktop.
- `public/local-growth-v7-mobile.css`: interfaz móvil propia para sedes y solicitud de información; se empaqueta dentro de la hoja de producción durante el build.
- `src/site-v8.mjs`: salida final unificada; elimina capas redundantes y bloquea el nuevo copy comercial.
- `public/quality-v8.*`: sistema visual profesional compartido por las nueve rutas, motion y accesibilidad de navegación.
- `src/site-v9.mjs`: arquitectura de alcance, metadatos por ruta, test orientativo, FAQ y guías editoriales.
- `public/quality-v9.*`: componentes de crecimiento, lectura, test, accesibilidad y responsive de las nuevas rutas.
- `ARCHIC-DESIGN-v9.md`: contrato de diseño, benchmark, performance budget y fidelity ledger.

## Rendimiento de producción

El build no despliega las capas históricas como peticiones separadas. Las empaqueta en un único CSS y un único JS con nombre versionado por contenido y caché inmutable.

- 1 CSS de producción (~96 KB sin comprimir).
- 1 JS diferido (~24 KB sin comprimir).
- 18 derivados WebP responsivos en 480, 768 y 1024/1280 px.
- Imágenes desplegadas: ~519 KB frente a ~1,7 MB de originales.
- `width`, `height`, `srcset`, `sizes`, `loading` y `decoding` en todas las imágenes de contenido.
- `sitemap.xml`, `robots.txt`, manifest, canonical, Open Graph, Twitter Card y breadcrumbs estructurados.

## Captación real

Los formularios `cosmo-interest`, `cosmo-enrolment` y sus versiones móviles son **formularios Netlify reales**, no formularios de mentira. En un sitio desplegado en Netlify pueden registrar solicitudes y redirigen a `/gracias/`.

Cada lead incluye, además de los datos introducidos por el usuario:

- ruta desde la que se envió;
- referencia (`document.referrer`) cuando existe;
- `utm_source`;
- `utm_medium`;
- `utm_campaign`.

Esto permite que Cosmo pueda distinguir posteriormente tráfico directo, redes sociales, QR, campañas u otras fuentes. Las notificaciones por email de Netlify Forms deben configurarse en el panel de Netlify cuando la dueña apruebe usar el sistema en producción.

## Deploy de demostración

El `netlify.toml` incluye `X-Robots-Tag: noindex, nofollow` deliberadamente. La URL de demostración **no debe competir en Google con la web oficial actual**.

Cuando este proyecto sustituya realmente a la web oficial y se publique en `academiacosmoschool.com`, hay que retirar ese header y revisar entonces canonical, Search Console y sitemap.

## Archic quality pass v9

- Dirección visual específica para Cosmo; el estándar Archic controla calidad, no estética repetida.
- Fotografía empaquetada localmente durante el build a partir de recursos publicados por Cosmo School.
- Home con orientación por edad/objetivo y captación local.
- Prueba de nivel orientativa sin registro, con resultado inmediato y disclaimer explícito.
- Cuatro guías evergreen conectadas con cursos y Cambridge para ampliar alcance orgánico con contenido útil.
- Selector de centro con rutas a Maps en desktop; en móvil se sustituye por acciones táctiles ligeras, no por el mismo componente responsive.
- Cursos con comparación entre presencial, online, one-to-one e intensivo.
- Cambridge con recorrido de decisión B1—C2.
- Matrícula centrada en edad, objetivo, nivel/contexto y disponibilidad.
- Contacto con WhatsApp preconfigurado según intención.
- Mobile no es un simple reflow: mantiene componentes y recorridos escritos específicamente para pantalla pequeña.
- Motion jerárquico, microinteracciones, scroll reveal y `prefers-reduced-motion`.
- `EducationalOrganization` + `LocalBusiness`, dos localizaciones, horario de recepción, `areaServed` y catálogo de servicios en JSON-LD.
- `BreadcrumbList`, `FAQPage`, `Article` y `WebApplication` donde corresponde.
- Sin testimonios, profesores, ratios o resultados inventados.
- QA automática de rutas, assets, enlaces, fotografía, structured data, formularios y señales de experiencia móvil.

## Información pública utilizada

La propuesta conserva información publicada por Cosmo School: actividad desde 2015, dos sedes en Écija, clases desde 4 años, niños/adolescentes/adultos, presencial/online, one-to-one por las mañanas, intensivos, preparación Cambridge B1–C2, curso regular septiembre–junio, matrícula desde el 1 de abril, teléfono, email y horario de recepción.

Antes de publicación definitiva deben confirmarse con Cosmo disponibilidad de grupos, horarios académicos, precios, testimonios/autorizaciones, contenido de equipo y cualquier dato comercial que pueda variar. La política de privacidad enlazada desde los formularios es la publicada actualmente por Cosmo School y debe revisarse antes de sustituir la web oficial.
