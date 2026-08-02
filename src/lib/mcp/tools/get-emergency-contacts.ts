import { defineTool } from "@lovable.dev/mcp-js";
import { emergency } from "../data";

export default defineTool({
  name: "get_emergency_contacts",
  title: "Spoednummers",
  description:
    "Geeft de spoednummers van Reigersbos Medical Center: 112 bij levensgevaar, de praktijk tijdens openingstijden en de huisartsenpost buiten openingstijden.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          `Levensgevaar: bel ${emergency.lifeThreatening.number} (${emergency.lifeThreatening.when})`,
          `Tijdens openingstijden: ${emergency.duringOpeningHours.number} (${emergency.duringOpeningHours.when})`,
          `Buiten openingstijden: ${emergency.outsideOpeningHours.number} — ${emergency.outsideOpeningHours.provider} (${emergency.outsideOpeningHours.when}), ${emergency.outsideOpeningHours.website}`,
        ].join("\n"),
      },
    ],
    structuredContent: { emergency },
  }),
});
