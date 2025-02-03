import {
  DashboardSidebar,
  FullScreenLoading,
  SidebarProvider,
  SidebarTrigger,
} from "@/components";
import { useTitle } from "@/hooks";
import { useUserStore } from "@/store";
import { Outlet } from "react-router";

const Dashboard = () => {
  useTitle("Dashboard");
  const {isLoading} = useUserStore()
  if(isLoading) return <FullScreenLoading fullScreen/>
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
