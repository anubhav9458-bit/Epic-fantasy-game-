import React from 'react';
import { Volume2, VolumeX, Layers, Shield } from 'lucide-react';

interface TopBarProps {
  deckCount: number;
  onOpenDeck: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onQuickGenerate: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  deckCount,
  onOpenDeck,
  isMuted,
  onToggleMute,
  onQuickGenerate,
}) => {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
          <Shield className="w-5 h-5 text-amber-500" />
          <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-slate-100">
            Fantasy Forge
          </span>
        </div>

        {/* Zone 2: Clean single-line navigation / view controls */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <button
            onClick={() => {
              const el = document.getElementById('character-stage');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Player Card
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('class-codex');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Class Codex
          </button>
          <button
            onClick={onOpenDeck}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>My Deck</span>
            {deckCount > 0 && (
              <span className="text-xs bg-amber-500/20 text-amber-300 font-mono px-1.5 py-0.5 rounded">
                {deckCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action area */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleMute}
            aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
            title={isMuted ? 'Enable sound chimes' : 'Mute sounds'}
            className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            id="top-my-deck-btn"
            onClick={onOpenDeck}
            className="relative px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-amber-500/50 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>My Deck</span>
            <span className="font-mono tabular-nums text-xs bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">
              {deckCount}
            </span>
          </button>

          <button
            type="button"
            onClick={onQuickGenerate}
            className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm hover:shadow-amber-500/20 transition-all font-sans whitespace-nowrap shrink-0 cursor-pointer"
          >
            Generate Character
          </button>
        </div>
      </div>
    </header>
  );
};
