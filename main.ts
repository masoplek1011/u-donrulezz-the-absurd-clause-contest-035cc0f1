import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const clause =
  "The Company shall not be liable for delays caused by acts of God, war, strikes, or any weather the Company personally scheduled.";

if (
  clause.length === 0 ||
  clause.length > 200 ||
  clause.includes("\n") ||
  clause.trim().length === 0
) {
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), clause, "utf8");
