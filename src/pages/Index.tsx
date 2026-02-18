import Layout from "@/components/Layout";
import { useModal } from "@/contexts/ModalContext";

const Index = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          minHeight: "70vh",
          background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)",
        }}
      >
        {/* Large circle top-left */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        {/* Medium circle bottom-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(14,165,160,0.15)",
          }}
        />
        {/* Small circle center-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "40%",
            right: "15%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-widest mb-4">
            Welkom op onze website
          </p>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-5 leading-tight">
            Reigersbos Medical Center
          </h1>
          <p className="text-primary-foreground/90 text-xl sm:text-2xl italic mb-8">
            "Because the greatest wealth is health"
          </p>
          <button
            onClick={() => openModal("inschrijven")}
            style={{
              background: "#0EA5A0",
              color: "white",
              border: "none",
              borderRadius: "50px",
              padding: "14px 36px",
              fontSize: "18px",
              fontWeight: 600,
              boxShadow: "0 4px 20px rgba(14,165,160,0.4)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.background = "#0B8F8A";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 25px rgba(14,165,160,0.5)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.background = "#0EA5A0";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 20px rgba(14,165,160,0.4)";
            }}
          >
            Schrijf je nu in
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section bg-background">
        <div className="page-container">
          <h2 className="page-heading">Wie zijn wij! Reigersbos Medical Center</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left column — 60% (3/5) */}
            <div className="lg:col-span-3 space-y-4">
              <p className="page-text">
                Welkom bij Reigersbos Medical Center, een kleinschalige huisartspraktijk gelegen aan
                de Reigersbos 100K op de 3e etage. Wij streven naar persoonlijke en kwalitatieve zorg
                en werken nauw samen met onze diëtist en fysiotherapeuten om u de beste zorg te bieden.
              </p>
              <p className="page-text">
                Bij ons kunt u terecht voor diverse medische diensten, waaronder algemene
                huisartsenzorg, bloedafname, preventieve zorg en chronische zorg. Ons team van
                zorgverleners staat voor u klaar om u te helpen bij uw gezondheidsbehoeften en vragen.
              </p>
              <p className="page-text">
                We begrijpen dat elke patiënt uniek is en daarom vinden wij het belangrijk om
                persoonlijke zorg te bieden die is afgestemd op uw individuele behoeften. Onze diëtist
                en fysiotherapeuten werken nauw samen met onze huisartsen om u te helpen uw
                gezondheidsdoelen te bereiken en u te ondersteunen bij het beheersen van uw aandoening.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => openModal("inschrijven")}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-card"
                >
                  Schrijf u in als patiënt
                </button>
              </div>
            </div>

            {/* Right column — 40% (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Contact info card */}
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  padding: "32px",
                  borderTop: "4px solid #0EA5A0",
                }}
              >
                <h3 style={{ fontWeight: 700, color: "#1B4F8A", marginBottom: "24px", fontSize: "18px" }}>
                  Contactgegevens
                </h3>

                {/* Address */}
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>📍</span>
                  <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>
                    Reigersbos 100 K (3e etage)<br />
                    1107 ES Amsterdam
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>📞</span>
                  <div style={{ fontSize: "14px", color: "#374151" }}>
                    <a href="tel:0207371426" style={{ color: "#0EA5A0", fontWeight: 600, textDecoration: "none" }}>
                      020 737 14 26
                    </a>
                  </div>
                </div>

                {/* Fax */}
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>📠</span>
                  <div style={{ fontSize: "14px", color: "#374151" }}>020 737 03 79</div>
                </div>

                {/* Email */}
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>📧</span>
                  <div style={{ fontSize: "14px" }}>
                    <a
                      href="mailto:Info@reigersbosmedicalcenter.nl"
                      style={{ color: "#0EA5A0", fontWeight: 600, textDecoration: "none", wordBreak: "break-all" }}
                    >
                      Info@reigersbosmedicalcenter.nl
                    </a>
                  </div>
                </div>

                {/* Opening hours */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>🕐</span>
                  <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>
                    <div style={{ fontWeight: 600, marginBottom: "4px" }}>Openingstijden:</div>
                    <div>Maandag - Vrijdag: 08:00 - 17:00</div>
                    <div style={{ color: "#94A3B8" }}>Zaterdag - Zondag: Gesloten</div>
                  </div>
                </div>
              </div>

              {/* Open badge */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    background: "#ECFDF5",
                    color: "#059669",
                    borderRadius: "50px",
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  ✓ Open voor nieuwe patiënten
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services section */}
      <section style={{ background: "#F8FAFC", padding: "60px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-10">
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#0EA5A0",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              WAT WIJ BIEDEN
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                fontWeight: 700,
                color: "#1B4F8A",
                margin: 0,
              }}
            >
              Onze Diensten
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🩺", label: "Huisarts", desc: "Voor al uw medische vragen en zorg" },
              { icon: "🥗", label: "Diëtetiek", desc: "Professioneel voedingsadvies op maat" },
              { icon: "🏃", label: "Fysiotherapie", desc: "Moderne behandelingen, 30 min per sessie" },
              { icon: "💊", label: "Chronische Zorg", desc: "Begeleiding bij langdurige aandoeningen" },
            ].map(({ icon, label, desc }) => (
              <div
                key={label}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                  padding: "32px 24px",
                  textAlign: "center",
                  border: "1px solid #E2E8F0",
                  borderTop: "4px solid transparent",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderTop = "4px solid #0EA5A0";
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderTop = "4px solid transparent";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.10)";
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{icon}</div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1B4F8A",
                    marginBottom: "8px",
                  }}
                >
                  {label}
                </div>
                <p style={{ fontSize: "14px", color: "#64748B", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
