import type { LeaderboardPlayer } from "@/types/game"

export type LeaderboardPeriod = "Weekly" | "Monthly" | "All Time"

export const leaderboardPeriods: LeaderboardPeriod[] = ["Weekly", "Monthly", "All Time"]

const periodMultipliers: Record<LeaderboardPeriod, number> = {
  Weekly: 0.34,
  Monthly: 0.68,
  "All Time": 1
}

export function getPeriodPlayers(
  players: LeaderboardPlayer[],
  period: LeaderboardPeriod
): LeaderboardPlayer[] {
  const multiplier = periodMultipliers[period]

  return players
    .map((player) => ({
      ...player,
      points: Math.max(player.isCurrentUser ? 6 : 9, Math.round(player.points * multiplier)),
      wins: Math.max(player.isCurrentUser ? 4 : 7, Math.round(player.wins * multiplier))
    }))
    .sort((first, second) => second.points - first.points)
}

export function getRankChangeTone(rankChange: string) {
  if (rankChange.startsWith("+")) {
    return "up"
  }

  if (rankChange.startsWith("-")) {
    return "down"
  }

  return "same"
}
