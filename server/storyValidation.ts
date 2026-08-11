export type ManagedStoryNode = { id: string; payload: Record<string, unknown> };

export type StoryValidationResult = {
  brokenDestinations: string[];
  missingImages: string[];
  unreachable: string[];
  totalNodes: number;
};

function linkedNodeIds(payload: Record<string, unknown>) {
  const links: string[] = [];
  if (typeof payload.nextId === "string" && payload.nextId.trim()) links.push(payload.nextId);
  if (Array.isArray(payload.choices)) {
    payload.choices.forEach(choice => {
      if (choice && typeof choice === "object" && typeof (choice as Record<string, unknown>).target === "string") links.push((choice as Record<string, string>).target);
    });
  }
  return links;
}

export function validateManagedStory(nodes: ManagedStoryNode[]): StoryValidationResult {
  const ids = new Set(nodes.map(node => node.id));
  const brokenDestinations: string[] = [];
  const missingImages: string[] = [];

  nodes.forEach(node => {
    if (typeof node.payload.imageUrl !== "string" || !node.payload.imageUrl.trim()) missingImages.push(node.id);
    linkedNodeIds(node.payload).forEach(destination => { if (!ids.has(destination)) brokenDestinations.push(`${node.id} → ${destination}`); });
  });

  const start = nodes.find(node => node.payload.isStart === true);
  const reachable = new Set<string>();
  const queue = start ? [start.id] : [];
  while (queue.length) {
    const id = queue.shift()!;
    if (reachable.has(id)) continue;
    reachable.add(id);
    const node = nodes.find(candidate => candidate.id === id);
    if (node) linkedNodeIds(node.payload).filter(destination => ids.has(destination)).forEach(destination => queue.push(destination));
  }
  return { brokenDestinations, missingImages, unreachable: start ? nodes.filter(node => !reachable.has(node.id)).map(node => node.id) : nodes.map(node => node.id), totalNodes: nodes.length };
}
