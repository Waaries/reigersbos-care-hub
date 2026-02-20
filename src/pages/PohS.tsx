import Layout from "@/components/Layout";
import { Heart } from "lucide-react";

const PohS = () => (
  <Layout>
    <section style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
      <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "6px 16px", marginBottom: "16px" }}>
          <Heart size={16} color="white" />
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Huisartspraktijk</span>
        </div>
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontFamily: "Merriweather, Georgia, serif", fontWeight: 800, margin: "0 0 12px" }}>Praktijkondersteuner Somatiek</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>Gespecialiseerde begeleiding bij chronische aandoeningen zoals diabetes, astma en hart- en vaatziekten.</p>
      </div>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 48 }} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
      </svg>
    </section>
    <section className="page-section">
      <div className="page-container">
        <h2 className="page-subheading">POH-S</h2>
        <p className="page-text">
          In onze praktijk zijn praktijkondersteuners-somatiek (POH-S) werkzaam. De POH-S ondersteunt uw
          huisarts bij de zorg aan patiënten met chronische ziekten zoals diabetes, astma, COPD, hoge bloeddruk
          en hart- en vaatziekten en ouderenzorg. Zij doet dit door het uitvoeren van controles volgens een vast
          protocol tijdens haar eigen spreekuur.
        </p>
        <p className="page-text">
          Daarnaast geeft de POH-S u voorlichting over uw aandoening en kunt u bij haar terecht met vragen.
          De uitkomsten van de controles worden besproken met uw huisarts en als uw huisarts daar aanleiding toe
          ziet wordt de behandeling bijgesteld. Wanneer u door de POH-S wordt uitgenodigd voor een afspraak is
          dit altijd op verzoek van uw huisarts.
        </p>
      </div>
    </section>
  </Layout>
);
export default PohS;
