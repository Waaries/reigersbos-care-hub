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

  const inputClass = `w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0EA5A0]/30 focus:border-[#0EA5A0] placeholder:text-gray-400 transition-all duration-200`;
  const labelClass = "block text-xs font-semibold text-[#1B4F8A] mb-1.5 uppercase tracking-wide";

  const steps = [
    { id: 1, label: "Persoonlijk", icon: User },
    { id: 2, label: "Adres", icon: MapPin },
    { id: 3, label: "Klacht & Akkoord", icon: Shield },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(13,59,110,0.6)", backdropFilter: "blur(8px)" }}
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-lg overflow-hidden flex flex-col"
        style={{ borderRadius: "24px", boxShadow: "0 32px 80px rgba(27,79,138,0.25)", maxHeight: "90vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #1B4F8A 0%, #0EA5A0 100%)",
          padding: "28px 32px 24px",
          position: "relative",
          flexShrink: 0,
        }}>
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

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "12px",
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <User size={20} color="white" />
            </div>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Reigersbos Medical Center
            </p>
          </div>

          <h2 style={{ color: "white", fontSize: "24px", fontWeight: 900, margin: "0 0 20px 0" }}>
            Afspraak Fysiotherapie
          </h2>

          {!submitted && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = step === s.id;
                const isDone = step > s.id;
                return (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "50%",
                        background: isDone ? "#10B981" : isActive ? "white" : "rgba(255,255,255,0.25)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s",
                      }}>
                        <Icon size={13} color={isActive ? "#1B4F8A" : "white"} />
                      </div>
                      <span style={{
                        fontSize: "11px", fontWeight: 600,
                        color: isActive ? "white" : "rgba(255,255,255,0.6)",
                        transition: "all 0.3s",
                      }}>
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <ChevronRight size={12} color="rgba(255,255,255,0.4)" />
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
            <div style={{ padding: "48px 32px", textAlign: "center" }}>
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: "#F0FDFA", border: "3px solid #99F6E4",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
              }}>
                <CheckCircle size={36} color="#0EA5A0" />
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#1B4F8A", marginBottom: "8px" }}>
                Aanvraag ontvangen!
              </h3>
              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6, marginBottom: "24px" }}>
                Wij nemen zo spoedig mogelijk contact met u op voor uw fysiotherapie afspraak.
              </p>
              <button
                onClick={handleClose}
                style={{
                  padding: "12px 32px", borderRadius: "12px", fontSize: "14px", fontWeight: 700,
                  background: "linear-gradient(135deg, #1B4F8A, #0EA5A0)", color: "white", border: "none", cursor: "pointer",
                }}
              >
                Sluiten
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: "16px" }}>

                {step === 1 && (<>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
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
                    <div style={{ display: "flex", gap: "8px" }}>
                      {["Man", "Vrouw", "Anders"].map(g => (
                        <label key={g} style={{
                          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                          gap: "6px", padding: "10px", borderRadius: "10px", cursor: "pointer",
                          border: `2px solid ${form.geslacht === g ? "#0EA5A0" : "#E2E8F0"}`,
                          background: form.geslacht === g ? "#F0FDFA" : "#F8FAFC",
                          fontSize: "13px", fontWeight: 600, color: form.geslacht === g ? "#0EA5A0" : "#64748B",
                          transition: "all 0.2s",
                        }}>
                          <input type="radio" required name="geslacht-fysio" value={g} checked={form.geslacht === g} onChange={e => set("geslacht", e.target.value)} style={{ display: "none" }} />
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
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label className={labelClass}>Postcode *</label>
                      <input required className={inputClass} value={form.postcode} onChange={e => set("postcode", e.target.value)} placeholder="1234 AB" />
                    </div>
                    <div>
                      <label className={labelClass}>Woonplaats *</label>
                      <input required className={inputClass} value={form.woonplaats} onChange={e => set("woonplaats", e.target.value)} placeholder="Amsterdam" />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
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
                  <label style={{
                    display: "flex", alignItems: "flex-start", gap: "14px",
                    padding: "18px", borderRadius: "14px", cursor: "pointer",
                    border: `2px solid ${form.avg ? "#0EA5A0" : "#E2E8F0"}`,
                    background: form.avg ? "#F0FDFA" : "#F8FAFC", transition: "all 0.2s",
                  }}>
                    <div style={{
                      width: "22px", height: "22px", borderRadius: "7px", flexShrink: 0,
                      border: `2px solid ${form.avg ? "#0EA5A0" : "#CBD5E1"}`,
                      background: form.avg ? "#0EA5A0" : "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s", marginTop: "1px",
                    }}>
                      {form.avg && <CheckCircle size={13} color="white" />}
                    </div>
                    <input type="checkbox" required checked={form.avg} onChange={e => set("avg", e.target.checked)} style={{ display: "none" }} />
                    <div>
                      <p style={{ fontWeight: 700, color: "#1B4F8A", fontSize: "13px", marginBottom: "3px" }}>Privacyverklaring (AVG) *</p>
                      <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.6 }}>Ik ga akkoord met de verwerking van mijn persoonsgegevens conform de AVG.</p>
                    </div>
                  </label>
                  <div style={{ background: "#F0FDFA", border: "1px solid #99F6E4", borderRadius: "12px", padding: "14px" }}>
                    <p style={{ fontSize: "12px", color: "#0F766E", lineHeight: 1.6, margin: 0 }}>
                      🏃 <strong>Sessies van 30 minuten.</strong> Wij nemen binnen 2 werkdagen contact op om een passende tijd in te plannen.
                    </p>
                  </div>
                </>)}
              </div>

              <div style={{ padding: "16px 32px 28px", display: "flex", gap: "12px", justifyContent: "space-between", borderTop: "1px solid #F1F5F9" }}>
                <button
                  type="button"
                  onClick={() => step > 1 ? setStep((step - 1) as Step) : handleClose()}
                  style={{
                    padding: "12px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: 600,
                    border: "2px solid #E2E8F0", background: "white", color: "#64748B", cursor: "pointer",
                  }}
                >
                  {step === 1 ? "Annuleren" : "← Terug"}
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step + 1) as Step)}
                    style={{
                      padding: "12px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 700,
                      background: "linear-gradient(135deg, #1B4F8A, #0EA5A0)", color: "white",
                      border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px",
                      boxShadow: "0 4px 16px rgba(27,79,138,0.25)",
                    }}
                  >
                    Volgende <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    style={{
                      padding: "12px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 700,
                      background: "linear-gradient(135deg, #0EA5A0, #059669)", color: "white",
                      border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(14,165,160,0.3)",
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

export default FysiotherapieModal;
