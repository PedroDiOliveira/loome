import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  light?: boolean
}

export function SectionHeading({ title, subtitle, align = "center", light = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center")}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight",
        light ? "text-white" : "text-gray-950"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg max-w-2xl",
          align === "center" && "mx-auto",
          light ? "text-gray-400" : "text-gray-600"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
