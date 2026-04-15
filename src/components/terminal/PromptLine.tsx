import type { ReactNode } from "react";

interface PromptLineProps {
  user?: string;
  host?: string;
  cwd?: string;
  command: ReactNode;
}

export function PromptLine({
  user = "guest",
  host = "mrdemonwolf",
  cwd = "~",
  command,
}: PromptLineProps) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 whitespace-pre-wrap">
      <span className="text-mp-dim">
        <span className="text-mp-green">{user}</span>
        <span className="text-mp-dim">@</span>
        <span className="text-mp-magenta">{host}</span>
        <span className="text-mp-dim">:</span>
        <span className="text-mp-cyan">{cwd}</span>
        <span className="text-mp-dim">$</span>
      </span>
      <span className="text-mp-fg">{command}</span>
    </div>
  );
}

export function OutputLine({ children }: { children: ReactNode }) {
  return <div className="whitespace-pre-wrap text-mp-fg/90">{children}</div>;
}
