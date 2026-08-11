import type { StoryBlock, StoryChoice } from "./story.generated";

export type FarsiNode = { sceneTitle: string; blocks: StoryBlock[]; choices: StoryChoice[] };
