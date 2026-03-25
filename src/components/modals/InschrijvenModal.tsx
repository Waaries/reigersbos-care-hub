import { useState } from "react";
import { X, CheckCircle, User, MapPin, Phone, Shield, Pill, ChevronRight } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

type Step = 1 | 2 | 3 | 4;

const steps = [
  { id: 1, label: "Persoonlijk", icon: User },
  { id: 2, label: "Adres", icon: MapPin },
  { id: 3, label: "Medisch", icon: Pill },
  { id: 4, label: "Akkoord", icon: Shield },
];

const InschrijvenModal = () => {
  const { activeModal, closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    voornaam: "", tussenvoegsel: "", achternaam: "",
    geslacht: "", geboortedatum: "",
    adres: "", postcode: "", woonplaats: "",
    email: "", telefoon: "",
    verzekering: "", bsn: "", polisnummer: "",
    apotheek: "", vorigeHuisarts: "",
    lsp: "", dossieroverdracht: false, avg: false,
  });

  if (activeModal !== "inschrijven") return null;

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
            Inschrijven als patiënt
          </h2>

          {/* Step indicator */}
          {!submitted && (
            <div className="flex items-center gap-2 mt-5">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = step === s.id;
                const isDone = step > s.id;
                return (
                  <div key={s.id} className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{
                          background: isActive ? "white" : isDone ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)",
                        }}
                      >
                        <Icon size={14} style={{ color: isActive ? "hsl(var(--primary))" : "white" }} />
                      </div>
                      <span
                        className="text-xs whitespace-nowrap"
                        style={{
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "white" : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-6 h-px flex-shrink-0" style={{ background: "rgba(255,255,255,0.2)" }} />
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
            <div className="py-14 px-8 text-center">
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 bg-accent-light border-2 border-accent"
              >
                <CheckCircle size={36} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Aanvraag ontvangen!
              </h3>
              <p className="text-muted-foreground text-sm max-w-[340px] mx-auto mb-8">
                Wij nemen zo spoedig mogelijk contact met u op om uw inschrijving te bevestigen.
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
              <div className="p-7 flex flex-col gap-5">

                {/* STEP 1: Persoonlijk */}
                {step === 1 && (
                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-3">
                      <div>
                        <label className={labelClass}>Voornaam *</label>
                        <input required className={inputClass} value={form.voornaam} onChange={e => set("voornaam", e.target.value)} placeholder="Jan" />
                      </div>
                      <div style={{ minWidth: "100px" }}>
                        <label className={labelClass}>Tussenvoegsel</label>
                        <input className={inputClass} value={form.tussenvoegsel} onChange={e => set("tussenvoegsel", e.target.value)} placeholder="van de" />
                      </div>
                      <div>
                        <label className={labelClass}>Achternaam *</label>
                        <input required className={inputClass} value={form.achternaam} onChange={e => set("achternaam", e.target.value)} placeholder="Berg" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Geslacht *</label>
                      <div className="flex gap-3">
                        {["Man", "Vrouw", "Anders"].map(g => (
                          <label key={g} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md cursor-pointer text-sm font-medium transition-all duration-200" style={{
                            border: `1px solid ${form.geslacht === g ? "hsl(var(--accent))" : "hsl(var(--border))"}`,
                            background: form.geslacht === g ? "hsl(var(--accent-light))" : "hsl(var(--secondary))",
                            color: form.geslacht === g ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                          }}>
                            <input type="radio" name="geslacht" value={g} required checked={form.geslacht === g} onChange={e => set("geslacht", e.target.value)} style={{ display: "none" }} />
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
                        <input required type="tel" className={inputClass} value={form.telefoon} onChange={e => set("telefoon", e.target.value)} placeholder="06 12345678" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>E-mailadres *</label>
                      <input required type="email" className={inputClass} value={form.email} onChange={e => set("email", e.target.value)} placeholder="jan@email.nl" />
                    </div>
                  </div>
                )}

                {/* STEP 2: Adres */}
                {step === 2 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className={labelClass}>Straat en huisnummer *</label>
                      <input required className={inputClass} value={form.adres} onChange={e => set("adres", e.target.value)} placeholder="Voorbeeldstraat 12" />
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] gap-3">
                      <div>
                        <label className={labelClass}>Postcode *</label>
                        <input required className={inputClass} value={form.postcode} onChange={e => set("postcode", e.target.value)} placeholder="1234 AB" />
                      </div>
                      <div>
                        <label className={labelClass}>Woonplaats *</label>
                        <input required className={inputClass} value={form.woonplaats} onChange={e => set("woonplaats", e.target.value)} placeholder="Amsterdam" />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Medisch */}
                {step === 3 && (
                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>Zorgverzekeraar *</label>
                        <input required className={inputClass} value={form.verzekering} onChange={e => set("verzekering", e.target.value)} placeholder="CZ, VGZ, Menzis..." />
                      </div>
                      <div>
                        <label className={labelClass}>Polisnummer</label>
                        <input className={inputClass} value={form.polisnummer} onChange={e => set("polisnummer", e.target.value)} placeholder="123456789" />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>BSN Nummer *</label>
                      <input required maxLength={9} className={inputClass} value={form.bsn} onChange={e => set("bsn", e.target.value.replace(/\D/g, ""))} placeholder="9 cijfers" />
                    </div>
                    <div>
                      <label className={labelClass}>Voorkeur apotheek</label>
                      <input className={inputClass} value={form.apotheek} onChange={e => set("apotheek", e.target.value)} placeholder="Naam apotheek" />
                    </div>
                    <div>
                      <label className={labelClass}>Vorige huisarts *</label>
                      <input required className={inputClass} value={form.vorigeHuisarts} onChange={e => set("vorigeHuisarts", e.target.value)} placeholder="Naam huisarts of praktijk" />
                    </div>
                    <div>
                      <label className={labelClass}>LSP Toestemming *</label>
                      <p className="text-xs text-muted-foreground mb-2.5">
                        Geeft u toestemming om uw medische gegevens via het Landelijk Schakel Punt te delen?
                      </p>
                      <div className="flex gap-3">
                        {["Ja", "Nee"].map(v => (
                          <label key={v} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md cursor-pointer text-sm font-medium transition-all duration-200" style={{
                            border: `1px solid ${form.lsp === v ? "hsl(var(--accent))" : "hsl(var(--border))"}`,
                            background: form.lsp === v ? "hsl(var(--accent-light))" : "hsl(var(--secondary))",
                            color: form.lsp === v ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                          }}>
                            <input type="radio" name="lsp" value={v} required checked={form.lsp === v} onChange={e => set("lsp", e.target.value)} style={{ display: "none" }} />
                            {v}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Akkoord */}
                {step === 4 && (
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-foreground mb-2">
                      Bijna klaar! Lees de onderstaande verklaringen door en geef uw akkoord.
                    </p>

                    {[
                      {
                        key: "dossieroverdracht",
                        checked: form.dossieroverdracht,
                        label: "Akkoord dossieroverdracht",
                        desc: "Ik geef toestemming aan Reigersbos Medical Center om mijn medisch dossier op te vragen bij mijn vorige huisarts.",
                      },
                      {
                        key: "avg",
                        checked: form.avg,
                        label: "Privacyverklaring (AVG)",
                        desc: "Ik heb de privacyverklaring gelezen en ga akkoord met de verwerking van mijn persoonsgegevens conform de AVG.",
                      },
                    ].map(({ key, checked, label, desc }) => (
                      <label key={key} className="flex items-start gap-4 p-4 rounded-md cursor-pointer transition-all duration-200" style={{
                        border: `1px solid ${checked ? "hsl(var(--accent))" : "hsl(var(--border))"}`,
                        background: checked ? "hsl(var(--accent-light))" : "hsl(var(--secondary))",
                      }}>
                        <div className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center transition-all duration-200 mt-0.5" style={{
                          border: `1px solid ${checked ? "hsl(var(--accent))" : "hsl(var(--border))"}`,
                          background: checked ? "hsl(var(--accent))" : "white",
                        }}>
                          {checked && <CheckCircle size={12} color="white" />}
                        </div>
                        <input type="checkbox" required checked={checked} onChange={e => set(key, e.target.checked)} style={{ display: "none" }} />
                        <div>
                          <p className="font-semibold text-foreground text-sm mb-1">{label} *</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                        </div>
                      </label>
                    ))}

                    <div className="bg-accent-light border border-accent/20 rounded-md p-4">
                      <p className="text-xs text-accent leading-relaxed m-0">
                        <strong>Let op:</strong> Inschrijving is pas definitief na bevestiging door de praktijk.
                        Wij nemen binnen 3 werkdagen contact met u op.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer buttons */}
              <div className="px-7 pb-7 pt-4 flex gap-3 justify-between border-t border-border">
                <button
                  type="button"
                  onClick={() => step > 1 ? setStep((step - 1) as Step) : handleClose()}
                  className="px-6 py-3 rounded-md text-sm font-semibold border border-border bg-white text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-secondary"
                >
                  {step === 1 ? "Annuleren" : "← Terug"}
                </button>

                {step < 4 ? (
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
                    className="px-7 py-3 rounded-md text-sm font-bold bg-accent text-accent-foreground border-none cursor-pointer flex items-center gap-2 hover:opacity-90 transition-opacity"
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

export default InschrijvenModal;
