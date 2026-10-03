"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneState } from "@/lib/sceneState";
import { prefersReducedMotion, scroll } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    // The intro tells a story from the top, so a reload always starts there.
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    scroll.lenis = lenis;
    lenis.on("scroll", (e: Lenis) => {
      ScrollTrigger.update();
      sceneState.velocity = gsap.utils.clamp(-1.5, 1.5, e.velocity / 40);
    });
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      scroll.lenis = null;
    };
  }, []);

  return null;
}
