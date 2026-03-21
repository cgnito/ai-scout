"use client"

import { useEffect, useState } from "react"

export function StatusIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [dots, setDots] = useState("")

  useEffect(() => {
    // Animate dots
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return ""
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-3">
      {/* Pulsing dot */}
      <div className="relative">
        <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-foreground' : 'bg-foreground/30'}`} />
        {isOnline && (
          <div className="absolute inset-0 w-2 h-2 rounded-full bg-foreground animate-ping opacity-75" />
        )}
      </div>
      
      {/* Status text */}
      <span className="font-mono text-xs sm:text-sm tracking-wider text-muted-foreground uppercase">
        system status: <span className={isOnline ? 'text-foreground' : 'text-foreground/50'}>{isOnline ? 'online' : 'offline'}</span>
        <span className="inline-block w-6 text-left">{dots}</span>
      </span>
    </div>
  )
}