/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Navigate } from "react-router";
import PropTypes from 'prop-types';
import { useUserStore } from "@/store";
import { memo } from "react";
import { FullScreenLoading } from "@/components/layout";

const AuthorizedCheck = memo(({ children, role, common = false }) => {
    const { user, isLoading } = useUserStore();
    if (isLoading) return <FullScreenLoading />;
    else if (!user?.role) return <Navigate to="/sign-in" />;
    else if (common || user?.role?.includes(role)) return children;
  
    return <Navigate to="/dashboard/common/profile" />;
  });
AuthorizedCheck.propTypes = {
  children: PropTypes.node,
  role: PropTypes.string,
  common: PropTypes.bool
};

export default AuthorizedCheck;
