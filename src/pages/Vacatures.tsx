import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronDown, CheckCircle, Upload } from "lucide-react";

const vacatures = [
  {
    title: "Doktersassistent(e)",
    type: "Fulltime/Parttime",
    location: "Reigersbos Winkelcentrum, Amsterdam",
    rol: "Baliewerkzaamheden, triageren, medische handelingen (bloeddrukmetingen, oren uitspuiten, wratten, wondverzorging, ECG, CRP), Medicom EPD, kwaliteitsprocessen.",
    jij: "Diploma doktersassistent, recente ervaring huisartsenpraktijk, Medicom ervaring, fulltime/parttime, NL+EN taal, in Amsterdam woonachtig.",
    opleiding: "MBO aanbevolen",
  },
  {
    title: "Praktijkondersteuner Huisartsenzorg Somatiek (POH-S)",
    type: "Full-time/Part-time",
    location: "Reigersbos Winkelcentrum, Amsterdam",
    rol: "Chronische zorg spreekuren (diabetes, COPD/Astma, CVRM, kwetsbare ouderen), leefstijlbegeleiding, medische handelingen, zorgcoördinatie, Medicom EPD, protocollen.",
    jij: "Diploma POH-S, ervaring huisartsenpraktijk, Medicom, NL+EN taal, Amsterdam.",
    opleiding: "HBO aanbevolen",
  },
];

