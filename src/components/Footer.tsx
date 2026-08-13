import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.png";
import { Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";

const zorgLinks = [
  { label: "Huisartsenzorg", href: "/huisartsenzorg" },
  { label: "POH-S", href: "/poh-s" },
  { label: "POH-GGZ", href: "/poh-ggz" },
  { label: "Fysiotherapie", href: "/fysiotherapie" },
  { label: "Verloskundige", href: "/verloskundige" },
  { label: "Bloedafname", href: "/bloedafname" },
];

const organisatieLinks = [
  { label: "Ons team", href: "/ons-team" },
  { label: "Vacatures", href: "/vacatures" },
  { label: "Privacy", href: "/privacyreglement" },
  { label: "Klachtenregeling", href: "/klachten" },
  { label: "Omgangsregels", href: "/omgangsregels" },
  { label: "Cookiebeleid", href: "/cookiebeleid" },
];

const medischeLinks = [
  { label: "thuisarts.nl", url: "https://www.thuisarts.nl" },
  { label: "kiesbeter.nl", url: "https://www.kiesbeter.nl" },
  { label: "voedingscentrum.nl", url: "https://www.voedingscentrum.nl" },
  { label: "moetiknaardedokter.nl", url: "https://www.moetiknaardedokter.nl" },
  { label: "medicijnkosten.nl", url: "https://www.medicijnkosten.nl" },
  { label: "zorgkaartnederland.nl", url: "https://www.zorgkaartnederland.nl" },
  { label: "longfonds.nl", url: "https://www.longfonds.nl" },
  { label: "rijksvaccinatieprogramma.nl", url: "https://www.rijksvaccinatieprogramma.nl" },
  { label: "erfelijkheid.nl", url: "https://www.erfelijkheid.nl" },
  { label: "psychowijzer.nl", url: "https://www.psychowijzer.nl" },
];

const supportLinks = [
  { label: "Bereken uw BMI", url: "https://www.thuisarts.nl" },
  { label: "Drink test", url: "https://www.thuisarts.nl" },
  { label: "Griep test", url: "https://www.thuisarts.nl" },
  { label: "Persoonlijke gezondheidscheck", url: "https://www.thuisarts.nl" },
];

const nieuwsByLang: Record<string, { title: string; date: string }[]> = {
  NL: [
    { title: "Griep: wat kun je doen?", date: "16 feb 2026" },
    { title: "Wat doe je tegen schurft?", date: "5 feb 2026" },
    { title: "Zo slaap je beter", date: "23 dec 2025" },
    { title: "Je mond verzorgen in de laatste fase van je leven", date: "11 dec 2025" },
    { title: "Een droge huid? Smeer met basiszalf", date: "3 dec 2025" },
  ],
  EN: [
    { title: "Flu: what can you do?", date: "16 Feb 2026" },
    { title: "What to do about scabies?", date: "5 Feb 2026" },
    { title: "How to sleep better", date: "23 Dec 2025" },
    { title: "Oral care in the final stage of life", date: "11 Dec 2025" },
    { title: "Dry skin? Apply basic ointment", date: "3 Dec 2025" },
  ],
  TW: [
    { title: "Influenza: dɛn na wobɛyɛ?", date: "16 Feb 2026" },
    { title: "Dɛn na wobɛyɛ wɔ kwa ho?", date: "5 Feb 2026" },
    { title: "Sɛdeɛ wobɛda yiye", date: "23 Dec 2025" },
    { title: "Wo anom ho hwɛ wɔ nkwa mu", date: "11 Dec 2025" },
    { title: "Wo honam yɛ teetee? Fa ngo to so", date: "3 Dec 2025" },
  ],
  YO: [
    { title: "Àìsàn otutu: kí la lè ṣe?", date: "16 Feb 2026" },
    { title: "Kí la lè ṣe nípa àrùn scabies?", date: "5 Feb 2026" },
    { title: "Bí a ṣe lè sùn dáradára", date: "23 Dec 2025" },
    { title: "Ìtọ́jú ẹnu ní àkókò ìparí ìgbésí ayé", date: "11 Dec 2025" },
    { title: "Awọ gbígbẹ? Lo ikunra ipilẹ", date: "3 Dec 2025" },
  ],
  TR: [
    { title: "Grip: ne yapabilirsiniz?", date: "16 Şub 2026" },
    { title: "Uyuzla nasıl başa çıkılır?", date: "5 Şub 2026" },
    { title: "Daha iyi uyumak için ipuçları", date: "23 Ara 2025" },
    { title: "Yaşamın son evresinde ağız bakımı", date: "11 Ara 2025" },
    { title: "Kuru cilt? Bazik krem kullanın", date: "3 Ara 2025" },
  ],
  AR: [
    { title: "الإنفلونزا: ماذا يمكنك أن تفعل؟", date: "16 فبراير 2026" },
    { title: "ماذا تفعل حيال الجرب؟", date: "5 فبراير 2026" },
    { title: "كيف تنام بشكل أفضل", date: "23 ديسمبر 2025" },
    { title: "العناية بالفم في المرحلة الأخيرة من الحياة", date: "11 ديسمبر 2025" },
    { title: "جلد جاف؟ استخدم المرهم الأساسي", date: "3 ديسمبر 2025" },
  ],
};

const Footer = () => {
  const { t, isRTL, language } = useLanguage();
  const { openModal } = useModal();
  const nieuws = nieuwsByLang[language] ?? nieuwsByLang["NL"];

  const colTitle = "text-[11px] font-semibold uppercase tracking-[0.08em] text-white border-b border-white/15 pb-2 mb-4";
  const linkCls = "text-sm text-sand/75 hover:text-white transition-colors";

  return (
    <footer className="bg-warm text-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ${isRTL ? "text-right" : ""}`}>
          {/* Column 1 — Praktijk */}
          <div>
            <img src={logoFooter} alt="Reigersbos Medical Center" className="w-32 h-auto mb-4" />
            <p className="text-sm text-sand/70 mb-5">{t("footer.tagline")}</p>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                <p className="text-sm text-sand/90">Reigersbos 100 K (3e etage)<br />1107 ES Amsterdam</p>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                <a href="tel:0207371426" className="text-sm text-sand/90 hover:text-white transition-colors">
                  020 737 14 26
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--accent))" }} />
                <div>
                  <p className="text-sm text-sand/90">{t("footer.hours.practice")}: Ma-Vr 08:00–17:00</p>
                  <p className="text-sm text-sand/90">{t("footer.hours.physio")}: Ma-Vr 09:00–18:00</p>
                  <p className="text-sm text-sand/70">{t("footer.hours.weekend")}</p>
                </div>
              </div>
            </div>

            {/* Zorgkaart widget */}
            <a
              href="https://www.zorgkaartnederland.nl/zorginstelling/huisartsenpraktijk-reigersbos-medical-center-amsterdam-10017001"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-5 p-3 bg-white border border-border max-w-[220px]"
              style={{ borderRadius: "10px" }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  <span className="text-[#e85d04] font-bold text-xs">Zorgkaart</span>
                  <span className="font-bold text-xs" style={{ color: "hsl(var(--primary))" }}>Nederland</span>
                </div>
                <div className="bg-[#e85d04] text-white rounded px-1.5 py-0.5 text-xs font-bold">+Q</div>
              </div>
              <p className="text-xs mb-1.5 leading-snug" style={{ color: "hsl(220 13% 26%)" }}>
                Reigersbos Medical Center is 2 keer gewaardeerd en heeft een gemiddeld cijfer van <strong>10.0</strong>.
              </p>
              <span className="text-xs font-semibold" style={{ color: "hsl(var(--accent))" }}>
                Bekijk alle waarderingen
              </span>
            </a>
          </div>

          {/* Column 2 — Zorg */}
          <div>
            <h4 className={colTitle}>Zorg</h4>
            <ul className="space-y-2">
              {zorgLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={linkCls}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Patiënten */}
          <div>
            <h4 className={colTitle}>Patiënten</h4>
            <ul className="space-y-2">
              <li><Link to="/afspraak-maken" className={linkCls}>Afspraak maken</Link></li>
              <li><button onClick={() => openModal("inschrijven")} className={linkCls}>Inschrijven</button></li>
              <li><button onClick={() => openModal("herhaalrecept")} className={linkCls}>Herhaalrecept</button></li>
              <li>
                <button onClick={() => openModal("spoed")} className="text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--destructive))" }}>
                  Spoed
                </button>
              </li>
              <li><Link to="/expats" className={linkCls}>Expats</Link></li>
              <li><Link to="/ongedocumenteerden" className={linkCls}>Zonder papieren</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 4 — Organisatie */}
          <div>
            <h4 className={colTitle}>Organisatie</h4>
            <ul className="space-y-2 mb-8">
              {organisatieLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={linkCls}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <h4 className={colTitle}>{t("footer.news")}</h4>
            <ul className="space-y-3">
              {nieuws.map((item) => (
                <li key={item.title} className="flex flex-col">
                  <span className="text-sm leading-snug text-sand/80">{item.title}</span>
                  <span className="text-xs text-sand/50 mt-0.5">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compacte rij met externe links */}
        <div className="mt-12 pt-6 border-t border-white/10 space-y-3">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-sand/50">
              {t("footer.medical_sites")}
            </span>
            {medischeLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sand/55 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-sand/50">
              {t("footer.support")}
            </span>
            {supportLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sand/55 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs text-sand/55 text-center">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
