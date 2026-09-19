import React from 'react';
import { 
  Trophy, 
  Users, 
  Shield, 
  Globe, 
  Award, 
  Flame, 
  Sparkles, 
  Search,
  BookOpen
} from 'lucide-react';

export type ActiveTab = 
  | 'world-cup' 
  | 'players' 
  | 'clubs' 
  | 'competitions' 
  | 'ballon-dor' 
  | 'matches' 
  | 'records' 
  | 'ai-chat';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenAiHistorian: (initialPrompt?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  onSelectTab, 
  onOpenAiHistorian 
}) => {
  const navItems = [
    { id: 'world-cup' as ActiveTab, label: 'World Cup', icon: Globe },
    { id: 'players' as ActiveTab, label: 'Players', icon: Users },
    { id: 'clubs' as ActiveTab, label: 'Clubs', icon: Shield },
    { id: 'competitions' as ActiveTab, label: 'Competitions', icon: Trophy },
    { id: 'ballon-dor' as ActiveTab, label: "Ballon d'Or", icon: Award },
    { id: 'matches' as ActiveTab, label: 'Legendary Matches', icon: Flame },
    { id: 'records' as ActiveTab, label: 'Records', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div 
            id="brand-logo"
            onClick={() => onSelectTab('world-cup')}
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/30 ring-1 ring-amber-400/40">
              <Trophy className="w-5 h-5 text-stone-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  Football History
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-sans tracking-tight hidden sm:block">
                Archive • Chronology • Tactical Analytics
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-sm font-bold'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-stone-950 stroke-[2.5]' : 'text-stone-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* AI Historian Action Button */}
          <div className="flex items-center gap-2">
            <button
              id="ai-historian-nav-button"
              onClick={() => onOpenAiHistorian()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold text-xs shadow-md shadow-amber-950/40 transition-all hover:scale-[1.02] active:scale-[0.98] ring-1 ring-amber-300/40"
            >
              <Sparkles className="w-4 h-4 fill-stone-950" />
              <span className="hidden sm:inline">Ask AI Historian</span>
              <span className="sm:hidden">AI</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Row */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto pb-2.5 pt-0 scrollbar-none text-xs border-t border-stone-800/60 mt-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-tab-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
                  isActive 
                    ? 'bg-amber-500 text-stone-950 font-bold' 
                    : 'text-stone-300 bg-stone-800/60 hover:bg-stone-800'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
