// Placeholder content is not final copy.
// It exists to test layout, spacing, routing, SEO structure, and component behavior
// before real content is ready.

const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "placeholders");
const outputDir = path.join(process.cwd(), "src/content/generated");

fs.mkdirSync(outputDir, { recursive: true });

function toTsExport(name, data) {
  return `export const ${name} = ${JSON.stringify(data, null, 2)} as const;\n`;
}

function fileToExportName(filename) {
  return filename
    .replace(".json", "")
    .replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith(".json"));

if (files.length === 0) {
  console.error("No JSON files found in placeholders/");
  process.exit(1);
}

for (const file of files) {
  const raw = fs.readFileSync(path.join(sourceDir, file), "utf-8");

  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.error(`Failed to parse ${file}: ${err.message}`);
    process.exit(1);
  }

  const exportName = fileToExportName(file);
  const outputFile = path.join(outputDir, `${exportName}.ts`);

  fs.writeFileSync(outputFile, toTsExport(exportName, data));
  console.log(`Generated: ${outputFile}`);
}

console.log(`\nDone. ${files.length} file(s) written to ${outputDir}`);
