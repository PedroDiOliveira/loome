import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/useFadeIn"

interface AnimatedItemProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: "up" | "left"
}

export function AnimatedItem({ children, delay = 0, className, direction = "up" }: AnimatedItemProps) {
  const { ref, isVisible } = useFadeIn({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-500 ease-out",
        !isVisible && direction === "up" && "opacity-0 translate-y-3",
        !isVisible && direction === "left" && "opacity-0 -translate-x-3",
        isVisible && "opacity-100 translate-x-0 translate-y-0",
        className
      )}
    >
      {children}
    </div>
  )
}
