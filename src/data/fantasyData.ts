import { Character, CharacterClass, CharacterStats } from '../types/character';

// Class Portrait Images
export const CLASS_PORTRAITS: Record<CharacterClass, string> = {
  Mage: '/src/assets/images/char_mage_1793129101897.jpg',
  Rogue: '/src/assets/images/char_rogue_1793129102234.jpg',
  Warrior: '/src/assets/images/char_warrior_1793129102483.jpg',
  Archer: '/src/assets/images/char_archer_1793129103467.jpg',
  Paladin: '/src/assets/images/char_paladin_1793129103921.jpg',
  Necromancer: '/src/assets/images/char_necromancer_1793129105599.jpg',
};

export const CLASS_STYLES: Record<CharacterClass, {
  primary: string;
  secondary: string;
  glow: string;
  border: string;
  badge: string;
  badgeText: string;
}> = {
  Mage: {
    primary: 'from-blue-600 to-indigo-700',
    secondary: 'text-blue-400',
    glow: 'rgba(59, 130, 246, 0.25)',
    border: 'border-blue-500/30',
    badge: 'bg-blue-950/80 border-blue-500/40 text-blue-300',
    badgeText: 'text-blue-400',
  },
  Rogue: {
    primary: 'from-amber-600 to-yellow-800',
    secondary: 'text-amber-400',
    glow: 'rgba(217, 119, 6, 0.25)',
    border: 'border-amber-500/30',
    badge: 'bg-amber-950/80 border-amber-500/40 text-amber-300',
    badgeText: 'text-amber-400',
  },
  Warrior: {
    primary: 'from-red-600 to-rose-800',
    secondary: 'text-rose-400',
    glow: 'rgba(239, 68, 68, 0.25)',
    border: 'border-rose-500/30',
    badge: 'bg-rose-950/80 border-rose-500/40 text-rose-300',
    badgeText: 'text-rose-400',
  },
  Archer: {
    primary: 'from-emerald-600 to-teal-800',
    secondary: 'text-emerald-400',
    glow: 'rgba(16, 185, 129, 0.25)',
    border: 'border-emerald-500/30',
    badge: 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300',
    badgeText: 'text-emerald-400',
  },
  Paladin: {
    primary: 'from-amber-400 to-yellow-600',
    secondary: 'text-yellow-300',
    glow: 'rgba(234, 179, 8, 0.25)',
    border: 'border-yellow-500/30',
    badge: 'bg-yellow-950/80 border-yellow-500/40 text-yellow-300',
    badgeText: 'text-yellow-400',
  },
  Necromancer: {
    primary: 'from-emerald-500 to-purple-900',
    secondary: 'text-teal-300',
    glow: 'rgba(20, 184, 166, 0.25)',
    border: 'border-teal-500/30',
    badge: 'bg-teal-950/80 border-teal-500/40 text-teal-300',
    badgeText: 'text-teal-400',
  },
};

// Rich fantasy name generator pools
const FIRST_NAMES = [
  'Aeloria', 'Theron', 'Kaelen', 'Lyra', 'Valerius', 'Morvath', 'Gideon',
  'Seraphina', 'Brynna', 'Corvus', 'Zephyra', 'Alden', 'Cassian', 'Vespera',
  'Thalor', 'Fenwick', 'Rowan', 'Isolde', 'Kieran', 'Malakor', 'Aurelia',
  'Darien', 'Vaelen', 'Elora', 'Gareth', 'Selene', 'Torin', 'Nyx', 'Branoc',
  'Cynthia', 'Ignis', 'Rhydian', 'Maeve', 'Eldric', 'Soren', 'Darian',
  'Oakhaven', 'Sylas', 'Astrid', 'Varek', 'Mirella', 'Lucian', 'Kaelith',
  'Orion', 'Elowen', 'Tavish', 'Morrigan', 'Balthazar', 'Evander', 'Rhiannon',
  'Kallias', 'Drusilla', 'Finnian', 'Talia', 'Hesperos', 'Garrick', 'Freya',
];

