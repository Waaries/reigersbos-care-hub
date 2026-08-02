import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages } from "@/i18n/translations";

const Header = () => {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navItems = [
    {
      label: t("nav.huisartspraktijk"),
      href: "/huisartspraktijk",
      children: [
        { label: t("nav.poh_s"), href: "/poh-s" },
        { label: t("nav.poh_ggz"), href: "/poh-ggz" },
        { label: t("nav.praktijkassistente"), href: "/praktijkassistente" },
        { label: t("nav.klachten"), href: "/klachten" },
        { label: t("nav.omgangsregels"), href: "/omgangsregels" },
        { label: t("nav.privacyreglement"), href: "/privacyreglement" },
      ],
    },
    {
      label: "Zorgaanbod",
      href: "/fysiotherapie",
      children: [
        { label: "Fysiotherapie", href: "/fysiotherapie" },
        { label: "Overig Zorgaanbod", href: "/overig-zorgaanbod" },
        { label: "Verloskundige", href: "/verloskundige" },
      ],
    },
    {
      label: "Over ons",
      href: "/ons-team",
      children: [
        { label: "Ons Team", href: "/ons-team" },
        { label: "Vacatures", href: "/vacatures" },
      ],
    },
    { label: "Expats", href: "/expats" },
    { label: "Zonder papieren", href: "/ongedocumenteerden" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  const currentLang = languages.find((l) => l.code === language)!;

  const adjustFontSize = (delta: number) => {
    const html = document.documentElement;
    const current = parseFloat(getComputedStyle(html).fontSize) || 16;
    const next = Math.max(13, Math.min(20, current + delta));
    html.style.fontSize = next + "px";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top accessibility bar */}
      <div className="bg-warm text-sand/90 border-b border-warm-taupe/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-end gap-4" style={{ height: "36px" }}>
          <button
            onClick={() => adjustFontSize(-1)}
            aria-label="Kleinere letters"
            className="text-sand/80 hover:text-sand px-2 py-0.5 transition-colors"
            style={{ fontSize: "13px", fontFamily: "Sora, sans-serif" }}
          >
            a−
          </button>
          <button
            onClick={() => adjustFontSize(1)}
            aria-label="Grotere letters"
            className="text-sand px-2 py-0.5 transition-colors"
            style={{ fontSize: "16px", fontFamily: "Sora, sans-serif" }}
          >
            a+
          </button>
          <span className="w-px h-4 bg-sand/30" />
          <a href="tel:0207371426" className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-sand hover:text-white transition-colors">
            <Phone className="w-3 h-3" /> 020 737 14 26
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className={`bg-background border-b border-border transition-shadow duration-200 ${scrolled ? "shadow-warm" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between h-24 lg:h-28 ${isRTL ? "flex-row-reverse" : ""}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group py-2">
              <img src={logo} alt="Reigersbos Medical Center" className="h-20 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
              <span className="font-display hidden sm:block" style={{
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "hsl(var(--foreground))",
                lineHeight: 1.05,
              }}>
                Reigersbos<br />
                <span className="text-taupe font-medium" style={{ fontSize: "14px", letterSpacing: "0.04em" }}>Medical Center</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className={`hidden lg:flex items-center gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors duration-150 font-body"
                    style={{
                      color: isActive(item.href) ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                      fontWeight: isActive(item.href) ? 600 : 500,
                      fontSize: "14px",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "hsl(var(--foreground))"; }}
                    onMouseLeave={(e) => {
                      if (!isActive(item.href)) e.currentTarget.style.color = "hsl(var(--muted-foreground))";
                    }}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3 text-taupe" />}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <div
                      className={`absolute top-full mt-1 w-52 bg-background border border-border rounded-xl z-50 dropdown-animate ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                      style={{ boxShadow: "0 4px 20px rgba(139,115,85,0.10)" }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm transition-colors duration-100 first:rounded-t-xl last:rounded-b-xl font-body"
                          style={{
                            color: isActive(child.href) ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                            fontWeight: isActive(child.href) ? 600 : 500,
                            background: isActive(child.href) ? "hsl(var(--sand-deep))" : "transparent",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(var(--sand-deep))"; }}
                          onMouseLeave={(e) => {
                            if (!isActive(child.href)) e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: Phone + Lang + Mobile Toggle */}
            <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <a
                href="tel:0207371426"
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold"
                style={{
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  borderRadius: "10px",
                  padding: "8px 16px",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                <Phone className="w-3.5 h-3.5" />
                020 737 14 26
              </a>

              {/* Language Switcher */}
              <div className="relative hidden sm:block" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-2 py-1.5 text-sm transition-colors font-body"
                  style={{ color: "hsl(var(--muted-foreground))", fontWeight: 500 }}
                >
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.label}</span>
                </button>

                {langOpen && (
                  <div
                    className={`absolute top-full mt-2 w-44 bg-background border border-border rounded-xl z-50 overflow-hidden ${
                      isRTL ? "left-0" : "right-0"
                    }`}
                    style={{ boxShadow: "0 4px 20px rgba(139,115,85,0.10)" }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left font-body"
                        style={{
                          color: language === lang.code ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                          fontWeight: language === lang.code ? 600 : 500,
                          background: language === lang.code ? "hsl(var(--sand-deep))" : "transparent",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(var(--sand-deep))"; }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = language === lang.code ? "hsl(var(--sand-deep))" : "transparent";
                        }}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="lg:hidden p-2 rounded-lg text-foreground"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.href}>
                <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Link
                    to={item.href}
                    className="flex-1 px-5 py-3 text-sm font-body"
                    style={{
                      color: isActive(item.href) ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                      fontWeight: isActive(item.href) ? 600 : 500,
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="px-4 py-3 text-muted-foreground"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className="border-t border-border bg-sand-deep">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-8 py-2.5 text-sm font-body"
                        style={{
                          color: isActive(child.href) ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                          fontWeight: isActive(child.href) ? 600 : 500,
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Language Switcher */}
            <div className="px-5 py-3 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-muted-foreground">Taal / Language</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setMobileOpen(false); }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors font-body"
                    style={{
                      background: language === lang.code ? "hsl(var(--primary))" : "transparent",
                      color: language === lang.code ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))",
                      borderColor: language === lang.code ? "hsl(var(--primary))" : "hsl(var(--border))",
                    }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="px-5 py-3 border-t border-border">
              <a href="tel:0207371426" className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Phone className="w-4 h-4" />
                020 737 14 26
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
