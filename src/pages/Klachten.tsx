import Layout from "@/components/Layout";
import { Mail, Phone, Globe } from "lucide-react";

const Klachten = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Huisartspraktijk</p>
        <h1 className="page-hero-title">Klachten</h1>
        <p className="page-hero-desc">Heeft u een klacht? Wij nemen dit serieus en lossen het graag samen met u op.</p>
      </div>
    </section>
    <section className="page-section">
      <div className="page-container max-w-3xl">
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
          <p className="font-display font-bold text-foreground text-base mb-4">
            Stichting Klachten & Geschillen Eerstelijnszorg
          </p>
          <div className="space-y-3 text-sm text-foreground font-body">
            <p>Postbus 8018, 5601 KA Eindhoven</p>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:0880229100" className="text-primary hover:underline transition-colors">088 – 022 91 00</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@skge.nl" className="text-primary hover:underline transition-colors">info@skge.nl</a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <a href="https://www.skge.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">www.skge.nl</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
export default Klachten;
