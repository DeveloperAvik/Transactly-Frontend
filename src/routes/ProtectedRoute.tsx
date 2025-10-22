import { Navigate, Outlet } from "react-router-dom";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function ProtectedRoute() {
  const { data, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  const role = data?.data?.role;
  const isAuthenticated = !!data?.data?.email;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet context={{ role }} />;
}