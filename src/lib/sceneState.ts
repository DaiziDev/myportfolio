// Shared, mutable state between the DOM (GSAP ScrollTrigger) and the WebGL scene.
// It is read every frame inside useFrame, so it is a plain object instead of React state
// to avoid re-rendering the whole tree 60 times per second.
export const sceneState = {
  // 0 = cloud, 1 = code, 2 = interface, 3 = scattered background
  morph: 0,
  // 0 → 1 while the preloader finishes, used for the intro explosion
  intro: 0,
};
