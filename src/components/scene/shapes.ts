// Builds the target positions/colors the particles morph between.
// "code" and "interface" are drawn on an offscreen canvas, then sampled pixel by pixel,
// so editing the drawings below directly changes what the particles form.

export type Shape = { positions: Float32Array; colors: Float32Array };

const CYAN = "#5ef2ff";
const VIOLET = "#9b7bff";
const PINK = "#ff6bd6";
const WHITE = "#e9ecff";
const MUTED = "#6b7393";

// World width the drawn shapes occupy (camera sees ~11 units wide on a 16:9 desktop).
const SHAPE_WIDTH = 9;

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function sampleCanvas(
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  w: number,
  h: number,
  count: number,
): Shape {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  draw(ctx, w, h);

  const { data } = ctx.getImageData(0, 0, w, h);
  const filled: number[] = [];
  const step = 2;
  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      if (data[(y * w + x) * 4 + 3] > 140) filled.push(x, y);
    }
  }

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const scale = SHAPE_WIDTH / w;
  const pixels = filled.length / 2;

  for (let i = 0; i < count; i++) {
    const p = Math.floor(Math.random() * pixels) * 2;
    const px = filled[p] + Math.random() * step;
    const py = filled[p + 1] + Math.random() * step;
    positions[i * 3] = (px - w / 2) * scale;
    positions[i * 3 + 1] = -(py - h / 2) * scale;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.15;

    const o = (Math.floor(py) * w + Math.floor(px)) * 4;
    colors[i * 3] = data[o] / 255;
    colors[i * 3 + 1] = data[o + 1] / 255;
    colors[i * 3 + 2] = data[o + 2] / 255;
  }
  return { positions, colors };
}

export function cloudShape(count: number): Shape {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const a = hexToRgb(CYAN);
  const b = hexToRgb(VIOLET);
  const c = hexToRgb(PINK);

  for (let i = 0; i < count; i++) {
    // Denser in the center, wispy on the outside.
    const r = 2.4 * Math.pow(Math.random(), 0.6);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta) * 0.85;
    const z = r * Math.cos(phi);
    positions.set([x, y, z], i * 3);

    const t = (y / 2.4 + 1) / 2;
    const col = t < 0.5 ? mix(c, b, t * 2) : mix(b, a, (t - 0.5) * 2);
    colors.set(col, i * 3);
  }
  return { positions, colors };
}

export function scatterShape(count: number): Shape {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const a = hexToRgb(CYAN);
  const b = hexToRgb(VIOLET);
  for (let i = 0; i < count; i++) {
    positions.set(
      [(Math.random() - 0.5) * 26, (Math.random() - 0.5) * 16, -2 - Math.random() * 10],
      i * 3,
    );
    colors.set(mix(a, b, Math.random()), i * 3);
  }
  return { positions, colors };
}

// A small Spring Boot endpoint: the kind of backend code behind every screen.
const CODE_LINES: { text: string; color: string }[][] = [
  [{ text: "@GetMapping(", color: VIOLET }, { text: '"/students"', color: PINK }, { text: ")", color: VIOLET }],
  [{ text: "public ", color: VIOLET }, { text: "List<Student>", color: CYAN }, { text: " byClass(", color: WHITE }],
  [{ text: "    @RequestParam ", color: VIOLET }, { text: "Long", color: CYAN }, { text: " id) {", color: WHITE }],
  [{ text: "  return ", color: VIOLET }, { text: "repository", color: CYAN }],
  [{ text: "    .findByClassId(", color: WHITE }, { text: "id", color: PINK }, { text: ");", color: WHITE }],
  [{ text: "}", color: WHITE }],
];

