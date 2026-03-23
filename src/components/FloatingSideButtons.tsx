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
      labelKey: "btn.inschrijven" as const,
      action: () => openModal("inschrijven"),
      color: "#1B4F8A",
      icon: UserPlus,
    },
    {
      labelKey: "btn.herhaalrecept" as const,
      action: () => openModal("herhaalrecept"),
      color: "#0EA5A0",
      icon: Pill,
    },
    {
      labelKey: "btn.spoed" as const,
      action: () => openModal("spoed"),
      color: "#DC2626",
      icon: AlertTriangle,
    },
    {
      labelKey: "btn.fysiotherapie" as const,
      action: () => openModal("fysiotherapie"),
      color: "#1B4F8A",
      icon: Activity,
    },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          overflow: "visible",
        }}
      >
        {buttons.map((btn) => {
          const Icon = btn.icon;
          return (
            <button
              key={btn.labelKey}
              onClick={btn.action}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: btn.color,
                color: "white",
                border: "none",
                borderRadius: "12px 0 0 12px",
                padding: "10px 12px",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
                writingMode: "horizontal-tb",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                marginLeft: "auto",
                width: "44px",
                overflow: "hidden",
                justifyContent: "flex-start",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.width = "auto";
                e.currentTarget.style.paddingRight = "16px";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.width = "44px";
                e.currentTarget.style.paddingRight = "12px";
              }}
            >
              <Icon size={18} style={{ flexShrink: 0 }} />
              <span>{t(btn.labelKey)}</span>
            </button>
          );
        })}
        {/* Ongedocumenteerden link button */}
        <button
          onClick={() => navigate("/ongedocumenteerden")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#1B4F8A",
            color: "white",
            border: "none",
            borderRadius: "12px 0 0 12px",
            padding: "10px 12px",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            writingMode: "horizontal-tb",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            marginLeft: "auto",
            width: "44px",
            overflow: "hidden",
            justifyContent: "flex-start",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.width = "auto";
            e.currentTarget.style.paddingRight = "16px";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.width = "44px";
            e.currentTarget.style.paddingRight = "12px";
          }}
        >
          <Heart size={18} style={{ flexShrink: 0 }} />
          <span>Zonder papieren</span>
        </button>
      </div>

      {/* Modals */}
      <InschrijvenModal />
      <HerhaalreceptModal />
      <SpoedModal />
      <FysiotherapieModal />
    </>
  );
};

export default FloatingSideButtons;
