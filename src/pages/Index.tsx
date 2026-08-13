import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import Layout from "@/components/Layout";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ArrowRight,
  Calendar,
  FileText,
  AlertCircle,
  Activity,
  Users,
  HeartPulse,
  Baby,
  FlaskConical,
  Globe,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();
  const { openModal } = useModal();

  const quickActions: {
    icon: typeof Calendar;
    label: string;
    desc: string;
    color: string;
    onClick?: () => void;
    href?: string;
  }[] = [
    {
      icon: Calendar,
      label: "Inschrijven",
      desc: "Schrijf u in als patiënt",
      onClick: () => openModal("inschrijven"),
      color: "bg-warm text-sand",
    },
    {
      icon: FileText,
      label: "Herhaalrecept",
      desc: "Vraag medicatie aan",
      onClick: () => openModal("herhaalrecept"),
      color: "bg-taupe text-sand",
    },
    {
      icon: AlertCircle,
      label: "Spoed",
      desc: "Bij acute situaties",
      href: "/spoed",
      color: "bg-red-700 text-white",
    },
    {
      icon: Activity,
      label: "Fysiotherapie",
      desc: "Maak een afspraak",
      onClick: () => openModal("fysiotherapie"),
      color: "bg-warm-light text-sand",
    },
  ];

  const services = [
    {
      icon: HeartPulse,
      title: "Huisartsenzorg",
      desc: "Reguliere consulten, onderzoek, behandeling en verwijzingen.",
      href: "/huisartspraktijk",
    },
    {
      icon: Users,
      title: "Praktijkassistente",
      desc: "Triage, uitslagen en kleine medische handelingen.",
      href: "/praktijkassistente",
    },
    {
      icon: Activity,
      title: "POH-S (somatiek)",
      desc: "Begeleiding bij diabetes, hart- en vaatziekten en COPD/astma.",
      href: "/poh-s",
    },
    {
      icon: Shield,
      title: "POH-GGZ",
      desc: "Ondersteuning bij psychische klachten en begeleiding.",
      href: "/poh-ggz",
    },
    {
      icon: Activity,
      title: "Fysiotherapie",
      desc: "Fysiotherapie in hetzelfde gebouw, inclusief oefentherapie.",
      href: "/fysiotherapie",
    },
    {
      icon: Baby,
      title: "Verloskundige",
      desc: "Verloskundigenpraktijk De Poort, gevestigd in ons pand.",
      href: "/verloskundige",
    },
    {
      icon: FlaskConical,
      title: "Bloedafname",
      desc: "RHMDC bloedafname en diagnostisch onderzoek op onze locatie.",
      href: "/overig-zorgaanbod",
    },
  ];

  const partners = [
    {
      name: "Verloskundigenpraktijk De Poort",
      category: "Verloskunde",
      phone: "020 358 58 47",
      website: "https://www.verloskundigenpraktijkdepoort.nl",
    },
    {
      name: "RHMDC Bloedafname",
      category: "Diagnostiek",
      phone: "088 260 4000",
      website: "https://www.rhmdc.nl/locaties/reigersbos-medical-center",
      hours: "Do 09:00 – 12:00",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section style={{ background: "#F8FAFC" }} className="border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">{t("hero.welcome")}</p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: "#0F172A", letterSpacing: "-0.025em" }}
              >
                Uw gezondheid,<br />onze zorg.
              </h1>
              <p className="text-lg mb-8 max-w-lg" style={{ color: "#374151", lineHeight: 1.7 }}>
                Reigersbos Medical Center: een kleinschalige huisartspraktijk in Amsterdam-Zuidoost, waar persoonlijke aandacht en kwalitatieve zorg centraal staan.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openModal("inschrijven")}
                  className="inline-flex items-center gap-2"
                  style={{ background: "#0F172A", color: "#FFFFFF", borderRadius: "6px", padding: "12px 24px", fontSize: "14px", fontWeight: 600 }}
                >
                  {t("hero.cta")}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:0207371426"
                  className="inline-flex items-center gap-2 no-underline"
                  style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", color: "#0F172A", borderRadius: "6px", padding: "12px 24px", fontSize: "14px", fontWeight: 600 }}
                >
                  <Phone className="w-4 h-4" />
                  020 737 14 26
                </a>
              </div>
            </div>

            {/* Quick action cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action, idx) => {
                const Icon = action.icon;
                const inner = (
                  <>
                    <div className={`w-11 h-11 rounded-xl ${action.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{action.label}</h3>
                    <p className="text-sm text-muted-foreground">{action.desc}</p>
                  </>
                );
                const cls =
                  "group block text-left p-5 bg-card border border-border shadow-card rounded-[10px] transition-all duration-200 hover:-translate-y-1";
                return action.href ? (
                  <Link key={idx} to={action.href} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <button key={idx} onClick={action.onClick} className={cls}>
                    {inner}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Info band */}
      <section className="bg-sand-deep border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
            <div className="flex items-center gap-3 text-foreground">
              <Clock className="w-4 h-4 text-taupe" />
              <span className="font-body">Ma–Vr 08:00–17:00</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">Weekend gesloten</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <a href="tel:0207371426" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body">
                <Phone className="w-4 h-4 text-taupe" />
                020 737 14 26
              </a>
              <div className="flex items-center gap-2 text-muted-foreground font-body">
                <MapPin className="w-4 h-4 text-taupe" />
                Reigersbos 100K, Amsterdam
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-4">{t("about.heading")}</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Persoonlijke zorg in uw eigen buurt.
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => openModal("inschrijven")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-primary text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t("about.cta")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-sand-deep">
                <img
                  src="/placeholder.svg"
                  alt="Medische zorg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-warm max-w-xs hidden sm:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-taupe mb-1">Open voor</p>
                <p className="font-display font-semibold text-foreground">{t("contact.open")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-sand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">{t("services.label")}</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              {t("services.heading")}
            </h2>
            <p className="text-muted-foreground font-body">
              Een breed aanbod aan medische zorg, dichtbij huis en afgestemd op uw behoeften.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={idx}
                  to={service.href}
                  className="group bg-background rounded-2xl p-6 border border-border shadow-subtle transition-all duration-200 hover:-translate-y-1 hover:shadow-warm"
                >
                  <div className="w-12 h-12 rounded-xl bg-sand-deep flex items-center justify-center mb-5 group-hover:bg-taupe/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Lees meer <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <p className="eyebrow mb-4">Samenwerking</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                Zorgpartners in ons pand.
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                Naast onze eigen huisartsenzorg werken we samen met gespecialiseerde zorgpartners die gevestigd zijn in hetzelfde gebouw.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {partners.map((partner, idx) => (
                <div key={idx} className="bg-sand-deep rounded-2xl p-6 border border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-taupe mb-2">{partner.category}</p>
                  <h3 className="font-display font-semibold text-foreground mb-3">{partner.name}</h3>
                  <div className="space-y-2 text-sm font-body">
                    {partner.phone && (
                      <a href={`tel:${partner.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        {partner.phone}
                      </a>
                    )}
                    {partner.hours && (
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {partner.hours}
                      </p>
                    )}
                    {partner.website && (
                      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                        <Globe className="w-4 h-4" />
                        Website bezoeken
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special groups */}
      <section className="py-20 lg:py-28 bg-sand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Iedereen is welkom</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Zorg voor iedereen.
            </h2>
            <p className="text-muted-foreground font-body">
              Ook als u niet verzekerd bent of niet uit Nederland komt, kunt u bij ons terecht.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              to="/expats"
              className="group relative overflow-hidden rounded-3xl bg-background border border-border p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-warm"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-sand-deep flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <ArrowRight className="w-5 h-5 text-taupe transition-transform group-hover:translate-x-1" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-xl mb-2">Expats</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Engelstalige informatie voor expats over inschrijven, het Nederlandse zorgsysteem en verzekering.
              </p>
            </Link>

            <Link
              to="/ongedocumenteerden"
              className="group relative overflow-hidden rounded-3xl bg-background border border-border p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-warm"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-sand-deep flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <ArrowRight className="w-5 h-5 text-taupe transition-transform group-hover:translate-x-1" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-xl mb-2">Zonder papieren</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Ook zonder verblijfsstatus of verzekering heeft u recht op medisch noodzakelijke zorg.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-warm text-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4 text-sand/80">Bezoek ons</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Wij verwelkomen u graag.
              </h2>
              <p className="text-sand/90 font-body leading-relaxed max-w-lg">
                Heeft u vragen of wilt u een afspraak maken? Neem contact met ons op tijdens openingstijden.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-taupe-light mb-2">Adres</p>
                  <p className="font-body text-white">Reigersbos 100K</p>
                  <p className="font-body text-sand/80">3e etage, 1107 ES Amsterdam</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-taupe-light mb-2">Telefoon</p>
                  <a href="tel:0207371426" className="font-body text-white hover:text-taupe-light transition-colors">
                    020 737 14 26
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-taupe-light mb-2">E-mail</p>
                  <a href="mailto:Info@reigersbosmedicalcenter.nl" className="font-body text-white hover:text-taupe-light transition-colors break-words">
                    Info@reigersbosmedicalcenter.nl
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-taupe-light mb-2">Openingstijden</p>
                  <p className="font-body text-white">Ma–Vr 08:00–17:00</p>
                  <p className="font-body text-sand/80">Weekend gesloten</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-sand text-primary transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" />
                  Contact opnemen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
