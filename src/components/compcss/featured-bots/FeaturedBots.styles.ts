import { cva } from "class-variance-authority"

export const featuredSection = cva("relative scroll-mt-32")

export const featuredContainer = cva("space-y-8")

export const featuredHeaderRow = cva(
  "flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
)

export const featuredSpotlight = cva(
  "grid gap-6 rounded-[2rem] border border-white/12 bg-background/72 p-5 shadow-[0_22px_54px_rgba(0,0,0,0.26)] lg:grid-cols-[0.85fr_1.15fr] lg:p-7"
)

export const botCard = cva(
  "group relative min-h-[20rem] overflow-hidden rounded-2xl border p-5 shadow-[0_16px_36px_rgba(0,0,0,0.22)] transition-colors",
  {
    variants: {
      status: {
        active:
          "border-white/12 bg-card/88 hover:border-primary/45",
        maintenance: "border-white/8 bg-card/40 opacity-70 grayscale"
      },
      game: {
        Joker: "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-joker/70",
        Bura: "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-bura/70"
      }
    },
    defaultVariants: {
      status: "active",
      game: "Joker"
    }
  }
)

export const spotlightVisual = cva(
  "relative min-h-80 overflow-hidden rounded-[1.75rem] border border-bura/20 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.24),rgba(15,23,42,0.9)_58%)] p-5"
)

export const spotlightCardStack = cva("absolute inset-x-8 bottom-8 flex justify-center gap-4")

export const spotlightPlayingCard = cva(
  "flex h-36 w-24 flex-col justify-between rounded-2xl border border-bura bg-white/95 p-4 text-cyan-800 shadow-[0_24px_50px_rgba(0,0,0,0.32)]"
)

export const spotlightPlayingCardOffset = cva("translate-y-6 rotate-6")

export const spotlightCardRank = cva("text-3xl font-black")

export const spotlightCardSuit = cva("text-sm font-black uppercase tracking-[0.16em]")

export const spotlightBotBubble = cva(
  "absolute left-5 top-5 max-w-56 rounded-2xl border border-white/12 bg-background/86 p-4"
)

export const spotlightBotBubbleTitle = cva("text-base font-black text-foreground")

export const spotlightBotBubbleText = cva("mt-1 text-sm leading-6 text-muted-foreground")

export const spotlightBody = cva("flex flex-col justify-between gap-6")

export const cardTop = cva("flex items-start justify-between gap-4")

export const avatar = cva(
  "grid size-16 place-items-center rounded-2xl border text-lg font-black shadow-[0_16px_36px_rgba(0,0,0,0.24)]",
  {
    variants: {
      game: {
        Joker: "border-joker/35 bg-joker/15 text-joker",
        Bura: "border-bura/35 bg-bura/15 text-bura"
      }
    },
    defaultVariants: {
      game: "Joker"
    }
  }
)

export const badgeRow = cva("flex flex-wrap justify-end gap-2")

export const botBody = cva("mt-6 space-y-4")

export const botName = cva("text-2xl font-black text-foreground")

export const botDescription = cva("text-base leading-7 text-muted-foreground")

export const botMetaGrid = cva("grid grid-cols-2 gap-3")

export const botMetaItem = cva("rounded-xl border border-white/10 bg-white/8 p-3")

export const botMetaLabel = cva("text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground")

export const botMetaValue = cva("mt-1 text-base font-black text-foreground")

export const botActionRow = cva("mt-6 flex items-center justify-between gap-4")

export const rewardText = cva("text-sm font-bold text-muted-foreground")

export const lockedAction = cva(
  "inline-flex min-h-10 cursor-not-allowed items-center justify-center rounded-lg px-4 text-sm font-extrabold text-muted-foreground opacity-70"
)

export const maintenanceOverlay = cva(
  "absolute inset-0 grid place-items-center bg-background/25 opacity-0 transition group-hover:opacity-100"
)

export const maintenancePill = cva(
  "rounded-full border border-white/12 bg-background/90 px-4 py-2 text-sm font-black text-muted-foreground shadow-[0_12px_28px_rgba(0,0,0,0.24)]"
)
