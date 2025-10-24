// 🔐 Auth-related Types
export type { ISendOtp, IVerifyOtp, ILogin } from "./auth.type";

/** 🌐 Generic API Response Type */
export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
