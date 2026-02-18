import Layout from "@/components/Layout";

const handelingen = [
  "Bloeddrukmeting", "Wondverzorging", "Uitstrijkjes", "Wrat aanstippen",
  "Zwachtelen", "Urine onderzoek", "Zwangerschapstest", "Oren uitspuiten",
  "Hechtingen verwijderen", "Injecties",
];

const Praktijkassistente = () => (
  <Layout>
    <section className="page-section">
      <div className="page-container">
        <h2 className="page-heading">Praktijkassistente</h2>
        <p className="page-text">
          De assistente staat u als eerste te woord wanneer u met de praktijk belt. Ze maakt afspraken voor
          het spreekuur, de huisbezoeken en het telefonische spreekuur. U kunt haar ook bellen voor uitslagen
          van urine- of bloedonderzoek en voor herhaalrecepten. De assistente kan bij veel voorkomende
          problematiek zoals koorts, keelpijn of diarree zelfstandig medisch advies geven.
        </p>
        <p className="page-text">U kunt bij haar terecht voor o.a.:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          {handelingen.map((item) => (
            <li key={item} className="flex items-center gap-2 text-foreground/80 text-sm">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default Praktijkassistente;
