import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { IsAdminRole } from "../../utils/isAdminRole";
import api from "../../api";
import IncidentForm from "../forms/IncidentForm";
import AddCommentForm from "../forms/AddCommentForm";
import DisplayCommentsForm from "../forms/DisplayCommentsForm";
import EditStatusForm from "../forms/EditStatusForm";
import DisplayStatusForm from "../forms/DisplayStatusForm";

export default function IncidentDisplayPage() {
  const { incident } = useParams();
  const [loading, setLoading] = useState(true);
  const [incidentData, setIncidentData] = useState({});
  const role = IsAdminRole();

  useEffect(() => {
    api.incidents.getIncident({ id: incident }).then((data) => {
      setIncidentData(data.incident);
      setLoading(false);
    });
  }, []);

  function addMessage(message) {
    api.incidents
      .addMessage({ id: incidentData._id, message: message })
      .then((data) => {
        setIncidentData(data.incident);
      });
  }

  return (
    <div>
      <h2>Incident Details</h2>
      <DisplayStatusForm incidentData={incidentData} />
      <IncidentForm incidentData={incidentData} />
      <DisplayCommentsForm comments={incidentData?.messages} />
      {!role && <AddCommentForm addMessage={addMessage} />}
      {role && <EditStatusForm incidentData={incidentData} />}
    </div>
  );
}
