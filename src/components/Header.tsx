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
    { label: t("nav.fysiotherapie"), href: "/fysiotherapie" },
    { label: t("nav.overigzorgaanbod"), href: "/overig-zorgaanbod" },
    { label: t("nav.onsteam"), href: "/ons-team" },
    { label: t("nav.vacatures"), href: "/vacatures" },
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

  // Close lang dropdown on outside click
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
      className={`fixed top-0 left-0 right-0 z-50 bg-card transition-shadow duration-300 ${
        scrolled ? "shadow-header" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between h-20 lg:h-24 ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Reigersbos Medical Center" className="h-16 lg:h-20 w-auto" />
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
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                    isActive(item.href)
                      ? "text-primary bg-primary-light"
                      : "text-foreground hover:text-primary hover:bg-primary-light"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div
                    className={`absolute top-full mt-1 w-52 bg-white border border-border rounded-lg shadow-modal dropdown-animate z-50 ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-4 py-2.5 text-sm transition-colors duration-100 first:rounded-t-lg last:rounded-b-lg ${
                          isActive(child.href)
                            ? "bg-primary-light text-primary font-medium"
                            : "text-foreground hover:bg-secondary hover:text-primary"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Phone + Lang Switcher + Mobile Toggle */}
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <a
              href="tel:0207371426"
              className="flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">020 737 14 26</span>
            </a>

            {/* Language Switcher */}
            <div className="relative hidden sm:block" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-md text-sm font-medium hover:bg-secondary transition-colors"
              >
                <span>{currentLang.flag}</span>
                <span className="text-foreground">{currentLang.label}</span>
                <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div
                  className={`absolute top-full mt-2 w-44 bg-white border border-border rounded-lg shadow-lg z-50 overflow-hidden ${
                    isRTL ? "left-0" : "right-0"
                  }`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left ${
                        language === lang.code
                          ? "bg-accent/10 text-accent font-semibold"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card shadow-lg max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.href}>
              <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                <Link
                  to={item.href}
                  className={`flex-1 px-5 py-3 text-sm font-medium ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  } ${isRTL ? "text-right" : ""}`}
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
                <div className="bg-secondary/50 border-t border-border">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className={`block px-8 py-2.5 text-sm ${
                        isActive(child.href)
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-primary"
                      } ${isRTL ? "text-right" : ""}`}
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
            <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">Taal / Language</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code); setMobileOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                    language === lang.code
                      ? "bg-accent text-white border-accent"
                      : "border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="px-5 py-3 border-t border-border">
            <a href="tel:0207371426" className="flex items-center gap-2 text-primary font-semibold text-sm">
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
