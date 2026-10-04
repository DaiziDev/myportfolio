"use client";

import { useRef, type PointerEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useContent } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ACCENTS = ["var(--color-cyan)", "var(--color-violet)", "var(--color-pink)"];

// A soft light that follows the mouse inside the card (position fed through CSS variables).
function onSpotlight(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export default function Services() {
  const root = useRef<HTMLElement>(null);
  const t = useContent().services;

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
      gsap.from("[data-service]", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-services]", start: "top 80%" },
      });
    },
    { scope: root },
  );

  return (
    <section id="services" ref={root} className="relative px-5 py-24 sm:px-10 sm:py-32">
      <p className="mb-10 font-mono text-sm text-cyan">{t.label}</p>
      <h2 data-heading className="max-w-[16ch] text-5xl leading-[0.95] font-bold tracking-tighter sm:text-7xl lg:text-8xl">
        {t.title} <span className="text-gradient">{t.highlight}</span>
      </h2>

      <div data-services className="mt-16 grid gap-5 lg:grid-cols-3">
        {t.items.map((item, i) => (
          <article
            key={item.title}
            data-service
            onPointerMove={onSpotlight}
            className="group relative overflow-hidden rounded-3xl border border-line bg-bg/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-fg/20 sm:p-10"
            style={{ ["--accent" as string]: ACCENTS[i] }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--accent) 18%, transparent), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="mb-16 flex items-center justify-between font-mono text-sm">
                <span style={{ color: "var(--accent)" }}>0{i + 1}</span>
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
              </div>
              <h3 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{item.title}</h3>
              <p className="mb-8 text-fg/70">{item.text}</p>
              <ul className="space-y-3 border-t border-line pt-6 text-sm">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-fg/80">
                    <span className="font-mono" style={{ color: "var(--accent)" }}>
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