const SURNAMES_PREFIX = [
  'Storm', 'Dusk', 'Ash', 'Night', 'Sun', 'Iron', 'Frost', 'Shadow', 'Hex',
  'Bright', 'Wind', 'Ember', 'Star', 'Ravens', 'Void', 'Oaken', 'Blood',
  'Dawn', 'Silver', 'Rune', 'Moon', 'Dragon', 'Thunder', 'Grave', 'Light',
  'Wild', 'Deep', 'Grim', 'Stone', 'Mist', 'Swift', 'Bramble',
];

const SURNAMES_SUFFIX = [
  'weaver', 'walker', 'thorn', 'shade', 'shield', 'bark', 'fall', 'strike',
  'spire', 'blade', 'runner', 'heart', 'croft', 'whisper', 'bringer', 'thorne',
  'veil', 'caller', 'crest', 'warden', 'song', 'fang', 'seeker', 'brand',
  'guard', 'forge', 'stride', 'bane', 'hollow', 'reach', 'helm',
];

const EPITHETS: Record<CharacterClass, string[]> = {
  Mage: [
    'the Astral Wanderer', 'the Rune Weaver', 'Seeker of Lost Tomes',
    'the Mindspark', 'of the Violet Spire', 'the Tempest Caller',
    'the Celestial Sage', 'Keeper of Chronos'
  ],
  Rogue: [
    'the Whisper in the Dark', 'the Velvet Shadow', 'the Phantom Step',
    'of the Gilded Dagger', 'the Roof Strider', 'the Silent Fox',
    'the Locksmith of Karr', 'the Unseen Hand'
  ],
  Warrior: [
    'the Unyielding', 'the Shield of Iron', 'Bane of Giants',
    'the Lionheart', 'Breaker of Sieges', 'the Red Vanguard',
    'the Steadfast', 'Champion of the High Pass'
  ],
  Archer: [
    'the Windshot', 'of the Whispering Pines', 'the Sure-Eyed',
    'Hawk of the Silver Glade', 'the Forest Ghost', 'the Horizon Seeker',
    'the Stalker of Mist', 'the Deadeye'
  ],
  Paladin: [
    'the Dawn Sovereign', 'the Light of Solaria', 'the Sunsworn',
    'Aegis of the Just', 'the Purifier', 'the Radiant Defender',
    'Knight of the Silver Chalice', 'the Unbroken Oath'
  ],
  Necromancer: [
    'the Undying', 'Keeper of the Black Gate', 'the Soulbinder',
    'Speaker for the Fallen', 'the Bone Carver', 'of the Crypt Spire',
    'the Shadowweaver', 'the Grave Sovereign'
  ],
};

