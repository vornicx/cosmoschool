# Cosmo School — Archic commercial prototype

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

## Archic quality pass

- Dirección visual específica para Cosmo; el estándar Archic controla calidad, no estética repetida.
- Fotografía empaquetada localmente durante el build a partir de recursos publicados por Cosmo School.
- Home con orientación por edad/objetivo y captación local.
- Selector de centro con rutas a Maps en desktop; en móvil se sustituye por acciones táctiles ligeras, no por el mismo componente responsive.
- Cursos con comparación entre presencial, online, one-to-one e intensivo.
- Cambridge con recorrido de decisión B1—C2.
- Matrícula centrada en edad, objetivo, nivel/contexto y disponibilidad.
- Contacto con WhatsApp preconfigurado según intención.
- Mobile no es un simple reflow: mantiene componentes y recorridos escritos específicamente para pantalla pequeña.
- Motion jerárquico, microinteracciones, scroll reveal y `prefers-reduced-motion`.
- `EducationalOrganization` + `LocalBusiness`, dos localizaciones, horario de recepción, `areaServed` y catálogo de servicios en JSON-LD.
- Sin testimonios, profesores, ratios o resultados inventados.
- QA automática de rutas, assets, enlaces, fotografía, structured data, formularios y señales de experiencia móvil.

## Información pública utilizada

La propuesta conserva información publicada por Cosmo School: actividad desde 2015, dos sedes en Écija, clases desde 4 años, niños/adolescentes/adultos, presencial/online, one-to-one por las mañanas, intensivos, preparación Cambridge B1–C2, curso regular septiembre–junio, matrícula desde el 1 de abril, teléfono, email y horario de recepción.

Antes de publicación definitiva deben confirmarse con Cosmo disponibilidad de grupos, horarios académicos, precios, testimonios/autorizaciones, contenido de equipo y cualquier dato comercial que pueda variar. La política de privacidad enlazada desde los formularios es la publicada actualmente por Cosmo School y debe revisarse antes de sustituir la web oficial.
