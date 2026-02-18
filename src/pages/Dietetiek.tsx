import Layout from "@/components/Layout";
import { useModal } from "@/contexts/ModalContext";

const Dietetiek = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-heading">Diëtetiek</h2>
          <p className="page-text">
            Gezonde voeding is de basis van een goede gezondheid. Door gezond te eten, voelt u zich beter,
            voorkomt u ziekten en versnelt u het herstel tijdens of na ziekte. Het is belangrijk dat u
            voedingsadvies krijgt van iemand die kennis van zaken heeft. De diëtist is dé deskundige op het
            gebied van voeding, gezondheid en ziekte. De diëtist werkt samen met uw huisarts, de
            praktijkondersteuner en andere zorgverleners.
          </p>
          <p className="page-text">
            De titel diëtist is een beschermde titel en mag alleen worden gevoerd na afronding van een erkende
            vierjarige HBO-opleiding Voeding en Diëtetiek. De diëtist is gebonden aan het medische
            beroepsgeheim en de wettelijke voorschriften omtrent persoonsregistratie. Uw gegevens worden dus
            altijd vertrouwelijk behandeld.
          </p>
          <button
            onClick={() => openModal("dietetiek")}
            className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-card"
          >
            Maak een afspraak Diëtetiek
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Dietetiek;
