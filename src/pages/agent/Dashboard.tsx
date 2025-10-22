
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgentDashboard() {
  // placeholder stats
  const totalHandled = 124;
  const todayVolume = 45200;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Agent Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Transactions Handled</CardTitle>
          </CardHeader>
          <CardContent>{totalHandled}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today Volume</CardTitle>
          </CardHeader>
          <CardContent>₹{todayVolume.toLocaleString()}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <a href="/dashboard/agent/cashin" className="text-primary">Cash In</a>
              <a href="/dashboard/agent/cashout" className="text-primary">Cash Out</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
