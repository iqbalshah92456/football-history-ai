import { CompetitionProfile } from '../types';

export const COMPETITION_PROFILES: CompetitionProfile[] = [
  {
    id: "fifa-world-cup",
    name: "FIFA World Cup",
    type: "International Tournament",
    region: "Global (FIFA)",
    founded: 1930,
    trophyName: "FIFA World Cup Trophy (formerly Jules Rimet Trophy)",
    mostTitlesTeam: "Brazil (5 titles: 1958, 1962, 1970, 1994, 2002)",
    mostTitlesCount: 5,
    history: "Conceived by FIFA President Jules Rimet, the inaugural tournament was hosted in 1930 in Uruguay. It has evolved into the most watched sporting spectacle on Earth, bringing together 32 (expanding to 48 in 2026) sovereign footballing cultures every four years.",
    majorEras: [
      { era: "The Pre-War Foundations", period: "1930–1938", highlights: "Uruguay and Pozzo's Italy establish international dominance." },
      { era: "The Post-War Resurgence & Pelé", period: "1950–1970", highlights: "The 1950 Maracanazo, the 1954 Miracle of Bern, and Brazil's three crowns in four tournaments." },
      { era: "Total Football & Maradona's Solo Magic", period: "1974–1990", highlights: "Cruyff's Dutch revolution, Argentina's home triumph in 1978, and Maradona's 1986 heroics in Mexico." },
      { era: "Globalized Modern Spectacle", period: "1994–present", highlights: "Expansion to 32 nations, European hegemony (2006–2018), and Messi's 2022 coronation in Qatar." }
    ],
    famousTeams: ["Brazil 1970", "Hungary 1954", "Netherlands 1974", "Spain 2010", "West Germany 1974", "France 1998", "Argentina 2022"],
    famousPlayers: ["Pelé", "Diego Maradona", "Lionel Messi", "Miroslav Klose", "Ronaldo Nazário", "Franz Beckenbauer", "Zinedine Zidane"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Miroslav Klose (Germany)", value: "16 goals in 24 matches", context: "Achieved across four tournaments (2002, 2006, 2010, 2014)." },
      { title: "Most Goals in a Single Tournament", holder: "Just Fontaine (France)", value: "13 goals", context: "Set in 6 matches at Sweden 1958." },
      { title: "Most World Cup Titles as a Player", holder: "Pelé (Brazil)", value: "3 titles (1958, 1962, 1970)", context: "The only player in history to win three." },
      { title: "Most Final Appearances as a Player", holder: "Cafu (Brazil)", value: "3 consecutive finals", context: "1994 (champion), 1998 (runner-up), 2002 (champion as captain)." }
    ],
    historicalMoments: [
      { year: 1950, title: "The Maracanazo", description: "Alcides Ghiggia's 79th-minute strike silences 200,000 Brazilians to crown Uruguay." },
      { year: 1986, title: "Maradona's Four Minutes vs England", description: "The Hand of God and Goal of the Century executed in the same half." },
      { year: 2014, title: "The 7-1 Mineiraço", description: "Germany inflicts the most shocking defeat in World Cup history upon hosts Brazil." },
      { year: 2022, title: "Messi & Mbappé Lusail Classic", description: "A 3-3 final thriller crowned by Argentina on penalties." }
    ]
  },
  {
    id: "uefa-champions-league",
    name: "UEFA Champions League",
    type: "Continental Club",
    region: "Europe (UEFA)",
    founded: 1955,
    trophyName: "European Champion Clubs' Cup ('The Big Ears')",
    mostTitlesTeam: "Real Madrid (15 titles)",
    mostTitlesCount: 15,
    history: "Originated as the European Champion Clubs' Cup in 1955 following proposals by French journalist Gabriel Hanot. Rebranded in 1992 as the UEFA Champions League, it represents the gold standard of club football worldwide.",
    majorEras: [
      { era: "Real Madrid's Original Monopoly", period: "1955–1960", highlights: "Di Stéfano and Puskás win five consecutive cups from inception." },
      { era: "Ajax & Bayern Dynasties", period: "1971–1976", highlights: "Total Football (Ajax 3-peat) followed by Beckenbauer's Bayern (3-peat)." },
      { era: "English Reign & Heysel Ban", period: "1977–1984", highlights: "Liverpool (4), Nottingham Forest (2), and Aston Villa (1) win 7 of 8 European Cups." },
      { era: "Modern Superclubs & The Galáctico Era", period: "1998–present", highlights: "Real Madrid's modern dominance (9 titles in 26 years), Pep's Barcelona, and historic comebacks." }
    ],
    famousTeams: ["Real Madrid 1956–60", "Ajax 1971–73", "AC Milan 1988–90", "Barcelona 2008–11", "Bayern Munich 2012–13 & 2019–20", "Manchester United 1999"],
    famousPlayers: ["Cristiano Ronaldo", "Lionel Messi", "Alfredo Di Stéfano", "Paolo Maldini", "Karim Benzema", "Robert Lewandowski", "Clarence Seedorf"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Cristiano Ronaldo", value: "140 goals in 183 matches", context: "17 goals in a single season (2013-14) — also an all-time record." },
      { title: "Most Player Titles", holder: "Paco Gento, Dani Carvajal, Luka Modrić, Toni Kroos, Nacho", value: "6 titles each", context: "Gento won 6 with Real Madrid (1956-66); modern quartet completed 6 in 2024." },
      { title: "Fastest Goal in a Final", holder: "Paolo Maldini (AC Milan)", value: "50 seconds vs Liverpool", context: "Scored in the 2005 Istanbul final." }
    ],
    historicalMoments: [
      { year: 1999, title: "Camp Nou Injury-Time Miracle", description: "Solskjær and Sheringham score in stoppage time for Manchester United's Treble." },
      { year: 2005, title: "The Miracle of Istanbul", description: "Liverpool recover from 0-3 down at half-time against AC Milan to win on penalties." },
      { year: 2017, title: "La Remontada", description: "Barcelona overturn a 0-4 deficit by beating PSG 6-1 with three goals after the 88th minute." }
    ]
  },
  {
    id: "uefa-euro",
    name: "UEFA European Championship",
    type: "International Tournament",
    region: "Europe (UEFA)",
    founded: 1958,
    trophyName: "Henri Delaunay Trophy",
    mostTitlesTeam: "Spain (4 titles: 1964, 2008, 2012, 2024)",
    mostTitlesCount: 4,
    history: "Proposed by Henri Delaunay in 1927 and first held in 1960 in France. Regarded as the most fiercely competitive international tournament due to Europe's concentrated tactical depth.",
    majorEras: [
      { era: "Four-Team Finals", period: "1960–1976", highlights: "Soviet Union, Spain, Italy, West Germany, and Czechoslovakia's Panenka penalty." },
      { era: "Platini's Masterpiece", period: "1984", highlights: "Michel Platini scores an astonishing 9 goals in 5 games to lead France to glory." },
      { era: "The Danish & Greek Fairytales", period: "1992 & 2004", highlights: "Denmark (called from beaches as replacements) and Greece stun the football world." },
      { era: "Spanish Supremacy", period: "2008–2024", highlights: "Spain wins 2008, 2012, and 2024 with scintillating possession and wing play." }
    ],
    famousTeams: ["West Germany 1972", "France 1984", "Netherlands 1988", "Spain 2008–2012", "Spain 2024"],
    famousPlayers: ["Michel Platini", "Cristiano Ronaldo", "Marco van Basten", "Andrés Iniesta", "Xavi", "Zinedine Zidane"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Cristiano Ronaldo", value: "14 goals across 6 tournaments", context: "Only player to appear and score in six different European Championships (2004–2024)." },
      { title: "Most Goals in a Single Tournament", holder: "Michel Platini", value: "9 goals in 5 games (1984)", context: "Included two consecutive hat-tricks." }
    ],
    historicalMoments: [
      { year: 1976, title: "The Original Panenka", description: "Antonín Panenka chips the decisive shootout penalty over Sepp Maier in Belgrade." },
      { year: 1988, title: "Van Basten's Volley", description: "Marco van Basten strikes an impossible acute-angle volley vs USSR in Munich." },
      { year: 2004, title: "Angelos Charisteas & Greece", description: "Otto Rehhagel's ultra-defensive Greece shocks hosts Portugal in Lisbon." }
    ]
  },
  {
    id: "copa-america",
    name: "Copa América",
    type: "International Tournament",
    region: "South America (CONMEBOL)",
    founded: 1916,
    trophyName: "Copa América Trophy",
    mostTitlesTeam: "Argentina (16 titles)",
    mostTitlesCount: 16,
    history: "The oldest still-running continental international football competition in the world. First held in Buenos Aires in 1916 to commemorate the centenary of Argentine Independence.",
    majorEras: [
      { era: "Uruguay's Early Dominance", period: "1916–1935", highlights: "La Celeste win six of the first ten editions." },
      { era: "La Máquina & Pelé's Era", period: "1940s–1970s", highlights: "Argentina's legendary quintet and Pelé's solitary tournament in 1959." },
      { era: "Modern Copa Hegemony", period: "1990s–present", highlights: "Ronaldo and Rivaldo in 1997/1999; Chile back-to-back in 2015/2016; Messi's back-to-back 2021/2024." }
    ],
    famousTeams: ["Argentina 1945–47", "Brazil 1997–99", "Uruguay 1920s", "Argentina 2021–24", "Chile 2015–16"],
    famousPlayers: ["Lionel Messi", "Pelé", "Zizinho", "Norberto Méndez", "Diego Maradona", "Luis Suárez", "Neymar"],
    importantRecords: [
      { title: "All-Time Top Scorers", holder: "Norberto Méndez (Argentina) & Zizinho (Brazil)", value: "17 goals each", context: "Historic joint record holders." },
      { title: "Most Tournaments Won", holder: "Argentina", value: "16 titles", context: "Surpassed Uruguay (15) with their 2024 triumph in Miami." }
    ],
    historicalMoments: [
      { year: 1916, title: "Inaugural Tournament", description: "Uruguay, Argentina, Brazil, and Chile contest the world's first continental championship." },
      { year: 2021, title: "Maracanã Catharsis", description: "Ángel Di María chips Ederson in Rio to end Argentina's 28-year trophy drought." }
    ]
  },
  {
    id: "uefa-europa-league",
    name: "UEFA Europa League",
    type: "Continental Club",
    region: "Europe (UEFA)",
    founded: 1971,
    trophyName: "UEFA Cup Trophy (heaviest UEFA trophy at 15kg)",
    mostTitlesTeam: "Sevilla FC (7 titles: 2006, 2007, 2014, 2015, 2016, 2020, 2023)",
    mostTitlesCount: 7,
    history: "Evolved from the Inter-Cities Fairs Cup into the UEFA Cup in 1971 and rebranded as the UEFA Europa League in 2009. Recognized as the crucible of European club resilience and tactical drama.",
    majorEras: [
      { era: "Two-Legged Final Era", period: "1971–1997", highlights: "Classic home-and-away finals dominated by German and Italian clubs." },
      { era: "One-Off Showpieces", period: "1998–present", highlights: "Neutral venue finals; Sevilla's unprecedented hegemony." }
    ],
    famousTeams: ["Sevilla 2014–16", "Inter Milan 1990s", "Borussia Mönchengladbach 1970s", "Atlético Madrid 2010–18"],
    famousPlayers: ["Radamel Falcao", "Henrik Larsson", "Pierre-Emerick Aubameyang", "Jesús Navas", "Ronaldo Nazário"],
    importantRecords: [
      { title: "Most Titles by a Club", holder: "Sevilla FC", value: "7 titles (Never lost a final: 7 out of 7)", context: "2006, 2007, 2014, 2015, 2016, 2020, 2023." },
      { title: "All-Time Top Scorer", holder: "Pierre-Emerick Aubameyang", value: "34 goals", context: "Scored for Dortmund, Arsenal, Barcelona, and Marseille." }
    ],
    historicalMoments: [
      { year: 2001, title: "Liverpool 5-4 Alavés (Golden Goal)", description: "Nine-goal thriller in Dortmund decided by an extra-time own goal." },
      { year: 1998, title: "Ronaldo's Masterclass in Paris", description: "Il Fenomeno destroys Lazio 3-0 in the first single-match UEFA Cup final." }
    ]
  },
  {
    id: "uefa-conference-league",
    name: "UEFA Conference League",
    type: "Continental Club",
    region: "Europe (UEFA)",
    founded: 2021,
    trophyName: "UEFA Conference League Trophy",
    mostTitlesTeam: "AS Roma, West Ham United, Olympiacos (1 title each)",
    mostTitlesCount: 1,
    history: "Introduced in 2021 as UEFA's tertiary club competition to give broader representation to clubs from across smaller domestic associations across Europe.",
    majorEras: [
      { era: "Inaugural Expansion", period: "2021–present", highlights: "Mourinho's Roma triumph, West Ham ending a 43-year drought, and Olympiacos' first Greek European title." }
    ],
    famousTeams: ["AS Roma 2021–22", "West Ham United 2022–23", "Olympiacos 2023–24"],
    famousPlayers: ["Tammy Abraham", "Declan Rice", "Ayoub El Kaabi", "Jarrod Bowen"],
    importantRecords: [
      { title: "First Winning Manager", holder: "José Mourinho (AS Roma)", value: "Completed the set: Champions League, UEFA Cup/Europa League, Conference League", context: "Won in Tirana against Feyenoord in 2022." },
      { title: "Most Goals in a Single Season", holder: "Ayoub El Kaabi (Olympiacos)", value: "11 goals in 9 knockout matches (2023-24)", context: "Propelled Olympiacos to the trophy." }
    ],
    historicalMoments: [
      { year: 2022, title: "Mourinho's Grand Slam", description: "AS Roma beat Feyenoord 1-0 in Tirana, making Mourinho the first manager to win all three active UEFA men's club trophies." },
      { year: 2024, title: "Greek Football Immortality", description: "Olympiacos defeat Fiorentina 1-0 after extra time in Athens to become the first Greek club to win a senior European title." }
    ]
  },
  {
    id: "premier-league",
    name: "Premier League",
    type: "Domestic League",
    region: "England",
    founded: 1992,
    trophyName: "Premier League Trophy (with golden lion crown)",
    mostTitlesTeam: "Manchester United (13 titles in Premier League era; 20 total)",
    mostTitlesCount: 13,
    history: "Formed on February 20, 1992, when First Division clubs broke away from the Football League to capitalize on a lucrative television rights deal with Sky. Has grown into the most commercially powerful and widely watched league in the world.",
    majorEras: [
      { era: "Ferguson's Man United Monopoly", period: "1992–2003", highlights: "United win 8 of the first 11 titles; fierce rivalry with Arsène Wenger's Arsenal." },
      { era: "The Abramovich Disruption & The Big Four", period: "2004–2010", highlights: "Mourinho's Chelsea, Arsenal's Invincibles, and 3 Champions League finalists from England." },
      { era: "Manchester City & Klopp's Liverpool", period: "2011–present", highlights: "Aguero 93:20, Leicester's 5000-1 fairy tale, Guardiola's Centurions, and four straight City titles." }
    ],
    famousTeams: ["Arsenal 2003–04 (The Invincibles)", "Manchester United 1998–99 (Treble)", "Chelsea 2004–05 (15 goals conceded)", "Manchester City 2017–18 (100 pts)", "Leicester City 2015–16"],
    famousPlayers: ["Alan Shearer", "Thierry Henry", "Wayne Rooney", "Ryan Giggs", "Frank Lampard", "Steven Gerrard", "Kevin De Bruyne", "Sergio Agüero"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Alan Shearer", value: "260 goals", context: "Scored for Blackburn Rovers and Newcastle United." },
      { title: "Most Goals in a Single 38-Game Season", holder: "Erling Haaland", value: "36 goals (2022-23)", context: "Broke the record in his debut Premier League season." },
      { title: "Most Points in a Season", holder: "Manchester City", value: "100 points (2017-18)", context: "The only 'Centurions' in English top-flight history." }
    ],
    historicalMoments: [
      { year: 2012, title: "Agüerooooo 93:20", description: "Sergio Agüero scores with the final kick to steal the title from Man United." },
      { year: 2016, title: "The 5000-1 Miracle", description: "Claudio Ranieri's Leicester City achieve the greatest upset in sports history." }
    ]
  },
  {
    id: "la-liga",
    name: "La Liga (Campeonato Nacional de Liga de Primera División)",
    type: "Domestic League",
    region: "Spain",
    founded: 1929,
    trophyName: "La Liga Trophy",
    mostTitlesTeam: "Real Madrid (36 titles)",
    mostTitlesCount: 36,
    history: "Founded in April 1929 with ten founding clubs. Famed for technical excellence, tactical sophistication, and the fiercest club rivalry in world sport: El Clásico between Real Madrid and Barcelona.",
    majorEras: [
      { era: "Athletic Club & Pre-War Spain", period: "1929–1936", highlights: "Biscay powerhouses dominate early seasons." },
      { era: "Di Stéfano vs Kubala", period: "1953–1964", highlights: "Real Madrid and Barcelona battle at the summit of European football." },
      { era: "The Dream Team & Galácticos", period: "1990–2006", highlights: "Cruyff's four titles in a row; Florentino Pérez's star-studded Madrid." },
      { era: "The Messi-Ronaldo Golden Decade", period: "2009–2018", highlights: "The greatest individual rivalry in sports history; 100-point seasons from both teams." }
    ],
    famousTeams: ["Barcelona 2008–11", "Real Madrid 2011–12 (100 pts, 121 goals)", "Barcelona 1991–94", "Atlético Madrid 2013–14"],
    famousPlayers: ["Lionel Messi", "Cristiano Ronaldo", "Alfredo Di Stéfano", "Telmo Zarra", "Raúl", "Hugo Sánchez", "Karim Benzema"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Lionel Messi", value: "474 goals in 520 appearances", context: "Also holds record for most goals in a single season: 50 goals (2011-12)." },
      { title: "Most Hat-Tricks", holder: "Lionel Messi", value: "36 hat-tricks", context: "Narrowly ahead of Cristiano Ronaldo (34 hat-tricks)." },
      { title: "Most Points in a Season", holder: "Real Madrid (2011-12) & Barcelona (2012-13)", value: "100 points each", context: "Mourinho's Madrid scored 121 goals; Vilanova's Barça matched 100 points." }
    ],
    historicalMoments: [
      { year: 2014, title: "Godín's Camp Nou Header", description: "Diego Godín scores in the final round at Camp Nou to deliver Atlético Madrid their first league title in 18 years." },
      { year: 2017, title: "Messi's 500th Goal at the Bernabéu", description: "Lionel Messi scores with the last kick to win 3-2 and displays his jersey to the Madrid crowd." }
    ]
  },
  {
    id: "serie-a",
    name: "Serie A",
    type: "Domestic League",
    region: "Italy",
    founded: 1898,
    trophyName: "Coppa Campioni d'Italia",
    mostTitlesTeam: "Juventus (36 titles)",
    mostTitlesCount: 36,
    history: "Founded in 1898 and adopting the single-group round-robin format (girone unico) in 1929. Universally recognized in the 1980s and 1990s as the greatest league in the world ('Seven Sisters' era), attracting every top player on Earth.",
    majorEras: [
      { era: "Il Grande Torino", period: "1942–1949", highlights: "Five consecutive Scudetti ended by the tragic Superga air crash." },
      { era: "The Golden Age / Seven Sisters", period: "1982–2000", highlights: "Maradona's Napoli, Sacchi's Milan, Platini's Juve, Mancini's Sampdoria, Batistuta's Fiorentina, and Ronaldo's Inter." },
      { era: "Juventus 9-in-a-Row & Modern Parity", period: "2011–present", highlights: "Juve's record run followed by four different champions in four years (Inter, Milan, Napoli, Inter)." }
    ],
    famousTeams: ["Grande Torino 1940s", "AC Milan 1991–92 (Invincibles)", "Napoli 1986–90", "Inter Milan 2009–10", "Juventus 2011–12 (Unbeaten)"],
    famousPlayers: ["Paolo Maldini", "Diego Maradona", "Francesco Totti", "Alessandro Del Piero", "Roberto Baggio", "Gianluigi Buffon", "Silvio Piola"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Silvio Piola", value: "274 goals", context: "Scored between 1929 and 1954 for Pro Vercelli, Lazio, Juventus, and Novara." },
      { title: "All-Time Appearances", holder: "Gianluigi Buffon", value: "657 Serie A matches", context: "Surpassed Paolo Maldini's 647 appearances." }
    ],
    historicalMoments: [
      { year: 1987, title: "Napoli's First Scudetto", description: "Diego Maradona leads southern underdogs Napoli to their historic first championship, sparking citywide street parties." },
      { year: 2001, title: "Roma's Pitch Invasion", description: "Supporters storm the pitch before the final whistle as Francesco Totti's Roma seal the Scudetto." }
    ]
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    type: "Domestic League",
    region: "Germany",
    founded: 1963,
    trophyName: "Meisterschale ('The Salad Bowl')",
    mostTitlesTeam: "Bayern Munich (33 titles)",
    mostTitlesCount: 33,
    history: "Established in 1962 in Dortmund and inaugurated for the 1963–64 season. Renowned for highest average stadium attendance in world sports, the protective 50+1 fan ownership rule, safe standing terraces, and prolific goal output.",
    majorEras: [
      { era: "Bayern vs Gladbach Clashes", period: "1969–1979", highlights: "Beckenbauer and Müller battle Netzer and Heynckes for domestic supremacy." },
      { era: "Klopp's Dortmund & Heynckes Treble", period: "2010–2013", highlights: "Dortmund win consecutive titles before Bayern's 2013 Wembley response." },
      { era: "Bayern's 11-in-a-Row & Alonso's Leverkusen", period: "2013–2024", highlights: "Bayern win 11 straight until Xabi Alonso's Bayer Leverkusen go unbeaten (2023-24)." }
    ],
    famousTeams: ["Borussia Mönchengladbach 1970s", "Bayern Munich 1971–74", "Borussia Dortmund 2011–12", "Bayer Leverkusen 2023–24 (The Never-loosers)"],
    famousPlayers: ["Gerd Müller", "Robert Lewandowski", "Franz Beckenbauer", "Karl-Heinz Rummenigge", "Manuel Neuer", "Marco Reus"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Gerd Müller", value: "365 goals in 427 games", context: "Staggering ratio of 0.85 goals per match for Bayern Munich." },
      { title: "Most Goals in a Single Season", holder: "Robert Lewandowski", value: "41 goals (2020-21)", context: "Achieved in just 29 matches, breaking Müller's 49-year-old record." }
    ],
    historicalMoments: [
      { year: 2024, title: "Bayer Leverkusen's Invincibles", description: "Xabi Alonso's team completes the first undefeated Bundesliga season in history (28 wins, 6 draws)." },
      { year: 2001, title: "Schalke's Four-Minute Champions", description: "Schalke fans celebrate on the pitch thinking they won the title, before Patrik Andersson scores an indirect free kick in the 94th minute for Bayern in Hamburg." }
    ]
  },
  {
    id: "ligue-1",
    name: "Ligue 1",
    type: "Domestic League",
    region: "France",
    founded: 1932,
    trophyName: "Hexagoal / Trophée de Ligue 1",
    mostTitlesTeam: "Paris Saint-Germain (12 titles)",
    mostTitlesCount: 12,
    history: "Inaugurated as Division 1 in 1932. Known as the world's most prolific breeding ground for generational talent (Zidane, Henry, Benzema, Mbappé, Hazard) and competitive parity before PSG's modern financial era.",
    majorEras: [
      { era: "Saint-Étienne's Green Reign", period: "1960s–1970s", highlights: "Les Verts win eight titles in 15 years and reach the European Cup final." },
      { era: "Marseille's Tapie Era", period: "1989–1993", highlights: "Five consecutive titles and the 1993 Champions League with Papin and Boli." },
      { era: "Lyon's Seven Consecutive Titles", period: "2001–2008", highlights: "Juninho Pernambucano's miraculous free kicks lead OL to seven straight titles." },
      { era: "PSG's Dominance & Underdog Strikes", period: "2012–present", highlights: "PSG win 10 of 12 titles; Monaco (2017) and Lille (2021) produce memorable title upsets." }
    ],
    famousTeams: ["AS Saint-Étienne 1970s", "Olympique de Marseille 1990–93", "Olympique Lyonnais 2001–08", "AS Monaco 2016–17", "Paris Saint-Germain 2015–16"],
    famousPlayers: ["Kylian Mbappé", "Zlatan Ibrahimović", "Juninho Pernambucano", "Jean-Pierre Papin", "Michel Platini", "Salif Keïta"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Delio Onnis", value: "299 goals", context: "Scored for Reims, Monaco, Tours, and Toulon (1971–1986)." },
      { title: "Most Consecutive Titles", holder: "Olympique Lyonnais", value: "7 consecutive championships (2002–2008)", context: "A French domestic record." }
    ],
    historicalMoments: [
      { year: 2017, title: "Monaco's Youth Revolution", description: "18-year-old Kylian Mbappé, Bernardo Silva, and Falcao storm to 107 goals and the Ligue 1 title." },
      { year: 1993, title: "Marseille Champions of Europe", description: "Basile Boli's header beats AC Milan in Munich, making Marseille France's only European Cup winner." }
    ]
  },
  {
    id: "copa-libertadores",
    name: "Copa Libertadores de América",
    type: "Continental Club",
    region: "South America (CONMEBOL)",
    founded: 1960,
    trophyName: "Copa Libertadores Trophy",
    mostTitlesTeam: "Independiente (7 titles: 1964, 1965, 1972, 1973, 1974, 1975, 1984)",
    mostTitlesCount: 7,
    history: "Named in honour of the 'Libertadores' (Liberators) who led South America's wars of independence. South America's most prestigious club competition, famed for ferocious atmosphere, raw passion, and dramatic finishes.",
    majorEras: [
      { era: "Pelé's Santos & Peñarol", period: "1960–1969", highlights: "Early dominance of Santos and Uruguayan giants Peñarol." },
      { era: "Independiente's Four-in-a-Row", period: "1972–1975", highlights: "The 'King of Cups' wins four consecutive titles — a record that will likely never be broken." },
      { era: "Bianchi's Boca Juniors", period: "2000–2007", highlights: "Carlos Bianchi guides Boca with Riquelme and Palermo to four continental crowns." },
      { era: "Brazilian Financial & Sporting Dominance", period: "2019–present", highlights: "Flamengo, Palmeiras, and Fluminense win six consecutive titles." }
    ],
    famousTeams: ["Santos 1962–63", "Independiente 1972–75", "Boca Juniors 2000–03", "São Paulo 1992–93", "River Plate 2018"],
    famousPlayers: ["Pelé", "Juan Román Riquelme", "Alberto Spencer", "Gabriel Barbosa", "Zico", "Martín Palermo"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Alberto Spencer (Ecuador)", value: "54 goals", context: "48 for Peñarol and 6 for Barcelona SC." },
      { title: "Most Successful Club", holder: "Independiente (Argentina)", value: "7 titles (100% win rate in finals: 7 of 7)", context: "The undisputed 'Rey de Copas'." }
    ],
    historicalMoments: [
      { year: 2018, title: "Superclásico Final in Madrid", description: "Following fan violence in Buenos Aires, River Plate defeat arch-rivals Boca Juniors 3-1 at the Santiago Bernabéu in the most heated final in history." },
      { year: 2019, title: "Gabigol's Three-Minute Miracle", description: "Gabriel Barbosa scores in the 89th and 92nd minutes as Flamengo stun River Plate 2-1 in Lima." }
    ]
  },
  {
    id: "afc-asian-cup",
    name: "AFC Asian Cup",
    type: "International Tournament",
    region: "Asia (AFC)",
    founded: 1956,
    trophyName: "AFC Asian Cup Trophy",
    mostTitlesTeam: "Japan (4 titles: 1992, 2000, 2004, 2011)",
    mostTitlesCount: 4,
    history: "The second oldest continental football championship in the world after the Copa América. First held in Hong Kong in 1956 with four participants, now expanded to a vibrant 24-nation continental showpiece.",
    majorEras: [
      { era: "Iran's Three-Peat", period: "1968–1976", highlights: "Team Melli win three consecutive Asian Cups on home soil and in Thailand." },
      { era: "Saudi Arabia's Hegemony", period: "1984–1996", highlights: "The Green Falcons reach five consecutive finals, winning three." },
      { era: "Samurai Blue Ascendancy", period: "1992–present", highlights: "Japan establish themselves as Asia's top power with 4 titles; Qatar's back-to-back 2019/2023 triumphs." }
    ],
    famousTeams: ["Iran 1968–76", "Saudi Arabia 1984–88", "Japan 2000–04", "Iraq 2007", "Qatar 2019"],
    famousPlayers: ["Ali Daei", "Keisuke Honda", "Shunsuke Nakamura", "Son Heung-min", "Younis Mahmoud", "Akram Afif"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Ali Daei (Iran)", value: "14 goals in 16 matches", context: "Pioneered Asian international goalscoring across three editions." },
      { title: "Most Titles", holder: "Japan", value: "4 titles (1992, 2000, 2004, 2011)", context: "Won 4 out of 5 finals contested." }
    ],
    historicalMoments: [
      { year: 2007, title: "Iraq's Fairy Tale", description: "Amidst war and sectarian conflict back home, Younis Mahmoud's header against Saudi Arabia unites an entire nation in triumph." },
      { year: 2019, title: "Almoez Ali's Bicycle Kick", description: "Almoez Ali breaks Ali Daei's single-tournament goal record with 9 goals as Qatar lift their first title." }
    ]
  },
  {
    id: "africa-cup-of-nations",
    name: "Africa Cup of Nations (AFCON)",
    type: "International Tournament",
    region: "Africa (CAF)",
    founded: 1957,
    trophyName: "Africa Cup of Nations Trophy",
    mostTitlesTeam: "Egypt (7 titles: 1957, 1959, 1986, 1998, 2006, 2008, 2010)",
    mostTitlesCount: 7,
    history: "Inaugurated in Khartoum, Sudan, in 1957 with only three nations (Egypt, Sudan, Ethiopia). AFCON has become a vibrant celebration of African athleticism, technical panache, color, and cultural pride.",
    majorEras: [
      { era: "Ghana's Black Stars", period: "1963–1982", highlights: "Ghana win four titles to establish West African dominance." },
      { era: "Cameroon's Indomitable Lions", period: "1984–2002", highlights: "Four titles led by Roger Milla and Samuel Eto'o." },
      { era: "Egypt's Historic Three-Peat", period: "2006–2010", highlights: "Hassan Shehata's Pharaohs achieve the unprecedented feat of three consecutive AFCON titles." }
    ],
    famousTeams: ["Egypt 2006–10", "Cameroon 2000–02", "Ghana 1963–65", "Nigeria 1994", "Ivory Coast 2015 & 2023"],
    famousPlayers: ["Samuel Eto'o", "Didier Drogba", "Mohamed Salah", "Sadio Mané", "Roger Milla", "Abedi Pele", "Jay-Jay Okocha"],
    importantRecords: [
      { title: "All-Time Top Scorer", holder: "Samuel Eto'o (Cameroon)", value: "18 goals", context: "Scored across six tournaments between 2000 and 2010." },
      { title: "Most Tournament Wins", holder: "Egypt", value: "7 titles", context: "Only nation to win three consecutive AFCON tournaments (2006, 2008, 2010)." }
    ],
    historicalMoments: [
      { year: 2012, title: "Zambia's Tribute in Libreville", description: "19 years after the tragic plane crash that killed their entire national team off the coast of Gabon, Zambia beat Ivory Coast on penalties to win AFCON in Libreville." },
      { year: 2022, title: "Sadio Mané's Penalty", description: "Mané misses a penalty in normal time but scores the winning shootout penalty vs Egypt to hand Senegal their maiden AFCON crown." }
    ]
  }
];
