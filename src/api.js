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
};

export default api;
