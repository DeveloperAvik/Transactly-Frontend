// src/redux/features/auth/auth.api.ts
import { baseApi } from "@/redux/baseApi";
import { IResponse, ISendOtp, IVerifyOtp, ILogin } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<any>, ILogin>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
    }),
    logout: builder.mutation<IResponse<null>, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    register: builder.mutation<IResponse<any>, Partial<any>>({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    // userInfo: try /user/me first; backend may implement it as /user/me or /auth/me.
    userInfo: builder.query<any, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        // try primary endpoint
        const tryEndpoints = ["/user/me", "/auth/me", "/user/profile", "/user"];
        for (const url of tryEndpoints) {
          // fetchWithBQ expects an object like { url, method }
          // eslint-disable-next-line no-await-in-loop
          const res: any = await fetchWithBQ({ url, method: "GET" } as any);
          if ((res as any).error) {
            // continue to next
            continue;
          } else {
            return { data: (res as any).data };
          }
        }
        return { error: { status: 404, data: { message: "User not found" } } };
      },
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUserInfoQuery,
  useLogoutMutation,
} = authApi;
