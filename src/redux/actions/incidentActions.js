import * as types from "../ActionTypes";
import api from "../../api";

export function LoadIncidentsAction(incident) {
  return { type: types.LOAD_INCIDENTS, incident };
}

export function LoadIncidents() {
  return function (dispatch) {
    return api.incidents
      .getIncidents()
      .then((incidents) => {
        console.dir(incidents);
        dispatch(LoadIncidentsAction(incidents));
      })
      .catch((error) => {
        console.dir(error);
        throw error;
      });
  };
}
