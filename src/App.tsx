import { useEffect, useState } from "react";
import { ThemeProvider } from "@/lib/theme";
import { ThemeToggle } from "@/components/theme-toggle";
import { TerminalWindow } from "@/components/terminal/TerminalWindow";
import { PromptLine, OutputLine } from "@/components/terminal/PromptLine";
import { HostnameHero } from "@/components/terminal/HostnameHero";
import { StatusGrid } from "@/components/terminal/StatusGrid";

export default function App() {
  const [hostname, setHostname] = useState("localhost");

  useEffect(() => {
    const h = window.location.hostname || "localhost";
    setHostname(h);
    document.title = `${h} — Coming Soon`;
  }, []);

  return (
    <ThemeProvider>
      <div className="page-backdrop" aria-hidden />
      <main className="relative z-10 min-h-svh grid place-items-center p-[clamp(1rem,4vw,3rem)] bg-background text-foreground">
        <TerminalWindow>
          <PromptLine command="whoami" />
          <OutputLine>guest</OutputLine>
          <PromptLine command="hostname" />
          <HostnameHero hostname={hostname} />
          <StatusGrid />
          <div className="mt-8 flex flex-wrap justify-between gap-2 border-t border-dashed border-[color:var(--border)] pt-4 text-[0.7rem] uppercase tracking-[0.12em] text-mp-dim">
            <span>mrdemonwolf-kernel 26.0</span>
            <a
              href="https://mrdemonwolf.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mp-dim transition hover:text-mp-cyan focus-visible:outline-none focus-visible:text-mp-cyan"
            >
              Powered by MrDemonWolf, Inc.
            </a>
          </div>
        </TerminalWindow>
      </main>
      <ThemeToggle />
    </ThemeProvider>
  );
}
