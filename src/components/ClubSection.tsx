import React, { useState, useMemo } from 'react';
import { CLUB_PROFILES } from '../data/clubData';
import { ClubProfile } from '../types';
import { 
  Shield, 
  Search, 
  Filter, 
  Trophy, 
  Calendar, 
  Users, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  Flame, 
  X,
  Building
} from 'lucide-react';

interface ClubSectionProps {
  onAskAi: (prompt: string, context?: string) => void;
}

const COUNTRIES = ["All", "Spain", "England", "Germany", "Italy", "France", "Netherlands"];

export const ClubSection: React.FC<ClubSectionProps> = ({ onAskAi }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedClub, setSelectedClub] = useState<ClubProfile | null>(null);

  const filteredClubs = useMemo(() => {
    return CLUB_PROFILES.filter((club) => {
      const matchesCountry = selectedCountry === 'All' || club.country === selectedCountry;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        club.name.toLowerCase().includes(q) ||
        club.shortName.toLowerCase().includes(q) ||
        club.country.toLowerCase().includes(q) ||
        club.stadium.name.toLowerCase().includes(q) ||
        club.legendaryPlayers.some(p => p.toLowerCase().includes(q));

      return matchesCountry && matchesSearch;
    });
  }, [searchQuery, selectedCountry]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Shield className="w-3.5 h-3.5" /> European & Global Club Royalty
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-serif text-stone-100 tracking-tight">
              Club History & Dynasties
            </h1>
            <p className="mt-2 text-stone-400 text-sm max-w-2xl leading-relaxed">
              Examine the origins, stadiums, legendary squads, major eras, and immortal matches of 14 iconic football clubs that shaped world football history.
            </p>
          </div>

          <button
            onClick={() => onAskAi("Compare the European dynasties of Real Madrid, AC Milan, and Liverpool across the 20th and 21st centuries.")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 fill-stone-950" />
            <span>Club Dynasties Analysis</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 shadow-md flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            id="club-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search club name, stadium, country (e.g. Madrid, Bernabéu, Milan)..."
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

        {/* Country Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] uppercase font-bold text-stone-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> League:
          </span>
          {COUNTRIES.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountry(c)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCountry === c
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Clubs Count */}
      <div className="text-xs text-stone-400 px-1 flex items-center justify-between">
        <span>Showing <strong className="text-stone-100">{filteredClubs.length}</strong> of {CLUB_PROFILES.length} clubs</span>
        {selectedCountry !== 'All' && (
          <button 
            onClick={() => setSelectedCountry('All')}
            className="text-amber-400 hover:underline"
          >
            Reset country filter
          </button>
        )}
      </div>

      {/* Club Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => {
          const uclTrophy = club.majorTrophies.find(t => 
            t.name.toLowerCase().includes('champions league') || 
            t.name.toLowerCase().includes('european cup')
          );

          return (
            <div
              key={club.id}
              id={`club-card-${club.id}`}
              onClick={() => setSelectedClub(club)}
              className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Header: Name, Country, Founded */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{club.countryFlag}</span>
                      <h3 className="text-lg font-bold font-serif text-stone-100 group-hover:text-amber-400 transition-colors">
                        {club.shortName}
                      </h3>
                    </div>
                    <span className="text-[11px] text-stone-400 block mt-0.5">
                      Founded {club.founded} • {club.country}
                    </span>
                  </div>

                  {uclTrophy && (
                    <div className="flex items-center gap-1 bg-stone-950 border border-amber-500/30 px-2.5 py-1 rounded-lg">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-mono font-bold text-xs text-amber-400">
                        {uclTrophy.count}
                      </span>
                    </div>
                  )}
                </div>

                {/* Stadium Info */}
                <div className="flex items-center gap-1.5 text-xs text-stone-300 bg-stone-950/70 border border-stone-800/80 px-3 py-2 rounded-lg mb-3">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                  <span className="truncate">{club.stadium.name} ({club.stadium.capacity.toLocaleString()} cap)</span>
                </div>

                {/* Summary */}
                <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed mb-4">
                  {club.historicalSummary}
                </p>

                {/* Legendary Players preview */}
                <div className="pt-3 border-t border-stone-800/80">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                    Club Legends:
                  </span>
                  <p className="text-xs text-stone-300 line-clamp-1">
                    {club.legendaryPlayers.slice(0, 4).join(', ')}...
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-amber-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Full Club Archive <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] text-stone-400 font-mono">
                  Est. {club.founded}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Club Deep-Dive Modal */}
      {selectedClub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            id={`club-modal-${selectedClub.id}`}
            className="bg-stone-900 border border-amber-500/30 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-amber-500/20"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedClub.countryFlag}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold font-serif text-stone-100">
                      {selectedClub.name}
                    </h3>
                  </div>
                  <span className="text-xs text-stone-400">
                    Founded in {selectedClub.founded} • {selectedClub.country}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedClub(null)}
                className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-stone-200 text-sm">
              {/* Stadium & Home Card */}
              <div className="bg-stone-950 border border-stone-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-100 text-sm block">
                      {selectedClub.stadium.name}
                    </span>
                    <span className="text-xs text-stone-400">
                      {selectedClub.stadium.city}, {selectedClub.country} • Opened {selectedClub.stadium.opened}
                    </span>
                  </div>
                </div>
                <div className="bg-stone-900 border border-stone-700 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-amber-400">
                  {selectedClub.stadium.capacity.toLocaleString()} Capacity
                </div>
              </div>

              {/* Historical Summary */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Historical Overview & Heritage
                </h4>
                <p className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 leading-relaxed text-stone-300 text-xs sm:text-sm">
                  {selectedClub.historicalSummary}
                </p>
              </div>

              {/* Major Eras */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Defining Eras & Dynasties
                </h4>
                <div className="space-y-3">
                  {selectedClub.majorEras.map((era, idx) => (
                    <div 
                      key={idx}
                      className="bg-stone-950/60 border border-stone-800/80 p-3.5 rounded-xl text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-100 text-sm">{era.title}</span>
                        <span className="font-mono text-amber-400 text-xs">{era.period}</span>
                      </div>
                      <p className="text-stone-300 leading-relaxed">{era.description}</p>
                      <div className="pt-1 flex flex-wrap gap-1">
                        {era.keyFigures.map((k, i) => (
                          <span key={i} className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trophies */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" /> Silverware & Honors
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {selectedClub.majorTrophies.map((trophy, idx) => (
                    <div 
                      key={idx}
                      className="bg-stone-950/60 border border-stone-800/80 p-3 rounded-lg flex items-center justify-between"
                    >
                      <div className="pr-2">
                        <span className="font-medium text-stone-200 text-xs block leading-tight">
                          {trophy.name}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-base text-amber-400">
                        {trophy.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Famous Managers & Legendary Players */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-stone-950/60 border border-stone-800/80 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Famous Managers
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedClub.famousManagers.map((m, idx) => (
                      <span key={idx} className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1 rounded-md border border-stone-700">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-stone-950/60 border border-stone-800/80 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Club Icons & Legends
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedClub.legendaryPlayers.map((p, idx) => (
                      <span key={idx} className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1 rounded-md border border-stone-700">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Defining Matches */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" /> Iconic Matches
                </h4>
                <div className="space-y-2">
                  {selectedClub.importantMatches.map((match, idx) => (
                    <div 
                      key={idx}
                      className="bg-stone-950/60 border border-stone-800/80 p-3 rounded-xl text-xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-stone-200">{match.title}</span>
                        <span className="font-mono text-amber-400">{match.date}</span>
                      </div>
                      <p className="text-stone-400 leading-relaxed">{match.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with AI prompt */}
            <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={() => {
                  const query = `Provide an authoritative historical retrospective of ${selectedClub.name}, including its founding origins, tactical breakthroughs, greatest squads, and historical European pedigree.`;
                  setSelectedClub(null);
                  onAskAi(query, `${selectedClub.name} (${selectedClub.country})`);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-colors"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Ask AI Historian about {selectedClub.shortName}</span>
              </button>
              <button
                onClick={() => setSelectedClub(null)}
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
