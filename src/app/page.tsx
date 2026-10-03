import ClientScene from "@/components/scene/ClientScene";
import Cursor from "@/components/ui/Cursor";
import Nav from "@/components/ui/Nav";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Sections from "@/components/sections/Sections";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Cursor />
      <ClientScene />
      <Nav />
      <Sections />
    </>
  );
}
