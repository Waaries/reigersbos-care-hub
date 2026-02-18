import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.png";
import { Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const medischeLinks = [
  { label: "thuisarts.nl", url: "https://www.thuisarts.nl" },
  { label: "kiesbeter.nl", url: "https://www.kiesbeter.nl" },
  { label: "voedingscentrum.nl", url: "https://www.voedingscentrum.nl" },
  { label: "dieetditdieetdat.nl", url: "https://www.dieetditdieetdat.nl" },
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

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${isRTL ? "text-right" : ""}`}>
          {/* Column 1: Logo + Hours */}
          <div>
            <div className="mb-4">
              <img src={logoFooter} alt="Reigersbos Medical Center" className="h-14 w-auto" />
            </div>
            <p className="text-primary-foreground/70 text-xs italic mb-5">
              {t("footer.tagline")}
            </p>

            <div className="space-y-3">
              <div className={`flex items-start gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Clock className="w-4 h-4 text-primary-mid mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary-foreground/90 uppercase tracking-wide mb-1">
                    {t("footer.hours.practice")}
                  </p>
                  <p className="text-sm text-primary-foreground/80">Ma-Vr 08:00–17:00</p>
                </div>
              </div>
              <div className={`flex items-start gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Clock className="w-4 h-4 text-primary-mid mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary-foreground/90 uppercase tracking-wide mb-1">
                    {t("footer.hours.physio")}
                  </p>
                  <p className="text-sm text-primary-foreground/80">Ma-Vr 09:00–18:00</p>
                  <p className="text-sm text-primary-foreground/80">{t("footer.hours.weekend")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Medical websites */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wide mb-4 text-primary-foreground/90 border-b border-primary-foreground/20 pb-2">
              {t("footer.medical_sites")}
            </h4>
            <ul className="space-y-1.5">
              {medischeLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm text-primary-foreground/70 hover:text-primary-mid transition-colors flex items-center gap-1.5 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <Globe className="w-3 h-3 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support + News */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wide mb-4 text-primary-foreground/90 border-b border-primary-foreground/20 pb-2">
              {t("footer.support")}
            </h4>
            <ul className="space-y-1.5 mb-7">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/70 hover:text-primary-mid transition-colors"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-serif font-bold text-sm uppercase tracking-wide mb-4 text-primary-foreground/90 border-b border-primary-foreground/20 pb-2">
              {t("footer.news")}
            </h4>
            <ul className="space-y-3">
              {nieuws.map((item) => (
                <li key={item.title} className="flex flex-col">
                  <span className="text-sm text-primary-foreground/80 hover:text-primary-mid transition-colors cursor-pointer leading-snug">
                    {item.title}
                  </span>
                  <span className="text-xs text-primary-foreground/50 mt-0.5">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/10 bg-foreground/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/50 text-center sm:text-left">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
