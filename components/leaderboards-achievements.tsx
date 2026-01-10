"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Trophy,
  Crown,
  Medal,
  Star,
  Zap,
  Droplets,
  Moon,
  Footprints,
  Heart,
  Brain,
  Apple,
  Dumbbell,
  Book,
  Target,
  Award,
  TrendingUp,
  Calendar,
} from "lucide-react"

interface LeaderboardEntry {
  id: string
  name: string
  username: string
  avatar: string
  level: number
  weeklyPoints: number
  totalXP: number
  currentStreak: number
  rank: number
  title?: string
  badges: string[]
}

interface AchievementTag {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
  bgColor: string
  category: "Consistency" | "Milestone" | "Special" | "Seasonal"
  requirement: string
  rarity: "Common" | "Rare" | "Epic" | "Legendary"
  unlockedAt?: string
  isUnlocked: boolean
}

interface WeeklyTitle {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  bgColor: string
  requirement: string
  duration: string
  isActive: boolean
}

export default function LeaderboardsAchievements() {
  const [selectedTags, setSelectedTags] = useState<string[]>(["sleep-champion", "hydration-hero", "step-master"])

  const [leaderboard] = useState<LeaderboardEntry[]>([
    {
      id: "1",
      name: "Sarah Chen",
      username: "sarahc",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-18-23-02-19.jpg-bSUZxytr2FBwgGhXv6K3m8ur7fN4Rq.jpeg",
      level: 42,
      weeklyPoints: 1250,
      totalXP: 8400,
      currentStreak: 15,
      rank: 1,
      title: "Hydration Queen",
      badges: ["hydration-hero", "consistency-master", "early-bird"],
    },
    {
      id: "2",
      name: "You",
      username: "you",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-18-23-03-12.jpg-wqSWfuHHcBOqncaeQf9UOptCXaLLBz.jpeg",
      level: 25,
      weeklyPoints: 890,
      totalXP: 3750,
      currentStreak: 8,
      rank: 2,
      badges: ["sleep-champion", "hydration-hero", "step-master"],
    },
    {
      id: "3",
      name: "Mike Johnson",
      username: "mikej",
      avatar: "/public/male-avatar.png",
      level: 28,
      weeklyPoints: 720,
      totalXP: 4200,
      currentStreak: 12,
      rank: 3,
      title: "Step King",
      badges: ["step-master", "fitness-beast", "morning-warrior"],
    },
    {
      id: "4",
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "/public/female-avatar-blonde.jpg",
      level: 35,
      weeklyPoints: 650,
      totalXP: 5250,
      currentStreak: 22,
      rank: 4,
      title: "Sleep Champion",
      badges: ["sleep-champion", "mindful-warrior", "consistency-master"],
    },
    {
      id: "5",
      name: "Alex Rodriguez",
      username: "alexr",
      avatar: "/public/male-avatar-hispanic.jpg",
      level: 19,
      weeklyPoints: 480,
      totalXP: 2850,
      currentStreak: 5,
      rank: 5,
      badges: ["nutrition-expert", "early-bird"],
    },
  ])

  const [achievementTags] = useState<AchievementTag[]>([
    {
      id: "sleep-champion",
      name: "Sleep Champion",
      description: "30 days of 8-hour sleep",
      icon: <Moon className="h-4 w-4" />,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      category: "Consistency",
      requirement: "Complete 30 consecutive days of 8+ hour sleep",
      rarity: "Rare",
      unlockedAt: "2024-12-15",
      isUnlocked: true,
    },
    {
      id: "hydration-hero",
      name: "Hydration Hero",
      description: "100 days hitting water goal",
      icon: <Droplets className="h-4 w-4" />,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      category: "Milestone",
      requirement: "Reach daily water goal for 100 days total",
      rarity: "Epic",
      unlockedAt: "2024-11-28",
      isUnlocked: true,
    },
    {
      id: "step-master",
      name: "Step Master",
      description: "50 days of 10K+ steps",
      icon: <Footprints className="h-4 w-4" />,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      category: "Consistency",
      requirement: "Walk 10,000+ steps for 50 consecutive days",
      rarity: "Rare",
      unlockedAt: "2024-12-20",
      isUnlocked: true,
    },
    {
      id: "mindful-warrior",
      name: "Mindful Warrior",
      description: "50 meditation sessions",
      icon: <Brain className="h-4 w-4" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-600/10",
      category: "Milestone",
      requirement: "Complete 50 meditation sessions",
      rarity: "Rare",
      unlockedAt: "2024-12-10",
      isUnlocked: true,
    },
    {
      id: "fitness-beast",
      name: "Fitness Beast",
      description: "30-day workout streak",
      icon: <Dumbbell className="h-4 w-4" />,
      color: "text-red-600",
      bgColor: "bg-red-600/10",
      category: "Consistency",
      requirement: "Complete workouts for 30 consecutive days",
      rarity: "Epic",
      unlockedAt: undefined,
      isUnlocked: false,
    },
    {
      id: "nutrition-expert",
      name: "Nutrition Expert",
      description: "Perfect nutrition for 21 days",
      icon: <Apple className="h-4 w-4" />,
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
      category: "Consistency",
      requirement: "Meet nutrition goals for 21 consecutive days",
      rarity: "Rare",
      unlockedAt: undefined,
      isUnlocked: false,
    },
    {
      id: "consistency-master",
      name: "Consistency Master",
      description: "100-day multi-habit streak",
      icon: <Target className="h-4 w-4" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-600/10",
      category: "Special",
      requirement: "Maintain 3+ habits for 100 consecutive days",
      rarity: "Legendary",
      unlockedAt: undefined,
      isUnlocked: false,
    },
    {
      id: "early-bird",
      name: "Early Bird",
      description: "Wake up at 6 AM for 14 days",
      icon: <Star className="h-4 w-4" />,
      color: "text-amber-600",
      bgColor: "bg-amber-600/10",
      category: "Consistency",
      requirement: "Wake up at 6 AM for 14 consecutive days",
      rarity: "Common",
      unlockedAt: "2024-12-05",
      isUnlocked: true,
    },
    {
      id: "gratitude-guardian",
      name: "Gratitude Guardian",
      description: "30 days of gratitude journaling",
      icon: <Heart className="h-4 w-4" />,
      color: "text-pink-600",
      bgColor: "bg-pink-600/10",
      category: "Milestone",
      requirement: "Write gratitude entries for 30 days",
      rarity: "Rare",
      unlockedAt: undefined,
      isUnlocked: false,
    },
    {
      id: "knowledge-seeker",
      name: "Knowledge Seeker",
      description: "Read for 30 minutes daily for 15 days",
      icon: <Book className="h-4 w-4" />,
      color: "text-teal-600",
      bgColor: "bg-teal-600/10",
      category: "Consistency",
      requirement: "Read for 30+ minutes for 15 consecutive days",
      rarity: "Common",
      unlockedAt: undefined,
      isUnlocked: false,
    },
  ])

  const [weeklyTitles] = useState<WeeklyTitle[]>([
    {
      id: "consistency-king",
      title: "Consistency King",
      description: "Most consistent habit completion this week",
      icon: <Crown className="h-4 w-4" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-600/10",
      requirement: "Complete the most daily habits this week",
      duration: "7 days",
      isActive: false,
    },
    {
      id: "hydration-queen",
      title: "Hydration Queen",
      description: "Perfect water intake all week",
      icon: <Droplets className="h-4 w-4" />,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      requirement: "Meet water goals every day this week",
      duration: "7 days",
      isActive: true,
    },
    {
      id: "step-king",
      title: "Step King",
      description: "Highest step count this week",
      icon: <Footprints className="h-4 w-4" />,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      requirement: "Achieve the highest total steps this week",
      duration: "7 days",
      isActive: true,
    },
    {
      id: "sleep-champion",
      title: "Sleep Champion",
      description: "Perfect sleep schedule all week",
      icon: <Moon className="h-4 w-4" />,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      requirement: "Get 8+ hours sleep every night this week",
      duration: "7 days",
      isActive: true,
    },
  ])

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "text-purple-600 bg-purple-600/10"
      case "Epic":
        return "text-blue-600 bg-blue-600/10"
      case "Rare":
        return "text-green-600 bg-green-600/10"
      default:
        return "text-gray-600 bg-gray-600/10"
    }
  }

  const handleTagSelection = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId))
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tagId])
    }
  }

  const unlockedTags = achievementTags.filter((tag) => tag.isUnlocked)
  const lockedTags = achievementTags.filter((tag) => !tag.isUnlocked)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Tabs defaultValue="leaderboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="leaderboard">
            <Trophy className="h-4 w-4 mr-2" />
            Leaderboard
          </TabsTrigger>
          <TabsTrigger value="achievements">
            <Award className="h-4 w-4 mr-2" />
            Achievements
          </TabsTrigger>
          <TabsTrigger value="titles">
            <Crown className="h-4 w-4 mr-2" />
            Weekly Titles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="leaderboard" className="space-y-4">
          {/* Weekly Competition Header */}
          <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-yellow-600" />
                Weekly Competition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Week Ranking</p>
                  <p className="text-lg font-semibold">January 6-12, 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Your Position</p>
                  <div className="flex items-center gap-2">
                    <Medal className="h-5 w-5 text-gray-400" />
                    <span className="text-lg font-bold">#2</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <div className="space-y-3">
            {leaderboard.map((entry) => (
              <Card
                key={entry.id}
                className={`${entry.username === "you" ? "ring-2 ring-primary/50 bg-primary/5" : ""}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12">{getRankIcon(entry.rank)}</div>

                      <Avatar className="h-12 w-12">
                        <AvatarImage src={entry.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold">{entry.name}</p>
                          {entry.username === "you" && (
                            <Badge variant="secondary" className="text-xs">
                              You
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            Level {entry.level}
                          </Badge>
                          {entry.title && (
                            <Badge className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                              {entry.title}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>{entry.weeklyPoints} pts this week</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            <span>{entry.currentStreak} day streak</span>
                          </div>
                        </div>

                        {/* Achievement Tags Preview */}
                        <div className="flex gap-1 mt-2">
                          {entry.badges.slice(0, 3).map((badgeId) => {
                            const badge = achievementTags.find((tag) => tag.id === badgeId)
                            if (!badge) return null
                            return (
                              <div
                                key={badgeId}
                                className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${badge.bgColor} ${badge.color}`}
                              >
                                {badge.icon}
                                <span className="hidden sm:inline">{badge.name}</span>
                              </div>
                            )
                          })}
                          {entry.badges.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{entry.badges.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold">{entry.totalXP.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Total XP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          {/* Profile Tags Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Profile Tags (Select 3)</span>
                <Badge variant="secondary">{selectedTags.length}/3</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Choose up to 3 achievement tags to display on your profile and show off your accomplishments!
              </p>
              <div className="grid gap-2">
                {unlockedTags.map((tag) => (
                  <div
                    key={tag.id}
                    className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedTags.includes(tag.id) ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                    }`}
                    onClick={() => handleTagSelection(tag.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${tag.bgColor} ${tag.color}`}>{tag.icon}</div>
                      <div>
                        <p className="font-medium">{tag.name}</p>
                        <p className="text-sm text-muted-foreground">{tag.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getRarityColor(tag.rarity)}>{tag.rarity}</Badge>
                      {selectedTags.includes(tag.id) && <Badge variant="default" className="text-white/80">Selected</Badge>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Unlocked Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Unlocked Achievements ({unlockedTags.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {unlockedTags.map((tag) => (
                  <div key={tag.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${tag.bgColor} ${tag.color}`}>{tag.icon}</div>
                      <div>
                        <p className="font-medium">{tag.name}</p>
                        <p className="text-sm text-muted-foreground">{tag.description}</p>
                        <p className="text-xs text-muted-foreground">Unlocked on {tag.unlockedAt}</p>
                      </div>
                    </div>
                    <Badge className={getRarityColor(tag.rarity)}>{tag.rarity}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Locked Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Locked Achievements ({lockedTags.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {lockedTags.map((tag) => (
                  <div key={tag.id} className="flex items-center justify-between p-3 border rounded-lg opacity-60">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted text-muted-foreground">{tag.icon}</div>
                      <div>
                        <p className="font-medium text-muted-foreground">{tag.name}</p>
                        <p className="text-sm text-muted-foreground">{tag.requirement}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-muted-foreground">
                      Locked
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="titles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Titles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Compete with friends each week to earn temporary titles! Titles reset every Monday.
              </p>
              <div className="grid gap-3">
                {weeklyTitles.map((title) => (
                  <div key={title.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${title.bgColor} ${title.color}`}>{title.icon}</div>
                      <div>
                        <p className="font-semibold">{title.title}</p>
                        <p className="text-sm text-muted-foreground">{title.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{title.requirement}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {title.isActive ? (
                        <Badge className="bg-green-800 text-white">Active Competition</Badge>
                      ) : (
                        <Badge variant="outline">Coming Soon</Badge>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{title.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Title Holders */}
          <Card>
            <CardHeader>
              <CardTitle>Current Title Holders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard
                  .filter((entry) => entry.title)
                  .map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={entry.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{entry.name}</p>
                          <p className="text-sm text-muted-foreground">@{entry.username}</p>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">{entry.title}</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}