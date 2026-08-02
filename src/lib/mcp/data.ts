/**
 * Publieke praktijkinformatie van Reigersbos Medical Center.
 * Alleen informatie die ook op de website staat.
 */

export const practice = {
  name: "Reigersbos Medical Center",
  address: "Reigersbos 100 K (3e etage), 1107 ES Amsterdam",
  phone: "020 737 14 26",
  fax: "020 737 03 79",
  email: "Info@reigersbosmedicalcenter.nl",
  openingHours: "Maandag t/m vrijdag 08:00–17:00. Zaterdag en zondag gesloten.",
  website: "https://reigersbosmedicalcenter.nl",
};

export const emergency = {
  lifeThreatening: {
    number: "112",
    when: "Bij levensgevaar of een acute noodsituatie",
  },
  duringOpeningHours: {
    number: "020 737 14 26",
    when: "Maandag t/m vrijdag tot 17:00 — bel de praktijk en kies de spoedoptie",
  },
  outsideOpeningHours: {
    number: "088 003 06 00",
    when: "Avond, nacht en weekend",
    provider: "Huisartsenposten Amsterdam",
    website: "https://www.huisartsenpostenamsterdam.nl",
  },
};

export const services = [
  {
    name: "Huisartsenzorg",
    description:
      "Reguliere huisartsenzorg: consulten, onderzoek, behandeling, verwijzingen en herhaalrecepten.",
    page: "/huisartspraktijk",
  },
  {
    name: "Praktijkassistente",
    description:
      "Eerste aanspreekpunt voor vragen, triage, uitslagen en kleine medische handelingen.",
    page: "/praktijkassistente",
  },
  {
    name: "POH-S (somatiek)",
    description:
      "Praktijkondersteuner voor chronische aandoeningen zoals diabetes, hart- en vaatziekten en COPD/asthma.",
    page: "/poh-s",
  },
  {
    name: "POH-GGZ",
    description:
      "Praktijkondersteuner geestelijke gezondheidszorg voor psychische klachten en begeleiding.",
    page: "/poh-ggz",
  },
  {
    name: "Fysiotherapie",
    description: "Fysiotherapie in hetzelfde gebouw, inclusief oefentherapie en revalidatie.",
    page: "/fysiotherapie",
  },
  {
    name: "Verloskunde",
    description:
      "Verloskundigenpraktijk De Poort, gevestigd in ons pand — begeleiding tijdens zwangerschap, bevalling en kraamperiode.",
    page: "/overig-zorgaanbod",
  },
  {
    name: "Bloedafname en diagnostiek",
    description: "RHMDC bloedafname en diagnostisch onderzoek op onze locatie.",
    page: "/overig-zorgaanbod",
  },
];

export const team = [
  { name: "Julia van de Pol", role: "Huisarts", big: "59919561501" },
  { name: "Sandra Bediako", role: "Huisarts", big: "39918036001" },
  { name: "Warcha Ganpat", role: "Doktersassistent", big: null },
  { name: "Lois Oduro", role: "Doktersassistent", big: null },
  { name: "Derek Che", role: "Fysiotherapeut", big: "39915224904" },
  { name: "Sylvia Ohagwu", role: "Fysiotherapeut", big: "79928616104" },
];

export const carePartners = [
  {
    name: "Verloskundigenpraktijk De Poort",
    category: "Verloskunde",
    description:
      "Kleinschalige verloskundigenpraktijk in ons pand. Persoonlijke begeleiding van de eerste maanden van de zwangerschap tot de eerste weken na de geboorte.",
    servicesOffered: [
      "Zwangerschapsbegeleiding",
      "Begeleiding bevalling",
      "Kraamzorg & nazorg",
      "Echo-onderzoek",
      "Prenatale screening",
      "Anticonceptiezorg",
    ],
    phone: "020 358 58 47",
    website: "https://www.verloskundigenpraktijkdepoort.nl",
    openingHours: null,
    note: "Aanmelden en afspraken maken gaat direct via De Poort, telefonisch of via hun website.",
  },
  {
    name: "RHMDC Bloedafname",
    category: "Diagnostiek",
    description:
      "Het Reinier Haga Medisch Diagnostisch Centrum verzorgt diagnostisch onderzoek op onze locatie. U bent zonder afspraak welkom.",
    servicesOffered: [
      "Bloedonderzoek",
      "Fecesonderzoek",
      "Materiaal inleveren",
      "Soa onderzoek",
      "Urineonderzoek",
    ],
    phone: "088 260 4000",
    website: "https://www.rhmdc.nl/locaties/reigersbos-medical-center",
    openingHours: "Donderdag 09:00 – 12:00 (overige dagen gesloten)",
    note: "Neem altijd uw aanvraagformulier (papier of digitaal) en legitimatiebewijs mee.",
  },
];

export const patientInfo = [
  {
    topic: "Inschrijven als patiënt",
    summary:
      "Nieuwe patiënten kunnen zich inschrijven via het inschrijfformulier op de website of telefonisch via de praktijk. Neem uw legitimatiebewijs en zorgverzekeringsgegevens mee.",
    page: "/",
  },
  {
    topic: "Herhaalrecept aanvragen",
    summary:
      "Herhaalmedicatie vraagt u aan via het herhaalrecept-formulier op de website of telefonisch. Aanvragen worden doorgaans binnen 2 werkdagen verwerkt en zijn daarna bij uw apotheek op te halen.",
    page: "/",
  },
  {
    topic: "Afspraak maken",
    summary:
      "Bel de praktijk op 020 737 14 26 tijdens openingstijden (ma–vr 08:00–17:00). De assistente stelt enkele vragen om de juiste zorg en tijdsduur in te plannen.",
    page: "/contact",
  },
  {
    topic: "Klachten",
    summary:
      "Bent u niet tevreden? Bespreek dit eerst met uw huisarts of de praktijkmanager. Komt u er samen niet uit, dan kunt u de klachtenprocedure op de website volgen.",
    page: "/klachten",
  },
  {
    topic: "Omgangsregels",
    summary:
      "In de praktijk gelden omgangsregels voor een veilige en respectvolle omgeving. Spoedgevallen gaan voor, waarvoor wij uw begrip vragen.",
    page: "/omgangsregels",
  },
  {
    topic: "Privacy en medische gegevens",
    summary:
      "Wij verwerken uw gegevens volgens de AVG. Uitwisseling met de huisartsenpost, apotheek en specialisten gebeurt via Medicom, uitsluitend als dat voor uw zorg nodig is.",
    page: "/privacyreglement",
  },
  {
    topic: "Expats",
    summary:
      "Engelstalige informatie voor expats over inschrijven, het Nederlandse zorgsysteem, verzekering en het bezoeken van de huisarts.",
    page: "/expats",
  },
  {
    topic: "Ongedocumenteerde patiënten",
    summary:
      "Ook zonder verblijfsstatus of verzekering heeft u recht op medisch noodzakelijke zorg. Op de website staat hoe dit werkt en welke regelingen er zijn.",
    page: "/ongedocumenteerden",
  },
  {
    topic: "Vacatures",
    summary:
      "Openstaande vacatures binnen de praktijk, inclusief functie-eisen en de sollicitatieprocedure, staan op de vacaturepagina.",
    page: "/vacatures",
  },
];
