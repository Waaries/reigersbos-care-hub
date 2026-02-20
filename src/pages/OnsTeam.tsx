import { useState } from "react";
import Layout from "@/components/Layout";
import { User, Users } from "lucide-react";

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
      key={member.name}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        boxShadow: hovered
          ? "0 8px 32px rgba(14,165,160,0.18)"
          : "0 4px 20px rgba(0,0,0,0.08)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease",
        borderTop: hovered ? "4px solid #0EA5A0" : "4px solid transparent",
        background: "hsl(var(--card))",
      }}
      className="flex flex-col items-center text-center p-5"
    >
      <div
        className="flex items-center justify-center mb-4 bg-secondary"
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "3px solid #0EA5A0",
          boxShadow: "0 0 0 4px rgba(14,165,160,0.12)",
        }}
      >
        <User className="w-12 h-12 text-primary/50" />
      </div>
      <p className="font-semibold text-foreground text-sm leading-tight">{member.name}</p>
      <p className="text-primary text-xs mt-1 font-medium">{member.title}</p>
      {member.big && <p className="text-muted-foreground text-xs mt-1">{member.big}</p>}
    </div>
  );
};

const OnsTeam = () => (
  <Layout>
    <section style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0D3B6E 50%, #0EA5A0 100%)", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
      <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "6px 16px", marginBottom: "16px" }}>
          <Users size={16} color="white" />
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Reigersbos Medical Center</span>
        </div>
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontFamily: "Merriweather, Georgia, serif", fontWeight: 800, margin: "0 0 12px" }}>Ons Team</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>Maak kennis met de mensen achter Reigersbos Medical Center.</p>
      </div>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 48 }} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
      </svg>
    </section>

    {/* Intro text */}
    <div className="flex justify-center px-4 mt-10 mb-2">
      <p className="text-center text-sm leading-relaxed max-w-[600px]" style={{ color: "#64748B" }}>
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
