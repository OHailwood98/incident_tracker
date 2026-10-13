import axios from "axios";

const api = {
  incidents: {
    addIncident: (data) =>
      axios
        .post("http://localhost:8080/api/incident/add", data)
        .then((res) => res.data),
    getIncidents: () =>
      axios
        .get("http://localhost:8080/api/incident/getincidents")
        .then((res) => res.data),
    getIncident: (id) =>
      axios
        .post("http://localhost:8080/api/incident/getincident", id)
        .then((res) => res.data),
    addMessage: (data) =>
      axios
        .post("http://localhost:8080/api/incident/addmessage", data)
        .then((res) => res.data),
  },
  user: {
    login: (credentials) =>
      axios
        .post("http://localhost:8080/api/user/login", { credentials })
        .then((res) => res.data.user),
    signup: (credentials) =>
      axios
        .post("http://localhost:8080/api/user/signup", { credentials })
        .then((res) => res.data.user),
  },
  users: {
    getUsers: () =>
      axios
        .get("http://localhost:8080/api/user/getusers")
        .then((res) => res.data),
    makeAdmin: (id) =>
      axios
        .post("http://localhost:8080/api/user/makeadmin", id)
        .then((res) => res.data),
  },
};

export default api;
