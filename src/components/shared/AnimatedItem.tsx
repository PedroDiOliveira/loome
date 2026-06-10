import { cn } from "@/lib/utils"
import { m, springSoft, viewportOnce } from "@/lib/motion"

interface AnimatedItemProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: "up" | "left"
}

export function AnimatedItem({ children, delay = 0, className, direction = "up" }: AnimatedItemProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: direction === "up" ? 12 : 0, x: direction === "left" ? -12 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ ...viewportOnce, amount: 0.1 }}
      transition={{ ...springSoft, delay: delay / 1000 }}
      className={cn(className)}
    >
      {children}
    </m.div>
  )
}
