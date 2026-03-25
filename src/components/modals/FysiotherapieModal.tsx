import { useState } from "react";
import { X, CheckCircle, User, MapPin, Shield, ChevronRight } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

type Step = 1 | 2 | 3;

const FysiotherapieModal = () => {
  const { activeModal, closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    voornaam: "", achternaam: "", geslacht: "", geboortedatum: "",
    telefoon: "", email: "",
    adres: "", postcode: "", woonplaats: "",
    verzekering: "", bsn: "", klacht: "", opmerking: "", avg: false,
  });

  if (activeModal !== "fysiotherapie") return null;

  const set = (key: string, value: string | boolean) =>
    setForm(f => ({ ...f, [key]: value }));

  const handleClose = () => { setSubmitted(false); setStep(1); closeModal(); };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = `
    w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground
    focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
    placeholder:text-muted-foreground transition-all duration-200
  `;
  const labelClass = "block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide";

  const steps = [
    { id: 1, label: "Persoonlijk", icon: User },
    { id: 2, label: "Adres", icon: MapPin },
    { id: 3, label: "Klacht & Akkoord", icon: Shield },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.5)", backdropFilter: "blur(4px)" }}
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-lg overflow-hidden flex flex-col rounded-[10px] border border-border"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)", maxHeight: "90vh" }}
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
          <h2 className="text-2xl font-bold text-white m-0 mb-5">
            Afspraak Fysiotherapie
          </h2>

          {!submitted && (
            <div className="flex items-center gap-2">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = step === s.id;
                const isDone = step > s.id;
                return (
                  <div key={s.id} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isActive ? "white" : isDone ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)",
                        }}
                      >
                        <Icon size={13} style={{ color: isActive ? "hsl(var(--primary))" : "white" }} />
                      </div>
                      <span
                        className="text-xs font-semibold transition-all duration-300"
                        style={{ color: isActive ? "white" : "rgba(255,255,255,0.5)" }}
                      >
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <ChevronRight size={12} style={{ color: "rgba(255,255,255,0.3)" }} />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 px-8 text-center">
              <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 bg-accent-light border-2 border-accent">
                <CheckCircle size={36} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Aanvraag ontvangen!
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Wij nemen zo spoedig mogelijk contact met u op voor uw fysiotherapie afspraak.
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
              <div className="p-7 flex flex-col gap-4">

                {step === 1 && (<>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Voornaam *</label>
                      <input required className={inputClass} value={form.voornaam} onChange={e => set("voornaam", e.target.value)} placeholder="Jan" />
                    </div>
                    <div>
                      <label className={labelClass}>Achternaam *</label>
                      <input required className={inputClass} value={form.achternaam} onChange={e => set("achternaam", e.target.value)} placeholder="Berg" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Geslacht *</label>
                    <div className="flex gap-2">
                      {["Man", "Vrouw", "Anders"].map(g => (
                        <label key={g} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-md cursor-pointer text-sm font-medium transition-all duration-200" style={{
                          border: `1px solid ${form.geslacht === g ? "hsl(var(--accent))" : "hsl(var(--border))"}`,
                          background: form.geslacht === g ? "hsl(var(--accent-light))" : "hsl(var(--secondary))",
                          color: form.geslacht === g ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                        }}>
                          <input type="radio" required name="geslacht-fysio" value={g} checked={form.geslacht === g} onChange={e => set("geslacht", e.target.value)} style={{ display: "none" }} />
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Geboortedatum *</label>
                      <input required type="date" className={inputClass} value={form.geboortedatum} onChange={e => set("geboortedatum", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelClass}>Telefoonnummer *</label>
                      <input required className={inputClass} value={form.telefoon} onChange={e => set("telefoon", e.target.value)} placeholder="06 12345678" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>E-mailadres *</label>
                    <input required type="email" className={inputClass} value={form.email} onChange={e => set("email", e.target.value)} placeholder="jan@email.nl" />
                  </div>
                </>)}

                {step === 2 && (<>
                  <div>
                    <label className={labelClass}>Straat en huisnummer *</label>
                    <input required className={inputClass} value={form.adres} onChange={e => set("adres", e.target.value)} placeholder="Voorbeeldstraat 12" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Postcode *</label>
                      <input required className={inputClass} value={form.postcode} onChange={e => set("postcode", e.target.value)} placeholder="1234 AB" />
                    </div>
                    <div>
                      <label className={labelClass}>Woonplaats *</label>
                      <input required className={inputClass} value={form.woonplaats} onChange={e => set("woonplaats", e.target.value)} placeholder="Amsterdam" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Zorgverzekeraar *</label>
                      <input required className={inputClass} value={form.verzekering} onChange={e => set("verzekering", e.target.value)} placeholder="CZ, VGZ, Menzis..." />
                    </div>
                    <div>
                      <label className={labelClass}>BSN Nummer *</label>
                      <input required className={inputClass} value={form.bsn} onChange={e => set("bsn", e.target.value.replace(/\D/g, ""))} placeholder="9 cijfers" />
                    </div>
                  </div>
                </>)}

                {step === 3 && (<>
                  <div>
                    <label className={labelClass}>Uw klacht / reden van bezoek *</label>
                    <textarea required className={inputClass} value={form.klacht} onChange={e => set("klacht", e.target.value)} placeholder="Beschrijf kort uw klacht..." rows={3} style={{ resize: "none" }} />
                  </div>
                  <div>
                    <label className={labelClass}>Opmerkingen</label>
                    <textarea className={inputClass} value={form.opmerking} onChange={e => set("opmerking", e.target.value)} placeholder="Bijv. voorkeur dag/tijd..." rows={2} style={{ resize: "none" }} />
                  </div>
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
                      🏃 <strong>Sessies van 30 minuten.</strong> Wij nemen binnen 2 werkdagen contact op om een passende tijd in te plannen.
                    </p>
                  </div>
                </>)}
              </div>

              <div className="px-7 pb-7 pt-4 flex gap-3 justify-between border-t border-border">
                <button
                  type="button"
                  onClick={() => step > 1 ? setStep((step - 1) as Step) : handleClose()}
                  className="px-6 py-3 rounded-md text-sm font-semibold border border-border bg-white text-muted-foreground cursor-pointer hover:bg-secondary transition-all"
                >
                  {step === 1 ? "Annuleren" : "← Terug"}
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step + 1) as Step)}
                    className="px-7 py-3 rounded-md text-sm font-bold bg-primary text-primary-foreground border-none cursor-pointer flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Volgende <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-md text-sm font-bold bg-accent text-accent-foreground border-none cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    Versturen ✓
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FysiotherapieModal;
