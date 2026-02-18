import { Phone, AlertTriangle, X, ExternalLink } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

const SpoedModal = () => {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "spoed") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/70 backdrop-blur-sm" onClick={closeModal}>
      <div className="bg-card rounded-xl shadow-modal w-full max-w-md modal-animate" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-border bg-destructive rounded-t-xl">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive-foreground" />
            <h2 className="font-serif font-bold text-xl text-destructive-foreground">SPOED</h2>
          </div>
          <button onClick={closeModal} className="p-1.5 rounded-lg hover:bg-destructive-foreground/10 transition-colors">
            <X className="w-5 h-5 text-destructive-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-center">
            <p className="font-bold text-destructive text-lg">Bel 112 bij een levensbedreigende situatie!</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
              <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Tot 17:00 – Praktijk</p>
                <a href="tel:0207371426" className="text-primary font-bold text-lg hover:underline">020 737 14 26</a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
              <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Avond / Nacht / Weekend</p>
                <a href="tel:0880030600" className="text-primary font-bold text-lg hover:underline">088 003 06 00</a>
                <p className="text-xs text-muted-foreground mt-0.5">Huisartsenposten Amsterdam</p>
              </div>
            </div>

            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-semibold text-foreground mb-1">Huisartsenpost Amsterdam</p>
              <p className="text-sm text-muted-foreground">Hoogte Kadijk 143 C</p>
              <p className="text-sm text-muted-foreground">1018 BH Amsterdam</p>
              <a href="https://www.huisartsenpostenamsterdam.nl" target="_blank" rel="noopener noreferrer" className="text-sm text-primary flex items-center gap-1 mt-1.5 hover:underline">
                <ExternalLink className="w-3 h-3" />
                www.huisartsenpostenamsterdam.nl
              </a>
            </div>
          </div>

          <button onClick={closeModal} className="w-full py-2.5 border border-border rounded-lg text-foreground hover:bg-muted transition-colors font-medium">
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpoedModal;