const CLASS_DETAILS: Record<CharacterClass, {
  subclasses: string[];
  weapons: string[];
  abilities: string[];
  quotes: string[];
  backstoryHooks: string[];
  statBiases: {
    health: [number, number];
    mana: [number, number];
    strength: [number, number];
    agility: [number, number];
    intelligence: [number, number];
    vitality: [number, number];
    arcana: [number, number];
    luck: [number, number];
  };
}> = {
  Mage: {
    subclasses: ['Arcane Scholar', 'Elementalist', 'Chronomancer', 'Rune Inscriber'],
    weapons: [
      'Staff of Celestial Runes',
      'Wand of Prismatic Light',
      'Ornate Tome of Aether',
      'Crystal Conduit Scepter',
      'Obsidian Focus Ring',
    ],
    abilities: [
      'Arcane Singularity: Collapses space into a dense orb of pure magical force.',
      'Aetheric Ward: Shields allies in a shimmering barrier of crystallized mana.',
      'Chrono Drift: Briefly fractures local time to reposition instantly.',
      'Prismatic Cascade: Unleashes a fan of elemental bolts matching the target weakness.',
    ],
    quotes: [
      '"The universe speaks in geometry and starlight; I merely translate."',
      '"Knowledge without mastery is mere ink on dry parchment."',
      '"Even the fiercest fire yields to disciplined concentration."',
    ],
    backstoryHooks: [
      'Expelled from the Grand Archives for unsealing forbidden celestial tablets, now seeking ancient leylines.',
      'Last survivor of the Sunken Tower, carrying a sentient spellbook that whispers in forgotten dialects.',
      'Born under a rare solar alignment, natural mana courses through their veins like liquid quicksilver.',
    ],
    statBiases: {
      health: [75, 98],
      mana: [140, 190],
      strength: [5, 10],
      agility: [8, 14],
      intelligence: [17, 20],
      vitality: [9, 13],
      arcana: [16, 20],
      luck: [10, 16],
    },
  },
  Rogue: {
    subclasses: ['Shadowblade', 'Phantom Scout', 'Gilded Infiltrator', 'Acrobatic Duelist'],
    weapons: [
      'Twin Serpentine Daggers',
      'Silenced Hand Crossbow',
      'Concealed Stiletto with Belladonna Draught',
      'Masterwork Lockpicking Sickle',
      'Midnight Steel Dirk',
    ],
    abilities: [
      'Shadow Veil: Melts into darkness, becoming entirely untargetable for moments.',
      'Flurry of Vipers: Strikes three vital pressure points in rapid sequence.',
      'Smoke Mirage: Deploys an alchemical powder leaving decoys in their wake.',
      'Expose Weakness: Locates armor seams for catastrophic critical precision.',
    ],
    quotes: [
      '"The loudest blade is the one they never saw coming."',
      '"Locks are merely friendly invitations waiting for the right key."',
      '"Gold buys many things; silence, however, has to be earned."',
    ],
    backstoryHooks: [
      'Raised in the labyrinthine catacombs beneath the capital city, skilled in navigating political intrigue.',
      'Former royal scout declared deceased on paper, operating in the underworld under a forged lineage.',
      'Stole a priceless sigil ring from a merchant baron and is now permanently one step ahead of hunters.',
    ],
    statBiases: {
      health: [85, 115],
      mana: [50, 85],
      strength: [8, 13],
      agility: [17, 20],
      intelligence: [12, 16],
      vitality: [10, 14],
      arcana: [6, 11],
      luck: [15, 20],
    },
  },
  Warrior: {
    subclasses: ['Vanguard Champion', 'Battlemaster', 'Iron Berserker', 'Guardian Knight'],
    weapons: [
      'Dragonforged Greatsword',
      'Tower Shield & Runic Broadsword',
      'Heavy Double-Headed Waraxe',
      'Forged Bastard Sword & Scabbard',
      'Tempered Halberd of the Lion Guard',
    ],
    abilities: [
      'Whirlwind Cleave: Swings in a wide arc, sweeping through enemy ranks.',
      'Unyielding Stance: Braces against incoming impacts, absorbing kinetic force.',
      'War Cry of Valor: Inspires nearby party members and breaks fear status.',
      'Earthshatter Leap: Crashes into the ground, rupturing stone and knocking enemies flat.',
    ],
    quotes: [
      '"A shield protects your brothers; a sharp blade guarantees their return."',
      '"Scars are the ledger of every battle survived with honor."',
      '"Stand firm, and even mountains will learn to split around you."',
    ],
    backstoryHooks: [
      'Veteran of the Siege of Ironcrag, returned home to find their order dissolved and banners burned.',
      'Exiled noble commander who chose exile over executing an unjust decree against innocent frontier folk.',
      'Blacksmith’s protege who picked up a fallen hero’s sword during a raid and proved a natural conqueror.',
    ],
    statBiases: {
      health: [135, 180],
      mana: [25, 55],
      strength: [17, 20],
      agility: [10, 14],
      intelligence: [8, 12],
      vitality: [16, 20],
      arcana: [4, 8],
      luck: [9, 14],
    },
  },
  Archer: {
    subclasses: ['Verdant Ranger', 'Hawk-Eye Marksman', 'Bramble Tracker', 'Windstalker'],
    weapons: [
      'Ancient Moonwood Recurve Bow',
      'Feathered Quiver with Piercing Bodkin Arrows',
      'Elven Longbow of the North Wind',
      'Dual Hunting Hatchets & Shortbow',
      'Composite Horn Bow with Fireseed Quiver',
    ],
    abilities: [
      'Rain of Starlight: Launches arrows skyward that descend in a radiant barrage.',
      'Pinpoint Piercer: Channels breath for a shot that bypasses natural defenses.',
      'Briar Snare: Drops thorny vines that entangle and root pursuing foes.',
      'Predator Focus: Heightens senses, tracking movement through solid fog or brush.',
    ],
    quotes: [
      '"The arrow flies true only when the archer’s mind is still as morning water."',
      '"Nature wastes nothing, and neither do I."',
      '"Listen closely: the wind always tells you which way danger breathes."',
    ],
    backstoryHooks: [
      'Guardian of the sacred Whispering Grove, tasked with preventing dark blight from spreading outward.',
      'Born among nomadic prairie caravans, able to track footsteps across solid limestone and gravel.',
      'Sole messenger who survived the Winter March, carrying a critical dispatch bound by green cord.',
    ],
    statBiases: {
      health: [90, 125],
      mana: [60, 95],
      strength: [11, 15],
      agility: [17, 20],
      intelligence: [11, 15],
      vitality: [11, 15],
      arcana: [7, 12],
      luck: [12, 17],
    },
  },
  Paladin: {
    subclasses: ['Oath of the Sun', 'Radiant Justiciar', 'Shield of the Innocent', 'Templar of Dawn'],
    weapons: [
      'Blessed Sunhammer with Gold Filigree',
      'Radiant Kite Shield & Sanctified Flail',
      'Holy Broadsword of the Morning Light',
      'Silver War Mace of the High Altar',
      'Sanctified Bastion Glaive',
    ],
    abilities: [
      'Aegis of Solaria: Emits a blinding beacon that blinds aggressors and shields allies.',
      'Judgment Smite: Channels divine solar fury through weapon strike.',
      'Lay on Hands: Infuses pure healing radiance, purging poisons and wounds.',
      'Consecrated Ground: Sanctifies the earth beneath their boots, searing evil spirits.',
    ],
    quotes: [
      '"While darkness gathers in shadows, we shall be the unyielding dawn."',
      '"Mercy for the penitent; righteous judgment for the wicked."',
      '"My armor may tarnish, but my oath remains untouched."',
    ],
    backstoryHooks: [
      'Sworn to protect the Holy Sunstone of Valoria after their temple was pillaged by cultists.',
      'Anointed at the High Altar following a miraculous rescue of lost pilgrims trapped in blizzard peaks.',
      'A penitent knight seeking redemption for mistakes of youth by dedicating life to guarding travelers.',
    ],
    statBiases: {
      health: [120, 165],
      mana: [90, 135],
      strength: [15, 19],
      agility: [8, 12],
      intelligence: [10, 14],
      vitality: [15, 19],
      arcana: [14, 18],
      luck: [11, 16],
    },
  },
  Necromancer: {
    subclasses: ['Soulbinder', 'Bone Hierophant', 'Grave Mystic', 'Deathless Weaver'],
    weapons: [
      'Staff of the Ossuary with Ram Skull Topper',
      'Vial of Spectral Soulfire & Ritual Scythe',
      'Bone Carver Dagger & Grimoire of the Veil',
      'Charnel Flail of Hollow Iron',
      'Scepter of Mourning Embers',
    ],
    abilities: [
      'Soul Harvest: Reclaims life essence from defeated foes to restore vital organs.',
      'Ossuary Sentinel: Coaxes ancient bones from soil to create an obedient protector.',
      'Grave Chill: Unleashes biting winter vapor that freezes blood and halts reflexes.',
      'Spectral Grasp: Summons ghostly hands that drag adversaries toward the abyss.',
    ],
    quotes: [
      '"Death is not an ending; it is the most patient form of transformation."',
      '"The departed have far more interesting tales than the living."',
      '"Do not fear the tomb; fear the squandering of the breath you possess."',
    ],
    backstoryHooks: [
      'Apprenticed to an ancient scholar who studied the boundary between souls and the cosmos.',
      'Survived an plague by unlocking the art of preserving soul essence within crystalline vials.',
      'Custodian of the ancestral tombs of an extinct empire, speaking with long-dead emperors.',
    ],
    statBiases: {
      health: [80, 112],
      mana: [130, 180],
      strength: [6, 10],
      agility: [9, 13],
      intelligence: [16, 20],
      vitality: [12, 16],
      arcana: [17, 20],
      luck: [8, 13],
    },
  },
};

