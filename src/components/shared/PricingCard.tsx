import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { PricingPlan } from "@/data/pricing"

interface PricingCardProps {
  plan: PricingPlan
  phoneNumber: string
}

export function PricingCard({ plan, phoneNumber }: PricingCardProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`

  return (
    <div
      className={cn(
        "bg-white rounded-xl p-8 relative flex flex-col",
        plan.highlighted
          ? "border-2 border-navy-600 shadow-lg md:order-none order-first"
          : "border border-gray-200"
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-navy-600 text-white text-xs font-medium px-4 py-1.5 rounded-full">
          Mais popular
        </span>
      )}

      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>

      <div className="mt-4">
        <span className="text-4xl font-bold text-gray-950">{plan.price}</span>
      </div>

      <p className="text-sm text-gray-600 mt-3">{plan.description}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
            <svg
              className="w-5 h-5 text-navy-500 shrink-0 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 block">
        <Button
          variant={plan.highlighted ? "default" : "outline"}
          className="w-full py-3 cursor-pointer"
        >
          {plan.ctaText}
        </Button>
      </a>
    </div>
  )
}
