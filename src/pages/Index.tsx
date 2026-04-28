import Layout from "@/components/Layout";
import { useModal } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Stethoscope, Activity, Heart, Droplets, Shield, Globe, ArrowUpRight, Phone, MapPin, Mail, Clock } from "lucide-react";

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
      {/* HERO — luxury spa */}
      <section className="grain-texture" style={{
        background: "hsl(var(--ivory))",
        paddingTop: "100px", paddingBottom: "120px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative gold circle */}
        <div style={{
          position: "absolute", top: "10%", right: "-200px",
          width: "500px", height: "500px", borderRadius: "50%",
          border: "1px solid hsl(var(--gold) / 0.3)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "15%", right: "-150px",
          width: "400px", height: "400px", borderRadius: "50%",
          border: "1px solid hsl(var(--gold) / 0.2)",
          pointerEvents: "none",
        }} />

        <div className="page-container px-4 sm:px-6 lg:px-8" style={{ position: "relative" }}>
          <div className="text-center" style={{ maxWidth: "880px", margin: "0 auto" }}>
            <p className="eyebrow mb-8">◦ Reigersbos · Amsterdam ◦</p>

            <h1 className="font-display" style={{
              fontSize: "clamp(48px, 9vw, 124px)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "hsl(var(--moss))",
              margin: "0 0 32px",
            }}>
              Een plek waar<br />
              <em style={{ fontWeight: 400, color: "hsl(var(--gold))" }}>zorg</em> tot rust komt.
            </h1>

            <div className="gold-rule" style={{ margin: "32px auto" }} />

            <p className="font-body" style={{
              fontSize: "17px", lineHeight: 1.7,
              color: "hsl(var(--moss) / 0.75)",
              maxWidth: "560px", margin: "0 auto 48px",
              fontWeight: 300,
            }}>
              {t("hero.tagline")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => openModal("inschrijven")}
                style={{
                  background: "hsl(var(--moss))", color: "hsl(var(--ivory))",
                  border: "none", borderRadius: "999px",
                  padding: "16px 36px", fontSize: "12px",
                  fontWeight: 500, letterSpacing: "0.2em",
                  cursor: "pointer", textTransform: "uppercase",
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "hsl(var(--gold))";
                  e.currentTarget.style.letterSpacing = "0.25em";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "hsl(var(--moss))";
                  e.currentTarget.style.letterSpacing = "0.2em";
                }}
              >
                {t("hero.cta")}
              </button>
              <a href="#diensten" style={{
                color: "hsl(var(--moss))",
                background: "transparent",
                border: "1px solid hsl(var(--moss) / 0.3)",
                borderRadius: "999px",
                padding: "16px 36px", fontSize: "12px",
                fontWeight: 500, letterSpacing: "0.2em",
                textDecoration: "none", textTransform: "uppercase",
                display: "inline-flex", alignItems: "center", gap: "10px",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "hsl(var(--gold))"; e.currentTarget.style.color = "hsl(var(--gold))"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(var(--moss) / 0.3)"; e.currentTarget.style.color = "hsl(var(--moss))"; }}
              >
                Onze diensten
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST RIBBON */}
      <section style={{
        background: "hsl(var(--cream))",
        padding: "32px 0",
        borderTop: "1px solid hsl(var(--gold) / 0.25)",
        borderBottom: "1px solid hsl(var(--gold) / 0.25)",
      }}>
        <div className="page-container px-4 sm:px-6 lg:px-8" style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "24px", flexWrap: "wrap",
        }}>
          <span className="eyebrow">Zorgkaart Nederland</span>
          <span style={{ color: "hsl(var(--gold))", fontSize: "14px" }}>✦</span>
          <span className="font-display" style={{
            fontSize: "32px", fontWeight: 400,
            color: "hsl(var(--moss))",
            fontStyle: "italic",
          }}>
            10.0 <span style={{ color: "hsl(var(--gold))", fontSize: "18px" }}>/ 10</span>
          </span>
          <span style={{ color: "hsl(var(--gold))", fontSize: "14px" }}>✦</span>
          <span className="font-display" style={{
            fontSize: "16px", color: "hsl(var(--moss) / 0.7)",
            fontStyle: "italic",
          }}>
            "Beoordeeld door onze patiënten"
          </span>
        </div>
      </section>

      {/* ABOUT — full bleed sage */}
      <section className="grain-texture" style={{
        background: "hsl(var(--sage) / 0.25)",
        padding: "120px 0",
      }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">— Onze praktijk —</p>
              <h2 className="font-display" style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 300, lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "hsl(var(--moss-deep))",
                margin: 0,
              }}>
                {t("about.heading").split(" ").slice(0, -2).join(" ")}{" "}
                <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>
                  {t("about.heading").split(" ").slice(-2).join(" ")}
                </em>
              </h2>
              <div className="gold-rule mt-8" />
            </div>

            <div className={`lg:col-span-6 lg:col-start-7 ${isRTL ? "text-right" : ""}`}>
              <p className="font-display" style={{
                fontSize: "22px", lineHeight: 1.55,
                color: "hsl(var(--moss-deep))",
                fontStyle: "italic", fontWeight: 400,
                margin: "0 0 28px",
              }}>
                {t("about.p1")}
              </p>
              <p className="font-body" style={{
                fontSize: "15px", lineHeight: 1.85,
                color: "hsl(var(--moss) / 0.8)",
                marginBottom: "20px", fontWeight: 300,
              }}>
                {t("about.p2")}
              </p>
              <p className="font-body" style={{
                fontSize: "15px", lineHeight: 1.85,
                color: "hsl(var(--moss) / 0.8)",
                marginBottom: "40px", fontWeight: 300,
              }}>
                {t("about.p3")}
              </p>
              <button
                onClick={() => openModal("inschrijven")}
                style={{
                  background: "transparent", color: "hsl(var(--moss))",
                  border: "1px solid hsl(var(--moss))", borderRadius: "999px",
                  padding: "14px 32px", fontSize: "11px", fontWeight: 500,
                  letterSpacing: "0.22em", cursor: "pointer", textTransform: "uppercase",
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "hsl(var(--moss))";
                  e.currentTarget.style.color = "hsl(var(--ivory))";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "hsl(var(--moss))";
                }}
              >
                {t("about.cta")} <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — luxury cards */}
      <section id="diensten" style={{
        background: "hsl(var(--ivory))",
        padding: "120px 0",
      }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="eyebrow mb-6">◦ Ons aanbod ◦</p>
            <h2 className="font-display" style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 300, lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "hsl(var(--moss-deep))",
              margin: 0,
            }}>
              Een volledige kring van <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>zorg.</em>
            </h2>
            <div className="gold-rule" style={{ margin: "24px auto 0" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="grain-texture"
                  style={{
                    background: "hsl(var(--cream))",
                    borderRadius: "0",
                    padding: "48px 28px",
                    textAlign: "center",
                    border: "1px solid hsl(var(--gold) / 0.2)",
                    transition: "all 0.5s ease",
                    cursor: "default",
                    position: "relative",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "hsl(var(--moss))";
                    e.currentTarget.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "hsl(var(--cream))";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    width: "72px", height: "72px",
                    borderRadius: "50%",
                    border: "1px solid hsl(var(--gold))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 28px",
                  }}>
                    <Icon size={26} style={{ color: "hsl(var(--gold))" }} strokeWidth={1.2} />
                  </div>
                  <h3 className="font-display" style={{
                    fontSize: "24px", fontWeight: 400,
                    color: "hsl(var(--moss-deep))",
                    margin: "0 0 12px", letterSpacing: "-0.01em",
                    transition: "color 0.5s",
                  }}>
                    {'titleKey' in svc ? t(svc.titleKey) : svc.title}
                  </h3>
                  <p className="font-body" style={{
                    fontSize: "13px", lineHeight: 1.7,
                    color: "hsl(var(--moss) / 0.65)",
                    margin: 0, fontWeight: 300,
                  }}>
                    {'descKey' in svc ? t(svc.descKey) : svc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DUAL FEATURE BANNERS */}
      <section style={{ background: "hsl(var(--cream))", padding: "100px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { href: "/ongedocumenteerden", icon: Shield, eyebrow: "Geen papieren?", title: "U heeft recht op zorg", italic: "wij helpen u.", sub: "Vertrouwelijk · Beroepsgeheim · CAK contract", cta: "Lees meer" },
              { href: "/expats", icon: Globe, eyebrow: "International patients", title: "We welcome expats &", italic: "English speakers.", sub: "English spoken · Easy registration · Amsterdam", cta: "Read more" },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <a key={i} href={b.href} className="grain-texture" style={{
                  display: "block", padding: "56px 44px",
                  background: i === 0 ? "hsl(var(--moss))" : "hsl(var(--ivory))",
                  color: i === 0 ? "hsl(var(--ivory))" : "hsl(var(--moss))",
                  textDecoration: "none",
                  border: "1px solid hsl(var(--gold) / 0.25)",
                  transition: "all 0.4s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <Icon size={28} style={{ color: "hsl(var(--gold))", marginBottom: "28px" }} strokeWidth={1.2} />
                  <p className="eyebrow mb-4" style={{ color: "hsl(var(--gold))" }}>◦ {b.eyebrow} ◦</p>
                  <h3 className="font-display" style={{
                    fontSize: "32px", fontWeight: 300, lineHeight: 1.15,
                    color: "inherit", margin: "0 0 16px",
                  }}>
                    {b.title}<br />
                    <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>{b.italic}</em>
                  </h3>
                  <p className="font-display" style={{
                    fontSize: "15px", fontStyle: "italic",
                    opacity: 0.7, margin: "0 0 28px",
                  }}>
                    {b.sub}
                  </p>
                  <span style={{
                    fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase",
                    fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "10px",
                    borderBottom: "1px solid currentColor", paddingBottom: "4px",
                  }}>
                    {b.cta} <ArrowUpRight size={14} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT — moss footer-section */}
      <section className="grain-texture" style={{
        background: "hsl(var(--moss-deep))",
        color: "hsl(var(--ivory))",
        padding: "120px 0",
      }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="eyebrow mb-6" style={{ color: "hsl(var(--gold))" }}>◦ Bezoek ons ◦</p>
            <h2 className="font-display" style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 300, lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "hsl(var(--ivory))",
              margin: 0,
            }}>
              Wij verwelkomen u <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>graag.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {[
              { icon: MapPin, label: "Adres", value: "Reigersbos 100K\n3e etage, 1107 ES" },
              { icon: Phone, label: "Telefoon", value: "020 737 14 26", href: "tel:0207371426" },
              { icon: Mail, label: "E-mail", value: "Info@reigersbosmedicalcenter.nl", href: "mailto:Info@reigersbosmedicalcenter.nl" },
              { icon: Clock, label: "Openingstijden", value: "Ma–Vr 08:00–17:00\nWeekend gesloten" },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} style={{ textAlign: "center" }}>
                  <Icon size={22} style={{ color: "hsl(var(--gold))", margin: "0 auto 16px" }} strokeWidth={1.2} />
                  <p className="eyebrow mb-3" style={{ color: "hsl(var(--gold))" }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-display" style={{
                      fontSize: "17px", color: "hsl(var(--ivory))",
                      textDecoration: "none", fontStyle: "italic",
                      lineHeight: 1.5, display: "block",
                      wordBreak: "break-word",
                    }}>
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-display" style={{
                      fontSize: "17px", color: "hsl(var(--ivory))",
                      margin: 0, fontStyle: "italic",
                      lineHeight: 1.5, whiteSpace: "pre-line",
                    }}>
                      {c.value}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
