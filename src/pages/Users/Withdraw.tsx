
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWithdrawMutation } from "@/redux/features/transaction/transaction.api";
import { toast } from "sonner";

export default function Withdraw() {
  const { register, handleSubmit } = useForm<{ amount: number; method?: string }>();
  const [withdraw, { isLoading }] = useWithdrawMutation();

  const onSubmit = async (vals: any) => {
    try {
      await withdraw(vals).unwrap();
      toast.success("Withdraw request submitted");
    } catch (err: any) {
      toast.error(err?.data?.message || "Withdraw failed");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Withdraw</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
        <div>
          <label className="block text-sm">Amount</label>
          <Input type="number" {...register("amount", { required: true, valueAsNumber: true })} />
        </div>

        <Button type="submit" disabled={isLoading}>{isLoading ? "Processing..." : "Withdraw"}</Button>
      </form>
    </div>
  );
}
