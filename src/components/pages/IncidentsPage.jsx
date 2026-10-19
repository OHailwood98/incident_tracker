import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DisplayIncidentsForm from "../forms/DisplayIncidentsForm";
import IncidentSorter from "../forms/IncidentSorter";

import { LoadIncidents } from "../../redux/actions/incidentActions";

export default function IncidentPage() {
  const dispatch = useDispatch();
  const incidents = useSelector((state) => state.incidents);
  var incidentList = incidents;

  const [sortValue, SetSort] = useState("tm-new");

  useEffect(() => {
    dispatch(LoadIncidents());
  }, []);

  function sortList(value) {
    console.dir(value);
    SetSort(value);
    switch (value) {
      case "tm-new":
        incidentList = incidents;
        incidentList = incidentList.reverse();
        break;
      case "tm-old":
        incidentList = incidents;
        incidentList = incidentList.reverse();
        break;
      case "prio-dec":
        incidentList = incidents;
        incidentList = incidentList.sort(
          (a, b) => a.severityLevel - b.severityLevel,
        );
        break;
      case "prio-asc":
        incidentList = incidents;
        incidentList = incidentList.sort(
          (a, b) => a.severityLevel - b.severityLevel,
        );
        incidentList = incidentList.reverse();
        break;
      default:
        incidentList = incidents;
    }
  }

  return (
    <div>
      <br />
      <h2>Incidents</h2>
      <br />
      <hr />
      <br />
      <IncidentSorter sortValue={sortValue} SetSort={sortList} />
      <br />
      <DisplayIncidentsForm incidents={incidentList} />
    </div>
  );
}
