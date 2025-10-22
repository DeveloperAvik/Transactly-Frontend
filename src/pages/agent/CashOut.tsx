
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCashOutMutation } from "@/redux/features/transaction/transaction.api";
import { toast } from "sonner";

export default function CashOut() {
  const { register, handleSubmit } = useForm<{ user: string; amount: number }>();
  const [cashOut, { isLoading }] = useCashOutMutation();

  const onSubmit = async (vals: any) => {
    try {
      await cashOut(vals).unwrap();
      toast.success("Cash-out successful");
    } catch (err: any) {
      toast.error(err?.data?.message || "Cash-out failed");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Agent Cash Out</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
        <div>
          <label className="block text-sm">User (phone/email)</label>
          <Input {...register("user", { required: true })} />
        </div>
        <div>
          <label className="block text-sm">Amount</label>
          <Input type="number" {...register("amount", { required: true, valueAsNumber: true })} />
        </div>

        <Button type="submit" disabled={isLoading}>{isLoading ? "Processing..." : "Confirm Cash Out"}</Button>
      </form>
    </div>
  );
}
