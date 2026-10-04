// Shared, mutable state between the DOM (GSAP, Lenis, device sensors) and the WebGL scene.
// It is read every frame inside useFrame, so it is a plain object instead of React state
// to avoid re-rendering the whole tree 60 times per second.
export const sceneState = {
  // Each scroll section owns one step of the morph. Their sum gives the shape:
  // 0 = cloud, 1 = code, 2 = interface, 3 = test report, 4 = scattered background, 5 = signature.
  morphParts: { story: 0, scatter: 0, signature: 0 },
  get morph() {
    const p = this.morphParts;
    return p.story + p.scatter + p.signature;
  },
  // 0 → 1 while the preloader finishes, used for the intro explosion
  intro: 0,
  // Scroll velocity, roughly -1.5 → 1.5, used to stretch the particles
  velocity: 0,
  // Phone tilt, -1 → 1 on each axis, used instead of the mouse on touch devices
  tilt: { x: 0, y: 0, active: false },
  // Set once the intro played, so remounted sections (language switch) don't wait for it again
  introDone: false,
};
