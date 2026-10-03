import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is plain HTML/JS, deployable on any static host (Render, Vercel, GitHub Pages).
  output: "export",
  // Exported into dist/ (like the previous Vite build) so the existing Render settings keep working.
  distDir: "dist",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
