import { useState } from "react";
import { X } from "lucide-react";

const showMededeling = false;
const mededeling_tekst =
  "De praktijk is gesloten op vrijdag 28 februari wegens een teamvergadering. Voor spoed belt u 088 003 06 00.";

const Mededelingen = () => {
  const [dismissed, setDismissed] = useState(false);

  if (!showMededeling || dismissed) return null;

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 my-6 max-w-5xl lg:mx-auto bg-sand-deep border-l-4 border-taupe rounded-lg px-6 py-5">
      <div className="flex gap-3 items-start">
        <span className="text-xl flex-shrink-0 mt-0.5">ℹ️</span>
        <div className="flex-1">
          <p className="font-bold text-sm mb-1 text-foreground">Mededeling</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{mededeling_tekst}</p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 ml-2 p-1 rounded hover:bg-taupe/20 transition-colors text-foreground"
          aria-label="Sluiten"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Mededelingen;
