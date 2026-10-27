import React, { useState } from 'react';
import { Character } from '../types/character';
import { 
  Sparkles, 
  Swords, 
  Copy, 
  Check, 
  ShieldAlert,
  Zap,
  BookOpen,
  Quote,
  Heart,
  Flame,
  Shield,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  isSavedInDeck: boolean;
  onToggleSaveToDeck: (character: Character) => void;
  onCopySuccess: () => void;
  onGenerateBackstory: () => void;
  isGenerating?: boolean;
  isGeneratingBackstory?: boolean;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  isSavedInDeck,
  onToggleSaveToDeck,
  onCopySuccess,
  onGenerateBackstory,
  isGenerating = false,
  isGeneratingBackstory = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `
=== [PLAYER CARD] ${character.name.toUpperCase()} ===
Class: ${character.class} (${character.subclass})
Title: ${character.title}
Alignment: ${character.alignment}

[CORE STATS]
Health:   ${character.stats.health} HP
Mana:     ${character.stats.mana} MP
Strength: ${character.stats.strength}

[SECONDARY ATTRIBUTES]
Agility:      ${character.stats.agility}/20
Intelligence: ${character.stats.intelligence}/20
Vitality:     ${character.stats.vitality}/20
Arcana:       ${character.stats.arcana}/20
Luck:         ${character.stats.luck}/20

[EQUIPMENT & ACTIONS]
Primary Weapon:  ${character.primaryWeapon}
Special Ability: ${character.specialAbility}

[ORIGIN STORY]
${character.backstory}

${character.quote}
`.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    onCopySuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const secondaryStats = [
    { label: 'Agility', short: 'AGI', val: character.stats.agility },
    { label: 'Intelligence', short: 'INT', val: character.stats.intelligence },
    { label: 'Vitality', short: 'VIT', val: character.stats.vitality },
    { label: 'Arcana', short: 'ARC', val: character.stats.arcana },
    { label: 'Luck', short: 'LCK', val: character.stats.luck },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-4 transition-all duration-300">
      {/* Outer Bordered Player Card Frame */}
      <article
        id="player-character-card"
        className={`relative rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-4 border-amber-600/80 shadow-[0_0_35px_rgba(217,119,6,0.18)] ring-2 ring-amber-400/40 overflow-hidden transition-all duration-300 ${
          isGenerating ? 'opacity-70 scale-[0.99] filter blur-[1px]' : 'opacity-100 scale-100'
        }`}
      >
        {/* Card Frame Inner Hairline Border */}
        <div className="relative rounded-2xl p-4 sm:p-6 bg-slate-950/90 border-2 border-amber-500/30 shadow-inner">
          
          {/* Card Header: Class Badge, Name & Level */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-amber-500/30 pb-4 mb-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold">
                  {character.class}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300">{character.subclass}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400 text-[11px]">{character.alignment}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-cinzel tracking-tight text-white mt-1 text-balance">
                {character.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 italic">
                {character.title}
              </p>
            </div>

            {/* Card Badge Top Right */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0 gap-1.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-400/40 text-amber-300 uppercase tracking-widest font-mono">
                HERO CARD
              </span>
              <span className="text-[11px] text-slate-400 font-mono tabular-nums">
                Rank I
              </span>
            </div>
          </div>

          {/* Card Middle: Portrait + Primary Stats Column */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5 items-stretch">
            
            {/* Bordered Portrait Box */}
            <div className="md:col-span-6 relative aspect-square rounded-xl overflow-hidden border-2 border-amber-500/40 bg-slate-950 shadow-md group">
              {!imgError ? (
                <img
                  src={character.portraitUrl}
                  alt={`${character.name} the ${character.class}`}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900">
                  <ShieldAlert className="w-12 h-12 text-amber-500/60 mb-2" />
                  <span className="font-cinzel text-lg text-slate-300 font-bold">{character.class}</span>
                  <span className="text-xs text-slate-500 mt-1">{character.subclass}</span>
                </div>
              )}

              {/* Watermark Crest Overlay */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-200">
                CLASS: {character.class.toUpperCase()}
              </div>
            </div>

            {/* Core Stats: HEALTH, MANA, STRENGTH */}
            <div className="md:col-span-6 flex flex-col justify-between gap-3">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>Primary Player Stats</span>
                </h3>

                {/* The 3 Core Stats Requested: Health, Mana, Strength */}
                <div className="grid grid-cols-3 gap-2.5 mb-3">
                  {/* Health Stat */}
                  <div className="p-3 rounded-xl bg-gradient-to-b from-rose-950/70 to-slate-950 border-2 border-rose-500/40 shadow-sm flex flex-col items-center text-center">
                    <Heart className="w-5 h-5 text-rose-400 fill-rose-500/40 mb-1" />
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-rose-300">
                      Health
                    </span>
                    <span className="text-lg sm:text-xl font-black font-mono tabular-nums text-white mt-0.5">
                      {character.stats.health}
                    </span>
                    <span className="text-[10px] text-rose-400/80 font-mono">HP</span>
                  </div>

                  {/* Mana Stat */}
                  <div className="p-3 rounded-xl bg-gradient-to-b from-blue-950/70 to-slate-950 border-2 border-blue-500/40 shadow-sm flex flex-col items-center text-center">
                    <Flame className="w-5 h-5 text-blue-400 fill-blue-500/40 mb-1" />
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-300">
                      Mana
                    </span>
                    <span className="text-lg sm:text-xl font-black font-mono tabular-nums text-white mt-0.5">
                      {character.stats.mana}
                    </span>
                    <span className="text-[10px] text-blue-400/80 font-mono">MP</span>
                  </div>

                  {/* Strength Stat */}
                  <div className="p-3 rounded-xl bg-gradient-to-b from-amber-950/70 to-slate-950 border-2 border-amber-500/40 shadow-sm flex flex-col items-center text-center">
                    <Swords className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-300">
                      Strength
                    </span>
                    <span className="text-lg sm:text-xl font-black font-mono tabular-nums text-white mt-0.5">
                      {character.stats.strength}
                    </span>
                    <span className="text-[10px] text-amber-400/80 font-mono">STR</span>
                  </div>
                </div>

                {/* Secondary Attributes */}
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                    <span>Secondary Attributes</span>
                    <span className="font-mono text-slate-500">Max 20</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 text-center">
                    {secondaryStats.map((st) => (
                      <div key={st.label} className="p-1 rounded bg-slate-950/80 border border-slate-800/80">
                        <span className="block text-[10px] text-slate-400 font-mono">{st.short}</span>
                        <span className="block text-xs font-bold text-slate-200 font-mono">{st.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Combat Equipment & Ability Box */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                    <Swords className="w-3 h-3 text-amber-400" />
                    <span>Weapon</span>
                  </span>
                  <p className="text-xs font-semibold text-slate-100 truncate mt-0.5">
                    {character.primaryWeapon}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>Ability</span>
                  </span>
                  <p className="text-xs font-medium text-slate-200 line-clamp-1 mt-0.5">
                    {character.specialAbility}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Card Lore & Origin Story Section */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs sm:text-sm text-slate-200 space-y-2.5 mb-4">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Origin Lore</span>
              </div>
              
              {/* Generate Backstory Button (Required) */}
              <button
                type="button"
                id="card-generate-backstory-btn"
                onClick={onGenerateBackstory}
                disabled={isGeneratingBackstory}
                title="Generate a unique 1-2 sentence origin story for this character"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-amber-300 hover:text-amber-100 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 rounded-lg transition-all cursor-pointer disabled:opacity-50"
              >
                <Sparkles className={`w-3.5 h-3.5 text-amber-400 ${isGeneratingBackstory ? 'animate-spin' : ''}`} />
                <span>Generate Backstory</span>
              </button>
            </div>

            <p className={`leading-relaxed text-slate-200 transition-opacity duration-200 ${isGeneratingBackstory ? 'opacity-40' : 'opacity-100'}`}>
              {character.backstory}
            </p>

            <div className="flex items-start gap-2 pt-2 border-t border-slate-800/80">
              <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <p className="italic text-slate-400 text-xs">
                {character.quote}
              </p>
            </div>
          </div>

          {/* Card Footer: Save to Deck Feature & Action Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-amber-500/20">
            <div className="text-[11px] font-mono text-slate-500 flex items-center gap-2">
              <span>CARD ID: #{character.id.slice(-6).toUpperCase()}</span>
              <span>·</span>
              <span>LIMITED EDITION</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              {/* Save to Deck Button (Required) */}
              <button
                type="button"
                id="save-to-deck-btn"
                onClick={() => onToggleSaveToDeck(character)}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  isSavedInDeck
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200 hover:bg-amber-500/30'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 border-amber-400'
                }`}
              >
                {isSavedInDeck ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                    <span>In My Deck</span>
                  </>
                ) : (
                  <>
                    <Layers className="w-4 h-4" />
                    <span>Save to Deck</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Copy character card specs"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};
