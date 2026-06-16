import { useRef } from "react"
import { Check } from "lucide-react"
import {
  m,
  springSnappy,
  springSoft,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "@/lib/motion"
import { BrowserFrame } from "@/components/shared/BrowserFrame"
import { WordReveal } from "@/components/shared/WordReveal"
import desktopImg from "@/assets/case-alia-ortodontia-desktop.webp"
import mobileImg from "@/assets/case-alia-ortodontia-mobile.webp"

const WHATSAPP_URL = `https://wa.me/5561999023060?text=${encodeURIComponent("Olá! Vi o site da Loome e tenho interesse em um site para minha clínica.")}`

const proofItems = [
  "Entrega em 5–10 dias",
  "100% sob medida",
  "Atendimento em todo o Brasil",
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.5], [12, 0]), springSoft)
  const mockupY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -24]), springSoft)

  return (
    <section
      ref={sectionRef}
      className="min-h-[92vh] flex items-center bg-surface-dark noise pt-16 relative overflow-hidden"
    >
      {/* Glow radial no topo */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.28 0.08 245 / 60%), transparent)",
        }}
      />

      {/* Blobs aurora */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-azure-500/15 blur-3xl animate-aurora"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-navy-500/20 blur-3xl animate-aurora [animation-duration:22s]"
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 text-white opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <WordReveal
              as="h1"
              text="Páginas que transformam visitas em pacientes agendados"
              accentWord="agendados"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            />
            <m.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.35 }}
              className="text-lg md:text-xl text-navy-100/70 mt-6 max-w-lg mx-auto lg:mx-0"
            >
              Sites rápidos e otimizados para clínicas odontológicas de todo o Brasil. Entrega em 5 a 10 dias.
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <m.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={springSnappy}
                className="inline-flex items-center justify-center rounded-lg bg-white text-navy-950 font-semibold text-base px-8 py-4 hover:shadow-glow-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark"
              >
                Quero uma proposta
              </m.a>
              <a
                href="mailto:santanadioliveira@gmail.com?subject=Quero%20um%20site%20para%20minha%20cl%C3%ADnica"
                className="text-sm text-navy-100/60 hover:text-white transition-colors underline underline-offset-4 self-center"
              >
                ou mande um e-mail
              </a>
            </m.div>

            {/* Prova social honesta */}
            <m.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2"
            >
              {proofItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-navy-100/70">
                  <Check className="w-4 h-4 text-azure-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </m.ul>
          </div>

          {/* Device mockups com tilt de perspectiva */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.3 }}
            className="flex-1 w-full max-w-md lg:max-w-none"
          >
            <m.div
              style={reduced ? undefined : { rotateX, y: mockupY, transformPerspective: 1200 }}
              className="relative pb-16 pr-12"
            >
              <BrowserFrame url="aliaortodontia.com.br" theme="dark">
                <img
                  src={desktopImg}
                  alt="Exemplo de site para clínica odontológica — desktop"
                  className="w-full block"
                  loading="eager"
                />
              </BrowserFrame>

              <div className="absolute bottom-0 right-0 w-[108px] md:w-[128px] rounded-2xl overflow-hidden border border-white/10 shadow-glow-sm">
                <img
                  src={mobileImg}
                  alt="Exemplo de site para clínica odontológica — mobile"
                  className="w-full block"
                  loading="eager"
                />
              </div>
            </m.div>
          </m.div>

        </div>
      </div>
    </section>
  )
}
