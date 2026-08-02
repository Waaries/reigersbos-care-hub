import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../data";

export default defineTool({
  name: "list_services",
  title: "Diensten",
  description:
    "Geeft een lijst van de zorgdiensten van Reigersbos Medical Center, met een korte omschrijving en de bijbehorende pagina op de website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: services.map((s) => `${s.name} — ${s.description} (${s.page})`).join("\n"),
      },
    ],
    structuredContent: { services },
  }),
});
