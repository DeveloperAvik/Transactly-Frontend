import { Navigate, Outlet } from "react-router-dom";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";


export default function ProtectedRoute() {
  const { data, isLoading, isError } = useUserInfoQuery(undefined);

  if (isLoading) {
    return (
      <div className="h-screen grid place-items-center">
        <div>Loading...</div>
      </div>
    );
  }

  const isAuthenticated = !!data?.data?.email;

  if (isError || !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}