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
      <section className="page-section">
        <div className="page-container">
          <h1 className="page-heading">Actuele vacatures</h1>
          <p className="page-text">
            Hieronder vindt u de meest recente vacatures bij Reigersbos Medical Center. Neem gerust een
            kijkje en ontdek of er een functie is die aansluit bij uw vaardigheden en interesses. Wij zijn
            altijd op zoek naar gekwalificeerde en gemotiveerde kandidaten die ons team willen versterken en
            willen bijdragen aan de zorg die wij bieden aan onze patiënten. Solliciteer vandaag nog en wie
            weet wordt u de nieuwste aanwinst voor ons groeiende team!
          </p>

          {/* Vacature Accordions */}
          <div className="mt-8 border border-border rounded-xl overflow-hidden">
            {vacatures.map((vac, idx) => (
              <div key={idx} className="border-b border-border last:border-b-0">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted transition-colors"
                  onClick={() => setOpenVac(openVac === idx ? null : idx)}
                >
                  <div>
                    <p className="font-semibold text-foreground">{vac.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{vac.type} · {vac.location}</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openVac === idx ? "rotate-180" : ""}`} />
                </button>
                {openVac === idx && (
                  <div className="px-5 pb-5 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Over de rol:</p>
                      <p className="text-sm text-foreground/80">{vac.rol}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Over jou:</p>
                      <p className="text-sm text-foreground/80">{vac.jij}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Opleiding:</p>
                      <p className="text-sm text-foreground/80">{vac.opleiding}</p>
                    </div>
                    <p className="text-sm text-foreground/80">
                      <strong>Solliciteren:</strong>{" "}
                      <a href="mailto:info@reigersbosmedicalcenter.nl" className="text-primary hover:underline">
                        info@reigersbosmedicalcenter.nl
                      </a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stages */}
          <div className="mt-12">
            <h1 className="page-heading">Stages</h1>
            <p className="page-text">
              Ben jij op zoek naar een uitdagende stageplaats als doktersassistent BBL? Dan ben je bij ons
              aan het juiste adres! Als erkend leerbedrijf zijn wij altijd op zoek naar gemotiveerde
              stagiaires die onze praktijk komen versterken. Bij ons leer je alles over het vak van
              doktersassistent en krijg je de kans om praktijkervaring op te doen in een professionele en
              dynamische omgeving.
            </p>
            <p className="page-text">
              Als stagiaire draai je mee in ons team en assisteer je onze huisartsen bij het uitvoeren van
              verschillende medische handelingen. Daarnaast heb je ook veel contact met patiënten en leer je
              hoe je hen op een vriendelijke en professionele manier te woord staat.
            </p>
          </div>

          {/* Sollicitatieformulier */}
          <div className="mt-10 bg-secondary rounded-xl p-6 border border-border">
            <h3 className="font-serif font-bold text-xl text-primary mb-5">Sollicitatieformulier</h3>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-3" />
                <h4 className="font-serif font-bold text-lg mb-2 text-foreground">Sollicitatie ontvangen!</h4>
                <p className="text-muted-foreground text-sm">Wij nemen zo spoedig mogelijk contact met u op.</p>
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
                      <label className="block text-sm font-medium text-foreground mb-1">{label} <span className="text-destructive">*</span></label>
                      <input required type={type || "text"} className="w-full border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-card" value={(form as any)[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Vacature <span className="text-destructive">*</span></label>
                    <select required className="w-full border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-card" value={form.vacature} onChange={e => setForm({ ...form, vacature: e.target.value })}>
                      <option value="">Selecteer vacature</option>
                      <option>Doktersassistent(e)</option>
                      <option>POH-S</option>
                      <option>Stage doktersassistent(e)</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Motivatiebrief <span className="text-destructive">*</span></label>
                    <label className="flex items-center gap-2 border border-input rounded-lg px-3 py-2 text-sm cursor-pointer hover:bg-muted transition-colors bg-card">
                      <Upload className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{form.motivatie ? form.motivatie.name : "Bestand kiezen..."}</span>
                      <input type="file" required className="hidden" onChange={e => setForm({ ...form, motivatie: e.target.files?.[0] || null })} />
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">CV <span className="text-destructive">*</span></label>
                    <label className="flex items-center gap-2 border border-input rounded-lg px-3 py-2 text-sm cursor-pointer hover:bg-muted transition-colors bg-card">
                      <Upload className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{form.cv ? form.cv.name : "Bestand kiezen..."}</span>
                      <input type="file" required className="hidden" onChange={e => setForm({ ...form, cv: e.target.files?.[0] || null })} />
                    </label>
                  </div>
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" required checked={form.avg} onChange={e => setForm({ ...form, avg: e.target.checked })} className="accent-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">Ik ga akkoord met de privacyverklaring (AVG) <span className="text-destructive">*</span></span>
                </label>
                <button type="submit" className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
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
