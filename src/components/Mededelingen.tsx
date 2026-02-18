import { useState } from "react";
import { X } from "lucide-react";

const showMededeling = false;
const mededeling_tekst =
  "De praktijk is gesloten op vrijdag 28 februari wegens een teamvergadering. Voor spoed belt u 088 003 06 00.";

const Mededelingen = () => {
  const [dismissed, setDismissed] = useState(false);

  if (!showMededeling || dismissed) return null;

  return (
    <div
      className="mx-4 sm:mx-6 lg:mx-8 my-6 max-w-5xl lg:mx-auto"
      style={{
        backgroundColor: "#EFF6FF",
        borderLeft: "4px solid #1B4F8A",
        borderRadius: "8px",
        padding: "20px 24px",
      }}
    >
      <div className="flex gap-3 items-start">
        <span className="text-xl flex-shrink-0 mt-0.5">ℹ️</span>
        <div className="flex-1">
          <p className="font-bold text-sm mb-1" style={{ color: "#1B4F8A" }}>
            Mededeling
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#1e3a5f" }}>
            {mededeling_tekst}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 ml-2 p-1 rounded hover:bg-blue-100 transition-colors"
          aria-label="Sluiten"
          style={{ color: "#1B4F8A" }}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Mededelingen;
