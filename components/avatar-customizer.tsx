"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const poses = [
  {
    id: 1,
    name: "Happy",
    image: "/public/happy.jpg", 
    thumbnail: "/public/happy.jpg",  },
  {
    id: 2,
    name: "Sad",
    image:
      "/public/sad.jpg", 
    thumbnail:
      "/public/sad.jpg"  },
  {
    id: 3,
    name: "Excited",
    image:
      "/public/excited.jpg", 
    thumbnail:
      "/public/excited.jpg"  },
  {
    id: 4,
    name: "Tired",
    image:
      "/public/tired.jpg", 
    thumbnail:
      "/public/tired.jpg"  },
  {
    id: 5,
    name: "Sleepy",
    image:
      "/public/sleepy.jpg", 
    thumbnail:
      "/public/sleepy.jpg"  },
]

const backgrounds = [
  {
    id: 1,
    name: "Gradient Dark",
    class: "bg-gradient-to-b from-gray-800 to-gray-900",
  },
  {
    id: 2,
    name: "Forest",
    class: "bg-gradient-to-b from-green-800 to-green-900",
  },
  {
    id: 3,
    name: "Ocean",
    class: "bg-gradient-to-b from-blue-800 to-blue-900",
  },
  {
    id: 4,
    name: "fire",
    class: "bg-gradient-to-b from-blue-800 to-blue-900",
  },
  {
    id: 5,
    name: "snowy",
    class: "bg-gradient-to-b from-blue-800 to-blue-900",
  },
]

export default function AvatarCustomizer() {
  const [selectedPose, setSelectedPose] = useState(poses[0])
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0])
  const [activeTab, setActiveTab] = useState<"backgrounds" | "poses">("poses")

  return (
    <div className={cn("min-h-screen flex flex-col", selectedBackground.class)}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Button
          variant="ghost"
          size="icon">
          <X className="h-6 w-6" />
        </Button>

        <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 font-medium">Save</Button>
      </div>

      {/* Avatar Display */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="relative">
          <img
            src={selectedPose.image || "/placeholder.svg"}
            alt={`Avatar in ${selectedPose.name} pose`}
            className="w-64 h-96 object-contain"
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="min-h-screen bg-background">

        {/* Tab Headers */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab("backgrounds")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                activeTab === "backgrounds" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black",
              )}
            >
              Backgrounds
            </button>
            <button
              onClick={() => setActiveTab("poses")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                activeTab === "poses" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black",
              )}
            >
              Poses
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "poses" && (
          <div className="grid grid-cols-3 gap-4">
            {poses.map((pose) => (
              <button
                key={pose.id}
                onClick={() => setSelectedPose(pose)}
                className={cn(
                  "relative aspect-[3/4] rounded-2xl overflow-hidden border-2 transition-all",
                  selectedPose.id === pose.id
                    ? "border-black shadow-lg scale-105"
                    : "border-gray-200 hover:border-gray-300",
                )}
              >
                <img
                  src={pose.thumbnail || "/placeholder.svg"}
                  alt={pose.name}
                  className="w-full h-full object-cover"
                />
                {selectedPose.id === pose.id && (
                  <div className="absolute inset-0 bg-black/10 flex items-end justify-center pb-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {activeTab === "backgrounds" && (
          <div className="grid grid-cols-3 gap-4">
            {backgrounds.map((bg) => (
              <button
                key={bg.id}
                onClick={() => setSelectedBackground(bg)}
                className={cn(
                  "relative aspect-[3/4] rounded-2xl overflow-hidden border-2 transition-all",
                  selectedBackground.id === bg.id
                    ? "border-black shadow-lg scale-105"
                    : "border-gray-200 hover:border-gray-300",
                )}
              >
                <div className={cn("w-full h-full", bg.class)}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">{bg.name}</span>
                </div>
                {selectedBackground.id === bg.id && (
                  <div className="absolute inset-0 bg-black/10 flex items-end justify-center pb-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}