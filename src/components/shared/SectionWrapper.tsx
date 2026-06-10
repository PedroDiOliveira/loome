import { cn } from "@/lib/utils"
import { m, viewportOnce } from "@/lib/motion"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "white" | "dark"
}

export function SectionWrapper({ children, className, id, background = "default" }: SectionWrapperProps) {
  return (
    <m.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "py-20 md:py-28",
        background === "white" && "bg-white",
        background === "dark" && "bg-surface-dark",
        background === "default" && "bg-gray-50",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {children}
      </div>
    </m.section>
  )
}
