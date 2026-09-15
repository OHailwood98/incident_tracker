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
};

export default api;
