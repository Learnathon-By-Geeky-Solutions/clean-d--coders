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
import { Img } from "@/components/common";
import { NavLogo } from "@/assets";
export function DashboardSidebar() {
  const [mentor, setMentor] = useState(false);
  const [mentee, setMentee] = useState(false);
  // Menu items.
  const menteeItems = [
    {
      title: "Statistics",
      url: "/dashboard/mentee/statistics",
      icon: ChartColumn,
    },
    {
      title: "Certificates",
      url: "/dashboard/mentee/certificates",
      icon: BookmarkCheck,
    },
  ];
  const mentorItems = [
    {
      title: "Feedbacks",
      url: "/dashboard/mentor/feedbacks",
      icon: MessageCircleQuestion,
    },
    {
      title: "Reviews",
      url: "/dashboard/mentor/reviews",
      icon: Star,
    },
  ];

  return (
    <Sidebar>
      <div className="bg-gray-200 flex flex-col items-center justify-between h-full">
      <div className="w-full">
      <SidebarHeader>
        <Link to="/" className="p-2 pb-0">
          <Img 
            alt="Navbar Logo"
            src={NavLogo}
            className="h-8"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Common</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/dashboard/common/sessions">
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
      </div>
      <SidebarFooter className="w-full">
        <Button variant="ghost" className="pl-2">
          <Link
            to="/dashboard/common/profile"
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
            to="/sign-up"
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
}
