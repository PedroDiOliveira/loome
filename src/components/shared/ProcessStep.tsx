import type { ProcessStepData } from "@/data/process"

interface ProcessStepProps {
  step: ProcessStepData
  isLast: boolean
}

export function ProcessStep({ step, isLast }: ProcessStepProps) {
  return (
    <div className="flex gap-4 lg:gap-0 lg:flex-col lg:items-center lg:text-center relative">
      {/* Mobile: vertical line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-200 lg:hidden" />
      )}

      <div className="w-12 h-12 rounded-full bg-navy-600 text-white flex items-center justify-center font-bold text-sm shrink-0 relative z-10">
        {step.stepNumber}
      </div>

      <div className="pb-10 lg:pb-0 lg:mt-4">
        <h3 className="font-semibold text-gray-900">{step.title}</h3>
        <p className="text-sm text-gray-600 mt-1 max-w-[200px] lg:mx-auto">
          {step.description}
        </p>
      </div>
    </div>
  )
}
