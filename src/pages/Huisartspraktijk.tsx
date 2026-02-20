import Layout from "@/components/Layout";
import { Stethoscope } from "lucide-react";

const Huisartspraktijk = () => (
  <Layout>
    <section style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
      <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "6px 16px", marginBottom: "16px" }}>
          <Stethoscope size={16} color="white" />
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Reigersbos Medical Center</span>
        </div>
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontFamily: "Merriweather, Georgia, serif", fontWeight: 800, margin: "0 0 12px" }}>Huisartspraktijk</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>Uw eerste aanspreekpunt voor alle medische vragen en zorg.</p>
      </div>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 48 }} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
      </svg>
    </section>
    <section className="page-section">
      <div className="page-container">
        <h2 className="page-subheading">Huisarts</h2>
        <p className="page-text">
          Als u vragen heeft of ondersteuning zoekt op het gebied van uw gezondheid, dan is de huisarts,
          samen met de praktijkassistente en de praktijkondersteuners, de eerste tot wie u zich kunt wenden.
        </p>
        <p className="page-text">
          De huisarts beoordeelt, in samenspraak met u, welke zorg u nodig heeft. Het merendeel van de
          klachten kan de huisarts behandelen; hij/zij geeft u adviezen of schrijft medicijnen voor. Zo nodig
          verwijst de huisarts u naar een andere zorgverlener in ons centrum, in de wijk of in het ziekenhuis.
        </p>
      </div>
    </section>
  </Layout>
);
export default Huisartspraktijk;
