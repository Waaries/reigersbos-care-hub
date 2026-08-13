import { useModal } from "@/contexts/ModalContext";
import { AlertTriangle } from "lucide-react";
import InschrijvenModal from "./modals/InschrijvenModal";
import HerhaalreceptModal from "./modals/HerhaalreceptModal";
import SpoedModal from "./modals/SpoedModal";
import FysiotherapieModal from "./modals/FysiotherapieModal";

const FloatingSideButtons = () => {
  const { openModal } = useModal();

  return (
    <>
      <button
        onClick={() => openModal("spoed")}
        aria-label="Spoed"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex items-center gap-2 whitespace-nowrap"
        style={{
          background: "hsl(var(--destructive))",
          color: "#FFFFFF",
          borderRadius: "8px 0 0 8px",
          padding: "10px 14px",
          fontSize: "13px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <span>Spoed</span>
        <AlertTriangle size={16} style={{ flexShrink: 0 }} />
      </button>

      <InschrijvenModal />
      <HerhaalreceptModal />
      <SpoedModal />
      <FysiotherapieModal />
    </>
  );
};

export default FloatingSideButtons;
