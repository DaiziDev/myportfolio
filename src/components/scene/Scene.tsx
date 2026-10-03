"use client";

import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";
import { useMediaQuery } from "@/lib/hooks";
import { sceneState } from "@/lib/sceneState";

let webglSupport: boolean | null = null;
function hasWebGL() {
  if (webglSupport === null) {
    try {
      const canvas = document.createElement("canvas");
      webglSupport = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      webglSupport = false;
    }
  }
  return webglSupport;
}

type OrientationEventWithPermission = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};

// On touch devices, tilting the phone moves the particles like the mouse does on desktop.
function useDeviceTilt(enabled: boolean) {
  useEffect(() => {
    if (!enabled || typeof DeviceOrientationEvent === "undefined") return;

    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      sceneState.tilt.active = true;
      sceneState.tilt.x = clamp(e.gamma / 30);
      sceneState.tilt.y = clamp(-(e.beta - 45) / 30);
    };
    const listen = () => window.addEventListener("deviceorientation", onOrientation);

    // iOS only gives access to the sensors after a tap and an explicit permission.
    const Orientation = DeviceOrientationEvent as OrientationEventWithPermission;
    const askOnTap = () => {
      Orientation.requestPermission?.()
        .then((state) => state === "granted" && listen())
        .catch(() => {});
    };
    if (Orientation.requestPermission) window.addEventListener("touchend", askOnTap, { once: true });
    else listen();

    return () => {
      window.removeEventListener("deviceorientation", onOrientation);
      window.removeEventListener("touchend", askOnTap);
      sceneState.tilt.active = false;
    };
  }, [enabled]);
}

// Shown instead of the particles when the browser can't do WebGL.
function Fallback() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute top-[15%] right-[10%] h-[45vmax] w-[45vmax] rounded-full bg-violet/25 blur-[120px]" />
      <div className="absolute top-[35%] right-[25%] h-[30vmax] w-[30vmax] rounded-full bg-cyan/20 blur-[120px]" />
      <div className="absolute bottom-[5%] left-[10%] h-[30vmax] w-[30vmax] rounded-full bg-pink/15 blur-[120px]" />
    </div>
  );
}

export default function Scene() {
  // Fewer particles on phones and small screens to keep 60fps.
  const isSmall = useMediaQuery("(max-width: 767px)");
  const isTouch = useMediaQuery("(pointer: coarse)");
  const count = isSmall ? 7000 : 15000;
  useDeviceTilt(isTouch);

  if (!hasWebGL()) return <Fallback />;

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
