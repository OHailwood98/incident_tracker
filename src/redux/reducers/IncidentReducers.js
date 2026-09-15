import * as types from "../ActionTypes";
import initialState from "./initialState";

export default function IncidentReducer(
  state = initialState.incidents,
  action,
) {
  switch (action.type) {
    case types.LOAD_INCIDENTS:
      return action.incidents;
    default:
      return state;
  }
}
