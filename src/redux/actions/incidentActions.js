import * as types from "../ActionTypes";
import api from "../../api";

export function LoadIncidentsAction(incidents) {
  return { type: types.LOAD_INCIDENTS, incidents };
}

export function LoadIncidents() {
  return function (dispatch) {
    return api.incidents
      .getIncidents()
      .then((incidents) => {
        console.dir(incidents);
        dispatch(LoadIncidentsAction(incidents));
      })
      .catch((err) => {
        console.dir(err);
        throw err;
      });
  };
}
