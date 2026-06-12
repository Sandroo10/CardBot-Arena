import type { Bot } from "@/types/game"

export function getFeaturedBot(bots: Bot[]) {
  return bots.find((bot) => bot.id === "bura-easy") ?? bots[0]
}

export function getBotHref(bot: Bot) {
  return bot.status === "active" ? `/bots/${bot.id}` : "/bots"
}

export function getBotActionLabel(bot: Bot) {
  return bot.status === "active" ? "Play" : "Under Maintenance"
}
