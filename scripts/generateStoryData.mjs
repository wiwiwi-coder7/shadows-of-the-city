import fs from 'node:fs';
import path from 'node:path';

const sourceDir = '/home/ubuntu/game_review';
const outputPath = '/home/ubuntu/shadows-of-the-city/client/src/data/story.generated.ts';

const sceneAssets = {
  '1-1': '/manus-storage/scene_01_nicks_apartment_5bf86b6d.png',
  '1-2': '/manus-storage/scene_02_gaspars_cafe_e90381ff.png',
  '1-3': '/manus-storage/scene_03_police_precinct_bec111fd.png',
  '1-4': '/manus-storage/scene_04_harbor_warehouse_c2afbb64.png',
  '1-5': '/manus-storage/scene_05_carriage_interlude_038734e1.png',
  '1-6': '/manus-storage/scene_06_depot_confrontation_ad194cb2.png',
  '2-1': '/manus-storage/scene_01_nicks_apartment_deduction_7ea39655.png',
  '2-2': '/manus-storage/scene_02_garden_pavilion_anton_afe3a305.png',
  '2-3': '/manus-storage/scene_03_draeger_shipping_exterior_6a944907.png',
  '2-4': '/manus-storage/scene_04_draeger_office_bccfd885.png',
  '3-1': '/manus-storage/scene_01_renner_tenement_cabc94b2.png',
  '3-2': '/manus-storage/scene_02_shared_threat_f306db7e.png',
  '3-3': '/manus-storage/scene_03_rear_landing_48b51dba.png',
  '3-4': '/manus-storage/scene_04_rusted_anchor_tavern_835fcef7.png',
  '4-1': '/manus-storage/scene_01_nicks_apartment_board_ea293178.png',
  '4-2': '/manus-storage/scene_02_precinct_memo_d4876484.png',
  '4-3': '/manus-storage/scene_03_gaspars_cafe_cases_a3757c40.png',
  '4-4': '/manus-storage/scene_04_alley_ambush_59a31624.png',
  '4-5': '/manus-storage/scene_05_safehouse_aftermath_622f8585.png',
  '5-1': '/manus-storage/scene_01_safehouse_adins_decision_41e3a4c0.png',
  '5-2': '/manus-storage/scene_02_warehouse_trap_212ea369.png',
  '5-3': '/manus-storage/scene_03_warehouse_aftermath_4965b95f.png',
  '5-4': '/manus-storage/scene_04_grief_comfort_cac761a8.png',
  '5-5': '/manus-storage/scene_05_hillers_exam_room_705f36e2.png',
  '6-1': '/manus-storage/scene_01_nicks_apartment_first_face_4221606c.png',
  '6-2': '/manus-storage/scene_02_renner_revisited_456a790f.png',
  '6-3': '/manus-storage/scene_03_erica_print_shop_546c4369.png',
  '6-4': '/manus-storage/scene_04_kurts_files_d2dc5aeb.png',
  '7-1': '/manus-storage/scene_01_guildhall_vault_9a226220.png',
  '7-2': '/manus-storage/scene_02_falsified_report_4f64a234.png',
  '7-3': '/manus-storage/scene_03_first_full_flashback_a0ed708e.png',
  '7-4': '/manus-storage/scene_04_vivienne_in_vault_e749e2e5.png',
  '7-5': '/manus-storage/scene_05_beni_glimpsed_b835222c.png',
  '8-1': '/manus-storage/scene_01_nicks_apartment_final_memory_86c28e4c.png',
  '8-2': '/manus-storage/scene_02_rooftop_telling_3e75ff50.png',
  '8-3': '/manus-storage/scene_03_rooftop_reckoning_f347302a.png',
  '9-1': '/manus-storage/scene_01_gaspars_cafe_planning_12500421.png',
  '9-2': '/manus-storage/scene_02_erica_dressmakers_shop_13f6374f.png',
  '9-3': '/manus-storage/scene_03_doyles_office_888351dd.png',
  '9-4': '/manus-storage/scene_04_anton_garden_intelligence_8f100f32.png',
  '9-5': '/manus-storage/scene_05_precinct_closure_e286d083.png',
  '10-1': '/manus-storage/scene_01_hill_residence_approach_e3858f56.png',
  '10-2': '/manus-storage/scene_02_beni_study_confrontation_38fc6a97.png',
  '10-3': '/manus-storage/scene_03_fog_terrace_fall_526d50f3.png',
  '10-4': '/manus-storage/scene_04_harbor_overlook_epilogue_17c28853.png',
};

