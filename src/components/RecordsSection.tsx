import React, { useState, useMemo } from 'react';
import { FOOTBALL_RECORD_CATEGORIES } from '../data/recordsData';
import { FootballRecordCategory, FootballRecordItem } from '../types';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Target, 
  Flame, 
  Trophy, 
  Shield, 
  Banknote, 
  Activity, 
  Globe, 
  Award, 
  Zap, 
  Users, 
  CheckCircle2, 
  X,
  ChevronRight
} from 'lucide-react';

interface RecordsSectionProps {
  onAskAi: (prompt: string, context?: string) => void;
}

export const RecordsSection: React.FC<RecordsSectionProps> = ({ onAskAi }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all-time-goalscorers");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<{ record: FootballRecordItem; categoryName: string } | null>(null);

  // Icon map for categories
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'all-time-goalscorers': return Target;
      case 'single-match-goals': return Flame;
      case 'trophies-and-honours': return Trophy;
      case 'goalkeeping-clean-sheets': return Shield;
      case 'transfers-and-economics': return Banknote;
      case 'unbeaten-runs': return Activity;
      case 'world-cup-records': return Globe;
      case 'champions-league-milestones': return Award;
      case 'speed-and-fastest-feats': return Zap;
      case 'stadium-attendance-milestones': return Users;
      default: return BookOpen;
    }
  };

  const currentCategoryData = useMemo(() => {
    return FOOTBALL_RECORD_CATEGORIES.find(c => c.id === selectedCategory);
  }, [selectedCategory]);

  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return null;

    const results: { record: FootballRecordItem; categoryName: string }[] = [];
    FOOTBALL_RECORD_CATEGORIES.forEach(cat => {
      cat.records.forEach(rec => {
        if (
          rec.title.toLowerCase().includes(q) ||
          rec.holder.toLowerCase().includes(q) ||
          rec.value.toLowerCase().includes(q) ||
          rec.context.toLowerCase().includes(q)
        ) {
          results.push({ record: rec, categoryName: cat.categoryName });
        }
      });
    });
    return results;
  }, [searchQuery]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <BookOpen className="w-3.5 h-3.5" /> 10 Official Record Categories
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-serif text-stone-100 tracking-tight">
              Football Records & Milestones
            </h1>
            <p className="mt-2 text-stone-400 text-sm max-w-2xl leading-relaxed">
              Explore the pinnacle benchmarks of football history: all-time scorers, miraculous clean-sheet streaks, world-record transfers, and unbeatable tournament achievements.
            </p>
          </div>

          <button
            onClick={() => onAskAi("Which football records are considered truly unbreakable in the modern game (e.g. Fontaine's 13 World Cup goals, Pelé's 3 World Cups, Van der Sar's 1311 clean sheet minutes)?")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 fill-stone-950" />
            <span>Unbreakable Records Debate</span>
          </button>
        </div>
      </div>

      {/* Global Search Bar */}
      <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 shadow-md">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            id="records-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any record, player, or stat across all 10 categories (e.g. Fontaine, 91 goals, Lewandowski, clean sheets)..."
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
      </div>

      {/* Search Results Mode */}
      {searchResults !== null ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-stone-400 px-1">
            <span>Found <strong className="text-stone-100">{searchResults.length}</strong> matching records</span>
            <button onClick={() => setSearchQuery('')} className="text-amber-400 hover:underline">
              Clear search & view categories
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {searchResults.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedRecord(item)}
                className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 p-5 rounded-xl shadow-lg cursor-pointer transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {item.categoryName}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">{item.record.dateOrEra}</span>
                </div>
                <h4 className="text-base font-bold text-stone-100 mb-1">{item.record.title}</h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif font-black text-xl text-amber-400">{item.record.value}</span>
                  <span className="text-xs text-stone-300 font-medium">({item.record.holder})</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">{item.record.context}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Categories Tab & Content Mode */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Category Navigation Pills */}
          <div className="lg:col-span-1 space-y-1.5 overflow-x-auto lg:overflow-visible flex lg:flex-col pb-2 lg:pb-0 scrollbar-none">
            {FOOTBALL_RECORD_CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`record-category-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all text-left whitespace-nowrap lg:whitespace-normal ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-950/40'
                      : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-stone-950 stroke-[2.5]' : 'text-amber-400'}`} />
                  <span className="truncate">{cat.categoryName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display */}
          <div className="lg:col-span-3 space-y-4">
            {currentCategoryData && (
              <>
                {/* Category Header */}
                <div className="bg-stone-900/90 border border-stone-800 p-5 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-serif text-stone-100">
                      {currentCategoryData.categoryName}
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {currentCategoryData.description}
                    </p>
                  </div>
                  <button
                    onClick={() => onAskAi(`Provide detailed historical context, verification, and all-time records in the category of "${currentCategoryData.categoryName}".`)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 text-xs font-semibold transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ask AI</span>
                  </button>
                </div>

                {/* Records List */}
                <div className="space-y-4">
                  {currentCategoryData.records.map((rec, idx) => (
                    <div
                      key={idx}
                      id={`record-card-${idx}`}
                      onClick={() => setSelectedRecord({ record: rec, categoryName: currentCategoryData.categoryName })}
                      className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 p-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-200 group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                          {rec.title}
                        </h4>
                        <span className="font-mono text-xs text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800 self-start sm:self-auto">
                          {rec.dateOrEra}
                        </span>
                      </div>

                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="font-serif font-black text-2xl text-amber-400">
                          {rec.value}
                        </span>
                        <span className="text-xs text-stone-300 font-semibold">
                          — {rec.holder}
                        </span>
                      </div>

                      <p className="text-xs text-stone-400 leading-relaxed mb-3">
                        {rec.context}
                      </p>

                      <div className="flex items-center justify-between text-[11px] pt-2 border-t border-stone-800/80 text-stone-400">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" /> {rec.verifiedBy}
                        </span>
                        <span className="text-amber-400 font-medium flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          Details <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Record Deep-Dive Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            id="record-modal"
            className="bg-stone-900 border border-amber-500/30 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden ring-1 ring-amber-500/20"
          >
            <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 block">
                  {selectedRecord.categoryName}
                </span>
                <h3 className="text-base font-bold text-stone-100">
                  {selectedRecord.record.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRecord(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-sm text-stone-200">
              <div className="bg-stone-950 border border-amber-500/30 rounded-xl p-4 text-center">
                <span className="text-[11px] text-stone-400 uppercase font-bold block mb-1">
                  Record Metric
                </span>
                <span className="font-serif font-black text-3xl text-amber-400 block">
                  {selectedRecord.record.value}
                </span>
                <span className="text-sm font-bold text-stone-100 mt-1 block">
                  {selectedRecord.record.holder}
                </span>
                <span className="text-xs text-stone-400 font-mono mt-0.5 block">
                  Date / Era: {selectedRecord.record.dateOrEra}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                  Historical Context & Breakdown
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed bg-stone-950/60 p-3.5 rounded-xl border border-stone-800">
                  {selectedRecord.record.context}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-900/60 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Verification Source: <strong>{selectedRecord.record.verifiedBy}</strong></span>
              </div>
            </div>

            <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={() => {
                  const query = `Provide full historical details and trivia regarding the record: "${selectedRecord.record.title}" held by ${selectedRecord.record.holder} (${selectedRecord.record.value}). Who is closest to breaking it?`;
                  setSelectedRecord(null);
                  onAskAi(query, selectedRecord.record.title);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-colors"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>Ask AI about this Record</span>
              </button>
              <button
                onClick={() => setSelectedRecord(null)}
                className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold"
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
