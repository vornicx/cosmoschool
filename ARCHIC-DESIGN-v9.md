# Cosmo School · Archic Growth System v9

## Objetivo

Hacer que Cosmo compita como academia local consolidada, no como una plantilla educativa. La web debe resolver cuatro trabajos: explicar la oferta, orientar una decisión, demostrar presencia local y generar una conversación con contexto.

## Benchmark aplicado

Se revisaron patrones públicos de English Connection, British Council España, Vaughan e International House Madrid.

| Patrón observado | Decisión Cosmo |
|---|---|
| Entrada por edad, objetivo o modalidad | Tres rutas directas en home y selector en tres pasos |
| Prueba de nivel como acción principal | Test orientativo propio, sin registro y con disclaimer |
| Cambridge como recorrido específico | Hub B1—C2, comparación, CTA de orientación y guías conectadas |
| Autoridad mediante hechos visibles | 2015, dos centros, desde 4 años y B1—C2; sin estadísticas inventadas |
| Contenido evergreen para búsquedas largas | Hub y cuatro guías que responden dudas previas a la matrícula |
| Localización y contacto cercanos a la conversión | Dos sedes, Maps, horario, llamada y WhatsApp contextual |

La propuesta no copia la estética de ninguna referencia. Conserva la dirección Cosmo v8 —blanco, cobalto, coral, tinta, fotografía oficial y geometría recta— y adopta únicamente patrones de decisión y descubrimiento.

## Arquitectura comercial

1. La home responde en el primer viewport qué es Cosmo, para quién es y dónde está.
2. Una banda factual reduce incertidumbre sin testimonios o claims no aprobados.
3. Las rutas “Para mi hijo/a”, “Para mí” y “Cambridge” evitan obligar al usuario a entender nombres de producto.
4. El selector orienta por persona, objetivo y formato.
5. El test convierte una duda frecuente en interacción útil.
6. Las guías capturan búsquedas informativas y conducen hacia orientación, cursos o contacto.
7. Los formularios Netlify mantienen edad/objetivo/sede y atribución UTM.

## Sistema visual

- Blanco `#FFFFFF`: claridad, velocidad percibida y contraste.
- Cobalto `#1737D1`: marca, estructura, navegación y autoridad.
- Coral `#F04438`: conversión y momentos decisivos.
- Tinta `#101522`: jerarquía editorial.
- Sin gradientes, glassmorphism, bento grids decorativos ni radios excesivos.
- Listas, líneas y raíles convierten información extensa en una lectura rápida.
- Tipografía grande solo cuando organiza la página; nunca ocupa el viewport sin contenido útil.
- Mobile usa acciones táctiles, listas verticales y dock persistente; no replica el escritorio reducido.

## Alcance orgánico

- Quince rutas estáticas con metadescripción y canonical propios.
- Open Graph y Twitter Card por ruta.
- `EducationalOrganization`, `LocalBusiness`, `BreadcrumbList`, `FAQPage`, `Article` y `WebApplication` en JSON-LD.
- `sitemap.xml`, `robots.txt` y enlaces internos entre intención informativa y comercial.
- Cuatro guías escritas para utilidad real, sin páginas B1/B2/C1/C2 duplicadas o doorway pages.
- Recursos oficiales Cambridge enlazados cuando un formato de examen puede cambiar.

## Performance budget

| Recurso | Antes v8 | v9 |
|---|---:|---:|
| CSS solicitado por página | 5 archivos | 1 bundle versionado |
| JS solicitado por página | 5 archivos | 1 bundle diferido |
| Imágenes desplegadas | ~1,7 MB | ~519 KB |
| Variantes responsivas | 0 | 18 WebP |
| Peso total de `dist/` | ~1,9 MB | ~948 KB |

Los bundles usan hash de contenido y caché inmutable. Las imágenes incluyen dimensiones intrínsecas, `srcset`, `sizes`, prioridad solo para el primer visual y lazy loading posterior.

## Integridad y límites

- El test mide únicamente una muestra breve de gramática y vocabulario. El resultado A1—C1 se presenta como orientación y nunca como certificado.
- No se inventan ratios, aprobados, precios, profesores, acreditaciones o testimonios.
- Los hechos comerciales que pueden variar deben confirmarse antes de publicar.
- El entorno demo conserva `X-Robots-Tag: noindex, nofollow` para no competir con el dominio oficial. Debe retirarse solo al convertir este build en la web canónica.

## QA

`node scripts/check.mjs` verifica 15 rutas, enlaces internos, dos bundles, 18 imágenes responsivas, formularios Netlify, metadatos, schemas, sitemap, manifest, contenido editorial y salvaguarda de indexación.

La inspección visual automatizada local sigue limitada porque el entorno no incluye binarios de Chromium, Firefox o WebKit. Los conceptos desktop/mobile sí se contrastaron visualmente antes de implementar; la captura del build final debe ejecutarse en el preview de despliegue antes de producción.
