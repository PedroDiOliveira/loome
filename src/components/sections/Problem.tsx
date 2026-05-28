import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { AnimatedItem } from "@/components/shared/AnimatedItem"

export function Problem() {
  return (
    <SectionWrapper background="white">
      <div className="max-w-3xl mx-auto">
        <AnimatedItem direction="left">
          <blockquote className="border-l-4 border-navy-200 pl-6 md:pl-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Sua clínica investe no Instagram, mas o paciente cai no perfil e some. Sem uma página
              própria, você depende da rede social pra captar — e perde gente todo dia.
            </p>
          </blockquote>
        </AnimatedItem>
      </div>
    </SectionWrapper>
  )
}
