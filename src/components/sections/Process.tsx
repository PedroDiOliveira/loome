import { useRef } from "react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { ProcessStep } from "@/components/shared/ProcessStep"
import { processSteps } from "@/data/process"
import {
  m,
  springSoft,
  staggerContainer,
  useReducedMotion,
  useScroll,
  useSpring,
  viewportOnce,
} from "@/lib/motion"

export function Process() {
  const desktopRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress: desktopProgress } = useScroll({
    target: desktopRef,
    offset: ["start 0.8", "end 0.55"],
  })
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
    offset: ["start 0.8", "end 0.55"],
  })
  const desktopLine = useSpring(desktopProgress, springSoft)
  const mobileLine = useSpring(mobileProgress, springSoft)

  return (
    <SectionWrapper id="processo">
      <SectionHeading
        title="Como funciona"
        subtitle="Do primeiro contato ao site no ar, em 5 passos simples."
      />

      {/* Desktop: horizontal com linha desenhada pelo scroll */}
      <div ref={desktopRef} className="hidden lg:block relative">
        <div className="absolute top-5.75 left-[10%] right-[10%] h-0.5 rounded-full bg-gray-200" aria-hidden="true" />
        <m.div
          aria-hidden="true"
          style={reduced ? undefined : { scaleX: desktopLine }}
          className="absolute top-5.75 left-[10%] right-[10%] h-0.5 rounded-full bg-azure-500 origin-left"
        />
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-5 gap-4"
        >
          {processSteps.map((step) => (
            <m.div key={step.id} variants={{ hidden: {}, visible: {} }}>
              <ProcessStep step={step} />
            </m.div>
          ))}
        </m.div>
      </div>

      {/* Mobile: vertical com linha desenhada pelo scroll */}
      <div ref={mobileRef} className="lg:hidden relative">
        <div className="absolute left-5.75 top-6 bottom-24 w-0.5 rounded-full bg-gray-200" aria-hidden="true" />
        <m.div
          aria-hidden="true"
          style={reduced ? undefined : { scaleY: mobileLine }}
          className="absolute left-5.75 top-6 bottom-24 w-0.5 rounded-full bg-azure-500 origin-top"
        />
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ ...viewportOnce, amount: 0.1 }}
          variants={staggerContainer(0.12)}
        >
          {processSteps.map((step) => (
            <m.div key={step.id} variants={{ hidden: {}, visible: {} }}>
              <ProcessStep step={step} />
            </m.div>
          ))}
        </m.div>
      </div>
    </SectionWrapper>
  )
}
