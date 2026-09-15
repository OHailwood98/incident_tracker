import { useEffect } from "react";
import { useSelector } from "react-redux";

import DisplayIncidentsForm from "../forms/DisplayIncidentsForm";
//import { LoadIncidents2 } from "../../redux/actions/incidentActions";
import { LoadCourses } from "../../redux/actions/courseActions";

export default function IncidentPage() {
  const incidents = useSelector((state) => state.incidents);

  LoadCourses();

  useEffect(() => {
    console.dir("load");
    LoadCourses();
  }, []);
  return (
    <div>
      <h2>Incidents</h2>
      <br />
      <hr />
      <br />
      <DisplayIncidentsForm />
    </div>
  );
}
