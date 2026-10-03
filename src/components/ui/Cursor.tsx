"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from "@/lib/hooks";

// A dot that follows the mouse and a ring that lags behind.
// Any element with data-cursor="Label" makes the ring grow and show that label.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const enabled = useMediaQuery("(hover: hover) and (pointer: fine)");

  useEffect(() => {
    if (!enabled || !dot.current || !ring.current) return;
    document.documentElement.classList.add("has-cursor");

    const dotX = gsap.quickTo(dot.current, "x", { duration: 0.1, ease: "power3" });
    const dotY = gsap.quickTo(dot.current, "y", { duration: 0.1, ease: "power3" });
    const ringX = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const ringY = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });

    // Hidden until the mouse first moves, so it doesn't sit in the top-left corner.
    gsap.set([dot.current, ring.current], { autoAlpha: 0 });
    const move = (e: MouseEvent) => {
      gsap.to([dot.current, ring.current], { autoAlpha: 1, duration: 0.3, overwrite: "auto" });
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor], a, button");
      const text = target?.dataset.cursor ?? "";
      setLabel(text);
      gsap.to(ring.current, {
        scale: target ? (text ? 2.6 : 1.6) : 1,
        backgroundColor: text ? "rgba(238,240,255,1)" : "rgba(238,240,255,0)",
        duration: 0.35,
        ease: "power3",
      });
      gsap.to(dot.current, { scale: target ? 0 : 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 z-[100] -mt-5 -ml-5 flex h-10 w-10 items-center justify-center rounded-full border border-fg/60"
      >
        <span className="font-mono text-[5px] font-bold tracking-widest text-bg uppercase">{label}</span>
      </div>
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[100] -mt-1 -ml-1 h-2 w-2 rounded-full bg-fg mix-blend-difference"
      />
    </>
  );
}
