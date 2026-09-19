import React, { useState, useMemo } from 'react';
import { BALLON_DOR_DATA } from '../data/ballonDorData';
import { BallonDorYear } from '../types';
import { 
  Award, 
  Search, 
  Filter, 
  Sparkles, 
  Trophy, 
  Table, 
  Layers, 
  X,
  Medal,
  Calendar,
  Crown
} from 'lucide-react';

interface BallonDorSectionProps {
  onAskAi: (prompt: string, context?: string) => void;
}

export const BallonDorSection: React.FC<BallonDorSectionProps> = ({ onAskAi }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDecade, setSelectedDecade] = useState('All');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedYear, setSelectedYear] = useState<BallonDorYear | null>(null);

  const filteredData = useMemo(() => {
    return BALLON_DOR_DATA.filter((item) => {
      let matchesDecade = true;
      if (selectedDecade !== 'All') {
        const year = item.year;
        if (selectedDecade === '2020s') matchesDecade = year >= 2020;
        else if (selectedDecade === '2010s') matchesDecade = year >= 2010 && year < 2020;
        else if (selectedDecade === '2000s') matchesDecade = year >= 2000 && year < 2010;
        else if (selectedDecade === '1990s') matchesDecade = year >= 1990 && year < 2000;
        else if (selectedDecade === '1980s') matchesDecade = year >= 1980 && year < 1990;
        else if (selectedDecade === '1970s') matchesDecade = year >= 1970 && year < 1980;
        else if (selectedDecade === '1950s/60s') matchesDecade = year < 1970;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.year.toString().includes(q) ||
        item.winner.toLowerCase().includes(q) ||
        item.nationality.toLowerCase().includes(q) ||
        item.club.toLowerCase().includes(q) ||
        item.runnerUp.toLowerCase().includes(q) ||
        item.thirdPlace.toLowerCase().includes(q);

      return matchesDecade && matchesSearch;
    });
  }, [searchQuery, selectedDecade]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Award className="w-3.5 h-3.5" /> France Football • Founded 1956
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-serif text-stone-100 tracking-tight">
              Ballon d'Or History
            </h1>
            <p className="mt-2 text-stone-400 text-sm max-w-2xl leading-relaxed">
              Explore the prestigious year-by-year chronicle of football's supreme individual award. 
              Review the winners, podium finishers, point totals, historical context, and the legendary 1989 Super Ballon d'Or.
            </p>
          </div>

          <button
            onClick={() => onAskAi("Analyze the most controversial Ballon d'Or votes in history (e.g. 2010, 2013, 2020 cancellation, 2021) and the historical criteria changes.")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 fill-stone-950" />
            <span>Ballon d'Or Debates</span>
          </button>
        </div>

        {/* Super Ballon d'Or Special Ribbon */}
        <div className="mt-6 pt-5 border-t border-stone-800/80 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent -mx-6 -mb-6 p-6 rounded-b-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Historical Milestone: The Super Ballon d'Or (1989)
              </span>
              <p className="text-xs text-stone-300">
                Awarded only once in history by France Football to <strong>Alfredo Di Stéfano</strong> as the supreme player of the previous three decades, edging Johan Cruyff and Michel Platini.
              </p>
            </div>
          </div>
          <button
            onClick={() => onAskAi("What was the 1989 Super Ballon d'Or won by Alfredo Di Stéfano and will it ever be awarded again?")}
            className="text-xs text-amber-400 font-semibold hover:underline self-start sm:self-auto whitespace-nowrap"
          >
            Learn about Super Ballon d'Or →
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 shadow-md flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            id="ballon-dor-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by player, year, club, nationality (e.g. Messi, 2008, Real Madrid)..."
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

        {/* Decade Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          <span className="text-[11px] uppercase font-bold text-stone-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Era:
          </span>
          {["All", "2020s", "2010s", "2000s", "1990s", "1980s", "1970s", "1950s/60s"].map((dec) => (
            <button
              key={dec}
              onClick={() => setSelectedDecade(dec)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedDecade === dec
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {dec}
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
          >
            <Table className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Table</span>
          </button>
        </div>
      </div>

      {/* Showing count */}
      <div className="text-xs text-stone-400 px-1 flex items-center justify-between">
        <span>Showing <strong className="text-stone-100">{filteredData.length}</strong> Ballon d'Or editions</span>
        {selectedDecade !== 'All' && (
          <button 
            onClick={() => setSelectedDecade('All')}
            className="text-amber-400 hover:underline"
          >
            Reset era filter
          </button>
        )}
      </div>

      {/* Cards View */}
      {viewMode === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.year}
              id={`ballon-dor-card-${item.year}`}
              onClick={() => setSelectedYear(item)}
              className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Year and Points */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-serif font-black text-amber-400 group-hover:text-amber-300 transition-colors">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                    {item.points}
                  </span>
                </div>

                {/* Winner Card */}
                <div className="bg-stone-950 border border-amber-500/30 rounded-xl p-3.5 mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                      <Award className="w-3 h-3 inline" /> Winner
                    </span>
                    <span className="text-xs text-stone-400">{item.club}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.winnerFlag}</span>
                    <div>
                      <h4 className="font-bold text-stone-100 text-base leading-tight">
                        {item.winner}
                      </h4>
                      <span className="text-xs text-stone-400">{item.nationality}</span>
                    </div>
                  </div>
                </div>

                {/* Podium Runners-up */}
                <div className="space-y-1.5 text-xs text-stone-300 mb-3">
                  <div className="flex items-center justify-between bg-stone-950/50 px-2.5 py-1.5 rounded-lg">
                    <span className="text-stone-400 text-[11px] flex items-center gap-1">
                      <span className="text-stone-400 font-bold">2nd</span> {item.runnerUpFlag} {item.runnerUp}
                    </span>
                    <span className="text-[10px] text-stone-400">Silver</span>
                  </div>
                  {item.thirdPlace !== "N/A" && (
                    <div className="flex items-center justify-between bg-stone-950/50 px-2.5 py-1.5 rounded-lg">
                      <span className="text-stone-400 text-[11px] flex items-center gap-1">
                        <span className="text-amber-700 font-bold">3rd</span> {item.thirdPlaceFlag} {item.thirdPlace}
                      </span>
                      <span className="text-[10px] text-stone-400">Bronze</span>
                    </div>
                  )}
                </div>

                {/* Key Achievement */}
                <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                  {item.keyAchievement}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-amber-400 font-medium">
                  Inspect Era Context →
                </span>
                <span className="text-[11px] text-stone-400">
                  {item.club}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table View */
        <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-950 text-stone-400 uppercase text-[10px] tracking-wider border-b border-stone-800">
                <tr>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4">Winner</th>
                  <th className="py-3 px-4">Nationality</th>
                  <th className="py-3 px-4">Club</th>
                  <th className="py-3 px-4">Runner-up</th>
                  <th className="py-3 px-4">Third Place</th>
                  <th className="py-3 px-4">Points</th>
                  <th className="py-3 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                {filteredData.map((item) => (
                  <tr
                    key={item.year}
                    onClick={() => setSelectedYear(item)}
                    className="hover:bg-stone-800/60 cursor-pointer transition-colors"
                  >
                    <td className="py-3 px-4 font-bold text-amber-400 font-mono text-sm">
                      {item.year}
                    </td>
                    <td className="py-3 px-4 font-bold text-stone-100 whitespace-nowrap">
                      {item.winnerFlag} {item.winner}
                    </td>
                    <td className="py-3 px-4 text-stone-300">
                      {item.nationality}
                    </td>
                    <td className="py-3 px-4 text-stone-400">
                      {item.club}
                    </td>
                    <td className="py-3 px-4 text-stone-300 whitespace-nowrap">
                      {item.runnerUpFlag} {item.runnerUp}
                    </td>
                    <td className="py-3 px-4 text-stone-400 whitespace-nowrap">
                      {item.thirdPlaceFlag} {item.thirdPlace}
                    </td>
                    <td className="py-3 px-4 font-mono text-stone-400">
                      {item.points}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedYear(item);
                        }}
                        className="text-amber-400 hover:text-amber-300 font-medium"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Year Detail Modal */}
      {selectedYear && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            id={`ballon-dor-modal-${selectedYear.year}`}
            className="bg-stone-900 border border-amber-500/30 w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-amber-500/20"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-serif font-black text-amber-400">
                  {selectedYear.year}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-stone-100">
                    Ballon d'Or Edition {selectedYear.year}
                  </h3>
                  <span className="text-xs text-stone-400">
                    Presented by France Football • Official Historical Voting Record
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedYear(null)}
                className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-stone-200 text-sm">
              {/* Winner Showcase */}
              <div className="bg-stone-950 border border-amber-500/30 rounded-xl p-5 text-center">
                <span className="text-4xl block mb-2">{selectedYear.winnerFlag}</span>
                <h4 className="text-2xl font-serif font-black text-stone-100">
                  {selectedYear.winner}
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  {selectedYear.club} • {selectedYear.nationality}
                </p>
                <div className="mt-3 inline-block bg-amber-500/20 text-amber-400 font-mono font-bold px-3 py-1 rounded-full text-xs">
                  {selectedYear.points}
                </div>
              </div>

              {/* Full Podium */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-stone-950/70 border border-stone-800 p-3.5 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                    Runner-up (Silver Ball)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{selectedYear.runnerUpFlag}</span>
                    <div>
                      <span className="font-bold text-stone-100 block text-sm">{selectedYear.runnerUp}</span>
                      <span className="text-[11px] text-stone-400">2nd Place</span>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-950/70 border border-stone-800 p-3.5 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                    Third Place (Bronze Ball)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{selectedYear.thirdPlaceFlag}</span>
                    <div>
                      <span className="font-bold text-stone-100 block text-sm">{selectedYear.thirdPlace}</span>
                      <span className="text-[11px] text-stone-400">3rd Place</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Winning Campaign Achievements
                </h4>
                <p className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 leading-relaxed text-stone-300 text-xs sm:text-sm">
                  {selectedYear.keyAchievement}
                </p>
              </div>

              {/* Era Context & Trivia */}
              {selectedYear.eraContext && (
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Historical Context & Voting Lore
                  </h4>
                  <p className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 leading-relaxed text-stone-400 text-xs sm:text-sm">
                    {selectedYear.eraContext}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer with AI Button */}
            <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={() => {
                  const query = `Provide an in-depth analysis of the ${selectedYear.year} Ballon d'Or award won by ${selectedYear.winner}. Who were the top contenders, what was the voting breakdown, and was there any controversy?`;
                  setSelectedYear(null);
                  onAskAi(query, `Ballon d'Or ${selectedYear.year}`);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-colors"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Ask AI Historian about {selectedYear.year} Vote</span>
              </button>
              <button
                onClick={() => setSelectedYear(null)}
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