const ALIGNMENTS = [
  'Lawful Good', 'Neutral Good', 'Chaotic Good',
  'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
  'Lawful Vigilant', 'Chaotic Arcane'
];

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ALL_CLASSES: CharacterClass[] = [
  'Mage',
  'Rogue',
  'Warrior',
  'Archer',
  'Paladin',
  'Necromancer',
];

export const ORIGIN_CATALYSTS: Record<CharacterClass, string[]> = {
  Mage: [
    'Discovered as a youth within a ring of perpetual blue lightning, {name} spent years deciphering the sealed astral archives of the Starfall Spire.',
    'Born during a rare eclipse of the twin moons, {name} manifested raw arcane mana before ever speaking a full sentence.',
    'After accidentally unravelling a forbidden chronomancy scroll in the Grand Academy, {name} was exiled to wander the world with a ticking heart.',
    'Apprenticed to the reclusive hermits of Mount Aetherius, {name} learned to weave primal elemental storms into crystalline geometries.',
    'The sole apprentice to survive the collapse of the Violet Bastion, {name} carries the surviving memory of a hundred fallen archmages in their mind.',
    'Haunted by recurring visions of cosmic rifts tearing the skies asunder, {name} traded royal court prestige for solitary study of deep leylines.',
    'Found sleeping unharmed inside the smoking crater of a runic meteorite, {name} grew up hearing the whispers of primordial celestial spirits.',
    'Trained in secrecy within the underwater libraries of the Sunken Coast, {name} mastered incantations written in the forgotten dialects of the tide.',
  ],
  Rogue: [
    'Raised among the labyrinthine catacombs beneath the capital city, {name} mastered the art of slipping unseen through guarded vaults and aristocratic courts.',
    'Once a trusted scout for the Royal Spymaster, {name} went underground after uncovering treason at the highest echelon of the crown.',
    'Orphaned in the perilous docklands of Port Crimson, {name} survived by outwitting cutthroats and developing an acrobat’s flawless balance.',
    'A former master locksmith whose curiosity proved dangerous, {name} unlocked a forbidden chest belonging to the ruling crime syndicate and took to the rooftops.',
    'Trained by the elusive Phantom Guild from childhood, {name} was taught to regard locked gates as mere formal greetings.',
    'After executing an audacious heist against an imperial galleon, {name} became a legend among smugglers and an outlaw to every governor.',
    'Born into a disgraced merchant family, {name} took to shadowy alleys to reclaim their stolen birthright piece by stolen piece.',
    'A silent wanderer from the border dunes, {name} learned to mask their scent and footsteps from tracking hounds and desert bounty hunters.',
  ],
  Warrior: [
    'Born among the snow-lashed crags of Iron Peak, {name} hammered their very first blade from a fallen star during the Great Northern Siege.',
    'A disgraced captain who chose desertion over executing an innocent frontier village, {name} now fights under no banner but their own conscience.',
    'Raised by the legendary Ironclad Legion, {name} earned their battle scars defending the High Pass against hordes of mountain beasts.',
    'The sole survivor of an ambushed vanguard unit, {name} retrieved the shattered banner of their battalion and swore never to yield another foot of ground.',
    'Trained in the gladiatorial arenas of the Sunken Empire, {name} won their freedom after seventy-three consecutive victories against monstrous foes.',
    'Hailing from a long dynasty of royal protectors, {name} took up arms when ancient oaths were broken and dragons stirred in the eastern rift.',
    'A blacksmith’s prodigy who picked up a fallen hero’s broadsword during a siege, {name} discovered an instinctive mastery for the rhythm of war.',
    'Hardened by decades of grueling border skirmishes, {name} carries armor dented by siege engines and weapons blessed by battle priests.',
  ],
  Archer: [
    'Raised deep within the ancient canopies of the Whispering Weald, {name} was taught to loose arrows with uncanny precision by the elder rangers.',
    'After shadowy fiends laid waste to their secluded forest sanctuary, {name} took up a recurve bow strung with wyrm-gut to cleanse the frontier.',
    'Born with the legendary hawk-eye gift of the nomadic plainsfolk, {name} can split an apple on the horizon through dense gale-force winds.',
    'Once an imperial border ranger stationed along the mist frontier, {name} chose the solitary wilderness over the corruption of stone fortresses.',
    'Mentored by an enigmatic elven hunter in the high boughs, {name} learned to walk over dry autumn leaves without releasing a single sound.',
    'Surviving alone through three harsh arctic winters in the Frostbough valley, {name} bonded with the predatory raptors of the high crags.',
    'Trained to defend sacred grove leylines from greedy logging barons, {name} became feared across the frontier as the Ghost of the Greenwood.',
    'Equipped with an ancestral recurve bow carved from primeval moonwood, {name} took a sacred oath to pursue dark blight to the ends of the continent.',
  ],
  Paladin: [
    'Surviving the sacking of the Sunfire Citadel as an initiate, {name} swore an unbreakable covenant to become the unyielding shield of the defenceless.',
    'Anointed upon the highest altar of the Dawn Temple following a miraculous rescue of lost pilgrims, {name} channels solar fury through every strike.',
    'Born to a humble peasant family, {name} was marked by a radiant birthmark resembling the ancient crest of the Solar Sovereignty.',
    'A reformed knight who once served a tyrant, {name} now walks the world in polished silver armor seeking atonement for the kingdom’s forgotten sins.',
    'Chosen by the sacred relic of the High Dawn, {name} feels the warmth of celestial light surging through their veins whenever injustice strikes.',
    'Raised in the monastery of the Silent Vigil, {name} took vows of humility and martial dedication to protect pilgrims crossing perilous territories.',
    'After standing alone at a broken chapel gate to turn back a night raid, {name} was granted the sacred rank of Justiciar by the Arch-Prelate.',
    'Armed with a consecrated warhammer blessed in holy wells, {name} marches resolutely into darkness to ensure no soul suffers alone.',
  ],
  Necromancer: [
    'Drawn to forbidden mausoleums after miraculously surviving an arcane plague, {name} discovered how to commune with souls stranded between worlds.',
    'The last scion of the ancient Mortis Dynasty, {name} inherited a leather-bound grimoire penned in the glowing green ink of the Nether-Veil.',
    'Apprenticed to an ossuary keeper beneath the Old City, {name} learned that death is not a master to be feared, but a patient transformation.',
    'Exiled from the High Spires for insisting that deceased ancestors should counsel the living, {name} established a sanctuary among ancient barrows.',
    'Discovered as an infant asleep upon the tomb of an emperor, {name} speaks with the departed as easily as others speak to childhood companions.',
    'Refusing to let the wisdom of fallen civilizations perish with their bones, {name} uses soulfire to preserve memories lost to modern histories.',
    'Survived an ambush by dark cultists when ancestral spirits rose from unmarked earth to shield {name} from ritual sacrifice.',
    'Carrying a ritual lantern that burns with cold spectral flames, {name} seeks out tortured wraiths to grant them eternal rest or purposeful resolve.',
  ],
};

