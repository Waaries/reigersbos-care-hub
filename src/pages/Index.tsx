import Layout from "@/components/Layout";
import { useModal } from "@/contexts/ModalContext";

const Index = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)",
        }}
      >
        {/* Large circle top-left */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        {/* Medium circle bottom-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(14,165,160,0.15)",
          }}
        />
        {/* Small circle center-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "40%",
            right: "15%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-widest mb-4">
            Welkom op onze website
          </p>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-5 leading-tight">
            Reigersbos Medical Center
          </h1>
          <p className="text-primary-foreground/90 text-xl sm:text-2xl italic mb-10">
            "Because the greatest wealth is health"
          </p>
          <button
            onClick={() => openModal("inschrijven")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold text-lg rounded-xl hover:bg-primary-foreground/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Schrijf je nu in
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section bg-background">
        <div className="page-container">
          <h2 className="page-heading">Wie zijn wij! Reigersbos Medical Center</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="page-text">
                Welkom bij Reigersbos Medical Center, een kleinschalige huisartspraktijk gelegen aan
                de Reigersbos 100K op de 3e etage. Wij streven naar persoonlijke en kwalitatieve zorg
                en werken nauw samen met onze diëtist en fysiotherapeuten om u de beste zorg te bieden.
              </p>
              <p className="page-text">
                Bij ons kunt u terecht voor diverse medische diensten, waaronder algemene
                huisartsenzorg, bloedafname, preventieve zorg en chronische zorg. Ons team van
                zorgverleners staat voor u klaar om u te helpen bij uw gezondheidsbehoeften en vragen.
              </p>
              <p className="page-text">
                We begrijpen dat elke patiënt uniek is en daarom vinden wij het belangrijk om
                persoonlijke zorg te bieden die is afgestemd op uw individuele behoeften. Onze diëtist
                en fysiotherapeuten werken nauw samen met onze huisartsen om u te helpen uw
                gezondheidsdoelen te bereiken en u te ondersteunen bij het beheersen van uw aandoening.
              </p>
            </div>
            <div className="space-y-4">
              <p className="page-text">
                Wij vinden het belangrijk dat onze patiënten zich op hun gemak voelen bij ons en
                daarom streven we naar een warme en gastvrije sfeer. Onze praktijk is gemakkelijk
                bereikbaar en er is voldoende parkeergelegenheid. Het metrostation Reigersbos ligt op
                enkele minuten loopafstand.
              </p>
              <p className="page-text">
                Onze huisartsenpraktijk is open voor nieuwe patiënten en wij verwelkomen u graag.
                Wilt u liever eerst een kennismakingsgesprek? Dat is ook mogelijk. Neem contact met
                ons op via 020 737 14 26, onze website of door een inschrijfformulier op te halen op
                de praktijk.
              </p>
              <p className="page-text">
                Ons team staat iedere werkdag van 08.00 uur tot 17.00 uur klaar om u de zorg te
                verlenen die u nodig heeft. We kijken ernaar uit om u te ontmoeten en u te helpen bij
                uw gezondheidsbehoeften.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => openModal("inschrijven")}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-card"
                >
                  Schrijf u in als patiënt
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="bg-secondary py-10">
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🩺", label: "Huisarts" },
              { icon: "🥗", label: "Diëtetiek" },
              { icon: "🏃", label: "Fysiotherapie" },
              { icon: "💊", label: "Chronische Zorg" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-4 bg-card rounded-xl border border-border shadow-card">
                <span className="text-4xl">{icon}</span>
                <span className="font-semibold text-foreground text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
