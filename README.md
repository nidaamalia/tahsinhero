![TahsinHero — A playful learning journey through Arabic sounds](docs/banner.svg)

# TahsinHero

An interactive tahsin-learning frontend organised around articulation points and letter characteristics. Built with React, TypeScript, React Router, Motion, Tailwind CSS, and Vite.

## What to explore

- A map-style entry point linking learning missions.
- Lessons on makhraj, including throat, tongue, lips, and nasal resonance.
- Letter-characteristic lessons and a pocket-reference page.
- Shared navigation, animated learning components, and a language context.

## Run locally

Use Node.js 22 LTS and npm. The current lessons are bundled in the app; no AI API key is required to browse them.

```bash
git clone https://github.com/nidaamalia/tahsinhero.git
cd tahsinhero
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
npm run preview
```

`lint` currently runs TypeScript checking rather than an ESLint ruleset.

## Code tour

- [App.tsx](src/App.tsx): lesson routes and shared providers.
- [MapPage.tsx](src/pages/MapPage.tsx): mission selection.
- [LanguageContext.tsx](src/contexts/LanguageContext.tsx): language state.
- [translations.ts](src/locales/translations.ts): translated interface content.
- [components](src/components): common learning navigation and presentation.

## Scope

This is a learning-interface prototype, not an automated recitation assessor. It does not claim to detect pronunciation errors or certify mastery. Lessons should be reviewed by a qualified teacher before classroom use. Learner accounts, persistent progress, and speech scoring are outside the current implementation.

## Next engineering milestones

Keyboard and screen-reader walkthroughs, progress persistence, and tests for lesson navigation would strengthen the learning experience without implying unimplemented AI capabilities.
