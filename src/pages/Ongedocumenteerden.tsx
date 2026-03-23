import Layout from "@/components/Layout";
import { Phone, Mail, Lock, CheckCircle } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

const faqs = [
  { v: "Mag ik naar de huisarts zonder verblijfsvergunning?", a: "Ja, absoluut. Iedereen in Nederland heeft recht op medisch noodzakelijke zorg, ongeacht verblijfsstatus. Artsen mogen zorg niet weigeren omdat u geen papieren heeft." },
  { v: "Vertelt de huisarts iets aan de politie of overheid over mij?", a: "Nee. Wij hebben beroepsgeheim. Dit betekent dat wij niets mogen en zullen delen zonder uw toestemming — niet uw naam, niet uw situatie, niet waar u woont." },
  { v: "Ik heb geen BSN-nummer. Kan ik toch komen?", a: "Ja. Voor een huisartsenconsult heeft u geen BSN-nummer nodig. Kom gewoon langs of bel ons. Wij zorgen dat u geholpen wordt." },
  { v: "Ik ben zwanger maar heb geen papieren. Krijg ik zorg?", a: "Ja. Zwangerschap en bevalling worden 100% vergoed via het CAK. U kunt zich ook aanmelden bij Verloskundigenpraktijk De Poort, die bij ons in het pand gevestigd is." },
  { v: "Kan ik medicijnen krijgen?", a: "Ja, via een CAK-gecontracteerde apotheek. U betaalt maximaal €5 eigen bijdrage per medicijn. Als u dit niet kunt betalen, laat het ons weten — we zoeken een oplossing." },
  { v: "Ik spreek geen Nederlands of Engels. Kan ik toch komen?", a: "Ja. Wij spreken Nederlands, Engels, Twi, Yoruba, Turks en Arabisch. Is uw taal anders? Dan kunnen wij indien nodig gebruik maken van een tolkentelefoon." },
];

