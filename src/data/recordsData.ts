import { FootballRecordCategory } from '../types';

export const FOOTBALL_RECORD_CATEGORIES: FootballRecordCategory[] = [
  {
    id: "all-time-goalscorers",
    categoryName: "All-Time Goalscorers",
    icon: "Target",
    description: "Official career goals recognized by FIFA, RSSSF, and official confederations across club and international senior competition.",
    records: [
      {
        title: "All-Time Top Scorer in Football History",
        holder: "Cristiano Ronaldo (Portugal)",
        value: "900+ official goals",
        context: "Scored for Sporting CP (5), Manchester United (145), Real Madrid (450), Juventus (101), Al Nassr, and Portugal (130+).",
        dateOrEra: "2002–present",
        verifiedBy: "FIFA / RSSSF Official Records"
      },
      {
        title: "Most Official Goals for a Single Club",
        holder: "Lionel Messi (Barcelona)",
        value: "672 goals in 778 matches",
        context: "Broke Pelé's longstanding record of 643 goals for Santos.",
        dateOrEra: "2004–2021",
        verifiedBy: "FC Barcelona / Guinness World Records"
      },
      {
        title: "Highest Documented Career Goals (Total)",
        holder: "Josef Bican (Austria / Czechoslovakia)",
        value: "805+ official goals",
        context: "Prolific pre-war and post-war center forward who scored at a rate of 1.52 goals per match.",
        dateOrEra: "1931–1955",
        verifiedBy: "RSSSF"
      },
      {
        title: "Most International Goals (Men's)",
        holder: "Cristiano Ronaldo (Portugal)",
        value: "133+ international goals",
        context: "Surpassed Iranian legend Ali Daei's record of 109 goals in September 2021.",
        dateOrEra: "2003–present",
        verifiedBy: "FIFA"
      },
      {
        title: "Most Goals in a Single Calendar Year",
        holder: "Lionel Messi (Barcelona & Argentina)",
        value: "91 goals in 69 matches",
        context: "Scored 79 for Barcelona and 12 for Argentina in 2012, breaking Gerd Müller's 1972 record of 85 goals.",
        dateOrEra: "2012",
        verifiedBy: "Guinness World Records"
      }
    ]
  },
  {
    id: "single-match-goals",
    categoryName: "Single Match Goals & Feats",
    icon: "Flame",
    description: "Extraordinary individual goal-scoring outbursts within a single 90-minute regulation match.",
    records: [
      {
        title: "Most Goals in an International Match",
        holder: "Archie Thompson (Australia)",
        value: "13 goals",
        context: "Scored in Australia's 31-0 victory against American Samoa in 2002 World Cup qualification.",
        dateOrEra: "April 11, 2001",
        verifiedBy: "FIFA Match Report"
      },
      {
        title: "Most Goals in a World Cup Finals Match",
        holder: "Oleg Salenko (Russia)",
        value: "5 goals",
        context: "Scored five times against Cameroon in the 1994 World Cup group stage in Stanford.",
        dateOrEra: "June 28, 1994",
        verifiedBy: "FIFA World Cup Archives"
      },
      {
        title: "Most Goals in a Single UEFA Champions League Match",
        holder: "Lionel Messi, Luiz Adriano, Erling Haaland",
        value: "5 goals",
        context: "Messi vs Leverkusen (2012), Adriano vs BATE Borisov (2014), Haaland vs RB Leipzig (2023).",
        dateOrEra: "2012, 2014, 2023",
        verifiedBy: "UEFA"
      },
      {
        title: "Fastest 5-Goal Haul as a Substitute",
        holder: "Robert Lewandowski (Bayern Munich)",
        value: "5 goals in 8 minutes 59 seconds",
        context: "Came on at half-time with Bayern trailing Wolfsburg 0-1 and scored in minutes 51, 52, 55, 57, and 60.",
        dateOrEra: "September 22, 2015",
        verifiedBy: "Guinness World Records (4 certificates)"
      }
    ]
  },
  {
    id: "trophies-and-honours",
    categoryName: "Trophy Counts & Individual Honours",
    icon: "Trophy",
    description: "The most decorated players and managers in football annals.",
    records: [
      {
        title: "Most Senior Trophies Won by a Player",
        holder: "Lionel Messi",
        value: "46 trophies",
        context: "Barcelona (35), PSG (3), Inter Miami (2), Argentina National Team (6: World Cup, 2 Copa América, Finalissima, Olympics, U-20).",
        dateOrEra: "2004–present",
        verifiedBy: "Official Football Associations"
      },
      {
        title: "Most Senior Trophies Won by a Manager",
        holder: "Sir Alex Ferguson",
        value: "49 trophies",
        context: "St Mirren (1), Aberdeen (10), Manchester United (38 over 26 years).",
        dateOrEra: "1974–2013",
        verifiedBy: "League Managers Association"
      },
      {
        title: "Most European Cup / Champions League Titles (Player)",
        holder: "Paco Gento, Dani Carvajal, Luka Modrić, Toni Kroos, Nacho",
        value: "6 titles each",
        context: "Gento (1956–66 with Real Madrid); modern Real Madrid core completed in 2024.",
        dateOrEra: "1956–2024",
        verifiedBy: "UEFA"
      },
      {
        title: "Most Ballon d'Or Awards",
        holder: "Lionel Messi",
        value: "8 Ballon d'Or trophies",
        context: "Won in 2009, 2010, 2011, 2012, 2015, 2019, 2021, and 2023.",
        dateOrEra: "2009–2023",
        verifiedBy: "France Football"
      }
    ]
  },
  {
    id: "goalkeeping-clean-sheets",
    categoryName: "Goalkeeping & Clean Sheets",
    icon: "Shield",
    description: "Unbreachable walls, penalty stoppers, and shutout streaks in modern football history.",
    records: [
      {
        title: "Longest World Top-Flight Clean Sheet Streak (Minutes)",
        holder: "Edwin van der Sar (Manchester United)",
        value: "1,311 consecutive minutes (14 matches)",
        context: "Kept 14 consecutive clean sheets in the Premier League between November 2008 and March 2009.",
        dateOrEra: "2008–2009",
        verifiedBy: "Premier League / IFFHS"
      },
      {
        title: "Most Penalty Saves in Career",
        holder: "Lev Yashin (Soviet Union)",
        value: "Estimated 150+ penalty kick saves",
        context: "Known as the 'Black Spider', Yashin revolutionised goalkeeping and remains the only keeper to win the Ballon d'Or.",
        dateOrEra: "1950–1970",
        verifiedBy: "FIFA History Committee"
      },
      {
        title: "Most Clean Sheets in Premier League History",
        holder: "Petr Čech",
        value: "202 clean sheets in 443 appearances",
        context: "Conceded only 15 goals in the entire 38-game 2004-05 season for Chelsea.",
        dateOrEra: "2004–2019",
        verifiedBy: "Premier League"
      },
      {
        title: "Most Consecutive Minutes Without Conceding in Serie A",
        holder: "Gianluigi Buffon (Juventus)",
        value: "974 consecutive minutes",
        context: "Broke Sebastiano Rossi's longstanding 1994 record (929 mins) in March 2016.",
        dateOrEra: "2016",
        verifiedBy: "Lega Serie A"
      }
    ]
  },
  {
    id: "transfers-and-economics",
    categoryName: "Transfer Fees & Economic Milestones",
    icon: "Banknote",
    description: "The biggest economic milestones in football history, from the first £1,000 player to mega-deals.",
    records: [
      {
        title: "All-Time Highest Transfer Fee",
        holder: "Neymar Jr (Barcelona to Paris Saint-Germain)",
        value: "€222 million (£198 million)",
        context: "Triggered his release buyout clause in August 2017, shattering the previous world record by more than double.",
        dateOrEra: "August 2017",
        verifiedBy: "Official Club Release"
      },
      {
        title: "Highest Transfer Fee for a Teenager",
        holder: "Kylian Mbappé (Monaco to Paris Saint-Germain)",
        value: "€180 million (£166 million)",
        context: "Moved at age 18 following an initial loan deal.",
        dateOrEra: "2017–2018",
        verifiedBy: "LFP France"
      },
      {
        title: "The First £1,000,000 Footballer",
        holder: "Trevor Francis (Birmingham City to Nottingham Forest)",
        value: "£1,000,000 (officially £1,150,000 with tax)",
        context: "Signed by Brian Clough; Francis scored the winning goal in the 1979 European Cup final three months later.",
        dateOrEra: "February 1979",
        verifiedBy: "Football Association"
      },
      {
        title: "Highest Cumulative Career Transfer Fees",
        holder: "Romelu Lukaku / Neymar",
        value: "€330M+ across multiple transfers",
        context: "Lukaku accumulated transfer fees across Anderlecht, Chelsea, Everton, Man United, Inter, and Roma.",
        dateOrEra: "2011–2024",
        verifiedBy: "Transfermarkt"
      }
    ]
  },
  {
    id: "unbeaten-runs",
    categoryName: "Longest Unbeaten Runs & Streaks",
    icon: "Activity",
    description: "Teams that refused to be defeated across seasons and competitions.",
    records: [
      {
        title: "Longest Unbeaten Run in European Top-Flight (All Competitions)",
        holder: "Bayer Leverkusen",
        value: "51 matches unbeaten",
        context: "Xabi Alonso's side went 51 games undefeated across the Bundesliga, DFB-Pokal, and Europa League.",
        dateOrEra: "2023–2024",
        verifiedBy: "UEFA / Bundesliga"
      },
      {
        title: "Longest Unbeaten League Run in Top 5 European Leagues",
        holder: "AC Milan",
        value: "58 Serie A matches unbeaten",
        context: "Arrigo Sacchi and Fabio Capello's 'Gli Invincibili' did not lose a league match from May 1991 to March 1993.",
        dateOrEra: "1991–1993",
        verifiedBy: "Lega Serie A"
      },
      {
        title: "Longest Premier League Unbeaten Run",
        holder: "Arsenal ('The Invincibles')",
        value: "49 matches unbeaten",
        context: "Arsène Wenger's squad completed the entire 2003-04 Premier League season undefeated (26W 12D).",
        dateOrEra: "May 2003 – October 2004",
        verifiedBy: "Premier League"
      },
      {
        title: "Longest International Unbeaten Streak",
        holder: "Italy (Roberto Mancini)",
        value: "37 matches unbeaten",
        context: "Surpassed Brazil (1993-96) and Spain (2007-09), winning UEFA Euro 2020 during the streak.",
        dateOrEra: "October 2018 – October 2021",
        verifiedBy: "FIFA"
      }
    ]
  },
  {
    id: "world-cup-records",
    categoryName: "FIFA World Cup Records",
    icon: "Globe",
    description: "Historic milestones on the most coveted stage in international sport.",
    records: [
      {
        title: "All-Time Top Scorer in World Cup Finals",
        holder: "Miroslav Klose (Germany)",
        value: "16 goals in 24 matches",
        context: "Scored 5 in 2002, 5 in 2006, 4 in 2010, and 2 in 2014, surpassing Ronaldo Nazário (15).",
        dateOrEra: "2002–2014",
        verifiedBy: "FIFA"
      },
      {
        title: "Most World Cup Titles as a Player",
        holder: "Pelé (Brazil)",
        value: "3 World Cups (1958, 1962, 1970)",
        context: "The sole footballer in history to have won three World Cups.",
        dateOrEra: "1958–1970",
        verifiedBy: "FIFA"
      },
      {
        title: "Most Matches Played at the World Cup",
        holder: "Lionel Messi (Argentina)",
        value: "26 appearances",
        context: "Surpassed Lothar Matthäus (25 matches) in the 2022 World Cup Final in Qatar.",
        dateOrEra: "2006–2022",
        verifiedBy: "FIFA"
      },
      {
        title: "Youngest World Cup Goalscorer",
        holder: "Pelé (Brazil)",
        value: "17 years and 239 days",
        context: "Scored against Wales in the 1958 quarter-final in Gothenburg.",
        dateOrEra: "June 19, 1958",
        verifiedBy: "FIFA"
      },
      {
        title: "Oldest World Cup Goalscorer",
        holder: "Roger Milla (Cameroon)",
        value: "42 years and 39 days",
        context: "Scored against Russia in the 1994 World Cup in the United States.",
        dateOrEra: "June 28, 1994",
        verifiedBy: "FIFA"
      }
    ]
  },
  {
    id: "champions-league-milestones",
    categoryName: "UEFA Champions League Milestones",
    icon: "Award",
    description: "Peak individual and club metrics in European club competition.",
    records: [
      {
        title: "All-Time Top Scorer in Champions League",
        holder: "Cristiano Ronaldo",
        value: "140 goals in 183 appearances",
        context: "105 for Real Madrid, 21 for Manchester United, 14 for Juventus.",
        dateOrEra: "2003–2022",
        verifiedBy: "UEFA"
      },
      {
        title: "Most Goals in a Single Champions League Campaign",
        holder: "Cristiano Ronaldo (Real Madrid)",
        value: "17 goals in 11 matches",
        context: "Set during Real Madrid's 'La Décima' triumph in the 2013-14 season.",
        dateOrEra: "2013–2014",
        verifiedBy: "UEFA"
      },
      {
        title: "Fastest Goal in Champions League History",
        holder: "Roy Makaay (Bayern Munich)",
        value: "10.12 seconds",
        context: "Scored directly after kick-off against Real Madrid in the Round of 16 second leg.",
        dateOrEra: "March 7, 2007",
        verifiedBy: "UEFA"
      },
      {
        title: "Winning the Champions League with 3 Different Clubs",
        holder: "Clarence Seedorf",
        value: "Ajax (1995), Real Madrid (1998), AC Milan (2003, 2007)",
        context: "The only player in history to win with three distinct clubs.",
        dateOrEra: "1995–2007",
        verifiedBy: "UEFA"
      }
    ]
  },
  {
    id: "speed-and-fastest-feats",
    categoryName: "Speed & Fastest Feats",
    icon: "Zap",
    description: "Lightning moments from kickoff to card, goals in seconds, and flash hat-tricks.",
    records: [
      {
        title: "Fastest Hat-Trick in Premier League History",
        holder: "Sadio Mané (Southampton)",
        value: "2 minutes and 56 seconds",
        context: "Scored against Aston Villa in minutes 12:22, 13:46, and 15:18.",
        dateOrEra: "May 16, 2015",
        verifiedBy: "Premier League / Guinness World Records"
      },
      {
        title: "Fastest Goal in International World Cup History",
        holder: "Hakan Şükür (Turkey)",
        value: "10.8 seconds",
        context: "Scored against co-hosts South Korea in the 2002 Third Place play-off.",
        dateOrEra: "June 29, 2002",
        verifiedBy: "FIFA"
      },
      {
        title: "Fastest Red Card in Professional Football",
        holder: "Lee Todd (Cross Farm Park Celtic)",
        value: "2 seconds",
        context: "Blown whistle startled him and his verbal reaction ('Fuck me that was loud') earned an instant dismissal.",
        dateOrEra: "October 2000",
        verifiedBy: "Sunday League FA Report"
      },
      {
        title: "Fastest Recorded Sprint in a Top-Flight Match",
        holder: "Kylian Mbappé / Micky van de Ven",
        value: "37.38 km/h (23.23 mph)",
        context: "Clocked in official Premier League and UEFA Champions League telemetry.",
        dateOrEra: "2023–2024",
        verifiedBy: "Opta / Premier League Tracking"
      }
    ]
  },
  {
    id: "stadium-attendance-milestones",
    categoryName: "Stadium Attendance & Historic Milestones",
    icon: "Users",
    description: "Crowd peaks that shook stadiums to their foundations before modern all-seater regulations.",
    records: [
      {
        title: "Highest Official Football Match Attendance",
        holder: "Uruguay vs Brazil (1950 World Cup)",
        value: "199,854 spectators (estimated 205,000+)",
        context: "Estádio do Maracanã in Rio de Janeiro for the decisive match of the 1950 World Cup ('Maracanazo').",
        dateOrEra: "July 16, 1950",
        verifiedBy: "FIFA Official Archives"
      },
      {
        title: "Highest Attendance for a European Club Match",
        holder: "Celtic vs Leeds United (European Cup Semi-Final)",
        value: "136,505 spectators",
        context: "Played at Hampden Park in Glasgow on April 15, 1970.",
        dateOrEra: "April 15, 1970",
        verifiedBy: "UEFA"
      },
      {
        title: "Highest British Domestic Match Attendance",
        holder: "Scotland vs England (British Home Championship)",
        value: "149,415 spectators",
        context: "Hampden Park in Glasgow, still the official British domestic record.",
        dateOrEra: "April 17, 1937",
        verifiedBy: "Scottish FA"
      },
      {
        title: "Highest Women's Football Club Attendance",
        holder: "FC Barcelona Femení vs Real Madrid Femenino",
        value: "91,553 spectators",
        context: "UEFA Women's Champions League quarter-final at Camp Nou.",
        dateOrEra: "March 30, 2022",
        verifiedBy: "UEFA / FC Barcelona"
      }
    ]
  }
];
