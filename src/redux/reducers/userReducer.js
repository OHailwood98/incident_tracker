import * as types from "../ActionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return action.user;
    case types.USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
