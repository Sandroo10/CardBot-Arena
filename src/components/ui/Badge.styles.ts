import { cva } from "class-variance-authority"

export const badgeStyles = cva(
  "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm font-bold",
  {
    variants: {
      tone: {
        neutral: "border-white/15 bg-white/10 text-muted-foreground",
        joker: "border-joker/35 bg-joker/15 text-joker",
        bura: "border-bura/35 bg-bura/15 text-bura",
        success: "border-success/35 bg-success/15 text-success",
        locked: "border-red-400/45 bg-red-500/15 text-red-200"
      }
    },
    defaultVariants: {
      tone: "neutral"
    }
  }
)