function cleanText(value) {
  return value
    .replace(/^>\s*/, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseScript(chapter) {
  const scriptFileNames = {
    1: 'chapter_01_script-3.md',
    2: 'chapter_02_script-2.md',
    3: 'chapter_03_script-1.md',
    4: 'chapter_04_script-2.md',
    5: 'chapter_05_script-2.md',
    6: 'chapter_06_script-2.md',
    7: 'chapter_07_script-2.md',
    8: 'chapter_08_script-2.md',
    9: 'chapter_09_script-1.md',
    10: 'chapter_10_script-3.md',
  };
  const resolvedFileName = scriptFileNames[chapter];
  const content = fs.readFileSync(path.join(sourceDir, resolvedFileName), 'utf8');
  const lines = content.split(/\r?\n/);
  const nodes = [];
  let sceneNumber = 1;
  let sceneTitle = '';
  let current = null;
  let inChoices = false;

  for (const sourceLine of lines) {
    const sceneMatch = sourceLine.match(/^## SCENE\s+(\d+)\s+[—-]\s+(.*)$/i);
    if (sceneMatch) {
      sceneNumber = Number(sceneMatch[1]);
      sceneTitle = cleanText(sceneMatch[2]);
      inChoices = false;
      continue;
    }

    const nodeMatch = sourceLine.match(/^### NODE\s+(CH\d+_S\d+_N\d+)/);
    if (nodeMatch) {
      current = {
        id: nodeMatch[1],
        chapter,
        scene: sceneNumber,
        sceneTitle,
        imageUrl: sceneAssets[`${chapter}-${sceneNumber}`] ?? '',
        blocks: [],
        choices: [],
      };
      nodes.push(current);
      inChoices = false;
      continue;
    }

    if (!current) continue;
    if (/^\*\*CHOICES:\*\*/.test(sourceLine)) {
      inChoices = true;
      continue;
    }
    if (/^---\s*$/.test(sourceLine) || /^###?\s/.test(sourceLine)) {
      inChoices = false;
      continue;
    }

    const choiceMatch = sourceLine.match(/^-\s+\*\*[A-Z]\)\s+"(.+?)"\*\*\s+→\s+([A-Z0-9_]+)/);
    if (choiceMatch) {
      current.choices.push({
        id: `${current.id}-${String.fromCharCode(65 + current.choices.length)}`,
        label: choiceMatch[1],
        target: choiceMatch[2],
      });
      continue;
    }

    if (inChoices || !sourceLine.trim() || sourceLine.startsWith('[') || sourceLine.startsWith('> *Response')) continue;
    const dialogueMatch = sourceLine.match(/^\*\*([A-Z][A-Z .'-]+):\*\*\s*(.*)$/);
    if (dialogueMatch) {
      const text = cleanText(dialogueMatch[2]);
      if (text) current.blocks.push({ type: 'dialogue', speaker: dialogueMatch[1].trim(), text });
      continue;
    }

    const text = cleanText(sourceLine);
    const internalMatch = text.match(/^([A-Z][A-Z .'-]+)\s*\(internal\):\s*(?:\[Expression:[^\]]+\]\s*)?(.*)$/i);
    if (internalMatch) {
      const dialogueText = internalMatch[2].trim();
      if (dialogueText) current.blocks.push({ type: 'dialogue', speaker: internalMatch[1].trim(), text: dialogueText });
      continue;
    }
    if (text && !text.startsWith('🎨') && !text.startsWith('VISUAL REFERENCE') && !text.startsWith('DESIGN NOTES')) {
      current.blocks.push({ type: 'narration', text });
    }
  }
  return nodes;
}

const nodes = Array.from({ length: 10 }, (_, index) => parseScript(index + 1)).flat();
nodes.forEach((node, index) => {
  const explicitTarget = node.choices[0]?.target;
  node.nextId = explicitTarget && nodes.some(candidate => candidate.id === explicitTarget)
    ? explicitTarget
    : nodes[index + 1]?.id ?? null;
});

const output = `/* This file is generated from the approved chapter scripts. Do not edit by hand. */\n\nexport type StoryBlock = { type: 'narration' | 'dialogue'; text: string; speaker?: string };\nexport type StoryChoice = { id: string; label: string; target: string };\nexport type StoryNode = { id: string; chapter: number; scene: number; sceneTitle: string; imageUrl: string; blocks: StoryBlock[]; choices: StoryChoice[]; nextId: string | null };\n\nexport const storyNodes: StoryNode[] = ${JSON.stringify(nodes, null, 2)};\nexport const storyStartId = storyNodes[0]?.id ?? '';\nexport const storyNodeById = Object.fromEntries(storyNodes.map(node => [node.id, node]));\nexport const storyChapterCount = 10;\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output);
console.log(`Generated ${nodes.length} playable nodes.`);
