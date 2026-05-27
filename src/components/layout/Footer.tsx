export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Loome</span>
            <p className="text-sm text-gray-500 mt-1">Pedro Oliveira</p>
            <p className="text-xs text-gray-400 mt-1">CNPJ: 00.000.000/0001-00</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:contato@loome.com.br"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              contato@loome.com.br
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
