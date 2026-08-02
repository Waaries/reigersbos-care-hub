import { defineTool } from "@lovable.dev/mcp-js";
import { practice } from "../data";

export default defineTool({
  name: "get_practice_info",
  title: "Praktijkinformatie",
  description:
    "Geeft de algemene praktijkgegevens van Reigersbos Medical Center: naam, adres, telefoon, fax, e-mail, openingstijden en website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          `${practice.name}`,
          `Adres: ${practice.address}`,
          `Telefoon: ${practice.phone}`,
          `Fax: ${practice.fax}`,
          `E-mail: ${practice.email}`,
          `Openingstijden: ${practice.openingHours}`,
          `Website: ${practice.website}`,
        ].join("\n"),
      },
    ],
    structuredContent: { practice },
  }),
});
