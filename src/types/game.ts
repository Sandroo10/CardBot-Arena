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
