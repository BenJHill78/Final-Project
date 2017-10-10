import axios from "axios";

export default {
  // Gets all neighborhoods
  getRequest: function() {
    return axios.get("/api/request");
  },
  // Gets the Neighborhood with the given id
  getRequest: function(id) {
    return axios.get("/api/request/" + id);
  },
  // Deletes the Neighborhood with the given id
  deleteRequest: function(id) {
    return axios.delete("/api/request/" + id);
  },
  // Saves a Neighborhood to the database
  saveRequest: function(requestData) {
    return axios.post("/api/request", requestData);
  }
};
