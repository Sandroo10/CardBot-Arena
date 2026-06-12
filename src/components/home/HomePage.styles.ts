import { cva } from "class-variance-authority"

export const homeShell = cva("min-h-screen px-6 py-8 sm:px-8 lg:px-12")

export const homeHero = cva(
  "mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center gap-7"
)

export const homeEyebrow = cva("text-base font-semibold uppercase tracking-[0.2em] text-bura")

export const homeTitle = cva(
  "max-w-4xl text-5xl font-black leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
)

export const homeActions = cva("flex flex-col gap-3 pt-2 sm:flex-row")

export const homeCta = cva(
  "inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-base font-extrabold transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_18px_44px_rgba(20,184,166,0.28)] hover:brightness-110",
        secondary:
          "border border-white/15 bg-white/10 text-foreground backdrop-blur hover:border-primary/60 hover:bg-white/15"
      }
    },
    defaultVariants: {
      intent: "primary"
    }
  }
)

export const homeCard = cva(
  "max-w-3xl rounded-2xl border border-white/12 bg-card/72 p-5 text-base leading-7 text-muted-foreground shadow-panel backdrop-blur"
)
