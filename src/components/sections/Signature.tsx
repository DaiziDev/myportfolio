"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/lib/content";
import { useContent } from "@/lib/i18n";
import { useNow } from "@/lib/hooks";
import { sceneState } from "@/lib/sceneState";
import Magnetic from "../ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const clock = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Douala" });

function LocalTime({ suffix }: { suffix: string }) {
  const now = useNow(10_000);
  return (
    <span>
      {now ? clock.format(now) : "--:--"} {suffix}
    </span>
  );
}

// The end of the page: the particles gather one last time to sign the site.
export default function Signature() {
  const root = useRef<HTMLElement>(null);
  const t = useContent();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "top 15%",
        onRefresh: (self) => {
          sceneState.morphParts.signature = self.progress;
        },
        onUpdate: (self) => {
          sceneState.morphParts.signature = self.progress;
        },
      });

      gsap.from("[data-sign]", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 20%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative flex min-h-svh flex-col justify-end px-5 pb-8 sm:px-10">
      <div className="mb-auto" />
      <div className="mb-16 flex flex-col items-center gap-6 text-center sm:mb-20">
        <p data-sign className="font-mono text-xs tracking-widest text-muted uppercase">
          {t.signature.thanks} ✦
        </p>
        <div data-sign>
          <Magnetic>
            <a
              href="#top"
              className="block rounded-full border border-fg/40 px-6 py-3 text-sm transition-colors hover:bg-fg hover:text-bg"
            >
              ↑ {t.signature.top}
            </a>
          </Magnetic>
        </div>
      </div>

      <footer className="flex flex-col gap-4 border-t border-line pt-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} Daizi — {t.role}
        </span>
        <LocalTime suffix={t.contact.time} />
        <ul className="flex gap-6">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
}
