import { cva } from "class-variance-authority"

export const leaderboardShell = cva("min-h-screen py-12")

export const leaderboardContent = cva("space-y-9")

export const pageHeader = cva(
  "grid gap-6 rounded-[1.75rem] border border-white/10 bg-background/78 p-5 shadow-[0_18px_42px_rgba(0,0,0,0.22)] lg:grid-cols-[1fr_auto] lg:items-end"
)

export const pageTitleWrap = cva("space-y-2")

export const pageEyebrow = cva("text-sm font-black uppercase tracking-[0.22em] text-bura")

export const pageTitle = cva("text-4xl font-black leading-tight text-foreground sm:text-5xl")

export const pageDescription = cva("max-w-3xl text-base leading-7 text-muted-foreground")

export const periodTabs = cva("flex flex-wrap gap-2")

export const periodButton = cva(
  "min-h-11 rounded-xl border px-4 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      active: {
        true: "border-primary/45 bg-primary/15 text-primary",
        false: "border-white/10 bg-white/8 text-muted-foreground hover:border-white/20 hover:bg-white/12 hover:text-foreground"
      }
    },
    defaultVariants: {
      active: false
    }
  }
)

export const leaderboardPanel = cva(
  "grid gap-6 rounded-[2rem] bg-background/64 p-5 shadow-[0_18px_42px_rgba(0,0,0,0.2)] lg:grid-cols-[0.95fr_1.05fr] lg:p-7"
)

export const podiumGrid = cva("grid gap-4 sm:grid-cols-3")

export const podiumCard = cva(
  "relative grid min-h-[22rem] grid-rows-[3.25rem_5.25rem_8.5rem_5rem] place-items-center rounded-2xl border bg-card/82 p-5 text-center shadow-[0_14px_30px_rgba(0,0,0,0.18)]",
  {
    variants: {
      place: {
        first: "border-primary/35",
        second: "border-bura/25",
        third: "border-joker/25"
      }
    },
    defaultVariants: {
      place: "first"
    }
  }
)

export const podiumRank = cva("grid size-12 place-items-center rounded-2xl text-lg font-black", {
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
})

export const crownIcon = cva("absolute right-4 top-4 text-primary")

export const podiumAvatar = cva(
  "grid size-16 place-items-center rounded-2xl border border-white/12 bg-white/10 text-xl font-black text-foreground"
)

export const podiumIdentity = cva("self-center")

export const podiumName = cva("text-xl font-black text-foreground")

export const podiumMeta = cva("mt-1 text-sm font-bold text-slate-300")

export const podiumPoints = cva("self-start text-center text-3xl font-black leading-none text-primary")

export const podiumPointsUnit = cva("mt-2 block")

export const tablePanel = cva("overflow-hidden rounded-2xl bg-background/46 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]")

export const tableHeader = cva(
  "grid grid-cols-[3.25rem_1fr_5rem] gap-3 border-b border-white/8 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-300 sm:grid-cols-[3.25rem_1fr_5rem_5rem_5rem]"
)

export const tableHeaderRight = cva("text-right")

export const tableHeaderOptional = cva("hidden text-right sm:block")

export const tableRow = cva(
  "grid grid-cols-[3.25rem_1fr_5rem] items-center gap-3 border-b border-white/6 px-4 py-4 last:border-b-0 sm:grid-cols-[3.25rem_1fr_5rem_5rem_5rem]",
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

export const rankText = cva("text-base font-black text-muted-foreground")

export const playerCell = cva("min-w-0")

export const playerName = cva("truncate font-black text-foreground")

export const playerMeta = cva("text-sm font-semibold text-slate-300")

export const valueText = cva("text-right text-base font-black text-primary")

export const winsText = cva("hidden text-right text-base font-black text-foreground sm:block")

export const changeText = cva("hidden text-right text-sm font-black sm:block", {
  variants: {
    tone: {
      up: "text-success",
      down: "text-red-300",
      same: "text-muted-foreground"
    }
  },
  defaultVariants: {
    tone: "same"
  }
})

export const summaryGrid = cva("grid gap-4 sm:grid-cols-3")

export const summaryCard = cva(
  "rounded-2xl border border-white/10 bg-white/8 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.2)]"
)

export const summaryLabel = cva("text-sm font-black uppercase tracking-[0.16em] text-muted-foreground")

export const summaryValue = cva("mt-3 text-3xl font-black text-foreground")

export const summaryMeta = cva("mt-2 text-sm font-semibold text-muted-foreground")
