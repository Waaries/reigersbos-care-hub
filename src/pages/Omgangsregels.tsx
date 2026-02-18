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
    <section className="page-section">
      <div className="page-container">
        <h2 className="page-heading">Omgangsregels voor u en voor ons</h2>
        <ul className="space-y-4 mt-4">
          {regels.map((regel) => (
            <li key={regel} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/80 text-base">{regel}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default Omgangsregels;
