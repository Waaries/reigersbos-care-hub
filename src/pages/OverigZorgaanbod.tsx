import Layout from "@/components/Layout";
import { ExternalLink, Phone, Mail, Clock, MapPin } from "lucide-react";

const zorgverleners = [
  {
    emoji: "🤰",
    naam: "Verloskundige Praktijk De Poort",
    categorie: "Verloskunde",
    beschrijving: "Een zelfstandige verloskundigepraktijk gevestigd in ons pand. De Poort biedt persoonlijke begeleiding tijdens zwangerschap, bevalling en de kraamperiode. De verloskundigen werken nauw samen met onze huisartsen.",
    diensten: ["Zwangerschapsbegeleiding", "Begeleiding bevalling", "Kraamzorg & nazorg", "Echo-onderzoek", "Prenatale screening"],
    contact: null,
    website: null,
    openingstijden: null,
    opmerking: "Voor afspraken en informatie kunt u direct contact opnemen met Verloskundige Praktijk De Poort.",
    kleur: "#0EA5A0",
  },
  {
    emoji: "🩸",
    naam: "RHMDC Bloedafname",
    categorie: "Diagnostiek",
    beschrijving: "Het Reinier Haga Medisch Diagnostisch Centrum (RHMDC) verzorgt bloedafname op onze locatie. U kunt hier terecht voor bloedonderzoek na verwijzing door uw huisarts of specialist.",
    diensten: ["Bloedonderzoek op verwijzing", "Nuchtere bloedafname", "Materiaal inleveren"],
    contact: "088 260 4000",
    website: "https://www.rhmdc.nl",
    openingstijden: "Ma–Vr 08:00 – 11:30",
    opmerking: "Neem uw aanvraagformulier, geldig identiteitsbewijs en verzekeringsbewijs mee. Afspraak maken via rhmdc.nl of bel 088 260 4000.",
    kleur: "#DC2626",
  },
];

const OverigZorgaanbod = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary to-accent text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-3">
            Reigersbos Medical Center
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Overig Zorgaanbod
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Naast onze eigen huisartspraktijk en fysiotherapie zijn er ook andere zorgverleners
            in ons pand gevestigd. Wij werken nauw met hen samen voor de beste zorg aan u.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-8">

          {/* Intro card */}
          <div className="bg-secondary/50 border border-border rounded-2xl p-6 flex gap-4 items-start">
            <span className="text-3xl">🤝</span>
            <p className="text-muted-foreground leading-relaxed">
              Samenwerking in één pand. Doordat alle zorgverleners onder één dak werken,
              kunnen wij snel schakelen en de continuïteit van uw zorg waarborgen.
              Elke zorgverlener heeft zijn eigen administratie en afsprakensysteem.
            </p>
          </div>

          {/* Zorgverleners */}
          <div className="space-y-6">
            {zorgverleners.map((z) => (
              <div key={z.naam} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                {/* Colored top bar */}
                <div style={{ background: z.kleur, height: "5px" }} />

                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                  {/* Left: info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{z.emoji}</span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {z.categorie}
                        </span>
                        <h2 className="text-xl font-bold text-foreground">
                          {z.naam}
                        </h2>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {z.beschrijving}
                    </p>

                    {/* Diensten */}
                    <div className="flex flex-wrap gap-2">
                      {z.diensten.map(d => (
                        <span key={d} className="bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Opmerking */}
                    <div className="bg-secondary/50 border border-border rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">
                      ℹ️ {z.opmerking}
                    </div>
                  </div>

                  {/* Right: contact */}
                  <div className="md:w-64 shrink-0">
                    <div className="bg-secondary/30 border border-border rounded-xl p-5 space-y-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Contact &amp; Info
                      </p>

                      <div className="flex items-start gap-2.5 text-sm text-foreground">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                        <span>
                          Reigersbos 100 K (3e etage)<br />
                          1107 ES Amsterdam
                        </span>
                      </div>

                      {z.openingstijden && (
                        <div className="flex items-center gap-2.5 text-sm text-foreground">
                          <Clock className="w-4 h-4 shrink-0 text-primary" />
                          {z.openingstijden}
                        </div>
                      )}

                      {z.contact && (
                        <a href={`tel:${z.contact.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-sm text-primary font-semibold hover:text-accent transition-colors">
                          <Phone className="w-4 h-4 shrink-0" />
                          {z.contact}
                        </a>
                      )}

                      {z.website && (
                        <a href={z.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary font-semibold hover:text-accent transition-colors">
                          <ExternalLink className="w-4 h-4 shrink-0" />
                          Bezoek website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default OverigZorgaanbod;
