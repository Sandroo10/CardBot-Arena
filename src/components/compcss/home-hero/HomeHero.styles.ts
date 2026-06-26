import { cva } from "class-variance-authority"

export const heroSection = cva("relative isolate pt-6 sm:pt-12")

export const heroContainer = cva(
  "grid gap-8 py-10 pb-8 sm:gap-12 sm:py-16 md:min-h-[calc(100vh-9rem)] md:pb-24 lg:grid-cols-[0.88fr_1.12fr]"
)

export const heroGlowOne = cva(
  "pointer-events-none absolute left-[-10rem] top-12 -z-10 size-[22rem] rounded-full bg-joker/14 blur-2xl"
)

export const heroGlowTwo = cva(
  "pointer-events-none absolute right-[-12rem] top-28 -z-10 size-[24rem] rounded-full bg-bura/12 blur-2xl"
)

export const heroCopy = cva("flex max-w-2xl flex-col gap-6 sm:gap-8")

export const heroTitle = cva(
  "text-4xl font-black leading-[1.04] text-foreground sm:text-6xl lg:text-7xl"
)

export const heroDescription = cva("max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8")

export const heroActions = cva("flex flex-col gap-3 pt-2 sm:flex-row")

export const heroVisual = cva("relative hidden min-h-[28rem] md:block md:min-h-[33rem]")

export const arenaPanel = cva(
  "absolute inset-x-0 top-4 rounded-[1.5rem] border border-white/12 bg-background/72 p-4 shadow-[0_22px_54px_rgba(0,0,0,0.28)] sm:top-8 sm:rounded-[2rem] sm:p-6"
)

export const arenaHeader = cva("flex items-center justify-between gap-3")

export const arenaTitle = cva("text-lg font-black text-foreground")

export const arenaStatus = cva(
  "rounded-full border border-success/30 bg-success/15 px-3 py-1 text-sm font-extrabold text-success"
)

export const previewCta = cva(
  "inline-flex min-h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-black text-primary-foreground transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
)

export const tableSurface = cva(
  "mt-5 rounded-[1.25rem] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.16),rgba(15,23,42,0.82)_58%)] p-4 sm:mt-7 sm:rounded-[1.75rem] sm:p-5"
)

export const botRow = cva("grid grid-cols-[auto_1fr_auto] items-center gap-3")

export const botAvatar = cva(
  "grid size-14 place-items-center rounded-2xl border border-bura/30 bg-bura/15 text-base font-black text-bura"
)

export const botMeta = cva("min-w-0 space-y-1")

export const botName = cva("truncate font-extrabold text-foreground")

export const botSubtext = cva("line-clamp-2 text-sm font-semibold text-muted-foreground")

export const scoreChip = cva(
  "rounded-2xl bg-background/82 px-4 py-3 text-center shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
)

export const scoreLabel = cva("text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground")

export const scoreValue = cva("mt-1 text-xl font-black text-foreground")

export const playedCards = cva("my-7 flex justify-center gap-2 sm:my-8 sm:gap-4")

export const playingCard = cva(
  "flex h-28 w-20 flex-col justify-between rounded-2xl border bg-white/95 p-3 text-slate-950 shadow-[0_18px_34px_rgba(0,0,0,0.28)] sm:h-32 sm:w-24 sm:p-4",
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
  "h-20 w-12 rounded-xl border border-white/8 bg-slate-900/80 shadow-[0_12px_24px_rgba(0,0,0,0.24)] sm:h-24 sm:w-16"
)

export const scrollCue = cva(
  "absolute bottom-6 left-1/2 z-10 hidden size-12 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-foreground shadow-[0_14px_34px_rgba(0,0,0,0.24)] transition hover:border-primary/50 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:grid"
)

export const scrollCueIcon = cva("animate-bounce")

