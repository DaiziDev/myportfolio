"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";
import { PRELOADER_DONE } from "./Preloader";

const links = [
  { label: "Story", href: "#story" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

export default function Nav() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(root.current, { yPercent: -100, opacity: 0 });
      const show = () => gsap.to(root.current, { yPercent: 0, opacity: 1, duration: 1, delay: 0.6, ease: "expo.out" });
      window.addEventListener(PRELOADER_DONE, show, { once: true });
      return () => window.removeEventListener(PRELOADER_DONE, show);
    },
    { scope: root },
  );

  return (
    <header ref={root} className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-10">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight">
          daizi<span className="text-muted">.dev</span>
        </a>
        <div className="flex items-center gap-2 sm:gap-8">
          <ul className="hidden gap-8 text-sm sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-fg transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <Magnetic>
            <a href="#contact" className="block rounded-full border border-fg/40 px-5 py-2 text-sm transition-colors hover:bg-fg hover:text-bg">
              Let&apos;s talk
            </a>
          </Magnetic>
        </div>
      </nav>
    </header>
  );
}
