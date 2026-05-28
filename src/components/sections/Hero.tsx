import { Button } from "@/components/ui/button"
import desktopImg from "@/assets/case-alia-ortodontia-desktop.webp"
import mobileImg from "@/assets/case-alia-ortodontia-mobile.webp"

const WHATSAPP_URL = `https://wa.me/5561999023060?text=${encodeURIComponent("Olá! Vi o site da Loome e tenho interesse em um site para minha clínica.")}`

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

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 leading-[1.1]"
              style={{ animation: "hero-fade-up 0.6s ease-out both" }}
            >
              Páginas que transformam visitas em pacientes agendados
            </h1>
            <p
              className="text-lg md:text-xl text-gray-600 mt-6 max-w-lg mx-auto lg:mx-0"
              style={{ animation: "hero-fade-up 0.6s ease-out 0.15s both" }}
            >
              Sites rápidos e otimizados para clínicas odontológicas de Brasília. Entrega em 5 a 10 dias.
            </p>
            <div
              className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-3"
              style={{ animation: "hero-fade-up 0.6s ease-out 0.28s both" }}
            >
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

          {/* Device mockups */}
          <div
            className="flex-1 w-full max-w-md lg:max-w-none"
            style={{ animation: "hero-fade-up 0.7s ease-out 0.2s both" }}
          >
            <div className="relative pb-16 pr-12">

              {/* Desktop — browser chrome + screenshot real */}
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="ml-2 flex-1 max-w-[220px] bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 border border-gray-200 truncate">
                    aliaortodontia.com.br
                  </div>
                </div>
                {/* Real screenshot */}
                <img
                  src={desktopImg}
                  alt="Exemplo de site para clínica odontológica — desktop"
                  className="w-full block"
                  loading="eager"
                />
              </div>

              {/* Mobile — screenshot real com chrome nativo visível */}
              <div className="absolute bottom-0 right-0 w-[108px] md:w-[128px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src={mobileImg}
                  alt="Exemplo de site para clínica odontológica — mobile"
                  className="w-full block"
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
