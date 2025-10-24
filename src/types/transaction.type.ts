/** 💸 Transaction Entity */
export interface ITransaction {
  id: string;
  type: "send" | "deposit" | "withdraw" | "cashin" | "cashout";
  amount: number;
  from?: string; // Wallet ID or User reference
  to?: string;   // Wallet ID or User reference
  status: "pending" | "success" | "failed";
  createdAt: string;
  meta?: Record<string, any>; // Optional metadata (e.g. transaction note, agent info)
}

/** 🧾 Request body for transaction-based APIs */
export interface ITransactionRequest {
  amount: number;
  to?: string;   // Optional (for send or transfer)
  from?: string; // Optional (for admin/agent actions)
  note?: string; // Optional user note or reference
}
