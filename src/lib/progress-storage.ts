import type { Achievement, MatchHistory, UserProfile } from "@/types/game"

const progressStorageKey = "cardbot-arena-progress-v1"

type StoredProgress = {
  matches: MatchHistory[]
}

function isStoredProgress(value: unknown): value is StoredProgress {
  if (!value || typeof value !== "object") {
    return false
  }

  return Array.isArray((value as StoredProgress).matches)
}

function getStoredProgress(): StoredProgress {
  if (typeof window === "undefined") {
    return {
      matches: []
    }
  }

  try {
    const rawValue = window.localStorage.getItem(progressStorageKey)

    if (!rawValue) {
      return {
        matches: []
      }
    }

    const parsedValue = JSON.parse(rawValue)

    return isStoredProgress(parsedValue) ? parsedValue : { matches: [] }
  } catch {
    return {
      matches: []
    }
  }
}

function setStoredProgress(progress: StoredProgress) {
  window.localStorage.setItem(progressStorageKey, JSON.stringify(progress))
  window.dispatchEvent(new Event("cardbot-progress-change"))
}

function getCurrentStreak(matches: MatchHistory[]) {
  let streak = 0

  for (const match of matches) {
    if (match.result !== "Win") {
      break
    }

    streak += 1
  }

  return streak
}

function getAchievementProgress(profile: UserProfile): Achievement[] {
  const buraWins = profile.matchHistory.filter(
    (match) => match.game === "Bura" && match.result === "Win"
  ).length

  return profile.achievements.map((achievement) => {
    if (achievement.id === "first-win") {
      return {
        ...achievement,
        unlocked: profile.wins > 0,
        progress: profile.wins > 0 ? undefined : "0 / 1"
      }
    }

    if (achievement.id === "bura-starter") {
      return {
        ...achievement,
        unlocked: buraWins >= 5,
        progress: buraWins >= 5 ? undefined : `${buraWins} / 5`
      }
    }

    if (achievement.id === "hot-streak") {
      return {
        ...achievement,
        unlocked: profile.bestStreak >= 5,
        progress: profile.bestStreak >= 5 ? undefined : `${profile.bestStreak} / 5`
      }
    }

    if (achievement.id === "point-collector") {
      return {
        ...achievement,
        unlocked: profile.totalPoints >= 25,
        progress: profile.totalPoints >= 25 ? undefined : `${profile.totalPoints} / 25`
      }
    }

    return achievement
  })
}

export function readLocalProfile(defaultProfile: UserProfile): UserProfile {
  const progress = getStoredProgress()
  const wins = progress.matches.filter((match) => match.result === "Win").length
  const losses = progress.matches.filter((match) => match.result === "Loss").length
  const localPoints = progress.matches.reduce((total, match) => total + match.pointsEarned, 0)
  const mergedMatches = [...progress.matches, ...defaultProfile.matchHistory].slice(0, 8)
  const bestStreak = Math.max(defaultProfile.bestStreak, getCurrentStreak(progress.matches))

  const profile: UserProfile = {
    ...defaultProfile,
    totalPoints: defaultProfile.totalPoints + localPoints,
    wins: defaultProfile.wins + wins,
    losses: defaultProfile.losses + losses,
    bestStreak,
    rank: Math.max(1, defaultProfile.rank - Math.floor(localPoints / 4)),
    matchHistory: mergedMatches
  }

  return {
    ...profile,
    achievements: getAchievementProgress(profile)
  }
}

export function recordLocalMatch(match: MatchHistory) {
  const progress = getStoredProgress()

  setStoredProgress({
    matches: [match, ...progress.matches].slice(0, 12)
  })
}

export function clearLocalProgress() {
  setStoredProgress({
    matches: []
  })
}
