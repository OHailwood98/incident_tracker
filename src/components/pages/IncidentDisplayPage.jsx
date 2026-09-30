import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import api from "../../api";
import IncidentForm from "../forms/IncidentForm";
import AddCommentForm from "../forms/AddCommentForm";
import DisplayCommentsForm from "../forms/DisplayCommentsForm";

export default function IncidentDisplayPage() {
  const { incident } = useParams();
  const [loading, setLoading] = useState(true);
  const [incidentData, setIncidentData] = useState({});

  useEffect(() => {
    api.incidents.getIncident({ id: incident }).then((data) => {
      setIncidentData(data.incident);
      setLoading(false);
    });
  }, []);

  function addMessage(message) {
    console.dir(axios.defaults.headers.common["authorisation"]);
    api.incidents
      .addMessage({ id: incidentData._id, message: message })
      .then((data) => {
        setIncidentData(data.incident);
      });
  }

  return (
    <div>
      <h2>Incident Details</h2>
      <IncidentForm incidentData={incidentData} />
      <DisplayCommentsForm comments={incidentData?.messages} />
      <AddCommentForm addMessage={addMessage} />
    </div>
  );
}
