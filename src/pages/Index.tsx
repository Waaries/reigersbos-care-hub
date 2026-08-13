import { useModal } from "@/contexts/ModalContext";
import Layout from "@/components/Layout";
import {
  Phone,
  MapPin,
  Clock,
  CalendarPlus,
  Pill,
  UserPlus,
  Stethoscope,
  ChevronRight,
  Users,
  Activity,
  Shield,
  HeartPulse,
  Baby,
  FlaskConical,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Reigersbos+100K,+1107+ES+Amsterdam";

const tileCls =
  "group flex flex-col items-start bg-card border border-border rounded-[10px] p-[22px_18px] min-h-[120px] transition-colors duration-200 motion-reduce:transition-none hover:border-[hsl(var(--accent))] hover:bg-[#F8FAFC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]";

const Index = () => {
  const { openModal } = useModal();

  const tiles: {
    icon: typeof Phone;
    label: string;
    desc: string;
    href?: string;
    to?: string;
    external?: boolean;
    onClick?: () => void;
  }[] = [
    { icon: CalendarPlus, label: "Afspraak maken", desc: "Bel of plan een afspraak", to: "/afspraak-maken" },
    { icon: Pill, label: "Herhaalrecept", desc: "Vraag uw medicatie opnieuw aan", onClick: () => openModal("herhaalrecept") },
    { icon: UserPlus, label: "Inschrijven", desc: "Nieuwe patiënt bij onze praktijk", onClick: () => openModal("inschrijven") },
    { icon: Phone, label: "Bellen", desc: "020 737 14 26", href: "tel:0207371426" },
    { icon: MapPin, label: "Route", desc: "Reigersbos 100K, 3e etage", href: MAPS_URL, external: true },
    { icon: Stethoscope, label: "Ons zorgaanbod", desc: "Huisarts, fysio, verloskundige", to: "/huisartsenzorg" },
  ];

  const services = [
    { icon: HeartPulse, title: "Huisartsenzorg", desc: "Reguliere consulten, onderzoek, behandeling en verwijzingen.", href: "/huisartspraktijk" },
    { icon: Users, title: "Praktijkassistente", desc: "Triage, uitslagen en kleine medische handelingen.", href: "/praktijkassistente" },
    { icon: Activity, title: "POH-S (somatiek)", desc: "Begeleiding bij diabetes, hart- en vaatziekten en COPD/astma.", href: "/poh-s" },
    { icon: Shield, title: "POH-GGZ", desc: "Ondersteuning bij psychische klachten en begeleiding.", href: "/poh-ggz" },
    { icon: Activity, title: "Fysiotherapie", desc: "Fysiotherapie in hetzelfde gebouw, inclusief oefentherapie.", href: "/fysiotherapie" },
    { icon: Baby, title: "Verloskundige", desc: "Verloskundigenpraktijk De Poort, gevestigd in ons pand.", href: "/verloskundige" },
    { icon: FlaskConical, title: "Bloedafname", desc: "RHMDC bloedafname en diagnostisch onderzoek op onze locatie.", href: "/overig-zorgaanbod" },
  ];

  return (
    <Layout>
      {/* 1. Task grid */}
      <section className="bg-background pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-bold mb-7"
            style={{ fontSize: "clamp(26px, 3.5vw, 34px)", color: "#0F172A", letterSpacing: "-0.025em" }}
          >
            Wat wilt u regelen?
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {tiles.map((tile, idx) => {
              const Icon = tile.icon;
              const inner = (
                <>
                  <Icon className="w-6 h-6 mb-3" style={{ color: "#0D9488" }} aria-hidden="true" />
                  <span className="font-semibold" style={{ fontSize: "17px", color: "#0F172A" }}>
                    {tile.label}
                  </span>
                  <span className="mt-1" style={{ fontSize: "14px", color: "#64748B" }}>
                    {tile.desc}
                  </span>
                </>
              );
              if (tile.to) {
                return (
                  <Link key={idx} to={tile.to} className={tileCls}>
                    {inner}
                  </Link>
                );
              }
              if (tile.href) {
                return (
                  <a
                    key={idx}
                    href={tile.href}
                    className={tileCls}
                    {...(tile.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <button key={idx} type="button" onClick={tile.onClick} className={`${tileCls} text-left`}>
                  {inner}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Practice info strip */}
      <section style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }} className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-8" style={{ fontSize: "15px", color: "#374151" }}>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" style={{ color: "#0D9488" }} aria-hidden="true" />
              <span>Ma–vr 08:00–17:00 · Weekend gesloten</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" style={{ color: "#0D9488" }} aria-hidden="true" />
              <span>Reigersbos 100K (3e etage), 1107 ES Amsterdam</span>
            </div>
            <a href="tel:0207371426" className="flex items-center gap-2 hover:text-primary transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]">
              <Phone className="w-4 h-4 shrink-0" style={{ color: "#0D9488" }} aria-hidden="true" />
              <span>020 737 14 26</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Short intro */}
      <section className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Over onze praktijk</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#0F172A", letterSpacing: "-0.025em" }}>
                Kleinschalige huisartspraktijk in Amsterdam-Zuidoost
              </h2>
              <p style={{ color: "#374151", lineHeight: 1.7, fontSize: "16px" }}>
                Reigersbos Medical Center is een kleinschalige huisartspraktijk aan de Reigersbos 100K op de 3e etage.
                U kunt bij ons terecht voor algemene huisartsenzorg, bloedafname, preventieve zorg en chronische zorg.
                Wij werken nauw samen met de fysiotherapeuten en verloskundigen in hetzelfde gebouw.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-4">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 font-semibold"
                style={{ background: "#F0FDFA", color: "#0D9488", borderRadius: "6px", fontSize: "14px" }}
              >
                ✓ Open voor nieuwe patiënten
              </span>
              <a
                href="https://www.zorgkaartnederland.nl/zorginstelling/huisartsenpraktijk-reigersbos-medical-center-amsterdam-10017001"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-card border border-border max-w-[240px] transition-colors duration-200 motion-reduce:transition-none hover:border-[hsl(var(--accent))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
                style={{ borderRadius: "10px" }}
              >
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="text-[#e85d04] font-bold text-xs">Zorgkaart</span>
                  <span className="font-bold text-xs" style={{ color: "#0F172A" }}>Nederland</span>
                </div>
                <p className="text-sm leading-snug" style={{ color: "#374151" }}>
                  Gemiddeld cijfer <strong>10.0</strong>
                </p>
                <span className="text-sm font-semibold" style={{ color: "#0D9488" }}>
                  Bekijk waarderingen
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Zorgaanbod list */}
      <section style={{ background: "#F8FAFC" }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-3">Ons zorgaanbod</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "#0F172A", letterSpacing: "-0.025em" }}>
            Zorg onder één dak
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group flex items-center gap-3 py-3.5 min-h-[44px] transition-colors duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
                  style={{ borderBottom: "1px solid #E2E8F0" }}
                >
                  <Icon className="w-4 h-4 shrink-0" style={{ color: "#0D9488" }} aria-hidden="true" />
                  <span className="flex-1">
                    <span className="block font-semibold" style={{ fontSize: "16px", color: "#0F172A" }}>
                      {service.title}
                    </span>
                    <span className="block" style={{ fontSize: "14px", color: "#64748B" }}>
                      {service.desc}
                    </span>
                  </span>
                  <ChevronRight
                    className="w-4 h-4 shrink-0 transition-transform motion-reduce:transition-none group-hover:translate-x-1"
                    style={{ color: "#64748B" }}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Iedereen welkom */}
      <section className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-3">Iedereen is welkom</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "#0F172A", letterSpacing: "-0.025em" }}>
            Zorg voor iedereen
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Link to="/expats" className={tileCls}>
              <Globe className="w-6 h-6 mb-3" style={{ color: "#0D9488" }} aria-hidden="true" />
              <span className="font-semibold" style={{ fontSize: "17px", color: "#0F172A" }}>Expats</span>
              <span className="mt-1" style={{ fontSize: "14px", color: "#64748B" }}>
                Engelstalige informatie over inschrijven, het Nederlandse zorgsysteem en verzekering.
              </span>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#0D9488" }}>
                Lees meer <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
            <Link to="/ongedocumenteerden" className={tileCls}>
              <Shield className="w-6 h-6 mb-3" style={{ color: "#0D9488" }} aria-hidden="true" />
              <span className="font-semibold" style={{ fontSize: "17px", color: "#0F172A" }}>Zonder papieren</span>
              <span className="mt-1" style={{ fontSize: "14px", color: "#64748B" }}>
                Ook zonder verblijfsstatus of verzekering heeft u recht op medisch noodzakelijke zorg.
              </span>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#0D9488" }}>
                Lees meer <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
