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

- `/` — Home / Atmosphere + orientación de curso
- `/cursos/` — Oferta y comparación / Decide
- `/cambridge/` — B1, B2, C1, C2 / Decide
- `/metodologia/` — Método / Story
- `/sobre-nosotros/` — Historia y datos verificables / Story + Prove
- `/matricula/` — Preparación de la matrícula / Convert
- `/contacto/` — Canales, horarios y dos sedes / Convert
- `/legal/` — Marco legal de la propuesta / Prove

## Capas del proyecto

- `scripts/v3-site.gz.b64`, `scripts/v3-style.gz.b64` y `scripts/v3-app.gz.b64`: sistema visual base y páginas desktop/mobile.
- `src/site-v5.mjs`: componentes de decisión específicos del negocio: selector de curso, comparador de formatos, plan Cambridge, matrícula, contacto y FAQ.
- `src/site-v6.mjs`: capa de publicación: fotografía procedente de la web oficial de Cosmo, metadescripciones por ruta, datos estructurados y módulos móviles específicos por intención.
- `public/quality-v5.*`: sistema visual e interacción de los componentes de negocio.
- `public/quality-v6.*`: accesibilidad, conversión y segunda dirección de interfaz para móvil.

## Archic quality pass

- Dirección visual editorial específica para una academia de inglés; no se reutiliza una plantilla educativa genérica.
- Fotografía empaquetada localmente durante el build a partir de recursos publicados en la web oficial de Cosmo School.
- Home con herramienta de orientación por edad/objetivo y continuación directa a la conversación adecuada.
- Cursos con comparación real entre presencial, online, one-to-one e intensivo.
- Cambridge con recorrido de decisión y niveles B1—C2.
- Matrícula centrada en los datos que realmente ayudan a orientar al alumno.
- Contacto tap-first en móvil: llamada, WhatsApp y email, además de horario y centros.
- Mobile no es un simple reflow: metodología, sobre nosotros, matrícula y contacto tienen módulos diseñados específicamente para pantalla pequeña.
- Motion jerárquico, microinteracciones, scroll reveal y `prefers-reduced-motion`.
- Metadescripciones específicas por ruta y `EducationalOrganization` en JSON-LD.
- Sin testimonios, profesores, cargos, ratios o resultados inventados.
- QA automática de rutas, assets, enlaces internos, fotografía, metadatos, structured data y señales funcionales del negocio.

## Información pública utilizada

La propuesta conserva información publicada por Cosmo School: actividad desde 2015, dos sedes en Écija, clases desde 4 años, niños/adolescentes/adultos, presencial/online, one-to-one por las mañanas, intensivos, preparación Cambridge B1–C2, curso regular septiembre–junio, matrícula desde el 1 de abril, teléfono, email y horario de recepción.

El formulario incluido en la propuesta sigue siendo demostrativo y no persiste datos en un backend. Antes de publicar para cliente deben confirmarse textos legales definitivos, disponibilidad de grupos, horarios académicos y cualquier dato comercial que pueda variar.
