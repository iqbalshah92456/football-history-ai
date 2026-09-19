export type ActiveSection = 
  | 'world-cup'
  | 'players'
  | 'clubs'
  | 'competitions'
  | 'ballon-dor'
  | 'matches'
  | 'records'
  | 'ai-chat';

export interface WorldCupTournament {
  year: number;
  host: string;
  hostCountry?: string;
  hostFlag: string;
  winner: string;
  winnerFlag: string;
  runnerUp: string;
  runnerUpFlag: string;
  thirdPlace?: string;
  finalScore: string | { score: string; note?: string };
  finalVenue?: string;
  finalAttendance?: string;
  topScorer: string | { name: string; country: string; goals: number };
  topScorerGoals?: number;
  bestPlayer?: string;
  totalGoals: number;
  teamsCount?: number;
  totalTeams?: number;
  decade?: string;
  importantMoments: string[];
  famousPlayers: string[];
  historicalContext: string;
  tacticalInnovations?: string;
}

export interface PlayerClubStint {
  club: string;
  years: string;
  appearances: number;
  goals: number;
}

export interface PlayerProfile {
  id: string;
  fullName: string;
  knownAs?: string;
  shortName?: string;
  nationality: string;
  nationalityFlag?: string;
  countryFlag?: string;
  position: string;
  dateOfBirth: string;
  birthPlace?: string;
  image?: string;
  jerseyNumber?: number;
  bio?: string;
  famousQuote?: string;
  playingStyle: string;
  careerTimeline: any[];
  clubs: any;
  internationalCareer?: {
    team: string;
    years: string;
    caps: number;
    goals: number;
    achievements: string[];
  };
  majorTrophies: any;
  individualAwards?: string[];
  importantMatches?: {
    match?: string;
    title?: string;
    date: string;
    role?: string;
    summary?: string;
    impact?: string;
  }[];
  legendaryMatches?: {
    title: string;
    date: string;
    impact: string;
  }[];
  careerStats?: {
    totalMatches: number;
    totalGoals: number;
    totalAssists: number;
    internationalGoals: number;
    trophyCount: number;
  };
  stats?: any;
  historicalContext?: string;
}

export interface ClubTrophy {
  name: string;
  count: number;
  years?: string[];
}

export interface ClubEra {
  title: string;
  period: string;
  description: string;
  keyFigures: string[];
}

export interface ClubProfile {
  id: string;
  name: string;
  shortName: string;
  country: string;
  countryFlag: string;
  founded: number;
  stadium: {
    name: string;
    capacity: number;
    opened: number;
    city: string;
  };
  colors?: {
    primary: string;
    secondary: string;
    accent?: string;
  };
  historicalTimeline?: {
    decade: string;
    title: string;
    narrative?: string;
    description?: string;
  }[];
  legendaryPlayers: string[];
  famousManagers: string[];
  majorTrophies: ClubTrophy[];
  importantMatches: {
    title: string;
    date: string;
    opponent?: string;
    score?: string;
    description: string;
  }[];
  majorEras: ClubEra[];
  historicalSummary: string;
}

export interface CompetitionProfile {
  id: string;
  name: string;
  type: 'International Tournament' | 'Continental Club' | 'Domestic League';
  region: string;
  founded: number;
  trophyName: string;
  mostTitlesTeam: string;
  mostTitlesCount: number;
  history: string;
  majorEras: {
    era: string;
    period: string;
    highlights: string;
  }[];
  famousTeams: string[];
  famousPlayers: string[];
  importantRecords: {
    title: string;
    holder: string;
    value: string;
    context: string;
  }[];
  historicalMoments: {
    year: number;
    title: string;
    description: string;
  }[];
}

export interface BallonDorYear {
  year: number;
  winner: string;
  nationality: string;
  winnerFlag: string;
  club: string;
  runnerUp: string;
  runnerUpFlag: string;
  thirdPlace: string;
  thirdPlaceFlag?: string;
  points: string;
  keyAchievement: string;
  eraContext?: string;
}

export interface BallonDorWinner {
  year: number;
  winner: string;
  country: string;
  countryFlag: string;
  club: string;
  runnerUp: string;
  thirdPlace: string;
  majorAchievements: string;
  historicalContext: string;
  pointsOrVoteSummary?: string;
}

export interface LegendaryMatch {
  id: string;
  title: string;
  date: string;
  competition: string;
  stage?: string;
  venue: string;
  city?: string;
  country?: string;
  attendance: string;
  team1: {
    name: string;
    flag: string;
    score: number;
    scorers: string[];
  };
  team2: {
    name: string;
    flag: string;
    score: number;
    scorers: string[];
  };
  teams?: {
    home: string;
    away: string;
    homeFlag: string;
    awayFlag: string;
  };
  score?: string;
  summary?: string;
  tacticalContext?: string;
  tacticalNote?: string;
  iconicMoments?: string[];
  keyEvents?: {
    minute: string;
    description: string;
    team: 'home' | 'away' | 'neutral';
  }[];
  importantPlayers?: string[];
  historicalSignificance: string;
}

export interface FootballRecordItem {
  id?: string;
  title: string;
  holder: string;
  recordHolder?: string;
  value: string;
  recordValue?: string;
  dateOrEra: string;
  context: string;
  historicalContext?: string;
  verifiedBy?: string;
  funFact?: string;
}

export interface FootballRecordCategory {
  id: string;
  title?: string;
  categoryName: string;
  icon?: string;
  iconName?: string;
  description: string;
  records: FootballRecordItem[];
}
