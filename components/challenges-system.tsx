"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Trophy,
  Zap,
  Crown,
  Star,
  Gift,
  Droplets,
  Footprints,
  Moon,
  Smartphone,
  Heart,
  Brain,
  Apple,
  Dumbbell,
  Book,
  Target,
  Lock,
  Unlock,
  Sparkles,
} from "lucide-react"

interface Challenge {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  bgColor: string
  duration: number // days
  difficulty: "Easy" | "Medium" | "Hard"
  category: "Physical" | "Mental" | "Wellness" | "Lifestyle"
  requirements: string[]
  rewards: {
    xp: number
    coins: number
    items?: string[]
  }
}

interface UserChallenge {
  challengeId: string
  currentStreak: number
  bestStreak: number
  level: number
  isActive: boolean
  startDate: string
  lastCompletedDate?: string
  completedDays: string[]
}

interface LootBox {
  id: string
  level: number
  type: "bronze" | "silver" | "gold" | "legendary"
  rewards: string[]
  isUnlocked: boolean
  isOpened: boolean
}

interface UserProgress {
  totalLevel: number
  currentXP: number
  xpToNextLevel: number
  phase: "Explorer" | "Challenger" | "Champion" | "Legend"
  unlockedThemes: string[]
  coins: number
}

export default function ChallengesSystem() {
  const [challenges] = useState<Challenge[]>([
    {
      id: "water-7day",
      title: "7-Day Hydration Hero",
      description: "Drink 8 glasses of water daily for 7 consecutive days",
      icon: <Droplets className="h-6 w-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      duration: 7,
      difficulty: "Easy",
      category: "Wellness",
      requirements: ["8 glasses of water daily", "No missed days"],
      rewards: { xp: 100, coins: 50, items: ["Hydration Badge", "Water Bottle Avatar Item"] },
    },
    {
      id: "steps-30day",
      title: "30-Day Step Master",
      description: "Walk 10,000 steps daily for 30 days straight",
      icon: <Footprints className="h-6 w-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      duration: 30,
      difficulty: "Medium",
      category: "Physical",
      requirements: ["10,000 steps daily", "Track with any device"],
      rewards: { xp: 300, coins: 150, items: ["Step Master Badge", "Running Shoes Avatar Item"] },
    },
    {
      id: "sleep-21day",
      title: "21-Day Sleep Champion",
      description: "Get 8 hours of quality sleep for 21 consecutive nights",
      icon: <Moon className="h-6 w-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      duration: 21,
      difficulty: "Medium",
      category: "Wellness",
      requirements: ["8+ hours sleep nightly", "Consistent bedtime"],
      rewards: { xp: 250, coins: 120, items: ["Sleep Champion Badge", "Pajama Avatar Set"] },
    },
    {
      id: "screen-14day",
      title: "14-Day Digital Detox",
      description: "Limit screen time to under 4 hours daily for 2 weeks",
      icon: <Smartphone className="h-6 w-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      duration: 14,
      difficulty: "Hard",
      category: "Mental",
      requirements: ["Max 4 hours screen time", "No social media after 9 PM"],
      rewards: { xp: 200, coins: 100, items: ["Digital Warrior Badge", "Book Avatar Item"] },
    },
    {
      id: "meditation-10day",
      title: "10-Day Mindful Warrior",
      description: "Meditate for 15 minutes daily for 10 consecutive days",
      icon: <Brain className="h-6 w-6" />,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      duration: 10,
      difficulty: "Easy",
      category: "Mental",
      requirements: ["15 minutes daily meditation", "Use guided or free meditation"],
      rewards: { xp: 150, coins: 75, items: ["Mindful Badge", "Meditation Cushion Avatar Item"] },
    },
    {
      id: "nutrition-28day",
      title: "28-Day Nutrition Master",
      description: "Eat 5 servings of fruits/vegetables daily for 4 weeks",
      icon: <Apple className="h-6 w-6" />,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      duration: 28,
      difficulty: "Medium",
      category: "Wellness",
      requirements: ["5 servings fruits/veggies daily", "Track your intake"],
      rewards: { xp: 280, coins: 140, items: ["Nutrition Expert Badge", "Chef Hat Avatar Item"] },
    },
    {
      id: "workout-21day",
      title: "21-Day Fitness Beast",
      description: "Complete a 30-minute workout daily for 3 weeks",
      icon: <Dumbbell className="h-6 w-6" />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      duration: 21,
      difficulty: "Hard",
      category: "Physical",
      requirements: ["30 minutes exercise daily", "Any type of workout counts"],
      rewards: { xp: 315, coins: 200, items: ["Fitness Beast Badge", "Gym Outfit Avatar Set"] },
    },
    {
      id: "reading-15day",
      title: "15-Day Knowledge Seeker",
      description: "Read for 30 minutes daily for 15 consecutive days",
      icon: <Book className="h-6 w-6" />,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      duration: 15,
      difficulty: "Easy",
      category: "Mental",
      requirements: ["30 minutes reading daily", "Any book or educational content"],
      rewards: { xp: 180, coins: 90, items: ["Scholar Badge", "Glasses Avatar Item"] },
    },
    {
      id: "gratitude-30day",
      title: "30-Day Gratitude Guardian",
      description: "Write 3 things you're grateful for daily for 30 days",
      icon: <Heart className="h-6 w-6" />,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      duration: 30,
      difficulty: "Easy",
      category: "Mental",
      requirements: ["3 gratitude entries daily", "Reflect on positive moments"],
      rewards: { xp: 300, coins: 150, items: ["Gratitude Guardian Badge", "Journal Avatar Item"] },
    },
    {
      id: "early-bird-14day",
      title: "14-Day Early Bird",
      description: "Wake up at 6 AM daily for 2 weeks straight",
      icon: <Star className="h-6 w-6" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      duration: 14,
      difficulty: "Medium",
      category: "Lifestyle",
      requirements: ["Wake up at 6 AM daily", "No snoozing allowed"],
      rewards: { xp: 210, coins: 105, items: ["Early Bird Badge", "Sunrise Avatar Background"] },
    },
  ])

  const [userChallenges, setUserChallenges] = useState<UserChallenge[]>([
    {
      challengeId: "water-7day",
      currentStreak: 4,
      bestStreak: 7,
      level: 2,
      isActive: true,
      startDate: "2025-01-05",
      lastCompletedDate: "2025-01-08",
      completedDays: ["2025-01-05", "2025-01-06", "2025-01-07", "2025-01-08"],
    },
    {
      challengeId: "steps-30day",
      currentStreak: 12,
      bestStreak: 15,
      level: 1,
      isActive: true,
      startDate: "2024-12-28",
      lastCompletedDate: "2025-01-08",
      completedDays: [],
    },
  ])

  const [userProgress] = useState<UserProgress>({
    totalLevel: 25,
    currentXP: 1250,
    xpToNextLevel: 1500,
    phase: "Explorer",
    unlockedThemes: ["default", "forest", "ocean"],
    coins: 450,
  })

  const [lootBoxes] = useState<LootBox[]>([
    {
      id: "box-10",
      level: 10,
      type: "bronze",
      rewards: ["Forest Theme", "Tree Avatar Background", "50 Coins"],
      isUnlocked: true,
      isOpened: true,
    },
    {
      id: "box-20",
      level: 20,
      type: "silver",
      rewards: ["Ocean Theme", "Wave Avatar Background", "Surfboard Avatar Item", "100 Coins"],
      isUnlocked: true,
      isOpened: true,
    },
    {
      id: "box-30",
      level: 30,
      type: "gold",
      rewards: ["Mountain Theme", "Peak Avatar Background", "Hiking Gear Set", "200 Coins"],
      isUnlocked: false,
      isOpened: false,
    },
  ])

  const getPhaseInfo = (level: number) => {
    if (level >= 91)
      return {
        phase: "Legend",
        color: "text-purple-600",
        bgColor: "bg-purple-600/10",
        icon: <Crown className="h-4 w-4" />,
      }
    if (level >= 61)
      return {
        phase: "Champion",
        color: "text-yellow-600",
        bgColor: "bg-yellow-600/10",
        icon: <Trophy className="h-4 w-4" />,
      }
    if (level >= 31)
      return {
        phase: "Challenger",
        color: "text-orange-600",
        bgColor: "bg-orange-600/10",
        icon: <Zap className="h-4 w-4" />,
      }
    return {
      phase: "Explorer",
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      icon: <Star className="h-4 w-4" />,
    }
  }

  const phaseInfo = getPhaseInfo(userProgress.totalLevel)

  const handleJoinChallenge = (challengeId: string) => {
    const existingChallenge = userChallenges.find((uc) => uc.challengeId === challengeId)
    if (!existingChallenge) {
      const newUserChallenge: UserChallenge = {
        challengeId,
        currentStreak: 0,
        bestStreak: 0,
        level: 1,
        isActive: true,
        startDate: new Date().toISOString().split("T")[0],
        completedDays: [],
      }
      setUserChallenges([...userChallenges, newUserChallenge])
    }
  }

  const handleCompleteDay = (challengeId: string) => {
    setUserChallenges(
      userChallenges.map((uc) => {
        if (uc.challengeId === challengeId && uc.isActive) {
          const today = new Date().toISOString().split("T")[0]
          const newCompletedDays = [...uc.completedDays, today]
          const newStreak = uc.currentStreak + 1

          return {
            ...uc,
            currentStreak: newStreak,
            bestStreak: Math.max(uc.bestStreak, newStreak),
            lastCompletedDate: today,
            completedDays: newCompletedDays,
          }
        }
        return uc
      }),
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* User Progress Header */}
      <Card className="relative overflow-hidden">
        <div className={`absolute inset-0 ${phaseInfo.bgColor} opacity-50`} />
        <CardContent className="relative p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full ${phaseInfo.bgColor} ${phaseInfo.color}`}>{phaseInfo.icon}</div>
              <div>
                <h2 className="text-2xl font-bold">Level {userProgress.totalLevel}</h2>
                <Badge variant="secondary" className={`${phaseInfo.color} ${phaseInfo.bgColor}`}>
                  {phaseInfo.phase}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Coins</p>
              <p className="text-xl font-bold">{userProgress.coins}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>XP Progress</span>
              <span>
                {userProgress.currentXP} / {userProgress.xpToNextLevel}
              </span>
            </div>
            <Progress value={(userProgress.currentXP / userProgress.xpToNextLevel) * 100} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4">
            {userChallenges
              .filter((uc) => uc.isActive)
              .map((userChallenge) => {
                const challenge = challenges.find((c) => c.id === userChallenge.challengeId)
                if (!challenge) return null

                const progressPercentage = (userChallenge.currentStreak / challenge.duration) * 100

                return (
                  <Card key={userChallenge.challengeId} className="relative overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-lg ${challenge.bgColor} ${challenge.color}`}>
                            {challenge.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{challenge.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{challenge.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {challenge.difficulty}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {challenge.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Zap className="h-4 w-4 text-orange-500" />
                            <span className="font-bold">{userChallenge.currentStreak}</span>
                            <span className="text-sm text-muted-foreground">/ {challenge.duration}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Current Streak</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{Math.round(progressPercentage)}% Complete</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2" />
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <p className="text-muted-foreground">Best Streak: {userChallenge.bestStreak} days</p>
                        </div>
                        <Button
                          onClick={() => handleCompleteDay(userChallenge.challengeId)}
                          className="bg-green-900 text-white/70 hover:bg-green-800"
                        >
                          <Target className="h-4 w-4 mr-2" />
                          Complete Today
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </TabsContent>

        <TabsContent value="available" className="space-y-4">
          <div className="grid gap-4">
            {challenges
              .filter((challenge) => !userChallenges.some((uc) => uc.challengeId === challenge.id))
              .map((challenge) => (
                <Card key={challenge.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${challenge.bgColor} ${challenge.color}`}>{challenge.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{challenge.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{challenge.description}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {challenge.difficulty}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {challenge.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {challenge.duration} days
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {challenge.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{challenge.rewards.xp} XP</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-yellow-500" />
                          <span>{challenge.rewards.coins} Coins</span>
                        </div>
                      </div>
                      <Button onClick={() => handleJoinChallenge(challenge.id)}>Join Challenge</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardContent className="p-8 text-center">
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Complete your first challenge to see it here!</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Mystery Loot Boxes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {lootBoxes.map((box) => (
                    <div key={box.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            box.type === "legendary"
                              ? "bg-purple-500/10 text-purple-500"
                              : box.type === "gold"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : box.type === "silver"
                                  ? "bg-gray-500/10 text-gray-500"
                                  : "bg-amber-600/10 text-amber-600"
                          }`}
                        >
                          <Gift className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Level {box.level} {box.type.charAt(0).toUpperCase() + box.type.slice(1)} Box
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {box.isOpened
                              ? "Opened"
                              : box.isUnlocked
                                ? "Ready to open!"
                                : `Unlock at level ${box.level}`}
                          </p>
                        </div>
                      </div>

                      {box.isUnlocked ? (
                        box.isOpened ? (
                          <Badge variant="secondary">Opened</Badge>
                        ) : (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                                <Sparkles className="h-4 w-4 mr-2" />
                                Open Box
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Mystery Loot Box Rewards!</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="text-center">
                                  <Gift className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
                                  <h3 className="text-lg font-semibold mb-2">Congratulations!</h3>
                                  <p className="text-muted-foreground">You received:</p>
                                </div>
                                <div className="space-y-2">
                                  {box.rewards.map((reward, index) => (
                                    <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                                      <Sparkles className="h-4 w-4 text-yellow-500" />
                                      <span>{reward}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )
                      ) : (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Lock className="h-4 w-4" />
                          <span className="text-sm">Locked</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Unlock className="h-5 w-5" />
                  Unlocked Themes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {userProgress.unlockedThemes.map((theme) => (
                    <div key={theme} className="p-3 border rounded-lg text-center">
                      <div className="w-full h-16 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 mb-2" />
                      <p className="text-sm font-medium capitalize">{theme}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
