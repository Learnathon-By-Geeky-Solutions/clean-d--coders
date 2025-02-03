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
  const { isLoading } = useUserStore();
  if (isLoading) return <FullScreenLoading fullScreen />;
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <>
        <SidebarTrigger className="fixed top-0 left-0" />
        <div className="w-full overflow-hidden p-5 md:p-10">
          <Outlet />
        </div>
      </>
    </SidebarProvider>
  );
};

export default Dashboard;
