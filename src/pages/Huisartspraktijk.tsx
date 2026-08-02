import Layout from "@/components/Layout";

const Huisartspraktijk = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Reigersbos Medical Center</p>
        <h1 className="page-hero-title">Huisartspraktijk</h1>
        <p className="page-hero-desc">Uw eerste aanspreekpunt voor alle medische vragen en zorg.</p>
      </div>
    </section>
    <section className="page-section">
      <div className="page-container max-w-3xl">
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
