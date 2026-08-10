"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
  useSidebar
} from "@/components/ui/sidebar"
import { NotebookPenIcon, RoadIcon, BrainIcon, HandshakeIcon, ActivityIcon, FaceAngryIcon, CogIcon } from "lucide-react"
import { NavLink } from "react-router-dom"
import { ThemeToggle } from "./theme-toggle"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Mindfulness",
      url: "#",
      icon: (
        <BrainIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "M3: Wise Mind Practice",
          url: "#",
        },
      ],
    },
    {
      title: "Interpersonal Effectiveness",
      url: "#",
      icon: (
        <HandshakeIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "IE2: Challenging Myths",
          url: "#",
        },
      ],
    },
    {
      title: "Emotional Regulation",
      url: "#",
      icon: (
        <ActivityIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "ER3: Myths About Emotions",
          url: "#",
        },
      ],
    },
    {
      title: "Distress Tolerance",
      url: "#",
      icon: (
        <FaceAngryIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "DT2: The STOP Skill",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, setOpenMobile } = useSidebar();
  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex">
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuButton asChild onClick={handleLinkClick}>
              <NavLink to='/settings'>
                <CogIcon />
                <span>Settings</span>
              </NavLink>
            </SidebarMenuButton>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
