"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Water-like ripples around the mouse plus a slight RGB split, only while hovered.
const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  uniform vec2 uPlane;
  uniform vec2 uImage;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uTime;
  varying vec2 vUv;

  // object-fit: cover, anchored to the top like the screenshots are.
  vec2 cover(vec2 uv) {
    vec2 ratio = vec2(
      min((uPlane.x / uPlane.y) / (uImage.x / uImage.y), 1.0),
      min((uPlane.y / uPlane.x) / (uImage.y / uImage.x), 1.0)
    );
    return vec2(uv.x * ratio.x + (1.0 - ratio.x) * 0.5, 1.0 - (1.0 - uv.y) * ratio.y);
  }

  void main() {
    // Slight zoom-in while hovered.
    vec2 uv = (vUv - 0.5) * (1.0 - 0.06 * uHover) + 0.5;

    vec2 toMouse = uv - uMouse;
    float d = length(toMouse * vec2(uPlane.x / uPlane.y, 1.0));
    float wave = sin(d * 38.0 - uTime * 5.0) * exp(-d * 5.0) * uHover;
    vec2 offset = normalize(toMouse + 0.0001) * wave * 0.018;

    float r = texture2D(uTexture, cover(uv + offset * 1.6)).r;
    float g = texture2D(uTexture, cover(uv + offset)).g;
    float b = texture2D(uTexture, cover(uv + offset * 0.5)).b;
    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

// A plain <img> that upgrades itself to a WebGL plane when the browser allows it.
// If WebGL or the texture fails (e.g. CORS), the regular image simply stays visible.
export default function DistortImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = wrapper.current!;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas.current!, alpha: true, antialias: false });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const uniforms = {
      uTexture: { value: null as THREE.Texture | null },
      uPlane: { value: new THREE.Vector2(1, 1) },
      uImage: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
      uTime: { value: 0 },
    };
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let ready = false;
    let disposed = false;
    const render = () => ready && renderer.render(scene, camera);

    const resize = () => {
      const { width, height } = el.getBoundingClientRect();
      renderer.setSize(width, height, false);
      uniforms.uPlane.value.set(width, height);
      render();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    loader.load(
      src,
      (texture) => {
        if (disposed) return texture.dispose();
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        uniforms.uTexture.value = texture;
        uniforms.uImage.value.set(texture.image.width, texture.image.height);
        ready = true;
        resize();
        canvas.current!.style.opacity = "1";
        img.current!.style.opacity = "0";
      },
      undefined,
      () => {}, // keep the <img> fallback
    );

    // Only render while the effect is visible, to save battery.
    const tick = (_: number, deltaMs: number) => {
      uniforms.uTime.value += deltaMs / 1000;
      render();
    };
    let ticking = false;
    const startTicking = () => {
      if (!ticking) gsap.ticker.add(tick);
      ticking = true;
    };
    const stopTicking = () => {
      gsap.ticker.remove(tick);
      ticking = false;
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      gsap.to(uniforms.uMouse.value, {
        x: (e.clientX - r.left) / r.width,
        y: 1 - (e.clientY - r.top) / r.height,
        duration: 0.6,
        ease: "power3",
      });
    };
    const onEnter = () => {
      startTicking();
      gsap.to(uniforms.uHover, { value: 1, duration: 0.8, ease: "power3.out" });
    };
    const onLeave = () => {
      gsap.to(uniforms.uHover, { value: 0, duration: 0.8, ease: "power3.out", onComplete: stopTicking });
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      disposed = true;
      stopTicking();
      observer.disconnect();
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      uniforms.uTexture.value?.dispose();
      material.dispose();
      mesh.geometry.dispose();
      renderer.dispose();
    };
  }, [src]);

  return (
    <div ref={wrapper} className={`relative h-full w-full ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={img} src={src} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" />
      <canvas ref={canvas} aria-hidden className="absolute inset-0 h-full w-full opacity-0" />
    </div>
  );
}
