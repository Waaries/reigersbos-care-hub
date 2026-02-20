import Layout from "@/components/Layout";
import { useModal } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { openModal } = useModal();
  const { t, isRTL } = useLanguage();

  const services = [
    { icon: "🩺", titleKey: "services.gp.title" as const, descKey: "services.gp.desc" as const },
    { icon: "🏃", titleKey: "services.physio.title" as const, descKey: "services.physio.desc" as const },
    { icon: "💊", titleKey: "services.chronic.title" as const, descKey: "services.chronic.desc" as const },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          marginBottom: "0",
          minHeight: "auto",
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
        <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in ${isRTL ? "text-right" : "text-center"}`}>
          <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-widest mb-4">
            {t("hero.welcome")}
          </p>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-5 leading-tight">
            Reigersbos Medical Center
          </h1>
          <p className="text-primary-foreground/90 text-xl sm:text-2xl italic mb-8">
            {t("hero.tagline")}
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
            {t("hero.cta")}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section bg-background" style={{ marginTop: "0", paddingTop: "48px" }}>
        <div className="page-container">
          <h2 className={`page-heading ${isRTL ? "text-right" : ""}`}>{t("about.heading")}</h2>
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-start ${isRTL ? "direction-rtl" : ""}`}>
            {/* Left column — 60% (3/5) */}
            <div className={`lg:col-span-3 space-y-4 ${isRTL ? "text-right" : ""}`}>
              <p className="page-text">{t("about.p1")}</p>
              <p className="page-text">{t("about.p2")}</p>
              <p className="page-text">{t("about.p3")}</p>
              <div className="mt-6">
                <button
                  onClick={() => openModal("inschrijven")}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-card"
                >
                  {t("about.cta")}
                </button>
              </div>
            </div>

            {/* Right column — 40% (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Contact info card */}
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  padding: "32px",
                  borderTop: "4px solid #0EA5A0",
                }}
              >
                <h3 style={{ fontWeight: 700, color: "#1B4F8A", marginBottom: "24px", fontSize: "18px" }}>
                  {t("contact.title")}
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
                    <div style={{ fontWeight: 600, marginBottom: "4px" }}>{t("contact.hours.label")}</div>
                    <div>{t("contact.hours.weekdays")}</div>
                    <div style={{ color: "#94A3B8" }}>{t("contact.hours.weekend")}</div>
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
                  {t("contact.open")}
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
              {t("services.label")}
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                fontWeight: 700,
                color: "#1B4F8A",
                margin: 0,
              }}
            >
              {t("services.heading")}
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                style={{
                  background: "#FFFFFF",
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
                  {t(titleKey)}
                </div>
                <p style={{ fontSize: "14px", color: "#64748B", margin: 0 }}>{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongedocumenteerden Banner */}
      <section style={{ background: "#EFF6FF", borderTop: "1px solid #BFDBFE", padding: "40px 0" }}>
        <div className="page-container">
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "24px", flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "16px",
                background: "#1B4F8A",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "26px", flexShrink: 0,
              }}>💙</div>
              <div>
                <p style={{ color: "#1E40AF", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 4px" }}>
                  GEEN PAPIEREN?
                </p>
                <h3 style={{ color: "#1B4F8A", fontSize: "20px", fontWeight: 800, margin: 0 }}>
                  U heeft recht op zorg — wij helpen u
                </h3>
                <p style={{ color: "#3B82F6", fontSize: "14px", margin: "4px 0 0" }}>
                  Vertrouwelijk · Beroepsgeheim · CAK contract
                </p>
              </div>
            </div>
            <a href="/ongedocumenteerden" style={{
              background: "#1B4F8A", color: "white",
              borderRadius: "50px", padding: "12px 24px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none",
              whiteSpace: "nowrap", flexShrink: 0,
              boxShadow: "0 4px 16px rgba(27,79,138,0.25)",
            }}>
              Meer informatie →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
