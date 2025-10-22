
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDepositMutation } from "@/redux/features/transaction/transaction.api";
import { toast } from "sonner";

export default function Deposit() {
  const { register, handleSubmit } = useForm<{ amount: number }>();
  const [deposit, { isLoading }] = useDepositMutation();

  const onSubmit = async (vals: any) => {
    try {
      await deposit(vals).unwrap();
      toast.success("Deposit request submitted");
    } catch (err: any) {
      toast.error(err?.data?.message || "Deposit failed");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Deposit</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
        <div>
          <label className="block text-sm">Amount</label>
          <Input type="number" {...register("amount", { required: true, valueAsNumber: true })} />
        </div>

        <Button type="submit" disabled={isLoading}>{isLoading ? "Processing..." : "Deposit"}</Button>
      </form>
    </div>
  );
}
