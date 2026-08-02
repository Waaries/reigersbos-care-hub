import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";

const regels = [
  "Wij helpen u zo snel mogelijk",
  "Spoedgevallen gaan voor, graag uw begrip",
  "Wij gaan hier respectvol met elkaar om",
  "Met uw medewerking kunnen wij u zo goed mogelijk helpen",
  "Aanwijzingen van het personeel worden opgevolgd",
  "Ook in noodsituaties luisteren wij naar elkaar",
  "Agressief gedrag accepteren wij niet",
  "Bij wapenbezit, geweld, drugs en diefstal doen wij aangifte bij de politie",
];

const Omgangsregels = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Huisartspraktijk</p>
        <h1 className="page-hero-title">Omgangsregels</h1>
        <p className="page-hero-desc">Samen zorgen we voor een fijne en veilige omgeving voor iedereen.</p>
      </div>
    </section>
    <section className="page-section">
      <div className="page-container max-w-3xl">
        <p className="page-text">Om een prettige en veilige omgeving te waarborgen voor zowel patiënten als medewerkers, hanteren wij de volgende omgangsregels:</p>
        <ul className="space-y-4 mt-4">
          {regels.map(regel => (
            <li key={regel} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
              <span className="text-base text-foreground font-body">{regel}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);
export default Omgangsregels;
