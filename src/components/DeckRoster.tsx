import React from 'react';
import { Character } from '../types/character';
import { X, Trash2, Copy, Download, Layers, ShieldAlert, Heart, Flame, Shield } from 'lucide-react';

interface DeckRosterProps {
  isOpen: boolean;
  onClose: () => void;
  deck: Character[];
  onRemoveFromDeck: (id: string) => void;
  onSelectCharacter: (character: Character) => void;
  onClearDeck: () => void;
}

export const DeckRoster: React.FC<DeckRosterProps> = ({
  isOpen,
  onClose,
  deck,
  onRemoveFromDeck,
  onSelectCharacter,
  onClearDeck,
}) => {
  if (!isOpen) return null;

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(deck, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'my_deck_collection.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyDeckSummary = () => {
    const summary = deck
      .map(
        (c, idx) =>
          `[Card ${idx + 1}] ${c.name} — ${c.class} (${c.subclass})
   Health: ${c.stats.health} HP | Mana: ${c.stats.mana} MP | Strength: ${c.stats.strength}
   Weapon: ${c.primaryWeapon}
   Special: ${c.specialAbility}
   Backstory: ${c.backstory}
`
      )
      .join('\n');
    navigator.clipboard.writeText(summary);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border-2 border-amber-500/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="deck-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div>
            <h2 id="deck-modal-title" className="text-xl font-bold font-cinzel text-amber-400 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>My Deck</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {deck.length} card{deck.length === 1 ? '' : 's'} saved in your collection
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close My Deck"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Deck List Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {deck.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <ShieldAlert className="w-12 h-12 mx-auto mb-3 opacity-40 text-amber-500" />
              <p className="text-base font-medium text-slate-200">Your deck is currently empty</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Generate characters and click &ldquo;Save to Deck&rdquo; to build your personalized card deck.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {deck.map((char) => (
                <div
                  key={char.id}
                  className="rounded-xl bg-slate-950 border border-amber-500/40 hover:border-amber-400 transition-all flex flex-col overflow-hidden shadow-lg group"
                >
                  {/* Mini Card Header */}
                  <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 truncate font-cinzel">
                      {char.name}
                    </span>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      {char.class}
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={char.portraitUrl}
                      alt={char.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[11px] font-mono font-bold text-white px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm">
                      <span className="text-rose-400 flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                        {char.stats.health}
                      </span>
                      <span className="text-blue-400 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-blue-400" />
                        {char.stats.mana}
                      </span>
                      <span className="text-amber-400 flex items-center gap-1">
                        <Shield className="w-3 h-3 text-amber-400" />
                        {char.stats.strength}
                      </span>
                    </div>
                  </div>

                  {/* Lore excerpt */}
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {char.backstory}
                    </p>

                    <div className="mt-3 pt-2 border-t border-slate-900 flex items-center justify-between">
                      <button
                        onClick={() => {
                          onSelectCharacter(char);
                          onClose();
                        }}
                        className="px-2.5 py-1 text-xs font-semibold text-amber-300 hover:text-amber-100 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded transition-colors"
                      >
                        Inspect Card
                      </button>
                      <button
                        onClick={() => onRemoveFromDeck(char.id)}
                        className="p-1 text-slate-500 hover:text-red-400 hover:bg-red-950/40 rounded transition-colors"
                        title="Remove from My Deck"
                        aria-label={`Remove ${char.name} from My Deck`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        {deck.length > 0 && (
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between gap-4">
            <button
              onClick={onClearDeck}
              className="text-xs text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
            >
              Clear My Deck
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyDeckSummary}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Deck Summary</span>
              </button>
              <button
                onClick={handleExportJson}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Deck</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
