"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { profile } from "@/lib/content";
import { PRELOADER_DONE } from "../ui/Preloader";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Resolved now: the play() callback runs later, inside the preloader's GSAP context.
      const title = root.current!.querySelector<HTMLElement>("[data-title]")!;
      const fades = gsap.utils.toArray<HTMLElement>("[data-fade]");
      gsap.set(title, { autoAlpha: 0 });
      gsap.set(fades, { opacity: 0, y: 20 });

      // Split once the preloader is gone so web fonts are loaded and lines break correctly.
      const play = () => {
        const split = SplitText.create(title, { type: "lines", mask: "lines", linesClass: "line-mask" });
        gsap.set(title, { autoAlpha: 1 });
        gsap
          .timeline({ delay: 0.3 })
          .from(split.lines, { yPercent: 110, duration: 1.3, stagger: 0.12, ease: "expo.out" })
          .to(fades, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=0.8");
      };
      window.addEventListener(PRELOADER_DONE, play, { once: true });

      // The title drifts up and fades as you leave the hero.
      gsap.to(title, {
        yPercent: -30,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      return () => window.removeEventListener(PRELOADER_DONE, play);
    },
    { scope: root },
  );

  return (
    <section id="top" ref={root} className="relative flex min-h-svh flex-col justify-end px-5 pt-28 pb-10 sm:px-10">
      <p data-fade className="mb-6 font-mono text-xs tracking-widest text-muted uppercase sm:text-sm">
        {profile.name} — {profile.location}
      </p>

      <h1
        data-title
        className="max-w-[14ch] text-[15vw] leading-[0.9] font-bold tracking-tighter sm:text-[10vw] lg:text-[8.5vw]"
      >
        Fullstack developer crafting <span className="text-gradient">wow.</span>
      </h1>

      <div className="mt-10 flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
        <p data-fade className="max-w-sm text-base text-fg/80">
          I turn ideas into fast, solid web products with Angular, Next.js and React, and bring them to life with motion.
        </p>
        <div data-fade className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
          <span className="relative flex h-8 w-5 justify-center rounded-full border border-muted/60 pt-1.5">
            <span className="h-1.5 w-1 animate-bounce rounded-full bg-cyan" />
          </span>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
