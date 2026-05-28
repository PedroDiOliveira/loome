import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CaseShowcase } from "@/components/shared/CaseShowcase"
import { AnimatedItem } from "@/components/shared/AnimatedItem"
import { cases } from "@/data/cases"

export function Cases() {
  return (
    <SectionWrapper background="white" id="cases">
      <SectionHeading
        title="Cases"
        subtitle="Resultados reais de clínicas que confiaram no nosso trabalho."
      />

      {cases.length > 0 ? (
        <div className="flex flex-col gap-20 md:gap-28">
          {cases.map((c, i) => (
            <AnimatedItem key={c.id}>
              <CaseShowcase caseStudy={c} reverse={i % 2 === 1} />
            </AnimatedItem>
          ))}
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
          <p className="text-xl text-gray-400 font-medium">Em breve</p>
          <p className="text-sm text-gray-400 mt-2">
            Estamos preparando nossos primeiros cases.
          </p>
        </div>
      )}
    </SectionWrapper>
  )
}
