import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  {
    label: "Huisartspraktijk",
    href: "/huisartspraktijk",
    children: [
      { label: "POH-S", href: "/poh-s" },
      { label: "POH-GGZ", href: "/poh-ggz" },
      { label: "Praktijkassistente", href: "/praktijkassistente" },
      { label: "Klachten", href: "/klachten" },
      { label: "Omgangsregels", href: "/omgangsregels" },
      { label: "Privacyreglement", href: "/privacyreglement" },
    ],
  },
  { label: "Diëtetiek", href: "/dietetiek" },
  { label: "Fysiotherapie", href: "/fysiotherapie" },
  { label: "Ons Team", href: "/ons-team" },
  { label: "Vacatures", href: "/vacatures" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-card transition-shadow duration-300 ${
        scrolled ? "shadow-header" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Reigersbos Medical Center" className="h-12 lg:h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
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
                  <div className="absolute top-full left-0 mt-1 w-52 bg-card border border-border rounded-lg shadow-modal dropdown-animate z-50">
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

          {/* Right: Phone + Lang + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0207371426"
              className="flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">020 737 14 26</span>
            </a>
            <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-md overflow-hidden">
              <button className="px-2 py-1 bg-primary text-primary-foreground font-medium">NL</button>
              <button className="px-2 py-1 hover:bg-secondary">EN</button>
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
              <div className="flex items-center justify-between">
                <Link
                  to={item.href}
                  className={`flex-1 px-5 py-3 text-sm font-medium ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
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
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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
