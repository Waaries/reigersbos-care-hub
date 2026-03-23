import Layout from "@/components/Layout";
import { useModal } from "@/contexts/ModalContext";
import { CheckCircle, Phone, Mail, MapPin, Globe, Heart, FileText, Shield } from "lucide-react";

const faqs = [
  {
    q: "Do I need health insurance in the Netherlands?",
    a: "Yes. Everyone living or working in the Netherlands is required by law to take out basic health insurance (basisverzekering) from a Dutch health insurer. You must arrange this within 4 months of registering. If you don't, you may receive a fine."
  },
  {
    q: "What is a huisarts (GP) and why do I need one?",
    a: "A huisarts is your general practitioner — your first point of contact for all medical issues. In the Netherlands, you cannot go directly to a specialist or hospital without a referral from your GP. Registering with a GP as soon as possible is very important."
  },
  {
    q: "What is a BSN number?",
    a: "A BSN (Burgerservicenummer) is your Dutch citizen service number. You receive it when you register at the municipality (gemeente). You need it for health insurance, banking, and registering with a GP."
  },
  {
    q: "Is my European Health Insurance Card (EHIC) valid here?",
    a: "The EHIC covers emergency care within the EU, but it is not a replacement for Dutch health insurance. If you are staying long-term, you must get Dutch health insurance."
  },
  {
    q: "Do you speak English?",
    a: "Yes! Our staff speaks English and we welcome international patients. We also have multilingual support in Twi, Yoruba, Turkish and Arabic."
  },
  {
    q: "How do I register as a new patient?",
    a: "Simply click the 'Register as a patient' button on this page or call us. You will need your BSN number, Dutch health insurance details, and a valid ID."
  },
];

const steps = [
  { title: "Register at the municipality", desc: "Go to the gemeente (municipality office) to register your address in the Netherlands. You will receive your BSN number." },
  { title: "Get Dutch health insurance", desc: "Within 4 months of arriving, take out basic Dutch health insurance (basisverzekering). Compare insurers at zorgwijzer.nl." },
  { title: "Register with a GP", desc: "Register with Reigersbos Medical Center as your huisarts. This is your gateway to all healthcare in the Netherlands." },
  { title: "You're all set!", desc: "Once registered, you can make appointments, request prescriptions, and get referrals to specialists when needed." },
];

