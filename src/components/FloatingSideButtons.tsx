import type { CSSProperties, MouseEvent } from "react";
import { useModal } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Heart, UserPlus, Pill, AlertTriangle, Activity } from "lucide-react";
import InschrijvenModal from "./modals/InschrijvenModal";
import HerhaalreceptModal from "./modals/HerhaalreceptModal";
import SpoedModal from "./modals/SpoedModal";
import FysiotherapieModal from "./modals/FysiotherapieModal";

const FloatingSideButtons = () => {
  const { openModal } = useModal();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const buttons = [
    {
      label: t("btn.inschrijven"),
      action: () => openModal("inschrijven"),
      icon: UserPlus,
      isSpoed: false,
    },
    {
      label: t("btn.herhaalrecept"),
      action: () => openModal("herhaalrecept"),
      icon: Pill,
      isSpoed: false,
    },
    {
      label: t("btn.spoed"),
      action: () => openModal("spoed"),
      icon: AlertTriangle,
      isSpoed: true,
    },
    {
      label: t("btn.fysiotherapie"),
      action: () => openModal("fysiotherapie"),
      icon: Activity,
      isSpoed: false,
    },
    {
      label: "Zonder papieren",
      action: () => navigate("/ongedocumenteerden"),
      icon: Heart,
      isSpoed: false,
    },
  ];

  const baseStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "8px",
    border: "1px solid hsl(var(--border))",
    borderRight: "none",
    borderRadius: "10px 0 0 10px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap",
    writingMode: "horizontal-tb",
    minWidth: "fit-content",
    transform: "translateX(0)",
    transition: "all 0.2s ease",
    boxShadow: "-2px 2px 8px rgba(139,115,85,0.08)",
    marginLeft: "auto",
    overflow: "visible",
    background: "hsl(var(--background))",
    color: "hsl(var(--foreground))",
  };

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>, isSpoed: boolean) => {
    e.currentTarget.style.transform = "translateX(-4px)";
    if (isSpoed) {
      e.currentTarget.style.background = "hsl(0 72% 45%)";
    } else {
      e.currentTarget.style.background = "hsl(var(--sand-deep))";
      e.currentTarget.style.borderColor = "hsl(var(--primary))";
      e.currentTarget.style.color = "hsl(var(--primary))";
    }
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>, isSpoed: boolean) => {
    e.currentTarget.style.transform = "translateX(0)";
    if (isSpoed) {
      e.currentTarget.style.background = "hsl(0 72% 51%)";
    } else {
      e.currentTarget.style.background = "hsl(var(--background))";
      e.currentTarget.style.borderColor = "hsl(var(--border))";
      e.currentTarget.style.color = "hsl(var(--foreground))";
    }
  };

  return (
    <>
      <div
        className="hidden lg:flex"
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
          flexDirection: "column",
          gap: "6px",
          overflow: "visible",
        }}
      >
        {buttons.map((btn) => {
          const Icon = btn.icon;
          const spoedStyle: CSSProperties = btn.isSpoed
            ? { background: "hsl(0 72% 51%)", color: "white", borderColor: "hsl(0 72% 51%)" }
            : {};

          return (
            <button
              key={btn.label}
              onClick={btn.action}
              style={{ ...baseStyle, ...spoedStyle }}
              onMouseEnter={(e) => handleMouseEnter(e, btn.isSpoed)}
              onMouseLeave={(e) => handleMouseLeave(e, btn.isSpoed)}
            >
              <span>{btn.label}</span>
              <Icon size={16} style={{ flexShrink: 0 }} />
            </button>
          );
        })}
      </div>

      <InschrijvenModal />
      <HerhaalreceptModal />
      <SpoedModal />
      <FysiotherapieModal />
    </>
  );
};

export default FloatingSideButtons;
