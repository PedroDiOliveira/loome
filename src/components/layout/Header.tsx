import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { m, springSoft } from "@/lib/motion"
import { Logo } from "@/components/shared/Logo"
import { useActiveSection } from "@/hooks/useActiveSection"

const NAV_LINKS = [
  { id: "cases", label: "Cases" },
  { id: "processo", label: "Processo" },
  { id: "faq", label: "FAQ" },
] as const

const NAV_IDS = NAV_LINKS.map((link) => link.id)

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(NAV_IDS)

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
          <span
            className={cn(
              "text-xl font-bold tracking-tight transition-colors duration-300",
              scrolled ? "text-gray-950" : "text-white"
            )}
          >
            Loome
          </span>
        </a>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "relative text-sm font-medium transition-colors hidden sm:block",
                scrolled
                  ? active === link.id
                    ? "text-gray-950"
                    : "text-gray-600 hover:text-gray-900"
                  : active === link.id
                    ? "text-white"
                    : "text-navy-100/70 hover:text-white"
              )}
            >
              {link.label}
              <m.span
                aria-hidden="true"
                initial={false}
                animate={{
                  opacity: active === link.id ? 1 : 0,
                  scaleX: active === link.id ? 1 : 0.4,
                }}
                transition={springSoft}
                className="absolute -bottom-1.5 left-0 right-0 h-px bg-current origin-left"
              />
            </a>
          ))}
          <a
            href="#contato"
            className={cn(
              "text-sm font-medium rounded-full border px-4 py-1.5 transition-colors",
              scrolled
                ? "border-navy-200 text-navy-700 hover:bg-navy-50"
                : "border-white/25 text-white hover:bg-white/10"
            )}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
