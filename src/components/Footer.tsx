import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.png";
import { Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const nieuws = nieuwsByLang[language] ?? nieuwsByLang["NL"];

  const colHeadingStyle = {
    color: "white",
    fontSize: "12px",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    borderBottom: "1px solid hsl(222 28% 18%)",
    paddingBottom: "8px",
    marginBottom: "16px",
    fontWeight: 600,
  };

  return (
    <footer style={{ background: "hsl(222 47% 11%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${isRTL ? "text-right" : ""}`}>
          {/* Column 1 */}
          <div>
            <div className="mb-4">
              <img src={logoFooter} alt="Reigersbos Medical Center" style={{ width: "140px", height: "auto", marginBottom: "12px", opacity: 0.9 }} />
            </div>
            <p style={{ color: "hsl(215 25% 64%)", fontSize: "12px", fontStyle: "italic", marginBottom: "20px" }}>
              {t("footer.tagline")}
            </p>

            <div className="space-y-3">
              <div className={`flex items-start gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(215 25% 64%)" }} />
                <div>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "hsl(215 25% 64%)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    {t("footer.hours.practice")}
                  </p>
                  <p style={{ fontSize: "13px", color: "hsl(215 25% 74%)" }}>Ma-Vr 08:00–17:00</p>
                </div>
              </div>
              <div className={`flex items-start gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(215 25% 64%)" }} />
                <div>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "hsl(215 25% 64%)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    {t("footer.hours.physio")}
                  </p>
                  <p style={{ fontSize: "13px", color: "hsl(215 25% 74%)" }}>Ma-Vr 09:00–18:00</p>
                  <p style={{ fontSize: "13px", color: "hsl(215 25% 74%)" }}>{t("footer.hours.weekend")}</p>
                </div>
              </div>
            </div>

            {/* Zorgkaart widget */}
            <a
              href="https://www.zorgkaartnederland.nl/zorginstelling/huisartsenpraktijk-reigersbos-medical-center-amsterdam-10017001"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                marginTop: '16px',
                padding: '12px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid hsl(214 32% 91%)',
                textDecoration: 'none',
                maxWidth: '220px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#e85d04', fontWeight: 900, fontSize: '13px', lineHeight: 1 }}>Zorgkaart</span>
                  <span style={{ color: 'hsl(222 47% 11%)', fontWeight: 900, fontSize: '13px', lineHeight: 1 }}>Nederland</span>
                </div>
                <div style={{ background: '#e85d04', color: 'white', borderRadius: '4px', padding: '2px 6px', fontSize: '12px', fontWeight: 900 }}>+Q</div>
              </div>
              <p style={{ color: 'hsl(220 9% 26%)', fontSize: '13px', margin: '0 0 6px', lineHeight: '1.4' }}>
                Reigersbos Medical Center is 2 keer gewaardeerd en heeft een gemiddeld cijfer van <strong>10.0</strong>.
              </p>
              <span style={{ color: 'hsl(174 43% 30%)', fontSize: '13px', fontWeight: 500 }}>
                Bekijk alle waarderingen
              </span>
            </a>
          </div>

          {/* Column 2 */}
          <div>
            <h4 style={colHeadingStyle}>{t("footer.medical_sites")}</h4>
            <ul className="space-y-1.5">
              {medischeLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-sm transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                    style={{ color: "hsl(215 25% 64%)" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "white"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "hsl(215 25% 64%)"; }}
                  >
                    <Globe className="w-3 h-3 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 style={colHeadingStyle}>{t("footer.support")}</h4>
            <ul className="space-y-1.5 mb-7">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors"
                    style={{ color: "hsl(215 25% 64%)" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "white"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "hsl(215 25% 64%)"; }}
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 style={colHeadingStyle}>{t("footer.news")}</h4>
            <ul className="space-y-3">
              {nieuws.map((item) => (
                <li key={item.title} className="flex flex-col">
                  <span className="text-sm leading-snug cursor-pointer transition-colors" style={{ color: "hsl(215 25% 74%)" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "white"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "hsl(215 25% 74%)"; }}
                  >
                    {item.title}
                  </span>
                  <span style={{ fontSize: "11px", color: "hsl(215 16% 47%)", marginTop: "2px" }}>{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ borderTop: "1px solid hsl(222 28% 18%)", background: "hsl(222 47% 7%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: "12px", color: "hsl(215 16% 47%)", textAlign: "center" }}>
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
