import Layout from "@/components/Layout";
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
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-heading">Fysiotherapie</h2>
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
