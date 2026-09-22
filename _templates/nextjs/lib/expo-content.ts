import fs from "node:fs";
import path from "node:path";

const FALLBACK = '<div class="expo-page"><div class="expo-wrap"><p>Local expo content not found.</p></div></div>';

export function getLocalExpoHtml(): string {
  const file = path.resolve(process.cwd(), "app/expo-content.html");
  if (!fs.existsSync(file)) return FALLBACK;
  const source = fs.readFileSync(file, "utf8");
  return source.trim() || FALLBACK;
}
