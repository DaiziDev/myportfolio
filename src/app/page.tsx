import ClientScene from "@/components/scene/ClientScene";
import Cursor from "@/components/ui/Cursor";
import Nav from "@/components/ui/Nav";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Cursor />
      <ClientScene />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Story />
        <About />
        <Stack />
        <Work />
        <Contact />
      </main>
    </>
  );
}
