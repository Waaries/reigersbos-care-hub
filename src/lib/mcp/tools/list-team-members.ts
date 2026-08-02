import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { team } from "../data";

export default defineTool({
  name: "list_team_members",
  title: "Team",
  description:
    "Geeft de zorgverleners van Reigersbos Medical Center met hun functie en, waar van toepassing, hun BIG-nummer. Optioneel te filteren op functie.",
  inputSchema: {
    role: z
      .string()
      .optional()
      .describe("Optioneel filter op functie, bijvoorbeeld 'Huisarts' of 'Fysiotherapeut'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (input: { role?: string }) => {
    const role = input?.role?.trim().toLowerCase();
    const members = role ? team.filter((m) => m.role.toLowerCase().includes(role)) : team;
    return {
      content: [
        {
          type: "text" as const,
          text: members.length
            ? members
                .map((m) => `${m.name} — ${m.role}${m.big ? ` (BIG: ${m.big})` : ""}`)
                .join("\n")
            : "Geen teamleden gevonden voor deze functie.",
        },
      ],
      structuredContent: { members },
    };
  },
});
