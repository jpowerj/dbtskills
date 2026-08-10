import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import PrivacyNote from '../components/PrivacyNote';

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="flex flex-col gap-1.5 mb-5">
        <span className="text-sm text-muted-foreground">Theme</span>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm cursor-pointer"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="px-0 text-muted-foreground hover:text-foreground underline"
        onClick={() => setTheme('system')}
      >
        Reset theme to default
      </Button>

      <PrivacyNote />
    </section>
  );
}