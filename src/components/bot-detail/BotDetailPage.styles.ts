import { cva } from "class-variance-authority"

export const detailShell = cva("min-h-screen py-12")

export const detailContent = cva("space-y-8")

export const backLink = cva(
  "inline-flex min-h-10 w-fit items-center gap-2 rounded-lg px-3 text-sm font-black text-muted-foreground transition hover:bg-white/8 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
)

export const heroPanel = cva(
  "mx-auto grid max-w-6xl gap-7 overflow-hidden rounded-[1.5rem] border border-white/8 bg-background/76 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.2)] lg:grid-cols-[1.05fr_0.95fr] lg:p-7"
)

export const heroCopy = cva("space-y-6")

export const statusRow = cva("flex flex-wrap items-center gap-3")

export const statusPill = cva(
  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black",
  {
    variants: {
      status: {
        active: "border-bura/35 bg-bura/12 text-bura",
        maintenance: "border-red-300/35 bg-red-950/70 text-red-100"
      }
    },
    defaultVariants: {
      status: "active"
    }
  }
)

export const botIdentity = cva("flex flex-col gap-4 sm:flex-row sm:items-center")

export const heroAvatar = cva(
  "grid size-24 shrink-0 place-items-center rounded-[1.35rem] border text-3xl font-black shadow-[0_16px_34px_rgba(0,0,0,0.22)]",
  {
    variants: {
      game: {
        Joker: "border-joker/35 bg-joker/14 text-joker",
        Bura: "border-bura/35 bg-bura/14 text-bura"
      }
    },
    defaultVariants: {
      game: "Bura"
    }
  }
)

export const titleBlock = cva("space-y-2")

export const detailTitle = cva("text-4xl font-black leading-tight text-foreground sm:text-5xl")

export const detailSubtitle = cva("max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg")

export const badgeRow = cva("flex flex-wrap gap-2")

export const actionRow = cva("flex flex-wrap gap-3")

export const secondaryTextLink = cva(
  "inline-flex min-h-10 items-center justify-center rounded-lg px-2 text-sm font-black text-muted-foreground transition hover:bg-white/8 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
)

export const disabledAction = cva(
  "inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/8 px-5 text-base font-extrabold text-muted-foreground"
)

export const lockedNotice = cva(
  "flex gap-3 rounded-2xl border border-red-300/24 bg-red-950/40 p-4 text-sm font-semibold leading-6 text-red-100"
)

export const tablePanel = cva(
  "rounded-[1.35rem] bg-[radial-gradient(circle_at_50%_18%,rgba(20,184,166,0.18),rgba(15,23,42,0.72)_58%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_16px_34px_rgba(6,182,212,0.08)]"
)

export const tableHeader = cva("flex items-start justify-between gap-4")

export const tableKicker = cva("text-xs font-black uppercase tracking-[0.18em] text-bura")

export const tableTitle = cva("mt-1 text-xl font-black text-foreground")

export const tableMeta = cva(
  "rounded-xl bg-background/70 px-4 py-3 text-center text-sm font-black text-foreground"
)

export const cardFan = cva("mt-8 flex min-h-44 items-center justify-center gap-3 sm:gap-5")

export const previewCard = cva(
  "grid h-36 w-24 content-between rounded-2xl border bg-zinc-100 p-4 text-slate-950 shadow-[0_16px_28px_rgba(0,0,0,0.22)]",
  {
    variants: {
      accent: {
        joker: "rotate-[-7deg] border-joker",
        bura: "rotate-[4deg] border-sky-400",
        arena: "rotate-[1deg] border-bura"
      }
    },
    defaultVariants: {
      accent: "bura"
    }
  }
)

export const cardRank = cva("text-3xl font-black")

export const cardLabel = cva("text-center text-xs font-black uppercase tracking-[0.22em]")

export const detailGrid = cva("grid gap-5 lg:grid-cols-[0.9fr_1.1fr]")

export const infoPanel = cva(
  "rounded-[1.5rem] bg-card/54 p-5 shadow-[0_12px_26px_rgba(0,0,0,0.14)]"
)

export const sectionTitle = cva("text-xl font-black text-foreground")

export const sectionText = cva("mt-2 text-base leading-7 text-muted-foreground")

export const statGrid = cva("mt-5 grid grid-cols-2 gap-3")

export const statTile = cva("rounded-xl bg-white/7 p-4")

export const statLabel = cva("text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground")

export const statValue = cva("mt-2 text-lg font-black text-foreground")

export const tacticList = cva("mt-5 grid gap-3")

export const tacticItem = cva(
  "flex gap-3 rounded-xl bg-white/7 p-4 text-sm font-semibold leading-6 text-muted-foreground"
)

export const tacticIcon = cva("mt-0.5 text-primary")

export const siblingGrid = cva("mt-5 grid gap-3 sm:grid-cols-2")

export const siblingCard = cva("rounded-xl bg-white/7 p-4")

export const siblingTop = cva("flex items-center justify-between gap-3")

export const siblingName = cva("font-black text-foreground")

export const siblingMeta = cva("mt-2 text-sm font-semibold text-muted-foreground")
