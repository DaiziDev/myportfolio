"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";
import { whenIntroDone } from "./Preloader";
import { profile } from "@/lib/content";
import { setLang, useContent, useLang } from "@/lib/i18n";
import { lockScroll, scrollToAnchor } from "@/lib/scroll";

function LangSwitch({ className = "" }: { className?: string }) {
  const lang = useLang();
  return (
    <div className={`flex items-center gap-1 font-mono text-xs ${className}`}>
      {(["en", "fr"] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">/</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`uppercase transition-opacity ${lang === l ? "opacity-100" : "opacity-40 hover:opacity-80"}`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const t = useContent();

  useGSAP(
    () => {
      gsap.set(root.current, { clipPath: "inset(0 0 100% 0)", visibility: "hidden" });
    },
    { scope: root },
  );

  useGSAP(
    () => {
      const links = gsap.utils.toArray<HTMLElement>("[data-menu-link]", root.current);
      const extras = gsap.utils.toArray<HTMLElement>("[data-menu-extra]", root.current);
      if (open) {
        gsap
          .timeline()
          .set(root.current, { visibility: "visible" })
          .to(root.current, { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "expo.inOut" })
          .fromTo(links, { yPercent: 110 }, { yPercent: 0, stagger: 0.07, duration: 0.8, ease: "expo.out" }, "-=0.35")
          .fromTo(extras, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5");
      } else {
        gsap
          .timeline()
          .to(root.current, { clipPath: "inset(0 0 100% 0)", duration: 0.6, ease: "expo.inOut" })
          .set(root.current, { visibility: "hidden" });
      }
      lockScroll(open);
    },
    { dependencies: [open], scope: root },
  );

  return (
    <div
      ref={root}
      id="mobile-menu"
      className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-5 pt-28 pb-10 sm:hidden"
      aria-hidden={!open}
    >
      <ul className="space-y-2">
        {t.nav.links.map((l, i) => (
          <li key={l.href} className="overflow-hidden">
            <a
              href={l.href}
              onClick={(e) => {
                // Unlock scrolling right away, otherwise the paused scroller ignores the jump.
                e.preventDefault();
                onClose();
                lockScroll(false);
                scrollToAnchor(l.href);
              }}
              data-menu-link
              className="flex items-baseline gap-4 text-6xl font-bold tracking-tighter"
            >
              <span className="font-mono text-xs font-normal text-cyan">0{i + 1}</span>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div data-menu-extra className="flex items-end justify-between font-mono text-xs text-muted">
        <ul className="space-y-2">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
          {profile.cv && (
            <li>
              <a href={profile.cv} download className="text-fg">
                {t.nav.cv} ↓
              </a>
            </li>
          )}
        </ul>
        <LangSwitch className="text-sm text-fg" />
      </div>
    </div>
  );
}

export default function Nav() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const t = useContent();

  useGSAP(
    () => {
      gsap.set(root.current, { yPercent: -100, opacity: 0 });
      return whenIntroDone(() =>
        gsap.to(root.current, { yPercent: 0, opacity: 1, duration: 1, delay: 0.6, ease: "expo.out" }),
      );
    },
    { scope: root },
  );

  // Close the menu with Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <header ref={root} className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-10">
          <a href="#top" onClick={() => setOpen(false)} className="font-mono text-sm font-bold tracking-tight">
            daizi<span className="text-muted">.dev</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-8">
            <ul className="hidden gap-8 text-sm sm:flex">
              {t.nav.links.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group relative">
                    {l.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-fg transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
            <LangSwitch className="hidden sm:flex" />
            {profile.cv && (
              <a href={profile.cv} download className="hidden text-sm sm:block">
                {t.nav.cv} ↓
              </a>
            )}
            <div className="hidden sm:block">
              <Magnetic>
                <a
                  href="#contact"
                  className="block rounded-full border border-fg/40 px-5 py-2 text-sm transition-colors hover:bg-fg hover:text-bg"
                >
                  {t.nav.talk}
                </a>
              </Magnetic>
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex items-center gap-3 rounded-full border border-fg/40 px-5 py-2 text-sm sm:hidden"
            >
              {open ? t.nav.close : t.nav.menu}
              <span className="relative block h-2 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-fg transition-transform duration-300 ${open ? "top-1 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-fg transition-transform duration-300 ${open ? "top-1 -rotate-45" : "top-2"}`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
