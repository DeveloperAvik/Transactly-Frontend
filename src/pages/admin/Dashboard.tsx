import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Admin Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>1,230</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Agents</CardTitle>
          </CardHeader>
          <CardContent>83</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
          </CardHeader>
          <CardContent>₹9,42,000</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>21</CardContent>
        </Card>
      </div>
    </div>
  );
}
