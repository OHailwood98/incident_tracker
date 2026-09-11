import DisplayIncident from "./DisplayIncident";

function DisplayIncidentsForm() {
  var IncidentData = {
    incident: "incident",
    incidentDescription: "incidentDescription",
    severityLevel: 2,
    affectedService: "SAP",
    reporter: "reporter",
  };
  return (
    <div className="IncidentList">
      <DisplayIncident incidentData={IncidentData} />
    </div>
  );
}

export default DisplayIncidentsForm;
