import { defineTool } from "@lovable.dev/mcp-js";
import { patientInfo } from "../data";

export default defineTool({
  name: "get_patient_info",
  title: "Patiënteninformatie",
  description:
    "Zoekt in de publieke patiënteninformatie van Reigersbos Medical Center: inschrijven, herhaalrecept, afspraak maken, klachten, omgangsregels, privacy, expats, ongedocumenteerde patiënten en vacatures. Zonder zoekterm worden alle onderwerpen teruggegeven.",
  inputSchema: {
    query: {
      type: "string",
      description: "Optionele zoekterm, bijvoorbeeld 'herhaalrecept' of 'klacht'.",
      optional: true,
    },
  } as never,
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (input: { query?: string }) => {
    const query = input?.query?.trim().toLowerCase();
    const topics = query
      ? patientInfo.filter(
          (t) =>
            t.topic.toLowerCase().includes(query) || t.summary.toLowerCase().includes(query),
        )
      : patientInfo;
    return {
      content: [
        {
          type: "text" as const,
          text: topics.length
            ? topics.map((t) => `${t.topic}\n${t.summary}\nPagina: ${t.page}`).join("\n\n")
            : "Geen informatie gevonden. Beschikbare onderwerpen: " +
              patientInfo.map((t) => t.topic).join(", "),
        },
      ],
      structuredContent: { topics },
    };
  },
});
