import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is plain HTML/JS in `out/`, deployable on any static host (Render, Vercel, GitHub Pages).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
