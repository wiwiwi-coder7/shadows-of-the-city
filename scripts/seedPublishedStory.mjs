import fs from 'node:fs';
import mysql from 'mysql2/promise';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required to seed story content.');

const generated = fs.readFileSync('/home/ubuntu/shadows-of-the-city/client/src/data/story.generated.ts', 'utf8');
const match = generated.match(/export const storyNodes: StoryNode\[\] = (\[[\s\S]*\]);\nexport const storyStartId/);
if (!match) throw new Error('Could not find generated story nodes.');
const nodes = JSON.parse(match[1]);
const connection = await mysql.createConnection(process.env.DATABASE_URL);

for (const node of nodes) {
  const payload = { ...node, isStart: node.id === nodes[0]?.id };
  await connection.execute(
    `INSERT INTO editorial_content (id, kind, title, chapter, status, payload)
     VALUES (?, 'story-node', ?, ?, 'published', ?)
     ON DUPLICATE KEY UPDATE title = VALUES(title), chapter = VALUES(chapter), status = VALUES(status), payload = VALUES(payload)`,
    [node.id, `${node.id} · ${node.sceneTitle}`, node.chapter, JSON.stringify(payload)],
  );
}

await connection.end();
console.log(`Seeded ${nodes.length} published story nodes.`);
process.exit(0);
