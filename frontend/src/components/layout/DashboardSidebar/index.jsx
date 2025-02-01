import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BookmarkCheck,
  ChartColumn,
  Presentation,
  LogOut,
  MessageCircleQuestion,
  Star,
  ArrowBigUpDash,
  UserRound,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui";
import { Img } from "@/components/common";
import { NavLogo } from "@/assets";
import {
  isValidRole,
  pathMenteeCertificates,
  pathMentorFeedbacks,
  pathHome,
  pathProfile,
  pathMentorReviews,
  pathSessions,
  pathSignIn,
  pathMenteeStatistics,
  pathAdminUsers,
} from "@/utils";
import { useUserStore } from "@/store";
const DashboardSidebar = () => {
  const { user } = useUserStore();
  // Menu items.
  const menteeItems = [
    {
      title: "Statistics",
      url: pathMenteeStatistics,
      icon: ChartColumn,
    },
    {
      title: "Certificates",
      url: pathMenteeCertificates,
      icon: BookmarkCheck,
    },
  ];
  const mentorItems = [
    {
      title: "Feedbacks",
      url: pathMentorFeedbacks,
      icon: MessageCircleQuestion,
    },
    {
      title: "Reviews",
      url: pathMentorReviews,
      icon: Star,
    },
  ];
  const adminItems = [
    {
      title: "Feedbacks",
      url: pathAdminUsers,
      icon: Users,
    },
  ];

  return (
    <Sidebar>
      <div className="bg-gray-200 flex flex-col items-center justify-between h-full">
        <div className="w-full">
          <SidebarHeader>
            <Link to={pathHome} className="p-2 pb-0">
              <Img alt="Navbar Logo" src={NavLogo} className="h-8" />
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              {/* Common User routes */}
              {isValidRole(user.role, ["user", "mentor", "mentee"]) && (
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to={pathSessions}>
                          <Presentation />
                          <span>Sessions</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              )}

              {/* Admin routes */}
              {isValidRole(user.role, ["admin"]) && (
                <>
                  <SidebarGroupLabel>Admin</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {adminItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link to={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </>
              )}
              {/* Mentee routes */}
              {isValidRole(user.role, ["mentee"]) && (
                <>
                  <SidebarGroupLabel>Mentee</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {menteeItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link to={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </>
              )}

              {/* Mentor routes */}
              {isValidRole(user.role, ["mentor"]) ? (
                <>
                  <SidebarGroupLabel>Mentor</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {mentorItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link to={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </>
              ) : (
                !user.role.includes("admin") && (
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <Button className="w-full" variant="success">
                          <ArrowBigUpDash />
                          <span>Become a Mentor</span>
                        </Button>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                )
              )}
            </SidebarGroup>
          </SidebarContent>
        </div>

        {/* Commont Profile and Logout footer */}
        <SidebarFooter className="w-full">
          <Button variant="ghost" className="pl-2">
            <Link
              to={pathProfile}
              className="w-full flex items-center justify-between"
            >
              <div className="w-10 p-0.5 aspect-square rounded-full border-4 border-blue-400">
                <div className="w-full h-full bg-black rounded-full"></div>
              </div>
              <span>Md Abu Saiem</span>
              <UserRound />
            </Link>
          </Button>
          <Button variant="destructive">
            <Link
              to={pathSignIn}
              className="w-full flex items-center justify-between"
            >
              <span>Logout</span>
              <LogOut />
            </Link>
          </Button>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
};
export default DashboardSidebar;
