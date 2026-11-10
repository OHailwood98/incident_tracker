import * as types from "../ActionTypes";
import api from "../../api";

export function LoadIncidentsAction(courses) {
  return { type: types.LOAD_INCIDENTS, courses };
}

export function UpdateIncidentAction(courses) {
  return { type: types.UPDATE_INCIDENT, courses };
}

export function LoadIncidents() {
  return function (dispatch) {
    return api.incidents
      .getIncidents()
      .then((incidents) => {
        dispatch(LoadIncidentsAction(incidents));
      })
      .catch((error) => {
        console.dir(error);
        throw error;
      });
  };
}

export function UpdateIncident(data) {
  return function (dispatch) {
    return api.incidents
      .changeStatus(data)
      .then((incident) => {
        dispatch(UpdateIncidentAction(incident));
      })
      .catch((error) => {
        console.dir(error);
        throw error;
      });
  };
}
