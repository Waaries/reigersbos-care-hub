import { useState } from "react";
import Layout from "@/components/Layout";
import { User } from "lucide-react";

const team = [
  { name: "Julia van de Pol", title: "Huisarts", big: "BIG: 59919561501" },
  { name: "Sandra Bediako", title: "Huisarts", big: "BIG: 39918036001" },
  { name: "Warcha Ganpat", title: "Doktersassistent", big: null },
  { name: "Lois Oduro", title: "Doktersassistent", big: null },
  { name: "Derek Che", title: "Fysiotherapeut", big: "BIG: 39915224904" },
  { name: "Sylvia Ohagwu", title: "Fysiotherapeut", big: "BIG: 79928616104" },
];

const TeamCard = ({ member }: { member: typeof team[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col items-center text-center p-6 rounded-2xl bg-card border transition-all duration-200 ${
        hovered ? "border-primary shadow-warm -translate-y-1" : "border-border shadow-subtle"
      }`}
    >
      <div
        className="flex items-center justify-center mb-4 w-20 h-20 rounded-full border-2 border-border bg-sand-deep"
      >
        <User className="w-10 h-10 text-muted-foreground" />
      </div>
      <p className="font-display font-semibold text-foreground text-sm leading-tight">{member.name}</p>
      <p className="text-primary text-xs font-semibold mt-1">{member.title}</p>
      {member.big && <p className="text-muted-foreground text-[11px] mt-1">{member.big}</p>}
    </div>
  );
};

const OnsTeam = () => (
  <Layout>
    <section className="page-hero">
      <div className="page-container" style={{ textAlign: "center" }}>
        <p className="page-hero-label mb-3">Reigersbos Medical Center</p>
        <h1 className="page-hero-title">Ons Team</h1>
        <p className="page-hero-desc">Maak kennis met de mensen achter Reigersbos Medical Center.</p>
      </div>
    </section>

    <div className="flex justify-center px-4 mt-10 mb-2">
      <p className="text-center text-sm leading-relaxed max-w-[600px] text-muted-foreground font-body">
        Ons team bestaat uit gedreven zorgprofessionals die klaarstaan om u de beste zorg te bieden. Samen werken wij aan uw gezondheid.
      </p>
    </div>

    <section className="page-section pt-6">
      <div className="page-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default OnsTeam;
