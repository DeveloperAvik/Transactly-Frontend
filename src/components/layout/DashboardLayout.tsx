import { Link, Outlet, useOutletContext } from "react-router-dom";
import { ModeToggle } from "./ModeToggler";
// import { Button } from "@/components/ui/button";

export default function DashboardLayout() {
  const { role } = useOutletContext<{ role: string }>();

  const links =
    role === "admin"
      ? [
          { label: "Dashboard", path: "/dashboard/admin" },
          { label: "Users", path: "/dashboard/admin/users" },
          { label: "Agents", path: "/dashboard/admin/agents" },
          { label: "Transactions", path: "/dashboard/admin/transactions" },
        ]
      : role === "agent"
      ? [
          { label: "Dashboard", path: "/dashboard/agent" },
          { label: "Cash In", path: "/dashboard/agent/cashin" },
          { label: "Cash Out", path: "/dashboard/agent/cashout" },
        ]
      : [
          { label: "Dashboard", path: "/dashboard/user" },
          { label: "Send Money", path: "/dashboard/user/send" },
          { label: "Withdraw", path: "/dashboard/user/withdraw" },
          { label: "Transactions", path: "/dashboard/user/history" },
        ];

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-muted p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-4 capitalize">{role} Panel</h2>
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <ModeToggle />
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
