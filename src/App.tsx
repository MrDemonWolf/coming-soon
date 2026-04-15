import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    const h = window.location.hostname;
    setHostname(h);
    document.title = `${h} — Coming Soon`;
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-8 py-16 px-8">
          <h1 className="text-5xl md:text-6xl font-semibold text-muted-foreground text-center break-all">
            {hostname || "\u00A0"}
          </h1>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Coming Soon
          </p>
          <a
            href="https://mrdemonwolf.me/"
            className="text-sm text-primary hover:underline"
            rel="noopener noreferrer"
          >
            Powered by MrDemonWolf, Inc.
          </a>
        </CardContent>
      </Card>
    </main>
  );
}