export function codeShape(count: number): Shape {
  return sampleCanvas(
    (ctx, _w, h) => {
      ctx.font = "bold 52px ui-monospace, Menlo, Consolas, monospace";
      ctx.textBaseline = "top";
      const lineHeight = 100;
      const startY = (h - CODE_LINES.length * lineHeight) / 2;
      CODE_LINES.forEach((line, i) => {
        let x = 70;
        for (const token of line) {
          ctx.fillStyle = token.color;
          ctx.fillText(token.text, x, startY + i * lineHeight);
          x += ctx.measureText(token.text).width;
        }
      });
      // Line numbers gutter
      ctx.fillStyle = MUTED;
      ctx.fillRect(30, startY, 6, CODE_LINES.length * lineHeight - 20);
    },
    1100,
    720,
    count,
  );
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

export function interfaceShape(count: number): Shape {
  return sampleCanvas(
    (ctx) => {
      // Browser window
      ctx.lineWidth = 7;
      ctx.strokeStyle = WHITE;
      roundRect(ctx, 20, 20, 1060, 680, 36);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.fillRect(20, 100, 1060, 5);
      [PINK, VIOLET, CYAN].forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(70 + i * 40, 60, 12, 0, Math.PI * 2);
        ctx.fill();
      });

      // Navbar
      ctx.fillStyle = CYAN;
      roundRect(ctx, 80, 140, 120, 30, 15);
      ctx.fill();
      ctx.fillStyle = MUTED;
      [0, 1, 2].forEach((i) => {
        roundRect(ctx, 760 + i * 95, 147, 70, 16, 8);
        ctx.fill();
      });

      // Hero title + button
      ctx.fillStyle = WHITE;
      roundRect(ctx, 80, 230, 560, 48, 24);
      ctx.fill();
      roundRect(ctx, 80, 296, 420, 48, 24);
      ctx.fill();
      ctx.fillStyle = MUTED;
      roundRect(ctx, 80, 370, 480, 16, 8);
      ctx.fill();
      ctx.fillStyle = VIOLET;
      roundRect(ctx, 80, 412, 200, 58, 29);
      ctx.fill();

      // Hero visual
      ctx.strokeStyle = PINK;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.arc(860, 340, 120, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = CYAN;
      ctx.beginPath();
      ctx.arc(860, 340, 60, 0, Math.PI * 2);
      ctx.fill();

      // Cards
      [0, 1, 2].forEach((i) => {
        const x = 80 + i * 330;
        ctx.strokeStyle = WHITE;
        ctx.lineWidth = 5;
        roundRect(ctx, x, 520, 280, 140, 22);
        ctx.stroke();
        ctx.fillStyle = [CYAN, VIOLET, PINK][i];
        roundRect(ctx, x + 24, 546, 90, 90, 16);
        ctx.fill();
        ctx.fillStyle = MUTED;
        roundRect(ctx, x + 134, 560, 120, 14, 7);
        ctx.fill();
        roundRect(ctx, x + 134, 590, 90, 14, 7);
        ctx.fill();
      });
    },
    1100,
    720,
    count,
  );
}

function mix(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

// Final shape, formed at the bottom of the page.
export function signatureShape(count: number): Shape {
  return sampleCanvas(
    (ctx, w, h) => {
      const gradient = ctx.createLinearGradient(80, 0, w - 80, 0);
      gradient.addColorStop(0, CYAN);
      gradient.addColorStop(0.5, VIOLET);
      gradient.addColorStop(1, PINK);
      ctx.fillStyle = gradient;
      ctx.font = "bold 330px ui-sans-serif, system-ui, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("DAIZI", w / 2, h / 2 - 40);

      // Little spark under the name
      ctx.fillStyle = WHITE;
      ctx.beginPath();
      const cx = w / 2;
      const cy = h / 2 + 200;
      ctx.moveTo(cx, cy - 40);
      ctx.quadraticCurveTo(cx, cy, cx + 40, cy);
      ctx.quadraticCurveTo(cx, cy, cx, cy + 40);
      ctx.quadraticCurveTo(cx, cy, cx - 40, cy);
      ctx.quadraticCurveTo(cx, cy, cx, cy - 40);
      ctx.fill();
    },
    1100,
    720,
    count,
  );
}

const TEST_CASES = [
  "Login with valid credentials",
  "Pay fees with mobile money",
  "Generate the report card PDF",
  "Search homes by location",
  "Bug #42 fixed and retested",
];

// A functional test report: every case checked before shipping.
export function testShape(count: number): Shape {
  return sampleCanvas(
    (ctx) => {
      ctx.font = "bold 46px ui-monospace, Menlo, Consolas, monospace";
      ctx.textBaseline = "middle";

      // Header: "5 / 5 passed" with a progress bar
      ctx.fillStyle = WHITE;
      ctx.fillText("TEST RUN", 60, 60);
      ctx.fillStyle = CYAN;
      ctx.fillText("5/5 PASSED", 760, 60);
      ctx.beginPath();
      ctx.roundRect(60, 110, 980, 14, 7);
      ctx.fill();

      TEST_CASES.forEach((label, i) => {
        const y = 200 + i * 105;
        // Check box with a tick
        ctx.strokeStyle = CYAN;
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.roundRect(60, y - 30, 60, 60, 12);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(74, y);
        ctx.lineTo(86, y + 13);
        ctx.lineTo(108, y - 14);
        ctx.stroke();

        ctx.fillStyle = i === TEST_CASES.length - 1 ? PINK : WHITE;
        ctx.fillText(label, 150, y);
      });
    },
    1100,
    720,
    count,
  );
}
