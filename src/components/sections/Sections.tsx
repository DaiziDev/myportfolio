"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";
import Hero from "./Hero";
import Story from "./Story";
import About from "./About";
import Stack from "./Stack";
import Work from "./Work";
import Contact from "./Contact";
import Signature from "./Signature";

export default function Sections() {
  const lang = useLang();

  // Text animations split the DOM, so the sections are remounted (key) when the language changes,
  // then every scroll position is recomputed for the new text lengths.
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [lang]);

  return (
    <main key={lang} className="relative z-10">
      <Hero />
      <Story />
      <About />
      <Stack />
      <Work />
      <Contact />
      <Signature />
    </main>
  );
}
