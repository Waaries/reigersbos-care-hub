import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

const DietetiekModal = () => {
  const { activeModal, closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ voornaam: "", achternaam: "", email: "", telefoon: "", avg: false });

  if (activeModal !== "dietetiek") return null;

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleClose = () => { setSubmitted(false); closeModal(); };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm" onClick={handleClose}>
      <div className="bg-card rounded-xl shadow-modal w-full max-w-md modal-animate" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-serif font-bold text-xl text-primary">Afspraak Diëtetiek</h2>
          <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors"><X className="w-5 h-5 text-muted-foreground" /></button>
        </div>
        {submitted ? (
          <div className="p-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-2 text-foreground">Aanvraag ontvangen!</h3>
            <p className="text-muted-foreground">Wij nemen zo spoedig mogelijk contact met u op.</p>
            <button onClick={handleClose} className="mt-6 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">Sluiten</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {[
              { label: "Voornaam", key: "voornaam", required: true },
              { label: "Achternaam", key: "achternaam", required: true },
              { label: "E-mailadres", key: "email", required: true, type: "email" },
              { label: "Telefoonnummer", key: "telefoon", required: true },
            ].map(({ label, key, required, type }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-foreground mb-1">{label} {required && <span className="text-destructive">*</span>}</label>
                <input required={required} type={type || "text"} className="w-full border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" value={(form as any)[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} />
              </div>
            ))}
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" required checked={form.avg} onChange={e => setForm({ ...form, avg: e.target.checked })} className="accent-primary mt-0.5" />
              <span className="text-sm text-muted-foreground">Ik ga akkoord met de privacyverklaring (AVG) <span className="text-destructive">*</span></span>
            </label>
            <div className="flex gap-3 pt-2">
              <button type="submit" className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">Versturen</button>
              <button type="button" onClick={handleClose} className="px-5 py-2.5 border border-border rounded-lg text-foreground hover:bg-muted transition-colors">Annuleren</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default DietetiekModal;
