import Layout from "@/components/Layout";
import { Heart, Phone, MapPin, Clock, Shield } from "lucide-react";

const Ongedocumenteerden = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Reigersbos Medical Center</p>
        <h1 className="page-hero-title">Zorg zonder papieren</h1>
        <p className="page-hero-desc">Ook zonder verblijfsstatus of verzekering heeft u recht op medisch noodzakelijke zorg.</p>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container max-w-3xl">
        <p className="page-text">
          Iedereen heeft recht op medisch noodzakelijke zorg, ook als u geen verblijfsstatus of zorgverzekering
          heeft. Wij helpen u graag en zorgen ervoor dat u de zorg krijgt die u nodig heeft. U kunt bij ons terecht
          voor onder andere:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          {[
            "Huisartsenzorg",
            "Zwangerschapszorg",
            "Medicatie",
            "Doorverwijzing naar specialisten",
            "Geestelijke gezondheidszorg",
            "Hulp bij aanmelden bij zorgverleners",
          ].map(item => (
            <div key={item} className="flex items-center gap-2 bg-sand-deep border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body">
              <Heart className="w-4 h-4 text-primary flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="info-card">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h3 className="page-subheading">Vertrouwelijk en veilig</h3>
              <p className="text-sm text-muted-foreground font-body mt-1">
                Uw gegevens worden vertrouwelijk behandeld. Wij vragen alleen om informatie die nodig is voor
                uw zorg. U hoeft zich geen zorgen te maken over meldingsplicht: wij staan voor u als patiënt.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-foreground font-body">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Reigersbos 100 K, 1107 ES Amsterdam</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:0207371426" className="text-primary hover:underline">020 737 14 26</a></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Ma–Vr 08:00–17:00</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Ongedocumenteerden;
