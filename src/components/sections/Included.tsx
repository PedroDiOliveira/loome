import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FeatureItem } from "@/components/shared/FeatureItem"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"
import { includedItems } from "@/data/included"
import { m, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

const stats = [
  { value: 10, suffix: " dias", label: "prazo máximo de entrega" },
  { value: 1, suffix: " ano", label: "de hospedagem inclusa" },
  { value: 100, suffix: "%", label: "sob medida, sem templates" },
]

export function Included() {
  return (
    <SectionWrapper id="incluido">
      <SectionHeading
        title="O que está incluído"
        subtitle="Tudo que sua clínica precisa para ter presença profissional na internet."
      />

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14 text-center"
      >
        {stats.map((stat) => (
          <m.div key={stat.label} variants={fadeUp}>
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950"
            />
            <p className="text-xs md:text-sm text-gray-600 mt-1.5">{stat.label}</p>
          </m.div>
        ))}
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {includedItems.map((item) => (
          <m.div key={item.id} variants={fadeUp}>
            <FeatureItem item={item} />
          </m.div>
        ))}
      </m.div>
    </SectionWrapper>
  )
}
