import Layout from "@/components/Layout";
import { CheckCircle, Shield } from "lucide-react";

const regels = [
  "Wij helpen u zo snel mogelijk",
  "Spoedgevallen gaan voor, graag uw begrip",
  "Wij gaan hier respectvol met elkaar om",
  "Met uw medewerking kunnen wij u zo goed mogelijk helpen",
  "Aanwijzingen van het personeel worden opgevolgd",
  "Ook in noodsituaties luisteren wij naar elkaar",
  "Agressief gedrag accepteren wij niet",
  "Bij wapenbezit, geweld, drugs en diefstal doen wij aangifte bij de politie",
];

const Omgangsregels = () => (
  <Layout>
    <section style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
      <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "6px 16px", marginBottom: "16px" }}>
          <Shield size={16} color="white" />
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Huisartspraktijk</span>
        </div>
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontFamily: "Merriweather, Georgia, serif", fontWeight: 800, margin: "0 0 12px" }}>Omgangsregels</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>Samen zorgen we voor een fijne en veilige omgeving voor iedereen.</p>
      </div>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 48 }} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
      </svg>
    </section>
    <section className="page-section">
      <div className="page-container">
        <p className="page-text">Om een prettige en veilige omgeving te waarborgen voor zowel patiënten als medewerkers, hanteren wij de volgende omgangsregels:</p>
        <ul className="space-y-4 mt-4">
          {regels.map(regel => (
            <li key={regel} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/80 text-base">{regel}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);
export default Omgangsregels;
