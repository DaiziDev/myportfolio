# DaiziDev — Portfolio

Portfolio of Daizi, fullstack developer (Angular, Next.js, React) who loves motion.

The hero is a WebGL particle system that tells a story while you scroll: **an idea** (a cloud) → **becomes code** → **becomes an interface**, before the particles sign the page at the very bottom.

Also: EN/FR switch, mobile menu, phone-tilt interaction, WebGL ripple on project images, reduced-motion support and a WebGL-free fallback.

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
npm run build   # static site generated in dist/
npm run lint
```

## Where to edit

| What | File |
| --- | --- |
| Texts (English + French), projects, skills, links, resume | `src/lib/content.ts` |
| Shapes drawn by the particles (code + interface) | `src/components/scene/shapes.ts` |
| Particle shader (morph, mouse effect, colors) | `src/components/scene/Particles.tsx` |
| Scroll pacing of the story | `src/components/sections/Story.tsx` (`KEYS`) |
| Colors and fonts | `src/app/globals.css`, `src/app/layout.tsx` |

## Resume download

Drop your PDF in `public/` (e.g. `public/cv-daizi.pdf`) and set `profile.cv` to `"/cv-daizi.pdf"` in `src/lib/content.ts`. The download button appears automatically.

## Deploy (Render)

Static Site with:

- Build command: `npm install && npm run build`
- Publish directory: `dist`
