import { useState } from "react";
import { X, CheckCircle, User, Pill, ClipboardList } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

const HerhaalreceptModal = () => {
  const { activeModal, closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    voornaam: "", tussenvoegsel: "", achternaam: "",
    geboortedatum: "", telefoon: "", email: "",
    medicijn: "", dosering: "", aantal: "", opmerking: "", avg: false,
  });

  if (activeModal !== "herhaalrecept") return null;

  const set = (key: string, value: string | boolean) =>
    setForm(f => ({ ...f, [key]: value }));

  const handleClose = () => { setSubmitted(false); closeModal(); };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = `
    w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground
    focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
    placeholder:text-muted-foreground transition-all duration-200
  `;
  const labelClass = "block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.5)", backdropFilter: "blur(4px)" }}
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[92vh] overflow-hidden flex flex-col rounded-[10px] border border-border"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary p-7 relative flex-shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-none transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <X size={16} color="white" />
          </button>

          <p className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
            Reigersbos Medical Center
          </p>
          <h2 className="text-2xl font-bold text-white m-0">
            Herhaalrecept aanvragen
          </h2>
          <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
            Vul uw gegevens in en wij verwerken uw aanvraag
          </p>

          {/* Info strip */}
          <div className="flex items-center gap-5 mt-5">
            {[
              { icon: User, text: "Uw gegevens" },
              { icon: Pill, text: "Medicatie" },
              { icon: ClipboardList, text: "Akkoord" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <Icon size={13} color="white" />
                </div>
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-14 px-8 text-center">
              <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 bg-accent-light border-2 border-accent">
                <CheckCircle size={36} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Aanvraag ontvangen!
              </h3>
              <p className="text-muted-foreground text-sm max-w-[340px] mx-auto mb-2">
                Uw herhaalrecept wordt zo spoedig mogelijk verwerkt.
              </p>
              <p className="text-muted-foreground text-sm max-w-[340px] mx-auto mb-8">
                U ontvangt een bevestiging per e-mail.
              </p>
              <button
                onClick={handleClose}
                className="bg-primary text-primary-foreground border-none rounded-md px-8 py-3 text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity"
              >
                Sluiten
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="p-7 flex flex-col gap-6">

                {/* Uw gegevens */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider m-0">
                    Uw gegevens
                  </p>
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-3">
                    <div>
                      <label className={labelClass}>Voornaam *</label>
                      <input required className={inputClass} value={form.voornaam} onChange={e => set("voornaam", e.target.value)} placeholder="Jan" />
                    </div>
                    <div style={{ minWidth: "100px" }}>
                      <label className={labelClass}>Tussenvoegsel</label>
                      <input className={inputClass} value={form.tussenvoegsel} onChange={e => set("tussenvoegsel", e.target.value)} placeholder="van" />
                    </div>
                    <div>
                      <label className={labelClass}>Achternaam *</label>
                      <input required className={inputClass} value={form.achternaam} onChange={e => set("achternaam", e.target.value)} placeholder="Berg" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Geboortedatum *</label>
                      <input required type="date" className={inputClass} value={form.geboortedatum} onChange={e => set("geboortedatum", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Telefoonnummer *</label>
                      <input required type="tel" className={inputClass} value={form.telefoon} onChange={e => set("telefoon", e.target.value)} placeholder="06 12345678" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>E-mailadres *</label>
                    <input required type="email" className={inputClass} value={form.email} onChange={e => set("email", e.target.value)} placeholder="jan@email.nl" />
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* Medicatie */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider m-0">
                    Medicatie
                  </p>
                  <div>
                    <label className={labelClass}>Naam medicijn *</label>
                    <input required className={inputClass} value={form.medicijn} onChange={e => set("medicijn", e.target.value)} placeholder="Bijv. Metformine" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Dosering *</label>
                      <input required className={inputClass} value={form.dosering} onChange={e => set("dosering", e.target.value)} placeholder="Bijv. 500mg" />
                    </div>
                    <div>
                      <label className={labelClass}>Aantal *</label>
                      <input required className={inputClass} value={form.aantal} onChange={e => set("aantal", e.target.value)} placeholder="1" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Opmerkingen</label>
                    <textarea
                      className={inputClass}
                      value={form.opmerking}
                      onChange={e => set("opmerking", e.target.value)}
                      placeholder="Eventuele opmerkingen..."
                      rows={3}
                      style={{ resize: "none" }}
                    />
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* AVG */}
                <label className="flex items-start gap-3.5 p-4 rounded-md cursor-pointer transition-all duration-200" style={{
                  border: `1px solid ${form.avg ? "hsl(var(--accent))" : "hsl(var(--border))"}`,
                  background: form.avg ? "hsl(var(--accent-light))" : "hsl(var(--secondary))",
                }}>
                  <div className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center transition-all duration-200 mt-0.5" style={{
                    border: `1px solid ${form.avg ? "hsl(var(--accent))" : "hsl(var(--border))"}`,
                    background: form.avg ? "hsl(var(--accent))" : "white",
                  }}>
                    {form.avg && <CheckCircle size={12} color="white" />}
                  </div>
                  <input type="checkbox" required checked={form.avg} onChange={e => set("avg", e.target.checked)} style={{ display: "none" }} />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Privacyverklaring (AVG) *</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Ik ga akkoord met de verwerking van mijn persoonsgegevens conform de AVG.</p>
                  </div>
                </label>

                <div className="bg-accent-light border border-accent/20 rounded-md p-3.5">
                  <p className="text-xs text-accent leading-relaxed m-0">
                    💊 <strong>Let op:</strong> Een herhaalrecept kunt u alleen aanvragen voor medicatie die u al gebruikt. Voor een nieuw medicijn dient u een afspraak te maken.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-7 pb-7 pt-4 flex gap-3 justify-between border-t border-border">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 rounded-md text-sm font-semibold border border-border bg-white text-muted-foreground cursor-pointer hover:bg-secondary transition-all"
                >
                  Annuleren
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 rounded-md text-sm font-bold bg-accent text-accent-foreground border-none cursor-pointer hover:opacity-90 transition-opacity"
                >
                  Aanvraag versturen ✓
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default HerhaalreceptModal;
