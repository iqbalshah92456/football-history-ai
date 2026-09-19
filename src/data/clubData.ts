import { ClubProfile } from '../types';

export const CLUB_PROFILES: ClubProfile[] = [
  {
    id: "real-madrid",
    name: "Real Madrid Club de Fútbol",
    shortName: "Real Madrid",
    country: "Spain",
    countryFlag: "🇪🇸",
    founded: 1902,
    stadium: {
      name: "Estadio Santiago Bernabéu",
      capacity: 85000,
      opened: 1947,
      city: "Madrid"
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "#00529F",
      accent: "#EEB111"
    },
    historicalSummary: "Recognized by FIFA as the Greatest Club of the 20th Century. With a record 15 European Cup / UEFA Champions League crowns and 36 La Liga titles, Real Madrid epitomizes royal football supremacy and unrelenting European pedigree.",
    historicalTimeline: [
      { decade: "1900s–1950s", title: "Royal Roots & Bernabéu Vision", description: "Granted 'Real' (Royal) patronage by King Alfonso XIII in 1920. Club president Santiago Bernabéu rebuilt the stadium after the Civil War and pioneered modern European competition." },
      { decade: "1953–1960", title: "The Five-in-a-Row Dynasty", description: "Signed Alfredo Di Stéfano and Ferenc Puskás, winning the first five consecutive European Cups (1956–1960), culminating in the 7-3 victory over Eintracht Frankfurt." },
      { decade: "1980s", title: "La Quinta del Buitre", description: "Five homegrown academy stars led by Emilio Butragueño dominated Spanish football, winning five consecutive La Liga titles and back-to-back UEFA Cups." },
      { decade: "2000–2006", title: "The First Galácticos", description: "Florentino Pérez assembled global icons: Luís Figo, Zinedine Zidane, Ronaldo Nazário, and David Beckham alongside homegrown talisman Raúl." },
      { decade: "2014–2018", title: "La Décima & The Historic Three-Peat", description: "Led by Cristiano Ronaldo and managed by Zinedine Zidane, Madrid captured four Champions League titles in five years, including three straight from 2016 to 2018." },
      { decade: "2020s", title: "Modern Dominance & Renovated Bernabéu", description: "Under Carlo Ancelotti, young stars Vinícius Júnior, Jude Bellingham, and Kylian Mbappé secured the 14th and 15th European crowns." }
    ],
    legendaryPlayers: ["Alfredo Di Stéfano", "Cristiano Ronaldo", "Ferenc Puskás", "Zinedine Zidane", "Raúl González", "Iker Casillas", "Sergio Ramos", "Luka Modrić", "Karim Benzema", "Paco Gento"],
    famousManagers: ["Miguel Muñoz", "Vicente del Bosque", "Zinedine Zidane", "Carlo Ancelotti", "José Mourinho"],
    majorTrophies: [
      { name: "European Cup / UEFA Champions League", count: 15, years: ["1956", "1957", "1958", "1959", "1960", "1966", "1998", "2000", "2002", "2014", "2016", "2017", "2018", "2022", "2024"] },
      { name: "La Liga", count: 36 },
      { name: "Copa del Rey", count: 20 },
      { name: "FIFA Club World Cup / Intercontinental Cup", count: 8 },
      { name: "UEFA Super Cup", count: 6 },
      { name: "UEFA Cup", count: 2 }
    ],
    importantMatches: [
      { title: "Real Madrid 7-3 Eintracht Frankfurt", date: "May 18, 1960", opponent: "Eintracht Frankfurt", score: "7 - 3", description: "Regarded as the greatest European Cup final in history in front of 127,000 spectators at Hampden Park (Puskás 4 goals, Di Stéfano 3 goals)." },
      { title: "Real Madrid 4-1 Atlético Madrid (a.e.t.)", date: "May 24, 2014", opponent: "Atlético Madrid", score: "4 - 1", description: "Sergio Ramos scored the immortal 92:48 header to force extra time and secure 'La Décima' in Lisbon." },
      { title: "Real Madrid 2-1 Bayer Leverkusen", date: "May 15, 2002", opponent: "Bayer Leverkusen", score: "2 - 1", description: "Zidane's peerless left-footed volley at Hampden Park delivered the 9th European Cup." }
    ],
    majorEras: [
      { title: "Di Stéfano Golden Age", period: "1953–1964", description: "Five consecutive European Cups and total dominance of the early continental game.", keyFigures: ["Alfredo Di Stéfano", "Ferenc Puskás", "Paco Gento", "Santiago Bernabéu"] },
      { title: "The Galácticos", period: "2000–2006", description: "Marketing and football revolutionized with global megastars.", keyFigures: ["Florentino Pérez", "Zinedine Zidane", "Ronaldo", "Luís Figo", "Raúl"] },
      { title: "The Champions League Dynasty", period: "2014–present", description: "Six Champions League triumphs in ten years, setting the modern benchmark.", keyFigures: ["Cristiano Ronaldo", "Luka Modrić", "Sergio Ramos", "Carlo Ancelotti", "Zinedine Zidane"] }
    ]
  },
  {
    id: "barcelona",
    name: "Futbol Club Barcelona",
    shortName: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    founded: 1899,
    stadium: {
      name: "Spotify Camp Nou",
      capacity: 99354,
      opened: 1957,
      city: "Barcelona"
    },
    colors: {
      primary: "#004D98",
      secondary: "#A50044",
      accent: "#EDBB00"
    },
    historicalSummary: "'Més que un club' (More than a club). Barcelona represents Catalan identity and revolutionized modern football tactics through Johan Cruyff's Total Football and Pep Guardiola's iconic Tiki-Taka generation.",
    historicalTimeline: [
      { decade: "1899–1920s", title: "Founding by Joan Gamper", description: "Founded by Swiss pioneer Joan Gamper. The club quickly became a symbol of Catalan culture, pride, and democratic values." },
      { decade: "1973–1978", title: "Cruyff's First Revolution", description: "Johan Cruyff joined as a player, leading Barça to their first league title in 14 years and demanding the creation of the La Masia youth academy." },
      { decade: "1988–1996", title: "The Dream Team", description: "Cruyff returned as manager, winning four consecutive La Ligas and the club's first European Cup in 1992 at Wembley with Ronald Koeman's free kick." },
      { decade: "2003–2008", title: "The Ronaldinho Renaissance", description: "Ronaldinho arrived to bring joy, trophies, and back-to-back league titles alongside the 2006 Champions League in Paris under Frank Rijkaard." },
      { decade: "2008–2012", title: "Guardiola Sextuple & Peak Tiki-Taka", description: "Pep Guardiola promoted Busquets and Pedro, moved Messi to 'false 9', and produced arguably the greatest club team in history, winning 14 of 19 trophies." },
      { decade: "2014–2017", title: "The MSN Treble Era", description: "Luis Enrique united Lionel Messi, Luis Suárez, and Neymar into the most lethal attacking trident in football history, winning the 2015 Treble." }
    ],
    legendaryPlayers: ["Lionel Messi", "Johan Cruyff", "Xavi Hernández", "Andrés Iniesta", "Ronaldinho", "Carles Puyol", "Rivaldo", "László Kubala", "Ronald Koeman", "Sergio Busquets"],
    famousManagers: ["Pep Guardiola", "Johan Cruyff", "Luis Enrique", "Frank Rijkaard", "Rinus Michels"],
    majorTrophies: [
      { name: "UEFA Champions League", count: 5, years: ["1992", "2006", "2009", "2011", "2015"] },
      { name: "La Liga", count: 27 },
      { name: "Copa del Rey", count: 31 },
      { name: "FIFA Club World Cup", count: 3 },
      { name: "UEFA Cup Winners' Cup", count: 4 },
      { name: "UEFA Super Cup", count: 5 }
    ],
    importantMatches: [
      { title: "Barcelona 3-1 Manchester United", date: "May 28, 2011", opponent: "Manchester United", score: "3 - 1", description: "Widely regarded as the apex of team football; goals by Pedro, Messi, and Villa at Wembley left Ferguson bewildered." },
      { title: "Barcelona 6-1 Paris Saint-Germain", date: "March 8, 2017", opponent: "PSG", score: "6 - 1", description: "Overturned a 0-4 first-leg deficit with three goals in the final seven minutes to complete 'La Remontada'." },
      { title: "Real Madrid 2-6 Barcelona", date: "May 2, 2009", opponent: "Real Madrid", score: "6 - 2", description: "Guardiola first deployed Messi as false nine at the Bernabéu, dismantling Madrid in an iconic Clásico." }
    ],
    majorEras: [
      { title: "Cruyff's Dream Team", period: "1988–1996", description: "La Masia philosophy born; first European Cup won.", keyFigures: ["Johan Cruyff", "Ronald Koeman", "Michael Laudrup", "Hristo Stoichkov", "Pep Guardiola"] },
      { title: "Guardiola's Golden Era", period: "2008–2012", description: "Tiki-taka perfection, Sextuple in 2009, and unmatched tactical mastery.", keyFigures: ["Pep Guardiola", "Lionel Messi", "Xavi", "Andrés Iniesta", "Carles Puyol"] },
      { title: "The MSN Trio", period: "2014–2017", description: "122 goals in a single season from Messi, Suárez, and Neymar, securing the 2015 Treble.", keyFigures: ["Luis Enrique", "Lionel Messi", "Luis Suárez", "Neymar", "Gerard Piqué"] }
    ]
  },
  {
    id: "manchester-united",
    name: "Manchester United Football Club",
    shortName: "Manchester United",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    founded: 1878,
    stadium: {
      name: "Old Trafford ('The Theatre of Dreams')",
      capacity: 74310,
      opened: 1910,
      city: "Manchester"
    },
    colors: {
      primary: "#DA291C",
      secondary: "#000000",
      accent: "#FBE122"
    },
    historicalSummary: "England's most successful domestic club with 20 league titles. Defined by phoenix-like rebirth following the 1958 Munich Air Disaster and an unprecedented 26-year dynasty under Sir Alex Ferguson.",
    historicalTimeline: [
      { decade: "1878–1940s", title: "Newton Heath & Rebirth", description: "Founded as Newton Heath LYR Football Club by railway carriage workers. Renamed Manchester United in 1902." },
      { decade: "1950s", title: "The Busby Babes & Munich", description: "Sir Matt Busby built a youthful team that won consecutive league titles before tragedy struck on February 6, 1958, claiming 23 lives in the Munich air disaster." },
      { decade: "1968", title: "European Champions at Wembley", description: "Ten years after Munich, Busby and survivor Bobby Charlton, alongside George Best and Denis Law, beat Benfica 4-1 to become England's first European champions." },
      { decade: "1986–1999", title: "Ferguson & The Class of '92", description: "Sir Alex Ferguson ended a 26-year title drought, nurtured Beckham, Giggs, Scholes, the Nevilles, and Butt, culminating in the 1999 Treble." },
      { decade: "2006–2011", title: "Ronaldo, Rooney & European Dominance", description: "Reached three Champions League finals in four seasons, winning in Moscow in 2008 and claiming three straight Premier League titles." }
    ],
    legendaryPlayers: ["Sir Bobby Charlton", "George Best", "Eric Cantona", "Ryan Giggs", "Paul Scholes", "Cristiano Ronaldo", "Wayne Rooney", "Denis Law", "Peter Schmeichel", "Roy Keane"],
    famousManagers: ["Sir Alex Ferguson", "Sir Matt Busby", "Ernest Mangnall", "Ron Atkinson"],
    majorTrophies: [
      { name: "English League Champions / Premier League", count: 20 },
      { name: "UEFA Champions League / European Cup", count: 3, years: ["1968", "1999", "2008"] },
      { name: "FA Cup", count: 13 },
      { name: "League Cup", count: 6 },
      { name: "FIFA Club World Cup / Intercontinental Cup", count: 2 },
      { name: "UEFA Europa League", count: 1, years: ["2017"] }
    ],
    importantMatches: [
      { title: "Manchester United 2-1 Bayern Munich", date: "May 26, 1999", opponent: "Bayern Munich", score: "2 - 1", description: "Teddy Sheringham and Ole Gunnar Solskjær scored in stoppage time (91' and 93') to pull off the greatest comeback in Champions League final history and clinch the Treble." },
      { title: "Manchester United 4-1 Benfica (a.e.t.)", date: "May 29, 1968", opponent: "Benfica", score: "4 - 1", description: "Ten years after the Munich air crash, Matt Busby's side lifted England's first European Cup at Wembley." },
      { title: "Manchester United 1-1 Chelsea (6-5 pen)", date: "May 21, 2008", opponent: "Chelsea", score: "1 - 1", description: "Edwin van der Sar saved Nicolas Anelka's penalty in the rain in Moscow to claim United's third Champions League." }
    ],
    majorEras: [
      { title: "The Busby Era", period: "1945–1969", description: "Rebuilding from post-war rubble to Munich heartbreak and European Cup glory.", keyFigures: ["Sir Matt Busby", "Bobby Charlton", "George Best", "Denis Law"] },
      { title: "Ferguson's First Dynasty & The Treble", period: "1992–1999", description: "The Class of '92, Eric Cantona's swagger, and the historic 1999 Treble.", keyFigures: ["Sir Alex Ferguson", "Eric Cantona", "Roy Keane", "David Beckham", "Ryan Giggs"] },
      { title: "Ronaldo-Rooney European Dominance", period: "2006–2011", description: "Champions League triumph, Moscow 2008, and three consecutive Premier League titles.", keyFigures: ["Cristiano Ronaldo", "Wayne Rooney", "Paul Scholes", "Nemanja Vidić", "Rio Ferdinand"] }
    ]
  },
  {
    id: "liverpool",
    name: "Liverpool Football Club",
    shortName: "Liverpool",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    founded: 1892,
    stadium: {
      name: "Anfield",
      capacity: 61276,
      opened: 1884,
      city: "Liverpool"
    },
    colors: {
      primary: "#C8102E",
      secondary: "#00B2A9",
      accent: "#F6EB61"
    },
    historicalSummary: "England's most decorated club in European competition with 6 European Cups / Champions League titles. Built upon Bill Shankly's socialist 'Boot Room' culture, famed for Anfield European nights and 'You'll Never Walk Alone'.",
    historicalTimeline: [
      { decade: "1892–1950s", title: "Anfield Birth", description: "Formed following an internal dispute over Anfield rent by John Houlding; won five league titles prior to Shankly's arrival." },
      { decade: "1959–1974", title: "The Shankly Revolution", description: "Bill Shankly converted a struggling Second Division club into a European powerhouse, introduced the iconic all-red kit, and built the famous 'Boot Room'." },
      { decade: "1974–1983", title: "Bob Paisley's Golden Harvest", description: "Bob Paisley won three European Cups in nine seasons (1977, 1978, 1981) — the greatest managerial trophy return in English history." },
      { decade: "1980s", title: "Continued Domination & Tragedies", description: "Won the 1984 European Cup in Rome; shadowed by the Heysel (1985) and Hillsborough (1989) stadium disasters." },
      { decade: "2005", title: "Miracle of Istanbul", description: "Steven Gerrard inspired Liverpool from 0-3 down at half-time against AC Milan to win the Champions League on penalties." },
      { decade: "2015–2024", title: "Jürgen Klopp's Heavy Metal Football", description: "Won the 2019 Champions League in Madrid and ended a 30-year English league title drought in 2020." }
    ],
    legendaryPlayers: ["Steven Gerrard", "Kenny Dalglish", "Ian Rush", "Mohamed Salah", "Graeme Souness", "John Barnes", "Kevin Keegan", "Robbie Fowler", "Jamie Carragher", "Virgil van Dijk"],
    famousManagers: ["Bill Shankly", "Bob Paisley", "Jürgen Klopp", "Kenny Dalglish", "Rafael Benítez"],
    majorTrophies: [
      { name: "European Cup / UEFA Champions League", count: 6, years: ["1977", "1978", "1981", "1984", "2005", "2019"] },
      { name: "English League Champions / Premier League", count: 19 },
      { name: "FA Cup", count: 8 },
      { name: "League Cup", count: 10 },
      { name: "UEFA Cup / Europa League", count: 3 },
      { name: "FIFA Club World Cup", count: 1, years: ["2019"] }
    ],
    importantMatches: [
      { title: "AC Milan 3-3 Liverpool (2-3 pen)", date: "May 25, 2005", opponent: "AC Milan", score: "3 - 3", description: "The Miracle of Istanbul: trailing 0-3 at half-time to Carlo Ancelotti's star-studded Milan, Liverpool scored three goals in six minutes before Jerzy Dudek's shootout heroics." },
      { title: "Liverpool 4-0 Barcelona", date: "May 7, 2019", opponent: "Barcelona", score: "4 - 0", description: "Overturned a 0-3 first leg deficit against Lionel Messi's Barcelona at Anfield, sealed by Trent Alexander-Arnold's 'corner taken quickly'." },
      { title: "Liverpool 3-1 Borussia Mönchengladbach", date: "May 25, 1977", opponent: "Borussia Mönchengladbach", score: "3 - 1", description: "Bob Paisley's men claimed the club's first European Cup at the Stadio Olimpico in Rome." }
    ],
    majorEras: [
      { title: "The Boot Room Dynasty", period: "1974–1985", description: "Bob Paisley and Joe Fagan guided Liverpool to four European Cups and seven league titles.", keyFigures: ["Bob Paisley", "Kenny Dalglish", "Graeme Souness", "Ian Rush", "Alan Hansen"] },
      { title: "The Steven Gerrard Era", period: "1998–2015", description: "The talismanic captain carried the club through domestic cup triumphs and Istanbul immortality.", keyFigures: ["Steven Gerrard", "Rafael Benítez", "Jamie Carragher", "Xabi Alonso", "Fernando Torres"] },
      { title: "Klopp's Heavy Metal Renaissance", period: "2015–2024", description: "High-pressing, blistering attacks, 6th Champions League, and the 2020 Premier League title.", keyFigures: ["Jürgen Klopp", "Mohamed Salah", "Virgil van Dijk", "Sadio Mané", "Alisson Becker"] }
    ]
  },
  {
    id: "manchester-city",
    name: "Manchester City Football Club",
    shortName: "Manchester City",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    founded: 1880,
    stadium: {
      name: "Etihad Stadium",
      capacity: 53400,
      opened: 2003,
      city: "Manchester"
    },
    colors: {
      primary: "#6CABDD",
      secondary: "#1C2C5B",
      accent: "#FFFFFF"
    },
    historicalSummary: "From Maine Road heartbreaks to the pinnacle of world football. Under Pep Guardiola, City reached football perfection, winning the 2023 Continental Treble and four consecutive Premier League titles.",
    historicalTimeline: [
      { decade: "1880–1930s", title: "St. Mark's & Early Silverware", description: "Founded in West Gorton as St. Mark's; won the 1904 FA Cup and 1937 league championship." },
      { decade: "1968–1970", title: "Mercer-Allison Glory Era", description: "Joe Mercer and Malcolm Allison led City to the First Division title, FA Cup, League Cup, and 1970 European Cup Winners' Cup." },
      { decade: "1999", title: "Gillingham Play-Off Miracle", description: "Trailing 0-2 in the 89th minute of the Second Division play-off final at Wembley, Paul Dickov scored a 95th-minute equalizer to avoid financial ruin." },
      { decade: "2008–2012", title: "Abu Dhabi Investment & 93:20", description: "Takeover by Sheikh Mansour; ended a 35-year trophy drought in 2011 before Sergio Agüero's 93:20 goal won the Premier League in 2012." },
      { decade: "2016–present", title: "Pep Guardiola's Centurions & Treble", description: "Became the first team to reach 100 Premier League points (2018), captured four straight league titles, and won the 2023 Champions League Treble." }
    ],
    legendaryPlayers: ["Kevin De Bruyne", "Sergio Agüero", "David Silva", "Vincent Kompany", "Colin Bell", "Erling Haaland", "Yaya Touré", "Fernandinho", "Bert Trautmann", "Ilkay Gündogan"],
    famousManagers: ["Pep Guardiola", "Roberto Mancini", "Manuel Pellegrini", "Joe Mercer"],
    majorTrophies: [
      { name: "UEFA Champions League", count: 1, years: ["2023"] },
      { name: "English League Champions / Premier League", count: 10 },
      { name: "FA Cup", count: 7 },
      { name: "League Cup", count: 8 },
      { name: "FIFA Club World Cup", count: 1, years: ["2023"] },
      { name: "European Cup Winners' Cup", count: 1, years: ["1970"] }
    ],
    importantMatches: [
      { title: "Manchester City 3-2 QPR", date: "May 13, 2012", opponent: "Queens Park Rangers", score: "3 - 2", description: "93:20 — Sergio Agüero scored with the final kick of the season to snatch City's first title in 44 years from rivals Manchester United on goal difference." },
      { title: "Manchester City 1-0 Inter Milan", date: "June 10, 2023", opponent: "Inter Milan", score: "1 - 0", description: "Rodri's 68th-minute curling strike in Istanbul completed City's historic Continental Treble." },
      { title: "Manchester City 4-0 Real Madrid", date: "May 17, 2023", opponent: "Real Madrid", score: "4 - 0", description: "One of the most lopsided Champions League semi-final performances in history, tearing the 14-time champions apart." }
    ],
    majorEras: [
      { title: "The Breakthrough Era", period: "2011–2014", description: "FA Cup victory and Agüero's dramatic title winning goal.", keyFigures: ["Roberto Mancini", "Sergio Agüero", "Vincent Kompany", "David Silva", "Yaya Touré"] },
      { title: "Guardiola's Tactical Hegemony", period: "2016–present", description: "100-point season, domestic sweep, 4-in-a-row Premier League titles, and Champions League Treble.", keyFigures: ["Pep Guardiola", "Kevin De Bruyne", "Erling Haaland", "Rodri", "Bernardo Silva"] }
    ]
  },
  {
    id: "bayern-munich",
    name: "Fußball-Club Bayern München",
    shortName: "Bayern Munich",
    country: "Germany",
    countryFlag: "🇩🇪",
    founded: 1900,
    stadium: {
      name: "Allianz Arena",
      capacity: 75000,
      opened: 2005,
      city: "Munich"
    },
    colors: {
      primary: "#DC052D",
      secondary: "#0066B2",
      accent: "#FFFFFF"
    },
    historicalSummary: "'Mia san Mia' (We are who we are). The indisputable titan of German football with 33 Bundesliga titles and 6 European Cups, renowned for ruthless efficiency and two European Trebles (2013, 2020).",
    historicalTimeline: [
      { decade: "1900–1960s", title: "Founding to Bundesliga Entry", description: "Founded in Schwabing, Munich. Joined the Bundesliga in 1965 with young prodigies Beckenbauer, Maier, and Müller." },
      { decade: "1974–1976", title: "European Cup Three-Peat", description: "Franz Beckenbauer, Gerd Müller, and Sepp Maier ruled Europe, winning three straight European Cups against Atlético, Leeds, and Saint-Étienne." },
      { decade: "1980s–1990s", title: "'FC Hollywood' & Domestic Dominance", description: "Lothar Matthäus, Stefan Effenberg, and Jürgen Klinsmann brought trophies alongside tabloid drama." },
      { decade: "2001", title: "Champions League Redemption in Milan", description: "Oliver Kahn's penalty heroics vs Valencia banished the nightmare of the 1999 Camp Nou final." },
      { decade: "2012–2013", title: "Heynckes' Historic Treble", description: "After finishing runners-up in three competitions in 2012, Bayern responded by sweeping the Bundesliga, DFB-Pokal, and Champions League at Wembley." },
      { decade: "2019–2020", title: "Hansi Flick's Sextuple", description: "Won all 11 matches in the Champions League campaign, including an 8-2 demolition of Barcelona, to complete the Sextuple." }
    ],
    legendaryPlayers: ["Franz Beckenbauer", "Gerd Müller", "Karl-Heinz Rummenigge", "Oliver Kahn", "Philipp Lahm", "Bastian Schweinsteiger", "Thomas Müller", "Manuel Neuer", "Robert Lewandowski", "Arjen Robben"],
    famousManagers: ["Udo Lattek", "Jupp Heynckes", "Hansi Flick", "Pep Guardiola", "Ottmar Hitzfeld"],
    majorTrophies: [
      { name: "European Cup / UEFA Champions League", count: 6, years: ["1974", "1975", "1976", "2001", "2013", "2020"] },
      { name: "Bundesliga", count: 33 },
      { name: "DFB-Pokal", count: 20 },
      { name: "FIFA Club World Cup / Intercontinental Cup", count: 4 },
      { name: "UEFA Cup", count: 1, years: ["1996"] }
    ],
    importantMatches: [
      { title: "Borussia Dortmund 1-2 Bayern Munich", date: "May 25, 2013", opponent: "Borussia Dortmund", score: "2 - 1", description: "Arjen Robben rolled in an 89th-minute winner in the all-German Champions League final at Wembley to seal the Treble." },
      { title: "Barcelona 2-8 Bayern Munich", date: "August 14, 2020", opponent: "Barcelona", score: "8 - 2", description: "Hansi Flick's ruthless pressing machine dismantled Lionel Messi's Barcelona in Lisbon en route to the 2020 Champions League title." },
      { title: "Bayern Munich 1-1 Valencia (5-4 pen)", date: "May 23, 2001", opponent: "Valencia", score: "1 - 1", description: "Oliver Kahn saved three penalties in the San Siro shootout to earn Bayern their fourth European Cup." }
    ],
    majorEras: [
      { title: "The Kaiser & Bomber Dynasty", period: "1970–1979", description: "Three straight European Cups with Beckenbauer, Müller, and Maier.", keyFigures: ["Franz Beckenbauer", "Gerd Müller", "Sepp Maier", "Udo Lattek", "Uli Hoeness"] },
      { title: "Robbery & Wembley Treble", period: "2009–2013", description: "The iconic wing pairing of Robben and Ribéry culminating in the 2013 Treble.", keyFigures: ["Jupp Heynckes", "Arjen Robben", "Franck Ribéry", "Philipp Lahm", "Bastian Schweinsteiger"] },
      { title: "Eleven-in-a-Row & 2020 Sextuple", period: "2013–2023", description: "Total Bundesliga domination, Robert Lewandowski's record goals, and Flick's 2020 clean sweep.", keyFigures: ["Hansi Flick", "Robert Lewandowski", "Thomas Müller", "Manuel Neuer", "Joshua Kimmich"] }
    ]
  },
  {
    id: "ac-milan",
    name: "Associazione Calcio Milan",
    shortName: "AC Milan",
    country: "Italy",
    countryFlag: "🇮🇹",
    founded: 1899,
    stadium: {
      name: "San Siro (Stadio Giuseppe Meazza)",
      capacity: 75923,
      opened: 1926,
      city: "Milan"
    },
    colors: {
      primary: "#FB090B",
      secondary: "#000000",
      accent: "#FFFFFF"
    },
    historicalSummary: "Seven-time European champions, second only to Real Madrid. Famed for Arrigo Sacchi's revolutionary pressing system and Carlo Ancelotti's mid-2000s Christmas Tree midfield of artists.",
    historicalTimeline: [
      { decade: "1899–1950s", title: "English Origins & Gre-No-Li", description: "Founded by English lace-maker Herbert Kilpin. The Swedish trio Gunnar Gren, Gunnar Nordahl, and Nils Liedholm conquered Serie A in the 1950s." },
      { decade: "1960s", title: "Nereo Rocco & Gianni Rivera", description: "Pioneered Catenaccio under Nereo Rocco, winning European Cups in 1963 and 1969 with Ballon d'Or winner Gianni Rivera." },
      { decade: "1986–1991", title: "Berlusconi & The Sacchi Revolution", description: "Silvio Berlusconi bought the club, hired Arrigo Sacchi, signed the Dutch Trio (Gullit, van Basten, Rijkaard), and built what UEFA called the greatest club team in history." },
      { decade: "1991–1996", title: "Capello's 'Gli Invincibili'", description: "Fabio Capello went 58 league games unbeaten and demolished Cruyff's Barcelona 4-0 in the 1994 Athens Champions League final." },
      { decade: "2001–2007", title: "Ancelotti's European Royalty", description: "With Maldini, Nesta, Pirlo, Seedorf, Kaká, and Shevchenko, Milan reached three Champions League finals, winning in 2003 and 2007." }
    ],
    legendaryPlayers: ["Paolo Maldini", "Franco Baresi", "Marco van Basten", "Ruud Gullit", "Kaká", "Andriy Shevchenko", "Gianni Rivera", "Andrea Pirlo", "Clarence Seedorf", "Gunnar Nordahl"],
    famousManagers: ["Arrigo Sacchi", "Fabio Capello", "Carlo Ancelotti", "Nereo Rocco"],
    majorTrophies: [
      { name: "European Cup / UEFA Champions League", count: 7, years: ["1963", "1969", "1989", "1990", "1994", "2003", "2007"] },
      { name: "Serie A", count: 19 },
      { name: "Coppa Italia", count: 5 },
      { name: "FIFA Club World Cup / Intercontinental Cup", count: 4 },
      { name: "UEFA Super Cup", count: 5 },
      { name: "European Cup Winners' Cup", count: 2 }
    ],
    importantMatches: [
      { title: "AC Milan 4-0 Barcelona", date: "May 18, 1994", opponent: "Barcelona", score: "4 - 0", description: "Despite missing suspended Baresi and Costacurta, Capello's side humiliated Cruyff's Dream Team in the Champions League final in Athens." },
      { title: "AC Milan 4-0 Steaua București", date: "May 24, 1989", opponent: "Steaua București", score: "4 - 0", description: "Sacchi's Dutch masters (Gullit 2, van Basten 2) overwhelmed Steaua in Barcelona to claim the European Cup." },
      { title: "AC Milan 2-1 Liverpool", date: "May 23, 2007", opponent: "Liverpool", score: "2 - 1", description: "Filippo Inzaghi scored twice in Athens as Milan gained sweet revenge for 2005 to claim their 7th European title." }
    ],
    majorEras: [
      { title: "Arrigo Sacchi's Revolution", period: "1987–1991", description: "Zonal pressing, high defensive line, and the unstoppable Dutch Trio.", keyFigures: ["Arrigo Sacchi", "Marco van Basten", "Ruud Gullit", "Frank Rijkaard", "Franco Baresi"] },
      { title: "Capello's Invincibles", period: "1991–1996", description: "58-match unbeaten run and the 1994 Champions League thrashing of Barcelona.", keyFigures: ["Fabio Capello", "Paolo Maldini", "Dejan Savićević", "Zvonimir Boban", "Marcel Desailly"] },
      { title: "Ancelotti's Artists", period: "2001–2009", description: "Midfield of Pirlo, Gattuso, Seedorf, and Kaká winning two European titles.", keyFigures: ["Carlo Ancelotti", "Kaká", "Andriy Shevchenko", "Andrea Pirlo", "Paolo Maldini"] }
    ]
  },
  {
    id: "inter-milan",
    name: "Football Club Internazionale Milano",
    shortName: "Inter Milan",
    country: "Italy",
    countryFlag: "🇮🇹",
    founded: 1908,
    stadium: {
      name: "San Siro (Stadio Giuseppe Meazza)",
      capacity: 75923,
      opened: 1926,
      city: "Milan"
    },
    colors: {
      primary: "#010E80",
      secondary: "#000000",
      accent: "#D4AF37"
    },
    historicalSummary: "The 'Nerazzurri' were founded to allow foreign players equal sporting dignity. Famous for Helenio Herrera's 'Grande Inter' in the 1960s and José Mourinho's immortal 2010 Treble — the only Italian club to ever achieve the feat.",
    historicalTimeline: [
      { decade: "1908–1930s", title: "Founding & Giuseppe Meazza", description: "Formed after splitting from Milan Cricket and Football Club to welcome international players. Led by youthful genius Giuseppe Meazza." },
      { decade: "1960–1968", title: "Helenio Herrera's 'Grande Inter'", description: "Mastered Catenaccio and lethal counter-attacking, winning back-to-back European Cups (1964, 1965) and Intercontinental Cups." },
      { decade: "1990s", title: "UEFA Cup Dominance & Il Fenomeno", description: "Won three UEFA Cups (1991, 1994, 1998) and signed Ronaldo Nazário for a world record fee in 1997." },
      { decade: "2006–2010", title: "Mourinho & The Immortal Treble", description: "Dominated Serie A before José Mourinho orchestrated the legendary 2010 Treble (Serie A, Coppa Italia, Champions League)." },
      { decade: "2020s", title: "Second Star (20th Scudetto)", description: "Secured their 20th Serie A title in 2024 to earn the prestigious second star on their crest." }
    ],
    legendaryPlayers: ["Javier Zanetti", "Giuseppe Meazza", "Giacinto Facchetti", "Ronaldo Nazário", "Diego Milito", "Sandro Mazzola", "Walter Zenga", "Wesley Sneijder", "Esteban Cambiasso", "Lautaro Martínez"],
    famousManagers: ["Helenio Herrera", "José Mourinho", "Roberto Mancini", "Simone Inzaghi", "Giovanni Trapattoni"],
    majorTrophies: [
      { name: "European Cup / UEFA Champions League", count: 3, years: ["1964", "1965", "2010"] },
      { name: "Serie A", count: 20 },
      { name: "Coppa Italia", count: 9 },
      { name: "UEFA Cup", count: 3, years: ["1991", "1994", "1998"] },
      { name: "FIFA Club World Cup / Intercontinental Cup", count: 3 }
    ],
    importantMatches: [
      { title: "Bayern Munich 0-2 Inter Milan", date: "May 22, 2010", opponent: "Bayern Munich", score: "2 - 0", description: "Diego Milito scored two clinical goals at the Santiago Bernabéu to deliver Italy's first and only Treble." },
      { title: "Barcelona 1-0 Inter Milan (agg 2-3)", date: "April 28, 2010", opponent: "Barcelona", score: "1 - 0", description: "Down to 10 men after Thiago Motta's red card, Mourinho staged a legendary defensive stand at Camp Nou." },
      { title: "Inter Milan 3-1 Real Madrid", date: "May 27, 1964", opponent: "Real Madrid", score: "3 - 1", description: "Sandro Mazzola scored twice in Vienna to defeat Di Stéfano's Madrid and claim their first European Cup." }
    ],
    majorEras: [
      { title: "Grande Inter", period: "1960–1968", description: "Back-to-back European Cups under Helenio Herrera's disciplined defensive system.", keyFigures: ["Helenio Herrera", "Giacinto Facchetti", "Sandro Mazzola", "Luis Suárez", "Armando Picchi"] },
      { title: "The Treble Titans", period: "2008–2010", description: "Unrivaled tactical discipline, defensive resilience, and historical Treble triumph.", keyFigures: ["José Mourinho", "Javier Zanetti", "Diego Milito", "Wesley Sneijder", "Samuel Eto'o"] }
    ]
  },
  {
    id: "juventus",
    name: "Juventus Football Club",
    shortName: "Juventus",
    country: "Italy",
    countryFlag: "🇮🇹",
    founded: 1897,
    stadium: {
      name: "Allianz Stadium (Juventus Stadium)",
      capacity: 41507,
      opened: 2011,
      city: "Turin"
    },
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#E4B047"
    },
    historicalSummary: "The 'Old Lady' of Italian football and the country's most decorated domestic club with 36 official Scudetti. Owned by the Agnelli industrial family since 1923, embodying steely winning mentality ('Vincere non è importante, è l'unica cosa che conta').",
    historicalTimeline: [
      { decade: "1897–1930s", title: "Founded on a Turin Bench", description: "Founded by grammar school students. Won five consecutive league titles (Quinquennio d'Oro) from 1931 to 1935." },
      { decade: "1970s–1980s", title: "Trapattoni & Michel Platini", description: "Giovanni Trapattoni guided Juve to all six European club trophies, highlighted by Platini's three Ballon d'Or years and the 1985 European Cup." },
      { decade: "1994–1999", title: "Marcello Lippi's Champions of Europe", description: "Del Piero, Vialli, and Ravanelli lifted the 1996 Champions League in Rome and reached three consecutive finals." },
      { decade: "2006–2007", title: "Calciopoli & Serie B Rebirth", description: "Relegated following the Calciopoli scandal; legends Del Piero, Buffon, and Nedvěd stayed to guide the club back to Serie A." },
      { decade: "2011–2020", title: "Nine Consecutive Scudetti", description: "Opened their modern stadium and established an all-time record by winning nine consecutive Serie A championships under Conte, Allegri, and Sarri." }
    ],
    legendaryPlayers: ["Alessandro Del Piero", "Michel Platini", "Gianluigi Buffon", "Zinedine Zidane", "Pavel Nedvěd", "Gaetano Scirea", "Dino Zoff", "Roberto Baggio", "Giorgio Chiellini", "Giampiero Boniperti"],
    famousManagers: ["Giovanni Trapattoni", "Marcello Lippi", "Massimiliano Allegri", "Antonio Conte"],
    majorTrophies: [
      { name: "European Cup / UEFA Champions League", count: 2, years: ["1985", "1996"] },
      { name: "Serie A", count: 36 },
      { name: "Coppa Italia", count: 15 },
      { name: "UEFA Cup", count: 3, years: ["1977", "1990", "1993"] },
      { name: "Intercontinental Cup", count: 2, years: ["1985", "1996"] }
    ],
    importantMatches: [
      { title: "Ajax 1-1 Juventus (2-4 pen)", date: "May 22, 1996", opponent: "Ajax", score: "1 - 1", description: "Vladimir Jugović stroked home the winning penalty in Rome to crown Juventus European champions." },
      { title: "Juventus 3-1 Real Madrid", date: "May 14, 2003", opponent: "Real Madrid", score: "3 - 1", description: "Trezeguet, Del Piero, and Nedvěd stunned the Galácticos at the Delle Alpi to reach the Champions League final." }
    ],
    majorEras: [
      { title: "Trapattoni & Platini Era", period: "1976–1986", description: "Dominated Europe and won every official UEFA club competition.", keyFigures: ["Michel Platini", "Gaetano Scirea", "Dino Zoff", "Giovanni Trapattoni"] },
      { title: "Lippi's Golden Juventus", period: "1994–1999", description: "Champions League glory and three consecutive finals with high-intensity pressing.", keyFigures: ["Marcello Lippi", "Alessandro Del Piero", "Gianluca Vialli", "Zinedine Zidane"] },
      { title: "The 9-in-a-Row Dynasty", period: "2011–2020", description: "Record-breaking nine consecutive Scudetti built on the BBC defense (Barzagli, Bonucci, Chiellini).", keyFigures: ["Gianluigi Buffon", "Giorgio Chiellini", "Andrea Pirlo", "Antonio Conte", "Massimiliano Allegri"] }
    ]
  },
  {
    id: "arsenal",
    name: "Arsenal Football Club",
    shortName: "Arsenal",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    founded: 1886,
    stadium: {
      name: "Emirates Stadium",
      capacity: 60704,
      opened: 2006,
      city: "London"
    },
    colors: {
      primary: "#EF0107",
      secondary: "#063672",
      accent: "#FFFFFF"
    },
    historicalSummary: "North London's premier institution, famous for Herbert Chapman's innovations in the 1930s, the defensive discipline of George Graham, and Arsène Wenger's immortal 'Invincibles' of 2003–04.",
    historicalTimeline: [
      { decade: "1886–1913", title: "Dial Square to Highbury", description: "Formed by munitions workers at the Royal Arsenal in Woolwich. Moved to iconic Highbury in 1913." },
      { decade: "1925–1934", title: "Herbert Chapman's Innovations", description: "Introduced shirt numbers, floodlights, white sleeves, the WM formation, and renamed the local tube station to 'Arsenal'." },
      { decade: "1989", title: "Anfield 1989 Drama", description: "Michael Thomas scored in the 91st minute at Anfield to snatch the league title from Liverpool with virtually the final kick of the season." },
      { decade: "1996–2006", title: "Wenger's Revolution & The Invincibles", description: "Arsène Wenger transformed English football nutrition, signing Thierry Henry, Patrick Vieira, and Dennis Bergkamp, culminating in the 2003–04 49-game unbeaten season." },
      { decade: "2019–present", title: "Mikel Arteta's Resurgence", description: "Former captain Arteta returned to rebuild Arsenal into Premier League title contenders with a vibrant young squad." }
    ],
    legendaryPlayers: ["Thierry Henry", "Dennis Bergkamp", "Tony Adams", "Patrick Vieira", "Ian Wright", "David Rocastle", "Robert Pires", "David Seaman", "Cliff Bastin", "Bukayo Saka"],
    famousManagers: ["Arsène Wenger", "Herbert Chapman", "George Graham", "Bertie Mee", "Mikel Arteta"],
    majorTrophies: [
      { name: "English League Champions / Premier League", count: 13 },
      { name: "FA Cup (All-Time Record)", count: 14 },
      { name: "League Cup", count: 2 },
      { name: "European Cup Winners' Cup", count: 1, years: ["1994"] },
      { name: "Inter-Cities Fairs Cup", count: 1, years: ["1970"] }
    ],
    importantMatches: [
      { title: "Liverpool 0-2 Arsenal", date: "May 26, 1989", opponent: "Liverpool", score: "0 - 2", description: "Needing to win by two clear goals at Anfield on the final night of the season, Michael Thomas scored in the 91st minute." },
      { title: "Arsenal 2-1 Leicester City", date: "May 15, 2004", opponent: "Leicester City", score: "2 - 1", description: "Secured a 38-game unbeaten Premier League season (26 wins, 12 draws) to claim the unique golden Premier League trophy." }
    ],
    majorEras: [
      { title: "The Chapman Era", period: "1925–1934", description: "Modern football pioneering, WM formation, and Arsenal's first sustained trophy period.", keyFigures: ["Herbert Chapman", "Cliff Bastin", "Alex James", "Ted Drake"] },
      { title: "Wenger's Invincibles", period: "1996–2006", description: "Three Premier League titles, 49 matches unbeaten, and champagne attacking football.", keyFigures: ["Arsène Wenger", "Thierry Henry", "Dennis Bergkamp", "Patrick Vieira", "Tony Adams"] }
    ]
  },
  {
    id: "chelsea",
    name: "Chelsea Football Club",
    shortName: "Chelsea",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    founded: 1905,
    stadium: {
      name: "Stamford Bridge",
      capacity: 40341,
      opened: 1877,
      city: "London"
    },
    colors: {
      primary: "#034694",
      secondary: "#FFFFFF",
      accent: "#EE242C"
    },
    historicalSummary: "London's first UEFA Champions League winners (2012, 2021). Revolutionized by Roman Abramovich and José Mourinho in 2004 into an unrelenting domestic and continental trophy machine.",
    historicalTimeline: [
      { decade: "1905–1955", title: "Founding at The Rising Sun & First Title", description: "Founded in a pub opposite Stamford Bridge. Ted Drake guided them to their first league title in 1955." },
      { decade: "1990s", title: "The Continental Flair Era", description: "Ruud Gullit, Gianluca Vialli, and Gianfranco Zola transformed Chelsea into a stylish, trophy-winning cup side." },
      { decade: "2004–2007", title: "Mourinho's 'Special One' Machine", description: "Conceded just 15 goals in the 2004–05 season (all-time Premier League record) to win their first title in 50 years." },
      { decade: "2012", title: "Miracle in Munich", description: "Against all odds with interim manager Roberto Di Matteo, defeated Bayern Munich in their home stadium to win their first Champions League." },
      { decade: "2021", title: "Tuchel's Porto Masterclass", description: "Thomas Tuchel defeated Manchester City 1-0 in Porto with Kai Havertz's goal to capture Chelsea's second Champions League." }
    ],
    legendaryPlayers: ["Frank Lampard", "John Terry", "Didier Drogba", "Petr Čech", "Gianfranco Zola", "Eden Hazard", "Claude Makélélé", "Ashley Cole", "Michael Essien", "Peter Osgood"],
    famousManagers: ["José Mourinho", "Carlo Ancelotti", "Thomas Tuchel", "Antonio Conte", "Roberto Di Matteo"],
    majorTrophies: [
      { name: "UEFA Champions League", count: 2, years: ["2012", "2021"] },
      { name: "English League Champions / Premier League", count: 6 },
      { name: "FA Cup", count: 8 },
      { name: "League Cup", count: 5 },
      { name: "UEFA Europa League", count: 2, years: ["2013", "2019"] },
      { name: "FIFA Club World Cup", count: 1, years: ["2021"] }
    ],
    importantMatches: [
      { title: "Bayern Munich 1-1 Chelsea (3-4 pen)", date: "May 19, 2012", opponent: "Bayern Munich", score: "1 - 1", description: "Didier Drogba equalized with an 88th-minute header before scoring the winning shootout penalty in Munich." },
      { title: "Manchester City 0-1 Chelsea", date: "May 29, 2021", opponent: "Manchester City", score: "0 - 1", description: "Kai Havertz scored the lone goal in Porto to deliver Chelsea's second Champions League crown." }
    ],
    majorEras: [
      { title: "Mourinho's Defensive Fortress", period: "2004–2007", description: "Record 15 goals conceded in 2004-05; back-to-back Premier League titles.", keyFigures: ["José Mourinho", "John Terry", "Frank Lampard", "Petr Čech", "Didier Drogba"] },
      { title: "The European Champions", period: "2011–2021", description: "Two Champions League triumphs in Munich and Porto anchored by clutch performances.", keyFigures: ["Didier Drogba", "Frank Lampard", "Eden Hazard", "N'Golo Kanté", "Thomas Tuchel"] }
    ]
  },
  {
    id: "paris-saint-germain",
    name: "Paris Saint-Germain Football Club",
    shortName: "Paris Saint-Germain",
    country: "France",
    countryFlag: "🇫🇷",
    founded: 1970,
    stadium: {
      name: "Parc des Princes",
      capacity: 48583,
      opened: 1972,
      city: "Paris"
    },
    colors: {
      primary: "#004170",
      secondary: "#DA291C",
      accent: "#FFFFFF"
    },
    historicalSummary: "France's most successful club with a record 12 Ligue 1 titles. Formed through the merger of Paris FC and Stade Saint-Germain, and propelled to global prominence through Qatar Sports Investments (QSI).",
    historicalTimeline: [
      { decade: "1970–1980s", title: "Capital Club Born", description: "Founded in 1970 to give the French capital a major football team; won their first Ligue 1 title in 1986 under Gérard Houllier." },
      { decade: "1990s", title: "Canal+ Golden Age & Weah", description: "Financed by Canal+, reached five consecutive European semi-finals, won the 1996 Cup Winners' Cup, and saw George Weah win the 1995 Ballon d'Or." },
      { decade: "2001–2003", title: "Ronaldinho's Magic in Paris", description: "Ronaldinho introduced himself to Europe at the Parc des Princes with spellbinding individual displays." },
      { decade: "2011–present", title: "QSI Era & World Record Signings", description: "QSI transformed PSG into a global brand, signing Zlatan Ibrahimović, Neymar (€222M), Kylian Mbappé (€180M), and Lionel Messi." }
    ],
    legendaryPlayers: ["Kylian Mbappé", "Zlatan Ibrahimović", "Neymar", "George Weah", "Edinson Cavani", "Ronaldinho", "Thiago Silva", "Marquinhos", "Safet Sušić", "Pauleta"],
    famousManagers: ["Laurent Blanc", "Thomas Tuchel", "Carlo Ancelotti", "Luis Fernandez", "Unai Emery"],
    majorTrophies: [
      { name: "Ligue 1 (All-Time French Record)", count: 12 },
      { name: "Coupe de France", count: 15 },
      { name: "Coupe de la Ligue", count: 9 },
      { name: "European Cup Winners' Cup", count: 1, years: ["1996"] }
    ],
    importantMatches: [
      { title: "PSG 1-0 Rapid Wien", date: "May 8, 1996", opponent: "Rapid Wien", score: "1 - 0", description: "Bruno Ngotty's 28th-minute free kick won the European Cup Winners' Cup in Brussels." },
      { title: "PSG 4-0 Barcelona", date: "February 14, 2017", opponent: "Barcelona", score: "4 - 0", description: "Di María scored twice in a sensational Valentine's Day display at the Parc des Princes." }
    ],
    majorEras: [
      { title: "1990s Canal+ Glory", period: "1991–1998", description: "Cup Winners' Cup and European semi-finals with Weah, Ginola, and Rai.", keyFigures: ["George Weah", "David Ginola", "Rai", "Luis Fernandez"] },
      { title: "The Modern Megastar Era", period: "2011–present", description: "Unprecedented French domestic dominance with Zlatan, Cavani, Neymar, and Mbappé.", keyFigures: ["Zlatan Ibrahimović", "Kylian Mbappé", "Neymar", "Thiago Silva", "Marco Verratti"] }
    ]
  },
  {
    id: "ajax",
    name: "Amsterdamsche Football Club Ajax",
    shortName: "Ajax",
    country: "Netherlands",
    countryFlag: "🇳🇱",
    founded: 1900,
    stadium: {
      name: "Johan Cruyff Arena",
      capacity: 55865,
      opened: 1996,
      city: "Amsterdam"
    },
    colors: {
      primary: "#D2122E",
      secondary: "#FFFFFF",
      accent: "#000000"
    },
    historicalSummary: "The ideological cradle of Total Football and the most fertile academy in world history (De Toekomst). Won four European Cups, including three consecutive crowns from 1971 to 1973 with Johan Cruyff.",
    historicalTimeline: [
      { decade: "1900–1960s", title: "Founding & Rinus Michels Arrival", description: "Founded in Amsterdam, named after the mythological Greek hero. Rinus Michels arrived in 1965 to create Total Football." },
      { decade: "1971–1973", title: "European Cup Three-Peat", description: "Johan Cruyff and Johan Neeskens dismantled Panathinaikos, Inter Milan, and Juventus in consecutive finals to conquer world football." },
      { decade: "1980s", title: "Cruyff's Return & Youth Pipeline", description: "Cruyff returned to guide young talents Marco van Basten, Frank Rijkaard, and Dennis Bergkamp to the 1987 Cup Winners' Cup." },
      { decade: "1995", title: "Louis van Gaal's Unbeaten Generation", description: "Built with academy youngsters (Kluivert, Seedorf, Davids, De Boer brothers), went unbeaten in both the Eredivisie and Champions League, beating AC Milan in Vienna." },
      { decade: "2018–2019", title: "Erik ten Hag's European Fairytale", description: "De Jong, De Ligt, and Ziyech produced magical away wins against Real Madrid (4-1) and Juventus (2-1)." }
    ],
    legendaryPlayers: ["Johan Cruyff", "Marco van Basten", "Dennis Bergkamp", "Frank Rijkaard", "Clarence Seedorf", "Patrick Kluivert", "Johan Neeskens", "Jari Litmanen", "Edwin van der Sar", "Piet Keizer"],
    famousManagers: ["Rinus Michels", "Louis van Gaal", "Stefan Kovacs", "Erik ten Hag"],
    majorTrophies: [
      { name: "European Cup / UEFA Champions League", count: 4, years: ["1971", "1972", "1973", "1995"] },
      { name: "Eredivisie", count: 36 },
      { name: "KNVB Cup", count: 20 },
      { name: "Intercontinental Cup", count: 2, years: ["1972", "1995"] },
      { name: "UEFA Cup", count: 1, years: ["1992"] },
      { name: "European Cup Winners' Cup", count: 1, years: ["1987"] }
    ],
    importantMatches: [
      { title: "Ajax 2-0 Inter Milan", date: "May 31, 1972", opponent: "Inter Milan", score: "2 - 0", description: "Johan Cruyff scored both goals in Rotterdam in what newspapers heralded as the triumph of Total Football over Catenaccio." },
      { title: "Ajax 1-0 AC Milan", date: "May 24, 1995", opponent: "AC Milan", score: "1 - 0", description: "18-year-old substitute Patrick Kluivert poked in an 85th-minute winner in Vienna to stun Fabio Capello's Milan." }
    ],
    majorEras: [
      { title: "Total Football Golden Age", period: "1969–1973", description: "Three straight European Cups with Michels, Kovacs, and Cruyff.", keyFigures: ["Johan Cruyff", "Johan Neeskens", "Piet Keizer", "Rinus Michels", "Arie Haan"] },
      { title: "Van Gaal's Young Invincibles", period: "1992–1996", description: "Unbeaten Champions League and Eredivisie triumph with youth products.", keyFigures: ["Louis van Gaal", "Clarence Seedorf", "Edgar Davids", "Patrick Kluivert", "Jari Litmanen"] }
    ]
  },
  {
    id: "borussia-dortmund",
    name: "Ballspielverein Borussia 09 e.V. Dortmund",
    shortName: "Borussia Dortmund",
    country: "Germany",
    countryFlag: "🇩🇪",
    founded: 1909,
    stadium: {
      name: "Signal Iduna Park (Westfalenstadion)",
      capacity: 81365,
      opened: 1974,
      city: "Dortmund"
    },
    colors: {
      primary: "#FDE100",
      secondary: "#000000",
      accent: "#FFFFFF"
    },
    historicalSummary: "The passionate working-class pride of the Ruhr valley. Home to the legendary 'Gelbe Wand' (Yellow Wall) — Europe's largest single standing grandstand (25,000 fans). 1997 Champions League winners and architects of 'Gegenpressing'.",
    historicalTimeline: [
      { decade: "1909–1966", title: "Founding to Cup Winners' Cup", description: "Founded in a pub by church youth players; became the first German club to win a European trophy by lifting the 1966 Cup Winners' Cup vs Liverpool." },
      { decade: "1995–1997", title: "Ottmar Hitzfeld & Champions of Europe", description: "Won back-to-back Bundesligas before Lars Ricken's famous chip against Juventus sealed the 1997 Champions League in Munich." },
      { decade: "2005", title: "Near Bankruptcy & Rebirth", description: "Overextended finances pushed the club to the brink of liquidation, rescued by supporter bonds and restructuring." },
      { decade: "2008–2015", title: "Jürgen Klopp's Heavy Metal Gegenpressing", description: "Klopp revitalized Dortmund with high-intensity pressing, winning back-to-back Bundesligas (2011, 2012) and reaching the 2013 Wembley Champions League final." },
      { decade: "2020s", title: "European Underdogs", description: "Reached the 2024 Champions League final against Real Madrid at Wembley, proving their enduring continental spirit." }
    ],
    legendaryPlayers: ["Marco Reus", "Robert Lewandowski", "Matthias Sammer", "Michael Zorc", "Lars Ricken", "Stéphane Chapuisat", "Erling Haaland", "Mats Hummels", "Jadon Sancho", "Jürgen Kohler"],
    famousManagers: ["Jürgen Klopp", "Ottmar Hitzfeld", "Edin Terzić", "Thomas Tuchel"],
    majorTrophies: [
      { name: "UEFA Champions League", count: 1, years: ["1997"] },
      { name: "Bundesliga", count: 8 },
      { name: "DFB-Pokal", count: 5 },
      { name: "Intercontinental Cup", count: 1, years: ["1997"] },
      { name: "European Cup Winners' Cup", count: 1, years: ["1966"] }
    ],
    importantMatches: [
      { title: "Borussia Dortmund 3-1 Juventus", date: "May 28, 1997", opponent: "Juventus", score: "3 - 1", description: "Karl-Heinz Riedle scored twice before 20-year-old local substitute Lars Ricken lobbed Angelo Peruzzi with his first touch 16 seconds after coming on." },
      { title: "Borussia Dortmund 3-2 Málaga", date: "April 9, 2013", opponent: "Málaga", score: "3 - 2", description: "Needing two goals in stoppage time to reach the semi-finals, Reus (91') and Santana (93') produced one of the most electric finishes in Westfalenstadion history." }
    ],
    majorEras: [
      { title: "Hitzfeld's Champions League Era", period: "1994–1997", description: "Back-to-back Bundesliga titles and European Cup triumph in Munich.", keyFigures: ["Ottmar Hitzfeld", "Matthias Sammer", "Karl-Heinz Riedle", "Lars Ricken", "Michael Zorc"] },
      { title: "Klopp's Heavy Metal Gegenpressing", period: "2008–2015", description: "High-octane pressing, double championship, and Wembley 2013.", keyFigures: ["Jürgen Klopp", "Robert Lewandowski", "Marco Reus", "Mats Hummels", "Mario Götze"] }
    ]
  }
];
