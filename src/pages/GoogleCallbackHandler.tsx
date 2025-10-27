import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const GoogleCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Parse ?token=xyz from the URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Store the JWT (you can store in localStorage or cookie)
      localStorage.setItem("auth_token", token);

      // Show success message
      toast.success("Logged in with Google successfully!");

      // Redirect to dashboard or home
      navigate("/dashboard/user");
    } else {
      toast.error("Google login failed. Please try again.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Verifying your Google account...
      </h2>
      <p className="text-muted-foreground">Please wait while we log you in.</p>
    </div>
  );
};

export default GoogleCallback;
