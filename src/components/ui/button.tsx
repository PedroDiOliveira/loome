import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variant === "default" && "bg-navy-600 text-white hover:bg-navy-700",
          variant === "outline" && "border border-navy-600 text-navy-600 hover:bg-navy-50",
          variant === "ghost" && "hover:bg-gray-100 text-gray-700",
          size === "default" && "h-11 px-6 py-2",
          size === "sm" && "h-9 px-4 text-xs",
          size === "lg" && "h-13 px-8 text-base",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
