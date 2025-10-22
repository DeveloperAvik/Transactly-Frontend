import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Wallet Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Balance</CardTitle>
          </CardHeader>
          <CardContent>₹12,500</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Last Transaction</CardTitle>
          </CardHeader>
          <CardContent>Sent ₹500 to Rahul</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent>Active</CardContent>
        </Card>
      </div>
    </div>
  );
}
