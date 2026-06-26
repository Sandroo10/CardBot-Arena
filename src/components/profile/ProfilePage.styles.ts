import { cva } from "class-variance-authority"

export const profileShell = cva("min-h-screen py-8 sm:py-10")

export const profileContent = cva("space-y-7")

export const profileHeader = cva(
  "grid gap-5 rounded-[1.5rem] border border-white/10 bg-background/78 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] md:grid-cols-[auto_1fr_auto] md:items-center"
)

export const profileAvatar = cva(
  "grid size-20 place-items-center rounded-2xl border border-bura/35 bg-bura/15 text-2xl font-black text-bura shadow-[0_14px_28px_rgba(0,0,0,0.2)]"
)

export const profileIdentity = cva("space-y-2")

export const profileEyebrow = cva("text-sm font-black uppercase tracking-[0.22em] text-bura")

export const profileName = cva("text-3xl font-black leading-tight text-foreground sm:text-4xl")

export const profileDescription = cva("max-w-2xl text-base leading-7 text-muted-foreground")

export const profileRank = cva(
  "w-fit rounded-2xl border border-primary/30 bg-primary/10 px-5 py-3 text-center shadow-[0_12px_26px_rgba(20,184,166,0.12)]"
)

export const profileRankLabel = cva("text-xs font-black uppercase tracking-[0.16em] text-muted-foreground")

export const profileRankValue = cva("mt-1 text-2xl font-black text-primary")

export const statsGrid = cva("grid gap-4 border-t border-primary/12 pt-4 sm:grid-cols-2 lg:grid-cols-4")

export const overviewGrid = cva("grid gap-6 lg:grid-cols-[0.8fr_1.2fr]")

export const overviewPanel = cva(
  "rounded-[1.5rem] border border-white/10 bg-background/72 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.2)]"
)

export const panelHeader = cva("mb-5 space-y-2")

export const panelTitle = cva("text-2xl font-black text-foreground")

export const panelDescription = cva("text-base leading-7 text-muted-foreground")

export const performanceList = cva("divide-y divide-white/10")

export const performanceRow = cva("flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0")

export const performanceLabel = cva("text-sm font-bold text-muted-foreground")

export const performanceValue = cva("text-lg font-black text-foreground")

export const achievementGrid = cva("grid gap-4 sm:grid-cols-2")

export const achievementCard = cva(
  "grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border p-4",
  {
    variants: {
      unlocked: {
        true: "border-primary/25 bg-primary/8",
        false: "border-white/8 bg-white/6"
      }
    },
    defaultVariants: {
      unlocked: false
    }
  }
)

export const achievementIcon = cva(
  "grid size-12 place-items-center rounded-xl border",
  {
    variants: {
      unlocked: {
        true: "border-primary/30 bg-primary/15 text-primary",
        false: "border-white/10 bg-white/8 text-slate-300"
      }
    },
    defaultVariants: {
      unlocked: false
    }
  }
)

export const achievementBody = cva("min-w-0")

export const achievementTitle = cva("font-black", {
  variants: {
    unlocked: {
      true: "text-foreground",
      false: "text-slate-200"
    }
  },
  defaultVariants: {
    unlocked: true
  }
})

export const achievementText = cva("mt-1 text-sm leading-6 text-muted-foreground")

export const achievementProgress = cva("mt-2 text-sm font-black text-primary")

export const achievementProgressTrack = cva("mt-3 h-2 overflow-hidden rounded-full bg-white/10")

export const achievementProgressFill = cva("h-full rounded-full bg-primary")

export const historySection = cva("space-y-5")

export const historyHeader = cva("flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between")

export const localNotice = cva(
  "inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-bold text-muted-foreground"
)

export const historyTable = cva("overflow-x-auto rounded-2xl border border-white/10 bg-background/72")

export const historyTableInner = cva("min-w-[46rem]")

export const historyTableHeader = cva(
  "grid grid-cols-[1.3fr_0.8fr_0.8fr_0.65fr_0.65fr_1fr] gap-4 border-b border-white/10 px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-muted-foreground"
)

export const historyRow = cva(
  "grid grid-cols-[1.3fr_0.8fr_0.8fr_0.65fr_0.65fr_1fr] items-center gap-4 border-b border-white/8 px-5 py-4 last:border-b-0"
)

export const historyBot = cva("font-black text-foreground")

export const historyText = cva("text-sm font-semibold text-muted-foreground")

export const resultBadge = cva("w-fit rounded-full border px-3 py-1 text-sm font-black", {
  variants: {
    result: {
      Win: "border-success/30 bg-success/12 text-success",
      Loss: "border-red-400/30 bg-red-500/10 text-red-200"
    }
  },
  defaultVariants: {
    result: "Win"
  }
})

export const pointsText = cva("font-black", {
  variants: {
    earned: {
      true: "text-primary",
      false: "text-muted-foreground"
    }
  },
  defaultVariants: {
    earned: false
  }
})
