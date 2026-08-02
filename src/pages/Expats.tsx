import Layout from "@/components/Layout";
import { CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const Expats = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Reigersbos Medical Center</p>
        <h1 className="page-hero-title">Information for Expats</h1>
        <p className="page-hero-desc">English-language information for international patients in Amsterdam.</p>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container max-w-3xl">
        <p className="page-text">
          Welcome to Reigersbos Medical Center. We provide primary care in Amsterdam and are happy to help
          international patients navigate the Dutch healthcare system. Below you will find practical information
          about registering with our practice, appointments, prescriptions and insurance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
          <div className="info-card">
            <h3 className="page-subheading">How to register</h3>
            <ul className="space-y-2 mt-3">
              {[
                "Fill in the registration form on our website",
                "Bring a valid ID and insurance card",
                "Call us during opening hours for help",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground font-body">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <h3 className="page-subheading">Appointments</h3>
            <ul className="space-y-2 mt-3">
              {[
                "Call 020 737 14 26 to make an appointment",
                "Same-day options for urgent complaints",
                "Consultations are available in English",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground font-body">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="info-card">
          <h3 className="page-subheading">Contact details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm text-foreground font-body">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Reigersbos 100 K, 1107 ES Amsterdam</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:0207371426" className="text-primary hover:underline">020 737 14 26</a></div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href="mailto:Info@reigersbosmedicalcenter.nl" className="text-primary hover:underline">Info@reigersbosmedicalcenter.nl</a></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Mon–Fri 08:00–17:00</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Expats;
