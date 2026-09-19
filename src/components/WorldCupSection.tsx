import React, { useState, useMemo } from 'react';
import { WORLD_CUP_TOURNAMENTS } from '../data/worldCupData';
import { WorldCupTournament } from '../types';
import { 
  Globe, 
  Trophy, 
  Filter, 
  Search, 
  Table, 
  Layers, 
  Sparkles, 
  Users,
  Award,
  BookOpen,
  ChevronRight,
  X
} from 'lucide-react';

interface WorldCupSectionProps {
  onAskAi: (prompt: string, context?: string) => void;
}

const DECADES = [
  "All",
  "1930s",
  "1950s",
  "1960s",
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "2010s",
  "2020s"
];

export const WorldCupSection: React.FC<WorldCupSectionProps> = ({ onAskAi }) => {
  const [selectedDecade, setSelectedDecade] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [selectedTournament, setSelectedTournament] = useState<WorldCupTournament | null>(null);

  const getTournamentHost = (t: WorldCupTournament): string => {
    return t.hostCountry || t.host || "";
  };

  const getTournamentDecade = (t: WorldCupTournament): string => {
    return t.decade || `${Math.floor(t.year / 10) * 10}s`;
  };

  const getFinalScore = (t: WorldCupTournament): string => {
    if (typeof t.finalScore === 'object' && t.finalScore !== null) {
      return t.finalScore.score;
    }
    return t.finalScore || "N/A";
  };

  const getTopScorerInfo = (t: WorldCupTournament): { name: string; country: string; goals: number } => {
    if (typeof t.topScorer === 'object' && t.topScorer !== null) {
      return t.topScorer;
    }
    return {
      name: String(t.topScorer || "N/A"),
      country: "",
      goals: t.topScorerGoals || 0
    };
  };

  const getTeamCount = (t: WorldCupTournament): number => {
    return t.totalTeams || t.teamsCount || 0;
  };

  const filteredTournaments = useMemo(() => {
    return WORLD_CUP_TOURNAMENTS.filter((item) => {
      const itemDecade = getTournamentDecade(item);
      const matchesDecade = selectedDecade === "All" || itemDecade === selectedDecade;
      const q = searchQuery.toLowerCase().trim();
      const host = getTournamentHost(item).toLowerCase();
      const matchesQuery = 
        !q ||
        item.year.toString().includes(q) ||
        host.includes(q) ||
        item.winner.toLowerCase().includes(q) ||
        item.runnerUp.toLowerCase().includes(q) ||
        item.famousPlayers.some(p => p.toLowerCase().includes(q));
      return matchesDecade && matchesQuery;
    });
  }, [selectedDecade, searchQuery]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Globe className="w-3.5 h-3.5" /> Men's FIFA World Cup Archive (1930–2022)
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-serif text-stone-100 tracking-tight">
              World Cup History
            </h1>
            <p className="mt-2 text-stone-400 text-sm max-w-2xl leading-relaxed">
              Explore every men's FIFA World Cup tournament from Uruguay 1930 to Qatar 2022. 
              Review champions, scorelines, historical context, legendary players, and watershed tactical breakthroughs.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => onAskAi("Give me an overview of the biggest tactical evolutions across World Cup history from 1930 to 2022.")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4 fill-stone-950" />
              <span>World Cup Tactical Analysis</span>
            </button>
          </div>
        </div>

        {/* Quick stats ribbon */}
        <div className="mt-6 pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-400">
          <div>
            <span className="block text-xl font-bold text-stone-100 font-mono">22</span>
            <span>Editions Held</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-amber-400 font-mono">Brazil (5)</span>
            <span>Most Trophies</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-stone-100 font-mono">M. Klose (16)</span>
            <span>All-Time Top Scorer</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-stone-100 font-mono">Pelé (3)</span>
            <span>Most Player Titles</span>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters & Search */}
      <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 shadow-md flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            id="world-cup-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by year, country, winner, player (e.g. 1970, Brazil, Pelé)..."
            className="w-full bg-stone-950 border border-stone-700/80 rounded-lg pl-9 pr-4 py-2 text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-400"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Decade Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          <span className="text-[11px] uppercase font-bold text-stone-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Decade:
          </span>
          {DECADES.map((decade) => (
            <button
              key={decade}
              onClick={() => setSelectedDecade(decade)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedDecade === decade
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {decade}
            </button>
          ))}
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 border border-stone-700 rounded-lg p-1 bg-stone-950 self-end lg:self-auto">
          <button
            onClick={() => setViewMode("cards")}
            className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
              viewMode === "cards" 
                ? 'bg-amber-500 text-stone-950 font-bold' 
                : 'text-stone-400 hover:text-stone-100'
            }`}
            title="Timeline Cards"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cards</span>
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
              viewMode === "table" 
                ? 'bg-amber-500 text-stone-950 font-bold' 
                : 'text-stone-400 hover:text-stone-100'
            }`}
            title="Table View"
          >
            <Table className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Table</span>
          </button>
        </div>
      </div>

      {/* Showing count */}
      <div className="flex items-center justify-between text-xs text-stone-400 px-1">
        <span>Showing <strong className="text-stone-100">{filteredTournaments.length}</strong> of {WORLD_CUP_TOURNAMENTS.length} tournaments</span>
        {selectedDecade !== "All" && (
          <button 
            onClick={() => setSelectedDecade("All")}
            className="text-amber-400 hover:underline"
          >
            Clear decade filter
          </button>
        )}
      </div>

      {/* Main View: Timeline Cards or Table */}
      {viewMode === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tournament) => {
            const host = getTournamentHost(tournament);
            const decade = getTournamentDecade(tournament);
            const finalScore = getFinalScore(tournament);
            const teamCount = getTeamCount(tournament);

            return (
              <div
                key={tournament.year}
                id={`tournament-card-${tournament.year}`}
                onClick={() => setSelectedTournament(tournament)}
                className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Year & Host Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black font-serif text-amber-400 group-hover:text-amber-300 transition-colors">
                        {tournament.year}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                        {decade}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-stone-300 font-medium bg-stone-800/80 px-2.5 py-1 rounded-md">
                      <span>{tournament.hostFlag}</span>
                      <span>{host}</span>
                    </div>
                  </div>

                  {/* Final Matchup Scoreboard */}
                  <div className="bg-stone-950/80 border border-stone-800 rounded-lg p-3 my-3">
                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                      <span className="text-stone-400 uppercase text-[10px] tracking-wider">Final</span>
                      <span className="text-stone-400 text-[10px]">{finalScore}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      {/* Champion */}
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{tournament.winnerFlag}</span>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-stone-100 text-sm">{tournament.winner}</span>
                            <Trophy className="w-3.5 h-3.5 text-amber-400 inline" />
                          </div>
                          <span className="text-[10px] text-amber-400/90 font-medium">Champion</span>
                        </div>
                      </div>
                      {/* Score */}
                      <div className="text-center px-2">
                        <span className="font-mono font-bold text-base text-stone-100">
                          {finalScore}
                        </span>
                      </div>
                      {/* Runner-up */}
                      <div className="flex items-center gap-2 text-right flex-row-reverse">
                        <span className="text-lg">{tournament.runnerUpFlag}</span>
                        <div>
                          <span className="font-medium text-stone-300 text-sm block">{tournament.runnerUp}</span>
                          <span className="text-[10px] text-stone-400">Runner-up</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Historical Context snippet */}
                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mt-2">
                    {tournament.historicalContext}
                  </p>

                  {/* Famous Players Chips */}
                  <div className="mt-3 pt-3 border-t border-stone-800/80">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1.5">
                      Iconic Figures:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {tournament.famousPlayers.slice(0, 3).map((p, idx) => (
                        <span 
                          key={idx}
                          className="text-[11px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded"
                        >
                          {p}
                        </span>
                      ))}
                      {tournament.famousPlayers.length > 3 && (
                        <span className="text-[11px] text-stone-400 px-1 py-0.5">
                          +{tournament.famousPlayers.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Full Tournament Dossier <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-stone-400">
                    {teamCount} Teams • {tournament.totalGoals} Goals
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Table View */
        <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-950 text-stone-400 uppercase text-[10px] tracking-wider border-b border-stone-800">
                <tr>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4">Host</th>
                  <th className="py-3 px-4">Winner</th>
                  <th className="py-3 px-4">Score</th>
                  <th className="py-3 px-4">Runner-Up</th>
                  <th className="py-3 px-4">Top Scorer</th>
                  <th className="py-3 px-4">Teams / Goals</th>
                  <th className="py-3 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                {filteredTournaments.map((t) => {
                  const host = getTournamentHost(t);
                  const finalScore = getFinalScore(t);
                  const topScorer = getTopScorerInfo(t);
                  const teamCount = getTeamCount(t);

                  return (
                    <tr 
                      key={t.year}
                      onClick={() => setSelectedTournament(t)}
                      className="hover:bg-stone-800/60 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4 font-bold text-amber-400 font-mono text-sm">
                        {t.year}
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        {t.hostFlag} {host}
                      </td>
                      <td className="py-3 px-4 font-bold text-stone-100 whitespace-nowrap">
                        {t.winnerFlag} {t.winner}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-stone-200">
                        {finalScore}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-stone-300">
                        {t.runnerUpFlag} {t.runnerUp}
                      </td>
                      <td className="py-3 px-4 text-stone-400">
                        {topScorer.name} {topScorer.goals ? `(${topScorer.goals})` : ''}
                      </td>
                      <td className="py-3 px-4 text-stone-400">
                        {teamCount} teams / {t.totalGoals} goals
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTournament(t);
                          }}
                          className="text-amber-400 hover:text-amber-300 font-medium"
                        >
                          Inspect
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tournament Deep-Dive Modal */}
      {selectedTournament && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            id={`tournament-modal-${selectedTournament.year}`}
            className="bg-stone-900 border border-amber-500/30 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-amber-500/20"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-serif font-black text-amber-400">
                  {selectedTournament.year}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                    <span>{selectedTournament.hostFlag}</span>
                    <span>FIFA World Cup {getTournamentHost(selectedTournament)}</span>
                  </h3>
                  <span className="text-xs text-stone-400">
                    {getTournamentDecade(selectedTournament)} Era • Official FIFA Tournament Archive
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTournament(null)}
                className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-stone-200 text-sm">
              {/* Scoreboard Banner */}
              <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 text-center">
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block mb-2">
                  Championship Final
                </span>
                <div className="flex items-center justify-center gap-6 sm:gap-12">
                  <div className="text-center">
                    <span className="text-3xl block mb-1">{selectedTournament.winnerFlag}</span>
                    <span className="font-bold text-base text-stone-100 block">{selectedTournament.winner}</span>
                    <span className="text-xs text-amber-400 font-semibold flex items-center justify-center gap-1 mt-0.5">
                      <Trophy className="w-3 h-3 inline" /> Champions
                    </span>
                  </div>

                  <div className="bg-stone-900 border border-stone-700 px-4 py-2 rounded-lg font-mono font-black text-xl text-stone-100">
                    {getFinalScore(selectedTournament)}
                  </div>

                  <div className="text-center">
                    <span className="text-3xl block mb-1">{selectedTournament.runnerUpFlag}</span>
                    <span className="font-bold text-base text-stone-300 block">{selectedTournament.runnerUp}</span>
                    <span className="text-xs text-stone-400 mt-0.5">Runners-up</span>
                  </div>
                </div>
              </div>

              {/* Historical Context */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Historical Context & Geo-Political Climate
                </h4>
                <p className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 leading-relaxed text-stone-300 text-xs sm:text-sm">
                  {selectedTournament.historicalContext}
                </p>
              </div>

              {/* Important Moments */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Iconic Tournament Moments
                </h4>
                <div className="space-y-2">
                  {selectedTournament.importantMoments.map((moment, idx) => (
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

              {/* Famous Players & Golden Boot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-stone-950/60 border border-stone-800/80 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> Legendary Figures
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTournament.famousPlayers.map((player, idx) => (
                      <span 
                        key={idx}
                        className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1 rounded-md border border-stone-700"
                      >
                        {player}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-stone-950/60 border border-stone-800/80 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Tournament Top Scorer
                  </h4>
                  {(() => {
                    const topScorer = getTopScorerInfo(selectedTournament);
                    return (
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-sm">
                          {topScorer.goals || '★'}
                        </div>
                        <div>
                          <span className="font-bold text-stone-100 text-sm block">
                            {topScorer.name}
                          </span>
                          <span className="text-xs text-stone-400">
                            {topScorer.goals ? `${topScorer.goals} Goals` : 'Tournament High Scorer'}
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Modal Footer with AI Button */}
            <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={() => {
                  const host = getTournamentHost(selectedTournament);
                  const query = `Provide a comprehensive tactical and narrative retrospective of the ${selectedTournament.year} FIFA World Cup in ${host}. Include key tactical systems, how ${selectedTournament.winner} secured the trophy, and the cultural legacy of this tournament.`;
                  setSelectedTournament(null);
                  onAskAi(query, `FIFA World Cup ${selectedTournament.year} (${host})`);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-colors"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Ask AI Historian about {selectedTournament.year} World Cup</span>
              </button>
              <button
                onClick={() => setSelectedTournament(null)}
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
