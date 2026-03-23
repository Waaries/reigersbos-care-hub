import Layout from "@/components/Layout";
import { useModal } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Stethoscope, Activity, Heart, Droplets, Shield, Globe } from "lucide-react";

const Index = () => {
  const { openModal } = useModal();
  const { t, isRTL } = useLanguage();

  const services = [
    { icon: Stethoscope, titleKey: "services.gp.title" as const, descKey: "services.gp.desc" as const },
    { icon: Activity, titleKey: "services.physio.title" as const, descKey: "services.physio.desc" as const },
    { icon: Heart, title: "Verloskundige", desc: "Verloskundige Praktijk De Poort — in ons gebouw" },
    { icon: Droplets, title: "Bloedafname", desc: "RHMDC bloedafname service — snel en betrouwbaar" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section style={{ background: "hsl(210 40% 98%)", paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left side */}
            <div className={`lg:col-span-3 ${isRTL ? "text-right" : ""}`}>
              <p className="page-hero-label mb-4">{t("hero.welcome")}</p>
              <div style={{ borderLeft: "3px solid hsl(174 43% 30%)", paddingLeft: "16px", marginBottom: "20px" }}>
                <h1 style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  color: "hsl(222 47% 11%)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  margin: 0,
                }}>
                  Reigersbos Medical Center
                </h1>
              </div>
              <p style={{ color: "hsl(215 16% 47%)", fontSize: "16px", marginBottom: "28px", lineHeight: 1.6 }}>
                {t("hero.tagline")}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => openModal("inschrijven")}
                  style={{
                    background: "hsl(222 47% 11%)",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    padding: "12px 24px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "hsl(222 47% 15%)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "hsl(222 47% 11%)"; }}
                >
                  {t("hero.cta")}
                </button>
                <a
                  href="#diensten"
                  style={{
                    background: "transparent",
                    color: "hsl(222 47% 11%)",
                    border: "1px solid hsl(214 32% 91%)",
                    borderRadius: "6px",
                    padding: "12px 24px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "hsl(210 40% 98%)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                >
                  Onze diensten
                </a>
              </div>
            </div>

            {/* Right side — contact card */}
            <div className="lg:col-span-2">
              <div style={{
                background: "white",
                border: "1px solid hsl(214 32% 91%)",
                borderRadius: "10px",
                padding: "24px",
              }}>
                <h3 style={{ fontWeight: 700, color: "hsl(222 47% 11%)", marginBottom: "20px", fontSize: "16px" }}>
                  {t("contact.title")}
                </h3>

                {[
                  { emoji: "📍", content: <span style={{ fontSize: "14px", color: "hsl(220 9% 26%)", lineHeight: "1.6" }}>Reigersbos 100 K (3e etage)<br />1107 ES Amsterdam</span> },
                  { emoji: "📞", content: <a href="tel:0207371426" style={{ color: "hsl(174 43% 30%)", fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>020 737 14 26</a> },
                  { emoji: "📠", content: <span style={{ fontSize: "14px", color: "hsl(220 9% 26%)" }}>020 737 03 79</span> },
                  { emoji: "📧", content: <a href="mailto:Info@reigersbosmedicalcenter.nl" style={{ color: "hsl(174 43% 30%)", fontWeight: 600, textDecoration: "none", fontSize: "14px", wordBreak: "break-all" as const }}>Info@reigersbosmedicalcenter.nl</a> },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "14px", paddingBottom: "14px", borderBottom: "1px solid hsl(214 32% 91%)" }}>
                    <span style={{ fontSize: "18px", flexShrink: 0 }}>{item.emoji}</span>
                    <div>{item.content}</div>
                  </div>
                ))}

                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>🕐</span>
                  <div style={{ fontSize: "14px", color: "hsl(220 9% 26%)", lineHeight: "1.8" }}>
                    <div style={{ fontWeight: 600, marginBottom: "4px" }}>{t("contact.hours.label")}</div>
                    <div>{t("contact.hours.weekdays")}</div>
                    <div style={{ color: "hsl(215 16% 47%)" }}>{t("contact.hours.weekend")}</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "12px" }}>
                <span style={{
                  display: "inline-block",
                  background: "hsl(166 76% 97%)",
                  color: "hsl(174 43% 30%)",
                  border: "1px solid hsl(168 76% 78%)",
                  borderRadius: "4px",
                  padding: "6px 12px",
                  fontSize: "13px",
                  fontWeight: 600,
                }}>
                  {t("contact.open")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section style={{ background: "white", padding: "16px 0", borderTop: "1px solid hsl(214 32% 91%)", borderBottom: "1px solid hsl(214 32% 91%)" }}>
        <div className="page-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "hsl(222 47% 11%)" }}>Zorgkaart Nederland</span>
          <span style={{ fontSize: "18px", color: "#F59E0B" }}>⭐</span>
          <span style={{ fontSize: "20px", fontWeight: 700, color: "hsl(222 47% 11%)" }}>10.0 / 10</span>
          <span style={{ fontSize: "13px", color: "hsl(215 16% 47%)" }}>— Beoordeeld door onze patiënten</span>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section" style={{ background: "white", paddingTop: "48px" }}>
        <div className="page-container">
          <p className="page-hero-label mb-2">OVER ONS</p>
          <h2 className={`page-heading ${isRTL ? "text-right" : ""}`}>{t("about.heading")}</h2>
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-start ${isRTL ? "direction-rtl" : ""}`}>
            <div className={`lg:col-span-3 space-y-4 ${isRTL ? "text-right" : ""}`}>
              <p className="page-text">{t("about.p1")}</p>
              <p className="page-text">{t("about.p2")}</p>
              <p className="page-text">{t("about.p3")}</p>
              <div className="mt-6">
                <button
                  onClick={() => openModal("inschrijven")}
                  style={{
                    background: "hsl(222 47% 11%)",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    padding: "12px 24px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {t("about.cta")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="diensten" style={{ background: "hsl(210 40% 98%)", padding: "60px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="page-hero-label mb-2">{t("services.label")}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, color: "hsl(222 47% 11%)", margin: 0 }}>
              {t("services.heading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={'titleKey' in svc ? svc.titleKey : svc.title}
                  style={{
                    background: "white",
                    borderRadius: "10px",
                    padding: "24px",
                    textAlign: "center",
                    border: "1px solid hsl(214 32% 91%)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    transition: "all 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "hsl(174 43% 30%)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(13,148,136,0.1)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "hsl(214 32% 91%)";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                  }}
                >
                  <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
                    <Icon size={32} style={{ color: "hsl(174 43% 30%)" }} />
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 600, color: "hsl(222 47% 11%)", marginBottom: "8px" }}>
                    {'titleKey' in svc ? t(svc.titleKey) : svc.title}
                  </div>
                  <p style={{ fontSize: "14px", color: "hsl(215 16% 47%)", margin: 0 }}>
                    {'descKey' in svc ? t(svc.descKey) : svc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Geen papieren Banner */}
      <section style={{ padding: "40px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div style={{
            background: "hsl(166 76% 97%)",
            border: "1px solid hsl(168 76% 78%)",
            borderRadius: "10px",
            padding: "28px 32px",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "24px", flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Shield size={28} style={{ color: "hsl(174 43% 30%)", flexShrink: 0 }} />
              <div>
                <p className="page-hero-label" style={{ margin: "0 0 4px" }}>GEEN PAPIEREN?</p>
                <h3 style={{ color: "hsl(222 47% 11%)", fontSize: "18px", fontWeight: 700, margin: 0 }}>
                  U heeft recht op zorg — wij helpen u
                </h3>
                <p style={{ color: "hsl(215 16% 47%)", fontSize: "14px", margin: "4px 0 0" }}>
                  Vertrouwelijk · Beroepsgeheim · CAK contract
                </p>
              </div>
            </div>
            <a href="/ongedocumenteerden" style={{
              background: "hsl(222 47% 11%)", color: "white",
              borderRadius: "6px", padding: "10px 20px",
              fontSize: "14px", fontWeight: 600, textDecoration: "none",
              whiteSpace: "nowrap", flexShrink: 0,
            }}>
              Meer informatie →
            </a>
          </div>
        </div>
      </section>

      {/* Expats Banner */}
      <section style={{ padding: "0 0 40px" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div style={{
            background: "white",
            border: "1px solid hsl(214 32% 91%)",
            borderRadius: "10px",
            padding: "28px 32px",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "24px", flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Globe size={28} style={{ color: "hsl(174 43% 30%)", flexShrink: 0 }} />
              <div>
                <p className="page-hero-label" style={{ margin: "0 0 4px" }}>INTERNATIONAL PATIENTS?</p>
                <h3 style={{ color: "hsl(222 47% 11%)", fontSize: "18px", fontWeight: 700, margin: 0 }}>
                  We welcome expats & English speakers
                </h3>
                <p style={{ color: "hsl(215 16% 47%)", fontSize: "14px", margin: "4px 0 0" }}>
                  English spoken · Easy registration · Central Amsterdam Zuidoost
                </p>
              </div>
            </div>
            <a href="/expats" style={{
              background: "hsl(222 47% 11%)", color: "white",
              borderRadius: "6px", padding: "10px 20px",
              fontSize: "14px", fontWeight: 600, textDecoration: "none",
              whiteSpace: "nowrap", flexShrink: 0,
            }}>
              More information →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
