import { cva } from "class-variance-authority"

export const buttonStyles = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-base font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_18px_44px_rgba(20,184,166,0.28)] hover:brightness-110 active:scale-[0.98]",
        secondary:
          "border border-white/15 bg-white/10 text-foreground backdrop-blur hover:border-primary/60 hover:bg-white/15 active:scale-[0.98]",
        ghost: "text-muted-foreground hover:bg-white/10 hover:text-foreground"
      },
      size: {
        sm: "min-h-10 rounded-lg px-4 text-sm",
        md: "min-h-12 px-5 text-base",
        lg: "min-h-14 px-7 text-lg"
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "md"
    }
  }
)
