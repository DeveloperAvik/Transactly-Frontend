import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

/**
 * 🌐 Base RTK Query API instance configured with Axios
 * - Centralized API layer for all modules (auth, transactions, etc.)
 * - Enables automatic caching, re-fetching, and tag-based invalidation
 */
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["USER", "TRANSACTION"],
  endpoints: () => ({}),
});
