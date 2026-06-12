import type { ElementType, HTMLAttributes } from "react"

import { containerStyles } from "@/components/ui/Container.styles"
import { cn } from "@/lib/utils"

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
}

export function Container({ as: Component = "div", className, ...props }: ContainerProps) {
  return <Component className={cn(containerStyles(), className)} {...props} />
}
