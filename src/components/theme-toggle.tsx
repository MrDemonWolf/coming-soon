import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
  const { resolved, toggle } = useTheme();
  const isDark = resolved === "dark";
  const Icon = isDark ? Sun : Moon;
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="fixed bottom-4 right-4 z-50 grid h-10 w-10 place-items-center rounded-full terminal-glass text-mp-fg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mp-magenta"
    >
      <Icon className="h-4 w-4" strokeWidth={2} />
    </button>
  );
}