const Ongedocumenteerden = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="page-hero-label mb-3">ZORG VOOR IEDEREEN</p>
          <h1 className="page-hero-title">Geen papieren?<br />U heeft recht op zorg.</h1>
          <p className="page-hero-desc" style={{ maxWidth: "600px" }}>
            Bij Reigersbos Medical Center bent u welkom, ongeacht uw verblijfsstatus.
            Wij bieden medisch noodzakelijke zorg aan iedereen die dat nodig heeft —
            vertrouwelijk en zonder oordeel.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="tel:0207371426"
              className="flex items-center gap-2"
              style={{
                background: "hsl(222 47% 11%)", color: "white",
                borderRadius: "6px", padding: "12px 24px", fontSize: "14px", fontWeight: 600, textDecoration: "none",
              }}
            >
              <Phone className="w-4 h-4" />
              Bel ons: 020 737 14 26
            </a>
            <button
              onClick={() => openModal("inschrijven")}
              className="flex items-center gap-2"
              style={{
                background: "transparent", color: "hsl(222 47% 11%)",
                border: "1px solid hsl(214 32% 91%)", borderRadius: "6px",
                padding: "12px 24px", fontSize: "14px", fontWeight: 600, cursor: "pointer",
              }}
            >
              <CheckCircle className="w-4 h-4" />
              Schrijf u in
            </button>
          </div>
        </div>
      </section>

      {/* Beroepsgeheim banner */}
      <div style={{ borderBottom: "1px solid hsl(214 32% 91%)", background: "white" }}>
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="flex items-center justify-center gap-3 text-center">
            <Lock className="w-5 h-5 shrink-0" style={{ color: "hsl(174 43% 30%)" }} />
            <p style={{ fontSize: "14px", fontWeight: 500, color: "hsl(222 47% 11%)" }}>
              Wij hebben beroepsgeheim — wij delen uw gegevens of verblijfsstatus nooit zonder uw toestemming.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* Rechten */}
        <section>
          <p className="page-hero-label mb-2">UW RECHTEN</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "hsl(222 47% 11%)", marginBottom: "32px" }}>
            Iedereen heeft recht op medische zorg
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Wettelijk recht", desc: "Ook zonder verblijfsvergunning heeft u in Nederland recht op medisch noodzakelijke zorg. Dit is vastgelegd in de wet en in internationale verdragen." },
              { title: "Volledig vertrouwelijk", desc: "Zorgverleners hebben beroepsgeheim. Wij mogen niets delen over uw verblijfsstatus of waar u verblijft — ook niet met de overheid." },
              { title: "Geen oordeel", desc: "Bij ons wordt u behandeld met respect en waardigheid. Uw situatie is uw zaak. Wij zijn er om u te helpen, zonder vragen over uw papieren." },
            ].map(item => (
              <div key={item.title} style={{
                background: "white", border: "1px solid hsl(214 32% 91%)",
                borderRadius: "10px", padding: "24px", textAlign: "center",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}>
                <h3 style={{ fontWeight: 600, color: "hsl(222 47% 11%)", marginBottom: "8px", fontSize: "15px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "hsl(215 16% 47%)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Zorg */}
        <section>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-4">
              <p className="page-hero-label">WAT WIJ BIEDEN</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "hsl(222 47% 11%)" }}>
                Welke zorg kunt u bij ons krijgen?
              </h2>
              <p style={{ color: "hsl(215 16% 47%)", lineHeight: 1.7, fontSize: "14px" }}>
                Wij bieden alle medisch noodzakelijke zorg die onder het basispakket valt.
                U heeft geen verzekering of BSN-nummer nodig om bij ons langs te komen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Huisartsenconsult", "Bloedafname en onderzoek", "Doorverwijzing naar specialist",
                  "Begeleiding bij zwangerschap", "Fysiotherapie", "Chronische ziekten begeleiding", "Medicijnen via CAK-apotheek",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm" style={{ color: "hsl(222 47% 11%)" }}>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "hsl(174 43% 30%)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div style={{
                background: "white", border: "1px solid hsl(214 32% 91%)",
                borderRadius: "10px", padding: "24px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "hsl(222 47% 11%)", marginBottom: "12px" }}>
                  Hoe werkt de betaling?
                </h3>
                <p style={{ fontSize: "13px", color: "hsl(215 16% 47%)", marginBottom: "16px", lineHeight: 1.6 }}>
                  Wij hebben een contract met het CAK (Centraal Administratie Kantoor).
                  Dit betekent dat wij de kosten voor uw zorg bij het CAK kunnen declareren.
                </p>
                <div className="space-y-2">
                  {[
                    { label: "Huisartsenzorg", value: "Gratis voor u" },
                    { label: "Overige zorg", value: "Via CAK regeling" },
                    { label: "Zwangerschap & bevalling", value: "100% vergoed" },
                    { label: "Medicijnen", value: "Max. €5 eigen bijdrage" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm py-1.5" style={{ borderBottom: "1px solid hsl(214 32% 91%)" }}>
                      <span style={{ color: "hsl(215 16% 47%)" }}>{label}</span>
                      <span style={{ fontWeight: 600, color: "hsl(222 47% 11%)" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                background: "hsl(166 76% 97%)", border: "1px solid hsl(168 76% 78%)",
                borderRadius: "8px", padding: "14px",
              }}>
                <p style={{ fontSize: "13px", color: "hsl(222 47% 11%)", lineHeight: 1.6 }}>
                  💡 <strong>Tip:</strong> U heeft geen BSN-nummer nodig voor een huisartsenconsult. Kom gewoon langs of bel ons.
                </p>
              </div>

              <div style={{
                background: "white", border: "1px solid hsl(214 32% 91%)",
                borderRadius: "10px", padding: "20px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}>
                <h4 style={{ fontWeight: 700, color: "hsl(222 47% 11%)", marginBottom: "12px", fontSize: "14px" }}>Direct contact</h4>
                <div className="space-y-2">
                  <a href="tel:0207371426" className="flex items-center gap-2.5 text-sm" style={{ color: "hsl(215 16% 47%)", textDecoration: "none" }}>
                    <Phone size={16} style={{ color: "hsl(174 43% 30%)" }} />
                    020 737 14 26
                  </a>
                  <a href="mailto:Info@reigersbosmedicalcenter.nl" className="flex items-center gap-2.5 text-sm" style={{ color: "hsl(215 16% 47%)", textDecoration: "none" }}>
                    <Mail size={16} style={{ color: "hsl(174 43% 30%)" }} />
                    Info@reigersbosmedicalcenter.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <p className="page-hero-label mb-2">VEELGESTELDE VRAGEN</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "hsl(222 47% 11%)", marginBottom: "32px" }}>
            Veelgestelde vragen
          </h2>
          <div className="space-y-4">
            {faqs.map(({ v, a }) => (
              <div key={v} style={{
                background: "white", border: "1px solid hsl(214 32% 91%)",
                borderRadius: "10px", padding: "24px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}>
                <h3 style={{ fontWeight: 600, color: "hsl(222 47% 11%)", marginBottom: "8px", fontSize: "15px" }}>{v}</h3>
                <p style={{ fontSize: "14px", color: "hsl(215 16% 47%)", lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <div style={{
            background: "hsl(210 40% 98%)", border: "1px solid hsl(214 32% 91%)",
            borderRadius: "10px", padding: "48px 32px",
          }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "hsl(222 47% 11%)", marginBottom: "12px" }}>
              Wij staan voor u klaar
            </h2>
            <p style={{ color: "hsl(215 16% 47%)", maxWidth: "500px", margin: "0 auto 24px", fontSize: "14px" }}>
              Neem gerust contact met ons op. Wij helpen u graag — vertrouwelijk en zonder oordeel.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:0207371426" className="flex items-center gap-2" style={{
                background: "hsl(222 47% 11%)", color: "white",
                borderRadius: "6px", padding: "12px 24px", fontSize: "14px", fontWeight: 600, textDecoration: "none",
              }}>
                <Phone className="w-4 h-4" />
                020 737 14 26
              </a>
              <button onClick={() => openModal("inschrijven")} className="flex items-center gap-2" style={{
                background: "transparent", color: "hsl(222 47% 11%)",
                border: "1px solid hsl(214 32% 91%)", borderRadius: "6px",
                padding: "12px 24px", fontSize: "14px", fontWeight: 600, cursor: "pointer",
              }}>
                Schrijf u in →
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Ongedocumenteerden;
