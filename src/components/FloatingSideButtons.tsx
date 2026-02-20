import { useModal } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import InschrijvenModal from "./modals/InschrijvenModal";
import HerhaalreceptModal from "./modals/HerhaalreceptModal";
import SpoedModal from "./modals/SpoedModal";
import FysiotherapieModal from "./modals/FysiotherapieModal";

const FloatingSideButtons = () => {
  const { openModal } = useModal();
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const buttons = [
    {
      labelKey: "btn.inschrijven" as const,
      modal: "inschrijven" as const,
      color: "bg-primary hover:bg-primary/90 text-primary-foreground",
    },
    {
      labelKey: "btn.herhaalrecept" as const,
      modal: "herhaalrecept" as const,
      color: "bg-accent hover:bg-accent/90 text-accent-foreground",
    },
    {
      labelKey: "btn.spoed" as const,
      modal: "spoed" as const,
      color: "bg-destructive hover:bg-destructive/90 text-destructive-foreground",
    },
    {
      labelKey: "btn.fysiotherapie" as const,
      modal: "fysiotherapie" as const,
      color: "bg-primary hover:bg-primary/90 text-primary-foreground",
    },
  ];

  return (
    <>
      {/* Side Buttons — right side normally, left side for RTL */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5 ${
          isRTL ? "left-0" : "right-0"
        }`}
      >
        {buttons.map((btn) => (
          <button
            key={btn.modal}
            onClick={() => openModal(btn.modal)}
            className={`${btn.color} text-xs font-semibold py-3 px-2 shadow-lg transition-all duration-200 hover:shadow-xl ${
              isRTL
                ? "rounded-r-lg hover:translate-x-0.5"
                : "rounded-l-lg hover:-translate-x-0.5"
            }`}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", letterSpacing: "0.05em" }}
          >
            {t(btn.labelKey)}
          </button>
        ))}
        {/* Ongedocumenteerden link button */}
        <button
          onClick={() => navigate("/ongedocumenteerden")}
          className={`text-xs font-semibold py-3 px-2 shadow-lg transition-all duration-200 hover:shadow-xl text-white ${
            isRTL
              ? "rounded-r-lg hover:translate-x-0.5"
              : "rounded-l-lg hover:-translate-x-0.5"
          }`}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            letterSpacing: "0.05em",
            background: "#1B4F8A",
          }}
        >
          <span className="flex items-center gap-1">
            <Heart className="w-3 h-3" />
            Ongedocumenteerden
          </span>
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
