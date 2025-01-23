import {
  DashboardSidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components";
import { useTitle } from "@/hooks";
import { Outlet } from "react-router";

const Dashboard = () => {
  useTitle("Dashboard");
  return (
      <SidebarProvider>
        <DashboardSidebar />
        <>
          <SidebarTrigger />
          <Outlet />
        </>
      </SidebarProvider>
  );
};

export default Dashboard;
