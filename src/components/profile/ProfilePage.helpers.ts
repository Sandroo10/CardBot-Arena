import type { Achievement, UserProfile } from "@/types/game"

export const profileStats = (profile: UserProfile) => [
  {
    label: "Total points",
    value: `${profile.totalPoints}`,
    meta: "Earned from arena wins"
  },
  {
    label: "Arena rank",
    value: `#${profile.rank}`,
    meta: "Current leaderboard position"
  },
  {
    label: "Wins",
    value: `${profile.wins}`,
    meta: `${profile.bestStreak} best streak`
  },
  {
    label: "Losses",
    value: `${profile.losses}`,
    meta: "Every round builds experience"
  }
]

export function getWinRate(profile: UserProfile) {
  const totalMatches = profile.wins + profile.losses

  if (totalMatches === 0) {
    return 0
  }

  return Math.round((profile.wins / totalMatches) * 100)
}

export function getAchievementIcon(achievement: Achievement) {
  const iconById: Record<string, "trophy" | "medal" | "flame" | "crown"> = {
    "first-win": "trophy",
    "bura-starter": "medal",
    "hot-streak": "flame",
    "point-collector": "crown"
  }

  return iconById[achievement.id] ?? "trophy"
}
