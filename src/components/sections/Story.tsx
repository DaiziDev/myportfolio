"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useContent } from "@/lib/i18n";
import { sceneState } from "@/lib/sceneState";

gsap.registerPlugin(ScrollTrigger);

// Scroll progress (0 → 1) to morph value (0 → 3), with pauses so each shape can be admired:
// hold cloud, morph to code, hold, morph to interface, hold, morph to test report, hold.
const KEYS: [number, number][] = [
  [0, 0],
  [0.06, 0],
  [0.24, 1],
  [0.36, 1],
  [0.54, 2],
  [0.66, 2],
  [0.84, 3],
  [1, 3],
];

function progressToMorph(p: number) {
  for (let i = 1; i < KEYS.length; i++) {
    const [p1, m1] = KEYS[i];
    const [p0, m0] = KEYS[i - 1];
    if (p <= p1) return m0 + ((p - p0) / (p1 - p0)) * (m1 - m0);
  }
  return 3;
}

// A tall section with a sticky screen: scrolling through it morphs the particles
// cloud → code → interface → test report while the matching chapter text swaps in.
export default function Story() {
  const root = useRef<HTMLElement>(null);
  const t = useContent();

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-chapter]");
      gsap.set(items.slice(1), { autoAlpha: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // onRefresh covers reloads and language switches that land in the middle of the section.
          onRefresh: (self) => {
            sceneState.morphParts.story = progressToMorph(self.progress);
          },
          onUpdate: (self) => {
            sceneState.morphParts.story = progressToMorph(self.progress);
          },
        },
      });

      // Chapter 1 is visible at the start; each next one replaces the previous
      // in the middle of the matching morph (timeline runs from 0 to 1, like the scroll progress).
      const swaps = [0.16, 0.46, 0.76];
      items.forEach((item, i) => {
        if (i === 0) return;
        const at = swaps[i - 1];
        tl.to(items[i - 1], { autoAlpha: 0, y: -40, duration: 0.06 }, at - 0.06).to(
          item,
          { autoAlpha: 1, y: 0, duration: 0.06 },
          at,
        );
      });
      tl.to("[data-progress]", { scaleY: 1, ease: "none", duration: 1 }, 0);
    },
    { scope: root },
  );

  return (
    <section id="story" ref={root} className="relative h-[650vh]">
      <div className="sticky top-0 flex h-svh items-end px-5 pb-16 sm:items-center sm:px-10 sm:pb-0">
        <div className="relative grid w-full max-w-md">
          {t.chapters.map((c, i) => (
            <div key={i} data-chapter className="col-start-1 row-start-1">
              <p className="mb-4 font-mono text-sm text-cyan">
                0{i + 1} / 0{t.chapters.length}
              </p>
              <h2 className="mb-4 text-5xl leading-none font-bold tracking-tighter sm:text-7xl">{c.title}</h2>
              <p className="text-base text-fg/70 sm:text-lg">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 right-5 hidden h-40 w-px -translate-y-1/2 bg-line sm:right-10 sm:block">
          <div data-progress className="h-full w-px origin-top scale-y-0 bg-gradient-to-b from-cyan via-violet to-pink" />
        </div>
      </div>
    </section>
  );
}
