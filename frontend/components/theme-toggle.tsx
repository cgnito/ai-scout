"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full border border-border bg-card/80" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:border-foreground/20 cursor-pointer"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-foreground transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Moon className="w-5 h-5 text-foreground transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  )
}
