import Layout from "@/components/Layout";
import { Mail, Phone, Globe } from "lucide-react";

const Klachten = () => (
  <Layout>
    <section className="page-section">
      <div className="page-container">
        <h2 className="page-heading">Klachten</h2>
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
