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
                    <Icon className="w-5 h-5" style={{ color: "hsl(174 43% 30%)" }} />
                    <p style={{ fontWeight: 600, color: "hsl(222 47% 11%)", fontSize: "13px" }}>{item.label}</p>
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{ color: "hsl(174 43% 30%)", fontSize: "13px" }} className="hover:underline break-all">{item.line1}</a>
                  ) : (
                    <p style={{ fontSize: "13px", color: "hsl(220 9% 26%)" }}>{item.line1}</p>
                  )}
                  {item.line2 && <p style={{ fontSize: "13px", color: "hsl(220 9% 26%)" }}>{item.line2}</p>}
                </div>
              );
            })}
          </div>

          <div className="rounded-lg overflow-hidden border border-border mb-10 h-64 sm:h-80" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
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
            <h3 style={{ fontWeight: 700, fontSize: "18px", color: "hsl(222 47% 11%)", marginBottom: "20px" }}>Stuur ons een bericht</h3>
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 mx-auto mb-3" style={{ color: "hsl(174 43% 30%)" }} />
                <h4 style={{ fontWeight: 700, fontSize: "16px", color: "hsl(222 47% 11%)", marginBottom: "8px" }}>Bericht verzonden!</h4>
                <p style={{ color: "hsl(215 16% 47%)" }}>Wij nemen zo spoedig mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: "hsl(222 47% 11%)" }}>Voornaam <span style={{ color: "hsl(0 72% 51%)" }}>*</span></label>
                    <input required className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: "hsl(214 32% 91%)" }} value={form.voornaam} onChange={e => setForm({ ...form, voornaam: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: "hsl(222 47% 11%)" }}>E-mailadres <span style={{ color: "hsl(0 72% 51%)" }}>*</span></label>
                    <input required type="email" className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: "hsl(214 32% 91%)" }} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "hsl(222 47% 11%)" }}>Telefoonnummer <span style={{ color: "hsl(0 72% 51%)" }}>*</span></label>
                  <input required className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: "hsl(214 32% 91%)" }} value={form.telefoon} onChange={e => setForm({ ...form, telefoon: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "hsl(222 47% 11%)" }}>Onderwerp <span style={{ color: "hsl(0 72% 51%)" }}>*</span></label>
                  <input required className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2" style={{ borderColor: "hsl(214 32% 91%)" }} value={form.onderwerp} onChange={e => setForm({ ...form, onderwerp: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "hsl(222 47% 11%)" }}>Bericht <span style={{ color: "hsl(0 72% 51%)" }}>*</span></label>
                  <textarea required rows={5} className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 resize-none" style={{ borderColor: "hsl(214 32% 91%)" }} value={form.bericht} onChange={e => setForm({ ...form, bericht: e.target.value })} />
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" required checked={form.avg} onChange={e => setForm({ ...form, avg: e.target.checked })} className="mt-0.5" style={{ accentColor: "hsl(174 43% 30%)" }} />
                  <span style={{ fontSize: "13px", color: "hsl(215 16% 47%)" }}>Ik ga akkoord met de privacyverklaring (AVG) <span style={{ color: "hsl(0 72% 51%)" }}>*</span></span>
                </label>
                <button type="submit" style={{
                  background: "hsl(222 47% 11%)", color: "white", border: "none",
                  borderRadius: "6px", padding: "10px 20px", fontSize: "14px", fontWeight: 600, cursor: "pointer",
                }}>
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
