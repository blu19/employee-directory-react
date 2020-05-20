import axios from "axios";

export default {
  // Gets all users and updates every time app refreshes
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
