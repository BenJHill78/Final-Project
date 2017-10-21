import axios from "axios";

export default {
  // Gets all requests
  getRequest: function() {
    return axios.get("/api/requests");
  },
  // Gets the request with the given id
  getRequest: function(id) {
    return axios.get("/api/requests/" + id);
  },
  // Deletes the request with the given id
  deleteRequest: function(id) {
    return axios.delete("/api/requests/" + id);
  },
  // Saves a request to the database
  saveRequest: function(requestData) {
    return axios.post("/api/requests", requestData);
  },

  login: function(userData) {
    return axios.post("/api/auth/login", userData);
  },
  logout: function() {
    return axios.get("/api/auth/logout");
  },
  register: function(userData) {
    return axios.post("/api/auth/register", userData);
  },
}; 