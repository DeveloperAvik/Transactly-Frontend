import { baseApi } from "@/redux/baseApi";
import { IResponse, ISendOtp, IVerifyOtp, ILogin } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 🔐 LOGIN
login: builder.mutation<IResponse<any>, ILogin>({
  query: (userInfo) => ({
    url: "/auth/login",
    method: "POST",
    body: userInfo,
  }),
}),

    // 🚪 LOGOUT
    logout: builder.mutation<IResponse<null>, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),

    // 🧾 REGISTER
    register: builder.mutation<IResponse<any>, Partial<any>>({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        body: userInfo, // ✅ unified
      }),
    }),

    // 📧 SEND OTP
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        body: userInfo, // ✅ unified
      }),
    }),

    // ✅ VERIFY OTP
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        body: userInfo, // ✅ unified
      }),
    }),

    // 👤 GET USER INFO
    userInfo: builder.query<any, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const tryEndpoints = ["/auth/me", "/user/me", "/user/profile"];
        for (const url of tryEndpoints) {
          const res: any = await fetchWithBQ({ url, method: "GET" } as any);
          if (!res.error) return { data: res.data };
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
