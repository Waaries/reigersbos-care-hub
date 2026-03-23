import Layout from "@/components/Layout";

const PohS = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Huisartspraktijk</p>
        <h1 className="page-hero-title">Praktijkondersteuner Somatiek</h1>
        <p className="page-hero-desc">Gespecialiseerde begeleiding bij chronische aandoeningen zoals diabetes, astma en hart- en vaatziekten.</p>
      </div>
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
