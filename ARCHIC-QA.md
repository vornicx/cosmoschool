# ARCHIC QA — Cosmo School

## Page modes

| Page | Mode | Primary job |
|---|---|---|
| Home | Atmosphere + Decide | Make Cosmo desirable and route the visitor to the right course |
| Cursos | Decide | Help families/students compare the right format |
| Cambridge | Decide | Explain levels, preparation path and next step clearly |
| Metodología | Story | Build confidence in how the learning process works |
| Sobre nosotros | Story / Prove | Establish history and credibility without invented proof |
| Matrícula | Convert | Turn intent into a useful first conversation |
| Contacto | Convert | Make the correct contact action frictionless |
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

- Build uses no third-party package dependency.
- All 8 internal routes are generated.
- Internal navigation is statically checked.
- Required deployed image assets are statically checked and must exceed the minimum file-size threshold.
- Legacy placeholder image paths are rejected from generated HTML.
- Desktop and dedicated mobile compositions each retain their authored H1.
- Mobile navigation has an explicit open/close state.
- Form submit has a defined demonstration state and does not pretend to persist data.
- Phone, email, Instagram, WhatsApp and map actions have explicit destinations.
- Every route has a route-specific meta description.
- Every route receives EducationalOrganization structured data.
- `prefers-reduced-motion` is respected.
- Purpose-built mobile modules are required for method, enrolment and contact instead of relying on scaled desktop UI.

## Business specificity

- Home includes a course finder that routes by age and intent.
- The finder can continue directly to WhatsApp with contextual copy instead of forcing the visitor to repeat the same information.
- Courses compares presencial, online, one-to-one and intensive formats.
- Cambridge explains the path from level selection to exam preparation without promising an unconfirmed place or exam date.
- Matrícula tells the visitor which four pieces of information make the first conversation useful.
- Contact is channel-led: call for immediate questions, WhatsApp for quick context and email for detailed enquiries.
- Mobile methodology is a sequential learning flow; mobile About uses swipeable factual proof; mobile enrolment is a checklist; mobile contact is tap-first.

## Motion system

- Hero image entrance scale.
- Hero kicker/title/CTA stagger.
- Scroll-triggered section reveal.
- Staggered card/list reveals.
- Subtle image parallax on desktop.
- Hover image scale and directional affordances.
- Dynamic sticky header that compresses and hides/reappears with scroll direction.
- Short internal page-exit transition.
- v6 mobile modules use lightweight in-view motion rather than inheriting desktop motion wholesale.
- Motion is disabled/reduced for users requesting reduced motion.

## Content and source integrity

The prototype deliberately removes generic WordPress/LearnPress testimonials and does not invent staff members, awards, ratios or success rates. It preserves facts currently published by Cosmo School: activity since 2015, two Écija centres, classes from age 4, children/adolescents/adults, on-site/online, one-to-one, intensive courses, Cambridge B1–C2 preparation, enrolment from 1 April, contact details and reception hours.

The v6 image set is fetched during build from media currently published on Cosmo School's official website and then served locally from `dist/images/`. Availability, academic timetables and definitive legal text remain client-confirmation items before production publication.
