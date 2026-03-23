import Layout from "@/components/Layout";
import { ExternalLink, Phone, Clock, MapPin } from "lucide-react";

const zorgverleners = [
  {
    naam: "Verloskundigenpraktijk De Poort",
    categorie: "Verloskunde",
    beschrijving: "Een kleinschalige verloskundigenpraktijk gevestigd in ons pand. Persoonlijke begeleiding, professionaliteit en aandacht staan centraal. Vanaf de eerste maanden van de zwangerschap tot en met de eerste weken na de geboorte staan zij voor u klaar.",
    diensten: ["Zwangerschapsbegeleiding", "Begeleiding bevalling", "Kraamzorg & nazorg", "Echo-onderzoek", "Prenatale screening", "Anticonceptiezorg"],
    contact: "020 358 58 47",
    website: "https://www.verloskundigenpraktijkdepoort.nl",
    openingstijden: null,
    opmerking: "Voor aanmelden en afspraken kunt u direct contact opnemen met De Poort via telefoon of via hun website.",
  },
  {
    naam: "RHMDC Bloedafname",
    categorie: "Diagnostiek",
    beschrijving: "Het Reinier Haga Medisch Diagnostisch Centrum (RHMDC) verzorgt diagnostisch onderzoek op onze locatie. U bent zonder afspraak welkom. Neem altijd uw aanvraagformulier en legitimatiebewijs mee.",
    diensten: ["Bloedonderzoek", "Fecesonderzoek", "Materiaal inleveren", "Soa onderzoek", "Urineonderzoek"],
    contact: "088 260 4000",
    website: "https://www.rhmdc.nl/locaties/reigersbos-medical-center",
    openingstijden: "Donderdag: 09:00 – 12:00 (overige dagen gesloten)",
    opmerking: "Zonder afspraak welkom. Neem mee: aanvraagformulier (papier of digitaal) en legitimatiebewijs.",
  },
];

const OverigZorgaanbod = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="page-hero-label mb-3">Reigersbos Medical Center</p>
          <h1 className="page-hero-title">Overig Zorgaanbod</h1>
          <p className="page-hero-desc" style={{ maxWidth: "600px" }}>
            Naast onze eigen huisartspraktijk en fysiotherapie zijn er ook andere zorgverleners
            in ons pand gevestigd. Wij werken nauw met hen samen voor de beste zorg aan u.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">

        <div style={{
          background: "hsl(166 76% 97%)", border: "1px solid hsl(168 76% 78%)",
          borderRadius: "10px", padding: "20px 24px",
          display: "flex", gap: "16px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "24px" }}>🤝</span>
          <p style={{ color: "hsl(215 16% 47%)", lineHeight: 1.7, fontSize: "14px" }}>
            Samenwerking in één pand. Doordat alle zorgverleners onder één dak werken,
            kunnen wij snel schakelen en de continuïteit van uw zorg waarborgen.
            Elke zorgverlener heeft zijn eigen administratie en afsprakensysteem.
          </p>
        </div>

        <div className="space-y-6">
          {zorgverleners.map((z) => (
            <div key={z.naam} style={{
              background: "white", border: "1px solid hsl(214 32% 91%)",
              borderRadius: "10px", overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}>
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <div>
                    <span className="page-hero-label">{z.categorie}</span>
                    <h2 style={{ fontSize: "18px", fontWeight: 700, color: "hsl(222 47% 11%)", marginTop: "4px" }}>
                      {z.naam}
                    </h2>
                  </div>
                  <p style={{ color: "hsl(215 16% 47%)", lineHeight: 1.7, fontSize: "14px" }}>{z.beschrijving}</p>
                  <div className="flex flex-wrap gap-2">
                    {z.diensten.map(d => (
                      <span key={d} style={{
                        background: "hsl(210 40% 98%)", color: "hsl(222 47% 11%)",
                        fontSize: "12px", fontWeight: 500, padding: "4px 12px",
                        borderRadius: "50px", border: "1px solid hsl(214 32% 91%)",
                      }}>
                        {d}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    background: "hsl(210 40% 98%)", border: "1px solid hsl(214 32% 91%)",
                    borderRadius: "8px", padding: "12px", fontSize: "13px",
                    color: "hsl(215 16% 47%)", lineHeight: 1.6,
                  }}>
                    ℹ️ {z.opmerking}
                  </div>
                </div>

                <div className="md:w-64 shrink-0">
                  <div style={{
                    background: "hsl(210 40% 98%)", border: "1px solid hsl(214 32% 91%)",
                    borderRadius: "8px", padding: "20px",
                  }}>
                    <p className="page-hero-label mb-3">Contact & Info</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(222 47% 11%)" }}>
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "hsl(174 43% 30%)" }} />
                        <span>Reigersbos 100 K (3e etage)<br />1107 ES Amsterdam</span>
                      </div>
                      {z.openingstijden && (
                        <div className="flex items-center gap-2.5 text-sm" style={{ color: "hsl(222 47% 11%)" }}>
                          <Clock className="w-4 h-4 shrink-0" style={{ color: "hsl(174 43% 30%)" }} />
                          {z.openingstijden}
                        </div>
                      )}
                      {z.contact && (
                        <a href={`tel:${z.contact.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-sm" style={{ color: "hsl(174 43% 30%)", fontWeight: 600, textDecoration: "none" }}>
                          <Phone className="w-4 h-4 shrink-0" />
                          {z.contact}
                        </a>
                      )}
                      {z.website && (
                        <a href={z.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm" style={{ color: "hsl(174 43% 30%)", fontWeight: 600, textDecoration: "none" }}>
                          <ExternalLink className="w-4 h-4 shrink-0" />
                          Bezoek website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OverigZorgaanbod;
