import { useState } from "react";
import Layout from "@/components/Layout";
import { User } from "lucide-react";

const team = [
  { name: "Julia van de Pol", title: "Huisarts", big: "BIG: 59919561501" },
  { name: "Sandra Bediako", title: "Huisarts", big: "BIG: 39918036001" },
  { name: "Warcha Ganpat", title: "Doktersassistent", big: null },
  { name: "Lois Oduro", title: "Doktersassistent", big: null },
  { name: "Indra Jhingoeri", title: "Diëtist", big: null },
  { name: "Derek Che", title: "Fysiotherapeut", big: "BIG: 39915224904" },
  { name: "Sylvia Ohagwu", title: "Fysiotherapeut", big: "BIG: 79928616104" },
];

const TeamCard = ({ member }: { member: typeof team[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s ease",
        border: `1px solid ${hovered ? "hsl(174 43% 30%)" : "hsl(214 32% 91%)"}`,
        background: "white",
      }}
      className="flex flex-col items-center text-center p-5"
    >
      <div
        className="flex items-center justify-center mb-4"
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "2px solid hsl(214 32% 91%)",
          background: "hsl(210 40% 98%)",
        }}
      >
        <User className="w-10 h-10" style={{ color: "hsl(215 16% 47%)" }} />
      </div>
      <p style={{ fontWeight: 600, color: "hsl(222 47% 11%)", fontSize: "14px", lineHeight: 1.3 }}>{member.name}</p>
      <p style={{ color: "hsl(174 43% 30%)", fontSize: "12px", marginTop: "4px", fontWeight: 500 }}>{member.title}</p>
      {member.big && <p style={{ color: "hsl(215 16% 47%)", fontSize: "11px", marginTop: "4px" }}>{member.big}</p>}
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
      <p className="text-center text-sm leading-relaxed max-w-[600px]" style={{ color: "hsl(215 16% 47%)" }}>
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
