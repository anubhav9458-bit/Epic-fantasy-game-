import React from 'react';
import { CharacterClass } from '../types/character';
import { CLASS_PORTRAITS, ALL_CLASSES } from '../data/fantasyData';
import { Sparkles, Compass } from 'lucide-react';

interface ClassCodexProps {
  onGenerateClass: (cls: CharacterClass) => void;
  selectedFilter: CharacterClass | 'ALL';
}

const CLASS_DESCRIPTIONS: Record<CharacterClass, {
  role: string;
  keyStats: string;
  summary: string;
}> = {
  Mage: {
    role: 'Arcane Master & Reality Weaver',
    keyStats: 'INT & ARC',
    summary: 'Commands cosmic and elemental forces through discipline and deciphered celestial runes.',
  },
  Rogue: {
    role: 'Infiltrator & Precision Striker',
    keyStats: 'AGI & LCK',
    summary: 'Navigates shadows and unseen rooftops with deadly agility, finding armor vulnerabilities.',
  },
  Warrior: {
    role: 'Frontline Bulwark & Tactician',
    keyStats: 'STR & VIT',
    summary: 'Master of heavy plate and steel weaponry, breaking enemy charges with unshakable grit.',
  },
  Archer: {
    role: 'Wilderness Scout & Deadeye Marksman',
    keyStats: 'AGI & VIT',
    summary: 'Guides arrows with uncanny calm, blending into deep wilderness and tracking distant prey.',
  },
  Paladin: {
    role: 'Holy Crusader & Radiant Guardian',
    keyStats: 'STR & ARC',
    summary: 'Bound by sacred vows to ward off evil and mend the wounded with radiant solar light.',
  },
  Necromancer: {
    role: 'Deathless Mystic & Soulbinder',
    keyStats: 'INT & ARC',
    summary: 'Crosses the threshold of mortality to converse with spirits and raise tireless sentinels.',
  },
};

export const ClassCodex: React.FC<ClassCodexProps> = ({
  onGenerateClass,
  selectedFilter,
}) => {
  return (
    <section id="class-codex" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-1">
            <Compass className="w-4 h-4" />
            <span>The Six Arch-Classes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
            Codex of Adventurers
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Choose a path to focus your next summoning or roll purely from fate.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ALL_CLASSES.map((cls) => {
          const info = CLASS_DESCRIPTIONS[cls];
          const isCurrentFilter = selectedFilter === cls;

          return (
            <div
              key={cls}
              className={`p-4 rounded-xl bg-slate-900/70 border transition-all flex flex-col justify-between ${
                isCurrentFilter
                  ? 'border-amber-500/80 shadow-lg shadow-amber-500/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3.5 mb-3">
                <img
                  src={CLASS_PORTRAITS[cls]}
                  alt={cls}
                  className="w-14 h-14 rounded-lg object-cover border border-slate-700 shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white font-cinzel">
                    {cls}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium truncate">
                    {info.role}
                  </p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Focus: {info.keyStats}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">
                {info.summary}
              </p>

              <button
                type="button"
                onClick={() => onGenerateClass(cls)}
                className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Summon {cls}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
