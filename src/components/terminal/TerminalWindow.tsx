import type { ReactNode } from "react";
import { TitleBar } from "./TitleBar";

export function TerminalWindow({ children }: { children: ReactNode }) {
  return (
    <div className="terminal-glass w-[min(920px,96vw)] overflow-hidden rounded-[14px]">
      <TitleBar />
      <div className="border-t border-[color:var(--border)]" />
      <div className="bg-[color-mix(in_srgb,var(--mp-bg)_94%,transparent)] px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(1.5rem,4vw,2.5rem)] font-mono text-[clamp(0.88rem,1.1vw,1rem)] leading-[1.65] text-mp-fg">
        {children}
      </div>
    </div>
  );
}
