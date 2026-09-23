import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../../api";
import IncidentForm from "../forms/IncidentForm";

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

  return (
    <div>
      <h2>Incident Details</h2>
      <IncidentForm incidentData={incidentData} />
    </div>
  );
}
