import type Lenis from "lenis";

// The Lenis instance, so menus can pause scrolling. Null when smooth scroll is off (reduced motion).
export const scroll: { lenis: Lenis | null } = { lenis: null };

export function lockScroll(locked: boolean) {
  if (scroll.lenis) {
    if (locked) scroll.lenis.stop();
    else scroll.lenis.start();
  }
  document.body.style.overflow = locked ? "hidden" : "";
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Smooth-scrolls to an anchor like "#work", with or without Lenis.
export function scrollToAnchor(href: string) {
  const el = document.querySelector<HTMLElement>(href);
  if (!el) return;
  if (scroll.lenis) scroll.lenis.scrollTo(el, { duration: 1.6 });
  else el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}
