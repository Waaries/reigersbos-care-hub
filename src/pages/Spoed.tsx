import Layout from "@/components/Layout";
import { Phone, AlertTriangle, ExternalLink } from "lucide-react";

const Spoed = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container">
        <p className="page-hero-label mb-3">Spoedhulp</p>
        <h1 className="page-hero-title">Spoed</h1>
        <p className="page-hero-desc">
          Weet u waar u terecht kunt bij spoed? Hieronder vindt u per situatie het juiste nummer.
        </p>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container max-w-3xl space-y-6">
        {/* Block 1 */}
        <div
          style={{
            background: "#FEF2F2",
            border: "2px solid #DC2626",
            borderRadius: "10px",
            padding: "28px",
          }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <AlertTriangle size={20} style={{ color: "#DC2626" }} />
            <h2 className="text-2xl font-bold" style={{ color: "#0F172A", letterSpacing: "-0.025em" }}>
              Bel direct 112
            </h2>
          </div>
          <p className="mb-6" style={{ color: "#374151", lineHeight: 1.7 }}>
            Bij een levensbedreigende situatie, zoals ernstige benauwdheid, bewusteloosheid, een ongeval of tekenen van
            een beroerte of hartaanval.
          </p>
          <a
            href="tel:112"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto no-underline"
            style={{
              background: "#DC2626",
              color: "#FFFFFF",
              minHeight: "56px",
              borderRadius: "6px",
              padding: "12px 28px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            <Phone size={20} />
            Bel 112
          </a>
        </div>

        {/* Block 2 */}
        <div
          style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "10px",
            padding: "28px",
          }}
        >
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#0F172A", letterSpacing: "-0.025em" }}>
            Spoed tijdens openingstijden
          </h2>
          <p className="mb-6" style={{ color: "#374151", lineHeight: 1.7 }}>
            Maandag tot en met vrijdag van 08:00 tot 17:00 belt u de praktijk.
          </p>
          <a
            href="tel:0207371426"
            className="inline-flex items-center gap-2 no-underline"
            style={{
              background: "#0F172A",
              color: "#FFFFFF",
              borderRadius: "6px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <Phone size={16} />
            020 737 14 26
          </a>
        </div>

        {/* Block 3 */}
        <div
          style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "10px",
            padding: "28px",
          }}
        >
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#0F172A", letterSpacing: "-0.025em" }}>
            Avond, nacht en weekend
          </h2>
          <p className="mb-4" style={{ color: "#374151", lineHeight: 1.7 }}>
            Buiten onze openingstijden neemt u contact op met de huisartsenpost.
          </p>
          <p className="font-semibold mb-4" style={{ color: "#0F172A" }}>
            Huisartsenposten Amsterdam
          </p>
          <a
            href="tel:0880030600"
            className="inline-flex items-center gap-2 no-underline"
            style={{
              background: "#0F172A",
              color: "#FFFFFF",
              borderRadius: "6px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <Phone size={16} />
            088 003 06 00
          </a>
          <p className="mt-5 text-sm" style={{ color: "#64748B", lineHeight: 1.7 }}>
            Hoogte Kadijk 143 C, 1018 BH Amsterdam
          </p>
          <a
            href="https://www.huisartsenpostenamsterdam.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold mt-1 no-underline"
            style={{ color: "#0D9488" }}
          >
            <ExternalLink size={13} />
            huisartsenpostenamsterdam.nl
          </a>
        </div>

        <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.7 }}>
          Twijfelt u of uw klacht spoed is? Kijk op thuisarts.nl of bel de praktijk. Deze website geeft geen medisch
          advies en stelt geen diagnose.
        </p>
      </div>
    </section>
  </Layout>
);

export default Spoed;
