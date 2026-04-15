import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  ThemeContext,
  type Override,
  type Resolved,
} from "./theme-context";

const STORAGE_KEY = "mdw-theme";

function readOverride(): Override {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

function getSystem(): Resolved {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [override, setOverrideState] = useState<Override>(() => readOverride());
  const [system, setSystem] = useState<Resolved>(() => getSystem());

  const resolved: Resolved = override ?? system;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolved === "dark");
  }, [resolved]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) =>
      setSystem(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = useCallback(() => {
    const next: Resolved = resolved === "dark" ? "light" : "dark";
    setOverrideState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage blocked — in-memory only */
    }
  }, [resolved]);

  return (
    <ThemeContext.Provider value={{ resolved, override, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
