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
            Herhaalrecept aanvragen
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginTop: "6px" }}>
            Vul uw gegevens in en wij verwerken uw aanvraag
          </p>

          {/* Info strip */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "20px" }}>
            {[
              { icon: User, text: "Uw gegevens" },
              { icon: Pill, text: "Medicatie" },
              { icon: ClipboardList, text: "Akkoord" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={13} color="white" />
                </div>
                <span style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{text}</span>
              </div>
            ))}
          </div>
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
              <p style={{ color: "#64748B", fontSize: "15px", maxWidth: "340px", margin: "0 auto 8px" }}>
                Uw herhaalrecept wordt zo spoedig mogelijk verwerkt.
              </p>
              <p style={{ color: "#64748B", fontSize: "14px", maxWidth: "340px", margin: "0 auto 32px" }}>
                U ontvangt een bevestiging per e-mail.
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
              <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: "24px" }}>

                {/* Uw gegevens */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#1B4F8A", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Uw gegevens
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "12px" }}>
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

                {/* Divider */}
                <div style={{ height: "1px", background: "#F1F5F9" }} />

                {/* Medicatie */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#1B4F8A", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Medicatie
                  </p>
                  <div>
                    <label className={labelClass}>Naam medicijn *</label>
                    <input required className={inputClass} value={form.medicijn} onChange={e => set("medicijn", e.target.value)} placeholder="Bijv. Metformine" />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
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

                {/* Divider */}
                <div style={{ height: "1px", background: "#F1F5F9" }} />

                {/* AVG */}
                <label style={{
                  display: "flex", alignItems: "flex-start", gap: "14px",
                  padding: "18px", borderRadius: "14px", cursor: "pointer",
                  border: `2px solid ${form.avg ? "#0EA5A0" : "#E2E8F0"}`,
                  background: form.avg ? "#F0FDFA" : "#F8FAFC",
                  transition: "all 0.2s",
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

                <div style={{
                  background: "#EFF6FF", border: "1px solid #BFDBFE",
                  borderRadius: "12px", padding: "14px",
                }}>
                  <p style={{ fontSize: "12px", color: "#1E40AF", lineHeight: 1.6, margin: 0 }}>
                    💊 <strong>Let op:</strong> Een herhaalrecept kunt u alleen aanvragen voor medicatie die u al gebruikt. Voor een nieuw medicijn dient u een afspraak te maken.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div style={{
                padding: "16px 32px 28px",
                display: "flex", gap: "12px", justifyContent: "space-between",
                borderTop: "1px solid #F1F5F9",
              }}>
                <button
                  type="button"
                  onClick={handleClose}
                  style={{
                    padding: "12px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: 600,
                    border: "2px solid #E2E8F0", background: "white", color: "#64748B",
                    cursor: "pointer",
                  }}
                >
                  Annuleren
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "12px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 700,
                    background: "linear-gradient(135deg, #1B4F8A, #0EA5A0)",
                    color: "white", border: "none", cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(27,79,138,0.25)",
                  }}
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

