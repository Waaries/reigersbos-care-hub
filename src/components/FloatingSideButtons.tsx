import { useState } from "react";
import { useModal } from "@/contexts/ModalContext";
import InschrijvenModal from "./modals/InschrijvenModal";
import HerhaalreceptModal from "./modals/HerhaalreceptModal";
import SpoedModal from "./modals/SpoedModal";
import FysiotherapieModal from "./modals/FysiotherapieModal";
import DietetiekModal from "./modals/DietetiekModal";

const FloatingSideButtons = () => {
  const { openModal } = useModal();

  const buttons = [
    {
      label: "Inschrijven",
      modal: "inschrijven" as const,
      color: "bg-primary hover:bg-primary/90 text-primary-foreground",
    },
    {
      label: "Herhaalrecept",
      modal: "herhaalrecept" as const,
      color: "bg-accent hover:bg-accent/90 text-accent-foreground",
    },
    {
      label: "SPOED",
      modal: "spoed" as const,
      color: "bg-destructive hover:bg-destructive/90 text-destructive-foreground",
    },
    {
      label: "Afspraak Fysiotherapie",
      modal: "fysiotherapie" as const,
      color: "bg-primary hover:bg-primary/90 text-primary-foreground",
    },
    {
      label: "Afspraak Diëtetiek",
      modal: "dietetiek" as const,
      color: "bg-accent hover:bg-accent/90 text-accent-foreground",
    },
  ];

  return (
    <>
      {/* Side Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5">
        {buttons.map((btn) => (
          <button
            key={btn.modal}
            onClick={() => openModal(btn.modal)}
            className={`${btn.color} text-xs font-semibold py-3 px-2 rounded-l-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-x-0.5`}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", letterSpacing: "0.05em" }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Modals */}
      <InschrijvenModal />
      <HerhaalreceptModal />
      <SpoedModal />
      <FysiotherapieModal />
      <DietetiekModal />
    </>
  );
};

export default FloatingSideButtons;
