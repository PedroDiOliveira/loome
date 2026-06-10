import { Check, X } from "lucide-react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { WordReveal } from "@/components/shared/WordReveal"
import { m, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

const withoutSite = [
  "Perfil que o paciente esquece",
  "Dependência do algoritmo",
  "Invisível no Google",
]

const withSite = [
  "Endereço profissional próprio",
  "Encontrada no Google",
  "Agendamento em um clique",
]

export function Problem() {
  return (
    <SectionWrapper background="white">
      <div className="max-w-3xl mx-auto text-center">
        <WordReveal
          as="h2"
          text="Sua clínica investe no Instagram, mas o paciente cai no perfil e some."
          accentWord="some"
          accentClassName="text-azure-500"
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 leading-tight"
        />
        <p className="text-lg text-gray-600 mt-4">
          Sem uma página própria, você depende da rede social pra captar — e perde gente todo dia.
        </p>
      </div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="grid md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto"
      >
        {/* Só Instagram */}
        <m.div variants={fadeUp} className="rounded-xl border border-gray-200 bg-gray-50 p-7">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Só Instagram
          </p>
          <m.ul variants={staggerContainer(0.08)} className="mt-5 space-y-3.5">
            {withoutSite.map((item) => (
              <m.li key={item} variants={fadeUp} className="flex items-start gap-3 text-gray-500">
                <X className="w-5 h-5 mt-0.5 shrink-0 text-gray-400" aria-hidden="true" />
                {item}
              </m.li>
            ))}
          </m.ul>
        </m.div>

        {/* Com site próprio */}
        <m.div variants={fadeUp} className="gradient-border-card rounded-xl shadow-card p-7">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-600">
            Com site próprio
          </p>
          <m.ul variants={staggerContainer(0.08)} className="mt-5 space-y-3.5">
            {withSite.map((item) => (
              <m.li key={item} variants={fadeUp} className="flex items-start gap-3 text-gray-800">
                <Check className="w-5 h-5 mt-0.5 shrink-0 text-azure-500" aria-hidden="true" />
                {item}
              </m.li>
            ))}
          </m.ul>
        </m.div>
      </m.div>
    </SectionWrapper>
  )
}
