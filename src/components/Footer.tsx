import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Clock, Globe } from "lucide-react";

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

const nieuws = [
  { title: "Griep: wat kun je doen?", date: "16 feb 2026" },
  { title: "Wat doe je tegen schurft?", date: "5 feb 2026" },
  { title: "Zo slaap je beter", date: "23 dec 2025" },
  { title: "Je mond verzorgen in de laatste fase van je leven", date: "11 dec 2025" },
  { title: "Een droge huid? Smeer met basiszalf", date: "3 dec 2025" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo + Hours */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Reigersbos Medical Center" className="h-14 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/70 text-xs italic mb-5">
              "Because the greatest wealth is health"
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary-mid mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary-foreground/90 uppercase tracking-wide mb-1">
                    Openingstijden praktijk
                  </p>
                  <p className="text-sm text-primary-foreground/80">Ma-Vr 08:00–17:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary-mid mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-primary-foreground/90 uppercase tracking-wide mb-1">
                    Openingstijden fysiotherapie
                  </p>
                  <p className="text-sm text-primary-foreground/80">Ma-Vr 09:00–18:00</p>
                  <p className="text-sm text-primary-foreground/80">Weekend op afspraak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Medische websites */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wide mb-4 text-primary-foreground/90 border-b border-primary-foreground/20 pb-2">
              Medische websites
            </h4>
            <ul className="space-y-1.5">
              {medischeLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/70 hover:text-primary-mid transition-colors flex items-center gap-1.5"
                  >
                    <Globe className="w-3 h-3 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Online ondersteuning + Nieuws */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wide mb-4 text-primary-foreground/90 border-b border-primary-foreground/20 pb-2">
              Online ondersteuning
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
              Laatste nieuws
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
            Copyright © 2026 Reigersbos Medical Center | Powered by MWB Services
          </p>
          <div className="flex items-center gap-1 border border-primary-foreground/20 rounded-md overflow-hidden text-xs">
            <button className="px-2.5 py-1 bg-primary text-primary-foreground font-medium">NL</button>
            <button className="px-2.5 py-1 text-primary-foreground/60 hover:text-primary-foreground transition-colors">EN</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
