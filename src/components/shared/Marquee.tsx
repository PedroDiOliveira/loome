import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
}

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
