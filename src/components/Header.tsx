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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-300 border-b border-border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between h-16 lg:h-20 ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="Reigersbos Medical Center" className="h-10 lg:h-12 w-auto" />
            <span style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "hsl(222 47% 11%)",
              lineHeight: 1.2,
            }}>
              REIGERSBOS<br />MEDICAL CENTER
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
                  className="flex items-center gap-1 px-3 py-2 rounded-md text-sm transition-colors duration-150"
                  style={{
                    color: isActive(item.href) ? "hsl(222 47% 11%)" : "hsl(215 16% 47%)",
                    fontWeight: isActive(item.href) ? 600 : 400,
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "hsl(222 47% 11%)"; }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) e.currentTarget.style.color = "hsl(215 16% 47%)";
                  }}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" style={{ color: "hsl(215 25% 64%)" }} />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div
                    className={`absolute top-full mt-1 w-52 bg-background border border-border rounded-lg z-50 dropdown-animate ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                    style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm transition-colors duration-100 first:rounded-t-lg last:rounded-b-lg"
                        style={{
                          color: isActive(child.href) ? "hsl(222 47% 11%)" : "hsl(215 16% 47%)",
                          fontWeight: isActive(child.href) ? 500 : 400,
                          background: isActive(child.href) ? "hsl(210 40% 98%)" : "transparent",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(210 40% 98%)"; }}
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
              className="hidden sm:flex items-center gap-1.5 text-sm"
              style={{
                background: "hsl(222 47% 11%)",
                color: "white",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: 600,
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
                className="flex items-center gap-1 px-2 py-1.5 text-sm transition-colors"
                style={{ color: "hsl(215 16% 47%)", fontWeight: 400 }}
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
              </button>

              {langOpen && (
                <div
                  className={`absolute top-full mt-2 w-44 bg-background border border-border rounded-lg z-50 overflow-hidden ${
                    isRTL ? "left-0" : "right-0"
                  }`}
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left"
                      style={{
                        color: language === lang.code ? "hsl(174 43% 30%)" : "hsl(215 16% 47%)",
                        fontWeight: language === lang.code ? 600 : 400,
                        background: language === lang.code ? "hsl(166 76% 97%)" : "transparent",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(210 40% 98%)"; }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = language === lang.code ? "hsl(166 76% 97%)" : "transparent";
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
              className="lg:hidden p-2 rounded-md"
              style={{ color: "hsl(222 47% 11%)" }}
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
                  className="flex-1 px-5 py-3 text-sm"
                  style={{
                    color: isActive(item.href) ? "hsl(222 47% 11%)" : "hsl(215 16% 47%)",
                    fontWeight: isActive(item.href) ? 600 : 400,
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    className="px-4 py-3"
                    style={{ color: "hsl(215 16% 47%)" }}
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
                <div className="border-t border-border" style={{ background: "hsl(210 40% 98%)" }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-8 py-2.5 text-sm"
                      style={{
                        color: isActive(child.href) ? "hsl(222 47% 11%)" : "hsl(215 16% 47%)",
                        fontWeight: isActive(child.href) ? 500 : 400,
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
            <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: "hsl(215 16% 47%)" }}>Taal / Language</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code); setMobileOpen(false); }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors"
                  style={{
                    background: language === lang.code ? "hsl(174 43% 30%)" : "transparent",
                    color: language === lang.code ? "white" : "hsl(222 47% 11%)",
                    borderColor: language === lang.code ? "hsl(174 43% 30%)" : "hsl(214 32% 91%)",
                  }}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="px-5 py-3 border-t border-border">
            <a href="tel:0207371426" className="flex items-center gap-2 text-sm" style={{ color: "hsl(222 47% 11%)", fontWeight: 600 }}>
              <Phone className="w-4 h-4" />
              020 737 14 26
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
