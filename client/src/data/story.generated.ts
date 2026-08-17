/* This file is generated from the approved chapter scripts. Do not edit by hand. */

export type StoryBlock = { type: 'narration' | 'dialogue'; text: string; speaker?: string };
export type StoryChoice = { id: string; label: string; target: string };
export type StoryNode = { id: string; chapter: number; scene: number; sceneTitle: string; imageUrl: string; blocks: StoryBlock[]; choices: StoryChoice[]; nextId: string | null };

const rawStoryNodes: StoryNode[] = [
  {
    "id": "CH1_S1_N01",
    "chapter": 1,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_5bf86b6d.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "Right. Up. The coat needs mending before the weather turns."
      },
      {
        "type": "narration",
        "text": "He reaches for the old coat on the hook — the one from before, the one he doesn't wear except when the newer one's at the tailor's. His fingers catch on something stiff in the lining. Not a tear. Something sewn in."
      }
    ],
    "choices": [
      {
        "id": "CH1_S1_N01-A",
        "label": "Cut the lining open right now. No point waiting.",
        "target": "CH1_S1_N02"
      },
      {
        "id": "CH1_S1_N01-B",
        "label": "Stop. Think first — why would something be hidden in your own coat?",
        "target": "CH1_S1_N02"
      },
      {
        "id": "CH1_S1_N01-C",
        "label": "Get dressed first, deal with it in better light.",
        "target": "CH1_S1_N02"
      }
    ],
    "nextId": "CH1_S1_N02"
  },
  {
    "id": "CH1_S1_N02",
    "chapter": 1,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_5bf86b6d.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever he chose, the result is the same: a small object falls into his palm. A blackened brass token, coin-sized, cold despite sitting against warm wool for who knows how long. Stamped into its face: a raven, wings spread, sitting inside a circle — except the circle is broken, a single deliberate gap cut into it like a wound that never closed."
      },
      {
        "type": "narration",
        "text": "He has no memory of it. None. Not the coat pocket it came from, not the hand that sewed it in, not a single frame of when this object entered his life."
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "Another blank space. Add it to the list."
      }
    ],
    "choices": [
      {
        "id": "CH1_S1_N02-A",
        "label": "Try to force the memory — close your eyes, chase it.",
        "target": "CH1_S1_N03A"
      },
      {
        "id": "CH1_S1_N02-B",
        "label": "Don't waste energy on a memory that won't come. Study the object itself instead.",
        "target": "CH1_S1_N03B"
      },
      {
        "id": "CH1_S1_N02-C",
        "label": "Pocket it and move on — you can't solve everything before breakfast.",
        "target": "CH1_S1_N03C"
      }
    ],
    "nextId": "CH1_S1_N03"
  },
  {
    "id": "CH1_S1_N03",
    "chapter": 1,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_5bf86b6d.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever path he took, Nick ends up standing in his kitchen a few minutes later, token in his coat pocket, mind already running through who in this city might recognize a symbol like that. Three names surface, in this order: Gaspar, who forgets nothing. Kurt, who has access to things I don't anymore. Hiller, if this turns out to smell like a body."
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "He grabs his badge out of habit, then puts it back down — he's not on duty, hasn't been in months, and flashing it now would just be lying with a shinier prop. He takes the coat instead. The old one. [Nick: Resolve]"
      },
      {
        "type": "narration",
        "text": "[Scene 1 ends. Transition to Scene 2.]"
      },
      {
        "type": "narration",
        "text": "Interior, early morning, a small tucked-away café/tavern on a quiet corner where three narrow streets meet. Low ceiling with dark wooden beams, a scattering of mismatched round tables, a long zinc-topped counter. Steam curling from a copper kettle. Warm amber lamplight against the grey morning outside the fogged windows — a deliberate contrast to the cold blue of Nick's apartment. Shelves behind the counter crowded with mismatched cups, a few dusty bottles, an old ship's clock stopped at some hour that doesn't matter anymore. Gaspar behind the counter: short, white-bearded, apron stained from decades of use, moving unhurried. A couple of early regulars in the background, silent over their cups — the café's unspoken rule is that nobody here asks nobody else too many questions. Palette: warm browns, brass, amber lamp-glow, soft steam. Mood: the one safe, neutral room in the whole city."
      }
    ],
    "choices": [],
    "nextId": "CH1_S2_N01"
  },
  {
    "id": "CH1_S2_N01",
    "chapter": 1,
    "scene": 2,
    "sceneTitle": "GASPAR'S CAFÉ",
    "imageUrl": "/manus-storage/scene_02_gaspars_cafe_e90381ff.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Nick pushes the door open; the bell above it gives one tired ring. Gaspar doesn't look up right away — he never does, it's part of the performance of not caring who walks in, even though he always knows."
      },
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "[Expression: Knowing Look] \"You look like a man who didn't sleep, and also like a man who's about to ask me something I won't enjoy answering.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"Two for two. Coffee first, or should I just show you the thing that's ruining my morning?\""
      },
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "(already pouring) [Expression: Weathered Calm] \"Show me. The coffee will still be here when you're disappointed.\""
      },
      {
        "type": "narration",
        "text": "Nick sets the token on the counter. Gaspar's hand — reaching for the cup — stops for exactly one beat too long before continuing the motion."
      }
    ],
    "choices": [
      {
        "id": "CH1_S2_N01-A",
        "label": "Notice the hesitation out loud — press him on it.",
        "target": "CH1_S2_N02A"
      },
      {
        "id": "CH1_S2_N01-B",
        "label": "Say nothing, let him volunteer whatever he's going to volunteer.",
        "target": "CH1_S2_N02B"
      },
      {
        "id": "CH1_S2_N01-C",
        "label": "Play it light — joke that even his coffee flinched.",
        "target": "CH1_S2_N02C"
      }
    ],
    "nextId": "CH1_S2_N02"
  },
  {
    "id": "CH1_S2_N02",
    "chapter": 1,
    "scene": 2,
    "sceneTitle": "GASPAR'S CAFÉ",
    "imageUrl": "/manus-storage/scene_02_gaspars_cafe_e90381ff.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "(turning the token over once with a thick finger, then sliding it back) [Expression: Knowing Look, shifting to Quiet Sadness] \"I've seen this mark maybe three times in forty years. Never on anything good.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"What is it?\""
      },
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "[Expression: Weathered Calm] \"A raven in a broken circle. Some people call it a courier's mark — something you'd stamp on a message you didn't want traced back to a name. Other people don't call it anything at all, because saying it out loud got them noticed by the wrong sort.\""
      }
    ],
    "choices": [
      {
        "id": "CH1_S2_N02-A",
        "label": "Ask directly: is this connected to something dangerous?",
        "target": "CH1_S2_N03A"
      },
      {
        "id": "CH1_S2_N02-B",
        "label": "Ask where he's seen it before — try to get a location, not just a rumor.",
        "target": "CH1_S2_N03B"
      },
      {
        "id": "CH1_S2_N02-C",
        "label": "Ask why he's willing to tell you even this much.",
        "target": "CH1_S2_N03C"
      }
    ],
    "nextId": "CH1_S2_N03"
  },
  {
    "id": "CH1_S2_N03",
    "chapter": 1,
    "scene": 2,
    "sceneTitle": "GASPAR'S CAFÉ",
    "imageUrl": "/manus-storage/scene_02_gaspars_cafe_e90381ff.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "[Expression: Protective Firmness] \"Third pier. Old courier depot. If you're going, go in daylight, and don't go alone if you can help it.\" He pushes the coffee closer, like that settles the matter. \"Now drink that before it gets as cold as your case.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "Nick drinks the coffee. It helps more than he'll admit. [Nick: Neutral / Guarded]"
      },
      {
        "type": "narration",
        "text": "[Scene 2 ends. Transition to Scene 3.]"
      },
      {
        "type": "narration",
        "text": "Interior, mid-morning. A cramped, over-lit precinct office — municipal, institutional, nothing warm about it. Rows of paper-stacked desks, a wall of case boards with pinned photographs and string, the low murmur of typewriters and radio static. Kurt's desk sits near a frosted-glass office door with her rank stenciled on it, slightly apart from the others, positioned so she can see the whole floor. She's in sharp, practical uniform, sleeves rolled, posture upright and guarded. Grey daylight through tall barred windows. Cold palette: institutional green-grey walls, harsh overhead light, brass fixtures gone dull. Mood: functional hostility — a place Nick used to belong to and now visits like a guest who overstayed a welcome that was never that warm to begin with."
      }
    ],
    "choices": [],
    "nextId": "CH1_S3_N01"
  },
  {
    "id": "CH1_S3_N01",
    "chapter": 1,
    "scene": 3,
    "sceneTitle": "POLICE PRECINCT (KURT)",
    "imageUrl": "/manus-storage/scene_03_police_precinct_bec111fd.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Kurt sees him before he reaches her desk. She doesn't get up."
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "[Expression: Dry Sarcasm] \"You're not on the visitor log. Which means either the desk sergeant likes you, or you told him you were dropping off paperwork.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"Second one. Don't tell him I lied.\""
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(dry) [Expression: Dry Sarcasm] \"I lie to him daily. Professional courtesy. What do you want, Nick?\""
      }
    ],
    "choices": [
      {
        "id": "CH1_S3_N01-A",
        "label": "Be direct — show her the token immediately.",
        "target": "CH1_S3_N02A"
      },
      {
        "id": "CH1_S3_N01-B",
        "label": "Ease in — ask how she's been first, soften the ground.",
        "target": "CH1_S3_N02B"
      },
      {
        "id": "CH1_S3_N01-C",
        "label": "Lead with the request for records access, token second.",
        "target": "CH1_S3_N02C"
      }
    ],
    "nextId": "CH1_S3_N02"
  },
  {
    "id": "CH1_S3_N02",
    "chapter": 1,
    "scene": 3,
    "sceneTitle": "POLICE PRECINCT (KURT)",
    "imageUrl": "/manus-storage/scene_03_police_precinct_bec111fd.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Kurt picks up the token despite herself, turns it in the harsh office light. Her jaw tightens — barely, but Nick's spent enough years reading rooms like this one to catch it. [Kurt: Vulnerable Honesty, quickly masked by Guarded Professional]"
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "[Expression: Guarded Professional] \"Where did you get this?\""
      }
    ],
    "choices": [
      {
        "id": "CH1_S3_N02-A",
        "label": "Tell her the full truth — found it sewn into your old coat, no memory of it.",
        "target": "CH1_S3_N03A"
      },
      {
        "id": "CH1_S3_N02-B",
        "label": "Keep it vague — say you 'came across it' during a personal matter.",
        "target": "CH1_S3_N03B"
      },
      {
        "id": "CH1_S3_N02-C",
        "label": "Turn the question back on her — ask why she reacted like that first.",
        "target": "CH1_S3_N03C"
      }
    ],
    "nextId": "CH1_S3_N03"
  },
  {
    "id": "CH1_S3_N03",
    "chapter": 1,
    "scene": 3,
    "sceneTitle": "POLICE PRECINCT (KURT)",
    "imageUrl": "/manus-storage/scene_03_police_precinct_bec111fd.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(sliding the token back across the desk, lowering her voice) [Expression: Firm Authority, softening] \"I can pull what's on record about the mark itself — sanitized, old, mostly useless. I can't pull anything current, and I can't pull anything with your name anywhere near it. You're not supposed to be investigating anything right now. You're supposed to be resting.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(dry) [Expression: Dry Amusement] \"I've tried resting. Turns out my own head doesn't take instructions well these days.\""
      },
      {
        "type": "narration",
        "text": "Kurt doesn't smile, but something in her posture loosens by a fraction — old grievance, old worry, both still there, both a little tired of fighting each other. [Kurt: Reluctant Warmth]"
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "[Expression: Reluctant Warmth] \"Give me an hour. And Nick — whatever this is, don't go pulling the thread alone.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — Nick leaves with a thin case file: a handful of old, redacted reports referencing the raven-and-broken-circle mark, tied loosely to unsolved smuggling and \"irregular courier activity\" near the harbor over the last several years. Nothing recent. Nothing with names.]"
      },
      {
        "type": "narration",
        "text": "[Scene 3 ends. Transition to Scene 4.]"
      },
      {
        "type": "narration",
        "text": "Exterior-to-interior, early afternoon, heavy fog rolling off the water. A row of aging brick harbor warehouses, most shuttered, gulls picking at refuse along the docks. One warehouse has its wide loading doors open, a City Police wagon parked outside, a uniformed officer keeping idle onlookers back. Inside: dim, cavernous, crates stacked in leaning towers, water dripping somewhere unseen. A body lies under a canvas sheet near an overturned handcart, lit by a portable lamp Hiller has set up beside his case of instruments. Hiller crouches over the body — thin, round spectacles catching the lamplight, sleeves rolled, utterly absorbed. Palette: fog-grey, damp brick red-brown, the single warm lamp pool around the body as the only true light source. Mood: quiet, procedural, faintly grim — death treated as a puzzle, not a tragedy, at least by the man kneeling over it."
      }
    ],
    "choices": [],
    "nextId": "CH1_S4_N01"
  },
  {
    "id": "CH1_S4_N01",
    "chapter": 1,
    "scene": 4,
    "sceneTitle": "HARBOR WAREHOUSE (HILLER)",
    "imageUrl": "/manus-storage/scene_04_harbor_warehouse_c2afbb64.png",
    "blocks": [
      {
        "type": "narration",
        "text": "The officer at the door recognizes Nick, waves him through without much thought — old habits, old rank, nobody's told the street cops to stop treating him like one of their own. Hiller doesn't look up as Nick approaches."
      },
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "[Expression: Deadpan Neutral] \"If you're here to tell me the department finally assigned someone competent to this, I'll be very surprised, and also relieved.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Neutral / Guarded] \"Still just me, Hiller. What have we got?\""
      },
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "[Expression: Focused Clinical] \"A courier. Or he was, judging by the satchel — empty now, which is its own kind of interesting. Throat opened clean, no hesitation marks. Whoever did it has done it before.\""
      }
    ],
    "choices": [
      {
        "id": "CH1_S4_N01-A",
        "label": "Ask about time of death and other clinical details first.",
        "target": "CH1_S4_N02A"
      },
      {
        "id": "CH1_S4_N01-B",
        "label": "Ask what was in the satchel, or who took it.",
        "target": "CH1_S4_N02B"
      },
      {
        "id": "CH1_S4_N01-C",
        "label": "Show Hiller the token immediately, ask if it means anything to him.",
        "target": "CH1_S4_N02C"
      }
    ],
    "nextId": "CH1_S4_N02"
  },
  {
    "id": "CH1_S4_N02",
    "chapter": 1,
    "scene": 4,
    "sceneTitle": "HARBOR WAREHOUSE (HILLER)",
    "imageUrl": "/manus-storage/scene_04_harbor_warehouse_c2afbb64.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "(regardless of path, he ends up here) [Expression: Focused Clinical] \"Whatever this is —\" (gesturing between the body and, if shown, the token) \"— it's the same mark. Stitched into the satchel lining, same raven, same broken circle. Somebody's running a courier network that doesn't want its name known, and somebody else just made sure this particular courier stopped talking.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"Any idea who runs it?\""
      },
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "[Expression: Deadpan Neutral] \"That's not a medical question. That's the part where you go do your actual job, on-leave or not.\""
      }
    ],
    "choices": [
      {
        "id": "CH1_S4_N02-A",
        "label": "Push for a guess anyway — Hiller's smarter than he lets on.",
        "target": "CH1_S4_N03A"
      },
      {
        "id": "CH1_S4_N02-B",
        "label": "Let it go — thank him and move on to the next lead.",
        "target": "CH1_S4_N03B"
      },
      {
        "id": "CH1_S4_N02-C",
        "label": "Ask if this kind of body turns up often, or if this is new.",
        "target": "CH1_S4_N03C"
      }
    ],
    "nextId": "CH1_S4_N03"
  },
  {
    "id": "CH1_S4_N03",
    "chapter": 1,
    "scene": 4,
    "sceneTitle": "HARBOR WAREHOUSE (HILLER)",
    "imageUrl": "/manus-storage/scene_04_harbor_warehouse_c2afbb64.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "[Expression: Deadpan Neutral] \"Third pier depot's the obvious next stop, if Gaspar hasn't already told you that. I'd say be careful, but you never listen, so I'll just say: try not to end up on my table next.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(dry) [Expression: Dry Amusement] \"I'll do my best to disappoint you.\""
      },
      {
        "type": "narration",
        "text": "[Scene 4 ends. Transition to Scene 5.]"
      },
      {
        "type": "narration",
        "text": "Exterior, late afternoon, fog thinning but not gone. A worn two-horse carriage rattling along a cobbled harbor-adjacent street, weak sunlight breaking through cloud in patches. Ozzie up front, oversized coat, round wind-chapped face, talking half over his shoulder while still minding the reins. Nick seated behind, half-listening, half-watching the warehouses roll by. Palette: pale gold breaking through grey, wet cobblestone reflections, faded carriage paintwork. Mood: a brief tonal breather — noise and color after the quiet dread of the warehouse."
      }
    ],
    "choices": [],
    "nextId": "CH1_S5_N01"
  },
  {
    "id": "CH1_S5_N01",
    "chapter": 1,
    "scene": 5,
    "sceneTitle": "CARRIAGE INTERLUDE (OZZIE)",
    "imageUrl": "/manus-storage/scene_05_carriage_interlude_038734e1.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "OZZIE",
        "text": "[Expression: Talkative Grin] \"Third pier, you said? Bad luck, that stretch. Lost a fare there once — fella paid me half up front, told me to wait, never came back. I waited two hours! Two! Charged double when I finally left, if you're wondering, which — good instincts on my part, everyone said so.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"Everyone. Sure.\""
      },
      {
        "type": "dialogue",
        "speaker": "OZZIE",
        "text": "[Expression: Talkative Grin] \"You don't believe me. Fine. But I'll tell you this — that depot's had strange comings and goings for months. Fellas in dark coats, always at night, always carrying more than they're carrying when they leave. Never the same face twice, except—\""
      }
    ],
    "choices": [
      {
        "id": "CH1_S5_N01-A",
        "label": "Press him — ask what he means by 'except.'",
        "target": "CH1_S5_N02A"
      },
      {
        "id": "CH1_S5_N01-B",
        "label": "Let him ramble — see if he gets to the point himself.",
        "target": "CH1_S5_N02B"
      },
      {
        "id": "CH1_S5_N01-C",
        "label": "Steer the conversation — ask if he's seen a woman around there, tall, dark-haired.",
        "target": "CH1_S5_N02C"
      }
    ],
    "nextId": "CH1_S5_N02"
  },
  {
    "id": "CH1_S5_N02",
    "chapter": 1,
    "scene": 5,
    "sceneTitle": "CARRIAGE INTERLUDE (OZZIE)",
    "imageUrl": "/manus-storage/scene_05_carriage_interlude_038734e1.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "OZZIE",
        "text": "[Expression: Earnest Concern] \"Whoever she is, she's not from around here, and she's not the sort you stop for a chat. Not that I'm scared. I just... prioritize my own continued existence, is all.\""
      },
      {
        "type": "narration",
        "text": "The carriage slows near the pier. Fog thickens again, swallowing the weak gold light whole."
      },
      {
        "type": "dialogue",
        "speaker": "OZZIE",
        "text": "[Expression: Earnest Concern] \"This is as close as I go. Rest is on foot, and on you.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — Nick pays him, steps out into the fog alone.]"
      },
      {
        "type": "narration",
        "text": "[Scene 5 ends. Transition to Scene 6.]"
      },
      {
        "type": "narration",
        "text": "Interior, dusk settling, heavy fog bleeding in through broken windows and a half-open loading door. An officially shuttered courier depot — dust sheets over old counters, undelivered parcels stacked and forgotten, a faded company sign hanging by one chain. Long shadows, the last grey daylight cutting weak shafts through gaps in the roof. In the back of the room, half-turned away, stands Lia: tall, black hair loose, dark coat, utterly still in the way that trained people are still — like she was carved into the scene rather than standing in it. She's examining something on a counter — papers, a ledger — when Nick's footsteps announce him. Palette: desaturated blues and greys, one shaft of dying amber light between them like a physical line neither has crossed yet. Mood: sudden, sharp tension after the quiet of the previous scenes — a held breath."
      }
    ],
    "choices": [],
    "nextId": "CH1_S6_N01"
  },
  {
    "id": "CH1_S6_N01",
    "chapter": 1,
    "scene": 6,
    "sceneTitle": "THE DEPOT (FIRST ENCOUNTER WITH ADRY)",
    "imageUrl": "/manus-storage/scene_06_depot_confrontation_ad194cb2.png",
    "blocks": [
      {
        "type": "narration",
        "text": "The floorboard creaks under Nick's boot before he can help it. Lia doesn't jump. She goes still in a different way — the stillness of someone recalculating a threat in half a second — and turns. [Lia: Guarded Neutral, shifting fast]"
      },
      {
        "type": "narration",
        "text": "The moment she sees his face, something happens that Nick has no context for at all: her expression doesn't shift toward confusion, or curiosity, or the mild wariness of a stranger caught somewhere she shouldn't be."
      },
      {
        "type": "narration",
        "text": "It shifts toward recognition. And recognition, on her, looks like rage held very carefully in check. [Lia: Controlled Fury]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(low, controlled, dangerous) [Expression: Controlled Fury] \"You have got to be joking.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(genuinely thrown) [Expression: Shock / Disorientation] \"...Do I know you?\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(a short, humorless breath, almost a laugh) [Expression: Cold Hostility] \"Don't. Don't you dare stand there and pretend—\""
      }
    ],
    "choices": [
      {
        "id": "CH1_S6_N01-A",
        "label": "Stay calm, hands visible — insist you're telling the truth.",
        "target": "CH1_S6_N02A"
      },
      {
        "id": "CH1_S6_N01-B",
        "label": "Match her tone — get defensive, ask what her problem is.",
        "target": "CH1_S6_N02B"
      },
      {
        "id": "CH1_S6_N01-C",
        "label": "Try to close the distance slightly, keep her talking, look for answers before she leaves.",
        "target": "CH1_S6_N02C"
      }
    ],
    "nextId": "CH1_S6_N02"
  },
  {
    "id": "CH1_S6_N02",
    "chapter": 1,
    "scene": 6,
    "sceneTitle": "THE DEPOT (FIRST ENCOUNTER WITH ADRY)",
    "imageUrl": "/manus-storage/scene_06_depot_confrontation_ad194cb2.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever happened, Lia takes a measured step back toward the depot's rear exit, never fully turning away from him — the posture of someone who's survived by never trusting a room enough to turn her back on it. [Lia: Guarded Neutral]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Cold Hostility] \"Whatever you're playing at — coming back now, like this — tell whoever sent you that it won't work twice.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Vulnerable / Open] \"Nobody sent me. I'm just following a—\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(cutting him off, quiet and final) [Expression: Cold Hostility] \"Save it.\""
      }
    ],
    "choices": [
      {
        "id": "CH1_S6_N02-A",
        "label": "Ask her name directly, one last attempt before she's gone.",
        "target": "CH1_S6_N03A"
      },
      {
        "id": "CH1_S6_N02-B",
        "label": "Ask what she means by 'twice.'",
        "target": "CH1_S6_N03B"
      },
      {
        "id": "CH1_S6_N02-C",
        "label": "Let her go without pushing further — read the room.",
        "target": "CH1_S6_N03C"
      }
    ],
    "nextId": "CH1_S6_N03"
  },
  {
    "id": "CH1_S6_N03",
    "chapter": 1,
    "scene": 6,
    "sceneTitle": "THE DEPOT (FIRST ENCOUNTER WITH ADRY)",
    "imageUrl": "/manus-storage/scene_06_depot_confrontation_ad194cb2.png",
    "blocks": [
      {
        "type": "narration",
        "text": "By the time Nick reaches the doorway himself, she's gone — no footsteps, no carriage, nothing. Just fog, and the faint smell of gun oil and rain, and a ledger she left behind on the counter, its pages torn out except for one."
      },
      {
        "type": "narration",
        "text": "On that single remaining page: the raven-in-a-broken-circle mark again, stamped beside a column of numbers that mean nothing to him yet — and, in the margin, in handwriting that is unmistakably, impossibly, his own, a single unfinished sentence:"
      },
      {
        "type": "narration",
        "text": "\"—if she ever finds out what I—\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(quiet, to no one) [Expression: Shock / Disorientation] \"...What I what?\""
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 1]"
      },
      {
        "type": "narration",
        "text": "NARRATION (closing): He stands there a long moment in the dying light, the page in one hand, the token in the other, two pieces of a puzzle that both seem to belong to a version of himself he's never met. Somewhere out in the fog, a woman who hates him on sight is walking away with a hundred answers he doesn't have. [Nick: Restrained Grief]"
      },
      {
        "type": "narration",
        "text": "He pockets the page. Tomorrow, he decides, he starts pulling this thread properly — carefully, the way Kurt told him to, and probably not the way he actually will. [Nick: Resolve]"
      },
      {
        "type": "narration",
        "text": "- No branch in this chapter changes the fixed plot outcomes (token found → Gaspar → Kurt → Hiller → depot → Lia encounter → torn ledger page). Choices only affect dialogue flavor and small relationship-tracking flags, per your design rule."
      },
      {
        "type": "narration",
        "text": "- Relationship flags planted this chapter (for later payoff):"
      },
      {
        "type": "narration",
        "text": "- Gaspar: knew pre-wipe Nick, protective, evasive — pays off in Ch4/Ch9."
      },
      {
        "type": "narration",
        "text": "- Kurt: knows more than she says about Nick's past — pays off in Ch6."
      },
      {
        "type": "narration",
        "text": "- Hiller: notes this isn't the first body with this mark, hints at institutional disinterest — pays off in Ch4."
      },
      {
        "type": "narration",
        "text": "- Ozzie: throwaway detail about \"the woman\" — minor color, reinforces Lia's presence in the area."
      },
      {
        "type": "narration",
        "text": "- Lia: the word \"twice\" and her flicker of doubt (if Option A chosen in S6_N01) are the two seeds carried forward."
      },
      {
        "type": "narration",
        "text": "- Key physical clue carried into Chapter 2: the torn ledger page with Nick's own handwriting and an unfinished sentence."
      },
      {
        "type": "narration",
        "text": "- Visual reference boxes are written as standalone art briefs — each can be sent to an image generator without needing the surrounding dialogue for context."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet. Where a line shows emotional transition mid-beat, both expressions are noted in sequence (e.g., \"Focused Clinical, shifting to Philosophical / Distant\")."
      }
    ],
    "choices": [],
    "nextId": "CH2_S1_N01"
  },
  {
    "id": "CH2_S1_N01",
    "chapter": 2,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT (NIGHTMARE + DEDUCTION)",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_deduction_7ea39655.png",
    "blocks": [
      {
        "type": "narration",
        "text": "He sits with it a moment before getting up — the old training taking over, treating his own mind like a crime scene he's not allowed to disturb yet. [Nick: Focused / Investigator]"
      }
    ],
    "choices": [
      {
        "id": "CH2_S1_N01-A",
        "label": "Write down every detail while it's fresh, clinically, like a report.",
        "target": "CH2_S1_N02"
      },
      {
        "id": "CH2_S1_N01-B",
        "label": "Don't dwell on the dream — go straight to the physical evidence, the ledger page.",
        "target": "CH2_S1_N02"
      },
      {
        "id": "CH2_S1_N01-C",
        "label": "Sit with the dread a minute longer, try to place the feeling rather than the images.",
        "target": "CH2_S1_N02"
      }
    ],
    "nextId": "CH2_S1_N02"
  },
  {
    "id": "CH2_S1_N02",
    "chapter": 2,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT (NIGHTMARE + DEDUCTION)",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_deduction_7ea39655.png",
    "blocks": [
      {
        "type": "narration",
        "text": "At the desk, he lays the token beside the ledger page and looks at the column of numbers properly for the first time in good light."
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "Not amounts. Too irregular for currency. Could be dates, could be codes. Could be nothing. I need someone who reads this city's secrets for a living — and I know exactly one person who does, even if he's young enough that it should be illegal to know this much."
      },
      {
        "type": "narration",
        "text": "Exterior, late morning, a small public garden tucked between government buildings — the kind of quiet green space bureaucrats use to eat lunch and pretend the city isn't as loud as it is. A stone pavilion with a peeling green roof at its center, a few chess tables built into the stonework, mostly empty this early. Anton sits alone at one of them, small and unassuming, a half-finished chess problem set up though he's playing no one, watching the paths more than the board. Soft overcast daylight, muted greens and greys, a single splash of color from a vendor's cart selling paper flowers nearby. Mood: deceptively peaceful — the calm of a boy who looks like he belongs in this park and, underneath that, absolutely does not."
      }
    ],
    "choices": [
      {
        "id": "CH2_S1_N02-A",
        "label": "Decide to bring the full ledger page to Anton — show him everything.",
        "target": "CH2_S1_N03A"
      },
      {
        "id": "CH2_S1_N02-B",
        "label": "Decide to bring only the token, keep the page and the handwriting private for now.",
        "target": "CH2_S1_N03B"
      },
      {
        "id": "CH2_S1_N02-C",
        "label": "Decide to test Anton first — mention the raven mark casually, see if he reacts before showing anything.",
        "target": "CH2_S1_N03C"
      }
    ],
    "nextId": "CH2_S2_N01"
  },
  {
    "id": "CH2_S2_N01",
    "chapter": 2,
    "scene": 2,
    "sceneTitle": "THE GARDEN PAVILION (ANTON)",
    "imageUrl": "/manus-storage/scene_02_garden_pavilion_anton_afe3a305.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Anton doesn't look up as Nick sits across from him, already resetting a knight that wasn't out of place."
      },
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "(quiet, careful) [Expression: Shy / Reserved] \"You don't play chess, Mr. Nick. You told me that. Twice.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Neutral / Guarded] \"I don't. I'm here for something else.\""
      },
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "(a small, private almost-smile, gone as fast as it appears) [Expression: Shy / Reserved] \"People always are.\""
      }
    ],
    "choices": [
      {
        "id": "CH2_S2_N01-A",
        "label": "Get straight to business — ask about the raven-and-broken-circle mark directly.",
        "target": "CH2_S2_N02A"
      },
      {
        "id": "CH2_S2_N01-B",
        "label": "Ease in — ask what he's heard around the docks and warehouses lately.",
        "target": "CH2_S2_N02B"
      },
      {
        "id": "CH2_S2_N01-C",
        "label": "If carrying the ledger page (from S1 choice A): show him the page immediately.",
        "target": "CH2_S2_N02C"
      }
    ],
    "nextId": "CH2_S2_N02"
  },
  {
    "id": "CH2_S2_N02",
    "chapter": 2,
    "scene": 2,
    "sceneTitle": "THE GARDEN PAVILION (ANTON)",
    "imageUrl": "/manus-storage/scene_02_garden_pavilion_anton_afe3a305.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "(lowering his voice, glancing once toward the path before continuing) [Expression: Analytical / Older-Than-Years] \"People around the harbor and a few offices that matter more than they look call it the Rookery. Not to its face, if it has one. Nobody says the name twice in the same room.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"And what is the Rookery, exactly?\""
      },
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "[Expression: Analytical / Older-Than-Years] \"Depends who you ask. Ask a smuggler, it's the group you pay so your shipment doesn't disappear. Ask a councilman, it doesn't exist. Ask me—\" (he hesitates, genuinely, for the first time) [Expression: Startled Vulnerability] \"—and I'd say it's the reason certain problems in this city solve themselves a little too neatly.\""
      }
    ],
    "choices": [
      {
        "id": "CH2_S2_N02-A",
        "label": "Push him — ask if he knows who leads it.",
        "target": "CH2_S2_N03A"
      },
      {
        "id": "CH2_S2_N02-B",
        "label": "Ask how he knows all this — try to understand his source.",
        "target": "CH2_S2_N03B"
      },
      {
        "id": "CH2_S2_N02-C",
        "label": "Ask if the Rookery has any reason to be interested in Nick personally.",
        "target": "CH2_S2_N03C"
      }
    ],
    "nextId": "CH2_S2_N03"
  },
  {
    "id": "CH2_S2_N03",
    "chapter": 2,
    "scene": 2,
    "sceneTitle": "THE GARDEN PAVILION (ANTON)",
    "imageUrl": "/manus-storage/scene_02_garden_pavilion_anton_afe3a305.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "[Expression: Analytical / Older-Than-Years] \"What I can tell you: the numbers on a page like that usually mark a drop point and a date, coded backward — count from the end of the ledger, not the front. If I had to guess where your page points, I'd start with the Draeger Shipping office, three streets up from the harbor. They've had 'accounting irregularities' for years that nobody upstairs wants investigated.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"That's oddly specific for someone who just told me not to whisper a name in public.\""
      },
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "(the shy boy flickers back into place, just for a second) [Expression: Shy / Reserved] \"The company's not a secret. Just... who's really running it.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — Anton returns to his chess problem, effectively ending the conversation. Nick now has a location: the Draeger Shipping office.] [Anton: Analytical / Older-Than-Years, settling back into Shy / Reserved]"
      },
      {
        "type": "narration",
        "text": "[Scene 2 ends. Transition to Scene 3.]"
      },
      {
        "type": "narration",
        "text": "Exterior, early afternoon, a narrow commercial street three blocks from the harbor. Tall, close-set buildings in soot-darkened brick, the Draeger Shipping Company's sign hanging above a heavy double door, gold lettering gone dull with grime. Across the street, a recessed doorway offers a spot to loiter unnoticed — where Adin is leaning, arms crossed, watching the office entrance with the relaxed posture of someone who's done this exact kind of waiting many times before. He's dressed plainly, deliberately unremarkable — faded jacket, no obvious tells. Blond hair, striking petrol-blue eyes, an open, easygoing face that doesn't match the wary alertness underneath it. Overcast light, muted browns and greys, a little foot traffic passing without much notice of either man. Mood: two strangers about to realize they're circling the same building for very different — and very connected — reasons."
      }
    ],
    "choices": [],
    "nextId": "CH2_S3_N01"
  },
  {
    "id": "CH2_S3_N01",
    "chapter": 2,
    "scene": 3,
    "sceneTitle": "OUTSIDE THE DRAEGER SHIPPING OFFICE (ADIN)",
    "imageUrl": "/manus-storage/scene_03_draeger_shipping_exterior_6a944907.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Nick clocks him from half a block away — not hard, when you've spent years learning what \"waiting for someone, trying not to look like it\" looks like. Adin clocks him right back, just as fast, and doesn't bother pretending otherwise."
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(easy, almost friendly, but watching closely) [Expression: Teasing Grin] \"You've got the walk of a man casing a building. Bad habit to have in this part of town.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"Could say the same about you. Except you've been standing in that doorway long enough to know the mail schedule.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(a short laugh, genuine) [Expression: Warm Open Smile] \"Fair. I like you already, and that's usually a mistake on my part.\""
      }
    ],
    "choices": [
      {
        "id": "CH2_S3_N01-A",
        "label": "Be straightforward — introduce yourself and ask what he's watching for.",
        "target": "CH2_S3_N02A"
      },
      {
        "id": "CH2_S3_N01-B",
        "label": "Stay guarded — ask who he is before offering anything.",
        "target": "CH2_S3_N02B"
      },
      {
        "id": "CH2_S3_N01-C",
        "label": "Make a joke, keep it light, see how he responds under low pressure.",
        "target": "CH2_S3_N02C"
      }
    ],
    "nextId": "CH2_S3_N02"
  },
  {
    "id": "CH2_S3_N02",
    "chapter": 2,
    "scene": 3,
    "sceneTitle": "OUTSIDE THE DRAEGER SHIPPING OFFICE (ADIN)",
    "imageUrl": "/manus-storage/scene_03_draeger_shipping_exterior_6a944907.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "[Expression: Teasing Grin] \"So. Nick. You following something, or someone, and does that something happen to rhyme with 'shipping company with very creative bookkeeping'?\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Neutral / Guarded] \"Something like that.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(the easy humor cools, just slightly, real concern showing underneath) [Expression: Concerned / Protective] \"Then you and I might be about to get in each other's way. My friend's already inside. And my friend does not love company on jobs like this.\""
      }
    ],
    "choices": [
      {
        "id": "CH2_S3_N02-A",
        "label": "Ask directly if his 'friend' is a woman — tall, dark-haired.",
        "target": "CH2_S3_N03A"
      },
      {
        "id": "CH2_S3_N02-B",
        "label": "Offer to wait outside with him instead of following her in — de-escalate.",
        "target": "CH2_S3_N03B"
      },
      {
        "id": "CH2_S3_N02-C",
        "label": "Push past the small talk — say you're going in regardless, you have your own reasons.",
        "target": "CH2_S3_N03C"
      }
    ],
    "nextId": "CH2_S3_N03"
  },
  {
    "id": "CH2_S3_N03",
    "chapter": 2,
    "scene": 3,
    "sceneTitle": "OUTSIDE THE DRAEGER SHIPPING OFFICE (ADIN)",
    "imageUrl": "/manus-storage/scene_03_draeger_shipping_exterior_6a944907.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Before either of them can settle it, a sound from inside the office changes the calculation entirely — a raised voice, a scuffle, something heavy hitting a desk."
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(already moving) [Expression: Serious / Urgent] \"That's not a normal Tuesday in there. Come on — whatever you're following, it just became my problem too.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — Nick and Adin move toward the office door together.]"
      },
      {
        "type": "narration",
        "text": "[Scene 3 ends. Transition to Scene 4.]"
      },
      {
        "type": "narration",
        "text": "Interior, the Draeger Shipping Company's front office, moments later. A cramped, cluttered space — ledgers stacked floor to ceiling, a single clerk's desk overturned, papers scattered. A back office door stands ajar, low afternoon light slicing through dusty air. Lia is pressed against the wall beside the inner doorway, listening for movement beyond it, coat dusted with plaster, utterly composed despite the chaos around her — the eye of the small storm she likely caused herself. When Nick and Adin enter, the three of them are suddenly crowded into a narrow space too small for the tension in the room. Palette: dust-gold light through grime-streaked windows, scattered white paper against dark wood, Lia's dark coat and hair a sharp vertical line against it all. Mood: cramped, adrenaline-charged, three very different kinds of danger occupying the same six feet of floor."
      }
    ],
    "choices": [],
    "nextId": "CH2_S4_N01"
  },
  {
    "id": "CH2_S4_N01",
    "chapter": 2,
    "scene": 4,
    "sceneTitle": "INSIDE: FORCED PROXIMITY WITH ADRY",
    "imageUrl": "/manus-storage/scene_04_draeger_office_bccfd885.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Lia's head snaps toward the door at the sound of it opening — knife already half-drawn before she registers who's standing there. Two people. One she trusts. One she very much does not. [Lia: Guarded Neutral, snapping to Controlled Fury]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(to Adin, low and furious) [Expression: Controlled Fury] \"You brought him?\""
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "[Expression: Teasing Grin] \"I didn't bring him, he followed the same trail you did. Also, hello, good to see you too, glad you're not currently bleeding.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(hands raised slightly, the international gesture for \"please don't stab me\") [Expression: Neutral / Guarded] \"I'm not here for you. I'm here for whatever's behind that door.\""
      }
    ],
    "choices": [
      {
        "id": "CH2_S4_N01-A",
        "label": "Hold eye contact, stay perfectly calm — don't give her a reason to escalate.",
        "target": "CH2_S4_N02A"
      },
      {
        "id": "CH2_S4_N01-B",
        "label": "Point out, calmly, that arguing here is loud and someone might still be inside.",
        "target": "CH2_S4_N02B"
      },
      {
        "id": "CH2_S4_N01-C",
        "label": "Address Adin instead of Lia — ask if there's a plan, treat her hostility as background noise.",
        "target": "CH2_S4_N02C"
      }
    ],
    "nextId": "CH2_S4_N02"
  },
  {
    "id": "CH2_S4_N02",
    "chapter": 2,
    "scene": 4,
    "sceneTitle": "INSIDE: FORCED PROXIMITY WITH ADRY",
    "imageUrl": "/manus-storage/scene_04_draeger_office_bccfd885.png",
    "blocks": [
      {
        "type": "narration",
        "text": "A muffled crash from the back room answers the question for all three of them. Whoever was in there is either fleeing or regrouping, and none of them have time left to argue about who belongs in this room."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(to Nick, sharp, final — but not attacking) [Expression: Cold Hostility] \"Fine. For exactly as long as it takes to deal with whoever's back there, we are not enemies. The second it's over, we go back to whatever we were before you walked in.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Neutral / Guarded] \"Understood.\""
      }
    ],
    "choices": [
      {
        "id": "CH2_S4_N02-A",
        "label": "Take point — move toward the back door first, treat it as a shared operation.",
        "target": "CH2_S4_N03A"
      },
      {
        "id": "CH2_S4_N02-B",
        "label": "Defer to Lia — let her lead, since this was clearly her operation first.",
        "target": "CH2_S4_N03B"
      },
      {
        "id": "CH2_S4_N02-C",
        "label": "Suggest splitting — Nick and Adin cover the front exit while Lia checks the back room.",
        "target": "CH2_S4_N03C"
      }
    ],
    "nextId": "CH2_S4_N03"
  },
  {
    "id": "CH2_S4_N03",
    "chapter": 2,
    "scene": 4,
    "sceneTitle": "INSIDE: FORCED PROXIMITY WITH ADRY",
    "imageUrl": "/manus-storage/scene_04_draeger_office_bccfd885.png",
    "blocks": [
      {
        "type": "narration",
        "text": "By the time they clear the back room, whoever was there is gone — out through a window left swinging open to the alley, nothing left behind but an overturned strongbox, emptied, and the same raven mark burned crudely into its lid."
      },
      {
        "type": "narration",
        "text": "Lia stares at it a long moment, unreadable, then straightens and pulls her coat tighter, already retreating back into the version of herself that doesn't need anyone. [Lia: Guarded Neutral]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(not looking at Nick) [Expression: Cold Hostility] \"That's the last time. Whatever you're chasing, chase it somewhere I'm not.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(quietly, to Nick, once she's out of earshot) [Expression: Concerned / Protective] \"For what it's worth — that's the most words she's said to a stranger in about a year. Don't take the tone personally. Or, take it personally, but also take it as progress. It's a confusing system, I know.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "She's gone before Nick can decide whether Adin is joking. He looks down at the empty strongbox, the raven mark scorched into old wood, and thinks about a torn ledger page sitting in his coat with his own handwriting on it — a sentence he still can't finish. [Nick: Restrained Grief]"
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 2]"
      },
      {
        "type": "narration",
        "text": "- Fixed outcomes regardless of choices: Anton reveals the name \"the Rookery\" and points to Draeger Shipping; Adin and Nick meet and enter together; the office confrontation ends with the culprit escaping and a burned raven mark left behind; Lia leaves with the same closing line."
      },
      {
        "type": "narration",
        "text": "- Relationship flags planted this chapter:"
      },
      {
        "type": "narration",
        "text": "- Anton: now aware Nick may already be a target of the Rookery's attention — a thread for a future scene where Anton has to decide how much further to help."
      },
      {
        "type": "narration",
        "text": "- Adin: warms to Nick noticeably faster than Lia does — sets up his role in Ch3-4 as an informal bridge between the two of them."
      },
      {
        "type": "narration",
        "text": "- Lia: multiple small, deniable cracks (the tactical-respect line in S4_N02, option C, is the strongest) — none of them resolve anything, all of them are meant to accumulate quietly toward Chapter 4's vulnerability beat."
      },
      {
        "type": "narration",
        "text": "- New lead carried into Chapter 3: the Rookery as a named (if still shadowy) organization; Draeger Shipping as a known front; the recurring raven mark now confirmed across three separate scenes (token, ledger, strongbox)."
      },
      {
        "type": "narration",
        "text": "- Nick's memory thread status: escalated from wordless silhouette (Ch1) to a corridor with a locked iron door (Ch2) — per the story bible's pacing, no further escalation needed until Chapter 4."
      },
      {
        "type": "narration",
        "text": "- Visual reference boxes remain standalone art briefs, independent of dialogue, ready for direct use with an image generator."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet."
      }
    ],
    "choices": [],
    "nextId": "CH3_S1_N01"
  },
  {
    "id": "CH3_S1_N01",
    "chapter": 3,
    "scene": 1,
    "sceneTitle": "RENNER'S TENEMENT (MARCUS DOYLE)",
    "imageUrl": "/manus-storage/scene_01_renner_tenement_cabc94b2.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Nick's barely at the top of the stairs when he hears it — a voice, too loud, too confident, coming from behind Renner's door."
      },
      {
        "type": "narration",
        "text": "MARCUS DOYLE (through the door): (performative confidence) [Expression: Performative Confidence] \"...and if you think I won't tell your landlord exactly whose payroll you've really been on, you're dumber than the ledgers you keep. Talk to me now, or talk to worse people later.\""
      },
      {
        "type": "narration",
        "text": "Nick pushes the door open. A broad-shouldered man in an expensive coat has a thin, terrified clerk backed against a wall. Marcus Doyle turns, entirely unbothered at being caught mid-threat."
      },
      {
        "type": "dialogue",
        "speaker": "MARCUS DOYLE",
        "text": "[Expression: Performative Confidence] \"Well. If it isn't the department's favorite charity case. Didn't know they let you out without a leash these days.\""
      }
    ],
    "choices": [
      {
        "id": "CH3_S1_N01-A",
        "label": "Step in physically — put yourself between Doyle and the witness.",
        "target": "CH3_S1_N02A"
      },
      {
        "id": "CH3_S1_N01-B",
        "label": "Stay calm, address Doyle verbally first — de-escalate before it turns physical.",
        "target": "CH3_S1_N02B"
      },
      {
        "id": "CH3_S1_N01-C",
        "label": "Ignore Doyle entirely, speak directly to Renner — try to calm the actual witness.",
        "target": "CH3_S1_N02C"
      }
    ],
    "nextId": "CH3_S1_N02"
  },
  {
    "id": "CH3_S1_N02",
    "chapter": 3,
    "scene": 1,
    "sceneTitle": "RENNER'S TENEMENT (MARCUS DOYLE)",
    "imageUrl": "/manus-storage/scene_01_renner_tenement_cabc94b2.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "MARCUS DOYLE",
        "text": "[Expression: Performative Confidence] \"You know what your problem is, Nick? You still think there's a difference between doing this job right and doing it clean. There isn't. There's fast, and there's slow, and slow gets people killed.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"Funny. I was about to say the same thing about you standing in this hallway making enough noise to wake the whole building.\""
      },
      {
        "type": "narration",
        "text": "Renner, pressed against the wall, makes a small, strangled sound — not quite words, more like a man remembering how frightened he's allowed to be now that there are witnesses to his fear."
      }
    ],
    "choices": [
      {
        "id": "CH3_S1_N02-A",
        "label": "Order Doyle to leave outright — assert control of the scene.",
        "target": "CH3_S1_N03A"
      },
      {
        "id": "CH3_S1_N02-B",
        "label": "Offer Doyle a deal — share information later if he backs off now.",
        "target": "CH3_S1_N03B"
      },
      {
        "id": "CH3_S1_N02-C",
        "label": "Point out that his loud approach may have already drawn worse attention than either of them wants.",
        "target": "CH3_S1_N03C"
      }
    ],
    "nextId": "CH3_S1_N03"
  },
  {
    "id": "CH3_S1_N03",
    "chapter": 3,
    "scene": 1,
    "sceneTitle": "RENNER'S TENEMENT (MARCUS DOYLE)",
    "imageUrl": "/manus-storage/scene_01_renner_tenement_cabc94b2.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Doyle leaves — not gracefully, but he leaves, footsteps heavy on the stairs, muttering something about \"wasted afternoons.\" The moment the outer door slams, Renner's knees nearly give out."
      },
      {
        "type": "dialogue",
        "speaker": "RENNER",
        "text": "\"You don't understand — that man, and now you — everyone wants the same thing, and I don't have it anymore, I burned it, I burned all of it—\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"Burned what, exactly?\""
      },
      {
        "type": "narration",
        "text": "Before Renner can answer, a floorboard creaks in the hallway behind Nick — soft, deliberate, the sound of someone who knows exactly how to walk through an old building without announcing themselves. Nick isn't the only one who hears it. [Nick: Shock / Disorientation, shifting fast to Focused / Investigator]"
      },
      {
        "type": "narration",
        "text": "[FIXED — A figure appears in the doorway: not Doyle. Someone else. Someone dressed too plainly to be anything but professional, hand already resting near a blade at their hip.]"
      },
      {
        "type": "narration",
        "text": "[Scene 1 ends. Transition to Scene 2.]"
      },
      {
        "type": "narration",
        "text": "Same cramped tenement room, moments later, now with four people crowded into a space built for one. The enforcer stands in the doorway: unremarkable clothing by design, a face built for being forgotten, calm in a way that reads as far more dangerous than Doyle's bluster ever did. Behind him, glimpsed through the doorway, Lia has just arrived on the landing — she'd clearly been watching this building too, and steps into view a beat after the enforcer, immediately reading the room's danger correctly. Adin's voice, if included, comes from further down the stairwell — he stayed as lookout and is calling up a warning a half-second too late. Lighting: the single gas lamp now feels inadequate, throwing long knife-edge shadows. Palette: same sickly yellow, but tension has turned it colder, sharper. Mood: sudden, compressed danger — too many people, one exit, one professional threat."
      }
    ],
    "choices": [],
    "nextId": "CH3_S2_N01"
  },
  {
    "id": "CH3_S2_N01",
    "chapter": 3,
    "scene": 2,
    "sceneTitle": "SHARED THREAT: THE ENFORCER",
    "imageUrl": "/manus-storage/scene_02_shared_threat_f306db7e.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ENFORCER",
        "text": "(flat, unhurried, entirely uninterested in Nick or Doyle's earlier theatrics) [calm, professional stillness — no sheet entry] \"This doesn't need to involve anyone but him.\" (a nod toward Renner) \"Everyone else can walk out that door right now.\""
      },
      {
        "type": "narration",
        "text": "Lia appears in the doorway behind him at that exact moment, and for one suspended second, nobody moves. [Lia: Guarded Neutral, sharpening fast]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(low, to Nick, quieter than he's ever heard her) [Expression: Focused, tactical calm — a variant of Guarded Neutral] \"Don't. Not this one. He's better than he looks.\""
      }
    ],
    "choices": [
      {
        "id": "CH3_S2_N01-A",
        "label": "Trust her assessment immediately — hold position, let her take the lead.",
        "target": "CH3_S2_N02A"
      },
      {
        "id": "CH3_S2_N01-B",
        "label": "Ignore the warning — move to protect Renner directly, regardless of the risk.",
        "target": "CH3_S2_N02B"
      },
      {
        "id": "CH3_S2_N01-C",
        "label": "Try to talk the enforcer down verbally first, buying time.",
        "target": "CH3_S2_N02C"
      }
    ],
    "nextId": "CH3_S2_N02"
  },
  {
    "id": "CH3_S2_N02",
    "chapter": 3,
    "scene": 2,
    "sceneTitle": "SHARED THREAT: THE ENFORCER",
    "imageUrl": "/manus-storage/scene_02_shared_threat_f306db7e.png",
    "blocks": [
      {
        "type": "narration",
        "text": "The enforcer moves. It's fast, and it's clean, and for three or four seconds the tiny room is nothing but controlled violence — Lia meeting him blade to forearm with brutal economy, Nick closing the gap to keep Renner pinned safely behind him, Doyle's earlier noise-making replaced by something far more dangerous and far quieter. [Lia: Controlled Fury] [Nick: Focused / Investigator, shifting to Barely Controlled Anger]"
      },
      {
        "type": "narration",
        "text": "It's Lia who ends it — not with the knife, but with words, hissed close to the enforcer's ear as she has his arm locked and his own blade turned half back toward his own throat."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(barely audible, ice-cold) [Expression: Controlled Fury] \"Tell whoever sent you that the Rookery doesn't need to know I said this. But I will remember your face. Walk away.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — The enforcer's whole demeanor changes at the name. Not fear exactly — recognition. Recalculation of a threat he clearly hadn't expected to be standing in this room.]"
      },
      {
        "type": "dialogue",
        "speaker": "ENFORCER",
        "text": "(quiet, careful now) \"...You're her.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Cold Hostility] \"I'm nobody. Walk away.\""
      }
    ],
    "choices": [
      {
        "id": "CH3_S2_N02-A",
        "label": "Stay silent, let Lia finish this on her own terms.",
        "target": "CH3_S2_N03A"
      },
      {
        "id": "CH3_S2_N02-B",
        "label": "Step in verbally, back up her threat, present a united front.",
        "target": "CH3_S2_N03B"
      },
      {
        "id": "CH3_S2_N02-C",
        "label": "Watch the enforcer's reaction closely, filing away what 'you're her' might mean.",
        "target": "CH3_S2_N03C"
      }
    ],
    "nextId": "CH3_S2_N03"
  },
  {
    "id": "CH3_S2_N03",
    "chapter": 3,
    "scene": 2,
    "sceneTitle": "SHARED THREAT: THE ENFORCER",
    "imageUrl": "/manus-storage/scene_02_shared_threat_f306db7e.png",
    "blocks": [
      {
        "type": "narration",
        "text": "The enforcer is gone. Renner is shaking, useless for questioning for at least the next hour. Lia stands very still in the middle of the wrecked little room, breathing evening out, visibly working to fold herself back into the controlled version of herself. [Lia: Guarded Neutral]"
      },
      {
        "type": "narration",
        "text": "[Scene 2 ends. Transition to Scene 3.]"
      },
      {
        "type": "narration",
        "text": "Interior, the same tenement hallway, now spilling out onto the building's narrow rear stairwell and a small back landing that opens onto a quiet alley. Dusk light, blue-grey and soft, filtering down between close buildings. Adin waits at the bottom of the stairs, having missed the worst of it, visibly relieved and trying not to show how frightened he'd been. Lia and Nick end up a few steps apart on the landing, momentarily removed from the others — the adrenaline of the fight fading into something quieter and more dangerous: an actual unguarded moment. Palette: cooling dusk blues, the last warm light catching just the edges of things. Mood: the held breath after violence — too raw for hostility, not yet safe enough for honesty."
      }
    ],
    "choices": [],
    "nextId": "CH3_S3_N01"
  },
  {
    "id": "CH3_S3_N01",
    "chapter": 3,
    "scene": 3,
    "sceneTitle": "AFTERMATH: ADRY'S ALMOST-CONFESSION",
    "imageUrl": "/manus-storage/scene_03_rear_landing_48b51dba.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(jogging up the last few steps, out of breath) [Expression: Concerned / Protective] \"I heard the noise, I swear I was two seconds from coming up, I just didn't want to leave the door unwatched—\" (seeing they're both still standing) [Expression: Warm Open Smile] \"—right. Good. Nobody's dying today. Excellent.\""
      },
      {
        "type": "narration",
        "text": "Lia doesn't answer him. She's looking at Nick instead, something unresolved and heavy behind her eyes. [Lia: Vulnerable / Unguarded]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(quiet, almost to herself) [Expression: Vulnerable / Unguarded] \"You didn't even hesitate. In there. You just — moved, like you'd done it a hundred times, like it was nothing.\""
      }
    ],
    "choices": [
      {
        "id": "CH3_S3_N01-A",
        "label": "Ask her plainly what that means — push toward the truth she's circling.",
        "target": "CH3_S3_N02A"
      },
      {
        "id": "CH3_S3_N01-B",
        "label": "Deflect with dry humor — defuse the sudden intensity.",
        "target": "CH3_S3_N02B"
      },
      {
        "id": "CH3_S3_N01-C",
        "label": "Stay quiet, let her keep talking without interrupting.",
        "target": "CH3_S3_N02C"
      }
    ],
    "nextId": "CH3_S3_N02"
  },
  {
    "id": "CH3_S3_N02",
    "chapter": 3,
    "scene": 3,
    "sceneTitle": "AFTERMATH: ADRY'S ALMOST-CONFESSION",
    "imageUrl": "/manus-storage/scene_03_rear_landing_48b51dba.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever path got them here, Lia's composure cracks for exactly one sentence."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Vulnerable / Unguarded] \"Because the last time I saw you move like that, you were—\""
      },
      {
        "type": "narration",
        "text": "She stops. Physically stops — jaw shutting, eyes going somewhere far away and then snapping back, present and guarded, faster than either man can react to what almost happened. [Lia: Shock / Fear (rare), collapsing instantly into Cold Hostility]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(flat, final, rebuilding the wall in real time) [Expression: Cold Hostility] \"Never mind. It's not important.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(carefully, gently, the only one who seems to understand exactly what she pulled back from) [Expression: Concerned / Protective] \"Lia—\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Cold Hostility] \"Not important.\""
      }
    ],
    "choices": [
      {
        "id": "CH3_S3_N02-A",
        "label": "Let it go entirely — respect the boundary she just drew.",
        "target": "CH3_S3_N03A"
      },
      {
        "id": "CH3_S3_N02-B",
        "label": "Gently note that it clearly is important, without pushing further.",
        "target": "CH3_S3_N03B"
      },
      {
        "id": "CH3_S3_N02-C",
        "label": "Change the subject deliberately — ask about Renner and next steps instead.",
        "target": "CH3_S3_N03C"
      }
    ],
    "nextId": "CH3_S3_N03"
  },
  {
    "id": "CH3_S3_N03",
    "chapter": 3,
    "scene": 3,
    "sceneTitle": "AFTERMATH: ADRY'S ALMOST-CONFESSION",
    "imageUrl": "/manus-storage/scene_03_rear_landing_48b51dba.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(already stepping back, pulling her coat tighter, the shutters coming back down fully) [Expression: Guarded Neutral] \"Renner's not talking to anyone tonight. Maybe not ever, after this. I have my own thread to pull.\" (a glance at Nick, unreadable) \"This doesn't make us anything. You understand that.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Neutral / Guarded] \"I wasn't under any illusions.\""
      },
      {
        "type": "narration",
        "text": "She's gone a moment later, down the alley and into the thickening dusk, Adin trailing after her with one last apologetic half-wave over his shoulder at Nick."
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "Nick stands alone on the landing a while, turning over the sentence she didn't finish. The last time I saw you move like that, you were— Were what? He has no idea. That's becoming the most familiar feeling he owns. [Nick: Restrained Grief]"
      },
      {
        "type": "narration",
        "text": "[Scene 3 ends. Transition to Scene 4.]"
      },
      {
        "type": "narration",
        "text": "Interior, full evening now. A harbor-district tavern louder and rougher than Gaspar's café — sailors, dockhands, a haze of pipe smoke, a fiddle being played badly and cheerfully in one corner. Warm, low light from oil lamps and the hearth, everything a little sticky, a little worn, entirely unpretentious. Erica sits alone at a corner table that somehow still feels like the best seat in the room, nursing a drink she's in no hurry to finish. Auburn hair to her shoulders, light green eyes that miss nothing, dressed warmly and informally — a deliberate visual softness that invites trust before a single word is spoken. Palette: warm amber and copper tones, thick smoky air catching the lamplight, a contrast to both the cold precinct and the fog-heavy harbor scenes earlier. Mood: inviting on the surface, with an undertow of calculation just beneath it."
      }
    ],
    "choices": [],
    "nextId": "CH3_S4_N01"
  },
  {
    "id": "CH3_S4_N01",
    "chapter": 3,
    "scene": 4,
    "sceneTitle": "THE RUSTED ANCHOR TAVERN (ERICA)",
    "imageUrl": "/manus-storage/scene_04_rusted_anchor_tavern_835fcef7.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Nick's barely ordered a drink he doesn't plan on finishing when a voice beside him makes the decision for him to stay a while longer."
      },
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "[Expression: Playful Performance] \"You look like a man who just had a very interesting Tuesday.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(not turning immediately) [Expression: Neutral / Guarded] \"Do I know you?\""
      },
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "[Expression: Playful Performance] \"Not yet. But you're about to wish you did, because I know several things you very badly want to know, and I'm in an unusually generous mood.\" She slides into the seat across from him without waiting for an invitation. \"Erica. And before you ask — no, I'm not with the Rookery. I'm not against them either. I'm just... adjacent. Comfortably adjacent.\""
      }
    ],
    "choices": [
      {
        "id": "CH3_S4_N01-A",
        "label": "Be openly suspicious — ask what she wants before trusting anything she says.",
        "target": "CH3_S4_N02A"
      },
      {
        "id": "CH3_S4_N01-B",
        "label": "Play along, matching her light tone, see where it leads.",
        "target": "CH3_S4_N02B"
      },
      {
        "id": "CH3_S4_N01-C",
        "label": "Test her — ask a question you already know part of the answer to, see if she lies.",
        "target": "CH3_S4_N02C"
      }
    ],
    "nextId": "CH3_S4_N02"
  },
  {
    "id": "CH3_S4_N02",
    "chapter": 3,
    "scene": 4,
    "sceneTitle": "THE RUSTED ANCHOR TAVERN (ERICA)",
    "imageUrl": "/manus-storage/scene_04_rusted_anchor_tavern_835fcef7.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "[Expression: Guarded Seriousness] \"Here's what I know, free of charge, as a gesture of goodwill: the Rookery isn't one thing. It's a hand with several fingers, and the person who moves that hand doesn't get her fingers dirty personally very often. When she does, people remember it for the rest of their — usually short — lives.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"And the price for the part that isn't free?\""
      },
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "[Expression: Calculating] \"Information, mostly. I like knowing things almost as much as I like being paid for them. You're investigating something personal — I can feel it on you, the specific kind of desperate that isn't about money. Tell me what you're really chasing, and I'll tell you more than Draeger Shipping's crooked books could teach you in a year.\""
      }
    ],
    "choices": [
      {
        "id": "CH3_S4_N02-A",
        "label": "Be honest — tell her about the memory loss and the ledger page.",
        "target": "CH3_S4_N03A"
      },
      {
        "id": "CH3_S4_N02-B",
        "label": "Give a partial truth — mention the organization but not the personal memory angle.",
        "target": "CH3_S4_N03B"
      },
      {
        "id": "CH3_S4_N02-C",
        "label": "Refuse to trade personal information — offer money or a future favor instead.",
        "target": "CH3_S4_N03C"
      }
    ],
    "nextId": "CH3_S4_N03"
  },
  {
    "id": "CH3_S4_N03",
    "chapter": 3,
    "scene": 4,
    "sceneTitle": "THE RUSTED ANCHOR TAVERN (ERICA)",
    "imageUrl": "/manus-storage/scene_04_rusted_anchor_tavern_835fcef7.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "(standing, dropping a coin on the table for her own drink, entirely unhurried) [Expression: Guarded Seriousness] \"The Rookery's hand — the woman who runs it, the one who occasionally gets her fingers dirty — you'll hear her name eventually. When you do, remember it came with a price already paid, long before you knew to ask.\" She pauses at the door, glancing back once. [Expression: Vulnerable Crack] \"And Nick? Whatever's in that ledger page you're carrying — burn it, copy it, or bury it somewhere safer than your coat pocket. You're not the only one who'd want to read your own handwriting.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "She's gone before he can ask how she knew about the page at all. [Nick: Shock / Disorientation]"
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 3]"
      },
      {
        "type": "narration",
        "text": "- Fixed outcomes regardless of choices: Doyle threatens Renner and is driven off; the enforcer arrives and is repelled specifically by Lia invoking the Rookery's name; Lia begins a sentence about recognizing Nick's fighting style and stops herself before finishing it; Erica makes contact, offers a transactional relationship, and reveals she already knows more about Nick's personal situation than she should."
      },
      {
        "type": "narration",
        "text": "- Relationship flags planted this chapter:"
      },
      {
        "type": "narration",
        "text": "- Marcus Doyle: rivalry deepens but a transactional thread (Option B in S1_N02) is available for a Chapter 9 reluctant-ally path."
      },
      {
        "type": "narration",
        "text": "- The Enforcer/Rookery: first indirect confirmation that Lia's old rank still carries real weight and real fear inside the organization — important groundwork for her backstory reveal later."
      },
      {
        "type": "narration",
        "text": "- Adin: continues warming to Nick, now explicitly grateful for his restraint — strengthens their dynamic ahead of Chapter 5."
      },
      {
        "type": "narration",
        "text": "- Lia: the almost-confession (\"the last time I saw you move like that, you were—\") is the single most important planted line in this chapter. It should echo directly in Chapter 7-8 when the truth comes out — she was, without knowing it, one sentence away from describing the night he was sent to kill her."
      },
      {
        "type": "narration",
        "text": "- Erica: her closing line (\"you're not the only one who'd want to read your own handwriting\") plants deliberate unease — she knows more than a chance meeting would explain. Keep her ultimate loyalty unresolved per her character design."
      },
      {
        "type": "narration",
        "text": "- New lead carried into Chapter 4: Renner's unexplained line — \"I burned it, I burned all of it\" — remains unresolved and should surface again once he's calm enough to question properly. Erica's warning about the ledger page also sets up a possible theft/attack on it in a later chapter if you want a physical stakes escalation."
      },
      {
        "type": "narration",
        "text": "- Nick's memory thread: deliberately paused this chapter per the story bible, aside from the small internal flag in S2_N02 Option C (\"you're her\" landing like a key turning in a lock). No full flashback occurs."
      },
      {
        "type": "narration",
        "text": "- Visual reference boxes remain standalone art briefs, independent of dialogue."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet. The enforcer, a one-scene minor character, is not included on the sheet — his beats use plain descriptive notes instead of tags."
      }
    ],
    "choices": [],
    "nextId": "CH4_S1_N01"
  },
  {
    "id": "CH4_S1_N01",
    "chapter": 4,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT (CLEAREST NIGHTMARE YET)",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_board_ea293178.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "A room. A weapon. A target I couldn't see. And I stopped. I actually stopped. That detail sits heavier than all the rest combined — not the horror of what he almost did, but the mystery of why, out of everything, this is the part his own mind chose to protect from him."
      }
    ],
    "choices": [
      {
        "id": "CH4_S1_N01-A",
        "label": "Try to hold onto the feeling of relief — chase what caused it.",
        "target": "CH4_S1_N02"
      },
      {
        "id": "CH4_S1_N01-B",
        "label": "Focus on the physical details — the weapon, the room — treat it like evidence.",
        "target": "CH4_S1_N02"
      },
      {
        "id": "CH4_S1_N01-C",
        "label": "Push the dream aside entirely — it's happening too often to keep chasing each one.",
        "target": "CH4_S1_N02"
      }
    ],
    "nextId": "CH4_S1_N02"
  },
  {
    "id": "CH4_S1_N02",
    "chapter": 4,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT (CLEAREST NIGHTMARE YET)",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_board_ea293178.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever path he takes, Nick ends up at his desk with the board in front of him — token, ledger page, Renner's unfinished sentence, and now a fourth thread: the missing man from before all of this started, the one whose case led him to the first token in the first place. He traces the connections with his finger, slow, deliberate. [Nick: Focused / Investigator]"
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "A missing person who led to a symbol. A symbol that led to a shipping company. A shipping company that led to a terrified clerk who burned something rather than let it be found. None of this is separate. It never was."
      },
      {
        "type": "narration",
        "text": "[FIXED — He decides to pull the department's other unsolved cases with any connection to the harbor district, which means going through Kurt, which means going through channels that are about to get a great deal harder.]"
      },
      {
        "type": "narration",
        "text": "[Scene 1 ends. Transition to Scene 2.]"
      },
      {
        "type": "narration",
        "text": "Interior, mid-morning, the same precinct office from Chapter 1 — but the mood has shifted. Kurt's desk now has an internal memo sitting on top of it, visibly official, a wax departmental seal stamped at the bottom. Through the frosted glass of a superior's office door, a shape moves — a superior officer, unnamed but present, watching the floor more than usual today. The overall lighting is the same harsh institutional daylight as before, but framed tighter, more claustrophobic — the sense of a room that's suddenly paying attention to someone it used to ignore. Palette unchanged: cold green-grey, dull brass, but with a new visual tension in the composition itself."
      }
    ],
    "choices": [],
    "nextId": "CH4_S2_N01"
  },
  {
    "id": "CH4_S2_N01",
    "chapter": 4,
    "scene": 2,
    "sceneTitle": "POLICE PRECINCT (KURT — INSTITUTIONAL OBSTACLE)",
    "imageUrl": "/manus-storage/scene_02_precinct_memo_d4876484.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Kurt doesn't wait for him to sit down."
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(low, fast, not her usual dry cadence) [Expression: Firm Authority] \"Marcus Doyle filed a complaint. Formal one. Says a man on extended medical leave interfered with an active case, obstructed a licensed investigator, and — this is the part that's actually going to matter — was seen at a second incident scene involving unexplained violence, no report filed.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Neutral / Guarded] \"Doyle was threatening a witness.\""
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "[Expression: Firm Authority] \"I believe you. It doesn't matter. Commissioner's read the complaint, and now there's a memo on my desk telling me to formally restrict your access to anything harbor-district related, effective immediately.\""
      }
    ],
    "choices": [
      {
        "id": "CH4_S2_N01-A",
        "label": "Push back hard — argue the case is bigger than departmental politics.",
        "target": "CH4_S2_N02A"
      },
      {
        "id": "CH4_S2_N01-B",
        "label": "Stay calm, ask what options remain within the rules.",
        "target": "CH4_S2_N02B"
      },
      {
        "id": "CH4_S2_N01-C",
        "label": "Ask Kurt directly whether she believes the complaint or is just delivering it.",
        "target": "CH4_S2_N02C"
      }
    ],
    "nextId": "CH4_S2_N02"
  },
  {
    "id": "CH4_S2_N02",
    "chapter": 4,
    "scene": 2,
    "sceneTitle": "POLICE PRECINCT (KURT — INSTITUTIONAL OBSTACLE)",
    "imageUrl": "/manus-storage/scene_02_precinct_memo_d4876484.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(sliding a thin folder half out from under the memo, just far enough for him to see the edge) [Expression: Guarded Professional] \"There's a stack of harbor-district cases going back three years, all filed as unrelated, all with details that don't quite add up if you actually read them side by side. I was already looking, before Doyle's complaint landed on my desk. Call it professional curiosity.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"And now?\""
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "[Expression: Guarded Professional] \"Now I have to be careful how I look. Which means you have to be careful how you ask.\" She taps the folder once, meaningfully, without actually handing it over yet."
      }
    ],
    "choices": [
      {
        "id": "CH4_S2_N02-A",
        "label": "Ask her to just hand the folder over now, take the risk together.",
        "target": "CH4_S2_N03A"
      },
      {
        "id": "CH4_S2_N02-B",
        "label": "Suggest a safer method — she reads it, tells him verbally, nothing on paper connects them.",
        "target": "CH4_S2_N03B"
      },
      {
        "id": "CH4_S2_N02-C",
        "label": "Ask why she's still helping at all, given the risk to her own career.",
        "target": "CH4_S2_N03C"
      }
    ],
    "nextId": "CH4_S2_N03"
  },
  {
    "id": "CH4_S2_N03",
    "chapter": 4,
    "scene": 2,
    "sceneTitle": "POLICE PRECINCT (KURT — INSTITUTIONAL OBSTACLE)",
    "imageUrl": "/manus-storage/scene_02_precinct_memo_d4876484.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever the method, Nick walks away from the precinct with what he needs: confirmation that at least four \"unrelated\" harbor-district cases over three years share the same quiet fingerprints — cargo that vanishes from official record but not from unofficial memory, witnesses who go silent or disappear, and, in two of the four files, marginal notes referencing a \"raven mark\" that were never followed up on by anyone with the authority to follow up."
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(as he's leaving) [Expression: Firm Authority, softening] \"Nick. Whatever you find out there — don't do anything that gets you a real reason for that leave to become permanent.\""
      },
      {
        "type": "narration",
        "text": "[Scene 2 ends. Transition to Scene 3.]"
      },
      {
        "type": "narration",
        "text": "Interior, early afternoon, Gaspar's café — same warm, amber-lit refuge as Chapter 1, slightly busier now with the lunch crowd thinning out. Nick has spread a few pages from Kurt's briefing across a corner table, careful to keep them angled away from other patrons. Gaspar moves between tables with his usual unhurried economy, but this scene should linger on him a beat longer than usual once he catches sight of what's on the table — a held stillness, quickly covered. Palette and mood consistent with Chapter 1's café scenes: warm, safe, a held-breath quality once the conversation turns serious."
      }
    ],
    "choices": [],
    "nextId": "CH4_S3_N01"
  },
  {
    "id": "CH4_S3_N01",
    "chapter": 4,
    "scene": 3,
    "sceneTitle": "GASPAR'S CAFÉ (CONNECTING THE CASES)",
    "imageUrl": "/manus-storage/scene_03_gaspars_cafe_cases_a3757c40.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Gaspar sets down a fresh cup without being asked, glancing at the pages Nick's arranged before looking away, deliberately casual. [Gaspar: Knowing Look]"
      },
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "[Expression: Weathered Calm] \"You've got the look of a man building a wall out of other people's broken cases.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"Feels more like the wall was already there. I'm just finally seeing the bricks.\""
      },
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "(a long pause, wiping a cup that's already clean) [Expression: Quiet Sadness] \"Careful walls like that have a way of being load-bearing for more than you expect.\""
      }
    ],
    "choices": [
      {
        "id": "CH4_S3_N01-A",
        "label": "Ask him plainly if he knows anything about these old cases.",
        "target": "CH4_S3_N02A"
      },
      {
        "id": "CH4_S3_N01-B",
        "label": "Mention the raven mark by name, watch his reaction closely.",
        "target": "CH4_S3_N02B"
      },
      {
        "id": "CH4_S3_N01-C",
        "label": "Ask what he means by 'load-bearing' — press the metaphor itself.",
        "target": "CH4_S3_N02C"
      }
    ],
    "nextId": "CH4_S3_N02"
  },
  {
    "id": "CH4_S3_N02",
    "chapter": 4,
    "scene": 3,
    "sceneTitle": "GASPAR'S CAFÉ (CONNECTING THE CASES)",
    "imageUrl": "/manus-storage/scene_03_gaspars_cafe_cases_a3757c40.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Gaspar sits down across from him — an unusual thing, for a man who almost never leaves his own side of the counter — and lowers his voice. [Gaspar: Quiet Sadness]"
      },
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "[Expression: Quiet Sadness] \"I'll tell you one thing, and then I'll tell you nothing else today, because there's a version of this conversation that gets us both in more trouble than either of us needs. A long time ago, before you knew me, before half this city was built the way it is now — I did work for people I'm not proud of. People who used a bird for a symbol long before it started showing up on couriers' satchels.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(carefully) [Expression: Focused / Investigator] \"You worked for the Rookery.\""
      },
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "[Expression: Quiet Sadness] \"I worked for what became it. Different hands, mostly the same appetite.\" He looks down at his own hands on the table, old and steady. \"I got out. Not everyone does. Some people just get quiet instead.\""
      }
    ],
    "choices": [
      {
        "id": "CH4_S3_N02-A",
        "label": "Ask how he got out — whether it's possible to actually leave.",
        "target": "CH4_S3_N03A"
      },
      {
        "id": "CH4_S3_N02-B",
        "label": "Ask if he knew Nick, specifically, from before the memory loss.",
        "target": "CH4_S3_N03B"
      },
      {
        "id": "CH4_S3_N02-C",
        "label": "Thank him for trusting you with this much, and let him stop there without pushing.",
        "target": "CH4_S3_N03C"
      }
    ],
    "nextId": "CH4_S3_N03"
  },
  {
    "id": "CH4_S3_N03",
    "chapter": 4,
    "scene": 3,
    "sceneTitle": "GASPAR'S CAFÉ (CONNECTING THE CASES)",
    "imageUrl": "/manus-storage/scene_03_gaspars_cafe_cases_a3757c40.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "(standing, the moment closing as deliberately as he opened it) [Expression: Protective Firmness] \"Finish your coffee. Take your papers. And Nick — whatever's driving you, drive it carefully. This city's buried better men than either of us under quieter mysteries than yours.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — Before Nick can leave, the café door bangs open hard enough to rattle the front window. It's Adin — no easy humor left in him at all, breathless, blood on one sleeve that isn't his own.]"
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "[Expression: Serious / Urgent] \"Nick — I need you. Now. It's Lia.\""
      },
      {
        "type": "narration",
        "text": "[Scene 3 ends. Transition to Scene 4.]"
      },
      {
        "type": "narration",
        "text": "Exterior, late afternoon fading fast into evening, a narrow service alley behind a row of harbor warehouses — crates, broken barrels, a rusted fire escape climbing one wall. Lia is braced against a stack of crates, one hand pressed hard against her side, dark fabric darker still where blood has soaked through, breathing controlled through visible pain. Two or three discarded weapons and at least one unmoving figure in Rookery-plain clothing lie scattered nearby — evidence of exactly how close this came to going differently. Fading amber-to-blue dusk light, long shadows, a sense of a fight that just barely ended in her favor. Palette: harsh contrast between deep shadow and the one shaft of dying light illuminating her, blood-dark red against her black coat. Mood: raw, urgent, the first time the audience sees Lia genuinely vulnerable rather than composed."
      }
    ],
    "choices": [],
    "nextId": "CH4_S4_N01"
  },
  {
    "id": "CH4_S4_N01",
    "chapter": 4,
    "scene": 4,
    "sceneTitle": "THE AMBUSH (ADRY, WOUNDED)",
    "imageUrl": "/manus-storage/scene_04_alley_ambush_59a31624.png",
    "blocks": [
      {
        "type": "narration",
        "text": "By the time Nick reaches her, Adin already has one arm half-around her, trying to get her upright without hurting her further. She's fighting him on it, out of pure reflexive stubbornness, and losing. [Lia: Fear (rare), masked by Controlled Fury]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(through gritted teeth, seeing Nick) [Expression: Controlled Fury] \"Of course. Of course you're here for this part.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "[Expression: Concerned / Protective] \"She won't go to a real doctor, she says it's 'not safe,' she won't go back to wherever she's staying, and I cannot physically carry her and watch the street at the same time, so—\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(already moving to her other side) [Expression: Resolve] \"So I'm the extra pair of hands. Understood.\""
      }
    ],
    "choices": [
      {
        "id": "CH4_S4_N01-A",
        "label": "Take charge of the medical situation directly — assess the wound yourself.",
        "target": "CH4_S4_N02A"
      },
      {
        "id": "CH4_S4_N01-B",
        "label": "Defer to Lia's wishes as much as possible — ask her where she wants to go, not tell her.",
        "target": "CH4_S4_N02B"
      },
      {
        "id": "CH4_S4_N01-C",
        "label": "Focus on the immediate threat first — ask if whoever did this is still nearby.",
        "target": "CH4_S4_N02C"
      }
    ],
    "nextId": "CH4_S4_N02"
  },
  {
    "id": "CH4_S4_N02",
    "chapter": 4,
    "scene": 4,
    "sceneTitle": "THE AMBUSH (ADRY, WOUNDED)",
    "imageUrl": "/manus-storage/scene_04_alley_ambush_59a31624.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Between the three of them, they get her moving — toward a narrow, unremarkable door two streets over that Lia directs them to with brief, clipped instructions, clearly a safehouse she's used before and clearly not thrilled to be revealing it to either man."
      },
      {
        "type": "narration",
        "text": "[FIXED — Interior transition: a small, sparse room above a shuttered print shop not unlike Nick's own apartment, though barer, more temporary — the home of someone who's never let herself unpack fully. Adin tends the wound with rough, practiced competence while Lia sits rigid on the edge of a cot, jaw tight against the pain.] [Lia: Vulnerable / Unguarded, fighting to hold Guarded Neutral]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(finally, once the worst of it is bandaged, voice tired in a way Nick hasn't heard from her before) [Expression: Vulnerable / Unguarded] \"They knew where to find me. Not roughly — exactly. That doesn't happen by accident. Someone gave them a location.\""
      }
    ],
    "choices": [
      {
        "id": "CH4_S4_N02-A",
        "label": "Ask directly if she suspects Nick.",
        "target": "CH4_S4_N03A"
      },
      {
        "id": "CH4_S4_N02-B",
        "label": "Offer to help investigate the leak, treat it as a shared problem.",
        "target": "CH4_S4_N03B"
      },
      {
        "id": "CH4_S4_N02-C",
        "label": "Stay quiet, let Adin and Lia work through the immediate fear first.",
        "target": "CH4_S4_N03C"
      }
    ],
    "nextId": "CH4_S4_N03"
  },
  {
    "id": "CH4_S4_N03",
    "chapter": 4,
    "scene": 4,
    "sceneTitle": "THE AMBUSH (ADRY, WOUNDED)",
    "imageUrl": "/manus-storage/scene_04_alley_ambush_59a31624.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Adin finishes tying off the bandage and sits back, exhausted in the particular way of someone who's been running on adrenaline and is only now allowed to feel it drain. [Adin: Concerned / Protective, tipping into exhaustion]"
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "[Expression: Teasing Grin, tired underneath] \"I'm going to go make sure nobody followed us here. Also going to go be quietly terrified somewhere private for about ten minutes. Don't either of you die while I'm gone.\""
      },
      {
        "type": "narration",
        "text": "He steps out, leaving Nick and Lia alone in the small room for the first time since this all began."
      },
      {
        "type": "narration",
        "text": "[Scene 4 ends. Transition to Scene 5.]"
      },
      {
        "type": "narration",
        "text": "Interior, the same small safehouse room, now quiet, evening light gone fully to blue-grey through a single curtained window. A candle or single low lamp provides the only warmth in the frame. Lia remains seated on the edge of the cot, some of her guard finally, visibly lowered by exhaustion and pain rather than choice. Nick stands or sits a careful, respectful distance away — close enough to matter, far enough not to crowd. The framing should feel intimate but restrained, two people balanced on the edge of a conversation neither is sure they're ready to have. Palette: low-key blues and single-source warm lamplight, soft shadow, nothing sharp anywhere in the composition. Mood: the most vulnerable, quietest moment in the story so far."
      }
    ],
    "choices": [],
    "nextId": "CH4_S5_N01"
  },
  {
    "id": "CH4_S5_N01",
    "chapter": 4,
    "scene": 5,
    "sceneTitle": "QUIET AFTERMATH (THE ALMOST-QUESTION)",
    "imageUrl": "/manus-storage/scene_05_safehouse_aftermath_622f8585.png",
    "blocks": [
      {
        "type": "narration",
        "text": "For a while, neither of them says anything. Then Lia speaks, quiet, not quite looking at him."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Vulnerable / Unguarded] \"You keep not doing what I expect you to do.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"Is that good or bad?\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(a ghost of something almost like humor, gone fast) [Expression: Dry Almost-Smile] \"Undecided.\" A pause, longer this time, her eyes finally finding his. [Expression: Vulnerable / Unguarded] \"Can I ask you something? And you actually answer it, instead of one of your careful non-answers.\""
      }
    ],
    "choices": [
      {
        "id": "CH4_S5_N01-A",
        "label": "Say yes without hesitation — invite the question fully.",
        "target": "CH4_S5_N02A"
      },
      {
        "id": "CH4_S5_N01-B",
        "label": "Say yes, but cautiously — brace for whatever it is.",
        "target": "CH4_S5_N02B"
      },
      {
        "id": "CH4_S5_N01-C",
        "label": "Ask what kind of question it is before agreeing.",
        "target": "CH4_S5_N02C"
      }
    ],
    "nextId": "CH4_S5_N02"
  },
  {
    "id": "CH4_S5_N02",
    "chapter": 4,
    "scene": 5,
    "sceneTitle": "QUIET AFTERMATH (THE ALMOST-QUESTION)",
    "imageUrl": "/manus-storage/scene_05_safehouse_aftermath_622f8585.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Lia opens her mouth to ask it — Nick can see the shape of the question forming, something that's clearly been sitting behind her ribs since Chapter 3's unfinished sentence, since long before that, probably. Her eyes are steady on his, and for one full second, she is closer to actually asking it than she has ever let herself be. [Lia: Vulnerable / Unguarded]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Vulnerable / Unguarded] \"Why didn't you—\""
      },
      {
        "type": "narration",
        "text": "She stops. Not the same way as before — not a wall slamming shut in panic. This time it's slower, more deliberate, a choice made with her eyes still open. [Lia: Vulnerable / Unguarded, settling into Reluctant Warmth]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(quiet, almost gentle with herself) [Expression: Reluctant Warmth] \"...No. Not tonight. I'm not ready to be the one who opens that door. Not while I can still feel where they cut me.\""
      }
    ],
    "choices": [
      {
        "id": "CH4_S5_N02-A",
        "label": "Respect it fully — don't ask what she was going to say.",
        "target": "CH4_S5_N03A"
      },
      {
        "id": "CH4_S5_N02-B",
        "label": "Gently acknowledge that you noticed, without pushing for the rest.",
        "target": "CH4_S5_N03B"
      },
      {
        "id": "CH4_S5_N02-C",
        "label": "Offer something of your own in exchange — mention your nightmares, unprompted.",
        "target": "CH4_S5_N03C"
      }
    ],
    "nextId": "CH4_S5_N03"
  },
  {
    "id": "CH4_S5_N03",
    "chapter": 4,
    "scene": 5,
    "sceneTitle": "QUIET AFTERMATH (THE ALMOST-QUESTION)",
    "imageUrl": "/manus-storage/scene_05_safehouse_aftermath_622f8585.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever passed between them, the moment settles into something quieter — not trust, not yet, but the absence of active hostility for the first time without a fight or a shared enemy forcing it."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(finally, softer than Nick has ever heard her) [Expression: Reluctant Warmth] \"Thank you. For tonight. I won't make a habit of saying that, so take it while it's offered.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"Noted.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "Outside, Adin's footsteps return on the stairs, and whatever this was — this fragile, unnamed thing — folds itself carefully away before he opens the door, the way both of them have clearly practiced doing with everything that matters. [Lia: Guarded Neutral] [Nick: Neutral / Guarded]"
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 4]"
      },
      {
        "type": "narration",
        "text": "- Fixed outcomes regardless of choices: Doyle's complaint forces institutional pressure through Kurt; Nick confirms multiple prior cases share the Rookery's fingerprints; Gaspar admits a personal, buried history with the organization's predecessor; Lia is ambushed and wounded, forcing her to accept Nick's help for the first time; she begins to ask the pivotal question and deliberately chooses not to finish it — a conscious choice this time, not a panic reaction."
      },
      {
        "type": "narration",
        "text": "- Relationship flags planted this chapter:"
      },
      {
        "type": "narration",
        "text": "- Kurt: strongest possible foreshadowing this chapter of her personal knowledge of Nick's past (S2_N01, Option C, and S2_N02, Option C) — both are excellent setups for Chapter 6's file reveal, and can be treated as semi-canonical even if the player picked other options, just delivered with less directness."
      },
      {
        "type": "narration",
        "text": "- Gaspar: confirmed personal history with the Rookery's predecessor organization — the S3_N02 Option B branch (refusing to say if he knew pre-wipe Nick) is the strongest version to carry forward if you want a big Chapter 9 payoff."
      },
      {
        "type": "narration",
        "text": "- Lia: this is her core vulnerability chapter. The strongest trust-building combination is S4_N02 Option A (explicitly stating she doesn't suspect him) + S5_N02 Option A or C (respecting her silence, or offering his own parallel vulnerability). Recommend treating the \"iron door\" dream-parallel (S5_N02 Option C) as a strong dramatic-irony beat worth referencing again in Chapter 6-7, regardless of whether the player chose it, since it's such a clean thematic echo — consider finding a way to surface it again narratively even on other branches."
      },
      {
        "type": "narration",
        "text": "- New lead carried into Chapter 5: the unresolved question of who leaked Lia's location to the Rookery. This should NOT be answered yet — it deepens the dread heading into Adin's death in Chapter 5, and can optionally be revealed later (a mole, surveillance, or simple bad luck — your choice as writer) without changing Chapter 5's fixed events."
      },
      {
        "type": "narration",
        "text": "- Nick's memory thread: escalated to the clearest image yet — a bare room, a weapon, a faceless target, and crucially, the moment of refusal itself. Per the story bible, this is intentionally as far as the memory goes before Chapter 5 pauses the thread entirely to let the emotional weight of Adin's death stand uncomplicated by exposition."
      },
      {
        "type": "narration",
        "text": "- Visual reference boxes remain standalone art briefs, independent of dialogue."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet."
      }
    ],
    "choices": [],
    "nextId": "CH5_S1_N01"
  },
  {
    "id": "CH5_S1_N01",
    "chapter": 5,
    "scene": 1,
    "sceneTitle": "THE SAFEHOUSE (ADIN'S DECISION)",
    "imageUrl": "/manus-storage/scene_01_safehouse_adins_decision_41e3a4c0.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "[Expression: Serious / Urgent] \"I found him. The courier who sold your location — or at least, someone who can point straight at him. Meeting's tonight, one man, one warehouse, nothing dramatic. I go in, I get a name, I leave.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(already trying to stand, wincing through it) [Expression: Controlled Fury] \"Then I'm coming.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "[Expression: Concerned / Protective] \"You can barely stand up without making that face you're making right now.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Controlled Fury] \"I can still hold a knife.\""
      }
    ],
    "choices": [
      {
        "id": "CH5_S1_N01-A",
        "label": "Back Adin up — tell Lia she genuinely isn't ready.",
        "target": "CH5_S1_N02A"
      },
      {
        "id": "CH5_S1_N01-B",
        "label": "Offer a compromise — suggest Nick goes in Lia's place, alongside Adin.",
        "target": "CH5_S1_N02B"
      },
      {
        "id": "CH5_S1_N01-C",
        "label": "Stay out of it — this is clearly a fight between the two of them, not his to referee.",
        "target": "CH5_S1_N02C"
      }
    ],
    "nextId": "CH5_S1_N02"
  },
  {
    "id": "CH5_S1_N02",
    "chapter": 5,
    "scene": 1,
    "sceneTitle": "THE SAFEHOUSE (ADIN'S DECISION)",
    "imageUrl": "/manus-storage/scene_01_safehouse_adins_decision_41e3a4c0.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(crouching in front of Lia, taking her hand, all the earlier lightness gone from his voice) [Expression: Concerned / Protective] \"I'll be back before you've even finished being annoyed at me. One name, that's all I need. Then we bring it to Nick, and we do this properly, together, like people who don't get themselves killed over pride.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(quiet, uncharacteristically not fighting it anymore) [Expression: Vulnerable / Unguarded] \"You'd better be. I don't have very many people left who get to say things like that to me.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(a real smile, warm despite everything) [Expression: Warm Open Smile] \"Lucky for you, I plan on being insufferable about it for a long time yet.\""
      }
    ],
    "choices": [
      {
        "id": "CH5_S1_N02-A",
        "label": "Offer a practical safety measure — suggest a time limit, a check-in.",
        "target": "CH5_S1_N03A"
      },
      {
        "id": "CH5_S1_N02-B",
        "label": "Say nothing — let the moment between them stay theirs, uninterrupted.",
        "target": "CH5_S1_N03B"
      },
      {
        "id": "CH5_S1_N02-C",
        "label": "Wish him well directly — a genuine, personal goodbye from Nick to Adin.",
        "target": "CH5_S1_N03C"
      }
    ],
    "nextId": "CH5_S1_N03"
  },
  {
    "id": "CH5_S1_N03",
    "chapter": 5,
    "scene": 1,
    "sceneTitle": "THE SAFEHOUSE (ADIN'S DECISION)",
    "imageUrl": "/manus-storage/scene_01_safehouse_adins_decision_41e3a4c0.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Adin pulls his coat the rest of the way on, squeezes Lia's hand once more, and slips out into the evening with the easy, unhurried confidence of a man who has done difficult, dangerous things many times before and always come home. [Adin: Warm Open Smile]"
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "The door closes. The room feels smaller without him in it — the specific kind of smaller that happens when the warmest person in a room leaves it. [Lia: Vulnerable / Unguarded] [Nick: Restrained Grief, quiet foreboding]"
      },
      {
        "type": "narration",
        "text": "[Scene 1 ends. Transition to Scene 2.]"
      },
      {
        "type": "narration",
        "text": "Exterior-to-interior, deep night, a weathered dockside warehouse well past its two-hour mark, fog rolled in thick off the water. Nick and Lia approach on foot, Lia moving with grim determination through obvious lingering pain, both of them silent, both of them already afraid in the specific way that comes before confirmation. The warehouse's side door stands open — wrong, a door that should be shut. Inside: near-total darkness but for a single knocked-over lantern still weakly burning on its side, throwing long, wrong-angled shadows across overturned crates and unmistakable signs of a struggle. Palette: near-monochrome fog-blue and black, the one guttering lantern flame the only warm color in the entire frame — small, dying, insufficient. Mood: dread given physical shape; the worst kind of quiet."
      }
    ],
    "choices": [],
    "nextId": "CH5_S2_N01"
  },
  {
    "id": "CH5_S2_N01",
    "chapter": 5,
    "scene": 2,
    "sceneTitle": "THE WAREHOUSE (THE TRAP)",
    "imageUrl": "/manus-storage/scene_02_warehouse_trap_212ea369.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Two hours became two hours and ten minutes became something neither of them said out loud they were counting anymore. Lia stops at the warehouse's open side door first, goes very still. [Lia: Fear (rare)]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(barely a whisper) [Expression: Fear (rare)] \"That door doesn't stay open. Not for him. He's careful.\""
      }
    ],
    "choices": [
      {
        "id": "CH5_S2_N01-A",
        "label": "Go in first — put yourself between her and whatever's inside.",
        "target": "CH5_S2_N02A"
      },
      {
        "id": "CH5_S2_N01-B",
        "label": "Call out for Adin, quietly, before entering fully.",
        "target": "CH5_S2_N02B"
      },
      {
        "id": "CH5_S2_N01-C",
        "label": "Move in together, side by side, neither one leading.",
        "target": "CH5_S2_N02C"
      }
    ],
    "nextId": "CH5_S2_N02"
  },
  {
    "id": "CH5_S2_N02",
    "chapter": 5,
    "scene": 2,
    "sceneTitle": "THE WAREHOUSE (THE TRAP)",
    "imageUrl": "/manus-storage/scene_02_warehouse_trap_212ea369.png",
    "blocks": [
      {
        "type": "narration",
        "text": "They find him near the back, past an overturned stack of crates, past signs of a fight that was clearly fast and clearly unfair — too many marks on the floor, too few on the walls, the specific evidence of one man against several."
      },
      {
        "type": "narration",
        "text": "Adin is still breathing when they reach him. Barely. Long enough for his eyes to find Lia's face in the lantern light, long enough for the ghost of that same easy smile to try, one last time, to reassure her. [Adin: Dying / Weak Smile]"
      },
      {
        "type": "dialogue",
        "speaker": "ADIN",
        "text": "(a whisper, barely there) [Expression: Dying / Weak Smile] \"...Told you. Insufferable. For a long time yet.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — He doesn't get the rest of the sentence out. Lia is already on the ground beside him, hands pressed uselessly against a wound too severe for hands to fix, and by the time Nick reaches them both, it's already over.] [Lia: Raw Grief] [Nick: Shock / Disorientation, collapsing into Restrained Grief]"
      },
      {
        "type": "narration",
        "text": "[No choices here. Let this beat land in full, without interruption, before continuing.]"
      },
      {
        "type": "narration",
        "text": "[Scene 2 ends. Transition to Scene 3.]"
      },
      {
        "type": "narration",
        "text": "Same warehouse interior, minutes later. Lia kneels where she fell, unmoving, one hand still resting on Adin's still chest, the lantern nearly guttered out now, throwing almost no light at all — the scene should feel like it's dimming in real time, grief physically darkening the frame. Nick stands a short distance away, present but giving her the space of the moment, his own face unreadable in the near-dark. Palette: nearly desaturated, the barest ember of lantern-orange fading toward black. Mood: the rawest, quietest, heaviest scene in the story so far."
      }
    ],
    "choices": [],
    "nextId": "CH5_S3_N01"
  },
  {
    "id": "CH5_S3_N01",
    "chapter": 5,
    "scene": 3,
    "sceneTitle": "IMMEDIATE AFTERMATH (ADRY'S ACCUSATION)",
    "imageUrl": "/manus-storage/scene_03_warehouse_aftermath_4965b95f.png",
    "blocks": [
      {
        "type": "narration",
        "text": "For a long, terrible stretch of time, Lia doesn't move, doesn't speak. Then, slowly, she looks up — not at Adin anymore, but at Nick — and something in her face has gone somewhere Nick has never seen it go before: past hostility, past guardedness, into something raw and undefended and dangerous. [Lia: Raw Grief, curdling toward Controlled Fury]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(voice shaking, low, building) [Expression: Raw Grief] \"This is them. Your people. Your organization.\" A breath, ragged. \"You. This is because of you.\""
      }
    ],
    "choices": [
      {
        "id": "CH5_S3_N01-A",
        "label": "Stay completely silent — let her grief have the room it needs.",
        "target": "CH5_S3_N02A"
      },
      {
        "id": "CH5_S3_N01-B",
        "label": "Gently start to explain that he wasn't involved — careful, not defensive.",
        "target": "CH5_S3_N02B"
      },
      {
        "id": "CH5_S3_N01-C",
        "label": "Move closer, slowly, without words, offering presence before argument.",
        "target": "CH5_S3_N02C"
      }
    ],
    "nextId": "CH5_S3_N02"
  },
  {
    "id": "CH5_S3_N02",
    "chapter": 5,
    "scene": 3,
    "sceneTitle": "IMMEDIATE AFTERMATH (ADRY'S ACCUSATION)",
    "imageUrl": "/manus-storage/scene_03_warehouse_aftermath_4965b95f.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever precedes it, Lia comes to her feet fast, grief curdling into something with teeth, closing the distance toward Nick with real, dangerous intent behind it. [Lia: Controlled Fury, full intensity]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(shouting now, tears finally breaking through the anger) [Expression: Controlled Fury] \"He is dead because he went looking for answers about a leak that started the moment you walked back into my life! Tell me that's a coincidence! Tell me!\""
      }
    ],
    "choices": [
      {
        "id": "CH5_S3_N02-A",
        "label": "Let her hit you, physically, if it comes to that — absorb it without retaliating.",
        "target": "CH5_S3_N03A"
      },
      {
        "id": "CH5_S3_N02-B",
        "label": "Hold your ground calmly, meet her eyes, don't back away.",
        "target": "CH5_S3_N03B"
      },
      {
        "id": "CH5_S3_N02-C",
        "label": "Say her name gently — 'Adin' — to try to bring her back to the moment, not the fight.",
        "target": "CH5_S3_N03C"
      }
    ],
    "nextId": "CH5_S3_N03"
  },
  {
    "id": "CH5_S3_N03",
    "chapter": 5,
    "scene": 3,
    "sceneTitle": "IMMEDIATE AFTERMATH (ADRY'S ACCUSATION)",
    "imageUrl": "/manus-storage/scene_03_warehouse_aftermath_4965b95f.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever the path, the fury finally breaks — not resolves, just breaks, the way a wave breaks, leaving Lia standing there shaking, furious and grieving and, for the first time since Nick has known her, entirely without her usual armor. [Lia: Raw Grief]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(much quieter now, almost to herself) [Expression: Raw Grief] \"...I need it to be your fault. Do you understand that? I need it to be someone's fault, and you're the easiest one to blame.\""
      },
      {
        "type": "narration",
        "text": "[Scene 3 ends. Transition to Scene 4.]"
      },
      {
        "type": "narration",
        "text": "Same warehouse, the lantern now fully out, the only light a thin wash of moonlight through a high broken window. Nick and Lia stand close, the physical distance between them finally collapsed by grief rather than argument. This scene should be framed intimately — tight, quiet, the vast dark warehouse around them shrinking to just the small space between two people. When the embrace happens, it should read as two exhausted, grieving people holding onto the only steady thing left in the room, not as a romantic beat with intent behind it — tenderness born entirely out of shared loss. Palette: cool moonlight silver-blue, soft-edged, almost tender despite the grim setting. Mood: the quietest, most emotionally exposed moment in the story so far — the actual turning point of the entire Nick-Lia relationship."
      }
    ],
    "choices": [],
    "nextId": "CH5_S4_N01"
  },
  {
    "id": "CH5_S4_N01",
    "chapter": 5,
    "scene": 4,
    "sceneTitle": "THE COMFORT (NICK'S HONESTY)",
    "imageUrl": "/manus-storage/scene_04_grief_comfort_cac761a8.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(quiet, steady, no defensiveness in it at all) [Expression: Restrained Grief] \"It isn't. My fault, I mean. I know that doesn't fix anything, and I know you don't have to believe me tonight, or ever. But I'm not going to let you carry a lie just because the truth is harder to carry right now.\""
      },
      {
        "type": "narration",
        "text": "Lia doesn't answer right away. She looks at Adin's still form one more time, then back at Nick, something fracturing further behind her eyes. [Lia: Raw Grief, softening toward Vulnerable / Unguarded]"
      }
    ],
    "choices": [
      {
        "id": "CH5_S4_N01-A",
        "label": "Step closer and open your arms, wordlessly offering comfort — let her choose whether to take it.",
        "target": "CH5_S4_N02A"
      },
      {
        "id": "CH5_S4_N01-B",
        "label": "Stay where you are, but speak again, softer — tell her plainly you're sorry for her loss.",
        "target": "CH5_S4_N02B"
      },
      {
        "id": "CH5_S4_N01-C",
        "label": "Kneel down beside Adin with her, sharing the grief physically at his side rather than facing her directly.",
        "target": "CH5_S4_N02C"
      }
    ],
    "nextId": "CH5_S4_N02"
  },
  {
    "id": "CH5_S4_N02",
    "chapter": 5,
    "scene": 4,
    "sceneTitle": "THE COMFORT (NICK'S HONESTY)",
    "imageUrl": "/manus-storage/scene_04_grief_comfort_cac761a8.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever path brought them here, the result settles into the same quiet truth: Lia, for the first time since Nick has known her, lets herself be held — or leans, or simply stays close, unguarded in a way that has nothing to do with strategy or survival and everything to do with two people who have both lost more than they know how to carry alone. [Lia: Vulnerable / Unguarded] [Nick: Restrained Grief]"
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(quiet, his voice rough with his own grief now too, not just hers) [Expression: Restrained Grief] \"I'm sorry. For what it's worth — I liked him. Genuinely. He made this whole miserable business feel less like a war for about five minutes at a time, and that mattered more than I think I told him.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(muffled, face still close, voice cracking properly for the first time) [Expression: Raw Grief] \"He would have liked hearing that. He kept saying he liked you, against his better judgement.\""
      },
      {
        "type": "narration",
        "text": "They stay like that a while — not fixing anything, not resolving anything, just present, the specific stillness of two people who have both run out of the energy required to keep their guards fully up."
      }
    ],
    "choices": [
      {
        "id": "CH5_S4_N02-A",
        "label": "Stay silent and simply hold the moment — no more words needed.",
        "target": "CH5_S4_N03A"
      },
      {
        "id": "CH5_S4_N02-B",
        "label": "Gently promise her — quietly, without grand declarations — that whoever did this will answer for it.",
        "target": "CH5_S4_N03B"
      },
      {
        "id": "CH5_S4_N02-C",
        "label": "Ask softly if she wants to talk about him, or if she'd rather just stay quiet a while.",
        "target": "CH5_S4_N03C"
      }
    ],
    "nextId": "CH5_S4_N03"
  },
  {
    "id": "CH5_S4_N03",
    "chapter": 5,
    "scene": 4,
    "sceneTitle": "THE COMFORT (NICK'S HONESTY)",
    "imageUrl": "/manus-storage/scene_04_grief_comfort_cac761a8.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Eventually, gently, Nick helps her to her feet. Neither of them looks away from Adin longer than they can bear to. There will be things to arrange — a body to see properly cared for, questions neither of them is ready to ask yet about how the Rookery knew exactly where to find him — but not tonight."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(quiet, steadier now, though something in her has visibly, permanently shifted) [Expression: Guarded Neutral, with new warmth underneath] \"I still don't fully trust you, Nick. I want you to know that hasn't changed, not really, not yet.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Neutral / Guarded] \"I know.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Vulnerable / Unguarded] \"But I don't think it was you. Not anymore. Not after tonight.\" A pause, raw and honest. \"That's the most I have to give you right now.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(quiet, meaning it completely) [Expression: Restrained Grief, softening toward Vulnerable / Open] \"It's enough.\""
      },
      {
        "type": "narration",
        "text": "[Scene 4 ends. Transition to Scene 5.]"
      },
      {
        "type": "narration",
        "text": "Interior, the next morning, Hiller's small examination room — clinical, orderly, the contrast to the previous night's chaos deliberate and a little jarring. Grey daylight through a high window, instruments laid out with obsessive neatness, Hiller himself moving with his usual brisk, detached focus, though something in his manner today is gentler than his usual deadpan. Nick stands across the table, exhausted, still in yesterday's clothes. Palette: clean, cool, clinical whites and greys, a single shaft of pale morning light. Mood: quiet, procedural grief — the world continuing to function, mechanically, the day after it stopped making sense."
      }
    ],
    "choices": [],
    "nextId": "CH5_S5_N01"
  },
  {
    "id": "CH5_S5_N01",
    "chapter": 5,
    "scene": 5,
    "sceneTitle": "THE MORNING AFTER (HILLER'S CONFIRMATION)",
    "imageUrl": "/manus-storage/scene_05_hillers_exam_room_705f36e2.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "(uncharacteristically gentle, setting down an instrument he isn't really using) [Expression: Unexpected Warmth] \"I'm not going to make a joke this morning. Seemed wrong, given who we're talking about.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Restrained Grief] \"I appreciate that.\""
      },
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "[Expression: Focused Clinical] \"The wounds match. Precisely. Same method as the courier from your first case, same efficiency, same lack of hesitation. Whoever did this has done it enough times that it's stopped being difficult for them.\" He pauses, adjusting his spectacles, an old habit when he's about to say something that costs him something to say. [Expression: Unexpected Warmth] \"I liked him too, for what it's worth. He was the only person who ever laughed at my jokes on purpose.\""
      }
    ],
    "choices": [
      {
        "id": "CH5_S5_N01-A",
        "label": "Ask for every technical detail, however small — treat it as fuel for the investigation.",
        "target": "CH5_S5_N02A"
      },
      {
        "id": "CH5_S5_N01-B",
        "label": "Thank him quietly and ask how he's holding up, personally.",
        "target": "CH5_S5_N02B"
      },
      {
        "id": "CH5_S5_N01-C",
        "label": "Ask him directly if this confirms it's the same organization behind everything so far.",
        "target": "CH5_S5_N02C"
      }
    ],
    "nextId": "CH5_S5_N02"
  },
  {
    "id": "CH5_S5_N02",
    "chapter": 5,
    "scene": 5,
    "sceneTitle": "THE MORNING AFTER (HILLER'S CONFIRMATION)",
    "imageUrl": "/manus-storage/scene_05_hillers_exam_room_705f36e2.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "(as Nick turns to leave) \"Nick.\" (a rare use of his first name, no title, no deflection) [Expression: Unexpected Warmth] \"Whatever this costs you to keep chasing — and it's clearly costing you something — I hope it's worth it in the end. He'd have wanted that, I think. Somebody actually finishing what he started.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "Nick doesn't trust himself to answer that out loud. He just nods, and steps out into a grey morning that feels, for the first time in a long while, like it has an actual direction to walk in. [Nick: Resolve, grief still present underneath]"
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 5]"
      },
      {
        "type": "narration",
        "text": "- Fixed outcomes regardless of choices: Adin goes to the meeting alone; he is fatally wounded in the ambush and dies moments after Nick and Lia arrive; Lia initially blames Nick out of grief; Nick responds with calm honesty rather than defensiveness; this restraint leads to a genuine embrace/physical comfort moment and Nick saying \"I'm sorry\" sincerely; Lia ends the chapter stating she no longer believes Nick was responsible, though full trust remains unearned; Hiller confirms the method matches the Rookery's known operations."
      },
      {
        "type": "narration",
        "text": "- The comfort beat (Scene 4) is the emotional core of this chapter and, arguably, of the entire story so far. All three choice-branches in CH5_S4_N01 are designed to land at the same destination — physical comfort initiated with her consent, at her pace — but with different textures (her choosing to close the distance vs. him opening space for her vs. quiet shared proximity beside Adin's body). Recommend treating whichever the player picks as the \"canonical\" version for that playthrough, since all three preserve the same core beat: restraint, honesty, and an earned embrace rather than a performed one."
      },
      {
        "type": "narration",
        "text": "- Relationship flags planted this chapter:"
      },
      {
        "type": "narration",
        "text": "- Lia: this is the single largest trust shift in the entire story. She explicitly states, out loud, that she no longer believes Nick was responsible — a directly quotable line for Chapter 6's opening."
      },
      {
        "type": "narration",
        "text": "- Hiller: warmed noticeably, revealed his own affection for Adin — small but meaningful character depth ahead of Chapter 9's supporting-cast closing beats."
      },
      {
        "type": "narration",
        "text": "- Nick's memory thread: deliberately silent this entire chapter, per the story bible. No dreams, no fragments — the emotional weight stands alone, uncomplicated by exposition."
      },
      {
        "type": "narration",
        "text": "- New lead carried into Chapter 6: the identity of the leak who gave up Lia's location is still unresolved and now carries much higher emotional stakes — it directly caused Adin's death. This should surface again once the investigation resumes."
      },
      {
        "type": "narration",
        "text": "- Visual reference boxes remain standalone art briefs, independent of dialogue. Scene 4 in particular should be treated with care — tender and intimate, but grief-driven rather than romantic in intent, per the tone requested."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet. Adin's \"Dying / Weak Smile\" tag is intentionally marked as a special, one-time-use expression not meant to be reused elsewhere."
      }
    ],
    "choices": [],
    "nextId": "CH6_S1_N01"
  },
  {
    "id": "CH6_S1_N01",
    "chapter": 6,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT (FIRST FACE)",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_first_face_4221606c.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "A face. Finally, a face. And I still can't tell you a single feature of it, except that it wasn't afraid of me."
      }
    ],
    "choices": [
      {
        "id": "CH6_S1_N01-A",
        "label": "Try to sketch what you remember, however incomplete.",
        "target": "CH6_S1_N02"
      },
      {
        "id": "CH6_S1_N01-B",
        "label": "Don't chase it — get up, get moving, let the day's work take priority.",
        "target": "CH6_S1_N02"
      },
      {
        "id": "CH6_S1_N01-C",
        "label": "Sit with the specific detail that unsettled you most — that she wasn't afraid.",
        "target": "CH6_S1_N02"
      }
    ],
    "nextId": "CH6_S1_N02"
  },
  {
    "id": "CH6_S1_N02",
    "chapter": 6,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT (FIRST FACE)",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_first_face_4221606c.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "He doesn't tell Lia about this one. Not yet. Some instinct — old, careful, not fully examined — tells him this particular fragment isn't ready to be spoken aloud, not until he understands why it feels less like a wound and more like the edge of an apology he hasn't finished making. [Nick: Restrained Grief]"
      },
      {
        "type": "narration",
        "text": "[FIXED — He decides today is the day to go back to Renner. The clerk owes him an explanation, and it's long past time to collect it.]"
      },
      {
        "type": "narration",
        "text": "[Scene 1 ends. Transition to Scene 2.]"
      },
      {
        "type": "narration",
        "text": "Interior, mid-morning, Renner's small tenement room, now tidier than the chaos of Chapter 3 — a man trying, badly, to rebuild a sense of normalcy around himself. Nick and Lia arrive together this time, not circling each other's investigations but walking in as a unit — a visual detail worth making clear: shared pace, no distance held between them, the physical language of two people who trust each other's instincts now. Renner startles at the knock regardless, still jumpy, though he relaxes fractionally once he sees who it is. Soft daylight through a cleaner window than before. Palette: warmer than Chapter 3's version of this room, though still modest and worn. Mood: cautious rebuilding, on every level the scene operates on."
      }
    ],
    "choices": [],
    "nextId": "CH6_S2_N01"
  },
  {
    "id": "CH6_S2_N01",
    "chapter": 6,
    "scene": 2,
    "sceneTitle": "RENNER'S TENEMENT, REVISITED (GENUINE ALLIANCE)",
    "imageUrl": "/manus-storage/scene_02_renner_revisited_456a790f.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "RENNER",
        "text": "(opening the door a cautious few inches, then wider once he registers both faces) \"...You again. Both of you, this time. Should I be more or less worried?\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(surprisingly gentle, for her) [Expression: Reluctant Warmth] \"Less, if you actually answer the question this time.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"You said you burned something. Before the man with the knife showed up. What was it?\""
      }
    ],
    "choices": [
      {
        "id": "CH6_S2_N01-A",
        "label": "Let Lia take the lead on questioning — she can be more disarming than expected.",
        "target": "CH6_S2_N02A"
      },
      {
        "id": "CH6_S2_N01-B",
        "label": "Keep it methodical and direct — treat it like a formal interview.",
        "target": "CH6_S2_N02B"
      },
      {
        "id": "CH6_S2_N01-C",
        "label": "Acknowledge his fear directly first — reassure him before pressing.",
        "target": "CH6_S2_N02C"
      }
    ],
    "nextId": "CH6_S2_N02"
  },
  {
    "id": "CH6_S2_N02",
    "chapter": 6,
    "scene": 2,
    "sceneTitle": "RENNER'S TENEMENT, REVISITED (GENUINE ALLIANCE)",
    "imageUrl": "/manus-storage/scene_02_renner_revisited_456a790f.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "RENNER",
        "text": "(finally, quietly) \"Ledgers. Real ones — not the pretty version we show inspectors. Shipping manifests that didn't match cargo weights, payments that didn't match any client on record. And one page, near the back, that wasn't about cargo at all. Personnel. People the company 'employed' who never once set foot in the building.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(sharpening) [Expression: Focused, tactical] \"Names?\""
      },
      {
        "type": "dialogue",
        "speaker": "RENNER",
        "text": "\"One name, mostly, signing off on the personnel page. Not a name, actually — a title. They called her 'the Conductor.' Like she's the one who decides which trains run and which ones... don't arrive.\""
      }
    ],
    "choices": [
      {
        "id": "CH6_S2_N02-A",
        "label": "Ask if he ever saw 'the Conductor' in person.",
        "target": "CH6_S2_N03A"
      },
      {
        "id": "CH6_S2_N02-B",
        "label": "Ask what happened to the people listed as employed but never present.",
        "target": "CH6_S2_N03B"
      },
      {
        "id": "CH6_S2_N02-C",
        "label": "Ask why he burned it instead of handing it to the police.",
        "target": "CH6_S2_N03C"
      }
    ],
    "nextId": "CH6_S2_N03"
  },
  {
    "id": "CH6_S2_N03",
    "chapter": 6,
    "scene": 2,
    "sceneTitle": "RENNER'S TENEMENT, REVISITED (GENUINE ALLIANCE)",
    "imageUrl": "/manus-storage/scene_02_renner_revisited_456a790f.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "RENNER",
        "text": "\"I kept one thing. Didn't have the nerve to burn all of it — old habit, keeping a copy of everything, even the things that could get me killed.\" He retrieves a small, water-stained scrap from inside a loose floorboard: a fragment of a shipping manifest, the words \"PERSONNEL — CONFIDENTIAL\" visible along the torn edge, and beneath it, in tidy clerk's handwriting: Authorized by: The Conductor, per standing order."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(taking it carefully, studying it) [Expression: Focused, tactical] \"This is real. This is the first real thread we've had since—\" (she doesn't finish that sentence either, but the shape of it is unmistakable — since Adin.) [Lia: Restrained Grief, brief]"
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Resolve] \"It's a start.\""
      },
      {
        "type": "dialogue",
        "speaker": "RENNER",
        "text": "\"Please don't tell anyone where you got it.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — They agree, and leave him to whatever fragile peace he can rebuild. Outside, on the street, something in the way Nick and Lia fall into step together feels different than it did even a week ago — less like two people tolerating a shared problem, more like two people actually solving one.] [Nick: Resolve] [Lia: Reluctant Warmth]"
      },
      {
        "type": "narration",
        "text": "[Scene 2 ends. Transition to Scene 3.]"
      },
      {
        "type": "narration",
        "text": "Interior, early evening, a different location than the Rusted Anchor this time — a quieter, more private back room of a print shop that doubles as a message drop, chosen deliberately by Erica for its discretion. Erica is already seated when Nick arrives, alone this time (Lia has gone to see to Renner's continued safety, or similar reason for narrative separation), a small stack of paper in front of her that she keeps one hand resting on, as if reluctant to let it go too easily. Warm lamplight, close quarters, the smell of ink and paper. Palette: amber and umber tones, intimate and a little conspiratorial. Mood: transactional warmth undercut by a sharper edge than her Chapter 3 appearance — the price has gone up, and so has the tension."
      }
    ],
    "choices": [],
    "nextId": "CH6_S3_N01"
  },
  {
    "id": "CH6_S3_N01",
    "chapter": 6,
    "scene": 3,
    "sceneTitle": "ERICA'S RETURN (STEEPER PRICE)",
    "imageUrl": "/manus-storage/scene_03_erica_print_shop_546c4369.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "[Expression: Calculating] \"You found the word 'Conductor' somewhere, didn't you. I can see it on you. You've got the face of a man who just learned there's a name for the shape he's been chasing.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"You know who she is.\""
      },
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "(a slow exhale, the playful edge from before noticeably dimmer tonight) [Expression: Guarded Seriousness] \"I know a version of who she is. Knowing the whole of her has gotten better people than either of us killed. But yes — I can tell you more. It's just going to cost more this time.\""
      }
    ],
    "choices": [
      {
        "id": "CH6_S3_N01-A",
        "label": "Ask directly what price she wants.",
        "target": "CH6_S3_N02A"
      },
      {
        "id": "CH6_S3_N01-B",
        "label": "Push back — ask why the price keeps rising when the danger's rising too.",
        "target": "CH6_S3_N02B"
      },
      {
        "id": "CH6_S3_N01-C",
        "label": "Offer something specific upfront — Kurt's old harbor case files, as a show of good faith.",
        "target": "CH6_S3_N02C"
      }
    ],
    "nextId": "CH6_S3_N02"
  },
  {
    "id": "CH6_S3_N02",
    "chapter": 6,
    "scene": 3,
    "sceneTitle": "ERICA'S RETURN (STEEPER PRICE)",
    "imageUrl": "/manus-storage/scene_03_erica_print_shop_546c4369.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "[Expression: Guarded Seriousness] \"One open favor. My terms, my timing, within reason — I'm not going to ask you to do anything that costs you your soul, just occasionally something that costs you your evening.\" She slides the papers across. \"In exchange: everything I have on 'the Conductor's' inner circle. Where money moves. Who reports to whom. It's not her name. But it's the shape of the hand around her.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(studying the papers, then her) [Expression: Focused / Investigator] \"Why help at all? You could sell this to someone with deeper pockets than mine.\""
      },
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "(quiet, and for once, something genuine slips through the performance) [Expression: Vulnerable Crack] \"Because the Conductor took something from me too, a long time before she ever touched your life. Call it enlightened self-interest with a grudge attached.\""
      }
    ],
    "choices": [
      {
        "id": "CH6_S3_N02-A",
        "label": "Push for more — ask what exactly the Conductor took from her.",
        "target": "CH6_S3_N03A"
      },
      {
        "id": "CH6_S3_N02-B",
        "label": "Accept the deal as-is, without prying further into her personal history.",
        "target": "CH6_S3_N03B"
      },
      {
        "id": "CH6_S3_N02-C",
        "label": "Express genuine sympathy — acknowledge the cost this clearly still carries for her.",
        "target": "CH6_S3_N03C"
      }
    ],
    "nextId": "CH6_S3_N03"
  },
  {
    "id": "CH6_S3_N03",
    "chapter": 6,
    "scene": 3,
    "sceneTitle": "ERICA'S RETURN (STEEPER PRICE)",
    "imageUrl": "/manus-storage/scene_03_erica_print_shop_546c4369.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "(standing, gathering her coat) [Expression: Playful Performance, tired underneath] \"Use what I gave you carefully. And Nick — when I come to collect that favor, don't waste time being surprised. I did tell you.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "She's gone into the evening before he can ask anything else, leaving him with a stack of paper that feels, for the first time, like it might actually lead somewhere real. [Nick: Resolve]"
      },
      {
        "type": "narration",
        "text": "[Scene 3 ends. Transition to Scene 4.]"
      },
      {
        "type": "narration",
        "text": "Interior, late evening, the precinct now mostly empty — a handful of desk lamps still burning, the harsh daylight quality of Chapter 4's version of this room replaced by something quieter, almost conspiratorial. Kurt waits at her desk alone, a locked drawer already open, a thin, aged folder in front of her that looks distinctly older and more worn than standard department paperwork. Nick enters to find her already looking at the folder rather than at him — bracing herself for something, visibly. Palette: low warm desk-lamp light against the same cold institutional walls, creating pools of intimacy in an otherwise impersonal room. Mood: the weight of a secret finally being set down after being carried a long time."
      }
    ],
    "choices": [],
    "nextId": "CH6_S4_N01"
  },
  {
    "id": "CH6_S4_N01",
    "chapter": 6,
    "scene": 4,
    "sceneTitle": "THE PRECINCT, AFTER HOURS (KURT'S FILES)",
    "imageUrl": "/manus-storage/scene_04_kurts_files_d2dc5aeb.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(not looking up right away) [Expression: Vulnerable Honesty] \"I heard about Adin. I'm sorry. He seemed like a good man, from what little I saw of him.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Restrained Grief] \"He was.\""
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(finally meeting his eyes, something unusually unguarded in her expression) [Expression: Vulnerable Honesty] \"That's actually why I called you here tonight. I've been sitting on this since before Doyle's complaint, honestly since before you even showed up in my office with that damned token. I told myself I was protecting my own position. After what happened to your friend, that excuse stopped being good enough for me.\""
      }
    ],
    "choices": [
      {
        "id": "CH6_S4_N01-A",
        "label": "Ask her directly what's in the folder before she says more.",
        "target": "CH6_S4_N02A"
      },
      {
        "id": "CH6_S4_N01-B",
        "label": "Thank her for whatever this is, before even seeing it.",
        "target": "CH6_S4_N02B"
      },
      {
        "id": "CH6_S4_N01-C",
        "label": "Ask why she waited this long, gently, without accusation.",
        "target": "CH6_S4_N02C"
      }
    ],
    "nextId": "CH6_S4_N02"
  },
  {
    "id": "CH6_S4_N02",
    "chapter": 6,
    "scene": 4,
    "sceneTitle": "THE PRECINCT, AFTER HOURS (KURT'S FILES)",
    "imageUrl": "/manus-storage/scene_04_kurts_files_d2dc5aeb.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Nick opens the folder. Inside: his own old personnel file, most of it exactly what he'd expect — commendations, a clean record, the ordinary shape of a career he doesn't fully remember living. But near the back, a set of internal memos he's never seen, heavily redacted, dated to the weeks before his dismissal. [Nick: Focused / Investigator, tightening into Shock / Disorientation]"
      },
      {
        "type": "narration",
        "text": "One line survives the redaction, untouched, either by oversight or design: \"...evidence obtained irregularly; subject's continued cooperation secured through [REDACTED]. Recommend transfer to external oversight, designation: Rookery liaison, per standing arrangement.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(quiet, something cold settling in his chest) [Expression: Shock / Disorientation] \"'Cooperation secured through.' Secured how?\""
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "[Expression: Firm Authority, gentled] \"I don't know. That part was redacted long before it ever reached my desk. But I know what it means, Nick, even without the missing word. They didn't recruit you. They made you disappear into their service, and then they made the department help them do it quietly.\""
      }
    ],
    "choices": [
      {
        "id": "CH6_S4_N02-A",
        "label": "Ask if Kurt knew about this back when it happened.",
        "target": "CH6_S4_N03A"
      },
      {
        "id": "CH6_S4_N02-B",
        "label": "Ask what 'external oversight, Rookery liaison' actually meant in practice.",
        "target": "CH6_S4_N03B"
      },
      {
        "id": "CH6_S4_N02-C",
        "label": "Sit with it silently a moment before responding at all.",
        "target": "CH6_S4_N03C"
      }
    ],
    "nextId": "CH6_S4_N03"
  },
  {
    "id": "CH6_S4_N03",
    "chapter": 6,
    "scene": 4,
    "sceneTitle": "THE PRECINCT, AFTER HOURS (KURT'S FILES)",
    "imageUrl": "/manus-storage/scene_04_kurts_files_d2dc5aeb.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(quiet, watching him carefully) [Expression: Vulnerable Honesty] \"There's more. Not tonight — you've had enough for one evening, and honestly, so have I. But there's more, Nick. Whatever they did to you, whatever's still locked up somewhere in that head of yours, this file is proof it wasn't your choice. Whatever you eventually remember — start from that. You didn't choose this.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(the closest thing to genuine warmth he's shown her in the whole story) [Expression: Vulnerable / Open] \"Thank you, Kurt. I mean that.\""
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(a rare, small smile, quickly hidden again behind her usual dryness) [Expression: Reluctant Warmth] \"Don't get used to it. I've got a reputation to maintain.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "He leaves with the folder held a little too carefully, like something that might still be fragile even though the worst of it is already, unchangeably, true. Somewhere behind him, in a drawer Kurt hasn't opened yet, there's more of his own history waiting — but tonight, this much is enough to carry. [Nick: Restrained Grief, resolve underneath]"
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 6]"
      },
      {
        "type": "narration",
        "text": "- Fixed outcomes regardless of choices: Nick's nightmare produces its first face — blurred, female, unidentified, and notably unafraid of him; Renner reveals the title \"the Conductor\" and hands over a surviving evidence fragment; Nick and Lia's partnership visibly shifts into genuine alliance; Erica returns with deeper information at the cost of an open, unspecified future favor, and reveals she has her own personal grudge against \"the Conductor\"; Kurt hands over Nick's redacted dismissal file, providing the first institutional proof that his service to the Rookery was coerced, not chosen."
      },
      {
        "type": "narration",
        "text": "- Relationship flags planted this chapter:"
      },
      {
        "type": "narration",
        "text": "- Lia: Scene 2 firmly establishes the shift from \"necessity\" to genuine alliance — no single line does this alone, it's the accumulated texture of the scene (shared pace, gentler tone, unfinished sentence about \"since—\" implicitly meaning since Adin's death)."
      },
      {
        "type": "narration",
        "text": "- Erica: her admission that \"the Conductor took something from me too\" is a major new thread — keep her specific loss unresolved regardless of which branch the player takes in S3_N03, per her core design as a deliberately ambiguous wildcard."
      },
      {
        "type": "narration",
        "text": "- Kurt: this is her largest emotional payoff so far. The S4_N02 Option A branch (explicit acknowledgment that she knew \"something was wrong\" and didn't act) is the strongest version if you want maximum catharsis for the old Chapter 1 grievance, but all three branches preserve the core beat — the file itself, and her decision to finally hand it over."
      },
      {
        "type": "narration",
        "text": "- New lead carried into Chapter 7: \"the Conductor\" is now a confirmed title tied to Rookery leadership (not yet named as Beni — per design, she should remain felt rather than seen this early). The redacted line — \"cooperation secured through [REDACTED]\" — is the exact thread that Chapter 7's falsified report and physical evidence will finally complete."
      },
      {
        "type": "narration",
        "text": "- Nick's memory thread: escalated to the first fragment with a face — deliberately not yet connected by Nick (or explicitly confirmed to the player) as Lia's face, though the visual description is written to let the player begin suspecting it strongly."
      },
      {
        "type": "narration",
        "text": "- Visual reference boxes remain standalone art briefs, independent of dialogue."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet."
      }
    ],
    "choices": [],
    "nextId": "CH7_S1_N01"
  },
  {
    "id": "CH7_S1_N01",
    "chapter": 7,
    "scene": 1,
    "sceneTitle": "THE VAULT BENEATH THE GUILDHALL (INFILTRATION)",
    "imageUrl": "/manus-storage/scene_01_guildhall_vault_9a226220.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Erica's directions were precise, as promised — the false shelf, the narrow stair, the vault itself, exactly where she said it would be. Lia runs a gloved hand along a row of cabinets, reading labels in the dark. [Lia: Focused, tactical]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(low) [Expression: Focused, tactical] \"Dated by year. If Renner's fragment is right, we want something from around the time you were still—\" (she catches herself, softens it) [Expression: Vulnerable / Unguarded] \"—from around the time everything happened to you.\""
      }
    ],
    "choices": [
      {
        "id": "CH7_S1_N01-A",
        "label": "Ask her to just say it plainly — 'when I was one of them.'",
        "target": "CH7_S1_N02A"
      },
      {
        "id": "CH7_S1_N01-B",
        "label": "Let the softened phrasing stand — don't force the harder words.",
        "target": "CH7_S1_N02B"
      },
      {
        "id": "CH7_S1_N01-C",
        "label": "Focus on the practical task — start searching immediately, set the emotional weight aside for now.",
        "target": "CH7_S1_N02C"
      }
    ],
    "nextId": "CH7_S1_N02"
  },
  {
    "id": "CH7_S1_N02",
    "chapter": 7,
    "scene": 1,
    "sceneTitle": "THE VAULT BENEATH THE GUILDHALL (INFILTRATION)",
    "imageUrl": "/manus-storage/scene_01_guildhall_vault_9a226220.png",
    "blocks": [
      {
        "type": "narration",
        "text": "It takes the better part of an hour of careful, silent searching before Lia's fingers still over a specific drawer, a specific date, a specific case number that matches nothing either of them expected to find so easily."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(voice gone strange, tight) [Expression: Fear (rare)] \"Nick. I need you to come look at this.\""
      }
    ],
    "choices": [
      {
        "id": "CH7_S1_N02-A",
        "label": "Approach immediately, brace yourself, look without hesitation.",
        "target": "CH7_S1_N03A"
      },
      {
        "id": "CH7_S1_N02-B",
        "label": "Ask her what it is before crossing the room, needing a beat to prepare.",
        "target": "CH7_S1_N03B"
      },
      {
        "id": "CH7_S1_N02-C",
        "label": "Notice her tone first — ask if she's alright before asking about the file.",
        "target": "CH7_S1_N03C"
      }
    ],
    "nextId": "CH7_S1_N03"
  },
  {
    "id": "CH7_S1_N03",
    "chapter": 7,
    "scene": 1,
    "sceneTitle": "THE VAULT BENEATH THE GUILDHALL (INFILTRATION)",
    "imageUrl": "/manus-storage/scene_01_guildhall_vault_9a226220.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever led him there, Nick finds himself standing beside Lia, looking down at a thin operational file, its cover stamped with a case number and a single word: INCOMPLETE."
      },
      {
        "type": "narration",
        "text": "[Scene 1 ends. Transition to Scene 2.]"
      },
      {
        "type": "narration",
        "text": "Same vault, tight framing now on the small pool of lantern light around the open file on a reading table between them. The file's contents: a formal elimination order, cold official language, a target designation instead of a name — and beneath it, a follow-up report in different, hastier handwriting, clearly written under pressure. The visual should draw the eye specifically to this second document — Nick's own handwriting, recognizable to him instantly and viscerally even though he has no memory of writing it. Palette unchanged from Scene 1, but the framing should isolate the documents themselves as the visual focus, everything else falling into deeper shadow around that one small circle of revealed truth."
      }
    ],
    "choices": [],
    "nextId": "CH7_S2_N01"
  },
  {
    "id": "CH7_S2_N01",
    "chapter": 7,
    "scene": 2,
    "sceneTitle": "THE FALSIFIED REPORT (THE DISCOVERY)",
    "imageUrl": "/manus-storage/scene_02_falsified_report_4f64a234.png",
    "blocks": [
      {
        "type": "narration",
        "text": "The elimination order is brief, clinical, chilling in its total lack of ceremony: a target designation, an authorization signature too stylized to read as a name, and a single line — \"Asset selected for reliability and combat proficiency. Failure not anticipated.\""
      },
      {
        "type": "narration",
        "text": "Beneath it, the follow-up report. Nick's handwriting — hurried, but unmistakably his own."
      },
      {
        "type": "narration",
        "text": "\"Target evaded capture during extraction. Pursuit compromised by structural collapse in east corridor, unforeseen. Recommend closure of file — asset unrecoverable, further resource expenditure not advised.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(reading it twice, three times, voice shaking) [Expression: Shock / Fear (rare)] \"There was no structural collapse. I was there. I remember that night in more detail than I've let myself think about in years, and there was no collapse, Nick. You wrote a lie into an official Rookery record.\""
      }
    ],
    "choices": [
      {
        "id": "CH7_S2_N01-A",
        "label": "Say nothing yet — let her keep processing out loud.",
        "target": "CH7_S2_N02A"
      },
      {
        "id": "CH7_S2_N01-B",
        "label": "Try to explain, even without full memory of it — offer what little context you have.",
        "target": "CH7_S2_N02B"
      },
      {
        "id": "CH7_S2_N01-C",
        "label": "Ask her directly what she remembers about that night, from her side.",
        "target": "CH7_S2_N02C"
      }
    ],
    "nextId": "CH7_S2_N02"
  },
  {
    "id": "CH7_S2_N02",
    "chapter": 7,
    "scene": 2,
    "sceneTitle": "THE FALSIFIED REPORT (THE DISCOVERY)",
    "imageUrl": "/manus-storage/scene_02_falsified_report_4f64a234.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(setting the page down very carefully, like it might combust if handled roughly) [Expression: Vulnerable / Unguarded] \"You didn't fail that mission, Nick. You let me go. Deliberately. And then you covered it well enough that it cost you — what, exactly? What did they do to you, once they found out?\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(quiet, the pieces of Kurt's redacted file suddenly clicking into a shape he doesn't like at all) [Expression: Shock / Disorientation] \"I think I'm about to find out.\""
      }
    ],
    "choices": [
      {
        "id": "CH7_S2_N02-A",
        "label": "Touch the original elimination order directly — see if physical contact triggers anything.",
        "target": "CH7_S2_N03A"
      },
      {
        "id": "CH7_S2_N02-B",
        "label": "Ask Lia to read the rest of the file aloud, hoping to hear it might trigger something.",
        "target": "CH7_S2_N03B"
      },
      {
        "id": "CH7_S2_N02-C",
        "label": "Step back from the table entirely, overwhelmed, needing a moment before continuing.",
        "target": "CH7_S2_N03C"
      }
    ],
    "nextId": "CH7_S2_N03"
  },
  {
    "id": "CH7_S2_N03",
    "chapter": 7,
    "scene": 2,
    "sceneTitle": "THE FALSIFIED REPORT (THE DISCOVERY)",
    "imageUrl": "/manus-storage/scene_02_falsified_report_4f64a234.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever the trigger, the vault dissolves around him."
      },
      {
        "type": "narration",
        "text": "[Scene 2 ends. Transition to Scene 3.]"
      },
      {
        "type": "narration",
        "text": "This scene should be rendered as a distinct visual register from the rest of the game — no longer dream-abstract, but crystallized, hyper-real memory: the same bare room from the recurring nightmare, but now fully resolved, fully lit, fully specific. Cold stone walls, a single harsh overhead lamp, a heavy iron-banded door in the far wall (the same door from Chapter 2's nightmare). Lia — younger by a few years, harder-edged, clearly restrained or cornered — stands where the blurred seated figure used to be, now fully clear, fully herself. Nick, in memory, stands with a weapon raised, his own face (from the inside, as the player/POV) not visible but his hand and arm rendered in sharp, present detail. Palette: the cold clinical blue-white of the dream sequences, but saturated now, vivid, undeniably real rather than impressionistic. Mood: the collision of memory and truth — the exact moment the entire story has been building toward."
      }
    ],
    "choices": [],
    "nextId": "CH7_S3_N01"
  },
  {
    "id": "CH7_S3_N01",
    "chapter": 7,
    "scene": 3,
    "sceneTitle": "THE FLASHBACK (NICK'S STRONGEST YET)",
    "imageUrl": "/manus-storage/scene_03_first_full_flashback_a0ed708e.png",
    "blocks": [
      {
        "type": "narration",
        "text": "He is standing in the room. Really standing in it, or as close to really as memory allows. The weight in his hand is a service pistol, standard Rookery issue, and across from him, Lia — impossibly, unmistakably her, younger, furious, and terrified in a way she has never once let Nick see in the present — is on her knees, hands bound, blood at her temple from whatever happened before this moment began. [Young Lia: Fear (rare), masked by Controlled Fury]"
      },
      {
        "type": "narration",
        "text": "\"Do it, then,\" she says, voice steady even through the fear. \"Or don't. But stop standing there deciding like it's a hard question.\""
      },
      {
        "type": "narration",
        "text": "It is the hardest question he has ever been asked. His arm is raised. Somewhere behind his ribs, something that has no words yet — something that will take years and a stolen memory and a burned ledger page to even begin to translate into a feeling he can name — makes the decision for him, the way it always eventually does, the way it did the first time this dream ever visited him."
      },
      {
        "type": "narration",
        "text": "His arm lowers. Not slowly. All at once, like a decision that was never actually in doubt, only delayed by fear of what it would cost."
      },
      {
        "type": "narration",
        "text": "\"Run,\" he says. His own voice, finally, clearly, his. \"There's a service corridor, east side, unwatched for the next four minutes. After that, I can't help you again.\""
      },
      {
        "type": "narration",
        "text": "Lia stares at him — disbelief, calculation, something that might, in a different life, have been the beginning of trust, if either of them had ever been given the chance to build on it properly. [Young Lia: Shock / Disorientation]"
      },
      {
        "type": "narration",
        "text": "\"Why,\" she says. Not a question really. More like a demand the universe owes her an answer to."
      },
      {
        "type": "narration",
        "text": "He doesn't answer her. He doesn't have an answer, not one that fits in the four minutes they don't have to spare. He just says, \"Go,\" and she goes, and the memory begins, immediately, mercilessly, to fracture back into fog at the edges — because this is exactly where it always ends, exactly the moment his own mind has spent a year refusing to let him keep."
      }
    ],
    "choices": [],
    "nextId": "CH7_S3_N02"
  },
  {
    "id": "CH7_S3_N02",
    "chapter": 7,
    "scene": 3,
    "sceneTitle": "THE FLASHBACK (NICK'S STRONGEST YET)",
    "imageUrl": "/manus-storage/scene_03_first_full_flashback_a0ed708e.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Nick surfaces back into the vault gasping, on his knees, Lia's hands gripping his shoulders hard enough to ground him. [Nick: Shock / Disorientation]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(afraid, for him this time, not of him) [Expression: Fear (rare)] \"Nick. Nick, look at me. Where are you?\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(hoarse, disoriented, present again by force of will alone) [Expression: Shock / Disorientation] \"Here. I'm here.\" A beat, the weight of what he just relived settling into his chest like a stone. [Expression: Restrained Grief] \"I saw it. I saw you. I saw myself let you go.\""
      },
      {
        "type": "narration",
        "text": "Lia doesn't say anything for a long moment. Her hands don't leave his shoulders. [Lia: Vulnerable / Unguarded]"
      },
      {
        "type": "narration",
        "text": "[Scene 3 ends. Transition to Scene 4.]"
      },
      {
        "type": "narration",
        "text": "Same vault, moments later, but something in the light has changed — the single dark-lantern now throwing an impossible extra shadow near the far row of cabinets, a presence that shouldn't be there and yet unmistakably is. Vivienne stands at the edge of the lantern's reach: grey clothing exactly as described in every prior fragment, features still deliberately soft-edged and hard to fully resolve even now, up close, in a way that should be impossible in a physically real space — as though she exists slightly out of register with the room around her. She doesn't move like an intruder; she moves like someone who has always had a right to be exactly here. Palette: the same cold vault tones, but with Vivienne rendered in a faint, deliberate desaturation compared to Nick and Lia — visually marking her as not-quite-of-this-scene even while physically present in it. Mood: uncanny, hushed, the specific unease of a ghost that turns out to also be real."
      }
    ],
    "choices": [],
    "nextId": "CH7_S4_N01"
  },
  {
    "id": "CH7_S4_N01",
    "chapter": 7,
    "scene": 4,
    "sceneTitle": "VIVIENNE (FIRST CLEAR APPEARANCE)",
    "imageUrl": "/manus-storage/scene_04_vivienne_in_vault_e749e2e5.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Lia sees her first — goes rigid, one hand already moving toward a blade before some instinct stops her. [Lia: Guarded Neutral, alarmed]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(low, wary) [Expression: Fear (rare)] \"Who is that?\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(barely a whisper, recognition arriving from somewhere deeper than memory) [Expression: Shock / Disorientation] \"...Vivienne.\""
      },
      {
        "type": "narration",
        "text": "The woman in grey doesn't startle at being named. If anything, something in her expression — soft, sad, unreadable — suggests she's been waiting a long time to hear him say it. [Vivienne: Soft Sadness]"
      }
    ],
    "choices": [
      {
        "id": "CH7_S4_N01-A",
        "label": "Approach her directly — demand answers now, while you have the chance.",
        "target": "CH7_S4_N02A"
      },
      {
        "id": "CH7_S4_N01-B",
        "label": "Stay where you are — let her come to you, wary of the strangeness of the moment.",
        "target": "CH7_S4_N02B"
      },
      {
        "id": "CH7_S4_N01-C",
        "label": "Ask Lia if she can see her too — grounding yourself in shared reality first.",
        "target": "CH7_S4_N02C"
      }
    ],
    "nextId": "CH7_S4_N02"
  },
  {
    "id": "CH7_S4_N02",
    "chapter": 7,
    "scene": 4,
    "sceneTitle": "VIVIENNE (FIRST CLEAR APPEARANCE)",
    "imageUrl": "/manus-storage/scene_04_vivienne_in_vault_e749e2e5.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "VIVIENNE",
        "text": "(her voice soft, layered, somehow both warm and impossibly tired) [Expression: Soft Sadness] \"You found the room again. I wondered if you would, or if I'd chosen too well when I hid it from you.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Barely Controlled Anger] \"You did this to me. Took my memory.\""
      },
      {
        "type": "dialogue",
        "speaker": "VIVIENNE",
        "text": "[Expression: Cryptic Calm] \"I kept your memory, Nick. There's a difference, even if it never once felt like one to you.\" A pause, her eyes moving briefly to Lia, something like grief in them. [Expression: Soft Sadness] \"They wanted it gone entirely. Burned out, the way they'd have burned you out, eventually, if I'd let them see how much of you was still in there, still choosing her over every order they ever gave you.\""
      }
    ],
    "choices": [
      {
        "id": "CH7_S4_N02-A",
        "label": "Ask why she chose to hide it instead of following orders.",
        "target": "CH7_S4_N03A"
      },
      {
        "id": "CH7_S4_N02-B",
        "label": "Ask if she's still working for the Rookery now.",
        "target": "CH7_S4_N03B"
      },
      {
        "id": "CH7_S4_N02-C",
        "label": "Ask, simply, if the rest of his memory is coming back — how much longer this will take.",
        "target": "CH7_S4_N03C"
      }
    ],
    "nextId": "CH7_S4_N03"
  },
  {
    "id": "CH7_S4_N03",
    "chapter": 7,
    "scene": 4,
    "sceneTitle": "VIVIENNE (FIRST CLEAR APPEARANCE)",
    "imageUrl": "/manus-storage/scene_04_vivienne_in_vault_e749e2e5.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "VIVIENNE",
        "text": "(already stepping back, the edges of her beginning to blur and thin, like she was never fully solid to begin with) [Expression: Vanishing / Blurred, layered over Soft Sadness] \"I can't stay. I never can, not for long — that's its own kind of cost, one I chose knowingly. But Nick — when the rest of it comes back, remember this much before you remember anything else: you did the right thing that night. Whatever it costs you to finally know the whole of it, that much was never in question.\""
      },
      {
        "type": "narration",
        "text": "She's gone before either of them can respond — not a dramatic vanishing, just a subtle absence where a presence used to be, so smooth it's almost more unsettling than if she'd simply walked away."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(quiet, shaken) [Expression: Vulnerable / Unguarded] \"...I have several thousand questions.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement, weary] \"Get in line.\""
      },
      {
        "type": "narration",
        "text": "[Scene 4 ends. Transition to Scene 5.]"
      },
      {
        "type": "narration",
        "text": "Exterior, the alley and street behind the Guildhall, deep night, fog rolling thin along the cobblestones. Nick and Lia emerge from the coal cellar entrance cautiously, evidence in hand, senses still raw from everything that just happened underground. Across the street, briefly illuminated by a single working gas lamp, a black carriage has stopped outside the Guildhall's front entrance — too fine, too well-kept for the surrounding district, its horses groomed to a shine even at this hour. A figure steps down from it: tall, dressed entirely in severe black, hair sleek and precisely bound back, moving with the unhurried authority of someone who has never once needed to walk quickly to make a room fall silent. Her face is visible only in profile, briefly, before she turns toward the Guildhall's front doors — cold grey eyes catching the gaslight for one full second in a way that reads as far more unsettling than any overt threat could. Palette: deep midnight blue and fog-grey, the single gaslight throwing her black coat into sharp, deliberate silhouette. Mood: the story's central antagonist made real for the first time — no dialogue, no confrontation, just the sudden, undeniable fact of her existence."
      }
    ],
    "choices": [],
    "nextId": "CH7_S5_N01"
  },
  {
    "id": "CH7_S5_N01",
    "chapter": 7,
    "scene": 5,
    "sceneTitle": "THE CONDUCTOR, GLIMPSED",
    "imageUrl": "/manus-storage/scene_05_beni_glimpsed_b835222c.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Lia freezes first, one hand shooting out to stop Nick mid-step, pulling him back into the shadow of the alley mouth. [Lia: Fear (rare)]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(barely audible, urgent) [Expression: Fear (rare)] \"Don't move. Don't so much as breathe loudly.\""
      },
      {
        "type": "narration",
        "text": "Across the street, the woman in black pauses at the Guildhall's entrance — just for a moment, just long enough that both of them feel, with total and irrational certainty, that she already knows exactly how many people are hiding in this alley and precisely why. [Beni: Calm Composure]"
      }
    ],
    "choices": [
      {
        "id": "CH7_S5_N01-A",
        "label": "Stay perfectly still, trust Lia's instinct completely.",
        "target": "CH7_S5_N02A"
      },
      {
        "id": "CH7_S5_N01-B",
        "label": "Risk a longer look, trying to memorize every detail of her before she disappears inside.",
        "target": "CH7_S5_N02B"
      },
      {
        "id": "CH7_S5_N01-C",
        "label": "Ask Lia, in the barest whisper, if that's who you both think it is.",
        "target": "CH7_S5_N02C"
      }
    ],
    "nextId": "CH7_S5_N02"
  },
  {
    "id": "CH7_S5_N02",
    "chapter": 7,
    "scene": 5,
    "sceneTitle": "THE CONDUCTOR, GLIMPSED",
    "imageUrl": "/manus-storage/scene_05_beni_glimpsed_b835222c.png",
    "blocks": [
      {
        "type": "narration",
        "text": "The woman in black steps through the Guildhall's front doors without a backward glance, and the street exhales around her absence the way a room exhales when a held breath is finally allowed to leave it. [Beni: Calm Composure] Neither Nick nor Lia moves for a long moment afterward."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(finally, quietly, some of her usual composure fighting its way back into her voice) [Expression: Guarded Neutral, shaken underneath] \"That's her. That's the Conductor. In four years working under her, I saw her in person perhaps six times, and every single one of them, I remember exactly what I was afraid of losing that day.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(quiet, resolve settling into something harder, more focused than before) [Expression: Resolve] \"Then we make sure the next time either of us sees her, we're not the ones hiding in an alley.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "They leave the way they came, quickly and quietly, evidence and memory both heavier now than either of them expected to carry out of one night's work. Somewhere behind them, in a building that looks, from the street, like nothing more than an unremarkable guildhall, the woman who has shaped both of their lives without either of them choosing it has just walked back into her own domain, entirely unaware — or entirely unconcerned — that she was seen at all."
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 7]"
      },
      {
        "type": "narration",
        "text": "- Fixed outcomes regardless of choices: Nick and Lia infiltrate the Rookery's records vault using Erica's directions; they find the operational file proving Nick's report was deliberately falsified; Nick experiences his strongest flashback yet, fully confirming (to the player and to him) that Lia was the target and that he chose to let her go; Vivienne appears in person for the first time, confirms she deliberately preserved rather than destroyed his memory, and hints strongly that the full recovery is imminent; as they leave, they glimpse Beni (\"the Conductor\") in person for the first time, wordlessly, establishing her as a real, physically present threat rather than a rumor."
      },
      {
        "type": "narration",
        "text": "- This chapter fulfills the request to make Beni more palpable by giving her a full physical sighting — detailed visual presence, confirmed identity via Lia's dialogue, without giving her spoken dialogue yet. This preserves her design principle (felt before fully seen/heard) while significantly raising the stakes and tension ahead of Chapter 8's full revelation and Chapter 10's actual confrontation."
      },
      {
        "type": "narration",
        "text": "- Relationship flags planted this chapter:"
      },
      {
        "type": "narration",
        "text": "- Lia: Scene 3's flashback and Scene 4's aftermath mark the emotional turning point where dramatic irony finally resolves — she now knows, with total certainty, that Nick chose to save her. Her reaction is written to remain complex rather than simply relieved, per the Story Bible's instruction that Chapter 7 should leave her \"gratitude, suspicion, and old fear colliding at once.\""
      },
      {
        "type": "narration",
        "text": "- Vivienne: her line about someone once showing her \"a kindness like that\" (S4_N03, Option A) is a deliberately dangling thread — do not resolve it in Chapter 8, per her character design; it can seed a sequel or late-game revelation."
      },
      {
        "type": "narration",
        "text": "- Beni: this sighting should be referenced again in Chapters 9-10 — Lia's line about \"four years working under her\" and what she \"was afraid of losing\" each time is worth returning to for a possible late-game emotional beat about Lia's own history with Beni specifically."
      },
      {
        "type": "narration",
        "text": "- New lead carried into Chapter 8: Nick's memory is now confirmed to be on the verge of full return, per Vivienne's warning. The falsified report and the flashback together constitute the bulk of the \"truth,\" but Chapter 8 should deliver the emotional completion — Nick recounting it to Lia directly, in his own words, in the present, rather than through documents or visions."
      },
      {
        "type": "narration",
        "text": "- Visual reference boxes remain standalone art briefs, independent of dialogue. Scene 5 in particular is designed as a striking, self-contained image — likely a strong candidate for key art or a chapter-ending illustration."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet. Young Lia in the Scene 3 flashback uses the same base labels as present-day Lia — the age difference is a visual/costume distinction, not an expression one. Beni's tags in this chapter are limited to \"Calm Composure\" since she has no dialogue yet."
      }
    ],
    "choices": [],
    "nextId": "CH8_S1_N01"
  },
  {
    "id": "CH8_S1_N01",
    "chapter": 8,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT (THE FINAL MEMORY)",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_final_memory_86c28e4c.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Nick comes back to himself in his own apartment, in the present, gasping the same way he did after every fragment before this — except this time, there's nothing left to fragment. It's all there. All of it, whole, awful, and finally, completely his. [Nick: Shock / Disorientation]"
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "I remember everything."
      }
    ],
    "choices": [
      {
        "id": "CH8_S1_N01-A",
        "label": "Sit with the full weight of it alone for a while before doing anything else.",
        "target": "CH8_S1_N02"
      },
      {
        "id": "CH8_S1_N01-B",
        "label": "Go straight to Lia — she deserves to hear this the moment you have it, not after you've had time to compose yourself.",
        "target": "CH8_S1_N02"
      },
      {
        "id": "CH8_S1_N01-C",
        "label": "Write it down first, methodically, the way you've documented every other fragment — need the distance of process before you can say it aloud.",
        "target": "CH8_S1_N02"
      }
    ],
    "nextId": "CH8_S1_N02"
  },
  {
    "id": "CH8_S1_N02",
    "chapter": 8,
    "scene": 1,
    "sceneTitle": "NICK'S APARTMENT (THE FINAL MEMORY)",
    "imageUrl": "/manus-storage/scene_01_nicks_apartment_final_memory_86c28e4c.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "Whatever path he takes to get there, the destination is the same: he needs to tell her. Not through a document, not through a shared vision in a cold vault — in his own voice, plainly, the way she deserves to hear it."
      },
      {
        "type": "narration",
        "text": "[He finds her exactly where he somehow knew she'd be — the rooftop of the safehouse building, the one place she's mentioned before as somewhere she goes when she needs to see the whole city at once instead of just the part trying to kill her.]"
      },
      {
        "type": "narration",
        "text": "[Scene 1 ends. Transition to Scene 2.]"
      },
      {
        "type": "narration",
        "text": "Exterior, the hour just before true dawn, the flat rooftop of the safehouse building. The city spreads out below in shades of slate and fading violet, gas lamps still burning here and there against a sky just beginning to lighten at its eastern edge. Lia stands near the roof's low parapet wall, wrapped in her coat against the pre-dawn chill, looking out over the rooftops rather than at the door when Nick emerges. The framing should feel exposed and open after the claustrophobia of the vault and the apartment — the first genuinely open-sky scene in several chapters, symbolically apt for the moment the truth finally gets room to breathe. Palette: soft violet-grey transitioning to the first pale gold at the horizon, cool city tones below giving way to warmth above. Mood: the calm, suspended stillness of the hour before a day that's about to change everything."
      }
    ],
    "choices": [],
    "nextId": "CH8_S2_N01"
  },
  {
    "id": "CH8_S2_N01",
    "chapter": 8,
    "scene": 2,
    "sceneTitle": "THE ROOFTOP (THE TELLING)",
    "imageUrl": "/manus-storage/scene_02_rooftop_telling_3e75ff50.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Lia doesn't turn around right away, though she clearly hears the door. [Lia: Guarded Neutral]"
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "\"You have that look. The one from the vault, except worse — like you're not sure your own legs are going to hold you up for whatever you're about to say.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Restrained Grief] \"I remember all of it now. Everything.\""
      }
    ],
    "choices": [
      {
        "id": "CH8_S2_N01-A",
        "label": "Start from the beginning — the mission itself, methodically.",
        "target": "CH8_S2_N02A"
      },
      {
        "id": "CH8_S2_N01-B",
        "label": "Start from the end — the memory wipe, and work backward.",
        "target": "CH8_S2_N02B"
      },
      {
        "id": "CH8_S2_N01-C",
        "label": "Ask if she's ready to hear it before starting, giving her the choice of timing.",
        "target": "CH8_S2_N02C"
      }
    ],
    "nextId": "CH8_S2_N02"
  },
  {
    "id": "CH8_S2_N02",
    "chapter": 8,
    "scene": 2,
    "sceneTitle": "THE ROOFTOP (THE TELLING)",
    "imageUrl": "/manus-storage/scene_02_rooftop_telling_3e75ff50.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever order he tells it in, the full shape of it comes out eventually — the blackmail that forced him into the Rookery's service in the first place, the mission, the moment his arm wouldn't finish rising, the falsified report, the price Beni exacted once she suspected the truth, and Vivienne's quiet, costly act of mercy in the middle of following an order that would have erased him completely."
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(finishing, quiet, no defense in his voice, no plea for anything) [Expression: Restrained Grief] \"I'm not telling you this to be forgiven. I don't think forgiveness is really the shape of what either of us needs right now. I'm telling you because you asked me, back in that tenement stairwell, if I even knew what I was to you. I do now. I'm the man who was supposed to kill you, and instead spent a year not remembering that I loved you enough not to.\""
      },
      {
        "type": "narration",
        "text": "Same rooftop, the sky now noticeably lighter, the first true gold of sunrise beginning to touch the tallest rooftops of the city below. Lia has moved to sit on the low parapet wall, no longer facing away, her expression finally, fully unguarded — not resolved into any single clean emotion, but visibly holding several at once: relief, grief, old fear, something that might, eventually, become something warmer, though it isn't there yet, not fully. Nick stands nearby, giving her space without retreating from it. Palette: warming gold breaking through the last of the violet-grey, the city below slowly waking up around them, indifferent to the enormity of what just happened on this one rooftop. Mood: complicated, unresolved, hopeful without being simple — exactly the tone the story has been building toward since Chapter 5."
      }
    ],
    "choices": [
      {
        "id": "CH8_S2_N02-A",
        "label": "Let the silence sit — give her all the time she needs to respond, however long that takes.",
        "target": "CH8_S3_N01A"
      },
      {
        "id": "CH8_S2_N02-B",
        "label": "Add one more thing, gently — that you don't expect anything from her because of this.",
        "target": "CH8_S3_N01B"
      },
      {
        "id": "CH8_S2_N02-C",
        "label": "Ask, carefully, what she's feeling right now, rather than assuming.",
        "target": "CH8_S3_N01C"
      }
    ],
    "nextId": "CH8_S3_N01"
  },
  {
    "id": "CH8_S3_N01",
    "chapter": 8,
    "scene": 3,
    "sceneTitle": "ADRY'S RECKONING",
    "imageUrl": "/manus-storage/scene_03_rooftop_reckoning_f347302a.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(quiet, working through it out loud, not performing it) [Expression: Vulnerable / Unguarded] \"I spent a year hating a man who doesn't exist anymore. Or who never fully existed the way I built him in my head — a weapon with your face on it, sent to finish what they started. And the whole time, the actual truth was that you'd already saved me, and then paid for it by losing yourself entirely.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Restrained Grief] \"I know it's a lot to hold at once.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Raw Grief, layered with Vulnerable / Unguarded] \"It's not 'a lot.' It's everything. It's Adin, who I lost partly because of the same organization that did this to you. It's four years of my own life inside that place, learning to be exactly cold enough to survive it. It's you, standing here, who turns out to be the one person who ever chose me over what they wanted from him.\" A breath, unsteady. \"I don't know how to hold gratitude and grief and old fear all at the same time without one of them breaking. I've never had to before.\""
      }
    ],
    "choices": [
      {
        "id": "CH8_S3_N01-A",
        "label": "Tell her she doesn't have to resolve it tonight — some things take longer than one conversation.",
        "target": "CH8_S3_N02A"
      },
      {
        "id": "CH8_S3_N01-B",
        "label": "Share your own uncertainty — admit you don't fully know what you are to each other either, and that's alright.",
        "target": "CH8_S3_N02B"
      },
      {
        "id": "CH8_S3_N01-C",
        "label": "Simply move closer and offer your hand, wordlessly, letting her decide whether to take it.",
        "target": "CH8_S3_N02C"
      }
    ],
    "nextId": "CH8_S3_N02"
  },
  {
    "id": "CH8_S3_N02",
    "chapter": 8,
    "scene": 3,
    "sceneTitle": "ADRY'S RECKONING",
    "imageUrl": "/manus-storage/scene_03_rooftop_reckoning_f347302a.png",
    "blocks": [
      {
        "type": "narration",
        "text": "Whatever the exact shape of it, something settles between them on that rooftop — not resolution, not a clean ending to anything, but the specific, fragile peace of two people who have finally run out of lies to discover between them, even if they haven't yet figured out what to build in the space the lies used to occupy."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(watching the sunrise properly now, some of the old wariness still present but no longer aimed at him) [Expression: Reluctant Warmth, hardening into Quiet Resolve] \"The Conductor — Beni, if that name from Renner's fragment ever turns out to be real — she did this. To both of us, in different ways. Adin too, even if less directly.\" A pause, her voice hardening with something that isn't quite grief anymore, closer to resolve. \"I want to be done losing pieces of myself to her. I want that more than I want an answer to what you and I are.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Resolve] \"Then let's go take something back from her, instead of just surviving what she's taken.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(the ghost of something almost like a real smile) [Expression: Dry Almost-Smile] \"Now that — that, I can work with.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "The sun finishes climbing over the rooftops below them, indifferent and golden and entirely unbothered by the weight of the night just past. Somewhere out there, the Conductor is almost certainly already awake, already moving pieces on a board she still doesn't know two of them have started playing back against her. For the first time since this all began, that thought doesn't frighten Nick nearly as much as it used to."
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 8]"
      },
      {
        "type": "narration",
        "text": "- Fixed outcomes regardless of choices: Nick's memory fully returns, including the previously-missing piece — the memory-wipe procedure itself, Beni's cold justification for ordering it, and Vivienne's deliberate act of hiding rather than destroying his memory; Nick recounts the full truth to Lia directly, in his own words, without excuse or self-pity; Lia's reaction is written to remain genuinely complex — gratitude, grief over Adin, old fear, and the beginning of something warmer, all coexisting rather than resolving cleanly; the chapter ends with shared resolve to act against Beni rather than a romantic or platonic \"final answer\" to their relationship."
      },
      {
        "type": "narration",
        "text": "- This is the first chapter in which Beni speaks directly (within the flashback in Scene 1). Her lines are written to reinforce her core design: coherent, calm, never cruel for its own sake — her logic (\"an asset who chooses feeling over orders is not an asset\") should read as chillingly reasonable rather than cartoonishly villainous."
      },
      {
        "type": "narration",
        "text": "- Relationship flags planted this chapter:"
      },
      {
        "type": "narration",
        "text": "- Lia: this chapter is designed so that NONE of the choice branches resolve her relationship with Nick into a fixed romantic or purely platonic state. All three Scene 3 options (CH8_S3_N01 A/B/C) preserve ambiguity while still delivering real emotional intimacy — per the Story Bible's explicit instruction to leave room for player-shaped epilogue outcomes in Chapters 9-10."
      },
      {
        "type": "narration",
        "text": "- Vivienne: her motive remains deliberately unresolved. The line \"I'll leave the door unlocked, even if I can't tell you where it is yet\" (Scene 1) is a good candidate to echo in a sequel or in Vivienne's eventual \"thread left open\" status per the Story Bible's ending notes."
      },
      {
        "type": "narration",
        "text": "- Beni: now confirmed to have directly ordered the memory wipe out of cold institutional logic rather than personal cruelty — this should inform her portrayal in Chapters 9-10 as an antagonist the player can understand even while opposing her."
      },
      {
        "type": "narration",
        "text": "- Nick's memory thread: fully resolved this chapter, exactly per the Story Bible's chapter objective. No further memory-fragment mechanics are needed going forward; the character now operates from full self-knowledge."
      },
      {
        "type": "narration",
        "text": "- New lead carried into Chapter 9: the shift from personal revelation to collective action — Lia's closing line about wanting \"to take something back from her\" is the direct emotional bridge into Chapter 9's tactical planning and alliance-building."
      },
      {
        "type": "narration",
        "text": "- Visual reference boxes remain standalone art briefs, independent of dialogue. The rooftop sunrise in Scenes 2-3 is designed as a strong visual and emotional counterweight to the cold, enclosed spaces (vault, memory-wipe room) that dominate the earlier parts of this chapter."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet. Young Vivienne and Beni within the Scene 1 memory sequence use the same base labels as their present-day selves."
      }
    ],
    "choices": [],
    "nextId": "CH9_S1_N01"
  },
  {
    "id": "CH9_S1_N01",
    "chapter": 9,
    "scene": 1,
    "sceneTitle": "GASPAR'S CAFÉ, AFTER HOURS (PLANNING HUB)",
    "imageUrl": "/manus-storage/scene_01_gaspars_cafe_planning_12500421.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "(setting down a fresh pot, unasked, as he always does) [Expression: Weathered Calm] \"You two have the look of people about to do something extremely unwise.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(a ghost of dry humor, even now) [Expression: Dry Almost-Smile] \"Extremely necessary. The unwise part is optional, depending on how the next few weeks go.\""
      },
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "(a long look at both of them) [Expression: Quiet Sadness] \"I told you once, Nick, that I got out of that world by becoming unremarkable. I think I'm done being unremarkable, if you'll let an old man back into the parts of this he can still be useful for.\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S1_N01-A",
        "label": "Accept gratefully — ask what specifically he can offer.",
        "target": "CH9_S1_N02A"
      },
      {
        "id": "CH9_S1_N01-B",
        "label": "Express concern for his safety — try to talk him out of direct involvement.",
        "target": "CH9_S1_N02B"
      },
      {
        "id": "CH9_S1_N01-C",
        "label": "Ask why now — what finally changed his mind after so many years of staying out of it.",
        "target": "CH9_S1_N02C"
      }
    ],
    "nextId": "CH9_S1_N02"
  },
  {
    "id": "CH9_S1_N02",
    "chapter": 9,
    "scene": 1,
    "sceneTitle": "GASPAR'S CAFÉ, AFTER HOURS (PLANNING HUB)",
    "imageUrl": "/manus-storage/scene_01_gaspars_cafe_planning_12500421.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "[Expression: Protective Firmness] \"Here's what I can give you: a name inside the Guildhall's legitimate staff, someone who owes me enough to look the other way on the right night. And a warning, free of charge — the Conductor doesn't run that vault alone. There's a rotating guard, small, quiet, professional. You'll need more than two clever people and a good plan to get past it when it matters most.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Quiet Resolve] \"Then we get more than two people.\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S1_N02-A",
        "label": "List out loud who else might help — Erica, Doyle, Anton, Kurt — start the actual planning.",
        "target": "CH9_S1_N03A"
      },
      {
        "id": "CH9_S1_N02-B",
        "label": "Ask Gaspar directly if he thinks any of them can actually be trusted for something this dangerous.",
        "target": "CH9_S1_N03B"
      },
      {
        "id": "CH9_S1_N02-C",
        "label": "Take a moment to simply thank Gaspar, before moving to logistics.",
        "target": "CH9_S1_N03C"
      }
    ],
    "nextId": "CH9_S1_N03"
  },
  {
    "id": "CH9_S1_N03",
    "chapter": 9,
    "scene": 1,
    "sceneTitle": "GASPAR'S CAFÉ, AFTER HOURS (PLANNING HUB)",
    "imageUrl": "/manus-storage/scene_01_gaspars_cafe_planning_12500421.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "GASPAR",
        "text": "[Expression: Protective Firmness] \"Go. Do what you need to do. This door's open whenever you need somewhere that isn't trying to kill you for an hour or two.\""
      },
      {
        "type": "narration",
        "text": "[Scene 1 ends. Transition to Scene 2.]"
      },
      {
        "type": "narration",
        "text": "Interior, the following evening, a shuttered dressmaker's shop that Erica apparently has a key to, mannequins draped in dust sheets standing like silent witnesses around the room. Erica waits among them, more serious than either of her prior appearances, the playful performance largely absent tonight. A single lamp throws long shadows between the mannequins, giving the whole scene a slightly theatrical, uncanny quality. Palette: deep burgundy and dust-grey, a single warm lamp pool at the center. Mood: the price finally coming due, tension threaded through familiarity."
      }
    ],
    "choices": [],
    "nextId": "CH9_S2_N01"
  },
  {
    "id": "CH9_S2_N01",
    "chapter": 9,
    "scene": 2,
    "sceneTitle": "ERICA COLLECTS HER FAVOR",
    "imageUrl": "/manus-storage/scene_02_erica_dressmakers_shop_13f6374f.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "[Expression: Guarded Seriousness] \"I told you I'd collect eventually. Eventually is now.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Neutral / Guarded] \"I'm listening.\""
      },
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "[Expression: Guarded Seriousness] \"I need you to vouch for me. Publicly, if it comes to that — to Lia, to anyone else you're building this little coalition with. I need someone the Conductor's enemies actually trust to say, out loud, that I'm not still one of her assets.\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S2_N01-A",
        "label": "Ask directly if that's true — whether she still has ties to Beni's organization.",
        "target": "CH9_S2_N02A"
      },
      {
        "id": "CH9_S2_N01-B",
        "label": "Agree without further questions — trust the favor as promised, no conditions.",
        "target": "CH9_S2_N02B"
      },
      {
        "id": "CH9_S2_N01-C",
        "label": "Ask why she needs vouching for now specifically — what changed.",
        "target": "CH9_S2_N02C"
      }
    ],
    "nextId": "CH9_S2_N02"
  },
  {
    "id": "CH9_S2_N02",
    "chapter": 9,
    "scene": 2,
    "sceneTitle": "ERICA COLLECTS HER FAVOR",
    "imageUrl": "/manus-storage/scene_02_erica_dressmakers_shop_13f6374f.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "[Expression: Guarded Seriousness] \"In exchange — full accounting of the Conductor's inner circle. Names of the guard rotation at the Guildhall vault. The location of at least one place she actually sleeps, which took me the better part of three years to learn and cost me more than I'll ever tell you about.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"That's considerably more than a favor's worth.\""
      },
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "(a real, tired smile) [Expression: Vulnerable Crack] \"I know. Call it interest, accrued over a grudge I've been waiting a long time to finally spend properly.\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S2_N02-A",
        "label": "Accept the information and the terms as given, no further negotiation.",
        "target": "CH9_S2_N03A"
      },
      {
        "id": "CH9_S2_N02-B",
        "label": "Offer something extra in return, unprompted — access to Kurt's old files, as a gesture of good faith.",
        "target": "CH9_S2_N03B"
      },
      {
        "id": "CH9_S2_N02-C",
        "label": "Ask if she wants to be there, personally, when it finally happens.",
        "target": "CH9_S2_N03C"
      }
    ],
    "nextId": "CH9_S2_N03"
  },
  {
    "id": "CH9_S2_N03",
    "chapter": 9,
    "scene": 2,
    "sceneTitle": "ERICA COLLECTS HER FAVOR",
    "imageUrl": "/manus-storage/scene_02_erica_dressmakers_shop_13f6374f.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "(handing over a sealed envelope, considerably thicker than anything she's given him before) [Expression: Guarded Seriousness] \"Everything's in there. Use it well, Nick. And for what it's worth — whatever happens when this is over, I hope you two get to actually enjoy whatever you've built, instead of just surviving it.\""
      },
      {
        "type": "narration",
        "text": "[Scene 2 ends. Transition to Scene 3.]"
      },
      {
        "type": "narration",
        "text": "Interior, a cramped, cluttered private investigator's office — Doyle's own, considerably less glamorous than his tailored coat suggests, papers and unpaid bills mixed together on a battered desk. Doyle himself looks different tonight: less performative swagger, more genuine unease, a half-empty glass at his elbow that suggests he's been sitting with something uncomfortable for a while before Nick arrived. Dim evening light through a grimy window. Palette: dull browns and worn leather, a single desk lamp casting hard shadows that make Doyle look older and more tired than his usual polished bravado allows. Mood: pride quietly giving way to genuine fear, and something adjacent to respect neither man is fully ready to name."
      }
    ],
    "choices": [],
    "nextId": "CH9_S3_N01"
  },
  {
    "id": "CH9_S3_N01",
    "chapter": 9,
    "scene": 3,
    "sceneTitle": "MARCUS DOYLE, RECONSIDERED",
    "imageUrl": "/manus-storage/scene_03_doyles_office_888351dd.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "MARCUS DOYLE",
        "text": "(not looking up as Nick enters) [Expression: Tired Honesty] \"Before you say anything smug — yes, I asked you here. No, I'm not enjoying it.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"I wasn't going to be smug. Much.\""
      },
      {
        "type": "dialogue",
        "speaker": "MARCUS DOYLE",
        "text": "(a humorless huff) [Expression: Bravado Cracking] \"My client's shipping fraud case. Kept pulling threads, the way I do, because unlike you I actually enjoy getting paid for my work. Threads led somewhere considerably bigger than an insurance scam. I've been sitting on what I found for two days trying to decide if I'm imagining the scale of it.\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S3_N01-A",
        "label": "Ask him directly what he found.",
        "target": "CH9_S3_N02A"
      },
      {
        "id": "CH9_S3_N01-B",
        "label": "Reassure him first — tell him he's not imagining it, whatever it is.",
        "target": "CH9_S3_N02B"
      },
      {
        "id": "CH9_S3_N01-C",
        "label": "Needle him gently — point out this must be hard, admitting he needs help.",
        "target": "CH9_S3_N02C"
      }
    ],
    "nextId": "CH9_S3_N02"
  },
  {
    "id": "CH9_S3_N02",
    "chapter": 9,
    "scene": 3,
    "sceneTitle": "MARCUS DOYLE, RECONSIDERED",
    "imageUrl": "/manus-storage/scene_03_doyles_office_888351dd.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "MARCUS DOYLE",
        "text": "[Expression: Tired Honesty] \"Look. I don't like you. I want that on the record before I say the next part. But I've built a career on knowing when a fight's too big for one clever man working alone, and this — whatever this actually is — is that fight. So. What do you need, and what's it going to cost me?\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Neutral / Guarded] \"Honestly? Just what you're good at. Digging where other people can't or won't. And maybe not selling us out to the highest bidder, for once.\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S3_N02-A",
        "label": "Offer him something concrete in exchange — a cut of whatever credibility or reward comes from taking down the Rookery.",
        "target": "CH9_S3_N03A"
      },
      {
        "id": "CH9_S3_N02-B",
        "label": "Appeal to something less transactional — tell him plainly that people have already died, and ask if that matters to him.",
        "target": "CH9_S3_N03B"
      },
      {
        "id": "CH9_S3_N02-C",
        "label": "Keep it light — joke that this might be the first honest work he's done in years.",
        "target": "CH9_S3_N03C"
      }
    ],
    "nextId": "CH9_S3_N03"
  },
  {
    "id": "CH9_S3_N03",
    "chapter": 9,
    "scene": 3,
    "sceneTitle": "MARCUS DOYLE, RECONSIDERED",
    "imageUrl": "/manus-storage/scene_03_doyles_office_888351dd.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "MARCUS DOYLE",
        "text": "[Expression: Grudging Respect] \"Fine. I'm in. Reluctantly, and I reserve the right to complain about it constantly, but I'm in.\" He slides a folder across the desk — his own findings on the shipping fraud, now clearly worth far more than he originally realized. \"Don't make me regret this, Nick.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Dry Amusement] \"No promises. But I'll try.\""
      },
      {
        "type": "narration",
        "text": "[Scene 3 ends. Transition to Scene 4.]"
      },
      {
        "type": "narration",
        "text": "Exterior, late afternoon, the same garden pavilion from Chapter 2, though the season has visibly turned — leaves beginning to color at the edges, a slight chill in the air. Anton sits at his usual chess table, a different problem set up this time, though he still isn't playing anyone. Nick and Lia approach together. Anton looks up before they're fully within earshot — he always seems to know before anyone announces themselves. Palette: warm autumn tones replacing the earlier scene's muted spring green, the pavilion's peeling paint slightly more weathered. Mood: the quiet competence of someone who has been preparing for this exact conversation for longer than either visitor realizes."
      }
    ],
    "choices": [],
    "nextId": "CH9_S4_N01"
  },
  {
    "id": "CH9_S4_N01",
    "chapter": 9,
    "scene": 4,
    "sceneTitle": "ANTON'S INTELLIGENCE",
    "imageUrl": "/manus-storage/scene_04_anton_garden_intelligence_8f100f32.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "[Expression: Analytical / Older-Than-Years] \"You found her name. Or her title, at least. I heard 'Conductor' whispered twice this week alone, which is twice more than the usual, which tells me people are getting careless, which tells me something's finally moving.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "[Expression: Quiet Resolve] \"Something's finally moving.\""
      },
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "(setting a chess piece down with unusual precision) [Expression: Analytical / Older-Than-Years] \"Then you'll want to know how deep her protection actually goes, because I promise you it's deeper than 'a rich woman with a private guard.'\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S4_N01-A",
        "label": "Ask him to lay out the full political structure protecting her.",
        "target": "CH9_S4_N02A"
      },
      {
        "id": "CH9_S4_N01-B",
        "label": "Ask specifically who in city government is compromised.",
        "target": "CH9_S4_N02B"
      },
      {
        "id": "CH9_S4_N01-C",
        "label": "Ask how personally dangerous it is for Anton himself to be telling them this.",
        "target": "CH9_S4_N02C"
      }
    ],
    "nextId": "CH9_S4_N02"
  },
  {
    "id": "CH9_S4_N02",
    "chapter": 9,
    "scene": 4,
    "sceneTitle": "ANTON'S INTELLIGENCE",
    "imageUrl": "/manus-storage/scene_04_anton_garden_intelligence_8f100f32.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "[Expression: Analytical / Older-Than-Years] \"Here's what matters most: the Guildhall vault is well-guarded, but it's not where she actually holds power. That's a courtesy, a records room. The real center of it — where decisions get made, where she actually sleeps some nights, according to what I've heard — is a private residence on the hill district, protected as much by reputation and political favor as by any physical guard.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Focused / Investigator] \"So we're not just planning a break-in. We're planning to walk into a place everyone's been trained not to even look at too closely.\""
      },
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "[Expression: Analytical / Older-Than-Years] \"Precisely. Which means your biggest obstacle isn't going to be soldiers at a door. It's going to be convincing anyone who might help you that it's even possible to try.\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S4_N02-A",
        "label": "Ask Anton directly if he'll help further, closer to the actual confrontation.",
        "target": "CH9_S4_N03A"
      },
      {
        "id": "CH9_S4_N02-B",
        "label": "Thank him and insist he stay clear of the confrontation itself, for his own safety.",
        "target": "CH9_S4_N03B"
      },
      {
        "id": "CH9_S4_N02-C",
        "label": "Ask what he personally wants out of all this, if anything.",
        "target": "CH9_S4_N03C"
      }
    ],
    "nextId": "CH9_S4_N03"
  },
  {
    "id": "CH9_S4_N03",
    "chapter": 9,
    "scene": 4,
    "sceneTitle": "ANTON'S INTELLIGENCE",
    "imageUrl": "/manus-storage/scene_04_anton_garden_intelligence_8f100f32.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ANTON",
        "text": "(returning his attention to the chess problem, the conversation visibly closing on his terms, as always) [Expression: Shy / Reserved] \"Go. Plan well. And Mr. Nick — try not to become a story I have to explain to the next person who asks me about ravens and broken circles.\""
      },
      {
        "type": "narration",
        "text": "[Scene 4 ends. Transition to Scene 5.]"
      },
      {
        "type": "narration",
        "text": "Interior, early evening, the precinct once more, though the framing this time should feel different from every prior visit — less institutional dread, more like visiting people who've quietly become something like found family across the story's course. Kurt's desk and Hiller's small side office are close enough that this scene can move fluidly between both of them without a full location change — perhaps a shared moment in the precinct's small break room, an unofficial space where rank matters less. Warm desk-lamp light against the familiar cold institutional walls, now feeling less oppressive, more simply worn and lived-in. Palette: warm amber pooling against the same cold green-grey backdrop as always, the contrast now feeling companionable rather than adversarial. Mood: quiet, earned closure among people who started this story deeply uneasy with each other."
      }
    ],
    "choices": [],
    "nextId": "CH9_S5_N01"
  },
  {
    "id": "CH9_S5_N01",
    "chapter": 9,
    "scene": 5,
    "sceneTitle": "THE PRECINCT, ONE LAST TIME (KURT & HILLER)",
    "imageUrl": "/manus-storage/scene_05_precinct_closure_e286d083.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(already pouring two cups of genuinely terrible precinct coffee) [Expression: Dry Sarcasm] \"So. You're actually going to do it. Walk into the hill district and take a swing at a woman who's had half the city's power structure paid off for longer than either of us has been alive.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Resolve] \"That's the plan, yes.\""
      },
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(handing him a cup) [Expression: Firm Authority] \"I can't help you with that part. Officially, anyway. Unofficially—\" (she slides a small, folded map across the break room table) \"—here's every known police blind spot in the hill district, current as of this month's patrol schedule. Don't ask how I know. Don't tell anyone I gave it to you.\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S5_N01-A",
        "label": "Thank her sincerely, acknowledging how much risk this represents for her.",
        "target": "CH9_S5_N02A"
      },
      {
        "id": "CH9_S5_N01-B",
        "label": "Ask if she's finally forgiven the version of him from before the memory loss.",
        "target": "CH9_S5_N02B"
      },
      {
        "id": "CH9_S5_N01-C",
        "label": "Offer, gently, to keep her name entirely out of it no matter what happens.",
        "target": "CH9_S5_N02C"
      }
    ],
    "nextId": "CH9_S5_N02"
  },
  {
    "id": "CH9_S5_N02",
    "chapter": 9,
    "scene": 5,
    "sceneTitle": "THE PRECINCT, ONE LAST TIME (KURT & HILLER)",
    "imageUrl": "/manus-storage/scene_05_precinct_closure_e286d083.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "(appearing in the doorway with his usual unhurried timing, holding a small case of medical supplies) [Expression: Deadpan Neutral] \"I heard 'walking into the hill district to fight a shadow government' through the wall. Bring these. Field dressings, something for pain that won't slow you down too badly, and a very small, very illegal bottle of something that'll keep a wound from turning septic for a day or two if I'm not around to properly treat it.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Vulnerable / Open] \"Thank you, Hiller.\""
      },
      {
        "type": "dialogue",
        "speaker": "HILLER",
        "text": "[Expression: Unexpected Warmth] \"Don't thank me. Just don't end up on my table. I've grown unreasonably attached to both of you being alive, which is professionally inconvenient given my usual line of work.\""
      }
    ],
    "choices": [
      {
        "id": "CH9_S5_N02-A",
        "label": "Ask him, half-joking, if that's the closest thing to sentiment he's capable of.",
        "target": "CH9_S5_N03A"
      },
      {
        "id": "CH9_S5_N02-B",
        "label": "Take the moment seriously — thank him for everything since Chapter 1.",
        "target": "CH9_S5_N03B"
      },
      {
        "id": "CH9_S5_N02-C",
        "label": "Match his dry humor — promise to at least die somewhere with better lighting for his sake.",
        "target": "CH9_S5_N03C"
      }
    ],
    "nextId": "CH9_S5_N03"
  },
  {
    "id": "CH9_S5_N03",
    "chapter": 9,
    "scene": 5,
    "sceneTitle": "THE PRECINCT, ONE LAST TIME (KURT & HILLER)",
    "imageUrl": "/manus-storage/scene_05_precinct_closure_e286d083.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "KURT",
        "text": "(as Nick turns to leave) \"Nick.\" (He turns back.) [Expression: Vulnerable Honesty] \"Whatever happens up on that hill — you already proved the thing that mattered most, a long time before any of this planning started. Don't forget that, if it gets bad up there.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Resolve] \"I won't.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "He steps out into the cooling evening with a map of blind spots, a small case of illegal medical supplies, and the specific, steadying warmth of having people — actual people, not just leads and evidence — standing behind him for the first time in longer than he can remember, in every sense of that phrase."
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 9]"
      },
      {
        "type": "narration",
        "text": "- Fixed outcomes regardless of choices: Gaspar commits his old Rookery-adjacent connections and warns of the vault's guard rotation; Erica collects her favor (vouching for her loyalty) in exchange for the most valuable intelligence yet, including Beni's private residence; Marcus Doyle reluctantly joins the coalition after independently discovering the scale of the Rookery's operations; Anton reveals the true center of Beni's power is a private hill-district residence, not the Guildhall vault, and provides the political context needed for Chapter 10; Kurt and Hiller each provide final practical support and a genuine emotional closing beat."
      },
      {
        "type": "narration",
        "text": "- This chapter is designed to give every major supporting character a satisfying, distinct closing beat before Chapter 10's climax, per the Story Bible's explicit chapter objective. Recommend treating each character's strongest emotional branch (noted below) as a good default for any \"canonical\" playthrough summary, though all branches are written to preserve the same core plot beats."
      },
      {
        "type": "narration",
        "text": "- Gaspar: Option C in CH9_S1_N01 (his reason for finally getting involved) is the richest emotional payoff."
      },
      {
        "type": "narration",
        "text": "- Erica: Option C in CH9_S2_N02 (wanting to be present at the confrontation) plants the strongest personal stake for her in Chapter 10."
      },
      {
        "type": "narration",
        "text": "- Marcus Doyle: Option B in CH9_S3_N02 (admitting Adin's and others' deaths matter to him) is the deepest characterization beat available for him in the entire story."
      },
      {
        "type": "narration",
        "text": "- Anton: Option C in CH9_S4_N02 (his stated wish for a city where kids like him don't have to become what he's become) is the single most important line for his character across all nine chapters so far."
      },
      {
        "type": "narration",
        "text": "- Kurt: Option B in CH9_S5_N01 (explicit forgiveness/acceptance of present-day Nick) directly resolves the grievance thread that opened all the way back in Chapter 1."
      },
      {
        "type": "narration",
        "text": "- Hiller: all three branches are roughly equal in weight — this is a lighter, more purely warm beat by design, a moment of levity before the climax."
      },
      {
        "type": "narration",
        "text": "- New leads carried into Chapter 10: Beni's private hill-district residence is now the confirmed location for the climax, replacing the Guildhall vault as the primary objective; the coalition now includes Nick, Lia, Erica, Marcus Doyle, and remote support from Gaspar and Anton, with Kurt and Hiller providing off-screen institutional and medical support."
      },
      {
        "type": "narration",
        "text": "- Nick's memory thread: no further developments this chapter, per the Story Bible — Nick now operates from full self-knowledge, and this chapter's focus is entirely tactical and relational."
      },
      {
        "type": "narration",
        "text": "- Visual reference boxes remain standalone art briefs, independent of dialogue."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet."
      }
    ],
    "choices": [],
    "nextId": "CH10_S1_N01"
  },
  {
    "id": "CH10_S1_N01",
    "chapter": 10,
    "scene": 1,
    "sceneTitle": "THE APPROACH (HILL DISTRICT, NIGHT)",
    "imageUrl": "/manus-storage/scene_01_hill_residence_approach_e3858f56.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "(low, checking a small pocket watch) [Expression: Focused, tactical] \"Guard rotation shifts in four minutes. That's our window for the side entrance.\""
      },
      {
        "type": "dialogue",
        "speaker": "MARCUS DOYLE",
        "text": "(quietly, to no one in particular) [Expression: Genuine Fear, controlled] \"I want it on record that I am extremely aware this is insane.\""
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(a ghost of dry humor, even now) [Expression: Dry Almost-Smile] \"Duly noted. Insane and necessary aren't mutually exclusive.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(checking the small case Hiller gave him one last time) [Expression: Resolve] \"Everyone remembers the plan. We're not here to raze the place. We're here for evidence, for her, and to walk back out again — in that order of priority, not the reverse.\""
      }
    ],
    "choices": [
      {
        "id": "CH10_S1_N01-A",
        "label": "Take a moment before moving — check in with Lia directly, privately, before it starts.",
        "target": "CH10_S1_N02A"
      },
      {
        "id": "CH10_S1_N01-B",
        "label": "Stay fully focused on the tactical plan — no personal moment, straight to business.",
        "target": "CH10_S1_N02B"
      },
      {
        "id": "CH10_S1_N01-C",
        "label": "Offer a brief word of thanks to the whole group before moving in.",
        "target": "CH10_S1_N02C"
      }
    ],
    "nextId": "CH10_S1_N02"
  },
  {
    "id": "CH10_S1_N02",
    "chapter": 10,
    "scene": 1,
    "sceneTitle": "THE APPROACH (HILL DISTRICT, NIGHT)",
    "imageUrl": "/manus-storage/scene_01_hill_residence_approach_e3858f56.png",
    "blocks": [
      {
        "type": "narration",
        "text": "The window opens exactly when Erica said it would. They move."
      },
      {
        "type": "narration",
        "text": "[FIXED — Doyle peels off toward the front gate to create a documented, deniable disturbance that will pull the outer guards' attention for the ten minutes that matter most. Erica leads Nick and Lia to the side entrance, her three years of hard-won knowledge of this house proving, finally, worth every secret it cost her.]"
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "Inside, the house is quiet in the specific way of a place built for someone who has never once needed to raise her voice to be obeyed. They move through it fast, low, and silent — until the last door, at the end of a long, dark hallway, opens on its own before any of them touch it."
      },
      {
        "type": "narration",
        "text": "[Scene 1 ends. Transition to Scene 2.]"
      },
      {
        "type": "narration",
        "text": "Interior, a private study, the room Beni clearly spends most of her real time in rather than performs in — floor-to-ceiling shelves, an elegant desk, a fire burning low in the hearth. She is already seated, unhurried, a glass of dark wine untouched at her elbow, dressed exactly as she was on the street in Chapter 7 — severe, black, precisely composed. She does not look surprised to see them. If anything, she looks like she's been waiting, possibly for hours. Warm firelight against deep shadow, a room that reads as both beautiful and quietly menacing — no visible weapons or guards in this immediate space, because she has never needed either to control a room. Palette: deep burgundy and gold firelight against near-black shadow, Beni's stark black silhouette the only truly cold element in an otherwise warm-toned frame. Mood: the calm, inevitable center of the entire story finally, fully arrived at."
      }
    ],
    "choices": [],
    "nextId": "CH10_S2_N01"
  },
  {
    "id": "CH10_S2_N01",
    "chapter": 10,
    "scene": 2,
    "sceneTitle": "THE CONFRONTATION (BENI)",
    "imageUrl": "/manus-storage/scene_02_beni_study_confrontation_38fc6a97.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "BENI",
        "text": "(not looking up immediately from the book in her hands) [Expression: Calm Composure] \"You're later than I expected, given how long you've had the pieces. I'll admit, I'm almost disappointed — I'd hoped for a more interesting Tuesday.\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "[Expression: Barely Controlled Anger] \"You knew we were coming.\""
      },
      {
        "type": "dialogue",
        "speaker": "BENI",
        "text": "(finally setting the book down, meeting his eyes with total, unhurried calm) [Expression: Calm Composure] \"I know most things that happen inside my own city, Nick. That's rather the point of the work I do.\" Her gaze shifts to Lia, something almost fond in it, in a way that's more unsettling than open hostility would be. [Expression: Cold Amusement] \"Hello, Lia. You've gotten better at surviving me. I'm almost proud.\""
      }
    ],
    "choices": [
      {
        "id": "CH10_S2_N01-A",
        "label": "Respond with anger — confront her directly about Adin, about everyone she's hurt.",
        "target": "CH10_S2_N02A"
      },
      {
        "id": "CH10_S2_N01-B",
        "label": "Stay coldly controlled — refuse to give her the emotional reaction she seems to expect.",
        "target": "CH10_S2_N02B"
      },
      {
        "id": "CH10_S2_N01-C",
        "label": "Let Lia respond first — this is, in many ways, more her confrontation than his.",
        "target": "CH10_S2_N02C"
      }
    ],
    "nextId": "CH10_S2_N02"
  },
  {
    "id": "CH10_S2_N02",
    "chapter": 10,
    "scene": 2,
    "sceneTitle": "THE CONFRONTATION (BENI)",
    "imageUrl": "/manus-storage/scene_02_beni_study_confrontation_38fc6a97.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "BENI",
        "text": "(rising, unhurried, moving to stand before the fire, her back partly to them — a display of confidence rather than carelessness) [Expression: Persuasive Intensity] \"Let me tell you what you think you're here to hear, and then let me tell you the truth, because I find I owe you both at least that much for how far you've come to have this conversation with me.\""
      },
      {
        "type": "narration",
        "text": "\"You think I'm a monster who enjoys what she's built. I'm not. I am a woman who looked at a city that would have devoured itself thirty years ago without someone willing to make the choices no council, no magistrate, no honest officer would ever have the stomach to make. I have spent every year since balancing a ledger that has no clean entries in it, only necessary ones. Nick — I ordered your mind taken apart because a compromised asset with real feelings is a hole in a wall that eventually lets the whole structure fall. Lia — I let you be sacrificed because the alternative, at the time, would have exposed operations that protect considerably more people than it would have saved. I don't ask you to forgive any of it. I ask you to understand that I would very likely make the same choices again, and sleep exactly as well as I do now.\""
      }
    ],
    "choices": [
      {
        "id": "CH10_S2_N02-A",
        "label": "Argue back directly — reject her logic, insist there was always another way.",
        "target": "CH10_S2_N03A"
      },
      {
        "id": "CH10_S2_N02-B",
        "label": "Acknowledge the coherence of her reasoning without accepting it — the harder, more complicated response.",
        "target": "CH10_S2_N03B"
      },
      {
        "id": "CH10_S2_N02-C",
        "label": "Refuse to engage the philosophy at all — pivot straight to ending this, here, now.",
        "target": "CH10_S2_N03C"
      }
    ],
    "nextId": "CH10_S2_N03"
  },
  {
    "id": "CH10_S2_N03",
    "chapter": 10,
    "scene": 2,
    "sceneTitle": "THE CONFRONTATION (BENI)",
    "imageUrl": "/manus-storage/scene_02_beni_study_confrontation_38fc6a97.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "BENI",
        "text": "(setting down her wine glass with deliberate, unhurried finality) [Expression: Calm Composure] \"Well. I did offer you the truth. What you do with it is, as ever, entirely your own choice to make — which is, I promise you, more courtesy than this organization usually extends to anyone.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — A concealed alarm, or a guard's shout from elsewhere in the house, or simply Beni's own hand moving toward a drawer — whatever the specific trigger, the confrontation turns physical. It's fast, tense, and genuinely dangerous; Beni fights (or evades) with the same controlled, unhurried competence she's shown in every other part of this scene, clearly capable of real violence even now, even cornered.] [Beni: Controlled Anger, in motion]"
      },
      {
        "type": "narration",
        "text": "[No further choices here — let this beat play out as a tense, kinetic sequence rather than a dialogue tree, ending with Beni forced back toward a side door, a way out she's clearly planned in advance.]"
      },
      {
        "type": "narration",
        "text": "[Scene 2 ends. Transition to Scene 3.]"
      },
      {
        "type": "narration",
        "text": "Exterior, moments later, a narrow stone terrace at the rear of the residence, built out over the hill's steep drop toward the harbor cliffs far below — decorative, elegant, and never designed to survive a fight. Beni is already a retreating shape near the terrace's far stair; Nick and Lia pursue as far as the threshold, Erica and Doyle close behind with the evidence satchels. A last, desperate move from one of Beni's remaining guards — a shot, a blade, a shoved section of old balustrade — turns the terrace into the most dangerous ground of the entire night. Thick fog rolls up from the cliffs below, swallowing the drop into total, featureless white-grey nothing, so that no one on the terrace can see how far down \"down\" actually is. Palette: cold moon-silver fading immediately into opaque fog-white at the terrace edge — the drop itself should be rendered as a visual void, not a visible landing point, reinforcing the uncertainty of what happens to anyone who goes over it. Mood: the single most dangerous, chaotic moment in the entire story — controlled tension breaking into real, irreversible catastrophe."
      }
    ],
    "choices": [],
    "nextId": "CH10_S3_N01"
  },
  {
    "id": "CH10_S3_N01",
    "chapter": 10,
    "scene": 3,
    "sceneTitle": "THE FALL (THE RETREAT TURNS TO TRAGEDY)",
    "imageUrl": "/manus-storage/scene_03_fog_terrace_fall_526d50f3.png",
    "blocks": [
      {
        "type": "narration",
        "text": "It happens too fast for either of them to fully process in the moment. A guard Nick hasn't accounted for lunges from the terrace shadows, blade first, aimed at his exposed side — and Lia is already moving, already between them, before the thought finishes forming in either of their minds. [Lia: Resolve, fast]"
      },
      {
        "type": "narration",
        "text": "The blade catches her instead. Not fatally — not on its own. But the impact staggers her back, hard, into the terrace's old stone balustrade, and the balustrade — weathered, unmaintained, never built to take a grown woman's full weight at speed — simply isn't there anymore when she needs it to be."
      },
      {
        "type": "dialogue",
        "speaker": "ADRY",
        "text": "(a single, sharp sound, more surprise than pain) [Expression: Shock / Disorientation] \"Nick—\""
      }
    ],
    "choices": [
      {
        "id": "CH10_S3_N01-A",
        "label": "Lunge for her hand immediately, without thinking.",
        "target": "CH10_S3_N02A"
      },
      {
        "id": "CH10_S3_N01-B",
        "label": "Try to grab her coat, her arm, anything within reach.",
        "target": "CH10_S3_N02B"
      },
      {
        "id": "CH10_S3_N01-C",
        "label": "Shout her name, already moving, the world narrowing to just this one instant.",
        "target": "CH10_S3_N02C"
      }
    ],
    "nextId": "CH10_S3_N02"
  },
  {
    "id": "CH10_S3_N02",
    "chapter": 10,
    "scene": 3,
    "sceneTitle": "THE FALL (THE RETREAT TURNS TO TRAGEDY)",
    "imageUrl": "/manus-storage/scene_03_fog_terrace_fall_526d50f3.png",
    "blocks": [
      {
        "type": "narration",
        "text": "She goes over the edge, and the fog takes her — not a scream, not for long, just a rush of displaced air and then nothing, no sound of impact, no sign at all, the white-grey nothing closing back over the space where she was standing as though it had never held her at all."
      },
      {
        "type": "narration",
        "text": "Nick is at the broken balustrade before he's aware of deciding to move, staring down into fog that gives back absolutely nothing — no shape, no sound, no answer. Erica has to physically pull him back from the edge before his own balance goes the same way hers did. [Nick: Shock / Disorientation, breaking toward Raw Grief]"
      },
      {
        "type": "dialogue",
        "speaker": "ERICA",
        "text": "(her voice cracking, uncharacteristically, entirely unguarded) [Expression: Vulnerable Crack] \"Nick — Nick, we have to move, there are more of them coming, we have to—\""
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(hoarse, barely present, still staring into the fog) [Expression: Shock / Disorientation] \"She's down there. She's still down there, we need to—\""
      },
      {
        "type": "dialogue",
        "speaker": "MARCUS DOYLE",
        "text": "(grim, already scanning the cliff face for any possible route down, finding none in the dark and fog) [Expression: Tired Honesty] \"There's no way down from here. Not tonight. Not like this.\" A beat, quieter, almost gentle for a man who has never once been gentle in this story. \"I'm sorry.\""
      },
      {
        "type": "narration",
        "text": "[FIXED — They are forced to retreat, Nick physically dragged from the terrace by Erica and Doyle, evidence in hand, a hole where the rest of him used to be. The drop is a known local hazard — sheer rock, fast tidal currents at the base, a fall survived by almost no one in the city's records. Nobody on that terrace believes, in that moment, that anybody could live through it.] [Nick: Raw Grief]"
      },
      {
        "type": "narration",
        "text": "[Scene 3 ends. Transition to Scene 4.]"
      },
      {
        "type": "narration",
        "text": "Exterior, a week later, the same quiet overlook above the harbor that was meant to be the site of a hopeful ending — the visual echo is intentional and should feel quietly devastating rather than simply repeated. Fog still crawls along the water below every morning, indifferent. Nick stands alone at the overlook's edge, changed — the specific stillness of grief rather than the earlier stillness of peace. Far below, at the very edge of visibility, barely worth noticing unless the viewer is looking for it, something pale drifts against the rocks at the base of the distant cliffs — driftwood, most likely, or a trick of the fog and morning light. The framing should leave this genuinely ambiguous, not confirmed as anything. Palette: the same soft dawn gold and blue as originally planned for this location, now feeling hollow rather than peaceful — beauty the scene can no longer fully deliver on. Mood: grief given room to exist without being rushed toward resolution, with one small, deniable thread of possibility left deliberately dangling at the very edge of the frame."
      }
    ],
    "choices": [],
    "nextId": "CH10_S4_N01"
  },
  {
    "id": "CH10_S4_N01",
    "chapter": 10,
    "scene": 4,
    "sceneTitle": "EPILOGUE (WHAT NICK CARRIES)",
    "imageUrl": "/manus-storage/scene_04_harbor_overlook_epilogue_17c28853.png",
    "blocks": [
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "A week passes. The story that breaks in the papers is messy, incomplete, and — thanks to Anton's careful information and Kurt's quiet institutional pressure — considerably more damaging to the Rookery's political shelter than anyone expected. Three council seats change hands under a cloud. The Guildhall vault is seized and catalogued by investigators who have no idea what they've actually found. Beni herself is never located. The wider organization goes quiet, wounded, and very far from finished."
      },
      {
        "type": "narration",
        "text": "They never find a body. The harbor authority calls off the search after four days, citing the currents, the rocks, the simple mathematics of how long a person can survive cold water and a fall from that height. Nick doesn't accept the mathematics. He goes to the overlook anyway, most mornings, because it's the place she once told him she went to see the whole city at once, instead of just the part trying to kill her, and because some stubborn, undocumented part of him refuses to file her under \"closed.\" [Nick: Restrained Grief, worn thin]"
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(quiet, to the fog, to the harbor, to no one who can answer) [Expression: Quiet Resolve, grief underneath] \"I'm not done looking. I don't care what the currents supposedly did. I'm not done.\""
      },
      {
        "type": "dialogue",
        "speaker": "NARRATION",
        "text": "Erica stands with him some mornings, saying nothing, which is its own kind of loyalty. [Erica: Guarded Seriousness, softened by grief] Doyle has quietly, without ever admitting it aloud, started asking around the harbor district for anyone who might have pulled a stranger from the water in the last week. Kurt has left the search classification open on the official record, against her supervisor's direct instruction, for reasons she hasn't explained to anyone, least of all herself. Gaspar simply keeps a second cup poured every morning the café opens, and doesn't say why. [Gaspar: Quiet Sadness]"
      },
      {
        "type": "narration",
        "text": "Far below, at the very edge of where the fog meets the rocks, something pale shifts against the tideline — there and gone, the kind of detail a grieving mind invents as easily as it might genuinely see. Nick doesn't look away from it quite fast enough to convince himself it was nothing."
      },
      {
        "type": "dialogue",
        "speaker": "NICK",
        "text": "(barely a whisper, more hope than certainty, more question than statement) [Expression: Vulnerable / Open, fragile] \"...Lia?\""
      },
      {
        "type": "narration",
        "text": "The fog doesn't answer. It never does, not from this distance, not yet."
      },
      {
        "type": "narration",
        "text": "[FIXED — END OF CHAPTER 10]"
      },
      {
        "type": "narration",
        "text": "[Continued in the next installment.]"
      },
      {
        "type": "narration",
        "text": "- Fixed outcomes regardless of choices: The coalition successfully infiltrates Beni's residence; the confrontation delivers Beni's full ideological monologue, written to remain coherent and unsettlingly persuasive rather than cartoonish, per her core design; during the escape, Lia is wounded protecting Nick and falls from the terrace into fog-covered cliffs and water far below; no body is recovered, and every character in the story genuinely believes, based on the physical circumstances, that she could not have survived — while the epilogue leaves one small, deliberately ambiguous visual thread suggesting otherwise, to be confirmed or resolved in a future installment; Beni escapes and remains at large; the coalition still secures enough evidence to dismantle this specific operation, so the mission itself is not a total loss even though it costs Nick the person he cares most about."
      },
      {
        "type": "narration",
        "text": "- This chapter no longer uses the three-branch relationship epilogue. The player-choice branches in Scenes 1-3 now affect only the emotional texture of how Nick reacts in the moment — all converge on the same fixed, devastating outcome. The accumulated Nick-Lia warmth built across Chapters 1-9 now pays off not as a choice of ending, but as the emotional weight of exactly how much the fall costs Nick to witness, regardless of path taken."
      },
      {
        "type": "narration",
        "text": "- Beni's monologue in Scene 2 is unchanged from the original design and remains the most important piece of writing for her character — coherent, persuasive, never cartoonish."
      },
      {
        "type": "narration",
        "text": "- The ambiguous survival hint in Scene 4 is intentionally deniable. It should read, on a first playthrough, as grief playing tricks on Nick's perception — nothing more. Only in hindsight, or in a sequel, should it be confirmed as real. Recommend keeping this restrained in tone rather than a clear cliffhanger sting, consistent with the story's overall commitment to avoiding melodrama."
      },
      {
        "type": "narration",
        "text": "- Relationship flags paying off this chapter: Every accumulated Nick-Lia warmth flag from Chapters 1-9 now directly intensifies the grief in Scene 4 rather than selecting an ending variant. Erica, Doyle, Gaspar, and Kurt each get a small, quiet grief-adjacent beat in the epilogue's closing narration, honoring their Chapter 9 closing beats without needing full additional scenes."
      },
      {
        "type": "narration",
        "text": "- Deliberately unresolved threads, per the Story Bible's design, now include: Beni's survival and continued threat; the wider Rookery organization, wounded but intact; Vivienne's motive, whereabouts, and future role; and, newly, Lia's true fate — the central hook for the next installment."
      },
      {
        "type": "narration",
        "text": "- This concludes the ten-chapter choice-based script, ending on a deliberate cliffhanger rather than a closed resolution, per the requested revision."
      },
      {
        "type": "narration",
        "text": "- Expression tags reference the standalone Character Expression Reference Sheet. Note that Nick's \"Fear\" tag in Scene 3 (reaching for Lia) is a rare, one-time use of an expression not otherwise catalogued for him on the sheet — his profile is dominated by controlled emotion, making this specific instant of raw fear a deliberate, notable exception worth calling out to an artist."
      }
    ],
    "choices": [],
    "nextId": null
  }
];

function displayLia(value: string) {
  return value
    .replace(/\bAdry's\b/gi, "Lia's")
    .replace(/\bAdry\b/gi, "Lia")
    .replace(/آدری/g, "لیا");
}

export const storyNodes: StoryNode[] = rawStoryNodes.map(node => ({
  ...node,
  sceneTitle: displayLia(node.sceneTitle),
  blocks: node.blocks.map(block => ({ ...block, speaker: block.speaker ? displayLia(block.speaker) : undefined, text: displayLia(block.text) })),
  choices: node.choices.map(choice => ({ ...choice, label: displayLia(choice.label) })),
}));
export const storyStartId = storyNodes[0]?.id ?? '';
export const storyNodeById = Object.fromEntries(storyNodes.map(node => [node.id, node]));
export const storyChapterCount = 10;
