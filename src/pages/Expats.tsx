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
  { icon: "🏛️", title: "Register at the municipality", desc: "Go to the gemeente (municipality office) to register your address in the Netherlands. You will receive your BSN number." },
  { icon: "🏥", title: "Get Dutch health insurance", desc: "Within 4 months of arriving, take out basic Dutch health insurance (basisverzekering). Compare insurers at zorgwijzer.nl." },
  { icon: "👨‍⚕️", title: "Register with a GP", desc: "Register with Reigersbos Medical Center as your huisarts. This is your gateway to all healthcare in the Netherlands." },
  { icon: "💊", title: "You're all set!", desc: "Once registered, you can make appointments, request prescriptions, and get referrals to specialists when needed." },
];

const Expats = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      {/* Hero */}
      <div
        className="relative py-20 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0EA5A0 100%)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">
              <Globe className="w-4 h-4" />
              ENGLISH · INFORMATION FOR EXPATS
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            New to the Netherlands?<br />We've got you covered.
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Reigersbos Medical Center welcomes international patients and expats.
            We speak English and help you navigate the Dutch healthcare system with ease.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openModal("inschrijven")}
              className="flex items-center gap-2 bg-white text-primary font-bold rounded-full px-7 py-3.5 text-sm shadow-lg hover:shadow-xl transition-shadow"
            >
              <CheckCircle className="w-5 h-5" />
              Register as a patient
            </button>
            <a
              href="tel:0207371426"
              className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white font-bold rounded-full px-7 py-3.5 text-sm border-2 border-white/30 hover:bg-white/25 transition-colors"
            >
              <Phone className="w-5 h-5" />
              020 737 14 26
            </a>
          </div>
        </div>
      </div>

      {/* Languages badge strip */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="font-bold text-foreground">WE SPEAK:</span>
            {["🇬🇧 English", "🇳🇱 Nederlands", "🇬🇭 Twi", "🇳🇬 Yoruba", "🇹🇷 Türkçe", "🇲🇦 العربية"].map(lang => (
              <span key={lang} className="bg-card border border-border rounded-full px-3 py-1 text-xs font-medium text-foreground">{lang}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-16">

          {/* How to get started */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">GETTING STARTED</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              4 steps to healthcare in the Netherlands
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm">
                  <p className="text-xs font-bold text-accent mb-2">Step {i + 1}</p>
                  <p className="text-3xl mb-3">{s.icon}</p>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why choose us */}
          <section>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">WHY US</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Your home away from home
                </h2>
                <p className="text-muted-foreground leading-relaxed">
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
                    <div key={text} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact card */}
              <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-foreground">
                  Ready to register?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Contact us today and we'll guide you through the registration process step by step.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary border border-border">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Phone</p>
                      <p className="text-sm font-semibold text-foreground">020 737 14 26</p>
                    </div>
                  </div>
                  <a href="mailto:Info@reigersbosmedicalcenter.nl" className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary border border-border hover:bg-secondary/80 transition-colors">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Email</p>
                      <p className="text-sm font-semibold text-foreground">Info@reigersbosmedicalcenter.nl</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary border border-border">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Address</p>
                      <p className="text-sm font-semibold text-foreground">Reigersbos 100K (3rd floor)<br />1107 ES Amsterdam</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => openModal("inschrijven")}
                  className="w-full py-3.5 text-white font-bold rounded-xl text-sm"
                  style={{ background: "linear-gradient(135deg, #1B4F8A, #0EA5A0)" }}
                >
                  Register as a patient →
                </button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Expats;
