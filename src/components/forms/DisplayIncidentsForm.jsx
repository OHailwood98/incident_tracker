import { useSelector } from "react-redux";

import DisplayIncident from "./DisplayIncident";

function DisplayIncidentsForm() {
  const incidents = useSelector((state) => state.incidents);

  var incidentlist = incidents.map((incident) => {
    return <DisplayIncident incidentData={incident} />;
  });
  return <div className="IncidentList">{incidentlist}</div>;
}

export default DisplayIncidentsForm;
