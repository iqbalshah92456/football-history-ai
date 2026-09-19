import React, { useState, useMemo } from 'react';
import { LEGENDARY_MATCHES } from '../data/legendaryMatchesData';
import { LegendaryMatch } from '../types';
import { 
  Flame, 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  Trophy, 
  BookOpen, 
  X,
  Users
} from 'lucide-react';

interface LegendaryMatchesSectionProps {
  onAskAi: (prompt: string, context?: string) => void;
}

export const LegendaryMatchesSection: React.FC<LegendaryMatchesSectionProps> = ({ onAskAi }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedComp, setSelectedComp] = useState('All');
  const [selectedMatch, setSelectedMatch] = useState<LegendaryMatch | null>(null);

  const filteredMatches = useMemo(() => {
    return LEGENDARY_MATCHES.filter((m) => {
      const matchesComp = selectedComp === 'All' || m.competition.includes(selectedComp);
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        m.title.toLowerCase().includes(q) ||
        m.team1.name.toLowerCase().includes(q) ||
        m.team2.name.toLowerCase().includes(q) ||
        m.venue.toLowerCase().includes(q) ||
        m.date.toLowerCase().includes(q);

      return matchesComp && matchesSearch;
    });
  }, [searchQuery, selectedComp]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Flame className="w-3.5 h-3.5" /> Iconic Clashes of Will & Genius
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-serif text-stone-100 tracking-tight">
              Legendary Matches
            </h1>
            <p className="mt-2 text-stone-400 text-sm max-w-2xl leading-relaxed">
              Step onto the pitch for the most dramatic, heartbreaking, and awe-inspiring encounters in football lore. 
              Review tactical systems, minute-by-minute drama, and cultural aftershocks.
            </p>
          </div>

          <button
            onClick={() => onAskAi("Rank and analyze the top 5 most dramatic football matches ever played and what made their final minutes so unforgettable.")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 fill-stone-950" />
            <span>Analyze Match Dramas</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 shadow-md flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            id="match-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search match title, team, date, venue (e.g. Istanbul, Bern, Brazil)..."
            className="w-full bg-stone-950 border border-stone-700/80 rounded-lg pl-9 pr-4 py-2 text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Competition Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] uppercase font-bold text-stone-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Event:
          </span>
          {["All", "World Cup", "Champions League", "European"].map((c) => (
            <button
              key={c}
              onClick={() => setSelectedComp(c)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedComp === c
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Showing count */}
      <div className="text-xs text-stone-400 px-1 flex items-center justify-between">
        <span>Showing <strong className="text-stone-100">{filteredMatches.length}</strong> legendary matches</span>
        {selectedComp !== 'All' && (
          <button 
            onClick={() => setSelectedComp('All')}
            className="text-amber-400 hover:underline"
          >
            Reset filter
          </button>
        )}
      </div>

      {/* Match Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMatches.map((match) => (
          <div
            key={match.id}
            id={`match-card-${match.id}`}
            onClick={() => setSelectedMatch(match)}
            className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              {/* Header: Title & Competition badge */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold font-serif text-stone-100 group-hover:text-amber-400 transition-colors">
                    {match.title}
                  </h3>
                  <span className="text-xs text-stone-400 block mt-0.5">
                    {match.competition} • {match.stage} • {match.date}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-stone-400 bg-stone-950 px-2.5 py-1 rounded-lg border border-stone-800">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span className="truncate max-w-[120px]">{match.venue}</span>
                </div>
              </div>

              {/* Scoreboard Block */}
              <div className="bg-stone-950 border border-stone-800/80 rounded-xl p-4 my-3">
                <div className="flex items-center justify-between">
                  {/* Team 1 */}
                  <div className="flex-1 flex items-center gap-2.5">
                    <span className="text-2xl">{match.team1.flag}</span>
                    <div>
                      <span className="font-bold text-stone-100 text-sm block">
                        {match.team1.name}
                      </span>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="px-4 py-1.5 bg-stone-900 border border-stone-700 rounded-lg text-center font-mono font-black text-lg text-stone-100">
                    {match.team1.score} - {match.team2.score}
                  </div>

                  {/* Team 2 */}
                  <div className="flex-1 flex items-center gap-2.5 justify-end text-right">
                    <div>
                      <span className="font-bold text-stone-100 text-sm block">
                        {match.team2.name}
                      </span>
                    </div>
                    <span className="text-2xl">{match.team2.flag}</span>
                  </div>
                </div>
              </div>

              {/* Narrative Summary */}
              <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed mb-3">
                {match.summary}
              </p>

              {/* Historical Significance highlight */}
              <div className="bg-stone-950/60 p-2.5 rounded-lg border border-stone-800/80 text-xs text-stone-300">
                <span className="text-[10px] uppercase font-bold text-amber-400 block mb-0.5">
                  Significance:
                </span>
                <p className="line-clamp-2 text-stone-400">{match.historicalSignificance}</p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
              <span className="text-amber-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Full Match Dossier & Tactics <ChevronRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-[11px] text-stone-400 font-mono">
                {match.attendance} Fans
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Match Deep-Dive Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            id={`match-modal-${selectedMatch.id}`}
            className="bg-stone-900 border border-amber-500/30 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-amber-500/20"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-stone-100">
                    {selectedMatch.title}
                  </h3>
                  <span className="text-xs text-stone-400">
                    {selectedMatch.competition} • {selectedMatch.stage} • {selectedMatch.date}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedMatch(null)}
                className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-stone-200 text-sm">
              {/* Scoreboard Detailed */}
              <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 text-center">
                <div className="flex items-center justify-center gap-8 sm:gap-12">
                  <div className="text-center flex-1">
                    <span className="text-3xl block mb-1">{selectedMatch.team1.flag}</span>
                    <span className="font-bold text-base text-stone-100 block">{selectedMatch.team1.name}</span>
                    <div className="mt-2 text-xs text-stone-400 space-y-0.5">
                      {selectedMatch.team1.scorers.map((sc, i) => (
                        <div key={i}>{sc}</div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-stone-900 border border-stone-700 px-5 py-2.5 rounded-xl font-mono font-black text-2xl text-stone-100">
                    {selectedMatch.team1.score} - {selectedMatch.team2.score}
                  </div>

                  <div className="text-center flex-1">
                    <span className="text-3xl block mb-1">{selectedMatch.team2.flag}</span>
                    <span className="font-bold text-base text-stone-100 block">{selectedMatch.team2.name}</span>
                    <div className="mt-2 text-xs text-stone-400 space-y-0.5">
                      {selectedMatch.team2.scorers.map((sc, i) => (
                        <div key={i}>{sc}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs text-stone-400 flex items-center justify-center gap-6">
                  <span>Venue: <strong>{selectedMatch.venue}</strong></span>
                  <span>Attendance: <strong>{selectedMatch.attendance}</strong></span>
                </div>
              </div>

              {/* Narrative Summary */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Match Chronicle
                </h4>
                <p className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 leading-relaxed text-stone-300 text-xs sm:text-sm">
                  {selectedMatch.summary}
                </p>
              </div>

              {/* Tactical Context */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Tactical Blueprint & Matchup Dynamic
                </h4>
                <p className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 leading-relaxed text-stone-300 text-xs sm:text-sm">
                  {selectedMatch.tacticalContext}
                </p>
              </div>

              {/* Iconic Moments */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" /> Immortal Match Moments
                </h4>
                <div className="space-y-2">
                  {(selectedMatch.iconicMoments || []).map((moment, idx) => (
                    <div 
                      key={idx}
                      className="bg-stone-950/60 border border-stone-800/80 p-3 rounded-xl flex items-start gap-2.5 text-xs text-stone-300"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{moment}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historical Significance */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Historical Legacy
                </h4>
                <p className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 leading-relaxed text-stone-400 text-xs sm:text-sm">
                  {selectedMatch.historicalSignificance}
                </p>
              </div>
            </div>

            {/* Modal Footer with AI Button */}
            <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={() => {
                  const query = `Provide a minute-by-minute tactical and psychological breakdown of ${selectedMatch.title} between ${selectedMatch.team1.name} and ${selectedMatch.team2.name}. Why did the match unfold the way it did, and what makes it immortal?`;
                  setSelectedMatch(null);
                  onAskAi(query, selectedMatch.title);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-colors"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Ask AI Historian about this Match</span>
              </button>
              <button
                onClick={() => setSelectedMatch(null)}
                className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
