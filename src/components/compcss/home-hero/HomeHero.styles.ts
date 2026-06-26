import { cva } from "class-variance-authority"

export const heroSection = cva("relative isolate pt-12")

export const heroContainer = cva(
  "grid min-h-[calc(100vh-9rem)] items-center gap-14 py-16 pb-24 lg:grid-cols-[0.88fr_1.12fr]"
)

export const heroGlowOne = cva(
  "pointer-events-none absolute left-[-10rem] top-12 -z-10 size-[22rem] rounded-full bg-joker/14 blur-2xl"
)

export const heroGlowTwo = cva(
  "pointer-events-none absolute right-[-12rem] top-28 -z-10 size-[24rem] rounded-full bg-bura/12 blur-2xl"
)

export const heroCopy = cva("flex max-w-2xl flex-col gap-8")

export const heroTitle = cva(
  "text-5xl font-black leading-[1.02] text-foreground sm:text-6xl lg:text-7xl"
)

export const heroDescription = cva("max-w-xl text-lg leading-8 text-muted-foreground")

export const heroActions = cva("flex flex-col gap-3 pt-2 sm:flex-row")

export const heroVisual = cva("relative min-h-[33rem]")

export const arenaPanel = cva(
  "absolute inset-x-0 top-8 rounded-[2rem] border border-white/12 bg-background/72 p-6 shadow-[0_22px_54px_rgba(0,0,0,0.28)]"
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
  "grid size-14 place-items-center rounded-2xl border border-bura/30 bg-bura/15 text-base font-black text-bura"
)

export const botMeta = cva("space-y-1")

export const botName = cva("font-extrabold text-foreground")

export const botSubtext = cva("text-sm font-semibold text-muted-foreground")

export const scoreChip = cva(
  "rounded-2xl border border-white/12 bg-background/82 px-4 py-3 text-center shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
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

export const scrollCue = cva(
  "absolute bottom-6 left-1/2 z-10 grid size-12 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-foreground shadow-[0_14px_34px_rgba(0,0,0,0.24)] transition hover:border-primary/50 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
)

export const scrollCueIcon = cva("animate-bounce")

