"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

// On large screens the projects scroll horizontally while the section is pinned.
export default function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const distance = () => track.current!.scrollWidth - window.innerWidth;
        gsap.to(track.current, {
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
      });

      gsap.utils.toArray<HTMLElement>("[data-card]").forEach((card) => {
        gsap.from(card.querySelector("img"), {
          scale: 1.3,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
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
          <p className="mb-6 font-mono text-sm text-cyan">Selected work</p>
          <h2 className="text-6xl leading-[0.9] font-bold tracking-tighter sm:text-8xl">
            Things I&apos;ve <span className="text-gradient">built.</span>
          </h2>
          <p className="mt-6 max-w-sm text-fg/70">Real products, used by real people. Scroll to browse.</p>
        </div>

        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            data-card
            data-cursor="View"
            className="group block shrink-0 lg:w-[46vw]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={`Screenshot of ${p.title}`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-[filter] duration-700 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-30" />
              <span className="absolute top-5 left-5 font-mono text-xs text-fg/80">
                {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-cyan sm:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-fg/60">{p.description}</p>
              </div>
              <span className="font-mono text-sm text-muted">{p.year}</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
