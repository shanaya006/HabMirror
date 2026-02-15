"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Footprints,
  Droplets,
  Smartphone,
  Moon,
  Users,
  Home,
  Zap,
  Award,
  Sparkles,
  Crown,
  Star,
  Flame,
  Shield,
  Gem,
  Medal,
  LogIn,
  UserPlus,
} from "lucide-react"
import SocialFeed from "./social-feed"
import FriendsManager from "./friends-manager"
import ChallengesSystem from "./challenges-system"
import LeaderboardsAchievements from "./leaderboards-achievements"
import SeasonalEvents from "./seasonal-events"

interface HealthMetric {
  id: string
  title: string
  current: number
  goal: number
  unit: string
  icon: React.ReactNode
  color: string
  bgColor: string
}

export default function HealthDashboard() {
  const [metrics] = useState<HealthMetric[]>([
    {
      id: "steps",
      title: "Steps",
      current: 8560,
      goal: 10000,
      unit: "steps",
      icon: <Footprints className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-gray-400",
    },
    {
      id: "water",
      title: "Water Intake",
      current: 7,
      goal: 8,
      unit: "glasses",
      icon: <Droplets className="h-6 w-6 text-blue-800" />,
      color: "text-accent",
      bgColor: "bg-gray-400",
    },
    {
      id: "screen",
      title: "Screen Time",
      current: 5.5,
      goal: 6,
      unit: "hours",
      icon: <Smartphone className="h-6 w-6 text-white-600" />,
      color: "text-secondary-foreground",
      bgColor: "bg-gray-400",
    },
    {
      id: "sleep",
      title: "Sleep",
      current: 6,
      goal: 8,
      unit: "hours",
      icon: <Moon className="h-6 w-6 text-gray-700" />,
      color: "text-muted-foreground",
      bgColor: "bg-gray-400",
    },
  ])

  const getProgressPercentage = (current: number, goal: number) => Math.min((current / goal) * 100, 100)

  const handleCustomizeAvatar = () => console.log("Opening avatar customization...")

  const playerStats = {
    level: 42,
    xp: 2847,
    xpToNext: 3500,
    coins: 1250,
    streak: 7,
    rank: "Champion",
  }

  const achievements = [
    { id: 1, name: "Hydration Hero", icon: <Droplets className="h-4 w-4" />, rarity: "legendary", unlocked: true },
    { id: 2, name: "Step Master", icon: <Footprints className="h-4 w-4" />, rarity: "epic", unlocked: true },
    { id: 3, name: "Sleep Champion", icon: <Moon className="h-4 w-4" />, rarity: "rare", unlocked: true },
    { id: 4, name: "Digital Detox", icon: <Smartphone className="h-4 w-4" />, rarity: "common", unlocked: false },
    { id: 5, name: "Consistency King", icon: <Crown className="h-4 w-4" />, rarity: "legendary", unlocked: true },
    { id: 6, name: "Wellness Warrior", icon: <Shield className="h-4 w-4" />, rarity: "epic", unlocked: false },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20"
      case "epic":
        return "text-purple-500 bg-purple-500/10 border-purple-500/20"
      case "rare":
        return "text-accent-foreground bg-accent/10 border-accent/20 text-gray-400"
      default:
        return "text-muted-foreground bg-muted/10 border-muted/20"
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Tabs defaultValue="dashboard" className="w-full">
        <div className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg border border-primary/30 relative overflow-hidden">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">HabMirror</h1>
                <p className="text-muted-foreground">Reflects back your lifestyle</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-primary text-foreground hover:bg-primary bg-transparent">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button size="sm" className="bg-primary hover:bg-gray-700/60 text-white">
                <UserPlus className="h-4 w-4 mr-2 text-white" />
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-6">
          <TabsContent value="dashboard">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-4 bg-primary text-whitex rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Crown className="h-5 w-5 text-yellow-300" />
                      <span className="font-bold text-lg text-white">Level {playerStats.level}</span>
                      <Badge className="bg-yellow-600 text-yellow-100 border-yellow-500 font-semibold">
                        {playerStats.rank}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Gem className="h-4 w-4 text-accent-foreground" />
                        <span className="font-medium text-white">{playerStats.coins}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="h-4 w-4 text-destructive" />
                        <span className="font-medium text-white">{playerStats.streak} day streak</span>
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleCustomizeAvatar} className="bg-card hover:bg-gray-700/50 text-foreground border-border font-medium">
                    <Sparkles className="h-4 w-4 mr-2 " />
                    Customize
                  </Button>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-white">XP Progress</span>
                    <span className="font-medium text-white">
                      {playerStats.xp} / {playerStats.xpToNext}
                    </span>
                  </div>
                  <Progress value={(playerStats.xp / playerStats.xpToNext) * 100} className="h-2 bg-muted" />
                </div>
              </CardContent>

              <div className="p-6 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-80 bg-card rounded-2xl flex items-center justify-center overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                    <img
                      src="/excited.jpg"
                      alt="Your Avatar"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="absolute -top-2 -right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-primary">
                    <Star className="h-3 w-3 text-white" />
                    Excited
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Medal className="h-5 w-5 text-yellow-500" />
                  Today's performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric) => (
                    <div key={metric.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg ${metric.bgColor} ${metric.color}`}>{metric.icon}</div>
                          <span className="text-sm font-medium">{metric.title}</span>
                        </div>
                        <span className="text-xs">{metric.current}/{metric.goal}</span>
                      </div>
                      <Progress value={getProgressPercentage(metric.current, metric.goal)} className="h-2 bg-muted" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Medal className="h-5 w-5 text-yellow-500" />
                  Achievement Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        achievement.unlocked
                          ? getRarityColor(achievement.rarity) + " shadow-lg"
                          : "bg-muted/50 border-border text-muted-foreground"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div className={`p-2 rounded-full ${achievement.unlocked ? "bg-current/20" : "bg-muted"}`}>
                          {achievement.icon}
                        </div>
                        <span className="text-xs font-medium">{achievement.name}</span>
                        {achievement.unlocked && (
                          <Badge variant="outline" className="text-xs capitalize border-current/50 bg-current/10">
                            {achievement.rarity}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-accent-foreground" />
                <h3 className="font-bold mb-1">Auto-Tracking Active</h3>
                <p className="text-sm text-muted-foreground">
                  Your habits are being monitored automatically. Keep up the great work!
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges">
            <ChallengesSystem />
          </TabsContent>

          <TabsContent value="events">
            <SeasonalEvents />
          </TabsContent>

          <TabsContent value="leaderboards">
            <LeaderboardsAchievements />
          </TabsContent>

          <TabsContent value="social">
            <SocialFeed />
          </TabsContent>

          <TabsContent value="friends">
            <FriendsManager />
          </TabsContent>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-20 bg-card/95 backdrop-blur border-t border-border">
          <TabsList className="grid w-full grid-cols-6 rounded-none border-0 bg-transparent h-16 p-2">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-white/75 text-muted-foreground flex-col gap-1 h-full">
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </TabsTrigger>
            <TabsTrigger value="challenges" className="data-[state=active]:bg-primary data-[state=active]:text-white/75 text-muted-foreground flex-col gap-1 h-full">
              <Zap className="h-5 w-5" />
              <span className="text-xs">Challenges</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-white/75 text-muted-foreground flex-col gap-1 h-full">
              <Sparkles className="h-5 w-5" />
              <span className="text-xs">Events</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboards" className="data-[state=active]:bg-primary data-[state=active]:text-white/75 text-muted-foreground flex-col gap-1 h-full">
              <Award className="h-5 w-5" />
              <span className="text-xs">Rankings</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-primary data-[state=active]:text-white/75 text-muted-foreground flex-col gap-1 h-full">
              <Users className="h-5 w-5" />
              <span className="text-xs">Social</span>
            </TabsTrigger>
            <TabsTrigger value="friends" className="data-[state=active]:bg-primary data-[state=active]:text-white/75 text-muted-foreground flex-col gap-1 h-full">
              <Users className="h-5 w-5" />
              <span className="text-xs">Friends</span>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  )
}