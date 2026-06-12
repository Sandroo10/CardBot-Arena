import type { HTMLAttributes } from "react"

import {
  statCardStyles,
  statLabelStyles,
  statMetaStyles,
  statValueStyles
} from "@/components/ui/StatCard.styles"
import { cn } from "@/lib/utils"

type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  label: string
  value: string
  meta?: string
}

export function StatCard({ className, label, meta, value, ...props }: StatCardProps) {
  return (
    <div className={cn(statCardStyles(), className)} {...props}>
      <p className={statLabelStyles()}>{label}</p>
      <p className={statValueStyles()}>{value}</p>
      {meta ? <p className={statMetaStyles()}>{meta}</p> : null}
    </div>
  )
}
