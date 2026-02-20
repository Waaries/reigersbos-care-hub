import Layout from "@/components/Layout";
import { Mail, Phone, Globe, MessageSquare } from "lucide-react";

const Klachten = () => (
  <Layout>
    <section style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
      <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "6px 16px", marginBottom: "16px" }}>
          <MessageSquare size={16} color="white" />
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Huisartspraktijk</span>
        </div>
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontFamily: "Merriweather, Georgia, serif", fontWeight: 800, margin: "0 0 12px" }}>Klachten</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>Heeft u een klacht? Wij nemen dit serieus en lossen het graag samen met u op.</p>
      </div>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 48 }} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
      </svg>
    </section>
    <section className="page-section">
      <div className="page-container">
        <p className="page-text">
          Wij willen graag ons werk professioneel uitvoeren en vinden het belangrijk dat u ons vertrouwt.
          Desondanks is het mogelijk dat u geen goed gevoel heeft na contact met een medewerker van onze
          praktijk. U vindt bijvoorbeeld dat u niet serieus bent genomen of u heeft de praktijk niet goed
          kunnen bereiken. Wij willen dat dan zo snel mogelijk weten, zodat wij dit met u kunnen bespreken en
          wij ervan kunnen leren.
        </p>
        <p className="page-text">
          Dit kunt u doen door het klachtenformulier in te vullen en in te leveren bij onze praktijk. Onze
          klachtenfunctionaris neemt uw klacht dan in behandeling. Bent u daarna nog niet tevreden? Dan kunt u
          een schriftelijke klacht indienen bij de onderstaande klachten- en geschilleninstantie.
        </p>
        <div className="mt-8 info-card max-w-lg">
          <p className="font-serif font-bold text-lg text-primary mb-4">
            Stichting Klachten & Geschillen Eerstelijnszorg
          </p>
          <div className="space-y-3 text-sm text-foreground/80">
            <p>Postbus 8018, 5601 KA Eindhoven</p>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:0880229100" className="hover:text-primary transition-colors">088 – 022 91 00</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@skge.nl" className="hover:text-primary transition-colors">info@skge.nl</a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <a href="https://www.skge.nl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.skge.nl</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
export default Klachten;
