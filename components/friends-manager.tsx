"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Users, Search, Trophy, Zap, MessageCircle, UserCheck, UserX, Copy, QrCode } from "lucide-react"

interface Friend {
  id: string
  name: string
  username: string
  avatar: string
  level: number
  title?: string
  streak: number
  status: "online" | "offline"
  mutualFriends: number
}

interface FriendRequest {
  id: string
  name: string
  username: string
  avatar: string
  level: number
  mutualFriends: number
  timestamp: string
}

export default function FriendsManager() {
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: "1",
      name: "Sarah Chen",
      username: "sarahc",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-18-23-02-19.jpg-bSUZxytr2FBwgGhXv6K3m8ur7fN4Rq.jpeg",
      level: 42,
      title: "Hydration Hero",
      streak: 15,
      status: "online",
      mutualFriends: 3,
    },
    {
      id: "2",
      name: "Mike Johnson",
      username: "mikej",
      avatar: "/male-avatar.png",
      level: 28,
      title: "Step Master",
      streak: 8,
      status: "offline",
      mutualFriends: 1,
    },
    {
      id: "3",
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "/female-avatar-blonde.jpg",
      level: 35,
      title: "Sleep Champion",
      streak: 22,
      status: "online",
      mutualFriends: 5,
    },
  ])

  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([
    {
      id: "1",
      name: "Alex Rodriguez",
      username: "alexr",
      avatar: "/male-avatar-hispanic.jpg",
      level: 19,
      mutualFriends: 2,
      timestamp: "2h ago",
    },
    {
      id: "2",
      name: "Lisa Park",
      username: "lisap",
      avatar: "/female-avatar-asian.jpg",
      level: 31,
      mutualFriends: 1,
      timestamp: "1d ago",
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [friendCode, setFriendCode] = useState("")
  const [myFriendCode] = useState("DHM-2025-XY7K")

  const handleAcceptRequest = (requestId: string) => {
    const request = friendRequests.find((r) => r.id === requestId)
    if (request) {
      const newFriend: Friend = {
        id: request.id,
        name: request.name,
        username: request.username,
        avatar: request.avatar,
        level: request.level,
        streak: 0,
        status: "offline",
        mutualFriends: request.mutualFriends,
      }
      setFriends([...friends, newFriend])
      setFriendRequests(friendRequests.filter((r) => r.id !== requestId))
    }
  }

  const handleRejectRequest = (requestId: string) => {
    setFriendRequests(friendRequests.filter((r) => r.id !== requestId))
  }

  const handleAddByCode = () => {
    if (friendCode.trim()) {
      // Simulate adding friend by code
      console.log("Adding friend with code:", friendCode)
      setFriendCode("")
    }
  }

  const copyFriendCode = () => {
    navigator.clipboard.writeText(myFriendCode)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Tabs defaultValue="friends" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="friends">
            <Users className="h-4 w-4 mr-2" />
            Friends ({friends.length})
          </TabsTrigger>
          <TabsTrigger value="requests">
            <UserPlus className="h-4 w-4 mr-2" />
            Requests ({friendRequests.length})
          </TabsTrigger>
          <TabsTrigger value="add">
            <Search className="h-4 w-4 mr-2" />
            Add Friends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="friends" className="space-y-4">
          {/* Search Friends */}
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search your friends..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Friends List */}
          <div className="space-y-3">
            {friends
              .filter(
                (friend) =>
                  friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  friend.username.toLowerCase().includes(searchQuery.toLowerCase()),
              )
              .map((friend) => (
                <Card key={friend.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={friend.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                              friend.status === "online" ? "bg-green-500" : "bg-gray-400"
                            }`}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">{friend.name}</p>
                            <Badge variant="secondary" className="text-xs">
                              Level {friend.level}
                            </Badge>
                            {friend.title && (
                              <Badge variant="outline" className="text-xs">
                                {friend.title}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">@{friend.username}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Zap className="h-3 w-3 text-orange-500" />
                              <span className="text-xs text-muted-foreground">{friend.streak} day streak</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3 text-blue-500" />
                              <span className="text-xs text-muted-foreground">{friend.mutualFriends} mutual</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trophy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          {friendRequests.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <UserPlus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No pending friend requests</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {friendRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={request.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">{request.name}</p>
                            <Badge variant="secondary" className="text-xs">
                              Level {request.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">@{request.username}</p>
                          <p className="text-xs text-muted-foreground">
                            {request.mutualFriends} mutual friends • {request.timestamp}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleAcceptRequest(request.id)}>
                          <UserCheck className="h-4 w-4 mr-2 text-white" />
                          <div className="text-white">Accept</div>
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleRejectRequest(request.id)}>
                          <UserX className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="add" className="space-y-4">
          {/* My Friend Code */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Your Friend Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <QrCode className="h-5 w-5 text-muted-foreground" />
                <code className="flex-1 font-mono text-sm">{myFriendCode}</code>
                <Button variant="outline" size="sm" onClick={copyFriendCode}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Share this code with friends so they can add you to their circle!
              </p>
            </CardContent>
          </Card>

          {/* Add by Friend Code */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Add by Friend Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Input
                  placeholder="Enter friend code (e.g., DHM-2025-ABC1)"
                  value={friendCode}
                  onChange={(e) => setFriendCode(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleAddByCode} disabled={!friendCode.trim()}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Ask your friends for their friend code to connect instantly!
              </p>
            </CardContent>
          </Card>

          {/* Search by Username */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Search by Username</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search username..." className="pl-10" />
                </div>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}