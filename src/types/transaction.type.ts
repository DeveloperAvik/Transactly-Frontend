export interface ITransaction {
  id: string;
  type: "send" | "deposit" | "withdraw" | "cashin" | "cashout";
  amount: number;
  from?: string;
  to?: string;
  status: "pending" | "success" | "failed";
  createdAt: string;
  meta?: Record<string, any>;
}

export interface ITransactionRequest {
  amount: number;
  to?: string; 
  from?: string;
  note?: string;
}
