import { Button } from "@/components/ui/button"

const WHATSAPP_URL = `https://wa.me/5561999999999?text=${encodeURIComponent("Olá! Vi o site da Loome e tenho interesse em um site para minha clínica.")}`

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-gray-50 pt-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 leading-[1.1]">
              Páginas que transformam visitas em pacientes agendados
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-lg mx-auto lg:mx-0">
              Sites rápidos e otimizados para clínicas odontológicas de Brasília. Entrega em 7 a 14 dias.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-8 py-4 h-auto">
                  Quero uma proposta
                </Button>
              </a>
              <a
                href="#contato"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors underline underline-offset-4 self-center"
              >
                ou deixe seus dados
              </a>
            </div>
          </div>

          {/* Mockup placeholder */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Desktop mockup */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="ml-3 h-5 bg-gray-100 rounded flex-1 max-w-[200px]" />
                </div>
                <div className="aspect-[16/10] bg-gradient-to-br from-navy-50 to-gray-50 flex items-center justify-center p-8">
                  <div className="space-y-3 w-full max-w-[280px]">
                    <div className="h-4 bg-navy-100 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-5/6" />
                    <div className="h-8 bg-navy-200 rounded-lg w-1/2 mt-4" />
                  </div>
                </div>
              </div>

              {/* Mobile mockup overlapping */}
              <div className="absolute -bottom-4 -right-4 md:right-8 w-24 md:w-32 bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
                <div className="aspect-[9/16] bg-gradient-to-br from-navy-50 to-gray-50 flex items-center justify-center p-3">
                  <div className="space-y-2 w-full">
                    <div className="h-2 bg-navy-100 rounded w-3/4" />
                    <div className="h-1.5 bg-gray-200 rounded w-full" />
                    <div className="h-1.5 bg-gray-200 rounded w-5/6" />
                    <div className="h-4 bg-navy-200 rounded w-1/2 mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
