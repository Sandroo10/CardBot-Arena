import type { Bot, Difficulty, GameType } from "@/types/game"

export type BotFilter = "All" | GameType | Difficulty

export type BotsPageState = {
  filter: BotFilter
  search: string
}

export type BotsPageAction =
  | {
      type: "set-filter"
      filter: BotFilter
    }
  | {
      type: "set-search"
      search: string
    }
  | {
      type: "reset"
    }

export const botFilters: BotFilter[] = ["All", "Joker", "Bura", "Easy", "Medium", "Hard"]

export const initialBotsPageState: BotsPageState = {
  filter: "All",
  search: ""
}

export function botsPageReducer(state: BotsPageState, action: BotsPageAction): BotsPageState {
  switch (action.type) {
    case "set-filter":
      return {
        ...state,
        filter: action.filter
      }
    case "set-search":
      return {
        ...state,
        search: action.search
      }
    case "reset":
      return initialBotsPageState
    default:
      return state
  }
}

export function filterBots(bots: Bot[], state: BotsPageState) {
  const query = state.search.trim().toLowerCase()

  return bots.filter((bot) => {
    const matchesFilter =
      state.filter === "All" ||
      bot.game === state.filter ||
      bot.difficulty === state.filter

    const matchesSearch =
      query.length === 0 ||
      bot.name.toLowerCase().includes(query) ||
      bot.game.toLowerCase().includes(query) ||
      bot.difficulty.toLowerCase().includes(query)

    return matchesFilter && matchesSearch
  })
}

export function groupBotsByStatus(bots: Bot[]) {
  return {
    activeBots: bots.filter((bot) => bot.status === "active"),
    maintenanceBots: bots.filter((bot) => bot.status === "maintenance")
  }
}

export function getBotHref(bot: Bot) {
  return bot.status === "active" ? `/bots/${bot.id}` : undefined
}

export function getBotStatusLabel(bot: Bot) {
  return bot.status === "active" ? "Playable" : "Under Maintenance"
}
