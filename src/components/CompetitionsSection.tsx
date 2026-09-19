import React, { useState, useMemo } from 'react';
import { COMPETITION_PROFILES } from '../data/competitionData';
import { CompetitionProfile } from '../types';
import { 
  Trophy, 
  Search, 
  Filter, 
  Calendar, 
  Users, 
  Sparkles, 
  ChevronRight, 
  Award, 
  Flame, 
  X,
  Globe2,
  BookOpen
} from 'lucide-react';

interface CompetitionsSectionProps {
  onAskAi: (prompt: string, context?: string) => void;
}

const COMP_TYPES = ["All", "International Tournament", "Continental Club", "Domestic League"];

export const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({ onAskAi }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedComp, setSelectedComp] = useState<CompetitionProfile | null>(null);

  const filteredCompetitions = useMemo(() => {
    return COMPETITION_PROFILES.filter((comp) => {
      const matchesType = selectedType === 'All' || comp.type === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        comp.name.toLowerCase().includes(q) ||
        comp.region.toLowerCase().includes(q) ||
        comp.mostTitlesTeam.toLowerCase().includes(q) ||
        comp.famousTeams.some(t => t.toLowerCase().includes(q));

      return matchesType && matchesSearch;
    });
  }, [searchQuery, selectedType]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Trophy className="w-3.5 h-3.5" /> Continental & Domestic Tournaments
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-serif text-stone-100 tracking-tight">
              Major Competitions
            </h1>
            <p className="mt-2 text-stone-400 text-sm max-w-2xl leading-relaxed">
              Explore the history, trophy lore, all-time record holders, legendary teams, and iconic eras of 14 premier international and club football tournaments.
            </p>
          </div>

          <button
            onClick={() => onAskAi("Analyze how continental club competitions like the European Cup and Copa Libertadores shaped football's modern global economy.")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 fill-stone-950" />
            <span>Tournament History Analysis</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 shadow-md flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            id="comp-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search competition, region, title holder (e.g. Champions League, Real Madrid, CONMEBOL)..."
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

        {/* Type Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] uppercase font-bold text-stone-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Category:
          </span>
          {COMP_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedType === type
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Showing count */}
      <div className="text-xs text-stone-400 px-1 flex items-center justify-between">
        <span>Showing <strong className="text-stone-100">{filteredCompetitions.length}</strong> of {COMPETITION_PROFILES.length} major competitions</span>
        {selectedType !== 'All' && (
          <button 
            onClick={() => setSelectedType('All')}
            className="text-amber-400 hover:underline"
          >
            Reset filter
          </button>
        )}
      </div>

      {/* Competitions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompetitions.map((comp) => (
          <div
            key={comp.id}
            id={`comp-card-${comp.id}`}
            onClick={() => setSelectedComp(comp)}
            className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              {/* Header: Name, Region, Type */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold font-serif text-stone-100 group-hover:text-amber-400 transition-colors">
                    {comp.name}
                  </h3>
                  <span className="text-xs text-stone-400 block mt-0.5">
                    {comp.region} • Founded {comp.founded}
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-800 text-amber-400 border border-amber-500/20 font-medium whitespace-nowrap">
                  {comp.type}
                </span>
              </div>

              {/* Most Successful Banner */}
              <div className="bg-stone-950/80 border border-stone-800/80 rounded-lg p-2.5 my-3 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">
                    Most Successful Team:
                  </span>
                  <span className="font-semibold text-stone-100 block truncate">
                    {comp.mostTitlesTeam}
                  </span>
                </div>
                <div className="bg-amber-500/20 text-amber-400 font-mono font-bold px-2 py-1 rounded text-xs">
                  {comp.mostTitlesCount} Titles
                </div>
              </div>

              {/* History excerpt */}
              <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed mb-3">
                {comp.history}
              </p>

              {/* Famous teams */}
              <div className="pt-2 border-t border-stone-800/80">
                <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Legendary Teams:
                </span>
                <p className="text-xs text-stone-300 line-clamp-1">
                  {comp.famousTeams.join(' • ')}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
              <span className="text-amber-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Complete Tournament Archive <ChevronRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-[11px] text-stone-400 font-mono">
                Est. {comp.founded}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Modal */}
      {selectedComp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            id={`comp-modal-${selectedComp.id}`}
            className="bg-stone-900 border border-amber-500/30 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-amber-500/20"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold font-serif text-stone-100">
                      {selectedComp.name}
                    </h3>
                  </div>
                  <span className="text-xs text-stone-400">
                    {selectedComp.type} • {selectedComp.region} • Founded {selectedComp.founded}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedComp(null)}
                className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-stone-200 text-sm">
              {/* Trophy Details */}
              <div className="bg-stone-950 border border-stone-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block mb-0.5">
                    Official Trophy
                  </span>
                  <span className="font-bold text-stone-100 text-sm">
                    {selectedComp.trophyName}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 font-bold block mb-0.5">
                    All-Time Record Winner
                  </span>
                  <span className="font-bold text-amber-400 text-sm">
                    {selectedComp.mostTitlesTeam}
                  </span>
                </div>
              </div>

              {/* History */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Origin & Historical Evolution
                </h4>
                <p className="bg-stone-950/60 p-4 rounded-xl border border-stone-800/80 leading-relaxed text-stone-300 text-xs sm:text-sm">
                  {selectedComp.history}
                </p>
              </div>

              {/* Major Eras */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Defining Historical Eras
                </h4>
                <div className="space-y-2.5">
                  {selectedComp.majorEras.map((era, idx) => (
                    <div 
                      key={idx}
                      className="bg-stone-950/60 border border-stone-800/80 p-3.5 rounded-xl text-xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-stone-100">{era.era}</span>
                        <span className="font-mono text-amber-400 text-[11px]">{era.period}</span>
                      </div>
                      <p className="text-stone-300">{era.highlights}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Records */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> All-Time Records & Benchmarks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedComp.importantRecords.map((rec, idx) => (
                    <div 
                      key={idx}
                      className="bg-stone-950/60 border border-stone-800/80 p-3 rounded-lg text-xs"
                    >
                      <span className="text-stone-400 block text-[10px] uppercase font-bold">{rec.title}</span>
                      <span className="font-bold text-stone-100 text-sm block mt-0.5">{rec.holder}</span>
                      <span className="font-mono text-amber-400 font-bold block">{rec.value}</span>
                      <span className="text-[11px] text-stone-400 block mt-1">{rec.context}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historical Moments */}
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" /> Iconic Moments
                </h4>
                <div className="space-y-2">
                  {selectedComp.historicalMoments.map((m, idx) => (
                    <div 
                      key={idx}
                      className="bg-stone-950/60 border border-stone-800/80 p-3 rounded-xl text-xs flex items-start gap-3"
                    >
                      <span className="font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {m.year}
                      </span>
                      <div>
                        <span className="font-bold text-stone-100 block">{m.title}</span>
                        <p className="text-stone-400 mt-0.5">{m.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with AI button */}
            <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={() => {
                  const query = `Provide an authoritative retrospective on the history of the ${selectedComp.name}, including its founding context, its greatest matches, and its historical impact on the sport.`;
                  setSelectedComp(null);
                  onAskAi(query, `${selectedComp.name} History`);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-colors"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Ask AI Historian about {selectedComp.name}</span>
              </button>
              <button
                onClick={() => setSelectedComp(null)}
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
