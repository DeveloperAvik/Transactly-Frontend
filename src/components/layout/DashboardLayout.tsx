
import { Link, Outlet } from "react-router-dom";
import { ModeToggle } from "./ModeToggler";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

type Role = "user" | "agent" | "admin" | string;

export default function DashboardLayout() {
  const { data } = useUserInfoQuery(undefined);
  const role: Role = (data?.data?.role as Role) || "user";

  const links =
    role === "admin"
      ? [
          { label: "Overview", path: "/dashboard/admin" },
          { label: "Users", path: "/dashboard/admin/users" },
          { label: "Agents", path: "/dashboard/admin/agents" },
          { label: "Transactions", path: "/dashboard/admin/transactions" },
        ]
      : role === "agent"
      ? [
          { label: "Overview", path: "/dashboard/agent" },
          { label: "Cash In", path: "/dashboard/agent/cashin" },
          { label: "Cash Out", path: "/dashboard/agent/cashout" },
          { label: "Transactions", path: "/dashboard/agent/transactions" },
        ]
      : [
          { label: "Overview", path: "/dashboard/user" },
          { label: "Send Money", path: "/dashboard/user/send" },
          { label: "Deposit", path: "/dashboard/user/deposit" },
          { label: "Withdraw", path: "/dashboard/user/withdraw" },
          { label: "Transactions", path: "/dashboard/user/transactions" },
        ];

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-muted border-r p-4 flex flex-col justify-between">
        <div>
          <Link to="/" className="block mb-6 text-lg font-semibold">
            Dashboard
          </Link>

          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="rounded px-2 py-2 text-sm hover:bg-accent/60 hover:text-accent-foreground transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </aside>

      <main className="flex-1 bg-background p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
