import { Fragment } from "react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ProcessStep } from "@/components/shared/ProcessStep"
import { processSteps } from "@/data/process"

export function Process() {
  return (
    <SectionWrapper id="processo">
      <SectionHeading
        title="Como funciona"
        subtitle="Do primeiro contato ao site no ar, em 5 passos simples."
      />

      {/* Desktop: horizontal */}
      <div className="hidden lg:flex items-start justify-between">
        {processSteps.map((step, i) => (
          <Fragment key={step.id}>
            <ProcessStep step={step} isLast={i === processSteps.length - 1} />
            {i < processSteps.length - 1 && (
              <div className="h-px bg-gray-300 flex-1 mt-6 mx-2" />
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="lg:hidden relative">
        {processSteps.map((step, i) => (
          <ProcessStep
            key={step.id}
            step={step}
            isLast={i === processSteps.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
