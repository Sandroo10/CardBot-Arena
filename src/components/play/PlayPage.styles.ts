import { cva } from "class-variance-authority"

export const playShell = cva("min-h-screen py-8 sm:py-12")

export const playContent = cva("space-y-6")

export const mobileBackLink = cva(
  "inline-flex min-h-10 w-fit items-center gap-2 rounded-lg px-3 text-sm font-black text-muted-foreground transition hover:bg-white/8 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
)

export const playHeader = cva(
  "flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-background/78 p-5 shadow-[0_18px_42px_rgba(0,0,0,0.22)] md:flex-row md:items-center md:justify-between"
)

export const headerCopy = cva("space-y-2")

export const playEyebrow = cva("text-sm font-black uppercase tracking-[0.22em] text-bura")

export const playTitle = cva("text-3xl font-black leading-tight text-foreground sm:text-4xl")

export const playDescription = cva("max-w-2xl text-base leading-7 text-muted-foreground")

export const headerActions = cva("flex flex-wrap gap-3")

export const boardGrid = cva("grid gap-5 xl:grid-cols-[minmax(0,1fr)_18rem]")

export const boardPanel = cva(
  "rounded-[1.25rem] border border-white/10 bg-card/70 p-3 shadow-[0_18px_42px_rgba(0,0,0,0.2)] sm:rounded-[1.75rem] sm:p-6"
)

export const lockedPanel = cva(
  "rounded-[1.75rem] border border-red-300/25 bg-red-950/35 p-6 text-center shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
)

export const lockedIcon = cva(
  "mx-auto grid size-16 place-items-center rounded-2xl border border-red-300/30 bg-red-500/10 text-red-100"
)

export const lockedTitle = cva("mt-4 text-3xl font-black text-foreground")

export const lockedText = cva("mx-auto mt-3 max-w-xl text-base leading-7 text-red-100/78")

export const tableSurface = cva(
  "relative grid min-h-[34rem] gap-5 overflow-hidden rounded-[1.1rem] border border-bura/25 bg-background/72 p-3 pt-16 sm:rounded-[1.35rem] sm:p-6 sm:pt-16"
)

export const tableProgress = cva(
  "absolute left-4 top-4 rounded-full border border-primary/25 bg-primary/12 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-primary sm:left-6 sm:top-6"
)

export const playerZone = cva("space-y-3")

export const zoneHeader = cva("flex items-center justify-between gap-4")

export const zoneTitle = cva("text-sm font-black uppercase tracking-[0.18em] text-muted-foreground")

export const zoneScore = cva("rounded-full border border-white/10 bg-white/8 px-3 py-1 text-sm font-black text-foreground")

export const botHand = cva("flex justify-center gap-1.5 sm:gap-4")

export const centerTable = cva(
  "grid min-h-40 place-items-center rounded-[1.1rem] border border-white/10 bg-white/6 p-3 sm:min-h-44 sm:rounded-[1.25rem] sm:p-4"
)

export const centerCards = cva("flex items-center justify-center gap-2 sm:gap-5")

export const playerHand = cva("flex flex-wrap justify-center gap-2 sm:gap-5")

export const playCard = cva(
  "grid h-28 w-16 content-between rounded-xl border bg-zinc-100 p-2.5 text-slate-950 shadow-[0_12px_24px_rgba(0,0,0,0.22)] sm:h-36 sm:w-24 sm:rounded-2xl sm:p-3",
  {
    variants: {
      tone: {
        bura: "border-bura",
        joker: "border-joker",
        neutral: "border-sky-400"
      },
      size: {
        normal: "",
        hidden: "bg-slate-900 text-foreground"
      },
      selected: {
        true: "translate-y-[-0.35rem] ring-4 ring-primary/35",
        false: ""
      }
    },
    defaultVariants: {
      tone: "neutral",
      size: "normal",
      selected: false
    }
  }
)

export const playableCardButton = cva(
  "rounded-2xl transition hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
)

export const cardTop = cva("flex items-start justify-between gap-1 text-2xl font-black sm:gap-2 sm:text-3xl")

export const cardSuit = cva("text-base sm:text-lg")

export const cardLabel = cva("text-center text-[0.62rem] font-black uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.2em]")

export const sidePanel = cva("space-y-5")

export const infoPanel = cva(
  "rounded-[1.5rem] border border-white/10 bg-background/72 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.2)]"
)

export const panelTitle = cva("text-xl font-black text-foreground")

export const panelText = cva("mt-2 text-sm font-semibold leading-6 text-muted-foreground")

export const stepsList = cva("mt-4 grid gap-3")

export const stepItem = cva("flex gap-3 rounded-xl border border-white/10 bg-white/7 p-3 text-sm font-semibold text-muted-foreground")

export const stepNumber = cva("grid size-7 shrink-0 place-items-center rounded-lg bg-primary text-sm font-black text-primary-foreground")

export const resultActions = cva("mt-5 grid gap-3")

export const lossButton = cva(
  "border border-red-300/28 bg-red-950/36 text-red-100 hover:border-red-300/42 hover:bg-red-900/42"
)

export const modalBackdrop = cva(
  "fixed inset-0 z-50 grid place-items-center bg-black/88 p-4"
)

export const resultDialog = cva(
  "relative w-full max-w-md rounded-[1.5rem] border p-6 shadow-[0_24px_60px_rgba(0,0,0,0.36)]",
  {
    variants: {
      result: {
        Win: "border-success/22 bg-[linear-gradient(135deg,rgba(34,197,94,0.14),hsl(var(--background))_22%)]",
        Loss: "border-red-300/22 bg-[linear-gradient(135deg,rgba(185,28,28,0.18),hsl(var(--background))_22%)]"
      }
    },
    defaultVariants: {
      result: "Win"
    }
  }
)

export const dialogClose = cva(
  "absolute right-4 top-4 grid size-9 place-items-center rounded-full text-muted-foreground transition hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
)

export const dialogIcon = cva(
  "grid size-16 place-items-center rounded-2xl border",
  {
    variants: {
      result: {
        Win: "border-success/35 bg-success/15 text-success",
        Loss: "border-red-400/35 bg-red-500/12 text-red-100"
      }
    },
    defaultVariants: {
      result: "Win"
    }
  }
)

export const dialogTitle = cva("mt-5 text-3xl font-black text-foreground")

export const dialogText = cva("mt-2 text-base leading-7 text-muted-foreground")

export const dialogActions = cva("mt-6 flex flex-wrap gap-3")
