"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { sceneState } from "@/lib/sceneState";

export const PRELOADER_DONE = "preloader:done";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      document.body.classList.add("is-loading");
      const counter = { value: 0 };
      const number = root.current!.querySelector<HTMLSpanElement>("[data-count]")!;

      gsap
        .timeline({
          onComplete: () => {
            document.body.classList.remove("is-loading");
            setDone(true);
          },
        })
        .from("[data-letter]", { yPercent: 110, stagger: 0.06, duration: 0.8, ease: "power4.out" })
        .to(
          counter,
          {
            value: 100,
            duration: 1.6,
            ease: "power2.inOut",
            onUpdate: () => {
              number.textContent = String(Math.round(counter.value)).padStart(3, "0");
            },
          },
          0,
        )
        .to("[data-bar]", { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0)
        .to("[data-letter]", { yPercent: -110, stagger: 0.04, duration: 0.6, ease: "power3.in" })
        .add(() => {
          sceneState.intro = 1;
          window.dispatchEvent(new Event(PRELOADER_DONE));
        })
        .to(root.current, { yPercent: -100, duration: 1, ease: "expo.inOut" }, "<");
    },
    { scope: root },
  );

  if (done) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[90] flex flex-col justify-between bg-bg p-6 sm:p-10">
      <span className="font-mono text-xs tracking-widest text-muted uppercase">Fullstack developer</span>
      <div className="flex overflow-hidden text-[22vw] leading-none font-bold tracking-tighter sm:text-[14vw]">
        {"DAIZI".split("").map((l, i) => (
          <span key={i} data-letter className="inline-block">
            {l}
          </span>
        ))}
      </div>
      <div>
        <div className="mb-3 flex justify-between font-mono text-xs text-muted">
          <span>Loading experience</span>
          <span data-count>000</span>
        </div>
        <div className="h-px w-full bg-line">
          <div data-bar className="h-px origin-left scale-x-0 bg-gradient-to-r from-cyan via-violet to-pink" />
        </div>
      </div>
    </div>
  );
}
