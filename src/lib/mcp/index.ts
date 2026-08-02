import { defineMcp } from "@lovable.dev/mcp-js";
import getPracticeInfo from "./tools/get-practice-info";
import getEmergencyContacts from "./tools/get-emergency-contacts";
import listServices from "./tools/list-services";
import listTeamMembers from "./tools/list-team-members";
import listCarePartners from "./tools/list-care-partners";
import getPatientInfo from "./tools/get-patient-info";

export default defineMcp({
  name: "reigersbos-medical-center-mcp",
  title: "Reigersbos Medical Center",
  version: "0.1.0",
  instructions:
    "Publieke informatie over huisartsenpraktijk Reigersbos Medical Center in Amsterdam. Gebruik `get_practice_info` voor adres, telefoon en openingstijden, `get_emergency_contacts` voor spoed (112, praktijk, huisartsenpost), `list_services` voor het zorgaanbod, `list_team_members` voor zorgverleners, `list_care_partners` voor verloskunde en bloedafname in het pand, en `get_patient_info` voor onderwerpen zoals inschrijven, herhaalrecept, klachten en privacy. Deze server geeft alleen algemene, publieke informatie en nooit medisch advies of patiëntgegevens.",
  tools: [
    getPracticeInfo,
    getEmergencyContacts,
    listServices,
    listTeamMembers,
    listCarePartners,
    getPatientInfo,
  ],
});
