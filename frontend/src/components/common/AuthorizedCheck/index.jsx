/* eslint-disable react/prop-types */
import { Navigate } from "react-router";
import { useUserStore } from "@/store";

const AuthorizedCheck = ({ children, role, common = false }) => {
  const { user } = useUserStore();
  if (!user?.role) return <Navigate to="/sign-in" />;
  else if (common || role === user?.role) return children;

  return <Navigate to="/dashboard/profile" />;
};

export default AuthorizedCheck;
