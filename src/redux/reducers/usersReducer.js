import * as types from "../ActionTypes";
import initialState from "./initialState";

export default function UsersReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.UPDATE_USER:
      return state.map((user) => {
        if (user._id === action.user._id) {
          return action.user;
        } else {
          return user;
        }
      });
    case types.LOAD_USERS:
      return action.users;
    default:
      return state;
  }
}
