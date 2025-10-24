// src/redux/features/transaction/transaction.api.ts
import { baseApi } from "@/redux/baseApi";
import { ITransaction, ITransactionRequest } from "@/types/transaction.type";

/**
 * Backend routes use /transaction (singular) in your backend.
 * Align frontend paths to backend endpoints:
 *  - GET /api/v1/transaction/          -> list all
 *  - POST /api/v1/transaction/deposit -> deposit
 *  - POST /api/v1/transaction/withdraw -> withdraw
 *  - POST /api/v1/transaction/transfer -> transfer/send
 *
 * Agent endpoints in backend may vary; these endpoints attempt conventional paths:
 *  - POST /api/v1/agent/cashin
 *  - POST /api/v1/agent/cashout
 */

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<ITransaction[], { page?: number; limit?: number } | void>({
      query: (params) => ({
        url: "/transaction",
        method: "GET",
        params,
      }),
      providesTags: ["TRANSACTION"],
    }),
    sendMoney: builder.mutation({
      query: (payload: ITransactionRequest) => ({
        url: "/transaction/transfer",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),
    deposit: builder.mutation({
      query: (payload: ITransactionRequest) => ({
        url: "/transaction/deposit",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),
    withdraw: builder.mutation({
      query: (payload: ITransactionRequest) => ({
        url: "/transaction/withdraw",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),
    // Agent actions (match backend agent routes)
    cashIn: builder.mutation({
      query: (payload: ITransactionRequest) => ({
        url: "/agent/cashin",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),
    cashOut: builder.mutation({
      query: (payload: ITransactionRequest) => ({
        url: "/agent/cashout",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTransactionsQuery,
  useSendMoneyMutation,
  useDepositMutation,
  useWithdrawMutation,
  useCashInMutation,
  useCashOutMutation,
} = transactionApi;
