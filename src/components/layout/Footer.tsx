import { Logo } from "@/components/shared/Logo"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={28} />
              <span className="text-xl font-bold text-gray-900 tracking-tight">Loome</span>
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/pedrodioliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/PedroDiOliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:santanadioliveira@gmail.com"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              santanadioliveira@gmail.com
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 text-center">
          &copy; {new Date().getFullYear()} Loome. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
