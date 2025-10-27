// src/lib/axios.ts
import config from "@/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: config.apiUrl, 
  timeout: config.apiTimeout || 10000,
  withCredentials: true, 
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (cfg) => cfg,
  (err) => Promise.reject(err)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status === 401) {
      console.warn("Unauthorized – user might be logged out.");
    }
    return Promise.reject(error.response || error);
  }
);

export default axiosInstance;
