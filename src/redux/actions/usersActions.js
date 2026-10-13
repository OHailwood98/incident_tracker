import * as types from "../ActionTypes";
import api from "../../api";

export function LoadUsersAction(users) {
  return { type: types.LOAD_USERS, users };
}

export function UpdateUsersAction(user) {
  return { type: types.UPDATE_USER, user };
}

export function LoadUsers() {
  return function (dispatch) {
    return api.users
      .getUsers()
      .then((users) => {
        console.dir(users);
        dispatch(LoadUsersAction(users));
      })
      .catch((error) => {
        console.dir(error);
        throw error;
      });
  };
}

export function MakeAdmin(id) {
  return function (dispatch) {
    return api.users
      .makeAdmin(id)
      .then((user) => {
        console.dir(user);
        dispatch(UpdateUsersAction(user));
      })
      .catch((error) => {
        console.dir(error);
        throw error;
      });
  };
}
