# DaiziDev — Portfolio

Portfolio of Daizi, fullstack developer (Angular, Next.js, React) who loves motion.

The hero is a WebGL particle system that tells a story while you scroll: **an idea** (a cloud) → **becomes code** → **becomes an interface**.

## Stack

- [Next.js](https://nextjs.org) (static export) + TypeScript
- [React Three Fiber](https://r3f.docs.pmnd.rs) + custom GLSL shaders for the particles
- [GSAP](https://gsap.com) (ScrollTrigger, SplitText) for scroll and text animations
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- Tailwind CSS 4
- EmailJS for the contact form

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site generated in out/
npm run lint
```

## Where to edit

| What | File |
| --- | --- |
| Texts, projects, skills, links | `src/lib/content.ts` |
| Shapes drawn by the particles (code + interface) | `src/components/scene/shapes.ts` |
| Particle shader (morph, mouse effect, colors) | `src/components/scene/Particles.tsx` |
| Scroll pacing of the story | `src/components/sections/Story.tsx` (`KEYS`) |
| Colors and fonts | `src/app/globals.css`, `src/app/layout.tsx` |

## Deploy (Render)

Static Site with:

- Build command: `npm install && npm run build`
- Publish directory: `out`
