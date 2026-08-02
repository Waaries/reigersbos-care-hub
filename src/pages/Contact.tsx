import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Mail, Phone, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ voornaam: "", email: "", telefoon: "", onderwerp: "", bericht: "", avg: false });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <Layout>
      <section className="page-hero">
        <div className="page-container" style={{ textAlign: "center" }}>
          <p className="page-hero-label mb-3">Reigersbos Medical Center</p>
          <h1 className="page-hero-title">Contact</h1>
          <p className="page-hero-desc">Neem contact met ons op — wij helpen u graag verder.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { icon: MapPin, label: "Adres", line1: "Reigersbos 100 K (3e etage)", line2: "1107 ES Amsterdam" },
              { icon: Mail, label: "E-mail", line1: "Info@reigersbosmedicalcenter.nl", href: "mailto:Info@reigersbosmedicalcenter.nl" },
              { icon: Phone, label: "Telefoon / Fax", line1: "Tel: 020 737 14 26", line2: "Fax: 020 737 03 79" },
              { icon: Clock, label: "Openingstijden", line1: "Ma-Vr 08:00–17:00", line2: "Za-Zo Gesloten" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="info-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <p className="font-display font-semibold text-foreground text-sm">{item.label}</p>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-primary hover:underline break-all">{item.line1}</a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.line1}</p>
                  )}
                  {item.line2 && <p className="text-sm text-muted-foreground">{item.line2}</p>}
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl overflow-hidden border border-border mb-10 h-64 sm:h-80 shadow-subtle">
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
            <h3 className="font-display font-bold text-foreground text-lg mb-5">Stuur ons een bericht</h3>
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 mx-auto mb-3 text-primary" />
                <h4 className="font-display font-bold text-foreground text-base mb-2">Bericht verzonden!</h4>
                <p className="text-muted-foreground">Wij nemen zo spoedig mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">Voornaam <span className="text-red-600">*</span></label>
                    <input required className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" value={form.voornaam} onChange={e => setForm({ ...form, voornaam: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">E-mailadres <span className="text-red-600">*</span></label>
                    <input required type="email" className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Telefoonnummer <span className="text-red-600">*</span></label>
                  <input required className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" value={form.telefoon} onChange={e => setForm({ ...form, telefoon: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Onderwerp <span className="text-red-600">*</span></label>
                  <input required className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring" value={form.onderwerp} onChange={e => setForm({ ...form, onderwerp: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-foreground">Bericht <span className="text-red-600">*</span></label>
                  <textarea required rows={5} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" value={form.bericht} onChange={e => setForm({ ...form, bericht: e.target.value })} />
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" required checked={form.avg} onChange={e => setForm({ ...form, avg: e.target.checked })} className="mt-0.5 accent-primary" />
                  <span className="text-sm text-muted-foreground">Ik ga akkoord met de privacyverklaring (AVG) <span className="text-red-600">*</span></span>
                </label>
                <button type="submit" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
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
