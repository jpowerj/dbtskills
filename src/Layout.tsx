import { NavLink, Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex items-center justify-between px-6 py-4 border-b bg-card">
        <div className="flex items-center gap-5">
          <NavLink to="/" end className="text-lg font-semibold tracking-tight text-foreground no-underline">
            DBTSkills.io
          </NavLink>
          <NavLink
              to="/settings"
              className={({ isActive }) =>
                cn(
                  'text-sm text-muted-foreground hover:text-foreground',
                  isActive && 'text-foreground border-primary'
                )
              }
            >
              Settings
            </NavLink>
        </div>
        <div className="flex items-center gap-5">
          <ThemeToggle />
        </div>
      </nav>
      <main className="flex-1 w-full max-w-xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
