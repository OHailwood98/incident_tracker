import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DisplayIncidentsForm from "../forms/DisplayIncidentsForm";
import { LoadIncidents } from "../../redux/actions/incidentActions";

export default function IncidentPage() {
  const dispatch = useDispatch();
  const incidents = useSelector((state) => state.incidents);

  useEffect(() => {
    console.dir("load");
    dispatch(LoadIncidents());
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
