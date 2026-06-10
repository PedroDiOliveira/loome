import { cn } from "@/lib/utils"

interface BrowserFrameProps {
  url: string
  children: React.ReactNode
  theme?: "light" | "dark"
  className?: string
}

export function BrowserFrame({ url, children, theme = "light", className }: BrowserFrameProps) {
  const dark = theme === "dark"

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden",
        dark ? "glass-dark shadow-2xl" : "shadow-md border border-gray-200 bg-white",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1.5 px-4 py-2.5 border-b",
          dark ? "border-white/10" : "bg-gray-100 border-gray-200"
        )}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div
          className={cn(
            "ml-2 flex-1 max-w-[220px] rounded-md px-3 py-1 text-[10px] truncate border",
            dark
              ? "bg-white/10 text-navy-100/60 border-white/10"
              : "bg-white text-gray-400 border-gray-200"
          )}
        >
          {url}
        </div>
      </div>
      {children}
    </div>
  )
}
