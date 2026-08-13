import Layout from "@/components/Layout";

const Bloedafname = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Zorgaanbod</p>
        <h1 className="page-hero-title">Bloedafname</h1>
        <p className="page-hero-desc">Bloedafname en diagnostiek door RHMDC op onze locatie.</p>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container">
        <p className="page-text">[NOG AAN TE LEVEREN]</p>
        <div className="info-card max-w-md">
          <h2 className="page-subheading">RHMDC</h2>
          <p className="page-text mb-2">Telefoon: 088 260 4000</p>
          <a
            href="https://www.rhmdc.nl/locaties/reigersbos-medical-center"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold"
            style={{ color: "hsl(var(--accent))" }}
          >
            rhmdc.nl
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Bloedafname;
