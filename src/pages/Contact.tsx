import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Mail, Phone, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ voornaam: "", email: "", telefoon: "", onderwerp: "", bericht: "", avg: false });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <Layout>
      <section style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
        <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "6px 16px", marginBottom: "16px" }}>
            <Phone size={16} color="white" />
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Reigersbos Medical Center</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontFamily: "Merriweather, Georgia, serif", fontWeight: 800, margin: "0 0 12px" }}>Contact</h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>Neem contact met ons op — wij helpen u graag verder.</p>
        </div>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 48 }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <div className="info-card">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="font-semibold text-foreground text-sm">Adres</p>
              </div>
              <p className="text-sm text-foreground/80">Reigersbos 100 K (3e etage)</p>
              <p className="text-sm text-foreground/80">1107 ES Amsterdam</p>
            </div>
            <div className="info-card">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <p className="font-semibold text-foreground text-sm">E-mail</p>
              </div>
              <a href="mailto:Info@reigersbosmedicalcenter.nl" className="text-sm text-primary hover:underline break-all">
                Info@reigersbosmedicalcenter.nl
              </a>
            </div>
            <div className="info-card">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <p className="font-semibold text-foreground text-sm">Telefoon / Fax</p>
              </div>
              <p className="text-sm text-foreground/80">Tel: <a href="tel:0207371426" className="text-primary hover:underline">020 737 14 26</a></p>
              <p className="text-sm text-foreground/80">Fax: 020 737 03 79</p>
            </div>
            <div className="info-card">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <p className="font-semibold text-foreground text-sm">Openingstijden</p>
              </div>
              <p className="text-sm text-foreground/80">Ma-Vr 08:00–17:00</p>
              <p className="text-sm text-foreground/80">Za-Zo Gesloten</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border shadow-card mb-10 h-64 sm:h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.4867392527447!2d4.967899!3d52.306741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a3e4b34e123%3A0x0!2sReigersbos+100%2C+1107+ES+Amsterdam!5e0!3m2!1snl!2snl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reigersbos Medical Center locatie"
            />
          </div>

          <div className="max-w-2xl">
            <h3 className="font-serif font-bold text-xl text-primary mb-5">Stuur ons een bericht</h3>
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-3" />
                <h4 className="font-serif font-bold text-lg mb-2 text-foreground">Bericht verzonden!</h4>
                <p className="text-muted-foreground">Wij nemen zo spoedig mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Voornaam <span className="text-destructive">*</span></label>
                    <input required className="w-full border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" value={form.voornaam} onChange={e => setForm({ ...form, voornaam: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">E-mailadres <span className="text-destructive">*</span></label>
                    <input required type="email" className="w-full border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Telefoonnummer <span className="text-destructive">*</span></label>
                  <input required className="w-full border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" value={form.telefoon} onChange={e => setForm({ ...form, telefoon: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Onderwerp <span className="text-destructive">*</span></label>
                  <input required className="w-full border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" value={form.onderwerp} onChange={e => setForm({ ...form, onderwerp: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Bericht <span className="text-destructive">*</span></label>
                  <textarea required rows={5} className="w-full border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" value={form.bericht} onChange={e => setForm({ ...form, bericht: e.target.value })} />
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" required checked={form.avg} onChange={e => setForm({ ...form, avg: e.target.checked })} className="accent-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">Ik ga akkoord met de privacyverklaring (AVG) <span className="text-destructive">*</span></span>
                </label>
                <button type="submit" className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Bericht versturen
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
