
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  // placeholder stats
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader><CardTitle>Total Users</CardTitle></CardHeader>
          <CardContent>1,230</CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Total Agents</CardTitle></CardHeader>
          <CardContent>83</CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Transaction Count</CardTitle></CardHeader>
          <CardContent>8,432</CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Volume</CardTitle></CardHeader>
          <CardContent>₹9,42,000</CardContent>
        </Card>
      </div>
    </div>
  );
}
