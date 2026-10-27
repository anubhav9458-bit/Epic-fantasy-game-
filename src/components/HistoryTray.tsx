import React from 'react';
import { Character } from '../types/character';
import { History } from 'lucide-react';

interface HistoryTrayProps {
  history: Character[];
  activeId: string;
  onSelect: (char: Character) => void;
}

export const HistoryTray: React.FC<HistoryTrayProps> = ({
  history,
  activeId,
  onSelect,
}) => {
  if (history.length <= 1) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <div className="flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
        <History className="w-3.5 h-3.5" />
        <span>Recent Invocations</span>
      </div>

      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
        {history.map((char) => {
          const isActive = char.id === activeId;
          return (
            <button
              key={char.id}
              onClick={() => onSelect(char)}
              className={`flex items-center gap-2.5 p-2 rounded-xl border text-left shrink-0 transition-all ${
                isActive
                  ? 'bg-slate-800 border-amber-500/70 shadow-md ring-1 ring-amber-500/30'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={char.portraitUrl}
                alt={char.name}
                className="w-10 h-10 rounded-lg object-cover border border-slate-700 shrink-0"
              />
              <div className="pr-2 min-w-0">
                <p className="text-xs font-bold text-white font-cinzel truncate max-w-[120px]">
                  {char.name}
                </p>
                <p className="text-[11px] text-amber-400/90 font-medium truncate">
                  {char.class}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
