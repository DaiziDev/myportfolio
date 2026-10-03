"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { sceneState } from "@/lib/sceneState";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Particles leave the interface shape and scatter into a background field.
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "top 20%",
        onUpdate: (self) => {
          sceneState.morph = 2 + self.progress;
        },
      });

      // Words light up one by one as you read.
      const split = SplitText.create("[data-read]", { type: "words" });
      gsap.fromTo(
        split.words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: "[data-read]", start: "top 80%", end: "bottom 45%", scrub: true },
        },
      );
    },
    { scope: root },
  );

  return (
    <section id="about" ref={root} className="relative px-5 py-32 sm:px-10 sm:py-48">
      <p className="mb-10 font-mono text-sm text-cyan">About</p>
      <p data-read className="max-w-6xl text-3xl leading-[1.15] font-medium tracking-tight sm:text-5xl lg:text-6xl">
        I&apos;m Daizi, a fullstack developer based in Yaoundé. I build the whole product, from the API to the
        interface, but the frontend is where I shine: Angular, Next.js and React. What I love most is motion, the
        details that make someone stop scrolling and say wow.
      </p>
    </section>
  );
}
