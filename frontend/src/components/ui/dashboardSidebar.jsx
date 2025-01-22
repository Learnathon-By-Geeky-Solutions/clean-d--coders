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
} from "./sidebar";
import {
  BookmarkCheck,
  ChartColumn,
  Presentation,
  LogOut,
  MessageCircleQuestion,
  Star,
  ArrowBigUpDash,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui";
import { useState } from "react";
export function DashboardSidebar() {
  const [mentor, setMentor] = useState(false);
  const [mentee, setMentee] = useState(false);
  // Menu items.
  const menteeItems = [
    {
      title: "Statistics",
      url: "/dashboard/statistics",
      icon: ChartColumn,
    },
    {
      title: "Certificates",
      url: "/dashboard/certificates",
      icon: BookmarkCheck,
    },
  ];
  const mentorItems = [
    {
      title: "Feedbacks",
      url: "/dashboard/feedbacks",
      icon: MessageCircleQuestion,
    },
    {
      title: "Reviews",
      url: "/dashboard/certificates",
      icon: Star,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Link to="/">Mentor Connect</Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Common</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/dashboard/sessions">
                    <Presentation />
                    <span>Sessions</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>Mentee</SidebarGroupLabel>
          {mentee ? (
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
          ) : (
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Button
                    className="w-full"
                    variant="success"
                    onClick={() => setMentee(true)}
                  >
                    <ArrowBigUpDash />
                    <span>Become a Mentee</span>
                  </Button>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          )}
          <SidebarGroupLabel>Mentor</SidebarGroupLabel>
          {mentor ? (
    
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
    
          ) : (
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Button
                    className="w-full"
                    variant="success"
                    onClick={() => setMentor(true)}
                  >
                    <ArrowBigUpDash />
                    <span>Become a Mentor</span>
                  </Button>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost">
          <Link
            to="/dashboard/profile"
            className="w-full flex items-center justify-between"
          >
            <span>Profile</span>
            <UserRound />
          </Link>
        </Button>
        <Button variant="default">
          <Link
            to="/sign-up"
            className="w-full flex items-center justify-between"
          >
            <span>Logout</span>
            <LogOut />
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
