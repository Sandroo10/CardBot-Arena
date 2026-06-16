import { cva } from "class-variance-authority"

export const cardStyles = cva(
  "rounded-2xl border border-white/12 bg-card/88 text-card-foreground shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
)

export const cardHeaderStyles = cva("space-y-2 p-5")

export const cardTitleStyles = cva("text-xl font-extrabold text-foreground")

export const cardDescriptionStyles = cva("text-base leading-7 text-muted-foreground")

export const cardContentStyles = cva("p-5 pt-0")
