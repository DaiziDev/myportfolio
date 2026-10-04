"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useContent } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger, SplitText);

// A vertical timeline whose line draws itself as you scroll.
export default function Journey() {
  const root = useRef<HTMLElement>(null);
  const t = useContent().journey;

  useGSAP(
    () => {
      const split = SplitText.create("[data-heading]", { type: "lines", mask: "lines", linesClass: "line-mask" });
      gsap.from(split.lines, {
        yPercent: 110,
        stagger: 0.1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-heading]", start: "top 80%" },
      });

      gsap.fromTo(
        "[data-line]",
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: "[data-timeline]", start: "top 70%", end: "bottom 60%", scrub: true } },
      );

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
        gsap
          .timeline({ scrollTrigger: { trigger: step, start: "top 75%" } })
          .from(step.querySelector("[data-dot]"), { scale: 0, duration: 0.6, ease: "back.out(3)" })
          .from(step.querySelectorAll("[data-fade]"), { y: 30, opacity: 0, stagger: 0.08, duration: 0.9, ease: "expo.out" }, "<");
      });
    },
    { scope: root },
  );

  return (
    <section id="journey" ref={root} className="relative px-5 py-24 sm:px-10 sm:py-32">
      <p className="mb-10 font-mono text-sm text-cyan">{t.label}</p>
      <h2 data-heading className="max-w-[16ch] text-5xl leading-[0.95] font-bold tracking-tighter sm:text-7xl lg:text-8xl">
        {t.title} <span className="text-gradient">{t.highlight}</span>
      </h2>

      <ol data-timeline className="relative mt-20 max-w-4xl lg:ml-[20%]">
        <span className="absolute top-2 bottom-2 left-[7px] w-px bg-line" />
        <span data-line className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-cyan via-violet to-pink" />
        {t.items.map((item) => (
          <li key={item.title + item.period} data-step className="relative pb-16 pl-12 last:pb-0 sm:pl-16">
            <span
              data-dot
              className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-cyan bg-bg shadow-[0_0_20px_var(--color-cyan)]"
            />
            <p data-fade className="mb-3 font-mono text-xs tracking-widest text-muted uppercase">
              {item.period}
            </p>
            <h3 data-fade className="text-3xl font-bold tracking-tight sm:text-4xl">
              {item.title}
            </h3>
            <p data-fade className="mt-1 mb-4 text-violet">
              {item.place}
            </p>
            <p data-fade className="max-w-2xl text-fg/70">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
