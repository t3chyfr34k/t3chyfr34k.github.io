# T3chyFr34k Portfolio — UI Redesign Plan

## Direction

**Monochrome editorial / engineer's lab.** Keep the portfolio quiet, sharp, and credible: black, white, graphite, thin borders, generous whitespace, and purposeful motion. Avoid the generic neon cyberpunk template.

## Design rules

- Palette: near-black canvas, white primary text, muted gray secondary text, hairline borders. Use an accent only when it communicates meaning.
- Typography: one sans-serif family, restrained display scale, readable body width, consistent line-height, clear hierarchy.
- Layout: responsive 12-column desktop grid; single-column mobile; consistent content width and spacing scale.
- Motion: short entrance transitions, subtle hover/focus feedback, one lightweight 3D orbital object. No scroll-jacking or aggressive parallax.
- Accessibility: semantic landmarks, keyboard-visible focus, reduced-motion support, readable contrast, descriptive image alt text, comfortable touch targets.
- Performance: optimize the portrait, lazy-load below-the-fold imagery, avoid animation libraries, keep static deployment.

## Proposed page structure

1. **Navigation** — compact wordmark, Work, About, Contact, clear focus states.
2. **Hero** — short professional positioning statement and two actions (View Work, Contact). Portrait in a clean frame with restrained 3D orbit behind it. Avoid floating badges overlapping the face or crowding mobile layouts.
3. **Focus areas** — three clear areas: IT Support, Cybersecurity, Data Analyst. Do not imply unverified experience or credentials.
4. **Selected work** — up to three project cards. Each describes problem, implementation, tools, and verified demo/source links. Mark planned work as planned. Never invent metrics.
5. **About / approach** — concise explanation of practical troubleshooting, secure systems, and data-driven problem solving.
6. **Contact** — GitHub, LinkedIn, and approved direct contact. No fake form without a working backend.

## Content and component audit

- Keep React + TypeScript + Vite.
- Verify project titles, statuses, links, and claims against actual code before redesigning cards.
- Prioritize IT Support, Cybersecurity, and Data Analyst positioning. Do not promote SAP/ERP as a core focus unless explicitly approved.
- Optimize and validate portrait crop on phone, tablet, and desktop.
- Keep content in data modules rather than duplicated JSX.

## Implementation phases

### Phase 1 — Foundation
- Finish Tailwind v4 migration and resolve dependency audit.
- Add consistent spacing, typography, and color tokens.
- Optimize portrait; verify root-path deployment.
- Validate heading order, keyboard focus, and reduced motion.

### Phase 2 — Hero and navigation
- Simplify header and hero hierarchy.
- Keep 3D object behind the portrait, low contrast, with reduced-motion fallback.
- Ensure primary CTA is visible on common mobile viewports.

### Phase 3 — Work and content
- Normalize project cards and project detail pages.
- Add problem / implementation / outcome content only where evidence exists.
- Remove dead links, stale claims, and unrelated content.

### Phase 4 — Quality gate
- Run npm ci, npm run security, npm run lint, npm test, and npm run build.
- Check widths 320, 375, 768, 1024, and 1440 pixels.
- Test keyboard-only navigation, reduced-motion settings, and external links.
- Verify deployed site and all assets after merge.

## Acceptance criteria

- Minimal monochrome visual system; no excessive gradients or decorative clutter.
- Every link works and each project is accurately labeled.
- No horizontal overflow at 320px.
- Reduced-motion preference disables nonessential animation.
- Secret scan and dependency audit pass; no moderate-or-higher npm advisories remain.
- Lint, tests, TypeScript checks, and production build pass.
- Production deploys only from main.
