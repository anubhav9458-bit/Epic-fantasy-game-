import { useState, useEffect, useCallback } from 'react';
import { Character, CharacterClass } from './types/character';
import { generateCharacter, generateUniqueBackstory, ALL_CLASSES } from './data/fantasyData';
import { playDiceRollSound, playSaveSound } from './utils/audio';
import { TopBar } from './components/TopBar';
import { CharacterCard } from './components/CharacterCard';
import { DeckRoster } from './components/DeckRoster';
import { ClassCodex } from './components/ClassCodex';
import { HistoryTray } from './components/HistoryTray';
import { Dices, Sparkles, Filter, CheckCircle2, BookOpen, Layers } from 'lucide-react';

export default function App() {
  // Current active player card
  const [character, setCharacter] = useState<Character>(() => generateCharacter());
  // Class selection filter ('ALL' means pick randomly from the 6 classes)
  const [selectedClassFilter, setSelectedClassFilter] = useState<CharacterClass | 'ALL'>('ALL');
  // Generation history (last 8 cards)
  const [history, setHistory] = useState<Character[]>([character]);
  // "My Deck" list state
  const [deck, setDeck] = useState<Character[]>(() => {
    try {
      const savedDeck = localStorage.getItem('fantasy_player_deck') || localStorage.getItem('fantasy_party_roster');
      return savedDeck ? JSON.parse(savedDeck) : [];
    } catch {
      return [];
    }
  });
  // Modals & UI states
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingBackstory, setIsGeneratingBackstory] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronize My Deck to local storage
  useEffect(() => {
    try {
      localStorage.setItem('fantasy_player_deck', JSON.stringify(deck));
    } catch {
      // ignore
    }
  }, [deck]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2500);
  }, []);

  // Main character generator function
  const handleGenerateCharacter = useCallback((forcedClass?: CharacterClass) => {
    setIsGenerating(true);
    playDiceRollSound(isMuted);

    // Determine target class
    let targetClass: CharacterClass | undefined = forcedClass;
    if (!targetClass && selectedClassFilter !== 'ALL') {
      targetClass = selectedClassFilter;
    }

    const newChar = generateCharacter(targetClass);

    setTimeout(() => {
      setCharacter(newChar);
      setHistory((prev) => [newChar, ...prev.filter((c) => c.id !== newChar.id).slice(0, 7)]);
      setIsGenerating(false);
    }, 120);
  }, [isMuted, selectedClassFilter]);

  // Generate unique 1-2 sentence origin backstory for current character
  const handleGenerateBackstory = useCallback(() => {
    setIsGeneratingBackstory(true);
    playSaveSound(isMuted);

    let newBackstory = generateUniqueBackstory(character.class, character.name);
    let attempts = 0;
    while (newBackstory === character.backstory && attempts < 10) {
      newBackstory = generateUniqueBackstory(character.class, character.name);
      attempts++;
    }

    setTimeout(() => {
      setCharacter((prev) => {
        const updated = { ...prev, backstory: newBackstory };
        setHistory((hist) =>
          hist.map((h) => (h.id === prev.id ? { ...h, backstory: newBackstory } : h))
        );
        setDeck((d) =>
          d.map((card) => (card.id === prev.id ? { ...card, backstory: newBackstory } : card))
        );
        return updated;
      });
      setIsGeneratingBackstory(false);
      showToast('New origin story generated!');
    }, 100);
  }, [character.class, character.name, character.backstory, isMuted, showToast]);

  // "Save to Deck" feature
  const handleToggleSaveToDeck = (char: Character) => {
    const isAlreadyInDeck = deck.some((c) => c.id === char.id);
    if (isAlreadyInDeck) {
      setDeck((prev) => prev.filter((c) => c.id !== char.id));
      showToast(`Removed ${char.name} from My Deck`);
    } else {
      playSaveSound(isMuted);
      setDeck((prev) => [char, ...prev]);
      showToast(`Saved ${char.name} to My Deck!`);
    }
  };

  const isCurrentInDeck = deck.some((c) => c.id === character.id);

  // Keyboard shortcut: Spacebar triggers generation if no input active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !['INPUT', 'TEXTAREA', 'BUTTON'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        handleGenerateCharacter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGenerateCharacter]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar with Top Bar Contract */}
      <TopBar
        deckCount={deck.length}
        onOpenDeck={() => setIsDeckOpen(true)}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted((prev) => !prev)}
        onQuickGenerate={() => handleGenerateCharacter()}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col items-center">
        
        {/* Intro / Control Header */}
        <div id="character-stage" className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Hero Player Card Studio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-cinzel tracking-tight text-white text-balance">
            Fantasy Character Card
          </h1>

          <p className="text-sm sm:text-base text-slate-400 mt-2 text-balance">
            Generate bordered collectible player cards with live combat stats for Health, Mana, and Strength.
          </p>

          {/* Action Buttons: "Generate Character", "Generate Backstory", "Save to Deck" */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {/* Generate Character Button */}
            <button
              type="button"
              id="main-generate-btn"
              onClick={() => handleGenerateCharacter()}
              disabled={isGenerating}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:scale-95 text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Dices className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>Generate Character</span>
            </button>

            {/* Generate Backstory Button */}
            <button
              type="button"
              id="main-generate-backstory-btn"
              onClick={handleGenerateBackstory}
              disabled={isGeneratingBackstory}
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 active:scale-95 text-amber-300 hover:text-amber-200 border border-slate-700 hover:border-amber-500/40 font-semibold text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <BookOpen className={`w-4 h-4 text-amber-400 ${isGeneratingBackstory ? 'animate-spin' : ''}`} />
              <span>Generate Backstory</span>
            </button>

            {/* Save to Deck Button */}
            <button
              type="button"
              id="main-save-to-deck-btn"
              onClick={() => handleToggleSaveToDeck(character)}
              className={`px-5 py-3 rounded-xl font-semibold text-sm sm:text-base border transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                isCurrentInDeck
                  ? 'bg-amber-500/20 text-amber-200 border-amber-400 hover:bg-amber-500/30'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border-slate-700'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>{isCurrentInDeck ? 'Saved in Deck' : 'Save to Deck'}</span>
            </button>
          </div>

          {/* Class Filter Segmented Controls */}
          <div className="mt-5 flex items-center justify-center gap-1.5 flex-wrap">
            <span className="text-xs text-slate-500 flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" />
              <span>Class:</span>
            </span>

            <button
              type="button"
              onClick={() => setSelectedClassFilter('ALL')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedClassFilter === 'ALL'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              Random (All)
            </button>

            {ALL_CLASSES.map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setSelectedClassFilter(cls)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedClassFilter === cls
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Central Bordered Player Card */}
        <CharacterCard
          character={character}
          isSavedInDeck={isCurrentInDeck}
          onToggleSaveToDeck={handleToggleSaveToDeck}
          onCopySuccess={() => showToast('Card specs copied to clipboard!')}
          onGenerateBackstory={handleGenerateBackstory}
          isGenerating={isGenerating}
          isGeneratingBackstory={isGeneratingBackstory}
        />

        {/* History Tray */}
        <HistoryTray
          history={history}
          activeId={character.id}
          onSelect={(c) => setCharacter(c)}
        />

        {/* Class Codex Section */}
        <ClassCodex
          selectedFilter={selectedClassFilter}
          onGenerateClass={(cls) => {
            setSelectedClassFilter(cls);
            handleGenerateCharacter(cls);
            const el = document.getElementById('character-stage');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

      </main>

      {/* Clean Footer */}
      <footer className="w-full border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Fantasy Character Card · Health, Mana, and Strength Edition</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>6 Classes</span>
            <span aria-hidden="true">·</span>
            <span>Bordered Player Card</span>
            <span aria-hidden="true">·</span>
            <span>My Deck Enabled</span>
          </div>
        </div>
      </footer>

      {/* "My Deck" Collection Modal */}
      <DeckRoster
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        deck={deck}
        onRemoveFromDeck={(id) => {
          setDeck((prev) => prev.filter((c) => c.id !== id));
          showToast('Card removed from My Deck');
        }}
        onSelectCharacter={(c) => setCharacter(c)}
        onClearDeck={() => {
          setDeck([]);
          showToast('My Deck cleared');
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-700 text-slate-100 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-in slide-in-from-bottom-2 fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
