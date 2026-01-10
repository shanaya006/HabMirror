"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Snowflake,
  Heart,
  Leaf,
  Calendar,
  Trophy,
  Gift,
  Gamepad2,
  Timer,
  Star,
  Zap,
  Target,
  Crown,
  Sparkles,
  Clock,
  Award,
} from "lucide-react"

interface SeasonalEvent {
  id: string
  title: string
  description: string
  theme: "winter" | "spring" | "summer" | "fall" | "holiday" | "special"
  icon: React.ReactNode
  bgGradient: string
  startDate: string
  endDate: string
  isActive: boolean
  participants: number
  maxParticipants?: number
  challenges: EventChallenge[]
  rewards: EventReward[]
}

interface EventChallenge {
  id: string
  title: string
  description: string
  target: number
  current: number
  unit: string
  points: number
  isCompleted: boolean
}

interface EventReward {
  id: string
  name: string
  type: "avatar" | "theme" | "badge" | "emoji" | "coins"
  rarity: "Common" | "Rare" | "Epic" | "Legendary"
  requirement: string
  isUnlocked: boolean
}

interface MiniGame {
  id: string
  title: string
  description: string
  category: "mood" | "habits" | "knowledge" | "memory"
  icon: React.ReactNode
  color: string
  bgColor: string
  difficulty: "Easy" | "Medium" | "Hard"
  playTime: string
  rewards: { xp: number; coins: number }
  isUnlocked: boolean
}

interface EventLeaderboard {
  rank: number
  name: string
  avatar: string
  points: number
  isCurrentUser: boolean
}

