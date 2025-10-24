import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import z from "zod";

const FormSchema = z.object({
  pin: z.string().min(6, { message: "OTP must be 6 digits" }),
});

export default function Verify() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve email from navigation state
  const email = location.state?.email;
  const [confirmed, setConfirmed] = useState(false);
  const [timer, setTimer] = useState(0);

  const [sendOtp] = useSendOtpMutation();
  const [verifyOtp] = useVerifyOtpMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { pin: "" },
  });

  // Auto send OTP when email exists
  useEffect(() => {
    if (email) {
      handleSendOtp();
    } else {
      navigate("/register");
    }
  }, [email]);

  const handleSendOtp = async () => {
    const toastId = toast.loading("Sending OTP...");
    try {
      const res = await sendOtp({ email }).unwrap();
      if (res.success) {
        toast.success("OTP sent successfully", { id: toastId });
        setConfirmed(true);
        setTimer(60);
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to send OTP", { id: toastId });
    }
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const toastId = toast.loading("Verifying OTP...");
    try {
      const res = await verifyOtp({ email, otp: data.pin }).unwrap();
      if (res.success) {
        toast.success("Email verified successfully!", { id: toastId });
        navigate("/dashboard/user"); // ✅ redirect after success
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Invalid OTP", { id: toastId });
    }
  };

  // Countdown timer for resend
  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  return (
    <div className="grid place-content-center h-screen">
      {confirmed ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Verify your email</CardTitle>
            <CardDescription>
              Enter the 6-digit OTP sent to <b>{email}</b>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>OTP</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          {[...Array(6)].map((_, i) => (
                            <InputOTPGroup key={i}>
                              <InputOTPSlot index={i} />
                            </InputOTPGroup>
                          ))}
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Verify
                </Button>
              </form>
            </Form>
            <div className="text-sm mt-4 text-center">
              Didn’t get OTP?{" "}
              <button
                onClick={handleSendOtp}
                className={cn(
                  "text-primary font-semibold hover:underline disabled:text-gray-400",
                  timer > 0 && "pointer-events-none"
                )}
                disabled={timer > 0}
              >
                Resend OTP {timer > 0 && `(${timer}s)`}
              </button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Verify your email</CardTitle>
            <CardDescription>
              Sending OTP to <b>{email}</b>...
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
