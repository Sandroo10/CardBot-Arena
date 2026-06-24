import type { Bot } from "@/types/game"
import { bots } from "@/data/bots"

export function getBotById(id: string) {
  return bots.find((bot) => bot.id === id)
}

export function getBotStatusTone(bot: Bot) {
  return bot.status === "active" ? "Open table" : "Under maintenance"
}

export function getRewardText(bot: Bot) {
  return bot.status === "active" ? `${bot.reward} pt per win` : "Reward locked"
}

export function getDifficultyNote(bot: Bot) {
  if (bot.status === "maintenance") {
    return "Table is visible for preview only."
  }

  return bot.difficulty === "Easy"
    ? "Designed for a clean first match."
    : "Higher pressure table."
}

export function getSiblingBots(bot: Bot) {
  return bots
    .filter((candidate) => candidate.game === bot.game && candidate.id !== bot.id)
    .slice(0, 2)
}

export const previewCards = [
  {
    rank: "J",
    label: "Joker",
    accent: "joker"
  },
  {
    rank: "10",
    label: "Bura",
    accent: "bura"
  },
  {
    rank: "A",
    label: "Arena",
    accent: "arena"
  }
] as const
