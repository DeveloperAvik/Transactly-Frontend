
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCashInMutation } from "@/redux/features/transaction/transaction.api";
import { toast } from "sonner";

export default function CashIn() {
  const { register, handleSubmit } = useForm<{ user: string; amount: number }>();
  const [cashIn, { isLoading }] = useCashInMutation();

  const onSubmit = async (vals: any) => {
    try {
      await cashIn(vals).unwrap();
      toast.success("Cash-in successful");
    } catch (err: any) {
      toast.error(err?.data?.message || "Cash-in failed");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Agent Cash In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
        <div>
          <label className="block text-sm">User (phone/email)</label>
          <Input {...register("user", { required: true })} />
        </div>
        <div>
          <label className="block text-sm">Amount</label>
          <Input type="number" {...register("amount", { required: true, valueAsNumber: true })} />
        </div>

        <Button type="submit" disabled={isLoading}>{isLoading ? "Processing..." : "Confirm Cash In"}</Button>
      </form>
    </div>
  );
}
