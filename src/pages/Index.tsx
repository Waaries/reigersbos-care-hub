import Layout from "@/components/Layout";
import { useModal } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Calendar, FileText, UserPlus, AlertCircle, Phone, MessageSquare,
  Stethoscope, Activity, Heart, Droplets, Shield, Globe,
  ArrowUpRight, MapPin, Mail, Clock,
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Index = () => {
  const { openModal } = useModal();
  const { t, isRTL } = useLanguage();

  const quickActions = [
    { icon: Calendar, title: "Afspraak maken", desc: "Bel ons of plan online een afspraak in", action: () => window.location.href = "tel:0207371426", cta: "Bel direct" },
    { icon: FileText, title: "Herhaalrecept", desc: "Vraag eenvoudig uw medicatie aan", action: () => openModal("herhaalrecept"), cta: "Aanvragen" },
    { icon: UserPlus, title: "Inschrijven", desc: "Word patiënt bij onze praktijk", action: () => openModal("inschrijven"), cta: "Start" },
    { icon: AlertCircle, title: "Spoed", desc: "Direct hulp nodig? Bel onze spoedlijn", action: () => openModal("spoed"), cta: "Spoednummer", urgent: true },
  ];

  const services = [
    { icon: Stethoscope, titleKey: "services.gp.title" as const, descKey: "services.gp.desc" as const },
    { icon: Activity, titleKey: "services.physio.title" as const, descKey: "services.physio.desc" as const },
    { icon: Heart, title: "Verloskundige", desc: "Verloskundige Praktijk De Poort — in ons gebouw" },
    { icon: Droplets, title: "Bloedafname", desc: "RHMDC bloedafname service — snel en betrouwbaar" },
  ];

  const partners = [
    { icon: Phone, title: "Huisarts Dichtbij", desc: "Buiten openingstijden bereikbaar voor spoedzorg in de regio Amsterdam.", link: "Meer informatie" },
    { icon: MessageSquare, title: "Uw mening telt!", desc: "Beoordeel ons op Zorgkaart Nederland — wij zijn beoordeeld met een 10.0.", link: "Geef uw beoordeling" },
    { icon: Globe, title: "Thuisarts.nl", desc: "Betrouwbare medische informatie van Nederlandse huisartsen.", link: "Bezoek website" },
  ];

  return (
    <Layout>
      {/* HERO — photo with color overlay (GAZO style) */}
      <section style={{
        position: "relative",
        minHeight: "440px",
        marginTop: "0",
        overflow: "hidden",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        {/* Color overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(100deg, hsl(var(--moss-deep) / 0.92) 0%, hsl(var(--moss) / 0.85) 45%, hsl(var(--moss) / 0.45) 75%, hsl(var(--moss) / 0.2) 100%)",
        }} />

        <div className="page-container px-4 sm:px-6 lg:px-8" style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "100px",
        }}>
          <p className="eyebrow mb-6" style={{ color: "hsl(var(--gold))" }}>
            ◦ De beste zorg voor alle inwoners van de wijk ◦
          </p>
          <h1 className="font-display" style={{
            fontSize: "clamp(44px, 7vw, 88px)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "white",
            margin: 0,
            maxWidth: "780px",
          }}>
            Reigersbos<br />
            <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>Medical Center</em>
          </h1>
          <div className="gold-rule mt-8" />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "20px",
            color: "rgba(255,255,255,0.9)",
            maxWidth: "520px",
            marginTop: "20px",
            lineHeight: 1.5,
          }}>
            {t("hero.tagline")}
          </p>
        </div>
      </section>

      {/* WAT WILT U DOEN? — action grid (GAZO layout) */}
      <section style={{ background: "hsl(var(--cream))", padding: "80px 0 100px" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">— Wat wilt u doen? —</p>
            <h2 className="font-display" style={{
              fontSize: "clamp(32px, 4.5vw, 48px)",
              fontWeight: 300,
              color: "hsl(var(--moss-deep))",
              margin: 0,
              letterSpacing: "-0.02em",
            }}>
              Snel naar wat u <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>nodig heeft.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickActions.map((a, i) => {
              const Icon = a.icon;
              const urgent = a.urgent;
              return (
                <button
                  key={i}
                  onClick={a.action}
                  className="grain-texture group"
                  style={{
                    background: urgent ? "hsl(var(--moss-deep))" : "hsl(var(--ivory))",
                    border: urgent ? "1px solid hsl(0 60% 50%)" : "1px solid hsl(var(--gold) / 0.25)",
                    padding: "36px 24px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    minHeight: "240px",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = urgent ? "hsl(0 60% 40%)" : "hsl(var(--moss))";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    const t = e.currentTarget.querySelectorAll("[data-flip]");
                    t.forEach(el => (el as HTMLElement).style.color = "hsl(var(--ivory))");
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = urgent ? "hsl(var(--moss-deep))" : "hsl(var(--ivory))";
                    e.currentTarget.style.transform = "translateY(0)";
                    const t = e.currentTarget.querySelectorAll("[data-flip]");
                    t.forEach(el => (el as HTMLElement).style.color = (el as HTMLElement).dataset.original || "");
                  }}
                >
                  <div style={{
                    width: "56px", height: "56px",
                    borderRadius: "50%",
                    border: `1px solid ${urgent ? "hsl(0 60% 70%)" : "hsl(var(--gold))"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "20px",
                  }}>
                    <Icon size={22} strokeWidth={1.3} style={{ color: urgent ? "hsl(0 80% 80%)" : "hsl(var(--gold))" }} />
                  </div>
                  <h3 className="font-display" data-flip data-original={urgent ? "hsl(var(--ivory))" : "hsl(var(--moss-deep))"} style={{
                    fontSize: "24px", fontWeight: 400, margin: "0 0 8px",
                    color: urgent ? "hsl(var(--ivory))" : "hsl(var(--moss-deep))",
                    transition: "color 0.4s",
                  }}>
                    {a.title}
                  </h3>
                  <p data-flip data-original={urgent ? "rgba(245,241,232,0.7)" : "hsl(var(--moss) / 0.7)"} style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: urgent ? "rgba(245,241,232,0.7)" : "hsl(var(--moss) / 0.7)",
                    margin: "0 0 auto",
                    fontWeight: 300,
                    transition: "color 0.4s",
                  }}>
                    {a.desc}
                  </p>
                  <span data-flip data-original={urgent ? "hsl(var(--ivory))" : "hsl(var(--moss))"} style={{
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    color: urgent ? "hsl(var(--ivory))" : "hsl(var(--moss))",
                    marginTop: "20px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    borderBottom: `1px solid currentColor`,
                    paddingBottom: "4px",
                    transition: "color 0.4s",
                  }}>
                    {a.cta} <ArrowUpRight size={12} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST RIBBON */}
      <section style={{
        background: "hsl(var(--ivory))",
        padding: "28px 0",
        borderTop: "1px solid hsl(var(--gold) / 0.25)",
        borderBottom: "1px solid hsl(var(--gold) / 0.25)",
      }}>
        <div className="page-container px-4 sm:px-6 lg:px-8" style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "20px", flexWrap: "wrap",
        }}>
          <span className="eyebrow">Zorgkaart Nederland</span>
          <span style={{ color: "hsl(var(--gold))" }}>✦</span>
          <span className="font-display" style={{ fontSize: "30px", fontWeight: 400, color: "hsl(var(--moss))", fontStyle: "italic" }}>
            10.0 <span style={{ color: "hsl(var(--gold))", fontSize: "16px" }}>/ 10</span>
          </span>
          <span style={{ color: "hsl(var(--gold))" }}>✦</span>
          <span className="font-display" style={{ fontSize: "15px", color: "hsl(var(--moss) / 0.7)", fontStyle: "italic" }}>
            "Beoordeeld door onze patiënten"
          </span>
        </div>
      </section>

      {/* WELKOM (about) */}
      <section className="grain-texture" style={{ background: "hsl(var(--sage) / 0.2)", padding: "100px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">— Welkom —</p>
              <h2 className="font-display" style={{
                fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 300, lineHeight: 1.05,
                color: "hsl(var(--moss-deep))", margin: 0, letterSpacing: "-0.02em",
              }}>
                {t("about.heading").split(" ").slice(0, -2).join(" ")}{" "}
                <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>
                  {t("about.heading").split(" ").slice(-2).join(" ")}
                </em>
              </h2>
              <div className="gold-rule mt-6" />
            </div>
            <div className={`lg:col-span-7 lg:col-start-6 ${isRTL ? "text-right" : ""}`}>
              <p className="font-display" style={{ fontSize: "20px", lineHeight: 1.6, color: "hsl(var(--moss-deep))", fontStyle: "italic", margin: "0 0 24px" }}>
                {t("about.p1")}
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.85, color: "hsl(var(--moss) / 0.8)", marginBottom: "16px", fontWeight: 300 }}>
                {t("about.p2")}
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.85, color: "hsl(var(--moss) / 0.8)", marginBottom: "32px", fontWeight: 300 }}>
                {t("about.p3")}
              </p>
              <button
                onClick={() => openModal("inschrijven")}
                style={{
                  background: "transparent", color: "hsl(var(--moss))",
                  border: "1px solid hsl(var(--moss))", borderRadius: "999px",
                  padding: "14px 30px", fontSize: "11px", fontWeight: 500,
                  letterSpacing: "0.22em", cursor: "pointer", textTransform: "uppercase",
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "hsl(var(--moss))"; e.currentTarget.style.color = "hsl(var(--ivory))"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "hsl(var(--moss))"; }}
              >
                {t("about.cta")} <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="diensten" style={{ background: "hsl(var(--ivory))", padding: "100px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">◦ Ons aanbod ◦</p>
            <h2 className="font-display" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 300, color: "hsl(var(--moss-deep))", margin: 0, letterSpacing: "-0.02em" }}>
              Een volledige kring van <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>zorg.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} className="grain-texture" style={{
                  background: "hsl(var(--cream))", padding: "44px 24px", textAlign: "center",
                  border: "1px solid hsl(var(--gold) / 0.2)", transition: "all 0.5s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "hsl(var(--moss))"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "hsl(var(--cream))"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    border: "1px solid hsl(var(--gold))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                  }}>
                    <Icon size={24} strokeWidth={1.2} style={{ color: "hsl(var(--gold))" }} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 400, color: "hsl(var(--moss-deep))", margin: "0 0 10px" }}>
                    {'titleKey' in svc ? t(svc.titleKey) : svc.title}
                  </h3>
                  <p style={{ fontSize: "13px", lineHeight: 1.7, color: "hsl(var(--moss) / 0.65)", margin: 0, fontWeight: 300 }}>
                    {'descKey' in svc ? t(svc.descKey) : svc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERS / EXTERNAL — GAZO 3-block footer feature */}
      <section style={{ background: "hsl(var(--cream))", padding: "100px 0", borderTop: "1px solid hsl(var(--gold) / 0.2)" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-center mb-4">— Voor u beschikbaar —</p>
          <h2 className="font-display text-center" style={{
            fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 300, color: "hsl(var(--moss-deep))",
            margin: "0 auto 56px", letterSpacing: "-0.02em", maxWidth: "640px",
          }}>
            Extra zorg en <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>informatie.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ borderTop: "1px solid hsl(var(--gold) / 0.3)", borderBottom: "1px solid hsl(var(--gold) / 0.3)" }}>
            {partners.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} style={{
                  padding: "44px 32px",
                  borderRight: i < partners.length - 1 ? "1px solid hsl(var(--gold) / 0.3)" : "none",
                  textAlign: "center",
                }}>
                  <Icon size={28} strokeWidth={1.2} style={{ color: "hsl(var(--gold))", margin: "0 auto 18px" }} />
                  <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 400, color: "hsl(var(--moss-deep))", margin: "0 0 12px" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "hsl(var(--moss) / 0.75)", margin: "0 0 20px", fontWeight: 300 }}>
                    {p.desc}
                  </p>
                  <a href="#" style={{
                    fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase",
                    fontWeight: 500, color: "hsl(var(--moss))",
                    borderBottom: "1px solid hsl(var(--moss))", paddingBottom: "3px",
                    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
                  }}>
                    {p.link} <ArrowUpRight size={12} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIAL GROUPS */}
      <section style={{ background: "hsl(var(--ivory))", padding: "80px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { href: "/ongedocumenteerden", icon: Shield, eyebrow: "Geen papieren?", title: "U heeft recht op zorg —", italic: "wij helpen u.", sub: "Vertrouwelijk · Beroepsgeheim · CAK", cta: "Lees meer", dark: true },
              { href: "/expats", icon: Globe, eyebrow: "International patients", title: "We welcome expats &", italic: "English speakers.", sub: "English spoken · Easy registration", cta: "Read more", dark: false },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <a key={i} href={b.href} className="grain-texture" style={{
                  display: "block", padding: "44px 36px",
                  background: b.dark ? "hsl(var(--moss))" : "hsl(var(--cream))",
                  color: b.dark ? "hsl(var(--ivory))" : "hsl(var(--moss))",
                  textDecoration: "none", border: "1px solid hsl(var(--gold) / 0.25)",
                  transition: "all 0.4s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <Icon size={26} strokeWidth={1.2} style={{ color: "hsl(var(--gold))", marginBottom: "20px" }} />
                  <p className="eyebrow mb-3" style={{ color: "hsl(var(--gold))" }}>◦ {b.eyebrow} ◦</p>
                  <h3 className="font-display" style={{ fontSize: "28px", fontWeight: 300, lineHeight: 1.15, color: "inherit", margin: "0 0 12px" }}>
                    {b.title}<br />
                    <em style={{ color: "hsl(var(--gold))", fontWeight: 400 }}>{b.italic}</em>
                  </h3>
                  <p className="font-display" style={{ fontSize: "14px", fontStyle: "italic", opacity: 0.7, margin: "0 0 20px" }}>
                    {b.sub}
                  </p>
                  <span style={{
                    fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase",
                    fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "8px",
                    borderBottom: "1px solid currentColor", paddingBottom: "3px",
                  }}>
                    {b.cta} <ArrowUpRight size={12} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="grain-texture" style={{ background: "hsl(var(--moss-deep))", color: "hsl(var(--ivory))", padding: "100px 0" }}>
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-5" style={{ color: "hsl(var(--gold))" }}>◦ Bezoek ons ◦</p>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, color: "hsl(var(--ivory))", margin: 0, letterSpacing: "-0.02em" }}>
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
                  <Icon size={22} strokeWidth={1.2} style={{ color: "hsl(var(--gold))", margin: "0 auto 14px" }} />
                  <p className="eyebrow mb-3" style={{ color: "hsl(var(--gold))" }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-display" style={{ fontSize: "16px", color: "hsl(var(--ivory))", textDecoration: "none", fontStyle: "italic", lineHeight: 1.5, display: "block", wordBreak: "break-word" }}>
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-display" style={{ fontSize: "16px", color: "hsl(var(--ivory))", margin: 0, fontStyle: "italic", lineHeight: 1.5, whiteSpace: "pre-line" }}>
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
