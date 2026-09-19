import React, { useState, useMemo } from 'react';
import { PLAYER_PROFILES } from '../data/playerData';
import { PlayerProfile } from '../types';
import { 
  Users, 
  Search, 
  Filter, 
  Trophy, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  Quote, 
  Flame,
  X,
  Footprints
} from 'lucide-react';

interface PlayerSectionProps {
  onAskAi: (prompt: string, context?: string) => void;
}

const POSITIONS = ["All", "Forward", "Midfielder", "Defender"];

export const PlayerSection: React.FC<PlayerSectionProps> = ({ onAskAi }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerProfile | null>(null);

  const getPlayerShortName = (p: PlayerProfile): string => {
    return p.knownAs || p.shortName || p.fullName;
  };

  const getPlayerFlag = (p: PlayerProfile): string => {
    return p.countryFlag || p.nationalityFlag || '⚽';
  };

  const getPlayerGoals = (p: PlayerProfile): number | string => {
    if (p.careerStats?.totalGoals !== undefined) return p.careerStats.totalGoals;
    if (p.stats?.goals !== undefined) return p.stats.goals;
    return 'N/A';
  };

  const getPlayerApps = (p: PlayerProfile): number | string => {
    if (p.careerStats?.totalMatches !== undefined) return p.careerStats.totalMatches;
    if (p.stats?.appearances !== undefined) return p.stats.appearances;
    return 'N/A';
  };

  const getPlayerClubsList = (p: PlayerProfile): string[] => {
    if (Array.isArray(p.clubs)) {
      return p.clubs.map((c: any) => typeof c === 'string' ? c : c.club);
    }
    return [];
  };

  const filteredPlayers = useMemo(() => {
    return PLAYER_PROFILES.filter((player) => {
      const matchesPos = 
        selectedPosition === 'All' || 
        player.position.toLowerCase().includes(selectedPosition.toLowerCase());
      
      const q = searchQuery.toLowerCase().trim();
      const shortName = getPlayerShortName(player).toLowerCase();
      const clubs = getPlayerClubsList(player).join(' ').toLowerCase();

      const matchesSearch = 
        !q ||
        player.fullName.toLowerCase().includes(q) ||
        shortName.includes(q) ||
        player.nationality.toLowerCase().includes(q) ||
        clubs.includes(q);

      return matchesPos && matchesSearch;
    });
  }, [searchQuery, selectedPosition]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Header */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Users className="w-3.5 h-3.5" /> Hall of Immortals & Modern Titans
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-serif text-stone-100 tracking-tight">
              Player History & Profiles
            </h1>
            <p className="mt-2 text-stone-400 text-sm max-w-2xl leading-relaxed">
              Explore in-depth biographies, tactical innovations, statistical triumphs, and career milestones of 15 legendary and modern footballing masters.
            </p>
          </div>

          <button
            onClick={() => onAskAi("Compare the tactical evolutions and career pinnacles of Pelé, Diego Maradona, and Lionel Messi.")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 fill-stone-950" />
            <span>Compare GOAT Debates</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 shadow-md flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            id="player-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search player name, nationality, club (e.g. Cruyff, Argentina, Barcelona)..."
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

        {/* Position Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] uppercase font-bold text-stone-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Position:
          </span>
          {POSITIONS.map((pos) => (
            <button
              key={pos}
              onClick={() => setSelectedPosition(pos)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedPosition === pos
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>
      </div>

      {/* Showing Player count */}
      <div className="text-xs text-stone-400 px-1 flex items-center justify-between">
        <span>Showing <strong className="text-stone-100">{filteredPlayers.length}</strong> of {PLAYER_PROFILES.length} player profiles</span>
        {selectedPosition !== 'All' && (
          <button 
            onClick={() => setSelectedPosition('All')}
            className="text-amber-400 hover:underline"
          >
            Reset position filter
          </button>
        )}
      </div>

      {/* Player Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map((player) => {
          const shortName = getPlayerShortName(player);
          const flag = getPlayerFlag(player);
          const goals = getPlayerGoals(player);
          const apps = getPlayerApps(player);
          const clubs = getPlayerClubsList(player);

          return (
            <div
              key={player.id}
              id={`player-card-${player.id}`}
              onClick={() => setSelectedPlayer(player)}
              className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Header: Name, Flag, Position */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{flag}</span>
                      <h3 className="text-lg font-bold font-serif text-stone-100 group-hover:text-amber-400 transition-colors">
                        {shortName}
                      </h3>
                    </div>
                    <span className="text-xs text-stone-400 block mt-0.5">
                      {player.fullName}
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-stone-800 text-amber-400 border border-amber-500/20 font-medium">
                    {player.position}
                  </span>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed mt-2 mb-4">
                  {player.bio || player.historicalContext || player.playingStyle}
                </p>

                {/* Career quick stats */}
                <div className="grid grid-cols-3 gap-2 bg-stone-950/80 border border-stone-800/80 rounded-lg p-2.5 text-center text-xs">
                  <div>
                    <span className="block font-mono font-bold text-stone-100 text-sm">
                      {goals}
                    </span>
                    <span className="text-[10px] text-stone-400">Goals</span>
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-stone-100 text-sm">
                      {apps}
                    </span>
                    <span className="text-[10px] text-stone-400">Matches</span>
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-amber-400 text-sm">
                      {player.careerStats?.trophyCount ?? 'Legend'}
                    </span>
                    <span className="text-[10px] text-stone-400">Trophies</span>
                  </div>
                </div>

                {/* Clubs list */}
                {clubs.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-stone-800/80">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                      Clubs:
                    </span>
                    <p className="text-xs text-stone-300 line-clamp-1">
                      {clubs.join(' • ')}
                    </p>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-amber-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Complete Dossier <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] text-stone-400 font-mono">
                  Born {player.dateOfBirth}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Player Deep-Dive Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            id={`player-modal-${selectedPlayer.id}`}
            className="bg-stone-900 border border-amber-500/30 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-amber-500/20"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{getPlayerFlag(selectedPlayer)}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold font-serif text-stone-100">
                      {selectedPlayer.fullName}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      {selectedPlayer.position}
                    </span>
                  </div>
                  <span className="text-xs text-stone-400">
                    Born {selectedPlayer.dateOfBirth} • {selectedPlayer.nationality}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPlayer(null)}
                className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-stone-200 text-sm">
              {/* Career Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-950 border border-stone-800 rounded-xl p-4 text-center">
                <div>
                  <span className="block font-mono font-black text-xl text-stone-100">
                    {getPlayerGoals(selectedPlayer)}
                  </span>
                  <span className="text-[11px] text-stone-400">Career Goals</span>
                </div>
                <div>
                  <span className="block font-mono font-black text-xl text-stone-100">
                    {getPlayerApps(selectedPlayer)}
                  </span>
                  <span className="text-[11px] text-stone-400">Appearances</span>
                </div>
                <div>
                  <span className="block font-mono font-black text-xl text-stone-100">
                    {selectedPlayer.internationalCareer?.caps ?? selectedPlayer.careerStats?.internationalGoals ?? '★'}
                  </span>
                  <span className="text-[11px] text-stone-400">Intl Caps</span>
                </div>
                <div>
                  <span className="block font-mono font-black text-xl text-amber-400">
                    {selectedPlayer.careerStats?.trophyCount ?? selectedPlayer.individualAwards?.length ?? '★'}
                  </span>
                  <span className="text-[11px] text-stone-400">Major Honors</span>
                </div>
              </div>

              {/* Playing Style & Tactical Impact */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Footprints className="w-3.5 h-3.5" /> Historical Playing Style & Tactical Impact
                </h4>
                <p className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 leading-relaxed text-stone-300 text-xs sm:text-sm">
                  {selectedPlayer.playingStyle}
                </p>
              </div>

              {/* Career Timeline */}
              {selectedPlayer.careerTimeline && selectedPlayer.careerTimeline.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Career Timeline & Key Chapters
                  </h4>
                  <div className="space-y-2">
                    {selectedPlayer.careerTimeline.map((item: any, idx: number) => (
                      <div 
                        key={idx}
                        className="bg-stone-950/60 border border-stone-800/80 p-3 rounded-xl flex items-start gap-3 text-xs"
                      >
                        <span className="font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
                          {item.year || item.period}
                        </span>
                        <div>
                          <span className="font-bold text-stone-100 block mb-0.5">
                            {item.event || item.club}
                          </span>
                          <span className="text-stone-400 leading-relaxed">
                            {item.description || item.highlights}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Club Stints */}
              {Array.isArray(selectedPlayer.clubs) && selectedPlayer.clubs.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" /> Club Records & Stints
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPlayer.clubs.map((c: any, idx: number) => (
                      <div 
                        key={idx}
                        className="bg-stone-950/60 border border-stone-800/80 p-3 rounded-lg text-xs"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-100 mb-1">
                          <span>{typeof c === 'string' ? c : c.club}</span>
                          {c.years && <span className="text-stone-400 font-mono">{c.years}</span>}
                        </div>
                        {c.appearances !== undefined && (
                          <span className="text-stone-400 text-[11px]">
                            {c.appearances} apps • {c.goals} goals
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Major Trophies or Awards */}
              {selectedPlayer.individualAwards && selectedPlayer.individualAwards.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" /> Individual Awards & Records
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPlayer.individualAwards.map((award: string, idx: number) => (
                      <span 
                        key={idx}
                        className="bg-stone-950/80 text-amber-300 border border-amber-500/20 text-xs px-2.5 py-1 rounded-md"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Defining Matches */}
              {selectedPlayer.importantMatches && selectedPlayer.importantMatches.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" /> Defining Career Encounters
                  </h4>
                  <div className="space-y-2">
                    {selectedPlayer.importantMatches.map((m: any, idx: number) => (
                      <div 
                        key={idx}
                        className="bg-stone-950/60 border border-stone-800/80 p-3 rounded-xl text-xs"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-stone-200">{m.match || m.title}</span>
                          <span className="font-mono text-amber-400">{m.date}</span>
                        </div>
                        <p className="text-stone-400">{m.summary || m.role || m.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Famous Quote */}
              {selectedPlayer.famousQuote && (
                <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/5 border border-amber-500/20 p-4 rounded-xl flex items-start gap-3">
                  <Quote className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="italic text-stone-200 text-xs sm:text-sm leading-relaxed">
                      "{selectedPlayer.famousQuote}"
                    </p>
                    <span className="text-[11px] text-amber-400 font-semibold mt-1 block">
                      — {getPlayerShortName(selectedPlayer)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer with AI prompt */}
            <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={() => {
                  const name = getPlayerShortName(selectedPlayer);
                  const query = `Provide a masterclass breakdown of ${selectedPlayer.fullName}'s tactical evolution, peak career moments, and all-time standing in world football history.`;
                  setSelectedPlayer(null);
                  onAskAi(query, `${selectedPlayer.fullName} (${selectedPlayer.nationality})`);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-colors"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Ask AI Historian about {getPlayerShortName(selectedPlayer)}</span>
              </button>
              <button
                onClick={() => setSelectedPlayer(null)}
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
