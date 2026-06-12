import { cva } from "class-variance-authority"

export const heroSection = cva("relative isolate pt-12")

export const heroContainer = cva(
  "grid min-h-[calc(100vh-9rem)] items-center gap-12 py-12 lg:grid-cols-[1.02fr_0.98fr]"
)

export const heroGlowOne = cva(
  "pointer-events-none absolute left-[-10rem] top-12 -z-10 size-[28rem] rounded-full bg-joker/18 blur-3xl"
)

export const heroGlowTwo = cva(
  "pointer-events-none absolute right-[-12rem] top-28 -z-10 size-[30rem] rounded-full bg-bura/16 blur-3xl"
)

export const heroCopy = cva("flex flex-col gap-7")

export const heroEyebrow = cva("text-base font-extrabold uppercase tracking-[0.22em] text-bura")

export const heroTitle = cva(
  "max-w-4xl text-5xl font-black leading-[1.03] text-foreground sm:text-6xl lg:text-7xl"
)

export const heroDescription = cva("max-w-2xl text-lg leading-8 text-muted-foreground")

export const heroActions = cva("flex flex-col gap-3 pt-1 sm:flex-row")

export const heroStatsGrid = cva("grid max-w-3xl gap-3 sm:grid-cols-3")

export const heroVisual = cva("relative min-h-[33rem]")

export const arenaPanel = cva(
  "absolute inset-x-0 top-12 rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-panel backdrop-blur-xl"
)

export const arenaHeader = cva("flex items-center justify-between gap-4")

export const arenaTitle = cva("text-lg font-black text-foreground")

export const arenaStatus = cva(
  "rounded-full border border-success/30 bg-success/15 px-3 py-1 text-sm font-extrabold text-success"
)

export const tableSurface = cva(
  "mt-7 rounded-[1.75rem] border border-primary/20 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.2),rgba(15,23,42,0.85)_58%)] p-5"
)

export const botRow = cva("flex items-center justify-between gap-3")

export const botAvatar = cva(
  "grid size-14 place-items-center rounded-2xl border border-joker/30 bg-joker/15 text-base font-black text-joker"
)

export const botMeta = cva("space-y-1")

export const botName = cva("font-extrabold text-foreground")

export const botSubtext = cva("text-sm font-semibold text-muted-foreground")

export const scoreChip = cva(
  "rounded-2xl border border-white/12 bg-background/70 px-4 py-3 text-center shadow-glow"
)

export const scoreLabel = cva("text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground")

export const scoreValue = cva("mt-1 text-xl font-black text-foreground")

export const playedCards = cva("my-8 flex justify-center gap-4")

export const playingCard = cva(
  "flex h-32 w-24 flex-col justify-between rounded-2xl border bg-white/95 p-4 text-slate-950 shadow-[0_24px_50px_rgba(0,0,0,0.35)]",
  {
    variants: {
      tone: {
        joker: "border-joker text-fuchsia-700 rotate-[-7deg]",
        bura: "border-bura text-cyan-700 rotate-[5deg]",
        neutral: "border-primary text-emerald-700 rotate-[1deg]"
      }
    },
    defaultVariants: {
      tone: "neutral"
    }
  }
)

export const cardRank = cva("text-3xl font-black")

export const cardSuit = cva("text-sm font-black uppercase tracking-[0.16em]")

export const handRow = cva("flex justify-center gap-3")

export const handCard = cva(
  "h-24 w-16 rounded-xl border border-white/15 bg-gradient-to-br from-slate-800 to-slate-950 shadow-[0_16px_34px_rgba(0,0,0,0.35)]"
)

export const floatingBotCard = cva(
  "absolute bottom-0 left-4 max-w-64 rounded-2xl border border-bura/25 bg-bura/10 p-4 shadow-panel backdrop-blur-xl"
)

export const floatingBotTitle = cva("text-base font-black text-foreground")

export const floatingBotText = cva("mt-1 text-sm leading-6 text-muted-foreground")

export const floatingReward = cva(
  "absolute right-0 top-2 rounded-2xl border border-primary/30 bg-primary/15 px-5 py-4 text-primary shadow-glow backdrop-blur lg:-right-6 lg:top-4 xl:-right-10"
)

export const floatingRewardLabel = cva("text-xs font-black uppercase tracking-[0.18em]")

export const floatingRewardValue = cva("mt-1 text-3xl font-black")
