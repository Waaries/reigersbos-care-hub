import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";

const handelingen = [
  "Bloeddrukmeting", "Wondverzorging", "Uitstrijkjes", "Wrat aanstippen",
  "Zwachtelen", "Urine onderzoek", "Zwangerschapstest", "Oren uitspuiten",
  "Hechtingen verwijderen", "Injecties",
];

const Praktijkassistente = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Huisartspraktijk</p>
        <h1 className="page-hero-title">Praktijkassistente</h1>
        <p className="page-hero-desc">Uw eerste aanspreekpunt aan de telefoon en balie — altijd klaar om u te helpen.</p>
      </div>
    </section>
    <section className="page-section">
      <div className="page-container max-w-3xl">
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
              <div key={item} className="flex items-center gap-2 text-sm text-foreground font-body">
                <CheckCircle className="w-4 h-4 flex-shrink-0 text-primary" />
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
