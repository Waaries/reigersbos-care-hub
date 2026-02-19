import { Phone, AlertTriangle, X, ExternalLink, Clock } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

const SpoedModal = () => {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "spoed") return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(13,59,110,0.6)", backdropFilter: "blur(8px)" }}
      onClick={closeModal}
    >
      <div
        className="bg-white w-full max-w-md overflow-hidden flex flex-col"
        style={{ borderRadius: "24px", boxShadow: "0 32px 80px rgba(27,79,138,0.25)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Red header */}
        <div style={{
          background: "linear-gradient(135deg, #DC2626 0%, #991B1B 60%, #7F1D1D 100%)",
          padding: "28px 32px 24px",
          position: "relative",
        }}>
          <button
            onClick={closeModal}
            style={{
              position: "absolute", top: "20px", right: "20px",
              background: "rgba(255,255,255,0.15)", border: "none",
              borderRadius: "50%", width: "36px", height: "36px",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <X size={16} color="white" />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "14px",
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <AlertTriangle size={24} color="white" />
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>
                Spoedhulp
              </p>
              <h2 style={{ color: "white", fontSize: "26px", fontWeight: 900, margin: 0, letterSpacing: "2px" }}>
                SPOED
              </h2>
            </div>
          </div>

          {/* 112 banner */}
          <div style={{
            marginTop: "20px",
            background: "rgba(0,0,0,0.25)",
            borderRadius: "14px",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}>
            <span style={{ fontSize: "28px" }}>🚨</span>
            <div>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 600, margin: "0 0 2px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Levensbedreigende situatie?
              </p>
              <a
                href="tel:112"
                style={{
                  color: "#FCA5A5",
                  fontWeight: 900,
                  fontSize: "28px",
                  letterSpacing: "2px",
                  textDecoration: "none",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                Bel 112
              </a>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: "12px" }}>

          {/* Praktijk */}
          <a
            href="tel:0207371426"
            style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "16px 20px", borderRadius: "16px", textDecoration: "none",
              background: "#EFF6FF", border: "2px solid #BFDBFE",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#DBEAFE";
              e.currentTarget.style.borderColor = "#93C5FD";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#EFF6FF";
              e.currentTarget.style.borderColor = "#BFDBFE";
            }}
          >
            <div style={{
              width: "44px", height: "44px", borderRadius: "12px",
              background: "#1B4F8A",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Phone size={20} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                <Clock size={11} color="#64748B" />
                <p style={{ fontSize: "12px", color: "#64748B", fontWeight: 600, margin: 0 }}>
                  Ma–Vr tot 17:00 · Praktijk
                </p>
              </div>
              <p style={{ fontSize: "20px", fontWeight: 800, color: "#1B4F8A", margin: 0 }}>
                020 737 14 26
              </p>
            </div>
            <ExternalLink size={16} color="#93C5FD" />
          </a>

          {/* Huisartsenpost */}
          <a
            href="tel:0880030600"
            style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "16px 20px", borderRadius: "16px", textDecoration: "none",
              background: "#FFF7ED", border: "2px solid #FED7AA",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#FFEDD5";
              e.currentTarget.style.borderColor = "#FDBA74";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#FFF7ED";
              e.currentTarget.style.borderColor = "#FED7AA";
            }}
          >
            <div style={{
              width: "44px", height: "44px", borderRadius: "12px",
              background: "#EA580C",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Phone size={20} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                <Clock size={11} color="#64748B" />
                <p style={{ fontSize: "12px", color: "#64748B", fontWeight: 600, margin: 0 }}>
                  Avond · Nacht · Weekend
                </p>
              </div>
              <p style={{ fontSize: "20px", fontWeight: 800, color: "#C2410C", margin: 0 }}>
                088 003 06 00
              </p>
              <p style={{ fontSize: "11px", color: "#9A3412", margin: 0 }}>Huisartsenposten Amsterdam</p>
            </div>
            <ExternalLink size={16} color="#FDBA74" />
          </a>

          {/* Adres */}
          <div style={{
            display: "flex", alignItems: "flex-start", gap: "14px",
            padding: "14px 18px", borderRadius: "14px",
            background: "#F8FAFC", border: "1px solid #E2E8F0",
          }}>
            <span style={{ fontSize: "20px", marginTop: "1px" }}>📍</span>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#1B4F8A", margin: "0 0 2px 0" }}>
                Huisartsenpost Amsterdam
              </p>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                Hoogte Kadijk 143 C · 1018 BH Amsterdam
              </p>
              <a
                href="https://www.huisartsenpostenamsterdam.nl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "12px", color: "#0EA5A0", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}
              >
                <ExternalLink size={11} />
                huisartsenpostenamsterdam.nl
              </a>
            </div>
          </div>

          <button
            onClick={closeModal}
            style={{
              marginTop: "4px",
              padding: "12px", borderRadius: "12px", fontSize: "14px", fontWeight: 600,
              border: "2px solid #E2E8F0", background: "white", color: "#64748B",
              cursor: "pointer", transition: "all 0.2s", width: "100%",
            }}
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpoedModal;
