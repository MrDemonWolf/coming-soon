interface StatusGridProps {
  version?: string;
}

export function StatusGrid({ version = "0.1.0" }: StatusGridProps) {
  return (
    <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-[0.78rem] uppercase tracking-[0.12em] text-mp-dim">
      <dt>Status</dt>
      <dd className="text-mp-green font-medium">Coming Soon</dd>
      <dt>Uptime</dt>
      <dd className="text-mp-fg">∞</dd>
      <dt>Version</dt>
      <dd className="text-mp-cyan">{version}</dd>
    </dl>
  );
}
