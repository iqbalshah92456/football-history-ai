import { PlayerProfile } from '../types';

export const PLAYER_PROFILES: PlayerProfile[] = [
  {
    id: "pele",
    fullName: "Edson Arantes do Nascimento",
    knownAs: "Pelé",
    nationality: "Brazil",
    nationalityFlag: "🇧🇷",
    position: "Forward",
    dateOfBirth: "October 23, 1940",
    birthPlace: "Três Corações, Minas Gerais, Brazil",
    jerseyNumber: 10,
    careerTimeline: [
      { year: "1956", event: "Santos Debut", description: "Made his senior Santos debut at age 15, scoring in his very first match." },
      { year: "1958", event: "World Cup Wonder at 17", description: "Scored 6 goals in Sweden, becoming the youngest World Cup champion in history." },
      { year: "1962 & 1963", event: "Copa Libertadores & Intercontinental Cups", description: "Led Santos past Eusebio's Benfica and AC Milan to rule world club football." },
      { year: "1969", event: "O Milésimo (1,000th Goal)", description: "Scored his historic 1,000th career goal via penalty at a packed Maracanã." },
      { year: "1970", event: "Third World Cup Triumph", description: "Captained the immortal 1970 Seleção to victory in Mexico, solidifying 'O Rei' status." },
      { year: "1975-1977", event: "New York Cosmos Era", description: "Pioneered soccer popularity in the United States alongside Beckenbauer and Chinaglia." }
    ],
    clubs: [
      { club: "Santos FC", years: "1956–1974", appearances: 659, goals: 643 },
      { club: "New York Cosmos", years: "1975–1977", appearances: 107, goals: 66 }
    ],
    internationalCareer: {
      team: "Brazil National Team",
      years: "1957–1971",
      caps: 92,
      goals: 77,
      achievements: [
        "FIFA World Cup Champion: 1958, 1962, 1970 (Only player in history with 3 World Cups)",
        "Youngest scorer in a World Cup final (17 years, 249 days)",
        "Youngest player to score a World Cup hat-trick (1958 vs France)",
        "All-time top scorer for Brazil for 52 years (surpassed by Neymar in 2023)"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 3, years: ["1958", "1962", "1970"] },
          { name: "Taça do Atlântico", count: 2, years: ["1956", "1960"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "Copa Libertadores", count: 2, years: ["1962", "1963"] },
          { name: "Intercontinental Cup", count: 2, years: ["1962", "1963"] },
          { name: "Campeonato Brasileiro Série A", count: 6, years: ["1961", "1962", "1963", "1964", "1965", "1968"] },
          { name: "Campeonato Paulista", count: 10, years: ["1958", "1960", "1961", "1962", "1964", "1965", "1967", "1968", "1969", "1973"] },
          { name: "NASL Soccer Bowl", count: 1, years: ["1977"] }
        ]
      }
    ],
    individualAwards: [
      "FIFA Player of the Century (co-named with Maradona)",
      "Ballon d'Or Prix d'Honneur (Honorary recipient)",
      "World Cup Golden Ball: 1970",
      "World Cup Silver Ball: 1958",
      "South American Footballer of the Year: 1973",
      "IOC Athlete of the Century",
      "TIME 100 Most Important People of the 20th Century"
    ],
    importantMatches: [
      { match: "Brazil 5-2 Sweden", date: "June 29, 1958", role: "Scored twice in World Cup final", summary: "Flicked the ball over a defender's head before volleying home in one of the most famous goals in football lore." },
      { match: "Santos 5-2 Benfica", date: "October 11, 1962", role: "Hat-trick in Intercontinental Cup", summary: "Santos dismantled European champions Benfica at the Estádio da Luz in Lisbon." },
      { match: "Brazil 4-1 Italy", date: "June 21, 1970", role: "Opened scoring with towering header", summary: "Leaped above Tarcisio Burgnich for the iconic header and laid off the unhurried assist for Carlos Alberto's legendary 4th goal." }
    ],
    careerStats: {
      totalMatches: 831,
      totalGoals: 757,
      totalAssists: 368,
      internationalGoals: 77,
      trophyCount: 29
    },
    historicalContext: "Revered globally as 'O Rei' (The King), Pelé defined the romantic soul of Brazilian football. He turned the number 10 shirt into a sacred talisman, showcased that athleticism and artistic improvisation could unite seamlessly, and became football's first global cultural icon.",
    playingStyle: "Complete attacking phenomenon. Possessed explosive burst speed, supernatural vision, two-footed ball striking, heading ability that defied gravity, and unselfish playmaking instincts."
  },
  {
    id: "maradona",
    fullName: "Diego Armando Maradona",
    knownAs: "Diego Maradona",
    nationality: "Argentina",
    nationalityFlag: "🇦🇷",
    position: "Midfielder",
    dateOfBirth: "October 30, 1960",
    birthPlace: "Lanús, Buenos Aires, Argentina",
    jerseyNumber: 10,
    careerTimeline: [
      { year: "1976", event: "Argentinos Juniors Debut", description: "Debuted in Primera División just 10 days before turning 16, instantly nutmegging an opponent." },
      { year: "1981", event: "Boca Juniors Metropolitano", description: "Joined childhood dream club Boca Juniors, leading them to the championship." },
      { year: "1982-1984", event: "Barcelona Spell", description: "Record transfer fee to Barcelona; received a standing ovation at the Santiago Bernabéu." },
      { year: "1984-1991", event: "Napoli Renaissance", description: "Transformed impoverished southern Italian club Napoli into two-time Serie A champions against rich northern giants." },
      { year: "1986", event: "1986 World Cup Immortality", description: "Delivered football's most breathtaking individual World Cup campaign in Mexico." },
      { year: "1990", event: "Italia '90 Finalist", description: "Captained Argentina past Brazil and hosts Italy to reach back-to-back finals." }
    ],
    clubs: [
      { club: "Argentinos Juniors", years: "1976–1981", appearances: 167, goals: 116 },
      { club: "Boca Juniors", years: "1981–1982, 1995–1997", appearances: 71, goals: 35 },
      { club: "FC Barcelona", years: "1982–1984", appearances: 58, goals: 38 },
      { club: "SSC Napoli", years: "1984–1991", appearances: 259, goals: 115 },
      { club: "Sevilla FC", years: "1992–1993", appearances: 29, goals: 8 },
      { club: "Newell's Old Boys", years: "1993–1994", appearances: 5, goals: 0 }
    ],
    internationalCareer: {
      team: "Argentina National Team",
      years: "1977–1994",
      caps: 91,
      goals: 34,
      achievements: [
        "FIFA World Cup Champion: 1986",
        "FIFA World Cup Runner-up: 1990",
        "FIFA World Youth Championship Champion: 1979",
        "Artemio Franchi Trophy: 1993"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 1, years: ["1986"] },
          { name: "FIFA World Youth Championship", count: 1, years: ["1979"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "Serie A (Napoli)", count: 2, years: ["1986-87", "1989-90"] },
          { name: "Coppa Italia", count: 1, years: ["1986-87"] },
          { name: "UEFA Cup (Napoli)", count: 1, years: ["1988-89"] },
          { name: "Supercoppa Italiana", count: 1, years: ["1990"] },
          { name: "Copa del Rey (Barcelona)", count: 1, years: ["1982-83"] },
          { name: "Copa de la Liga", count: 1, years: ["1982-83"] },
          { name: "Primera División (Boca Juniors)", count: 1, years: ["1981 Metropolitano"] }
        ]
      }
    ],
    individualAwards: [
      "FIFA Player of the Century (Internet vote winner)",
      "FIFA World Cup Golden Ball: 1986",
      "FIFA World Cup Bronze Ball: 1990",
      "FIFA Goal of the Century (vs England, 1986)",
      "South American Footballer of the Year: 1979, 1980",
      "Guerin d'Oro (Serie A Footballer of the Year): 1985",
      "Ballon d'Or Prix d'Honneur: 1995"
    ],
    importantMatches: [
      { match: "Argentina 2-1 England", date: "June 22, 1986", role: "Two legendary goals", summary: "First the controversial 'Hand of God' punch, followed 4 minutes later by the 60-meter, 11-touch 'Goal of the Century' past five English players." },
      { match: "Argentina 2-0 Belgium", date: "June 25, 1986", role: "Semi-final brace", summary: "Slalomed through Belgium's defense twice in the second half to punch Argentina's ticket to the final." },
      { match: "Napoli 3-0 Juventus", date: "November 3, 1985", role: "Famous indirect free kick", summary: "Curled an impossible free kick from inside the penalty box over a two-man wall into the top corner." }
    ],
    careerStats: {
      totalMatches: 679,
      totalGoals: 345,
      totalAssists: 250,
      internationalGoals: 34,
      trophyCount: 12
    },
    historicalContext: "Maradona was more than a footballer; he was a sociocultural phenomenon and folk deity. His triumph with Napoli represented the rebellion of the impoverished Italian South over the wealthy North, while his 1986 World Cup campaign was an act of national catharsis following the Falklands War.",
    playingStyle: "The quintessential Argentine 'pibe' (street urchin) endowed with divine balance, low center of gravity, devastating left foot, and rabona flicks. Impossibly resistant to aggressive tackles."
  },
  {
    id: "lionel-messi",
    fullName: "Lionel Andrés Messi",
    knownAs: "Lionel Messi",
    nationality: "Argentina",
    nationalityFlag: "🇦🇷",
    position: "Forward",
    dateOfBirth: "June 24, 1987",
    birthPlace: "Rosario, Santa Fe, Argentina",
    jerseyNumber: 10,
    careerTimeline: [
      { year: "2000", event: "Paper Napkin Contract", description: "Signed on a cafeteria paper napkin by Carles Rexach at age 13 to join FC Barcelona's La Masia." },
      { year: "2009", event: "The Sextuple & First Ballon d'Or", description: "Pep Guardiola deployed Messi as 'false 9', leading Barcelona to win all six trophies in a single calendar year." },
      { year: "2012", event: "91 Goals in a Calendar Year", description: "Shattered Gerd Müller's 40-year-old world record by scoring 91 goals in 69 games." },
      { year: "2015", event: "MSN Treble", description: "Teamed with Suárez and Neymar to win his second continental treble with Barcelona." },
      { year: "2021", event: "Copa América & PSG Move", description: "Ended Argentina's 28-year senior trophy drought at the Maracanã before moving to PSG." },
      { year: "2022", event: "World Cup Glory in Qatar", description: "Scored 7 goals, assisted 3, and lifted the World Cup trophy in arguably the greatest final ever played." },
      { year: "2023", event: "Record 8th Ballon d'Or & Inter Miami", description: "Awarded a historic 8th Ballon d'Or and catalyzed soccer in America by winning Leagues Cup." }
    ],
    clubs: [
      { club: "FC Barcelona", years: "2004–2021", appearances: 778, goals: 672 },
      { club: "Paris Saint-Germain", years: "2021–2023", appearances: 75, goals: 32 },
      { club: "Inter Miami CF", years: "2023–present", appearances: 39, goals: 34 }
    ],
    internationalCareer: {
      team: "Argentina National Team",
      years: "2005–present",
      caps: 189,
      goals: 112,
      achievements: [
        "FIFA World Cup Champion: 2022 (Golden Ball)",
        "FIFA World Cup Runner-up: 2014 (Golden Ball)",
        "Copa América Champion: 2021, 2024",
        "CONMEBOL-UEFA Cup of Champions (Finalissima): 2022",
        "Olympic Gold Medal: Beijing 2008",
        "FIFA World Youth Championship Champion: 2005"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 1, years: ["2022"] },
          { name: "Copa América", count: 2, years: ["2021", "2024"] },
          { name: "CONMEBOL-UEFA Finalissima", count: 1, years: ["2022"] },
          { name: "Olympic Gold Medal", count: 1, years: ["2008"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "UEFA Champions League", count: 4, years: ["2005-06", "2008-09", "2010-11", "2014-15"] },
          { name: "La Liga (Barcelona)", count: 10, years: ["2004-05", "2005-06", "2008-09", "2009-10", "2010-11", "2012-13", "2014-15", "2015-16", "2017-18", "2018-19"] },
          { name: "Copa del Rey", count: 7, years: ["2008-09", "2011-12", "2014-15", "2015-16", "2016-17", "2017-18", "2020-21"] },
          { name: "FIFA Club World Cup", count: 3, years: ["2009", "2011", "2015"] },
          { name: "Ligue 1 (PSG)", count: 2, years: ["2021-22", "2022-23"] },
          { name: "Supporters' Shield & Leagues Cup (Miami)", count: 2, years: ["2023", "2024"] }
        ]
      }
    ],
    individualAwards: [
      "Ballon d'Or: 8 times (2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023) — All-time record",
      "FIFA The Best Men's Player: 3 times (2019, 2022, 2023)",
      "European Golden Shoe: 6 times (2010, 2012, 2013, 2017, 2018, 2019) — All-time record",
      "FIFA World Cup Golden Ball: 2014, 2022 (Only player to win it twice)",
      "La Liga Best Player: 9 times",
      "IFFHS World's Best Playmaker: 5 times",
      "Laureus World Sportsman of the Year: 2020, 2023"
    ],
    importantMatches: [
      { match: "Argentina 3-3 France (4-2 pen)", date: "December 18, 2022", role: "World Cup Final masterclass", summary: "Scored two goals and converted his penalty shootout kick in the greatest final in history to crown his career." },
      { match: "Barcelona 3-1 Manchester United", date: "May 28, 2011", role: "Champions League Final at Wembley", summary: "Scored a blistering 20-yard goal in what Sir Alex Ferguson called the best team performance he had ever faced." },
      { match: "Real Madrid 2-3 Barcelona", date: "April 23, 2017", role: "92nd-minute El Clásico winner", summary: "Scored his 500th Barcelona goal in stoppage time, holding his jersey aloft before the silent Santiago Bernabéu crowd." }
    ],
    careerStats: {
      totalMatches: 1092,
      totalGoals: 850,
      totalAssists: 382,
      internationalGoals: 112,
      trophyCount: 46
    },
    historicalContext: "Widely regarded as the greatest player of all time (GOAT). The most decorated footballer in history (46 official trophies). Re-engineered attacking metrics across two decades with unprecedented scoring output, surgical passing, and longevity.",
    playingStyle: "Effortless close control, low center of gravity, supernatural spatial perception, delicate chipped finishes, pinpoint free-kicks, and the ability to dictate match tempo from deep or as a false nine."
  },
  {
    id: "cristiano-ronaldo",
    fullName: "Cristiano Ronaldo dos Santos Aveiro",
    knownAs: "Cristiano Ronaldo",
    nationality: "Portugal",
    nationalityFlag: "🇵🇹",
    position: "Forward",
    dateOfBirth: "February 5, 1985",
    birthPlace: "Funchal, Madeira, Portugal",
    jerseyNumber: 7,
    careerTimeline: [
      { year: "2003", event: "Manchester United Signing", description: "Dazzled in a pre-season friendly for Sporting CP; Sir Alex Ferguson signed the 18-year-old on the spot." },
      { year: "2008", event: "First Champions League & Ballon d'Or", description: "Scored 42 goals, winning the Premier League, Champions League, and his first Ballon d'Or." },
      { year: "2009", event: "World Record Real Madrid Transfer", description: "Unveiled before 80,000 fans at the Bernabéu after a record £80 million move." },
      { year: "2014-2018", event: "Real Madrid Three-Peat", description: "Led Real Madrid to four Champions League titles in five seasons, including three consecutive crowns." },
      { year: "2016", event: "Euro 2016 Victory", description: "Captained Portugal to their first ever major international silverware in Paris." },
      { year: "2021", event: "All-Time International Goal Record", description: "Broke Ali Daei's men's international goal record; later surpassed 900 official career goals in 2024." }
    ],
    clubs: [
      { club: "Sporting CP", years: "2002–2003", appearances: 31, goals: 5 },
      { club: "Manchester United", years: "2003–2009, 2021–2022", appearances: 346, goals: 145 },
      { club: "Real Madrid", years: "2009–2018", appearances: 438, goals: 450 },
      { club: "Juventus", years: "2018–2021", appearances: 134, goals: 101 },
      { club: "Al Nassr", years: "2023–present", appearances: 85, goals: 76 }
    ],
    internationalCareer: {
      team: "Portugal National Team",
      years: "2003–present",
      caps: 216,
      goals: 133,
      achievements: [
        "UEFA European Championship Champion: 2016",
        "UEFA Nations League Champion: 2019",
        "All-time men's top international goalscorer in history (133+ goals)",
        "Most men's international appearances in football history (216+ caps)",
        "Only male player to score in five separate World Cup tournaments (2006, 2010, 2014, 2018, 2022)"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "UEFA European Championship", count: 1, years: ["2016"] },
          { name: "UEFA Nations League", count: 1, years: ["2019"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "UEFA Champions League", count: 5, years: ["2007-08", "2013-14", "2015-16", "2016-17", "2017-18"] },
          { name: "Premier League (Man United)", count: 3, years: ["2006-07", "2007-08", "2008-09"] },
          { name: "La Liga (Real Madrid)", count: 2, years: ["2011-12", "2016-17"] },
          { name: "Serie A (Juventus)", count: 2, years: ["2018-19", "2019-20"] },
          { name: "FIFA Club World Cup", count: 4, years: ["2008", "2014", "2016", "2017"] },
          { name: "FA Cup / Copa del Rey / Coppa Italia", count: 5, years: ["2004", "2011", "2014", "2021"] }
        ]
      }
    ],
    individualAwards: [
      "Ballon d'Or: 5 times (2008, 2013, 2014, 2016, 2017)",
      "FIFA World Player of the Year / The Best FIFA Men's Player: 3 times (2008, 2016, 2017)",
      "European Golden Shoe: 4 times (2008, 2011, 2014, 2015)",
      "UEFA Champions League All-Time Top Scorer: 140 goals",
      "Puskás Award: 2009 (40-yard screamer vs Porto)",
      "Premier League Player of the Season: 2006-07, 2007-08",
      "Serie A Footballer of the Year: 2019, 2020"
    ],
    importantMatches: [
      { match: "Juventus 0-3 Real Madrid", date: "April 3, 2018", role: "Iconic bicycle kick", summary: "Leaped 7.8 feet in the air to score an astounding bicycle kick at the Allianz Stadium, earning a standing ovation from Turin supporters." },
      { match: "Portugal 3-3 Spain", date: "June 15, 2018", role: "World Cup group hat-trick", summary: "Scored a dazzling hat-trick crowned by an 88th-minute curling free kick to tie Spain in Sochi." },
      { match: "Real Madrid 4-1 Juventus", date: "June 3, 2017", role: "Champions League Final brace", summary: "Scored twice in Cardiff as Real Madrid became the first side in modern history to retain the Champions League." }
    ],
    careerStats: {
      totalMatches: 1251,
      totalGoals: 916,
      totalAssists: 256,
      internationalGoals: 133,
      trophyCount: 35
    },
    historicalContext: "The ultimate relentless athletic machine. Real Madrid's all-time leading scorer (450 goals in 438 games — more than a goal per game). He revolutionized professional preparation, nutrition, training intensity, and aerial dominance.",
    playingStyle: "Evolved from a flashy, step-over-dazzling winger into the most lethal box predator and clutch big-match goalscorer in football history, boasting an unmatched vertical leap and bullet shooting from both feet."
  },
  {
    id: "johan-cruyff",
    fullName: "Hendrik Johannes Cruijff",
    knownAs: "Johan Cruyff",
    nationality: "Netherlands",
    nationalityFlag: "🇳🇱",
    position: "Forward",
    dateOfBirth: "April 25, 1947",
    birthPlace: "Amsterdam, Netherlands",
    jerseyNumber: 14,
    careerTimeline: [
      { year: "1964", event: "Ajax Debut", description: "Debuted for Ajax under Rinus Michels, laying the blueprint for Total Football." },
      { year: "1971–1973", event: "Three Consecutive European Cups", description: "Led Ajax to three straight European Cups, sweeping European club football." },
      { year: "1973", event: "Barcelona Signing", description: "Joined Barcelona, immediately leading them to their first La Liga title in 14 years with a 5-0 win at the Bernabéu." },
      { year: "1974", event: "1974 World Cup Masterclass", description: "Orchestrated the Dutch 'Clockwork Orange' to the final, winning the Golden Ball." },
      { year: "1988–1996", event: "Barcelona Dream Team Manager", description: "Created the modern football philosophy: tiki-taka, high possession, and La Masia academy structure." }
    ],
    clubs: [
      { club: "AFC Ajax", years: "1964–1973, 1981–1983", appearances: 369, goals: 271 },
      { club: "FC Barcelona", years: "1973–1978", appearances: 180, goals: 60 },
      { club: "Los Angeles Aztecs", years: "1979", appearances: 27, goals: 14 },
      { club: "Washington Diplomats", years: "1980–1981", appearances: 32, goals: 12 },
      { club: "Levante", years: "1981", appearances: 10, goals: 2 },
      { club: "Feyenoord", years: "1983–1984", appearances: 44, goals: 13 }
    ],
    internationalCareer: {
      team: "Netherlands National Team",
      years: "1966–1977",
      caps: 48,
      goals: 33,
      achievements: [
        "FIFA World Cup Runner-up: 1974",
        "FIFA World Cup Golden Ball: 1974",
        "UEFA European Championship Bronze: 1976"
      ]
    },
    majorTrophies: [
      {
        category: "Player Trophies",
        titles: [
          { name: "European Cup (Ajax)", count: 3, years: ["1970-71", "1971-72", "1972-73"] },
          { name: "Intercontinental Cup", count: 1, years: ["1972"] },
          { name: "Eredivisie (Ajax & Feyenoord)", count: 9, years: ["1965-66", "1966-67", "1967-68", "1969-70", "1971-72", "1972-73", "1981-82", "1982-83", "1983-84"] },
          { name: "La Liga (Barcelona)", count: 1, years: ["1973-74"] },
          { name: "KNVB Cup", count: 6, years: ["1967", "1970", "1971", "1972", "1983", "1984"] }
        ]
      },
      {
        category: "Managerial Legacy",
        titles: [
          { name: "European Cup (Barcelona Dream Team)", count: 1, years: ["1991-92"] },
          { name: "La Liga (Barcelona Manager)", count: 4, years: ["1990-91", "1991-92", "1992-93", "1993-94"] },
          { name: "European Cup Winners' Cup (Ajax & Barca)", count: 2, years: ["1986-87", "1988-89"] }
        ]
      }
    ],
    individualAwards: [
      "Ballon d'Or: 3 times (1971, 1973, 1974)",
      "FIFA World Cup Golden Ball: 1974",
      "IFFHS European Player of the Century",
      "FIFA World Cup All-Time Team",
      "Dutch Footballer of the Year: 1968, 1972, 1984"
    ],
    importantMatches: [
      { match: "Netherlands 4-0 Argentina", date: "June 26, 1974", role: "World Cup exhibition", summary: "Total Football at its purest zenith; Cruyff scored twice and dictated play across every inch of the pitch." },
      { match: "Real Madrid 0-5 Barcelona", date: "February 17, 1974", role: "Historic El Clásico demolition", summary: "Cruyff ran riot at the Bernabéu, reversing decades of Franco-era psychological subservience." },
      { match: "Netherlands 0-0 Sweden", date: "June 19, 1974", role: "Invented the Cruyff Turn", summary: "Feigned a cross, dragged the ball behind his standing leg, leaving defender Jan Olsson famously spinning into confusion." }
    ],
    careerStats: {
      totalMatches: 712,
      totalGoals: 425,
      totalAssists: 310,
      internationalGoals: 33,
      trophyCount: 22
    },
    historicalContext: "The father of modern football. No single figure exerted greater tactical, intellectual, and aesthetic influence on the game as both a Ballon d'Or-winning player and an architect-manager whose disciples (Guardiola, Koeman, Luis Enrique) shaped modern football.",
    playingStyle: "A conductor on the grass. Possessed electric acceleration, effortless dribbling, supreme spatial awareness, and the authority to command teammates' movements with hand gestures mid-match."
  },
  {
    id: "franz-beckenbauer",
    fullName: "Franz Anton Beckenbauer",
    knownAs: "Franz Beckenbauer",
    nationality: "Germany",
    nationalityFlag: "🇩🇪",
    position: "Defender",
    dateOfBirth: "September 11, 1945",
    birthPlace: "Munich, Germany",
    jerseyNumber: 5,
    careerTimeline: [
      { year: "1964", event: "Bayern Munich Promotion", description: "Joined Bayern Munich youth ranks, helping them gain promotion to the Bundesliga." },
      { year: "1972", event: "Euro 1972 Victory & First Ballon d'Or", description: "Captained West Germany's greatest ever team to the European Championship and won Ballon d'Or." },
      { year: "1974", event: "World Cup Triumph as Captain", description: "Lifted the newly designed FIFA World Cup trophy in Munich after defeating the Dutch." },
      { year: "1974–1976", event: "Bayern Three-Peat", description: "Captained Bayern Munich to three consecutive European Cup titles." },
      { year: "1990", event: "World Cup Triumph as Manager", description: "Managed West Germany to World Cup victory at Italia '90, joining Zagallo in history." }
    ],
    clubs: [
      { club: "Bayern Munich", years: "1964–1977", appearances: 582, goals: 74 },
      { club: "New York Cosmos", years: "1977–1980, 1983", appearances: 132, goals: 21 },
      { club: "Hamburger SV", years: "1980–1982", appearances: 38, goals: 0 }
    ],
    internationalCareer: {
      team: "West Germany National Team",
      years: "1965–1977",
      caps: 103,
      goals: 14,
      achievements: [
        "FIFA World Cup Champion: 1974 (as captain)",
        "FIFA World Cup Champion: 1990 (as manager)",
        "FIFA World Cup Runner-up: 1966",
        "FIFA World Cup 3rd Place: 1970",
        "UEFA European Championship Champion: 1972",
        "UEFA European Championship Runner-up: 1976"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 2, years: ["1974 (Player)", "1990 (Manager)"] },
          { name: "UEFA European Championship", count: 1, years: ["1972"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "European Cup (Bayern Munich)", count: 3, years: ["1973-74", "1974-75", "1975-76"] },
          { name: "Intercontinental Cup", count: 1, years: ["1976"] },
          { name: "European Cup Winners' Cup", count: 1, years: ["1966-67"] },
          { name: "Bundesliga (Bayern & Hamburg)", count: 5, years: ["1968-69", "1971-72", "1972-73", "1973-74", "1981-82"] },
          { name: "DFB-Pokal", count: 4, years: ["1966", "1967", "1969", "1971"] }
        ]
      }
    ],
    individualAwards: [
      "Ballon d'Or: 2 times (1972, 1976) — One of only three defenders to win it",
      "FIFA World Cup Best Young Player: 1966",
      "FIFA World Cup Bronze Ball: 1974",
      "German Footballer of the Year: 4 times (1966, 1968, 1974, 1976)",
      "FIFA World Team of the 20th Century"
    ],
    importantMatches: [
      { match: "West Germany 2-1 Netherlands", date: "July 7, 1974", role: "World Cup Final triumph", summary: "Marshaled the German defense to nullify Total Football after conceding a 2nd-minute penalty." },
      { match: "Italy 4-3 West Germany", date: "June 17, 1970", role: "Played in a sling in Game of the Century", summary: "Refused to leave the pitch after dislocating his shoulder, playing all 120 minutes with his arm strapped to his torso." },
      { match: "Bayern Munich 4-0 Atlético Madrid", date: "May 17, 1974", role: "European Cup Final replay", summary: "Led Bayern to their first European crown, initiating their 1970s continental dynasty." }
    ],
    careerStats: {
      totalMatches: 752,
      totalGoals: 95,
      totalAssists: 87,
      internationalGoals: 14,
      trophyCount: 19
    },
    historicalContext: "Nicknamed 'Der Kaiser' (The Emperor) for his majestic elegance on the ball and natural authority. He invented the attacking sweeper ('Libero') role, showing that defenders could be the chief playmakers of great teams.",
    playingStyle: "Effortless grace, unmatched anticipation, sweeping outside-of-the-boot ('trivela') passes, and tranquil calmness under high pressing."
  },
  {
    id: "zinedine-zidane",
    fullName: "Zinedine Yazid Zidane",
    knownAs: "Zinedine Zidane",
    nationality: "France",
    nationalityFlag: "🇫🇷",
    position: "Midfielder",
    dateOfBirth: "June 23, 1972",
    birthPlace: "Marseille, France",
    jerseyNumber: 10,
    careerTimeline: [
      { year: "1989", event: "Cannes & Bordeaux Growth", description: "Rose through Cannes before orchestrating Bordeaux's 1996 UEFA Cup run." },
      { year: "1996", event: "Juventus Move", description: "Won consecutive Serie A titles and reached back-to-back Champions League finals." },
      { year: "1998", event: "World Cup Double in Paris", description: "Scored two headers in the final vs Brazil to win France's first World Cup and the Ballon d'Or." },
      { year: "2001", event: "Galáctico Record Transfer", description: "Transferred to Real Madrid for a world record fee of ~€77.5 million." },
      { year: "2002", event: "The Hampden Park Volley", description: "Scored the greatest Champions League final goal ever against Bayer Leverkusen." },
      { year: "2006", event: "Golden Ball & Berlin Farewell", description: "Masterminded France's run to the 2006 World Cup final before his dramatic exit." },
      { year: "2016–2018", event: "Real Madrid Three-Peat as Manager", description: "Made history by managing Real Madrid to three consecutive Champions League crowns." }
    ],
    clubs: [
      { club: "AS Cannes", years: "1989–1992", appearances: 71, goals: 6 },
      { club: "Girondins de Bordeaux", years: "1992–1996", appearances: 179, goals: 39 },
      { club: "Juventus", years: "1996–2001", appearances: 212, goals: 31 },
      { club: "Real Madrid", years: "2001–2006", appearances: 227, goals: 49 }
    ],
    internationalCareer: {
      team: "France National Team",
      years: "1994–2006",
      caps: 108,
      goals: 31,
      achievements: [
        "FIFA World Cup Champion: 1998",
        "UEFA European Championship Champion: 2000",
        "FIFA World Cup Runner-up & Golden Ball: 2006"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 1, years: ["1998"] },
          { name: "UEFA European Championship", count: 1, years: ["2000"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "UEFA Champions League (Real Madrid)", count: 1, years: ["2001-02"] },
          { name: "Intercontinental Cup (Juventus & Real)", count: 2, years: ["1996", "2002"] },
          { name: "Serie A (Juventus)", count: 2, years: ["1996-97", "1997-98"] },
          { name: "La Liga (Real Madrid)", count: 1, years: ["2002-03"] },
          { name: "UEFA Super Cup", count: 2, years: ["1996", "2002"] }
        ]
      },
      {
        category: "Managerial Legacy (Real Madrid)",
        titles: [
          { name: "UEFA Champions League (Manager)", count: 3, years: ["2015-16", "2016-17", "2017-18"] },
          { name: "La Liga (Manager)", count: 2, years: ["2016-17", "2019-20"] },
          { name: "FIFA Club World Cup (Manager)", count: 2, years: ["2016", "2017"] }
        ]
      }
    ],
    individualAwards: [
      "Ballon d'Or: 1998",
      "FIFA World Player of the Year: 3 times (1998, 2000, 2003)",
      "FIFA World Cup Golden Ball: 2006",
      "UEFA Euro Player of the Tournament: 2000",
      "UEFA Club Footballer of the Year: 2002",
      "Ligue 1 Player of the Year: 1996",
      "Serie A Footballer of the Year: 2001"
    ],
    importantMatches: [
      { match: "Real Madrid 2-1 Bayer Leverkusen", date: "May 15, 2002", role: "Iconic Champions League volley", summary: "Tracked Roberto Carlos' looped skyward cross to execute a miraculous left-footed volley into the top corner at Hampden Park." },
      { match: "France 3-0 Brazil", date: "July 12, 1998", role: "World Cup Final brace", summary: "Scored two bullet headers from corner kicks to conquer the reigning champions on home soil." },
      { match: "France 1-0 Brazil", date: "July 1, 2006", role: "Quarter-final solo recital", summary: "At age 34, produced a transcendent individual display of roulette spins, sombreros, and assisted Thierry Henry's winner." }
    ],
    careerStats: {
      totalMatches: 797,
      totalGoals: 156,
      totalAssists: 187,
      internationalGoals: 31,
      trophyCount: 15
    },
    historicalContext: "The supreme big-match maestro. 'Zizou' elevated football to balletic performance art. His heritage as a French-Algerian from La Castellane in Marseille made him a symbol of multicultural France.",
    playingStyle: "Sublime first touch, signature Marseille roulette (spin), physical strength to shield possession, and peerless composure on football's biggest stages."
  },
  {
    id: "ronaldo-nazario",
    fullName: "Ronaldo Luís Nazário de Lima",
    knownAs: "Ronaldo Nazário",
    nationality: "Brazil",
    nationalityFlag: "🇧🇷",
    position: "Forward",
    dateOfBirth: "September 18, 1976",
    birthPlace: "Rio de Janeiro, Brazil",
    jerseyNumber: 9,
    careerTimeline: [
      { year: "1993–1996", event: "Cruzeiro & PSV Explosion", description: "Scored 44 goals in 47 games for Cruzeiro before setting Europe ablaze with PSV Eindhoven." },
      { year: "1996–1997", event: "Unbelievable Barcelona Season", description: "Scored 47 goals in 49 games; won FIFA World Player of the Year at just 20 (youngest ever)." },
      { year: "1997", event: "First Ballon d'Or at Inter Milan", description: "Became the youngest ever Ballon d'Or winner at 21; terrorized Serie A defenders as 'Il Fenomeno'." },
      { year: "1999–2001", event: "Cruciate Knee Agony", description: "Suffered two catastrophic knee tendon ruptures that sidelined him for nearly three years." },
      { year: "2002", event: "World Cup Redemption & Golden Boot", description: "Returned triumphantly to score 8 goals at the 2002 World Cup, including both in the final." },
      { year: "2003", event: "Old Trafford Standing Ovation", description: "Scored a dazzling hat-trick for Real Madrid against Manchester United, receiving a standing ovation from all four stands." }
    ],
    clubs: [
      { club: "Cruzeiro", years: "1993–1994", appearances: 47, goals: 44 },
      { club: "PSV Eindhoven", years: "1994–1996", appearances: 57, goals: 54 },
      { club: "FC Barcelona", years: "1996–1997", appearances: 49, goals: 47 },
      { club: "Inter Milan", years: "1997–2002", appearances: 99, goals: 59 },
      { club: "Real Madrid", years: "2002–2007", appearances: 177, goals: 104 },
      { club: "AC Milan", years: "2007–2008", appearances: 20, goals: 9 },
      { club: "Corinthians", years: "2009–2011", appearances: 69, goals: 35 }
    ],
    internationalCareer: {
      team: "Brazil National Team",
      years: "1994–2011",
      caps: 98,
      goals: 62,
      achievements: [
        "FIFA World Cup Champion: 1994 (squad member), 2002 (Golden Boot, Silver Ball)",
        "FIFA World Cup Runner-up & Golden Ball: 1998",
        "Copa América Champion: 1997, 1999",
        "FIFA Confederations Cup: 1997"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 2, years: ["1994", "2002"] },
          { name: "Copa América", count: 2, years: ["1997", "1999"] },
          { name: "FIFA Confederations Cup", count: 1, years: ["1997"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "UEFA Cup (Inter Milan)", count: 1, years: ["1997-98"] },
          { name: "UEFA Cup Winners' Cup (Barcelona)", count: 1, years: ["1996-97"] },
          { name: "Intercontinental Cup (Real Madrid)", count: 1, years: ["2002"] },
          { name: "La Liga (Real Madrid)", count: 2, years: ["2002-03", "2006-07"] },
          { name: "Copa del Rey & KNVB Cup", count: 2, years: ["1996", "1997"] }
        ]
      }
    ],
    individualAwards: [
      "Ballon d'Or: 2 times (1997, 2002) — Youngest recipient in history (age 21)",
      "FIFA World Player of the Year: 3 times (1996, 1997, 2002)",
      "FIFA World Cup Golden Ball: 1998",
      "FIFA World Cup Golden Boot: 2002 (8 goals)",
      "European Golden Shoe: 1997",
      "UEFA Club Footballer of the Year: 1998"
    ],
    importantMatches: [
      { match: "Compostela 1-5 Barcelona", date: "October 12, 1996", role: "Solo wonder goal", summary: "Dragged by his shirt, fouled twice, sprinted past five defenders before finishing; Sir Bobby Robson held his head in disbelief on the bench." },
      { match: "Brazil 2-0 Germany", date: "June 30, 2002", role: "World Cup Final brace", summary: "Slotted both goals past Oliver Kahn in Yokohama to seal Brazil's fifth World Cup title." },
      { match: "Manchester United 4-3 Real Madrid", date: "April 23, 2003", role: "Hat-trick at Old Trafford", summary: "Scored three thunderous goals; received a standing ovation from United fans when substituted." }
    ],
    careerStats: {
      totalMatches: 616,
      totalGoals: 414,
      totalAssists: 148,
      internationalGoals: 62,
      trophyCount: 19
    },
    historicalContext: "Widely regarded as the most explosive center-forward in football history. 'Il Fenomeno' combined Olympic sprinter speed, supreme body power, and Brazilian street trickery, pioneering the modern complete striker archetype.",
    playingStyle: "Unstoppable acceleration with the ball at his feet, devastating step-overs that routinely sat world-class goalkeepers on the floor, and lethal finishing with either foot."
  },
  {
    id: "ronaldinho",
    fullName: "Ronaldo de Assis Moreira",
    knownAs: "Ronaldinho",
    nationality: "Brazil",
    nationalityFlag: "🇧🇷",
    position: "Forward",
    dateOfBirth: "March 21, 1980",
    birthPlace: "Porto Alegre, Brazil",
    jerseyNumber: 10,
    careerTimeline: [
      { year: "1999", event: "Copa América Breakthrough", description: "Scored a miraculous sombrero-flick solo goal vs Venezuela at age 19." },
      { year: "2002", event: "World Cup Free Kick vs England", description: "Lobbied David Seaman from 40 yards in the quarter-final, winning the World Cup as part of the 'Three Rs'." },
      { year: "2003", event: "Barcelona Savior", description: "Signed by Joan Laporta to rebuild an ailing Barcelona, instantly reviving the club's fortunes." },
      { year: "2005", event: "Bernabéu Standing Ovation & Ballon d'Or", description: "Became the first Barcelona player since Maradona to receive a standing ovation from Real Madrid fans at the Bernabéu." },
      { year: "2006", event: "Champions League Triumph in Paris", description: "Guided Barcelona to their first Champions League title in 14 years." },
      { year: "2013", event: "Copa Libertadores with Atlético Mineiro", description: "Won South America's top prize, completing the rare World Cup + Champions League + Libertadores treble." }
    ],
    clubs: [
      { club: "Grêmio", years: "1998–2001", appearances: 141, goals: 68 },
      { club: "Paris Saint-Germain", years: "2001–2003", appearances: 77, goals: 25 },
      { club: "FC Barcelona", years: "2003–2008", appearances: 207, goals: 94 },
      { club: "AC Milan", years: "2008–2011", appearances: 95, goals: 26 },
      { club: "Flamengo", years: "2011–2012", appearances: 72, goals: 28 },
      { club: "Atlético Mineiro", years: "2012–2014", appearances: 85, goals: 27 }
    ],
    internationalCareer: {
      team: "Brazil National Team",
      years: "1999–2013",
      caps: 97,
      goals: 33,
      achievements: [
        "FIFA World Cup Champion: 2002",
        "Copa América Champion: 1999",
        "FIFA Confederations Cup Champion: 2005",
        "FIFA U-17 World Championship Champion: 1997"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 1, years: ["2002"] },
          { name: "Copa América", count: 1, years: ["1999"] },
          { name: "FIFA Confederations Cup", count: 1, years: ["2005"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "UEFA Champions League (Barcelona)", count: 1, years: ["2005-06"] },
          { name: "Copa Libertadores (Atlético Mineiro)", count: 1, years: ["2013"] },
          { name: "La Liga (Barcelona)", count: 2, years: ["2004-05", "2005-06"] },
          { name: "Serie A (AC Milan)", count: 1, years: ["2010-11"] },
          { name: "Recopa Sudamericana", count: 1, years: ["2014"] }
        ]
      }
    ],
    individualAwards: [
      "Ballon d'Or: 2005",
      "FIFA World Player of the Year: 2 times (2004, 2005)",
      "UEFA Club Footballer of the Year: 2005-06",
      "FIFPro World Player of the Year: 2005, 2006",
      "South American Footballer of the Year: 2013"
    ],
    importantMatches: [
      { match: "Real Madrid 0-3 Barcelona", date: "November 19, 2005", role: "Standing ovation at the Bernabéu", summary: "Scored two electrifying solo goals leaving Sergio Ramos and Iker Casillas helpless; Madrid fans stood to applaud his genius." },
      { match: "Chelsea 4-2 Barcelona", date: "March 8, 2005", role: "Toe-poke wonder goal at Stamford Bridge", summary: "Stopped dead at the edge of the box, wiggled his hips, and snapped a no-backlift toe-poke into Petr Čech's bottom corner." },
      { match: "England 1-2 Brazil", date: "June 21, 2002", role: "World Cup Quarter-final masterclass", summary: "Danced through England's midfield to assist Rivaldo, then caught David Seaman off his line with a 40-yard looping free kick." }
    ],
    careerStats: {
      totalMatches: 818,
      totalGoals: 328,
      totalAssists: 245,
      internationalGoals: 33,
      trophyCount: 16
    },
    historicalContext: "The ultimate football entertainer. Always playing with an infectious smile, Ronaldinho reminded the world that football was pure joy. He was the catalyst for Barcelona's 21st-century renaissance and mentored a young Lionel Messi.",
    playingStyle: "Elástico dribbles, no-look reverse passes, rabonas, back-heel flicks, overhead bicycle kicks, and astonishing accuracy from direct free kicks."
  },
  {
    id: "kylian-mbappe",
    fullName: "Kylian Mbappé Lottin",
    knownAs: "Kylian Mbappé",
    nationality: "France",
    nationalityFlag: "🇫🇷",
    position: "Forward",
    dateOfBirth: "December 20, 1998",
    birthPlace: "Paris, France",
    jerseyNumber: 9,
    careerTimeline: [
      { year: "2016–2017", event: "Monaco Fairy Tale", description: "Broke onto the scene with 26 goals at age 18, leading Monaco to the Ligue 1 title and Champions League semi-finals." },
      { year: "2017", event: "PSG Blockbuster Signing", description: "Joined Paris Saint-Germain for €180 million, becoming the most expensive teenager in football history." },
      { year: "2018", event: "World Cup Champion at 19", description: "Scored in the 2018 final, becoming the first teenager since Pelé (1958) to score in a World Cup Final." },
      { year: "2022", event: "World Cup Final Hat-Trick", description: "Scored only the second men's World Cup Final hat-trick in history vs Argentina; won the Golden Boot with 8 goals." },
      { year: "2023", event: "PSG All-Time Top Scorer", description: "Surpassed Edinson Cavani to become PSG's all-time leading scorer (256 goals in 308 games)." },
      { year: "2024", event: "Real Madrid Dream Move", description: "Joined reigning European champions Real Madrid on a free transfer, scoring on his UEFA Super Cup debut." }
    ],
    clubs: [
      { club: "AS Monaco", years: "2015–2017", appearances: 60, goals: 27 },
      { club: "Paris Saint-Germain", years: "2017–2024", appearances: 308, goals: 256 },
      { club: "Real Madrid", years: "2024–present", appearances: 25, goals: 15 }
    ],
    internationalCareer: {
      team: "France National Team",
      years: "2017–present",
      caps: 86,
      goals: 48,
      achievements: [
        "FIFA World Cup Champion: 2018",
        "FIFA World Cup Runner-up: 2022 (Golden Boot, Silver Ball)",
        "UEFA Nations League Champion: 2021",
        "FIFA World Cup Best Young Player: 2018",
        "Most goals in World Cup finals history (4 goals)"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 1, years: ["2018"] },
          { name: "UEFA Nations League", count: 1, years: ["2021"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "Ligue 1 (Monaco & PSG)", count: 7, years: ["2016-17", "2017-18", "2018-19", "2019-20", "2021-22", "2022-23", "2023-24"] },
          { name: "Coupe de France", count: 4, years: ["2018", "2020", "2021", "2024"] },
          { name: "Coupe de la Ligue", count: 2, years: ["2018", "2020"] },
          { name: "UEFA Super Cup (Real Madrid)", count: 1, years: ["2024"] }
        ]
      }
    ],
    individualAwards: [
      "FIFA World Cup Golden Boot: 2022 (8 goals)",
      "FIFA World Cup Silver Ball: 2022",
      "FIFA World Cup Best Young Player: 2018",
      "Ligue 1 Player of the Year: 5 times (2019, 2021, 2022, 2023, 2024) — Record",
      "Ligue 1 Top Scorer: 6 consecutive seasons (2019–2024)",
      "Golden Boy Award: 2017",
      "Kopa Trophy: 2018"
    ],
    importantMatches: [
      { match: "Argentina 3-3 France", date: "December 18, 2022", role: "World Cup Final hat-trick", summary: "Single-handedly revived France from 0-2 down with an 80th-minute penalty and an astonishing 81st-minute airborne volley, completing his hat-trick in extra time." },
      { match: "France 4-3 Argentina", date: "June 30, 2018", role: "Round of 16 speed exhibition", summary: "Clocked 38 km/h on a 70-meter run to win a penalty and scored twice in four minutes in Kazan." },
      { match: "Barcelona 1-4 PSG", date: "February 16, 2021", role: "Camp Nou Champions League hat-trick", summary: "Tore through Barcelona with an unforgettable hat-trick in the Champions League Round of 16." }
    ],
    careerStats: {
      totalMatches: 479,
      totalGoals: 346,
      totalAssists: 154,
      internationalGoals: 48,
      trophyCount: 19
    },
    historicalContext: "The defining superstar of the post-Messi/Ronaldo era. Already football's top World Cup final goalscorer in history at age 24. Combines blazing top-end velocity with ruthless finishing.",
    playingStyle: "Devastating speed, rapid cut-ins from the left half-space, lethal curled finishes into the far corner, and exceptional poise in 1-on-1 situations."
  },
  {
    id: "neymar",
    fullName: "Neymar da Silva Santos Júnior",
    knownAs: "Neymar",
    nationality: "Brazil",
    nationalityFlag: "🇧🇷",
    position: "Forward",
    dateOfBirth: "February 5, 1992",
    birthPlace: "Mogi das Cruzes, São Paulo, Brazil",
    jerseyNumber: 10,
    careerTimeline: [
      { year: "2011", event: "Copa Libertadores with Santos", description: "Led Santos to their first Copa Libertadores since Pelé in 1963 and won the Puskás Award." },
      { year: "2013", event: "Move to Barcelona", description: "Signed with Barcelona; formed the immortal 'MSN' attacking trident alongside Messi and Suárez." },
      { year: "2015", event: "Continental Treble & Champions League Top Scorer", description: "Scored in the Champions League quarter-finals, semi-finals, and final to win the Treble." },
      { year: "2016", event: "Olympic Gold Medal in Rio", description: "Scored a stunning free kick and struck the decisive penalty at the Maracanã to deliver Brazil's first Olympic football gold." },
      { year: "2017", event: "World Record €222M PSG Transfer", description: "Moved to Paris Saint-Germain in the most expensive transfer in sports history after inspiring 'La Remontada'." },
      { year: "2023", event: "Surpassing Pelé's Record", description: "Scored his 78th and 79th goals for Brazil, breaking Pelé's legendary 52-year-old all-time scoring record." }
    ],
    clubs: [
      { club: "Santos FC", years: "2009–2013", appearances: 225, goals: 136 },
      { club: "FC Barcelona", years: "2013–2017", appearances: 186, goals: 105 },
      { club: "Paris Saint-Germain", years: "2017–2023", appearances: 173, goals: 118 },
      { club: "Al Hilal", years: "2023–present", appearances: 7, goals: 1 }
    ],
    internationalCareer: {
      team: "Brazil National Team",
      years: "2010–present",
      caps: 128,
      goals: 79,
      achievements: [
        "Brazil Men's All-Time Leading Goalscorer (79 goals, surpassing Pelé)",
        "Olympic Gold Medal: Rio 2016",
        "FIFA Confederations Cup Champion: 2013 (Golden Ball)",
        "Copa América Runner-up: 2021",
        "Olympic Silver Medal: London 2012"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "Olympic Gold Medal", count: 1, years: ["2016"] },
          { name: "FIFA Confederations Cup", count: 1, years: ["2013"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "UEFA Champions League (Barcelona)", count: 1, years: ["2014-15"] },
          { name: "Copa Libertadores (Santos)", count: 1, years: ["2011"] },
          { name: "FIFA Club World Cup (Barcelona)", count: 1, years: ["2015"] },
          { name: "La Liga (Barcelona)", count: 2, years: ["2014-15", "2015-16"] },
          { name: "Ligue 1 (PSG)", count: 5, years: ["2017-18", "2018-19", "2019-20", "2021-22", "2022-23"] },
          { name: "Copa del Rey", count: 3, years: ["2014-15", "2015-16", "2016-17"] }
        ]
      }
    ],
    individualAwards: [
      "FIFA Puskás Award: 2011 (Sensational solo goal for Santos vs Flamengo)",
      "FIFA Confederations Cup Golden Ball: 2013",
      "UEFA Champions League Top Scorer: 2014-15 (10 goals)",
      "South American Footballer of the Year: 2011, 2012",
      "Ligue 1 Player of the Year: 2017-18",
      "Samba Gold (Best Brazilian in Europe): 6 times"
    ],
    importantMatches: [
      { match: "Barcelona 6-1 Paris Saint-Germain", date: "March 8, 2017", role: "The architect of La Remontada", summary: "Scored an 88th-minute free kick, converted a 91st-minute penalty, and provided the chipped 95th-minute assist for Sergi Roberto to pull off the greatest comeback in Champions League history." },
      { match: "Brazil 1-1 Germany (5-4 pen)", date: "August 20, 2016", role: "Olympic Gold Medal triumph", summary: "Curled home a 25-yard free kick and scored the gold medal-clinching penalty at the Maracanã." },
      { match: "Juventus 1-3 Barcelona", date: "June 6, 2015", role: "Champions League Final clincher", summary: "Scored the 97th-minute counter-attacking goal in Berlin to seal Barcelona's historic second treble." }
    ],
    careerStats: {
      totalMatches: 712,
      totalGoals: 439,
      totalAssists: 260,
      internationalGoals: 79,
      trophyCount: 31
    },
    historicalContext: "Brazil's standard-bearer for a decade and their all-time top goalscorer. The last pure Brazilian street dribbler of his generation, blending samba flair with elite playmaking vision.",
    playingStyle: "Mesmerizing close control, rainbow flicks, elastico moves, elite progressive passing, and precision set-piece delivery."
  },
  {
    id: "xavi",
    fullName: "Xavier Hernández Creus",
    knownAs: "Xavi",
    nationality: "Spain",
    nationalityFlag: "🇪🇸",
    position: "Midfielder",
    dateOfBirth: "January 25, 1980",
    birthPlace: "Terrassa, Barcelona, Spain",
    jerseyNumber: 6,
    careerTimeline: [
      { year: "1998", event: "Barcelona Senior Debut", description: "Made senior debut under Louis van Gaal, scoring the winning goal against Real Valladolid." },
      { year: "2008", event: "Euro 2008 Player of the Tournament", description: "Named Player of the Tournament as Spain ended a 44-year trophy drought in Vienna." },
      { year: "2008–2012", event: "Tiki-Taka Golden Age", description: "The heartbeat of Guardiola's Barcelona and Del Bosque's Spain, completing a historic international treble." },
      { year: "2010", event: "World Cup Champion & Ballon d'Or Podium", description: "Completed 599 passes at the 2010 World Cup (91% accuracy); finished 3rd in the Ballon d'Or." },
      { year: "2015", event: "Second Treble Farewell", description: "Lifted the Champions League trophy in Berlin in his final match for FC Barcelona." },
      { year: "2023", event: "La Liga Title as Barcelona Manager", description: "Returned to manage Barcelona, securing their first La Liga title in four years." }
    ],
    clubs: [
      { club: "FC Barcelona", years: "1998–2015", appearances: 767, goals: 85 },
      { club: "Al Sadd SC", years: "2015–2019", appearances: 117, goals: 24 }
    ],
    internationalCareer: {
      team: "Spain National Team",
      years: "2000–2014",
      caps: 133,
      goals: 12,
      achievements: [
        "FIFA World Cup Champion: 2010",
        "UEFA European Championship Champion: 2008 (Player of the Tournament), 2012",
        "Olympic Silver Medal: Sydney 2000",
        "FIFA World Youth Championship Champion: 1999"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 1, years: ["2010"] },
          { name: "UEFA European Championship", count: 2, years: ["2008", "2012"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "UEFA Champions League (Barcelona)", count: 4, years: ["2005-06", "2008-09", "2010-11", "2014-15"] },
          { name: "La Liga (Barcelona)", count: 8, years: ["1998-99", "2004-05", "2005-06", "2008-09", "2009-10", "2010-11", "2012-13", "2014-15"] },
          { name: "Copa del Rey", count: 3, years: ["2008-09", "2011-12", "2014-15"] },
          { name: "FIFA Club World Cup", count: 2, years: ["2009", "2011"] }
        ]
      }
    ],
    individualAwards: [
      "UEFA Euro Player of the Tournament: 2008",
      "IFFHS World's Best Playmaker: 4 times (2008, 2009, 2010, 2011)",
      "Ballon d'Or 3rd Place: 3 times (2009, 2010, 2011)",
      "UEFA Champions League Final Man of the Match: 2009",
      "FIFA FIFPro World11: 6 consecutive years (2008–2013)"
    ],
    importantMatches: [
      { match: "Real Madrid 2-6 Barcelona", date: "May 2, 2009", role: "Four assists in El Clásico", summary: "Delivered four masterclass assists at the Santiago Bernabéu to dismantle their eternal rivals." },
      { match: "Spain 4-0 Italy", date: "July 1, 2012", role: "Euro 2012 Final destruction", summary: "Provided two assists to Jordi Alba and Fernando Torres as Spain retained the European championship in Kiev." },
      { match: "Barcelona 2-0 Manchester United", date: "May 27, 2009", role: "Champions League Final assist", summary: "Named Man of the Match in Rome after floating a pin-point cross for Lionel Messi's iconic looping header." }
    ],
    careerStats: {
      totalMatches: 1075,
      totalGoals: 125,
      totalAssists: 238,
      internationalGoals: 12,
      trophyCount: 32
    },
    historicalContext: "The cerebral mastermind of Tiki-Taka. Xavi proved that physical giants could be dominated by intelligence, spatial awareness, and quick 360-degree turns ('la pelopina').",
    playingStyle: "Passing metronome, peripheral vision, spatial orientation ('scanning' every 3 seconds), and impossible-to-dispossess retention."
  },
  {
    id: "andres-iniesta",
    fullName: "Andrés Iniesta Luján",
    knownAs: "Andrés Iniesta",
    nationality: "Spain",
    nationalityFlag: "🇪🇸",
    position: "Midfielder",
    dateOfBirth: "May 11, 1984",
    birthPlace: "Fuentealbilla, Albacete, Spain",
    jerseyNumber: 8,
    careerTimeline: [
      { year: "1996", event: "Arrival at La Masia", description: "Joined Barcelona at age 12; Pep Guardiola famously told Xavi: 'You will retire me, but this boy will retire us all.'" },
      { year: "2009", event: "The Iniestazo at Stamford Bridge", description: "Struck a dramatic 93rd-minute outside-of-the-foot screamer vs Chelsea to send Barcelona to the Champions League final." },
      { year: "2010", event: "World Cup Winning Goal", description: "Scored in the 116th minute of the World Cup Final in Johannesburg, delivering Spain's maiden World Cup." },
      { year: "2012", event: "UEFA Best Player in Europe", description: "Named Euro 2012 Player of the Tournament and UEFA Best Player in Europe ahead of Messi and Ronaldo." },
      { year: "2015", event: "Man of the Match in Berlin", description: "Assisted the opening goal in the 2015 Champions League final, becoming the only player to be named MOTM in a World Cup, Euro, and UCL final." },
      { year: "2018–2023", event: "Vissel Kobe Journey", description: "Brought his artistry to Japan, winning the Emperor's Cup and J1 League with Vissel Kobe." }
    ],
    clubs: [
      { club: "FC Barcelona", years: "2002–2018", appearances: 674, goals: 57 },
      { club: "Vissel Kobe", years: "2018–2023", appearances: 134, goals: 26 },
      { club: "Emirates Club", years: "2023–2024", appearances: 23, goals: 5 }
    ],
    internationalCareer: {
      team: "Spain National Team",
      years: "2006–2018",
      caps: 131,
      goals: 13,
      achievements: [
        "FIFA World Cup Champion: 2010 (Final MOTM, scored winning goal)",
        "UEFA European Championship Champion: 2008, 2012 (Player of the Tournament)",
        "Only player in history named Man of the Match in World Cup Final, Euro Final, and Champions League Final"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup", count: 1, years: ["2010"] },
          { name: "UEFA European Championship", count: 2, years: ["2008", "2012"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "UEFA Champions League (Barcelona)", count: 4, years: ["2005-06", "2008-09", "2010-11", "2014-15"] },
          { name: "La Liga (Barcelona)", count: 9, years: ["2004-05", "2005-06", "2008-09", "2009-10", "2010-11", "2012-13", "2014-15", "2015-16", "2017-18"] },
          { name: "Copa del Rey", count: 6, years: ["2008-09", "2011-12", "2014-15", "2015-16", "2016-17", "2017-18"] },
          { name: "FIFA Club World Cup", count: 3, years: ["2009", "2011", "2015"] },
          { name: "J1 League & Emperor's Cup (Vissel Kobe)", count: 2, years: ["2019", "2023"] }
        ]
      }
    ],
    individualAwards: [
      "UEFA Best Player in Europe: 2012",
      "UEFA Euro Player of the Tournament: 2012",
      "Ballon d'Or 2nd Place (2010), 3rd Place (2012)",
      "FIFA World Cup Final Man of the Match: 2010",
      "UEFA Champions League Final Man of the Match: 2015",
      "FIFA FIFPro World11: 9 times"
    ],
    importantMatches: [
      { match: "Netherlands 0-1 Spain", date: "July 11, 2010", role: "The goal that made Spain world champions", summary: "Controlled Cesc Fàbregas' pass in the 116th minute to volley home, tearing off his shirt to reveal 'Dani Jarque: siempre con nosotros'." },
      { match: "Chelsea 1-1 Barcelona", date: "May 6, 2009", role: "The Iniestazo", summary: "Curled an unforgettable 93rd-minute strike with the outside of his boot into the top corner at Stamford Bridge." },
      { match: "Real Madrid 0-4 Barcelona", date: "November 21, 2015", role: "Standing ovation at the Bernabéu", summary: "Scored a thumping top-corner goal and delivered an assist; left the pitch to applause from Madrid supporters." }
    ],
    careerStats: {
      totalMatches: 885,
      totalGoals: 93,
      totalAssists: 172,
      internationalGoals: 13,
      trophyCount: 38
    },
    historicalContext: "Football's quiet magician. Iniesta's humility off the pitch contrasted with his fearless magic on it. Loved universally across Spain, even by fierce rivals, for his decency and unforgettable goals.",
    playingStyle: "Gliding 'croqueta' dribbles through impossible phone-booth spaces, deceptive acceleration, laser-guided weighted passes, and ice-cold composure under pressure."
  },
  {
    id: "luka-modric",
    fullName: "Luka Modrić",
    knownAs: "Luka Modrić",
    nationality: "Croatia",
    nationalityFlag: "🇭🇷",
    position: "Midfielder",
    dateOfBirth: "September 9, 1985",
    birthPlace: "Zadar, Croatia",
    jerseyNumber: 10,
    careerTimeline: [
      { year: "1991–1995", event: "Childhood War Refugee", description: "Raised as a refugee during the Croatian War of Independence; practiced ball drills in hotel parking lots amidst exploding grenades." },
      { year: "2008–2012", event: "Tottenham Hotspur Dynamo", description: "Conquered the physical demands of the Premier League under Harry Redknapp." },
      { year: "2012", event: "Real Madrid Move", description: "Voted 'worst signing of the season' by Marca readers in December 2012 before becoming one of the club's greatest ever midfielders." },
      { year: "2014–2024", event: "Six Champions League Titles", description: "The heartbeat of Real Madrid's golden era, becoming the joint-most decorated player in Champions League history with 6 titles." },
      { year: "2018", event: "World Cup Final, Golden Ball & Ballon d'Or", description: "Captained Croatia to the World Cup final; snapped the decade-long Messi-Ronaldo Ballon d'Or duopoly." },
      { year: "2022", event: "World Cup Bronze at 37", description: "Captained Croatia to a second consecutive World Cup podium in Qatar." }
    ],
    clubs: [
      { club: "Dinamo Zagreb", years: "2003–2008", appearances: 128, goals: 31 },
      { club: "Tottenham Hotspur", years: "2008–2012", appearances: 160, goals: 17 },
      { club: "Real Madrid", years: "2012–present", appearances: 545, goals: 39 }
    ],
    internationalCareer: {
      team: "Croatia National Team",
      years: "2006–present",
      caps: 182,
      goals: 27,
      achievements: [
        "FIFA World Cup Runner-up & Golden Ball: 2018",
        "FIFA World Cup Bronze Medal & Bronze Ball: 2022",
        "UEFA Nations League Runner-up: 2023",
        "Croatia All-Time Most Capped Player (182+ caps)"
      ]
    },
    majorTrophies: [
      {
        category: "International",
        titles: [
          { name: "FIFA World Cup Silver Medal", count: 1, years: ["2018"] },
          { name: "FIFA World Cup Bronze Medal", count: 1, years: ["2022"] },
          { name: "UEFA Nations League Silver", count: 1, years: ["2023"] }
        ]
      },
      {
        category: "Club",
        titles: [
          { name: "UEFA Champions League (Real Madrid)", count: 6, years: ["2013-14", "2015-16", "2016-17", "2017-18", "2021-22", "2023-24"] },
          { name: "La Liga (Real Madrid)", count: 4, years: ["2016-17", "2019-20", "2021-22", "2023-24"] },
          { name: "Copa del Rey", count: 2, years: ["2013-14", "2022-23"] },
          { name: "FIFA Club World Cup", count: 5, years: ["2014", "2016", "2017", "2018", "2022"] },
          { name: "Prva HNL (Dinamo Zagreb)", count: 3, years: ["2005-06", "2006-07", "2007-08"] }
        ]
      }
    ],
    individualAwards: [
      "Ballon d'Or: 2018",
      "The Best FIFA Men's Player: 2018",
      "UEFA Men's Player of the Year: 2017-18",
      "FIFA World Cup Golden Ball: 2018",
      "FIFA World Cup Bronze Ball: 2022",
      "Croatian Footballer of the Year: 12 times (Record)"
    ],
    importantMatches: [
      { match: "Real Madrid 2-3 Chelsea", date: "April 12, 2022", role: "The miracle outside-of-the-boot trivela", summary: "With Madrid trailing 0-3 on the night, Modrić produced a sublime 30-yard trivela assist for Rodrygo to ignite an unforgettable comeback." },
      { match: "Croatia 2-1 England", date: "July 11, 2018", role: "World Cup Semi-Final triumph", summary: "Dominated the midfield for 120 minutes in Moscow to send his nation of 4 million to their first World Cup final." },
      { match: "Real Madrid 4-1 Atlético Madrid", date: "May 24, 2014", role: "La Décima 93rd-minute corner", summary: "Delivered the precise 92:48 corner kick for Sergio Ramos' legendary equalizer in Lisbon." }
    ],
    careerStats: {
      totalMatches: 1045,
      totalGoals: 125,
      totalAssists: 178,
      internationalGoals: 27,
      trophyCount: 33
    },
    historicalContext: "A warrior-artist whose triumph over adversity inspired an entire generation. Modrić defined modern midfield endurance, playing at the pinnacle of European football well into his late 30s.",
    playingStyle: "Trademark 'trivela' (outside-of-the-boot passing and crossing), low center of gravity turns, tireless defensive pressing, and visionary tempo control."
  },
  {
    id: "robert-lewandowski",
    fullName: "Robert Lewandowski",
    knownAs: "Robert Lewandowski",
    nationality: "Poland",
    nationalityFlag: "🇵🇱",
    position: "Forward",
    dateOfBirth: "August 21, 1988",
    birthPlace: "Warsaw, Poland",
    jerseyNumber: 9,
    careerTimeline: [
      { year: "2010", event: "Move to Dortmund", description: "Signed with Jürgen Klopp's Borussia Dortmund after an ash cloud prevented a move to Blackburn Rovers." },
      { year: "2013", event: "Four Goals vs Real Madrid", description: "Became the first player in history to score four goals in a Champions League semi-final against Real Madrid." },
      { year: "2014", event: "Free Transfer to Bayern Munich", description: "Moved to Bayern Munich, becoming the cornerstone of their modern dominance." },
      { year: "2015", event: "Five Goals in 9 Minutes", description: "Came on as a second-half substitute vs Wolfsburg and scored five goals in 8 minutes and 59 seconds." },
      { year: "2020", event: "Sextuple & FIFA The Best", description: "Scored 55 goals as Bayern won all six available trophies; was the clear favorite for the cancelled 2020 Ballon d'Or." },
      { year: "2021", event: "Broke Gerd Müller's Record", description: "Scored 41 goals in a single 34-game Bundesliga season, breaking Gerd Müller's 49-year-old record." },
      { year: "2022–present", event: "Barcelona Pichichi", description: "Transferred to FC Barcelona, winning La Liga and the Pichichi top scorer trophy in his debut season." }
    ],
    clubs: [
      { club: "Znicz Pruszków", years: "2006–2008", appearances: 66, goals: 38 },
      { club: "Lech Poznań", years: "2008–2010", appearances: 82, goals: 41 },
      { club: "Borussia Dortmund", years: "2010–2014", appearances: 187, goals: 103 },
      { club: "Bayern Munich", years: "2014–2022", appearances: 375, goals: 344 },
      { club: "FC Barcelona", years: "2022–present", appearances: 105, goals: 68 }
    ],
    internationalCareer: {
      team: "Poland National Team",
      years: "2008–present",
      caps: 156,
      goals: 84,
      achievements: [
        "Poland All-Time Top Goalscorer (84 goals)",
        "Poland All-Time Most Capped Player (156 caps)",
        "Captained Poland to Euro 2016 quarter-finals and 2022 World Cup Round of 16"
      ]
    },
    majorTrophies: [
      {
        category: "Club",
        titles: [
          { name: "UEFA Champions League (Bayern Munich)", count: 1, years: ["2019-20"] },
          { name: "FIFA Club World Cup", count: 1, years: ["2020"] },
          { name: "Bundesliga (Dortmund & Bayern)", count: 10, years: ["2010-11", "2011-12", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19", "2019-20", "2020-21", "2021-22"] },
          { name: "La Liga (Barcelona)", count: 1, years: ["2022-23"] },
          { name: "DFB-Pokal", count: 4, years: ["2012", "2016", "2019", "2020"] }
        ]
      }
    ],
    individualAwards: [
      "The Best FIFA Men's Player: 2 times (2020, 2021)",
      "UEFA Men's Player of the Year: 2019-20",
      "European Golden Shoe: 2 times (2020-21, 2021-22)",
      "Bundesliga Top Scorer (Torjägerkanone): 7 times (Record tie with Gerd Müller)",
      "Pichichi Trophy (La Liga Top Scorer): 2022-23",
      "IFFHS World's Best Top Goal Scorer: 3 times"
    ],
    importantMatches: [
      { match: "Bayern Munich 5-1 Wolfsburg", date: "September 22, 2015", role: "Five goals in 9 minutes", summary: "Came off the bench at half-time trailing 0-1 and scored in the 51', 52', 55', 57', and 60' minutes, setting four Guinness World Records." },
      { match: "Borussia Dortmund 4-1 Real Madrid", date: "April 24, 2013", role: "Champions League Semi-Final four-timer", summary: "Destroyed José Mourinho's Real Madrid with four clinical goals in front of the Yellow Wall." },
      { match: "Bayern Munich 5-2 Augsburg", date: "May 22, 2021", role: "90th-minute record breaker", summary: "Scored in the final minute of the season to hit 41 goals, surpassing Gerd Müller's immortal 1971-72 milestone." }
    ],
    careerStats: {
      totalMatches: 978,
      totalGoals: 685,
      totalAssists: 182,
      internationalGoals: 84,
      trophyCount: 29
    },
    historicalContext: "The preeminent classical number 9 of the 2010s and 2020s. Renowned for robotic physical discipline, elite penalty-box movement, and clinical conversion rate.",
    playingStyle: "Complete target forward: world-class hold-up play, aerial prowess, textbook penalty technique, and instinctive one-touch finishing."
  }
];
