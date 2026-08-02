import { defineTool } from "@lovable.dev/mcp-js";
import { carePartners } from "../data";

export default defineTool({
  name: "list_care_partners",
  title: "Zorgpartners",
  description:
    "Geeft de zorgpartners die in het pand van Reigersbos Medical Center werken (verloskunde en diagnostiek), met diensten, contactgegevens en openingstijden.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: carePartners
          .map((p) =>
            [
              `${p.name} (${p.category})`,
              p.description,
              `Diensten: ${p.servicesOffered.join(", ")}`,
              `Telefoon: ${p.phone}`,
              `Website: ${p.website}`,
              p.openingHours ? `Openingstijden: ${p.openingHours}` : null,
              p.note,
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n\n"),
      },
    ],
    structuredContent: { carePartners },
  }),
});
