"use client"

import { useState, useCallback } from "react"
import { useConversation } from "@elevenlabs/react"

export function BriefingButton() {
  const [isHovered, setIsHovered] = useState(false)
  const conversation = useConversation()

  const handleStartBriefing = useCallback(async () => {
    try {
      // 1. Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // 2. Pull Agent ID from the environment variable
      const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;

      // Safety check: If the ID is missing from .env
      if (!agentId) {
        console.error("Environment variable NEXT_PUBLIC_ELEVENLABS_AGENT_ID is missing.");
        alert("Configuration Error: Voice link ID not found.");
        return;
      }

      // 3. Start the session
      await conversation.startSession({
        agentId: agentId,
        connectionType: 'websocket', // Required to fix TS2345 error
      });
    } catch (error) {
      console.error("Failed to start briefing:", error);
      alert("Microphone access is required for voice intel.");
    }
  }, [conversation]);

  const handleStopBriefing = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isActive = conversation.status === "connected";

  return (
    <div className="relative">
      <div 
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${
          isActive 
            ? 'from-emerald-500/40 via-emerald-500/20 to-emerald-500/40' 
            : 'from-foreground/10 via-foreground/5 to-foreground/10'
        } blur-xl transition-opacity duration-500 ${
          isHovered || isActive ? 'opacity-100' : 'opacity-50'
        } ${isActive ? 'animate-pulse' : ''}`}
      />
      
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={isActive ? handleStopBriefing : handleStartBriefing}
        className={`relative group flex flex-col items-center justify-center gap-4 px-16 py-12 sm:px-24 sm:py-16 rounded-2xl border transition-all duration-300 backdrop-blur-sm cursor-pointer ${
          isActive 
            ? 'border-emerald-500/50 bg-emerald-500/10' 
            : 'border-border bg-gradient-to-b from-card to-secondary hover:border-foreground/20'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            isActive ? 'border-emerald-500 animate-pulse' : 'border-foreground/30'
          }`}>
            {isActive ? (
              <div className="w-6 h-6 bg-emerald-500 rounded-sm" />
            ) : (
              <div className="w-0 h-0 border-l-[16px] sm:border-l-[20px] border-l-foreground border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1.5" />
            )}
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-2">
          <span className="text-xl sm:text-2xl font-semibold tracking-wide text-foreground uppercase">
            {isActive ? "End Briefing" : "Start Briefing"}
          </span>
          <span className="text-xs sm:text-sm font-mono text-muted-foreground tracking-wider">
            {isActive ? "Proxy is listening..." : "click to activate voice intel"}
          </span>
        </div>
      </button>
    </div>
  )
}