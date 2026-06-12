import type { HTMLAttributes } from "react"

import {
  sectionDescriptionStyles,
  sectionEyebrowStyles,
  sectionHeaderStyles,
  sectionTitleStyles
} from "@/components/ui/SectionHeader.styles"
import { cn } from "@/lib/utils"

type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeader({
  className,
  description,
  eyebrow,
  title,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn(sectionHeaderStyles(), className)} {...props}>
      {eyebrow ? <p className={sectionEyebrowStyles()}>{eyebrow}</p> : null}
      <h2 className={sectionTitleStyles()}>{title}</h2>
      {description ? <p className={sectionDescriptionStyles()}>{description}</p> : null}
    </div>
  )
}
