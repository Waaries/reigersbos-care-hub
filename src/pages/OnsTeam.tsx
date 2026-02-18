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

const OnsTeam = () => (
  <Layout>
    <section className="page-section">
      <div className="page-container">
        <h2 className="page-heading">Ons Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center p-5 bg-card border border-border rounded-xl shadow-card hover:shadow-header transition-shadow">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 border-2 border-primary/20">
                <User className="w-10 h-10 text-primary/50" />
              </div>
              <p className="font-semibold text-foreground text-sm leading-tight">{member.name}</p>
              <p className="text-primary text-xs mt-1 font-medium">{member.title}</p>
              {member.big && <p className="text-muted-foreground text-xs mt-1">{member.big}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default OnsTeam;
