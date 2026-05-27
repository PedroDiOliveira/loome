import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CaseCard, CaseCardPlaceholder } from "@/components/shared/CaseCard"
import { cases } from "@/data/cases"

export function Cases() {
  return (
    <SectionWrapper background="white" id="cases">
      <SectionHeading
        title="Cases"
        subtitle="Resultados reais de clínicas que confiaram no nosso trabalho."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.length > 0 ? (
          cases.map((c) => <CaseCard key={c.id} caseStudy={c} />)
        ) : (
          <CaseCardPlaceholder />
        )}
      </div>
    </SectionWrapper>
  )
}
