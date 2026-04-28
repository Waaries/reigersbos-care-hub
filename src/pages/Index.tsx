import Layout from "@/components/Layout";
import { useModal } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Stethoscope, Activity, Heart, Droplets, Shield, Globe, ArrowRight } from "lucide-react";

const Index = () => {
  const { openModal } = useModal();
  const { t, isRTL } = useLanguage();

  const services = [
    { num: "01", icon: Stethoscope, titleKey: "services.gp.title" as const, descKey: "services.gp.desc" as const },
    { num: "02", icon: Activity, titleKey: "services.physio.title" as const, descKey: "services.physio.desc" as const },
    { num: "03", icon: Heart, title: "Verloskundige", desc: "Verloskundige Praktijk De Poort — in ons gebouw" },
    { num: "04", icon: Droplets, title: "Bloedafname", desc: "RHMDC bloedafname service — snel en betrouwbaar" },
  ];

  return (
    <Layout>
      {/* HERO — editorial magazine cover */}
      <section style={{ background: "hsl(var(--paper))", paddingTop: "100px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8" style={{ position: "relative" }}>
          {/* Top masthead row */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            paddingBottom: "20px", marginBottom: "48px",
            borderBottom: "1px solid hsl(222 47% 11% / 0.15)",
            fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase",
            color: "hsl(222 47% 11%)", fontWeight: 500,
          }}>
            <span>Vol. XXIV — Amsterdam Zuidoost</span>
            <span className="hidden sm:inline">Est. sinds jaren · Huisartsenzorg</span>
            <span style={{ color: "hsl(var(--warm))" }}>● Geopend vandaag</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Left — display title */}
            <div className={`lg:col-span-8 ${isRTL ? "text-right" : ""}`}>
              <p className="eyebrow mb-6">— Welkom bij —</p>
              <h1 className="font-serif-display" style={{
                fontSize: "clamp(44px, 8vw, 104px)",
                fontWeight: 500,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "hsl(222 47% 11%)",
                margin: 0,
              }}>
                Reigersbos<br />
                <span style={{ fontStyle: "italic", fontWeight: 400, color: "hsl(var(--warm-deep))" }}>
                  Medical
                </span>{" "}
                Center
              </h1>
            </div>

            {/* Right — quiet intro + CTA */}
            <div className="lg:col-span-4">
              <div className="editorial-rule mb-5" />
              <p style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "18px", lineHeight: 1.5,
                color: "hsl(222 47% 18%)",
                fontStyle: "italic",
                margin: "0 0 24px",
              }}>
                {t("hero.tagline")}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => openModal("inschrijven")}
                  style={{
                    background: "hsl(222 47% 11%)", color: "white",
                    border: "none", borderRadius: "999px",
                    padding: "14px 26px", fontSize: "13px",
                    fontWeight: 600, letterSpacing: "0.05em",
                    cursor: "pointer", textTransform: "uppercase",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "hsl(var(--warm-deep))"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "hsl(222 47% 11%)"; }}
                >
                  {t("hero.cta")} <ArrowRight size={14} />
                </button>
                <a href="#diensten" style={{
                  color: "hsl(222 47% 11%)",
                  borderBottom: "1px solid hsl(222 47% 11%)",
                  padding: "14px 4px", fontSize: "13px",
                  fontWeight: 500, letterSpacing: "0.05em",
                  textDecoration: "none", textTransform: "uppercase",
                }}>
                  Onze diensten
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row — quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8" style={{ borderTop: "1px solid hsl(222 47% 11% / 0.15)" }}>
            {[
              { k: "10.0", label: "Zorgkaart NL" },
              { k: "020 737 14 26", label: "Bel ons" },
              { k: "EN · NL · AR", label: "Talen" },
              { k: "Reigersbos 100K", label: "3e etage" },
            ].map((f, i) => (
              <div key={i}>
                <div className="font-serif-display" style={{ fontSize: "clamp(20px,2.4vw,28px)", fontWeight: 500, color: "hsl(222 47% 11%)", lineHeight: 1.1 }}>
                  {f.k}
                </div>
                <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(215 16% 47%)", marginTop: "6px" }}>
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ background: "hsl(222 47% 11%)", padding: "20px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8" style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "20px", flexWrap: "wrap", color: "white",
        }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(0 0% 70%)" }}>
            Zorgkaart Nederland
          </span>
          <span style={{ width: "4px", height: "4px", background: "hsl(var(--warm))", borderRadius: "50%" }} />
          <span className="font-serif-display" style={{ fontSize: "22px", fontWeight: 500 }}>
            10.0<span style={{ color: "hsl(0 0% 60%)", fontSize: "16px" }}> / 10</span>
          </span>
          <span style={{ width: "4px", height: "4px", background: "hsl(var(--warm))", borderRadius: "50%" }} />
          <span style={{ fontSize: "13px", color: "hsl(0 0% 80%)", fontStyle: "italic", fontFamily: "'Fraunces', serif" }}>
            "Beoordeeld door onze patiënten"
          </span>
        </div>
      </section>

      {/* ABOUT — editorial article with drop-cap */}
      <section style={{ background: "white", padding: "100px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">§ 01 — Over ons</p>
              <h2 className="font-serif-display" style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 500, lineHeight: 1.05,
                letterSpacing: "-0.025em",
                margin: 0,
              }}>
                {t("about.heading")}
              </h2>
              <div className="editorial-rule mt-6" style={{ background: "hsl(var(--warm))" }} />
            </div>

            <div className={`lg:col-span-7 lg:col-start-6 ${isRTL ? "text-right" : ""}`}>
              <p style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "20px", lineHeight: 1.6,
                color: "hsl(222 47% 18%)",
                margin: "0 0 24px",
              }}>
                <span className="font-serif-display" style={{
                  float: isRTL ? "right" : "left",
                  fontSize: "76px", lineHeight: 0.85,
                  fontWeight: 600, color: "hsl(var(--warm-deep))",
                  paddingRight: "12px", paddingTop: "6px",
                  fontStyle: "italic",
                }}>
                  {t("about.p1").charAt(0)}
                </span>
                {t("about.p1").substring(1)}
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "hsl(220 9% 30%)", marginBottom: "16px" }}>
                {t("about.p2")}
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "hsl(220 9% 30%)", marginBottom: "32px" }}>
                {t("about.p3")}
              </p>
              <button
                onClick={() => openModal("inschrijven")}
                style={{
                  background: "transparent", color: "hsl(222 47% 11%)",
                  border: "1px solid hsl(222 47% 11%)", borderRadius: "999px",
                  padding: "12px 24px", fontSize: "13px", fontWeight: 600,
                  letterSpacing: "0.05em", cursor: "pointer", textTransform: "uppercase",
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "hsl(222 47% 11%)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "hsl(222 47% 11%)";
                }}
              >
                {t("about.cta")} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — editorial index */}
      <section id="diensten" style={{ background: "hsl(var(--paper))", padding: "100px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">§ 02 — Index</p>
              <h2 className="font-serif-display" style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 500, lineHeight: 1.05,
                letterSpacing: "-0.025em", margin: 0,
              }}>
                {t("services.heading")}
              </h2>
            </div>
            <p style={{ maxWidth: "320px", fontSize: "14px", lineHeight: 1.6, color: "hsl(215 16% 47%)", fontStyle: "italic", fontFamily: "'Fraunces', serif" }}>
              Een compleet aanbod aan eerstelijnszorg, onder één dak in Reigersbos.
            </p>
          </div>

          <div style={{ borderTop: "1px solid hsl(222 47% 11% / 0.15)" }}>
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <article
                  key={'titleKey' in svc ? svc.titleKey : svc.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr auto",
                    gap: "24px",
                    alignItems: "center",
                    padding: "28px 0",
                    borderBottom: "1px solid hsl(222 47% 11% / 0.15)",
                    cursor: "default",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.paddingLeft = "16px";
                    e.currentTarget.style.background = "hsl(var(--warm-light))";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.paddingLeft = "0";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span className="font-serif-display" style={{
                    fontSize: "28px", fontWeight: 400, fontStyle: "italic",
                    color: "hsl(var(--warm))",
                  }}>
                    {svc.num}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                    <Icon size={22} style={{ color: "hsl(var(--warm-deep))", flexShrink: 0 }} />
                    <h3 className="font-serif-display" style={{
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      fontWeight: 500, margin: 0,
                      color: "hsl(222 47% 11%)",
                    }}>
                      {'titleKey' in svc ? t(svc.titleKey) : svc.title}
                    </h3>
                    <span style={{ fontSize: "14px", color: "hsl(215 16% 47%)", fontFamily: "'Fraunces', serif", fontStyle: "italic" }}>
                      — {'descKey' in svc ? t(svc.descKey) : svc.desc}
                    </span>
                  </div>
                  <ArrowRight size={18} style={{ color: "hsl(222 47% 11%)" }} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DUAL FEATURE BANNERS */}
      <section style={{ background: "white", padding: "80px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">§ 03 — Voor iedereen</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ border: "1px solid hsl(222 47% 11% / 0.15)" }}>
            {/* Geen papieren */}
            <a href="/ongedocumenteerden" style={{
              padding: "40px 36px", background: "hsl(var(--warm-light))",
              textDecoration: "none", display: "block",
              transition: "background 0.3s",
              borderRight: "1px solid hsl(222 47% 11% / 0.15)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "hsl(var(--warm) / 0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "hsl(var(--warm-light))"; }}
            >
              <Shield size={28} style={{ color: "hsl(var(--warm-deep))", marginBottom: "20px" }} />
              <p className="eyebrow mb-3">Geen papieren?</p>
              <h3 className="font-serif-display" style={{
                fontSize: "28px", fontWeight: 500, lineHeight: 1.15,
                color: "hsl(222 47% 11%)", margin: "0 0 12px",
              }}>
                U heeft recht op zorg —<br />
                <em style={{ color: "hsl(var(--warm-deep))" }}>wij helpen u.</em>
              </h3>
              <p style={{ fontSize: "14px", color: "hsl(220 9% 30%)", fontStyle: "italic", fontFamily: "'Fraunces', serif", margin: "0 0 16px" }}>
                Vertrouwelijk · Beroepsgeheim · CAK contract
              </p>
              <span style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: "hsl(222 47% 11%)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Lees meer <ArrowRight size={14} />
              </span>
            </a>
            {/* Expats */}
            <a href="/expats" style={{
              padding: "40px 36px", background: "white",
              textDecoration: "none", display: "block",
              transition: "background 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "hsl(var(--paper))"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "white"; }}
            >
              <Globe size={28} style={{ color: "hsl(var(--warm-deep))", marginBottom: "20px" }} />
              <p className="eyebrow mb-3">International patients</p>
              <h3 className="font-serif-display" style={{
                fontSize: "28px", fontWeight: 500, lineHeight: 1.15,
                color: "hsl(222 47% 11%)", margin: "0 0 12px",
              }}>
                We welcome expats &<br />
                <em style={{ color: "hsl(var(--warm-deep))" }}>English speakers.</em>
              </h3>
              <p style={{ fontSize: "14px", color: "hsl(220 9% 30%)", fontStyle: "italic", fontFamily: "'Fraunces', serif", margin: "0 0 16px" }}>
                English spoken · Easy registration · Amsterdam Zuidoost
              </p>
              <span style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: "hsl(222 47% 11%)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Read more <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT — editorial colophon */}
      <section style={{ background: "hsl(222 47% 11%)", color: "white", padding: "80px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4" style={{ color: "hsl(var(--warm))" }}>§ 04 — Contact</p>
              <h2 className="font-serif-display" style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 500, lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "white", margin: 0,
              }}>
                Kom langs of <em style={{ color: "hsl(var(--warm))" }}>bel ons.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: "Adres", value: "Reigersbos 100 K (3e etage)\n1107 ES Amsterdam" },
                { label: "Telefoon", value: "020 737 14 26", href: "tel:0207371426" },
                { label: "E-mail", value: "Info@reigersbosmedicalcenter.nl", href: "mailto:Info@reigersbosmedicalcenter.nl" },
                { label: "Openingstijden", value: "Ma–Vr · 08:00 – 17:00\nWeekend gesloten" },
              ].map((c, i) => (
                <div key={i} style={{ borderTop: "1px solid hsl(0 0% 100% / 0.2)", paddingTop: "16px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(var(--warm))", margin: "0 0 8px" }}>
                    {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="font-serif-display" style={{
                      fontSize: "20px", fontWeight: 500,
                      color: "white", textDecoration: "none",
                      borderBottom: "1px solid hsl(0 0% 100% / 0.3)",
                    }}>
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-serif-display" style={{
                      fontSize: "18px", fontWeight: 500, color: "white",
                      margin: 0, whiteSpace: "pre-line", lineHeight: 1.4,
                    }}>
                      {c.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
