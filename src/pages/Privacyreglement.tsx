import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "Algemeen",
    content: `De Algemene Verordening Gegevensbescherming (AVG) en de Wet op de Geneeskundige Behandelingsovereenkomst (WGBO) regelen hoe wij omgaan met uw persoonsgegevens. Dit privacyreglement legt uit welke gegevens wij verwerken, waarom we dat doen en welke rechten u heeft.`,
  },
  {
    title: "Medisch centrum",
    content: `Reigersbos Medical Center verwerkt persoonsgegevens om goede medische zorg te kunnen verlenen. Wij gebruiken uw gegevens uitsluitend voor medische doeleinden en behandelen deze strikt vertrouwelijk.`,
  },
  {
    title: "De plichten van het medisch centrum",
    content: `Wij verwerken uw gegevens voor drie doeleinden: (1) het verlenen van goede medische zorg, (2) administratieve doeleinden en (3) wettelijke verplichtingen. Alle medewerkers zijn gebonden aan het medisch beroepsgeheim. Uw gegevens worden beveiligd opgeslagen en bewaard gedurende minimaal 20 jaar conform de WGBO.`,
  },
  {
    title: "Uw rechten als betrokkene",
    content: `U heeft de volgende rechten: (1) Recht op inzage in uw dossier, (2) Recht op correctie van onjuiste gegevens, (3) Recht op verwijdering van uw gegevens, (4) Recht op het toevoegen van een eigen verklaring, (5) Recht van verzet tegen verwerking, (6) Recht op dataportabiliteit. Voor uitoefening van uw rechten kunt u contact opnemen met de praktijk.`,
  },
  {
    title: "Toelichting op het aanvraagformulier",
    content: `Voor het uitoefenen van uw rechten kunt u een aanvraagformulier invullen bij de balie. Wij reageren binnen vier weken op uw verzoek. Ter verificatie van uw identiteit kan om een kopie van een geldig legitimatiebewijs worden gevraagd.`,
  },
  {
    title: "Verstrekking van uw persoonsgegevens aan derden",
    content: `Uw persoonsgegevens worden niet aan derden verstrekt zonder uw uitdrukkelijke toestemming, tenzij dit wettelijk verplicht is of noodzakelijk is voor uw medische behandeling.`,
  },
  {
    title: "Uitwisseling gegevens",
    content: `Wij wisselen gegevens uit via Medicom met de Huisartsenpost (HAP), uw apotheek en medisch specialisten, uitsluitend wanneer dit noodzakelijk is voor uw zorg en conform de geldende wet- en regelgeving.`,
  },
  {
    title: "Overdracht van uw dossier",
    content: `Bij overstap naar een andere huisarts draagt Reigersbos Medical Center uw dossier binnen 1 maand over aan uw nieuwe huisarts. Dit geschiedt per post of via beveiligde e-mail. U wordt hierover geïnformeerd.`,
  },
  {
    title: "Vraag of klacht",
    content: `Voor vragen of klachten over de verwerking van uw persoonsgegevens kunt u contact opnemen met onze praktijk via 020 737 14 26 of Info@reigersbosmedicalcenter.nl. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens via www.autoriteitpersoonsgegevens.nl.`,
  },
];

const Privacyreglement = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Layout>
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-heading">Privacyreglement</h2>

          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-secondary px-5 py-3 border-b border-border">
              <p className="font-semibold text-foreground text-sm">Privacyreglement van onze Medisch Centrum</p>
            </div>
            {sections.map((section, idx) => (
              <div key={idx} className="border-b border-border last:border-b-0">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted transition-colors"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  <span className="font-medium text-foreground">{section.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {open === idx && (
                  <div className="px-5 pb-5 text-sm text-foreground/80 leading-relaxed">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacyreglement;
