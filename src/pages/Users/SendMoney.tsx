
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSendMoneyMutation } from "@/redux/features/transaction/transaction.api";
import { toast } from "sonner";

export default function SendMoney() {
  const { register, handleSubmit } = useForm<{ to: string; amount: number; note?: string }>();
  const [sendMoney, { isLoading }] = useSendMoneyMutation();

  const onSubmit = async (vals: any) => {
    try {
      await sendMoney(vals).unwrap();
      toast.success("Money sent");
    } catch (err: any) {
      toast.error(err?.data?.message || "Send failed");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Send Money</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
        <div>
          <label className="block text-sm">Recipient (phone or email)</label>
          <Input {...register("to", { required: true })} />
        </div>
        <div>
          <label className="block text-sm">Amount</label>
          <Input type="number" {...register("amount", { required: true, valueAsNumber: true })} />
        </div>
        <div>
          <label className="block text-sm">Note (optional)</label>
          <Input {...register("note")} />
        </div>

        <Button type="submit" disabled={isLoading}>{isLoading ? "Sending..." : "Send"}</Button>
      </form>
    </div>
  );
}
