export function TitleBar() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 font-sans text-[0.72rem] tracking-wide text-mp-dim select-none">
      <div className="flex items-center gap-[0.4rem]">
        <TrafficLight color="var(--tl-red)" />
        <TrafficLight color="var(--tl-yellow)" />
        <TrafficLight color="var(--tl-green)" />
      </div>
      <div className="flex-1 text-center">bash — 80×24</div>
      <div className="text-mp-dim/80 font-mono text-[0.7rem]">~/mrdemonwolf</div>
    </div>
  );
}

function TrafficLight({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      className="block h-[12px] w-[12px] rounded-full"
      style={{
        background: color,
        boxShadow:
          "inset 0 0 0 0.5px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.35)",
      }}
    />
  );
}
