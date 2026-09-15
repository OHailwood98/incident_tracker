import IncidentForm from "../forms/IncidentForm";
import api from "../../api";
import { useState } from "react";
import { LoadCourses } from "../../redux/actions/courseActions";

export default function HomePage() {
  const [errors, setErrors] = useState({});

  function submit(data) {
    console.dir(data);
    api.incidents.addIncident(data).catch((err) => {
      return setErrors(err.response.data.errors);
    });
    LoadCourses();
  }
  return (
    <div>
      <h1 class="display-4">Add your Incident Here</h1>
      <br />
      <hr />
      <br />
      <IncidentForm submit={submit} errors={errors} />
    </div>
  );
}
