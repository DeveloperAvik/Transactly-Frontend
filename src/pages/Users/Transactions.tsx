
import { useGetTransactionsQuery } from "@/redux/features/transaction/transaction.api";

export default function TransactionsPage() {
  const { data = [], isLoading, isError } = useGetTransactionsQuery({ page: 1, limit: 20 });

  if (isLoading) return <div>Loading transactions...</div>;
  if (isError) return <div>Failed to load transactions</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <div className="space-y-2">
        {data.length === 0 && <div className="text-muted-foreground">No transactions found.</div>}
        {data.map((t) => (
          <div key={t.id} className="p-3 border rounded flex justify-between items-center">
            <div>
              <div className="font-medium">{t.type.toUpperCase()}</div>
              <div className="text-sm text-muted-foreground">{new Date(t.createdAt).toLocaleString()}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">₹{t.amount.toLocaleString()}</div>
              <div className={`text-sm ${t.status === "success" ? "text-green-600" : t.status === "failed" ? "text-red-600" : "text-yellow-600"}`}>
                {t.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
