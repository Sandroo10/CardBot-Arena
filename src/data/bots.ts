import type { Bot } from "@/types/game"

export const bots: Bot[] = [
  {
    id: "joker-easy",
    name: "Joker Easy",
    game: "Joker",
    difficulty: "Easy",
    status: "active",
    reward: 1,
    avatar: "JE",
    personality: "Calm starter bot",
    strategy: "Plays safe cards and leaves obvious openings."
  },
  {
    id: "joker-medium",
    name: "Joker Medium",
    game: "Joker",
    difficulty: "Medium",
    status: "maintenance",
    reward: 0,
    avatar: "JM",
    personality: "Tactical challenger",
    strategy: "Coming soon with sharper trick pressure."
  },
  {
    id: "joker-hard",
    name: "Joker Hard",
    game: "Joker",
    difficulty: "Hard",
    status: "maintenance",
    reward: 0,
    avatar: "JH",
    personality: "Tournament boss",
    strategy: "Coming soon with aggressive card counting."
  },
  {
    id: "bura-easy",
    name: "Bura Easy",
    game: "Bura",
    difficulty: "Easy",
    status: "active",
    reward: 1,
    avatar: "BE",
    personality: "Friendly table guide",
    strategy: "Keeps rounds readable and rewards clean choices."
  },
  {
    id: "bura-medium",
    name: "Bura Medium",
    game: "Bura",
    difficulty: "Medium",
    status: "maintenance",
    reward: 0,
    avatar: "BM",
    personality: "Pressure player",
    strategy: "Coming soon with stronger tempo decisions."
  },
  {
    id: "bura-hard",
    name: "Bura Hard",
    game: "Bura",
    difficulty: "Hard",
    status: "maintenance",
    reward: 0,
    avatar: "BH",
    personality: "Arena champion",
    strategy: "Coming soon with high-risk finish lines."
  }
]
