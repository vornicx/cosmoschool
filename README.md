# Cosmo School — Archic commercial prototype

Prototipo web completo para **Cosmo School (Écija)**. Construido como sitio multipágina estático, sin dependencias externas en build, para que pueda validarse con `npm run build` y ejecutarse con `npm run dev`.

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Build

```bash
npm run build
```

El resultado se genera en `dist/`.

## Páginas

- `/` — Home / Atmosphere
- `/cursos/` — Oferta completa / Decide
- `/cambridge/` — Preparación B1, B2, C1, C2 / Decide
- `/metodologia/` — Método / Story
- `/sobre-nosotros/` — Historia y valores / Story
- `/matricula/` — Captación / Convert
- `/contacto/` — Contacto, horarios y dos sedes / Convert
- `/legal/` — Marco legal / Prove

## Archic quality pass

- Dirección visual editorial y específica para una academia de inglés, no plantilla educativa genérica.
- Fotografía utilizada como elemento estructural, con recursos publicados por Cosmo School en su web actual.
- Hero de alto impacto, jerarquía tipográfica fuerte y layout asimétrico.
- Motion: hero reveal, image zoom, scroll reveal, stagger, microinteracciones, header dinámico, parallax sutil y transición interna de página.
- `prefers-reduced-motion` respetado.
- Responsive dedicado para desktop, tablet y móvil; navegación móvil propia.
- CTA principal coherente: matrícula / solicitud de información.
- Formulario de demostración con estado de éxito y continuación por WhatsApp.
- Enlaces de teléfono, email, Instagram y mapas.
- Sin testimonios, profesores, cargos o cifras inventadas.

## Datos y fuentes

Se conserva información pública de Cosmo School: actividad desde 2015, dos sedes en Écija, clases desde 4 años, niños/adolescentes/adultos, presencial/online, one-to-one, intensivos, preparación Cambridge B1–C2, matrícula a partir del 1 de abril, teléfono, email y horarios de recepción.

El formulario es demostrativo y no envía datos a un backend. Los textos legales definitivos deben validarse antes de publicación.
