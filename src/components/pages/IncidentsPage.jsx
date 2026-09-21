import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import DisplayIncidentsForm from "../forms/DisplayIncidentsForm";
import IncidentSorter from "../forms/IncidentSorter";

import { LoadIncidents } from "../../redux/actions/incidentActions";

export default function IncidentPage() {
  const dispatch = useDispatch();
  const [sortValue, SetSort] = useState("tm-new");

  useEffect(() => {
    dispatch(LoadIncidents());
  });
  return (
    <div>
      <h2>Incidents</h2>
      <br />
      <hr />
      <br />
      <IncidentSorter sortValue={sortValue} SetSort={SetSort} />
      <br />
      <DisplayIncidentsForm />
    </div>
  );
}
