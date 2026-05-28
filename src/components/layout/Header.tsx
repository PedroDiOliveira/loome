import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/shared/Logo"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <Logo size={28} />
          <span className="text-xl font-bold text-gray-950 tracking-tight">Loome</span>
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="#cases"
            className={cn(
              "text-sm font-medium transition-colors",
              scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-700 hover:text-gray-900"
            )}
          >
            Cases
          </a>
          <a
            href="#contato"
            className={cn(
              "text-sm font-medium transition-colors",
              scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-700 hover:text-gray-900"
            )}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
