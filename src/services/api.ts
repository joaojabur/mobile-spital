import axios from "axios";

const baseURL = "http://192.168.15.17:3333/";

const api = axios.create({
  baseURL,
});

export default api;
