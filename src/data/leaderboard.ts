import type { LeaderboardPlayer } from "@/types/game"

export const leaderboardPlayers: LeaderboardPlayer[] = [
  {
    id: "mariam",
    name: "Mariam",
    points: 42,
    wins: 29,
    favoriteGame: "Joker",
    rankChange: "+2"
  },
  {
    id: "nika",
    name: "Nika",
    points: 37,
    wins: 25,
    favoriteGame: "Bura",
    rankChange: "+1"
  },
  {
    id: "sandro",
    name: "Sandro",
    points: 31,
    wins: 21,
    favoriteGame: "Joker",
    rankChange: "0"
  },
  {
    id: "you",
    name: "You",
    points: 18,
    wins: 12,
    favoriteGame: "Bura",
    rankChange: "+4",
    isCurrentUser: true
  },
  {
    id: "teimuraz",
    name: "Teimuraz",
    points: 16,
    wins: 10,
    favoriteGame: "Joker",
    rankChange: "-1"
  }
]
