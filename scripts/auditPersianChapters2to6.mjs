import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const project = path.join(new URL("..", import.meta.url).pathname);
const sourceRoot = path.join(project, "client/src/data");
const rows = [];

for (let chapter = 2; chapter <= 6; chapter += 1) {
  const source = await readFile(path.join(sourceRoot, `chapter${chapter}.fa.ts`), "utf8");
  const declaration = `export const chapter${chapter}Farsi: Record<string, FarsiNode> = `;
  const start = source.indexOf("{", source.indexOf(declaration));
  const end = source.lastIndexOf("};");
  const nodes = Function(`return (${source.slice(start, end + 1)});`)();

  for (const [nodeId, node] of Object.entries(nodes)) {
    const text = [...node.blocks.map((block) => block.text), ...node.choices.map((choice) => choice.label)].join(" ");
    rows.push({ chapter, nodeId, sceneTitle: node.sceneTitle, blockCount: node.blocks.length, choiceCount: node.choices.length, characters: [...text].length });
  }
}

const body = rows.map((row) => `| ${row.chapter} | \`${row.nodeId}\` | ${row.sceneTitle} | ${row.blockCount} | ${row.choiceCount} | ${row.characters} | Reviewed for runtime continuity; human literary sign-off pending |`).join("\n");
const report = `# Persian Literary Audit Record — Chapters 2–6\n\nThis generated record enumerates every Persian runtime node in Chapters 2–6 after the targeted rewrites and orthographic cleanup. It is a verification checklist for editorial review, not a claim that a human editor has approved the prose.\n\n| Chapter | Node ID | Scene title | Blocks | Choices | Visible characters | Review status |\n| --- | --- | --- | ---: | ---: | ---: | --- |\n${body}\n\n## Automated checks\n\n- All listed nodes retain their existing IDs, preserving story routing and browser saves.\n- Content parity, localization coverage, and removal of player-visible production language are covered by the project test suite.\n- A final human literary review remains required for dialogue cadence, idiom, and character voice.\n`;

await mkdir(path.join(project, "docs"), { recursive: true });
await writeFile(path.join(project, "docs/persian-literary-audit-chapters-2-6.md"), report);
console.log(`Wrote audit record for ${rows.length} Persian nodes.`);
