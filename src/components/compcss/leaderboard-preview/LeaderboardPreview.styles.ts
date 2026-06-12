import { cva } from "class-variance-authority"

export const leaderboardSection = cva("relative")

export const leaderboardContainer = cva("space-y-8")

export const leaderboardPanel = cva(
  "grid gap-6 rounded-[2rem] border border-white/12 bg-white/8 p-5 shadow-panel backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-7"
)

export const podiumGrid = cva("grid items-end gap-4 sm:grid-cols-3")

export const podiumCard = cva(
  "rounded-2xl border bg-card/72 p-5 text-center shadow-panel",
  {
    variants: {
      place: {
        first: "border-primary/35 sm:min-h-72",
        second: "border-bura/25 sm:min-h-64 sm:translate-y-6",
        third: "border-joker/25 sm:min-h-56 sm:translate-y-10"
      }
    },
    defaultVariants: {
      place: "first"
    }
  }
)

export const podiumRank = cva(
  "mx-auto grid size-12 place-items-center rounded-2xl text-lg font-black",
  {
    variants: {
      place: {
        first: "bg-primary text-primary-foreground",
        second: "bg-bura/18 text-bura",
        third: "bg-joker/18 text-joker"
      }
    },
    defaultVariants: {
      place: "first"
    }
  }
)

export const podiumAvatar = cva(
  "mx-auto mt-5 grid size-16 place-items-center rounded-2xl border border-white/12 bg-white/10 text-xl font-black text-foreground"
)

export const podiumName = cva("mt-4 text-xl font-black text-foreground")

export const podiumMeta = cva("mt-1 text-sm font-semibold text-muted-foreground")

export const podiumPoints = cva("mt-5 text-3xl font-black text-primary")

export const rankingWrap = cva("overflow-hidden rounded-2xl border border-white/10 bg-background/42")

export const rankingHeader = cva(
  "grid grid-cols-[3rem_1fr_5rem] gap-3 border-b border-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-muted-foreground sm:grid-cols-[3rem_1fr_5rem_6rem]"
)

export const rankingHeaderRight = cva("text-right")

export const rankingHeaderMove = cva("hidden text-right sm:block")

export const rankingRow = cva(
  "grid grid-cols-[3rem_1fr_5rem] items-center gap-3 border-b border-white/8 px-4 py-4 last:border-b-0 sm:grid-cols-[3rem_1fr_5rem_6rem]",
  {
    variants: {
      current: {
        true: "bg-primary/10",
        false: "bg-transparent"
      }
    },
    defaultVariants: {
      current: false
    }
  }
)

export const rankingIndex = cva("text-base font-black text-muted-foreground")

export const rankingName = cva("font-black text-foreground")

export const rankingGame = cva("text-sm font-semibold text-muted-foreground")

export const rankingPoints = cva("text-right text-base font-black text-primary")

export const rankingChange = cva("hidden text-right text-sm font-black text-success sm:block")

export const leaderboardFooter = cva(
  "flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between"
)

export const leaderboardNote = cva("text-base leading-7 text-muted-foreground")
