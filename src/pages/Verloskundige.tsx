import Layout from "@/components/Layout";

const Verloskundige = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Zorgaanbod</p>
        <h1 className="page-hero-title">Verloskundige</h1>
        <p className="page-hero-desc">
          Verloskundige Praktijk De Poort is gevestigd in hetzelfde gebouw.
        </p>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container">
        <p className="page-text">[NOG AAN TE LEVEREN]</p>
        <div className="info-card max-w-md">
          <h2 className="page-subheading">Verloskundige Praktijk De Poort</h2>
          <p className="page-text mb-2">Telefoon: 020 358 58 47</p>
          <a
            href="https://www.verloskundigenpraktijkdepoort.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold"
            style={{ color: "hsl(var(--accent))" }}
          >
            verloskundigenpraktijkdepoort.nl
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Verloskundige;
