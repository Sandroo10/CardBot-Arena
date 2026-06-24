import type { UserProfile } from "@/types/game"

export const defaultUserProfile: UserProfile = {
  username: "Arena Player",
  initials: "AP",
  totalPoints: 18,
  rank: 4,
  wins: 12,
  losses: 6,
  favoriteGame: "Bura",
  bestStreak: 4,
  matchHistory: [
    {
      id: "match-001",
      botName: "Bura Easy",
      game: "Bura",
      difficulty: "Easy",
      result: "Win",
      pointsEarned: 1,
      playedAt: "Jun 20, 2026"
    },
    {
      id: "match-002",
      botName: "Bura Easy",
      game: "Bura",
      difficulty: "Easy",
      result: "Win",
      pointsEarned: 1,
      playedAt: "Jun 19, 2026"
    },
    {
      id: "match-003",
      botName: "Joker Medium",
      game: "Joker",
      difficulty: "Medium",
      result: "Loss",
      pointsEarned: 0,
      playedAt: "May 28, 2026"
    },
    {
      id: "match-004",
      botName: "Bura Hard",
      game: "Bura",
      difficulty: "Hard",
      result: "Loss",
      pointsEarned: 0,
      playedAt: "May 22, 2026"
    },
    {
      id: "match-005",
      botName: "Bura Easy",
      game: "Bura",
      difficulty: "Easy",
      result: "Win",
      pointsEarned: 1,
      playedAt: "May 18, 2026"
    }
  ],
  achievements: [
    {
      id: "first-win",
      title: "First Victory",
      description: "Win your first arena match.",
      unlocked: true
    },
    {
      id: "bura-starter",
      title: "Bura Starter",
      description: "Win five matches against Bura bots.",
      unlocked: true
    },
    {
      id: "hot-streak",
      title: "Hot Streak",
      description: "Win five matches in a row.",
      unlocked: false,
      progress: "4 / 5"
    },
    {
      id: "point-collector",
      title: "Point Collector",
      description: "Reach 25 total arena points.",
      unlocked: false,
      progress: "18 / 25"
    }
  ]
}
