"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { stack } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const all = stack.flatMap((g) => g.items);

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // Content is doubled so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div className={`marquee flex shrink-0 gap-10 pr-10 ${reverse ? "marquee-reverse" : ""}`} style={{ ["--duration" as string]: "40s" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-6xl font-bold tracking-tighter sm:text-8xl ${i % 2 ? "text-outline" : "text-fg"}`}
          >
            {item}
            <span className="ml-10 text-violet">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-group]", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-groups]", start: "top 80%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative py-24 sm:py-32">
      <div className="flex -rotate-2 flex-col gap-4 py-6">
        <Row items={all} />
        <Row items={[...all].reverse()} reverse />
      </div>

      <div data-groups className="mt-24 grid gap-12 px-5 sm:grid-cols-3 sm:px-10">
        {stack.map((g) => (
          <div key={g.group} data-group className="border-t border-line pt-6">
            <p className="mb-6 font-mono text-sm text-cyan">{g.group}</p>
            <ul className="space-y-2 text-2xl font-medium tracking-tight">
              {g.items.map((item) => (
                <li key={item} className="transition-transform duration-300 hover:translate-x-2 hover:text-violet">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
