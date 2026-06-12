import { cva } from "class-variance-authority"

export const footerRoot = cva("border-t border-white/10 bg-background/70")

export const footerInner = cva(
  "mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"
)

export const footerBrand = cva("space-y-2")

export const footerTitle = cva("text-lg font-black text-foreground")

export const footerDescription = cva("max-w-xl text-base leading-7 text-muted-foreground")

export const footerNav = cva("flex flex-wrap gap-3")

export const footerLink = cva(
  "rounded-lg px-3 py-2 text-base font-bold text-muted-foreground transition hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
)
