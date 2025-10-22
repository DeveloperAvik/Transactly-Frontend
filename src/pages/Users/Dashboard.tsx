
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function UserDashboard() {
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;

  const balance = user?.wallet?.balance ?? 0;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">User Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">
              {balance.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <a className="text-sm text-primary" href="/dashboard/user/send">Send Money</a>
              <a className="text-sm text-primary" href="/dashboard/user/deposit">Deposit</a>
              <a className="text-sm text-primary" href="/dashboard/user/withdraw">Withdraw</a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <div>{user?.name}</div>
              <div className="text-muted-foreground">{user?.email}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