export const ORIGIN_RESOLUTIONS: Record<CharacterClass, string[]> = {
  Mage: [
    'Now wielding primeval incantations, they travel the fractured realm hunting the cosmic breach that tore open their birthplace.',
    'Guided by celestial calculations, they seek to restore the grand balance before the impending alignment of the astral planes.',
    'Bound to an unsealed spellbook that whispers lost prophecies, they march forward to protect mortal realms from unknowable aetheric forces.',
    'With every rune cast, they draw closer to unlocking the legendary fountain of timeless wisdom.',
  ],
  Rogue: [
    'Today, they pursue the corrupt syndicate that framed their mentor, leaving only a calling card in the dead of night.',
    'Operating from twilight alleyways and forgotten bell towers, they ensure greedy tyrants sleep with one eye forever open.',
    'Now armed with deadly precision and untraceable steps, they take contracts only when the target truly deserves retribution.',
    'With eyes set on the mythical Imperial Vault, they assemble allies for the most daring caper the continent has ever witnessed.',
  ],
  Warrior: [
    'They now wander the fractured kingdoms, seeking an adversary worthy of testing their unyielding battle stance.',
    'Bound by the code of the fallen vanguard, their broadsword will never rest until peace is restored to the frontier.',
    'Wherever tyrant warlords oppress the innocent, their battle cry echoes across the plains as a beacon of unstoppable valor.',
    'Carrying the weight of fallen companions, they seek glory and honor across every battlefield they grace.',
  ],
  Archer: [
    'They now hunt the shadowy beasts corrupting the forest roots, never letting a single arrow stray from its mark.',
    'Guiding travelers through untamed valleys, their bow remains nocked against any predator that dares threaten the balance.',
    'With hawk-like focus and silent footsteps, they stalk the corrupt barons who dare encroach on the sacred groves.',
    'Following the whisper of the winds, they journey toward the far horizon where ancient legends speak of the Eternal Bough.',
  ],
  Paladin: [
    'Guided by unwavering faith, they bring radiant dawn to wherever shadows threaten to engulf the fragile and innocent.',
    'Their sacred oath burns as brightly as midday sun, striking fear into creatures of deceit and wickedness.',
    'Shielding the vulnerable with body and blade, they will not rest until the land is cleansed of corrupting malevolence.',
    'Marching at the front of every righteous march, their hammer blazes with celestial light that dispels the deepest despair.',
  ],
  Necromancer: [
    'They now bind restless souls into tireless guardians, determined to unlock the lost secret of conquering mortality itself.',
    'Wandering through foggy barrows and ruined crypts, they ensure restless spirits find justice before crossing the eternal veil.',
    'With cold emerald soulfire dancing at their fingertips, they stand as the sole arbiter between the living and the ancient dead.',
    'Feared by the ignorant yet revered by the dead, they seek the sacred font of resurrection hidden in the Nether-Rifts.',
  ],
};

