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
    w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-gray-800
    focus:outline-none focus:ring-2 focus:ring-[#0EA5A0]/30 focus:border-[#0EA5A0]
    placeholder:text-gray-400 transition-all duration-200
  `;
  const labelClass = "block text-xs font-semibold text-[#1B4F8A] mb-1.5 uppercase tracking-wide";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(13,59,110,0.6)", backdropFilter: "blur(8px)" }}
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[92vh] overflow-hidden flex flex-col"
        style={{ borderRadius: "24px", boxShadow: "0 32px 80px rgba(27,79,138,0.25)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)",
            padding: "28px 32px 24px",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <button
            onClick={handleClose}
            style={{
              position: "absolute", top: "20px", right: "20px",
              background: "rgba(255,255,255,0.15)", border: "none",
              borderRadius: "50%", width: "36px", height: "36px",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <X size={16} color="white" />
          </button>

          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
            Reigersbos Medical Center
          </p>
          <h2 style={{ color: "white", fontSize: "24px", fontWeight: 800, margin: 0 }}>
            Inschrijven als patiënt
          </h2>

          {/* Step indicator */}
          {!submitted && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "24px" }}>
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = step === s.id;
                const isDone = step > s.id;
                return (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{
                        width: "32px", height: "32px", borderRadius: "50%",
                        background: isActive ? "white" : isDone ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s",
                        flexShrink: 0,
                      }}>
                        <Icon size={14} color={isActive ? "#1B4F8A" : "white"} />
                      </div>
                      <span style={{
                        fontSize: "12px", fontWeight: isActive ? 700 : 500,
                        color: isActive ? "white" : "rgba(255,255,255,0.6)",
                        whiteSpace: "nowrap",
                      }}>
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ width: "24px", height: "1px", background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Body */}
        <div style={{ overflowY: "auto", flex: 1 }}>
          {submitted ? (
            <div style={{ padding: "60px 32px", textAlign: "center" }}>
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: "linear-gradient(135deg, #0EA5A0, #059669)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "0 8px 24px rgba(14,165,160,0.3)",
              }}>
                <CheckCircle size={36} color="white" />
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#1B4F8A", marginBottom: "8px" }}>
                Aanvraag ontvangen!
              </h3>
              <p style={{ color: "#64748B", fontSize: "15px", maxWidth: "340px", margin: "0 auto 32px" }}>
                Wij nemen zo spoedig mogelijk contact met u op om uw inschrijving te bevestigen.
              </p>
              <button
                onClick={handleClose}
                style={{
                  background: "linear-gradient(135deg, #1B4F8A, #0EA5A0)",
                  color: "white", border: "none", borderRadius: "12px",
                  padding: "12px 32px", fontSize: "15px", fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Sluiten
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ padding: "28px 32px" }}>

                {/* STEP 1: Persoonlijk */}
                {step === 1 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "12px" }}>
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
                      <div style={{ display: "flex", gap: "12px" }}>
                        {["Man", "Vrouw", "Anders"].map(g => (
                          <label key={g} style={{
                            flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                            gap: "8px", padding: "12px", borderRadius: "12px", cursor: "pointer",
                            border: `2px solid ${form.geslacht === g ? "#0EA5A0" : "#E2E8F0"}`,
                            background: form.geslacht === g ? "#F0FDFA" : "#F8FAFC",
                            transition: "all 0.2s", fontSize: "14px", fontWeight: 500,
                            color: form.geslacht === g ? "#0EA5A0" : "#64748B",
                          }}>
                            <input
                              type="radio" name="geslacht" value={g} required
                              checked={form.geslacht === g}
                              onChange={e => set("geslacht", e.target.value)}
                              style={{ display: "none" }}
                            />
                            {g}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
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
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div>
                      <label className={labelClass}>Straat en huisnummer *</label>
                      <input required className={inputClass} value={form.adres} onChange={e => set("adres", e.target.value)} placeholder="Voorbeeldstraat 12" />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "12px" }}>
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
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
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
                      <p style={{ fontSize: "12px", color: "#64748B", marginBottom: "10px" }}>
                        Geeft u toestemming om uw medische gegevens via het Landelijk Schakel Punt te delen?
                      </p>
                      <div style={{ display: "flex", gap: "12px" }}>
                        {["Ja", "Nee"].map(v => (
                          <label key={v} style={{
                            flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                            gap: "8px", padding: "12px", borderRadius: "12px", cursor: "pointer",
                            border: `2px solid ${form.lsp === v ? "#0EA5A0" : "#E2E8F0"}`,
                            background: form.lsp === v ? "#F0FDFA" : "#F8FAFC",
                            transition: "all 0.2s", fontSize: "14px", fontWeight: 500,
                            color: form.lsp === v ? "#0EA5A0" : "#64748B",
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
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <p style={{ fontSize: "15px", color: "#374151", marginBottom: "8px" }}>
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
                      <label key={key} style={{
                        display: "flex", alignItems: "flex-start", gap: "16px",
                        padding: "20px", borderRadius: "16px", cursor: "pointer",
                        border: `2px solid ${checked ? "#0EA5A0" : "#E2E8F0"}`,
                        background: checked ? "#F0FDFA" : "#F8FAFC",
                        transition: "all 0.2s",
                      }}>
                        <div style={{
                          width: "24px", height: "24px", borderRadius: "8px", flexShrink: 0,
                          border: `2px solid ${checked ? "#0EA5A0" : "#CBD5E1"}`,
                          background: checked ? "#0EA5A0" : "white",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          transition: "all 0.2s", marginTop: "2px",
                        }}>
                          {checked && <CheckCircle size={14} color="white" />}
                        </div>
                        <input
                          type="checkbox" required checked={checked}
                          onChange={e => set(key, e.target.checked)}
                          style={{ display: "none" }}
                        />
                        <div>
                          <p style={{ fontWeight: 700, color: "#1B4F8A", fontSize: "14px", marginBottom: "4px" }}>{label} *</p>
                          <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6 }}>{desc}</p>
                        </div>
                      </label>
                    ))}

                    <div style={{
                      background: "#FFF7ED", border: "1px solid #FED7AA",
                      borderRadius: "12px", padding: "16px",
                    }}>
                      <p style={{ fontSize: "13px", color: "#92400E", lineHeight: 1.6 }}>
                        <strong>Let op:</strong> Inschrijving is pas definitief na bevestiging door de praktijk. 
                        Wij nemen binnen 3 werkdagen contact met u op.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer buttons */}
              <div style={{
                padding: "20px 32px 28px",
                display: "flex", gap: "12px", justifyContent: "space-between",
                borderTop: "1px solid #F1F5F9",
              }}>
                <button
                  type="button"
                  onClick={() => step > 1 ? setStep((step - 1) as Step) : handleClose()}
                  style={{
                    padding: "12px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: 600,
                    border: "2px solid #E2E8F0", background: "white", color: "#64748B",
                    cursor: "pointer", transition: "all 0.2s",
                  }}
                >
                  {step === 1 ? "Annuleren" : "← Terug"}
                </button>

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step + 1) as Step)}
                    style={{
                      padding: "12px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 700,
                      background: "linear-gradient(135deg, #1B4F8A, #0EA5A0)",
                      color: "white", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: "8px",
                      boxShadow: "0 4px 16px rgba(27,79,138,0.25)",
                      transition: "all 0.2s",
                    }}
                  >
                    Volgende <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    style={{
                      padding: "12px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 700,
                      background: "linear-gradient(135deg, #0EA5A0, #059669)",
                      color: "white", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: "8px",
                      boxShadow: "0 4px 16px rgba(14,165,160,0.3)",
                    }}
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
