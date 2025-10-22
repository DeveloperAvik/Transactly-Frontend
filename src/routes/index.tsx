// src/routes/index.tsx
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import FeaturesPage from "@/pages/FeaturesPage";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import ProtectedRoute from "@/routes/ProtectedRoute";
import DashboardLayout from "@/components/layout/DashboardLayout";

// ✅ Dashboard Pages (import when created)
import UserDashboard from "@/pages/Users/Dashboard";
import AdminDashboard from "@/pages/admin/Dashboard";
import AgentDashboard from "@/pages/agent/Dashboard";

// Optional future pages
// import SendMoney from "@/pages/Users/SendMoney";
// import Withdraw from "@/pages/Users/Withdraw";
// import Transactions from "@/pages/Users/Transactions";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  // 🌐 Public routes
  {
    Component: App,
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "features", Component: FeaturesPage },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
    ],
  },

  // 🔐 Authentication routes
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  { path: "/verify", Component: Verify },

  // 🧭 Protected Dashboard Routes
  {
    path: "/dashboard",
    element: <ProtectedRoute />, // role/auth guard
    children: [
      {
        element: <DashboardLayout />, // sidebar + topbar layout
        children: [
          // USER
          { path: "user", element: <UserDashboard /> },

          // AGENT
          { path: "agent", element: <AgentDashboard /> },

          // ADMIN
          { path: "admin", element: <AdminDashboard /> },

          // Optionally, add nested role routes here later
          // { path: "user/send", element: <SendMoney /> },
          // { path: "user/withdraw", element: <Withdraw /> },
          // { path: "user/transactions", element: <Transactions /> },
        ],
      },
    ],
  },

  // 🚧 404 fallback
  {
    path: "*",
    element: (
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-4">
          The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="text-primary underline hover:text-primary/80 transition"
        >
          Go back to Home
        </a>
      </div>
    ),
  },
]);
