import { cva } from "class-variance-authority"

export const headerRoot = cva(
  "sticky top-0 z-50 border-b border-white/10 bg-background/78 backdrop-blur-xl"
)

export const headerInner = cva(
  "mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12"
)

export const logoLink = cva(
  "group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
)

export const logoMark = cva(
  "grid size-11 place-items-center rounded-2xl border border-primary/30 bg-primary/15 text-lg font-black text-primary shadow-glow"
)

export const logoText = cva("text-lg font-black text-foreground sm:text-xl")

export const desktopNav = cva("hidden items-center gap-2 md:flex")

export const navLink = cva(
  "rounded-xl px-4 py-2 text-base font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      active: {
        true: "bg-white/10 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]",
        false: "text-muted-foreground hover:bg-white/10 hover:text-foreground"
      }
    },
    defaultVariants: {
      active: false
    }
  }
)

export const headerActions = cva("flex items-center gap-3")

export const avatarLink = cva(
  "hidden size-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-foreground transition hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:grid"
)

export const menuButton = cva(
  "inline-grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-foreground transition hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
)

export const mobileNav = cva(
  "border-t border-white/10 bg-background/94 px-6 py-4 shadow-panel backdrop-blur-xl md:hidden"
)

export const mobileNavInner = cva("mx-auto flex max-w-6xl flex-col gap-2")
