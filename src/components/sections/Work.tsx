"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/content";
import { useContent } from "@/lib/i18n";
import DistortImage from "../ui/DistortImage";

gsap.registerPlugin(ScrollTrigger);

// On large screens the projects scroll horizontally while the section is pinned.
export default function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const t = useContent();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const distance = () => track.current!.scrollWidth - window.innerWidth;
        const horizontal = gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Each screenshot is unveiled from the right as it slides in.
        cards.forEach((card) => {
          gsap.fromTo(
            card.querySelector("[data-reveal]"),
            { clipPath: "inset(0% 0% 0% 100%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: { trigger: card, containerAnimation: horizontal, start: "left 95%", end: "left 45%", scrub: true },
            },
          );
        });
      });

      mm.add("(max-width: 1023px)", () => {
        cards.forEach((card) => {
          gsap.fromTo(
            card.querySelector("[data-reveal]"),
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: { trigger: card, start: "top 95%", end: "top 45%", scrub: true },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="work" ref={root} className="relative overflow-hidden py-24 lg:flex lg:h-svh lg:items-center lg:py-0">
      <div ref={track} className="flex flex-col gap-16 px-5 sm:px-10 lg:flex-row lg:items-center lg:gap-[6vw] lg:pr-[10vw]">
        <div className="shrink-0 lg:w-[34vw]">
          <p className="mb-6 font-mono text-sm text-cyan">{t.work.label}</p>
          <h2 className="text-6xl leading-[0.9] font-bold tracking-tighter sm:text-8xl">
            {t.work.title} <span className="text-gradient">{t.work.highlight}</span>
          </h2>
          <p className="mt-6 max-w-sm text-fg/70">{t.work.intro}</p>
        </div>

        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            data-card
            data-cursor={t.work.view}
            className="group block shrink-0 lg:w-[46vw]"
          >
            <div data-reveal className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-line">
              <DistortImage src={p.image} alt={`${t.work.screenshot} ${p.title}`} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-0" />
              <span className="absolute top-4 left-4 rounded-full bg-bg/70 px-3 py-1 font-mono text-xs text-fg/90 backdrop-blur">
                {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-cyan sm:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-fg/60">{t.work.projects[i]}</p>
              </div>
              <span className="font-mono text-sm text-muted">{p.year}</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
