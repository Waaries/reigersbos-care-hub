import { Phone, AlertTriangle, X, ExternalLink, Clock } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

const SpoedModal = () => {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "spoed") return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.5)", backdropFilter: "blur(4px)" }}
      onClick={closeModal}
    >
      <div
        className="bg-white w-full max-w-md overflow-hidden flex flex-col rounded-[10px] border border-border"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Red header */}
        <div className="bg-destructive p-7 relative">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-none transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <X size={16} color="white" />
          </button>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.15)" }}>
              <AlertTriangle size={24} color="white" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Spoedhulp
              </p>
              <h2 className="text-2xl font-black text-white m-0 tracking-wide">
                SPOED
              </h2>
            </div>
          </div>

          {/* 112 banner */}
          <div className="mt-5 rounded-[10px] px-4 py-3.5 flex items-center gap-3.5" style={{ background: "rgba(0,0,0,0.2)" }}>
            <span className="text-2xl">🚨</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "rgba(255,255,255,0.8)" }}>
                Levensbedreigende situatie?
              </p>
              <a
                href="tel:112"
                className="block text-3xl font-black tracking-wide no-underline leading-none"
                style={{ color: "#FCA5A5" }}
              >
                Bel 112
              </a>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="p-6 flex flex-col gap-3">

          {/* Praktijk */}
          <a
            href="tel:0207371426"
            className="flex items-center gap-4 p-4 rounded-[10px] no-underline transition-all duration-200 border border-border hover:border-accent"
            style={{ background: "hsl(var(--secondary))" }}
          >
            <div className="w-11 h-11 rounded-[10px] bg-primary flex items-center justify-center flex-shrink-0">
              <Phone size={20} color="white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Clock size={11} className="text-muted-foreground" />
                <p className="text-xs text-muted-foreground font-semibold m-0">
                  Ma–Vr tot 17:00 · Praktijk
                </p>
              </div>
              <p className="text-lg font-bold text-foreground m-0">
                020 737 14 26
              </p>
            </div>
            <ExternalLink size={16} className="text-muted-foreground" />
          </a>

          {/* Huisartsenpost */}
          <a
            href="tel:0880030600"
            className="flex items-center gap-4 p-4 rounded-[10px] no-underline transition-all duration-200 border border-border hover:border-accent"
            style={{ background: "hsl(var(--secondary))" }}
          >
            <div className="w-11 h-11 rounded-[10px] bg-destructive flex items-center justify-center flex-shrink-0">
              <Phone size={20} color="white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Clock size={11} className="text-muted-foreground" />
                <p className="text-xs text-muted-foreground font-semibold m-0">
                  Avond · Nacht · Weekend
                </p>
              </div>
              <p className="text-lg font-bold text-destructive m-0">
                088 003 06 00
              </p>
              <p className="text-xs text-muted-foreground m-0">Huisartsenposten Amsterdam</p>
            </div>
            <ExternalLink size={16} className="text-muted-foreground" />
          </a>

          {/* Adres */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-[10px] bg-secondary border border-border">
            <span className="text-xl mt-0.5">📍</span>
            <div>
              <p className="text-sm font-bold text-foreground mb-0.5">
                Huisartsenpost Amsterdam
              </p>
              <p className="text-xs text-muted-foreground m-0">
                Hoogte Kadijk 143 C · 1018 BH Amsterdam
              </p>
              <a
                href="https://www.huisartsenpostenamsterdam.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent font-semibold no-underline flex items-center gap-1 mt-1"
              >
                <ExternalLink size={11} />
                huisartsenpostenamsterdam.nl
              </a>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="mt-1 w-full py-3 rounded-md text-sm font-semibold border border-border bg-white text-muted-foreground cursor-pointer hover:bg-secondary transition-all"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpoedModal;
