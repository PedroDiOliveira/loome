import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PricingCard } from "@/components/shared/PricingCard"
import { plans } from "@/data/pricing"

const WHATSAPP_NUMBER = "5561999023060"

export function Pricing() {
  return (
    <SectionWrapper background="white" id="investimento">
      <SectionHeading
        title="Investimento"
        subtitle="Planos pensados para diferentes momentos da sua clínica."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} phoneNumber={WHATSAPP_NUMBER} />
        ))}
      </div>
    </SectionWrapper>
  )
}