const Expats = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="page-hero-label mb-3">ENGLISH · INFORMATION FOR EXPATS</p>
          <h1 className="page-hero-title">New to the Netherlands?<br />We've got you covered.</h1>
          <p className="page-hero-desc" style={{ maxWidth: "600px" }}>
            Reigersbos Medical Center welcomes international patients and expats.
            We speak English and help you navigate the Dutch healthcare system with ease.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => openModal("inschrijven")}
              className="flex items-center gap-2"
              style={{
                background: "hsl(222 47% 11%)", color: "white", border: "none",
                borderRadius: "6px", padding: "12px 24px", fontSize: "14px", fontWeight: 600, cursor: "pointer",
              }}
            >
              <CheckCircle className="w-4 h-4" />
              Register as a patient
            </button>
            <a
              href="tel:0207371426"
              className="flex items-center gap-2"
              style={{
                background: "transparent", color: "hsl(222 47% 11%)",
                border: "1px solid hsl(214 32% 91%)", borderRadius: "6px",
                padding: "12px 24px", fontSize: "14px", fontWeight: 600, textDecoration: "none",
              }}
            >
              <Phone className="w-4 h-4" />
              020 737 14 26
            </a>
          </div>
        </div>
      </section>

      {/* Languages */}
      <div style={{ borderBottom: "1px solid hsl(214 32% 91%)", background: "white" }}>
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span style={{ fontWeight: 700, color: "hsl(222 47% 11%)" }}>WE SPEAK:</span>
            {["🇬🇧 English", "🇳🇱 Nederlands", "🇬🇭 Twi", "🇳🇬 Yoruba", "🇹🇷 Türkçe", "🇲🇦 العربية"].map(lang => (
              <span key={lang} style={{
                background: "hsl(210 40% 98%)", border: "1px solid hsl(214 32% 91%)",
                borderRadius: "50px", padding: "4px 12px", fontSize: "12px", fontWeight: 500,
                color: "hsl(222 47% 11%)",
              }}>{lang}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* Steps */}
        <section>
          <p className="page-hero-label mb-2">GETTING STARTED</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "hsl(222 47% 11%)", marginBottom: "32px" }}>
            4 steps to healthcare in the Netherlands
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} style={{
                background: "white", border: "1px solid hsl(214 32% 91%)",
                borderRadius: "10px", padding: "24px", textAlign: "center",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}>
                <p className="page-hero-label mb-2">Step {i + 1}</p>
                <h3 style={{ fontWeight: 600, color: "hsl(222 47% 11%)", marginBottom: "8px", fontSize: "15px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: "hsl(215 16% 47%)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-4">
              <p className="page-hero-label">WHY US</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "hsl(222 47% 11%)" }}>
                Your home away from home
              </h2>
              <p style={{ color: "hsl(215 16% 47%)", lineHeight: 1.7, fontSize: "14px" }}>
                We understand that moving to a new country is challenging.
                Our diverse team has experience working with patients from all over the world
                and we make sure you feel welcome and understood from day one.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { icon: Globe, text: "English-speaking staff" },
                  { icon: Heart, text: "Multilingual support in 6 languages" },
                  { icon: Shield, text: "Accepting new patients" },
                  { icon: MapPin, text: "Minutes from metro station Reigersbos" },
                  { icon: FileText, text: "Help with Dutch healthcare paperwork" },
                  { icon: CheckCircle, text: "Physiotherapy on location" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm" style={{ color: "hsl(222 47% 11%)" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      background: "hsl(166 76% 97%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon className="w-4 h-4" style={{ color: "hsl(174 43% 30%)" }} />
                    </div>
                    {text}
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
                  Ready to register?
                </h3>
                <p style={{ fontSize: "13px", color: "hsl(215 16% 47%)", marginBottom: "16px" }}>
                  Contact us today and we'll guide you through the registration process step by step.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Phone, label: "Phone", value: "020 737 14 26" },
                    { icon: Mail, label: "Email", value: "Info@reigersbosmedicalcenter.nl" },
                    { icon: MapPin, label: "Address", value: "Reigersbos 100K (3rd floor)\n1107 ES Amsterdam" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: "12px", borderRadius: "8px",
                      background: "hsl(210 40% 98%)", border: "1px solid hsl(214 32% 91%)",
                    }}>
                      <Icon className="w-4 h-4 shrink-0" style={{ color: "hsl(174 43% 30%)" }} />
                      <div>
                        <p style={{ fontSize: "11px", color: "hsl(215 16% 47%)", fontWeight: 500 }}>{label}</p>
                        <p style={{ fontSize: "13px", fontWeight: 600, color: "hsl(222 47% 11%)", whiteSpace: "pre-line" }}>{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => openModal("inschrijven")}
                  style={{
                    width: "100%", marginTop: "16px", padding: "12px",
                    background: "hsl(222 47% 11%)", color: "white",
                    border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 600, cursor: "pointer",
                  }}
                >
                  Register as a patient →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <p className="page-hero-label mb-2">FAQ</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "hsl(222 47% 11%)", marginBottom: "32px" }}>
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} style={{
                background: "white", border: "1px solid hsl(214 32% 91%)",
                borderRadius: "10px", padding: "24px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}>
                <h3 style={{ fontWeight: 600, color: "hsl(222 47% 11%)", marginBottom: "8px", fontSize: "15px" }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: "14px", color: "hsl(215 16% 47%)", lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Expats;
