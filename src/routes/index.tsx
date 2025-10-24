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

// User pages
import UserDashboard from "@/pages/Users/Dashboard";
import SendMoney from "@/pages/Users/SendMoney";
import Deposit from "@/pages/Users/Deposit";
import Withdraw from "@/pages/Users/Withdraw";
import TransactionsPage from "@/pages/Users/Transactions";

// Agent pages
import AgentDashboard from "@/pages/agent/Dashboard";
import CashIn from "@/pages/agent/CashIn";
import CashOut from "@/pages/agent/CashOut";

// Admin pages
import AdminDashboard from "@/pages/admin/Dashboard";

import { createBrowserRouter } from "react-router-dom";

/**
 * ⚙️ Application Router Configuration
 * Uses React Router v6.23+ (createBrowserRouter)
 * Includes:
 * - Public routes (Landing, Auth, Info)
 * - Protected Dashboard (User / Agent / Admin)
 * - 404 fallback
 */
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "features", Component: FeaturesPage },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
    ],
  },

  // 🔐 Auth Routes
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  { path: "/verify", Component: Verify },

  // 🧭 Protected Dashboard Routes
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          // 👤 User
          { path: "user", element: <UserDashboard /> },
          { path: "user/send", element: <SendMoney /> },
          { path: "user/deposit", element: <Deposit /> },
          { path: "user/withdraw", element: <Withdraw /> },
          { path: "user/transactions", element: <TransactionsPage /> },

          // 🧾 Agent
          { path: "agent", element: <AgentDashboard /> },
          { path: "agent/cashin", element: <CashIn /> },
          { path: "agent/cashout", element: <CashOut /> },
          { path: "agent/transactions", element: <TransactionsPage /> },

          // 🛠 Admin
          { path: "admin", element: <AdminDashboard /> },
          { path: "admin/transactions", element: <TransactionsPage /> },
        ],
      },
    ],
  },

  // 🚫 404 - Not Found
  {
    path: "*",
    element: (
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-4">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a href="/" className="text-primary underline">
          Go back to Home
        </a>
      </div>
    ),
  },
]);
