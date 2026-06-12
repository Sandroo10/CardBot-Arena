import { cva } from "class-variance-authority"

export const sectionHeaderStyles = cva("max-w-3xl space-y-3")

export const sectionEyebrowStyles = cva(
  "text-sm font-extrabold uppercase tracking-[0.2em] text-bura"
)

export const sectionTitleStyles = cva("text-3xl font-black leading-tight text-foreground sm:text-4xl")

export const sectionDescriptionStyles = cva("text-base leading-7 text-muted-foreground")
