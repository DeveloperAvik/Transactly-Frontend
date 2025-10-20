"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useLoginMutation } from "@/redux/features/auth/auth.api"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

// ✅ Define typed default values for the form
interface LoginFormValues extends FieldValues {
  email: string
  password: string
}

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate()
  const [login] = useLoginMutation()

  // ✅ Initialize the form properly with default values
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const res = await login(data).unwrap()
      console.log("Login Success:", res)
      toast.success("Login successful!")
    } catch (err: any) {
      console.error("Login error:", err)

      if (err?.status === 401) {
        toast.error("Your account is not verified")
        navigate("/verify", { state: data.email })
      } else {
        toast.error("Login failed. Please check your credentials.")
      }
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to log in to your account
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        {/* Divider */}
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        {/* Google Login */}
        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
          onClick={() => toast.info("Google login not yet implemented")}
        >
          Login with Google
        </Button>
      </div>

      {/* Footer */}
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  )
}
