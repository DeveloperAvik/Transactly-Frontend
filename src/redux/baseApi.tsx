// src/redux/baseApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

/**
 * Base RTK Query API instance configured with Axios
 * - Reused across all feature APIs
 * - Supports tag invalidation for user & transaction data
 */
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["USER", "TRANSACTION"], 
  endpoints: () => ({}),
});
