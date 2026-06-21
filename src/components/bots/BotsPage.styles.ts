import { cva } from "class-variance-authority"

export const botsPageShell = cva("min-h-screen py-12")

export const botsPageContent = cva("space-y-9")

export const controlsPanel = cva(
  "space-y-5 rounded-[1.5rem] border border-white/10 bg-background/78 p-5 shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
)

export const pageHeader = cva("flex flex-col gap-4 md:flex-row md:items-end md:justify-between")

export const pageTitleWrap = cva("space-y-2")

export const pageEyebrow = cva("text-sm font-black uppercase tracking-[0.22em] text-bura")

export const pageTitle = cva("text-3xl font-black leading-tight text-foreground sm:text-4xl")

export const pageDescription = cva("max-w-3xl text-base leading-7 text-muted-foreground")

export const rosterSummary = cva(
  "inline-flex w-fit items-center rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-black text-muted-foreground"
)

export const controlGrid = cva("grid gap-4 lg:grid-cols-[1fr_22rem]")

export const filterRow = cva("flex flex-wrap gap-2")

export const filterButton = cva(
  "min-h-10 rounded-xl border px-4 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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

export const searchWrap = cva("relative mt-4")

export const searchWrapCompact = cva("relative")

export const searchIcon = cva("pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground")

export const searchInput = cva(
  "min-h-12 w-full rounded-xl border border-white/10 bg-white/8 pl-11 pr-4 text-base font-semibold text-black outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
)

export const resultsBar = cva(
  "flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
)

export const resultsText = cva("text-sm font-bold text-muted-foreground")

export const resetButton = cva(
  "w-fit rounded-lg px-3 py-2 text-sm font-black text-primary transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
)

export const botGrid = cva("grid gap-5 sm:grid-cols-2 lg:grid-cols-3")

export const botCard = cva(
  "group relative flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border p-5 shadow-[0_16px_36px_rgba(0,0,0,0.22)] transition-colors",
  {
    variants: {
      status: {
        active:
          "border-bura/35 bg-card/88 hover:border-primary/55",
        maintenance: "border-white/8 bg-card/38 opacity-65 grayscale"
      },
      game: {
        Joker: "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-joker/70",
        Bura: "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-bura/70"
      }
    },
    defaultVariants: {
      status: "maintenance",
      game: "Joker"
    }
  }
)

export const botCardTop = cva("flex items-start justify-between gap-4")

export const botAvatar = cva(
  "grid size-16 place-items-center rounded-2xl border text-lg font-black shadow-[0_16px_36px_rgba(0,0,0,0.26)]",
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

export const badgeStack = cva("flex flex-wrap justify-end gap-2")

export const botCardBody = cva("mt-6 flex-1 space-y-5")

export const botTitle = cva("text-2xl font-black text-foreground")

export const botText = cva("mt-2 text-base leading-7 text-muted-foreground")

export const botInfoGrid = cva("grid grid-cols-2 gap-3")

export const botInfoTile = cva("rounded-xl border border-white/10 bg-white/8 p-3")

export const botInfoLabel = cva("text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground")

export const botInfoValue = cva("mt-1 text-base font-black text-foreground")

export const botFooter = cva("mt-6 flex items-center justify-between gap-4")

export const botStrategy = cva("text-sm font-semibold leading-6 text-muted-foreground")

export const lockedButton = cva(
  "inline-flex min-h-10 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-red-400/24 bg-red-500/10 px-4 text-sm font-extrabold text-red-200"
)

export const maintenanceOverlay = cva(
  "absolute inset-0 grid place-items-center bg-background/28 opacity-0 transition group-hover:opacity-100"
)

export const maintenancePill = cva(
  "inline-flex items-center gap-2 rounded-full border border-red-300/35 bg-red-950/92 px-4 py-2 text-sm font-black text-red-100 shadow-[0_12px_28px_rgba(0,0,0,0.24)]"
)

export const emptyState = cva(
  "rounded-[1.5rem] border border-white/10 bg-white/8 p-8 text-center shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
)

export const emptyTitle = cva("text-2xl font-black text-foreground")

export const emptyText = cva("mx-auto mt-3 max-w-xl text-base leading-7 text-muted-foreground")
