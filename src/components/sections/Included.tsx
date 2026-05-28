import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FeatureItem } from "@/components/shared/FeatureItem"
import { AnimatedItem } from "@/components/shared/AnimatedItem"
import { includedItems } from "@/data/included"

export function Included() {
  return (
    <SectionWrapper id="incluido">
      <SectionHeading
        title="O que está incluído"
        subtitle="Tudo que sua clínica precisa para ter presença profissional na internet."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {includedItems.map((item, index) => (
          <AnimatedItem key={item.id} delay={index * 80}>
            <FeatureItem item={item} index={index} />
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  )
}
