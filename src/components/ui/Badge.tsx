import type { HTMLAttributes } from "react"
import type { VariantProps } from "class-variance-authority"

import { badgeStyles } from "@/components/ui/Badge.styles"
import { cn } from "@/lib/utils"

type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeStyles>

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeStyles({ tone }), className)} {...props} />
}
