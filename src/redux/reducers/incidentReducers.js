import * as types from "../ActionTypes";
import initialState from "./initialState";

export default function IncidentReducer(
  state = initialState.incidents,
  action,
) {
  switch (action.type) {
    case types.UPDATE_INCIDENT:
      return state.map((incident) => {
        if (incident._id === action.courses._id) {
          return action.courses;
        } else {
          return incident;
        }
      });
    case types.LOAD_INCIDENTS:
      return action.courses;
    default:
      return state;
  }
}
