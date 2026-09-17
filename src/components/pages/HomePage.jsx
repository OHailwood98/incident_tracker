import api from "../../api";
import { useState } from "react";

import IncidentForm from "../forms/IncidentForm";
import IncidentConfirmed from "../forms/IncidentConfirmed";

export default function HomePage() {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [incidnetID, setIncidnetID] = useState("");

  function submit(data) {
    console.dir(data);
    api.incidents
      .addIncident(data)
      .then((id) => {
        console.dir(id);
        setSuccess(true);
        setIncidnetID(id);
      })
      .catch((err) => {
        return setErrors(err.response.data.errors);
      });
  }
  return (
    <div>
      <h1 class="display-4">Report your Incident Here</h1>
      <br />
      <hr />
      <br />
      {!success && <IncidentForm submit={submit} errors={errors} />}
      {success && (
        <IncidentConfirmed incidentID={incidnetID} setSuccess={setSuccess} />
      )}
    </div>
  );
}
