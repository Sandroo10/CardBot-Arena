import type { ButtonHTMLAttributes } from "react"
import type { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { buttonStyles } from "@/components/ui/Button.styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>

export function Button({ className, intent, size, type = "button", ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ intent, size }), className)}
      type={type}
      {...props}
    />
  )
}
