import axios from "axios";

const setAuthHeader = (token = null) => {
  if (token) {
    axios.defaults.headers.common.authorisation = token;
  } else {
    delete axios.defaults.headers.common.authorisation;
  }
};

export default setAuthHeader;
