import { cva } from "class-variance-authority"

export const homeShell = cva("min-h-screen py-10")

export const homeHero = cva(
  "flex min-h-[calc(100vh-9rem)] flex-col justify-center gap-7"
)

export const homeEyebrow = cva("text-base font-semibold uppercase tracking-[0.2em] text-bura")

export const homeTitle = cva(
  "max-w-4xl text-5xl font-black leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
)

export const homeDescription = cva("max-w-2xl text-lg leading-8 text-muted-foreground")

export const homeActions = cva("flex flex-col gap-3 pt-2 sm:flex-row")

export const homeIntroCard = cva("max-w-3xl")

export const homeIntroCardContent = cva("pt-5 text-base leading-7 text-muted-foreground")
