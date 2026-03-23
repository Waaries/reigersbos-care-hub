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

  const baseButtonStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "8px",
    color: "hsl(0 0% 100%)",
    border: "none",
    borderRadius: "8px 0 0 8px",
    padding: "10px 12px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap",
    writingMode: "horizontal-tb",
    minWidth: "fit-content",
    transform: "translateX(0)",
    transition: "transform 0.2s ease",
    boxShadow: "0 2px 10px hsl(0 0% 0% / 0.15)",
    marginLeft: "auto",
    overflow: "visible",
  };

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateX(-4px)";
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateX(0)";
  };

  const buttons = [
    {
      label: t("btn.inschrijven"),
      action: () => openModal("inschrijven"),
      color: "hsl(211 67% 32%)",
      icon: UserPlus,
    },
    {
      label: t("btn.herhaalrecept"),
      action: () => openModal("herhaalrecept"),
      color: "hsl(178 84% 35%)",
      icon: Pill,
    },
    {
      label: t("btn.spoed"),
      action: () => openModal("spoed"),
      color: "hsl(0 72% 51%)",
      icon: AlertTriangle,
    },
    {
      label: t("btn.fysiotherapie"),
      action: () => openModal("fysiotherapie"),
      color: "hsl(211 67% 32%)",
      icon: Activity,
    },
    {
      label: "Zonder papieren",
      action: () => navigate("/ongedocumenteerden"),
      color: "hsl(211 67% 32%)",
      icon: Heart,
    },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          overflow: "visible",
        }}
      >
        {buttons.map((btn) => {
          const Icon = btn.icon;

          return (
            <button
              key={btn.label}
              onClick={btn.action}
              style={{
                ...baseButtonStyle,
                background: btn.color,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>{btn.label}</span>
              <Icon size={18} style={{ flexShrink: 0 }} />
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
