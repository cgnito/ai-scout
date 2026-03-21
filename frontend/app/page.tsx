import { GridBackground } from "@/components/grid-background"
import { BriefingButton } from "@/components/briefing-button"
import { StatusIndicator } from "@/components/status-indicator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <ThemeToggle />
      <GridBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4 text-center">
        {/* Title */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-balance">proxy</span>
          </h1>
          <p className="text-lg font-medium tracking-widest text-muted-foreground uppercase sm:text-xl">
            your personal intel agent. always ready.
          </p>
        </div>

        {/* Main Interactive Button */}
        <BriefingButton />

        {/* Status Indicator */}
        <StatusIndicator />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 z-10">
        <p className="text-center font-mono text-xs text-muted-foreground/60 tracking-wide">
          powered by fastapi, firecrawl, elevenlabs
        </p>
      </footer>
    </main>
  )
}