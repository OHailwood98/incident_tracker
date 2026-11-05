import DisplayIncident from "./DisplayIncident";

function DisplayIncidentsForm({ incidents }) {
  var incidentlist = incidents.map((incident) => {
    return <DisplayIncident incidentData={incident} key={incident._id} />;
  });
  return <div className="IncidentList">{incidentlist}</div>;
}

export default DisplayIncidentsForm;
