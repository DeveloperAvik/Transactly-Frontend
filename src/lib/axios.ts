// src/lib/axios.ts
import config from "@/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: config.apiUrl,
  timeout: config.apiTimeout,
  withCredentials: true, // send cookies for auth flows
});

// Request interceptor (lightweight)
axiosInstance.interceptors.request.use(
  (cfg) => {
    // you can attach auth headers here if you store tokens in memory
    return cfg;
  },
  (err) => Promise.reject(err)
);

// Response interceptor: normalize errors to a consistent shape
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response) {
      // prefer backend payload if available
      return Promise.reject(error.response);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
