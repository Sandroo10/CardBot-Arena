import type { HTMLAttributes } from "react"

import {
  cardContentStyles,
  cardDescriptionStyles,
  cardHeaderStyles,
  cardStyles,
  cardTitleStyles
} from "@/components/ui/Card.styles"
import { cn } from "@/lib/utils"

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(cardStyles(), className)} {...props} />
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(cardHeaderStyles(), className)} {...props} />
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn(cardTitleStyles(), className)} {...props} />
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn(cardDescriptionStyles(), className)} {...props} />
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(cardContentStyles(), className)} {...props} />
}
