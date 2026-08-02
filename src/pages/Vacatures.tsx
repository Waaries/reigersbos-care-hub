import { useState } from "react";
import Layout from "@/components/Layout";
import { Briefcase, CheckCircle, ChevronDown } from "lucide-react";

const vacatures = [
  {
    id: 1,
    title: "Doktersassistente (24-32 uur)",
    type: "Parttime / Fulltime",
    location: "Amsterdam, Reigersbos",
    description: "Wij zijn op zoek naar een enthousiaste doktersassistente die het team komt versterken. Je bent het eerste aanspreekpunt voor patiënten en ondersteunt de huisartsen bij dagelijkse werkzaamheden.",
    requirements: [
      "Afgeronde opleiding tot doktersassistent",
      "Ervaring in de eerstelijns gezondheidszorg is een pré",
      "Goede communicatieve vaardigheden",
      "Zelfstandig en klantgericht werken",
    ],
    aanbod: [
      "Een warm en professioneel team",
      "Marktconform salaris",
      "Ruimte voor persoonlijke ontwikkeling",
    ],
  },
];

const Vacatures = () => {
  const [expanded, setExpanded] = useState<number | null>(1);
  const [form, setForm] = useState({ naam: "", email: "", telefoon: "", motivatie: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <Layout>
      <section className="page-hero">
        <div className="page-container" style={{ textAlign: "center" }}>
          <p className="page-hero-label mb-3">Over ons</p>
          <h1 className="page-hero-title">Vacatures</h1>
          <p className="page-hero-desc">Werken bij Reigersbos Medical Center? Bekijk onze openstaande vacatures.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container max-w-4xl">
          <div className="space-y-5">
            {vacatures.map((vac) => (
              <div key={vac.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-subtle">
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h2 className="font-display font-bold text-foreground text-lg">{vac.title}</h2>
                      <p className="text-sm text-muted-foreground font-body">{vac.type} · {vac.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground font-body mt-3">{vac.description}</p>
                  <button
                    onClick={() => setExpanded(expanded === vac.id ? null : vac.id)}
                    className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Meer informatie
                    <ChevronDown className={`w-4 h-4 transition-transform ${expanded === vac.id ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {expanded === vac.id && (
                  <div className="border-t border-border px-6 py-6 bg-sand-deep">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-display font-bold text-foreground text-sm mb-3">Wat vragen wij</h3>
                        <ul className="space-y-2">
                          {vac.requirements.map(req => (
                            <li key={req} className="flex items-start gap-2 text-sm text-foreground font-body">
                              <CheckCircle className="w-4 h-4 flex-shrink-0 text-primary mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-sm mb-3">Wat bieden wij</h3>
                        <ul className="space-y-2">
                          {vac.aanbod.map(a => (
                            <li key={a} className="flex items-start gap-2 text-sm text-foreground font-body">
                              <CheckCircle className="w-4 h-4 flex-shrink-0 text-primary mt-0.5" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl">
            <h3 className="font-display font-bold text-foreground text-lg mb-5">Solliciteren</h3>
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 mx-auto mb-3 text-primary" />
                <h4 className="font-display font-bold text-foreground text-base mb-2">Sollicitatie ontvangen!</h4>
                <p className="text-muted-foreground">Wij nemen zo spoedig mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">Naam <span className="text-red-600">*</span></label>
                    <input required className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" value={form.naam} onChange={e => setForm({ ...form, naam: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">E-mail <span className="text-red-600">*</span></label>
                    <input required type="email" className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Telefoonnummer</label>
                  <input className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" value={form.telefoon} onChange={e => setForm({ ...form, telefoon: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Motivatie <span className="text-red-600">*</span></label>
                  <textarea required rows={5} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" value={form.motivatie} onChange={e => setForm({ ...form, motivatie: e.target.value })} />
                </div>
                <button type="submit" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
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
