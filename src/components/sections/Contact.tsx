"use client";

import { useRef, useState, type FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";
import { profile } from "@/lib/content";
import Magnetic from "../ui/Magnetic";
import { useNow } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger, SplitText);

// EmailJS public identifiers (safe to ship to the browser).
const EMAILJS = { service: "service_wplw6iq", template: "template_n2aizhd", publicKey: "narxgk-uVVuX2qr5a" };

type Status = "idle" | "sending" | "sent" | "error";

const clock = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Douala" });

function LocalTime() {
  const now = useNow(10_000);
  return <span>{now ? clock.format(now) : "--:--"} in Yaoundé</span>;
}

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useGSAP(
    () => {
      const split = SplitText.create("[data-big]", { type: "lines", mask: "lines", linesClass: "line-mask" });
      gsap.from(split.lines, {
        yPercent: 110,
        stagger: 0.1,
        duration: 1.3,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-big]", start: "top 80%" },
      });
    },
    { scope: root },
  );

  const send = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS.service, EMAILJS.template, form.current!, { publicKey: EMAILJS.publicKey });
      setStatus("sent");
      form.current!.reset();
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full border-b border-line bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-muted focus:border-cyan";

  return (
    <section id="contact" ref={root} className="relative px-5 pt-32 pb-10 sm:px-10 sm:pt-48">
      <p className="mb-10 font-mono text-sm text-cyan">Contact</p>
      <h2 data-big className="max-w-[12ch] text-[14vw] leading-[0.9] font-bold tracking-tighter sm:text-[9vw]">
        Let&apos;s build something <span className="text-gradient">wow.</span>
      </h2>

      <div className="mt-20 grid gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-8">
          <p className="max-w-sm text-lg text-fg/70">
            A project, a job, or just an idea? Tell me about it, I usually reply within 24 hours.
          </p>
          <Magnetic strength={0.5}>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-40 w-40 items-center justify-center rounded-full bg-fg text-center font-medium text-bg transition-colors hover:bg-cyan sm:h-48 sm:w-48"
            >
              Send an
              <br />
              email
            </a>
          </Magnetic>
        </div>

        <form ref={form} onSubmit={send} className="flex flex-col gap-4">
          <input className={field} name="name" placeholder="Your name" required autoComplete="name" />
          <input className={field} name="email" type="email" placeholder="Your email" required autoComplete="email" />
          <textarea className={`${field} resize-none`} name="message" rows={4} placeholder="Your message" required />
          <div className="mt-4 flex items-center gap-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full border border-fg/40 px-8 py-3 transition-colors hover:bg-fg hover:text-bg disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" className="text-sm">
              {status === "sent" && <span className="text-cyan">Thanks! Your message is on its way.</span>}
              {status === "error" && <span className="text-pink">Something went wrong, please email me directly.</span>}
            </p>
          </div>
        </form>
      </div>

      <footer className="mt-32 flex flex-col gap-6 border-t border-line pt-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Daizi — {profile.role}</span>
        <LocalTime />
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
