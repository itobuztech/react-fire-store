import axios from "axios";

const API_ROOT = "";

const axiosInstance = axios.create({
  baseURL: API_ROOT,
  timeout: 1000,
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json"
  // }
});

export default axiosInstance;
