// src/redux/features/transaction/transaction.api.ts
import { baseApi } from "@/redux/baseApi";
import { ITransaction, ITransactionRequest } from "@/types/transaction.type";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<ITransaction[], { page?: number; limit?: number } | void>({
      query: (params) => ({
        url: "/transactions",
        method: "GET",
        params,
      }),
      providesTags: ["TRANSACTION"],
    }),
    sendMoney: builder.mutation({
      query: (payload: ITransactionRequest) => ({
        url: "/transactions/send",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),
    deposit: builder.mutation({
      query: (payload: ITransactionRequest) => ({
        url: "/transactions/deposit",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),
    withdraw: builder.mutation({
      query: (payload: ITransactionRequest) => ({
        url: "/transactions/withdraw",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),
    // Agent actions
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
