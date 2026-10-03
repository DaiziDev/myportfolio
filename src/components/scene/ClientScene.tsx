"use client";

import dynamic from "next/dynamic";

// WebGL only exists in the browser, so the scene is never server-rendered.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function ClientScene() {
  return <Scene />;
}
