import type { Bot, MatchHistory, MatchResult } from "@/types/game"

export type TableCard = {
  id: string
  rank: string
  suit: string
  label: string
  tone: "bura" | "joker" | "neutral"
}

export const playerCards: TableCard[] = [
  {
    id: "player-ace",
    rank: "A",
    suit: "♠",
    label: "Arena",
    tone: "bura"
  },
  {
    id: "player-ten",
    rank: "10",
    suit: "♦",
    label: "Bura",
    tone: "neutral"
  },
  {
    id: "player-king",
    rank: "K",
    suit: "♣",
    label: "Hold",
    tone: "neutral"
  }
]

export const botCards: TableCard[] = [
  {
    id: "bot-hidden-one",
    rank: "?",
    suit: "",
    label: "Bot",
    tone: "joker"
  },
  {
    id: "bot-hidden-two",
    rank: "?",
    suit: "",
    label: "Bot",
    tone: "joker"
  },
  {
    id: "bot-hidden-three",
    rank: "?",
    suit: "",
    label: "Bot",
    tone: "joker"
  }
]

export const tableCards: TableCard[] = [
  {
    id: "table-jack",
    rank: "J",
    suit: "♥",
    label: "Lead",
    tone: "joker"
  },
  {
    id: "table-ten",
    rank: "10",
    suit: "♠",
    label: "Answer",
    tone: "bura"
  }
]

export const tableSteps = [
  "Review the bot lead.",
  "Choose the strongest readable card.",
  "Finish the visual round and save the result."
]

export function createMatch(bot: Bot, result: MatchResult): MatchHistory {
  return {
    id: `local-${Date.now()}`,
    botName: bot.name,
    game: bot.game,
    difficulty: bot.difficulty,
    result,
    pointsEarned: result === "Win" ? bot.reward : 0,
    playedAt: new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(new Date())
  }
}
