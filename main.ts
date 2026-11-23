import fs from "node:fs";
import path from "node:path";

const LINE = "Good news: I successfully avoided the tax bracket of first place and preserved 100% of our humble underdog narrative.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const dst = path.join(outDir, "entry.txt");
if (LINE.length < 1 || LINE.length > 200) throw new Error(`Length out of bounds: ${LINE.length}`);
fs.writeFileSync(dst, LINE, "utf8");
fs.chmodSync(dst, 0o644);
