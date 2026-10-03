"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState } from "@/lib/sceneState";
import { prefersReducedMotion } from "@/lib/scroll";
import { cloudShape, codeShape, interfaceShape, scatterShape, signatureShape } from "./shapes";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  uniform float uIntro;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uShapeScale;
  uniform vec3 uShapeOffset;
  uniform vec3 uCloudOffset;
  uniform float uCloudScale;
  uniform vec2 uMouse;
  uniform float uVelocity;
  uniform float uMotion;
  uniform float uSignScale;
  uniform vec3 uSignOffset;

  attribute vec3 aCloud;
  attribute vec3 aCode;
  attribute vec3 aUi;
  attribute vec3 aScatter;
  attribute vec3 aCloudColor;
  attribute vec3 aCodeColor;
  attribute vec3 aUiColor;
  attribute vec3 aScatterColor;
  attribute vec3 aSign;
  attribute vec3 aSignColor;
  attribute float aRandom;

  varying vec3 vColor;
  varying float vAlpha;

  // Progress of one morph segment, staggered per particle so they don't all move at once.
  float segment(float k) {
    float t = clamp((uMorph - k) / 0.65 - aRandom * 0.54, 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
  }

  vec3 rotateY(vec3 p, float a) {
    float c = cos(a), s = sin(a);
    return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
  }

  void main() {
    // Cloud: slowly rotating, converging from far away during the intro.
    vec3 cloud = rotateY(aCloud, uTime * 0.12) * mix(5.0, 1.0, uIntro) * uCloudScale;
    cloud.y += sin(uTime * 0.8 + aRandom * 12.0) * 0.06;
    cloud += uCloudOffset;

    vec3 code = aCode * uShapeScale + uShapeOffset;
    vec3 ui = aUi * uShapeScale + uShapeOffset;
    vec3 sign = aSign * uSignScale + uSignOffset;

    float e1 = segment(0.0);
    float e2 = segment(1.0);
    float e3 = segment(2.0);
    float e4 = segment(3.0);

    vec3 pos = mix(mix(mix(mix(cloud, code, e1), ui, e2), aScatter, e3), sign, e4);
    vec3 col = mix(mix(mix(mix(aCloudColor, aCodeColor, e1), aUiColor, e2), aScatterColor, e3), aSignColor, e4);
    // How much the particles currently form the faint background field.
    float background = e3 * (1.0 - e4);

    // Turbulence while travelling between two shapes.
    float travel = sin(e1 * 3.1416) + sin(e2 * 3.1416) + sin(e3 * 3.1416) + sin(e4 * 3.1416);
    pos += vec3(
      sin(aRandom * 40.0 + uTime * 1.3),
      cos(aRandom * 31.0 + uTime * 1.1),
      sin(aRandom * 23.0 + uTime)
    ) * travel * 0.7 * uMotion;

    // Idle shimmer on the scattered background.
    pos += vec3(0.0, sin(uTime * 0.3 + aRandom * 20.0) * 0.15, 0.0) * background;

    // Scrolling fast stretches the particles vertically, like matter being dragged.
    pos.y += uVelocity * (aRandom - 0.5) * 1.4 * uMotion;

    // Mouse repulsion.
    vec2 diff = pos.xy - uMouse;
    float dist = length(diff);
    float force = exp(-dist * dist * 5.0) * (1.0 - background * 0.7);
    pos.xy += normalize(diff + 0.0001) * force * 0.35;
    pos.z += force * 0.5;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (0.5 + aRandom) / -mv.z;

    vColor = col + force * 0.35;
    vAlpha = mix(1.0, 0.45, background) * uIntro;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float alpha = smoothstep(0.5, 0.05, d) * vAlpha;
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

function buildGeometry(count: number) {
  const cloud = cloudShape(count);
  const code = codeShape(count);
  const ui = interfaceShape(count);
  const scatter = scatterShape(count);
  const sign = signatureShape(count);
  const random = new Float32Array(count).map(() => Math.random());

  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(cloud.positions, 3));
  g.setAttribute("aCloud", new THREE.BufferAttribute(cloud.positions, 3));
  g.setAttribute("aCode", new THREE.BufferAttribute(code.positions, 3));
  g.setAttribute("aUi", new THREE.BufferAttribute(ui.positions, 3));
  g.setAttribute("aScatter", new THREE.BufferAttribute(scatter.positions, 3));
  g.setAttribute("aCloudColor", new THREE.BufferAttribute(cloud.colors, 3));
  g.setAttribute("aCodeColor", new THREE.BufferAttribute(code.colors, 3));
  g.setAttribute("aUiColor", new THREE.BufferAttribute(ui.colors, 3));
  g.setAttribute("aScatterColor", new THREE.BufferAttribute(scatter.colors, 3));
  g.setAttribute("aSign", new THREE.BufferAttribute(sign.positions, 3));
  g.setAttribute("aSignColor", new THREE.BufferAttribute(sign.colors, 3));
  g.setAttribute("aRandom", new THREE.BufferAttribute(random, 1));
  return g;
}

export default function Particles({ count }: { count: number }) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const { viewport, gl } = useThree();
  const mouse = useRef(new THREE.Vector2(99, 99));
  const morph = useRef(0);
  const target = useMemo(() => new THREE.Vector2(), []);
  // The pointer reads (0, 0) until the mouse first moves; ignore it until then.
  const hasPointer = useRef(false);
  // Reduced motion: keep the shapes, calm everything that moves on its own.
  const motion = useMemo(() => (prefersReducedMotion() ? 0.15 : 1), []);

  useEffect(() => {
    const onMove = () => (hasPointer.current = true);
    window.addEventListener("pointermove", onMove, { once: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const geometry = useMemo(() => buildGeometry(count), [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMorph: { value: 0 },
      uIntro: { value: 0 },
      uSize: { value: 26 },
      uPixelRatio: { value: Math.min(gl.getPixelRatio(), 2) },
      uShapeScale: { value: 1 },
      uShapeOffset: { value: new THREE.Vector3() },
      uCloudOffset: { value: new THREE.Vector3() },
      uCloudScale: { value: 1 },
      uMouse: { value: new THREE.Vector2(99, 99) },
      uVelocity: { value: 0 },
      uMotion: { value: 1 },
      uSignScale: { value: 1 },
      uSignOffset: { value: new THREE.Vector3() },
    }),
    [gl],
  );

  useFrame((state, delta) => {
    const u = material.current?.uniforms;
    if (!u) return;
    const isWide = viewport.width > 7;

    u.uTime.value += delta * motion;
    u.uMotion.value = motion;
    u.uVelocity.value = THREE.MathUtils.damp(u.uVelocity.value, sceneState.velocity, 6, delta);
    morph.current = THREE.MathUtils.damp(morph.current, sceneState.morph, 3.5, delta);
    u.uMorph.value = morph.current;
    u.uIntro.value = THREE.MathUtils.damp(u.uIntro.value, sceneState.intro, 1.6, delta);

    // Fit the drawn shapes into the viewport, leaving room for the captions on desktop.
    u.uShapeScale.value = isWide ? Math.min(0.75, (viewport.width * 0.62) / 9) : (viewport.width * 0.92) / 9;
    u.uShapeOffset.value.set(isWide ? viewport.width * 0.14 : 0, isWide ? 0 : viewport.height * 0.12, 0);
    u.uCloudOffset.value.set(isWide ? viewport.width * 0.2 : 0, isWide ? 0 : viewport.height * 0.1, 0);
    u.uCloudScale.value = isWide ? 1 : 0.7;
    u.uSize.value = isWide ? 26 : 20;
    u.uSignScale.value = isWide ? Math.min(0.85, (viewport.width * 0.7) / 9) : (viewport.width * 0.95) / 9;
    u.uSignOffset.value.set(0, viewport.height * 0.06, 0);

    // Pointer in world units on the z = 0 plane, smoothed. On phones, the tilt plays the mouse.
    const { tilt } = sceneState;
    const usingTilt = !hasPointer.current && tilt.active;
    const px = usingTilt ? tilt.x : state.pointer.x;
    const py = usingTilt ? tilt.y : state.pointer.y;
    if (hasPointer.current || usingTilt) {
      target.set((px * viewport.width) / 2, (py * viewport.height) / 2);
      mouse.current.lerp(target, 1 - Math.exp(-delta * 8));
    }
    u.uMouse.value.copy(mouse.current);

    // Gentle camera parallax.
    const parallax = usingTilt ? 1.6 : 1;
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, px * 0.35 * parallax * motion, 2, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, py * 0.25 * parallax * motion, 2, delta);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <points geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
