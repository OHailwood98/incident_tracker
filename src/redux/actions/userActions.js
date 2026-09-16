import * as Types from "../ActionTypes";
import api from "../../api";
import setAuthHeader from "../../utils/setAuthHeader";

export const userLoggedIn = (user) => ({
  type: Types.USER_LOGGED_IN,
  user,
});

export const userLoggedOut = () => ({
  type: Types.USER_LOGGED_OUT,
});

export const login = (credentials) => {
  return function (dispatch) {
    return api.user
      .login(credentials)
      .then((user) => {
        dispatch(userLoggedIn(user));
        setAuthHeader(user.token);
      })
      .catch((error) => {
        console.dir(error);
        throw error;
      });
  };
};

export const logout = () => {
  return function (dispatch) {
    return () => {
      dispatch(userLoggedOut());
      setAuthHeader();
    };
  };
};
