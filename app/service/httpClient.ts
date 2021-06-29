import axios from "axios";

export const Api = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
  },
  baseURL: "https://picsum.photos/",
});

Api.interceptors.request.use((config) => {
  return config;
});
