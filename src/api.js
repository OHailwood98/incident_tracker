import axios from "axios";

const api = {
  incidents: {
    addIncident: (data) =>
      axios.post("api/incidents/add").then((res) => res.data),
  },
};

export default api;
