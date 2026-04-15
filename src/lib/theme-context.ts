import { createContext, useContext } from "react";

export type Resolved = "light" | "dark";
export type Override = Resolved | null;

export interface ThemeContextValue {
  resolved: Resolved;
  override: Override;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
