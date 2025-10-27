// src/redux/axiosBaseQuery.ts
import axiosInstance from "@/lib/axios";

export const axiosBaseQuery =
  () =>
  async ({ url, method, body, params }: any) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data: body, // 👈 important
        params,
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return { data: result.data };
    } catch (axiosError: any) {
      const err = axiosError?.response;
      console.error("❌ Axios Error Response:", err?.data || err);
      return {
        error: {
          status: err?.status,
          data: err?.data || err,
        },
      };
    }
  };