export default function SeasonalEvents() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)
  const [gameScore, setGameScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const [activeEvents] = useState<SeasonalEvent[]>([
    {
      id: "winter-wellness-2025",
      title: "Winter Wellness Challenge",
      description:
        "Stay healthy and active during the cold winter months! Complete daily wellness tasks to earn exclusive winter-themed rewards.",
      theme: "winter",
      icon: <Snowflake className="h-6 w-6" />,
      bgGradient: "from-blue-400 via-cyan-500 to-blue-600",
      startDate: "2025-01-01",
      endDate: "2025-02-28",
      isActive: true,
      participants: 1247,
      maxParticipants: 2000,
      challenges: [
        {
          id: "winter-steps",
          title: "Winter Walker",
          description: "Walk 8,000 steps daily despite the cold",
          target: 56,
          current: 12,
          unit: "days",
          points: 50,
          isCompleted: false,
        },
        {
          id: "hot-drinks",
          title: "Warm Hydration",
          description: "Drink 6 cups of warm beverages daily",
          target: 42,
          current: 8,
          unit: "days",
          points: 30,
          isCompleted: false,
        },
        {
          id: "indoor-workouts",
          title: "Cozy Fitness",
          description: "Complete 20-minute indoor workouts",
          target: 20,
          current: 5,
          unit: "workouts",
          points: 40,
          isCompleted: false,
        },
      ],
      rewards: [
        {
          id: "winter-avatar",
          name: "Cozy Winter Outfit",
          type: "avatar",
          rarity: "Epic",
          requirement: "Complete all winter challenges",
          isUnlocked: false,
        },
        {
          id: "snowflake-theme",
          name: "Snowflake Theme",
          type: "theme",
          rarity: "Rare",
          requirement: "Participate for 14 days",
          isUnlocked: true,
        },
        {
          id: "winter-warrior",
          name: "Winter Warrior Badge",
          type: "badge",
          rarity: "Legendary",
          requirement: "Top 10% in event leaderboard",
          isUnlocked: false,
        },
      ],
    },
    {
      id: "new-year-resolution",
      title: "New Year, New Habits",
      description: "Start 2025 strong with a 21-day habit formation challenge. Build lasting healthy routines!",
      theme: "special",
      icon: <Star className="h-6 w-6" />,
      bgGradient: "from-purple-500 via-pink-500 to-red-500",
      startDate: "2025-01-01",
      endDate: "2025-01-21",
      isActive: true,
      participants: 892,
      challenges: [
        {
          id: "habit-streak",
          title: "Consistency Champion",
          description: "Maintain a 21-day streak in any habit",
          target: 21,
          current: 8,
          unit: "days",
          points: 100,
          isCompleted: false,
        },
        {
          id: "multiple-habits",
          title: "Multi-Habit Master",
          description: "Track 3+ habits simultaneously",
          target: 15,
          current: 8,
          unit: "days",
          points: 75,
          isCompleted: false,
        },
      ],
      rewards: [
        {
          id: "resolution-crown",
          name: "Resolution Crown",
          type: "avatar",
          rarity: "Legendary",
          requirement: "Complete 21-day streak",
          isUnlocked: false,
        },
        {
          id: "golden-theme",
          name: "Golden Success Theme",
          type: "theme",
          rarity: "Epic",
          requirement: "Complete all challenges",
          isUnlocked: false,
        },
      ],
    },
  ])

  const [upcomingEvents] = useState<SeasonalEvent[]>([
    {
      id: "valentines-self-love",
      title: "Valentine's Self-Love Week",
      description: "Show yourself some love with self-care challenges and mindfulness activities.",
      theme: "holiday",
      icon: <Heart className="h-6 w-6" />,
      bgGradient: "from-pink-400 via-red-400 to-pink-500",
      startDate: "2025-02-10",
      endDate: "2025-02-17",
      isActive: false,
      participants: 0,
      challenges: [],
      rewards: [],
    },
    {
      id: "spring-renewal",
      title: "Spring Renewal Challenge",
      description: "Refresh your habits as nature awakens. Focus on outdoor activities and fresh starts.",
      theme: "spring",
      icon: <Leaf className="h-6 w-6" />,
      bgGradient: "from-green-400 via-emerald-500 to-teal-500",
      startDate: "2025-03-20",
      endDate: "2025-04-20",
      isActive: false,
      participants: 0,
      challenges: [],
      rewards: [],
    },
  ])

  const [miniGames] = useState<MiniGame[]>([
    {
      id: "mood-matcher",
      title: "Mood Matcher",
      description: "Match your current mood with the perfect healthy activity to boost your wellbeing!",
      category: "mood",
      icon: <Target className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      difficulty: "Easy",
      playTime: "2-3 min",
      rewards: { xp: 25, coins: 10 },
      isUnlocked: true,
    },
    {
      id: "habit-memory",
      title: "Habit Memory Game",
      description: "Test your memory while learning about healthy habits. Match pairs of habit cards!",
      category: "memory",
      icon: <Gamepad2 className="h-5 w-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      difficulty: "Medium",
      playTime: "3-5 min",
      rewards: { xp: 40, coins: 20 },
      isUnlocked: true,
    },
    {
      id: "wellness-quiz",
      title: "Wellness Knowledge Quiz",
      description: "Answer questions about health and wellness to earn points and learn new tips!",
      category: "knowledge",
      icon: <Star className="h-5 w-5" />,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      difficulty: "Medium",
      playTime: "4-6 min",
      rewards: { xp: 50, coins: 25 },
      isUnlocked: true,
    },
    {
      id: "habit-builder",
      title: "Habit Builder Challenge",
      description: "Build the perfect daily routine by arranging habits in the optimal order!",
      category: "habits",
      icon: <Zap className="h-5 w-5" />,
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
      difficulty: "Hard",
      playTime: "5-8 min",
      rewards: { xp: 75, coins: 40 },
      isUnlocked: false,
    },
  ])

  const [eventLeaderboard] = useState<EventLeaderboard[]>([
    {
      rank: 1,
      name: "Sarah Chen",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-18-23-02-19.jpg-bSUZxytr2FBwgGhXv6K3m8ur7fN4Rq.jpeg",
      points: 1450,
      isCurrentUser: false,
    },
    {
      rank: 2,
      name: "You",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-18-23-03-12.jpg-wqSWfuHHcBOqncaeQf9UOptCXaLLBz.jpeg",
      points: 1120,
      isCurrentUser: true,
    },
    { rank: 3, name: "Mike Johnson", avatar: "/public/male-avatar.png", points: 980, isCurrentUser: false },
    { rank: 4, name: "Emma Wilson", avatar: "/public/female-avatar-blonde.jpg", points: 875, isCurrentUser: false },
    { rank: 5, name: "Alex Rodriguez", avatar: "/public/male-avatar-hispanic.jpg", points: 720, isCurrentUser: false },
  ])

  const playMiniGame = (gameId: string) => {
    setSelectedGame(gameId)
    setIsPlaying(true)
    setGameScore(0)

    // Simulate game play
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 100) + 50
      setGameScore(randomScore)
      setIsPlaying(false)
    }, 3000)
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

  const getTimeRemaining = (endDate: string) => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = end.getTime() - now.getTime()
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return days > 0 ? `${days} days left` : "Ended"
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="active">
            <Sparkles className="h-4 w-4 mr-2" />
            Active Events
          </TabsTrigger>
          <TabsTrigger value="games">
            <Gamepad2 className="h-4 w-4 mr-2" />
            Mini-Games
          </TabsTrigger>
          <TabsTrigger value="leaderboard">
            <Trophy className="h-4 w-4 mr-2" />
            Event Rankings
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <Calendar className="h-4 w-4 mr-2" />
            Event Calendar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activeEvents.map((event) => (
            <Card key={event.id} className="relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${event.bgGradient} opacity-10`} />
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${event.bgGradient} text-white`}>{event.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`bg-gradient-to-r ${event.bgGradient} text-white mb-2`}>
                      {event.isActive ? "Active" : "Coming Soon"}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{getTimeRemaining(event.endDate)}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Participants: {event.participants.toLocaleString()}</span>
                  {event.maxParticipants && (
                    <span>{Math.round((event.participants / event.maxParticipants) * 100)}% full</span>
                  )}
                </div>

                {event.maxParticipants && (
                  <Progress value={(event.participants / event.maxParticipants) * 100} className="h-2" />
                )}

                {/* Event Challenges */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Event Challenges</h4>
                  {event.challenges.map((challenge) => (
                    <div key={challenge.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">{challenge.title}</h5>
                        <Badge variant={challenge.isCompleted ? "default" : "secondary"}>{challenge.points} pts</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>
                            {challenge.current} / {challenge.target} {challenge.unit}
                          </span>
                        </div>
                        <Progress value={(challenge.current / challenge.target) * 100} className="h-1.5" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Event Rewards */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Exclusive Rewards</h4>
                  <div className="grid gap-2">
                    {event.rewards.map((reward) => (
                      <div key={reward.id} className="flex items-center justify-between p-2 border rounded-lg">
                        <div className="flex items-center gap-2">
                          <Gift className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-sm">{reward.name}</p>
                            <p className="text-xs text-muted-foreground">{reward.requirement}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getRarityColor(reward.rarity)}>{reward.rarity}</Badge>
                          {reward.isUnlocked && (
                            <Badge variant="default" className="text-xs">
                              Unlocked
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="games" className="space-y-4">
          <div className="grid gap-4">
            {miniGames.map((game) => (
              <Card key={game.id} className={game.isUnlocked ? "" : "opacity-60"}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${game.bgColor} ${game.color}`}>{game.icon}</div>
                      <div>
                        <h3 className="font-semibold">{game.title}</h3>
                        <p className="text-sm text-muted-foreground">{game.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {game.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {game.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {game.playTime}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{game.rewards.xp} XP</span>
                        <div className="w-4 h-4 rounded-full bg-yellow-500" />
                        <span>{game.rewards.coins}</span>
                      </div>

                      {game.isUnlocked ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button onClick={() => playMiniGame(game.id)}>
                              <Gamepad2 className="h-4 w-4 mr-2" />
                              Play Game
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{game.title}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              {isPlaying && selectedGame === game.id ? (
                                <div className="text-center py-8">
                                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
                                  <p>Playing {game.title}...</p>
                                </div>
                              ) : gameScore > 0 && selectedGame === game.id ? (
                                <div className="text-center py-4">
                                  <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                                  <h3 className="text-lg font-semibold mb-2">Great Job!</h3>
                                  <p className="text-muted-foreground mb-4">You scored {gameScore} points!</p>
                                  <div className="flex justify-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                      <Star className="h-4 w-4 text-yellow-500" />
                                      <span>+{game.rewards.xp} XP</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <div className="w-4 h-4 rounded-full bg-yellow-500" />
                                      <span>+{game.rewards.coins} Coins</span>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="text-center py-4">
                                  <div className={`p-4 rounded-lg ${game.bgColor} ${game.color} mx-auto w-fit mb-4`}>
                                    {game.icon}
                                  </div>
                                  <p className="text-muted-foreground mb-4">{game.description}</p>
                                  <Button onClick={() => playMiniGame(game.id)} className="w-full">
                                    Start Game
                                  </Button>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Button variant="outline" disabled>
                          <Timer className="h-4 w-4 mr-2" />
                          Locked
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Winter Wellness Challenge Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {eventLeaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      entry.isCurrentUser ? "bg-primary/5 border border-primary/20" : "bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8">
                        {entry.rank === 1 ? (
                          <Crown className="h-5 w-5 text-yellow-500" />
                        ) : entry.rank === 2 ? (
                          <Award className="h-5 w-5 text-gray-400" />
                        ) : entry.rank === 3 ? (
                          <Award className="h-5 w-5 text-amber-600" />
                        ) : (
                          <span className="font-bold text-muted-foreground">#{entry.rank}</span>
                        )}
                      </div>

                      <Avatar className="h-10 w-10">
                        <AvatarImage src={entry.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="font-medium">{entry.name}</p>
                        {entry.isCurrentUser && (
                          <Badge variant="secondary" className="text-xs">
                            You
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold">{entry.points.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${event.bgGradient} text-white`}>
                        {event.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {event.startDate} - {event.endDate}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Past Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No past events yet. Check back after participating in some seasonal challenges!
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
