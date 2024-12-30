import axios from "axios";

const api = axios.create({
  baseURL: "https://cognitive-backend-4444c52b6fcc.herokuapp.com/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
