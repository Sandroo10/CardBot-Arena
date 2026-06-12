import { cva } from "class-variance-authority"

export const statCardStyles = cva(
  "rounded-2xl border border-white/10 bg-white/10 p-5 shadow-panel backdrop-blur"
)

export const statLabelStyles = cva("text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground")

export const statValueStyles = cva("mt-3 text-3xl font-black text-foreground")

export const statMetaStyles = cva("mt-2 text-sm leading-6 text-muted-foreground")
