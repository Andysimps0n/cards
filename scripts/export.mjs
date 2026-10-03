import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";

const post = process.env.POST || "ui-talk-01";
const { CARD_IDS } = await import(`../src/posts/${post}/ids.js`);

const port = 5173;
const outDir = `/Users/eunchan-kim/Desktop/still_cuts/${post}`;
const chrome = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const wanted = process.argv.slice(2);
const ids = wanted.length ? CARD_IDS.filter((id) => wanted.includes(id)) : CARD_IDS;

const origin = `http://localhost:${port}`;
let vite = null;

async function serverUp() {
  try {
    const res = await fetch(`${origin}/`);
    return res.ok;
  } catch {
    return false;
  }
}

function startVite() {
  vite = spawn("npx", ["vite", "--port", String(port), "--strictPort"], {
    stdio: ["ignore", "pipe", "pipe"],
  });
}

async function waitForServer() {
  for (let i = 0; i < 50; i++) {
    if (await serverUp()) return;
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("vite가 열리지 않았습니다");
}

function shot(id) {
  return new Promise((resolve, reject) => {
    const out = `${outDir}/${id}.png`;
    const url = `${origin}/?post=${post}&card=${id}`;
    const proc = spawn(chrome, [
      "--headless=new", "--disable-gpu", "--hide-scrollbars",
      "--force-device-scale-factor=1", "--window-size=1080,1350",
      "--virtual-time-budget=5000", `--screenshot=${out}`, url,
    ], { stdio: "ignore" });
    proc.on("exit", (code) => code === 0 ? resolve(out) : reject(new Error(`캡처 실패 ${id}`)));
  });
}

try {
  await mkdir(outDir, { recursive: true });
  if (!(await serverUp())) {
    startVite();
    await waitForServer();
  }
  for (const id of ids) {
    const out = await shot(id);
    console.log("rendered", out);
  }
} finally {
  vite?.kill("SIGTERM");
}
