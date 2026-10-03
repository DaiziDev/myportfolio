"use client";

import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";
import { useMediaQuery } from "@/lib/hooks";

export default function Scene() {
  // Fewer particles on phones and small screens to keep 60fps.
  const isSmall = useMediaQuery("(max-width: 767px)");
  const count = isSmall ? 7000 : 15000;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        eventSource={document.body}
        eventPrefix="client"
      >
        <Particles count={count} />
      </Canvas>
    </div>
  );
}
