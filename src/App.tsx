/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab, Navbar } from './components/Navbar';
import { WorldCupSection } from './components/WorldCupSection';
import { PlayerSection } from './components/PlayerSection';
import { ClubSection } from './components/ClubSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { BallonDorSection } from './components/BallonDorSection';
import { LegendaryMatchesSection } from './components/LegendaryMatchesSection';
import { RecordsSection } from './components/RecordsSection';
import { AiHistorianModal } from './components/AiHistorianModal';
import { 
  Trophy, 
  Globe, 
  Users, 
  Shield, 
  Award, 
  Flame, 
  BookOpen, 
  Sparkles,
  ArrowUp
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('world-cup');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState<string | undefined>(undefined);
  const [aiContext, setAiContext] = useState<string | undefined>(undefined);

  const handleOpenAi = (prompt?: string, context?: string) => {
    setAiPrompt(prompt);
    setAiContext(context);
    setIsAiModalOpen(true);
  };

  const handleCloseAi = () => {
    setIsAiModalOpen(false);
    setAiPrompt(undefined);
    setAiContext(undefined);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Top Header Navigation */}
      <Navbar 
        activeTab={activeTab} 
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        onOpenAiHistorian={() => handleOpenAi()}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'world-cup' && <WorldCupSection onAskAi={handleOpenAi} />}
        {activeTab === 'players' && <PlayerSection onAskAi={handleOpenAi} />}
        {activeTab === 'clubs' && <ClubSection onAskAi={handleOpenAi} />}
        {activeTab === 'competitions' && <CompetitionsSection onAskAi={handleOpenAi} />}
        {activeTab === 'ballon-dor' && <BallonDorSection onAskAi={handleOpenAi} />}
        {activeTab === 'matches' && <LegendaryMatchesSection onAskAi={handleOpenAi} />}
        {activeTab === 'records' && <RecordsSection onAskAi={handleOpenAi} />}
      </main>

      {/* Comprehensive Footer */}
      <footer className="bg-stone-900 border-t border-stone-800/80 mt-16 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-stone-950 font-black shadow-md">
                  <Trophy className="w-4 h-4 fill-stone-950" />
                </div>
                <span className="font-serif font-black text-lg tracking-tight text-stone-100">
                  Football History <span className="text-amber-400">AI</span>
                </span>
              </div>
              <p className="text-stone-400 leading-relaxed text-xs">
                The premier interactive football encyclopedia, powered by verified historical archives and the Gemini Flash AI Historian model.
              </p>
              <div className="mt-4 flex items-center gap-2 text-stone-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono">Archive Status: Online & Grounded</span>
              </div>
            </div>

            {/* Quick Navigation 1 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-3">
                Tournaments & Eras
              </h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => { setActiveTab('world-cup'); scrollToTop(); }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5 text-amber-400/80" /> World Cup History (1930–2022)
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab('competitions'); scrollToTop(); }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <Trophy className="w-3.5 h-3.5 text-amber-400/80" /> Major Competitions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab('ballon-dor'); scrollToTop(); }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400/80" /> Ballon d'Or History (1956–2024)
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Navigation 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-3">
                Figures & Matches
              </h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => { setActiveTab('players'); scrollToTop(); }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <Users className="w-3.5 h-3.5 text-amber-400/80" /> Legendary Player Profiles
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab('clubs'); scrollToTop(); }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <Shield className="w-3.5 h-3.5 text-amber-400/80" /> Club Dynasties & Eras
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab('matches'); scrollToTop(); }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <Flame className="w-3.5 h-3.5 text-amber-400/80" /> 10 Legendary Matches
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab('records'); scrollToTop(); }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-400/80" /> All-Time Records
                  </button>
                </li>
              </ul>
            </div>

            {/* AI Assistant Callout */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-3">
                AI Historian
              </h4>
              <p className="text-stone-400 text-xs mb-3">
                Consult Gemini for comparative tactical breakdowns, dispute resolutions, and forgotten stories.
              </p>
              <button
                onClick={() => handleOpenAi()}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Launch AI Historian</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400">
            <p>© {new Date().getFullYear()} Football History AI Project. All historical tournament, player, club, and match data compiled from verified records.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-stone-100 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Global AI Historian Chat Modal */}
      <AiHistorianModal
        isOpen={isAiModalOpen}
        onClose={handleCloseAi}
        initialPrompt={aiPrompt}
        initialContext={aiContext}
      />
    </div>
  );
}
