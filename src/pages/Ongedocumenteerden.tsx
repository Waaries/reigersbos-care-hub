import Layout from "@/components/Layout";
import { Phone, Mail, Shield, Heart, Lock, CheckCircle } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

const faqs = [
  {
    v: "Mag ik naar de huisarts zonder verblijfsvergunning?",
    a: "Ja, absoluut. Iedereen in Nederland heeft recht op medisch noodzakelijke zorg, ongeacht verblijfsstatus. Artsen mogen zorg niet weigeren omdat u geen papieren heeft.",
  },
  {
    v: "Vertelt de huisarts iets aan de politie of overheid over mij?",
    a: "Nee. Wij hebben beroepsgeheim. Dit betekent dat wij niets mogen en zullen delen zonder uw toestemming — niet uw naam, niet uw situatie, niet waar u woont.",
  },
  {
    v: "Ik heb geen BSN-nummer. Kan ik toch komen?",
    a: "Ja. Voor een huisartsenconsult heeft u geen BSN-nummer nodig. Kom gewoon langs of bel ons. Wij zorgen dat u geholpen wordt.",
  },
  {
    v: "Ik ben zwanger maar heb geen papieren. Krijg ik zorg?",
    a: "Ja. Zwangerschap en bevalling worden 100% vergoed via het CAK. U kunt zich ook aanmelden bij Verloskundigenpraktijk De Poort, die bij ons in het pand gevestigd is.",
  },
  {
    v: "Kan ik medicijnen krijgen?",
    a: "Ja, via een CAK-gecontracteerde apotheek. U betaalt maximaal €5 eigen bijdrage per medicijn. Als u dit niet kunt betalen, laat het ons weten — we zoeken een oplossing.",
  },
  {
    v: "Ik spreek geen Nederlands of Engels. Kan ik toch komen?",
    a: "Ja. Wij spreken Nederlands, Engels, Twi, Yoruba, Turks en Arabisch. Is uw taal anders? Dan kunnen wij indien nodig gebruik maken van een tolkentelefoon.",
  },
];

const Ongedocumenteerden = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      {/* Hero */}
      <div
        className="relative py-20 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #7C3AED 100%)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-4 h-4" />
              ZORG VOOR IEDEREEN
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Geen papieren?<br />U heeft recht op zorg.
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Bij Reigersbos Medical Center bent u welkom, ongeacht uw verblijfsstatus.
            Wij bieden medisch noodzakelijke zorg aan iedereen die dat nodig heeft —
            vertrouwelijk en zonder oordeel.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0207371426"
              className="flex items-center gap-2 bg-white text-primary font-bold rounded-full px-7 py-3.5 text-sm shadow-lg hover:shadow-xl transition-shadow"
            >
              <Phone className="w-5 h-5" />
              Bel ons: 020 737 14 26
            </a>
            <button
              onClick={() => openModal("inschrijven")}
              className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white font-bold rounded-full px-7 py-3.5 text-sm border-2 border-white/30 hover:bg-white/25 transition-colors cursor-pointer"
            >
              <CheckCircle className="w-5 h-5" />
              Schrijf u in
            </button>
          </div>
        </div>
      </div>

      {/* Belangrijkste boodschap */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="flex items-center justify-center gap-3 text-center">
            <Lock className="w-5 h-5 text-accent shrink-0" />
            <p className="text-sm font-medium text-foreground">
              Wij hebben beroepsgeheim — wij delen uw gegevens of verblijfsstatus nooit zonder uw toestemming.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-16">

          {/* Heeft u recht op zorg */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">UW RECHTEN</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Iedereen heeft recht op medische zorg
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚖️",
                  title: "Wettelijk recht",
                  desc: "Ook zonder verblijfsvergunning heeft u in Nederland recht op medisch noodzakelijke zorg. Dit is vastgelegd in de wet en in internationale verdragen.",
                },
                {
                  icon: "🔒",
                  title: "Volledig vertrouwelijk",
                  desc: "Zorgverleners hebben beroepsgeheim. Wij mogen niets delen over uw verblijfsstatus of waar u verblijft — ook niet met de overheid.",
                },
                {
                  icon: "💙",
                  title: "Geen oordeel",
                  desc: "Bij ons wordt u behandeld met respect en waardigheid. Uw situatie is uw zaak. Wij zijn er om u te helpen, zonder vragen over uw papieren.",
                },
              ].map(item => (
                <div key={item.title} className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm">
                  <p className="text-3xl mb-3">{item.icon}</p>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Welke zorg */}
          <section>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">WAT WIJ BIEDEN</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Welke zorg kunt u bij ons krijgen?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wij bieden alle medisch noodzakelijke zorg die onder het basispakket valt.
                  U heeft geen verzekering of BSN-nummer nodig om bij ons langs te komen.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Huisartsenconsult",
                    "Bloedafname en onderzoek",
                    "Doorverwijzing naar specialist",
                    "Begeleiding bij zwangerschap",
                    "Fysiotherapie",
                    "Chronische ziekten begeleiding",
                    "Medicijnen via CAK-apotheek",
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CAK uitleg */}
              <div className="md:col-span-2 space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💳</span>
                    <h3 className="text-lg font-bold text-foreground">
                      Hoe werkt de betaling?
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wij hebben een contract met het CAK (Centraal Administratie Kantoor).
                    Dit betekent dat wij de kosten voor uw zorg bij het CAK kunnen declareren
                    als u de rekening niet kunt betalen.
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: "Huisartsenzorg", value: "Gratis voor u" },
                      { label: "Overige zorg", value: "Via CAK regeling" },
                      { label: "Zwangerschap & bevalling", value: "100% vergoed" },
                      { label: "Medicijnen", value: "Max. €5 eigen bijdrage" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between text-sm py-1.5 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-semibold text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                  <p className="text-sm text-foreground leading-relaxed">
                    💡 <strong>Tip:</strong> U heeft geen BSN-nummer nodig voor een huisartsenconsult.
                    Kom gewoon langs of bel ons. Wij helpen u verder.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                  <h4 className="font-bold text-foreground mb-3">
                    Direct contact
                  </h4>
                  <div className="space-y-2">
                    <a href="tel:0207371426" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Phone size={16} className="text-accent" />
                      020 737 14 26
                    </a>
                    <a href="mailto:Info@reigersbosmedicalcenter.nl" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Mail size={16} className="text-accent" />
                      Info@reigersbosmedicalcenter.nl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Veelgestelde vragen */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">VEELGESTELDE VRAGEN</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Veelgestelde vragen
            </h2>
            <div className="space-y-4">
              {faqs.map(({ v, a }) => (
                <div key={v} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">
                    {v}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA onderaan */}
          <section className="text-center py-8">
            <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #7C3AED 100%)" }}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Wij staan voor u klaar
              </h2>
              <p className="text-white/85 max-w-xl mx-auto mb-6">
                Neem gerust contact met ons op. Wij helpen u graag — vertrouwelijk en zonder oordeel.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:0207371426"
                  className="flex items-center gap-2 bg-white text-primary font-bold rounded-full px-7 py-3.5 text-sm shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  020 737 14 26
                </a>
                <button
                  onClick={() => openModal("inschrijven")}
                  className="flex items-center gap-2 bg-white/15 text-white font-bold rounded-full px-7 py-3.5 text-sm border-2 border-white/30 hover:bg-white/25 transition-colors cursor-pointer"
                >
                  Schrijf u in →
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Ongedocumenteerden;
