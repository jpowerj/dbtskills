import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils';
import { AppSidebar } from '@/components/app-sidebar'
import { Separator } from '@/components/ui/separator'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from './components/ui/breadcrumb';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/settings': 'Settings',
  '/chain-analysis': 'Chain Analysis',
};

export default function Layout() {
  const location = useLocation();
  const currentTitle = pageTitles[location.pathname] ?? 'DBT Skills';
  const isHome = location.pathname === '/';
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="md:hidden flex items-center gap-2 px-4 h-14 border-b mb-3">
          <SidebarTrigger />
          <span className="font-medium text-muted-foreground">DBTSkills.io &nbsp; •</span><span className="font-medium">{currentTitle}</span>
        </header>
        <header className="hidden md:flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild>
                    <NavLink to="/" end>
                      Home
                    </NavLink>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {!isHome && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{currentTitle}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
