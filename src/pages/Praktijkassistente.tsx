import Layout from "@/components/Layout";
import { Users, CheckCircle } from "lucide-react";

const handelingen = [
  "Bloeddrukmeting", "Wondverzorging", "Uitstrijkjes", "Wrat aanstippen",
  "Zwachtelen", "Urine onderzoek", "Zwangerschapstest", "Oren uitspuiten",
  "Hechtingen verwijderen", "Injecties",
];

const Praktijkassistente = () => (
  <Layout>
    <section style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
      <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "6px 16px", marginBottom: "16px" }}>
          <Users size={16} color="white" />
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Huisartspraktijk</span>
        </div>
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontFamily: "Merriweather, Georgia, serif", fontWeight: 800, margin: "0 0 12px" }}>Praktijkassistente</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>Uw eerste aanspreekpunt aan de telefoon en balie — altijd klaar om u te helpen.</p>
      </div>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 48 }} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
      </svg>
    </section>
    <section className="page-section">
      <div className="page-container">
        <p className="page-text">
          De assistente staat u als eerste te woord wanneer u met de praktijk belt. Ze maakt afspraken voor
          het spreekuur, de huisbezoeken en het telefonische spreekuur. U kunt haar ook bellen voor uitslagen
          van urine- of bloedonderzoek en voor herhaalrecepten. De assistente kan bij veel voorkomende
          problematiek zoals koorts, keelpijn of diarree zelfstandig medisch advies geven.
        </p>
        <div className="info-card mt-6">
          <h3 className="page-subheading">Handelingen door de assistente</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {handelingen.map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
export default Praktijkassistente;
