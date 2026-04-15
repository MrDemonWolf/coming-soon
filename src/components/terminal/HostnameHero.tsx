import { useEffect, useState } from "react";

interface HostnameHeroProps {
  hostname: string;
}

const START_DELAY_MS = 420;
const CHAR_MS = 70;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HostnameHero({ hostname }: HostnameHeroProps) {
  const reduced = prefersReducedMotion();
  const [shown, setShown] = useState(reduced ? hostname : "");
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (!hostname) return;
    if (reduced) {
      setShown(hostname);
      setDone(true);
      return;
    }
    setShown("");
    setDone(false);
    let i = 0;
    let timeoutId: number | undefined;
    const tick = () => {
      if (i <= hostname.length) {
        setShown(hostname.slice(0, i));
        i += 1;
        timeoutId = window.setTimeout(tick, CHAR_MS);
      } else {
        setDone(true);
      }
    };
    timeoutId = window.setTimeout(tick, START_DELAY_MS);
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [hostname, reduced]);

  return (
    <h1
      className="hostname-hero mt-6 mb-2 font-mono font-medium tracking-[-0.03em] leading-[0.95] text-mp-yellow text-[clamp(2.2rem,8vw,5.5rem)] break-all"
      aria-label={hostname}
    >
      <span>{shown || "\u00A0"}</span>
      {done && <span className="cursor-block" aria-hidden />}
    </h1>
  );
}
