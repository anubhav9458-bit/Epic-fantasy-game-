export type CharacterClass = 'Mage' | 'Rogue' | 'Warrior' | 'Archer' | 'Paladin' | 'Necromancer';

export interface CharacterStats {
  health: number;
  mana: number;
  strength: number;
  agility: number;
  intelligence: number;
  vitality: number;
  arcana: number;
  luck: number;
}

export interface Character {
  id: string;
  name: string;
  class: CharacterClass;
  title: string;
  subclass: string;
  primaryWeapon: string;
  specialAbility: string;
  stats: CharacterStats;
  alignment: string;
  backstory: string;
  portraitUrl: string;
  crestColor: {
    primary: string;
    secondary: string;
    glow: string;
    border: string;
    badge: string;
  };
  quote: string;
  createdAt: number;
}
