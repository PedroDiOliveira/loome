import type { Variants } from "motion/react"
import type { ProcessStepData } from "@/data/process"
import { m, fadeUp, springSnappy } from "@/lib/motion"

const circleVariant: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: springSnappy },
}

interface ProcessStepProps {
  step: ProcessStepData
}

export function ProcessStep({ step }: ProcessStepProps) {
  return (
    <div className="flex gap-4 lg:gap-0 lg:flex-col lg:items-center lg:text-center relative">
      <m.div
        variants={circleVariant}
        className="w-12 h-12 rounded-full bg-navy-600 text-white flex items-center justify-center font-bold text-sm shrink-0 relative z-10 ring-4 ring-navy-600/10"
      >
        {step.stepNumber}
      </m.div>

      <m.div variants={fadeUp} className="pb-10 lg:pb-0 lg:mt-4">
        <h3 className="font-semibold text-gray-900">{step.title}</h3>
        <p className="text-sm text-gray-600 mt-1 max-w-[200px] lg:mx-auto">
          {step.description}
        </p>
      </m.div>
    </div>
  )
}
