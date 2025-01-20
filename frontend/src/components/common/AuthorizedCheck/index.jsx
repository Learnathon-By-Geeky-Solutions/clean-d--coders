/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Navigate } from "react-router";
import { useUserStore } from "@/store";
import { memo } from "react";

const AuthorizedCheck = memo(({ children, role, common = false }) => {
    const { user, isLoading } = useUserStore();
    if (isLoading) return <p>Loading....</p>
    else if (!user?.role) return <Navigate to="/sign-in" />;
    else if (common || role === user?.role) return children;
  
    return <Navigate to="/dashboard/profile" />;
  });

export default AuthorizedCheck;
