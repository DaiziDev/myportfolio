import { useEffect } from "react";
import Navbar from "./Navbar";
import DeskScene from "./DeskScene";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="home" className="min-h-screen">
      <Navbar />

      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-10 px-4 sm:px-8">
        {/* Subtle background decoration */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-[var(--accent-primary)]/10 dark:bg-[var(--accent-primary)]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-[var(--accent-secondary)]/10 dark:bg-[var(--accent-secondary)]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Main content: Two columns on desktop, stacked on mobile */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Desk Scene */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-1" data-aos="fade-right" data-aos-duration="1200">
            <DeskScene />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-2">
            <div data-aos="fade-left" data-aos-duration="1200">
              <p className="text-lg md:text-xl text-secondary mb-4 font-light tracking-wide">
                👋 My name is Daizi and I'm a freelance
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                <span className="block text-primary">Webdesigner</span>
                <span className="block text-primary">& Fullstack</span>
                <span className="block text-transparent bg-clip-text accent-gradient">
                  Developer
                </span>
              </h1>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 text-secondary text-sm md:text-base">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Located in Cameroon, Yaoundé
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-alt" />
                  Trusted to deliver excellence worldwide
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                className="group relative w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/80 transition-all duration-300 shadow-accent"
              >
                <span className="relative z-10">You need a designer</span>
              </button>
              <button
                className="group relative w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[var(--text-primary)] text-primary hover:bg-[var(--accent-primary)]/10 transition-all duration-300"
              >
                <span className="relative z-10">You need a developer</span>
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 flex flex-col items-center lg:items-start gap-2 text-muted">
              <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-charte rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
