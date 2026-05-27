import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/useFadeIn"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "white" | "dark"
}

export function SectionWrapper({ children, className, id, background = "default" }: SectionWrapperProps) {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "py-20 md:py-28",
        background === "white" && "bg-white",
        background === "dark" && "bg-navy-950",
        background === "default" && "bg-gray-50",
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {children}
      </div>
    </section>
  )
}
