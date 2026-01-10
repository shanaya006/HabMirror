"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit3, Sparkles } from "lucide-react"

interface AvatarState {
  mood: string
  message: string
  visualEffects: string[]
  bgGradient: string
}

interface AvatarDisplayProps {
  stepsProgress: number
  waterProgress: number
  screenTime: number
  sleepProgress: number
  onCustomize: () => void
}

export default function AvatarDisplay({
  stepsProgress,
  waterProgress,
  screenTime,
  sleepProgress,
  onCustomize,
}: AvatarDisplayProps) {
  const [avatarCustomization, setAvatarCustomization] = useState({
    outfit: "casual",
    hair: "long-dark",
    skinTone: "medium",
    accessories: [],
  })

  const getDetailedAvatarState = (): AvatarState => {
    // Priority-based mood calculation
    if (sleepProgress < 60) {
      return {
        mood: "sleepy",
        message: "Your avatar is barely keeping their eyes open... seriously, get some sleep!",
        visualEffects: ["tired-eyes", "yawning", "slouched"],
        bgGradient: "from-slate-400 to-slate-600",
      }
    }

    if (sleepProgress < 75) {
      return {
        mood: "tired",
        message: "Your avatar looks sleepy with those eye bags... time to hit the pillow!",
        visualEffects: ["eye-bags", "droopy-eyes"],
        bgGradient: "from-blue-300 to-blue-500",
      }
    }

    if (screenTime > 8) {
      return {
        mood: "sad",
        message: "Whoa! Your avatar's eyes are strained from all that screen time!",
        visualEffects: ["red-eyes", "squinting", "phone-glow"],
        bgGradient: "from-orange-400 to-red-500",
      }
    }

    if (screenTime > 6) {
      return {
        mood: "sleepy",
        message: "Looks like you spent more time scrolling... let's bounce back tomorrow!",
        visualEffects: ["frowning", "tense"],
        bgGradient: "from-yellow-400 to-orange-500",
      }
    }

    if (stepsProgress < 30) {
      return {
        mood: "tired",
        message: "Your avatar feels weak and sluggish... time to get those legs moving!",
        visualEffects: ["slouched", "low-energy", "pale"],
        bgGradient: "from-gray-300 to-gray-500",
      }
    }

    if (stepsProgress < 50) {
      return {
        mood: "sad",
        message: "Your avatar needs some energy - let's get moving!",
        visualEffects: ["low-energy", "tired-posture"],
        bgGradient: "from-slate-300 to-slate-500",
      }
    }

    if (waterProgress < 50) {
      return {
        mood: "sad",
        message: "Your avatar is looking a bit dry... drink up!",
        visualEffects: ["dry-lips", "dull-skin"],
        bgGradient: "from-amber-300 to-amber-500",
      }
    }

    // Positive states
    if (stepsProgress >= 100 && waterProgress >= 100 && sleepProgress >= 90 && screenTime <= 4) {
      return {
        mood: "excited",
        message: "WOW! Your avatar is absolutely glowing with health and energy!",
        visualEffects: ["glowing", "confident-pose", "bright-eyes", "perfect-skin"],
        bgGradient: "from-emerald-300 via-teal-400 to-cyan-500",
      }
    }

    if (stepsProgress >= 100 && waterProgress >= 100 && sleepProgress >= 85) {
      return {
        mood: "excited",
        message: "Your avatar is bursting with energy! Keep up the amazing work!",
        visualEffects: ["bright-eyes", "confident-pose", "healthy-glow"],
        bgGradient: "from-green-400 to-emerald-500",
      }
    }

    if (stepsProgress >= 80 && waterProgress >= 75 && sleepProgress >= 75) {
      return {
        mood: "excited",
        message: "Way to go! You're crushing your goals today!",
        visualEffects: ["smiling", "upright-posture", "bright-eyes"],
        bgGradient: "from-green-300 to-green-500",
      }
    }

    if (stepsProgress >= 60 || waterProgress >= 60 || sleepProgress >= 70) {
      return {
        mood: "excited",
        message: "Your avatar is feeling pretty good! You're on the right track!",
        visualEffects: ["slight-smile", "relaxed"],
        bgGradient: "from-teal-300 to-teal-500",
      }
    }

    return {
      mood: "happy",
      message: "Keep going! You're making progress!",
      visualEffects: ["neutral-expression"],
      bgGradient: "from-gray-400 to-gray-600",
    }
  }

  const getAvatarImage = (mood: string) => {
    // Map moods to different avatar expressions
    const moodImageMap: Record<string, string> = {
      
      happy: "/public/happy.jpg",
      sad: "/public/sad.jpg",
      excited: "/public/excited.jpg",
      tired: "/public/tired.jpg",
      sleepy: "/public/sleepy.jpg",
    }

    return (
      moodImageMap[mood] ||
      "/public/happy.jpg"
    )
  }

  const avatarState = getDetailedAvatarState()

  return (
    <div className="relative">
      <div
        className={`w-40 h-40 rounded-full bg-gradient-to-br ${avatarState.bgGradient} p-1 mb-4 mx-auto relative overflow-hidden`}
      >
        {/* Glow effect for positive moods */}
        {avatarState.visualEffects.includes("glowing") && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200/30 to-emerald-200/30 animate-pulse" />
        )}

        <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
          <img
            src={getAvatarImage(avatarState.mood) || "/placeholder.svg"}
            alt="Your Avatar"
            className={`w-36 h-36 rounded-full object-cover transition-all duration-500 ${
              avatarState.visualEffects.includes("glowing")
                ? "brightness-110 contrast-110"
                : avatarState.visualEffects.includes("low-energy")
                  ? "brightness-75 contrast-90"
                  : avatarState.visualEffects.includes("tired-eyes")
                    ? "brightness-85"
                    : ""
            }`}
          />

          {/* Visual effect overlays */}
          {avatarState.visualEffects.includes("phone-glow") && (
            <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse" />
          )}

          {avatarState.visualEffects.includes("healthy-glow") && (
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full" />
          )}
        </div>

        {/* Sparkle effects for radiant mood */}
        {avatarState.mood === "radiant" && (
          <>
            <Sparkles className="absolute top-2 right-4 h-4 w-4 text-yellow-300 animate-pulse" />
            <Sparkles className="absolute bottom-4 left-2 h-3 w-3 text-emerald-300 animate-pulse delay-300" />
            <Sparkles className="absolute top-6 left-6 h-2 w-2 text-cyan-300 animate-pulse delay-700" />
          </>
        )}
      </div>

      <div className="text-center space-y-3">
        <h2 className="text-lg font-semibold">Your Avatar</h2>

        <Badge
          variant={avatarState.mood === "excited" || avatarState.mood === "happy" ? "default" : "secondary"}
          className={`${
            avatarState.mood === "happy"
              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
              : avatarState.mood === "excited"
                ? "bg-green-500 text-white"
                : avatarState.mood === "happy"
                  ? "bg-green-400 text-white"
                  : avatarState.mood === "tired"
                    ? "bg-blue-500 text-white"
                    : avatarState.mood === "sleepy"
                      ? "bg-orange-500 text-white"
                      : avatarState.mood === "sad"
                        ? "bg-gray-500 text-white"
                        : ""
          }`}
        >
          {avatarState.mood.charAt(0).toUpperCase() + avatarState.mood.slice(1)}
        </Badge>

        <p className="text-sm text-muted-foreground leading-relaxed px-2">{avatarState.message}</p>

        <Button variant="outline" size="sm" className="mt-3 bg-transparent" onClick={onCustomize}>
          <Edit3 className="h-4 w-4 mr-2" />
          Customize Avatar
        </Button>

        {/* Health status indicators */}
        <div className="flex justify-center gap-1 mt-2">
          {avatarState.visualEffects.map((effect, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                effect.includes("glow") || effect.includes("bright")
                  ? "bg-green-400"
                  : effect.includes("tired") || effect.includes("eye")
                    ? "bg-blue-400"
                    : effect.includes("strain") || effect.includes("red")
                      ? "bg-red-400"
                      : effect.includes("low") || effect.includes("weak")
                        ? "bg-gray-400"
                        : "bg-yellow-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}