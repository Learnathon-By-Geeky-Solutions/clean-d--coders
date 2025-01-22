import {
  DashboardSidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components";
import { Outlet } from "react-router";

const Dashboard = () => {
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
