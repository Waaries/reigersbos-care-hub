import Layout from "@/components/Layout";
import { Activity } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

const behandelingen = [
  "Alle spier- en gewrichtsklachten",
  "Hoofdpijnklachten",
  "Stress gerelateerde klachten",
  "Klachten aan de wervelkolom",
  "Sportblessures",
  "(Chronische) aandoeningen/ziekten",
  "Voor en na uw operatie",
];

const aanbod = [
  "Sportmassage",
  "Warmte therapie",
  "Cryo therapie",
  "Ontspannings massage",
  "Traditionele geneeswijzen",
  "Trigger point therapie",
  "Kinderfysiotherapie (voor advies en ondersteuning bij pasgeborene tot 2 jaar)",
];

const Fysiotherapie = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      <section style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
        <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "6px 16px", marginBottom: "16px" }}>
            <Activity size={16} color="white" />
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Reigersbos Medical Center</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontFamily: "Merriweather, Georgia, serif", fontWeight: 800, margin: "0 0 12px" }}>Fysiotherapie</h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>Moderne behandelingen op maat — 30 minuten per sessie, één-op-één.</p>
        </div>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 48 }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
      </section>

      <section className="page-section">
        <div className="page-container">
          <p className="page-text">
            Wij zijn een moderne praktijk die behandelt volgens de nieuwste wetenschappelijk bewezen inzichten,
            zowel 'hands-on' als 'hands-off'. Door onze internationale werkervaring, hebben we een uitgebreider
            pakket met behandelopties. Onze behandelingen zijn één-op-één en gericht op uw persoonlijk doel.
            De behandeling is langer dan het landelijk gemiddelde, namelijk 30 minuten per keer. We hebben een
            netwerk aan zorgprofessionals, waarvan we gebruik maken in gecompliceerde casussen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            <div className="info-card">
              <h3 className="page-subheading">Wij behandelen</h3>
              <ul className="space-y-2">
                {behandelingen.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="info-card">
              <h3 className="page-subheading">Wij bieden ook</h3>
              <ul className="space-y-2">
                {aanbod.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={() => openModal("fysiotherapie")}
            className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-card"
          >
            Maak een afspraak Fysiotherapie
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Fysiotherapie;
