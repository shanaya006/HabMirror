"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Trophy, Droplets, Footprints, Moon, Send, Smile } from "lucide-react"

interface Post {
  id: string
  user: {
    name: string
    username: string
    avatar: string
    level: number
    title?: string
  }
  content: string
  achievement?: {
    type: string
    name: string
    icon: React.ReactNode
    color: string
  }
  timestamp: string
  likes: number
  comments: number
  reactions: { emoji: string; count: number }[]
  isLiked: boolean
}

export default function SocialFeed() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      user: { name: "Sarah Chen", username: "@sarahc", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-18-23-02-19.jpg-bSUZxytr2FBwgGhXv6K3m8ur7fN4Rq.jpeg", level: 42, title: "Hydration Hero" },
      content: "Just completed the 7-Day Water Challenge! Feeling amazing!",
      achievement: { type: "challenge", name: "7-Day Water Challenge", icon: <Droplets className="h-4 w-4" />, color: "text-blue-500" },
      timestamp: "2h ago",
      likes: 24,
      comments: 8,
      reactions: [ { emoji: "💧", count: 12 }, { emoji: "🔥", count: 8 }, { emoji: "⚡", count: 4 } ],
      isLiked: true,
    },
    {
      id: "2",
      user: { name: "Mike Johnson", username: "@mikej", avatar: "/male-avatar.png", level: 28, title: "Step Master" },
      content: "Hit 15,000 steps today!",
      achievement: { type: "daily", name: "Step Goal Exceeded", icon: <Footprints className="h-4 w-4" />, color: "text-green-500" },
      timestamp: "4h ago",
      likes: 18,
      comments: 5,
      reactions: [ { emoji: "👏", count: 10 }, { emoji: "💪", count: 6 }, { emoji: "🚀", count: 2 } ],
      isLiked: false,
    },
    {
      id: "3",
      user: { name: "Emma Wilson", username: "@emmaw", avatar: "/female-avatar-blonde.jpg", level: 35, title: "Sleep Champion" },
      content: "30 days of consistent 8-hour sleep!",
      achievement: { type: "streak", name: "30-Day Sleep Streak", icon: <Moon className="h-4 w-4" />, color: "text-purple-500" },
      timestamp: "1d ago",
      likes: 45,
      comments: 12,
      reactions: [ { emoji: "😴", count: 20 }, { emoji: "✨", count: 15 }, { emoji: "👑", count: 10 } ],
      isLiked: true,
    },
  ])

  const [newPost, setNewPost] = useState("")
  const [showComments, setShowComments] = useState<string | null>(null)
  const [newComment, setNewComment] = useState("")

  const handleLike = (postId: string) => {
    setPosts(posts.map(p => p.id === postId ? { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 } : p))
  }

  const handleReaction = (postId: string, emoji: string) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        const existing = p.reactions.find(r => r.emoji === emoji)
        return existing
          ? { ...p, reactions: p.reactions.map(r => r.emoji === emoji ? { ...r, count: r.count + 1 } : r) }
          : { ...p, reactions: [...p.reactions, { emoji, count: 1 }] }
      }
      return p
    }))
  }

  const handleCreatePost = () => {
    if (!newPost.trim()) return
    const post: Post = {
      id: Date.now().toString(),
      user: { name: "You", username: "@you", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-18-23-03-12.jpg-wqSWfuHHcBOqncaeQf9UOptCXaLLBz.jpeg", level: 25 },
      content: newPost,
      timestamp: "now",
      likes: 0,
      comments: 0,
      reactions: [],
      isLiked: false,
    }
    setPosts([post, ...posts])
    setNewPost("")
  }

  const quickReactions = ["💧", "🔥", "⚡", "👏", "💪", "🚀", "✨", "👑"]

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Create Post */}
      <Card>
        <CardHeader className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-18-23-03-12.jpg-wqSWfuHHcBOqncaeQf9UOptCXaLLBz.jpeg" />
            <AvatarFallback>You</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Share your progress</p>
            <p className="text-sm text-muted-foreground">Level 25 • Explorer</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea placeholder="Share your achievement..." value={newPost} onChange={e => setNewPost(e.target.value)} className="min-h-[80px] resize-none" />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button variant="outline" size="sm"><Trophy className="h-4 w-4 mr-2"/>Add Achievement</Button>
              <Button variant="outline" size="sm"><Smile className="h-4 w-4 mr-2"/>Add Emoji</Button>
            </div>
            <Button className="text-white" onClick={handleCreatePost} disabled={!newPost.trim()}><Send className="h-4 w-4 mr-2 text-white"/>Share</Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      {posts.map(post => (
        <Card key={post.id}>
          <CardHeader className="pb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{post.user.name}</p>
                  <Badge variant="secondary" className="text-xs">Level {post.user.level}</Badge>
                  {post.user.title && <Badge variant="outline" className="text-xs">{post.user.title}</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{post.user.username} • {post.timestamp}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-foreground">{post.content}</p>

            {post.achievement && (
              <Card className="bg-muted/50">
                <CardContent className="p-3 flex items-center gap-2">
                  <div className={`p-2 rounded-lg bg-background ${post.achievement.color}`}>{post.achievement.icon}</div>
                  <div>
                    <p className="font-medium text-sm">{post.achievement.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{post.achievement.type} completed</p>
                  </div>
                  <Trophy className="h-4 w-4 text-yellow-500 ml-auto" />
                </CardContent>
              </Card>
            )}

            {/* Reactions */}
            {post.reactions.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.reactions.map((r,i) => (
                  <Button key={i} variant="outline" size="sm" className="h-8 px-2 bg-transparent" onClick={()=>handleReaction(post.id,r.emoji)}>
                    <span className="mr-1">{r.emoji}</span><span className="text-xs">{r.count}</span>
                  </Button>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" onClick={()=>handleLike(post.id)} className={post.isLiked ? "text-red-500" : ""}>
                  <Heart className={`h-4 w-4 mr-2 ${post.isLiked ? "fill-current" : ""}`}/> {post.likes}
                </Button>
                <Button variant="ghost" size="sm" onClick={()=>setShowComments(showComments===post.id?null:post.id)}>
                  <MessageCircle className="h-4 w-4 mr-2"/> {post.comments}
                </Button>
                <Button variant="ghost" size="sm"><Share2 className="h-4 w-4 mr-2"/>Share</Button>
              </div>

              {/* Quick Reactions */}
              <div className="flex gap-1">
                {quickReactions.slice(0,4).map(e => (
                  <Button key={e} variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-muted" onClick={()=>handleReaction(post.id,e)}>{e}</Button>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            {showComments===post.id && (
              <div className="space-y-3 pt-3 border-t">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8"><AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-18-23-03-12.jpg-wqSWfuHHcBOqncaeQf9UOptCXaLLBz.jpeg"/><AvatarFallback>You</AvatarFallback></Avatar>
                  <div className="flex-1 flex gap-2">
                    <Input placeholder="Write a comment..." value={newComment} onChange={e=>setNewComment(e.target.value)} className="flex-1"/>
                    <Button size="sm"><Send className="h-4 w-4"/></Button>
                  </div>
                </div>
                {/* Sample Comment */}
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8"><AvatarImage src="/friend-avatar.jpg"/><AvatarFallback>JD</AvatarFallback></Avatar>
                  <div className="flex-1">
                    <div className="bg-muted rounded-lg p-3">
                      <p className="font-medium text-sm">John Doe</p>
                      <p className="text-sm">Amazing progress! Keep it up!</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">2h ago</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
