import { cva } from "class-variance-authority"

export const botsPageShell = cva("min-h-screen py-12")

export const botsPageContent = cva("space-y-9")

export const controlsPanel = cva(
  "rounded-[1.5rem] border border-white/10 bg-background/48 p-4 shadow-panel backdrop-blur"
)

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

export const searchIcon = cva("pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground")

export const searchInput = cva(
  "min-h-12 w-full rounded-xl border border-white/10 bg-white/8 pl-11 pr-4 text-base font-semibold text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
)

export const botGrid = cva("grid gap-5 sm:grid-cols-2 lg:grid-cols-3")

export const botCard = cva(
  "group relative min-h-[22rem] overflow-hidden rounded-2xl border p-5 shadow-panel backdrop-blur transition",
  {
    variants: {
      status: {
        active:
          "border-bura/35 bg-card/82 hover:-translate-y-1 hover:border-primary/55 hover:shadow-glow",
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

export const botCardBody = cva("mt-6 space-y-5")

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
  "inline-flex items-center gap-2 rounded-full border border-red-300/35 bg-red-950/92 px-4 py-2 text-sm font-black text-red-100 shadow-panel"
)

export const emptyState = cva(
  "rounded-[1.5rem] border border-white/10 bg-white/8 p-8 text-center shadow-panel backdrop-blur"
)

export const emptyTitle = cva("text-2xl font-black text-foreground")

export const emptyText = cva("mx-auto mt-3 max-w-xl text-base leading-7 text-muted-foreground")
