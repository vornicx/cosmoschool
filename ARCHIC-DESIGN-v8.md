# Cosmo School · Archic Design System v8

## Objetivo

Convertir el prototipo acumulativo anterior en una experiencia coherente, profesional y viva para una academia local consolidada. La web debe ayudar a elegir por edad, objetivo y formato, y llevar a una conversación útil con Cosmo.

## Dirección visual

- Blanco real como fondo principal.
- Azul cobalto `#1737D1` como color de marca y estructura.
- Coral `#F04438` reservado para acciones prioritarias.
- Tinta `#101522` para jerarquía y contraste.
- Tipografía sans serif moderna, compacta y editorial.
- Fotografía oficial de Cosmo con encuadres grandes y rectangulares.
- Líneas, raíles y subrayados como lenguaje gráfico; sin bento grids ni tarjetas decorativas.
- Radios mínimos y controles con una geometría más institucional.

## Arquitectura de la home

1. Oferta clara: “Inglés para la vida real”.
2. Tres rutas de entrada: familia, adulto y Cambridge.
3. Selector de curso en tres pasos.
4. Oferta completa explicada por necesidad.
5. Cambridge como recorrido específico.
6. Formatos y proceso de matrícula.
7. Dos centros y datos de contacto.

Las capas `qv5`, `v6-mobile` y los añadidos `v7` redundantes se eliminan de la salida final. Matrícula conserva los formularios Netlify reales de v7.

## Responsive

- Desktop: composición editorial asimétrica, imagen dominante y raíles horizontales.
- Tablet: el selector pasa a una única columna y Cambridge reduce densidad.
- Mobile: experiencia propia, no reflow. Fotografía primero, mensaje después, rutas en lista, selector táctil, botones de al menos 48 px y dock de conversión persistente.
- Breakpoints auditados por CSS: `1020px` y `820px`.

## Motion

- Entrada jerárquica del hero.
- Subrayado dibujado del mensaje principal.
- Parallax mínimo en fotografía solo con puntero preciso.
- Hover direccional en listas y rutas.
- Menú móvil con estado ARIA sincronizado.
- `prefers-reduced-motion` mantiene una experiencia completa sin animaciones.

## Fidelity ledger

| Punto | Concepto | Implementación |
|---|---|---|
| Hero | Blanco, cobalto, coral, foto dominante | Mismos tokens, composición asimétrica y fotografía oficial |
| Copy principal | “Inglés para la vida real” | Copy bloqueada en desktop y mobile |
| Selector | Tres pasos + recomendación | Selector existente preservado y rediseñado |
| Cambridge | Nivel, plan y rail B1—C2 | Banda cobalto y niveles sin claims inventados |
| Centros | Dos direcciones con acciones | Datos reales, Maps y horario conservados |
| Mobile | Flujo vertical táctil | Componentes móviles dedicados y dock persistente |

## QA

- `npm run check`: 9 rutas, assets, formularios Netlify, structured data y flujo de agradecimiento.
- No hay claims de resultados, ratios, precios, testimonios ni profesores inventados.
- El navegador remoto disponible bloqueó URLs locales y `data:`. Chromium local no estaba instalado y su descarga quedó bloqueada; queda pendiente una captura renderizada final en un entorno con navegador disponible.
