import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => (
  <Layout>
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center">
        <p className="text-7xl font-display font-bold text-primary mb-4">404</p>
        <h1 className="font-display font-bold text-foreground text-2xl mb-3">Pagina niet gevonden</h1>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
          Deze pagina lijkt niet te bestaan. Klik hieronder om terug te gaan naar de homepage.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Terug naar home
        </Link>
      </div>
    </section>
  </Layout>
);

export default NotFound;
