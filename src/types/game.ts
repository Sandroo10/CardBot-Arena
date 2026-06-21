export type GameType = "Joker" | "Bura"

export type Difficulty = "Easy" | "Medium" | "Hard"

export type BotStatus = "active" | "maintenance"

export type Bot = {
  id: string
  name: string
  game: GameType
  difficulty: Difficulty
  status: BotStatus
  reward: number
  avatar: string
  personality: string
  strategy: string
}

export type LeaderboardPlayer = {
  id: string
  name: string
  points: number
  wins: number
  favoriteGame: GameType
  rankChange: string
  isCurrentUser?: boolean
}

export type MatchResult = "Win" | "Loss"

export type MatchHistory = {
  id: string
  botName: string
  game: GameType
  difficulty: Difficulty
  result: MatchResult
  pointsEarned: number
  playedAt: string
}

export type Achievement = {
  id: string
  title: string
  description: string
  unlocked: boolean
  progress?: string
}

export type UserProfile = {
  username: string
  initials: string
  totalPoints: number
  rank: number
  wins: number
  losses: number
  favoriteGame: GameType
  bestStreak: number
  matchHistory: MatchHistory[]
  achievements: Achievement[]
}
