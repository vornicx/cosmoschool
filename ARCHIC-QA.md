# ARCHIC QA — Cosmo School

## Page modes

| Page | Mode | Primary job |
|---|---|---|
| Home | Atmosphere | Make the academy feel established, contemporary and desirable |
| Cursos | Decide | Help families/students choose the right format |
| Cambridge | Decide | Explain levels and exam preparation clearly |
| Metodología | Story | Build confidence in how Cosmo teaches |
| Sobre nosotros | Story / Prove | Establish history, values and credibility |
| Matrícula | Convert | Turn intent into an information request |
| Contacto | Convert | Make contact frictionless |
| Legal | Prove | Provide trust/compliance structure |

## Quality targets

- Client-ready target: **84+**
- Home target: **82+**
- Critical pages: **80+**
- Mobile target: **80+**
- Section Gate: **16/20**, hero target **17/20**
- Hard gates: **0 failures**
- High-severity AI Slop signals: **0**

## Implemented hard-gate checks

- Build runs without external packages.
- All 8 internal routes are generated.
- Internal navigation is statically checked.
- Local image assets are statically checked.
- One H1 per page is statically checked.
- Mobile navigation has an explicit open/close state.
- Form submit has a defined success state; it does not pretend to send data.
- Phone, email, Instagram, WhatsApp and maps use explicit destinations.
- `prefers-reduced-motion` is respected.
- Layout has dedicated 1100 / 820 / 540 px responsive passes.

## Motion system

- Hero image entrance scale.
- Hero kicker/title/CTA stagger.
- Scroll-triggered section reveal.
- Staggered card/list reveals.
- Subtle image parallax on desktop.
- Hover image scale and directional affordances.
- Dynamic sticky header that compresses and hides/reappears with scroll direction.
- Short internal page-exit transition.
- Motion is disabled/reduced for users requesting reduced motion.

## Content integrity

The prototype deliberately removes generic WordPress/LearnPress testimonials and does not invent staff members, awards or success rates. It preserves verified public facts from Cosmo School's existing site: activity since 2015, two Écija centres, classes from age 4, children/adolescents/adults, on-site/online, one-to-one, intensive courses, Cambridge B1–C2 preparation, enrolment from 1 April, contact details and reception hours.