const Vacatures = () => {
  const [openVac, setOpenVac] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    naam: "", email: "", telefoon: "", vacature: "", motivatie: null as File | null,
    cv: null as File | null, avg: false,
  });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <Layout>
      <section className="page-hero">
        <div className="page-container" style={{ textAlign: "center" }}>
          <p className="page-hero-label mb-3">Reigersbos Medical Center</p>
          <h1 className="page-hero-title">Vacatures</h1>
          <p className="page-hero-desc">Kom ons team versterken — wij zijn op zoek naar gedreven zorgprofessionals.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="page-heading">Actuele vacatures</h2>
          <p className="page-text">
            Hieronder vindt u de meest recente vacatures bij Reigersbos Medical Center. Neem gerust een
            kijkje en ontdek of er een functie is die aansluit bij uw vaardigheden en interesses.
          </p>

          <div className="mt-8 border border-border rounded-lg overflow-hidden">
            {vacatures.map((vac, idx) => (
              <div key={idx} className="border-b border-border last:border-b-0">
                <button
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  style={{ background: "transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "hsl(210 40% 98%)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                  onClick={() => setOpenVac(openVac === idx ? null : idx)}
                >
                  <div>
                    <p style={{ fontWeight: 600, color: "hsl(222 47% 11%)" }}>{vac.title}</p>
                    <p style={{ fontSize: "13px", color: "hsl(215 16% 47%)", marginTop: "2px" }}>{vac.type} · {vac.location}</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openVac === idx ? "rotate-180" : ""}`} style={{ color: "hsl(215 16% 47%)" }} />
                </button>
                {openVac === idx && (
                  <div className="px-5 pb-5 space-y-4">
                    <div>
                      <p style={{ fontSize: "13px", fontWeight: 600, color: "hsl(222 47% 11%)", marginBottom: "4px" }}>Over de rol:</p>
                      <p className="page-text">{vac.rol}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "13px", fontWeight: 600, color: "hsl(222 47% 11%)", marginBottom: "4px" }}>Over jou:</p>
                      <p className="page-text">{vac.jij}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "13px", fontWeight: 600, color: "hsl(222 47% 11%)", marginBottom: "4px" }}>Opleiding:</p>
                      <p className="page-text">{vac.opleiding}</p>
                    </div>
                    <p className="page-text">
                      <strong>Solliciteren:</strong>{" "}
                      <a href="mailto:info@reigersbosmedicalcenter.nl" style={{ color: "hsl(174 43% 30%)" }} className="hover:underline">
                        info@reigersbosmedicalcenter.nl
                      </a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="page-heading">Stages</h2>
            <p className="page-text">
              Ben jij op zoek naar een uitdagende stageplaats als doktersassistent BBL? Dan ben je bij ons
              aan het juiste adres! Als erkend leerbedrijf zijn wij altijd op zoek naar gemotiveerde
              stagiaires die onze praktijk komen versterken.
            </p>
            <p className="page-text">
              Als stagiaire draai je mee in ons team en assisteer je onze huisartsen bij het uitvoeren van
              verschillende medische handelingen. Daarnaast heb je ook veel contact met patiënten en leer je
              hoe je hen op een vriendelijke en professionele manier te woord staat.
            </p>
          </div>

          <div className="mt-10 rounded-lg p-6 border border-border" style={{ background: "hsl(210 40% 98%)" }}>
            <h3 style={{ fontWeight: 700, fontSize: "18px", color: "hsl(222 47% 11%)", marginBottom: "20px" }}>Sollicitatieformulier</h3>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-14 h-14 mx-auto mb-3" style={{ color: "hsl(174 43% 30%)" }} />
                <h4 style={{ fontWeight: 700, fontSize: "16px", color: "hsl(222 47% 11%)", marginBottom: "8px" }}>Sollicitatie ontvangen!</h4>
                <p style={{ color: "hsl(215 16% 47%)", fontSize: "14px" }}>Wij nemen zo spoedig mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Naam", key: "naam" },
                    { label: "E-mailadres", key: "email", type: "email" },
                    { label: "Telefoonnummer", key: "telefoon" },
                  ].map(({ label, key, type }) => (
                    <div key={key}>
                      <label className="block text-sm font-medium mb-1" style={{ color: "hsl(222 47% 11%)" }}>{label} <span style={{ color: "hsl(0 72% 51%)" }}>*</span></label>
                      <input required type={type || "text"} className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: "hsl(214 32% 91%)", background: "white" }} value={(form as any)[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: "hsl(222 47% 11%)" }}>Vacature <span style={{ color: "hsl(0 72% 51%)" }}>*</span></label>
                    <select required className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: "hsl(214 32% 91%)", background: "white" }} value={form.vacature} onChange={e => setForm({ ...form, vacature: e.target.value })}>
                      <option value="">Selecteer vacature</option>
                      <option>Doktersassistent(e)</option>
                      <option>POH-S</option>
                      <option>Stage doktersassistent(e)</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: "hsl(222 47% 11%)" }}>Motivatiebrief <span style={{ color: "hsl(0 72% 51%)" }}>*</span></label>
                    <label className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm cursor-pointer" style={{ borderColor: "hsl(214 32% 91%)", background: "white" }}>
                      <Upload className="w-4 h-4" style={{ color: "hsl(215 16% 47%)" }} />
                      <span style={{ color: "hsl(215 16% 47%)" }}>{form.motivatie ? form.motivatie.name : "Bestand kiezen..."}</span>
                      <input type="file" required className="hidden" onChange={e => setForm({ ...form, motivatie: e.target.files?.[0] || null })} />
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: "hsl(222 47% 11%)" }}>CV <span style={{ color: "hsl(0 72% 51%)" }}>*</span></label>
                    <label className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm cursor-pointer" style={{ borderColor: "hsl(214 32% 91%)", background: "white" }}>
                      <Upload className="w-4 h-4" style={{ color: "hsl(215 16% 47%)" }} />
                      <span style={{ color: "hsl(215 16% 47%)" }}>{form.cv ? form.cv.name : "Bestand kiezen..."}</span>
                      <input type="file" required className="hidden" onChange={e => setForm({ ...form, cv: e.target.files?.[0] || null })} />
                    </label>
                  </div>
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" required checked={form.avg} onChange={e => setForm({ ...form, avg: e.target.checked })} className="mt-0.5" style={{ accentColor: "hsl(174 43% 30%)" }} />
                  <span style={{ fontSize: "13px", color: "hsl(215 16% 47%)" }}>Ik ga akkoord met de privacyverklaring (AVG) <span style={{ color: "hsl(0 72% 51%)" }}>*</span></span>
                </label>
                <button type="submit" style={{
                  background: "hsl(222 47% 11%)", color: "white", border: "none",
                  borderRadius: "6px", padding: "10px 20px", fontSize: "14px", fontWeight: 600, cursor: "pointer",
                }}>
                  Sollicitatie versturen
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vacatures;