export function generateUniqueBackstory(charClass: CharacterClass, name: string): string {
  const catalysts = ORIGIN_CATALYSTS[charClass] || ORIGIN_CATALYSTS.Warrior;
  const resolutions = ORIGIN_RESOLUTIONS[charClass] || ORIGIN_RESOLUTIONS.Warrior;

  const rawCatalyst = getRandomElement(catalysts);
  const rawResolution = getRandomElement(resolutions);

  const formattedCatalyst = rawCatalyst.replace(/{name}/g, name);
  return `${formattedCatalyst} ${rawResolution}`;
}

export function generateFantasyName(charClass: CharacterClass): { name: string; title: string } {
  const firstName = getRandomElement(FIRST_NAMES);
  const epithet = getRandomElement(EPITHETS[charClass]);
  
  // 60% chance of compound surname, 40% chance of title or origin
  const style = Math.random();
  let name = '';
  
  if (style < 0.65) {
    const prefix = getRandomElement(SURNAMES_PREFIX);
    const suffix = getRandomElement(SURNAMES_SUFFIX);
    name = `${firstName} ${prefix}${suffix}`;
  } else {
    name = `${firstName} ${epithet}`;
  }

  return { name, title: epithet };
}

export function generateCharacter(forcedClass?: CharacterClass): Character {
  const selectedClass = forcedClass || getRandomElement(ALL_CLASSES);
  const { name, title } = generateFantasyName(selectedClass);
  const classData = CLASS_DETAILS[selectedClass];

  const stats: CharacterStats = {
    health: getRandomInt(classData.statBiases.health[0], classData.statBiases.health[1]),
    mana: getRandomInt(classData.statBiases.mana[0], classData.statBiases.mana[1]),
    strength: getRandomInt(classData.statBiases.strength[0], classData.statBiases.strength[1]),
    agility: getRandomInt(classData.statBiases.agility[0], classData.statBiases.agility[1]),
    intelligence: getRandomInt(classData.statBiases.intelligence[0], classData.statBiases.intelligence[1]),
    vitality: getRandomInt(classData.statBiases.vitality[0], classData.statBiases.vitality[1]),
    arcana: getRandomInt(classData.statBiases.arcana[0], classData.statBiases.arcana[1]),
    luck: getRandomInt(classData.statBiases.luck[0], classData.statBiases.luck[1]),
  };

  const subclass = getRandomElement(classData.subclasses);
  const primaryWeapon = getRandomElement(classData.weapons);
  const specialAbility = getRandomElement(classData.abilities);
  const quote = getRandomElement(classData.quotes);
  const backstory = generateUniqueBackstory(selectedClass, name);
  const alignment = getRandomElement(ALIGNMENTS);
  const styleInfo = CLASS_STYLES[selectedClass];

  return {
    id: `char_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name,
    class: selectedClass,
    title,
    subclass,
    primaryWeapon,
    specialAbility,
    stats,
    alignment,
    backstory,
    portraitUrl: CLASS_PORTRAITS[selectedClass],
    crestColor: {
      primary: styleInfo.primary,
      secondary: styleInfo.secondary,
      glow: styleInfo.glow,
      border: styleInfo.border,
      badge: styleInfo.badge,
    },
    quote,
    createdAt: Date.now(),
  };
}

