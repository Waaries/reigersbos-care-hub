import Layout from "@/components/Layout";
import { Brain } from "lucide-react";

const PohGGZ = () => (
  <Layout>
    <section style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
      <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "6px 16px", marginBottom: "16px" }}>
          <Brain size={16} color="white" />
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Huisartspraktijk</span>
        </div>
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontFamily: "Merriweather, Georgia, serif", fontWeight: 800, margin: "0 0 12px" }}>Praktijkondersteuner GGZ</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>Ondersteuning bij psychosociale klachten, dichtbij en laagdrempelig.</p>
      </div>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 48 }} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
      </svg>
    </section>
    <section className="page-section">
      <div className="page-container">
        <h2 className="page-subheading">POH-GGZ</h2>
        <p className="page-text">
          De POH-GGZ is binnen de huisartsenpraktijk ingevoerd om u tijdig bij te staan bij psychosociale
          klachten. In één of meerdere gesprekken kunt u bespreken waar u in uw leven tegenaan loopt. Er zal
          gekeken worden naar praktische handvatten voor het zelfstandig oplossen van problemen en zal u zo
          mogelijk wijzen op preventieve activiteiten in de vormen van cursussen en e-health. Het is mogelijk om
          bij de POH-GGZ een wat langere afspraak te krijgen.
        </p>
        <p className="page-text">
          De POH-GGZ werkt onder verantwoordelijkheid van de huisartsen. Een verslag van uw gesprek met hen
          wordt opgenomen in uw huisartsendossier. Eventuele doorverwijzingen vinden plaats na overleg met uw
          huisarts.
        </p>
        <p className="page-text">
          Met de inzet van POH-GGZ beogen we aandacht te geven aan het tijdig signaleren en behandelen van
          psychische klachten en verwachten daarmee grotere problematiek te voorkomen.
        </p>
      </div>
    </section>
  </Layout>
);
export default PohGGZ;
