"use client"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { NotebookPenIcon } from "lucide-react"
import { NavLink } from "react-router"
import { ThemeToggle } from "./theme-toggle"

export function TeamSwitcher() {
  const { isMobile, setOpenMobile } = useSidebar();
  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem onClick={handleLinkClick}>
        <NavLink to='/' end>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <NotebookPenIcon />
            </div>
            <div className="text-left text-sm leading-tight">
              <span className="truncate font-medium">DBTSkills.io</span>
            </div>
          </SidebarMenuButton>
        </NavLink>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
